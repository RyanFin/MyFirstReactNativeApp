import { AppState, StyleSheet, Text, View } from "react-native";
import ColourCounter from "../components/ColourCounter";
import { useReducer, useState } from "react";

const COLOUR_INCREMENT = 15;

function reducer(state, action) {
  // state is equsl to an object where {red: number, green: number, blue: number}
  // action: how should we change our state object (update as in increase, decrease colours etc.)
  // action === {colourToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

  switch (action.colourToChange) {
    case "red":
      // add validation check
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        // must return state otherwise you will get an undefined error
        return state;
      }
      // no change has been made to state, we have simple copied the values from state and incremented the value of the red attribute by the specified amount
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
}
export default function SquareScreen() {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  //   destructure state
  const { red, green, blue } = state;

  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() =>
          dispatch({ colourToChange: "red", amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "red", amount: -1 * COLOUR_INCREMENT })
        }
      />
      <ColourCounter
        colour="Blue"
        onIncrease={() =>
          dispatch({ colourToChange: "blue", amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "blue", amount: -1 * COLOUR_INCREMENT })
        }
      />
      <ColourCounter
        colour="Green"
        onIncrease={() =>
          dispatch({ colourToChange: "green", amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "green", amount: -1 * COLOUR_INCREMENT })
        }
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
