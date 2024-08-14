import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import COLORS from '../const/colors';
import PageStyle from "../const/PageStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = (props) => {
  const {
    iconName, title, buttonType, btnwidth, stylesCss,
    btnTextColor, imgSrc, imgStyle, buttonStyle, bgColor,
    onPress = () => { }
  } = props;

  const backgroundColor = buttonType === true ? bgColor : COLORS.white;
  const textColor = buttonType ? (btnTextColor || COLORS.white) : btnTextColor;

  return (
    <View style={style.primaryBtnContainer}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[
          buttonType ? "" : style.shadowProp,
          {
            height: 45, textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            width: btnwidth || '100%',
          }, stylesCss
        ]}
      >
        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              style={{
                fontSize: 18,
                color: textColor,
              }}
            />
          )}
          {imgSrc && (
            <Image
              source={imgSrc}
              resizeMode="contain"
              style={imgStyle}
            />
          )}
          <Text
            style={[
              PageStyle.H4,
              { color: textColor, textAlign: 'center', paddingLeft: iconName !== '' ? 10 : 0, },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  // shadowProp: {
  //   shadowColor: COLORS.SecondaryDarkest,
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  //   elevation: 3,
  // },
  primaryBtnContainer: {
    width: "100%",
    alignItems: 'center'
  }
});

export default Button;
