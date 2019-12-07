import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import style from "./styles";
import Button from "./Button";
import { NUMBER_MAP_ITEM, OPERATOR_MAP_ITEM } from "./constants";
import { connect } from "react-redux";
export default connect(state => ({ text: state.text }))(({ text }) => {
  return (
    <SafeAreaView style={[style.section, style.margin]}>
      <View style={[style.section, style.displayView]}>
        <Text style={[style.displayText, style.margin]}>{text}</Text>
      </View>
      <View style={[style.section, style.row]}>
        <View style={style.numberView}>
          {NUMBER_MAP_ITEM.map((listItem, listIndex) => (
            <View key={listIndex} style={[style.section, style.row]}>
              {listItem.map(item => (
                <Button key={item} item={item} />
              ))}
            </View>
          ))}
        </View>
        <View style={style.operatorView}>
          {OPERATOR_MAP_ITEM.map(_ => (
            <Button key={_} item={_} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
});
