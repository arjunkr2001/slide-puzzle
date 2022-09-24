import React from "react";

export default function Tile(props){
    return(
        <div className="tile" style={{
            display: 'grid',
            placeItems: 'center',
            border: '1px solid cyan',
            background: props.value === 0 ? 'white' : 'rgba(0,0,0,0.1)',
            backgroundImage: props.img ? `url('./img/t${props.value}.webp')` : "none",
            backgroundSize: 'cover',
            borderRadius: props.img ? '5px' : '10px'
        }}
        onClick={()=>{props.clickHandler(props.value)}}
        >{!props.img ? props.value : null}</div>
    )
}