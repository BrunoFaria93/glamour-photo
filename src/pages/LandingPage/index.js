import ProductsContainer from "../../components/ProductsContainer";
import "swiper/css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductsContainerDesktop from "../../components/ProductsContainerDesktop";

const LandingPage = () => {

 
  const [height, setHeight] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setHeight(window.innerHeight);
    if(window.innerWidth > 640){
      setIsMobile(false)
    }
  }, []);

  return (
    <>
      {isMobile ? <ProductsContainer height={height}/> : <ProductsContainerDesktop height={height}/>}
      
    </>
  );
};

export default LandingPage;
