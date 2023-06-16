import { View, Text, StyleSheet } from "react-native";
import React, { FC, ReactNode } from "react";

import { TextProps } from "./types";

const BigText: FC<TextProps> = ({ children }) => {
  return <Text style={styles.bigtext}>{children}</Text>;
};

const styles = StyleSheet.create({
  bigtext: {
    fontSize: 30,
  },
});
export default BigText;
