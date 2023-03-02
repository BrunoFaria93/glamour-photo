import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState([]);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-center items-center h-[10vh] py-3 w-full bg-[#FFFBF5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 ml-2 text-[#674188]"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {open && (
          <>
            <div
              onClick={() => setOpen(false)}
              style={{ height: height }}
              className="framerMotion absolute top-14 left-0 z-50 overflow-hidden bg-[#170e1e] opacity-90 w-screen"
            ></div>
            <div className="framerMotion absolute top-14 left-0 z-50 bg-[#FFFBF5] w-[60vw] h-[90vh]"></div>
          </>
        )}

        <div className="h-auto flex justify-center text-2xl items-center w-full text-[#674188]">
          <h1 style={{ fontFamily: "Great Vibes" }} className="font-bold">
            Glamour Photos
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 mr-3 text-[#674188]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </header>
      <LandingPage height={height} open={open}/>
    </>
  );
}

export default App;
