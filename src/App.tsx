import React, {useState} from 'react';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Accordion/Rating';
import {PageTitle} from './components/Accordion/PageTitle';

import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";
import {SelfControlledOnOff} from "./components/SelfControlledOnOff/SelfControlledOnOff";
import {SelectComponent} from "./components/Select/Select";


export const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [valueOnOff, setOnOff] = useState<boolean>(false)


    const users = [
        {title: "Lale", value: "eq"},
        {title: "Ukkaa", value: "das"},
        {title: "Opead", value: "das"},
        {title: "Beeelo", value: "das"},
        {title: "Jeel", value: "das"},
    ]

    const [parentValue, setParenValue] = useState<string>("0")
    return (
        <div className={'app'}>

            <PageTitle title={"This is uncontrolled components"}/>
            <SelfControlledOnOff defaultValue={true}/>
            <SelfControlledAccordion title={"Menu"}/>
            <SelfControlledRating onChange={() => 5}/>

            <PageTitle title={"This is controlled components"}/>
            <OnOff value={valueOnOff} onClick={setOnOff}/>
            <Accordion title={"Navigation"}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                       collapsed={accordionCollapsed}
                       items={users}
                       onClickItems={x => x}
            />
            <Rating rating={ratingValue} onClick={setRatingValue}/>

            <SelectComponent value={parentValue} onChange={setParenValue} items={users}/>
        </div>
    );
}

