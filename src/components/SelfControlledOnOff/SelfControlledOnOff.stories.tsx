import React from 'react';
import {SelfControlledOnOff} from "./SelfControlledOnOff";
import {getCategoryObj} from "../../common/categoryName";
import {Story} from "@storybook/react";

export default {
    title: 'Components/Uncontrolled/SelfControlledOnOff',
    component: SelfControlledOnOff,
    argTypes: {
        defaultValue: {...getCategoryObj('main')},
    }
}

const Template: Story<{defaultValue?: boolean}> = (args) => <SelfControlledOnOff {...args}/>

export const OnMode = Template.bind({})
OnMode.args = {
    defaultValue: true,
}

export const OffMode = Template.bind({})
OffMode.args = {
    defaultValue: false,
}

export const BugMode = () => <div>Unsinc when change defaultValue when already rendered</div>