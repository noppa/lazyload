
type LoadFunction = <C, T>(path: string, cb: (this: C, arg: T) => void, arg?: T, context?: C) => void;

declare var LazyLoad: {
  js: LoadFunction,
  css: LoadFunction
};
