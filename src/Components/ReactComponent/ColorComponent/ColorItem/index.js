import React from 'react'
//styles 
import {WrapContent} from './index.styles'
export default function ColorItem({data}) {
    console.log('data ne', data)
    return (
        <WrapContent >
            <p className="percent-value">{data}</p>
            <p>color itemmm</p>
        </WrapContent>
    )
}
