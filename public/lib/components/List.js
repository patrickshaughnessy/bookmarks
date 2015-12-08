import React from "react";
import Link from "./Link";

class List extends React.Component {
  render() {
    var content = this.props.bookmarks.map(bookmark => {
      return <Link key={bookmark._id} link={bookmark} />;
    });
    return (
      <div className="list">
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

export default List;
