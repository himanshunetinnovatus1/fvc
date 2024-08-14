


import React, { useState, useEffect } from 'react';
import {
    Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity,
    ScrollView, Image, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../const/colors';
import DP from "../../assets/images/profileDp.png";
import hamburger from "../../assets/images/hamburger.png";
import jacket from "../../assets/images/jacket.png";
import PageStyle from '../../const/PageStyle';
import Footer from '../../components/footer/footer';
import Tp from "../../assets/images/Tp.png";
import TpFades from "../../assets/images/TpFade.png";
import tshirtOne from "../../assets/images/tshirtOne.png";
import tshirtOneFade from "../../assets/images/tshirtOneFade.png";
import cart from "../../assets/images/cart.png";
import cartFade from "../../assets/images/cartFade.png";
import ThemeStyle from '../../const/ThemeStyle';

const Profile = ({ route }) => {
    const navigationRoute = useNavigation();

    const [activeTab, setActiveTab] = useState("Fits");

    const [activeFooterTab, setActiveFooterTab] = useState('Profile');
    useEffect(() => {
        if (route.params && route.params.activeFooterTab) {
            setActiveFooterTab(route.params.activeFooterTab);
        } else {
            setActiveFooterTab('Profile');
        }
    }, [route.params]);

    const selectTab = (item) => {
        setActiveTab(item);
    };

    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <ScrollView style={{ flex: 1, marginHorizontal: width * 0.04 }} showsVerticalScrollIndicator={false}>
                <View style={styles.mainWrapper}>
                    <TouchableOpacity  >
                        <Text style={[styles.profileName, PageStyle.text]}>reid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nameWrapper} onPress={() => navigationRoute.navigate("Inbox")} >
                        <Image
                            source={hamburger}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainWrapperTwo}>
                    <View style={styles.DpANDName}>
                        <View style={styles.DpWrapper}>
                            <Image
                                source={DP}
                                style={styles.DP}
                                width={150}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={styles.infoSections}>
                        <View style={styles.infoSection}>
                            <Text style={[styles.infoCount, PageStyle.text]}>4</Text>
                            <Text style={[styles.infoName, PageStyle.text]}>Pieces</Text>
                        </View>
                        <View style={styles.infoSection}>
                            <Text style={[styles.infoCount, PageStyle.text]}>4</Text>
                            <Text style={[styles.infoName, PageStyle.text]}>Followers</Text>
                        </View>
                        <View style={styles.infoSection}>
                            <Text style={[styles.infoCount, PageStyle.text]}>4</Text>
                            <Text style={[styles.infoName, PageStyle.text]}>Following</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.profileInfoSection}>
                    <Text style={[styles.infoCount, PageStyle.text]}>Reid Moncada</Text>
                    <Text style={[styles.infoName, PageStyle.text]}>Co-Founder and CEO of Fitted. Buy my clothes!</Text>

                    <View style={styles.editProfileSection}>
                        <TouchableOpacity style={styles.editProfileBTN} onPress={() => navigationRoute.navigate("ProfileEdit")}>
                            <Text style={[styles.editBtnText, PageStyle.text]}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editProfileBTN}>
                            <Text style={[styles.editBtnText, PageStyle.text]}>Share Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.tabWrapper}>
                    <TouchableOpacity style={activeTab === "Fits" ? styles.tabImageWrapper : styles.tabImageWrappeTwor} onPress={() => selectTab("Fits")}>
                        <Image
                            source={activeTab === "Fits" ? tshirtOneFade : tshirtOne}
                            style={styles.tabImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={activeTab === "Collections" ? styles.tabImageWrapper : styles.tabImageWrappeTwor} onPress={() => selectTab("Collections")}>
                        <Image
                            source={activeTab === "Collections" ? TpFades : Tp}
                            style={styles.tabImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={activeTab === "Cart" ? styles.tabImageWrapper : styles.tabImageWrappeTwor} onPress={() => selectTab("Cart")}>
                        <Image
                            source={activeTab === "Cart" ? cartFade : cart}
                            style={styles.tabImage}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.tabTittle, PageStyle.text]}>{activeTab}</Text>

                {activeTab === "Fits" &&
                    <View style={styles.tabWrapperBody}>
                        <View style={styles.bodyWrapper}>
                            <TouchableOpacity style={styles.addPiece}>
                                <Image
                                    source={jacket}
                                    style={styles.pieceImage}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addPiece}>
                                <Image
                                    source={jacket}
                                    style={styles.pieceImage}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addPiece}>
                                <Image
                                    source={jacket}
                                    style={styles.pieceImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                {activeTab === "Collections" &&
                    <View style={styles.tabWrapperBody}>
                        <ScrollView horizontal={true} style={styles.horizontalScrollView} showsHorizontalScrollIndicator={false}>
                            <View style={styles.bodyWrapperTwo}>
                                <View style={styles.CollectionBoxes}></View>
                                <View style={styles.CollectionBoxes}></View>
                                <View style={styles.CollectionBoxes}></View>
                                <View style={styles.CollectionBoxes}></View>
                            </View>
                        </ScrollView>
                        <View>
                            <Text style={[styles.innerTittle, PageStyle.text]}>Fits</Text>
                            <View style={styles.fitsWrapper}>
                                <View style={styles.CollectionBoxes}></View>
                                <View style={styles.CollectionBoxes}></View>
                            </View>
                        </View>
                    </View>
                }

                {activeTab === "Cart" &&
                    <View style={styles.tabWrapperBodyTwo}>
                        <View style={styles.bodyWrapperCart}>
                            <Image
                                source={jacket}
                                style={styles.pieceImage}
                            />
                            <Text style={styles.bodyWrapperCartText} >Umbro Jacket</Text>
                            <Text style={styles.cartItemPrice} >$ 25</Text>
                        </View>
                        <View style={styles.bodyWrapperCart}>
                            <Image
                                source={jacket}
                                style={styles.pieceImage}
                            />
                            <Text style={styles.bodyWrapperCartText} >Umbro Jacket</Text>
                            <Text style={styles.cartItemPrice} >$ 25</Text>
                        </View>
                        <View style={styles.bodyWrapperCart}>
                            <Image
                                source={jacket}
                                style={styles.pieceImage}
                            />
                            <Text style={styles.bodyWrapperCartText} >Umbro Jacket</Text>
                            <Text style={styles.cartItemPrice} >$ 25</Text>
                        </View>
                    </View>
                }
            </ScrollView>

            <Footer style={styles.footer} activeFooterTab={activeFooterTab} setActiveFooterTab={setActiveFooterTab} />
        </SafeAreaView>
    );
};

