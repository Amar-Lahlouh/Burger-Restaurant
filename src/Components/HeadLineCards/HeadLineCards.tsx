import rec1 from "../../assets/rec1.jpg";
import rec2 from "../../assets/rec2.jpg";
import rec3 from "../../assets/rec3.jpg";
import rec4 from "../../assets/rec4.jpg";
import Card from "../Card/Card";
function HeadLineCards() {
  return (
    <div className="p-5 my-3" id="News">
      <h1 className="text-center font-bold  text-3xl lg:text-5xl font-serif  ">
        Recent <span className="text-red-700">Dishes</span>
      </h1>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6">
        {/* Card */}
        <Card desc="Burger with Mushroom" desc2="New Sauces" img={rec1} />
        <Card desc="The Breakfast Burger" desc2="Very Trendy" img={rec2} />
        <Card desc="The Dessert Burger" desc2="Latest One" img={rec3} />
        <Card desc="Tex-Mex Burger" desc2="So Delicious" img={rec4} />
      </div>
    </div>
  );
}

export default HeadLineCards;
