import { View, Text } from "react-native";
import React from "react";
import Typography from "./Typography";

export default Badge = (props) => {
  return (
    <View>
      {props.children}
      <View
        style={[
          {
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          },
          {
            position: "absolute",
            right: -5,
            top: -5,
          },
        ]}
      >
        <Typography size={10} color="white"></Typography>
      </View>
    </View>
  );
};
