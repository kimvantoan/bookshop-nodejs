import Users from "../models/user.model.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await Users.find();
    if (users.length>=1) {
      res.send(users);
    } else {
      return res.send({ message: "chưa có người dùng", success: false });
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
    res.send({ message: "thông tin người dùng", success: true, user });
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
    res.send({ message: "cập nhật thành công", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.send({ message: "xóa thành công", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong",success:false });
  }
};
