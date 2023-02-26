import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue, useRecoilState, selector } from "recoil";
import { CounterState } from "../states/counter";

export const counterMultiplier = selector({
  key: "MAIN/CounterMultiplier",
  get: ({ get }) => {
    const result = get(CounterState);

    return result * 5;
  },
});
