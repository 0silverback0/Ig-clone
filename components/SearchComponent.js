import React from "react";
import {
  View,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

const SearchComponent = () => {
  // Dummy image data for demonstration
  const imageData = [
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/1fb.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/1p6.jpg",
    "https://cdn2.thecatapi.com/images/b6p.jpg",
    "https://cdn2.thecatapi.com/images/9fb.jpg",
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/1fb.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/1p6.jpg",
    "https://cdn2.thecatapi.com/images/b6p.jpg",
    "https://cdn2.thecatapi.com/images/9fb.jpg",
    "https://cdn2.thecatapi.com/images/1fb.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/1p6.jpg",
    "https://cdn2.thecatapi.com/images/b6p.jpg",
    "https://cdn2.thecatapi.com/images/9fb.jpg",
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/1fb.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/1p6.jpg",
    "https://cdn2.thecatapi.com/images/9fb.jpg",
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/1fb.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/1p6.jpg",
    "https://cdn2.thecatapi.com/images/b6p.jpg",
    "https://cdn2.thecatapi.com/images/9fb.jpg",
    "https://cdn2.thecatapi.com/images/9bt.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/8l2.jpg",
    "https://cdn2.thecatapi.com/images/1fb.jpg",
    "https://cdn2.thecatapi.com/images/c81.jpg",
    "https://cdn2.thecatapi.com/images/1p6.jpg",
  ];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={"grey"}
        style={styles.searchBar}
        // Add search functionality here
      />
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchBar: {
    padding: 20,
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "white",
  },
  contentContainer: {
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width / 3 - 20, // 3 images per row with padding of 10
    height: Dimensions.get("window").width / 3 - 20,
    margin: 5,
  },
});

export default SearchComponent;
