import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";

// react navigation
import { StackScreenProps } from "@react-navigation/stack";
import { TransactionProps } from "./types";

export type Props = StackScreenProps<TabStackParamList, "Mine">;

const Mine: FC<Props> = ({ route }) => {
  const [transacts, setTransacts] = useState<TransactionProps[]>([]);
  const navigation: any = useNavigation();

  useEffect(() => {
    if (route?.params?.name) {
      const newTransaction = {
        name: route.params.name,
        amount: route.params.amount,
        month: route.params.month,
        day: route.params.day,
        year: route.params.year,
        description: route.params.description,
      };

      setTransacts((prevTransacts) => [...prevTransacts, newTransaction]);
    }
  }, [route?.params]);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {transacts.map((item, index) => (
          <View key={index}>
            <Text>{item.amount}</Text>
            <Text>{item.name}</Text>
            <Text>{item.day}</Text>
            <Text>{item.month}</Text>
          </View>
        ))}
      </View>
      <View style={styles.addList}>
        <TouchableOpacity
          style={styles.pencil}
          onPress={() => navigation.navigate("Add", { title: "Mine" })}
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

export default Mine;
