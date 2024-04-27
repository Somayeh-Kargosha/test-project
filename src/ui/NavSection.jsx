import { GiNewspaper, GiNotebook } from "react-icons/gi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

function NavSection() {
  return (
    <div className="flex flex-wrap h-44 w-full font-normal justify-around bg-yellow-400 self-end pt-1">
      <Link className="text-l font-bold grid justify-items-center text-stone-800 mx-8 my-3">
        <span className="bg-green-700 w-10 h-10 p-0.5 border-black border-4 block rounded-full">
          <LiaUserAstronautSolid color="yellow" fontSize="27px" />
        </span>
        <span className="mt-1 inline-block">خدمات</span>
      </Link>
      <Link
        to="/products"
        className="text-sm font-bold grid justify-items-center text-stone-800 mx-8 my-3"
      >
        <span className="bg-green-700 w-10 h-10 p-0.5 border-black border-4 block rounded-full">
          <TiShoppingCart color="yellow" fontSize="27px" />
        </span>
        <span className="mt-1 inline-block">فروشگاه</span>
      </Link>
      <Link className="text-sm font-bold grid justify-items-center text-stone-800 mx-8 my-3">
        <span className="bg-green-700 w-10 h-10 p-1 border-black border-4 block rounded-full">
          <HiChatBubbleLeftRight color="yellow" fontSize="24px" />
        </span>
        <span className="mt-1 inline-block">پیام ها</span>
      </Link>
      <Link className="grid justify-items-center font-bold text-sm text-stone-800 mx-8 my-3">
        <span className="bg-green-700 w-10 h-10 p-1 border-black border-4 block rounded-full">
          <GiNewspaper color="yellow" fontSize="25px" />
        </span>
        <span className="mt-1 inline-block">اخبار</span>
      </Link>
      <Link className="text-sm font-bold grid justify-items-center text-stone-800 mx-8 my-3">
        <span className="bg-green-700 w-10 h-10 p-0.5 border-black border-4 block rounded-full">
          <IoIosPeople color="yellow" fontSize="27px" />
        </span>
        <span className="mt-1 inline-block">شبکه های اجتماعی</span>
      </Link>
      <Link className="text-sm font-bold grid justify-items-center text-stone-800 mx-8 my-3">
        <span className="bg-green-700 w-10 h-10 p-1 border-black border-4 block rounded-full">
          <IoSettingsSharp color="yellow" fontSize="24px" />
        </span>
        <span className="mt-1 inline-block">تنظیمات</span>
      </Link>
      <Link className="text-sm grid justify-items-center font-bold text-stone-800 mx-8 my-3">
        <span className="bg-green-700 w-10 h-10 p-1 border-black border-4 block rounded-full">
          <GiNotebook color="yellow" fontSize="23px" />
        </span>
        <span className="mt-1 inline-block">گزارشات و سفارشات</span>
      </Link>
    </div>
  );
}

export default NavSection;
