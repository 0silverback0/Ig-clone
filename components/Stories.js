import React from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";

const Stories = () => {
  const fakeUsernames = [
    "whiskerlover42",
    "meowmaster",
    "catnipqueen",
    "felinefanatic",
    "kittykisses23",
    "purrfectpal",
    "clawconnoisseur",
    "whiskerwhisperer",
    "tabbytamer",
    "pawprintpro",
    "felinelover123",
    "catwhisperer",
    "whiskerwizard",
    "meowmixer",
    "furryfriendfinder",
    "kittyconnoisseur",
  ];

  const stories = [
    {
      username: fakeUsernames[0],
      imageUrl: "https://cdn2.thecatapi.com/images/9bt.jpg",
    },
    {
      username: fakeUsernames[1],
      imageUrl: "https://cdn2.thecatapi.com/images/c81.jpg",
    },
    {
      username: fakeUsernames[2],
      imageUrl: "https://cdn2.thecatapi.com/images/8l2.jpg",
    },
    {
      username: fakeUsernames[3],
      imageUrl: "https://cdn2.thecatapi.com/images/1fb.jpg",
    },
    {
      username: fakeUsernames[4],
      imageUrl: "https://cdn2.thecatapi.com/images/c81.jpg",
    },
    {
      username: fakeUsernames[5],
      imageUrl: "https://cdn2.thecatapi.com/images/1p6.jpg",
    },
    {
      username: fakeUsernames[6],
      imageUrl: "https://cdn2.thecatapi.com/images/b6p.jpg",
    },
    {
      username: fakeUsernames[7],
      imageUrl: "https://cdn2.thecatapi.com/images/9fb.jpg",
    },
    {
      username: fakeUsernames[8],
      imageUrl: "https://cdn2.thecatapi.com/images/9bt.jpg",
    },
    {
      username: fakeUsernames[9],
      imageUrl: "https://cdn2.thecatapi.com/images/c81.jpg",
    },
    {
      username: fakeUsernames[10],
      imageUrl: "https://cdn2.thecatapi.com/images/8l2.jpg",
    },
    {
      username: fakeUsernames[11],
      imageUrl: "https://cdn2.thecatapi.com/images/1fb.jpg",
    },
    {
      username: fakeUsernames[12],
      imageUrl: "https://cdn2.thecatapi.com/images/c81.jpg",
    },
    {
      username: fakeUsernames[13],
      imageUrl: "https://cdn2.thecatapi.com/images/1p6.jpg",
    },
    {
      username: fakeUsernames[14],
      imageUrl: "https://cdn2.thecatapi.com/images/b6p.jpg",
    },
    {
      username: fakeUsernames[15],
      imageUrl: "https://cdn2.thecatapi.com/images/9fb.jpg",
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {stories.map((story, index) => (
        <View key={index} style={styles.storyWrapper}>
          <View style={styles.storyContainer}>
            <Image source={{ uri: story.imageUrl }} style={styles.storyImage} />
          </View>
          <Text style={styles.storyText}>{story.username}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  storyWrapper: {
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  storyContainer: {
    width: 80,
    height: 80,
    borderRadius: 75,
    borderColor: "white",
    borderWidth: 3,
    overflow: "hidden",
  },
  storyImage: {
    width: "100%",
    height: "100%",
  },
  storyText: {
    marginTop: 5,
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
});

export default Stories;
