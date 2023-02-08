import {useState} from "react";

export default {
    title: 'useState memo'
}

const generateData = () => {
    console.log('generate data')
    return 1;

}

export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData, [])

    //Если в useState поместить callback который возвращает нужное initial значение,
    // callback обработается один раз, по аналогии с useMemo
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        {/*в setCounter можно передать callback, которая будет изменять локальный стейт */}
        <button onClick={()=> setCounter(changer)}>+</button>

        {counter}

    </>
}

