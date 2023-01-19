import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'Input/uncontrolledInput',
    component: 'Input',

}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState<string>("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input onChange={onChange}/>
        - {value}
    </>
}

export const UncontrolledInputWithGetValueByButtonPress = () => {
    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement> (null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>
            Save
        </button>
        actual value: {value}
    </>
}



