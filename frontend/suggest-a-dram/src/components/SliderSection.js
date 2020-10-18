import React from 'react';

export default function SliderSection(props) {
    return (
        <div>
            <SliderBar body={this.props.style.body} onChange={this.props.onSliderChange}/>
            <SliderBar richness={this.props.style.richness} onChange={this.props.onSliderChange}/>
            <SliderBar smoke={this.props.style.smoke} onChange={this.props.onSliderChange}/>
            <SliderBar sweetness={this.props.style.sweetness} onChange={this.props.onSliderChange}/>
        </div>
    )
}
