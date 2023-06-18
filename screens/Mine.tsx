import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";

// react navigation
import { StackScreenProps } from "@react-navigation/stack";
import { TransactionProps } from "./types";
import { Divider } from "@rneui/themed";
import BigText from "../components/Text/BigText";
import RegularText from "../components/Text/RegularText";
import SmallText from "../components/Text/SmallText";
import * as SQLite from "expo-sqlite";
export type Props = StackScreenProps<TabStackParamList, "Mine">;

const Mine: FC<Props> = ({ route }) => {
  const [transacts, setTransacts] = useState<TransactionProps[]>([]);
  const navigation: any = useNavigation();

  const db = SQLite.openDatabase("example.db");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (route?.params?.name) {
      const newTransaction = {
        name: route?.params?.name,
        amount: route?.params?.amount,
        month: route?.params?.month,
        day: route?.params?.day,
        year: route?.params?.year,
        description: route?.params?.description,
      };

      setTransacts((prevTransacts) => [...prevTransacts, newTransaction]);
    }
  }, [route?.params]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {transacts.map((item, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.RecordButton}>
              <RegularText>{item.name}</RegularText>
              <RegularText>P{item.amount}</RegularText>
            </View>
            <Divider />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginTop: 10,
  },
  addList: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  pencil: {
    position: "absolute",
    padding: 25,
    backgroundColor: "#6CB4EE",
    alignItems: "center",
    borderRadius: 40, // half of 80
    width: 80,
    marginBottom: 20,
    bottom: 1,
  },
  RecordButton: {
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default Mine;
