export type SessionData = {
  UserName: string | null;
  Token: string | null;
  SignedIn: boolean;
};

export const blankSession: SessionData = {
  UserName: null,
  Token: null,
  SignedIn: false,
};

export class UserSessionStorage {
  private readonly _key: string = 'games-session';
  private _data!: SessionData;

  constructor() {}

  get data() {
    this.retrieveData();
    return this._data;
  }

  set data(newSession: SessionData) {
    this._data = newSession;
    this.storeData();
  }

  private retrieveData() {
    if (localStorage) {
      const stored = localStorage.getItem(this._key);
      this._data = stored ? JSON.parse(stored) : blankSession;
    } else this._data = blankSession;
  }

  private storeData() {
    if (localStorage) {
      localStorage.setItem(this._key, JSON.stringify(this._data));
    }
  }
}
