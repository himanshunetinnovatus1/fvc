import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView,
    Dimensions, TouchableOpacity, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cap from "../../../assets/images/capOne.png";
import upper from "../../../assets/images/upperOne.png";
import pants from "../../../assets/images/shorts.png";
import shoes from "../../../assets/images/shoesOne.png";
import COLORS from '../../../const/colors';
import PageStyle from '../../../const/PageStyle';
import heart from "../../../assets/images/heart.png";
import redHeart from "../../../assets/images/redHeart.png";
import infinityOne from "../../../assets/images/infinityOne.png"
import addition from "../../../assets/images/addition.png";
import SaveCollectionModal from '../../../components/modals/SaveCollectionModal';
import ThemeStyle from '../../../const/ThemeStyle';



const CreateFit = () => {

    const navigationRoute = useNavigation();
    const [fav, setFav] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [btn, setBtn] = useState({
        btnOne: false,
        btnTwo: false,
    })

    const addFav = () => {
        setFav(!fav)
    }

    const btnUpdate = (item) => {
        setBtn(prevState => ({
            ...prevState,
            btnOne: item === 'btnOne' ? !prevState.btnOne : prevState.btnOne,
            btnTwo: item === 'btnTwo' ? !prevState.btnTwo : prevState.btnTwo
        }));
        if (item === "btnTwo") {
            setModalVisibleTwo(true)
        }
    };


    return (
        <SafeAreaView style={[styles.safeArea, ThemeStyle.iosClass]}>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.navigate("MainDashboard")}>
                    <Text style={{ fontSize: 30, fontWeight: '300' }}>x</Text>
                </TouchableOpacity>
                <View style={styles.innerDse}>
                    <Text style={[styles.subDescriptionTextTwo, PageStyle.text]}>Fit Stylist</Text>
                </View>
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
                    <TouchableOpacity style={styles.bottomButton} onPress={addFav}>
                        <Image
                            source={fav ? redHeart : heart}
                            style={styles.btnImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={btn.btnOne ? styles.bottomButtonActive : styles.bottomButton} onPress={() => btnUpdate("btnOne")}>
                        <Image
                            source={infinityOne}
                            style={styles.btnImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={btn.btnTwo ? styles.bottomButtonActive : styles.bottomButton} onPress={() => btnUpdate("btnTwo")}>
                        <Image
                            source={addition}
                            style={styles.btnImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>


            <SaveCollectionModal
                modalVisibleTwo={modalVisibleTwo}
                setModalVisibleTwo={setModalVisibleTwo}
            />

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
    contentWrapper: { flex: 1, justifyContent: 'space-between' },
    fitItems: { alignItems: "center", },
    headItem: { width: width * 0.3, height: width * 0.16, marginBottom: 40 },
    upperItem: { width: width * 0.35, height: width * 0.35, marginBottom: 40 },
    lowerItem: { width: width * 0.4, height: width * 0.4, marginBottom: 40 },
    shoesItem: { width: width * 0.6, height: width * 0.20, marginBottom: 40 },
    innerDse: { flexDirection: "row", alignContent: "center", },
    subDescriptionTextTwo: { fontSize: 18, fontWeight: "700", color: COLORS.ShadowDarkest, },
    bottomButtonsWrapper: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        position: 'absolute', bottom: 20, width: "100%"
    },
    bottomButton: { borderWidth: 1, paddingVertical: 10, paddingHorizontal: 35, borderRadius: 10 },
    bottomButtonActive: { borderWidth: 1, paddingVertical: 10, paddingHorizontal: 35, borderRadius: 10, backgroundColor: COLORS.btnColor },
    btnImage: { width: 30, height: 30 },










});