import React from "react";
import List from "./List";
import Form from "./Form";

import LinkActions from "../actions/LinkActions";

import LinkStore from "../stores/LinkStore";

let _getAppState = () => {
  return { bookmarks: LinkStore.getAll() }
}

// Controller-View Component
class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    LinkActions.getAllBookmarks();
    LinkStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    LinkStore.stopListening(this._onChange);
  }
  _onChange() {
    console.log("5. The store has emitted a change event")
    this.setState(_getAppState());
  }
  render() {
    return (
      <div className="app">
        <h2>Bookmarks!</h2>
        <List bookmarks={this.state.bookmarks} />
        <div>
          Total: {this.state.bookmarks.length}
        </div>
        <Form />
      </div>
    );
  }
}

export default AppController;
