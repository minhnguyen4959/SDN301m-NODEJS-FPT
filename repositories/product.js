import Products from "../models/product.js"

const create = async({name, price, description, category}) => {
    try {
        const newProduct = await Products.create({name, price, description, category});
        return newProduct._doc;
    } catch (error) {
        throw new Error(error.toString())
    }
}
const list = async() => {
    try {
        const products = await Products.find();
        console.log(products);
        return products;
    } catch (error) {
        throw new Error(error.toString())
    }
}
const findOne = async(id) => {
    try {
        const products = await Products.find({_id: id});
        console.log(products);
        return products;
    } catch (error) {
        throw new Error(error.toString())
    }
}
const update = async(name) => {
    try {
        const product = await Products.updateOne({name: name});
        console.log(product);
    } catch (error) {
        throw new Error(error.toString())
    }
}
const remove = async(name) => {
    try {
        const product = await Products.deleteOne({name: name});
        console.log(product);
    } catch (error) {
        throw new Error(error.toString())
    }
}


export default {
    create,
    list,
    update,
    remove,
}