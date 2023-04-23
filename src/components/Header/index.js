import { useNavigate } from "react-router-dom";

const Header = ({ setOpen, open, height, numCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-center items-center h-[10vh] py-3 w-full bg-[#674188]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 ml-2 text-white"
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
              className="framerMotion2 absolute top-[10vh] left-0 z-50 overflow-hidden bg-[#170e1e] opacity-90 w-screen"
            ></div>
            <div className="framerMotion2 text-[#674188] absolute top-[10vh] left-0 z-50 bg-[#F7EFE5] w-[60vw] h-[90vh] py-5">
              <div className="flex flex-col gap-4 h-full w-full px-3">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                  <div className="flex h-auto gap-1">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/resume.png")}
                        alt=""
                      ></img>
                      <a href="https://portfolio-ochre-beta-17.vercel.app">Portfólio</a>
                    </div>
                    <div className="flex h-auto gap-1">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/linkedin.png")}
                        alt=""
                      ></img>
                      <a href="https://www.linkedin.com/in/brunofaria93/">
                        Linkedin
                      </a>
                    </div>
                    <div className="flex h-auto gap-1">
                      <img
                        className="h-5 w-5"
                        src={require("../../assets/github.png")}
                        alt=""
                      ></img>
                      <a href="https://github.com/BrunoFaria93">Github</a>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/login")}
                    className="flex gap-1 h-12 justify-end mr-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => navigate("/login")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                    SignOut
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="h-auto flex justify-center text-2xl items-center w-full text-[#674188]">
          <img
            onClick={() => navigate("/")}
            className="h-44 w-44 ml-2 object-cover"
            src={require("../../assets/logoGLA.png")}
            alt="cameraIcont"
          />
        </div>
        <div onClick={() => navigate("/cart")} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 mr-3 text-white"
            onClick={() => navigate("/cart")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {numCart > 0 && (
            <>
              <div className="bg-orange-600 absolute -top-2 right-2 rounded-full h-4 w-4 animate-ping "></div>
              <div className="bg-orange-600 absolute -top-2 right-2  rounded-full h-4 w-4 flex justify-center items-center">
                <span className="text-[8px] text-white">{numCart}</span>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
