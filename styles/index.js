import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
  },
  wrapper: {
    marginBottom: 16,
    width: "80%",
  },
  label: {
    marginBottom: 4,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    height: 48,
    padding: 8,
  },
  link: {
    textDecorationColor: "#000",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#2e1065",
    borderRadius: 5,
    borderWidth: 0,
    height: 48,
    justifyContent: "center",
    padding: 8,
    paddingLeft: 16,
  },
  buttonText: {
    color: "#fff",
  },
});