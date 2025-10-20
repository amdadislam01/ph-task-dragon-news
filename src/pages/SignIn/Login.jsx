import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const {loginuser, setUser} = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    loginuser(email, password)
    .then((result) => {
      const userInfo = result.user;
      setUser(userInfo)
    })
    .catch((error)=>{
      const errorCode= error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      console.log(errorCode);
    })
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              required
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center font-semibold pt-3">
              Don't Have An Account ?{" "}
              <Link
                to={"/auth/register"}
                className="font-bold text-md text-secondary"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
