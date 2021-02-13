import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 
    <div className="InputSection">
      <label class="mdc-text-field mdc-text-field--filled">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="my-label-id">Hint text</span>
        <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id"></input>
        <span class="mdc-line-ripple"></span>
      </label>
    </div>
  );
}

export default App;