export default Profile;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingVertical: width * 0.04, paddingHorizontal: width * 0.03,
    },
    mainWrapperTwo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: width * 0.03, marginBottom: 15 },
    backArrow: { width: 20, height: 20 },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    profileName: { fontSize: 28, fontWeight: '800' },
    DP: { width: 65, height: 65, borderRadius: 45 },
    infoSections: { flexDirection: "row" },
    infoSection: { justifyContent: "center", alignItems: "center", marginLeft: 20 },
    infoCount: { fontSize: 18, fontWeight: '700' },
    infoName: { fontSize: 15, fontWeight: '400', color: COLORS.ShadowDarkest },
    profileInfoSection: { paddingLeft: width * 0.03 },
    editProfileSection: { paddingHorizontal: width * 0.05, flexDirection: "row", justifyContent: "space-between", paddingVertical: width * 0.04, marginBottom: 15 },
    editProfileBTN: { paddingVertical: width * 0.018, paddingHorizontal: width * 0.08, backgroundColor: COLORS.ShadowLight, borderRadius: 10 },
    editBtnText: { fontWeight: '700', fontSize: 14 },
    addPiece: { width: width * 0.27, marginBottom: 15, alignItems: 'center', justifyContent: 'center' },
    pieceImage: { height: 125, width: 110 },
    tabWrapper: {
        flexDirection: "row", marginHorizontal: width * 0.03, backgroundColor: COLORS.lightGray,
        justifyContent: "space-around", paddingVertical: 10, borderRadius: 50, paddingHorizontal: 20
    },
    tabImageWrapper: { backgroundColor: COLORS.ShadowDarkest, paddingVertical: 5, paddingHorizontal: 15, borderRadius: 15 },
    tabImageWrappeTwor: { backgroundColor: COLORS.lightGray, paddingVertical: 5, paddingHorizontal: 15, borderRadius: 15 },
    tabImage: { width: 35, height: 35 },
    tabWrapperBody: { paddingHorizontal: width * 0.03 },
    tabWrapperBodyTwo: { paddingHorizontal: width * 0.03, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", paddingTop: 15 },
    tabTittle: { fontSize: 22, fontWeight: '700', marginTop: 15, paddingHorizontal: width * 0.03 },
    bodyWrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginTop: 20 },
    bodyWrapperTwo: { flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", },
    horizontalScrollView: { marginTop: 10 },
    CollectionBoxes: { width: 120, height: 120, borderWidth: 1, borderRadius: 8, marginRight: 15, },
    footer: { height: 60 },
    bodyWrapperCart: {
        justifyContent: "center", borderWidth: 1, width: "48%", padding: 20,
        borderRadius: 15, backgroundColor: COLORS.Tertiart, position: "relative", marginBottom: 15
    },
    bodyWrapperCartText: { textAlign: "center", fontSize: 16, fontWeight: '500', marginTop: 10 },
    cartItemPrice: { position: "absolute", fontSize: 18, fontWeight: '700', top: 10, left: 10 },
    innerTittle: { fontSize: 22, fontWeight: '700', marginVertical: 10 },
    fitsWrapper: { flexDirection: "row" }
});
