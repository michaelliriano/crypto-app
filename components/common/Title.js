import React from "react";
import { View, Text } from "react-native";

export default function Title({ title }) {
  return (
    <View
      style={{
        padding: 5,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: '#333'
        }}
      >
        {title}
      </Text>
    </View>
  );
}
