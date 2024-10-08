
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
import apple from '../../assets/images/apple-logo.png';
import google from '../../assets/images/google-logo.png';
import Logo from '../../assets/images/logo.png';
import ThemeStyle from '../../const/ThemeStyle';
// import tiktok from '../../assets/images/tiktok.png';

const LoginScreen = () => {
  const navigationRoute = useNavigation();
  const [loading, setLoading] = useState(false);
  const [activeBTN, setActiveBTN] = useState(false);

  const [form, setForm] = useState({
    // userName: '',
    email: '',
    password: ''
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
      <View style={[styles.mainContainer, ThemeStyle.iosClass]}>

        <View style={styles.mainWrapper}>
          <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigationRoute.goBack()}>
            <Image
              source={backArrow}
              style={styles.backArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.nameWrapper}>
            <Text style={[styles.nameText, PageStyle.text]}>Log In</Text>
          </View>
        </View>
        <View style={styles.subWrapper}>

          <View style={ThemeStyle.signupNloginLogo} >
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View>
            <View style={{ marginBottom: 10 }}>
              <Input
                placeholder="Email or Phone Number"
                value={form.email}
                onChangeText={(value) => handleInputChange('email', value)}
                inputHeight={45}
              />
            </View>

          </View>
          <Button
            title="Log In"
            buttonType
            bgColor={activeBTN ? COLORS.btnColor : COLORS.btnColorWithOpacity}
            btnTextColor={activeBTN ? COLORS.SecondaryDarkest : COLORS.SecondaryDarkestWithOpacityforBTN}
            stylesCss={ThemeStyle.stylesCssOne}
            btnwidth="100%"
            onPress={() => {
              navigationRoute.navigate('EmailVerification');
            }}
          />

          <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
          </View>

          <Button
            imgSrc={apple} title="Log in with Apple" imgStyle={styles.imgStyle}
            btnTextColor={COLORS.SecondaryDarkest} btnwidth="100%" stylesCss={ThemeStyle.stylesCssTwo}
          />
          <Button
            imgSrc={google} title="Log in with Google" imgStyle={styles.imgStyle}
            btnTextColor={COLORS.SecondaryDarkest} btnwidth="100%" stylesCss={ThemeStyle.stylesCssTwo}
          />

        </View>
        <View style={styles.bottomSection}>
          <View style={{ textAlign: 'center', flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontWeight: '300', fontSize: height * 0.02 }}>
              Don’t have an account? {" "}
            </Text>
            <TouchableOpacity >
              <Text onPress={() => navigationRoute.navigate("SignUp")} style={[PageStyle.H4, { fontSize: height * 0.02, textDecorationLine: 'underline', color: COLORS.ShadowDarkest }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "white", height: height, justifyContent: 'space-between', },
  mainWrapper: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    paddingVertical: width * 0.06, position: 'relative', marginBottom: height * 0.015,
  },
  backArrowWrapper: { position: 'absolute', left: width * 0.06, },
  nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
  nameText: {
    color: COLORS.ShadowDarkest, fontSize: 24, fontWeight: '700', textAlign: 'center'
  },
  logo: { width: 100, height: 100 },
  subWrapper: { paddingHorizontal: width * 0.06, marginBottom: 170 },
  backWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  backArrow: { width: 23, height: 23, },
  container: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 30 },
  line: {
    flex: 1, height: 0, borderTopWidth: 1, borderTopColor: '#D1CDD8',
  },
  text: {
    color: '#B1AFBB', fontSize: 12, fontFamily: 'Satoshi',
    fontWeight: '400', lineHeight: 12, marginHorizontal: 8,
  },
  imgStyle: { width: 16 },
  TermsPolicy: { marginVertical: height * 0.07, },
  bottomSection: { marginBottom: 30 }
});

export default LoginScreen;
