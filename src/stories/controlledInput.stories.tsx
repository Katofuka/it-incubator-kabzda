import React, {ChangeEvent, useState} from 'react';


export default {
    title: 'Input/controlledInput',
    component: 'Input',

}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>

export const ControlledInput = () => {
    const [parentValue, setParenValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParenValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>

}
export const ControlledSelect = () => {
    const [parentValue, setParenValue] = useState<string>("0")
    const onChange = (e: ChangeEvent<HTMLSelectElement> ) => {
        setParenValue(e.currentTarget.value)
    }
    return<>
        <select value={parentValue} onChange={ onChange} >
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moskow</option>
            <option value="3">Kiev</option>
            <option value="4">LA</option>
        </select>
    </>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParenValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParenValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}