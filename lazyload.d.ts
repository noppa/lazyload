
interface __LoadFunction {
  (path: string, cb: () => void): void;
  <T>(path: string, cb: (arg: T) => void, arg: T): void;
  <T, C>(path: string, cb: (this: C, arg: T) => void, arg: T, context: C): void;
}

declare var LazyLoad: {
  js: __LoadFunction,
  css: __LoadFunction
};
