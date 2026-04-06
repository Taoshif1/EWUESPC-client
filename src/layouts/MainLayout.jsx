import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
