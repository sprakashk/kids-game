import React from 'react'
import { CONTROLS } from '../../constants'
import './Controls.scss';

const Controls = ({controlHandler}) => {
    return (
        <div className="controls-container">
            <div className="row1">
                <button onClick={() => controlHandler(CONTROLS.UP)}>&#8593;</button>
            </div>
            <div className="row1">
                <button onClick={() => controlHandler(CONTROLS.LEFT)}>&#8592;</button>
                <button ></button>
                <button onClick={() => controlHandler(CONTROLS.RIGHT)}>&#8594;</button>                
            </div>
            <div className="row1">
                <button onClick={() => controlHandler(CONTROLS.DOWN)}>&#8595;</button>
            </div>
            
        </div>
    )
}

export default Controls
