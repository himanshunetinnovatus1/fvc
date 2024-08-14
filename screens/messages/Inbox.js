import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import COLORS from '../../const/colors';
import PageStyle from '../../const/PageStyle';
import men from '../../assets/images/men.png';
import infinity from '../../assets/images/infinity.png';
import backArrow from '../../assets/images/backArrow.png';
import { useNavigation } from '@react-navigation/native';
import ThemeStyle from '../../const/ThemeStyle';

const Inbox = () => {
    const navigationRoute = useNavigation();

    return (
        <View style={[styles.mainContainerWrapper,ThemeStyle.iosClass]}>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("Profile")}>
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.nameWrapper}>
                    <Text style={[styles.nameText, PageStyle.text]}>Messages</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigationRoute.navigate("MessageSccreen")} style={styles.messageWrapper}>
                <View style={styles.textWithImage} >
                    <Image
                        source={men}
                        style={styles.messageProfile}
                        resizeMode="contain"
                    />
                    <View style={styles.detailsWrapper}>
                        <View style={styles.tittleTime}>
                            <Text style={[styles.tittle, PageStyle.text]}>Fitted</Text>
                            <Text style={[styles.tittle, styles.timeText, PageStyle.text]}>6:45am</Text>
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={[styles.text, styles.limitedTextWidth]} numberOfLines={1} ellipsizeMode='tail'>
                                Hey! What’s the size of that pants you have upload for yesterday event  Hey! What’s the size of that p..
                            </Text>
                            <Text style={styles.Count}> 1 </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.messageWrapper}>
                <View style={styles.textWithImage} >
                    <Image
                        source={infinity}
                        style={styles.messageProfile}
                        resizeMode="contain"
                    />
                    <View style={styles.detailsWrapper}>
                        <View style={styles.tittleTime}>
                            <Text style={[styles.tittle, PageStyle.text]}>Poshmark</Text>
                            <Text style={[styles.tittle, styles.timeTwo, PageStyle.text]}>6:45am</Text>
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={[styles.text, styles.limitedTextWidth]} numberOfLines={1} ellipsizeMode='tail'>
                                Hey! What’s the size of that pants you have upload for yesterday event  Hey! What’s the size of that p..
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Inbox;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainerWrapper: { backgroundColor: COLORS.white, flex: 1 },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08,
        position: 'relative', borderBottomWidth: 1,
        borderBlockColor: COLORS.lightGray
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.08, },
    backArrow: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    messageWrapper: { paddingVertical: width * 0.03, paddingHorizontal: width * 0.05, },
    messageProfile: { width: 70, height: 70 },
    textWithImage: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", },
    detailsWrapper: { width: '75%', marginLeft: 10 },
    tittleTime: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    tittle: { fontSize: 22, fontWeight: '700' },
    timeText: { color: COLORS.TextGreen },
    timeTwo: { color: COLORS.ShadowDarkest, fontWeight: '600' },
    textWrapper: { flexDirection: 'row', alignItems: "center", justifyContent: "space-between" },
    text: { fontSize: 16, marginTop: 5 },
    Count: { backgroundColor: COLORS.TextGreen, color: "white", fontSize: 18, paddingHorizontal: 8, borderRadius: 15 },
    limitedTextWidth: { width: '85%' },


});
