import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';

const Stories = () => {
    const stories = [
      'https://cdn2.thecatapi.com/images/9bt.jpg',
      'https://cdn2.thecatapi.com/images/c81.jpg',
      'https://cdn2.thecatapi.com/images/8l2.jpg',
      'https://cdn2.thecatapi.com/images/1fb.jpg',
      'https://cdn2.thecatapi.com/images/c81.jpg',
      'https://cdn2.thecatapi.com/images/1p6.jpg',
      'https://cdn2.thecatapi.com/images/b6p.jpg',
      'https://cdn2.thecatapi.com/images/9fb.jpg',
      'https://cdn2.thecatapi.com/images/9bt.jpg',
      'https://cdn2.thecatapi.com/images/c81.jpg',
      'https://cdn2.thecatapi.com/images/8l2.jpg',
      'https://cdn2.thecatapi.com/images/1fb.jpg',
      'https://cdn2.thecatapi.com/images/c81.jpg',
      'https://cdn2.thecatapi.com/images/1p6.jpg',
      'https://cdn2.thecatapi.com/images/b6p.jpg',
      'https://cdn2.thecatapi.com/images/9fb.jpg',
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
  {stories.map((story, index) => (
    <View key={index} style={styles.storyWrapper}>
      <View style={styles.storyContainer}>
        <Image source={{ uri: story }} style={styles.storyImage} />
      </View>
      <Text style={styles.storyText}>hello</Text>
    </View>
  ))}
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  storyWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10
  },
  storyContainer: {
    width: 80,
    height: 80,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
  },
  storyImage: {
    width: '100%',
    height: '100%',
  },
  storyText: {
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 12
  },

});


export default Stories;
