import LeavesAnimation from "../../components/LeavesAnimation";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => checkAccount(data);

  const checkAccount = (data) => {
    let account = JSON.parse(localStorage.getItem("account"));
    if (account?.email === data?.email) {
      if (account.password === data.password) {
        localStorage.setItem("token", "logadocomsucesso");
        toast("Logged in successfully. ✅", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      } else {
        toast("Password not registered. ⚠️", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast("E-mail not registered. ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    // if (account === null) {
    //   toast("E-mail not registered. ⚠️", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    // }
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-screen h-screen bg-[#674188]">
        <div className="framerMotion flex justify-center items-center gap-3">
          <img
            className="h-36 w-48 object-cover"
            src={require("../../assets/logo2.png")}
            alt="cameraIcont"
          />
        </div>

        <div className="flex justify-center rounded-md h-auto py-5">
          <div class="w-screen flex flex-col justify-center items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="entrance bg-white shadow-md w-[80vw] lg:w-[23vw] rounded px-3 lg:px-6 lg:py-10 pt-5 pb-5 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    Please choose an email.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                )}
              </div>
              <div className="flex flex-col items-center">
                <button
                  className="bg-[#674188] hover:bg-[#342046] duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Login"
                >
                  Login
                </button>
                <div className="flex text-center mt-2 justify-center items-center w-full">
                  <p>Don't have an account yet? </p>
                  <div
                    onClick={() => navigate("/signup")}
                    className="text-[#674188] font-bold ml-1 cursor-pointer underline underline-offset-2"
                  >
                    Create one.
                  </div>
                </div>
              </div>
            </form>
            <p class="text-center text-white text-xs">
              &copy;2023 by Bruno Faria.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
