import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import COLORS from '../../const/colors';




const SaveCollectionModal = ({setModalVisibleTwo, modalVisibleTwo }) => {


    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleTwo}
                onRequestClose={() => setModalVisibleTwo(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View>
                            <Text style={styles.modalTextHead}> Save Fit to Collection?  </Text>
                            <Text style={[styles.modalTextOne, { paddingHorizontal: 10 }]}>You can either add it to your "Go-To Looks"
                                Collection or save it in your fits
                            </Text>
                        </View>
                        <TouchableOpacity style={[styles.modalButton, { borderTopWidth: 0.5, borderTopColor: COLORS.SecondaryDark, width: "100%" }]} onPress={() => setModalVisibleTwo(false)}>
                            <Text style={[styles.modalButtonText, { fontWeight: '700' }]}>Add to Collection</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.modalButton, { borderTopWidth: 0.5, borderTopColor: COLORS.SecondaryDark, width: "100%" }]} onPress={() => setModalVisibleTwo(false)}>
                            <Text style={[styles.modalButtonText, {}]}>Save Fit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default SaveCollectionModal;

const styles = StyleSheet.create({
    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' },
    modalContainer: { paddingTop: 20, alignItems: 'center', backgroundColor: 'rgba(227, 228, 227, 0.95)', width: '80%', borderRadius: 20, },
    modalTextHead: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',
        paddingHorizontal: 20, textAlign: "center"
    },
    modalTextOne: { fontSize: 15, marginBottom: 20, textAlign: 'center', textAlign: "center" },

    modalButton: { paddingVertical: 12, width: '50%', alignItems: 'center', },
    modalButtonText: { color: '#0d99ff', fontSize: 18, },

})