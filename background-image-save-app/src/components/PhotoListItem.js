import { View, useWindowDimensions, Animated } from "react-native";
import React, { useCallback, useState } from "react";
import Button from "./Button";
import { RemoteImage } from "./RemoteImage";
import { useNavigation } from "@react-navigation/native";

export default PhotoListItem = (props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [animValue] = useState(new Animated.Value(0));

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: props.url });
  }, []);
  const onPressIn = useCallback(() => {
    console.log("onPressIn");
    Animated.timing(animValue, {
      duration: 200,
      toValue: 1,
    }).start();
  }, []);
  const onPressOut = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 0,
    }).start();
  }, []);

  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95],
  });

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <Button
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPressItem}
      >
        <Animated.View style={{ transform: [{ scale: scale }] }}>
          <RemoteImage
            style={{ transform: [{ scale: 1 }] }}
            url={props.url}
            width={width - 40}
            height={width * 1.2}
          ></RemoteImage>
        </Animated.View>
      </Button>
    </View>
  );
};
