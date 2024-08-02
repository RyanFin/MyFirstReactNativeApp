import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  return (
    <View>
      <Text style={styles.textStyle}> Hello World</Text>
      <Text>Hi There!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 21,
  },
});
