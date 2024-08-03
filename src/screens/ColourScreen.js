import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function ColourScreen() {
  const [colours, setColours] = useState([]);

  function handlePress() {
    // spread and add to the colours array
    // ...colours means take a copy of everything from the colours array and add it to the current new one
    setColours([...colours, randomRGB()]);
  }

  return (
    <View>
      <Button title="Add a colour" onPress={handlePress} />
      <View style={{ height: 100, width: 100, backgroundColor: randomRGB() }} />
    </View>
  );
}

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue} )`;
}

const styles = StyleSheet.create({});
