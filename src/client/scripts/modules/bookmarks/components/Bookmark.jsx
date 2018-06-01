import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBookmark, refreshScreen } from 'modules/bookmarks/bookmarkActions';

class Bookmark extends Component {
    refreshImage() {
        const { bookmark } = this.props;

        this.props.refreshScreen(bookmark._id);
    }

    render() {
        const { selectBookmark, bookmark } = this.props;

        if(!bookmark.image) {
            this.refreshImage();
        }

        return (
            <div className="bookmark">
                <div className="bookmark__figure">
                    <span>May</span>
                    <span>2018</span>
                </div>
                <div className="bookmark__body">
                    <h2 className="bookmark__title">
                        <a href={bookmark.url}>
                            {bookmark.title}
                        </a>
                    </h2>
                    <p className="bookmark__desc">Lorem ipsum dolor amet skateboard bicycle rights subway tile shaman. Ethical readymade pabst, 90's sriracha everyday carry master cleanse vape authentic normcore. Williamsburg pop-up deep v la croix.</p>
                    <div className="bookmark__footer">
                        <p className="bookmark__meta">{bookmark.url}</p>
                        <button className="bookmark__settings-buttonx">
                            <img src={`/svg/settings.svg`} className="bookmark__settings-button" />
                        </button>
                        {/* <button onClick={ () => refreshImage(bookmark._id) }>refresh</button>
                        <button onClick={ () => selectBookmark(bookmark) }>edit</button>
                        <button>delete</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectBookmark, refreshScreen })(Bookmark);
