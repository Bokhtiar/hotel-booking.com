export const Home = () => {
  const myStyle = {
    backgroundImage:
      "linear-gradient(rgba(45,18,104, 0.6), rgba(45,18,104, 0.6)),url('/images/banner.jpg')",
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    opacity: 0.5,
  };

  return (
    <section>
      {/* banner area  */}
      <div className="" style={myStyle}></div>
    </section>
  );
};
