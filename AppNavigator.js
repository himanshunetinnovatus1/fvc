import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import MainDashboard from './screens/dashboard/MainDashboard';
import ProfileEdit from './screens/profile/ProfileEdit';
import Profile from './screens/profile/Profile';
import EditBadge from './screens/profile/EditBadge';
import CreateFit from './screens/dashboard/fits/CreateFit';
import FitDetails from './screens/dashboard/fits/FitDetails';
import Inbox from "./screens/messages/Inbox";
import MessageSccreen from './screens/messages/MessageSccreen';
import Search from './screens/search/Search';
import Splash from './screens/Splash';
import Subscription from "./screens/dashboard/subscription/Subscription"
import LoginScreen from './screens/loginscreens/Login';
import SignUp from './screens/loginscreens/SignUp';
import EmailVerification from './screens/loginscreens/EmailVerification';
import Permissions from './screens/loginscreens/Permissions';
import HowToUpload from './screens/loginscreens/HowToUpload';
import AddtoCloset from './screens/AddtoCloset';
import CollectionsDetails from './screens/dashboard/collections/CollectionsDetails';


// not in used
import PieceDetails from './screens/dashboard/pieces/PieceDetails';
import ClosetPickup from './screens/ClosetPickup';
import UploadImages from './screens/UploadImages';
import GalleryUpload from './screens/GalleryUpload';
import CreateCollections from './screens/dashboard/collections/CreateCollection';
import SaveCollection from './screens/dashboard/collections/SaveCollection';
import PeopleProfile from './screens/profile/PeopleProfile';
import Resale from './screens/resale/Resale';
import Onboarding from './screens/loginscreens/onboarding';
import LoginOtp from './screens/loginscreens/LoginOtp';
import LoginEmail from './screens/loginscreens/LoginEmail';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='EmailVerification' component={EmailVerification} />
      <Stack.Screen name='Permissions' component={Permissions} />
      <Stack.Screen name="HowToUpload" component={HowToUpload} />
      <Stack.Screen name="AddtoCloset" component={AddtoCloset} />
      <Stack.Screen name="MainDashboard" component={MainDashboard} />
      <Stack.Screen name="FitDetails" component={FitDetails} />
      <Stack.Screen name="CreateFit" component={CreateFit} />
      <Stack.Screen name="CollectionsDetails" component={CollectionsDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="EditBadge" component={EditBadge} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="MessageSccreen" component={MessageSccreen} />





      {/* not used  old version*/}
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




