const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, async (req, res) => {

    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch(err){
        res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedCart);
    } catch(err){
        res.status(500).json(err);
    }

});

router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
    
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been delete");
    } catch(err){
        res.status(500).json(err);
    }

});

router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
    try{
        const cart = await Cart.find({ userId: req.params.userId })
        res.status(200).json(cart);
    } catch(err) {
        res.status(500).json(err);

    }
});

//GETALL CART
router.get("/", verifyTokenAndAdmin, async(res, req) => {

    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err)
    }

})

module.exports = router;