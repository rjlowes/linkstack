import React, { Component } from 'react';

// See react portals
// https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202

export default class Modal extend Component {

    render() {
        const { children } = this.props;

        return (
            <div className="modal">
                <div className="modal__content">
                    {children}
                </div>
            </div>
        );
    }
}
