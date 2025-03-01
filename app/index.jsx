import React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import fridge from '@/assets/images/fridgeimg.png';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={fridge} style={styles.imgContainer} resizeMode="cover" blurRadius={5}>
        <View style={styles.overlay}>
          <Text style={styles.title}>FridgeViscum</Text>
          <Text style={styles.subtitle}>Your Smart Kitchen Companion 🍽️✨</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Discover recipes from what you have in your fridge. Track calories & eat smarter! 🌱</Text>
          </View>
          
          <Link href="/main" asChild>
            <Pressable activeOpacity={0.8}>
              <LinearGradient
                colors={['#FF7E5F', '#FD3A69']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </LinearGradient>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 2,
  },
  subtitle: {
    color: "#EEE",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: "90%",
    alignItems: "center",
  },
  cardText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#FD3A69",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});