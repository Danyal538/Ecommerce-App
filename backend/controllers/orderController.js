import mongoose from "mongoose";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    try {
        const frontend_Url = "http://localhost:5173"
        const newOrder = new orderModel({
            userId: req.body.id,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.id, { cartData: {} });

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name
                },
                amount: item.price * 100
            },
            quantity: item.quantity
        }))
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 10 * 100
            }
        })
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({ success: true, session: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in placing order", error })
    }
}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            return res.json({ success: true, message: "Paid" });
        }
        else {
            await orderModel.findByIdAndUpdate(orderId, { payment: false });
            return res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ success: true, message: "Error in placing order" });
    }
}

const userOrders = async (req, res) => {
    try {
        const order = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: order })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error", error })

    }
}

const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ sucess: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in listing orders", error });
    }
}

const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.id, { status: req.body.status });
        res.json({ success: true, message: "Status updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in updating status", error })
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };