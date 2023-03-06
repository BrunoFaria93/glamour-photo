import { useEffect } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import LeavesAnimation from "../../components/LeavesAnimation";
const Login = () => {
  return (
    <>
      <LeavesAnimation />
      <div className=" flex flex-col justify-center items-center w-screen h-screen bg-[#C3ACD0]">

        <LoginSocialGoogle
          client_id={
            "38775036769-sraoidmnqbmmi12n9t51fb7fsbmsis4t.apps.googleusercontent.com"
          }
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            console.log(provider, data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
        <h1 className="glamour absolute top-[35%] left-16 z-50 text-center mb-10 text-5xl text-[#F7EFE5] ">Glamour Photos</h1>

          <div className="w-[60%] absolute top-[50%] left-[18%] opacity-90 z-50 flex justify-center items-center">
            <GoogleLoginButton
              text="Logar com o Google"
              style={{
                borderRadius: "10px",
                backgroundColor: "#FFFBF5",
                fontSize: "16px"
              }}
            />
          </div>
        </LoginSocialGoogle>
      </div>
    </>
  );
};
export default Login;
