import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";

const RecentPhotosScreen = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }
      getRecentPhotos();
    };
    getPermissions();
  }, []);

  const getRecentPhotos = async () => {
    const { assets } = await MediaLibrary.getAssetsAsync({
      first: 100,
      sortBy: MediaLibrary.SortBy.creationTime,
    });
    setPhotos(assets);
  };

  const renderPhotoItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  flatListContent: {
    alignItems: "center",
  },
});

export default RecentPhotosScreen;
