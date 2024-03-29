const Order = require("../models/Order");
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch(err){
        res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedOrder);
    } catch(err){
        res.status(500).json(err);
    }

});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been delete");
    } catch(err){
        res.status(500).json(err);
    }

});

//GET ORDER USER
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
    try{
        const order = await Order.find({ userId: req.params.userId })
        res.status(200).json(order);
    } catch(err) {
        res.status(500).json(err);

    }
});

//GETALL ORDER
router.get("/", verifyTokenAndAdmin, async(res, req) => {

    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err)
    }

});

//MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) =>  {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));

    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ]);
        res.status(200).json(income);
    } catch(err) {
        res.status(500).json(err);

    }
});

module.exports = router;