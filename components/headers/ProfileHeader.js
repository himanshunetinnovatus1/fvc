import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import logo from '../../assets/images/logoxl.png';
import COLORS from '../../const/colors';
import ThemeStyle from '../../const/ThemeStyle';
import Fontisto from 'react-native-vector-icons/Fontisto'

const ProfileHeader = () => {
  return (
    <>
      <View style={styles.mainWrapper}>
        <View>
          <View>
            <Image
              source={logo}
              style={styles.logo}
              width={150}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.DpANDName}>
          <View style={styles.DpWrapper}>
            <Image
              source={require("../../assets/images/Vector.png")}
              style={styles.DP}
              resizeMode="contain"
            />
            <Text style={ThemeStyle.BoldKeyword}>$64</Text>
          </View>
          <View style={styles.nameWrapper}>
            <Fontisto
              name="bell"
              style={{
                fontSize: 40,
                color: COLORS.ShadowDarkest,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainWrapper: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: width * 0.04, }, // backgroundColor: 'yellow' },
  DpANDName: { flexDirection: 'row', alignItems: 'center', },
  DpWrapper: {
    flexDirection: 'row',
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10
  },
  DP: { width: 20, height: 20, marginEnd: 10 },
  nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
  logo: { width: 70, height: 70 },
});
