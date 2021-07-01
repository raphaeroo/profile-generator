import {call, put, takeLatest} from 'redux-saga/effects';

import {loadUserFailed, loadUserSuccess, Types} from '../ducks/user';
import type {User} from '../ducks/user';
import {getUser} from '../../service';
import type {Response} from '~/types/response';

function* _tryLoadUser() {
  try {
    const {name, location, dob, email, phone, picture}: Response = yield call(
      getUser,
    );

    const user: User = {
      userName: `${name.first} ${name.last}`,
      location: `${location.state} - ${location.country}`,
      email: String(email),
      phone: String(phone),
      userAge: `${dob.age} Anos`,
      avatar: String(picture.large),
    };

    yield put(loadUserSuccess(user));
  } catch (e) {
    yield put(loadUserFailed());
  }
}

export default function* userSaga() {
  yield takeLatest(Types.TRY_LOAD_USER, _tryLoadUser);
}
