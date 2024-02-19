import "../Load-More-Data/style.css";
import { useEffect, useState } from "react";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProdcuts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProdcuts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);
  if (loading) {
    return <div>Loading Data ! Please Wait...</div>;
  }
  return (
    <div className="loading-container">
      <div className="product-container">
        {products && products.length
          ? products.map((items) => (
              <div className="product" key={items.id}>
                <img src={items.thumbnail} alt={items.title} />
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {
            disableButton ? <p>You have reached 100 products</p> : null
        }
      </div>
    </div>
  );
}
