import { View, Text, Modal } from "react-native";
import React from "react";

// Tab Navigator
import TabNavigator from "./TabNavigator";
import Home from "../screens/Home";
import Add from "./Add";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen name="Home" component={Home} />

      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Add" component={Add} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
