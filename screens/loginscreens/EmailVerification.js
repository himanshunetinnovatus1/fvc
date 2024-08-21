




import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PageStyle from '../../const/PageStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import COLORS from '../../const/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import backArrow from "../../assets/images/backArrow.png";
import ThemeStyle from '../../const/ThemeStyle';

const EmailVerification = () => {
    const navigationRoute = useNavigation();
    const [loading, setLoading] = useState(false);
    const [activeBTN, setActiveBTN] = useState(false);

    const [form, setForm] = useState({
        code: '',
    });

    const handleInputChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
        setActiveBTN(value.trim().length > 0)
    };

    return (
        <>
            <Loader visible={loading} />
            <KeyboardAwareScrollView style={[styles.mainContainer, ThemeStyle.iosClass]}>

                <View style={styles.mainWrapper}>
                    <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.goBack()}>
                        <Image source={backArrow} style={styles.backArrow} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={styles.nameWrapper}>
                        <Text style={[styles.nameText, PageStyle.text]}>Email Verification</Text>
                    </View>
                </View>

                <View style={styles.subWrapper}>

                    <View>
                        <Text style={{ fontSize: height * 0.04, fontWeight: 600 }}>Verify your email</Text>
                        <Text style={{ fontSize: height * 0.019, marginTop: 15, marginBottom: 40 }}>Please check your email and enter the 4-digit code below to make sure your account is valid.</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Input
                            placeholder="Code"
                            value={form.code}
                            onChangeText={(value) => handleInputChange('code', value)}
                            inputHeight={45}
                        />
                    </View>

                    <Button
                        title="Continue" buttonType
                        bgColor={activeBTN ? COLORS.btnColor : COLORS.btnColorWithOpacity}
                        btnTextColor={activeBTN ? COLORS.SecondaryDarkest : COLORS.SecondaryDarkestWithOpacityforBTN}
                        stylesCss={styles.stylesCssOne}
                        btnwidth="100%"
                        onPress={() => { navigationRoute.navigate('Permissions') }}
                    />

                    <Button
                        title="Resend Code"
                        buttonType
                        stylesCss={styles.stylesCssOne}
                        btnTextColor={COLORS.SecondaryDarkest}
                        btnwidth="100%"
                    />
                </View>
            </KeyboardAwareScrollView>
        </>
    );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: { backgroundColor: "white" },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, position: 'relative', marginBottom: height * 0.015,
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.06, },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: {
        color: COLORS.ShadowDarkest, fontSize: 24, fontWeight: '700', textAlign: 'center'
    },
    subWrapper: { paddingHorizontal: width * 0.06, },
    backWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
    backArrow: { width: 23, height: 23, },
    stylesCssOne: { borderWidth: 0, borderRadius: 10, marginTop: 30, },
    stylesCssTwo: { borderWidth: 0, borderRadius: 10, marginTop: 15, },

});

export default EmailVerification;

