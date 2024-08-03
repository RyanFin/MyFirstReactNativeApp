import { Text, View, StyleSheet, Button } from "react-native";

export default function CounterScreen() {
  let counter = 0;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter += 1;
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          counter -= 1;
          console.log(counter);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
