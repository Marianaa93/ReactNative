import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  taskContainer: {
    width: "100%",
    padding: 30,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 15,
    marginBottom: 16,
    alignItems: "center",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  checkedText: {
    textDecorationLine: "line-through",
    color: "#fff",
    paddingLeft: 16,
    fontSize: 16,
    flex: 1,
  },
  uncheckedText: {
    color: "#fff",
    paddingLeft: 16,
    fontSize: 16,
    flex: 1,
  },
});
