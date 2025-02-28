import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FridgeViscum</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>
        This is some smaller text below the buttons.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
  },
});
