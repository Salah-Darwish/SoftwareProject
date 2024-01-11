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

export default function CaesarCipher() {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);

  // Function to encrypt a message using the Caesar cipher
  function encryptCaesar(message, shift) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (char.match(/[a-zA-Z]/)) {
        let code = message.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }

      result += char;
    }

    return result;
  }
  // Function to decrypt a message encrypted with the Caesar cipher
  function decryptCaesar(message, shift) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (char.match(/[a-zA-Z]/)) {
        let code = message.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 - shift) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 - shift) % 26) + 97);
        }
      }

      result += char;
    }

    return result;
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
                const decryptedMessage = decryptCaesar(text, key);
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
                const encryptedMessage = encryptCaesar(text, parseInt(key, 10));
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
