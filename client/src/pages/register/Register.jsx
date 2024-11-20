import { useForm } from "react-hook-form";
import GoogleLogin from "../../components/shared/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { updateUserProfile, createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    const formData = { name, email, password };
    console.log(formData);
    try {
      await createUser(email, password);
      await updateUserProfile(name);
      navigate(from);
      toast.success("login successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && (
                <span className="text-red-700 text-sm ">
                  name must be added
                </span>
              )}
            </div>
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
                <span className="text-red-700 text-sm ">email required</span>
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#\$%\^&\*])/,
                    message:
                      "Password must include uppercase, lowercase, number, and special character",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-700 text-sm ">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-black rounded-none hover:text-red-600  text-white">
                Register
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
              already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;

