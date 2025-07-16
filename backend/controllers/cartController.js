import userModel from "../models/userModel.js"
//we'll create 3 arrow functions...add to cart, remove from cart, get cart

//add items to user cart
const addToCart = async (req,res) => {
    try {
        //here we'll find and add user data
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1 //if user wants to adda aproduct in the cart with a productId, and from that itemId there is no entry in the cart, then it will create a new entry          
        }
        else{
            cartData[req.body.itemId] += 1 //if that cartId is available, then we'll increase that value
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added To Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    } 
}
 
//remove items from user cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//fetch user cart data
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addToCart, removeFromCart, getCart}