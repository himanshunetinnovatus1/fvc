import React from 'react';
import { View,   Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/logoxl.png';
import COLORS from '../../const/colors';
import chat from "../../assets/images/chat.png";
import bell from "../../assets/images/bell.png";
import { useNavigation } from '@react-navigation/native';




const NotifiyChatHeader = () => {
    const navigationRoute = useNavigation();
    return (
        <>
            <View style={styles.mainWrapper}>
                <TouchableOpacity onPress={() => navigationRoute.navigate("MainDashboard")} >

                    <Image
                        source={logo}
                        style={styles.logo}
                        width={150}
                        resizeMode="contain"
                    />

                </TouchableOpacity>
                <View style={styles.DpANDName}>
                    <View style={styles.DpWrapper}>
                        <Image
                            source={bell}
                            style={styles.DP}
                            width={150}
                            resizeMode="contain"
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigationRoute.navigate("Inbox")}  >
                        <Image
                            source={chat}
                            style={[styles.DPTwo]}
                            width={150}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
};

export default NotifiyChatHeader;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainWrapper: { flexDirection: 'row', justifyContent: 'space-between', padding: width * 0.04, }, // backgroundColor: 'yellow' },
    DpANDName: { flexDirection: 'row', alignItems: 'center', },
    DpWrapper: { marginRight: 15, },
    DP: { width: 40, height: 40, borderRadius: 45 },
    DPTwo: { width: 35, height: 40, borderRadius: 45 },
    nameText: { color: COLORS.ShadowDarkest, fontSize: 17, fontWeight: '700', textAlign: 'center' },
    logo: { width: 70, height: 70 },
});
