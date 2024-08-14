
import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import COLORS from '../const/colors';
import ThemeStyle from '../const/ThemeStyle';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CountrysCode = [
    { label: '+1', value: '+1' },
    { label: '+2', value: '+2' },
    { label: '+333', value: '+333' },
];
const { width, height } = Dimensions.get('window');

const Input = ({
    label, iconName, BackiconName, BackiconNameClr,
    BackiconNameOpacity, error, password, InCWidth, InputType,
    onFocus = () => { }, value, onChangeText, inputHeight,
    ...props
}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };

    const handlePhoneNumberChange = (value) => {
        const formattedValue = formatPhoneNumber(value);
        onChangeText(formattedValue);
    };

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{
                height: inputHeight ? inputHeight : 40,
                borderColor: error
                    ? COLORS.red
                    : isFocused
                        ? COLORS.orangeTXT
                        : COLORS.BorderGray,
                borderWidth: 0.8,
                backgroundColor: COLORS.white,
                width: InCWidth ? InCWidth : '100%',
                borderRadius: width * 0.02,
                flexDirection: 'row',
                paddingHorizontal: width * 0.02,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                borderStyle: 'solid',
            }}>

                {(InputType === 'number' && props.placeholder === "(123) 456-7890") && (
                    <Dropdown
                        data={CountrysCode}
                        maxHeight={150}
                        style={{
                            width: '22%', borderWidth: 0,
                            paddingHorizontal: 6, backgroundColor: COLORS.white,
                        }}
                        labelField="label"
                        valueField="value"
                        placeholder=""
                        placeholderStyle={{ fontSize: width * 0.038, fontWeight: '300', color: COLORS.BorderGray }}
                        selectedTextStyle={{ fontSize: width * 0.038, fontWeight: '300', color: COLORS.BorderGray }}
                        onChange={(item) => { console.log(item.value); }}
                        value='+1'
                        onFocus={() => {
                            onFocus();
                            setIsFocused(true);
                        }}
                        onBlur={() => {
                            setIsFocused(false);
                        }}
                    />
                )}

                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    style={[ThemeStyle.BoldKeyword, {
                        color: COLORS.SecondaryDarkest,
                        flex: 1,
                    }]}
                    value={value}
                    placeholderStyle={{ fontSize: width * 0.038, fontWeight: '300', color: COLORS.BorderGray, backgroundColor: "red" }}
                    selectedTextStyle={{ fontSize: width * 0.038, fontWeight: '300', color: COLORS.BorderGray, backgroundColor: "red" }}
                    onChangeText={InputType === 'number' ? handlePhoneNumberChange : onChangeText}
                    keyboardType={InputType === 'number' ? 'numeric' : 'default'}
                    {...props}
                />
                {password && (
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                        <Icon
                            name={hidePassword ? 'visibility' : 'visibility-off'}
                            size={20} color={COLORS.BorderGray}
                        />
                    </TouchableOpacity>
                )}
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: COLORS.red, fontSize: width * 0.034, fontWeight: '300' }}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', height: height * 0.06,
        borderColor: COLORS.BorderGray, borderWidth: 1,
        borderRadius: width * 0.02, flexDirection: 'row',
        paddingHorizontal: width * 0.03, alignItems: 'center',
        borderStyle: 'solid',
    },
});

export default Input;
