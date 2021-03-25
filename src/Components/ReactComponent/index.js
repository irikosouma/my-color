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
    const [rList, setRList] = useState(lightColor.map((item) => item.rgbColor.r))
    const [gList, setGList] = useState(lightColor.map((item) => item.rgbColor.g))
    const [bList, setBList] = useState(lightColor.map((item) => item.rgbColor.b))
    const [h, setH] = useState("")
    const inputRef = useRef(null)
    
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
        // console.log("rgb color", getColor(newInput).r,getColor(newInput).g, getColor(newInput).b)
        // setH(RGBToHSL(getColor(newInput).r,getColor(newInput).g, getColor(newInput).b))
            const checkValue = (value) => {
                if(value === 0) {
                    value = 0
                }
                else if (value !== 0 && value < 255) {
                    value -= 26
                    return value
                }
                else if(value === 255){
                    let newVal = 256
                    value = newVal -= 26
                    return value
                }
                else if( value < 0) {
                    value = 0
                }
                return value
            }
            
                let newRList = []
                let newGList = []
                let newBList = []
                let newR = (getColor(newInput).r)
                let newG = (getColor(newInput).g)
                let newB = (getColor(newInput).b)
            for (let i = 0; i < darkColor.length; i++) {
                
                if(newR === 255){
                    newR = 256
                }
                else if(newR === 0) {
                    newR = 0
                    
                }
                newR -= 26;
                if(newR < 0) {
                    newR
                    = 0
                }
                newRList.push(newR)
                // console.log('R ne', newR)
                setRList(newRList)
                // console.log('new r list', newRList)
            }
            for (let i = 0; i < darkColor.length; i++) {            
                if(newG === 255){
                    newG = 256
                }
                else if(newG === 0) {
                    newG = 0
                }
                newG -= 26;
                if(newG < 0) {
                    newG = 0
                }
                // console.log('G ne', newG)
                newGList.push(newG)
                setGList(newGList)
                // console.log('new  g list', newGList)
            }
            for (let i = 0; i < darkColor.length; i++) {
                if(newB === 255){
                    newB = 256
                }
                else if(newB === 0) {
                    newB = 0
                    
                }
                newB -= 26;
                if(newB < 0) {
                    newB = 0
                }
                newBList.push(newB)
                // console.log('B ne', newB)
                setBList(newBList)
                // console.log('new b list', newBList)
            }
            // console.log('new listtt', newList)
            // setRgbList(newList)

    }
    return (
        <WrapContent>
            <div className="header-content">
                <div className="title-page">Color Generator</div>
                <input id="input" type="text"  ref={inputRef} placeholder="#f15025" value={undefined} onChange={null}/>
                <button type="submit" className="btn-submit" onClick={() => handleSubmit(inputRef.current)}>Submit</button>
            </div>
            <div className="bound-color">
                <ColorComponent 
                    selectedColor={inputColor} 
                    // rList={lightColor.map((item) => item.rgbColor.r)} 
                    // gList={lightColor.map((item) => item.rgbColor.g)}  
                    // bList={lightColor.map((item) => item.rgbColor.b)}
                    rList={rList}
                    gList={gList}
                    bList={bList}
                    lightColor={lightColor} 
                    setLightColor={setLightColor} 
                    darkColor={darkColor} 
                    setDarkColor={setDarkColor}/>
            </div>
        </WrapContent>
    )
}
