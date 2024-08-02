import { Text, StyleSheet } from "react-native";

export default function RyanComponent() {
  const myName = "Ryan";
  return (
    <>
      <Text style={styles.headerText}>Getting started with React Native!</Text>
      <Text style={styles.regularText}>My name is {myName}.</Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 45,
  },

  regularText: {
    fontSize: 20,
  },
});
