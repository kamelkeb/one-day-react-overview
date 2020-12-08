import React from "react";
import classes from "./CoolButton.module.css";

const CoolButton = (props) => {
  return (
    <button className={classes.cool} onClick={props.clickHandler} name="click">
      {props.actionName}
    </button>
  );
};

export default CoolButton;
