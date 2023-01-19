import React, {ChangeEvent, useState} from 'react';

import {SelectComponent} from "./Select";

export default {
    title: 'Input/SelectMUI',
    component: 'SelectMUI',

}
const users = [
    {title:"Lale", value:"eq"},
    {title:"Ukkaa", value:"das"},
    {title:"Opead", value:"das"},
    {title:"Beeelo", value:"das"},
    {title:"Jeel", value:"das"},
]

export const ControlledSelect = () => {
    const [parentValue, setParenValue] = useState<string>("0")
    const onChange = (e: ChangeEvent<HTMLSelectElement> ) => {
        setParenValue(e.currentTarget.value)
    }
    return<>
        <SelectComponent value={parentValue} onChange={ onChange} items={users} />

    </>
}

