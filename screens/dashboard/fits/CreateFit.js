

import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView,
    Dimensions, TouchableOpacity, Image,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cap from "../../../assets/images/capOne.png";
import upper from "../../../assets/images/upperOne.png";
import pants from "../../../assets/images/shorts.png";
import shoes from "../../../assets/images/shoesOne.png";
import PageStyle from '../../../const/PageStyle';
import backArrow from "../../../assets/images/backArrow.png";
import threeDots from "../../../assets/images/threeDots.png";
import ThemeStyle from '../../../const/ThemeStyle';
import COLORS from '../../../const/colors';


const CreateFit = () => {
    const navigationRoute = useNavigation();

    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <View style={styles.mainWrapper}>

                <View style={styles.innerDse}>
                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Fit Stylist</Text>
                </View>
                <TouchableOpacity style={styles.backArrowWrapperTwo} onPress={() => navigationRoute.navigate("MainDashboard")}>
                    <Image
                        source={backArrow}
                        style={ThemeStyle.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("MainDashboard")}>
                    <Image
                        source={threeDots}
                        style={ThemeStyle.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.contentWrapper}>
                <View style={styles.fitItems}>
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

                <View style={styles.bottomButtonsWrapper}>
                    <View style={styles.bottomButton}>
                        <TextInput
                            type="text"
                            placeholder='Name your Fit'
                            style={{ width: "80%", paddingLeft: 10, fontSize: 16 }}
                        />
                        <TouchableOpacity style={styles.stylesCssOne}>
                            <Text style={{ textAlign: "center", fontSize: 16, fontWeight: '600' }}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreateFit;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: 'white', height: height, width: width, paddingHorizontal: width * 0.06, },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, paddingHorizontal: width * 0.08, position: 'relative', marginBottom: 30
    },
    backArrowWrapper: { position: 'absolute', right: width * 0.0, bottom: 20 },
    backArrowWrapperTwo: { position: 'absolute', left: width * 0.0, bottom: 20 },
    contentWrapper: { flex: 1, justifyContent: 'space-between' },
    fitItems: { alignItems: "center", },
    headItem: { width: width * 0.3, height: width * 0.16, marginBottom: 40 },
    upperItem: { width: width * 0.35, height: width * 0.35, marginBottom: 40 },
    lowerItem: { width: width * 0.4, height: width * 0.4, marginBottom: 40 },
    shoesItem: { width: width * 0.6, height: width * 0.20, marginBottom: 40 },


    innerDse: { flexDirection: "row", alignContent: "center", },
    subDescriptionTextTwo: { fontSize: 18, fontWeight: "700", color: COLORS.ShadowDarkest, },

    bottomButtonsWrapper: { position: 'absolute', bottom: 20, width: width * 0.89, backgroundColor: COLORS.white },
    bottomButton: { borderWidth: 1, borderRadius: 10, borderColor: COLORS.TextTertiart, flexDirection: "row" },
    stylesCssOne: { borderWidth: 0, borderRadius: 10, paddingVertical: 10, width: "19%", backgroundColor: COLORS.btnColor, marginVertical: 2, marginRight: 2 },
    btnImage: { width: 30, height: 30 }
});

