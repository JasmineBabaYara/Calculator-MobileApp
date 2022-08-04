import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export default function sum() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const Sum = () => {
    var Num1 = parseInt(num1);
    var Num2 = parseInt(num2);

    var result = Num1 + Num2;
    alert(result);
  };

  return (
    <View style={{ margin: 40 }}>
      <TextInput
        placeholder="num1"
        style={{ borderBottomColor: "grey", borderBottomWidth: 1, padding: 10 }}
        onChangeText={(value) => setNum1(value)}
      />
      <TextInput
        placeholder="num2"
        style={{ borderBottomColor: "grey", borderBottomWidth: 1, padding: 10 }}
        onChangeText={(value) => setNum2(value)}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "dodgerblue",
          marginTop: 50,
          width: 90,
          alignItems: "center",
          alignSelf: "center",
        }}
        onPress={Sum}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      {/* <Text>num:{num1}</Text> */}
    </View>
  );
}
