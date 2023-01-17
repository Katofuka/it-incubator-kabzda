import React from 'react';


import {SelfControlledOnOff} from "../components/SelfControlledOnOff/SelfControlledOnOff";



export default {
    title: 'SelfControlledOnOff',
    component: SelfControlledOnOff,
}


export const OnMode = () => <SelfControlledOnOff defaultValue={true}/>
export const OffMode = () => <SelfControlledOnOff defaultValue={false}/>
export const BugMode = () => <div>Unsinc when change defaultValue when already rendered</div>
