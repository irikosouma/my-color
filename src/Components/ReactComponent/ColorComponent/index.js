import React, { useState }from 'react'
//styles
import {Wrap} from './index.styles'
import {WrapContent} from './ColorItem/index.styles'
//data
// import dark from '../../../data/listDarkColor'
// import light from '../../../data/listColor'
//component
import ColorItem from './ColorItem'

export default function ColorComponent({selectedColor, hueColor ,lightColor, darkColor, setLightColor, setDarkColor, lightLength, darkLength}) {
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
    const [hVal, setRVal] = useState(hueColor)
    const [sVal, setGVal] = useState(100)
    const [lVal, setBVal] = useState(55)
    
    // console.log('selected', rVal, gVal, bVal)
    // const colorChanged = (param) => {
    //         let s = 100;
    //         let l = 55;
    //         let h = param
    //         for (let colorOfDoc of document.getElementsByClassName('light-color')) {
    //             // colorOfDoc.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`;
    //             // // const textColor = document.createElement("div");
    //             // // textColor.className = "color-div"
    //             // // // textColor.innerHTML = HSLToRGB(h, s, l);
    //             // // colorOfDoc.appendChild(textColor)
    //             // l += 5;
    //             // console.log('color tim dc', colorOfDoc )
    //         }
    //     return `hsl(${h}deg ${s}% ${l}%)`
    // }
    // colorChanged(hueColor)
    return (
        <Wrap>
            <div className="bound">
                {lightColor.map((item, index) => (
                    // style={{backgroundColor:`rgb(${rVal}, ${gVal}, ${bVal})`}}
                    <ColorItem className="light-color" id={item.id} key={index} data={item.percentage} selected={selectedColor} />
                ))}
                <WrapContent style={{backgroundColor: selectedColor}}>
                    <p>0%</p>
                    <p>{selectedColor}</p>
                </WrapContent>
                {darkColor.map((item, index) => (
                    <ColorItem className="dark-color" key={index} data={item.percentage} />
                ))}
            </div>
            
            
            
        </Wrap>
    )
}
