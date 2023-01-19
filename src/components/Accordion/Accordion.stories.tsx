import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {getCategoryObj} from "../../common/categoryName";


export default {
    title: 'Components/Controlled/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...getCategoryObj('Color')
        },
        title: {
            ...getCategoryObj('Main')
        },
        onClick: {
            ...getCategoryObj('Event')
        },
        collapsed: {
            ...getCategoryObj('Main')
        },
    }

}
const callback = action("accordion mode change event fired")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const users = [
    {title:"Lale", value:"eq"},
    {title:"Ukkaa", value:"das"},
    {title:"Opead", value:"das"},
    {title:"Beeelo", value:"das"},
    {title:"Jeel", value:"das"},
]

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    title: "Collapsed",
    onClick: callback,
    collapsed: false,
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    title: "Collapsed",
    onClick: callback,
    collapsed: true,
    items: users,
    onClickItems: action("title")
}

export const AccordionChanging: Story<AccordionPropsType> = (args) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return <Accordion {...args}
                      onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                      collapsed={accordionCollapsed}/>
}
AccordionChanging.args = {
    title: "Changing accordion",
    items: users,
    onClickItems: action("title")
}


