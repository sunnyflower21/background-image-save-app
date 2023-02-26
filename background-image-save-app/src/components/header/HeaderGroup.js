import { View, Text } from "react-native";
import React from "react";

export default HeaderGroup = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {props.children}
    </View>
  );
};
