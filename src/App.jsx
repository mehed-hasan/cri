import React from 'react';
import Cards from './components/Cards';
import Useref from './components/Useref';
import Ball from './components/Ball';
import Bowler from './components/Bowler';
import Field from './components/Field';

const App = () => {
  return (
    <div>
      {/* <Cards/> */}
      {/* <Useref/> */}
      <Bowler/>
      <Field/>
    </div>
  );
};

export default App;