import React from 'react';

export default function BottleImage(props){

    return (
      <img src={props.images[props.progress]} alt='bottle'/>
    )
}