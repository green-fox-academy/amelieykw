import React from 'react';
import { connect } from 'react-redux';
import * as Status from './status.js';

import { actions as mainPostListActions } from './';
import PostItem from './PostItem.js';

import "./css/MainPostList.css";

let mainPostListStyle = {
    flex: 2,
    margin: 0,
    marginRight: "2%",
    height: "auto",
    border: "1px solid red"
};

class MainPostList extends React.Component {

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
                    <ul>
                        {this.props.posts.map((post) => {
                            return <PostItem key={post.id} postData={post} />
                        })}
                    </ul>
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
    const { status, ...posts } = state.mainPostList;

    return {
        status: status,
        posts: Object.values(posts)
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
