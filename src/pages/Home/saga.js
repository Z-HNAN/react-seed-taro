import { put, delay, takeEvery} from 'redux-saga/effects'
import { async, sync } from '@/src/actions'

const {
  asyncAdd
} = async

function* asyncAddRequest ({ payload }) {
  console.log(payload)
  yield delay(1000)
  yield put(asyncAdd.success())
}

export default function* () {
  yield takeEvery(asyncAdd.TYPE, asyncAddRequest)
}
