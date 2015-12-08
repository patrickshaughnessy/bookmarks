import React from "react";

class LikedByElem extends React.Component {
  render() {
    if (this.props.likedBy === 0){
      return (
        <p>No one likes this link</p>
      );
    } else if (this.props.likedBy === 1){
      return (
        <p>One person likes this link</p>
      );
    } else {
      return (
        <p>{this.props.likedBy} people like this link</p>
      );
    }
  }
}

export default LikedByElem;
