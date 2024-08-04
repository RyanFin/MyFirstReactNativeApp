import { AppState, StyleSheet, Text, View } from "react-native";
import ColourCounter from "../components/ColourCounter";
import { useReducer, useState } from "react";

const COLOUR_INCREMENT = 15;

function reducer(state, action) {
  // state is equsl to an object where {red: number, green: number, blue: number}
  // action: how should we change our state object (update as in increase, decrease colours etc.)
  // action === {type: 'red' || 'green' || 'blue', payload: 15 || -15}

  switch (action.type) {
    case "red":
      // add validation check
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "green":
      // this method is equivalent code to the code above :)
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
        onIncrease={() => dispatch({ type: "red", payload: COLOUR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * COLOUR_INCREMENT })
        }
      />
      <ColourCounter
        colour="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: COLOUR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOUR_INCREMENT })
        }
      />
      <ColourCounter
        colour="Green"
        onIncrease={() =>
          dispatch({ type: "green", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * COLOUR_INCREMENT })
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
