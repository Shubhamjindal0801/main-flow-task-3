import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ShoppingCard from "./ShoopingCard";
import "./shoopingpage.css";
import Loader from "./Loader";

function ShoopingPage() {
  const [items, setItems] = useState({});
  const [itemCategory, setItemCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => toast.err(err));
  }

  return (
    <div className="shooping-container">
      <select id="category" onChange={(e) => setItemCategory(e.target.value)}>
        <option value="all" selected>
          All
        </option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      {loading ? (
        <Loader />
      ) : (
        <>
          {items.length > 0 ? (
            items.map((item) => {
              return <ShoppingCard prop={item} category={itemCategory} />;
            })
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default ShoopingPage;
