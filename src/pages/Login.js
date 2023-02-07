import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      form.reset();
      toast.success("Login Successfully.");
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="hero my-14">
      <Toaster position="top-center" />
      <div className="hero-content grid gap-10 grid-cols-1 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4 mx-auto" src={login} alt="login-img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10 bg-base-100">
          <h1 className="text-3xl text-center mt-2 font-bold">Login now</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <p className="text-center">
            New to Car Servx?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
