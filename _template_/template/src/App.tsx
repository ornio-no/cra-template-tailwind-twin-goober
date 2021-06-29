import tw from 'twin.macro';
import { styled } from 'goober';
import logo from './logo.svg';
import './App.css';

const Heading = styled('h1')([
  { backgroundColor: 'tomato' },
  tw`mt-20 text-secondary p-3`,
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Heading>WITH GOOBER</Heading>
      </header>
    </div>
  );
}

export default App;
