import { Navigation } from "../nav/navBar";

interface forms {
  title: string;
  name: string;
  lastName: string;
  email: string;
  phonenumber: number;
}

export const AppointmentService: React.FC<forms> = ({}) => {
  return (
    <>
      <Navigation
        home={"Home"}
        pricing={"Pricing"}
        appoinment={"Appoinment"}
        about={"About"}
        signIn={"Sign In"}
        signUp={"Sign Up"}
      />
      <form
        action=""
        className="border border-black flex flex-col tablet:py-[5.5%] movil:py-[2rem] movil:m-3 tablet:m-0 place-content-center place-items-center"
      >
        <header className="flex my-10 flex-wrap">
          <h1 className="text-gray-300 movil:text-[2.5em] tablet:text-[3em] text-center font-bold uppercase">
            Appointment
          </h1>
        </header>
        <ul className="flex flex-row movil:w-[80vw] movil:h-[10vh] tablet:gap-5 movil:gap-2 movil:m-4 tablet:-m-4 flex-wrap place-content-center">
          <li className="flex flex-col flex-wrap movil:w-[18.5rem] movilL:w-[21rem] tablet:w-[18.5rem] laptop:w-[24.9rem] desktop:w-[35.3rem]">
            <label htmlFor="" className="text-white">
              Name*
            </label>
            <input
              type="text"
              pattern="[a-zA-Z]+"
              minLength={5}
              maxLength={10}
              className="bg-gray-800 text-gray-400  rounded-md h-10"
              placeholder="  Name"
              required
            />
          </li>
          <li className="flex flex-col flex-wrap movil:w-[18.5rem] movilL:w-[21rem] tablet:w-[18.5rem] laptop:w-[24.9rem] desktop:w-[35.3rem]">
            <label htmlFor="" className="text-white">
              Lastname*
            </label>
            <input
              type="text"
              pattern="[a-zA-Z]+"
              minLength={5}
              maxLength={10}
              className="bg-gray-800 h-10 text-gray-400 rounded-md"
              placeholder="  Lastname"
              required
            />
          </li>
        </ul>
        <br />
        <ul className="flex flex-col gap-3 flex-wrap">
          <li>
            <label htmlFor="" className="text-white">
              Email*
            </label>
            <input
              type="email"
              className="bg-gray-800 flex w-[80vw] h-10 text-gray-400 rounded-md"
              placeholder="  Email"
              minLength={2}
              maxLength={20}
              pattern="^(?![0-9])([a-zA-Z0-9._%+ñáéíóú]+)@gmail\.com$"
              required
            />
          </li>
          <li>
            <label htmlFor="" className="text-white">
              Phone Number*
            </label>
            <input
              type="text"
              className="bg-gray-800 text-gray-400 flex w-[80vw] h-10 rounded-md"
              placeholder="  Phone Number"
              minLength={10}
              maxLength={11}
              pattern="[0-9]+"
              required
            />
          </li>
          <li>
            <label htmlFor="" className="text-white">
              Date*
            </label>
            <input
              type="date"
              className="bg-gray-800 flex w-[80vw] h-10 text-center text-gray-400 rounded-md"
              required
            />
          </li>
        </ul>
        <button className="bg-blue-500 text-white font-bold uppercase m-10 w-[10rem] h-[3rem] rounded-md">
          Send
        </button>
      </form>
    </>
  );
};
