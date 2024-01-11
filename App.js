import { View, Text, Image, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import One from "./screens/One";
import Home from "./screens/Home";
import CaesarCipher from "./screens/Cipher";
import VigenereCipher from "./screens/Vigenere";
import Affine from "./screens/Affine";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="One"
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CaesarCipher" component={CaesarCipher} />
        <Stack.Screen name="VigenereCipher" component={VigenereCipher} />
        <Stack.Screen name="Affine" component={Affine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
