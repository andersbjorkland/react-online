import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header';
import LightsContext from './Hooks/LightsContext';
import { lightsContext } from './configuration/context';
import { useState } from 'react';
import Home from './Sections/Home';
import Showcases from './Sections/Showcases';
import Articles from './Sections/Articles';


function App() {

  const [lightsState, setLightsState] = useState({...lightsContext});

  const toggleLight = () => {
    setLightsState({...lightsState, neonActivated: !lightsState.neonActivated});
  }

  return (
    <LightsContext.Provider value={{...lightsState, toggleLight: toggleLight}}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Home />
        <Showcases />
        <Articles />
      </div>
    </LightsContext.Provider>
  );
}

export default App;
