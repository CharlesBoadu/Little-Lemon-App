import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";

export default function ImageScreen() {
  const { colorScheme } = useColorScheme();

  return (
    <View style={[styles.container, 
        colorScheme === "dark" ? { backgroundColor: "black" } : { backgroundColor: "white" } 
    ]}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={require("../assets/little_lemon_logo.png")}
          style={styles.image}
        />
        <Text style={[styles.headerText,
        colorScheme === "dark" ? { color: "white" } : { color: "black" } 
        
        ]}>Little Lemon</Text>
      </View>
      <View>
        <Text style={[styles.description,
        colorScheme === "dark" ? { color: "white" } : { color: "black" } 
        
        ]}>
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
  },
  image: {
    width: 100,
    height: 100,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    paddingTop: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    paddingTop: 30,
  },
});
