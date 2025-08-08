import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
      <div className="flex justify-end p-4">
        <Link
          to="https://resume-ats-8fe79.web.app/"
          className="primary-button w-fit text-base font-medium"
          rel="noopener noreferrer"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
