import { useState, MouseEvent } from "react";

export const Navegator: React.FC = () => {
  const [iconos, setIcononos] = useState("menu");
  const [showMenu, setShowMenu] = useState(false);

  const toggleIcon = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIcononos((preIcon) => (preIcon === "menu" ? "close" : "menu"));
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className=" bg-red-0 h-[5rem] place-content-center">
        <ul className="flex place-content-around place-items-center">
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/15/50/dentistry-150409_1280.png"
              alt=""
              className="w-[2em] h-[3em]"
            />
          </li>

          <li>
            <ul
              className={`tablet:flex tablet:flex-row tablet:gap-10 tablet:relative tablet:m-0 tablet:ml-0 tablet:bg-transparent
                movil:absolute movil:-ml-[51%] movil:m-5 movil:text-left text-white movil:bg-black movil:w-full  ${
                  !showMenu ? "movil:hidden tablet:flex" : ""
                }`}
            >
              <li className="movil:m-5">
                <a href="">Home</a>
              </li>
              <li className="movil:m-5">
                <a href="">Blog</a>
              </li>
              <li className="movil:m-5">
                <a href="">bout</a>
              </li>
              <hr className="movil:w-[80%] m-auto text-white" />
              <a
                href=""
                className="tablet:hidden movil:rounded movil:m-5 movil:absolute movil:text-center movil:w-[17rem] movil:bg-indigo-0 movil:px-3.5 movil:py-2.5 movil:text-md movil:font-semibold movil:text-indigo-500 movil:hover:bg-indigo-500 movil:focus-visible:outline movil:focus-visible:outline-2 movil:focus-visible:outline-offset-2 movil:focus-visible:outline-indigo-600"
              >
                Sign In
              </a>
              <a
                href="#"
                className="tablet:hidden movil:rounded movil:-bottom-[9em] movil:m-5 movil:absolute movil:text-center movil:w-[17rem] movil:bg-indigo-600 movil:px-3.5 movil:py-2.5 movil:text-md movil:font-semibold movil:text-white movil:shadow-sm movil:hover:bg-indigo-500 movil:focus-visible:outline movil:focus-visible:outline-2 movil:focus-visible:outline-offset-2 movil:focus-visible:outline-indigo-600"
              >
                Sign Up
              </a>
            </ul>
          </li>
          <li>
            <a
              href=""
              className="movil:hidden tablet:flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </a>
            <div>
              <span className="material-symbols-outlined tablet:hidden text-white">
                <a
                  href=""
                  className="material-symbols-outlined tablet:hidden "
                  onClick={toggleIcon}
                >
                  {iconos}
                </a>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
