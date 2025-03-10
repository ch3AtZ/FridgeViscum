import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, ActivityIndicator, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { getAuth } from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/auth";
import { FirebaseError } from "@firebase/app";

