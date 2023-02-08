import {useEffect, useState} from "react";
import {ClockDigital} from "./ClockDigital/ClockDigital";
import {ClockAnalog} from "./ClockAnalog/ClockAnalog";

export type ClockPropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('tick')
        const intervalId = setInterval(() => {
                setDate(new Date())
            }
            , 1000)

        return () => {
            // При размонтировании/до обновления interval останавливаем
            // существующий интервал
            clearInterval(intervalId);
        }

    }, [])

    const getZeroString = (dateChanck: number) => {
        return dateChanck < 10 ? `0${dateChanck}` : dateChanck
    }

    let view;
    switch (props.mode) {
        case 'analog':
            view = <ClockAnalog date={date}/>;
            break;
        case 'digital':
        default:
            view = <ClockDigital getZeroString={getZeroString} date={date}/>
    }
    return <div>
        {view}
    </div>
}

//реализовать часы со стрелкой
