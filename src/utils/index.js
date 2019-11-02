/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */

import { DEVICES_WIDTH } from '../constants/grid';

export const debounce = (fn, time = 100) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), time);
  };
};

export const isMobile = () => window.innerWidth < DEVICES_WIDTH.LARGE;

export const addEventListener = (type, fn) => window.addEventListener(type, fn);
export const removeEventListener = (type, fn) => window.removeEventListener(type, fn);
