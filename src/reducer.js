import { createStore } from "redux";
export const initState = {
  text: "0"
};
export function reducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_TEXT:
      return { text: action.payload };
    default:
      return state;
  }
}
export const ACTION_TYPE = {
  ADD_TEXT: "ADD_TEXT"
};
export const store = createStore(reducer, initState);
