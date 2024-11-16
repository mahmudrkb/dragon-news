import React, { useContext } from "react";
import { Form, Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import  { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin,setUser } = useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  console.log(location)

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    userLogin(email, password)
    .then(result=>{
        const user=result.user;
        setUser(user)
        navigate(location?.state ? location.state:'/' )
       
    })  .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
  };
  

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold my-5 text-center">
          Login your account !
        </h1>
        <form onSubmit={handleLoginSubmit} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center mt-3 font-semibold ">
            Don't Have any Account?{" "}
            <Link to="/auth/register " className="text-red-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
