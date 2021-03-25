import React from 'react'
//styles 
import {WrapContent} from './index.styles'
export default function ColorItem({ data, selected}) {
    let newVal = data.rgbColor
    // console.log('data', newVal)
    return (
        // `rgb(${data.rgbColor.r}, ${data.rgbColor.g}, ${data.rgbColor.b})`
        <WrapContent >
            <p className="percent-value">{data.percentage}</p>
            <p>color</p>
        </WrapContent>
    )
}
