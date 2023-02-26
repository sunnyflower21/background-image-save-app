import { View, Text } from "react-native";
import React from "react";
import Icons from "../Icons";
import Button from "../Button";

export default HeaderIcon = (props) => {
  return (
    <Button onPress={props.onPress}>
      <Icons name={props.iconName} size={28} color="black" />
    </Button>
  );
};
