import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from "./components/productList";
import AddProduct from "./components/addProduct";
import EditProduct from './components/editProduct';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/edit-product/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
