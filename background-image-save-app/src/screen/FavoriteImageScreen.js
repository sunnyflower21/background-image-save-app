import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/header/Header";
import PhotoListItem from "../components/PhotoListItem";

export default FavoriteImageScreen = () => {
  const imageList = useSelector((state) => state.favorite.favoriteList);

  console.log("imageList", imageList);
  return (
    <View style={style.contaier}>
      <Header>
        <Header.Title title="FAVORITE"></Header.Title>
      </Header>
      <FlatList
        style={{ flex: 2 }}
        data={imageList}
        renderItem={({ item }) => {
          return <PhotoListItem url={item}></PhotoListItem>;
        }}
      ></FlatList>
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
