import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ThankYouPage = () => {
  const { state } = useLocation();
  const { cartItems } = state;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="glamour mb-5 text-6xl text-[#674188]">Thank you!!</h1>
      <img className="w-[90%]" src={require("../../assets/party.png")} alt=""></img>
      <h2 className="mt-10 text-md text-[#674188]">developed by Bruno Faria.</h2>
      <button onClick={() => navigate("/")}  className="px-5 py-1 bg-[#674188] text-white rounded-full mt-4">Back</button>
      </div>
    </>
  )
};

export default ThankYouPage;
