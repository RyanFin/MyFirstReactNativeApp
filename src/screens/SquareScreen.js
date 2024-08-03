import { StyleSheet, Text, View } from "react-native";
import ColourCounter from "../components/ColourCounter";
import { useState } from "react";

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOUR_INCREMENT = 15;

  function setColour(colour, change) {
    // colour is going to be equal to red, green or blue as a string
    // change is the amount we want to change the colour by (+15, -15)
    switch (colour) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  }

  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() => setColour("red", COLOUR_INCREMENT)}
        onDecrease={() => setColour("red", -1 * COLOUR_INCREMENT)}
      />
      <ColourCounter
        colour="Blue"
        onIncrease={() => setColour("blue", COLOUR_INCREMENT)}
        onDecrease={() => setColour("blue", -1 * COLOUR_INCREMENT)}
      />
      <ColourCounter
        colour="Green"
        onIncrease={() => setColour("green", COLOUR_INCREMENT)}
        onDecrease={() => setColour("green", -1 * COLOUR_INCREMENT)}
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
