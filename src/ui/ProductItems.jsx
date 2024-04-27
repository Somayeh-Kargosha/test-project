function ProductItems() {
  return (
    <main className="flex justify-around w-full bg-stale-100 h-40 mt-2 self-center">
      <div className="bg-white w-36 h-full rounded-sm shadow-xl flex border-2 border-stone-100 justify-between">
        <div className="p-2 pt-6">
          <img src="/public/1.jpg" alt="" width={100} height={100} />
        </div>
        <div className="grid grid-rows-3 text-sm p-2 pt-6">
          <span>کالباس خشک 60% گوشت</span>
          <s className="text-red-500 mt-4">1,089,000</s>
          <span className="text-green-500">1,089,000</span>
        </div>
      </div>
      <div className="bg-white w-36 h-full rounded-sm shadow-xl flex border-2 border-stone-100 justify-between">
        <div className="p-2 pt-6">
          <img src="/public/1.jpg" alt="" width={100} height={100} />
        </div>
        <div className="grid grid-rows-3 text-sm p-2 pt-6">
          <span>کالباس خشک 60% گوشت</span>
          <s className="text-red-500 mt-4">1,089,000</s>
          <span className="text-green-500">1,089,000</span>
        </div>
      </div>
      <div className="bg-white w-36 h-full rounded-sm shadow-xl flex border-2 border-stone-100 justify-between">
        <div className="p-2 pt-6">
          <img src="/public/1.jpg" alt="" width={100} height={100} />
        </div>
        <div className="grid grid-rows-3 text-sm p-2 pt-6">
          <span>کالباس خشک 60% گوشت</span>
          <s className="text-red-500 mt-4">1,089,000</s>
          <span className="text-green-500">1,089,000</span>
        </div>
      </div>
    </main>
  );
}

export default ProductItems;
