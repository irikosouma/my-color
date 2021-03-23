import React, { useState }from 'react'
//styles
import {Wrap} from './index.styles'
//data
import dark from '../../../data/listDarkColor'
import light from '../../../data/listColor'
//component
import ColorItem from './ColorItem'
export default function ColorComponent() {
    const [lightColor, setLightcolor] = useState(light)
    const [darkColor, setDarkColor] = useState(dark)
    return (
        <Wrap>
            <div className="bound">
                <ColorItem />
                <ColorItem />
                <ColorItem />
            </div>
            {/* {lightColor.map((item, index) => (
                <ColorItem key={index} data={item.percentage} />
            ))} */}
            
            {/* {darkColor.map((item, index) => (
                <ColorItem key={index} data={item.percentage} />
            ))} */}
        </Wrap>
    )
}
