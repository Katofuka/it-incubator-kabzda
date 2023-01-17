import React, { useState } from 'react';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Accordion/Rating';
import {PageTitle} from './components/Accordion/PageTitle';

import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";
import {SelfControlledOnOff} from "./components/SelfControlledOnOff/SelfControlledOnOff";

export const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [valueOnOff, setOnOff] = useState<boolean>(false)

    return (
        <div className={'app'}>

            <PageTitle title={"This is uncontrolled components"}/>
            <SelfControlledOnOff defaultValue={true}/>
            <SelfControlledAccordion title={"Menu"}/>
            <SelfControlledRating onChange={()=>5}/>

            <PageTitle title={"This is controlled components"}/>
            <OnOff value={valueOnOff} onClick={setOnOff}/>
            <Accordion title={"Navigation"} onClick={()=>setAccordionCollapsed(!accordionCollapsed)} collapsed={accordionCollapsed}/>
            <Rating rating={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}
