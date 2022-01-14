import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState=[{
    image:"primary_rgb.png", 
    name:"Zach", 
    credentials:"", 
    pronouns:"", 
    title:"", 
    college:"",
    department:"", 
    address: "", 
    location:"",
    phone:"", 
    email:"", 
    color:"",
    nameSize:"", 
    detailSize:"",
    imageSize:"", 
    lineHeight:""
}];

const Reducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch (type){
        case "CREATE_DATA":
            return payload;
        default:
            return state;
    };
}; 

const store = createStore(Reducer, composeWithDevTools());
export default store;
