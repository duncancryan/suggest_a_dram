import React from 'react';
import Slider from '@material-ui/core/Slider';

export default function SliderComponent(props){

    function handleSliderChange(event, value){
        props.onChange(value);
    }

    return(
        <Slider min={0} max={5} defaultValue={3} onChange={handleSliderChange} valueLabelDisplay="auto"/>
    )
}