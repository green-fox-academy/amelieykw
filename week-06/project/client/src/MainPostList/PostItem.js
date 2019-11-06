import React from 'react';
import { connect } from 'react-redux';
// import * as Status from './status.js';

import { actions as mainPostListActions } from './';

import "./css/PostItem.css";

class PostItem extends React.Component {
    render() {
        const { id, title, url, owner, score, timestamp } = this.props.postData;

        return (
            <li key={id}>
                <div className="score">
                    <button className="upVote" onClick={() => this.props.onUpVote(id, "UP")} />
                    <span className="scoreData">{score}</span>
                    <button className="downVote" onClick={() => this.props.onDownVote(id, "DOWN")} />
                </div>
                <div className="content">
                    <div className="owner">submitted {timestamp} ago by <span className="ownerName">{(owner === null) ? "anonymous" : owner}</span> </div>
                    <div className="title">
                        <h2>
                            <a href={url}>
                                {title}
                            </a>
                        </h2>
                    </div>
                </div>
                {/* <p>{score}</p> */}
            </li>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpVote: (id, type) => {
            dispatch(mainPostListActions.fetchVote(id, type));
        },
        onDownVote: (id, type) => {
            dispatch(mainPostListActions.fetchVote(id, type));
        }
    }
};

export default connect(null, mapDispatchToProps)(PostItem);