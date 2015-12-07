import React from "react";
import List from "./List";
import Form from "./Form";

import API from "../API";

// Controller-View Component
class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarks: [] };
  }
  insertBookmark(newBookmark) {
    // API.saveBookmark(newBookmark)
    //    .done(data => {
    //          this.setState({
    //            bookmarks: this.state.bookmarks.concat(data)
    //     });
    // });

    // Save this new bookmark
  }
  componentDidMount() {
    // API.getAllBookmarks()
    //    .done(data => {
    //     this.setState({ bookmarks: data.links });
    //   });

    // Bring me all the links data
  }
  render() {
    return (
      <div className="app">
        <h2>Bookmarks!</h2>
        <List bookmarks={this.state.bookmarks} />
        <Form addBookmark={this.insertBookmark.bind(this)} />
      </div>
    );
  }
}

export default AppController;
