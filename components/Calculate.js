import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Calculate() {
  const [inputarr, setInputArr] = useState([]);


  const handleOperation = (buttonValue) => {
  //  push buttonValue to inputarr
  // eg inputarr = []
  // eg when 1 is clicked, push it to inputarr ["1"]
  // eg when + is clicked, push it to inputarr ["1", "+"]
  // eg when 2 is clicked, push it to inputarr ["1", "+", "2"]
  // eg when + is clicked, push it to inputarr ["1", "+", "2", "+"]
  // eg when 3 is clicked, push it to inputarr ["1", "+", "2", "+", "3"]
  };

  const getResult = () => {
    // use inputarr.join("") to get "1+2+3" from ["1", "+", "2", "+", "3"]

    // call eval on the string "1+2+3" to get the answer "6"
    // now, render the answer
  };

  return (
    <View style={{ margin: 100 }}>
      {/* <TextInput
        onChangeText={(value) => setInput(value)}
        placeholder="type here"
      /> */}
      <TouchableOpacity onPress={()=> handleCharacter("1")}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> handleCharacter("2")}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> handleCharacter("+")}>
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={getResult}>
        <Text>calculate</Text>
      </TouchableOpacity>

      <Text>{result}</Text>
    </View>
  );
}
