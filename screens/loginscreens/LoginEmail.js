import React, { useState } from 'react';
import { View, Text, StyleSheet, TextComponent } from 'react-native';
import PageStyle from '../../const/PageStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import COLORS from '../../const/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginEmail = () => {
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
                                <MaterialCommunityIcons
                                    name="chevron-left"
                                    size={30}
                                    style={{ color: COLORS.ShadowDarkest }}
                                />
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={[
                                    PageStyle.headingText,
                                    PageStyle.H3,
                                ]}>
                                Login
                            </Text>
                        </View>
                        <View></View>
                    </View>

                    <View style={[PageStyle.inputContainer,{alignItems: 'flex-start'}]}>
                        <Text style={[styles.H3, { marginBottom: 30,
                             }]}>
                              So we know its you, enter the email you used to make an account:</Text>
                     

                        <Input
                            placeholder="Email"
                            iconName="email-outline"
                        />
                    </View>
                </View>

                <View style={PageStyle.contentContainerBottom}>
                    <Button
                        title="Continue"
                        buttonType
                        bgColor={COLORS.SecondaryDark}
                        btnTextColor={COLORS.SecondaryDarkest}
                        btnwidth="90%"
                        onPress={() => {
                            navigation.navigate('LoginOtp');
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    H3:{
        
    lineHeight: 32,
    fontSize: 24,
    }
});

export default LoginEmail;
