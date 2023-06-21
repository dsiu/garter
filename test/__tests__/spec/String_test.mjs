// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "zora";

function testEqual(t, name, lhs, rhs) {
  t.test(name, (async function (t) {
          t.equal(lhs, rhs, name);
        }));
}

Zora.test("pad", (function (t) {
        testEqual(t, "padEnd", "foo  ", "foo".padEnd(5));
        testEqual(t, "padEndWith", "foo..", "foo".padEnd(5, "."));
        testEqual(t, "padStart", "  foo", "foo".padStart(5));
        testEqual(t, "padStartWith", "..foo", "foo".padStart(5, "."));
      }));

Zora.test("trim", (function (t) {
        testEqual(t, "trimEnd", "  foo", "  foo  ".trimEnd());
        testEqual(t, "trimStart", "foo  ", "  foo  ".trimStart());
      }));

export {
  testEqual ,
}
/*  Not a pure module */
