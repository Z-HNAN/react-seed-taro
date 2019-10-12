import { all } from 'redux-saga/effects'

import posts from '../pages/Posts/saga'
import schedule from '../pages/Schedule/saga'
import home from '../pages/Home/saga'


export default function* () {
  yield all([
    posts(),
    schedule(),
    home(),
  ])
}
