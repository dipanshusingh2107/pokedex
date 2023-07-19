import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-md">
        <div className="row w-100">

          <div className="col align-self-start">
            <NavLink to="/"><img src="/logo.svg" alt="" /></NavLink>
            </div>

          <div className="col align-self-center text-end float-end">
            <NavLink to="/search">GO TO SEARCH</NavLink>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
