
import React, { useState, useEffect } from 'react';
import {
    Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity,
    ScrollView, Image, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../const/colors';
import DP from "../../assets/images/UserPFP.png";
import hamburger from "../../assets/images/setting.png";
import leftLight from "../../assets/images/leftLight.png";
import rightLight from "../../assets/images/rightLight.png";
import Footer from '../../components/footer/footer';
import ThemeStyle from '../../const/ThemeStyle';
import ProfilePieces from '../../components/profile/ProfilePieces';
import ProfileFits from '../../components/profile/ProfileFits';
import ProfileCollections from '../../components/profile/ProfileCollections';



const Profile = ({ route }) => {
    const navigationRoute = useNavigation();


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

    const [activeBTN, setActiveBTN] = useState("MyCloset")
    const [activeTab, setActiveTab] = useState("Pieces")

    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <ScrollView style={{ flex: 1, marginHorizontal: width * 0.04 }} showsVerticalScrollIndicator={false}>

                <View style={styles.mainWrapper}>
                    <TouchableOpacity>
                        <Text style={[styles.profileName,]}>Reallylongusername</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigationRoute.navigate("Inbox")} >
                        <Image
                            source={hamburger}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainWrapperTwo}>
                    <TouchableOpacity onPress={() => navigationRoute.navigate("ProfileEdit")}>
                        <Image
                            source={DP}
                            style={styles.DP}

                        />
                    </TouchableOpacity>
                    <View style={styles.infoSections}>
                        <View style={styles.infoSection}>
                            <Text style={[styles.infoCount,]}>124</Text>
                            <Text style={[styles.infoName,]}>Posts</Text>
                        </View>
                        <View style={styles.infoSection}>
                            <Text style={[styles.infoCount,]}>36k</Text>
                            <Text style={[styles.infoName,]}>Followers</Text>
                        </View>
                        <View style={styles.infoSection}>
                            <Text style={[styles.infoCount,]}>24</Text>
                            <Text style={[styles.infoName,]}>Following</Text>
                        </View>
                    </View>
                </View>


                <View style>
                    <Text style={[styles.infoCount,]}>Long Full Name</Text>
                    <Text style={[styles.infoName,]}>Add a brief description of who you are...</Text>
                </View>

                <View style={styles.tabWrapper}>
                    <View style={[styles.infoSection, { marginLeft: 0 }]}>
                        <Text style={{ fontSize: 12, color: COLORS.ShadowLight, marginBottom: 8 }}>TOTAL PIECES</Text>
                        <Text style={{ fontSize: 14, fontWeight: "700" }}>246</Text>
                    </View>
                    <View style={[styles.infoSection, styles.closetValue]}>
                        <Text style={{ fontSize: 12, color: COLORS.ShadowLight, marginBottom: 8 }}>CLOSET VALUE</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={leftLight}
                                style={styles.light}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: 14, fontWeight: "700", marginHorizontal: 10 }}>$24k</Text>
                            <Image
                                source={rightLight}
                                style={styles.light}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={[styles.infoSection, { marginLeft: 0 }]}>
                        <Text style={{ fontSize: 12, color: COLORS.ShadowLight, marginBottom: 8 }}>TOTAL FITS</Text>
                        <Text style={{ fontSize: 14, fontWeight: "700" }}>47</Text>
                    </View>
                </View>

                <View style={styles.activeBTNWrapper}>
                    <TouchableOpacity onPress={() => setActiveBTN("MyCloset")}>
                        <Text style={[activeBTN === "MyCloset" ? styles.activeBTN : styles.inactiveBTN, { textAlign: "center" }]}>My Closet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveBTN("Marketplace")}>
                        <Text style={[activeBTN === "Marketplace" ? styles.activeBTN : styles.inactiveBTN, { textAlign: "center" }]}>Marketplace</Text>
                    </TouchableOpacity>
                </View>



                {activeBTN === "MyCloset" && (
                    <>
                        <View style={styles.activeTabWrapper}>
                            <TouchableOpacity style={[styles.tabItem, activeTab === "Pieces" ? styles.activeTab : ""]} onPress={() => selectTab("Pieces")}>
                                <Text style={styles.tabTaxt}>Pieces</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabItem, activeTab === "Fits" ? styles.activeTab : ""]} onPress={() => selectTab("Fits")}>
                                <Text style={styles.tabTaxt}>Fits</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabItem, activeTab === "Collections" ? styles.activeTab : ""]} onPress={() => selectTab("Collections")}>
                                <Text style={styles.tabTaxt} >Collections</Text>
                            </TouchableOpacity>
                        </View>
                        {activeTab === "Pieces" && <ProfilePieces />}
                        {activeTab === "Fits" && <ProfileFits />}
                        {activeTab === "Collections" && <ProfileCollections />}
                    </>
                )}

                {activeBTN === "Marketplace" && (
                    <View style={{ alignItems: "center", marginTop: 110 }}>
                        <Text>
                            Coming Soon
                        </Text>
                    </View>
                )}





            </ScrollView>

            <Footer style={styles.footer} activeFooterTab={activeFooterTab} setActiveFooterTab={setActiveFooterTab} />
        </SafeAreaView>
    );
};

export default Profile;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', },
    mainWrapper: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 },
    profileName: { fontSize: 20, fontWeight: '700' },
    backArrow: { width: 20, height: 20 },
    mainWrapperTwo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5, marginVertical: 20 },
    DP: { width: 80, height: 80, borderRadius: 45 },
    infoSections: { flexDirection: "row" },
    infoSection: { justifyContent: "center", alignItems: "center", marginLeft: 20 },
    infoCount: { fontSize: 15, fontWeight: '700' },
    infoName: { fontSize: 13, fontWeight: '400', color: COLORS.ShadowDarkest },
    tabWrapper: {
        flexDirection: "row", backgroundColor: COLORS.btnColorWithOpacity, marginVertical: 20,
        justifyContent: "space-between", borderRadius: 10, padding: 15,
    },
    closetValue: { marginLeft: 0, borderLeftWidth: 0.8, borderRightWidth: 0.8, borderColor: COLORS.BorderGray, paddingHorizontal: 20 },
    light: { width: 15, height: 14 },
    activeBTNWrapper: { backgroundColor: COLORS.backGroundGray, flexDirection: "row", padding: 5, borderRadius: 6 },
    activeBTN: {
        fontSize: 16, paddingHorizontal: 30, paddingVertical: 8, fontWeight: "700",
        backgroundColor: "white", borderRadius: 6, width: width * 0.448, borderWidth: 0.8, borderColor: COLORS.BorderGray
    },
    inactiveBTN: {
        fontSize: 16, paddingHorizontal: 30, paddingVertical: 8, fontWeight: "700",
        color: COLORS.ShadowLight, borderRadius: 6, width: width * 0.448
    },
    activeTabWrapper: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, },
    tabItem: { flex: 1, paddingVertical: 10, marginHorizontal: 5, },
    activeTab: { borderBottomWidth: 2 },
    tabTaxt: { fontSize: 15, textAlign: 'center', fontWeight: "700" },
    pieceImage: { height: 125, width: 110 },


    footer: { height: 60 },













});
