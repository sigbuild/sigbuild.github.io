import { createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";

const initialState=[{
    image:"", 
    name:"", 
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

const store = createStore((state=initialState, action)=>{
    const {type, payload} = action;
    switch (type){
        case "CREATE_DATA":
            return payload;
        default:
            return state;
    };
}, composeWithDevTools());
export default store;
