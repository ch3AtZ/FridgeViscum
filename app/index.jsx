import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, ActivityIndicator, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { getAuth } from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/auth";
import { FirebaseError } from "@firebase/app";

export default function App() {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  /*
  
  const auth = getAuth(); // Get Firebase auth instance

  const signUp = async () => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Check your email!');
    } catch (error) {
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Login Successful');
    } catch (error) {
      alert('Login Unsuccessful: ');
    } finally {
      setLoading(false);
    }
  };
 */
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/fridgeimg.png')} style={styles.imgContainer} resizeMode="cover" blurRadius={5}>
        <View style={styles.overlay}>
          <Text style={styles.title}>FridgeViscum</Text>
          <Text style={styles.subtitle}>Your Smart Kitchen Companion 🍽️✨</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Discover recipes from what you have in your fridge. Track calories & eat smarter! 🌱</Text>
          </View>

          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#CCC"
            value={email} 
            onChangeText={setEmail} 
            keyboardType="email-address"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor="#CCC"
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry
          />
          
          <Link href="/signUp" asChild> 
          <Pressable disabled={loading}>
            <LinearGradient
              colors={['#FF7E5F', '#FD3A69']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </LinearGradient>
          </Pressable>
          </Link>


          <Link href="/signIn" asChild>   
          <Pressable  disabled={loading}>
            <LinearGradient
              colors={['#57C84D', '#36A420']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.button, { marginTop: 10 }]}
            >
            <Text style={styles.buttonText}>Sign In</Text>
            </LinearGradient>
          </Pressable>
          </Link>

          <Link href="/main" asChild>
            <Pressable style={styles.linkButton}>
              <Text style={styles.linkText}>Get Started</Text>
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
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
  },
  cardText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 12,
    borderRadius: 10,
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
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
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    color: "#FF7E5F",
    fontSize: 16,
    textDecorationLine: "underline",
  }
});
