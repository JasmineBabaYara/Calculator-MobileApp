import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Sum() {
  //const [input, setInput] = useState("");
  // const [inputarr, setInputArr] = useState("");

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (buttonValue) => {
      setFirstNumber(firstNumber + buttonValue);
    //console.log(firstNumber)
  }

  const handleOperation = (buttonValue) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
    // console.log(secondNumber)
  };

  // const getResult = () => {
  //   setResult(eval((secondNumber)+(firstNumber)));
  //   console.log(secondNumber)
  //           console.log(firstNumber)
  //   console.log(result)
  // }


  const getResult = () => {
    switch (operation) {
      case "+":
          setResult(parseInt(secondNumber)+parseInt(firstNumber));
          // setResult(eval(secondNumber+firstNumber));
          // console.log(secondNumber)
          // console.log(firstNumber)
          break;
      }
  };

  return (
    <View style={{ margin: 100 }}>
      {/* <TextInput
        onChangeText={(value) => setInput(value)}
        placeholder="type here"
      /> */}
      <TouchableOpacity onPress={()=> handleNumber("1")}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> handleNumber("2")}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> handleOperation("+")}>
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={getResult}>
        <Text>calculate</Text>
      </TouchableOpacity>

      <Text>{result}</Text>
    </View>
  );
}
