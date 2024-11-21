import hero_image from '../../assets/hero_image.jpg';


const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-20 shadow-xl"></div>
      <div className="hero-content text-neutral-content px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
          <div>
            <h1 className="text-5xl font-bold mb-5 ">Welcome to Our Store</h1>
            <p className="mb-5 text-lg">
              Discover the best deals on premium products. Shop now and enjoy
              exclusive offers tailored just for you!
            </p>
            <div className="flex space-x-4">
            <button className="btn bg-black border-none rounded-none hover:text-red-600  text-white">
                buy Now
              </button>
              <button className="btn bg-black border-none rounded-none hover:text-red-600  text-white">
               learn more
              </button>
            </div>
          </div>

          {/* Column 2: Image or Promotional Section */}
          <div className="flex justify-center">
            {/* <img
              src={}
              alt=""
              className="rounded-lg shadow-lg max-w-md"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

