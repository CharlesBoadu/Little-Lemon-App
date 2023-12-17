import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

export default function WelcomeScreen() {
    const [firstName, onChangeFirstName] = React.useState(null);
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
          resizeMode="contain"
          source={require("../assets/little_lemon_logo.png")}
          style={styles.image}
        />
        <Text style={styles.header}>Little Lemon</Text>
      </View>
      <View>
        <Text style={styles.description}>
          Little lemon is a charming biastro that serves simple food and classic
          cocktails in a lively but casual environment. We would love to hear
          your experience with us!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  image: {
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    paddingTop: 30,
  },
  textInput: {
    height: 40,
    marginTop: 50,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#EDEFEE"
  }
});
