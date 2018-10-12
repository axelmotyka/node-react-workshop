import * as types from './types'

export function setMessage(message) {
    console.log("**************** actions/setMessage() ****************");
    console.log(message);
    return {
        type: types.SET_MESSAGE,
        message,
    }
}