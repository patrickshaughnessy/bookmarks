import React from "react";
import $ from "jquery";
import List from "./List";

// Controller-View Component
class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarks: [] };
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
      </div>
    );
  }
}

export default AppController;
