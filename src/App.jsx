/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import CartList from "./components/CartList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [countProduct, setCountProduct] = useState(0); //quantity
  const [totalPriceProduct, setTotalPriceProduct] = useState(0); //total price

  //get data api
  const [dataProduct, setDataProduct] = useState([]);

  const funcCalculateData = (dataCount) => {
    //get all product
    const getTotalProduct = [...dataCount];
    const getQuantityProduct = getTotalProduct.map((item) => item.quantity);
    const calculateProduct = getQuantityProduct.reduce(
      (prevVal, currentVal) => prevVal + currentVal
    );

   setCountProduct(calculateProduct);
  };


   const calculateTotalPrice = (dataTotal) => {
     //get all product
     const getTotalProduct = [...dataTotal];
     const getTotalPriceProduct = getTotalProduct.map((item) => item.price * item.quantity);
     const calculatePriceProduct = getTotalPriceProduct.reduce(
       (prevVal, currentVal) => prevVal + currentVal
     );
     setTotalPriceProduct(calculatePriceProduct);
   };




  //hit API
  const hitAPI = async () => {
    try {
      const getData = await axios.get(
        "https://fakestoreapi.com/products?limit=5"
      );

      //add quantity
      const addCountForEachData = getData.data.map((item) => {
        return { ...item, quantity: 1 };
      });
      //put array for data
      setDataProduct(addCountForEachData);

      //calculate data
      funcCalculateData(addCountForEachData);

      //total Price
      calculateTotalPrice(addCountForEachData)

    } catch (err) {
      console.log(err, "ini error");
    }
  };

  useEffect(() => {
    hitAPI();
  }, []);

  //add quantity data
  const addQuantityData = (dataQuantity) => {
    let filterData;
    switch (dataQuantity?.type) {
      case "min":
        if (dataQuantity.data.quantity === 1) return;

        filterData = dataProduct?.map((item) => {
          return item.id === dataQuantity.data.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });

        setDataProduct(filterData);
        //calculate data
        funcCalculateData(filterData);
        //total Price
        calculateTotalPrice(filterData);
        break;
      case "add":
        filterData = dataProduct?.map((item) => {
          return item.id === dataQuantity.data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });

        setDataProduct(filterData);
        //calculate data
        funcCalculateData(filterData);

        //total price
        calculateTotalPrice(filterData);
        break;
    }
  };


  return (
    <div className="w-full">
      <Header countData={countProduct} />
      <Navbar />
      <CartList
        dataProduct={dataProduct}
        countData={countProduct}
        addQuantityData={addQuantityData}
        totalPriceProduct={totalPriceProduct}
      />
      <Footer />
    </div>
  );
}

export default App;
