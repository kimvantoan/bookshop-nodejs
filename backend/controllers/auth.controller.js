import Users from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    if (!username) {
      return res.send({ message: "fill out username",success:false });
    }
    if (!email) {
      return res.send({ message: "fill out email",success:false });
    }
    if (!password) {
      return res.send({ message: "fill out password",success:false });
    }
    if (!phone) {
      return res.send({ message: "fill out phone",success:false });
    }
    const validEmail = await Users.findOne({ email: email });
    if (validEmail) {
      return res.send({ message: "tai khoan da ton tai", success: false });
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, saltRounds);
    const user = await Users.create({
      username: username,
      email: email,
      password: hashed,
      phone: phone,
    });
    res.send({ message: "tao tai khoan thanh cong",success:true});
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message: "fill out email",success:false });
    }
    if (!password) {
      return res.send({ message: "fill out password",success:false });
    }
    const validEmail = await Users.findOne({ email: email });
    if (!validEmail) {
      return res.send({
        message: "tai khoan chua duoc dang ki",
        success: false,
      });
    }
    const match = await bcrypt.compare(password, validEmail.password);
    if (!match) {
      return res.send({ message: "mat khau khong chinh xac", success: false });
    }
    if (validEmail && match) {
      const token = jwt.sign(
        { id: validEmail.id, role: validEmail.role },
        process.env.KEY_TOKEN,
        { expiresIn: "2h" }
      );
      return res.send({
        message: "dang nhap thanh cong",
        success: true,
        token,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong",success:false });
  }
};
