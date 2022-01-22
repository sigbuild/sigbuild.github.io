import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import SpecialInput from "./SpecialInput";
import {Button, Box, Grid} from "@mui/material";
import SizeSlider from "./SizeSlider";
import '../css/components.css';

export default function Form (){
    const dispatch = useDispatch();
    const [image, setImage] = useState("primary_blue.png");
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
    const [color, setColor] = useState("#005A8B");
    const [nameSize, setNameSize] = useState(18);
    const [detailSize, setDetailSize] = useState(11);
    const [imageSize, setImageSize] = useState(110);
    const [lineHeight, setLineHeight] = useState(1.15);

    useEffect(()=>{
        dispatch({
            type: "CREATE_DATA", 
            payload: {
                image:image, 
                name:name, 
                credentials:credentials, 
                pronouns:pronouns, 
                title:title, 
                college:college,
                department:department, 
                address: address, 
                location:location, 
                phone:phone, 
                email:email, 
                color:color,
                nameSize:nameSize, 
                detailSize:detailSize,
                imageSize:imageSize, 
                lineHeight:lineHeight 
            }
        });
    });

    function handlePrefill(){
        setImage("primary_blue.png");
        setCollege("Berea College");
        setLocation("Berea, KY");
    };
    
    return (
    <Box>
        <Grid className="form" container columnSpacing={1} rowSpacing={1}>
            <Input label="name" onUpdate={setName} example="e.g. Zachary Neill" />
            <Input label="credentials" onUpdate={setCredentials} example="e.g. Ph.D" />
            <Input label="title" onUpdate={setTitle} example="e.g. Director" />
            <Input label="pronouns" onUpdate={setPronouns} example="e.g. He/him" />
            <Input label="college" value={college} onUpdate={setCollege} example="e.g. Berea College" />
            <Input label="department" onUpdate={setDepartment} example="e.g. Department of Computer Science" />
            <Input label="address" onUpdate={setAddress} example="e.g. 101 Chestnut St. or Edwards Building" />
            <Input label="location" value={location} onUpdate={setLocation} example="e.g. Berea, KY or Room 101" />
            <Input label="phone" onUpdate={setPhone} example="e.g. 859-985-3369" />
            <Input label="email" onUpdate={setEmail} example="e.g. neillz@berea.edu" />
        </Grid>
        <Grid className="form" container columnSpacing={2} rowSpacing={2}>
            <SpecialInput label="image" value={image} onUpdate={event => setImage(event)} />
            <SpecialInput label="color" value={color} onUpdate={event => setColor(event)} />
            <SizeSlider label="name" value={nameSize} step={1} min={4} max={40}
                onUpdate={event => setNameSize(event)} onReset={event=> setNameSize(18)} />
            <SizeSlider label="detail" value={detailSize} step={1} min={1} max={25} 
                onUpdate={event => setDetailSize(event)} onReset={event=> setDetailSize(11)} />
            <SizeSlider label="image" value={imageSize} step={25} min={35} max={335} 
                onUpdate={event => setImageSize(event)} onReset={event=> setImageSize(110)} />
            <SizeSlider label="line" value={lineHeight} step={0.1} marks min={0.1} max={3}
                onUpdate={event => setLineHeight(event)} onReset={event=> setLineHeight(1.15)} />
            
            <Grid item>
                <Button size="large" color="inherit" variant="contained" onClick={handlePrefill}>Autofill with Berea Values</Button>
            </Grid>
        </Grid>
    </Box>
    )
};