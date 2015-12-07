import {get, post} from "jquery";

let API = {
  saveBookmark(newBookmark) {
    return post("/api/links", newBookmark);
  },
  getAllBookmarks() {
    return get("/api/links");
  }
};

export default API;
