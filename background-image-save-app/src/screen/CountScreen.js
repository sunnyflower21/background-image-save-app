import { View } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { Header } from "../components/header/Header";
import Button from "../components/Button";
import Icons from "../components/Icons";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteCount } from "../actions/counter";
// import { CountContext } from "../../App";
import { CounterState } from "../states/counter";
import { useRecoilValue, useRecoilState } from "recoil";
import { counterMultiplier } from "../selectors/CounterMultiplier";

const CounterTitle = (props) => {
  // const [count] = useContext(CountContext);
  const count = useRecoilValue(CounterState);

  return <Typography>{`${count}개`}</Typography>;
};

const CountMultiplier = () => {
  const result = useRecoilValue(counterMultiplier);

  return <Typography>{` * 5${result}개`}</Typography>;
};

export default CountScreen = () => {
  // const dispatch = useDispatch();
  //redux
  // const value = useSelector((state) => state.count.count);

  //context api
  // const [_, setCount] = useContext(CountContext);

  //recoil
  const [value, setValue] = useState(0);
  const [count, setCount] = useRecoilState(CounterState);

  const onPressPlus = useCallback(() => {
    // setValue((value) => value + 1);
    setCount((value) => value + 1);
    // dispatch(addCount());
  }, []);
  const onPressMinus = useCallback(() => {
    // setValue((value) => value - 1);
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
          <CountMultiplier></CountMultiplier>
        </View>
      </View>
    </View>
  );
};
