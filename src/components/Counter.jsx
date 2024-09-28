/* eslint-disable react/prop-types */
export default function Counter({ dataProduct, addQuantityData }) {

  return (
    <div className="flex flex-row gap-3 items-center">
      <img
        src="/assets/icons/minus.png"
        alt="min"
        className="h-5 w-5 cursor-pointer"
        onClick={() => addQuantityData({ type: "min", data: dataProduct })}
      />
      <h4 className="text-xs">{dataProduct?.quantity}</h4>
      <img
        src="/assets/icons/plus.png"
        alt="min"
        className="h-5 w-5 cursor-pointer"
        onClick={() => addQuantityData({ type: "add", data: dataProduct })}
      />
    </div>
  );
}
