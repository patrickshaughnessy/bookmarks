import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveLinks(links) {
    console.log("3. In ServerActions.receiveLinks()", links);
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  },
  receiveOneLink(link) {
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ONE_LINK,
      link
    });
  }
};

export default ServerActions;
