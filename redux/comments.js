import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.ADD_COMMENT:
      return; //Add a unique id property to the new comment, based on the length of the comments array
    // commentId = comments.length;
    //return { ...state, comments: state.comments.concat(comment) };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
