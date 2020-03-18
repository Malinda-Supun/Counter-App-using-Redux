import * as actionTypes from "./actionTypes";

export const saveResult = (counter) => {
    return{
        type: actionTypes.STORE_RESULT,
        counter: counter
    }
}

export const storeResult = (counter) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(counter));
        },2000);
    }
  /*  //can get state
    return (dispatch, getState) => {

        setTimeout(() => {
            const oldCount = getState().ctr.counter;
            console.log(oldCount)
            dispatch(saveResult(counter));
        },2000);
    }*/
}

export const deleteResult = (value) => {
    return{
        type: actionTypes.DELETE_RESULT,
        value: value
    }
}
