import { StyleSheet, Text, View,Dimensions , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../const/colors'
import PageStyle from '../const/PageStyle'
import taddy from "../assets/images/taddy.png";
import { useNavigation } from '@react-navigation/native';

const ProfileCard = () => {
    const navigationRoute = useNavigation();
    return (
        <TouchableOpacity style={[styles.cardContainer]} onPress={()=>navigationRoute.navigate("PeopleProfile")}>
            <View style={styles.headerBackground} />
            <View style={styles.imagePlaceholder}>
                <Image
                    style={styles.profileImage}
                    source={taddy}
                />
            </View>
            <Text style={[styles.username, PageStyle.text]}>@ogden</Text>
            <View style={styles.followersContainer}>
                <Text style={[styles.followersText, PageStyle.text]}>123k followers</Text>
                <Text style={[styles.likesText, PageStyle.text]}>1m Likes</Text>
            </View>
            <View style={styles.followButtonContainer}>
                <Text style={[styles.followButtonText, PageStyle.text]}>Follow</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileCard;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.41, height: height * 0.23, marginBottom: 12,
        backgroundColor: 'white', alignItems: "center",
        shadowColor: 'rgba(0, 0, 0, 0.5)', shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1, shadowRadius: 4,
        borderRadius: 13, elevation: 5, marginHorizontal: 10,
        overflow: 'hidden', position: 'relative',
    },
    headerBackground: { width: '100%', height: '36%', backgroundColor: COLORS.Secondary, },
    imagePlaceholder: { alignItems: "center", borderRadius: 12, position: "absolute", top: 30, right: 50 },
    profileImage: { width: 61, height: 61, },
    username: { marginTop: 30, textAlign: 'center', color: COLORS.ShadowDarkest, fontSize: 16, fontWeight: '700', marginBottom: 5 },
    followersContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 5 },
    followersText: { color: COLORS.ShadowDarkest, fontSize: 11, fontWeight: '400', textAlign: 'center', },
    likesText: { textAlign: 'center', color: COLORS.ShadowDarkest, fontSize: 11, fontWeight: '400', },
    followButtonContainer: {
        justifyContent: 'center', alignItems: 'center', width: 100, height: 24, borderRadius: 2,
        borderColor: COLORS.ShadowDarkest, borderWidth: 1,
    },
    followButtonText: { color: COLORS.ShadowDarkest, fontSize: 11, fontWeight: '400', },

})