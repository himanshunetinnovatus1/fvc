import React, { useState, useRef, useEffect } from 'react';
import {
    Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity,
    ScrollView, Image, View,
    Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageStyle from '../../../const/PageStyle';
import COLORS from '../../../const/colors';
import NavigantionHeader from '../../../components/headers/NavigantionHeader';
import cap from "../../../assets/images/capOne.png"
import upper from "../../../assets/images/upperOne.png"
import shorts from "../../../assets/images/shorts.png"
import blueTick from "../../../assets/images/blueTick.png"
import shoes from "../../../assets/images/shoes.png"
import Footer from '../../../components/footer/footer';
import CollectionModal from '../../../components/modals/CollectionModal';
import Button from '../../../components/Button';
import ThemeStyle from '../../../const/ThemeStyle';

const CollectionsDetails = () => {
    const navigationRoute = useNavigation();
    const [activeFooterTab, setActiveFooterTab] = useState('Closet');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [btnWrap, setBtnWrap] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const [showEditThings, setShowEditThings] = useState({
        editPiece: false,
        doneBTN: false,
    });
    const doneEditing = () => {
        setShowEditThings({
            editPiece: false,
            doneBTN: false,
        });
    };

    const editPieceHandler = () => {
        setShowEditThings({
            editPiece: true,
            doneBTN: true,
        });
        setShowModal(false);
    };


    const showBTN = () => {
        setBtnWrap(true)
        setShowModal(false)
    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectItem = (index) => {

        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter((item) => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    };

    const gobackM = () => {
        setSelectedItems([]);
        setBtnWrap(false)
        navigationRoute.navigate("MainDashboard")
    };

    const showDeleteModal = () => {
        setModalVisible(true);
        setShowModal(false)
    }

    const showDeleteModalCollection = () => {
        setModalVisibleTwo(true);
        setShowModal(false)
    }

    const deleteCollection = () => {
        setSelectedItems([]);
        navigationRoute.navigate("MainDashboard")
    }

    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <NavigantionHeader
                toggleModal={toggleModal}
                showEditThings={showEditThings}
                doneEditing={doneEditing}
                navigateTo="MainDashboard"
                tabName="Piece Overview"
            />
            <ScrollView style={styles.contentWrapper} showsVerticalScrollIndicator={false}>
                <View style={[styles.fitItemsContainer]}>
                    {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                        // <TouchableOpacity key={index} style={styles.fitItem} onPress={() => navigationRoute.navigate("CollectionsDetails")}>
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.fitItem,
                                { position: "relative", }
                            ]}
                            onPress={() => handleSelectItem(index)}
                        >

                            <View style={styles.fitItemWrapper}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontWeight: "600" }}>Summertime</Text>
                                    <Text style={{ fontSize: 12, color: COLORS.SecondaryDark }}>2 Looks</Text>
                                </View>
                                <View>
                                    <Image
                                        source={cap}
                                        style={styles.headItem}
                                        resizeMode='center'
                                    />
                                </View>
                                <View>
                                    <Image
                                        source={upper}
                                        style={styles.upperItem}
                                        resizeMode='center'
                                    />
                                </View>
                                <View>
                                    <Image
                                        source={shorts}
                                        style={styles.lowerItem}
                                        resizeMode='center'
                                    />
                                </View>
                                <View>
                                    <Image
                                        source={shoes}
                                        style={styles.shoesItem}
                                        resizeMode='center'
                                    />
                                </View>
                            </View>
                            {selectedItems.includes(index) && (
                                <View style={{ position: "absolute", top: -10, right: -10 }}>
                                    <Image
                                        source={blueTick}
                                        style={styles.blueTick}
                                        resizeMode='center'
                                    />
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <Footer style={styles.footer} activeFooterTab={activeFooterTab} setActiveFooterTab={setActiveFooterTab} />
            <CollectionModal showModal={showModal} showDeleteModal={showDeleteModal} showDeleteModalCollection={showDeleteModalCollection} toggleModal={toggleModal} showBTN={showBTN} />

            {btnWrap &&
                <View style={styles.btnWrapper}>
                    <View>
                        <Button
                            title="Go Back"
                            buttonType
                            btnTextColor={COLORS.btnColor}
                            stylesCss={[ThemeStyle.stylesCssOne, { width: 150, borderWidth: 1, borderColor: COLORS.btnColor }]}
                            btnwidth="100%"
                            // onPress={() => navigationRoute.navigate("MainDashboard")}
                            onPress={gobackM}
                        />
                    </View>
                    <View>
                        <Button
                            title="Add to Collection"
                            buttonType
                            bgColor={COLORS.btnColor}
                            btnTextColor={COLORS.ShadowDarkest}
                            stylesCss={[ThemeStyle.stylesCssOne, { width: 150, }]}
                            btnwidth="100%"
                            onPress={gobackM}

                        />
                    </View>

                </View>}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>

                        <View>
                            <Text style={styles.modalText}>Do you Want to delete these fits ?</Text>
                            <Text style={styles.modalTextOne}>You cannot undo this action</Text>
                        </View>

                        <View style={[styles.modalButtonContainer, { borderTopWidth: 0.5, borderTopColor: COLORS.SecondaryDark }]}>
                            <TouchableOpacity style={[styles.modalButton,
                            { borderRightWidth: 0.5, borderRightColor: COLORS.SecondaryDark }]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Keep</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton,]} onPress={() => setModalVisible(false)}>
                                <Text style={[styles.modalButtonTextTwo, { fontWeight: '700' }]}>Delete</Text>
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
                            <Text style={styles.modalText}>Do you Want to delete this Collection ?</Text>
                            <Text style={styles.modalTextOne}>You cannot undo this action</Text>
                        </View>

                        <View style={[styles.modalButtonContainer, { borderTopWidth: 0.5, borderTopColor: COLORS.SecondaryDark }]}>
                            <TouchableOpacity style={[styles.modalButton,
                            { borderRightWidth: 0.5, borderRightColor: COLORS.SecondaryDark }]} onPress={() => setModalVisibleTwo(false)}>
                                <Text style={styles.modalButtonText}>Keep</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton,]} onPress={deleteCollection}>
                                <Text style={[styles.modalButtonTextTwo, { fontWeight: '700' }]}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


        </SafeAreaView>
    );
};

