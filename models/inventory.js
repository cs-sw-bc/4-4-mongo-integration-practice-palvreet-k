import mongoose, { mongo } from "mongoose";

const inventorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    sku: {type: String},
    qunatity: {type: Number},
    price: {type: Number}
})

export default mongoose.model('inventory', inventorySchema);