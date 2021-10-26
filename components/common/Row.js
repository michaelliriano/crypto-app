import React from "react";
import { View, Text } from "react-native";

export default function Row(props) {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginVertical: 10,
      }}
    >
      {props.children}
    </View>
  );
}
