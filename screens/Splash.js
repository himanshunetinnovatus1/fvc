import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import PageStyle from '../const/PageStyle';
import logo from '../assets/images/logoxl.png';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigationRoute = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigationRoute.navigate("Home");
        }, 4000);

        return () => clearTimeout(timeout);
    }, [navigationRoute]);

    return (
        <View style={styles.container}>
            <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 200,
        marginBottom: 50
    },
});
