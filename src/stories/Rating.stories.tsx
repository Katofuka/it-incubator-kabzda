import {Rating, RatingPropsType, RatingValueType} from "../components/Accordion/Rating";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {getCategoryObj} from "../common/categoryName";

export default {
    title: 'Components/Controlled/Rating',
    component: Rating,
    argTypes: {
        rating: {...getCategoryObj('main')},
        onClick: {...getCategoryObj('Event')},
    }
}
const callback = action("rating was clicked")

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

export const Rating1 = Template.bind({})
Rating1.args = {
    onClick: callback,
    rating: 1,
}

export const Rating2 = Template.bind({})
Rating2.args = {
    onClick: callback,
    rating: 1,
}

export const Rating3 = Template.bind({})
Rating3.args = {
    onClick: callback,
    rating: 1,
}

export const Rating4 = Template.bind({})
Rating4.args = {
    onClick: callback,
    rating: 1,
}

export const Rating5 = Template.bind({})
Rating5.args = {
    onClick: callback,
    rating: 1,
}

export const RatingChanging: Story<RatingPropsType> = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating rating={rating} onClick={setRating} />
}
// RatingChanging.args = {
//    rating: 2,
// }



