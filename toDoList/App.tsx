import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { Task } from "./src/components/task";
import { Home } from "./src/screens/home";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#0D0D0D" }}>
      <View style={styles.container}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor='trasparent'
          translucent
        ></StatusBar>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "auto",
  },
});
