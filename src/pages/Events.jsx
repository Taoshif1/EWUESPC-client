import { Helmet } from "react-helmet-async";

export const Events = () => {
  return (
    <>
      <Helmet>
        <title>EWUESPC | Events</title>
      </Helmet>

      <section className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Events</h1>
          <p className="mt-4 text-base-content/70">
            Explore EWUESPC events, activities, gaming competitions, and club
            experiences.
          </p>
        </div>
      </section>
    </>
  );
};

export default Events;
