import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Header from "../Home/Header/Header";

const Login = () => {
  const { handleEmailPasswordLogin, handleGoogleLogin } =
    useContext(AuthContext);
  const router = useNavigate();
  const GoogleLogin = () => {
    handleGoogleLogin().then((result) => {
      if (result.user) {
        router.push("/");
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email.value;
    const password = form?.password.value;

    handleEmailPasswordLogin(email, password)
      .then((data) => {
        form.reset();
        router("/");

        toast.success("Login Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <Header />
      <div>
        <ToastContainer />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              width={800}
              height={800}
              src="/Asset/login.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Email</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-96 input input-bordered font-bold"
                      required
                      name="email"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>

                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered font-bold"
                      name="password"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
              <div className="divider text-slate-900">OR</div>
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
                <Link to={"/register"} className="text-slate-900 font-bold">
                  New To Doc House Please{" "}
                  <button className="btn btn-primary"> Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
