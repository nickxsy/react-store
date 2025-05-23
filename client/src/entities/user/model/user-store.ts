import { makeAutoObservable } from 'mobx';

import { User } from './types';

export interface IUserStore {
  isAuth: boolean;
  user: User;
  setIsAuth: (bool: boolean) => void;
  setUser: (user: any) => void;
}

class UserStore implements IUserStore {
  private _isAuth: boolean;
  private _user: User;

  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  setIsAuth = (bool: boolean): void => {
    this._isAuth = bool;
  };

  setUser(user: any) {
    this._user = user;
  }
}

export const userStore = new UserStore();
