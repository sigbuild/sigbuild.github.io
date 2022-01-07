import React, {useState} from "react";
import Input from "./Input";
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
    let data = [image, name, credentials, pronouns, title, college, department, address, location, phone, email];
    
    function updateLogs(){
        props.addLog(data);
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
            <Input label="image" onUpdate={event => handleImage(event)} />
            <Input label="name" onUpdate={event => setName(event)} example="e.g. Zachary Neill" />
            <Input label="credentials" onUpdate={event => setCredentials(event)} example="e.g. Ph.D" />
            <Input label="title" onUpdate={event => setTitle(event)} example="e.g. Director" />
            <Input label="pronouns" onUpdate={event => setPronouns(event)} example="e.g. He/him" />
            <Input label="college" onUpdate={event => setCollege(event)} example="e.g. Berea College" />
            <Input label="department" onUpdate={event => setDepartment(event)} example="e.g. Department of Computer Science" />
            <Input label="address" onUpdate={event => setAddress(event)} example="e.g. 101 Chestnut St. or Edwards Building" />
            <Input label="location" onUpdate={event => setLocation(event)} example="e.g. Berea, KY or Room 101" />
            <Input label="phone" onUpdate={event => setPhone(event)} example="e.g. 859-985-3369" />
            <Input label="email" onUpdate={event => setEmail(event)} example="e.g. neillz@berea.edu" />

            <input name="submit" type="submit" value={button} />
            <input type="button" onClick={handlePrefill} value="Pre-fill with Berea College Values" />
        </form>
    </div>
    )
}