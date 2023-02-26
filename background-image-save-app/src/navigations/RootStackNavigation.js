import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageDetailScreen from "../screen/ImageDetailScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import CountScreen from "../screen/CountScreen";

const Stack = createNativeStackNavigator();

export default RootStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
      ></Stack.Screen>
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
