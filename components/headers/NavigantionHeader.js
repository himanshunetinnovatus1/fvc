import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import orangeEdit from '../../assets/images/orangeEdit.png';
import backArrow from '../../assets/images/backArrow.png';
import threeDots from '../../assets/images/threeDots.png';
import { useNavigation } from '@react-navigation/native';
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';


const NavigantionHeader = ({ toggleModal, showEditThings, doneEditing, editPiecePhoto, tabName }) => {

    const navigationRoute = useNavigation();

    console.log("ergreg",navigationRoute.getState());

    return (
        <>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.goBack()}>
                    {/* <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate(navigateTo)}> */}
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.nameWrapper}>
                    <Text style={[styles.nameText, PageStyle.text]}>{tabName || " "}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={toggleModal}>
                        <Image
                            source={threeDots}
                            style={styles.threeDots}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    {/* } */}
                </View>
            </View>
        </>
    );
};

export default NavigantionHeader;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainWrapper: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: width * 0.06, paddingHorizontal: 20 },
    backArrowWrapper: { flexDirection: 'row', alignItems: 'center', },
    backArrow: { width: 23, height: 23 },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 20, fontWeight: '700', textAlign: 'center' },
    threeDots: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row" },
    orangeEdit: { marginLeft: 5, width: 20, height: 20 },
    doneBTNWrapper: { backgroundColor: "#FF8743", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 15 },
    doneBTNText: { color: "white", fontSize: 14 }
});
