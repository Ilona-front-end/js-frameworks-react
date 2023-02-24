// example 1
// import './App.css';

// function App() {
//   let isLogged = false;

//   let content;

//   if (isLogged) {
//     content = <div>
//       <p>Name:</p>
//       <p>Address:</p>
//       <p>Phone:</p>
//     </div>
//   } else {
//     content = <h1>Log in form</h1>
//   }

//   return (
//     <div className="App">
//       {content}
//     </div>
//   );
// }

// export default App;



// example 2
import './App.css';

function App() {
  let isLogged = true;

  let content;

  // ternary operator
  return (
    <div className="App">
      {content}
      <div>{isLogged ? <div>You are logged in</div> : <h1>Log in form</h1>}</div>
    </div>
  )
}

export default App;

// ternary oparator starting point
/* <div className="App">
  {content}
  <div>{isLogged ? : }</div>
</div>
  ); */