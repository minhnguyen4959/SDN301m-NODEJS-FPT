import  mongoose ,{Schema}  from 'mongoose';

const productSchema = new Schema({ 
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be greater than zero"],
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

//generate product model -> collection in db
const Products = mongoose.model('product', productSchema);
export default Products;
