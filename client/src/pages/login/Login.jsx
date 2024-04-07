import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import Layout from "../../components/layout/Layout";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:2003/auth/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            localStorage.setItem("token", res.data.token);
            navigate("/");
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="bg">
        <div className="login-box">
          <h1>Login</h1>
          <form>
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
            <input type="submit" onClick={handleSubmit} />
          </form>
        </div>
        <p className="para-2">
          Not have an account? <Link to="/register">Sign Up Here</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
