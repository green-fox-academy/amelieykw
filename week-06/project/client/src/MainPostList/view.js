import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Status from './status.js';

import {actions as mainPostListActions} from './';

let mainPostListStyle = {
    flex: 2,
    marginRight: "2%",
    height: "auto",
    border: "1px solid red"
};

class MainPostList extends React.Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.props.onShowAllPosts();
    }

    render() {
        switch (this.props.status) {
            case Status.LOADING: {
                return <div style={mainPostListStyle}>Loading...</div>;
            }
            case Status.SUCCESS: {
                return (
                    <div style={mainPostListStyle}>
                        {this.props.posts}
                        {/* {id} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp} */}
                    </div>
                )
            }
            case Status.FAILURE: {
                return <div style={mainPostListStyle}>Loading Data Error</div>
            }
            default: {
                throw new Error('unexpected status ' + this.props.status);
            }
        }
    };
}

const mapStateTopProps = (state) => {
    const postsData = state.mainPostList;
    console.log(postsData);

    return {
        status: postsData.status,
        posts: postsData.posts,
        // id: postsData.id,
        // title: postsData.title,
        // url: postsData.url,
        // timestamp: postsData.timestamp,
        // score: postsData.score,
        // owner: postsData.owner,
        // vote: postsData.vote
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowAllPosts: () => {
        dispatch(mainPostListActions.fetchAllPosts());
      }
    }
  };


export default connect(mapStateTopProps, mapDispatchToProps)(MainPostList);
