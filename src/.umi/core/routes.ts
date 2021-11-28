// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/edz/project/mine/bug-report/node_modules/.pnpm/@umijs+runtime@3.5.20_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__help' */'@/pages/help')}),
    "exact": true
  },
  {
    "path": "/help",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__help' */'@/pages/help')}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
