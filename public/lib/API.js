import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  // saveBookmark(newBookmark) {
  //   return post("/api/links", newBookmark);
  // },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  }
};

export default API;
