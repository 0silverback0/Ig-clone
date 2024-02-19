import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Instagram Clone</Text>
      <Icon name="heart" size={30} color="white" style={styles.icon} />
      <Icon name="envelope" size={30} color="white" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: 420,
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingRight: 40,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 40,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
});

export default Header;
