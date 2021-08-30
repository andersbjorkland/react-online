import Section from './Layout/Section';
import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Section><h2>Hello There!</h2></Section>
    </div>
  );
}

export default App;
