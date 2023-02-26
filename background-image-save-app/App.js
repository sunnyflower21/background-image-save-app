import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import BottomTabNavigation from "./src/navigations/BottomTabNavigation";
import RootStackNavigation from "./src/navigations/RootStackNavigation";
import CountScreen from "./src/screen/CountScreen";
import store from "./src/store/store";

export const CountContext = createContext();

export default function App() {
  const CounterState = useState(0);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <CountContext.Provider value={CounterState}>
          <Provider store={store}>
            <RootStackNavigation></RootStackNavigation>
          </Provider>
        </CountContext.Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
