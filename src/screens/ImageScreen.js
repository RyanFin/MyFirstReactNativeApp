import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
  return (
    // You can only return single root components in both React.js and React Native
    <View>
      <ImageDetail title={"Forest"} imageName={""} />
      <ImageDetail title={"Beach"} imageName={""} />
      <ImageDetail title={"Lava"} imageName={""} />
      <ImageDetail title={"Volcano"} imageName={""} />
    </View>
  );

  const styles = StyleSheet.create({});
}
