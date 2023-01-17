import {Rating, RatingValueType} from "../components/Accordion/Rating";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating stories',
    component: Rating,
}
const callback = action("rating was clicked")

export const EmptyStars = () => <Rating rating={1} onClick={callback}/>;
export const Rating1 = () => <Rating rating={1} onClick={callback}/>;
export const Rating2 = () => <Rating rating={2} onClick={callback}/>;
export const Rating3 = () => <Rating rating={3} onClick={callback}/>;
export const Rating4 = () => <Rating rating={4} onClick={callback}/>;
export const Rating5 = () => <Rating rating={5} onClick={callback}/>;

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating rating={rating} onClick={setRating} />
}


