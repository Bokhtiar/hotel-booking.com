import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/button";
import { MetaTitle, Title } from "../../components/title";

export const Home = () => {
  const myStyle = {
    backgroundImage:
      "linear-gradient(rgba(45,18,104, 0.7), rgba(45,18,104, 0.7)),url('/images/banner.jpg')",
    backgroundSize: "cover",
  };

  return (
    <section className=" ">
      {/* banner area  */}
      <div className="bg-primary">
        <div
          className=" md:h-[800px] h-[600px] h-screen flex items-center justify-center static opacity-100"
          style={myStyle}
        >
          <div className="text-center md:w-[750px] w-full ">
            <h2 className="text-white md:text-7xl text-4xl font-nunito font-black">
              Enjoy Your Beautiful Moment
            </h2>
            <p className=" text-white text-[16px] my-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <button className="btn bg-secondary text-white px-7 border-secondary rounded-full text-md">
              Booking Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 shadow-2xl container md:flex items-center absolute md:bottom-10 bottom-[-40%] md:left-[12%] rounded">
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
      <section className="bg-gray-50 py-12">
        <section className="mt-80 md:mt-48 container ">
          <div className="  grid grid-cols-2 md:grid-cols-7 gap-4">
            <div className="col-span-3">
              <div className="">
                <img className=" rounded" src="/images/a1.jpg" alt="" />
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
      </section>

      {/* choose your offer */}
      <section className="bg-gray-50 py-12">
        <section className="mb-24 container ">
          {/* metatitle */}
          <MetaTitle name="Choose your offer" align="text-center"></MetaTitle>
          <Title name="One More Offer For You!" align="text-center"></Title>
          <section className="grid md:grid-cols-3 gap-6 my-16">
            <div className=" col-span-1 bg-primary  border rounded-xl">
              <div className="relative  ">
                <img
                  className=" opacity-60 rounded-xl"
                  src="/images/offer1.jpg"
                  alt=""
                />
                <div className=" absolute top-0 p-4">
                  <span className="text-4xl font-bold text-white font-quicksand">
                    Worl tour
                  </span>
                  <p className=" text-justify text-md text-gray-200 my-3">
                    Get the best international offers and deals world tour
                    packages from here.
                  </p>
                  <PrimaryButton
                    name="Book Now"
                    align="text-left"
                  ></PrimaryButton>
                </div>
              </div>
            </div>

            <div className=" col-span-1 bg-primary rounded-xl">
              <div className="relative  ">
                <img
                  className=" rounded-xl  opacity-60"
                  src="/images/offer2.jpg"
                  alt=""
                />
                <div className=" absolute top-0 p-4">
                  <span className="text-4xl font-bold text-white font-quicksand">
                    Hot Air Balloon
                  </span>
                  <p className=" text-justify text-md text-gray-200 my-3">
                    Get the best international offers and deals world tour
                    packages from here.
                  </p>
                  <PrimaryButton
                    name="Book Now"
                    align="text-left"
                  ></PrimaryButton>
                </div>
              </div>
            </div>

            <div className=" col-span-1 bg-primary rounded-xl">
              <div className="relative">
                <img
                  className="opacity-60 rounded-xl"
                  src="/images/offer3.jpg"
                  alt=""
                />
                <div className=" absolute top-0 p-4">
                  <span className="text-4xl font-bold text-white font-quicksand">
                    Mountainous Offer
                  </span>
                  <p className=" text-justify text-md text-gray-200 my-3">
                    Get the best international offers and deals world tour
                    packages from here.
                  </p>
                  <PrimaryButton
                    name="Book Now"
                    align="text-left"
                  ></PrimaryButton>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* choose your room */}
      <section className=" bg-gray-100">
        <div className="container py-24">
          <MetaTitle name="Choose your Rooms" align="text-center"></MetaTitle>
          <Title name="Featured Rooms" align="text-center"></Title>
          <div className="text-center text-gray-600 text-md mt-4 font-roboto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make <br /> a type specimen book.
          </div>

          {/* room list */}

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 ">
            <div className="bg-white rounded-2xl ">
              <img src="/images/r1.jpg" className="w-full rounded-2xl" alt="" />
              <p className="px-4 py-4  bg-white rounded">
                <span className="text-2xl font-bold text-third">
                  Deluxe Single Room
                </span>
                <br />
                <span className="font-semibold">
                  <strong className="text-xl">$200.00</strong> / Night
                </span>
              </p>

              {/* room details */}
              <div className="flex items-center justify-between">
                <Link
                  to=""
                  className="bg-secondary text-white p-2 rounded-e-2xl text-xl px-8"
                >
                  Details
                </Link>
                <div className="flex items-center gap-2 ">
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Adult 2
                  </span>
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Child 2
                  </span>
                </div>
              </div>
            </div>
            {/* end of room */}

            <div className="bg-white rounded-2xl ">
              <img src="/images/r2.jpg" className="w-full rounded-2xl" alt="" />
              <p className="px-4 py-4  bg-white rounded">
                <span className="text-2xl font-bold text-third">
                  Deluxe Single Room
                </span>
                <br />
                <span className="font-semibold">
                  <strong className="text-xl">$200.00</strong> / Night
                </span>
              </p>

              {/* room details */}
              <div className="flex items-center justify-between">
                <Link
                  to=""
                  className="bg-secondary text-white p-2 rounded-e-2xl text-xl px-8"
                >
                  Details
                </Link>
                <div className="flex items-center gap-2 ">
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Adult 2
                  </span>
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Child 2
                  </span>
                </div>
              </div>
            </div>
            {/* end of room */}

            <div className="bg-white rounded-2xl ">
              <img src="/images/r3.jpg" className="w-full rounded-2xl" alt="" />
              <p className="px-4 py-4  bg-white rounded">
                <span className="text-2xl font-bold text-third">
                  Deluxe Single Room
                </span>
                <br />
                <span className="font-semibold">
                  <strong className="text-xl">$200.00</strong> / Night
                </span>
              </p>

              {/* room details */}
              <div className="flex items-center justify-between">
                <Link
                  to=""
                  className="bg-secondary text-white p-2 rounded-e-2xl text-xl px-8"
                >
                  Details
                </Link>
                <div className="flex items-center gap-2 ">
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Adult 2
                  </span>
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Child 2
                  </span>
                </div>
              </div>
            </div>
            {/* end of room */}

            <div className="bg-white rounded-2xl ">
              <img src="/images/r4.jpg" className="w-full rounded-2xl" alt="" />
              <p className="px-4 py-4  bg-white rounded">
                <span className="text-2xl font-bold text-third">
                  Deluxe Single Room
                </span>
                <br />
                <span className="font-semibold">
                  <strong className="text-xl">$200.00</strong> / Night
                </span>
              </p>

              {/* room details */}
              <div className="flex items-center justify-between">
                <Link
                  to=""
                  className="bg-secondary text-white p-2 rounded-e-2xl text-xl px-8"
                >
                  Details
                </Link>
                <div className="flex items-center gap-2 ">
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Adult 2
                  </span>
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Child 2
                  </span>
                </div>
              </div>
            </div>
            {/* end of room */}

            <div className="bg-white rounded-2xl ">
              <img src="/images/r5.jpg" className="w-full rounded-2xl" alt="" />
              <p className="px-4 py-4  bg-white rounded">
                <span className="text-2xl font-bold text-third">
                  Deluxe Single Room
                </span>
                <br />
                <span className="font-semibold">
                  <strong className="text-xl">$200.00</strong> / Night
                </span>
              </p>

              {/* room details */}
              <div className="flex items-center justify-between">
                <Link
                  to=""
                  className="bg-secondary text-white p-2 rounded-e-2xl text-xl px-8"
                >
                  Details
                </Link>
                <div className="flex items-center gap-2 ">
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Adult 2
                  </span>
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Child 2
                  </span>
                </div>
              </div>
            </div>
            {/* end of room */}

            <div className="bg-white rounded-2xl ">
              <img src="/images/r6.jpg" className="w-full rounded-2xl" alt="" />
              <p className="px-4 py-4  bg-white rounded">
                <span className="text-2xl font-bold text-third">
                  Deluxe Single Room
                </span>
                <br />
                <span className="font-semibold">
                  <strong className="text-xl">$200.00</strong> / Night
                </span>
              </p>

              {/* room details */}
              <div className="flex items-center justify-between">
                <Link
                  to=""
                  className="bg-secondary text-white p-2 rounded-e-2xl text-xl px-8"
                >
                  Details
                </Link>
                <div className="flex items-center gap-2 ">
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Adult 2
                  </span>
                  <span className="btn btn-sm rounded-bl-3xl rounded-tr-3xl text-gray-600">
                    Child 2
                  </span>
                </div>
              </div>
            </div>
            {/* end of room */}
          </section>
        </div>
      </section>

      {/* hostel service */}
      <section className=" bg-gray-50">
        <section className="container py-24">
          <MetaTitle name="Our Services" align="text-center"></MetaTitle>
          <Title name="Our Hotel Services" align="text-center"></Title>
          <div className="text-center text-gray-600 text-md mt-4 font-roboto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make <br /> a type specimen book.
          </div>

          <div className="my-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
              <div className="flex border rounded-lg py-7 px-7 hover:shadow-2xl">
                <div className="m-auto text-center">
                  <img src="/images/s.png " className="mx-auto" alt="" />
                  <h3 className="text-3xl text-third my-3 font-bold">Gym</h3>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* serviece end */}

              <div className="flex border rounded-lg py-7 px-7 hover:shadow-2xl">
                <div className="m-auto text-center">
                  <img src="/images/s2.png " className="mx-auto" alt="" />
                  <h3 className="text-3xl text-third my-3 font-bold">
                    Breakfast
                  </h3>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* serviece end */}

              <div className="flex border rounded-lg py-7 px-7 hover:shadow-2xl">
                <div className="m-auto text-center">
                  <img src="/images/s3.png " className="mx-auto" alt="" />
                  <h3 className="text-3xl text-third my-3 font-bold">
                    Swimming Pool
                  </h3>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* serviece end */}

              <div className="flex border rounded-lg py-7 px-7 hover:shadow-2xl">
                <div className="m-auto text-center">
                  <img src="/images/s.png " className="mx-auto" alt="" />
                  <h3 className="text-3xl text-third my-3 font-bold">
                    Quality Rooms
                  </h3>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* serviece end */}

              <div className="flex border rounded-lg py-7 px-7 hover:shadow-2xl">
                <div className="m-auto text-center">
                  <img src="/images/s.png " className="mx-auto" alt="" />
                  <h3 className="text-3xl text-third my-3 font-bold">
                    Parking Space
                  </h3>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* serviece end */}

              <div className="flex border rounded-lg py-7 px-7 hover:shadow-2xl">
                <div className="m-auto text-center">
                  <img src="/images/s.png " className="mx-auto" alt="" />
                  <h3 className="text-3xl text-third my-3 font-bold">
                    Pick Up & Drop
                  </h3>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* serviece end */}
            </div>
          </div>
        </section>
      </section>

      {/* cleint service */}
      <section className=" bg-gray-100">
        <section className="container py-24">
          <MetaTitle name="Testimonial" align="text-center"></MetaTitle>
          <Title name="What Our Clients Says" align="text-center"></Title>
          <div className="text-center text-gray-600 text-md mt-4 font-roboto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make <br /> a type specimen book.
          </div>

          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
              <div className="border p-10 hover:shadow-xl rounded-xl">
                <div className="flex gap-4">
                  <img
                    src="/images/c1.jpg "
                    className="rounded-full h-24 w-24"
                    alt=""
                  />
                  <p className="my-auto">
                    <span className="font-bold text-3xl">Jhon</span>
                    <br />
                    <span className="">Client</span>
                  </p>
                </div>
                <p className="text-gray-500 mt-5">
                  <span class="material-symbols-outlined text-secondary text-4xl">
                    format_quote
                  </span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              {/* client end */}

              <div className="border p-10 hover:shadow-xl rounded-xl">
                <div className="flex gap-4">
                  <img
                    src="/images/c2.jpg "
                    className="rounded-full h-24 w-24"
                    alt=""
                  />
                  <p className="my-auto">
                    <span className="font-bold text-3xl">Jhon</span>
                    <br />
                    <span className="">Client</span>
                  </p>
                </div>
                <p className="text-gray-500 mt-5">
                  <span class="material-symbols-outlined text-secondary text-4xl">
                    format_quote
                  </span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              {/* client end */}

              <div className="border p-10 hover:shadow-xl rounded-xl">
                <div className="flex gap-4">
                  <img
                    src="/images/c3.jpg "
                    className="rounded-full h-24 w-24"
                    alt=""
                  />
                  <p className="my-auto">
                    <span className="font-bold text-3xl">Jhon</span>
                    <br />
                    <span className="">Client</span>
                  </p>
                </div>
                <p className="text-gray-500 mt-5">
                  <span class="material-symbols-outlined text-secondary text-4xl">
                    format_quote
                  </span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              {/* client end */}
            </div>
          </div>
        </section>
      </section>

      {/* our blog */}
      <section className=" bg-gray-100">
        <section className="container py-24">
          <MetaTitle name="Our Blogs" align="text-center"></MetaTitle>
          <Title name="Latest Blog & News" align="text-center"></Title>
          <div className="text-center text-gray-600 text-md mt-4 font-roboto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make <br /> a type specimen book.
          </div>

          <div className="my-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 ">
              <div className="bg-white  rounded my-2">
                <img src="/images/b1.jpg" className="w-full  rounded" alt="" />
                <section className="px-4 py-2  bg-white rounded">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                      <span class="material-symbols-outlined">schedule</span>
                      <span>12 july 2023</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <span class="material-symbols-outlined">person</span>
                      <span>Admin</span>
                    </p>
                  </div>

                  <p className="text-3xl text-third font-bold py-5 ">
                    Dolor sed viverra ipsum nunc aliquet
                  </p>
                  <div className="mb-2 flex">
                    <Link className=" font-semibold text-gray-600" to="/">
                      Read More
                    </Link>
                    <span class="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </div>
                </section>
              </div>
              {/* end of blog */}

              <div className="bg-white  rounded my-2">
                <img src="/images/b2.jpg" className="w-full  rounded" alt="" />
                <section className="px-4 py-2  bg-white rounded">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                      <span class="material-symbols-outlined">schedule</span>
                      <span>12 july 2023</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <span class="material-symbols-outlined">person</span>
                      <span>Admin</span>
                    </p>
                  </div>

                  <p className="text-3xl text-third font-bold py-5 ">
                    Fermentum leo vel orci porta non pulvinar
                  </p>
                  <div className="mb-2 flex">
                    <Link className=" font-semibold text-gray-600" to="/">
                      Read More
                    </Link>
                    <span class="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </div>
                </section>
              </div>
              {/* end of blog */}

              <div className="bg-white  rounded my-2">
                <img src="/images/b3.jpg" className="w-full  rounded" alt="" />
                <section className="px-4 py-2  bg-white rounded">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                      <span class="material-symbols-outlined">schedule</span>
                      <span>12 july 2023</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <span class="material-symbols-outlined">person</span>
                      <span>Admin</span>
                    </p>
                  </div>

                  <p className="text-3xl text-third font-bold py-5 ">
                    Lectus nulla at volutpat diam ut venenatis
                  </p>
                  <div className="mb-2 flex">
                    <Link className=" font-semibold text-gray-600" to="/">
                      Read More
                    </Link>
                    <span class="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </div>
                </section>
              </div>
              {/* end of blog */}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
