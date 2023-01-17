type PageTitleType = {
    title: string
}

export const PageTitle = (props: PageTitleType) =>{
    const pageTitle = props.title
    return (
        <h1>{pageTitle}</h1>
    )
}