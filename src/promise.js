export default class MyPromise {
  constructor(runner){
    this.callbacks = [];
    this._resolve = this._resolve.bind(this);
    runner(this._resolve);
  }
  _resolve(value){
    if (this.callbacks.length > 0){
      const callback = this.callbacks.shift();
      callback(value);
    }
  }
  then(callback){
    this.callbacks.push(callback);
  }
}
