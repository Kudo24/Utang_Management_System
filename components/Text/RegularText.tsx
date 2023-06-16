import { View, Text, StyleSheet } from "react-native";
import React, { FC, ReactNode } from "react";

import { TextProps } from "./types";

const RegularText: FC<TextProps> = ({ children }) => {
  return (
    <View>
      <Text style={styles.Regulartext}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Regulartext: {
    fontSize: 20,
  },
});
export default RegularText;
