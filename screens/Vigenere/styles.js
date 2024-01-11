import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerTwoTex: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.7,
    marginTop: 150,
  },
  EncrAndDectext: {
    height: "35%",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    color: "#000",
    marginBottom: 25,
  },
  SecretKey: {
    height: "25%",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    color: "#000",
  },
  containerDecAndEnc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Touch: {
    height: 60,
    width: 140,
    backgroundColor: "#0f0",
    borderWidth: 3,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    elevation: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default styles;
