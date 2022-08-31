import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Sum() {
  const [input, setInput] = useState("");
  const [inputarr, setInputArr] = useState("");

  const displayvalue = () => {
    // console.log(input)
    setInputArr(input);
  };

  return (
    <View style={{ margin: 100 }}>
      <TextInput
        onChangeText={(value) => setInput(value)}
        placeholder="type here"
      />

      <TouchableOpacity onPress={displayvalue}>
        <Text>calculate</Text>
      </TouchableOpacity>
      <Text>{eval(inputarr)}</Text>
    </View>
  );
}
