// @ts-nocheck
import { createBrowserHistory, History } from '/Users/edz/project/mine/bug-report/node_modules/.pnpm/@umijs+runtime@3.5.20_react@16.14.0/node_modules/@umijs/runtime';

let options = {
  "basename": "/sdk"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
