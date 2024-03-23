import { useFormik } from "formik";
import React from "react";
import "./Login.css";
import {auth} from './../firebase'
import { useNavigate } from "react-router-dom";
import {
  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
       auth,
        formik.values.email,
        formik.values.password
      ) ; 
      navigate("/") ;

    }catch(error){
      console.error("Login failed failed:", error.message);
    }
   

  };

  const register = async (e) => {
    
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      );
      if (userCredential) {
        navigate("/");
      }

      console.log(userCredential);
      // Registration successful!
      console.log("User created successfully:", userCredential.user);
      // Handle successful registration (redirect, display message)
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Handle registration errors (display error message to user)
    }
  };
  console.log("Form Values", formik.values);

  return (
    <div className="login">
      <img
        className="login_pg_logo"
        src="https://tse1.mm.bing.net/th?id=OIP.Ku4iy6JfyZOZAKxOkfp0ewHaEK&pid=Api&rs=1&c=1&qlt=95&w=175&h=98"
      />
      <form className="loginForm">
        <h1>Sign-in</h1>
        <label>Email</label>
        <input
          type="text"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button className="login_signInBtn" onClick={signIn}>
          Sign In
        </button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login_CreateACBtn" onClick={register}>
          Create Amazon Account
        </button>
      </form>
    </div>
  );
}

export default Login;
