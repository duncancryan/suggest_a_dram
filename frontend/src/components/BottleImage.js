import React from 'react';

export default function BottleImage(props){

    return (
      <img className="bottle-image" src={props.images[props.progress]} alt='bottle'/>
    )
}