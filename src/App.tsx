import React from 'react';
import { Accordion } from './components/Accordion';
import { Rating } from './components/Rating';
import { PageTitle } from './components/PageTitle';

import './App.css';

export const App = () => {
  return (
    <div>
      <PageTitle title={"This is component"} />
      <Rating rating={4}/>
      <Accordion title={"Menu"} collapsed={true} />
      <Accordion title={"Navigation"} collapsed={false} />
      <Rating rating={2}/>
    </div>
  );
}
