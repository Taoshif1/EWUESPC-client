export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-base-200 px-6 py-10 text-center">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} EWUESC — East West University E-Sports Club
      </p>
    </footer>
  );
};

export default Footer;