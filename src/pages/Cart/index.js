import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [height, setHeight] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartStorage"))
  );
  var total = 0;

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    removeLocalHost();
  }, [cartItems]);

  const removeItems = async (index) => {
    let result = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (i !== index) {
        result.push(cartItems[i]);
      }
    }
    setCartItems(result);
  };

  const removeLocalHost = () => {
    localStorage.setItem("cartStorage", JSON.stringify(cartItems));
  };

  return (
    <main style={{ height: height }} className="w-full bg-[#F7EFE5]">
      <Header
        setOpen={setOpen}
        open={open}
        height={height}
        numCart={cartItems?.length}
      />
      {cartItems?.length === 0 ? (
        <>
          <div className="flex justify-center items-center mt-24">
            <img
              className="h-60 w-60 bounceImg"
              src={require("../../assets/empty.png")}
              alt=""
            ></img>
          </div>
          <h2 className="text-center mt-6 text-lg font-bold">
            Seu carrinho está vazio.
          </h2>
        </>
      ) : (
        <>
          <div className="flex flex-col  bg-[#F7EFE5] h-[85vh] gap-2 p-5 px-3 overflow-y-auto">
            {cartItems?.map((cartItem, index) => {
              total = cartItem?.price + total;
              return (
                <div key={index} className="flex justify-between relative">
                  <div className="flex justify-center items-center bg-red-500 w-6 h-6 absolute left-28 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-white font-bold"
                      onClick={() => {
                        removeItems(index);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <img
                    src={cartItem?.url}
                    alt=""
                    className="w-32 rounded-md h-32 object-cover"
                  ></img>
                  <div className="text-[#674188] ">
                    Preço: R${cartItem?.price},00
                  </div>
                </div>
              );
            })}
            <div className="w-full flex flex-wrap justify-between items-center">
              <button
                onClick={() => {
                  setCartItems([]);
                  localStorage.clear();
                }}
                className="text-[#ff6347] py-1 rounded-md font-bold"
              >
                Limpar tudo
              </button>
              <div className="flex flex-col justify-start items-end mt-7">
                <div className="text-[#674188] font-bold">
                  <p>Total: R${total},00</p>
                </div>
                <button
                  onClick={() => {
                    setCartItems([]);
                    localStorage.clear();
                    navigate("/sucessPurchase");
                  }}
                  className="bg-[#674188] text-white px-4 py-1 rounded-md mt-2"
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
