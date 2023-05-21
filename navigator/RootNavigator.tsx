import { View, Text } from "react-native";
import React from "react";

// Tab Navigator
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={TabNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
