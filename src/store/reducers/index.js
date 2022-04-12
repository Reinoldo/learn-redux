import { combineReducers } from "redux";
import aritmetica from "./aritmetica";

const reducers = combineReducers({ ari: aritmetica });

export default reducers;
