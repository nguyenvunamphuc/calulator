import { store, ACTION_TYPE } from "./reducer";
export const validateTextValue = () => {
  let { text } = store.getState();
  if (["Infinity", "NaN"].includes(text)) {
    updateText("0");
  }
};
export const action_changeText = key => {
  let { text } = store.getState();
  if (key === "." && (/[.]{1}/.test(text.split(/[+]|[-]|[*]|[/]]/).pop()) || /[+/*-]$/.test(text)))
    return;
  if (text === "0" && key !== ".") text = "";
  if (key === "C") {
    text = text.length < 2 ? "0" : text.slice(0, -1);
  } else text = `${text}${key}`;
  updateText(text);
};
export const action_addOperator = key => {
  let { text } = store.getState();
  if (/[.]$/.test(text)) return;
  if (/[+/*-]$/.test(text)) text = text.slice(0, -1);
  updateText(`${text}${key}`);
};
export const action_calculate = () => {
  const { text } = store.getState();
  if (/[+/*-.]$/.test(text)) return;
  updateText(`${Number(Math.round(parseFloat(eval(text)) * 1e12) / 1e12)}`);
};
const updateText = text => {
  store.dispatch({
    type: ACTION_TYPE.ADD_TEXT,
    payload: text
  });
};
