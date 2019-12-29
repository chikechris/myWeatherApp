import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

// reducers


// middleware
const middleware = applyMiddleware(thunk)

//store
const store = createStore("", middleware) 

export default store;
