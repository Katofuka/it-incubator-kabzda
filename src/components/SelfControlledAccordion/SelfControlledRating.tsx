type RatingType = {
    rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export const SelfControlledRating = (props: RatingType) => {
    const rating = props.rating
    return (
        <div>
            <Star id={1} selected={rating > 0}/>
            <Star id={2} selected={rating > 1}/>
            <Star id={3} selected={rating > 2}/>
            <Star id={4} selected={rating > 3}/>
            <Star id={5} selected={rating > 4}/>
        </div>
    )
}

type StarType = {
    selected: boolean;
    id: 1 | 2 | 3 | 4 | 5;
}

function Star(props: StarType) {

    const {selected, id} = props
    return (
        selected ?
            <span onClick={() => {console.log(id)}}>
            <b>Star </b>
        </span> :
            <span onClick={() => {console.log(id)}}>Star </span>
    )
}
