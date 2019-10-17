import React from 'react';

class Previews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const previews = this.props.imgs.map(img => 
            <img className="imgPreview"
                key={img.id} 
                src={img.url} 
                onClick={() => this.props.handleClickPreview(img.id)}
            />
        );

        return (
            <div className="preview-container">
                {previews}
            </div>
        )
    }
}

export default Previews;