import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, ActivityIndicator, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { getAuth } from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/auth";
import auth from '@react-native-firebase/auth'

export default function signIn() {
    const [Email , setEmail ] = useState('');
    const [Password , setPassword] = useState('');
    

    const SignUp = () => {
        auth().createUserWithEmailAndPassword("Email","Password").then(()=>{
            console.log('User created')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <Text>This is the sign Up page</Text>
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#CCC"
            value={Email}
            onChangeText={setEmail}
            keyboardType="email-address">
            </TextInput>

            <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#CCC"
            value={Password}
            onChangeText={setPassword}
            secureTextEntry>
            </TextInput>

            
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#2C2C2C",
        alignItems: "center",
        justifyContent: "center"
    },
    input:{
        width:"90%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 12,
        borderRadius: 10,
        color: "#FFF",
        fontSize: 16,
        marginBottom: 11,

    }
})
