// ********  NOT IN USE *********** 



import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';

const EditPieceModal = ({ modalVisible, currentField, inputValue, setInputValue, handleSave, handleCancel }) => {
    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCancel}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={[styles.modalTitle,PageStyle.text]}>Edit {currentField}</Text>
                    <TextInput
                        style={[styles.input,PageStyle.text]}
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder={`Enter new ${currentField}`}
                    />
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={[styles.buttonText,PageStyle.text]}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleCancel}>
                            <Text style={[styles.buttonText,PageStyle.text]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditPieceModal;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    centeredView: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0)' },
    modalView: {
        margin: 20,
        backgroundColor: "#DFDFDF",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: { fontSize: 20, marginBottom: 15, textAlign: "left" , fontWeight : '500'},
    input: {
        height: 40, borderColor: COLORS.TextSecondary, borderWidth: 1, borderRadius: 5,
        marginBottom: 20, width: width * 0.7, paddingHorizontal: 10, backgroundColor : "white"
    },
    modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
    button: { backgroundColor: COLORS.Secondary, padding: 10, borderRadius: 5, elevation: 2, width: 80, alignItems: 'center' },
    buttonText: { color: COLORS.ShadowDarkest, fontWeight: 'bold', textAlign: 'center' }
});


// ********  NOT IN USE *********** 
