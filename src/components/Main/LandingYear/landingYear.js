import React from "react";
// import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
// import classes from "./landingYear.css";
import HorizontalLine from "../../UI/HorizontalLine/horizontalLine";
import Button from "../../UI/Button/button";

const landingYear = (props) => (
  <div>
    <div className="text-center">Landing Year</div>
    <HorizontalLine/>
    <div className="row text-center">
      {props.landingYrs.map(obj =>(
              <div className="col-6" key={obj.year}>
              <Button clicked={props.landingYrClicked} btnType={obj.isClicked?"Clicked":"NotClicked"} iD={obj.year}>{obj.year}</Button>
            </div>
      ))}
    </div>
    </div>
);

export default landingYear;
