import React from 'react';
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <p className={classes.test}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
