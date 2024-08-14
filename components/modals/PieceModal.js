import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";
import heart from "../../assets/images/heart.png";
import uploads from '../../assets/images/uploads.png';
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';

const PieceModal = ({ showModal, toggleModal, editPieceHandler, }) => {
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
                            <TouchableOpacity style={[styles.modalInnerWrapper, { paddingVertical: 8 }]} onPress={editPieceHandler}>
                                <Image
                                    source={edit}
                                    style={styles.edit}
                                />
                                <Text style={[styles.modalText, PageStyle.text]}>Edit </Text>
                            </TouchableOpacity>
                            <View style={[styles.modalInnerWrapper, { paddingVertical: 8 }]}>
                                <View style={styles}>
                                    <Image
                                        source={uploads}
                                        style={styles.heartupload}
                                    />
                                </View>
                                <Text style={[styles.modalText, PageStyle.text]}>Upload</Text>
                            </View>
                            <View style={[styles.modalInnerWrapper, { paddingVertical: 8 }]}>
                                <View>
                                    <Image
                                        source={heart}
                                        style={styles.heart}
                                    />
                                </View>
                                <Text style={[styles.modalText, PageStyle.text]}>Favorite</Text>
                            </View>
                            <View style={[styles.modalInnerWrapper]}>
                                <View style={[styles.trashBorder,]}>
                                    <Image
                                        source={trash}
                                        style={styles.trash}
                                    />
                                    <Text style={[styles.modalTextTrash, PageStyle.text]}>Delete</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: { flex: 1, alignItems: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0)', paddingTop: 50, paddingRight: 25 },
    modalContainer: {
        backgroundColor: COLORS.white, elevation: 5, borderRadius: 10, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84,
    },
    modalText: { fontSize: 16, fontWeight: '500', color: COLORS.ShadowDarkest, marginLeft: 15 },
    modalTextTrash: { fontSize: 16, fontWeight: '500', color: "#FF0000", marginLeft: 15 },
    modalInnerWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: 16, paddingVertical: 10 },
    edit: { width: 20, height: 19 },
    heartWrapper: { borderWidth: 1, padding: 4, borderRadius: 19 },
    heartWrapperPink: { borderWidth: 1, borderColor: "pink", padding: 4, borderRadius: 19 },
    heart: { width: 20, height: 20, },
    heartupload: { width: 20, height: 17, },
    trash: { width: 20, height: 25 },
    orangeEdit: { marginRight: 10, width: 15, height: 15, marginBottom: -5 },
    trashBorder: {
        borderTopWidth: 0.8, flexDirection: "row", justifyContent: "flex-start",
        alignItems: "center", paddingTop: 10, borderTopColor: COLORS.TextTertiart
    }
});

export default PieceModal;
