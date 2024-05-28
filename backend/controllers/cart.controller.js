import Cart from "../models/cart.model.js";

export const getAll = async (req, res) => {
  try {
    const { id_user } = req.body;
    if (!id_user) {
      return res.send({ success: false, message: "khong co user" });
    }
    const cart = await Cart.findOne({ id_user: id_user });
    res.send({ success: true, cart });
  } catch (error) {
    console.log(error);
    return res.send({ success: false });
  }
};

export const addCart = async (req, res) => {
  var cartFind;
  const { id_user, products } = req.body;
  try {
    cartFind = await Cart.findOne({ id_user: id_user });
    if (!id_user) {
      return res.send({ success: false, message: "Hãy đăng nhập" });
    }
    if (cartFind === null) {
      await Cart.create({ id_user: id_user, products: products })
    }
    for (let i = 0; i < products.length; i++) {
      let index = cartFind.products.findIndex(
        (element) => products[i].id_book === element.id_book
      );
      if (index === -1) {
        cartFind.products.push(products[i]);
      } else {
        console.log(cartFind.products[index].count);
        cartFind.products[index].count += Number(products[i].count);
      }
    }
    try {
      await Cart.findByIdAndUpdate(cartFind._id, {
        $set: { products: cartFind.products },
      });
    } catch (err) {
      res.status(500).json({ msg: err });
      return;
    }
    res.send({ message: "Đã thêm vào giỏ hàng", success: true,product:cartFind.products});
  } catch (error) {
    console.log(error);
    return res.send({ success: false, error });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id_user, id_book } = req.body;
    let cartFind = await Cart.findOne({ id_user: id_user });
    let index = cartFind.products.findIndex(
      (element) => element._id === id_book
    );
    cartFind.products.splice(index, 1);
    try {
      await Cart.findByIdAndUpdate(cartFind._id, {
        $set: { products: cartFind.products },
      });
    } catch (err) {
      res.status(500).json({ msg: err });
      return;
    }
    res.send({ success: true, message:"xóa thành công"});
  } catch (error) {
    console.log(error);
    return res.send({ success: false });
  }
};
