import {useState} from "react";

export type SelfControlledAccordionPropsType = {
    title: string
}

export const SelfControlledAccordion = (props: SelfControlledAccordionPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const {
        title,
    } = props

     return (
        <div>
            <AccordionTitle title={title} setCollapsed={()=>setCollapsed(!collapsed)} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
    collapsed: boolean
}

const AccordionTitle = (props: AccordionTitleType) => {
    const {title, setCollapsed} = props

    return (
        <h3 onClick={()=>{setCollapsed()}}>{title}</h3>
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