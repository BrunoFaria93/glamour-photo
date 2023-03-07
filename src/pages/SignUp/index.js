import LeavesAnimation from "../../components/LeavesAnimation";
// import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem("account", JSON.stringify(data));
    toast("Account created successfully. ✅", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/login");
  };
  return (
    <>
      <LeavesAnimation />
      <div className=" flex flex-col justify-center items-center w-screen h-screen bg-[#C3ACD0]">
        <h1 className="glamour absolute top-[35%] left-16 z-50 text-center mb-10 text-5xl text-[#F7EFE5] ">
          Glamour Photos
        </h1>
        <div className="flex justify-between w-[90vw] opacity-95 rounded-md absolute top-[45%] left-5 h-auto py-5 bg-[#F7EFE5]">
          <form
            className="flex flex-col w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input placeholder="Email" {...register("example")} /> */}

            <div className="relative flex flex-col gap-2 mt-5">
              <div className="flex flex-col">
                <div className="flex w-full justify-between items-center px-10">
                  <label className="mr-1 h-5">E-mail: </label>
                  <input
                    type="email"
                    className="border border-black rounded-md p-1"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 absolute right-24 top-1">
                    E-mail is required
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex w-full justify-between items-center px-10">
                  <label className="mr-1">Password: </label>

                  <input
                    type="password"
                    className="border border-black rounded-md p-1"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 absolute right-20 bottom-1">
                    Password is required
                  </span>
                )}
              </div>
            </div>
            <input
              className="h-6 mt-5 bg-[#674188] w-20 mx-auto text-white rounded-full"
              type="submit"
              value="SignUp"
            />
            <div className="flex justify-center items-center mt-2">
              <p>Already have an account?  </p>
              <div
                onClick={() => navigate("/login")}
                className="text-[#674188] font-bold ml-1 underline underline-offset-2"
              >
                Login here
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
