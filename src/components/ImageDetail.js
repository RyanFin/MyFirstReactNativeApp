import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageDetail(props) {
  console.log(props);
  return (
    <View>
      <Image source={props.imageName} />
      <Text> {props.title} </Text>
    </View>
  );

  const styles = StyleSheet.create({});
}
