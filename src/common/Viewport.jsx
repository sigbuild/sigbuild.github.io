import React from "react";

export default function IsViewportLarge() { 
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []); 
    
    return width > 1500 ? true : false
};

export function IsViewportMedium(){
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []); 
    
    return width <= 1500 && width > 600 ? true : false
};

export function IsViewportMobile(){
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []); 
    
    return width < 600 ? true : false
};