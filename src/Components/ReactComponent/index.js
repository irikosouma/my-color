import React, { useState } from 'react'
//styles
import {WrapContent} from './index.styles'
//component
import ColorComponent from './ColorComponent'
export default function ReactComponent() {
    const [inputColor, setInputColor] = useState("#F15025")
    const handleChange = (e) => {
        let val = e.target.value
        console.log('value ne', val)
        setInputColor(val)
    }
    return (
        <WrapContent>
            <div className="header-content">
                <div className="title-page">Color Generator</div>
                <input id="input" type="text" placeholder="#f15025"  onChange={(e) => handleChange(e)} />
                <button type="submit" className="btn-submit">Submit</button>
            </div>
            <div className="bound-color">
                <ColorComponent  />
            </div>
        </WrapContent>
    )
}
