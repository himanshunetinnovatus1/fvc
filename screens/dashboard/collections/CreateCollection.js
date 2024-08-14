import React, { useState } from 'react';
import {
    StyleSheet, Text, Image, View, Dimensions,
    SafeAreaView, TouchableOpacity, ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backArrow from "../../../assets/images/backArrow.png";
import dresser from "../../../assets/images/dresser.png";
import heart from "../../../assets/images/heart.png";
import tshirt from "../../../assets/images/tshirt.png";
import cheers from "../../../assets/images/cheers.png";
import paint from "../../../assets/images/paint.png";
import plus from "../../../assets/images/plus.png";
import PageStyle from '../../../const/PageStyle';
import CustomButton from '../../../components/CustomButton';
import TabsScrollView from '../../../components/TabsScrollView';
import COLORS from '../../../const/colors';
import Pieces from '../../../components/Pieces';
import Fits from '../../../components/Fits';

const tabs = [
    { key: 'Type', icon: tshirt, label: 'Type' },
    { key: 'Occasion', icon: cheers, label: 'Occasion' },
    { key: 'Color', icon: paint, label: 'Color' },
    { key: 'Category', icon: dresser, label: 'Category' },
    { key: 'Favorites', icon: heart, label: 'Favorites' },
];

const CreateCollection = () => {
    const navigationRoute = useNavigation();
    const [activeTab, setActiveTab] = useState('Type');
    const [activeSuperTab, setActiveSuperTab] = useState('Pieces');
    const [selectedIndices, setSelectedIndices] = useState([]);

    const selectedItems = (item) => {
        setSelectedIndices((prev) => {
            const newSelection = [...prev];
            if (newSelection.includes(item)) {
                return newSelection.filter(i => i !== item);
            } else {
                newSelection.push(item);
                return newSelection;
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("MainDashboard")}>
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.nameWrapper}>
                    <Text style={[styles.nameText, PageStyle.text]}>Create Collection</Text>
                </View>
            </View>

            <View style={styles.tabsWrapper}>
                <TouchableOpacity onPress={() => setActiveSuperTab('Pieces')}>
                    <Text style={[activeSuperTab === 'Pieces' ? styles.activeTab : styles.tabsText, PageStyle.text]}>
                        Pieces
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveSuperTab('Fits')}>
                    <Text style={[activeSuperTab === 'Fits' ? styles.activeTab : styles.tabsText, PageStyle.text]}>
                        Fits
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <TabsScrollView activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            </View>

            <ScrollView style={styles.contentWrapper}>
                <View>
                    {activeSuperTab === 'Pieces' && (
                        <Pieces CreateCollection={true} />
                    )}
                    {activeSuperTab === 'Fits' && (
                        <View>
                            <Fits selectedIndices={selectedIndices} setSelectedIndices={setSelectedIndices} selectedItems={selectedItems} />
                        </View>
                    )}
                </View>
            </ScrollView>

            <View style={styles.buttonMainWrapper}>
                <CustomButton
                    onPress={() => navigationRoute.navigate("SaveCollection")}
                    imageSource={plus}
                    buttonText="Add Fit(s)"
                    buttonStyle={[styles.buttonWrapper, selectedIndices.length !== 0 ? styles.activeColor : styles.inActiveColor]}
                    imageStyle={styles.plus}
                    textStyle={styles.buttonText}
                />
            </View>
        </SafeAreaView>
    );
};

export default CreateCollection;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { backgroundColor: "white", flex: 1, width: width, height: height },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08, position: 'relative'
    },
    tabsWrapper: {
        flexDirection: 'row', justifyContent: "flex-start",
        marginHorizontal: width * 0.11, paddingBottom: width * 0.06,
    },
    activeTab: {
        textAlign: 'center', color: COLORS.ShadowDarkest, fontSize: 27,
        fontWeight: '700', textDecorationLine: 'underline', marginRight: 25
    },
    tabsText: {
        textAlign: 'center', color: COLORS.ShadowDarkest, fontSize: 27,
        fontWeight: '400', opacity: 0.3, marginRight: 25
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.08, },
    backArrow: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    content: { paddingHorizontal: width * 0.01, paddingBottom: width * 0.07 },

    buttonMainWrapper: { paddingHorizontal: width * 0.08, backgroundColor: 'white', paddingBottom: 20 },
    buttonWrapper: {
        flexDirection: "row", marginVertical: width * 0.04, paddingVertical: 10,
        alignItems: "center", justifyContent: "center", borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3, shadowRadius: 3.84,
        elevation: 4, width: '100%'
    },
    activeColor: { backgroundColor: COLORS.ShadowDarkest },
    inActiveColor: { backgroundColor: "#7D7D7D" },
    plus: { width: 16, height: 16, marginRight: 15 },
    buttonText: { fontSize: 16, fontWeight: '500', color: "white" },

    contentWrapper: { flex: 1, marginHorizontal: width * 0.04, },
});
