import * as types from './types'
import RecordsApi from '../api/RecordsApi'

export function getRecords() {
    console.log("**************** actions/getRecords() ****************");
    return (dispatch, getState) => {
        return RecordsApi.getRecords()
        .then(
            response => {
            console.log(response);
            dispatch(setRecords(response));
        })
    }
}

export function setRecords(records) {
    console.log("**************** actions/setRecords() ****************");
    console.log(records);
    return {
        type: types.SET_RECORDS,
        records,
    }
}