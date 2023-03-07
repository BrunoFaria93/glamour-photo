import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import { Loader } from "../Loader";
import styled from "styled-components";
import { UnsplashImage } from "../UnsplashImage";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "../../index.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const WrapperImages = styled.section`
  max-width: 70rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const ProductsContainer = ({ height }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartStorage")) || []
  );
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect( () => {
    console.log("entrei")
    const token = localStorage.getItem("token")
    console.log("token ", token)
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
        `${apiRoot}/photos/random?client_id=${"VE_temWsmXpXnF6KQWyP-fY2SPZMEMYvS-d6y9hR1MQ"}&count=${count}`
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
              direction="vertical"
              className="mySwiper"
              onReachEnd={() => {
                fetchImages();
              }}
            >
              <WrapperImages>
                {images?.map((image, index) => {
                  return (
                    <div key={index}>
                      <SwiperSlide>
                        <div
                          key={index}
                          className="relative flex justify-center items-center h-full w-full"
                        >
                          <UnsplashImage
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            longText={
                              image?.alt_description?.length > 45 ? true : false
                            }
                            url={image?.urls?.small}
                          />
                          <div className="px-3 py-1 absolute text-[#674188] bg-[#F7EFE5] top-0 left-0 right-0 w-screen">
                            Description: {image?.alt_description}
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </WrapperImages>
            </Swiper>
            {!open && (
              <div className="sticky z-50 bottom-0 w-full h-20 bg-gradient-to-t from-slate-900"></div>
            )}
            {loading && <Loader />}
          </div>
        </>
      )}
    </>
  );
};
export default ProductsContainer;
