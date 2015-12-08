import React from "react";
import LinkActions from '../actions/LinkActions';

class Link extends React.Component {

  deleteBookmark(bookmark, e){
    e.preventDefault();
    LinkActions.deleteBookmark(bookmark);
  }

  render() {
    let {title, url, safe, id} = this.props.link;

    return (
      <li className="link">
        <a href={url} style={ {color: (safe ? 'green' : 'black')} }>
          {title}
        </a>
        &nbsp; &nbsp; <i onClick={this.deleteBookmark.bind(this, this.props.link)} className="fa fa-trash-o"></i>
      </li>
    );
  }
}

export default Link;
