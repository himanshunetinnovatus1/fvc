import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import cap from "../../assets/images/capOne.png";
import upper from "../../assets/images/upperOne.png";
import shorts from "../../assets/images/shorts.png";
import shoes from "../../assets/images/shoesOne.png";
import COLORS from '../../const/colors';
import { useNavigation } from '@react-navigation/native';

const ProfileCollections = () => {
    const navigationRoute = useNavigation();

    return (
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
    )
}

export default ProfileCollections;

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    fitItemsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 },
    fitItem: { width: "30%", marginBottom: 20, position: "relative", marginHorizontal: 5 },
    fitItemWrapper: {
        alignItems: "center", padding: 10, borderRadius: 10, backgroundColor: COLORS.white,
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25,
        shadowRadius: 3.84, elevation: 5,
    },
    headItem: { width: width * 0.08, height: height * 0.02, marginVertical: 8 },
    upperItem: { width: width * 0.15, height: height * 0.075, },
    lowerItem: { width: width * 0.15, height: height * 0.075, marginVertical: 8 },
    shoesItem: { width: width * 0.15, height: width * 0.075 },
})