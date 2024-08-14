import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PageStyle from '../../const/PageStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logoxl.png';
import apple from '../../assets/images/apple-logo.png';
import google from '../../assets/images/google-logo.png';
import COLORS from '../../const/colors';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = React.useState(false);
    return (
        <>
            <ScrollView style={PageStyle.container} contentContainerStyle={PageStyle.contentContainerStyle}>
                <Loader visible={loading} />
                <View style={PageStyle.contentContainerInner}>
                    <View style={PageStyle.innerLogo}>
                        <Image
                            source={logo}
                            style={PageStyle.logo}
                            width={150}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={[styles.H1, PageStyle.text, {
                        textAlign: 'center',
                        fontWeight: 'normal',
                        // textShadowColor: 'rgba(0, 0, 0, 0.3)',
                        // textShadowOffset: { width: 0, height: 4 },
                        // textShadowRadius: 7,
                    }]}>Welcome to the {"\n"}closet of the future.</Text>
                    <View style={{ paddingTop: 30, paddingBottom: 15, width: '100%' }}>
                        <Button
                            title="Create an Account"
                            buttonType
                            btnTextColor={COLORS.SecondaryDarkest}
                            btnwidth="90%"
                            onPress={() => {
                                navigation.navigate('SignUp');
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginVertical: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: COLORS.SecondaryLight }} />
                        <View>
                            <Text style={[styles.H3, PageStyle.text, {
                                width: 50,
                                fontWeight: 'normal', textAlign: 'center', color: COLORS.SecondaryLight
                            }]}>or</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: COLORS.SecondaryLight }} />
                    </View>


                    <Button
                        imgSrc={apple}
                        title="Continue with Apple"
                        btnTextColor={COLORS.SecondaryDarkest}
                        btnwidth="90%"
                    />
                    <Button
                        imgSrc={google}
                        title="Continue with Google"
                        btnTextColor={COLORS.SecondaryDarkest}
                        btnwidth="90%"
                    />
                    <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
                        <Text style={[PageStyle.H4, { marginTop: 30, textDecorationLine: 'underline' }]}>
                            I already have an account
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    H1: {
        lineHeight: 48,
        fontSize: 36,
    },
    H3: {
        lineHeight: 32,
        fontSize: 24,
    }
});

export default Onboarding;
