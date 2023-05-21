import { View, Text } from "react-native";
import React from "react";

//screens
import Mine from "../screens/Mine";
import Others from "../screens/Others";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mine" component={Mine} />
      <Tab.Screen name="Others" component={Others} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
