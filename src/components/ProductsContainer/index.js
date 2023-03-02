import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../Loader";
import styled from "styled-components";
import { UnsplashImage } from "../UnsplashImage";
import HeaderMenu from "../HeaderMenu";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../../index.css";

const WrapperImages = styled.section`
  max-width: 70rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const ProductsContainer = ({ height, open }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    console.log("entrei")
    setLoading(true);
    const apiRoot = "https://api.unsplash.com";

    axios
      .get(
        `${apiRoot}/photos/random?client_id=${"Cm8CiEx1pkxPhWfhlOwsrqbmPMpadEAT570BSzVXP6I"}&count=${count}`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      });
    setLoading(false);
  };

  return (
    <div style={{ height: height }} className="scrollbar-hidden bg-[#FFFBF5]">
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
              <>
                <SwiperSlide>
                  <div
                    className="relative flex justify-center items-center h-full w-full"
                    key={index}
                  >
                    <UnsplashImage
                      longText={
                        image.alt_description.length > 45 ? true : false
                      }
                      url={image.urls.small}
                    />
                    <div className="px-3 py-1 absolute text-[#674188] bg-[#F7EFE5] top-0 left-0 right-0 w-screen">
                      Description: {image.alt_description}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </WrapperImages>
      </Swiper>
      {!open && (
        <div className="sticky z-50 bottom-0 w-full h-20 bg-gradient-to-t from-slate-900"></div>
      )}
      {loading && <Loader />}
    </div>
  );
};
export default ProductsContainer;
