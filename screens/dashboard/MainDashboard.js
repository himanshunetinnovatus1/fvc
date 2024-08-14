import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import ProfileHeader from '../../components/headers/ProfileHeader';
import Footer from '../../components/footer/footer';
import { useNavigation } from '@react-navigation/native';
import Collections from '../../components/Collections';
import PageStyle from '../../const/PageStyle';
import COLORS from '../../const/colors';
import Pieces from '../../components/Pieces';
import FitsDashboard from '../../components/FitsDashboard';
import Button from '../../components/Button';
import ThemeStyle from '../../const/ThemeStyle';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootomSheet from '../../components/BootomSheet';

const MainDashboard = ({ navigation, route }) => {
  const navigationRoute = useNavigation();
  const [activeTab, setActiveTab] = useState('Pieces');
  const [activeFooterTab, setActiveFooterTab] = useState('Closet');
  const [addFit, setAddfit] = useState(false);
  const [scrollArea, setScrollArea] = useState(false);

  useEffect(() => {
    if (route.params && route.params.activeFooterTab) {
      setActiveFooterTab(route.params.activeFooterTab);
    } else {
      setActiveFooterTab('Closet');
    }
  }, [route.params]);



  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '95%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);



  const handleActiveContent = () => {
    setAddfit(true);
  };

  const handleFits = () => {
    setScrollArea(true);
  };

  const [fitPresent, SetfitPresent] = useState(false)


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={[styles.safeAreaOne, { position: "relative" }, ThemeStyle.iosClass]} >
          <View style={styles.safeArea}>
            <ProfileHeader />
            <View style={styles.mainWrapper}>
              <View style={styles.tabsWrapper}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'Pieces' && styles.activeTabBackground,
                  ]}
                  onPress={() => setActiveTab('Pieces')}
                >
                  <Text style={[activeTab === 'Pieces' ? styles.activeTabText : styles.tabsText, PageStyle.text]}>
                    Pieces
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'Fits' && styles.activeTabBackground,
                  ]}
                  onPress={() => setActiveTab('Fits')}
                >
                  <Text style={[activeTab === 'Fits' ? styles.activeTabText : styles.tabsText, PageStyle.text]}>
                    Fits
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    activeTab === 'Collections' && styles.activeTabBackground,
                  ]}
                  onPress={() => setActiveTab('Collections')}
                >
                  <Text style={[activeTab === 'Collections' ? styles.activeTabText : styles.tabsText, PageStyle.text]}>
                    Collections
                  </Text>
                </TouchableOpacity>
              </View>

              {activeTab === 'Pieces' &&
                <View style={{ height: "89%" }}>
                  <ScrollView style={styles.contentWrapper} showsVerticalScrollIndicator={false}>
                    <Pieces CreateCollection={false} />
                  </ScrollView>
                </View>
              }

              {activeTab === 'Fits' &&
                <View style={{ height: "89%" }}>
                  <ScrollView style={styles.contentWrapper} showsVerticalScrollIndicator={false}>
                    <FitsDashboard />
                  </ScrollView>
                  <View>
                    <Button
                      title="Create Fit"
                      buttonType
                      bgColor={COLORS.btnColor}
                      btnTextColor={COLORS.ShadowDarkest}
                      stylesCss={ThemeStyle.stylesCssOne}
                      btnwidth="100%"
                      onPress={() => navigationRoute.navigate("CreateFit")}
                    />
                  </View>
                </View>
              }

              {activeTab === 'Collections' &&

                <View style={{ height: "89%" }}>
                  <ScrollView style={styles.contentWrapper} showsVerticalScrollIndicator={false}>
                    <Collections handlePresentModalPress={handlePresentModalPress} fitPresent={fitPresent} SetfitPresent={SetfitPresent} />
                  </ScrollView>
                  {fitPresent &&
                    <View>
                      <Button
                        title="Create Collection"
                        buttonType
                        bgColor={COLORS.btnColor}
                        btnTextColor={COLORS.ShadowDarkest}
                        stylesCss={ThemeStyle.stylesCssOne}
                        btnwidth="100%"
                        onPress={handlePresentModalPress}
                      />
                    </View>}
                </View>
              }
            </View>
          </View>
          <Footer style={styles.footer} activeFooterTab={activeFooterTab} setActiveFooterTab={setActiveFooterTab} />
          <BootomSheet
            handleActiveContent={handleActiveContent}
            bottomSheetModalRef={bottomSheetModalRef}
            snapPoints={snapPoints}
            handleSheetChanges={handleSheetChanges}
            addFit={addFit}
            scrollArea={scrollArea}
            setAddfit={setAddfit}
            setScrollArea={setScrollArea}
            handleFits={handleFits}
            SetfitPresent={SetfitPresent}
          />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default MainDashboard;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  safeArea: { flex: 1, backgroundColor: 'white' },
  safeAreaOne: { flex: 1, backgroundColor: 'white', paddingHorizontal: width * 0.05, },
  mainWrapper: { flex: 1, backgroundColor: 'white' },
  tabsWrapper: {
    flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: COLORS.ShadowLightest, borderRadius: 20, padding: 10
  },
  tab: { flex: 1, alignItems: 'center', borderRadius: 5, justifyContent: 'center', paddingVertical: 10, },
  activeTabBackground: { backgroundColor: COLORS.white },
  tabsText: { textAlign: 'center', color: COLORS.ShadowDarkest, fontSize: 16, fontWeight: '500', },
  activeTabText: { color: COLORS.ShadowDarkest, fontWeight: '700' },
  contentWrapper: { flex: 1, paddingTop: 10, },
  footer: { backgroundColor: COLORS.ShadowLightest, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, },

});
