import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from "./components/productList";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
