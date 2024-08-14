

import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet, Text, Image, View, Dimensions, SafeAreaView,
    TouchableOpacity, Alert, PermissionsAndroid, Platform,
} from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import backArrow from "../assets/images/backArrow.png";
import cameraTwo from "../assets/images/cameraTwo.png";
import CustomButton from '../components/CustomButton';
import COLORS from '../const/colors';
import { CheckPermission } from '../const/AppPermissions';
import { PERMISSIONS } from 'react-native-permissions';


const UploadImages = () => {
    const navigationRoute = useNavigation();

    // const requestPermissions = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.requestMultiple([
    //             PermissionsAndroid.PERMISSIONS.CAMERA,
    //             PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    //         ]);

    //         if (
    //             granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
    //             granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED
    //         ) {
    //             console.log('You can use the camera and record audio');
    //         } else {
    //             console.log("User Denied");
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };

    // useEffect(() => {
    //     if (Platform.OS === 'android') {
    //         requestPermissions();
    //     }
    // }, []);

    const PermissionRequest = async () => {
        if (Platform.OS === 'android') {
            await CheckPermission(PERMISSIONS.ANDROID.CAMERA);
            await CheckPermission(PERMISSIONS.ANDROID.RECORD_AUDIO);
        } else {
            await CheckPermission(PERMISSIONS.IOS.CAMERA);
        }
    }

    useEffect(() => {
        PermissionRequest();
    }, []);

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("HowToUpload")}>
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.nameWrapper}>
                    <Text style={styles.nameText}>Upload from Camera</Text>
                </View>
            </View>

            <View>
                {cameraPermission === true ?
                    (
                        <>
                            {capturedPhoto ? (
                                <View style={[styles.itemsContainer, { position: "relative" }]}>
                                    <View style={styles.itemWrapperTwo}>
                                        <Image
                                            source={{ uri: capturedPhoto }}
                                            style={styles.capturedImage}
                                            // resizeMode="contain"
                                            resizeMode='cover'
                                        />
                                        <TouchableOpacity onPress={() => deletePhoto()} style={{ position: "absolute", top: 15, right: 30 }}>
                                            <Text style={{ fontSize: 30, color: "white", fontWeight: '700' }} > X</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ) : (
                                <View style={styles.itemsContainer}>
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

            <View>
                <View style={[styles.lowerWrapper]}>
                    <View style={[styles.textWrapper]}>
                        <Text style={[styles.contantText]}>Start with the front, and add additional photos for the best tagging results 🫡</Text>
                    </View>
                </View>
                <CustomButton
                    onPress={() => navigationRoute.navigate("AddtoCloset")}
                    buttonText="Upload Pictures"
                    buttonStyle={[styles.buttonWrapper, capturedPhoto ? styles.activeColorTwo : styles.inActiveColor, styles.dynamicButtonStyle]}
                    textStyle={styles.buttonText}
                />
                <CustomButton
                    onPress={takePhoto}
                    buttonText="Take Photo"
                    imageSource={cameraTwo}
                    buttonStyle={[styles.buttonWrapper, styles.activeColor, styles.dynamicButtonStyle]}
                    textStyle={styles.buttonText}
                    imageStyle={styles.dynamicImageStyle}
                />

            </View>
        </SafeAreaView>
    );
};

export default UploadImages;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { backgroundColor: "white", flex: 1, width: width, height: height },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08, position: 'relative'
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.08 },
    backArrow: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    itemsContainer: {
        width: width, height: height * 0.6, justifyContent: "center", alignItems: "center",
    },
    itemWrapper: { width: width * 0.95, height: height * 0.58, backgroundColor: "#CACACA", justifyContent: "center", alignItems: "center" },
    itemWrapperTwo: { width: width * 0.95, height: height * 0.58, backgroundColor: "#CACACA", justifyContent: "center", alignItems: "center" },
    plusText: { fontSize: 80, fontWeight: '500', textAlign: "center" },
    cameraText: { fontSize: 20, fontWeight: '500', marginHorizontal: width * 0.2, textAlign: "center" },
    lowerWrapper: { justifyContent: "center" },
    textWrapper: { marginHorizontal: width * 0.1, paddingVertical: 5 },
    buttonWrapper: {
        flexDirection: "row",
        marginVertical: width * 0.04,
        marginHorizontal: width * 0.1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 4,
        borderWidth: 1,
    },
    dynamicImageStyle: { width: 40, height: 40, },
    dynamicButtonStyle: { marginHorizontal: width * 0.12, },
    activeColor: { backgroundColor: "white", paddingVertical: 5 },
    activeColorTwo: { backgroundColor: COLORS.Secondary, paddingVertical: 13 },
    inActiveColor: { backgroundColor: "#CACACA", color: COLORS.ShadowDarkest, paddingVertical: 13 },
    plus: { width: 35, height: 35, marginRight: 15 },
    buttonText: { fontSize: 16, fontWeight: '500', color: COLORS.ShadowDarkest },
    contantText: { fontSize: 16, fontWeight: '500', color: COLORS.ShadowDarkest, textAlign: "center" },
    capturedImage: { width: width * 0.95, height: height * 0.58 }
});

