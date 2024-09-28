/* eslint-disable react/prop-types */
export default function Header({countData}) {

  return (
    <div className="text-black text-3xl flex flex-row justify-between">
      <div className="italic">Beautique</div>
      <div className=" gap-6 flex flex-row">
        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/icons/search.png"
            alt="search-icon"
            className="w-7 h-7 cursor-pointer"
          />
        </div>
        <div className="flex flex-row items-center gap-2 relative">
          <img
            src="/assets/icons/cart.png"
            alt="cart-icon"
            className="w-7 h-7"
          />
          <div className="inset-0 absolute text-sm left-4 cursor-pointer text-center rounded-md bg-black text-white px-2 min-w-fit  h-5">
            <h3>{countData}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
