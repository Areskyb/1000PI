import React, { useState, useMemo } from "react";
import NavBar from "./shared/NavBar/NavBar";
import "./App.css";
import GameConatainer from "./containers/GameContainer";
import { UserContext } from "./UserContext";
import { WelcomePage } from "./WelcomePage/WelcomePage";
import { OpenContext } from "./OpenContext";

function App() {
  const [userValue, setUserValue] = useState(null);
  const providerValue = useMemo(() => ({ userValue, setUserValue }), [
    userValue,
    setUserValue,
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const isOpenValue = useMemo(() => ({ isOpen, setIsOpen }), [
    isOpen,
    setIsOpen,
  ]);

  return (
    <>
      <UserContext.Provider value={providerValue}>
        <OpenContext.Provider value={isOpenValue}>
          <NavBar></NavBar>
          {userValue ? (
            <GameConatainer></GameConatainer>
          ) : (
            <WelcomePage></WelcomePage>
          )}
        </OpenContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
