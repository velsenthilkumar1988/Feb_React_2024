
import "../Load-More-Data/style.css";
import { useEffect, useState } from "react";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProdcuts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = response.json();
      console.log(result);
    } catch (e) {
        console.log(e)
    }
  }

  useEffect(() => {
    fetchProdcuts();
  }, []);
  return <div className="container">Load More Button</div>;
}
