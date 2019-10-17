import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const SlideShow = () => {
    const imgs = slideImages.map(img => <ImgContainer imgUrl={img} />)
    return (
        <div className="slide-container">
            <Slide {...properties}>
                { imgs }
            </Slide>
        </div >
    )
}

const ImgContainer = (props) => {
    return (
        <div className="each-slide">
            <div className="img-container"
                style={{ 'backgroundImage': `url(${props.imgUrl})` }}>
            </div>
        </div>
    )
}

export default SlideShow;