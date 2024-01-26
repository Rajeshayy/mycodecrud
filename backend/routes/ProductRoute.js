import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/Products.js"
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/products',verifyUser,adminOnly,getProducts);
router.get('/products/:id',verifyUser,adminOnly,getProductById);
router.post('/products',verifyUser,createProduct);
router.patch('/products/:id',verifyUser,adminOnly,updateProduct);
router.delete('/products/:id',verifyUser,adminOnly,deleteProduct);

export default router;
