import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function TopBar({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        backgroundColor: "#1C0C5B",
        paddingHorizontal: 2,
        display: "flex",
        paddingTop: 35,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          padding: 10,
          fontSize: 30,
          color: "#fff",
          fontWeight: "bold",
          paddingBottom: 20,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
