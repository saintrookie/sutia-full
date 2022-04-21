const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        categories: { type: Array },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        size: { type: Array },
        color: { type: Array },
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true },
        description: { type: String, required: true },
        inStock: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }

)

module.exports = mongoose.model("products", productSchema);