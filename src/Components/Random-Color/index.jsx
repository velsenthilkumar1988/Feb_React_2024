import { useEffect, useState } from "react";


export default function RandomColor(){

    const[typeOfColor, settypeOfColor] = useState('hex');
    const[color, setColor] = useState('#000000');

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor(){
        // #678765
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for(let i=0;i<6; i++){
            hexColor+= hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleCreateRandomRGBColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb${r},${g},${b}`);
    }


    useEffect(()=>{
        if(typeOfColor === 'rgb'){
            handleCreateRandomRGBColor();
        }else{
            handleCreateRandomHexColor();
        }
    },[typeOfColor]);
    return(
    <div style={{
        width: "100vw",
        height: "100vh",
        background: color,
    }} >
        <button onClick={()=>settypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=>settypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random Color</button>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: '#fff',
            fontSize: "25px",
            marginTop: "40px"
        }} >
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
            <h2>{color}</h2>
        </div>
    </div>
    ); 
}