import React, {useState} from 'react';
import './App.css';
import BoxContext from './contexts/BoxContext';
import BoxWrapper from './components/BoxWrapper';
import FormWrapper from './components/FormWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [boxen, setBoxen] = useState([]);
  const [color, setColor] = useState("")
  // Why did we put an empty string in one and not the other

  return (
    <BoxContext.Provider value={{color,setColor, boxen, setBoxen}}>
      {/* we are passing it in as an object, see how the key is missing a value? it will add itself to a value, watch */}
      <FormWrapper />
      <BoxWrapper />
    </BoxContext.Provider>
  );
}

export default App;
