import Section from './Layout/Section';
import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/NavBar';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <NavBar />
      <Section><h2>Hello There!</h2></Section>
    </div>
  );
}

export default App;
