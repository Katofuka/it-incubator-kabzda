import {memo, useReducer} from "react";
import {reducer} from "./Reducer";

export type SelfControlledAccordionPropsType = {
    title: string
}


export const SelfControlledAccordion = (props: SelfControlledAccordionPropsType) => {
   //const [collapsed, setCollapsed] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    const {
        title,
    } = props

     return (
        <div>
            <AccordionTitle title={title} setCollapsed={()=>dispatch({type: 'TOOGLE_COLLAPSED'})} collapsed={state.collapsed}/>
            {state.collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
    collapsed: boolean
}

const AccordionTitle = memo((props: AccordionTitleType) => {
    const {title, setCollapsed} = props

    return (
        <h3 onClick={()=>{setCollapsed()}}>{title}</h3>
    )
})

const AccordionBody = memo(() => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
})