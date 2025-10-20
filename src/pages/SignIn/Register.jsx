import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const loginForm = location.state?.from?.pathname || "/";
  const handelRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 Character");
    } else {
      setNameError("");
    }
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate(loginForm, { replace: true });
        const userInfo = result.user;
        // console.log(userInfo);
        updateUser({ displayName: name, photoUrl: photo })
          .then(() => {
            setUser({ ...userInfo, displayName: name, photoUrl: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(userInfo);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handelRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="name"
              className="input"
              name="name"
              required
              placeholder="Enter Your Name"
            />
            {nameError && <p className="text-sm text-red-500">{nameError}</p>}
            <label className="label">Photo (URL)</label>
            <input
              type="photo"
              className="input"
              name="photo"
              required
              placeholder="Paste your image URL"
            />
            <label className="label">Your Email</label>
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="Enter Your Email"
            />
            <label className="label">Your Password</label>
            <input
              type="password"
              className="input"
              name="password"
              required
              placeholder="Enter Your Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center text-md font-semibold pt-3">
              Already Have An Account ?{" "}
              <Link
                to={"/auth/login"}
                className="font-bold text-md text-secondary"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
