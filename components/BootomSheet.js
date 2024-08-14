

import {
    StyleSheet, Text, View, TextInput, Dimensions,
    Image, TouchableOpacity, ScrollView,
    Alert
} from 'react-native'
import React, { useState, } from 'react';
import COLORS from '../const/colors';
import ThemeStyle from '../const/ThemeStyle';
import { BottomSheetModal, BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';



import cap from "../assets/images/capOne.png"
import upper from "../assets/images/upperOne.png"
import pants from "../assets/images/shorts.png"
import shoes from "../assets/images/shoesOne.png"
import blueTick from "../assets/images/blueTick.png"


const BootomSheet = ({
    handleActiveContent, bottomSheetModalRef, snapPoints, handleSheetChanges,
    addFit, scrollArea, setAddfit, setScrollArea, handleFits, SetfitPresent
}) => {
    const navigationRoute = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [activeBTN, setActiveBTN] = useState(false);

    const [form, setForm] = useState({
        collectionName: ''
    });

    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectItem = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter((item) => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    };

    const handleInputChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
        if (form.collectionName) {
            setActiveBTN(true);
        } else if (form.collectionName.length === 0) {
            setActiveBTN(false);
        }
    };

    const handleCloseBottemSheet = () => {
        if (selectedItems.length === 0) {
            return Alert.alert("Select atlest One fit")
        }
        bottomSheetModalRef.current?.close();
        setScrollArea(false)
        setAddfit(false)
        setSelectedItems([])
        setForm({ collectionName: "" })
        SetfitPresent(true)
    }

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            handleIndicatorStyle={styles.handleIndicator}
            backgroundComponent={({ style }) => (
                <View style={[style, styles.bottomSheetBackground]} />
            )}
        >

            {scrollArea ? (
                <>
                    <BottomSheetScrollView style={[styles.contentContainer]}>
                        <View style={[styles.fitItemsContainer]}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.fitItem,
                                        { position: "relative", }
                                    ]}
                                    onPress={() => handleSelectItem(index)}
                                >
                                    <View style={[styles.fitItemWrapper, { borderColor: selectedItems.includes(index) ? COLORS.btnColor : COLORS.lightGray }]}>
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

                                    {selectedItems.includes(index) && (
                                        <View style={{ position: "absolute", top: 5, right: 5 }}>
                                            <Image
                                                source={blueTick}
                                                style={styles.blueTick}
                                                resizeMode='center'
                                            />
                                        </View>
                                    )}
                                </TouchableOpacity>
                            ))}

                        </View>
                    </BottomSheetScrollView>

                    <Button
                        title="Create Collection"
                        buttonType
                        bgColor={COLORS.btnColor}
                        btnTextColor={COLORS.ShadowDarkest}
                        stylesCss={[ThemeStyle.stylesCssOne, { position: "absolute", bottom: 20, left: 22, width: width * 0.89 }]}
                        onPress={handleCloseBottemSheet}
                    // onPress={() => {
                    //     handleSheetChanges();
                    //     bottomSheetModalRef.current?.close();
                    // }}
                    />

                </>
            ) : (
                <BottomSheetView style={[styles.contentContainer]}>
                    {addFit ? (
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                            <Text style={styles.inputHead}>
                                Give your collection a name
                            </Text>

                            <View>
                                <TextInput
                                    placeholder="My Collection"
                                    value={form.collectionName}
                                    onChangeText={(value) => handleInputChange('collectionName', value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    style={[
                                        styles.input,
                                        { borderColor: isFocused ? COLORS.activeBorderColor : COLORS.lightGray }
                                    ]}
                                />
                            </View>

                            <Button
                                title="Create Collection"
                                buttonType
                                bgColor={activeBTN ? COLORS.btnColor : COLORS.btnColorWithOpacity}
                                btnTextColor={activeBTN ? COLORS.ShadowDarkest : COLORS.SecondaryDarkestWithOpacity}
                                stylesCss={[ThemeStyle.stylesCssOne]}
                                btnwidth="100%"
                                onPress={handleFits}
                            />
                        </View>


                    ) : (

                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                            <View>
                                <View style={styles.textContainerTab}>
                                    <Text style={styles.mainTextTab}>Add a fit to your collection</Text>
                                    <Text style={styles.subTextTab}>Seems like you don’t have any fits made. You can create your first fit by tapping the button below.</Text>
                                </View>
                                <View>
                                    <Button
                                        title="Add Fit"
                                        buttonType
                                        bgColor={COLORS.btnColor}
                                        btnTextColor={COLORS.ShadowDarkest}
                                        stylesCss={[ThemeStyle.stylesCssOne]}
                                        btnwidth="100%"
                                        onPress={handleActiveContent}
                                    />
                                </View>
                            </View>
                        </View>
                    )}

                </BottomSheetView>
            )}

        </BottomSheetModal>
    )
}

export default BootomSheet


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({


    contentWrapper: { flex: 1, paddingTop: 10, },
    fitItemsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 },
    fitItem: { width: "30%", marginBottom: 20, position: "relative", marginHorizontal: 5 },
    fitItem: {
        width: "30%",
        marginBottom: 20,
        position: "relative",
        marginHorizontal: 5,

    },
    fitItemWrapper: {
        alignItems: "center", padding: 10, borderRadius: 10,
        backgroundColor: COLORS.white, shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25,
        shadowRadius: 3.84, elevation: 5, borderWidth: 1, borderColor: COLORS.btnColor
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













    blueTick: { width: 20, height: 20 },
    bottomSheetBackground: { backgroundColor: COLORS.white, borderRadius: 20, },
    handleIndicator: { backgroundColor: COLORS.SecondaryLight, width: 50, height: 5 },
    contentContainer: { padding: 20, flex: 1, backgroundColor: COLORS.white },
    textContainerTab: { textAlign: "center", },
    mainTextTab: { fontSize: 20, fontWeight: "bold", textAlign: "center", },
    subTextTab: { fontSize: 14, textAlign: "center", },
    inputHead: { textAlign: "center", marginBottom: 20, fontSize: 17, fontWeight: '700' },
    input: { borderWidth: 1, width: width * 0.9, borderRadius: 5, fontSize: 15, fontWeight: '700', },

})