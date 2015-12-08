import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    post("/api/links", newBookmark)
      .done(data => ServerActions.receiveOneLink(data));
  },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  },
  deleteBookmark(bookmark){
    post('/api/links/delete', bookmark).done(links => ServerActions.receiveLinks(links));
  },
  toggleLike(bookmark){
    post('/api/links/like', bookmark).done(links => ServerActions.receiveLinks(links));
  }
};

export default API;
