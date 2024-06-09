import { Props } from "../interfaces/modal_interfaces";

export const Modalp: React.FC<Props> = ({ isOpen, onClose, title }) => {
  const handleCloseModal = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="w-full h-full bg-black bg-opacity-50 backdrop-blur-sm fixed flex place-content-center place-items-center -translate-y-[26.2rem] rounded tablet:-translate-y-[48.6rem] laptop:-translate-y-[47.8rem] desktop:-translate-y-[31.9rem] movil:-translate-y-[7.9rem]">
          <div className="bg-white p-5 rounded-[1.5rem] flex flex-col justify-center gap-5 tablet:w-[43em] tablet:h-[44em] tablet:mb-10 movil:w-60 movil:h-96 movil:translate-y-10">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/15/50/dentistry-150409_1280.png"
              alt="Logo diente modal"
              className="tablet:w-[8em] tablet:h-[15em] tablet:m-5 tablet:translate-x-[17em] tablet:-translate-y-[5em] movil:w-[2em] movil:h-[4em] movil:m-[5em] movil:translate-x-[0.5em] movil:translate-y-[3em]"
            />
            <h1 className="tablet:flex tablet:place-content-center tablet:text-wrap tablet:text-3xl tablet:-translate-y-[2em] movil:flex movil:place-content-center movil:text-wrap movil:text-2xl movil:-translate-y-[2em] text-blue-600">
              {title}
            </h1>
            <div className="tablet:flex tablet:place-content-center tablet:flex-col tablet:place-items.center tablet:-translate-y-[3em] tablet:m-auto movil:flex movil:place-content-center movil:flex-col movil:place-items.center movil:-translate-y-[4.5em] movil:m-auto">
              <label htmlFor="" className="">
                <span className="material-symbols-outlined tablet:material-symbols-outlined tablet:translate-y-[1.6em] tablet:translate-x-[1em] movil:material-symbols-outlined movil:translate-y-[1.7em] movil:translate-x-[0.3em] text-[1.4em]">
                  id_card
                </span>{" "}
                Name
              </label>
              <input
                type="text"
                placeholder="Write your Name"
                className="tablet:flex tablet:place-content-center tablet:w-[30rem] tablet:h-10 tablet:text-center tablet:bg-gray-50 tablet:rounded-lg tablet:border-solid tablet:border-2 tablet:border-gray-200 tablet:shadow-lg tablet:focus:shadow-gray-500/50 tablet:placeholder:text-gray-400 movil:flex movil:place-content-center movil:w-[12rem] movil:h-10 movil:text-center movil:bg-gray-50 movil:rounded-lg movil:border-solid movil:border-2 movil:border-gray-200 movil:shadow-lg movil:focus:shadow-gray-500/50 movil:placeholder:text-gray-400 movil:text-sm"
              />
              <label htmlFor="">
                <span className="material-symbols-outlined tablet:material-symbols-outlined tablet:translate-x-[1em] tablet:translate-y-[1.6em] movil:material-symbols-outlined movil:translate-y-[1.7em] movil:translate-x-[0.3em] text-[1.4em]">
                  password
                </span>
                Password
              </label>
              <input
                type="text"
                placeholder="Write your Password"
                className="tablet:flex tablet:place-content-center tablet:w-[30rem] tablet:h-10 tablet:text-center tablet:bg-gray-50 tablet:rounded-lg tablet:border-solid tablet:border-2 tablet:border-gray-200 tablet:shadow-lg tablet:focus:shadow-gray-500/50 tablet:placeholder:text-gray-400 movil:flex movil:place-content-center movil:w-[12rem] movil:h-10 movil:text-center movil:bg-gray-50 movil:rounded-lg movil:border-solid movil:border-2 movil:border-gray-200 movil:shadow-lg movil:focus:shadow-gray-500/50 movil:placeholder:text-gray-400 movil:text-sm"
              />
            </div>
            <strong className="flex flex-wrap tablet:translate-x-[34em] tablet-translate-y-[3em] movil:translate-x-[0em] movil:-translate-y-[4.5em] movil:text-sm">
              <a href="#">Forgot password?</a>
            </strong>
            <button className=" w-60 h-10 p-2  place-content-center place-items-center translate-x-[15em] -translate-y-10 bg-blue-400 rounded text-white movil:-translate-x-[1.3em] movil:-translate-y-[4.6em] movil:w-[8em] movil:ml-auto movil:mr-[0.7em] movil:mb-2 tablet:w-[20em] tablet:m-auto tablet:translate-x-[1em] tablet:-translate-y-[3em]">
              Send
            </button>
            <button
              onClick={handleCloseModal}
              className="tablet:-translate-y-[35.5em] tablet:translate-x-[18.7em] movil:translate-x-[6em] movil:-translate-y-[26.9em]"
            >
              <span className="material-symbols-outlined">Cancel</span>
            </button>
            <div className="translate-y-8 movil:-translate-y-[8.7em] tablet:translate-y-[2em]">
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
