import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function sum() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  {
    /* number press function */
  }
  const handleNumberPress = (buttonValue: string) => {
    // if (firstNumber.length < 10) {
    // }
    setFirstNumber(firstNumber + buttonValue);
    // setSecondNumber(firstNumber + buttonValue);
  };

  {
    /* operation press function */
  }
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  {
    /* clear function */
  }
  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  {
    /* get result function */
  }
  const getResult = (operation) => {
    setResult(parseInt(secondNumber) + operation + parseInt(firstNumber));
  };

  // const firstNumberDisplay = () => {
  //   if (result !== null) {
  //       return <Text >{result?.toString()}</Text>;
  //   }
  //   if (firstNumber && firstNumber.length < 6) {
  //     return <Text style={styles.screenFirstNumber}>{firstNumber}</Text>;
  //   }
  //   if (firstNumber === "") {
  //     return <Text style={styles.screenFirstNumber}>{"0"}</Text>;
  //   }
  //   if (firstNumber.length > 5 && firstNumber.length < 8) {
  //     return (
  //       <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>
  //         {firstNumber}
  //       </Text>
  //     );
  //   }
  //   if (firstNumber.length > 7) {
  //     return (
  //       <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>
  //         {firstNumber}
  //       </Text>
  //     );
  //   }
  // };

  // const getResult = () => {
  //     switch (operation) {
  //       case "+":
  //           clear();
  //           setResult(eval(secondNumber + firstNumber));
  //           break;
  //       case "-":
  //           clear();
  //           setResult(parseInt(secondNumber) - parseInt(firstNumber));
  //           break;
  //       case "*":
  //           clear();
  //           setResult(parseInt(secondNumber) * parseInt(firstNumber));
  //           break;
  //       case "/":
  //           clear();
  //           setResult(parseInt(secondNumber) / parseInt(firstNumber));
  //           break;
  //       default:
  //           clear();
  //           setResult(0);
  //           break;
  //       }
  //   };

  return (
    <View style={{ margin: 40 }}>
      <View
        style={{
          height: 150,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={styles.screenSecondNumber}>
          {firstNumber}
          <Text style={{ fontSize: 50 }}>{operation}</Text>
        </Text>
        <Text>{result}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={clear}>
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("+/-")}>
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("％")}>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("/")}>
          <Text>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNumberPress("7")}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress("8")}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress("9")}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("*")}>
          <Text>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNumberPress("4")}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress("5")}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress("6")}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("-")}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleOperationPress("1")}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("2")}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("3")}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperationPress("+")}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleOperationPress(".")}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress("0")}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        >
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getResult()}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>

      {/* <Text>{num1}</Text>
      <Text>{num2}</Text> */}
    </View>
  );
}
