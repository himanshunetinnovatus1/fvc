
import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bigDresser from "../../assets/images/bigDresser.png";
import tshirtMenu from "../../assets/images/tshirtMenu.png";
import profile from "../../assets/images/profile.png";
import bigDresserFade from "../../assets/images/bigDresserFade.png";
import tshirtMenuFade from "../../assets/images/tshirtMenuFade.png";
import profileFade from "../../assets/images/profileFade.png";
import lensF from "../../assets/images/lensF.png";
import lensFade from "../../assets/images/lensFade.png";
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';


const Footer = ({ activeFooterTab, setActiveFooterTab }) => {
    const navigation = useNavigation();

    const handleTabPress = (tabName) => {
        if (tabName === "Closet") {
            setActiveFooterTab(tabName);

            navigation.navigate("MainDashboard", { activeFooterTab: tabName });
        } else if (tabName === "CreateFit") {
            setActiveFooterTab(tabName);
            navigation.navigate("CreateFit", { activeFooterTab: tabName });
        } else if (tabName === "Profile") {
            setActiveFooterTab(tabName);
            navigation.navigate("Profile", { activeFooterTab: tabName });
        } else if (tabName === "Search") {
            setActiveFooterTab(tabName);
            navigation.navigate("Search", { activeFooterTab: tabName });
        }
    };

    return (
        <View style={styles.mainWrapper}>
            <TouchableOpacity onPress={() => handleTabPress('Closet')}>
                <View style={styles.subTabsWrapper}>
                    <Image
                        source={activeFooterTab === "Closet" ? bigDresser : bigDresserFade}
                        style={styles.catImage}
                    />
                    <Text style={[activeFooterTab === "Closet" ? styles.wrapperText : styles.activeTab, PageStyle.text]}>My Closet</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress('Search')}>
                <View style={styles.subTabsWrapper}>
                    <Image
                        source={activeFooterTab === "Search" ? lensF : lensFade}
                        style={styles.catImage}
                    />
                    <Text style={[activeFooterTab === "Search" ? styles.wrapperText : styles.activeTab, PageStyle.text]}>Discover</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress('CreateFit')}>
                <View style={styles.subTabsWrapper}>
                    <Image
                        source={activeFooterTab === "CreateFit" ? tshirtMenu : tshirtMenuFade}
                        style={styles.catImage}
                    />
                    <Text style={[activeFooterTab === "CreateFit" ? styles.wrapperText : styles.activeTab, PageStyle.text]}>Make a Fit</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress('Profile')}>
                <View style={styles.subTabsWrapper}>
                    <Image
                        source={activeFooterTab === "Profile" ? profile : profileFade}
                        style={styles.catImage}
                    />
                    <Text style={[activeFooterTab === "Profile" ? styles.wrapperText : styles.activeTab, PageStyle.text]}>Profile</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainWrapper: {
        flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1,
        borderTopColor: COLORS.white, paddingTop: 15, paddingBottom: 10,
    },
    subTabsWrapper: { alignItems: "center", paddingVertical: 5, paddingHorizontal: 15, },
    wrapperText: { color: COLORS.ShadowDarkest, },
    activeTab: { color: COLORS.ShadowDarkest, opacity: 0.3 },
    catImage: { aspectRatio: 1, resizeMode: 'contain' },
    catImageTwo: { width: 70, height: 58, },
    catImageThree: { width: 58, height: 55, }
});
