import React, { useState }from 'react'
//styles
import {Wrap} from './index.styles'
import {WrapContent} from './ColorItem/index.styles'
//data
// import dark from '../../../data/listDarkColor'
// import light from '../../../data/listColor'
//component
// import ColorItem from './ColorItem';

export default function ColorComponent({selectedColor,rList, gList, bList, lightColor, darkColor, setLightColor, setDarkColor}) {
    // rList, gList, bList,
    
    // const [rList, setRList] = useState(lightColor.map((item) => item.rgbColor.r))
    // const [gList, setGList] = useState(lightColor.map((item) => item.rgbColor.g))
    // const [bList, setBList] = useState(lightColor.map((item) => item.rgbColor.b))
    console.log('r list', rList)
    console.log('g list', gList)
    console.log('b list', bList)
    return (
        <Wrap>
            <div className="bound">
                {lightColor.map((item, index) => (
                    // style={{backgroundColor:`rgb(${rVal}, ${gVal}, ${bVal})`}}
                    // `rgb(${rList[index]}, ${gList[index]}, ${bList[index]})`
                    // style={{backgroundColor: `rgb(${rList}, ${gList}, ${bList})`}}
                <WrapContent className="light-color" id={item.id} key={index} style={{backgroundColor: selectedColor}} >
                    <p className="percent-value">{item.percentage}</p>
                    <p>color</p>
                </WrapContent>
                    
                ))}
                <WrapContent style={{backgroundColor: selectedColor}}>
                    <p>0%</p>
                    <p>{selectedColor}</p>
                </WrapContent>
                {darkColor.map((item, index) => (
                <WrapContent className="light-color" id={item.id} key={index} style={{backgroundColor: `rgb(${rList[index]}, ${gList[index]}, ${bList[index]})`}}>
                    <p className="percent-value">{item.percentage}</p>
                    <p>color</p>
                </WrapContent>
                ))}
            </div>
            
            
            
        </Wrap>
    )
}
// const getColor = (c) => {
//     var temp = document.createElement("div");
//     var color = {r:0,g:0,b:0};
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
//     }
//     return color;
// }
// const checkValue = (value) => {
//     if(value === 0) {
//         value = 0
//     }
//     else if (0 < value < 255) {
//         value -= 26
//     }
//     else if(value === 255){
//         let newVal = 256
//         value = newVal -= 26
//         return value
//     }
//     else if( value < 0) {
//         value = 0
//     }
//     return value
// }
// const [hVal, setRVal] = useState(hueColor)
// const [sVal, setGVal] = useState(100)
// const [lVal, setBVal] = useState(55)