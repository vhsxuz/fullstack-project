import express from 'express';
import { 
    getAllProducts, 
    getProduct, 
    createProduct,
    updateProduct,  
    deleteProduct,
} from '../controller/productController.js'; 

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;