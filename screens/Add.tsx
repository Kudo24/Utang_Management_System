import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { FC, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

// react navigation
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../navigator/RootNavigator";
import { Divider } from "@rneui/themed";

export type Props = StackScreenProps<RootStackParamList, "Add">;

type FormValues = {
  month: string;
  day: string;
  year: string;
  name: string;
  amount: string;
  description: string;
};
const initialValues: FormValues = {
  month: "",
  day: "",
  year: "",
  name: "",
  amount: "",
  description: "",
};

const Add: FC<Props> = ({ route }) => {
  const navigation: any = useNavigation();
  const title = route?.params?.title;

  return (
    <View style={styles.container}>
      <View>
        <Formik
          initialValues={initialValues}
          validateOnMount={true}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <>
              <View>
                <View style={styles.dateContainer}>
                  <TextInput
                    placeholder="Month:"
                    style={styles.date}
                    value={values.month}
                    onBlur={handleBlur("month")}
                    onChangeText={handleChange("month")}
                  />
                  <TextInput
                    placeholder="Day:"
                    style={styles.date}
                    keyboardType="numeric"
                    value={values.day}
                    onBlur={handleBlur("day")}
                    onChangeText={handleChange("day")}
                  />
                  <TextInput
                    placeholder="Year:"
                    style={styles.date}
                    keyboardType="numeric"
                    value={values.year}
                    onBlur={handleBlur("year")}
                    onChangeText={handleChange("year")}
                  />
                </View>
                <TextInput
                  placeholder="Name:"
                  style={styles.Input}
                  value={values.name}
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                />
                <TextInput
                  placeholder="Amount:"
                  style={styles.Input}
                  value={values.amount}
                  onBlur={handleBlur("amount")}
                  onChangeText={handleChange("amount")}
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Description:"
                  style={styles.Input}
                  value={values.description}
                  onBlur={handleBlur("description")}
                  onChangeText={handleChange("description")}
                />
              </View>
              <TouchableOpacity
                style={styles.proceed}
                onPress={
                  title === "Mine"
                    ? () =>
                        navigation.navigate("Mine", {
                          month: values.month,
                          day: values.day,
                          year: values.year,
                          name: values.name,
                          amount: values.amount,
                          description: values.description,
                        })
                    : () =>
                        navigation.navigate("Others", {
                          month: values.month,
                          day: values.day,
                          year: values.year,
                          name: values.name,
                          amount: values.amount,
                          description: values.description,
                        })
                }
              >
                <Text style={styles.proceedText}>Proceed</Text>
              </TouchableOpacity>
              <Divider />
            </>
          )}
        </Formik>
      </View>
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
