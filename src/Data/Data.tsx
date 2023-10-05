// import ClassicBurger from "../assets/ClassicBurger.jpg";
import chickentBurger from "../assets/chickenburger.jpg";
import cheeseBurger from "../assets/cheeseBurger.jpg";
import breakfastBurger from "../assets/breakfastburger.jpg";
// import baconBurger from "../assets/"
import BBQBurger from "../assets/BBQburger.jpg";
import GourmetBurger from "../assets/gourmetburger.jpg";
import turkeyBurger from "../assets/turkeyburger.jpg";
import veggie from "../assets/veggieburger.jpg";
import salmonBurger from "../assets/salmonburger.jpg";
import sevenup from "../assets/7up.jpg";
import bottle from "../assets/bottle.jpg";
import carrotjuice from "../assets/carrot-juice.jpg";
import darkblue from "../assets/darkblue.jpg";
import icetea from "../assets/icetea.jpg";
import lemonjuice from "../assets/lemon-juice.jpg";
import redbull from "../assets/redbull.jpg";
import strawberryjuice from "../assets/strawberry-juice.jpg";
import avocadotomatosalad from "../assets/avocado-tomato-salad.jpg";
import caesarsalad from "../assets/caesar-salad.jpg";
import lettucesalad from "../assets/lettuce-salad.jpg";
import radish from "../assets/Radish-salad.jpg";
import pepsi from "../assets/pepsi.jpg";
import pepsidiet from "../assets/pepsi-diet.jpg";
import spinach from "../assets/spinach=salad.jpg";
interface Food {
  id: number;
  name: string;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  rate: number;
  price: number;
}

const FoodData: Food[] = [
  // {
  //   id: 1,
  //   image: ClassicBurger,
  //   name: "Classic Burger",
  //   category: "Burger",
  //   rate: 4.7,
  //   price: 10,
  // },
  {
    id: 11,
    image: pepsi,
    name: "Pepsi",
    category: "Drinks",
    rate: 5.0,
    price: 20,
  },
  {
    id: 20,
    image: avocadotomatosalad,
    name: "Avocado Tomato Salad",
    category: "Salad",
    rate: 5.1,
    price: 40,
  },
  {
    id: 2,
    image: cheeseBurger,
    name: "Cheese Burger",
    category: "Burger",
    rate: 5.3,
    price: 25,
  },
  {
    id: 21,
    image: caesarsalad,
    name: "Caesar Salad",
    category: "Salad",
    rate: 5.5,
    price: 40,
  },
  {
    id: 12,
    image: sevenup,
    name: "Seven Up",
    category: "Drinks",
    rate: 4.0,
    price: 20,
  },
  {
    id: 3,
    image: chickentBurger,
    name: "Chicken Burger",
    category: "Burger",
    rate: 5.6,
    price: 30,
  },
  {
    id: 22,
    image: lettucesalad,
    name: "Lettuce Salad",
    category: "Salad",
    rate: 5.3,
    price: 35,
  },
  {
    id: 12,
    image: icetea,
    name: "Ice Tea",
    category: "Drinks",
    rate: 5.3,
    price: 35,
  },
  {
    id: 4,
    image: breakfastBurger,
    name: "Breakfast Burger",
    category: "Burger",
    rate: 4.9,
    price: 25,
  },
  {
    id: 23,
    image: radish,
    name: "Radish Salad",
    category: "Salad",
    rate: 5.3,
    price: 40,
  },
  {
    id: 13,
    image: pepsidiet,
    name: "Pepsi Diet",
    category: "Drinks",
    rate: 5.1,
    price: 30,
  },
  // {
  //   id: 5,
  //   image: baconBurger,
  //   name: "Bacon Burger",
  //   category: "Burger",
  //   rate: 5.0,
  //   price: 20,
  // },
  {
    id: 14,
    image: strawberryjuice,
    name: "Strawberry Juice",
    category: "Drinks",
    rate: 5.5,
    price: 40,
  },
  {
    id: 6,
    image: BBQBurger,
    name: "BBQ Burger",
    category: "Burger",
    rate: 4.9,
    price: 25,
  },
  {
    id: 23,
    image: spinach,
    name: "Spinach Salad",
    category: "Salad",
    rate: 4.3,
    price: 20,
  },
  {
    id: 15,
    image: lemonjuice,
    name: "Lemon Juice",
    category: "Drinks",
    rate: 5.3,
    price: 35,
  },
  {
    id: 7,
    image: GourmetBurger,
    name: "Gourmet Burger",
    category: "Burger",
    rate: 4.7,
    price: 20,
  },
  {
    id: 15,
    image: carrotjuice,
    name: "Carrot Juice",
    category: "Drinks",
    rate: 5.7,
    price: 40,
  },
  {
    id: 8,
    image: turkeyBurger,
    name: "Turkey Burger",
    category: "Burger",
    rate: 5.1,
    price: 20,
  },
  {
    id: 16,
    image: lemonjuice,
    name: "Lemon Juice",
    category: "Drinks",
    rate: 5.3,
    price: 35,
  },
  {
    id: 9,
    image: veggie,
    name: "Veggie Burger",
    category: "Burger",
    rate: 5.3,
    price: 30,
  },
  {
    id: 17,
    image: redbull,
    name: "RedBull",
    category: "Drinks",
    rate: 5.5,
    price: 25,
  },
  {
    id: 10,
    image: salmonBurger,
    name: "Salmon Burger",
    category: "Burger",
    rate: 4.8,
    price: 25,
  },
  {
    id: 18,
    image: darkblue,
    name: "Dark Blue",
    category: "Drinks",
    rate: 5.7,
    price: 35,
  },
  {
    id: 19,
    image: bottle,
    name: "Bottle of Water",
    category: "Drinks",
    rate: 5.7,
    price: 20,
  },
];
export default FoodData;
