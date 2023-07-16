import { PrimaryButton } from "../../components/button";

export const Home = () => {
  const myStyle = {
    backgroundImage:
      "linear-gradient(rgba(45,18,104, 0.7), rgba(45,18,104, 0.7)),url('/images/banner.jpg')",
    backgroundSize: "cover",
    opacity: 0.5,
  };

  return (
    <section>
      {/* banner area  */}
      <div
        className=" md:h-[800px] h-[600px] h-screen flex items-center justify-center static"
        style={myStyle}
      >
        <div className="text-center md:w-[750px] w-full ">
          <h2 className="text-white md:text-7xl text-4xl font-nunito font-black">
            Enjoy Your Beautiful Moment
          </h2>
          <p className=" text-white text-[16px] my-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button className="btn bg-secondary text-white px-7 border-secondary rounded-full text-md">
            Booking Now
          </button>
        </div>
      </div>

      <div className="bg-white py-16 shadow-2xl container md:flex items-center absolute md:bottom-10 bottom-[-55%] md:left-[13%] ">
        <div className="mx-2">
          <label htmlFor="" className="font-bold text-gray-600">
            Check in
          </label>{" "}
          <br />
          <input
            type="date"
            className="border border-secondary p-3 px-8 md:w-[300px] w-full  "
            name=""
            id=""
          />
        </div>

        <div className="mx-2">
          <label htmlFor="" className="font-bold text-gray-600">
            Check out
          </label>
          <br />
          <input
            type="date"
            className="border border-secondary  p-3 px-8 md:w-[300px] w-full"
            name=""
            id=""
          />
        </div>

        <div className="mx-2">
          <label htmlFor="" className="font-bold text-gray-600">
            Adult
          </label>
          <br />
          <input
            type="number"
            className="border border-secondary  px-4 py-3 w-full "
            name=""
            value="0"
            id=""
          />
        </div>

        <div className="mx-2">
          <label htmlFor="" className="font-bold text-gray-600">
            Child
          </label>
          <br />
          <input
            type="number"
            className="border border-secondary  px-4 py-3 w-full "
            name=""
            value="0"
            id=""
          />
        </div>

        <div className="mx-2">
          <input
            type="submit"
            className="border border-secondary  px-12 py-3 w-full mt-6 bg-secondary text-white text-lg "
            name=""
            value="Check availablity"
            id=""
          />
        </div>
      </div>

      {/* about section */}
      <section className="mt-80 md:mt-48 container">
        <div className="  grid grid-cols-2 md:grid-cols-7 gap-4">
          <div className="col-span-3">
            <div className="">
              <img src="/images/a1.jpg" className=" rounded" alt="" />
            </div>
            <div className="grid grid-cols-2 mt-4 items-center gap-5">
              <img className="rounded" src="/images/a2.jpg" alt="" />
              <img className="rounded" src="/images/a2.jpg" alt="" />
            </div>
          </div>
          {/* image  */}
          {/* about section */}
          <div className=" col-span-4">
            {/* title */}
            <span className=" text-secondary text-2xl font-roboto font-bold">
              About Us
            </span>
            {/* welcome message */}
            <h2 className=" text-third md:text-5xl text-2xl font-bold my-8">
              Welcome to Relaxly Modern Hotel Rooms and Services
            </h2>

            {/* text */}
            <p className="text-gray-500 text-justify font-roboto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>

            {/* hotel about counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="p-10 shadow text-center rounded">
                <span class=" text-secondary text-[50px] material-symbols-outlined">
                  apartment
                </span>
                <h3 className=" text-2xl font-bold">500</h3>
                <span className="text-gray-500">Rooms</span>
              </div>
              {/* rooms */}

              <div className="p-10 shadow text-center rounded">
                <span class=" text-secondary text-[50px] material-symbols-outlined">
                  account_circle
                </span>
                <h3 className=" text-2xl font-bold">1500</h3>
                <span className="text-gray-500">Customers</span>
              </div>
              {/* rooms */}

              <div className="p-10 shadow text-center rounded">
                <span class=" text-secondary text-[50px] material-symbols-outlined">
                  local_shipping
                </span>
                <h3 className=" text-2xl font-bold">300</h3>
                <span className="text-gray-500">Amenities</span>
              </div>
              {/* rooms */}

              <div className="p-10 shadow text-center rounded">
                <span class=" text-secondary text-[50px] material-symbols-outlined">
                  percent
                </span>
                <h3 className=" text-2xl font-bold">230</h3>
                <span className="text-gray-500">Packages</span>
              </div>
              {/* rooms */}
              <div className="my-8">
                <PrimaryButton></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* choose your offer */}
      <section>
        <h3  className="">Choose your offer</h3>
      </section>
    </section>
  );
};
