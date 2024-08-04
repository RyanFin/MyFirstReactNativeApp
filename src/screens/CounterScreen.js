import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function CounterScreen() {
  const initialState = {
    counter: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return { ...state, counter: state.counter + action.payload };
      case "decrease":
        return { ...state, counter: state.counter - action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { counter } = state;

  const COUNT_AMOUNT = 1;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: COUNT_AMOUNT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: COUNT_AMOUNT });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
