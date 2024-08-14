import React, { useState } from 'react';
import { View, Text, StyleSheet, TextComponent, Image } from 'react-native';
import PageStyle from '../../const/PageStyle';
// import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import COLORS from '../../const/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import OtpInputs from 'react-native-otp-inputs';
import backArrow from '../../assets/images/backArrow.png';

const LoginOtp = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Loader visible={loading} />
            <KeyboardAwareScrollView style={PageStyle.container} contentContainerStyle={PageStyle.contentContainerStyle}>
                <View style={PageStyle.contentContainerWithoutP}>
                    <View style={PageStyle.headingContainer}>
                        <View>
                            <Text onPress={() => navigation.goBack()}>
                                <Image
                                    source={backArrow}
                                    style={styles.backArrow}
                                    resizeMode="contain"
                                />
                            </Text>
                        </View>
                        <View>
                            <Text style={[PageStyle.headingText, PageStyle.H3,]}>
                                Login
                            </Text>
                        </View>
                        <View></View>
                    </View>
                    <View style={[PageStyle.inputContainer, { alignItems: 'flex-start' }]}>
                        <Text style={[styles.H3, PageStyle.text,
                        { marginBottom: 30 }]}>
                            We sent a verification code to:
                            <Text style={[PageStyle.H3,]}> +1 (123) 456-7890  </Text></Text>
                        <Text style={[PageStyle.body2, {
                            marginBottom: 30, color: COLORS.Secondary,
                            textDecorationLine: 'underline'
                        }]}>
                            Didn’t get a code?</Text>
                    </View>
                    <View style={[PageStyle.inputContainer,]}>

                        <OtpInputs
                            handleChange={(code) => console.log(code)}
                            numberOfInputs={6}
                            inputStyles={[styles.otpfld]}
                            inputContainerStyles={styles.inputContainerStyles}
                            style={{ flexDirection: 'row', marginHorizontal: 20 }}
                        />
                    </View>
                </View>

                <View style={PageStyle.contentContainerBottom}>
                    <Button
                        title="Verify"
                        buttonType
                        bgColor={COLORS.SecondaryDark}
                        btnTextColor={COLORS.SecondaryDarkest}
                        btnwidth="90%"
                        onPress={() => {
                            navigation.navigate('MainDashboard');
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    H3: {
        lineHeight: 36,
        fontSize: 32,
    },
    otpfld: {
        paddingHorizontal: 10,
        textAlign: 'center',
        borderBottomWidth: 2,
        fontSize: 48,
        fontWeight: '500'
    },
    inputContainerStyles: {
        marginHorizontal: 10,
    },
    backArrow: { width: 20, height: 20 },

});

export default LoginOtp;
