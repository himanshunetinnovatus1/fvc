import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import MainDashboard from './screens/dashboard/MainDashboard';
import PieceDetails from './screens/dashboard/pieces/PieceDetails';
import ProfileEdit from './screens/profile/ProfileEdit';
import Profile from './screens/profile/Profile';
import EditBadge from './screens/profile/EditBadge';
import ClosetPickup from './screens/ClosetPickup';
import CreateFit from './screens/dashboard/fits/CreateFit';
import FitDetails from './screens/dashboard/fits/FitDetails';
import Inbox from "./screens/messages/Inbox";
import MessageSccreen from './screens/messages/MessageSccreen';
import Search from './screens/search/Search';
import PeopleProfile from './screens/profile/PeopleProfile';
import Resale from './screens/resale/Resale';
import Splash from './screens/Splash';

import Onboarding from './screens/loginscreens/onboarding';
import LoginScreen from './screens/loginscreens/Login';
import SignUp from './screens/loginscreens/SignUp';
import EmailVerification from './screens/loginscreens/EmailVerification';
import Permissions from './screens/loginscreens/Permissions';
import HowToUpload from './screens/loginscreens/HowToUpload';
import LoginOtp from './screens/loginscreens/LoginOtp';
import LoginEmail from './screens/loginscreens/LoginEmail';
import AddtoCloset from './screens/AddtoCloset';
import UploadImages from './screens/UploadImages';
import GalleryUpload from './screens/GalleryUpload';
import CreateCollections from './screens/dashboard/collections/CreateCollection';
import SaveCollection from './screens/dashboard/collections/SaveCollection';
import CollectionsDetails from './screens/dashboard/collections/CollectionsDetails';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      // initialRouteName="onboarding"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      {/* 1 */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* 2 */}
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* 3 login */}
      <Stack.Screen name='SignUp' component={SignUp} />
      {/* 3 signup*/}
      <Stack.Screen name='EmailVerification' component={EmailVerification} />
      {/* 4 EmailVerification*/}
      <Stack.Screen name='Permissions' component={Permissions} />
      {/* 5 Permissions*/}
      <Stack.Screen name="HowToUpload" component={HowToUpload} />
      {/* 6 HowToUpload*/}
      <Stack.Screen name="AddtoCloset" component={AddtoCloset} />
      {/* 6 AddtoCloset*/}
      <Stack.Screen name="MainDashboard" component={MainDashboard} />
      {/* 6 MainDashboard*/}
      <Stack.Screen name="FitDetails" component={FitDetails} />
      {/* 7 FitDetails*/}
      <Stack.Screen name="CreateFit" component={CreateFit} />
      <Stack.Screen name="CollectionsDetails" component={CollectionsDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="EditBadge" component={EditBadge} />





      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="MessageSccreen" component={MessageSccreen} />




      <Stack.Screen name="PieceDetails" component={PieceDetails} />
      <Stack.Screen name="ClosetPickup" component={ClosetPickup} />
      <Stack.Screen name="UploadImages" component={UploadImages} />
      <Stack.Screen name="GalleryUpload" component={GalleryUpload} />
      <Stack.Screen name="CreateCollections" component={CreateCollections} />
      <Stack.Screen name="SaveCollection" component={SaveCollection} />
      <Stack.Screen name="PeopleProfile" component={PeopleProfile} />
      <Stack.Screen name="Resale" component={Resale} />
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="LoginOtp" component={LoginOtp} />
      <Stack.Screen name="LoginEmail" component={LoginEmail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;




