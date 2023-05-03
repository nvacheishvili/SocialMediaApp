// Import the createStackNavigator function from the @react-navigation/stack package
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Import the Home and Profile components from their respective files
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

// Import the Routes object from the Routes file
import {Routes} from './Routes';

import {View, Text} from 'react-native';

// Create a Stack variable using the createStackNavigator function
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 1</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={'Tab1'} component={Tab1} />
      <ProfileTabs.Screen name={'Tab2'} component={Tab2} />
      <ProfileTabs.Screen name={'Tab3'} component={Tab3} />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      // Hide the header for all screens
      screenOptions={{header: () => null, headerShown: false}}>
      {/* Define the Home screen */}
      <Drawer.Screen name={Routes.Home} component={Home} />
      {/* Define the Profile screen */}
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

// Define the MainNavigation component
const MainNavigation = () => {
  // Return the navigation structure for the app
  return (
    <Stack.Navigator
      // Set the initial route to the Home screen
      initialRouteName={Routes.Home}
      // Hide the header for all screens
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

// Export the MainNavigation component as the default export of this file
export default MainNavigation;
