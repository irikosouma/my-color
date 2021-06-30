import React, { useRef, useEffect }from 'react'
//styles
import {Wrap} from './index.styles'
import {WrapContent} from './ColorItem/index.styles'
export default function ColorComponent({selectedColor,rList, gList, bList, lightColor, rLightList, gLightList, bLightList, darkColor}) {
    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
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
        return color   
    }
    const colorMainRef = useRef(null)
    const copyToClipboard = (itemId) => {
        let valueColor = document.getElementById(itemId)
        // let valueColor = colorMainRef.current
        // console.log('copy', valueColor)
        const newEl = document.createElement('textarea');
        newEl.value = valueColor.lastElementChild.innerText
        newEl.setAttribute('readonly','');
        newEl.style.position = 'absolute';
        newEl.style.left = '-9999px';
        document.body.appendChild(newEl)
        newEl.select();
        document.execCommand('copy')
        document.body.removeChild(newEl)
        // // setShowLoading(true)
        const copyToClipboardEle = document.createElement('p')
        copyToClipboardEle.innerHTML = 'COPY TO CLIPBOARD'
        copyToClipboardEle.style.color = "#617d98"
        valueColor.appendChild(copyToClipboardEle)
        setTimeout(() => {
            valueColor.removeChild(copyToClipboardEle)
        }, 500)
    
    }
    const copyMainColorToClipboard = () => {
        let valueColor = document.getElementById("main-color")
        const newEl = document.createElement('textarea');
        // newEl.value = valueColor.lastElementChild.innerText
        newEl.value = valueColor.childNodes[1].innerText
        newEl.setAttribute('readonly','');
        newEl.style.position = 'absolute';
        newEl.style.left = '-9999px';
        document.body.appendChild(newEl)
        newEl.select();
        document.execCommand('copy')
        document.body.removeChild(newEl)
        const copyToClipboardEle = document.createElement('p')
        copyToClipboardEle.innerHTML = 'COPY TO CLIPBOARD'
        copyToClipboardEle.style.color = "#617d98"
        valueColor.appendChild(copyToClipboardEle)
        setTimeout(() => {
            valueColor.removeChild(copyToClipboardEle)
        }, 500)
    }
    return (
        <Wrap>
            <div className="bound">
                {lightColor.map((item, index) => (
                <WrapContent onClick={() => copyToClipboard(item.id)} className="light-color" id={item.id} key={index} style={{backgroundColor: `rgb(${rLightList[index]}, ${gLightList[index]}, ${bLightList[index]})`}} >
                    <p className="percent-value">{item.percentage}</p>
                    <p ref={colorMainRef}>{rgbToHex(rLightList[index], gLightList[index], bLightList[index])}</p>
                </WrapContent>
                ))}
                <WrapContent id="main-color" onClick={() => copyMainColorToClipboard()} className="light-color" style={{backgroundColor: `rgb(${getColor(selectedColor).r}, ${getColor(selectedColor).g}, ${getColor(selectedColor).b})`}}>
                    <p>0%</p>
                    <p ref={colorMainRef}>{rgbToHex(getColor(selectedColor).r, getColor(selectedColor).g, getColor(selectedColor).b)}</p>
                </WrapContent>
                {darkColor.map((item, index) => (
                <WrapContent onClick={() => copyToClipboard(item.id)} className="dark-color" id={item.id} key={index} style={{backgroundColor: `rgb(${rList[index]}, ${gList[index]}, ${bList[index]})`}}>
                    <p className="percent-value">{item.percentage}</p>
                    <p ref={colorMainRef}>{rgbToHex(rList[index], gList[index], bList[index])}</p>
                </WrapContent>
                ))}
            </div>
            
            
            
        </Wrap>
    )
}