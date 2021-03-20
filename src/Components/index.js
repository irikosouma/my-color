import React, {useState} from 'react'
//style
import {WrapContent} from './index.styles'
//data
import light from '../data/listColor'
import dark from '../data/listDarkColor'
import dataPercent from '../data/dataPercent'

export default function ColorExplosion() {
    const [inputValue, setInputValue] = useState("white");
    const [selected, setSelected] = useState(`rgb(255,255,255)`)
    const [lighter, setLighter] = useState(`rgb(255,255,255)`)
    const [darker, setDarker] = useState(`rgb(0,0,0)`)
    const [listLighter, setListLighter] = useState(light);
    const [listDarker, setListDarker] = useState(dark);
    const handleChange = (e) => {
        let inputVal = e.target.value
        setInputValue(inputVal)
    }
    const colorChanged = (h) => {
        const d = document.createElement("div");
        d.style.color = inputValue;
        document.body.appendChild(d)
        const selectedColor = window.getComputedStyle(d).color;
        function RGBToHSL(r,g,b) {
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;
            if (delta == 0)
            h = 0;
            // Red is max
            else if (cmax == r)
            h = ((g - b) / delta) % 6;
            // Green is max
            else if (cmax == g)
            h = (b - r) / delta + 2;
            // Blue is max
            else
            h = (r - g) / delta + 4;
            h = Math.round(h * 60);
            if (h < 0)
                h += 360;
            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);
            return h
        }
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
        RGBToHSL(getColor(selectedColor).r,getColor(selectedColor).g, getColor(selectedColor).b)
        {
            let s = 100;
            let l = 55;
            let h = RGBToHSL(getColor(selectedColor).r,getColor(selectedColor).g, getColor(selectedColor).b)
            var colorLight = document.getElementsByClassName('false')
            var newArray = Array.from(colorLight)
            const reverseArray = (arr) => {
            var newArr = [];
            for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
                newArr[i] = arr[j];
            }   
            return newArr;
            }
            let total = 10
            for (let colorOfDoc of reverseArray(newArray)) {
                colorOfDoc.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`;
                colorOfDoc.innerText = HSLToRGB(h, s, l);
                var node1 = document.createElement("p");                 
                let newValue = `${total} %`
                node1.innerHTML = newValue
                total += 10 ;
                colorOfDoc.appendChild(node1);
                l += 5;
            }
        }
        {
            h = RGBToHSL(getColor(selectedColor).r,getColor(selectedColor).g, getColor(selectedColor).b)
            console.log('h ne', h)
            let s2 = 100;
            let l2 = 50;
            let total = 0
            for (let colorOfDoc2 of document.getElementsByClassName('color-light')) {
                colorOfDoc2.style.backgroundColor = `hsl(${h}deg ${s2}% ${l2}%)`;
                colorOfDoc2.innerText = HSLToRGB(h, s2, l2);
                var node = document.createElement("p");                 
                let newValue = `${total} %`
                node.innerHTML = newValue
                total += 10 ;
                colorOfDoc2.appendChild(node);
                l2 -= 5;
                
            }
            ;
        }
        setSelected(selectedColor);
        setLighter(...listLighter)
        setDarker(...listDarker)
        setInputValue("")
    }
    function HSLToRGB(h, s, l) {
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
    const hex = 
      Math.floor((r + m) * 255).toString(16).padStart(2, '0') + 
      Math.floor((g + m) * 255).toString(16).padStart(2, '0') + 
      Math.floor((b + m) * 255).toString(16).padStart(2, '0');
        let newValue = hex.replace(/\s|\W|[$%^&-*()]/g, "0")
    return "#" + newValue
}
const copyToClipboard = str => {
                
    let colorOfDoc2 = document.getElementsByClassName('color-light')
    colorOfDoc2.innerText = HSLToRGB(h, s2, l2);

    document.body.appendChild(colorOfDoc2.innerText);
    colorOfDoc2.innerText.select();
    document.execCommand('copy');
    document.body.removeChild(colorOfDoc2.innerText);
}
    return (
        <WrapContent>
            <div className="header">
                <div className="title-page">Color Generator</div>
                <input type="text" id="input"  placeholder={inputValue}  value={inputValue} onChange={(e) => handleChange(e)} />
                <button className="btn-submit" onClick={colorChanged}>Submit</button>
            </div>
            <div className="bound-color">
                {listLighter.map((item,index) => (
                    <article key={index} className= "color false" style={{backgroundColor:`rgb(255,255,255)`}} onClick={colorChanged}>
                        <p  className="percent-value">{item.percentage}</p>
                    </article>
                ))}
                <article className="color color-light" style={{backgroundColor: selected,color: "#000000"}}><p className="percent-value">0%</p></article>
                {listDarker.map((item,index) => (
                    <article key={index} className="color color-light" style={{backgroundColor: `rgb(255,255,255)`, color: "#fff"}}>
                        <p className="percent-value">{item.percentage}</p>
                    </article>
                ))}
                
            </div>
            
        </WrapContent>
    )
}
