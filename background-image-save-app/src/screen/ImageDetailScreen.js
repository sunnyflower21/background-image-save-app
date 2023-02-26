import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import Typography from "../components/Typography";
import { Header } from "../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";
import Button from "../components/Button";
import Icons from "../components/Icons";
import * as FileSystem from "expo-file-system";
import { createDownloadResumable } from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export default ImageDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const [download, setDownload] = useState(false);

  const onPressDownload = useCallback(async () => {
    setDownload(true);
    const downloadResumable = createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log(uri);
      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      console.log("permissionResult", permissionResult);
      if (permissionResult.status === "denied") {
        //못쓰는 상태
        setDownload(false);

        return;
      }
      if (permissionResult.status === "undetermined") {
        const requestResult = await MediaLibrary.requestPermissionsAsync();
        console.log("requestResult", requestResult);

        if (requestResult.status === "denied") {
          setDownload(false);

          return;
        }
      }
      const asset = await MediaLibrary.createAssetAsync(uri);
      const album = MediaLibrary.createAlbumAsync("test", asset, false);

      console.log(album);
    } catch (error) {}
    setDownload(false);
  }, []);
  return (
    <View style={style.contaier}>
      <Header>
        <Header.Group>
          <Header.Icon
            iconName={"arrow-back"}
            onPress={onPressBack}
          ></Header.Icon>
          <Header.Title title={"image detail"}></Header.Title>
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <RemoteImage
          url={route.params.url}
          width={width}
          height={width * 1.5}
        ></RemoteImage>
      </View>
      <Button onPress={onPressDownload}>
        <View style={{ padding: 24, backgroundColor: "black" }}>
          {download === true ? (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator></ActivityIndicator>
            </View>
          ) : (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"white"}>DOWNLOAD</Typography>
              <Icons name="download" size={24} color="white"></Icons>
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});
