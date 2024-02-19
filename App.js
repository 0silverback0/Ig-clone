import React from "react";
import { StatusBar } from "react-native";
import Posts from "./components/Posts";
import Add from "./components/Add";
import FullScreenVideo from "./components/FullScreenVideo";
import SearchComponent from "./components/SearchComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        screenOptions={{ tabBarStyle: { backgroundColor: "black" } }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="white" />
            ),
            tabBarLabelStyle: { display: "none" },
          }}
          name="Home"
          component={Posts}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={24} color="white" />
            ),
            tabBarLabelStyle: { display: "none" },
          }}
          name="Search"
          component={SearchComponent}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="add" size={24} color="white" />
            ),
            tabBarLabelStyle: { display: "none" },
          }}
          name="Add"
          component={Add}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="video" size={24} color="white" />
            ),
            tabBarLabelStyle: { display: "none" },
          }}
          name="video"
          component={FullScreenVideo}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" size={24} color="white" />
            ),
            tabBarLabelStyle: { display: "none" },
          }}
          name="profile"
          component={""}
        />
      </Tab.Navigator>

      {/* ÷<Buttons /> */}
    </NavigationContainer>
  );
}
