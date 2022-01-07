import React, {useState} from "react";

export default function Form (props){

    const [image, setImage] = useState("/images/primary_rgb.png");
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
    function updateLogs(){
        props.addLog([image, name, credentials, pronouns, title, college, department, address, location, phone, email]);
    };

    function handleImage(selection){
        setImage("/images/"+selection);
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
        event.preventDefault();
        updateLogs();
    };

    function handlePrefill(){
        setImage("/images/primary_rgb.png");
        setCollege("Berea College");
        setLocation("Berea, KY");
        updateLogs();
    };

    return (
    <div onKeyPress={event => handleKeypress(event)} onMouseMove={event => handleMouse(event)} className="form">
        <form onSubmit={event => handleSubmit(event)}>
            <label>Select image</label>
            <select name="image" onChange={event => handleImage(event.target.value)}>
                <option value="primary_rgb.png">Primary Blue</option>
                <option value="primary_black.png">Primary Black</option>
                <option value="primary_white.png">Primary White</option>
                <option value="secondary_blue.png">Secondary Blue</option>
                <option value="secondary_black.png">Secondary Black</option>
                <option value="secondary_white.png">Secondary White</option>
                <option value="horizontal_rgb.png">Horizontal Blue</option>
                <option value="horizontal_black.png">Horizontal Black</option>
                <option value="horizontal_white.png">Horizontal White</option>
                <option value="ribbon.png">Ribbon</option>
                <option value="initials.png">BC Initials</option>
            </select>
            <label>Name</label>
            <input name="name" value={name} type="text" onChange={event => setName(event.target.value)} placeholder="e.g. Zachary Neill"/>
            <label>Credentials</label>
            <input name="credentials" value={credentials} type="text" onChange={event => setCredentials(event.target.value)} placeholder="e.g. Ph.D"/>
            <label>Title</label>
            <input name="title" value={title} type="text" onChange={event => setTitle(event.target.value)} placeholder="e.g. Director"/>
            <label>Pronouns</label>
            <input name="pronouns" value={pronouns} type="text" onChange={event => setPronouns(event.target.value)} placeholder="e.g. He/him"/>
            <label>College</label>
            <input name="college" value={college} type="text" onChange={event => setCollege(event.target.value)} placeholder="e.g. Berea College"/>
            <label>Department</label>
            <input name="department" value={department} type="text" onChange={event => setDepartment(event.target.value)} placeholder="e.g. Department of Computer Science"/>
            <label>Address</label>
            <input name="address" value={address} type="text" onChange={event => setAddress(event.target.value)} placeholder="e.g. 101 Chestnut St. or Edwards Building"/>
            <label>Location</label>
            <input name="location" value={location} type="text" onChange={event => setLocation(event.target.value)} placeholder="e.g. Berea, KY or Room 101"/>
            <label>Phone</label>
            <input name="phone" value={phone} type="text" onChange={event => setPhone(event.target.value)} placeholder="e.g. 859-985-3369"/>
            <label>Email</label>
            <input name="email" value={email} type="text" onChange={event => setEmail(event.target.value)} placeholder="e.g. neillz@berea.edu"/>
            
            <input name="submit" type="submit" value={button} />
            <input type="button" onClick={handlePrefill} value="Pre-fill with Berea College Values" />
        </form>
    </div>
    )
}