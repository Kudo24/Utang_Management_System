import { View, Text } from "react-native";
import React from "react";

//screens
import Mine from "../screens/Mine";
import Others from "../screens/Others";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Mine") {
            return (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          } else if (route.name === "Others") {
            return (
              <FontAwesome5
                name="people-arrows"
                size={24}
                color={focused ? "#EB6A7C" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Mine" component={Mine} />
      <Tab.Screen name="Others" component={Others} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
