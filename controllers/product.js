import {productRepository} from '../repositories/index.js';

const getAllProducts = async(req, res) => {
    try {
        const result = await productRepository.list();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}
const getProductByObjectId = async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        console.log(typeof id);
        const product = await productRepository.findOne(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

// POST: create new product
const createProduct = async(req, res) => {
    try {
        const {name, price, description, category} = req.body;
        const result = await productRepository.create({name, price, description, category});
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString(),
        });
    }
}

 
export default {
    getAllProducts,
    getProductByObjectId,
    createProduct
} ;
    