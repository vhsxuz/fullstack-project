import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}