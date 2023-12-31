import "./Button.style.css";
import React from "react";

export const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
