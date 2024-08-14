 


import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import PageStyle from "../const/PageStyle";
import COLORS from '../const/colors';

const SubTabs = () => {
  return (
    <View style={styles.mainWrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.subTabsWrapper}>
          <Text style={[styles.wrapperText, PageStyle.text]}>Category</Text>
        </View>
        <View style={styles.subTabsWrapper}>
          <Text style={[styles.wrapperText, PageStyle.text]}>Favorites</Text>
        </View>
        <View style={styles.subTabsWrapper}>
          <Text style={[styles.wrapperText, PageStyle.text]}>Type</Text>
        </View>
        <View style={styles.subTabsWrapper}>
          <Text style={[styles.wrapperText, PageStyle.text]}>Size</Text>
        </View>
        <View style={styles.subTabsWrapper}>
          <Text style={[styles.wrapperText, PageStyle.text]}>Brand</Text>
        </View>
        <View style={styles.subTabsWrapper}>
          <Text style={[styles.wrapperText, PageStyle.text]}>Color</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SubTabs;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainWrapper: { 
    flexDirection: "row", 
    justifyContent: 'space-between', 
    marginTop: 10 ,
  },
  subTabsWrapper: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: COLORS.ShadowLightest, 
    borderRadius: 25, 
    paddingVertical: 8, 
    paddingHorizontal: 8, 
    marginEnd: 5
  },
  wrapperText: { 
    color: COLORS.ShadowDarkest, 
    fontSize: 16, 
    marginLeft: 4 
  }
});
