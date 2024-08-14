import React, { useState } from 'react';
import {
    Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity,
    ScrollView, Image, View
} from 'react-native';
import jacket from "../../../assets/images/jacket.png";
import rightArrow from "../../../assets/images/rightArrow.png";
import leftArrow from "../../../assets/images/leftArrow.png";
import NavigantionHeader from '../../../components/headers/NavigantionHeader';
import tshirtMenu from "../../../assets/images/tshirtMenu.png";
import orangeEdit from '../../../assets/images/orangeEdit.png';
import camera from '../../../assets/images/camera.png';
import upload from '../../../assets/images/upload.png';
import EditPieceModal from '../../../components/modals/EditPieceModal';
import PieceModal from '../../../components/modals/PieceModal';
import { useNavigation } from '@react-navigation/native';
import PageStyle from '../../../const/PageStyle';
import COLORS from '../../../const/colors';
import CustomButton from '../../../components/CustomButton';

const SaveCollection = () => {
    const navigationRoute = useNavigation();

    const [activeLayer, setActiveLayer] = useState("Inner");
    const [showModal, setShowModal] = useState(false);
    const [editPiece, setEditPiece] = useState(false);

    const [showEditThings, setShowEditThings] = useState({
        editPiece: false,
        doneBTN: false,
        editParameters: false
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState('');
    const [inputValue, setInputValue] = useState('');

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const editPieceHandler = () => {
        setShowEditThings({
            editPiece: true,
            doneBTN: true,
            editParameters: true
        });
        setShowModal(false);
    };

    const doneEditing = () => {
        setShowEditThings({
            editPiece: false,
            doneBTN: false,
            editParameters: false
        });
        setEditPiece(false);
    };

    const editPiecePhoto = () => {
        setEditPiece(true);
    };

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

    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigantionHeader toggleModal={toggleModal} showEditThings={showEditThings} doneEditing={doneEditing} editPiecePhoto={editPiecePhoto} />
            <View style={styles.mainWrapper}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.bodyWrapper}>
                        <View style={styles.addPiece}>
                            <TouchableOpacity>
                                <Image
                                    source={leftArrow}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
                            <View>
                                {editPiece === false ?
                                    <View>
                                        <Image
                                            source={jacket}
                                            style={styles.pieceImage}
                                        />
                                    </View>
                                    :
                                    <View style={styles.uploadPhoto}>
                                        <View style={styles.uploadMainWrapper}>
                                            <View style={styles.cameraWrppar}>
                                                <Image
                                                    source={camera}
                                                    style={styles.camera}
                                                />
                                            </View>
                                            <View>
                                                <Text style={[styles.uploadText, PageStyle.text]}>Upload From</Text>
                                                <Text style={[styles.uploadText, PageStyle.text]}> Camera</Text>
                                            </View>
                                        </View>
                                        <View style={styles.uploadMainWrapper}>
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
                                        </View>
                                    </View>
                                }
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={rightArrow}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View><Text style={styles.imageText}>Layer:</Text></View>
                    <View style={styles.layerWrapper}>
                        <TouchableOpacity style={styles.layerInnerWrapper} onPress={() => setActiveLayer("Inner")}>
                            <View style={activeLayer === "Inner" ? styles.activeLayerColorBox : styles.layerColorBox}></View>
                            <Text style={[styles.layerText, PageStyle.text]}>Inner</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.layerInnerWrapper} onPress={() => setActiveLayer("Outer")}>
                            <View style={activeLayer === "Outer" ? styles.activeLayerColorBox : styles.layerColorBox}></View>
                            <Text style={[styles.layerText, PageStyle.text]}>Outer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.layerInnerWrapper} onPress={() => setActiveLayer("Both")}>
                            <View style={activeLayer === "Both" ? styles.activeLayerColorBox : styles.layerColorBox}></View>
                            <Text style={[styles.layerText, PageStyle.text]}>Both</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.descriptionWrapper}>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={styles.subDescriptionTextOne}>Type:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Type')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Jacket</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={styles.subDescriptionTextOne}>Category:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Category')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Outerwear</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Brand:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Brand')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Umbro</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Size:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Size')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>M</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Color:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Color')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Grey</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Condition:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Condition')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Used</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Price:</Text>
                                <View style={styles.innerDse}>
                                    {showEditThings.editParameters === true &&
                                        <TouchableOpacity onPress={() => handleEditPress('Price')}>
                                            <Image
                                                source={orangeEdit}
                                                style={styles.orangeEdit}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>$300-400</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.buttonWrapper}>
                    <CustomButton
                        onPress={() => navigationRoute.navigate("CreateFit")}
                        imageSource={tshirtMenu}
                        buttonText="Create a Fit"
                        buttonStyle={styles.dynamicButtonStyle}
                        imageStyle={styles.dynamicImageStyle}
                        textStyle={styles.dynamicTextStyle}
                    />
                </View>

                <PieceModal showModal={showModal} toggleModal={toggleModal} editPieceHandler={editPieceHandler} />
                <EditPieceModal
                    modalVisible={modalVisible}
                    currentField={currentField}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                />
            </View>
        </SafeAreaView>
    );
};

