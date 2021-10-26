import React from "react";
import { TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
export default function Tab({ name, color, onPress }) {
  return (
    <TouchableOpacity
      testID={name}
      onPress={() => onPress(name)}
      style={{
        backgroundColor: "#1C0C5B",
        marginVertical: 5,
        marginHorizontal: 5,
        borderColor: "#eee",
        borderRadius: 5,
        borderWidth: 1,
        width: 75,
        height: 75,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fontisto name={name} size={32} color={color} />
    </TouchableOpacity>
  );
}
