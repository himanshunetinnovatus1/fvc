import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backArrow from "../assets/images/backArrow.png";
import dresser from "../assets/images/dresser.png";
import heart from "../assets/images/heart.png";
import tshirt from "../assets/images/tshirt.png";
import cheers from "../assets/images/cheers.png";
import paint from "../assets/images/paint.png";
import bear from "../assets/images/bear.png";
import ticmark from "../assets/images/ticmark.png";
import plus from "../assets/images/plus.png";
import PageStyle from '../const/PageStyle';
import CustomButton from '../components/CustomButton';
import TabsScrollView from '../components/TabsScrollView';   
import COLORS from '../const/colors';

const tabs = [
    { key: 'Type', icon: tshirt, label: 'Type' },
    { key: 'Occasion', icon: cheers, label: 'Occasion' },
    { key: 'Color', icon: paint, label: 'Color' },
    { key: 'Category', icon: dresser, label: 'Category' },
    { key: 'Favorites', icon: heart, label: 'Favorites' },
];

const ClosetPickup = () => {
    const navigationRoute = useNavigation();
    const [activeTab, setActiveTab] = useState('Type');
    const [selectedIndex, setSelectedIndex] = useState(null);

    const items = new Array(1).fill(bear);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.mainWrapper}>
                    <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("CreateFit")}>
                        <Image
                            source={backArrow}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.nameWrapper}>
                        <Text style={[styles.nameText, PageStyle.text]}>Pick from Closet</Text>
                    </View>
                </View>

                <TabsScrollView activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} /> 

                <View style={styles.itemsContainer}>
                    {items.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.itemWrapper} onPress={() => setSelectedIndex(index)}>
                            <Image
                                source={item}
                                style={styles.itemImage}
                                resizeMode="contain"
                            />
                            {selectedIndex === index && (
                                <Image
                                    source={ticmark}
                                    style={styles.ticmark}
                                    resizeMode="contain"
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.buttonMainWrapper}>
                    <CustomButton
                        onPress={() => navigationRoute.navigate("CreateFit")}
                        imageSource={plus}
                        buttonText="Add a Piece"
                        buttonStyle={[styles.buttonWrapper, selectedIndex !== null ? styles.activeColor : styles.inActiveColor]}
                        imageStyle={styles.plus}
                        textStyle={styles.buttonText}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ClosetPickup;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { backgroundColor: "white", flex: 1, width: width, height: height },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08, position: 'relative'
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.08, },
    backArrow: { width: 20, height: 20 },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },

    itemsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: width * 0.08, height: height * 0.75 },
    itemWrapper: { width: '30%', aspectRatio: 1, marginVertical: width * 0.04, alignItems: 'center', position: "relative" },
    itemImage: { height: '100%', width: '100%' },
    ticmark: { width: 18, height: 18, position: "absolute", top: 0, right: 1 },

    buttonMainWrapper: {
        //    marginTop : 5 
    },
    buttonWrapper: {
        flexDirection: "row", marginVertical: width * 0.04, paddingVertical: 10,
        marginHorizontal: width * 0.13, alignItems: "center", justifyContent: "center", borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 4,
        width: '80%'
    },
    activeColor: { backgroundColor:COLORS.ShadowDarkest},
    inActiveColor: { backgroundColor: "#7D7D7D" },
    plus: { width: 16, height: 16, marginRight: 15 },
    buttonText: { fontSize: 16, fontWeight: '500', color: "white" },
});
