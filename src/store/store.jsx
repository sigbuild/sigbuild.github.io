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
    color:"#005A8B",
    nameSize:"", 
    detailSize:"",
    imageSize:"110", 
    lineHeight:"1.15"
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
