import React, {useState, useMemo} from 'react';
import NavBar from './shared/NavBar/NavBar'
import './App.css';
import GameConatainer from './containers/GameContainer';
import { UserContext } from './UserContext';
import { Typography } from '@material-ui/core';

function App() {
  const [userValue, setUserValue] = useState(null);
  const providerValue = useMemo( () => ({userValue, setUserValue}), [userValue,setUserValue])

  
  return (
    <>
   <UserContext.Provider value = {providerValue}>
   <NavBar></NavBar>
    {userValue? <GameConatainer></GameConatainer> : <Typography variant = 'h1'>Welcome page</Typography>}
   </UserContext.Provider>
   </>
  );
}

export default App;
