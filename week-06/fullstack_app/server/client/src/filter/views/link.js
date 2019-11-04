import React from 'react';
import { setFilter } from '../actions';

export const Link = ({active, children, onClick}) => {
    if (active) {

    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
})