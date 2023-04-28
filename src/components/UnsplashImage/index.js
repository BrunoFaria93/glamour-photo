import React, { useEffect } from "react";
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
  activateBuyButton,
  activateImg,
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
      {activateImg && <Img key={key} src={url} alt="" />}
      {activateBuyButton && (
        <div
          onClick={() => addToCart()}
          className={
            longText
              ? "absolute right-3 top-24 cursor-pointer bg-[#674188] hover:bg-[#342046] duration-200 px-4 text-white font-bold py-1.5 rounded-full"
              : "absolute right-3 top-20 bg-[#674188] hover:bg-[#342046] duration-200 px-4 text-white cursor-pointer font-bold py-1.5 rounded-full"
          }
        >
          Buy
        </div>
      )}
    </>
  );
};
