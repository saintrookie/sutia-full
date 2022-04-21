const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    products: [
        {   
            productId:  { type: String },
            slug: { type: String },
            quantity: { type: Number },
        }
    ],
    shippingAddress: {
        fullName:{ type: String },
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    paymentMethod: { type: String },
    paymentResult: { id: String, status: String, email_address: String},
    amount: { type: Number, required: true },
    shippingAmount: { type: Number },
    taxAmount: { type: Number },
    totalAmount: { type: Number },
    status: { type: String, default:"pending" },
    isDeliver: { type: Boolean, default:false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },

}, {
    timestamps: true
});

module.exports = mongoose.model("orders", orderSchema);