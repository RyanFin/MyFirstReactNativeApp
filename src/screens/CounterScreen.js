import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function CounterScreen() {
  // array destructuring
  const [counter, setCounter] = useState(0);
  //   let counter = 0;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // counter += 1;
          // console.log(counter);
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //   counter -= 1;
          //   console.log(counter);
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
