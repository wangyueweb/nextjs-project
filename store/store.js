import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const initialState = {
  count: 0,
};

const userInitialState = {
  username: "nick",
  age: 18,
};

const ADD = "ADD";

function countReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) };
    default:
      return state;
  }
}

const UPDATE_USERNAME = "UPDATE_USERNAME";

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.name };
    default:
      return state;
  }
}

const allReducers = combineReducers({
  counter: countReducer,
  user: userReducer,
});

const store = createStore(
  allReducers,
  {
    counter: initialState,
    user: userInitialState,
  },
  applyMiddleware(ReduxThunk)
);

// action create
function add(num) {
  return {
    type: ADD,
    num,
  };
}

function addAsync(num) {
  return (dispatch) => {
      setTimeout(() => {
          dispatch(add(num));
      },1000)
  }
}
store.dispatch(add(3));
store.dispatch(addAsync(3));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
