type RatingType = {
    rating: 0| 1 | 2 | 3 | 4 | 5;
}

export const Rating = (props: RatingType) => {
    const rating = props.rating
    return (
        <div>
            <Star selected={rating > 0}/>
            <Star selected={rating > 1}/>
            <Star selected={rating > 2}/>
            <Star selected={rating > 3}/>
            <Star selected={rating > 4}/>
        </div>
    )
}

type StarType = {
    selected: boolean;
}

function Star(props: StarType) {
    const selected = props.selected
    if (selected)
        return <span><b>Star</b> </span>
    else
        return <span>Star </span>

}
