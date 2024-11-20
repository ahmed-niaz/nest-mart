import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/shared/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate(from);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-pink-700 text-sm ">email required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <span className="text-pink-700 text-sm ">
                  Password required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-pink-700 text-sm ">
                  Password must have 6 characters
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return `your password do not match`;
                    }
                  },
                })}
              />
              {errors.confirmPassword?.type && (
                <span className="text-pink-700 text-sm ">
                  Both password must match
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black rounded-none hover:text-red-600  text-white">
                Login
              </button>
            </div>
            <hr />
            <div>
              <div className="form-control mt-6">
                <button className="btn bg-black rounded-none hover:text-red-600  text-white">
                  <GoogleLogin />
                </button>
              </div>
            </div>
            <p className="my-4 text-gray-400">
              Do have an account? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
