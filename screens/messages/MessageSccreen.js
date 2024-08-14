import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import COLORS from '../../const/colors';
import PageStyle from '../../const/PageStyle';
import men from '../../assets/images/men.png';
import send from '../../assets/images/send.png';
import backArrow from '../../assets/images/backArrow.png';
import { useNavigation } from '@react-navigation/native';
import jacket from "../../assets/images/jacket.png";
import plusBlack from "../../assets/images/plusBlack.png";
import CustomButton from '../../components/CustomButton';
import ThemeStyle from '../../const/ThemeStyle';


const MessageSccreen = () => {
    const navigationRoute = useNavigation();
    const [text, onChangeText] = useState('Useless Text');

    return (
        <View style={[styles.mainContainerWrapper, ThemeStyle.iosClass]}>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("Profile")}>
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("Profile")}>
                    <Image
                        source={men}
                        style={styles.messageProfile}
                    />
                </TouchableOpacity>
                <View style={styles.nameWrapper}>
                    <Text style={[styles.nameText, PageStyle.text]}>@finnbags</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.messeageWrapper}>
                    <Text style={[PageStyle.text, styles.text]}>
                        Hi, could you tell me how this piece fits?
                    </Text>
                    <Text style={[styles.textTime, PageStyle.text]}>
                        3:35PM
                    </Text>
                </View>
                <View style={styles.messeageWrapper}>
                    <Text style={[PageStyle.text, styles.text]}>
                        Hi, could you tell me how this piece fits?
                    </Text>
                    <Text style={[styles.textTime, PageStyle.text]}>
                        3:35PM
                    </Text>
                </View>
                <View style={styles.messeageWrapper}>
                    <Text style={[PageStyle.text, styles.text]}>
                        Hi, could you tell me how this piece fits?
                    </Text>
                    <Text style={[styles.textTime, PageStyle.text]}>
                        3:35PM
                    </Text>
                </View>
                <View>
                    <View style={styles.offerWrapper}>
                        <Text style={[PageStyle.text, styles.textThree]}> Offer Made:  </Text>
                        <Text style={[PageStyle.text, styles.detailsOneTwo]}> Umbro Windbreaker  </Text>
                        <Text style={[PageStyle.text, styles.textFour]}> $75.00  </Text>

                        <Text style={[styles.textTime, PageStyle.text]}>
                            3:35PM
                        </Text>
                    </View>

                    <View style={styles.BTNWrapper}>
                        <CustomButton
                            // onPress={() => navigationRoute.navigate("MainDashboard")}
                            buttonText="Accept $75"
                            buttonStyle={[styles.buttonWrapper]}
                            textStyle={styles.buttonText}
                        />
                        <CustomButton
                            // onPress={() => navigationRoute.navigate("MainDashboard")}
                            buttonText="Decline Offer"
                            buttonStyle={[styles.buttonWrapperTwo]}
                            textStyle={styles.buttonTextTwo}
                        />
                    </View>

                </View>

                <View style={styles.productWrapper}>
                    <View style={styles.referenceLine}></View>
                    <View>
                        <Image
                            source={jacket}
                            style={styles.pieceImage}
                        />
                    </View>
                    <View>
                        <Text style={styles.detailsOne}>Umbro Windbreaker</Text>
                        <Text style={styles.detailsTwo}>1994 Vintage Umbro Garment Dyed...</Text>
                        <Text style={styles.detailsThree}>US XS / EU 42 / 0</Text>
                    </View>
                </View>

                <View style={styles.waitingSection}>
                    <Text style={[styles.waitingSectionText, PageStyle.text]} >
                        A potential buyer is waiting for your response
                    </Text>
                </View>

                <View style={styles.messeageWrapperTwo}>
                    <Text style={[PageStyle.text, styles.textTwo]}>
                        Hi, could you tell me how this piece fits?
                    </Text>
                    <Text style={[styles.textTime, PageStyle.text]}>
                        3:35PM
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.footerWrapper}>
                <View style={styles.plusWrapper}>
                    <Image
                        source={plusBlack}
                        style={[styles.plusBlack]}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.inputTextWrapper}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <Image
                        source={send}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    )
}

export default MessageSccreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    mainContainerWrapper: { backgroundColor: COLORS.white, flex: 1 },
    mainWrapper: {
        flexDirection: 'row', alignItems: 'center',
        paddingVertical: width * 0.02, paddingHorizontal: width * 0.08,
        borderBottomWidth: 1,
        borderBlockColor: COLORS.lightGray
    },
    backArrow: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 21, fontWeight: '600', textAlign: 'center', marginLeft: 10 },
    messageProfile: { width: 50, height: 50, marginLeft: 10 },
    scrollView: { flex: 1, marginBottom: width * 0.20 },
    messeageWrapper: {
        padding: 10, borderWidth: 1, borderRadius: 15, width: width * 0.7, marginTop: 20,
        marginBottom: 15, marginHorizontal: 20,
    },
    offerWrapper: {
        padding: 10, borderWidth: 1, borderRadius: 15, width: width * 0.7, marginTop: 20,
        marginBottom: 15, marginHorizontal: 20, backgroundColor: COLORS.GreenBG, borderColor: COLORS.TextGreen
    },
    messeageWrapperTwo: {
        padding: 10, borderWidth: 1, borderRadius: 15, width: width * 0.7, marginTop: 20,
        marginBottom: 15, marginHorizontal: 20, backgroundColor: COLORS.Secondary,
        alignSelf: 'flex-end'
    },
    BTNWrapper: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
    buttonWrapper: { backgroundColor: COLORS.greenOne, width: "30%", borderColor: COLORS.greenOne, marginRight: 40 },
    buttonWrapperTwo: { backgroundColor: "white", width: "30%", borderColor: COLORS.greenOne },
    buttonTextTwo: { color: COLORS.greenOne, fontSize: 14 },
    buttonText: { color: "white", fontSize: 14 },
    text: { fontSize: 20, marginBottom: 20 },
    textThree: { fontSize: 20, },
    textFour: { fontSize: 25, marginTop: 10 },
    textTwo: { fontSize: 20, marginBottom: 20, },
    textTime: { position: 'absolute', bottom: 10, right: 10, fontSize: 12 },
    productWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    referenceLine: { height: height * 0.1, borderWidth: 1, width: 0, marginRight: 5 },
    pieceImage: { height: height * 0.13, width: width * 0.2, marginRight: 5 },
    detailsOne: { fontWeight: '600', fontSize: 12, },
    detailsOneTwo: { fontWeight: '600', fontSize: 14, },
    detailsTwo: { fontWeight: '600', fontSize: 10, },
    detailsThree: { fontWeight: '400', fontSize: 12, color: COLORS.ShadowLight },
    waitingSection: { justifyContent: "center", alignItems: "center", marginVertical: 20 },
    waitingSectionText: { fontSize: 15, fontWeight: "600" },
    footerWrapper: {
        flexDirection: "row", justifyContent: "space-between",
        borderTopWidth: 1, paddingHorizontal: width * 0.08, borderTopColor: COLORS.ShadowLight,
        paddingVertical: 20, position: 'absolute', alignItems: "center",
        bottom: 0, left: 0, right: 0, backgroundColor: COLORS.white,
    },
    inputTextWrapper: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1,
        width: width * 0.7, paddingRight: 20, borderRadius: 20, paddingLeft: 10
    },
    plusWrapper: {
        padding: 5, borderWidth: 1, borderRadius: 50, backgroundColor: COLORS.white, shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.6, shadowRadius: 2, elevation: 3,
    },
    plusBlack: { width: 25, height: 25, },
    input: { height: 40, padding: 10, },
});
