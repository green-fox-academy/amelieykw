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
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div className="img-container"
                        style={{
                            'backgroundImage': `url(${slideImages[0]})`,
                            'background-repeat': 'no-repeat',
                            'background-size': '100% 100%'
                    }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-container" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-container" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div >
    )
}

export default SlideShow;