import React, {useState} from "react";
import Input from "./Input";
import SpecialInput from "./SpecialInput";
import {Button, Box, Grid} from "@mui/material";
import FontSlider from "./FontSlider";

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
    const [font, setFont] = useState(18);
    
    let data = [image, name, credentials, pronouns, 
        title, college, department, address, location, phone, email, color];
    
    function updateLogs(){
        props.addLog(data);
    };

    function handleImage(selection){
        setImage(selection);
    };

    function handleColor(selection){
        setColor(selection);
    };

    function handleFont(selection){
        setFont(selection);
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
        <Grid className="form" container columnSpacing={1} rowSpacing={1}>
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
        </Grid>
        <Grid className="form" container columnSpacing={2} rowSpacing={2}>
            <SpecialInput label="image" value={image} onUpdate={event => handleImage(event)} />
            <SpecialInput label="color" value={color} onUpdate={event => handleColor(event)} />
            <FontSlider value={font} onUpdate={event => handleFont(event)} />
            <Grid item>
                <Button size="large" color="inherit" variant="contained" onClick={handlePrefill}>Autofill with Berea Values</Button>
            </Grid>
            <Grid item>
                <Button size="large" variant="contained" style={{backgroundColor:"#005A8B", color:"white"}} onClick={handleSubmit}>{button}</Button>
            </Grid>
        </Grid>
    </Box>
    )
}