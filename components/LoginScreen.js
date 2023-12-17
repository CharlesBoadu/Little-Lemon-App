import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [showLoggedIn, setShowLoggedIn] = React.useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {showLoggedIn ? (
          <Text style={styles.regularText}>You are logged in!</Text>
        ) : (
          <>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={onChangeEmail}
              keyboardType={"email-address"}
              style={styles.textInput}
            />
            <TextInput
              value={password}
              placeholder="Password"
              onChangeText={onChangePassword}
              secureTextEntry={true}
              style={styles.textInput}
            />
            <Pressable onPress={() => navigation.navigate("Welcome")}>
              <Text style={styles.loginButton}>Login</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    margin: 15,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#EDEFEE",
  },
  loginButton: {
    backgroundColor: "#EE9972",
    color: "black",
    textAlign: "center",
    fontSize: 20,
    width: "auto",
    padding: 10,
    marginTop: 20,
    marginRight: 100,
    marginLeft: 100,
    borderRadius: 50,
  },
});
