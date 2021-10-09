function Deferred() {
  if (typeof (Promise) != 'undefined' && Promise.defer) {
    return Promise.defer();
  } else if (this && this instanceof Deferred) {
    this.resolve = null;
    this.reject = null;
    const _this = this;
    this.promise = new Promise((resolve, reject) => {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    Object.freeze(this);
  } else {
    throw new Error();
  }
}