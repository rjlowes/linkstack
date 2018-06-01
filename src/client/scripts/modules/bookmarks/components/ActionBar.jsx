import React from 'react';

const ActionList = ({ title, children }) => {
    return (
        <div className="action-bar">
            <span className="action-bar__icon">
                <img src="/svg/account-circle.svg" />
            </span>
            <span className="action-bar__title">{title}</span>
            <div className="action-bar__main">
                {children}
            </div>
        </div>
    );
};

export default ActionList;
