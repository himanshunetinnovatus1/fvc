import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import COLORS from '../const/colors';

const CustomButton = ({ onPress, imageSource, buttonText, buttonStyle, imageStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            {imageSource && <Image source={imageSource} style={[styles.image, imageStyle]} />}
            <Text style={[styles.text, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        // backgroundColor: "#BBD8F2",
        backgroundColor: COLORS.Secondary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 4,
    },
    image: {
        marginRight: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: COLORS.ShadowDarkest,
    },
});

export default CustomButton;


// import React from 'react';
// import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// const CustomButton = ({ onPress, imageSource, buttonText, buttonStyle, imageStyle, textStyle }) => {
//     return (
//         <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
//             {imageSource && <Image source={imageSource} style={[styles.image, imageStyle]} />}
//             <Text style={[styles.text, textStyle]}>{buttonText}</Text>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "#BBD8F2",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center",
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 3.84,
//         elevation: 4,
//     },
//     image: {
//         width: 20,
//         height: 20,
//         marginRight: 10,
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: '500',
//         color: "black",
//     },
// });

// export default CustomButton;

