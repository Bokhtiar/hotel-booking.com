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

      <div className=" ">
        asdfasd
      </div>
    </section>
  );
};
