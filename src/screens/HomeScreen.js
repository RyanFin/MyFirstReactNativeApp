import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ComponentsScreen from "./ComponentScreen";
import RyanComponent from "./RyanComponent";

const HomeScreen = () => {
  return (
    <>
      {/* <Text style={styles.text}>
        Can run in iOS and Android at the same time
      </Text> */}
      {/* <ComponentsScreen /> */}
      {/* <RyanComponent /> */}

      <Text style={styles.text}>Welcome to my first React Native App!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          console.log("button pressed.");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
