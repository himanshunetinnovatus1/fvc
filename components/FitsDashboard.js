
import React, { useState } from 'react';
import {
    View, StyleSheet, Dimensions, TouchableOpacity, Image, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cap from "../assets/images/capOne.png";
import upper from "../assets/images/upperOne.png";
import pants from "../assets/images/shorts.png";
import shoes from "../assets/images/shoesOne.png";
import COLORS from '../const/colors';


const FitsDashboard = () => {
    const navigationRoute = useNavigation();
    return (

        <View style={[styles.fitItemsContainer]}>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <TouchableOpacity key={index} style={styles.fitItem} onPress={() => navigationRoute.navigate("FitDetails")}>
                    <View style={styles.fitItemWrapper}>
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
                                source={pants}
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

    );
};

export default FitsDashboard;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    fitItemsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20},
    fitItem: { width: "30%", marginBottom: 20, position: "relative", marginHorizontal: 5 },
    fitItemWrapper: {
        alignItems: "center", padding: 10, borderRadius: 10,
        backgroundColor: COLORS.white, shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25,
        shadowRadius: 3.84, elevation: 5,
    },
    stylesCssOne: { borderWidth: 0, borderRadius: 10, marginTop: 20, width: "100%" },
    headItem: { width: width * 0.09, height: height * 0.03 },
    upperItem: { width: width * 0.2, height: height * 0.1 },
    lowerItem: { width: width * 0.2, height: height * 0.1 },
    shoesItem: { width: width * 0.2, height: width * 0.1 },
    ticmarkWrapper: { position: "absolute", top: 15, right: 15 },
    ticmark: { width: 18, height: 18, },
    addPiece: {
        width: width * 0.27, marginBottom: 10, alignItems: 'center', justifyContent: 'center',
    },
    addPieceText: { fontSize: 80, fontWeight: '400', color: COLORS.ShadowDarkest, textAlign: "center" },
    addPieceTextTwo: { fontSize: 18, fontWeight: '500', color: COLORS.ShadowDarkest },

});
