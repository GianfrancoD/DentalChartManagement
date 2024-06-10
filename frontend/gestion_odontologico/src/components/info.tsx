export const Info = () => {
  return (
    <main className="bg-gray-50 ">
      <section
        className="tablet:grid tablet:grid-cols-2 tablet:mx-10 tablet:my-[17em]
      laptop:grid laptop:grid-cols-2 laptop:mx-10 laptop:my-[17em]
      desktop:grid desktop:grid-cols-2 desktop:mx-[15em] desktop:-my-[27em]
      movil:hidden"
      >
        <article className="tablet:text-left tablet:place-content-center tablet:text-gray-300">
          <h1 className="tablet:text-[1.5em]">
            <b>Software Solution clinical appointments</b>
          </h1>
          <p className="tablet:text-sm">
            you software solution from your problem of appointment
          </p>
        </article>
        <article>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2016/02/08/23/36/isolated-1188036_1280.png"
              alt=""
              className="tablet:w-[35em] tablet:h-[15em]"
            />
          </div>
        </article>
      </section>
    </main>
  );
};
