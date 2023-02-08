import {useEffect, useState} from "react";

export default {
    title: 'useEffect memo'
}

export const SimpleExample = () => {
    console.log('Simple Example')
    const [fake, setFake] = useState(1)

    const [counter, setCounter] = useState(1)


    //Сначала регистрируется useEffect, что он есть
    // отрисовывается разметка из return,
    // после этого выполняется callback размещённый в useEffect
    useEffect(()=>{   //все грязные дела в чистой функции можно делать в useEffect()
        console.log('useEffect')
        document.title = counter.toString()
        //api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById()
        // document.title = "User"
    }, [counter]) //вызывается при первом рендере и если изменится состояние counter,
    // [] - срабатывает при первом рендере компоненты, аналог componentDidMount

    return <>
        {/*в setCounter можно передать callback, которая будет изменять локальный стейт */}
        hello, {counter}
        <button onClick={()=> setFake(counter +1)}>+</button>


    </>
}


export const SetTimeoutExample = () => {
    console.log('Set timeout Example')
    const [fake, setFake] = useState(1)

    const [counter, setCounter] = useState(1)
    //const [intervalId, setIntervalId] = useState(0)

    let intervalId:ReturnType<typeof setInterval>

    // useEffect(()=>{
    //     setTimeout(()=> {
    //         console.log('setTimeout')
    //         document.title= counter.toString()
    //     }, 1000)
    //
    //
    // }, [counter])

    useEffect(()=>{

    }, [])

    return <>

        hello, counter: {counter} fake: {fake}
        <button onClick={()=> setFake(fake+1)}>+</button>
        <button onClick={()=> clearInterval(intervalId)}>Stop</button>


    </>
}


