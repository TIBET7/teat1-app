import React from 'react';

import AddButton  from '../addButton/';
import DeleteButton from '../deleteButton';
import VisibleButton from '../visibleButton';
import HiddenButton from '../hiddenButton';
import SubmitButton from '../submitButton';
import ResetButton from '../resetButton';
import ElementsHeader from '../elementsHeader';
import Element from '../element';

import './app.scss';

const App = () => {
  return (
    <div className="elements">
      <AddButton />
      <DeleteButton />
      <VisibleButton />
      <HiddenButton />
      <SubmitButton />
      <ResetButton />
      <ElementsHeader />
      <Element />
    </div>
  );
};

export default App;