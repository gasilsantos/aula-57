import './App.css';
import StateFunction from './components/StateFunction';
import StateClass from './components/StateClass';
import StatProps from './components/StateProps';
import FormExample from './components/FormExample';
import FormMultiple from './components/FormMultiple';
function App() {
  return (
    <div className="App">
      <StateFunction/>
      <StateClass/>
      <StatProps cor = "roxo"/>
      <FormExample/>
      <FormMultiple/>
    </div>
  );
}

export default App;
