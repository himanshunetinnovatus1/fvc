import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-switch';
import COLORS from '../../const/colors';

const Switchbtn = ({value, setFun}) => {
    return (
        <View>
            <Switch
                value={value}
                onValueChange={setFun}
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
    )
}

export default Switchbtn

const styles = StyleSheet.create({
    switch: { marginLeft: 10, },

})