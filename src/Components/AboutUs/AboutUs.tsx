import about from "../../assets/about.jpg";

function AboutUs() {
  return (
    <div className="mx-auto mt-7" id="About">
      <h2 className=" font-bold font-serif   text-3xl md:text-4xl lg:text-5xl text-center p-4">
        About <span className="text-red-700"> Us</span>
      </h2>
      <div className="flex  align-middle justify-center flex-col lg:flex-row md:flex-row gap-3 my-5">
        <div className="text-black-200 max-w-3xl bg-cover">
          <img src={about} alt="" className="w-[2500px] rounded-lg " />
        </div>

        <p className="justify-center font-serif my-auto px-5 ">
          At Burger Royal, we take the art of burger making to the next level.
          Our gourmet burgers are carefully crafted with the finest ingredients
          to create an unforgettable dining experience. Alongside our
          mouthwatering burgers, we offer a selection of refreshing drinks and
          crisp, garden-fresh salads to cater to all tastes. It's where the love
          for great food meets culinary excellence, ensuring that every visit to
          Burger Royal is a royal treat for your palate.Join us and savor the
          flavors of our delectable menu today.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
