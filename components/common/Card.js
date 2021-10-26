import React from "react";
import {  Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
export default function Card({ img, title, description, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.1,
        marginVertical: 15,
        marginHorizontal: 10,
        minHeight: 300,
        elevation: 4,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 1,
        borderColor: "#eee",
      }}
    >
      <Image
        style={{
          height: 250,
        }}
        source={{
          uri: img,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          paddingVertical: 10,
          fontWeight: "bold",
          paddingHorizontal: 5,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontSize: 18,
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
}
