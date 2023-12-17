import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={menuStyles.container}>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ec9973",
    marginBottom: 10,
  },
});
