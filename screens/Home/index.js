import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/encrption.gif")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerTouch}>
        <View style={styles.ContainerInTouch}>
          <TouchableOpacity
            style={styles.Touch}
            onPress={() => {
              navigation.navigate("Affine");
            }}
          >
            <Text style={styles.text}>Affine</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerTwoTouch}>
          <TouchableOpacity
            style={styles.Touch}
            onPress={() => {
              navigation.navigate("CaesarCipher");
            }}
          >
            <Text style={styles.text}>Caesar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Touch}
            onPress={() => {
              navigation.navigate("VigenereCipher");
            }}
          >
            <Text style={styles.text}>Vigenere</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
