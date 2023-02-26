import { atom } from "recoil";

export const CounterState = atom({
  key: "MAIN/COUNTER",
  default: 0,
});
