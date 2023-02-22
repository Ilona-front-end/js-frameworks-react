// import logo from './logo.svg';
// import './App.css';
import Heading from './components/Heading';
import Countries from '.components/Countries';

function App() {
  return (
    <div className="App">
      <Heading name="John" />
      <Countries content="Norway" />
      <Heading name="Ilona" />
      <Countries content="USA" />
    </div>
  );
}

export default App;
