import React from 'react';

// style
import style from './App.module.css'

// components
import Register from './components/Register';

const App = () => {
     return (
          <div className={style.container}>
               <Register />
          </div>
     );
};

export default App;