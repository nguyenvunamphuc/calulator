import { StyleSheet } from "react-native";
export default StyleSheet.create({
  margin: { margin: 7 },
  section: { flex: 1 },
  row: { flexDirection: "row" },
  displayView: { justifyContent: "flex-end" },
  displayText: { textAlign: "right", fontSize: 60, color: "black" },
  numberView: { flex: 0.75 },
  operatorView: { flex: 0.25 },
  button: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonText: { fontSize: 30, color: "black" }
});
