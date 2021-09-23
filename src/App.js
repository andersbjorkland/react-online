import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header';
import LightsContext from './Hooks/LightsContext';
import { lightsContext, scrollContext } from './configuration/context';
import { useEffect, useRef, useState } from 'react';
import Home from './Sections/Home';
import Showcases from './Sections/Showcases';
import Articles from './Sections/Articles';
import About from './Sections/About';
import Contact from './Sections/Contact';
import ScrollContext from './Hooks/ScrollContext';
import timedClickHandler from './utilities/timedClickHandler';


function App() {

  const [lightsState, setLightsState] = useState({...lightsContext});
  const [scrollState, setScrollState] = useState({...scrollContext});

  const homeRef = useRef(null);
  const showcasesRef = useRef(null);
  const articlesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const toggleLight = () => {
    setLightsState({...lightsState, neonActivated: !lightsState.neonActivated});
  }

  const getViewValues = (component) => {
    
    const y1 = window.scrollY + component.getBoundingClientRect().y;
    const y2 = y1 + component.getBoundingClientRect().height;

    const viewY1 = window.scrollY;
    const viewY2 = window.scrollY + window.innerHeight;

    if (y1 > viewY2 || y2 < viewY1) {
      return { 
        portionOfViewport: 0,
        portionOfComponent: 0
      };
    }

    if (y2 > viewY2 + window.innerHeight) {
      return { 
        portionOfViewport: 0,
        portionOfComponent: 0
      };
    }

    const portionOfViewport = (Math.min(y2, viewY2) - Math.max(y1, viewY1)) / window.innerHeight;
    const portionOfComponent = (Math.min(y2, viewY2) - Math.max(y1, viewY1)) / component.getBoundingClientRect().height;
    return { 
      portionOfViewport: portionOfViewport,
      portionOfComponent: portionOfComponent,
      componentId: component.id
    };
  }

  useEffect(() => {
    const menuScrollUpdater = () => {
      timedClickHandler(() => {
        updateCurrentSection();
      }, 100);
    }

    const updateCurrentSection = () => {
      const homeValues = getViewValues(homeRef.current);
      const showcasesValues = getViewValues(showcasesRef.current);
      const articlesValues = getViewValues(articlesRef.current);
      const aboutValues = getViewValues(aboutRef.current);
      const contactValues = getViewValues(contactRef.current);

      const sections = [homeValues, showcasesValues, articlesValues, aboutValues, contactValues];
      const current = sections.reduce((previousLeader, section) => {
        if (section.portionOfViewport > previousLeader.portionOfViewport ) {
          return section;
        } else if (section.portionOfViewport > 0.3 && section.portionOfComponent > previousLeader.portionOfViewport) {
          return section;
        } else {
          return previousLeader;
        }
      });

      setScrollState({scrolledTo: current.componentId ?? scrollState.scrolledTo});
    }

      window.addEventListener('scroll', menuScrollUpdater);
  }, [scrollState]);

  return (
    <ScrollContext.Provider value={{...scrollState}}>
      <LightsContext.Provider value={{...lightsState, toggleLight: toggleLight}}>
        <div className="app-wrapper">
          <GlobalStyle />
          <Header />
          <Home ref={homeRef} />
          <Showcases ref={showcasesRef} />
          <Articles ref={articlesRef} />
          <About ref={aboutRef} />
          <Contact ref={contactRef} />
        </div>
      </LightsContext.Provider>
    </ScrollContext.Provider>
  );
}

export default App;
