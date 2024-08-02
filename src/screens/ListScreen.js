import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

export default function ListScreen() {
  const friends = [
    { name: "Friend #1", age: 20, key: "1" },
    { name: "Friend #2", age: 45, key: "2" },
    { name: "Friend #3", age: 32, key: "3" },
    { name: "Friend #4", age: 27, key: "4" },
    { name: "Friend #5", age: 53, key: "5" },
    { name: "Friend #6", age: 30, key: "6" },
    { name: "Friend #7", age: 60, key: "7" },
    { name: "Friend #8", age: 18, key: "8" },
  ];
  return (
    <FlatList
      //   horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      //   keyExtractor={({ name }) => name}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.textStyle}>
            {index} : {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
