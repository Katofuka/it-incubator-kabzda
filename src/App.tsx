import React from 'react';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Accordion/Rating';
import {PageTitle} from './components/Accordion/PageTitle';

import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledAccordion/SelfControlledRating";

export const App = () => {
    return (
        <div>
            <OnOff on={false}/>
            <OnOff on={true}/>
            <PageTitle title={"This is component"}/>
            <SelfControlledAccordion title={"Menu"}/>
            <SelfControlledRating rating={4}/>
            <SelfControlledAccordion title={"Navigation"}/>
            <SelfControlledRating rating={2}/>
        </div>
    );
}
