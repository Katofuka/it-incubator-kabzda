import {useState} from "react";
//
// type SelfControlledOnOffType = {
//     defaultValue? : boolean
// }

export const SelfControlledOnOff = ({defaultValue}: {defaultValue?: boolean}) => {

    const [on, setOn] = useState<boolean>(defaultValue ? defaultValue: false)

    const blockStyle = {
        display: "flex",
        alignItems: "center"
    }

    const onStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid gray",
        margin: "10px 3px",
        padding: "0 2px",
        backgroundColor: on ? "lightgreen" : "white",

    }
    const offStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid gray",
        margin: "10px 3px",
        padding: "0 2px",
        backgroundColor: on ? "white": "lightcoral",
    }
    const indicatorStyle = {
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        backgroundColor: on ? "lightgreen": "lightcoral",
        margin: "10px 5px",
    }

    return (
        <div style={blockStyle}>
            <div onClick={()=> setOn(true)} style={onStyle}>On</div>
            <div onClick={()=> setOn(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}