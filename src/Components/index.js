import React, {useState} from 'react'
//style
import {WrapContent} from './index.styles'
//data
import light from '../data/listColor'
import dark from '../data/listDarkColor'
import dataPercent from '../data/dataPercent'
export default function ColorExplosion() {
    const [inputValue, setInputValue] = useState("white");
    const [colorInRgb, setColorInRgb] = useState()
    const [listLighter, setListLighter] = useState(light);
    const [listDarker, setListDarker] = useState(dark);
    const [rValue, setR] = useState(255)
    const [gValue, setG] = useState(255)
    const [bValue, setB] = useState(255)
    const handleChange = (e) => {
        let inputVal = e.target.value
        setInputValue(inputVal)
    }
    const stringToColor = () => {
        const d = document.createElement("div");
        d.style.color = inputValue;
        document.body.appendChild(d)
        const selectedColor = window.getComputedStyle(d).color
            const getColor = (c) => {
                let temp = document.createElement("div");
                let color = {rValue:0,gValue:0,bValue:0};
                temp.style.color = c;
                document.body.appendChild(temp);
                let style = window.getComputedStyle(temp,null).color;
                document.body.removeChild(temp);
                let recol = /([\.\d]+)/g;
                let vals  = style.match(recol);
                if (vals.length>2) {
                    color.rValue = parseInt(vals[0])||0;
                    color.gValue = parseInt(vals[1])||0;
                    color.bValue = parseInt(vals[2])||0;
                }
                for (let colorOfDoc1 of document.getElementsByClassName('color-light')) {
                    colorOfDoc1.style.backgroundColor = `rgb(${color.rValue}, ${color.gValue}, ${color.bValue})`;
                    
                    if (color.rValue === 255) {
                        let newR = 256;
                        color.rvalue = newR -= 26;
                    }
                    else if (color.rValue !== 0 && color.rValue < 255) {
                        color.rValue -= 26;
                    } 
                    else if( color.rValue === 0) {
                        color.rValue = 0;
                    }
                    if (color.gValue === 255) {
                        let newG = 256;
                        color.gValue = newG -= 26;
                    }
                    else if (color.gValue !== 0 && color.gValue < 255) {
                        color.gValue -= 26;
                    } 
                    else if( color.gValue === 0) {
                        color.gValue = 0;
                    }
                    if (color.bValue === 255) {
                        let newB = 256;
                        color.bValue = newB -= 26;
                    }
                    else if (color.bValue !== 0 && color.bValue < 255) {
                        color.bValue -= 26;
                    } 
                    else if( color.b === 0) {
                        color.bValue = 0;
                    }
                    // colorOfDoc1.innerText = rgbToHex(color.r, color.g, color.b);
                    colorOfDoc1.style.backgroundColor = `rgb(${color.rValue}, ${color.gValue}, ${color.bValue})`;
                    var node2 = document.createElement("p");                 
                    node2.innerHTML = `${rgbToHex(color.rValue, color.gValue, color.bValue)}`; 
                    colorOfDoc1.appendChild(node2);
                }
                return `rgb ${color.rValue}, ${color.gValue}, ${color.bValue}`
            }
            const getColor2 = (c) => {
                let temp = document.createElement("div");
                let color = {r:0,g:0,b:0};
                temp.style.color = c;
                document.body.appendChild(temp);
                let style = window.getComputedStyle(temp,null).color;
                document.body.removeChild(temp);
                let recol = /([\.\d]+)/g;
                let vals  = style.match(recol);
                if (vals.length>2) {
                    color.r = parseInt(vals[0])||0;
                    color.g = parseInt(vals[1])||0;
                    color.b = parseInt(vals[2])||0;
                }
                var colorLight = document.getElementsByClassName('false')
                var newArray = Array.from(colorLight)
                
                for (let colorOfDoc2 of reverseArray(newArray)) {                 
                    if (color.r === 255) {
                        color.r += 26;
                    }
                    else if (color.r !== 0 && color.r < 255) {
                        color.r += 26;
                    } 
                    else if( color.r === 0) {
                        color.r += 26;
                    }
                    if (color.g === 255) {
                        color.g += 26;
                        
                    }
                    else if (color.g !== 0 && color.g < 255) {
                        color.g += 26;
                        
                    } 
                    else if( color.g === 0) {
                        color.g += 26;
                        
                    }
                    if (color.b === 255) {
                        color.b += 26;
                    }
                    else if (color.b !== 0 && color.b < 255) {
                        color.b += 26;
                    } 
                    else if( color.b === 0) {
                        color.b += 26;
                    }
                    colorOfDoc2.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
                    var node1 = document.createElement("p");                 
                    node1.innerHTML = `${rgbToHex(color.r, color.g, color.b)}`; 
                    colorOfDoc2.appendChild(node1);
                }
                
                return `${color.r}, ${color.g}, ${color.b}`;
            } 
            const reverseArray = (arr) => {
                var newArr = [];
                for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
                    newArr[i] = arr[j];
                }   
                return newArr;
            }
            const componentToHex = (c) => {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            
            const rgbToHex = (r, g, b) => {
            return "#"+componentToHex(r)+componentToHex(g) + componentToHex(b);
            }
        setColorInRgb(`${getColor2(selectedColor)}`) 
        setColorInRgb(`${getColor(selectedColor)}`)
        
        setInputValue("")
    }
    // const componentToHex = (c) => {
    //     var hex = c.toString(16);
    //     return hex.length == 1 ? "0" + hex : hex;
    // }
    
    // const rgbToHex = (r, g, b) => {
    // return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }
    return (
        <WrapContent>
            <div className="header">
                <div className="title-page">Color Generator</div>
                <input type="text" id="input"  placeholder={inputValue}  value={inputValue} onChange={(e) => handleChange(e)} />
                <button className="btn-submit" onClick={stringToColor}>Submit</button>
            </div>
            <div className="bound-color">
                <article className="color " style={{backgroundColor: `rgb(255, 255, 255)`}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
                {listLighter.map((item,index) => (
                    <article key={index} className= "color false" style={{backgroundColor: `rgb(255,255,255)`}}>
                        <p  className="percent-value">{item.percentage}</p>
                    </article>
                ))}
                <article className="color color-light " style={{backgroundColor: `rgb(255,255,255)`,color: "#000"}}><p className="percent-value">0%</p><p className="color-value">{inputValue}</p></article>
                {listDarker.map((item,index) => (
                    <article key={index} className="color color-light" style={{backgroundColor: `rgb(255,255,255)`, color: "#ffffff"}}>
                        <p className="percent-value">{item.percentage}</p>
                    </article>
                ))}
                <article className="color " style={{backgroundColor: `rgb(0, 0, 0)`, color: "#ffffff"}}><p className="percent-value">100%</p><p className="color-value">#000000</p></article>
            </div>
            
        </WrapContent>
    )
}
