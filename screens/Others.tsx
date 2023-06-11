import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const Others = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text>others</Text>
      </View>
      <View style={styles.addList}>
        <TouchableOpacity
          style={styles.pencil}
          onPress={() => navigation.navigate("Add", { title: "Others" })}
        >
          <FontAwesome name="pencil-square-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
  list: {
    flex: 1,
  },
  addList: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  pencil: {
    padding: 25,
    backgroundColor: "#6CB4EE",
    alignItems: "center",
    borderRadius: 40, // half of 80
    width: 80,
    marginBottom: 20,
  },
});
export default Others;
