import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login/";
import RegisterScreen from "../screens/auth/register/";
import HomeScreen from "../screens/home";

const Stacking = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stacking.Navigator initialRouteName="Login">
        <Stacking.Screen name="Login" component={LoginScreen} />
        <Stacking.Screen name="Register" component={RegisterScreen} />
        <Stacking.Screen name="Home" component={HomeScreen} />
      </Stacking.Navigator>
    </NavigationContainer>
  );
}
