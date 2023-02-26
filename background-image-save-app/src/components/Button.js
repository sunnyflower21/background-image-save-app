import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

export default Button = (props) => {
  return (
    <TouchableOpacity
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      onPress={props.onPress}
      hitSlop={props.hitSlop ?? { left: 0, top: 0, right: 0, bottom: 0 }}
    >
      {props.children}
    </TouchableOpacity>
  );
};
