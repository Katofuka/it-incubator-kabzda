 import React, {useState} from 'react';
import {Accordion} from "../components/Accordion/Accordion";
 import {action} from "@storybook/addon-actions";


export default {
     title: 'Accordion',
     component: Accordion,
 }
 const callback = action("accordion mode change event fired")

 export const CollapsedMode = () => <Accordion title={"Collapsed"} onClick={callback} collapsed={false}/>;
 export const UncollapsedMode = () => <Accordion title={"Uncollapsed"} onClick={callback} collapsed={true}/>;


 export const AccordionChanging = () => {
     const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
     return <Accordion title={"Changing accordion"} onClick={()=>setAccordionCollapsed(!accordionCollapsed)} collapsed={accordionCollapsed}/>
 }


