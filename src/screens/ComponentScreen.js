import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  var a = 1;
  var b = 10;
  var greeting = "Groot";

  return (
    <View>
      <Text style={styles.textStyle}> Hello World</Text>
      <Text>{a < b ? "a is less than b" : "a is greater than b"}</Text>
      {/* {greeting && <Text>{greeting}</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 21,
  },
});
