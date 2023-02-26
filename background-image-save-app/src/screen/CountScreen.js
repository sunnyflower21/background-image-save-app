import { View } from "react-native";
import React, { useCallback, useContext } from "react";
import { Header } from "../components/header/Header";
import Button from "../components/Button";
import Icons from "../components/Icons";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteCount } from "../actions/counter";
import { CountContext } from "../../App";

const CounterTitle = () => {
  const [count] = useContext(CountContext);
  return <Typography>{`${count}개`}</Typography>;
};

export default CountScreen = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count.count);

  const [_, setCount] = useContext(CountContext);

  const onPressPlus = useCallback(() => {
    setCount((value) => value + 1);
    // dispatch(addCount());
  }, []);
  const onPressMinus = useCallback(() => {
    setCount((value) => value - 1);

    // dispatch(deleteCount());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title Title="COUNTER"></Header.Title>
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            paddingHorizontal={4}
            paddingVertica={4}
            onPress={onPressMinus}
          >
            <Icons size={20} color="red" name="remove"></Icons>
          </Button>

          <Spacer horizontal space={20}></Spacer>
          <CounterTitle></CounterTitle>
          <Spacer horizontal space={20}></Spacer>
          <Button
            paddingHorizontal={4}
            paddingVertica={4}
            onPress={onPressPlus}
          >
            <Icons name="add" size={20} color="blue"></Icons>
          </Button>
        </View>
      </View>
    </View>
  );
};
