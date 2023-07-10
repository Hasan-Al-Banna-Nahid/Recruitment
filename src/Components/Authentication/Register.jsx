import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import Header from "../Home/Header/Header";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useNavigate();
  const { handleEmailPasswordSignUp, handleGoogleLogin } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const GoogleLogin = async () => {
    handleGoogleLogin().then((result) => {
      toast.success("User Login Successfully");
      router("/");
    });
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    handleEmailPasswordSignUp(email, password)
      .then((data) => {
        router("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    if (password !== confirmPassword) {
      setErrorMessage("Password Did Not Match");
      return;
    }
  };
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <ToastContainer />
        <div className="hero-content flex-col lg:flex-row">
          <img
            width={800}
            height={800}
            src="/Asset/register.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered font-bold"
                    required
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered font-bold"
                    required
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Photo</span>
                  </label>
                  {errors.photo && (
                    <span className="text-red-600">Photo is required</span>
                  )}
                  <input
                    type="file"
                    className="input input-bordered"
                    required
                    {...register("photo", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  {errors.password && (
                    <span className="text-red-600 font-bold">
                      1.Password Must Have 8 Characters long & Not exceed 20
                      Character
                      <br /> 2.One Uppercase & One Lowercase letter Required{" "}
                      <br /> 3.Must Have One Special Character <br /> 4.Must be
                      Includes Number{" "}
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered font-bold"
                    name="password"
                    required
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/i,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password
                    </span>
                  </label>

                  <span className="text-red-600 font-bold">{errorMessage}</span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered font-bold"
                    name="confirmPassword"
                    required
                    {...register("confirmPassword", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="divider text-slate-900">OR</div>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
            <div className="form-control">
              <div
                onClick={GoogleLogin}
                className=" my-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded p-4 font-bold"
              >
                {" "}
                Continue With{" "}
                <button className="font-bold">
                  <FaGoogle className="text-[26px] text-[#F4B400] mt-2" />
                </button>
              </div>
              <Link to={"/login"} className="text-slate-900 font-bold">
                Already Have An Account Please{" "}
                <button className="btn btn-primary"> Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
