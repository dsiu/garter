// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$BigInt from "rescript/lib/es6/BigInt.js";
import * as Belt_Id from "rescript/lib/es6/Belt_Id.js";
import * as Primitive_object from "rescript/lib/es6/Primitive_object.js";

function cmp(a, b) {
  return a.localeCompare(b) | 0;
}

let StringComparable = Belt_Id.MakeComparable({
  cmp: cmp
});

function cmp$1(a, b) {
  return a - b | 0;
}

let IntComparable = Belt_Id.MakeComparable({
  cmp: cmp$1
});

function cmp$2(a, b) {
  return $$BigInt.toInt(a - b);
}

let BigIntComparable = Belt_Id.MakeComparable({
  cmp: cmp$2
});

let cmp$3 = Primitive_object.compare;

let FloatComparable = Belt_Id.MakeComparable({
  cmp: cmp$3
});

export {
  StringComparable,
  IntComparable,
  BigIntComparable,
  FloatComparable,
}
/* StringComparable Not a pure module */
