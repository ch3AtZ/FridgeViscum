import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Pressable } from "react-native";

export default function main(){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello there this is the main screen of the app!
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2C2C2C",
    },
    text: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
    },
  });

