import { useState } from "react";
import FoodData from "../../Data/Data";
import { AiFillStar } from "react-icons/ai";
function Food() {
  const [foods, setfoods] = useState(FoodData);

  // Filter by Categories

  const filterbyCategory = (cat: string) => {
    if (cat == "All") {
      setfoods(FoodData);
    } else {
      setfoods(
        FoodData.filter((item) => {
          return item.category === cat;
        })
      );
    }
  };

  // Filter By Price

  const filterbyprice = (price: number) => {
    setfoods(
      FoodData.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1460px] m-auto py-12 px-4 " id="Menu">
      <h1 className="text-red-700 font-serif font-bold  text-2xl lg:text-5xl text-center p-1">
        <span className="text-black">Top</span> Rated Menu
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="px-2 py-4 font-serif  font-bold  text-xl lg:text-2xl text-yellow-700">
            Filter By Type
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              className="bg-black/20 hover:bg-red-600 mx-2 "
              onClick={() => filterbyCategory("All")}
            >
              All
            </button>
            <button
              onClick={() => filterbyCategory("Burger")}
              className="bg-black/20 hover:bg-red-600 mx-2"
            >
              Burger 🍔
            </button>
            <button
              onClick={() => filterbyCategory("Drinks")}
              className="bg-black/20 hover:bg-red-600 mx-2"
            >
              Drinks 🍹{" "}
            </button>
            <button
              onClick={() => filterbyCategory("Salad")}
              className="bg-black/20 hover:bg-red-600 mx-2"
            >
              Salad 🥗
            </button>
          </div>
        </div>

        {/* Filter bY pRice */}
        <div>
          <p className="px-2 py-4 font-serif  font-bold  text-xl lg:text-2xl text-yellow-700">
            {" "}
            Filter By Price
          </p>
          <div className="flex justify-between flex-wrap w-full max-w-[390px]">
            <button
              onClick={() => filterbyprice(20)}
              className="bg-black/20 hover:bg-red-600 mx-1"
            >
              20 $
            </button>
            <button
              onClick={() => filterbyprice(25)}
              className="bg-black/20 hover:bg-red-600 mx-1"
            >
              25 $
            </button>
            <button
              onClick={() => filterbyprice(30)}
              className="bg-black/20 hover:bg-red-600 mx-1"
            >
              30 $
            </button>
            <button
              onClick={() => filterbyprice(35)}
              className="bg-black/20 hover:bg-red-600 mx-1"
            >
              35 $
            </button>
            <button
              onClick={() => filterbyprice(40)}
              className="bg-black/20 hover:bg-red-600 mx-1"
            >
              40 $
            </button>
          </div>
        </div>
      </div>

      {/* Display Food */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 pt-4">
        {foods.map((item, index: number) => (
          <div
            key={index}
            className="border  m-2 shadow-lg hover:scale-105 duration-300  rounded-t-lg"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-[250px] object-cover rounded-t-lg "
            />
            <div className="flex justify-between  border border-t-2">
              <div className="p-1">
                <p className=" font-serif text-lg">{item.name}</p>
                <p className="font-bold">{item.price} $</p>
              </div>
              <div className="flex justify-center text-center align-middle">
                <p className="mt-1 text-lg font-semibold">{item.rate} </p>
                <span>
                  <AiFillStar className="text-yellow-600 pt-2" size={30} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
