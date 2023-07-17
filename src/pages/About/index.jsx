import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="">
      {/* bradcrubms */}
      <div className=" bg-primary relative">
        <img
          className="w-full opacity-50 md:h-96 h-48"
          src="/images/bradCrumbs.jpg"
          alt=""
        />
        <div className=" absolute top-10 inset-0 w-96 h-24 mx-auto my-auto text-center text-white">
          <h3 className="text-4xl md:text-6xl font-bold ">About Us</h3>
          <Link to="" className="font-bold ">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link className="font-bold" to="">
            About us
          </Link>
        </div>
      </div>

      <section className="container my-24">
        <h3 className=" text-third text-3xl font-bold font-roboto">What Is An About Us Page ?</h3>
        <p className=" text-justify text-gray-500">
          <span className="">
            An About Us Page is a page on your website that tells your readers
            all about you. It includes a detailed description covering all
            aspects of your business and you as an entrepreneur. This can
            include the products or services you are offering, how you came into
            being as a business, your mission and vision, your aim, and maybe
            something about your future goals too. Your About Us page is your
            perfect opportunity to tell a compelling story about your business.
          </span>
          <br /><br />
          <span>
            An About Us page helps your company make a good first impression,
            and is critical for building customer trust and loyalty. An About Us
            page should make sure to cover basic information about the store and
            its founders, explain the company's purpose and how it differs from
            the competition, and encourage discussion and interaction. Here are
            some free templates, samples, and example About Us pages to help
            your ecommerce store stand out from the crowd.
          </span>
          <br /><br />
          <span>
            Even though an About Us page is one of the most important elements
            of a website, it is often one of the most overlooked elements.
            Compared to a landing page, an About Us page help you communicate a
            range of things:
          </span> <br /><br /><br />
          <h3 className=" text-third text-3xl font-roboto font-bold">Your History</h3>
          <span>
            Take the visitors on your website to a trip down memory lane, and
            give them an insight to the history behind your store. Here, you can
            show them where, how, and when you started, and everything your
            business has accomplished on the way. This is your chance to share
            your relevant milestones and achievements relating to your business
            in an engaging way. You can even choose to present your history to
            your viewers in the form of a timeline, which allows you to display
            a large amount of information in a visually engaging manner. Your
            customers or potential customers might be interested in seeing how
            you grew over the years.
          </span><br /><br />
          <br />
          <h3 className="text-third font-roboto font-bold text-3xl">Team Member Profiles</h3>
          <span>
            Add an emotional element to your About Us page by adding details of
            the people that are driving the passion at your business. People
            find it easier to connect with human beings, so allow the
            personality of your crew to shine through the About Us page. Id
            aliquet risus feugiat in. Nec ullamcorper sit amet risus nullam eget
            felis. Sagittis nisl rhoncus mattis rhoncus. Aliquet sagittis id
            consectetur purus. Fermentum iaculis eu non diam phasellus
            vestibulum lorem. Libero id faucibus nisl tincidunt eget nullam non
            nisi est. Eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Sit amet consectetur adipiscing elit duis
            tristique sollicitudin nibh sit. Sit amet facilisis magna etiam.
            Volutpat sed cras ornare arcu dui vivamus. Sociis natoque penatibus
            et magnis dis parturient montes nascetur. Diam maecenas ultricies mi
            eget mauris pharetra et. Egestas egestas fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate. Fringilla
            urna porttitor rhoncus dolor purus non.
          </span>
        </p>
      </section>
    </section>
  );
};
