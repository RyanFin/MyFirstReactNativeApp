import { StyleSheet, Text, View } from "react-native";
import ColourCounter from "../components/ColourCounter";
import { useState } from "react";

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOUR_INCREMENT = 15;

  console.log(red);

  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() => setRed(red + COLOUR_INCREMENT)}
        onDecrease={() => setRed(red - COLOUR_INCREMENT)}
      />
      <ColourCounter
        colour="Blue"
        onIncrease={() => setBlue(blue + COLOUR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOUR_INCREMENT)}
      />
      <ColourCounter
        colour="Green"
        onIncrease={() => setGreen(green + COLOUR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOUR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          //   string template with backticks `
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
