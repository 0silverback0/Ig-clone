import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Video } from "expo-av";

const FullScreenVideo = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/video_of_funny_cat (1080p).mp4")}
        style={styles.video}
        resizeMode="cover"
        useNativeControls
        isLooping
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default FullScreenVideo;
