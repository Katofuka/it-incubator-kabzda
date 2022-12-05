import { useState } from "react";
type RatingType = {
    rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export const SelfControlledRating = (props: RatingType) => {
    const rating = props.rating
    const [star, setStar] = useState<Array<boolean>>([false, false, false, false, false,])   
    
    const stars = star.map((item, key) => {        
        return(
            <Star id={key+1} setStar={setStar} star={star} selected={item} />
        )
    })

    return (
        <div>
            {stars}
        </div>
    )
}

type StarType = {
    setStar: ((star: Array<boolean>) => void)
    star: Array<boolean>
    id: number
    selected: boolean
}

function Star(props: StarType) {
    const { star, setStar, id, selected } = props

    const onClickButtonHandler = () => {
        setStar(star.map((item, key) => key < id ? true : false))
    }

    return (
        selected ?
            <span onClick={onClickButtonHandler}>★ </span>
            :
            <span onClick={onClickButtonHandler}>☆ </span>
    )
}
