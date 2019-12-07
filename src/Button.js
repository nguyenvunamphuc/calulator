import { Text, TouchableOpacity } from "react-native";
import style from "./styles";
import React from "react";
import {
  action_addOperator,
  action_calculate,
  action_changeText,
  validateTextValue
} from "./actions";
export default React.memo(({ item }) => {
  const _onPress = () => {
    validateTextValue();
    if (/[0-9.C]/.test(item)) return action_changeText(item);
    if (/[+*/-]/.test(item)) return action_addOperator(item);
    if (item === "=") return action_calculate();
  };
  return (
    <TouchableOpacity onPress={_onPress} style={[style.button, style.margin]}>
      <Text style={style.buttonText}>{item}</Text>
    </TouchableOpacity>
  );
});
