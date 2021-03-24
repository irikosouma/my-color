import React from 'react'
//styles 
import {WrapContent} from './index.styles'
export default function ColorItem({ data, selected }) {
    console.log('selectedcolor', selected)
    return (
        <WrapContent style={{backgroundColor: selected}}>
            <p className="percent-value">{data}</p>
            <p>color</p>
        </WrapContent>
    )
}
