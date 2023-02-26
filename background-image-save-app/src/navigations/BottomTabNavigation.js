import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteImageScreen from "../screen/FavoriteImageScreen";
import ImageListScreen from "../screen/ImageListScreen";
import TabIcon from "../components/TabIcon";
import CountScreen from "../screen/CountScreen";

const Tabs = createBottomTabNavigator();

export default BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const getIconName = () => {
            if (route.name === "ImageList") {
              return "home";
            }
            if (route.name === "FavoriteImageList") {
              return "star";
            }
          };

          const iconName = getIconName();
          return <TabIcon name={iconName} color={color}></TabIcon>;
        },
      })}
    >
      <Tabs.Screen name="CountScreen" component={CountScreen}></Tabs.Screen>
      <Tabs.Screen name="ImageList" component={ImageListScreen}></Tabs.Screen>
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};
