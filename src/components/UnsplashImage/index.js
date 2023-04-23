import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

export const UnsplashImage = ({
  url,
  key,
  longText,
  setCartItems,
  cartItems,
}) => {
  var price = Math.floor(Math.random() * 10) + 1;

  const addToCart = () => {
    var doubledItem = false;
    cartItems.map((item) => {
      if (item.url === url) {
        doubledItem = true;
        toast("This photo has already been added to your cart. ⚠️", {
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
    });
    if (!doubledItem) {
      toast("Photo added to cart. 🛒", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setCartItems([...cartItems, { url: url, price: price }]);
    }
  };
  return (
    <>
      <Img key={key} src={url} alt="" />
      <div
        onClick={() => addToCart()}
        className={
          longText
            ? "absolute right-3 top-24 bg-gradient-to-t text-sm from-[#53346e] to-[#674188] px-4 text-white font-bold py-1.5 rounded-full"
            : "absolute right-3 top-20 bg-[#674188] px-4 text-sm text-white font-bold py-1.5 rounded-full"
        }
      >
        Buy
      </div>
    </>
  );
};
