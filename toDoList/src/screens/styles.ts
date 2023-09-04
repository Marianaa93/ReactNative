import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { backgroundColor: "#0D0D0D", paddingRight: 15, paddingLeft: 15 },
  logo: {
    marginTop: 50,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    marginRight: 12,
    paddingLeft: 16,
    color: "#fff",
  },
  touch: {
    width: 56,
    height: 56,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  disabled: {
    width: 56,
    height: 56,
    backgroundColor: "#5F6F7F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },

  taskStatistics: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },

  totalTaskContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  tasksTotal: {
    color: "#ffff",
    fontWeight: "bold",
  },
});
