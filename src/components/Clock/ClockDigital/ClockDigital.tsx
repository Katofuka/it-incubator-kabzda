type DigitalClockPropsType = {
    getZeroString: (dateChanck: number) => string|number
    date: Date
}

export const ClockDigital: React.FC<DigitalClockPropsType> = (props) => {
    return (
        <div>
            <span>{props.getZeroString(props.date.getHours())}</span>:
            <span>{props.getZeroString(props.date.getMinutes())} </span>:
            <span>{props.getZeroString(props.date.getSeconds())}</span>
        </div>
    )
}