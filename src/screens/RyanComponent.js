import { Text } from "react-native";

export default function RyanComponent() {
  const myName = "Ryan";
  return (
    <>
      <Text style={{ fontSize: 45 }}>Getting started with React Native!</Text>
      <Text style={{ fontSize: 20 }}>My name is {myName}.</Text>
    </>
  );

  const styles = StyleSheet.create({
    headerText: {
      fontSize: 45,
    },

    regularText: {
      fontSize: 20,
    },
  });
}
