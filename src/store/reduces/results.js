import * as actionType from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: action.counter})
            }
        case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.value);
            // updatedArray.splice(action.value,1);
            return {
                ...state,
                results: updatedArray
            }
    }


    return state;
}

export default reducer;
