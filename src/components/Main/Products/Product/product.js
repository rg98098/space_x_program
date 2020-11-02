import React from "react";
import classes from "./product.css";


const product = (props) => {
    const missionIds = props.missionIds.map(ele =>{
        return <li key={ele}>{ele}</li>
    })
    return (
        <div className={`${classes.Product} ${classes.ProductBottom}`}>
        <div className={`card ${classes.CardMinHeight}`}>
          <img className={classes.Image}  src={props.imgUrl} alt="Card"/>
          <div className="card-body">
            <div className={classes.FontSize}>
            <span className={classes.Heading}><b>{props.missionName} #{props.flightNumber}</b></span>
              <br />
              <span><strong>Mission Ids:</strong></span>
              <ul className={classes.UnorderedList}>
                {missionIds}
              </ul>
              <span><strong>Launch Year:</strong> {props.launchYear}</span>
              <br />
              <span><strong>Successful Launch:</strong> {props.launchSuccess}</span>
              <br />
              <div className={classes.SuccessfulLanding}>
                <span><b>Successful Landing:</b></span>
                <span>{props.landSuccess}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default product;
