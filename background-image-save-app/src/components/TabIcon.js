import { View, Text } from "react-native";
import React from "react";
import Icons from "./Icons";
import Badge from "./Badge";

export default TabIcon = (props) => {
  if (props.visibleBadge) {
    return (
      <Badge fontSize={10}>
        <Icons name={props.name} color={props.color} size={20}></Icons>
      </Badge>
    );
  }

  return <Icons name={props.name} color={props.color} size={20}></Icons>;
};