export default CollectionsDetails;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },


    contentWrapper: { flex: 1, paddingTop: 10, },

    fitItemsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20, paddingHorizontal: 15 },
    fitItem: { width: "30%", marginBottom: 20, position: "relative", marginHorizontal: 5 },
    fitItemWrapper: {
        alignItems: "center", padding: 10, borderRadius: 10,
        backgroundColor: COLORS.white, shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25,
        shadowRadius: 3.84, elevation: 5,
    },
    stylesCssOne: { borderWidth: 0, borderRadius: 10, marginTop: 20, width: "100%" },
    headItem: { width: width * 0.08, height: height * 0.02, marginVertical: 8 },
    upperItem: { width: width * 0.15, height: height * 0.075, },
    lowerItem: { width: width * 0.15, height: height * 0.075, marginVertical: 8 },
    shoesItem: { width: width * 0.15, height: width * 0.075 },
    btnWrapper: { flexDirection: "row", justifyContent: "space-evenly", position: "absolute", paddingBottom: 20, bottom: 0, left: 0, backgroundColor: COLORS.white, width: width, },
    footer: { backgroundColor: "yellow", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, },




    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' },
    modalContainer: { paddingTop: 20, alignItems: 'center', backgroundColor: 'rgba(227, 228, 227, 0.95)', width: '80%', borderRadius: 20, },
    modalText: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',
        paddingHorizontal: 20, textAlign: "center"
    },
    modalTextOne: { fontSize: 15, marginBottom: 20, textAlign: 'center', textAlign: "center" },
    modalButtonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', },
    modalButton: { paddingVertical: 12, width: '50%', alignItems: 'center', },
    modalButtonText: { color: COLORS.btnColor, fontSize: 18, },
    modalButtonTextTwo: { color: "red", fontSize: 18, },
});
