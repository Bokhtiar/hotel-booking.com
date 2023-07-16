import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className=" py-24 container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* about */}
        <div className="">
          <img src="/images/logo.png" className="h-12" alt="" />
          <p className="py-6 text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-1">
            <Link to="" className=" bg-secondary text-white rounded-full">
              <span class="material-symbols-outlined p-2">location_on</span>
            </Link>

            <Link to="" className=" bg-secondary text-white rounded-full">
              <span class="material-symbols-outlined p-2">location_on</span>
            </Link>

            <Link to="" className=" bg-secondary text-white rounded-full">
              <span class="material-symbols-outlined p-2">location_on</span>
            </Link>

            <Link to="" className=" bg-secondary text-white rounded-full">
              <span class="material-symbols-outlined p-2">location_on</span>
            </Link>
          </div>
        </div>

        {/* contact information */}
        <div>
          <div className="flex items-center gap-4 my-3">
            <span class="material-symbols-outlined text-4xl text-secondary">
              mail
            </span>
            <p>
              <strong className="text-2xl">Email</strong>
              <br />
              <span className="text-xl text-gray-500">
                Bokhtiar.swe@gmail.com
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 my-3">
            <span class="material-symbols-outlined text-4xl text-secondary">
              call
            </span>
            <p>
              <strong className="text-2xl">Phone</strong>
              <br />
              <span className="text-xl text-gray-500">+880 1638-107361</span>
            </p>
          </div>

          <div className="flex items-center gap-4 my-3">
            <span class="material-symbols-outlined text-4xl text-secondary">
              location_on
            </span>
            <p>
              <strong className="text-2xl">Email</strong>
              <br />
              <span className="text-xl text-gray-500">
                56 King Street, New York
              </span>
            </p>
          </div>
        </div>

        {/* quick link */}
        <div className="">
          <h3 className="text-3xl text-third font-bold">Quick links</h3>
          <div className="flex items-center my-4 md:gap-36 gap-8">
            <div>
              <ul>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    About Us
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    Cookie Policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    Booking Policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    About Us
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    Cookie Policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    Booking Policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-md text-gray-600" to="">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
