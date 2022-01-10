import React, {useState} from "react";
import Input from "./Input";
import SpecialInput from "./SpecialInput";
import {Button, Box} from "@material-ui/core";
export default function Form (props){

    const [image, setImage] = useState("primary_rgb.png");
    const [name, setName] = useState("");
    const [credentials, setCredentials] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [title, setTitle] = useState("");
    const [college, setCollege] = useState("");
    const [department, setDepartment] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [button, setButton] = useState("Build");
    const [color, setColor] = useState("#005A8B");
    let data = [image, name, credentials, pronouns, 
        title, college, department, address, location, phone, email, color];
    
    function updateLogs(){
        props.addLog(data);
    };

    function handleImage(selection){
        setImage(selection);
    };
    // function handleUpload(upload){
    //     setImage(upload);
    // }
    function handleColor(selection){
        setColor(selection);
    };

    function handleMouse(event){
        updateLogs();
    };

    function handleKeypress(event){
        updateLogs();
        setButton("Quick Syncing");
        setTimeout(()=>{
            button!=="Quick Syncing" && setButton("Update");
        }, 500);
    };

    function handleSubmit(event){
        setButton("Built!");
        updateLogs();
    };

    function handlePrefill(){
        setImage("primary_rgb.png");
        setCollege("Berea College");
        setLocation("Berea, KY");
        updateLogs();
    };
    return (
    <Box onKeyPress={event => handleKeypress(event)} onMouseMove={event => handleMouse(event)}>
        <Box className="form inputs">
            <Input label="name" onUpdate={event => setName(event)} example="e.g. Zachary Neill" />
            <Input label="credentials" onUpdate={event => setCredentials(event)} example="e.g. Ph.D" />
            <Input label="title" onUpdate={event => setTitle(event)} example="e.g. Director" />
            <Input label="pronouns" onUpdate={event => setPronouns(event)} example="e.g. He/him" />
            <Input label="college" value={college} onUpdate={event => setCollege(event)} example="e.g. Berea College" />
            <Input label="department" onUpdate={event => setDepartment(event)} example="e.g. Department of Computer Science" />
            <Input label="address" onUpdate={event => setAddress(event)} example="e.g. 101 Chestnut St. or Edwards Building" />
            <Input label="location" value={location} onUpdate={event => setLocation(event)} example="e.g. Berea, KY or Room 101" />
            <Input label="phone" onUpdate={event => setPhone(event)} example="e.g. 859-985-3369" />
            <Input label="email" onUpdate={event => setEmail(event)} example="e.g. neillz@berea.edu" />
        </Box>
        <Box className="form buttons">
            <Button variant="contained" onClick={handlePrefill}>Pre-fill with Berea College Values</Button>
            <Button variant="contained" onClick={handleSubmit}>{button}</Button>
            <SpecialInput label="image" value={image} onUpdate={event => handleImage(event)} />
            {/* <SpecialInput label="upload" onUpdate={event => handleUpload(event)} /> */}
            <SpecialInput label="color" value={color} onUpdate={event => handleColor(event)} />
        </Box>
    </Box>
    )
}