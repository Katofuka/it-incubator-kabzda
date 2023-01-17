import React, {useState} from "react";
import {OnOff} from "../components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
}
const callback = action("on or off clicked")

export const OnMode = () => <OnOff value={true} onClick={callback}/>;
export const OffMode = () => <OnOff value={false} onClick={callback}/>;
export const ModeChanging = () => {
    const [valueOnOff, setOnOff] = useState<boolean>(false)
    return <OnOff value={valueOnOff} onClick={setOnOff}/>
}


