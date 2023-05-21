import { View, Text } from "react-native";
import React from "react";

// Tab Navigator
import TabNavigator from "./TabNavigator";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
