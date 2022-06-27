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


export const getProduct = async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(products[0]);
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            message: 'Product created successfully',
        });
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Product updated successfully',
        });
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Product deleted successfully',
        });
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}