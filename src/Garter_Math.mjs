// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_math from "@rescript/std/lib/es6/js_math.js";
import * as Belt_Array from "@rescript/std/lib/es6/belt_Array.js";

function sum_int(__x) {
  return Belt_Array.reduceU(__x, 0, (function (s, x) {
                return s + x | 0;
              }));
}

function sum_float(__x) {
  return Belt_Array.reduceU(__x, 0, (function (s, x) {
                return s + x;
              }));
}

function average_int(nums) {
  return sum_int(nums) / nums.length;
}

function average_float(nums) {
  return sum_float(nums) / nums.length;
}

function clamp_int(x, lower, upper) {
  return Math.min(Math.max(x, lower), upper);
}

function clamp_float(x, lower, upper) {
  return Math.min(Math.max(x, lower), upper);
}

var unsafe_ceil = Js_math.unsafe_ceil;

var ceil_int = Js_math.ceil_int;

var ceil = Js_math.ceil;

var unsafe_floor = Js_math.unsafe_floor;

var floor_int = Js_math.floor_int;

var floor = Js_math.floor;

var random_int = Js_math.random_int;

export {
  unsafe_ceil ,
  ceil_int ,
  ceil ,
  unsafe_floor ,
  floor_int ,
  floor ,
  random_int ,
  sum_int ,
  sum_float ,
  average_int ,
  average_float ,
  clamp_int ,
  clamp_float ,
  
}
/* No side effect */
