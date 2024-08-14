

// import React from 'react';
// import {
//     View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import COLORS from '../const/colors';
// import Button from './Button';
// import ThemeStyle from '../const/ThemeStyle';
// import { useState } from 'react';
// const Collections = () => {
//     const navigationRoute = useNavigation();
//     const test = () => {
//         setModalVisible(false);
//     };
//     return (
//         <View style={styles.mainWrapper}>
//             <View style={styles.container}>
//                 <View style={styles.textContainer}>
//                     <Text style={styles.mainText}>Your collections will{'\n'}appear here</Text>
//                     <Text style={styles.subText}>Tap the button below to create your first collection</Text>
//                 </View>
//                 <Button
//                     title="Create Collection"
//                     buttonType
//                     bgColor={COLORS.btnColor}
//                     btnTextColor={COLORS.ShadowDarkest}
//                     stylesCss={ThemeStyle.stylesCssOne}
//                     btnwidth="100%"
//                     onPress={test}
//                 />
//             </View>
//         </View>
//     );
// };

// export default Collections;
// const { width, height } = Dimensions.get('window');
// const styles = StyleSheet.create({
//     mainWrapper: { justifyContent: "center", alignItems: "center", height: height * 0.638 },
//     container: { width: width * 0.9, },
//     textContainer: { alignItems: 'center', gap: width * 0.05, },
//     mainText: { textAlign: 'center', color: COLORS.SecondaryDarkest, fontSize: 24, fontWeight: '600', },
//     subText: { textAlign: 'center', color: '#1E1E1E', fontSize: 14, },
// });











import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../const/colors';
import Button from './Button';
import ThemeStyle from '../const/ThemeStyle';


import cap from "../assets/images/capOne.png";
import shorts from "../assets/images/shorts.png";
import upper from "../assets/images/upperOne.png";
import shoes from "../assets/images/shoesOne.png";


const Collections = ({ handlePresentModalPress, fitPresent, SetfitPresent }) => {
    const navigationRoute = useNavigation();


    return (

        <>
            {fitPresent ? (
                <View style={[styles.fitItemsContainer]}>
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <TouchableOpacity key={index} style={styles.fitItem} onPress={() => navigationRoute.navigate("CollectionsDetails")}>

                            <View style={styles.fitItemWrapper}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontWeight: "600" }}>Summertime</Text>
                                    <Text style={{ fontSize: 12, color: COLORS.SecondaryDark }}>2 Looks</Text>
                                </View>
                                <View>
                                    <Image
                                        source={cap}
                                        style={styles.headItem}
                                        resizeMode='center'
                                    />
                                </View>
                                <View>
                                    <Image
                                        source={upper}
                                        style={styles.upperItem}
                                        resizeMode='center'
                                    />
                                </View>
                                <View>
                                    <Image
                                        source={shorts}
                                        style={styles.lowerItem}
                                        resizeMode='center'
                                    />
                                </View>
                                <View>
                                    <Image
                                        source={shoes}
                                        style={styles.shoesItem}
                                        resizeMode='center'
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            ) : (
                <View style={styles.mainWrapper}>
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={styles.mainText}>Your collections will{'\n'}appear here</Text>
                            <Text style={styles.subText}>Tap the button below to create your first collection</Text>
                        </View>
                        <Button
                            title="Create Collection"
                            buttonType
                            bgColor={COLORS.btnColor}
                            btnTextColor={COLORS.ShadowDarkest}
                            stylesCss={ThemeStyle.stylesCssOne}
                            btnwidth="100%"
                            onPress={handlePresentModalPress}
                        />
                    </View>
                </View>

            )}



        </>

    );
};

export default Collections;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainWrapper: { justifyContent: "center", alignItems: "center", height: height * 0.638 },
    container: { width: width * 0.9, },
    textContainer: { alignItems: 'center', gap: width * 0.05, },
    mainText: { textAlign: 'center', color: COLORS.SecondaryDarkest, fontSize: 24, fontWeight: '600', },
    subText: { textAlign: 'center', color: '#1E1E1E', fontSize: 14, },




    fitItemsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 },
    fitItem: { width: "30%", marginBottom: 20, position: "relative", marginHorizontal: 5 },
    fitItemWrapper: {
        alignItems: "center", padding: 10, borderRadius: 10,
        backgroundColor: COLORS.white, shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25,
        shadowRadius: 3.84, elevation: 5,
    },
    stylesCssOne: { borderWidth: 0, borderRadius: 10, marginTop: 20, width: "100%" },
    headItem: { width: width * 0.08, height: height * 0.02, marginVertical: 8 },
    upperItem: { width: width * 0.15, height: height * 0.075, },
    lowerItem: { width: width * 0.15, height: height * 0.075, marginVertical: 8 },
    shoesItem: { width: width * 0.15, height: width * 0.075 },
   


});
