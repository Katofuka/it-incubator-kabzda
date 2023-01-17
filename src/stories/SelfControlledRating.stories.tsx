import React from 'react';


import {SelfControlledRating} from "../components/SelfControlledRating/SelfControlledRating";
import {action} from "@storybook/addon-actions";



export default {
    title: 'SelfControlledRating',
    component: SelfControlledRating,
}

const callback = action("rating changed inside component")

export const RatingChanging1 = () => <SelfControlledRating defaultValue={1} onChange={callback}/>
export const RatingChanging2 = () => <SelfControlledRating defaultValue={2} onChange={callback}/>
export const RatingChanging3 = () => <SelfControlledRating defaultValue={3} onChange={callback}/>
export const RatingChanging4 = () => <SelfControlledRating defaultValue={4} onChange={callback}/>
export const RatingChanging5 = () => <SelfControlledRating defaultValue={5} onChange={callback}/>


