import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="w-screen flex py-2 justify-between">
      <div className="flex">
        <div className="p-2 mx-4 grid grid-cols-1 gap-0.5 place-items-center rounded-full hover:bg-stone-300 hover:bg-opacity-40 transition-all duration-200">
          <div className="h-[2px] bg-white w-4"></div>
          <div className="h-[2px] bg-white w-4"></div>
          <div className="h-[2px] bg-white w-4"></div>
        </div>
        <div className="mt-1.5">YouTube Logo</div>
      </div>

      {/* Search component */}
      <div>
        <input type="text" value={text} placeholder="Search" className="w-[20vw] bg-stone-900 border rounded-l-2xl pl-3 py-1 border-stone-700" />
        <button className="rounded-r-2xl bg-stone-700 py-1.5 px-3">Search</button>
      </div>

      {/* Notification/profile/ create? */}
      <div className="flex">
        <div>Create</div>
        <div>Bell Icon</div>
        <div>profile pic</div>
      </div>
    </div>
  );
};

export default Header;
