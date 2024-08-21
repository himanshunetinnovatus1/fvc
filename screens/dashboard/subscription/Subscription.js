
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ThemeStyle from '../../../const/ThemeStyle';
import COLORS from '../../../const/colors';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../../components/Loader';
import backArrow from "../../../assets/images/backArrow.png"
import tTick from "../../../assets/images/tTick.png"


const Subscription = () => {
    const navigationRoute = useNavigation();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Loader visible={loading} />
            <View style={[styles.mainContainer, ThemeStyle.iosClass]}>

                <View style={[styles.mainWrapper, { borderWidth: 1 }]}>
                    <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.goBack()}>
                        <Image
                            source={backArrow}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.nameWrapper}>
                        <Text style={[styles.nameText]}>Select Subscription</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20, }}>
                    <View>
                        <Text style={{ fontSize: 26, fontWeight: "600" }}>Unlock Fitted<Text style={{ fontStyle: 'italic', fontWeight: "700" }}>Unlimited</Text></Text>
                        <Text style={{ fontSize: 16, marginTop: 5, marginBottom: 10 }} >Choose a monthly or annual subscription to start building your closet.</Text>
                    </View>
                    <View style={{ marginTop: 5, marginBottom: 10, }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={tTick}
                                style={styles.tTick}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 16, }}>Upload unlimited Pieces</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={tTick}
                                style={styles.tTick}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 16 }}>Create unlimited Fits</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={tTick}
                                style={styles.tTick}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 16 }}>Create Unlimited Collections</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={tTick}
                                style={styles.tTick}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 16 }}>Early access to new features</Text>
                        </View>
                    </View>
                </View>

            </View>
        </>
    );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: { backgroundColor: "white", height: height, },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, position: 'relative', marginBottom: height * 0.015,
    },
    backArrowWrapper: { position: 'absolute', left: 20, },
    backArrow: { width: 23, height: 23, },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 24, fontWeight: '700', textAlign: 'center' },
    tTick: { width: 15, height: 15 },

});

export default Subscription;
