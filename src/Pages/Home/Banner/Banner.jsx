import { Link } from "react-router-dom";

const Banner = () => {
    const BannerURL = "https://i.ibb.co/ygT6HHW/pexels-pavel-danilyuk-8422249.jpg"
    return (
        <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${BannerURL})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
              Welcome to EduFun Toybox
            </h1>
            <p className="text-lg mb-8 text-center">
              Explore a world of educational toys for playful learning
            </p>
            <p className="text-xl font-semibold mb-8 text-center">
              Pre-register Now for 10% Discount..!!
            </p>
            <Link to='signup'><button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              Pre-register
            </button></Link>
          </div>
        </div>
      </section>
    );
};

export default Banner;