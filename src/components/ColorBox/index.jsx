import React, { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
    let listColor = ['red', 'blue', 'black', 'green', 'deeppink'];
    let colorIndex = Math.floor(Math.random() * 5);
    return listColor[colorIndex];
}

function ColorBox() {
    let [color, setColor] = useState(() => {
        let initColor = localStorage.getItem('color') || 'red';
        return initColor;
    });
    function onHandleClick() {
        let newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }

    return (
        <div className="color-box" style={{ background: color }} onClick={onHandleClick} >

        </div>
    );
}

export default ColorBox;