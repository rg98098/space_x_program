import React from "react";
import classes from "./button.css"

const button = (props) => (
    <button type="button" className={[classes.Button,classes[props.btnType]].join(' ')} id={props.iD} onClick={props.clicked} disabled={props.disabled}>
        {props.children}
    </button>
);

export default button;
