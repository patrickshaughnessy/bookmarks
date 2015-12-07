import API from "../API";

let LinkActions = {
  getAllBookmarks() {
    console.log("1. In LinkActions.getAllBookmarks()");
    API.fetchAllBookmarks();
  }
};

export default LinkActions;
