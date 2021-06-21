import logo from './logo.svg';
import './App.css';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing world</h1>
        <h2>Sub heading 2</h2>
        <h3>Sub heading 3</h3>
        <h4>Sub heading 4</h4>
        <p>This is my text</p>
        <Car />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
