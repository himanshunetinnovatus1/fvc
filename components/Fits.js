
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, Image
} from 'react-native';
import cap from "../assets/images/cap.png";
import upper from "../assets/images/upper.png";
import pants from "../assets/images/pants.png";
import shoes from "../assets/images/shoes.png";
import ticmark from "../assets/images/ticmark.png"

const Fits = ({ selectedIndices, selectedItems }) => {

    return (
        <View style={styles.fitItemsContainer}>
            {[1, 2, 3, 4, 5, 6,].map((_, index) => (
                <TouchableOpacity key={index} style={styles.fitItem} onPress={() => selectedItems(index)}>
                    <View style={styles.fitItemWrapper}>
                        <View>
                            <Image
                                source={cap}
                                style={styles.headItem}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                source={upper}
                                style={styles.upperItem}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                source={pants}
                                style={styles.lowerItem}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                source={shoes}
                                style={styles.shoesItem}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    {selectedIndices.includes(index) && (
                        <View style={styles.ticmarkWrapper}>
                            <Image
                                source={ticmark}
                                style={styles.ticmark}
                                resizeMode="contain"
                            />
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Fits;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', height: height, width: width },
    fitItemsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", padding: 10, },
    fitItem: { width: "48%", alignItems: "center", justifyContent: "center", marginBottom: 40, position: "relative" },
    fitItemWrapper: { alignItems: "center", },
    headItem: { width: width * 0.16, height: width * 0.16 },
    upperItem: { width: width * 0.35, height: width * 0.35 },
    lowerItem: { width: width * 0.4, height: width * 0.4 },
    shoesItem: { width: width * 0.3, height: width * 0.2 },
    ticmarkWrapper: { position: "absolute", top: 15, right: 15 },
    ticmark: { width: 18, height: 18, },

});
