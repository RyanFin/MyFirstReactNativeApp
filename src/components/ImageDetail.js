import { StyleSheet, Text } from "react-native";

export default function ImageDetail(props) {
  console.log(props);
  return <Text> {props.title} </Text>;

  const styles = StyleSheet.create({});
}
