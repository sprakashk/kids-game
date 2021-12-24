import React from 'react'
import { GRID_DATA } from '../../constants';
import './Grid.scss';

const Grid = ({ selecteItem }) => {
    const audio = new Audio("https://sounds.pond5.com/foley-plastic-hit-plastic-lite-sound-effect-066845747_prev.m4a");
    if(selecteItem.showWarning) {
        audio.play();
    }
    return (
        <div className="grid-container">
            {GRID_DATA.map((item) => {
                return <div className="grid-item" key={item.id} style={{ backgroundColor: item.id === selecteItem.id && '#ffc0cb', boxShadow: item.id === selecteItem.id && selecteItem.showWarning && `inset 0px 0px 19px 1px red` }}>
                </div>
            })}
        </div>
    )
}

export default Grid
