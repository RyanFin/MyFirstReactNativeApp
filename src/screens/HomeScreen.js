import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentScreen";
import RyanComponent from "./RyanComponent";

function HomeScreen(props) {
  console.log(props.navigation);
  console.log(props);
  return (
    <>
      {/* <Text style={styles.text}>
        Can run in iOS and Android at the same time
      </Text> */}
      {/* <ComponentsScreen /> */}
      {/* <RyanComponent /> */}

      <Text style={styles.text}>Welcome to my first React Native App!</Text>
      {/* button is a self-closing element */}
      <Button
        title="Go to Components Demo"
        onPress={() => {
          // console.log("button pressed.");
          props.navigation.navigate("Components");
        }}
      />
      {/* not a self-closing element, unlike a button */}
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
