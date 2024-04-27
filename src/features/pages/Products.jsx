function Products() {
  return (
    <div>
      <header className="bg-white-200 p-2">
        <div className="">
          <form className="mx-2 my-2 w-full">
            <input
              placeholder="جستجو در کالاها"
              className="rounded-2xl bg-yellow-300 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-4/5 sm:focus:w-5/6"
            />
          </form>
        </div>
        <div className="mx-1 rounded-full bg-green-600 text-center text-stone-700">
          <p className="text- py-2">مرتب سازی براساس: جدیدترین</p>
        </div>
        <div className="mt-2 flex justify-around">
          <span className="rounded-xl bg-stone-800 p-2 text-yellow-400 hover:bg-yellow-300">
            فروش ویژه
          </span>
          <span className="rounded-xl bg-stone-800 p-2 text-yellow-400">
            برند
          </span>
          <span className="rounded-xl bg-stone-800 p-2 text-yellow-400">
            گروه های کالایی
          </span>
          <span className="rounded-xl bg-stone-800 p-2 text-yellow-400">
            همه کالاها
          </span>
        </div>
      </header>
    </div>
  );
}

export default Products;
