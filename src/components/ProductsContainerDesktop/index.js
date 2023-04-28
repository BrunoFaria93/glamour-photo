import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import { Loader } from "../Loader";
import styled from "styled-components";
import { UnsplashImage } from "../UnsplashImage";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper";

import "../../index.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const WrapperImages = styled.section`
  max-width: 70rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const ProductsContainerDesktop = ({ height }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartStorage")) || []
  );
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== "logadocomsucesso") {
      navigate("/login");
    }
    if (token === null) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartStorage", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchImages = (count = 10) => {
    setLoading(true);
    const apiRoot = "https://api.unsplash.com";

    axios
      .get(
        `${apiRoot}/photos/random?client_id=${"iT1nVg5ceiLrRchAIWCBoHVj60CI_ak-zigKW7dRWa4"}&count=${count}`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      });
    setLoading(false);
  };

  return (
    <>
      <Header
        setOpen={setOpen}
        open={open}
        height={height}
        numCart={cartItems?.length}
      />
      {loading ? (
        <>
          <button type="button" class="bg-indigo-500 ..." disabled>
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        </>
      ) : (
        <>
          <div
            style={{ height: height }}
            className="scrollbar-hidden bg-[#FFFBF5]"
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onReachEnd={() => {
                fetchImages();
              }}
            >
              <WrapperImages>
                {images?.map((image, index) => {
                  console.log(image);
                  return (
                    <div key={index} className="w-screen">
                      <SwiperSlide>
                        <div className="flex justify-center items-center w-screen h-full bg-gradient-to-t from-black to-slate-700">
                          <div
                            key={index}
                            className="relative flex justify-center items-center h-full w-[40vw]"
                          >
                            <UnsplashImage
                              cartItems={cartItems}
                              setCartItems={setCartItems}
                              longText={
                                image?.alt_description?.length > 45
                                  ? true
                                  : false
                              }
                              url={image?.urls?.small}
                              activateBuyButton={false}
                              activateImg={true}
                            />
                          </div>
                          <div className="h-full bg-[#F7EFE5] w-[40vw]">
                            <div className="flex flex-col justify-center items-center relative bg-[#f1f1f1] w-2/3 m-auto p-2  mt-[40vh] rounded-lg ">
                              <p className="font-bold text-xl text-[#674188] ">
                                Description: {image?.alt_description}
                                <UnsplashImage
                                  cartItems={cartItems}
                                  setCartItems={setCartItems}
                                  longText={
                                    image?.alt_description?.length > 45
                                      ? true
                                      : false
                                  }
                                  url={image?.urls?.small}
                                  activateBuyButton={true}
                                  activateImg={false}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                        {!open && (
                          <div className="sticky z-50 bottom-0 w-[40vw] ml-[10vw] h-24 bg-gradient-to-t from-slate-900"></div>
                        )}
                      </SwiperSlide>
                    </div>
                  );
                })}
              </WrapperImages>
            </Swiper>

            {loading && <Loader />}
          </div>
        </>
      )}
    </>
  );
};
export default ProductsContainerDesktop;
