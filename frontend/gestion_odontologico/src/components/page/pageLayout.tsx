import { img_interfaces } from "../../interfaces/img_interface";

export const Layout: React.FC<img_interfaces> = ({ src, alt }) => {
  return (
    <div className="m-1">
      <header className="text-white m-0 flex place-content-center flex-col place-items-center">
        <h1 className="movil:text-[2.5em] tablet:text-[4em] text-center font-bold">
          This´s Software of and for dental officeing
          <p className="tablet:text-[0.3em] tablet:w-[35em] tablet:m-auto movil:text-[0.5em] movil:w-[15em] movilM:w-[18em] font-light m-3 text-gray-400">
            here we facility the life with the software, where your can
            visuality all result of you consult of each of client.
          </p>
        </h1>
        <br />
        <ul className="tablet:grid tablet:grid-cols-4 tablet:grid-flow-row-5 gap-5 movil:-mx-10 movil:flex movil:flex-col movil:w-full movil:p-5">
          <li className="bg-blue-500 px-10 py-3 tablet:px-5 col-start-2 rounded movil:flex movil:place-content-center movil:place-items-center">
            Start free Trial
          </li>
          <li className="bg-gray-700 px-10 py-3 col-start-3 rounded movil:flex movil:place-content-center movil:place-items-center">
            Learn more
          </li>
        </ul>
        <figure className="movil:m-5 laptop:m-[2em]">
          <img src={src} alt={alt} />
        </figure>
      </header>
      <main></main>
    </div>
  );
};
