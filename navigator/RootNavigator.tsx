import { View, Text, Modal } from "react-native";
import React, { FC } from "react";

// Tab Navigator
import TabNavigator from "./TabNavigator";
import Home from "../screens/Home";

import { createStackNavigator } from "@react-navigation/stack";
import Add from "../screens/Add";
import MineDetails from "../components/Sections/MineDetails";

//types
import { AddProps } from "../screens/types";
import { MineProps } from "../screens/types";
export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Add: AddProps;
  MineDetails: MineProps;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator: FC<RootStackParamList> = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="MineDetails" component={MineDetails} />

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "Add something",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            color: "black",
          },
        }}
      >
        <RootStack.Screen name="Add" component={Add} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
