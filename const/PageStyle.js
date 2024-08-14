import { StyleSheet } from 'react-native';
import COLORS from './colors';

const PageStyle = StyleSheet.create({
  text: {
    fontFamily: 'AkkuratStd',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  contentContainerTop: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 100,
  },
  contentContainerbtw: {
    justifyContent: 'center',
    paddingVertical: 40,
    flex: 1,
  },
  contentContainerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  contentContainerInner: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 100,
  },
  contentContainerWithoutP: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headingContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: "90%",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 60,
    // textAlign: 'center'
  },
  H1: {
    fontFamily: 'AkkuratStd-Bold',
    lineHeight: 48,
    fontSize: 36,
  },
  H2: {
    fontFamily: 'AkkuratStd-Bold',
    lineHeight: 36,
    fontSize: 32,

  },
  H3: {
    fontFamily: 'AkkuratStd-Bold',
    lineHeight: 32,
    fontSize: 24,
  },
  H4: {
    fontFamily: 'AkkuratStd-Bold',
    lineHeight: 24,
    fontSize: 16,
  },
  H5: {
    fontFamily: 'AkkuratStd-Bold',
    lineHeight: 24,
    fontSize: 13,
  },
  body1: {
    fontFamily: 'AkkuratStd',
    lineHeight: 24,
    fontSize: 18,
  },
  body2: {
    fontFamily: 'AkkuratStd',
    lineHeight: 18,
    fontSize: 16,
  },
  body3: {
    fontFamily: 'AkkuratStd',
    lineHeight: 15,
    fontSize: 13,
  },
  body4: {
    fontFamily: 'AkkuratStd',
    lineHeight: 15,
    fontSize: 10,
  },
  body4: {
    fontFamily: 'AkkuratStd',
    lineHeight: 15,
    fontSize: 14,
  },

});
export default PageStyle;