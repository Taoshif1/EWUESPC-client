import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>EWUESC | Home</title>
      </Helmet>

      <section className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h1 className="glow-text text-5xl font-black md:text-7xl">
            EWUESPC
          </h1>
          <p className="mt-4 text-lg opacity-80">
            East West University E-Sports Club
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;