import mongoose from "mongoose";
import productModel from "../models/productModel.js";
import fs from "fs";
import e from "express";

//addProduct
const addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image is required" });
    }
    let sizes = req.body.sizes;

    if (typeof sizes === "string") {
        sizes = sizes.split(",").map(size => size.trim());
    }

    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        subCategory: req.body.subCategory,
        sizes: sizes,
        images: [image_filename],
        bestSeller: req.body.bestSeller,

    })
    try {
        await product.save();
        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in adding product", error })

    }
}

//all Productlist

const allProductList = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, data: products })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in getting product list" });
    }
}

//removeProduct
const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.images}`, () => { })
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in removing product", error });
    }
}

const updateProduct = async (req, res) => {
    const { id, name, price, description, image, sizes, bestSeller } = req.body;
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            name,
            image,
            description,
            price,
            sizes,
            bestSeller
        }, { new: true })
        if (!updatedProduct) {
            return res.json({ success: false, message: "Error in updating product" });
        }
        res.json({ success: true, message: "Product updated", data: updatedProduct })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in updating product", error });
    }
}

const getProductById = async (req, res) => {
    const { id } = req.body;
    try {
        const product = await productModel.findById(id);
        res.json({ success: true, data: product });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error in fetching product", error })
    }
}


export { addProduct, allProductList, removeProduct, updateProduct, getProductById };