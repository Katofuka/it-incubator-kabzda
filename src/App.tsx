import React from 'react';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Accordion/Rating';
import { PageTitle } from './components/Accordion/PageTitle';

import './App.css';
import {OnOff} from "./components/OnOff/OnOff";

export const App = () => {
  return (
    <div>
        <OnOff on={false} />
        <OnOff on={true} />
      {/*<PageTitle title={"This is component"} />*/}
      {/*<Rating rating={4}/>*/}
      {/*<Accordion title={"Menu"} collapsed={true} />*/}
      {/*<Accordion title={"Navigation"} collapsed={false} />*/}
      {/*<Rating rating={2}/>*/}
    </div>
  );
}
