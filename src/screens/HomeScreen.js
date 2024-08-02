import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentScreen";
import RyanComponent from "./RyanComponent";

// only retrieve the navigation propery from the entire props list.
function HomeScreen({ navigation }) {
  // console.log(props.navigation);
  // console.log(props);
  return (
    <>
      <Text style={styles.text}>Welcome to my first React Native App!</Text>
      {/* button is a self-closing element */}

      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />

      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate("List")}
      />

      {/* not a self-closing element, unlike a button */}
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
