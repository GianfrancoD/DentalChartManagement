import { useState } from "react";
import { ImageController } from "../controller/imgController";
import { Modalp } from "./modalPage";

export const Menu: typeof ImageController = ({ ...brev }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav className="bg-gray-200/70 p-5 fixed w-full">
          <ul className="flex place-content-around flex-wrap">
            <li className="mr-10">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/12/15/50/dentistry-150409_1280.png"
                alt="logotipo diente"
                className="w-5 h-7"
              />
            </li>
            <li className=" place-content-center text-gray-400 m-1 movil:hidden tablet:flex">
              <a href="">Home</a>
            </li>
            <li className=" place-content-center text-gray-400 m-1 movil:hidden tablet:flex">
              <a href="">About</a>
            </li>
            <li className=" place-content-center text-gray-400 m-1 movil:hidden tablet:flex">
              <a href="">Contact</a>
            </li>
            <li className="ml-10 w-20 h-8 text-center place-content-center text-blue-500 rounded-xl cursor-pointer">
              <button onClick={handleOpenModal}>
                <span className="material-symbols-outlined size-5 m-1">
                  login
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <ImageController {...brev} />
      <div className="desktop:-my-[8em] laptop:-my-[4em] tablet:-my-[1.7em] tablet:mx-10 tablet:-translate-y-80 text-wrap tablet:text-[3em] uppercase tablet:tracking-wide font-extralight tablet:text-blue-800 movil:hidden tablet:flex">
        <ul>
          <h1>
            <li className="- font-black">
              Clinical Records Management Software
            </li>
            <li className="font-black">
              everything for your dental management
            </li>
          </h1>
          <li className="text-sm">
            👇🏻¿do you want agend a appoitment with the dentist? 👇🏻
          </li>
          <button className="bg-gray-200 w-[10em] h-[3em] text-[0.3em] rounded-md text-blue-500 uppercase flex place-content-evenly place-items-center m-5">
            appoitment
            <span className="material-symbols-outlined">oral_disease</span>
          </button>
        </ul>
      </div>
      <Modalp
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={"Sign in to your account"}
      />
    </>
  );
};
