import ProductsContainer from "../../components/ProductsContainer";
import "swiper/css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";

const LandingPage = () => {

 
  const [height, setHeight] = useState([]);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <>
      <ProductsContainer height={height}/>;
    </>
  );
};

export default LandingPage;
