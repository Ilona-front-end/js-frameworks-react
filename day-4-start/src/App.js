import './App.css';

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'TV', price: 1005 },
  { id: 3, name: 'Phone', price: 1300 },
  { id: 4, name: 'AI', price: 2000 },
]

function App() {
  return (
    <div className="App">
      <ul>{products.map((product) => (
        <li>{product.name}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
