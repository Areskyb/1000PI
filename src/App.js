import React, {useState, useMemo} from 'react';
import NavBar from './shared/NavBar/NavBar'
import './App.css';
import GameConatainer from './containers/GameContainer';
import { UserContext } from './UserContext';

function App() {
  const [userValue, setUserValue] = useState(null);

  const providerValue = useMemo( () => ({userValue, setUserValue}), [userValue,setUserValue])


  return (
    <>
   <UserContext.Provider value = {providerValue}>
   <NavBar></NavBar>
   <GameConatainer></GameConatainer>
   </UserContext.Provider>
   </>
  );
}

export default App;
