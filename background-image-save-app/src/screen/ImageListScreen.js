import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Header } from "../components/header/Header";
import Typography from "../components/Typography";
import { IMAGE_LIST } from "../constants";
import PhotoListItem from "../components/PhotoListItem";

export default ImageListScreen = () => {
  return (
    <View style={style.contaier}>
      <Header>
        <Header.Group>
          <Header.Title title="Image List"></Header.Title>
        </Header.Group>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={IMAGE_LIST}
        renderItem={({ item }) => {
          return <PhotoListItem url={item}></PhotoListItem>;
        }}
      ></FlatList>

      <Typography>123</Typography>
    </View>
  );
};

const style = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});
