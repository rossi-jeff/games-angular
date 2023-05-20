export const zeroPad = (num: number, digits: number = 2) => {
  let str = num.toString();
  while (str.length < digits) str = '0' + str;
  return str;
};

export const formatElapsedSeconds = (elapsed: number) => {
  const seconds = elapsed % 60;
  const minutes = Math.floor(elapsed / 60);
  return `${minutes}:${zeroPad(seconds)}`;
};

export class Clock {
  private _interval: ReturnType<typeof setInterval> | undefined;
  private _elapsed: number;
  private _initial: number;
  private _paused: number;

  constructor() {
    this._elapsed = 0;
    this._initial = 0;
    this._paused = 0;
  }

  public run = () => {
    this._initial = Date.now();
    if (this._interval) clearInterval(this._interval);
    this._interval = setInterval(() => this.tick(), 1000);
  };

  public pause = () => {
    if (this._interval) clearInterval(this._interval);
    this._paused = Date.now();
  };

  public resume = () => {
    const offset = Date.now() - this._paused;
    this._initial += offset;
    this._interval = setInterval(() => this.tick(), 1000);
  };

  private tick = () => {
    this._elapsed = Date.now() - this._initial;
  };

  public formatted = () => {
    return formatElapsedSeconds(this.elapsed());
  };

  public elapsed = () => {
    return Math.round(this._elapsed / 1000);
  };
}
