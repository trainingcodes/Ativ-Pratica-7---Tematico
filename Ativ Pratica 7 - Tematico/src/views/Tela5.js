import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default comp => (
  <View style={styles.container}>
    <Image
      source={require("../assets/fox-news-channel.png")}
      style={styles.image}
      resizeMode="cover"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

