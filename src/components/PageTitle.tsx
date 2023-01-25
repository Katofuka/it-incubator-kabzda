import {memo} from "react";

type PageTitleType = {
    title: string
}

export const PageTitle = memo((props: PageTitleType) =>{
    const pageTitle = props.title
    return (
        <h1>{pageTitle}</h1>
    )
})