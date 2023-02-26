import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Typography from "../components/Typography";

export default FavoriteImageScreen = () => {
  return (
    <View>
      <Typography size={20}>FavoriteImageScreen</Typography>
    </View>
  );
};

const style = StyleSheet.create({
  contaier: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
