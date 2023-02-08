import React from "react";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Clock, ClockPropsType} from "./Clock";


export default {
    title: 'Components/Controlled/Clock',
    component: Clock,

}

const callback = action("on or off clicked")

const Template: Story<ClockPropsType> = (args) => <Clock {...args}/>

export const DigitalClockExample: Story<ClockPropsType> = () => {
    // const [valueOnOff, setOnOff] = useState<boolean>(false)
    return <Clock />
}

export const AnalogClockExample: Story<ClockPropsType> = () => {
    // const [valueOnOff, setOnOff] = useState<boolean>(false)
    return <Clock mode={'analog'}/>
}
// ModeChanging.args = {
//     value: true,
// }
