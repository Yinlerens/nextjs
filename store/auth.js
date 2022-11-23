import {makeAutoObservable} from 'mobx';

export default class AuthStore {
  authButtons = {};
  authRouter = []

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  setAuthButtons(value) {
    this.authButtons = value;
  }

  setAuthRouter(value) {
    this.authRouter = value
  }
}
