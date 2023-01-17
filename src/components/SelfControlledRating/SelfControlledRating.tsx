import {useState} from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type SelfControlledType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const SelfControlledRating: React.FC<SelfControlledType> = ({defaultValue, onChange}) => {

    const [star, setStar] = useState<RatingValueType>(defaultValue ? defaultValue : 0)
    return (<div>
            <Star setStar={() => {
                setStar(1);
                onChange(1)
            }} selected={star > 0}/>
            <Star setStar={() => {
                setStar(2);
                onChange(2)
            }} selected={star > 1}/>
            <Star setStar={() => {
                setStar(3);
                onChange(3)
            }} selected={star > 2}/>
            <Star setStar={() => {
                setStar(4);
                onChange(4)
            }} selected={star > 3}/>
            <Star setStar={() => {
                setStar(5);
                onChange(5)
            }} selected={star > 4}/>
        </div>
    )
}


type StarType = {
    setStar: () => void
    selected: boolean
}

function Star(props: StarType) {
    const {setStar, selected} = props

    return (
        <span onClick={setStar}>{selected ? '★' : '☆'}</span>
    )
}
