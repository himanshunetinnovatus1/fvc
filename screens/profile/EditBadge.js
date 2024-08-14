import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import backArrow from "../../assets/images/backArrow.png";
import tickIcon from "../../assets/images/tickIcon.png";
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../const/colors';
import Button from '../../components/Button';
import ThemeStyle from '../../const/ThemeStyle';

const Profile = () => {
    const navigationRoute = useNavigation();
    const [selectedBadge, setSelectedBadge] = useState(null);
    const badges = [
        require('../../assets/images/badges/PFP.png'),
        require('../../assets/images/badges/PFP1.png'),
        require('../../assets/images/badges/PFP2.png'),
        require('../../assets/images/badges/PFP3.png'),
        require('../../assets/images/badges/PFP5.png'),
        require('../../assets/images/badges/PFP6.png'),
        require('../../assets/images/badges/PFP7.png'),
        require('../../assets/images/badges/PFP8.png'),
        require('../../assets/images/badges/PFP9.png'),
        require('../../assets/images/badges/PFP10.png'),
        require('../../assets/images/badges/PFP11.png'),
        require('../../assets/images/badges/PFP12.png'),
    ];

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => setSelectedBadge(index)}
        >
            <Image
                source={item}
                style={styles.badge}
                resizeMode="contain"
            />
            {selectedBadge === index && (
                <Image
                    source={tickIcon}
                    style={styles.tickIcon}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[ThemeStyle.container, ThemeStyle.iosClass]}>
            <View style={ThemeStyle.mainWrapper}>
                <TouchableOpacity style={ThemeStyle.backArrowWrapper}
                    onPress={() => navigationRoute.goBack()}>
                    <Image
                        source={backArrow}
                        style={ThemeStyle.backArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View>
                    <Text style={[ThemeStyle.nameText]}>Choose Badge</Text>
                </View>
            </View>
            <FlatList
                data={badges}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={styles.flatListContent}
            />
            <Button
                title="Save Changes"
                buttonType
                bgColor={COLORS.btnColor}
                btnTextColor={COLORS.ShadowDarkest}
                stylesCss={[ThemeStyle.stylesCssOne, { marginBottom: 20 }]}
                btnwidth="100%"
                onPress={() => { navigationRoute.navigate("ProfileEdit") }}
            />
        </SafeAreaView>
    );
};

export default Profile;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flatListContent: { alignItems: 'flex-start' },
    imageContainer: {
        width: width * 0.3, alignItems: 'center', marginVertical: 20,
    },
    badge: { width: width * 0.25, height: height * 0.1 },
    tickIcon: {
        position: 'absolute', width: 30,
        height: 30, top: 0, right: 0
    },

});
