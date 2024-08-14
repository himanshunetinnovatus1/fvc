import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, SafeAreaView, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backArrow from "../assets/images/backArrow.png";
import CustomButton from '../components/CustomButton';
import COLORS from '../const/colors';
import { launchImageLibrary } from 'react-native-image-picker';

const GalleryUpload = () => {
    const navigationRoute = useNavigation();

    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const openGallery = () => {
        launchImageLibrary(
            { mediaType: 'photo', includeBase64: false, },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const source = { uri: response.assets[0].uri };
                    setCapturedPhoto(source.uri);
                }
            }
        );
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
                    <Text style={styles.nameText}>Upload from Gallery</Text>
                </View>
            </View>
            <View style={[styles.itemsContainer, { position: "relative" }]}>
                {capturedPhoto !== null ? (
                    <View style={styles.itemWrapper}>
                        <Image
                            source={{ uri: capturedPhoto }}
                            style={styles.capturedImage}

                        />
                        <TouchableOpacity onPress={() => deletePhoto()} style={{ position: "absolute", top: 15, right: 30 }}>
                            <Text style={{ fontSize: 30, color: "white", fontWeight: '700' }} > X</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.itemWrapper}>
                        <Text>Upload from Gallery</Text>
                    </View>
                )}
            </View>
            <View>
                <View style={[styles.lowerWrapper]}>
                    <View style={[styles.textWrapper]}>
                        <Text style={[styles.contantText]}>Select the photos from the first item you want to upload</Text>
                    </View>
                </View>
                <CustomButton
                    onPress={capturedPhoto === null ? openGallery : () => navigationRoute.navigate("AddtoCloset")}
                    buttonText="Upload Pictures"
                    buttonStyle={[styles.buttonWrapper, styles.dynamicButtonStyle, capturedPhoto !== null ? styles.activeColor : styles.inActiveColor,]}
                    textStyle={styles.buttonText}
                />
            </View>
        </SafeAreaView>
    );
};

export default GalleryUpload;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { backgroundColor: "white", flex: 1, width: width, height: height },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08, position: 'relative',
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.08 },
    backArrow: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    itemsContainer: { width: width, height: height * 0.7, justifyContent: "center", alignItems: "center", },
    itemWrapper: { width: width * 0.95, height: height * 0.68, backgroundColor: "#CACACA", justifyContent: "center", alignItems: "center" },
    lowerWrapper: { justifyContent: "center" },
    textWrapper: { marginHorizontal: width * 0.1, paddingVertical: 5 },
    buttonWrapper: {
        flexDirection: "row", alignItems: "center",
        marginVertical: width * 0.04, marginHorizontal: width * 0.1,
        justifyContent: "center", borderRadius: 5,
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, shadowRadius: 3.84,
        elevation: 4, borderWidth: 1,
    },
    dynamicImageStyle: { width: 40, height: 40, },
    dynamicButtonStyle: { marginHorizontal: width * 0.12, },
    activeColor: { backgroundColor: COLORS.Secondary, paddingVertical: 13 },
    inActiveColor: { backgroundColor: "#CACACA", color: COLORS.ShadowDarkest, paddingVertical: 13 },
    plus: { width: 35, height: 35, marginRight: 15 },
    buttonText: { fontSize: 16, fontWeight: '500', color: COLORS.ShadowDarkest },
    contantText: { fontSize: 16, fontWeight: '500', color: COLORS.ShadowDarkest, },
    capturedImage: { width: width * 0.95, height: height * 0.68 }
});