export default SaveCollection;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },
    mainWrapper: { flex: 1, backgroundColor: 'white' },
    scrollContainer: { paddingBottom: 100 },
    bodyWrapper: { paddingHorizontal: width * 0.08, },
    addPiece: { marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", },
    pieceImage: { height: 280, width: 220 },
    arrow: { height: 50, width: 20 },
    threeDots: { height: 50, width: 20 },
    layerWrapper: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: width * 0.15, },
    layerInnerWrapper: { flexDirection: "row", alignItems: "center" },
    imageText: { textAlign: "center", fontSize: 16, fontWeight: '600', color: COLORS.ShadowDarkest },
    layerText: { fontSize: 15, fontWeight: '400', color: COLORS.ShadowDarkest, },
    activeLayerColorBox: { width: 15, height: 15, backgroundColor: COLORS.Secondary, borderWidth: 1, marginRight: 5 },
    layerColorBox: { width: 15, height: 15, backgroundColor: "white", borderWidth: 1, marginRight: 5 },
    description: { borderTopWidth: 1, marginHorizontal: width * 0.04, borderTopColor: COLORS.white, marginTop: 10, paddingTop: 6 },
    subDescription: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: width * 0.06 },
    subDescriptionTextOne: { fontSize: 16, fontWeight: "500", color: COLORS.ShadowDarkest, },
    subDescriptionTextTwo: { fontSize: 16, fontWeight: "700", color: COLORS.ShadowDarkest, },
    buttonWrapper: { position: 'absolute', bottom: 20, left: 0, right: 0, justifyContent: 'center', },
    dynamicButtonStyle: { marginHorizontal: width * 0.13, },
    dynamicImageStyle: { width: 40, height: 40, },
    dynamicTextStyle: {},
    innerDse: { flexDirection: "row", alignContent: "center", },
    orangeEdit: { marginRight: 10, width: 15, height: 15, marginBottom: -5 },
    uploadMainWrapper: { height: height * 0.2, width: width * 0.3 },
    uploadPhoto: { flexDirection: "row", justifyContent: "center", alignItems: "center", height: height * 0.355 },
    cameraWrppar: { borderRightWidth: 1, borderRightColor: COLORS.white, paddingRight: 40, height: height * 0.16, paddingTop: 20 },
    camera: { width: 60, height: 60, marginLeft: 10 },
    uploadWrppar: { borderLeftWidth: 1, borderRightColor: COLORS.white, paddingLeft: 40, height: height * 0.16, paddingTop: 20 },
    upload: { width: 60, height: 60 },
    uploadText: { textAlign: "center", marginRight: 20 },
    cameraText: { textAlign: "center", marginLeft: 20 },

    btnStyle: {
        borderWidth: 1
    }
});
