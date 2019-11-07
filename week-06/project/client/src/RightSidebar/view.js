import React from 'react';
import { connect } from 'react-redux';
import './css/RightSidebar.css';

import { actions as rightSidebarActions } from './';

class RightSidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            requestToAddNewPost: false,
            title: "",
            url: ""
        }
    }

    componentWillMount() {
        this.setState({
            text: (!this.state.requestToAddNewPost) ? "ADD A NEW POST" : "SUBMIT"
        })
    }

    onButtonClick = () => {
        this.setState({
            requestToAddNewPost: !this.state.requestToAddNewPost,
            text: (this.state.requestToAddNewPost) ? "ADD A NEW POST" : "SUBMIT"
        })
        console.log("state = " + this.state.title);
        if (this.state.text === "SUBMIT" && this.state.title !== undefined) {
            this.props.onhandleSubmit(this.state.title, this.state.url);
        }
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onChangeUrl = (e) => {
        this.setState({
            url: e.target.value
        });
    }

    render() {
        let button = <button
            className="newPostBtn"
            type="text"
            onClick={this.onButtonClick}
        >
            {this.state.text}
        </button>;
        let form = (
            <form className="newPostForm">
                <textarea
                    type="text"
                    name="titleInput"
                    placeholder="title..."
                    onChange={e => this.onChangeTitle(e)}
                />
                <input
                    type="text"
                    name="urlInput"
                    placeholder="url (Optional) ..."
                    onChange={e => this.onChangeUrl(e)}
                />
            </form>
        );
        return (
            <div className="rightSidebar">
                {button}
                {(this.state.requestToAddNewPost) ? form : null}
                <div className="about">
                    <div className="aboutHeader">ABOUT <span style={{ color: "#2B81BE" }}>JSA Team Building Space</span></div>
                    <div style={{ textAlign: "center" }}>Share discuss information content on:</div>
                </div>
            </div>
        )
    };
}

const mapStateTopProps = (state) => {
    console.log(state);

    return {
        // status: status,
        // posts: Object.values(posts)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onhandleSubmit: (title, url) => {
            dispatch(rightSidebarActions.sendFormData(title, url));
        }
    }
};


export default connect(mapStateTopProps, mapDispatchToProps)(RightSidebar);