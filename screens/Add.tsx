import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { FC, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// react navigation
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { AddProps } from "./types";
export type Props = StackScreenProps<RootStackParamList, "Add">;

const Add: FC<Props> = ({ route }) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dateContainer}>
          <TextInput placeholder="Month:" style={styles.date} />
          <TextInput
            placeholder="Day:"
            style={styles.date}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Year:"
            style={styles.date}
            keyboardType="numeric"
          />
        </View>
        <TextInput placeholder="Name:" style={styles.Input} />
        <TextInput placeholder="Amount:" style={styles.Input} />
        <TextInput placeholder="Description:" style={styles.Input} />
      </View>
      <TouchableOpacity style={styles.proceed}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
    backgroundColor: "white",
  },
  Input: {
    backgroundColor: "#A8A9A9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  date: {
    backgroundColor: "#A8A9A9",
    width: 80,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  proceed: {
    alignItems: "center",
    backgroundColor: "#00ced1",
    padding: 10,
    borderRadius: 10,
  },
  proceedText: {
    color: "white",
  },
});
export default Add;
