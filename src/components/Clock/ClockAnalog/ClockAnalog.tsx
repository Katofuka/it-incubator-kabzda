import React from 'react'
import style from './ClockAnalog.module.css'


type AnalogClockPropsType = {
    date: Date
}

export const ClockAnalog: React.FC<AnalogClockPropsType> = (props)=> {
    const seconds = props.date.getSeconds();
    // const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondsDegrees = (seconds * 6)+90;
    const secondHandTransform = {transform :`rotate(${secondsDegrees}deg)`};

    const mins = props.date.getMinutes();
    const minutesDegrees = (mins* 6)+90;
    const minHandTransform = {transform :`rotate(${minutesDegrees}deg)`};


    const hours = props.date.getHours();
    const hoursDegrees = (hours * 30)+90;
    const hourHandTransform = {transform :`rotate(${hoursDegrees}deg)`};

    return (
        <div className={style.clock}>
            <div className={style.clockFace}>
                <div className={`${style.hand} ${style.hourHand}`} style={hourHandTransform}></div>
                <div className={`${style.hand} ${style.minHand}`} style={minHandTransform}></div>
                <div className={`${style.hand} ${style.secondHand}`} style={secondHandTransform}></div>
            </div>
        </div>
    )
}