import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  getAllBookmarks() {
    API.fetchAllBookmarks();
  },
  deleteBookmark(bookmark){
    API.deleteBookmark(bookmark);
  },
  toggleLike(bookmark){
    API.toggleLike(bookmark);
  }
};

export default LinkActions;
