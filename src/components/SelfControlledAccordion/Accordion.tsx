type AccordionType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {
    const {
        title,
        collapsed
    } = props
    
     return (
        <div>
            <AccordionTitle title={title} />
            {collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitleType = {
    title: string
}

const AccordionTitle = (props: AccordionTitleType) => {
    const title = props.title
    return (
        <h3>{title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}