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

export default function VigenereCipher() {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);

  function vigenereEncrypt(plainText, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    plainText = plainText.toLowerCase();
    key = key.toLowerCase();
    let encryptedText = "";
    let keyIndex = 0;
    for (let i = 0; i < plainText.length; i++) {
      const currentChar = plainText[i];
      if (alphabet.includes(currentChar)) {
        const plainTextIndex = alphabet.indexOf(currentChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);
        const encryptedIndex = (plainTextIndex + keyIndexInAlphabet) % 26;
        encryptedText += alphabet[encryptedIndex];
        keyIndex++;
      } else {
        encryptedText += currentChar;
      }
    }
    return encryptedText;
  }
  function vigenereDecrypt(cipherText, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    cipherText = cipherText.toLowerCase();
    key = key.toLowerCase();
    let decryptedText = "";
    let keyIndex = 0;
    for (let i = 0; i < cipherText.length; i++) {
      const currentChar = cipherText[i];
      if (alphabet.includes(currentChar)) {
        const cipherTextIndex = alphabet.indexOf(currentChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);
        const decryptedIndex = (cipherTextIndex - keyIndexInAlphabet + 26) % 26;
        decryptedText += alphabet[decryptedIndex];
        keyIndex++;
      } else {
        decryptedText += currentChar;
      }
    }
    return decryptedText;
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
            Enter Secret Key For Encryption and Decryption
          </Text>
          <TextInput
            onChangeText={(value) => setKey(value)}
            keyboardType="numbers-and-punctuation"
            style={[styles.SecretKey, { height: 60, marginBottom: 10 }]}
          />
        </View>
        <View style={styles.containerDecAndEnc}>
          <TouchableOpacity
            style={styles.Touch}
            onPress={() => {
              if (key != "" && text != "") {
                const decryptedMessage = vigenereDecrypt(text, key);
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
              if (key != "" && text != "") {
                const encryptedMessage = vigenereEncrypt(text, key);
                Alert.alert("Encrypted Message", encryptedMessage);
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
