import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

//screens
import Mine from "../screens/Mine";
import Others from "../screens/Others";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation: any = useNavigation();
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
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          }
        },
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Add")}>
            <FontAwesome name="pencil-square-o" size={30} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Mine" component={Mine} />
      <Tab.Screen name="Others" component={Others} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
