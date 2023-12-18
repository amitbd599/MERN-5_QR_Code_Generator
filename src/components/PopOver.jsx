import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const PopOver = ({ item }) => {
  console.log(item);
  return (
    <Popover>
      <PopoverHandler>
        <button className="text-white bg-theme hover:bg-theme focus:ring-4 focus:outline-none focus:ring-theme font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          {item[0] + 1} Click To View QR Code
        </button>
      </PopoverHandler>
      <PopoverContent className="z-[999]  p-0 mt-2">
        <div className=" p-3  w-[250px] h-[250px] ">
          <img
            src={item[1]["url"]}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
