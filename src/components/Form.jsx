import React, {useState} from "react";

export default (props)=>{
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [credentials, setCredentials] = useState();
    const [title, setTitle] = useState();
    const [college, setCollege] = useState();
    const [department, setDepartment] = useState();
    const [address, setAddress] = useState();
    const [location, setLocation] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    function handleSubmit(event){
        event.preventDefault()
    };
    function submitData(sigType){
        this.preventDefault;
        let data ={

        };
        if (sigType==="simple"){
            props.onBuild = data;
        } else {

        };
    };

    return <div>
    <form onSubmit={event => handleSubmit(event)}>
        <input name="name" type="text" onChange={event => setName(event.target.value)} placeholder="e.g. Zachary Neill"/>
        <input name="credentials" type="text" onChange={event => setCredentials(event.target.value)} placeholder="e.g. Ph.D"/>
        <input name="title" type="text" onChange={event => setTitle(event.target.value)} placeholder="e.g. Director"/>
        <input name="college" type="text" onChange={event => setCollege(event.target.value)} value="Berea College" placeholder="e.g. Berea College"/>
        <input name="department" type="text" onChange={event => setDepartment(event.target.value)} placeholder="e.g. Department of Computer Science"/>
        <input name="address" type="text" onChange={event => setAddress(event.target.value)} placeholder="e.g. 101 Chestnut St."/>
        <input name="location" type="text" onChange={event => setLocation(event.target.value)} placeholder="e.g. Berea, KY"/>
        <input name="phone" type="text" onChange={event => setPhone(event.target.value)} placeholder="e.g. 859-985-3369"/>
        <input name="email" type="text" onChange={event => setEmail(event.target.value)} placeholder="e.g. neillz@berea.edu"/>
        
        <input type="submit" value="Build Simple Signature" />
        <input type="submit" value="Build Full Signature" />
        <input type="button" value="Pre-fill with Default Berea College Values" />
    </form>
    </div>
}