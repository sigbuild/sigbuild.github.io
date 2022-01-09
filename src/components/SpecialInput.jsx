import React from "react";

export default function Input (props){
    // const [file, setFile] = useState("");
    // const [picked, setPicked] = useState(false);

    // const handleFile = (event) => {
	// 	setFile(event.target.files[0]);
	// 	setPicked(true);
	// };
	// const handleSubmission = () => {
	// };

    return (
    <div>
        { props.label==="image" &&
            <div>
                <label>Select image: </label>
                <select name={props.label} onChange={event => props.onUpdate(event.target.value)}>
                    <option value="primary_rgb.png">Primary Blue</option>
                    <option value="primary_black.png">Primary Black</option>
                    <option value="primary_white.png">Primary White</option>
                    <option value="secondary_blue.png">Secondary Blue</option>
                    <option value="secondary_black.png">Secondary Black</option>
                    <option value="secondary_white.png">Secondary White</option>
                    <option value="horizontal_rgb.png">Horizontal Blue</option>
                    <option value="horizontal_black.png">Horizontal Black</option>
                    <option value="horizontal_white.png">Horizontal White</option>
                    <option value="isns_blue.png">IS&S Blue</option>
                    <option value="isns_black.png">IS&S Black</option>
                    <option value="isns_white.png">IS&S White</option>
                    <option value="ribbon.png">Ribbon</option>
                    <option value="initials.png">BC Initials</option>
                </select> 
            </div> 
        }
        {/* { props.label==="upload" && 
            <div>
            {file}
                <label>Or, upload your own image: </label>
                <input type="file" name="file" onChange={handleFile} />
                <button onClick={handleSubmission}>Submit</button>
            </div>
        } */}
        { props.label==="color" && 
            <div>
                <label>Select text color: </label>
                <select name={props.label} onChange={event => props.onUpdate(event.target.value)}>
                    <option value="#005A8B">Berea Blue</option>
                    <option value={null}>Black/Default</option>
                    <option value="#BFDBEC">Berea Light Blue</option>
                </select> 
            </div> 
        }
    </div>
    )
};