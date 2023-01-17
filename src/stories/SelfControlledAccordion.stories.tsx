import React from 'react';
import {
    SelfControlledAccordion,
    SelfControlledAccordionPropsType
} from "../components/SelfControlledAccordion/SelfControlledAccordion";
import {getCategoryObj} from "../common/categoryName";
import {Story} from "@storybook/react";



export default {
    title: 'Components/Uncontrolled/SelfControlledAccordion',
    component: SelfControlledAccordion,
    argTypes: {
        title: {...getCategoryObj('Main')},
    }
}

const Template: Story<SelfControlledAccordionPropsType> = (args) => <SelfControlledAccordion {...args}/>

export const AccordionChanging = Template.bind({})
AccordionChanging.args = {
    title: "Collapsed",
}


