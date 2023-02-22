// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Heading name="John" age="10" fontSize="20" />
      <Countries content="Norway" />
      <Heading name="Ilona" age="2" />
      <Countries content="USA" />
    </div>
  );
}

export default App;
