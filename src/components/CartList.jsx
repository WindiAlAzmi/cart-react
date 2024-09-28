import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const dataSummary = [
  {
    id: 1,
    title: "subtotal",
    price: 0,
  },
  {
    id: 2,
    title: "discount",
    price: 0,
  },
  {
    id: 3,
    title: "estimated total",
    price: 0,
  }
];



export default function CartList(props) {
  const {dataProduct, addQuantityData, countData, totalPriceProduct} = props || {};
  const [dataSummaryProduct, SetDataSummaryProduct] = useState([]);

  useEffect(() => {
     const getData = dataSummary.map((item) => {
      return item.id === 1 || item.id === 3
        ? { ...item, price: totalPriceProduct.toFixed(2) }
        : item;
     })
     SetDataSummaryProduct(getData);
  }, [totalPriceProduct]);


  return (
    <div className="flex flex-col justify-start text-xl">
      <h4 className="md:px-4 px-2 text-left w-80">Shopping Bag ({countData})</h4>
      <div className="w-full flex md:flex-row flex-col justify-center mt-7 gap-8">
        <div className="md:w-[60%] justify-center w-full md:px-10 md:py-8 px-4 py-4 flex flex-col gap-5 bg-[#F3EEEB] rounded-md">
          {dataProduct?.map((item, index) => (
            <CartItem
              key={index}
              dataProduct={item}
              addQuantityData={addQuantityData}
            />
          ))}
        </div>
        <div className="md:w-[30%] bg-[#F3EEEB] p-8 rounded-md w-full h-fit">
          <h4 className="w-full text-left mb-4">Summary</h4>
          <hr className="border-1 border-gray-300" />
          <table className="table-auto mt-4 w-full">
            <tbody className="text-xs">
              {dataSummaryProduct
                .slice(0, dataSummaryProduct.length - 1)
                .map((item, index) => {
                  return (
                    <tr key={index} className="h-6">
                      <td className="text-left w-48 capitalize">
                        {item.title}
                      </td>
                      <td className="text-right ">$ {item.price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <hr className="border-1 border-gray-300 mt-5" />
          <table className="w-full">
            <tbody className="text-xs ">
              <tr className="h-6">
                <td className="text-left w-48 capitalize">
                  {dataSummaryProduct[2]?.title}
                </td>
                <td className="text-right ">
                  $ {dataSummaryProduct[2]?.price}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cursor-pointer rounded-md p-2 mt-10 bg-black text-white text-base w-full uppercase">
            <h5>Checkout</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
