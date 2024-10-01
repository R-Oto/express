import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
    price:{
        type:Number,
        required:[true, 'price is required']
    },
}, {timestamps:true})

const ProductModel = mongoose.model("Product", productSchema)

export default ProductModel;