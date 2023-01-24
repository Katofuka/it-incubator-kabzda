import React, {useState} from 'react';

import {SelectComponent} from "./Select";

export default {
    title: 'Input/SelectMUI',
    component: 'SelectMUI',

}
const users = [
    {title: "Lale", value: "1"},
    {title: "Ukkaa", value: "2"},
    {title: "Opead", value: "3"},
    {title: "Beeelo", value: "4"},
    {title: "Jeel", value: "5"},
]

export const WithValue = () => {
    const [parentValue, setParenValue] = useState<string>("1")

    return <>
        <SelectComponent value={parentValue} items={users} onChange={setParenValue}/>

    </>
}

export const WithoutValue = () => {
    const [parentValue, setParenValue] = useState<string>("1")


    return <>
        <SelectComponent value={null} items={users} onChange={setParenValue}/>

    </>
}


