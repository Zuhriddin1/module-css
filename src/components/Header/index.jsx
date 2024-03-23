import logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={logo} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img src={logo} className="ml-4" alt="" />
        <span className="pl-5 text-xl text-white">Kreed</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>About us</summary>
              <ul className="p-2">
                <li>
                  <a>How it works</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-inherit border-white border rounded-2xl mr-5">Login</a>
      </div>
    </div>
  );
}

export default Header;
