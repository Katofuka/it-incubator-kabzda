import React from 'react';
import {SelfControlledPropsType, SelfControlledRating} from "./SelfControlledRating";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {getCategoryObj} from "../../common/categoryName";


export default {
    title: 'Components/Uncontrolled/SelfControlledRating',
    component: SelfControlledRating,
    argTypes: {
        defaultValue: {...getCategoryObj('main')},
        onChange: {...getCategoryObj('Event')},
    }
}

const callback = action("rating changed inside component")
const Template: Story<SelfControlledPropsType> = (args) => <SelfControlledRating {...args} />


export const RatingChanging1 = Template.bind({})
RatingChanging1.args = {
    defaultValue: 1,
    onChange: callback
}

export const RatingChanging2 = Template.bind({})
RatingChanging2.args = {
    defaultValue: 2,
    onChange: callback
}

export const RatingChanging3 = Template.bind({})
RatingChanging3.args = {
    defaultValue: 3,
    onChange: callback
}

export const RatingChanging4 = Template.bind({})
RatingChanging4.args = {
    defaultValue: 4,
    onChange: callback
}

export const RatingChanging5 = Template.bind({})
RatingChanging5.args = {
    defaultValue: 5,
    onChange: callback
}

// export const OnMode = Template.bind({})
