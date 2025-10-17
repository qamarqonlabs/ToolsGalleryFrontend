import { useState } from "react";
import DropListInput from "./DropListInput.jsx";
function NavBar({ categories, price, rating, easeOfUse, standard }) {
  const [opened, setOpened] = useState(true);
  const [drops, setDrops] = useState([]);
  const stockPlaceHolders = [
    "hello",
    "Worls",
    "how are",
    "the days",
    "going ",
    "of all",
    "you",
  ];
  const stockDrops = [
    "drop item 1",
    "drop item 2",
    "drop item 3",
    "drop item 4",
  ];
  const onChange = (nq) => {
    setDrops(
      stockDrops.filter((i) => {
        if (i.includes(nq) && nq != "") {
          return true;
        }
      }),
    );
  };
  return (
    <nav className="bg-opacity-50 fixed backdrop-blur-md p-4  w-full top-0 z-10">
      <div className="mx-auto flex justify-center items-center">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <button
            onClick={() => {
              setOpened(!opened);
            }}
            className=" bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-l-full transition-colors duration-300"
          ></button>
          <DropListInput
            placeHolders={stockPlaceHolders}
            drops={drops}
            onChange={onChange}
          />
          <button className=" bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-r-full transition-colors duration-300">
            Search
          </button>
          <div
            className={`fixed h-[100vh] ${opened && "right-0"} rihgt-0 transition-all scrollbar scrollbar-thumb-purple-500 scrollbar-track-transparent bg-gray-800  overflow-y-scroll top-0 p-4`}
          >
            <h1 className="flex justify-between p-3">
              Filters{" "}
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpened(!opened);
                }}
              >
                ❌
              </span>
            </h1>
            <h2 className="bg-violet-600 p-2 font-bold rounded-full">
              Category
            </h2>
            {categories.map((i) => (
              <label
                key={i}
                className="p-4 hover:bg-gray-500 rounded-full flex justify-between"
                htmlFor={i}
              >
                {i.toUpperCase()}
                <input type="checkbox" name={i} value={i} />
              </label>
            ))}
            <h2 className="bg-violet-600 p-2 font-bold rounded-full">Price</h2>
            {price.map((i) => (
              <label
                key={i}
                className="p-4 hover:bg-gray-500 rounded-full flex justify-between"
                htmlFor={i}
              >
                {i.toUpperCase()}
                <input type="checkbox" name={i} value={i} />
              </label>
            ))}
            <h2 className="bg-violet-600 p-2 font-bold rounded-full">Rating</h2>
            {rating.map((i) => (
              <label
                key={i}
                className="p-4 hover:bg-gray-500 flex rounded-full  justify-between"
                htmlFor={i}
              >
                {i.toUpperCase()}
                <input type="checkbox" name={i} value={i} />
              </label>
            ))}
            <h2 className="bg-violet-600 p-2 font-bold rounded-full">
              Ease Of Use
            </h2>
            {easeOfUse.map((i) => (
              <label
                key={i}
                className="p-4 hover:bg-gray-500 rounded-full  flex justify-between"
                htmlFor={i}
              >
                {i.toUpperCase()}
                <input type="checkbox" name={i} value={i} />
              </label>
            ))}
            <h2 className="bg-violet-600 p-2 font-bold rounded-full">
              Standard
            </h2>
            {standard.map((i) => (
              <label
                key={i}
                className="p-4 hover:bg-gray-500 flex rounded-full  justify-between"
                htmlFor={i}
              >
                {i.toUpperCase()}
                <input type="checkbox" name={i} value={i} />
              </label>
            ))}
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
