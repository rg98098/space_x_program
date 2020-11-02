import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';


export const updateLandingYear = (year) =>{
    
    return {
        type: actionTypes.UPDATE_LANDING_YEAR,
        year : year
    }

}

export const updateLaunchSuccess = (bol)=>{
    return {
        type: actionTypes.UPDATE_LAUNCH_SUCCESS,
        isLaunchSuccess : bol
    }
}

export const updateLandingSuccess = (bol)=>{
    return {
        type: actionTypes.UPDATE_LANDING_SUCCESS,
        isLandingSuccess : bol
    }
}

export const addRecords =(records)=>{
    return {
        type : actionTypes.ADD_RECORDS,
        records : records
    }
}

export const fetchRecordsFailed = ()=>{
    return {
        type : actionTypes.FETCH_RECORDS_FAIL
    }
}


const setUpRecords = (records)=>{
    const arrayRecord = [];

    records.forEach(element => {
        let obj = {
            "img_url" : element.links.mission_patch_small,
            "mission_name" : element.mission_name,
            "flight_number" : element.flight_number,
            "mission_id" : [...element.mission_id],
            "launch_year" : element.launch_year,
            "launch_success" : element.launch_success,
            "land_success" : element.rocket.first_stage.cores[0].land_success
        }
  
        arrayRecord.push(obj);
    });

    // console.log(arrayRecord);
    return arrayRecord;
}

export const updateRecords = (year,isSuccessLaunch,isSuccessLanding)=>{
    return (dispatch)=>{
        dispatch(updateLandingYear(year));
        dispatch(updateLaunchSuccess(isSuccessLaunch));
        dispatch(updateLandingSuccess(isSuccessLanding));
        const prefixUrl = `/v3/launches`;
        const search = `?limit=100&launch_success=${isSuccessLaunch}&land_success=${isSuccessLanding}&launch_year=${year}`;
        const url= prefixUrl+search;
        axios.get(url)
        .then((response)=>{
            const records = setUpRecords(response.data);
            dispatch(addRecords(records));
        }).catch((error)=>{
            dispatch(fetchRecordsFailed());
        })
    }
}

