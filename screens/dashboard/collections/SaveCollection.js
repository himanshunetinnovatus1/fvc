import React, { useState, useRef, useEffect } from 'react';
import {
    Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity,
    ScrollView, Image, View
} from 'react-native';
import cameraImage from '../../../assets/images/camera.png';
import upload from '../../../assets/images/upload.png';
import { useNavigation } from '@react-navigation/native';
import PageStyle from '../../../const/PageStyle';
import COLORS from '../../../const/colors';
import backArrow from "../../../assets/images/backArrow.png"
import sloth from "../../../assets/images/sloth.png"
import orangeEdit from "../../../assets/images/orangeEdit.png"
import EditPieceModal from '../../../components/modals/EditPieceModal';
import { Camera, useCameraDevices, useCameraDevice } from 'react-native-vision-camera';


const SaveCollection = () => {
    const navigationRoute = useNavigation();
    const [uploadedImage, setUploadedImage] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState('');
    const [inputValue, setInputValue] = useState("Name the Collection")
    const handleEditPress = (field) => {
        setCurrentField(field);
        setModalVisible(true);
    };

    const handleSave = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };


    const [cameraPermission, setCameraPermission] = useState(null);
    const device = useCameraDevice('back');
    const camera = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    const checkCameraPermission = async () => {
        const status = await Camera.getCameraPermissionStatus();
        console.log('Camera permission status:', status);

        if (status === 'granted') {
            setCameraPermission(true);
        } else if (status === 'notDetermined') {
            const permission = await Camera.requestCameraPermission();
            setCameraPermission(permission === 'granted');
        } else {
            setCameraPermission(false);
        }
    };
    useEffect(() => {
        checkCameraPermission();
    }, []);

    const takePhoto = async () => {
        if (capturedPhoto) {
            return Alert.alert("Delete the Captured Image First");
        }

        try {
            if (!camera.current) {
                console.error('Camera reference not available.', camera.current);
                return;
            }

            const photo = await camera.current.takePhoto();
            console.log(photo.path);

            if (photo) {
                setCapturedPhoto(`file://${photo.path}`);
            } else {
                console.error('Photo captured is undefined or empty.');
            }
        } catch (error) {
            console.error('Error capturing photo:', error);
        }
    };

    const onCameraReady = (ref) => {
        camera.current = ref;
    };

    const deletePhoto = () => {
        setCapturedPhoto(null);
    };
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("MainDashboard")}>
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.nameWrapper}>
                    <Text style={[styles.nameText, PageStyle.text]}>Create Collection</Text>
                </View>
            </View>

            <View style={styles.centeredContainer}>
                <View style={styles.innerDse}>
                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{inputValue}</Text>
                    <TouchableOpacity onPress={() => handleEditPress('Collection Name')} style={{ alignSelf: "center" }}>
                        <Image
                            source={orangeEdit}
                            style={styles.orangeEdit}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                {uploadedImage === true ? (
                    <View style={styles.uploadPhotoTwo}>
                        <Image
                            source={sloth}
                            style={styles.sloth}
                        />
                        <TouchableOpacity style={styles.crossBTNWrapper} onPress={() => setUploadedImage(false)}>
                            <Text style={styles.crossBTN}>X</Text>
                        </TouchableOpacity>
                    </View>
                ) : (

                    <View style={styles.uploadPhoto}>
                        <TouchableOpacity style={styles.uploadMainWrapper} onPress={() => setUploadedImage(true)}>
                            <View style={styles.cameraWrppar}>
                                <Image
                                    source={cameraImage}
                                    style={styles.camera}
                                />
                            </View>
                            <View>
                                <Text style={[styles.uploadText, PageStyle.text]}>Upload From</Text>
                                <Text style={[styles.uploadText, PageStyle.text]}> Camera</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.uploadMainWrapper} onPress={() => setUploadedImage(true)}>
                            <View style={styles.uploadWrppar}>
                                <Image
                                    source={upload}
                                    style={styles.upload}
                                />
                            </View>
                            <View>
                                <Text style={[styles.cameraText, PageStyle.text]}>Upload From</Text>
                                <Text style={[styles.cameraText, PageStyle.text]}>Gallery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}


                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={{ marginTop: 40 }} onPress={() => navigationRoute.navigate("MainDashboard")}>
                        <Text style={[uploadedImage === true ? styles.activeBTN : styles.AddImageBTN, PageStyle.text]}> Add Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 25 }} onPress={() => navigationRoute.navigate("MainDashboard")}>
                        <Text style={[styles.skipBTN, PageStyle.text]}>Skip</Text>
                    </TouchableOpacity>

                </View>


            </View>

            <EditPieceModal
                modalVisible={modalVisible}
                currentField={currentField}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSave={handleSave}
                handleCancel={handleCancel}
            />


        </SafeAreaView >
    );
};

export default SaveCollection;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08, position: 'relative'
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.08, },
    backArrow: { width: 20, height: 20 },
    innerDse: { flexDirection: "row", alignContent: "center", justifyContent: "center", marginBottom: width * 0.05 },
    orangeEdit: { width: 20, height: 20, marginLeft: 10, },
    subDescriptionTextTwo: { fontSize: 20, fontWeight: "700", color: COLORS.ShadowDarkest, },

    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    uploadPhoto: { flexDirection: "row", justifyContent: "center", alignItems: "center", height: height * 0.355, borderWidth: 2, paddingHorizontal: width * 0.08, },
    uploadPhotoTwo: { flexDirection: "row", justifyContent: "center", alignItems: "center", height: height * 0.355, position: "relative" },
    uploadMainWrapper: { height: height * 0.2, width: width * 0.3 },
    cameraWrppar: { borderRightWidth: 1, borderRightColor: COLORS.white, paddingRight: 40, height: height * 0.16, paddingTop: 20 },
    camera: { width: 60, height: 60, marginLeft: 10 },
    uploadText: { textAlign: "center", marginRight: 20 },
    uploadWrppar: { borderLeftWidth: 1, borderRightColor: COLORS.white, paddingLeft: 40, height: height * 0.16, paddingTop: 20 },
    upload: { width: 60, height: 60 },
    cameraText: { textAlign: "center", marginLeft: 20 },
    arrow: { height: 50, width: 20 },
    centeredContainer: { flex: 1, alignItems: 'center', justifyContent: "center", width: width, height: height * 0.1 },

    AddImageBTN: {
        paddingHorizontal: 30, paddingVertical: 10, borderRadius: 25, fontSize: 18,
        backgroundColor: COLORS.Shadow, color: COLORS.white, fontWeight: '700'
    },
    activeBTN: {
        paddingHorizontal: 30, paddingVertical: 10, borderRadius: 25, fontSize: 18,
        backgroundColor: COLORS.ShadowDarkest, color: COLORS.white, fontWeight: '700'
    },

    skipBTN: {
        paddingHorizontal: 30, paddingVertical: 10, borderRadius: 15, fontSize: 18,
        color: COLORS.Shadow, fontWeight: '700', textAlign: "center"
    },
    sloth: { width: width * 0.76, height: width * 0.72 },
    crossBTNWrapper: { position: "absolute", top: 15, right: 15 },
    crossBTN: { fontSize: 25, fontWeight: "700", },

});
