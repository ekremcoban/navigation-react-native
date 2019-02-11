import * as actions from '../actions/actionTypes';

const initialState = {
    users:['Barış','Ahmet']
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actions.GET_USERS):
            return state;
        default:
            return state;
    }
}

export default reducer;