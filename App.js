import React from "react";
import { View } from "react-native";
import TopBar from "./components/common/TopBar";
import { Alert } from "react-native";
import Home from "./screens/Home";

export default function App() {
  const handleNavPress = () => {
    Alert.alert("Navbar touched");
  };
  return (
    <View>
      <TopBar title="Crypto" onPress={handleNavPress} />
      <Home />
    </View>
  );
}

