import { View, Text, Image, ActivityIndicator } from "react-native";
import { useEffect } from "react";

export default function One({ navigation }) {
  useEffect(() => {
    let x = 0;
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  });
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Image
        source={require("../assets/img/2.gif")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: "40%",
        }}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        Encryption Vs decryption
      </Text>
      <ActivityIndicator size={"large"} color={"#000"} />
    </View>
  );
}
