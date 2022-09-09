import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Calculate() {
  const [inputarr, setInputArr] = useState([]);
  const [result, setResult] = useState("");

  const handleCharacter = (buttonValue) => {
    setInputArr((inputarr) => [...inputarr, buttonValue]);
  };

  const getResult = () => {
    const combinedInput = inputarr.join("");
    setResult(eval(combinedInput));
  };

  const clear = () => {
    setInputArr([]);
    setResult("");
  };

  return (
    <View style={{ margin: 100 }}>

      {/* display container */}
      <View>
      <Text>{inputarr}</Text>
      <Text>{result}</Text>
      </View>

      {/* first row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={clear}>
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("+/-")}>
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("％")}>
          <Text>％</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("/")}>
          <Text>÷</Text>
        </TouchableOpacity>
      </View>

      {/* second row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleCharacter("7")}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("8")}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("9")}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("*")}>
          <Text>×</Text>
        </TouchableOpacity>
      </View>

      {/* third row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleCharacter("4")}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("5")}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("6")}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("-")}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>

      {/* fourth row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleCharacter("1")}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("2")}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("3")}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("+")}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      {/* fifth row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setInputArr(inputarr.slice(0, -1))}>
          <Text>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter("0")}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCharacter(".")}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getResult()}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}
