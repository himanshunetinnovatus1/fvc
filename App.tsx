
import React, { useEffect } from 'react';
import { Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { PERMISSIONS } from 'react-native-permissions';
import { CheckPermission } from './const/AppPermissions';


function App(): React.JSX.Element {

  const PermissionRequest = async () => {
    if (Platform.OS === 'android') {
      await CheckPermission(PERMISSIONS.ANDROID.CAMERA);
    } else {
      await CheckPermission(PERMISSIONS.IOS.CAMERA);
    }
  }

  useEffect(() => {
    PermissionRequest();
  }, []);

  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
