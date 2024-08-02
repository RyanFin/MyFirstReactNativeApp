import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

export default function ListScreen() {
  const friends = [
    { name: "Friend #1", key: "1" },
    { name: "Friend #2", key: "2" },
    { name: "Friend #3", key: "3" },
    { name: "Friend #4", key: "4" },
    { name: "Friend #5", key: "5" },
    { name: "Friend #6", key: "6" },
    { name: "Friend #7", key: "7" },
    { name: "Friend #8", key: "8" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      //   keyExtractor={({ name }) => name}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.textStyle}>
            {index} : {item.name}
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
