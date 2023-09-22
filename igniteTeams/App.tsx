import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "@theme/index";

import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NewGroup } from "@screens/NewGroup";
import { Player } from "@screens/Players";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
