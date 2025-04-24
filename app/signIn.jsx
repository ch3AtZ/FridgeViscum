import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function signIn() {
    const [Email , setEmail ] = useState('');
    const [Password , setPassword] = useState('');
    const [loading , setLoading] = useState(false);

    const handleSignIn = () => {
        // Handle login logic here
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // mock loading
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#CCC"
                value={Email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#CCC"
                value={Password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Pressable onPress={handleSignIn} style={styles.button}>
                <LinearGradient
                    colors={["#4c669f", "#3b5998", "#192f6a"]}
                    style={styles.gradient}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Sign In</Text>
                    )}
                </LinearGradient>
            </Pressable>
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
        width: "90%",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 10,
    },
    gradient: {
        padding: 12,
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600",
    },
});
