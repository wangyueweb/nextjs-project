import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    count: 0
}

const ADD = 'ADD'

function reducer(state = initialState, action){
    console.log(state, action);
    switch(action.type){
        case "ADD":
            return {count: state.count + 1}
        default:
            return state
        
    }
}

const store = createStore(reducer, initialState);

console.log(store.getState(),1);

store.dispatch({type: ADD})

console.log(store.getState(),2);

store.subscribe(() => {
    console.log(store.getState());
})

export default store