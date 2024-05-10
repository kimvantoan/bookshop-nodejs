import Users from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    if (!username) {
      return res.send({ message: "fill out username", success: false });
    }
    if (!email) {
      return res.send({ message: "fill out email", success: false });
    }
    if (!password) {
      return res.send({ message: "fill out password", success: false });
    }
    const validEmail = await Users.findOne({ email: email });
    if (validEmail) {
      return res.send({ message: "tài khoản đã tồn tại", success: false });
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, saltRounds);
    await Users.create({
      username: username,
      email: email,
      password: hashed,
      phone: phone,
    });
    res.send({ message: "tạo tài khoản thành công", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message: "fill out email", success: false });
    }
    if (!password) {
      return res.send({ message: "fill out password", success: false });
    }
    const validEmail = await Users.findOne({ email: email });
    if (!validEmail) {
      return res.send({
        message: "tài khoản chưa được đăng kí",
        success: false,
      });
    }
    const match = await bcrypt.compare(password, validEmail.password);
    if (!match) {
      return res.send({ message: "mật khẩu không chính xác", success: false });
    }
    if (validEmail && match) {
      const token = jwt.sign(
        { id: validEmail.id, role: validEmail.role, name:validEmail.username},
        process.env.KEY_TOKEN,
        { expiresIn: "2h" }
      );
      res.cookie("token",token)
      return res.send({
        message: "đăng nhập thành công",
        success: true,
        token,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};

export const logout=(req,res)=>{
  res.clearCookie("token")
  res.send({success:true})
}