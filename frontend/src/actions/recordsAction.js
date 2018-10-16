import * as types from './types'
import RecordsApi from '../api/RecordsApi'

export function getRecords() {
    console.log("**************** actions/getRecords() ****************");
    return (dispatch, getState) => {
        return RecordsApi.getRecords()
        .then(
            response => {
            dispatch(setRecords(response));
        })
    }
}

export function setRecords(records) {
    return {
        type: types.SET_RECORDS,
        records,
    }
}

export function insertRecord(record) {
    console.log("**************** actions/insertRecord() ****************");
    return (dispatch, getState) => {
        return RecordsApi.insertRecord(record)
        .then(
            response => {
            dispatch(response);
        })
    }
}