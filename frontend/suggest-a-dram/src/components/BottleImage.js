import React from 'react';

export default function BottleImage(props){

    const displayImages = function() {
        for (let i = props.progress; i < 6; i++) {
          return <img src={props.images[i]} alt='bottle'/>
        }
      }

    return (
        {displayImages}
    )
}