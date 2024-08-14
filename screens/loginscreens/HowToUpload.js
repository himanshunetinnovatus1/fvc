

import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, Modal, Alert, PermissionsAndroid, Platform,

} from 'react-native';
import PageStyle from '../../const/PageStyle';
import Loader from '../../components/Loader';
import COLORS from '../../const/colors';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import backArrow from '../../assets/images/backArrow.png';
import Button from '../../components/Button';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import Delete from "../../assets/images/delete.png";
import { CheckPermission } from '../../const/AppPermissions';
import { PERMISSIONS } from 'react-native-permissions';
import ThemeStyle from '../../const/ThemeStyle';

const { height: screenHeight, width } = Dimensions.get('window');

const HowToUpload = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [cameraModal, setCameraModal] = useState(false);

    const [cameraPermission, setCameraPermission] = useState(null);
    const device = useCameraDevice('back');
    const camera = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    const images = [
        require('../../assets/extra/IMG_1661.png'),
        require('../../assets/extra/IMG_2069.png'),
        require('../../assets/extra/IMG_2517.png'),
        require('../../assets/extra/Carousel.png')
    ];

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setModalVisible(true);
    //     }, 3000);
    //     return () => clearTimeout(timer);
    // }, []);

    const handleOkPress = () => {
        setModalVisible(false);
        setModalVisibleTwo(true);
    };

    const PermissionRequest = async () => {
        if (Platform.OS === 'android') {
            await CheckPermission(PERMISSIONS.ANDROID.CAMERA);
        } else {
            await CheckPermission(PERMISSIONS.IOS.CAMERA);
        }
    }

    useEffect(() => {
        PermissionRequest();
    }, []);

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

    if (cameraPermission === null) {
        return <Text>Checking camera permission...</Text>;
    }

    if (!device) {
        return <Text>No camera device available</Text>;
    }

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

    const CustomDots = ({ currentIndex }) => {
        return (
            <View style={styles.paginationBox}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            {
                                width: currentIndex === index ? 20 : 10,
                                backgroundColor: currentIndex === index ? COLORS.SecondaryDarkest : COLORS.TextTertiart,
                            },
                        ]}
                    />
                ))}
            </View>
        );
    };

    const handleNavigate = () => {
        setCameraModal(false);
        navigation.navigate("AddtoCloset")
    }

    return (
        <>
            <Loader visible={loading} />
            <View style={[styles.mainContainer, ThemeStyle.iosClass]}>
                <View style={styles.mainWrapper}>
                    <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigation.navigate("Permissions")}>
                        <Image
                            source={backArrow}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.nameWrapper}>
                        <Text style={[styles.nameText, PageStyle.text]}>How to Upload</Text>
                    </View>
                </View>

                <View style={{ flex: 1, position: "relative", alignItems: "center" }}>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={screenHeight * 0.53}
                        currentImageEmitter={handleImageChange}
                        paginationBoxVerticalPadding={10}
                        parentWidth={screenHeight * 0.45}
                        ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5, alignItems: "center" }}
                        renderDots={() => <CustomDots currentIndex={currentImageIndex} />}
                    />
                    {currentImageIndex === 0 && (
                        <View style={styles.indexTextWrapper}>
                            <Text style={styles.indexTextOne}>Clear, even background </Text>
                            <Text style={styles.indexTextTwo}>Neatly lay out the garment with a clean, even background for better results. </Text>
                        </View>
                    )}
                    {currentImageIndex === 1 && (
                        <View style={styles.indexTextWrapper}>
                            <Text style={styles.indexTextOne}>Keep pieces in focus</Text>
                            <Text style={styles.indexTextTwo}>Make sure to keep your garments focused within the frame to ensure entire garment is captured.</Text>
                        </View>
                    )}
                    {currentImageIndex === 2 && (
                        <View style={styles.indexTextWrapper}>
                            <Text style={styles.indexTextOne}>Ensure Ideal Lighting</Text>
                            <Text style={styles.indexTextTwo}>Make sure to take pictures of your garments in environments where the lighting is ideal.</Text>
                        </View>
                    )}
                    {currentImageIndex === 3 && (
                        <View style={styles.indexTextWrapper}>
                            <Text style={styles.indexTextOne}>Uploading Additional Images </Text>
                            <Text style={styles.indexTextTwo}>For more detailed tagging, make sure to upload additional pictures of the tag on the back.</Text>
                        </View>
                    )}

                </View>
                <View style={[styles.btnWrapper]}>
                    <Button
                        title="Take Photo" buttonType
                        bgColor={COLORS.btnColor}
                        btnTextColor={COLORS.SecondaryLightest}
                        stylesCss={[ThemeStyle.stylesCssOne, { width: "80%" }]}
                        btnwidth="100%"
                        onPress={() => setCameraModal(true)}
                    />

                    <Button
                        title="Upload photos"
                        stylesCss={[ThemeStyle.stylesCssOne, { width: "80%" }]}
                        btnTextColor={COLORS.SecondaryDarkest}
                        btnwidth="100%"
                        onPress={() => navigation.navigate("AddtoCloset")}
                    />
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>

                        <View>
                            <Text style={styles.modalText}>“Fitted Closet” Would like to access the camera</Text>
                            <Text style={styles.modalTextOne}>This app requires access to the camera</Text>
                        </View>

                        <View style={[styles.modalButtonContainer, { borderTopWidth: 0.5, borderTopColor: COLORS.SecondaryDark }]}>
                            <TouchableOpacity style={[styles.modalButton,
                            { borderRightWidth: 0.5, borderRightColor: COLORS.SecondaryDark }]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Don't Allow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton,]} onPress={handleOkPress}>
                                <Text style={[styles.modalButtonText, { fontWeight: '700' }]}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleTwo}
                onRequestClose={() => setModalVisibleTwo(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View>
                            <Text style={styles.modalText}>“Fitted Closet” Would like to access your photos</Text>
                            <Text style={[styles.modalTextOne, { paddingHorizontal: 40 }]}>This app requires access to photo library</Text>
                        </View>
                        <View style={[styles.modalButtonContainer, { borderTopWidth: 0.5, borderTopColor: COLORS.SecondaryDark }]}>
                            <TouchableOpacity style={[styles.modalButton,
                            { borderRightWidth: 0.5, borderRightColor: COLORS.SecondaryDark }]} onPress={() => setModalVisibleTwo(false)}>
                                <Text style={styles.modalButtonText}>Don't Allow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton,]} onPress={() => { setModalVisibleTwo(false) }}>
                                <Text style={[styles.modalButtonText, { fontWeight: '700' }]}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={cameraModal}
                onRequestClose={() => setCameraModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContainerTwo,]}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10, width: "100%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Upload Piece</Text>
                            <Text style={{ fontSize: 18, fontWeight: "400" }} onPress={() => setCameraModal(false)}>X</Text>
                        </View>
                        <View style={styles.innerWrapper}>
                            {cameraPermission === true ?
                                (
                                    <>
                                        {capturedPhoto ? (
                                            <View style={[styles.itemsOne,]}>
                                                <View style={styles.itemWrapperTwo}>
                                                    <Image
                                                        source={{ uri: capturedPhoto }}
                                                        style={styles.capturedImage}
                                                        resizeMode='cover'
                                                    />
                                                    <TouchableOpacity onPress={() => deletePhoto()} style={{ position: "absolute", top: 15, right: 15 }}>
                                                        <Image
                                                            source={Delete}
                                                            style={styles.backArrow}
                                                            resizeMode='cover'
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        ) : (
                                            <View style={[styles.itemsContainer]}>
                                                <Camera
                                                    style={styles.itemWrapper}
                                                    device={device}
                                                    isActive={true}
                                                    ref={(ref) => onCameraReady(ref)}
                                                    photo={true}
                                                    video={true}
                                                />
                                            </View>
                                        )}
                                    </>
                                )
                                :
                                (
                                    <View style={[styles.itemsContainer]}>
                                        <View style={styles.itemWrapperTwo}>
                                            <Text>Camera permission not granted</Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>

                        <View >
                            {capturedPhoto === null ? (
                                <>
                                    <Button
                                        title="Take Photo" buttonType
                                        bgColor={COLORS.btnColor}
                                        btnTextColor={COLORS.SecondaryDarkest}
                                        stylesCss={[ThemeStyle.stylesCssOne, { width: 300, }]}
                                        btnwidth="100%"
                                        onPress={takePhoto}
                                    />
                                </>
                            ) : (
                                <>
                                    <Button
                                        title="Use Photo" buttonType
                                        bgColor={COLORS.btnColor}
                                        btnTextColor={COLORS.SecondaryDarkest}
                                        stylesCss={[ThemeStyle.stylesCssOne, { width: 300, marginTop: 0, }]}
                                        btnwidth="100%"
                                        onPress={handleNavigate}
                                    // onPress={() => navigation.navigate("AddtoCloset")}
                                    />
                                </>
                            )}



                            <Button
                                title="Retake Photo"
                                stylesCss={[ThemeStyle.stylesCssOne, { width: 300, marginTop: 0, }]}
                                btnTextColor={COLORS.SecondaryDarkest}
                                btnwidth="100%"
                                onPress={() => deletePhoto()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </>
    );
};



const styles = StyleSheet.create({

    mainContainer: { backgroundColor: "white", height: screenHeight,},
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, position: 'relative', marginBottom: screenHeight * 0.015,
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.06, },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: {
        color: COLORS.ShadowDarkest, fontSize: 24, fontWeight: '700', textAlign: 'center'
    },
    backArrow: { width: 23, height: 23, },
    paginationBox: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, },
    dot: { height: 10, borderRadius: 20, marginHorizontal: 3 },
    btnWrapper: { paddingHorizontal: 20, marginBottom: 60 + 20 },

    stylesCssThree: { borderWidth: 0, borderRadius: 10, width: 300, marginTop: 5, },
    indexTextWrapper: {
        position: "absolute", bottom: "15%", left: "10%", padding: 10,
        width: width * 0.8, backgroundColor: COLORS.Whitebg, borderRadius: 12
    },
    indexTextOne: { fontSize: 16, fontWeight: '600', textAlign: "left", marginBottom: 5 },
    indexTextTwo: { fontSize: 13, textAlign: "left" },
    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' },
    modalContainer: { paddingTop: 20, alignItems: 'center', backgroundColor: 'rgba(227, 228, 227, 0.95)', width: '80%', borderRadius: 20, },
    modalText: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',
        paddingHorizontal: 20, textAlign: "center"
    },
    modalTextOne: { fontSize: 15, marginBottom: 20, textAlign: 'center', textAlign: "center" },
    modalButtonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', },
    modalButton: { paddingVertical: 12, width: '50%', alignItems: 'center', },
    modalButtonText: { color: '#0d99ff', fontSize: 18, },
    modalContainerTwo: {
        width: width * 0.88, backgroundColor: COLORS.SecondaryLightest, borderRadius: 10,
        padding: 12, alignItems: 'center',
    },
    innerWrapper: { borderRadius: 10, width: "100%", backgroundColor: COLORS.OffWhite, padding: 12, },
    itemsContainer: { justifyContent: "center", alignItems: "center", },
    itemWrapper: { width: "100%", height: screenHeight * 0.5, justifyContent: "center", alignItems: "center", borderRadius: 10 },
    itemsOne: { justifyContent: "center", alignItems: "center", },
    itemWrapperTwo: {
        width: "100%", height: screenHeight * 0.5, justifyContent: "center",
        alignItems: "center", position: "relative", width: "100%"
    },
    capturedImage: { width: width * 0.75, height: screenHeight * 0.5, borderRadius: 10 },
    plusText: { fontSize: 80, fontWeight: '500', textAlign: "center" },
    cameraText: { fontSize: 20, fontWeight: '500', marginHorizontal: width * 0.2, textAlign: "center" },
});

export default HowToUpload;
