interface Props {
  isOpen: boolean;
  onClose: boolean;
}

export const Modalp: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="w-full h-full bg-black bg-opacity-50 backdrop-blur-sm fixed flex place-content-center place-items-center -translate-y-[26.2rem] rounded tablet:-translate-y-[0.6rem] laptop:-translate-y-[7.5rem] desktop:-translate-y-[26.2rem]">
          <div className="bg-white p-5 rounded-[1.5rem] flex flex-col justify-center gap-5 w-[48em] h-[44em]">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/15/50/dentistry-150409_1280.png"
              alt="Logo"
              className="w-[8em] h-[15em] m-5 translate-x-[17em] -translate-y-[5em]"
            />
            <h1 className="flex place-content-center text-wrap text-3xl -translate-y-[2em]">
              Sign in to your account
            </h1>
            <div className="flex place-content-center flex-col place-items.center -translate-y-[3em] m-auto">
              <label htmlFor="" className="">
                <span className="material-symbols-outlined translate-y-[1.6em] translate-x-[1em]">
                  id_card
                </span>{" "}
                Nombre
              </label>
              <input
                type="text"
                placeholder="Write your Name"
                className="flex place-content-center w-[30rem] h-10 text-center bg-gray-50 rounded-lg border-solid border-2 border-gray-200 shadow-lg focus:shadow-gray-500/50 placeholder:text-gray-400"
              />
              <label htmlFor="">
                <span className="material-symbols-outlined translate-x-[1em] translate-y-[1.6em]">
                  password
                </span>
                Password
              </label>
              <input
                type="text"
                placeholder="Write your Password"
                className="flex place-content-center  w-[30rem] h-10 text-center bg-gray-50 rounded-lg border-solid border-2 border-gray-200 shadow-lg focus:shadow-gray-500/50 placeholder:text-gray-400 "
              />
            </div>
            <strong className=" flex flex-wrap translate-x-[29em] -translate-y-[3em]">
              <a href="#">Forgot password?</a>
            </strong>
            <button className=" w-60 h-10 p-2 flex flex-wrap place-content-center place-items-center translate-x-[15em] -translate-y-10 bg-blue-400 rounded text-white">
              Enviar
            </button>
            <button
              onClick={onClose}
              className="-translate-y-[35.5em] translate-x-[21em]"
            >
              <span className="material-symbols-outlined">cancel</span>
            </button>
            <div className="translate-y-8">
              <ul className="flex place-content-evenly">
                <li className="flex place-content-center place-items-center translate-x-[0em] -translate-y-0 bg-black rounded text-white h-10 w-40">
                  Twitter
                </li>
                <li className="flex place-content-center place-items-center translate-x-[0em] -translate-y-0 bg-blue-400 rounded text-white h-10 w-40">
                  Facebook
                </li>
                <li className="flex place-content-center place-items-center translate-x-[0em] -translate-y-0 bg-blue-900 rounded text-white h-10 w-40">
                  Google
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      )
    </>
  );
};
