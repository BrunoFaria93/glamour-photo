import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  
`;

export const UnsplashImage = ({ url, key, longText }) => {
  return (
    <>
      <Img key={key} src={url} alt="" />
      <div className={longText ? 'absolute right-3 top-24 bg-gradient-to-t from-[#53346e] to-[#674188] px-4 text-white font-bold py-1.5 rounded-full' : 'absolute right-3 top-20 bg-[#674188] px-4 text-white font-bold py-1.5 rounded-full'}>
        Comprar
      </div>
    </>
  )
}