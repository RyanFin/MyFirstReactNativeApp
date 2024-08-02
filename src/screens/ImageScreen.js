import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
  const beach = require("../../assets/beach.jpg");
  const forest = require("../../assets/forest.jpg");
  const mountain = require("../../assets/mountain.jpg");
  const volcano = require("../../assets/volcano.jpeg");
  return (
    // You can only return single root components in both React.js and React Native

    <View>
      <ImageDetail title={"Forest"} imageName={forest} />
      <ImageDetail title={"Beach"} imageName={beach} />
      <ImageDetail title={"Mountain"} imageName={mountain} />
      <ImageDetail title={"Volcano"} imageName={volcano} />
    </View>
  );

  const styles = StyleSheet.create({});
}
