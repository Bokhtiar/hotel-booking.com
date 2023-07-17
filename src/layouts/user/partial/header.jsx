import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <section>
      {/* top navbar */}
      <section className=" bg-primary text-white py-5 font-roboto ">
        <div className="md:flex justify-between container items-center">
          {/*location phone */}
          {/* location */}
          <section className="md:flex justify-between md:gap-4 hidden md:block">
            <div className="flex gap-1 items-center">
              <span class="material-symbols-outlined text-[18px]">
                location_on
              </span>
              <span>12 Poor Street, New York</span>
            </div>
            {/* phone */}
            <div className="flex gap-1 items-center">
              <span class="material-symbols-outlined text-[18px]">call</span>
              <span>+1 964 565 87652</span>
            </div>
          </section>

          {/* auth button */}
          <section>
            {/* login */}
            <section className="flex md:justify-between gap-4 ">
              <div className="flex gap-1 items-center">
                <span class="material-symbols-outlined text-[18px]">
                  person_add
                </span>
                <span>Register</span>
              </div>
              {/* register*/}
              <div className="flex gap-1 items-center">
                <span class="material-symbols-outlined text-[18px]">
                  person
                </span>
                <span>Login</span>
              </div>
            </section>
          </section>
        </div>
      </section>

      {/* navbar */}
      <section className=" bg-gray-50">
        <div className="navbar container md:py-6 py-3">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost p-0">
              <img className="h-7 md:h-12" src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[20px]">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about-us">About Us</Link>
              </li>

              <li>
                <Link to="/">Hotel</Link>
              </li>

              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>

              {/* <li tabIndex={0}>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/">Submenu 1</Link>
                    </li>
                    <li>
                      <Link to="/">Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
          <div className=" navbar-end">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-36 container right-0"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/">About Us</Link>
                </li>

                <li>
                  <Link to="/">Hotel</Link>
                </li>
                {/* <li>
                  <Link to="/">Parent</Link>
                  <ul className="p-2">
                    <li>
                      <Link to="/">Submenu 1</Link>
                    </li>
                    <li>
                      <Link to="/">Submenu 2</Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
