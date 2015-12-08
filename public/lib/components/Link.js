import React from "react";
import LinkActions from '../actions/LinkActions';

import LikedByElem from './LikedByElem';

class Link extends React.Component {

  deleteBookmark(bookmark, e){
    e.preventDefault();
    LinkActions.deleteBookmark(bookmark);
  }

  toggleLike(bookmark, e){
    e.preventDefault();
    LinkActions.toggleLike(bookmark);
  }

  render() {
    let {title, url, safe, liked, likedBy} = this.props.link;
    return (
      <li className="link">
        <a href={url} style={ {color: (safe ? 'green' : 'black')} }>
          {title}
        </a>
        &nbsp; &nbsp; <i onClick={this.deleteBookmark.bind(this, this.props.link)} className="fa fa-trash-o"></i>
        &nbsp; &nbsp; <i onClick={this.toggleLike.bind(this, this.props.link)} className={liked ? 'fa fa-heart' : 'fa fa-heart-o'} ></i>
        <LikedByElem likedBy={likedBy.length} />
      </li>
    );
  }
}

export default Link;
