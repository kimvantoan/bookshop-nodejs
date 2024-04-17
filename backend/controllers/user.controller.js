import Users from "../models/user.model.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await Users.find();
    if (users.length>=1) {
      res.send(users);
    } else {
      return res.send({ message: "chua co user nao", success: false });
    }
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", error });
  }
};
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.send({ message: "thong tin user", success: true, user });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", error });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, phone } = req.body;
    await Users.findByIdAndUpdate(id, {
      username: username,
      email: email,
      phone: phone,
    });
    res.send({ message: "cap nhat thanh cong", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.send({ message: "xoa thanh cong", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong",success:false });
  }
};
