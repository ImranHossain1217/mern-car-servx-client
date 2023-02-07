import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Up Successfully.");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero my-14">
      <Toaster position="top-center" />
      <div className="hero-content grid gap-10 grid-cols-1 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4 mx-auto" src={login} alt="login-img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10 bg-base-100">
          <h1 className="text-3xl text-center mt-2 font-bold">Sign Up</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="text-center">
            Already Have you account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
