import { useEffect } from "react";
import { useState } from "react";

export default function UseLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
  },[key,value])
  return [value, setValue]
}
