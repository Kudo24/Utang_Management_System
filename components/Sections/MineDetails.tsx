import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";

// react navigation
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../../navigator/RootNavigator";

export type Props = StackScreenProps<RootStackParamList, "MineDetails">;
const MineDetails: FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Text>{route?.params?.title}</Text>
      <Text>{route?.params?.month}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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

export default MineDetails;
