import { Link } from "react-router-dom";
import { Title } from "../../components/title";
import { PrimaryButton } from "../../components/button";

export const Contact = () => {
  return (
    <section className="">
      {/* bradcrubms */}
      <div className=" bg-primary relative">
        <img
          className="w-full opacity-50 md:h-96 h-48"
          src="/images/bradCrumbs3.jpg"
          alt=""
        />
        <div className=" absolute top-10 inset-0 w-96 h-24 mx-auto my-auto text-center text-white">
          <h3 className="text-4xl md:text-6xl font-bold ">Contact Us</h3>
          <Link to="" className="font-bold ">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link className="font-bold" to="">
            Contact Us
          </Link>
        </div>
      </div>

      {/* content */}
      <section className=" my-24 container">
        <Title name="Contact info" align="text-center"></Title>
        <p className="inset-0 mx-auto text-center text-gray-500 font-roboto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        {/* contact information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-16">
          {/* email */}
          <div className="">
            <div className="flex items-center gap-4 my-3">
              <div className="border border-secondary rounded-full">
                <span class="material-symbols-outlined text-4xl text-secondary p-2">
                  mail
                </span>
              </div>
              <p>
                <strong className="text-2xl">Email</strong>
                <br />
                <span className="text-xl text-gray-500">
                  Bokhtiar.swe@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* phone */}
          <div className="">
            <div className="flex items-center gap-4 my-3">
              <div className="border border-secondary rounded-full">
                <span class="material-symbols-outlined text-4xl text-secondary p-2">
                  call
                </span>
              </div>
              <p>
                <strong className="text-2xl">Phone</strong>
                <br />
                <span className="text-xl text-gray-500">+880 1638-107361</span>
              </p>
            </div>
          </div>

          {/* location */}
          <div className="">
            <div className="flex items-center gap-4 my-3">
              <div className="border border-secondary rounded-full">
                <span class="material-symbols-outlined text-4xl text-secondary p-2">
                  location_on
                </span>
              </div>
              <p>
                <strong className="text-2xl">Location</strong>
                <br />
                <span className="text-xl text-gray-500">
                  56 King Street, New York
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* contact form */}
        <section className="grid  grid-cols-1 md:grid-cols-2 gap-7">
          {/* contact form */}
          <div className="shadow px-7 py-10">
            <h2 className="text-third text-4xl font-bold font-roboto mb-4">
              Get In Touch
            </h2>
            <form action="">
              <input
                type="text"
                className="w-full border-2 p-3 rounded-lg my-3"
                placeholder="Name"
                name=""
                id=""
              />
              <input
                type="text"
                className="w-full border-2 p-3 rounded-lg my-3"
                placeholder="Name"
                name=""
                id=""
              />
              <input
                type="text"
                className="w-full border-2 p-3 rounded-lg my-3"
                placeholder="Name"
                name=""
                id=""
              />
              <textarea
                name=""
                id=""
                cols="10"
                rows="4"
                className="w-full border-2 p-3 rounded-lg my-3"
              ></textarea>

              <PrimaryButton name="Send Message"></PrimaryButton>
            </form>
          </div>

          {/* location link */}
          <div className="shadow px-7 py-10">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="510"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://2yu.co">2yu</a>
                <br />
                <style>.mapouter</style>
                <a href="https://embedgooglemap.2yu.co">
                  html embed google map
                </a>
                <style>.gmap_canvas </style>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
