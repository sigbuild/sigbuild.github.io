import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Reducer} from "./reducers/Reducer";

const store = createStore(Reducer, composeWithDevTools());

export default store;