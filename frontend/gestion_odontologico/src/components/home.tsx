export const Hdashboard = () => {
  return (
    <>
      <main
        className="
        tablet:flex tablet:place-content-evenly tablet:place-items-center tablet:w-full tablet:h-[15rem] tablet:-my-[16.7em] tablet:static tablet:bg-white
        laptop:flex laptop:place-content-evenly laptop:place-items-center laptop:w-full laptop:h-[10rem] laptop:-my-[9em] laptop:static laptop:bg-white
        desktop:flex desktop:place-content-evenly desktop:place-items-center desktop:w-full desktop:h-[15rem] desktop:my-[27em] desktop:static desktop:bg-white
        movil:flex movil:place-content-evenly movil:place-items-center movil:w-full movil:h-[23rem] movil:my-[8em] movil:-z-30 movil:absolute movil:bg-blue-300"
      >
        <section className="flex place-content-evenly w-full h-full">
          <ul className="tablet:flex tablet:place-content-evenly tablet:w-full tablet:h-full movil:mx-1">
            <li className="flex place-content-center flex-col bg-blue-300 w-60 laptop:w-80 desktop:w-96 desktop:h-60 laptop:h-60 rounded-[0.5em]">
              <article>
                <div className="flex place-content-evenly">
                  <strong className="material-symbols-outlined text-white text-[4em]">
                    support_agent
                  </strong>
                  <ul className="flex flex-col place-content-center ">
                    <li>
                      <p className="text-white text-sm">Curtomer Support</p>
                    </li>
                    <li className="text-white">
                      <b>+ 000-000-000</b>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col text-wrap mx-[1.5em]">
                    <li>
                      <p className="text-white text-sm">
                        Get The Quality Core That You Deserve Immediately
                      </p>
                    </li>
                    <li className="">
                      <button className="text-white border-solid border-2 border-white w-[12em] h-[2.5em] my-[0.5rem]">
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
            <li className="tablet:flex tablet:place-content-center tablet:flex-col tablet:bg-blue-300 tablet:w-96 laptop:w-96 laptop:h-60 desktop:w-80 tablet:rounded-[0.5em]">
              <article>
                <ul className="flex gap-5 mx-3">
                  <li>
                    <strong className="material-symbols-outlined text-white text-[4em]">
                      calendar_month
                    </strong>
                  </li>
                  <li className="text-center place-content-center text-white">
                    <b>Opening Hours</b>
                  </li>
                </ul>
                <table className="mx-5">
                  <tr className="text-white">
                    <td className="tablet:border-b-2 tablet:border-blue-400 tablet:text-md">
                      Montay - Friday
                    </td>
                    <td className="tablet:border-b-2 tablet:border-blue-400">
                      8:00 AM - 7:00 PM
                    </td>
                  </tr>
                  <tr className="text-white">
                    <td className="tablet:border-b-2 tablet:border-blue-400">
                      Saturday
                    </td>
                    <td className="tablet:border-b-2 tablet:border-blue-400">
                      7:30 AM - 7:30 PM
                    </td>
                  </tr>
                  <tr className="text-white">
                    <td>Sunday</td>
                    <td>Close</td>
                  </tr>
                </table>
                <footer className="flex place-content-center place-items-center w-60 bg-gray-100 my-1 mx-10 rounded-lg text-blue-300 h-10">
                  <a href="">you can make an appointment</a>
                </footer>
              </article>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
