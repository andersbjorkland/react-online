import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header';
import LightsContext from './Hooks/LightsContext';
import { lightsContext } from './configuration/context';
import { useState } from 'react';
import Section from './Layout/Section';
import HeadingContainer from './Components/HeadingContainer';


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
        <Section>
          <HeadingContainer><h1><span className="md-text">I design, develop and deploy</span><br /> modern web solutions</h1></HeadingContainer>
        </Section>
      </div>
    </LightsContext.Provider>
  );
}

export default App;
