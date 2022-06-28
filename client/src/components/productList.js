import React from 'react';
import {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/products');
        console.log(response.data);
        setProduct(response.data);
    }

    return (
        <div>
            <Link to="/add-product"className="button is-primary mt-5 mb-5"> Add Product </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <button className="button is-small is-info mr-2">Edit</button>
                                <button className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;