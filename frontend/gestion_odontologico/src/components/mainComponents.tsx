export const Maincomponent = () => {
  return (
    <>
      <header className="text-white m-16 flex place-content-center">
        <h1 className="movil:text-[2.5em] tablet:text-[4em] text-center font-bold">
          Page for dentist
          <p className="tablet:text-[0.3em] tablet:w-[35em] tablet:m-auto movil:text-[0.5em] movil:w-[14em] font-light m-3 text-gray-400">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </h1>
      </header>
      <figure className="movil:m-5 laptop:m-[10em]">
        <img
          src="https://preview.cruip.com/open-pro/images/hero-image-01.jpg"
          alt=""
        />
      </figure>
      <main></main>
    </>
  );
};
