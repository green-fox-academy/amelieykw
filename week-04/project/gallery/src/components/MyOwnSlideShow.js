import React from 'react';
import Previews from './Previews';
import Slides from './Slides';

class MySlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [
                {
                    id: 0,
                    url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                },
                {
                    id: 1,
                    url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                },
                {
                    id: 2,
                    url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"
                }
            ],
            currentImgId: 0
        }
        this.handleClickPreview = this.handleClickPreview.bind(this);
        this.handleClickArrowLeft = this.handleClickArrowLeft.bind(this);
        this.handleClickArrowRight = this.handleClickArrowRight.bind(this);
    }

    componentWillMount() {
        this.setState(() => {
            return {
                currentImgUrl: this.state.imgs[this.state.currentImgId].url
            }
        });
    }

    handleClickPreview(currentClickedImgId) {
        this.setState(() => {
            return {
                currentImgId: currentClickedImgId,
                currentImgUrl: this.state.imgs[currentClickedImgId].url
            }
        });
    }

    handleClickArrowLeft() {    
        const nextImgId = (this.state.currentImgId - 1 + this.state.imgs.length) % this.state.imgs.length;
        console.log(nextImgId); 
        this.setState(() => {
            return {
                currentImgId: nextImgId,
                currentImgUrl: this.state.imgs[nextImgId].url
            }
        });
    }
    
    handleClickArrowRight() {        
        const nextImgId = (this.state.currentImgId + 1 + this.state.imgs.length) % this.state.imgs.length;
        console.log(nextImgId);  
        this.setState(() => {
            return {
                currentImgId: nextImgId,
                currentImgUrl: this.state.imgs[nextImgId].url
            }
        });
    }


    render() {
        return (
            <div className="mySlides-container">
                <Slides 
                    imgUrl={this.state.currentImgUrl}
                    handleClickArrowLeft={this.handleClickArrowLeft} 
                    handleClickArrowRight={this.handleClickArrowRight} 
                />
                <Previews
                    imgs={this.state.imgs}
                    handleClickPreview={this.handleClickPreview}
                />
            </div>
        )
    }
}

export default MySlideShow;