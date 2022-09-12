import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
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
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      {/* display container */}
      <View style={styles.displaycontainer}>
        <Text style={styles.input}>{inputarr}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.keyboard}>
        <View style={styles.sections}>
          {/* first row */}
          <View style={styles.row}>
            <TouchableOpacity onPress={clear} style={styles.graybtn}>
              <Text style={styles.text}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("+/-")}
              style={styles.graybtn}
            >
              <Text style={styles.text}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("％")}
              style={styles.graybtn}
            >
              <Text style={styles.text}>％</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("/")}
              style={styles.violetbtn}
            >
              <Text style={styles.text}>÷</Text>
            </TouchableOpacity>
          </View>

          {/* second row */}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleCharacter("7")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("8")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("9")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("*")}
              style={styles.violetbtn}
            >
              <Text style={styles.text}>×</Text>
            </TouchableOpacity>
          </View>

          {/* third row */}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleCharacter("4")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("5")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("6")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("-")}
              style={styles.violetbtn}
            >
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>

          {/* fourth row */}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleCharacter("1")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("2")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("3")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("+")}
              style={styles.violetbtn}
            >
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>

          {/* fifth row */}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => setInputArr(inputarr.slice(0, -1))}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>⌫</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter("0")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCharacter(".")}
              style={styles.whitebtn}
            >
              <Text style={styles.text2}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => getResult()}
              style={styles.violetbtn}
            >
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
