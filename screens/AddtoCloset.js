
import React, { useState, useRef } from 'react';
import { Text, StyleSheet, SafeAreaView, Dimensions, ScrollView, View, TouchableOpacity, Animated, TextInput } from 'react-native';
import NavigantionHeader from '../components/headers/NavigantionHeader';
import PieceModal from '../components/modals/PieceModal';
import tootgleArrow from "../assets/images/tootgleArrow.png";
import PageStyle from '../const/PageStyle';
import COLORS from '../const/colors';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import Button from '../components/Button';
import ThemeStyle from '../const/ThemeStyle';

const AddtoCloset = () => {
    const navigationRoute = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showEditThings, setShowEditThings] = useState({
        editPiece: false,
        doneBTN: false,
    });

    const [isArrowRotated, setIsArrowRotated] = useState(false);
    const [isTextViewVisible, setIsTextViewVisible] = useState(false);
    const [actveBTN, setActveBTN] = useState(false)
    const [actveBTNTwo, setActveBTNTwo] = useState(false)
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const [formData, setFormData] = useState({
        price: "$300-400",
        type: "Jacket",
        category: "Outwear",
        brand: "Umbro",
        size: "M",
        color: "Grey",
        condition: "Used",
        pieceName: "UmbroJacket"

    })

    const toggleArrowAndText = () => {
        setIsArrowRotated(!isArrowRotated);
        setIsTextViewVisible(!isTextViewVisible);
        Animated.timing(rotateAnim, {
            toValue: isArrowRotated ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const editPieceHandler = () => {
        setShowEditThings({
            editPiece: true,
            doneBTN: true,
        });
        setShowModal(false);
    };

    const doneEditing = () => {
        setShowEditThings({
            editPiece: false,
            doneBTN: false,
        });
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        require('../assets/images/jacket.png'),
        require('../assets/images/jacket.png'),
        require('../assets/images/jacket.png'),
        require('../assets/images/jacket.png')
    ];
    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    const CustomDots = ({ currentIndex }) => {
        return (
            <View style={styles.paginationBox}>
                {images.map((_, index) => (
                    <View key={index}
                        style={[
                            styles.dot, {
                                width: currentIndex === index ? 18 : 8,
                                backgroundColor: currentIndex === index ? COLORS.SecondaryDarkest : COLORS.TextTertiart,
                            },
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <NavigantionHeader
                toggleModal={toggleModal}
                showEditThings={showEditThings}
                doneEditing={doneEditing}
                // navigateTo="MainDashboard"
                tabName="Piece Overview"
            />
            <View style={styles.mainWrapper}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.bodyWrapper}>
                        <View style={{ flex: 0.9, alignItems: "center" }}>
                            <SliderBox
                                images={images}
                                sliderBoxHeight={height * 0.4}
                                currentImageEmitter={handleImageChange}
                                paginationBoxVerticalPadding={10}
                                parentWidth={height * 0.3}
                                ImageComponentStyle={{ borderRadius: 15, width: '97%', marginBottom: 30, justifyContent: "center" }}
                                renderDots={() => <CustomDots currentIndex={currentImageIndex} />}
                            />
                        </View>
                    </View>

                    <View style={[styles.descriptionWrapper]}>
                        <View style={styles.description}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Price</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.price}
                                            onChangeText={text => setFormData({ ...formData, pieceName: price })}
                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.price}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Type</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.type}
                                            onChangeText={text => setFormData({ ...formData, type: text })}

                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.type}</Text>
                                    </View>
                                }
                            </View>
                        </View>

                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Layer Type</Text>
                                <TouchableOpacity onPress={toggleArrowAndText} style={styles.innerDse}>
                                    <Animated.Image source={tootgleArrow} style={[styles.backArrow, { transform: [{ rotate }] }]} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>
                            {isTextViewVisible && (
                                <View>
                                    <View style={{ marginTop: 10 }}>
                                        <View style={[styles.subDescription, { alignItems: "center" }]}>
                                            <Text style={[styles.subDescriptionTextOneA, PageStyle.text]}>Outer Layer</Text>
                                            <View style={styles.activeBTNWrapper}>
                                                <TouchableOpacity onPress={() => setActveBTN(true)}>
                                                    <Text style={actveBTN === false ? styles.activeBTN : styles.inactiveBTN}>Yes</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setActveBTN(false)}>
                                                    <Text style={actveBTN === true ? styles.activeBTN : styles.inactiveBTN}>No</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <View style={[styles.subDescription, { alignItems: "center" }]}>
                                            <Text style={[styles.subDescriptionTextOneA, PageStyle.text]}>Under Layer</Text>
                                            <View style={styles.activeBTNWrapper}>
                                                <TouchableOpacity onPress={() => setActveBTNTwo(true)}>
                                                    <Text style={actveBTNTwo === false ? styles.activeBTN : styles.inactiveBTN}>Yes</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setActveBTNTwo(false)}>
                                                    <Text style={actveBTNTwo === true ? styles.activeBTN : styles.inactiveBTN}>No</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                        </View>

                        <View>
                            <View style={[styles.description, styles.bottomBorder]}>
                                <View style={styles.subDescription}>
                                    <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Category</Text>
                                    {showEditThings.editPiece ?
                                        <View>
                                            <TextInput
                                                style={[styles.subDescriptionTextTwo, styles.input]}
                                                value={formData.category}
                                                onChangeText={text => setFormData({ ...formData, category: text })}
                                            />
                                        </View> :
                                        <View style={styles.innerDse}>
                                            <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.category}</Text>
                                        </View>
                                    }
                                </View>
                            </View>
                        </View>

                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Brand</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.brand}
                                            onChangeText={text => setFormData({ ...formData, brand: text })}
                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.brand}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Size</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.size}
                                            onChangeText={text => setFormData({ ...formData, size: text })}
                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.size}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Color</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.color}
                                            onChangeText={text => setFormData({ ...formData, color: text })}
                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.color}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Condition</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.condition}
                                            onChangeText={text => setFormData({ ...formData, condition: text })}
                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.condition}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={[styles.description, styles.bottomBorder]}>
                            <View style={styles.subDescription}>
                                <Text style={[styles.subDescriptionTextOne, PageStyle.text]}>Piece Name</Text>
                                {showEditThings.editPiece ?
                                    <View>
                                        <TextInput
                                            style={[styles.subDescriptionTextTwo, styles.input]}
                                            value={formData.pieceName}
                                            onChangeText={text => setFormData({ ...formData, pieceName: text })}

                                        />
                                    </View> :
                                    <View style={styles.innerDse}>
                                        <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>{formData.pieceName}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonMainWrapper}>


                    {showEditThings.editPiece ?
                        <Button
                            title="Save Changes"
                            buttonType
                            bgColor={COLORS.btnColor}
                            btnTextColor={COLORS.SecondaryLightest}
                            stylesCss={styles.stylesCssOne}
                            btnwidth="100%"
                            onPress={doneEditing}
                        />
                        :
                        <Button
                            title="Add to Closet"
                            buttonType
                            bgColor={COLORS.btnColor}
                            btnTextColor={COLORS.SecondaryLightest}
                            stylesCss={styles.stylesCssOne}
                            btnwidth="100%"
                            onPress={() => {
                                navigationRoute.navigate('MainDashboard');
                            }}
                        />
                    }

                </View>
                <PieceModal showModal={showModal} toggleModal={toggleModal} editPieceHandler={editPieceHandler} />
            </View>
        </SafeAreaView>
    );
};

