import { v4 as uuid } from "uuid";
const initialState=[{
    id:9, 
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

export const Reducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch (type){
        case "CREATE_DATA":
            return [...state, {
                id:uuid(), 
                image:payload.image, 
                name:payload.name, 
                credentials:payload.credentials, 
                pronouns:payload.pronouns, 
                title:payload.title, 
                college:payload.college,
                department:payload.department, 
                address: payload.address, 
                location:payload.location, 
                phone:payload.phone, 
                email:payload.email, 
                color:payload.color,
                nameSize:payload.nameSize, 
                detailSize:payload.detailSize,
                imageSize:payload.imageSize, 
                lineHeight:payload.lineHeight 
            }]
        default:
            return state;
    }
    return state;
}; 
