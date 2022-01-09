import React from "react";
import {InputLabel, Select, MenuItem, FormControl} from "@material-ui/core";

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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="image-select-label">Image</InputLabel>
                <Select 
                    labelId="image-select-label"
                    label="Select Image"
                    onChange={event => props.onUpdate(event.target.value)}>
                    <MenuItem value="primary_rgb.png">Primary Blue</MenuItem>
                    <MenuItem value="primary_black.png">Primary Black</MenuItem>
                    <MenuItem value="primary_white.png">Primary White</MenuItem>
                    <MenuItem value="secondary_blue.png">Secondary Blue</MenuItem>
                    <MenuItem value="secondary_black.png">Secondary Black</MenuItem>
                    <MenuItem value="secondary_white.png">Secondary White</MenuItem>
                    <MenuItem value="horizontal_rgb.png">Horizontal Blue</MenuItem>
                    <MenuItem value="horizontal_black.png">Horizontal Black</MenuItem>
                    <MenuItem value="horizontal_white.png">Horizontal White</MenuItem>
                    <MenuItem value="isns_blue.png">IS&S Blue</MenuItem>
                    <MenuItem value="isns_black.png">IS&S Black</MenuItem>
                    <MenuItem value="isns_white.png">IS&S White</MenuItem>
                    <MenuItem value="ribbon.png">Ribbon</MenuItem>
                    <MenuItem value="initials.png">BC Initials</MenuItem>
                </Select>
            </FormControl>
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="color-select-label">Text Color</InputLabel>
                <Select value={props.value}
                    labelId="color-select-label"
                    label="Text Color"
                    onChange={event => props.onUpdate(event.target.value)}>
                    <MenuItem value="#005A8B">Berea Blue</MenuItem>
                    <MenuItem value="initial">Black/Default</MenuItem>
                    <MenuItem value="#BFDBEC">Berea Light Blue</MenuItem>
                </Select>
            </FormControl>
        }
    </div>
    )
};