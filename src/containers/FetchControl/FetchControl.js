import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from  './FetchControl.css';
import LandingYear from  '../../components/Main/LandingYear/landingYear';
import SuccessfulLaunch from  '../../components/Main/SuccessfulLaunch/successfulLaunch';
import SuccessfulLanding from  '../../components/Main/SuccessfulLanding/successfulLanding';
import Products from '../../components/Main/Products/products';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class MainPage extends Component {

    state = {
        landingYears :[
            {"year": "2016", "isClicked": false},
            {"year": "2017", "isClicked": false},
            {"year": "2018", "isClicked": false},
            {"year": "2019", "isClicked": false},
            {"year": "2020", "isClicked": false},
            {"year": "2021", "isClicked": false},
        ],
        successfulLaunch : [
            {"booleanType":"True", "isClicked": false},
            {"booleanType":"False", "isClicked": false}
        ],
        successfulLanding : [
            {"booleanType":"True", "isClicked": false},
            {"booleanType":"False", "isClicked": false}
        ],
        selectedYear : "",
        isSuccessfulLaunch : "",
        isSuccessfulLanding : "",
    }

    componentDidMount() {
        let landingYear = "";
        let successfulLaunch="";
        let successfulLanding ="";
        if(this.props.location.search.trim().length >0){
            const query = new URLSearchParams(this.props.location.search);
            for(let param of query.entries()){
                if(param[0]==="launch_year"){
                    landingYear=param[1];
                }else if(param[0]==="land_success"){
                    successfulLaunch = param[1];
                }else if(param[0]==="launch_success"){ 
                    successfulLanding = param[1];
                }
            }
        }
        this.props.onUpdateRecords(landingYear,successfulLaunch,successfulLanding);
    }

    isLandingYearHandler=(event)=>{
        const clickedYear = event.target.id;
        let updatedArray = [];
        let selectedYear ='';
        const copiedArray = [...this.state.landingYears];
        copiedArray.forEach(element => {
            let isClicked = false;
            if(element.year===clickedYear){
                isClicked =!element.isClicked;
                if(isClicked){
                    selectedYear = element.year;
                }
            }
            let obj ={ ...element,
                "year": element.year, "isClicked" : isClicked
            }
            updatedArray.push(obj);
            
        });
        this.setState({landingYears: updatedArray});
        // this.props.onUpdateLandingYr(selectedYear);
        this.props.onUpdateRecords(selectedYear,this.props.successfulLaunch,this.props.successfulLanding);
        

    }

    isSuccessfulLaunchHandler =(event)=>{
        const clickedType = event.target.id;
        let updatedArray = [];
        let selectedSuccessfulLaunch ='';
        this.state.successfulLaunch.forEach(element => {
            
            let isClicked = false;
            if(element.booleanType===clickedType){
                isClicked =!element.isClicked;
                if(isClicked){
                    selectedSuccessfulLaunch = element.booleanType.toLowerCase();
                }
            }
            let obj ={
                "booleanType": element.booleanType, "isClicked" : isClicked
            }
            updatedArray.push(obj);
            
        });
        this.setState({successfulLaunch: updatedArray});
        this.props.onUpdateRecords(this.props.landingYear,selectedSuccessfulLaunch,this.props.successfulLanding);
    }

    successfulLandingHandler =(event)=>{
        const clickedType = event.target.id;
        let updatedArray = [];
        let selectedSuccessfulLanding ='';
        this.state.successfulLanding.forEach(element => {
            
            let isClicked = false;
            if(element.booleanType===clickedType){
                isClicked =!element.isClicked;
                if(isClicked){
                    selectedSuccessfulLanding = element.booleanType.toLowerCase();
                }
            }
            let obj ={
                "booleanType": element.booleanType, "isClicked" : isClicked
            }
            updatedArray.push(obj);
            
        });
        this.setState({successfulLanding: updatedArray});
        console.log(selectedSuccessfulLanding)
        // this.props.onUpdateLandingSuccess(selectedSuccessfulLanding);
        this.props.onUpdateRecords(this.props.landingYear,this.props.successfulLaunch,selectedSuccessfulLanding);
    }

    render() {
        let products =null;

        products = this.props.error ? (<p>Records can't be shown</p>) : (<Spinner/>);

        if(this.props.rec){
            products = <Products records={this.props.rec}/>
        }
        return (
            <div className={`${classes.Outermain}`}>
            <div className="row no-gutters">
                <div className="col-md-3 no-gutters">
                    <div className={classes.Wrapper}>
                    <div className={`${classes.Filters} ${classes.FullWidth}`}>
                    <div className="card">
                        <div className={classes.Heading}><b>Filters</b></div>
                            <LandingYear 
                            landingYrs={this.state.landingYears} 
                            landingYrClicked={this.isLandingYearHandler}
                            />
                            <SuccessfulLaunch successfulLaunch={this.state.successfulLaunch}
                            clickedSuccessfulLaunch={this.isSuccessfulLaunchHandler}
                            />
                            <SuccessfulLanding 
                            successfulLanding = {this.state.successfulLanding}
                            successfulLandingHandler = {this.successfulLandingHandler}
                            />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-9 no-gutters">
                    <div className={classes.Wrapper}>
                        {products}
                    </div>
                </div>
            </div>
        </div>  
            )
    }
}

const mapStateToProps = state =>{
    return {
        rec : state.record,
        error : state.error,
        landingYear : state.landingYear,
        successfulLaunch : state.successfulLaunch,
        successfulLanding : state.successfulLanding,
        loading : state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateLandingYr : (year) => dispatch(actions.updateLandingYear(year)),
        onUpdateLaunchSuccess : (bol) => dispatch(actions.updateLaunchSuccess(bol)),
        onUpdateLandingSuccess : (bol) => dispatch(actions.updateLandingSuccess(bol)),
        onUpdateRecords : (year,isSuccessfulLaunch,isSuccessfulLanding) => dispatch(actions.updateRecords(year,isSuccessfulLaunch,isSuccessfulLanding))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(MainPage,axios));