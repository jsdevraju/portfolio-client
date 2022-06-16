import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import Button from "../src/components/button/Button";
import Input from "../src/components/input/Input";
import axios from 'axios';
import toast from 'react-hot-toast'
import Loader from '../src/components/loader/Loader'
import { useDispatch } from 'react-redux';
import { login} from '../src/redux/userSlice';
import { useRouter } from 'next/router';
import Meta from '../src/components/meta/Meta'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async () =>{
    setLoading(true)
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_PROXY_URL}/login`, {
          email,
          password
        });
        toast.success(data?.message);
        dispatch(login(data));
        router.push("/dashboard")
        localStorage.setItem("admin", JSON.stringify(data));
        setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(error?.response?.data?.message)
    }
  } 


  return (
    <>
     <Meta title="Razu Islam | Admin Login" />
      {loading ? <Loader /> : (
        <div className={styles.login}>
        <div className="container">
          <div className={styles.loginContainer}>
            <h1 className="aboutText">Welcome Admin</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="email">Admin Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Admin Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                />
              </div>
              <Button type="submit" text="Admin Login" className="app_btn" />
            </form>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Login;
