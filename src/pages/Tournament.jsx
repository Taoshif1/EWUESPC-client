
import { Helmet } from "react-helmet-async";

export const Tournament = () => {
  return (
    <>
      <Helmet>
        <title>EWUESC | Tournaments</title>
      </Helmet>

      <section className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          
          <h1 className="text-4xl font-bold md:text-5xl">
            Tournaments
          </h1>

          <p className="mt-4 text-gray-400">
            Browse and join upcoming esports tournaments.
          </p>

        </div>

        {/* Simple Tournament List */}
        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          
          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">
              Valorant Tournament
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Date: 12 April 2026
            </p>
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Join
            </button>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">
              FIFA Tournament
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Date: 18 April 2026
            </p>
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Join
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Tournament;
