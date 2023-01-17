import React, {useState} from "react";
import {RatingValueType} from "../Accordion/Rating";
import {Story} from "@storybook/react";
import {
    SelfControlledAccordion,
    SelfControlledAccordionPropsType
} from "../SelfControlledAccordion/SelfControlledAccordion";

export type SelfControlledPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const SelfControlledRating: React.FC<SelfControlledPropsType> = ({defaultValue, onChange}) => {

    const [star, setStar] = useState<RatingValueType>(defaultValue ? defaultValue : 0)
    return (<div>
            <Star setStar={() => {
                setStar(1);
                onChange(1)
            }} selected={star > 0}/>
            <Star setStar={() => {
                setStar(2);
                onChange(2)
            }} selected={star > 1}/>
            <Star setStar={() => {
                setStar(3);
                onChange(3)
            }} selected={star > 2}/>
            <Star setStar={() => {
                setStar(4);
                onChange(4)
            }} selected={star > 3}/>
            <Star setStar={() => {
                setStar(5);
                onChange(5)
            }} selected={star > 4}/>
        </div>
    )
}


type StarType = {
    setStar: () => void
    selected: boolean
}

function Star(props: StarType) {
    const {setStar, selected} = props

    return (
        <span onClick={setStar}>{selected ? '★' : '☆'}</span>
    )
}


const Template: Story<SelfControlledAccordionPropsType> = (args) => <SelfControlledAccordion {...args}/>

export const AccordionChanging = Template.bind({})
AccordionChanging.args = {
    title: "Collapsed",
}
