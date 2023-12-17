import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <SafeAreaView style={menuStyles.container}>
      <Text
        style={{
          paddingTop: 20,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </SafeAreaView>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#ec9973",
  },
});
