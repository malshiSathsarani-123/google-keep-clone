import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/HomeScreen';
import CustomDrawerContent from './components/customDrawerContent';
import { RootStackParamList } from "./app/home/types";
import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator"; // Import the navigation types

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerStyle: { backgroundColor: '#2C2C2C', width: 250 },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
