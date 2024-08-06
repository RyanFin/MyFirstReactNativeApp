import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextScreen() {
  return (
    <View>
      <Text> Enter a name: </Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
