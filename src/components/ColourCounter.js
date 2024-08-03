import { StyleSheet, Text, View, Button } from "react-native";

export default function ColourCounter({ colour, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{colour}</Text>
      <Button title={`Increase ${colour}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${colour}`} onPress={() => onDecrease()} />
    </View>
  );
}

const styles = StyleSheet.create({});
