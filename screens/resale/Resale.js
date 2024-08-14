import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import NotifiyChatHeader from '../../components/headers/NotifiyChatHeader';
import diceTwo from "../../assets/images/diceTwo.png";
import chain from "../../assets/images/chain.png";
import star from "../../assets/images/star.png";
import uploadTwo from "../../assets/images/uploadTwo.png";
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';
import NetInfo from '@react-native-community/netinfo';


const Resale = () => {
    // const [isSlowConnection, setIsSlowConnection] = useState(false);
    // useEffect(() => {
    //     const unsubscribe = NetInfo.addEventListener(state => {
    //         console.log("net", state)
    //         if (
    //             state.type === 'cellular' &&
    //             (state.details.cellularGeneration === '2g' || state.details.cellularGeneration === '3g') ||
    //             state.isInternetReachable === false
    //         ) {
    //             setIsSlowConnection(true);
    //         } else {
    //             setIsSlowConnection(false);
    //         }
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);
    return (
        <SafeAreaView style={styles.safeArea}>
            <NotifiyChatHeader />

            <View style={styles.priceContainer}>
                <View style={styles.mainCard}>
                    <Text style={[styles.priceText, PageStyle.text]}>$100</Text>
                    <Text style={[styles.descriptionText, PageStyle.text]}>Fitted Market Value of your Closet</Text>
                    <View style={styles.bottemWrapper}>
                        <View style={styles.leftCircle}>
                            <Image style={styles.leftCircleIcon} source={uploadTwo} />
                        </View>
                        <View style={styles.linkContainer}>
                            <Image style={styles.linkIcon} source={chain} />
                            <Text style={[styles.linkText, PageStyle.text]}>fitted.io/@ogden</Text>
                        </View>
                        <View style={styles.rightCircle}>
                            <Image style={styles.rightCircleIcon} source={diceTwo} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.reviewContainer}>
                <View>
                    <View style={styles.starWrapper}>
                        <Text style={styles.statValue}>5.0</Text>
                        <View style={styles.starWrapper}>
                            <Image style={styles.rightCircleIcon} source={star} />
                            <Image style={styles.rightCircleIcon} source={star} />
                            <Image style={styles.rightCircleIcon} source={star} />
                            <Image style={styles.rightCircleIcon} source={star} />
                            <Image style={styles.rightCircleIcon} source={star} />
                        </View>
                    </View>
                    <Text style={[styles.statValue, PageStyle.text]}>2 Reviews</Text>
                </View>
                <View>
                    <Text style={[styles.statValue, PageStyle.text]}>4</Text>
                    <Text style={[styles.statLabel, PageStyle.text]}>Listed</Text>
                </View>
                <View>
                    <Text style={[styles.statValue, PageStyle.text]}>4</Text>
                    <Text style={[styles.statLabel, PageStyle.text]}>Sold</Text>
                </View>
                <View>
                    <Text style={[styles.statValue, PageStyle.text]}>4</Text>
                    <Text style={[styles.statLabel, PageStyle.text]}>Likes</Text>
                </View>
            </View>
            <View style={styles.partition}></View>

            <View style={styles.tabContainer}>
                <Text style={[styles.tabContainerText, PageStyle.text]}>For Sale</Text>
                <Text style={[styles.tabContainerText, PageStyle.text]}>Public</Text>
                <Text style={[styles.tabContainerText, PageStyle.text]}>Sold</Text>
                <Text style={[styles.tabContainerText, PageStyle.text]}>Drafts</Text>
            </View>



        </SafeAreaView>
    )
}

export default Resale;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },
    priceContainer: { alignItems: 'center', justifyContent: 'center', },
    mainCard: {
        width: width * 0.93, height: height * 0.298, backgroundColor: COLORS.lightGreenBG,
        borderRadius: 27, alignItems: 'center', justifyContent: 'center',
    },
    priceText: { fontSize: 83, fontWeight: '400', color: COLORS.ShadowDarkest, textAlign: 'center', },
    descriptionText: { fontSize: 16, fontWeight: '400', color: COLORS.ShadowDarkest, textAlign: 'center', marginTop: 10, },
    bottemWrapper: { flexDirection: "row", marginTop: 20, justifyContent: "space-between", alignItems: "center", width: '85%' },
    linkContainer: {
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15,
        backgroundColor: COLORS.moreLightGreenBG, borderRadius: 14, paddingVertical: 8,
    },
    linkText: {
        fontSize: 16, fontWeight: '400', color: COLORS.ShadowDarkest,
        textAlign: 'center', marginLeft: 10,
    },
    leftCircle: {
        backgroundColor: COLORS.ShadowDarkest, padding: 5,
        borderRadius: 25, alignItems: 'center', justifyContent: 'center',
    },
    leftCircleIcon: { width: 22, height: 22, },
    rightCircle: {
        padding: 7, backgroundColor: COLORS.ShadowDarkest, alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 25, justifyContent: 'center',
    },
    rightCircleIcon: { width: 19, height: 19, },
    reviewContainer: {
        marginHorizontal: width * 0.1, paddingVertical: height * 0.02,
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    },
    statValue: { color: 'black', fontSize: 17, fontWeight: '700', marginRight: 3 },
    starWrapper: { flexDirection: "row" },
    statLabel: { color: 'black', fontSize: 14, fontWeight: '600', },
    partition: { width: width, height: 10, backgroundColor: COLORS.lightGray },
    tabContainer: {
        width: width, paddingVertical: 10, borderEndWidth: 1, flexDirection: "row",
        justifyContent: "space-around", paddingHorizontal: 12
    },
    tabContainerText: { fontSize: 25, fontWeight: "500", }
})
