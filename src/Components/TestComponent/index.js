import React , {useState} from 'react'
//styles
import {WrapContent} from './index.styles'
export default function TestComponent() {
    // const [colorInput, setColorInput] = useState();
    // const [inputValue, setInputValue] = useState(89);
    // const [colorInRgb, setColorInRgb] = useState("")
    // const [testRGB, setTestRGB] = useState('')
    // const handleChange = (e) => {
    //     let inputVal = e.target.value
    //     setInputValue(inputVal)
    // }

//     const stringToColor = () => {
//         // const d = document.createElement("div");
//         // d.style.color = inputValue;
//         // document.body.appendChild(d)
//         //Color in RGB
//         // console.log('color ne',window.getComputedStyle(d).color)
//         // let newColor = window.getComputedStyle(d).color
// }
const colorChanged = (e) =>{
    let valueDeg = e.target.value
    let s = 100;
    let l = 77;
    // document.getElementById('deg').innerText = h;
    for (let color of document.getElementsByClassName('color')) {
        color.style.backgroundColor = `hsl(${valueDeg}deg ${s}% ${l}%)`;
        color.innerText = HSLToRGB(valueDeg, s, l);
        l -= 7;
    }
    // setInputValue(h)
}
const HSLToRGB = (h, s, l) => {
        s /= 100;
        l /= 100;
    
        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs((h / 60) % 2 - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;
    
        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
    
        return "#" + 
          Math.floor((r + m) * 255).toString(16).padStart(2, '0') + 
          Math.floor((g + m) * 255).toString(16).padStart(2, '0') + 
          Math.floor((b + m) * 255).toString(16).padStart(2, '0');
    }
// colorChanged(89)
    return (
        <WrapContent>
            <label>
                {/* <input type="text" min={0} max={360} value={inputValue} onChange={(e) => handleChange(e)} /> */}
                {/* <input type="range" min={0} max={360} value={89} step={1} onChange={ (e)=> colorChanged(e)} /> */}
                {/* <span id="deg" />deg */}
                {/* <button onClick={stringToColor}>submit</button> */}
                <input type="range" name="rangeInput" min="0" max="360" onChange={ (e)=> colorChanged(e)} />
                {/* <input type="text" id="textInput" value=""></input> */}
            </label>
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
                <div className="color" />
            {/* <div className="color" style={{backgroundColor: colorInput}}/>
            <div className="color" style={{backgroundColor: colorInput}}/>
            <div className="color" style={{backgroundColor: colorInput}}/>
            <div className="color" style={{backgroundColor: colorInput}}/> */}
            {/* <article className="color false" style={{backgroundColor: colorInput}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: 'rgb(255, 230, 230)'}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: colorInput}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: 'rgb(255, 179, 179)'}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: colorInput}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: 'rgb(255, 128, 128)'}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: colorInput}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: 'rgb(255, 77, 77)'}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: 'rgb(255, 51, 51)'}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article>
            <article className="color false" style={{backgroundColor: 'rgb(255, 25, 25)'}}><p className="percent-value">100%</p><p className="color-value">#ffffff</p></article> */}
        </WrapContent>
    )
}
// function colorChanged(h) {

//     let s = 100;
//     let l = 77;

//     document.getElementById('deg').innerText = h;

//     for (let color of document.getElementsByClassName('color')) {

//         color.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`;
//         color.innerText = HSLToRGB(h, s, l);

//         l -= 7;
//     }
// }

// function HSLToRGB(h, s, l) {
//     s /= 100;
//     l /= 100;

//     let c = (1 - Math.abs(2 * l - 1)) * s,
//         x = c * (1 - Math.abs((h / 60) % 2 - 1)),
//         m = l - c / 2,
//         r = 0,
//         g = 0,
//         b = 0;

//     if (0 <= h && h < 60) {
//         r = c; g = x; b = 0;
//     } else if (60 <= h && h < 120) {
//         r = x; g = c; b = 0;
//     } else if (120 <= h && h < 180) {
//         r = 0; g = c; b = x;
//     } else if (180 <= h && h < 240) {
//         r = 0; g = x; b = c;
//     } else if (240 <= h && h < 300) {
//         r = x; g = 0; b = c;
//     } else if (300 <= h && h < 360) {
//         r = c; g = 0; b = x;
//     }

//     return "#" + 
//       Math.floor((r + m) * 255).toString(16).padStart(2, '0') + 
//       Math.floor((g + m) * 255).toString(16).padStart(2, '0') + 
//       Math.floor((b + m) * 255).toString(16).padStart(2, '0');
// }
// const getColor = (c) => {
//     var temp = document.createElement("div");
//     var color = {r:0,g:0,b:0,a:0};
//     temp.style.color = c;
//     temp.style.display = "none";
//     document.body.appendChild(temp);
//     var style = window.getComputedStyle(temp,null).color;
//     document.body.removeChild(temp);
//     var recol = /([\.\d]+)/g;
//     var vals  = style.match(recol);
//     if (vals.length>2) {
//         color.r = parseInt(vals[0])||0;
//         color.g = parseInt(vals[1])||0;
//         color.b = parseInt(vals[2])||0;
//         color.a = Math.round((parseFloat(vals[3])||1.0)*1);
//     }
//     // console.log('color we will get',`rgba ${color.r}, ${color.g}, ${color.b}, ${color.a}`)
//     return color;
// }

    // const stringToColor = () => {
    //     const d = document.createElement("div");
    //     d.style.color = inputValue;
    //     document.body.appendChild(d)
    //     const selectedColor = window.getComputedStyle(d).color
    //     // let valueOfH = selectedColor.split();
    //     console.log('color',selectedColor.style.opalcity)
    //     // setColorInRgb(selectedColor)
    // }

    // const stringToColor = () => {
    //     var getColor = function(c) {
    //         const temp = document.createElement("div");
    //         var color = {r:0,g:0,b:0,a:0};
    //         temp.style.color = c;
    //         temp.style.display = "none";
    //         document.body.appendChild(temp);
    //         var style = window.getComputedStyle(temp,null).color;
    //         document.body.removeChild(temp);
    //         var recol = /([\.\d]+)/g;
    //         var vals  = style.match(recol);
    //         if (vals.length>2) {
    //             color.r = parseInt(vals[0])||0;
    //             color.g = parseInt(vals[1])||0;
    //             color.b = parseInt(vals[2])||0;
    //             color.a = Math.round((parseFloat(vals[3])||1.0)*1);
    //         }
    //         // let valueDeg = color.r
    //         // let s = 100;
    //         // let l = 77;
    //         // let a = 1
    //         // for (let colorOfDoc of document.getElementsByClassName('color')) {
    //         //     colorOfDoc.style.backgroundColor = `hsla(${valueDeg}deg, ${s}%, ${l}%, ${a})`;
    //         //     // color.innerText = HSLToRGB(h, s, l);
    //         //     valueDeg -= 1
    //         //     l -= 7;
    //         //     a -= 0.09
    //         //     // console.log('color ne',`hsla(${valueDeg}deg, ${s}%, ${l}% ,${parseFloat(a).toFixed(2)}`)
    //         // }
    //     //     return `${color.r},${color.g},${color.b},${color.a}`
    //     // }
    //     // const d = document.createElement("div");
    //     // d.style.color = inputValue;
    //     // document.body.appendChild(d)
    //     // const selectedColor = window.getComputedStyle(d).color
    //     // console.log('color',`${getColor(selectedColor)}`)
    //     // setColorInRgb(`${getColor(selectedColor)}`)

    // }
    // function RGBToHSL(r,g,b) {
    //     r /= 255;
    //     g /= 255;
    //     b /= 255;
    //     let cmin = Math.min(r,g,b),
    //         cmax = Math.max(r,g,b),
    //         delta = cmax - cmin,
    //         h = 0,
    //         s = 0,
    //         l = 0;
    //     if (delta == 0)
    //     h = 0;
    //     // Red is max
    //     else if (cmax == r)
    //     h = ((g - b) / delta) % 6;
    //     // Green is max
    //     else if (cmax == g)
    //     h = (b - r) / delta + 2;
    //     // Blue is max
    //     else
    //     h = (r - g) / delta + 4;
    //     h = Math.round(h * 60);
    //     if (h < 0)
    //         h += 360;
    //     l = (cmax + cmin) / 2;
    //     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    //     s = +(s * 100).toFixed(1);
    //     l = +(l * 100).toFixed(1);
    //     return "hsl(" + h + "," + s + "%," + l + "%)";
    // }
    // const componentToHex = (c) => {
    //     var hex = c.toString(16);
    //     return hex.length == 1 ? "0" + hex : hex;
    // }
    
    // const rgbToHex = (r, g, b) => {
    // return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }