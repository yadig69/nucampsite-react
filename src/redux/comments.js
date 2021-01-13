/* eslint-disable no-unused-vars */
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
          const comment = action.payload;
          comment.id = state.length;
          comment.date = new Date().toISOString();
          return state.concat(comment);
    default:
      return state;
  }
};