export default AddtoCloset;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white' },
    input: {
        height: 40, width: width * 0.4,
        borderWidth: 1, borderRadius: 5, borderColor: COLORS.TextTertiart,

    },
    buttonWrapper: {
        flexDirection: "row", marginVertical: width * 0.04, paddingVertical: 10,
        marginHorizontal: width * 0.13, alignItems: "center", justifyContent: "center", borderRadius: 5,
        shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.3, shadowRadius: 3.84, elevation: 4, width: '80%'
    },
    activeColor: { backgroundColor: COLORS.ShadowDarkest },

    mainWrapper: { flex: 1, backgroundColor: 'white' },
    scrollViewContent: { paddingBottom: 100 },
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
    description: { borderTopWidth: 1, marginHorizontal: width * 0.06, borderTopColor: COLORS.white, marginTop: 10, paddingTop: 6 },
    subDescription: { flexDirection: "row", justifyContent: "space-between", },
    subDescriptionTextOne: { fontSize: 17, fontWeight: "500", color: COLORS.ShadowDarkest, marginBottom: 10 },
    subDescriptionTextOneA: { fontSize: 17, fontWeight: "300", color: COLORS.TextTertiart, marginBottom: 10 },
    subDescriptionTextTwoB: { fontSize: 17, fontWeight: "700", color: COLORS.TextTertiart, },
    subDescriptionTextTwo: { fontSize: 17, fontWeight: "700", color: COLORS.ShadowDarkest, },
    dot: { height: 8, borderRadius: 20, marginHorizontal: 3, flexDirection: "row" },
    paginationBox: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
    buttonMainWrapper: { position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 20, alignItems: 'center', backgroundColor: "white", paddingHorizontal: width * 0.06 },
    tshirtMenu: { width: 40, height: 40, marginRight: 15 },
    buttonText: { fontSize: 16, fontWeight: '500', color: "white" },
    innerDse: { flexDirection: "row", alignContent: "center", },
    uploadMainWrapper: { height: height * 0.2, width: width * 0.3 },
    uploadPhoto: { flexDirection: "row", justifyContent: "center", alignItems: "center", height: height * 0.355 },
    cameraWrppar: { borderRightWidth: 1, borderRightColor: COLORS.white, paddingRight: 40, height: height * 0.16, paddingTop: 20 },
    camera: { width: 60, height: 60, marginLeft: 10 },
    uploadWrppar: { borderLeftWidth: 1, borderRightColor: COLORS.white, paddingLeft: 40, height: height * 0.16, paddingTop: 20 },
    upload: { width: 60, height: 60 },
    uploadText: { textAlign: "center", marginRight: 20 },
    cameraText: { textAlign: "center", marginLeft: 20 },
    plus: { width: 16, height: 16, marginRight: 15 },
    bottomBorder: { borderBottomWidth: 0.6, paddingBottom: 15, borderBottomColor: COLORS.TextTertiart },
    backArrow: { width: 20, height: 20 },
    activeBTNWrapper: { backgroundColor: COLORS.backGroundGray, flexDirection: "row", padding: 5, borderRadius: 6 },
    activeBTN: { fontSize: 15, paddingHorizontal: 30, paddingVertical: 8, backgroundColor: "white", borderRadius: 6 },
    inactiveBTN: { fontSize: 15, paddingHorizontal: 30, paddingVertical: 8, color: COLORS.ShadowLight, borderRadius: 6 },

    stylesCssOne: { borderWidth: 0, borderRadius: 10, marginTop: 30, },
});
