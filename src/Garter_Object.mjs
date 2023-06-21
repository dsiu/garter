// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Garter_Json from "./Garter_Json.mjs";
import * as Garter_Array from "./Garter_Array.mjs";

var fromKV = ((k, v) => ({ [k]: v }));

function any(a) {
  return a;
}

function any2(a, b) {
  return [
          a,
          b
        ];
}

function any3(a, b, c) {
  return [
          a,
          b,
          c
        ];
}

function any4(a, b, c, d) {
  return [
          a,
          b,
          c,
          d
        ];
}

function any5(a, b, c, d, e) {
  return [
          a,
          b,
          c,
          d,
          e
        ];
}

function any6(a, b, c, d, e, f) {
  return [
          a,
          b,
          c,
          d,
          e,
          f
        ];
}

function any7(a, b, c, d, e, f, g) {
  return [
          a,
          b,
          c,
          d,
          e,
          f,
          g
        ];
}

function isEmpty(o) {
  return Garter_Array.isEmpty(Object.keys(o));
}

function toJsonExn(o) {
  return JSON.parse(Garter_Json.stringifyExn(o));
}

function toJson(o) {
  try {
    return JSON.parse(Garter_Json.stringifyExn(o));
  }
  catch (exn){
    return ;
  }
}

function toJsonUnsafe(prim) {
  return prim;
}

export {
  fromKV ,
  any ,
  any2 ,
  any3 ,
  any4 ,
  any5 ,
  any6 ,
  any7 ,
  isEmpty ,
  toJsonUnsafe ,
  toJsonExn ,
  toJson ,
}
/* No side effect */
