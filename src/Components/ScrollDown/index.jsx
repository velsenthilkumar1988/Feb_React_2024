import { useState } from "react";
import "../ScrollDown/style.css";
import { useEffect } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchDate(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      //console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(err);
    }
  }
  useEffect(() => {
    fetchDate(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log("====================================");
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    // console.log("====================================");
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  // console.log("====================================");
  // console.log(data, setScrollPercentage);
  // console.log("====================================");
  if(errorMessage){
    return <div>Error Message {errorMessage}</div>
  }
  if(loading){
    return <div>Loading Data ! Please Wait...</div>
  }
  return (
    <>
    <div className="top-container">
      {/* <h1>Scroll top and down container</h1> */}
      <div className="scroll-progress-tracking-container">
        <div className="current-progress-bar" style={{width:`${scrollPercentage}%`}}>
          
        </div>
      </div>
    </div>
    <div className="data-container">
      {data && data.length > 0
        ? data.map((dataItem) => <p>{dataItem.title}</p>)
        : null}
    </div>
    </>
    
  );
}
