import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextScreen() {
  const [password, setPassword] = useState("");
  const MIN_CHARS = 5;
  return (
    <View>
      <Text> Enter a password: </Text>
      <TextInput
        style={styles.input}
        //   prevent iOS and Android from capitalising our characters
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(e) => {
          setPassword(e);
          console.log(password.length);
        }}
      />
      <Text>
        My password is: {password}({password.length})
      </Text>
      {password.length < 5 ? (
        <Text style={{ color: "red" }}>
          Enter a password longer than 5 characters please...
        </Text>
      ) : null}
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
