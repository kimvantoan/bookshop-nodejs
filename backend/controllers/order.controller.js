import Order from "../models/order.model.js";
import cart from "../models/cart.model.js";
export const addOrder = async (req, res) => {
  try {
    const { id_user, address, total, phone, name } = req.body;
    let cartFind = null;
    if (!address) {
      return res.json({ message: "điền địa chỉ", success: false });
    }
    if (!name) {
      return res.json({ message: "điền tên người nhận", success: false });
    }
    if (!phone) {
      return res.json({ message: "điền số điện thoại", success: false });
    }
    cartFind = await cart.findOne({ id_user: id_user });
    if(cartFind.products.length===0){
      return res.json({message:"Hãy thêm sản phẩm vào giỏ hàng",success:false})
    }
    await Order.create({
      id_user: id_user,
      products: cartFind.products,
      address: address,
      phone: phone,
      name: name,
      total,
    });
    cartFind.products=[]
    try {
      await cart.findByIdAndUpdate(cartFind._id, {
        $set: { products: cartFind.products },
      });
    } catch (err) {
      res.status(500).json({ msg: err });
      return;
    }
    res.status(201).json({ message: "Đặt hàng thành công", success: true });
  } catch (err) {
    console.log("error ", err);
    res.status(500).json({ msg: err });
    return;
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const allOrder = await Order.find();
    res.status(200).json(allOrder);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: err });
  }
};

export const getOrderByID = async (req, res) => {
  try {
    const { id } = req.body;
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: err });
  }
};

export const deleteOrderByID = async (req, res) => {
  try {
    const { id } = req.body;
    await Order.findByIdAndDelete(id);
    res.status(200).json({ message: "xoá đơn hàng thành công",success:true});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: err });
  }
};

export const updateStatus=async(req,res)=>{
  try {
    const {id}=req.body
    await Order.findByIdAndUpdate(id,{status:req.body.status})
    res.json({message:'cập nhật trạng thái thành công',success:true})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: err });
  }
}