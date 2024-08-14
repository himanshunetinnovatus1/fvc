import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashboard from '../../screens/dashboard/MainDashboard';
import CreateFit from '../../screens/dashboard/fits/CreateFit';
import Profile from '../../screens/profile/ProfileEdit';
// import { Image } from 'react-native';
// import bigDresser from "../../assets/images/bigDresser.png";
// import tshirtMenu from "../../assets/images/tshirtMenu.png";
// import profile from "../../assets/images/profile.png";
// import bigDresserFade from "../../assets/images/bigDresserFade.png";
// import tshirtMenuFade from "../../assets/images/tshirtMenuFade.png";
// import profileFade from "../../assets/images/profileFade.png";
// import COLORS from '../../const/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused }) => {
        //         let icon;

        //         if (route.name === 'Closet') {
        //             icon = focused ? bigDresser : bigDresserFade;
        //         } else if (route.name === 'CreateFit') {
        //             icon = focused ? tshirtMenu : tshirtMenuFade;
        //         } else if (route.name === 'Profile') {
        //             icon = focused ? profile : profileFade;
        //         }

        //         return <Image source={icon} style={{ width: 55, height: 55 }} />;
        //     },
        //     tabBarLabel: ({ focused }) => {
        //         let label;

        //         if (route.name === 'Closet') {
        //             label = 'My Closet';
        //         } else if (route.name === 'CreateFit') {
        //             label = 'Make a Fit';
        //         } else if (route.name === 'Profile') {
        //             label = 'Profile';
        //         }

        //         return (
        //             <Text style={{ color: focused ? COLORS.ShadowDarkest : COLORS.ShadowDarkest, opacity: focused ? 1 : 0.3 }}>
        //                 {label}
        //             </Text>
        //         );
        //     },
        // })}
        // tabBarOptions={{
        //     showIcon: true,
        //     style: { backgroundColor: COLORS.white, borderTopWidth: 1, borderTopColor: COLORS.white, paddingTop: 15, paddingBottom: 10 },
        // }}
        >
            <Tab.Screen name="Closet" component={MainDashboard} />
            <Tab.Screen name="CreateFit" component={CreateFit} />
            <Tab.Screen name="ProfileEdit" component={Profile} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
