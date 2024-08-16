import { StyleSheet } from 'react-native';
import COLORS from '../const/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ThemeStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        width: width,
        height: height,
        paddingHorizontal: width * 0.05,
    },
    mainWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.028,
        paddingHorizontal: width * 0.08,
        position: 'relative'
    },
    backArrowWrapper: {
        position: 'absolute',
        left: 0,
    },
    backArrow: {
        width: 20,
        height: 20
    },
    nameText: {
        color: COLORS.ShadowDarkest,
        fontSize: 17,
        fontWeight: '700',
        textAlign: 'center'
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    Keyword: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.ShadowDarkest,
        fontFamily: 'AkkuratStd',
    },
    BoldKeyword: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.ShadowDarkest,
        fontFamily: 'AkkuratStd',
    },
    UnderlineKeyword: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.ShadowDarkest,
        fontFamily: 'AkkuratStd',
    },
    UnderlineKeywordBold: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.ShadowDarkest,
        fontFamily: 'AkkuratStd',
    },
    signupNloginLogo: { alignItems: "center", marginTop: 20, marginBottom: 40 },
    stylesCssOne: { borderWidth: 0, borderRadius: 10, marginTop: 20, width: "100%" },
    iosClass :  {paddingTop : 20},
    stylesCssTwo: { borderWidth: 1, borderRadius: 10, marginTop: 12 },
});


export default ThemeStyle;