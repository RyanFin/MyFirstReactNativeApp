import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageDetail(props) {
  console.log(props);
  return (
    <View>
      <Text style={{ fontSize: 25 }}> {props.title} </Text>
      <Image source={props.imageName} />
      <Text>Image Score: {props.score} </Text>
    </View>
  );

  const styles = StyleSheet.create({});
}
