// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Int from "rescript/lib/es6/Belt_Int.js";

function fromStringExn(s) {
  let n = Belt_Int.fromString(s);
  if (n !== undefined) {
    return n;
  }
  throw {
    RE_EXN_ID: "Failure",
    _1: "fromStringExn",
    Error: new Error()
  };
}

export {
  fromStringExn,
}
/* No side effect */
