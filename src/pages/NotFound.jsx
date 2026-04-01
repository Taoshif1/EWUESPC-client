import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-black">404</h1>
      <p className="text-lg opacity-70">Page not found</p>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;