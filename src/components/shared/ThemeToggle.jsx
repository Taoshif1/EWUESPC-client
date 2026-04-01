import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "ewuesc-dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) =>
      prev === "ewuesc-dark" ? "ewuesc-light" : "ewuesc-dark"
    );
  };

  return (
    <button onClick={handleToggle} className="btn btn-ghost btn-circle">
      {theme === "ewuesc-dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};