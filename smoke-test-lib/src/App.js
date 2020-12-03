import './App.css';
import add from './src-to-test/add'

function App() {

  const firstOperand = 1;
  const secondOperand = 2;
  const expectedResult = 3;

  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginLeft: '30vw'}}>
          <h2>Simple test for add.js:</h2>
          <p>
            The sum of <strong>{firstOperand}</strong> and <strong>{secondOperand}</strong> is <strong>{ add(firstOperand, secondOperand) }</strong>
          </p>
          <p>
            (Expected result: {expectedResult})
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
