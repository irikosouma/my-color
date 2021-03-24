import React, { useState, useRef } from 'react'
//styles
import {WrapContent} from './index.styles'
//component
import ColorComponent from './ColorComponent'
//data
import dark from '../../data/listDarkColor'
import light from '../../data/listColor'
export default function ReactComponent() {
    const [lightColor, setLightColor] = useState(light)
    const [darkColor, setDarkColor] = useState(dark)
    const [inputColor, setInputColor] = useState("#F15025")
    const [h, setH] = useState("")
    const inputRef = useRef(null)
    // const handleChange = (e) => {
    //     let val = e.target.value
    //     setInputColor(val)
    // }
    const getColor = (c) => {
        var temp = document.createElement("div");
        var color = {r:0,g:0,b:0};
        temp.style.color = c;
        temp.style.display = "none";
        document.body.appendChild(temp);
        var style = window.getComputedStyle(temp,null).color;
        document.body.removeChild(temp);
        var recol = /([\.\d]+)/g;
        var vals  = style.match(recol);
        if (vals.length>2) {
            color.r = parseInt(vals[0])||0;
            color.g = parseInt(vals[1])||0;
            color.b = parseInt(vals[2])||0;
        }
        return color;
        
    }
    const RGBToHSL = (r,g,b) => {
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta === 0)
        h = 0;
        // Red is max
        else if (cmax === r)
        h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax === g)
        h = (b - r) / delta + 2;
        // Blue is max
        else
        h = (r - g) / delta + 4;
        h = Math.round(h * 60);
        if (h < 0)
            h += 360;
        l = (cmax + cmin) / 2;
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        return h
    }
    const handleSubmit = (input) => {
        let newInput = input.value
        setInputColor(newInput)
        
        setH(RGBToHSL(getColor(newInput).r,getColor(newInput).g, getColor(newInput).b))
        // {
        //     let s = 100;
        //     let l = 55;
        //     let h = RGBToHSL(getColor(newInput).r,getColor(newInput).g, getColor(newInput).b)
        //     // let colorLight = light.length
        //     // let newArray = Array.from(colorLight)
        //     // const reverseArray = (arr) => {
        //     // let newArr = [];
        //     // for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
        //     //     newArr[i] = arr[j];
        //     // }   
        //     // return newArr;
        //     // }
        //     for (let colorOfDoc of lightColor) {
        //         colorOfDoc.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`;
        //         const textColor = document.createElement("div");
        //         textColor.className = "color-div"
        //         // textColor.innerHTML = HSLToRGB(h, s, l);
        //         colorOfDoc.appendChild(textColor)
        //         l += 5;
        //     }
        // }
    }
    return (
        <WrapContent>
            <div className="header-content">
                <div className="title-page">Color Generator</div>
                <input id="input" type="text"  ref={inputRef} placeholder="#f15025" value={null} onChange=""/>
                <button type="submit" className="btn-submit" onClick={() => handleSubmit(inputRef.current)}>Submit</button>
            </div>
            <div className="bound-color">
                <ColorComponent selectedColor={inputColor}  lightLength={lightColor.length} darkLength={darkColor.length} hueColor={h} lightColor={lightColor} setLightColor={setLightColor} darkColor={darkColor} setDarkColor={setDarkColor}/>
            </div>
        </WrapContent>
    )
}
