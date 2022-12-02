import {useState} from "react";

type SCAccordionType = {
    title: string
}

export const SelfControlledAccordion = (props: SCAccordionType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const {
        title,
    } = props

     return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitleType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

const AccordionTitle = (props: AccordionTitleType) => {
    const {title, setCollapsed, collapsed} = props

    return (
        <h3 onClick={()=>{setCollapsed(!collapsed)}}>{title}</h3>
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