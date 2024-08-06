import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text> Enter a name: </Text>
      <TextInput
        style={styles.input}
        //   prevent iOS and Android from capitalising our characters
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(e) => {
          setName(e);
          console.log(name);
        }}
      />
      <Text>My name is: {name}</Text>
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
