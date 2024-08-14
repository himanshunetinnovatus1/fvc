import React from 'react';

import COLORS from '../const/colors';
import { Text, View, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native';
import PageStyle from '../const/PageStyle';

const Loader = ({ visible = false }) => {
    const { height, width } = useWindowDimensions();

    return (
        visible && (
            <View style={[style.container, { height, width }]}>
                <View style={style.loader}>
                    <ActivityIndicator size="large" color={COLORS.red} />
                    <Text style={[PageStyle.text,{ marginHorizontal: 20, fontSize: 16 }]}>Loading...</Text>
                </View>
            </View>
        )
    )
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    loader: {
        height: 70,
        backgroundColor: COLORS.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

export default Loader;