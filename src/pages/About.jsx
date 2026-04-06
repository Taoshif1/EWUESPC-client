import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>EWUESPC | About</title>
      </Helmet>

      <section className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">About EWUESPC</h1>
          <p className="mt-4 text-base-content/70">
            Learn more about East West University E-Sports Club, our mission,
            community, and vision.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
