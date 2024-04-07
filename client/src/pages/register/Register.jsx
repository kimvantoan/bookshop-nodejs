import { React, useState } from "react";
import axios from "axios";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";
import Layout from "../../components/layout/Layout";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2003/auth/register", {
        name,
        email,
        password,
        phone,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          console.log(res);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Layout>
      <div className="bg">
        <div className="signup-box">
          <h1>Sign Up</h1>
          <form>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
            <input type="submit" onClick={handleSubmit} />
          </form>
        </div>
        <p className="para-2">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Register;
