import React from "react";
import $ from "jquery";
import List from "./List";
import Form from "./Form";

// Controller-View Component
class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarks: [] };
  }
  insertBookmark(newBookmark) {
    $.post("/api/links", newBookmark)
      .success(data => {
        this.setState({
          bookmarks: this.state.bookmarks.concat(data)
        });
      });
  }
  componentDidMount() {
    console.log("did mount");
    $.get("/api/links")
      .success(data => {
        this.setState({ bookmarks: data.links });
      });
  }
  componentWillMount() {
    console.log("will mount");
  }
  componentWillUpdate() {
    console.log("will update");
  }
  render() {
    console.log("render");
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
