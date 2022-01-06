import React, {useState} from "react";

export default function Form (props){
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [credentials, setCredentials] = useState("");
    const [title, setTitle] = useState("");
    const [college, setCollege] = useState("");
    const [department, setDepartment] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    function handleType(event){
        event.target.name === "simple" ? setType("simple") : setType("full");
        setImage("/images/ribbon.png");
    };

    function handleSubmit(event){
        event.preventDefault();
        props.addLog([type, image, name, credentials, title, college, department, address, location, phone, email])
    };
    return (<div>
    <form onSubmit={event => handleSubmit(event)}>
        <label>Name</label>
        <input name="name" value={name} type="text" onChange={event => setName(event.target.value)} placeholder="e.g. Zachary Neill"/>
        <label>Credentials</label>
        <input name="credentials" value={credentials} type="text" onChange={event => setCredentials(event.target.value)} placeholder="e.g. Ph.D"/>
        <label>Title</label>
        <input name="title" value={title} type="text" onChange={event => setTitle(event.target.value)} placeholder="e.g. Director"/>
        <label>College</label>
        <input name="college" value={college} type="text" onChange={event => setCollege(event.target.value)} placeholder="e.g. Berea College"/>
        <label>Department</label>
        <input name="department" value={department} type="text" onChange={event => setDepartment(event.target.value)} placeholder="e.g. Department of Computer Science"/>
        <label>Address</label>
        <input name="address" value={address} type="text" onChange={event => setAddress(event.target.value)} placeholder="e.g. 101 Chestnut St."/>
        <label>Location</label>
        <input name="location" value={location} type="text" onChange={event => setLocation(event.target.value)} placeholder="e.g. Berea, KY"/>
        <label>Phone</label>
        <input name="phone" value={phone} type="text" onChange={event => setPhone(event.target.value)} placeholder="e.g. 859-985-3369"/>
        <label>Email</label>
        <input name="email" value={email} type="text" onChange={event => setEmail(event.target.value)} placeholder="e.g. neillz@berea.edu"/>
        
        <input name="simple" onClick={handleType} type="submit" value="Build Simple Signature" />
        <input name="full" onClick={handleType} type="submit" value="Build Full Signature" />
        <input type="button" value="Pre-fill with Default Berea College Values" />
    </form>
    </div>
    )
}