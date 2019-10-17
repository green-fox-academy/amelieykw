import React from 'react';

class Slides extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const iConStyle = {
            fontSize: '36px' 
        }

        return (
            <div className="mySlide">
                <div className="arrow-left">
                    <i className="fa fa-chevron-left" style={iConStyle} 
                        onClick={() => this.props.handleClickArrowLeft()}></i>
                </div>
                <img className="imgSlide" key={this.props.imgId} src={this.props.imgUrl} />
                <div className="arrow-right">
                    <i className="fa fa-chevron-right" style={iConStyle} 
                        onClick={() => this.props.handleClickArrowRight()}></i>
                </div>
            </div>
        );
    }
}

export default Slides;