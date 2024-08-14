import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import edit from "../../assets/images/addFit.png";
import trash from "../../assets/images/collectionDelete.png";
import heart from "../../assets/images/unfev.png";
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';



const CollectionModal = ({ showModal, toggleModal, showDeleteModal,  showDeleteModalCollection, showBTN}) => {
    return (
        <Modal
            transparent={true}
            visible={showModal}
            onRequestClose={toggleModal}
        >
            <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity style={[styles.modalInnerWrapper, { paddingBottom: 8, paddingTop : 15 }]} onPress={showBTN}>
                                <Image
                                    source={edit}
                                    style={styles.edit}
                                />
                                <Text style={[styles.modalText, PageStyle.text]}>Add Fit </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.modalInnerWrapper, { paddingVertical: 8 }]} onPress={showDeleteModal} >
                                <View>
                                    <Image
                                        source={heart}
                                        style={styles.heart}
                                    />
                                </View>
                                <Text style={[styles.modalText, PageStyle.text]}>Remove Fits</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalInnerWrapper, { borderTopColor: COLORS.TextTertiart, borderTopWidth: 0.8, }]}  onPress={showDeleteModalCollection}>
                                <View style={[styles.trashBorder]}>
                                    <Image
                                        source={trash}
                                        style={styles.trash}
                                    />
                                    <Text style={[styles.modalTextTrash, PageStyle.text]}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: { flex: 1, alignItems: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0)', paddingTop: 45, paddingRight: 20 },
    modalContainer: {
        backgroundColor: COLORS.white, elevation: 5, borderRadius: 10, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84,
    },
    modalText: { fontSize: 16, fontWeight: '500', color: COLORS.ShadowDarkest, marginLeft: 15 },
    modalTextTrash: { fontSize: 16, fontWeight: '500', color: "#FF0000", marginLeft: 15 },
    modalInnerWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: 16, paddingVertical: 10 },
    edit: { width: 24, height: 20 },
    heartWrapper: { borderWidth: 1, padding: 4, borderRadius: 19 },
    heartWrapperPink: { borderWidth: 1, borderColor: "pink", padding: 4, borderRadius: 19 },
    heart: { width: 22, height: 22, },
    heartupload: { width: 20, height: 17, },
    trash: { width: 20, height: 25 },
    orangeEdit: { marginRight: 10, width: 15, height: 15, marginBottom: -5 },
    trashBorder: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }
});

export default CollectionModal;
