import hero from "../../assets/hero3.jpg";
function Hero() {
  return (
    <div id="home" className="max-w-[1640px] mx-auto p-4 scroll-smooth">
      <div className="max-h-[500px] relative">
        {/* OverLay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/75 flex  flex-col justify-center  ">
          <h1 className="px-4 lg:text-4xl text-2xl md:text-7xl lg:text-6xl p-3 font-bold">
            Food Beyond <span className="text-yellow-500">Imagination.</span>
          </h1>
          <h1 className="px-4  text-2xl md:text-5xl lg:text-5xl font-bold">
            <span className="text-red-700">Try </span>
            <span>it Out!</span>
          </h1>
        </div>
        <img
          src={hero}
          alt=""
          className="w-[100%] max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
