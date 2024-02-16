import { useState } from "react";
import data from "./data";
import "../Accordion/style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    // console.log('====================================');
    // console.log(getCurrentId);
    // console.log('====================================');
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1){
        cpyMultiple.push(getCurrentId);
    }else{
        cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }
  console.log(selected,multiple);

  return (
    <div className="container wrapper p-3">
      <button onClick={() => setEnableMultiselection(!enableMultiSelection)}>
        Enable MultiSelection Option
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection 
                ? multiple.indexOf(dataItem.id)!== -1 && (
                <div className="content">{dataItem.answer}</div>
                ) : 
                selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>    
                )
            }
              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?  (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
