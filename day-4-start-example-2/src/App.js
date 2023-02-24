import './App.css';

function App() {
  let isLogged = false;

  let content;

  if (isLogged) {
    content = <div>
      <p>Name:</p>
      <p>Address:</p>
      <p>Phone:</p>
    </div>
  } else {
    content = <h1>Log in form</h1>
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
