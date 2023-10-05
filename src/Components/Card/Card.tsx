export interface Card {
  desc: string;
  desc2: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
}

function Card(props: Card) {
  return (
    <div className="relative rounded-xl ">
      {/* OverLay */}
      <div className="absolute  p-3 w-full h-full rounded-xl bg-black/50 text-white">
        {" "}
        <p className="px-3 pt-1  font-bold text-md  lg:text-xl">{props.desc}</p>
        <p className="px-3  text-md lg:text-xl font-serif ">{props.desc2}</p>
        <button className="border absolute bottom-4 bg-white border-white text-black m-1 font-bold hover:bg-yellow-600">
          Order Now
        </button>
      </div>
      <img
        src={props.img}
        alt=""
        className="w-full  max-h-[160px] md:max-h-[200px] rounded-xl object-cover"
      />
    </div>
  );
}

export default Card;
