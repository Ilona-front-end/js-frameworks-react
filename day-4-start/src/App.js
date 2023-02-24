// example 1
// import './App.css';

// // Hesh advised for security to use string on price and not number
// const products = [
//   { id: 1, name: 'Laptop', price: '1000' },
//   { id: 2, name: 'TV', price: '1005' },
//   { id: 3, name: 'Phone', price: '1300' },
//   { id: 4, name: 'AI', price: '2000' },
// ]

// function App() {
//   return (
//     <div className="App">
//       <ul>{products.map((product) => (
//         <li key={product.id}>{product.name}: {product.price} NOK</li>
//       ))}
//       </ul>
//     </div>
//   );
// }

// export default App;





// example 2 
// import './App.css';

// // Hesh advised for security to use string on price and not number
// // if you do not have an id use index as key
// const products = [
//   { id: 3423423, name: 'Laptop', price: '1000' }, // index 0
//   { id: 4546456, name: 'TV', price: '1005' }, // index 1
//   { id: 6757, name: 'Phone', price: '1300' }, // index 2
//   { id: 1232, name: 'AI', price: '2000' }, // index 3
// ]

// function App() {
//   return (
//     <div className="App">
//       <ul>{products.map((product, index) => (
//         <li key={product.id}>{product.name}: {product.price} NOK</li>
//       ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




// example 3
import './App.css';

// Hesh advised for security to use string on price and not number
const products = [
  { id: 1, name: 'Laptop', price: '1000' },
  { id: 2, name: 'TV', price: '1005' },
  { id: 3, name: 'Phone', price: '1300' },
  { id: 4, name: 'AI', price: '2000' },
]

function App() {

  const productList = products.map((product) => (
    <li key={product.id}>{product.name}: {product.price} NOK</li>
  ))

  return (
    <div className="App">
      <ul>{productList}
      </ul>
    </div>
  );
}

export default App;
