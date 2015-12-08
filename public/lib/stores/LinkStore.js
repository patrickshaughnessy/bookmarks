import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let _links = [];

class LinkStore extends EventEmitter {
  // Register with the Dispatcher
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log("4. We received news about the new data", action);
          // account for the new data;
          _links = action.links;
          this.emit("CHANGE");
          break;
        case ActionTypes.RECEIVE_ONE_LINK:
            console.log("We received news about the new link", action);
            // account for the new data;
            _links.push(action.link);
            this.emit("CHANGE");
            break;
        case ActionTypes.DELETE_LINK:
            _links = action.links;
            console.log('inside store', _links);
            this.emit("CHANGE");
            break;
        default:
          // do nothing
      }
    })
  }
  // Expose some data
  getAll() {
    return _links.map(link => {
      link.url = link.url.startsWith("http") ? link.url :
                  `http://${link.url}`;
      link.safe = link.url.startsWith("https");
      return link;
    }); // For Now
  }

  // Listen stuff
  startListening(callback) {
    this.on("CHANGE", callback);
  }
  stopListening(callback) {
    this.removeListener("CHANGE", callback);
  }
}

export default new LinkStore();
