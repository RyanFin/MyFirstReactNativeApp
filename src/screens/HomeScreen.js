import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentsScreen from "./ComponentScreen";
import RyanComponent from "./RyanComponent";

const HomeScreen = () => {
  return (
    <>
      {/* <Text style={styles.text}>
        Can run in iOS and Android at the same time
      </Text> */}
      {/* <ComponentsScreen /> */}
      <RyanComponent />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
