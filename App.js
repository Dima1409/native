import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>React Native</Text>
      <Text style={styles.orange}>HomeWork 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9f5d4",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    color: "#000",
    fontWeight: 900,
    fontSize: 44,
  },
  orange: {
    marginTop: 20,
    textDecorationLine: "underline",
    color: "#d96818",
    textTransform: "uppercase",
    fontSize: 28,
  },
});
