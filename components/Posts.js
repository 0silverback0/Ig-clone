import React, { useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Stories from "./Stories";
import Header from "./Header";
import posts from "./helper";
import CommentInput from "./CommentInput";

const { width } = Dimensions.get("window");

const Posts = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);

  const handleLike = (postId) => {
    // Toggle the liked state for the clicked post
    const updatedLikedPosts = [...likedPosts];
    const postIndex = likedPosts.indexOf(postId);
    if (postIndex === -1) {
      updatedLikedPosts.push(postId);
    } else {
      updatedLikedPosts.splice(postIndex, 1);
    }
    setLikedPosts(updatedLikedPosts);
  };

  const isPostLiked = (postId) => {
    return likedPosts.includes(postId);
  };

  const handleComment = (postId) => {
    // Implement comment functionality here
  };

  const handleShare = (postId) => {
    // Implement share functionality here
  };

  const handleSave = (postId) => {
    // Implement save functionality here
  };

  const handleExpandPost = (postId) => {
    // Toggle the expanded state for the clicked post
    const updatedExpandedPosts = [...expandedPosts];
    const postIndex = expandedPosts.indexOf(postId);
    if (postIndex === -1) {
      updatedExpandedPosts.push(postId);
    } else {
      updatedExpandedPosts.splice(postIndex, 1);
    }
    setExpandedPosts(updatedExpandedPosts);
  };

  const isPostExpanded = (postId) => {
    return expandedPosts.includes(postId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Stories />
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => handleLike(post.id)}
              style={styles.iconButton}
            >
              <Icon
                name="heart"
                size={24}
                color={isPostLiked(post.id) ? "red" : "white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleComment(post.id)}
              style={styles.iconButton}
            >
              <Icon name="comment" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleShare(post.id)}
              style={styles.iconButton}
            >
              <Icon name="share" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSave(post.id)}
              style={[styles.iconButton, styles.saveButton]}
            >
              <Icon name="bookmark" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.likes}>{post.likes} likes</Text>
          <Text style={styles.postText}>
            <Text style={styles.boldText}>{`User ${post.id}`}</Text>
            {` ${
              isPostExpanded(post.id)
                ? post.post
                : `${post.post.substring(0, 150)}${
                    post.post.length > 150 ? "..." : ""
                  }`
            }`}
            {post.post.length > 150 && (
              <TouchableOpacity onPress={() => handleExpandPost(post.id)}>
                <Text style={styles.expandButton}>
                  {isPostExpanded(post.id) ? "View less" : "more"}
                </Text>
              </TouchableOpacity>
            )}
          </Text>
          <CommentInput />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  postContainer: {
    width,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  postImage: {
    width,
    height: 600,
    resizeMode: "cover",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  iconButton: {
    marginRight: 15,
    marginTop: 10,
  },
  saveButton: {
    position: "absolute",
    right: 10,
  },
  postText: {
    color: "white",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "white",
  },
  likes: {
    color: "white",
    marginBottom: 5,
  },
  expandButton: {
    color: "grey",
    top: 5,
    marginLeft: 5,
  },
});

export default Posts;
