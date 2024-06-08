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
      <p className="-my-80 mx-10 tablet:-translate-y-80 text-wrap text-xl tracking-wide font-serif text-gray-600 movil:hidden tablet:flex">
        Software para administrar tu Consultas
      </p>
      <Modalp
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={"Sign in to your account"}
      />
    </>
  );
};
