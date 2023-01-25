import {memo} from "react";

export type OnOffPropsType={
    value: boolean
    onClick: (value:boolean)=>void
}
export const OnOff = memo((props: OnOffPropsType) => {
    const {value, onClick} = props
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
        backgroundColor: value ? "lightgreen" : "white",

    }
    const offStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid gray",
        margin: "10px 3px",
        padding: "0 2px",
        backgroundColor: value ? "white": "lightcoral",
    }
    const indicatorStyle = {
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        backgroundColor: value ? "lightgreen": "lightcoral",
        margin: "10px 5px",
    }

    return (
        <div style={blockStyle}>
            <div onClick={()=> onClick(true)} style={onStyle}>On</div>
            <div onClick={()=> onClick(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
})