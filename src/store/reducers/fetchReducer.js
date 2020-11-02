import * as actionTypes from '../actions/actionTypes';

const initialState = {
    landingYear : '',
    successfulLaunch : '',
    successfulLanding : '',
    record : null,
    error: false,
    loading : false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_LANDING_YEAR :
            return {
                ...state,
                landingYear : action.year
            }
        case actionTypes.UPDATE_LAUNCH_SUCCESS :
            return {
                ...state,
                successfulLaunch : action.isLaunchSuccess
            }
        case actionTypes.UPDATE_LANDING_SUCCESS :
            return {
                ...state,
                successfulLanding : action.isLandingSuccess
            }
        case actionTypes.ADD_RECORDS :
            return {
                ...state,
                record : action.records,
                loading : false
            }
        case actionTypes.FETCH_RECORDS_FAIL :
            return {
                ...state,
                error : true,
                loading : false
            }
        default:
            return state;
    }
}

export default reducer;