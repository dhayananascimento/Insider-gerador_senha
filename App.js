import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Clipboard from "expo-clipboard";
import Slider from "@react-native-community/slider";

let charset = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(10);

  function generatePassword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert("Seha copiada com sucesso!");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de senhas</Text>
      <Text style={styles.subtitle}>{size} Caracters</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="pink"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {password !== "" && (
        <View style={styles.area}>
          <Text onPress={copyPass} style={styles.password}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3ff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "pink",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
  },
  area: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 7,
  },

  button: {
    backgroundColor: "#ffa200",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 25,
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  password: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
