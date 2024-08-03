import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
  const beach = require("../../assets/beach.jpg");
  const forest = require("../../assets/forest.jpg");
  const mountain = require("../../assets/mountain.jpg");
  const volcano = require("../../assets/volcano.jpeg");

  const score = [9, 7, 4, 10];

  return (
    // You can only return single root components in both React.js and React Native
    <View>
      <ImageDetail title={"Forest"} imageName={forest} score={score[0]} />
      <ImageDetail title={"Beach"} imageName={beach} score={score[1]} />
      <ImageDetail title={"Mountain"} imageName={mountain} score={score[2]} />
      <ImageDetail title={"Volcano"} imageName={volcano} score={score[3]} />
    </View>
  );

  const styles = StyleSheet.create({});
}
