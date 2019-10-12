import { combineReducers } from 'redux'

import postsReducer from '../pages/Posts/reducer'
import scheduleReducer from '../pages/Schedule/reducer'
import homeReducer from '../pages/Home/reducer'


export default combineReducers({
  posts: postsReducer,
  schedule: scheduleReducer,
  home: homeReducer,
})
