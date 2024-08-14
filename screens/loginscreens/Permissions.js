import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PageStyle from '../../const/PageStyle';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import COLORS from '../../const/colors';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-switch';
import backArrow from '../../assets/images/backArrow.png';
import ThemeStyle from '../../const/ThemeStyle';

const Permissions = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    // State for each switch
    const [photosPermission, setPhotosPermission] = useState(true);
    const [cameraPermission, setCameraPermission] = useState(true);
    const [notificationsPermission, setNotificationsPermission] = useState(true);
    const [locationPermission, setLocationPermission] = useState(true);
    const [contactsPermission, setContactsPermission] = useState(false);

    return (
        <>
            <ScrollView style={[PageStyle.container, ThemeStyle.iosClass]} contentContainerStyle={PageStyle.contentContainerStyle}>
                <Loader visible={loading} />
                <View style={styles.mainWrapper}>
                    <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigation.navigate("EmailVerification")}>
                        <Image
                            source={backArrow}
                            style={styles.backArrow}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.nameWrapper}>
                        <Text style={[styles.nameText, PageStyle.text]}>Permissions</Text>
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <Text style={styles.heading}>Manage your permissions</Text>
                    <Text style={styles.des}> For the best experience on Fitted, please grant access to the following settings:</Text>

                    <View style={[styles.permissionContainer]}>
                        <Image
                            source={require('../../assets/extra/gallery1.png')}
                            style={{ width: 40 }}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                            <Text style={[PageStyle.H4, { fontWeight: '600', paddingBottom: 5 }]}>Photos</Text>
                            <Text style={[PageStyle.body3, { fontWeight: '600' }]}>
                                Easily edit images of your pieces directly from your Camera Roll on Fitted.
                            </Text>
                        </View>
                        <Switch
                            value={photosPermission}
                            onValueChange={setPhotosPermission}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            style={styles.switch}
                            circleBorderWidth={3}
                            backgroundInactive={COLORS.ShadowLight}
                            circleBorderInactiveColor={COLORS.ShadowLight}
                            backgroundActive={COLORS.SecondaryDarkest}
                            circleBorderActiveColor={COLORS.SecondaryDarkest}
                        />
                    </View>

                    <View style={styles.permissionContainer}>
                        <Image
                            source={require('../../assets/extra/gallery2.png')}
                            style={{ width: 40 }}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                            <Text style={[PageStyle.H4, { fontWeight: '600', paddingBottom: 5 }]}>Camera</Text>
                            <Text style={[PageStyle.body3, { fontWeight: '600' }]}>
                                Capture pieces right from your phone.
                            </Text>
                        </View>
                        <Switch
                            value={cameraPermission}
                            onValueChange={setCameraPermission}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            style={styles.switch}
                            circleBorderWidth={3}
                            backgroundInactive={COLORS.ShadowLight}
                            circleBorderInactiveColor={COLORS.ShadowLight}
                            backgroundActive={COLORS.SecondaryDarkest}
                            circleBorderActiveColor={COLORS.SecondaryDarkest}
                        />
                    </View>

                    <View style={styles.permissionContainer}>
                        <Image
                            source={require('../../assets/extra/gallery1.png')}
                            style={{ width: 40 }}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                            <Text style={[PageStyle.H4, { fontWeight: '600', paddingBottom: 5 }]}>Notifications</Text>
                            <Text style={[PageStyle.body3, { fontWeight: '600' }]}>
                                Be notified on when new pieces are uploaded and outfit suggestions.
                            </Text>
                        </View>
                        <Switch
                            value={notificationsPermission}
                            onValueChange={setNotificationsPermission}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            style={styles.switch}
                            circleBorderWidth={3}
                            backgroundInactive={COLORS.ShadowLight}
                            circleBorderInactiveColor={COLORS.ShadowLight}
                            backgroundActive={COLORS.SecondaryDarkest}
                            circleBorderActiveColor={COLORS.SecondaryDarkest}
                        />
                    </View>

                    <View style={styles.permissionContainer}>
                        <Image
                            source={require('../../assets/extra/location-pin.png')}
                            style={{ width: 40 }}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                            <Text style={[PageStyle.H4, { fontWeight: '600', paddingBottom: 5 }]}>Location</Text>
                            <Text style={[PageStyle.body3, { fontWeight: '600' }]}>
                                Get accurate outfit suggestions based on weather and local culture.
                            </Text>
                        </View>
                        <Switch
                            value={locationPermission}
                            onValueChange={setLocationPermission}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            style={styles.switch}
                            circleBorderWidth={3}
                            backgroundInactive={COLORS.ShadowLight}
                            circleBorderInactiveColor={COLORS.ShadowLight}
                            backgroundActive={COLORS.SecondaryDarkest}
                            circleBorderActiveColor={COLORS.SecondaryDarkest}
                        />
                    </View>

                    <View style={styles.permissionContainer}>
                        <Image
                            source={require('../../assets/extra/contact1.png')}
                            style={{ width: 40 }}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                            <Text style={[PageStyle.H4, { fontWeight: '600', paddingBottom: 5 }]}>Contacts</Text>
                            <Text style={[PageStyle.body3, { fontWeight: '600' }]}>
                                Connect with people you already know on Fitted by syncing your contacts.
                            </Text>
                        </View>
                        <Switch
                            value={contactsPermission}
                            onValueChange={setContactsPermission}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            style={styles.switch}
                            circleBorderWidth={3}
                            backgroundInactive={COLORS.ShadowLight}
                            circleBorderInactiveColor={COLORS.ShadowLight}
                            backgroundActive={COLORS.SecondaryDarkest}
                            circleBorderActiveColor={COLORS.SecondaryDarkest}
                        />
                    </View>

                </View>

                <View style={PageStyle.contentContainerBottom}>
                    <Button
                        title="Continue"
                        buttonType
                        bgColor={COLORS.btnColor}
                        btnTextColor={COLORS.SecondaryDarkest}
                        stylesCss={ThemeStyle.stylesCssOne}
                        btnwidth="100%"
                        onPress={() => {
                            navigation.navigate('HowToUpload');
                        }}
                    />
                </View>
            </ScrollView>
        </>
    );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: { paddingHorizontal: width * 0.06, paddingTop: 0 },
    permissionContainer: {
        flexDirection: 'row', width: '100%', paddingVertical: 10,
        alignItems: 'center', borderBottomWidth: 0.8, borderBottomColor: COLORS.ShadowLight,
    },
    heading: { fontSize: height * 0.035, fontWeight: '600' },
    des: { fontSize: height * 0.019, marginTop: 10, marginBottom: 15 },
    mainWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingVertical: width * 0.06, position: 'relative', marginBottom: height * 0.015,
    },
    backArrowWrapper: { position: 'absolute', left: width * 0.06, },
    backArrow: { width: 23, height: 23, },
    nameWrapper: { flexDirection: "row", justifyContent: "center", alignItems: "center", },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 24, fontWeight: '700', textAlign: 'center' },
    icon: { width: 40, },
    textContainer: { flex: 1, paddingHorizontal: 5, },
    switch: { marginLeft: 10, },

});

export default Permissions;
