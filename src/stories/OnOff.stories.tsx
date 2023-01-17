import React, {useState} from "react";
import {OnOff, OnOffPropsType} from "../components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";
import {getCategoryObj} from "../common/categoryName";
import {Story} from "@storybook/react";


export default {
    title: 'Components/Controlled/OnOff stories',
    component: OnOff,
    argTypes: {
        value: {...getCategoryObj('main')},
        onClick: {...getCategoryObj('Event')},
    }
}

const callback = action("on or off clicked")

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>

export const OnMode = Template.bind({})
OnMode.args = {
    value: true,
    onClick: callback,
}

export const OffMode = Template.bind({})
OffMode.args = {
    value: false,
    onClick: callback,
}


export const ModeChanging: Story<OnOffPropsType> = () => {
    const [valueOnOff, setOnOff] = useState<boolean>(false)
    return <OnOff value={valueOnOff} onClick={setOnOff}/>
}
// ModeChanging.args = {
//     value: true,
// }
