import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    borderRadius: 20,
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  containerTouch: {
    backgroundColor: "#ffe1a5",
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  ContainerInTouch: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 150,
  },
  Touch: {
    width: 160,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#cde0e0",
    borderWidth: 4,
    borderColor: "#12395f",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTwoTouch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#bf9d3e",
  },
});
export default styles;
