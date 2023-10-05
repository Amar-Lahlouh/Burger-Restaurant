function Footer() {
  return (
    <div
      id="Contact"
      className="bg-yellow-200 gap-5 p-4 grid grid-cols-1 md:grid-cols-4  "
    >
      <div>
        <p className=" s my-3 text-serif font-semibold">
          Burger Royal offers a delightful blend of burgers, drinks, and salads.
        </p>
      </div>
      <div>
        <p className="font-bold">Links</p>
        <p>
          {" "}
          <a
            href="#home"
            className="hover:text-red-700 text-lg font-serif
          "
          >
            Home
          </a>
        </p>
        <p>
          {" "}
          <a
            href="#News"
            className="hover:text-red-700 text-lg font-serif
          "
          >
            News
          </a>
        </p>
        <p>
          {" "}
          <a
            href="#Menu"
            className="hover:text-red-700 text-lg font-serif
          "
          >
            Menu
          </a>
        </p>
        <p>
          {" "}
          <a
            href="#Gallery"
            className="hover:text-red-700 text-lg font-serif
          "
          >
            Gallery
          </a>
        </p>
        <p>
          {" "}
          <a
            href="#About"
            className="hover:text-red-700 text-lg font-serif
          "
          >
            About Us
          </a>
        </p>
      </div>
      <div className="border-2 border-red-900 p-4 border-dashed font-serif font-semibold">
        <p className="text-red-900">Contact Us</p>
        <p>
          {" "}
          <span className="text-red-900">Phone:</span>0098972947
        </p>
        <p>
          {" "}
          <span className="text-red-900">Address:</span> London,Street A231
        </p>
        <p>
          {" "}
          <span className="text-red-900">Another Address:</span> Italy, Strreet
          B211
        </p>
      </div>
      <div>
        <p className="p-2 font-semibold">Send Us a Message!</p>
        <input
          type="text"
          placeholder="Here"
          className="rounded-lg   border border-1 border-red-800  p-1 m-2"
        />{" "}
        <br />
        <button className=" text-black m-2 hover:bg-red-700 hover:text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Footer;
