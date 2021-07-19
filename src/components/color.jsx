import React from 'react'


export default function RandColor() {
    let r = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let g = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let b = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let color = '#' + r + g + b;

    let r2 = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let g2 = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let b2 = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let color2 = '#' + r2 + g2 + b2;
    
    return (
        <div>
            <font color={color}>ランダムカラー</font> 
            <p>{color}</p>

            <br></br>
            <font color={color2}>ランダムカラー</font>
            <p>{color2}</p>
        </div>
    )   
}