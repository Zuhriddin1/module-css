import hero from "../../assets/hero.svg";
function Hero() {
  return (
    <div className="hero min-h-screen">
      <img src={hero} className="bg-cover bg-no-repeat bg-left" alt="" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold hover:from-pink-500 hover:to-yellow-500">
            Manage faster and sell more with big data
          </h1>
          <p className="mb-5">
            Quickly integrate our solution and start processing more sales with
            Kreed.
          </p>
          <button className="btn bg-white text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
