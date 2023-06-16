import { View, Text, StyleSheet } from "react-native";
import React, { FC, ReactNode } from "react";

import { TextProps } from "./types";

const SmallText: FC<TextProps> = ({ children }) => {
  return (
    <View>
      <Text style={styles.Smalltext}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Smalltext: {
    fontSize: 15,
  },
});

export default SmallText;
