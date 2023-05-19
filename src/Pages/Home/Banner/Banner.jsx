
const Banner = () => {
    const BannerURL = "https://i.ibb.co/wLC9DRp/bright-colored-kids-toys.jpg"
    return (
        <section
        className="relative bg-cover bg-center text-navy-800 py-20"
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
              Spark imagination, enhance creativity, and inspire young minds
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
};

export default Banner;