import React, { Component } from "react";
import Screen from "./src/Screen";
import { Provider } from "react-redux";
import { store } from "./src/reducer";
export default () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};
