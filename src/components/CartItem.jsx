import Counter from "./Counter";

export default function CartItem(props) {
  const { dataProduct, addQuantityData } = props || {};

  return (
    <div className="bg-white w-full flex flex-row p-4 rounded-md">
      <div className="w-[25%]">
        <img
          src={dataProduct?.image}
          alt="img-api"
          className="md:w-28 md:h-32 w-14 h-14"
        />
      </div>
      <div className="md:w-[40%] w-[50%] flex flex-col text-base ">
        <h4 className="font-bold w-full md:text-[14px] text-[12px]  text-left">
          {dataProduct?.title}
        </h4>
        <h4 className="font-normal w-full md:text-[14px] text-[12px]  text-left">
          {dataProduct?.category}
        </h4>
        <h4 className="font-normal w-full md:text-[14px] text-[12px]  text-left">
          $ {dataProduct?.price}
        </h4>
        <Counter dataProduct={dataProduct} addQuantityData={addQuantityData}/>
      </div>
      <div className="md:w-[30%] w-[20%] flex flex-col text-base">
        <h4 className="font-normal w-full md:text-[14px] text-[10px]  text-right">
          $ {(dataProduct.quantity * dataProduct?.price).toFixed(2)}
        </h4>
      </div>
    </div>
  );
}
