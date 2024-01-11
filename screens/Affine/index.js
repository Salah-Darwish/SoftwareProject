import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import styles from "./styles";

export default function Affine() {
  const [text, setText] = useState("");
  const [key1, setKey1] = useState(0);
  const [key2, setKey2] = useState(0);
  function modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m == 1) {
        return x;
      }
    }
    return 1;
  }

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  function isCoprime(a, b) {
    return gcd(a, b) === 1;
  }
  function affineEncrypt(plainText, keyA, keyB) {
    let cipherText = "";
    for (let i = 0; i < plainText.length; i++) {
      let charCode = plainText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        cipherText += String.fromCharCode(
          ((((keyA * (charCode - 65) + keyB) % 26) + 26) % 26) + 65
        );
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        cipherText += String.fromCharCode(
          ((((keyA * (charCode - 97) + keyB) % 26) + 26) % 26) + 97
        );
      } else {
        cipherText += plainText[i]; // Leave non-alphabetic characters unchanged
      }
    }
    return cipherText;
  }
  function affineDecrypt(cipherText, keyA, keyB) {
    let modInverseA = modInverse(keyA, 26);
    let plainText = "";
    for (let i = 0; i < cipherText.length; i++) {
      let charCode = cipherText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        plainText += String.fromCharCode(
          ((modInverseA * (charCode - 65 - keyB + 26)) % 26) + 65
        );
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        plainText += String.fromCharCode(
          ((modInverseA * (charCode - 97 - keyB + 26)) % 26) + 97
        );
      } else {
        plainText += cipherText[i]; // Leave non-alphabetic characters unchanged
      }
    }
    return plainText;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.containerTwoTex}>
          <Text style={[styles.text, { color: "#000" }]}>
            Enter Text For Encryption and Decryption
          </Text>
          <TextInput
            onChangeText={(value) => setText(value)}
            multiline={true}
            keyboardType="numbers-and-punctuation"
            style={[styles.EncrAndDectext, { height: 100 }]}
          />
          <Text style={[styles.text, { color: "#000", marginTop: 10 }]}>
            Enter Secret Key1 For Encryption and Decryption
          </Text>
          <TextInput
            onChangeText={(value) => setKey1(Number(value))}
            keyboardType="numeric"
            style={[styles.SecretKey, { height: 60, marginBottom: 10 }]}
          />
          <Text style={[styles.text, { color: "#000", marginTop: 10 }]}>
            Enter Secret Key2 For Encryption and Decryption
          </Text>
          <TextInput
            onChangeText={(value) => setKey2(Number(value))}
            keyboardType="numeric"
            style={[styles.SecretKey, { height: 60, marginBottom: 10 }]}
          />
        </View>
        <View style={styles.containerDecAndEnc}>
          <TouchableOpacity
            style={styles.Touch}
            onPress={() => {
              const GCD = isCoprime(key1, key2);
              if (GCD == 1 && text != "" && key1 != "" && key2 != "") {
                const decryptedMessage = affineDecrypt(text, key1, key2);
                Alert.alert("Decrypted Message", decryptedMessage);
              } else {
                Alert.alert("Error please enter the value in text and key  ");
              }
            }}
          >
            <Text style={styles.text}>Decryption</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.Touch, { backgroundColor: "#f00" }]}
            onPress={() => {
              const GCD = isCoprime(key1, key2);
              if (GCD == 1 && text != "" && key1 != "" && key2 != "") {
                let ciphertext = affineEncrypt(text, key1, key2);
                Alert.alert("Encrypted Message", ciphertext);
              } else {
                Alert.alert("Error please enter the value in text and key  ");
              }
            }}
          >
            <Text style={styles.text}>Encryption</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
          }}
        ></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
