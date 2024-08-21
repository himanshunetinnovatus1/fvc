import React from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, Image } from 'react-native';
import LogoWhite from '../assets/images/welcomeImageCropped.png';
import CustomButton from '../components/CustomButton';
import COLORS from '../const/colors';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigationRoute = useNavigation();


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <View>
          <Image
            source={LogoWhite}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={[styles.text]}>Welcome to the </Text>
          <Text style={styles.text}> closet of the future</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText="Get Started"
          textStyle={styles.textStyle}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigationRoute.navigate("SignUp")}
        />
      </View>

    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  logoContainer: { flex: 0.9, justifyContent: 'center', alignItems: 'center', },
  logo: { width: width * 0.8 },
  text: {
    textAlign: "center", fontSize: 35, color: "black", fontWeight: '500',
  },
  buttonContainer: {
    position: 'absolute', bottom: 40, alignSelf: 'stretch', alignItems: 'center', width: width,
  },
  buttonStyle: {
    backgroundColor: COLORS.btnColor, width: width * 0.9, borderWidth: 0,
  },
  textStyle: { color: "black" },

});

export default HomeScreen;
