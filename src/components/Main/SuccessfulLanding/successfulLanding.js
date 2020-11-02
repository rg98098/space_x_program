import React from 'react';
// import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import HorizontalLine from "../../UI/HorizontalLine/horizontalLine";
import Button from "../../UI/Button/button";
// import classes from "./successfulLanding.css";

const successfulLanding = props=> (
    <div>
        <div className="text-center">Successful Landing</div>
        <HorizontalLine/>
        <div className="row text-center">
        {props.successfulLanding.map(obj =>(
                <div className="col-6" key={obj.booleanType}>
                <Button clicked={props.successfulLandingHandler} btnType={obj.isClicked?"Clicked":"NotClicked"} iD={obj.booleanType}>{obj.booleanType}</Button>
              </div>
        ))
        }
        </div>
    </div>
);

export default successfulLanding;