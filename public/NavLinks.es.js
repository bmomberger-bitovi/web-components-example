import oe, { useState as bt, useEffect as Et } from "react";
function wt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ae = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function jt() {
  if (ze)
    return I;
  ze = 1;
  var s = oe, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(f, _, b) {
    var g, j = {}, F = null, Y = null;
    b !== void 0 && (F = "" + b), _.key !== void 0 && (F = "" + _.key), _.ref !== void 0 && (Y = _.ref);
    for (g in _)
      t.call(_, g) && !l.hasOwnProperty(g) && (j[g] = _[g]);
    if (f && f.defaultProps)
      for (g in _ = f.defaultProps, _)
        j[g] === void 0 && (j[g] = _[g]);
    return { $$typeof: a, type: f, key: F, ref: Y, props: j, _owner: n.current };
  }
  return I.Fragment = u, I.jsx = o, I.jsxs = o, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Ct() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var s = oe, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), f = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), le = Symbol.iterator, Ye = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = le && e[le] || e[Ye];
      return typeof r == "function" ? r : null;
    }
    var P = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        Ve("error", e, i);
      }
    }
    function Ve(e, r, i) {
      {
        var c = P.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (r += "%s", i = i.concat([v]));
        var p = i.map(function(h) {
          return String(h);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var qe = !1, Ue = !1, Be = !1, Je = !1, Ge = !1, ce;
    ce = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === l || Ge || e === n || e === b || e === g || Je || e === Y || qe || Ue || Be || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === j || e.$$typeof === o || e.$$typeof === f || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Xe(e, r, i) {
      var c = e.displayName;
      if (c)
        return c;
      var v = r.displayName || r.name || "";
      return v !== "" ? i + "(" + v + ")" : i;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case u:
          return "Portal";
        case l:
          return "Profiler";
        case n:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return fe(r) + ".Consumer";
          case o:
            var i = e;
            return fe(i._context) + ".Provider";
          case _:
            return Xe(e, e.render, "ForwardRef");
          case j:
            var c = e.displayName || null;
            return c !== null ? c : C(e.type) || "Memo";
          case F: {
            var v = e, p = v._payload, h = v._init;
            try {
              return C(h(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, D = 0, de, he, ve, pe, _e, me, ye;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ke() {
      {
        if (D === 0) {
          de = console.log, he = console.info, ve = console.warn, pe = console.error, _e = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ze() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: de
            }),
            info: x({}, e, {
              value: he
            }),
            warn: x({}, e, {
              value: ve
            }),
            error: x({}, e, {
              value: pe
            }),
            group: x({}, e, {
              value: _e
            }),
            groupCollapsed: x({}, e, {
              value: me
            }),
            groupEnd: x({}, e, {
              value: ye
            })
          });
        }
        D < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, K;
    function M(e, r, i) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (v) {
            var c = v.stack.trim().match(/\n( *(at )?)/);
            K = c && c[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, V;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Qe();
    }
    function Se(e, r) {
      if (!e || Z)
        return "";
      {
        var i = V.get(e);
        if (i !== void 0)
          return i;
      }
      var c;
      Z = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = X.current, X.current = null, Ke();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (T) {
              c = T;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (T) {
              c = T;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            c = T;
          }
          e();
        }
      } catch (T) {
        if (T && c && typeof T.stack == "string") {
          for (var d = T.stack.split(`
`), R = c.stack.split(`
`), m = d.length - 1, y = R.length - 1; m >= 1 && y >= 0 && d[m] !== R[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (d[m] !== R[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || d[m] !== R[y]) {
                    var E = `
` + d[m].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, E), E;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = p, Ze(), Error.prepareStackTrace = v;
      }
      var A = e ? e.displayName || e.name : "", Ae = A ? M(A) : "";
      return typeof e == "function" && V.set(e, Ae), Ae;
    }
    function et(e, r, i) {
      return Se(e, !1);
    }
    function tt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, tt(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case b:
          return M("Suspense");
        case g:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return et(e.render);
          case j:
            return q(e.type, r, i);
          case F: {
            var c = e, v = c._payload, p = c._init;
            try {
              return q(p(v), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Re = {}, be = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, i = q(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(i);
      } else
        be.setExtraStackFrame(null);
    }
    function rt(e, r, i, c, v) {
      {
        var p = Function.call.bind(U);
        for (var h in e)
          if (p(e, h)) {
            var d = void 0;
            try {
              if (typeof e[h] != "function") {
                var R = Error((c || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              d = e[h](r, h, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              d = m;
            }
            d && !(d instanceof Error) && (B(v), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, h, typeof d), B(null)), d instanceof Error && !(d.message in Re) && (Re[d.message] = !0, B(v), S("Failed %s type: %s", i, d.message), B(null));
          }
      }
    }
    var nt = Array.isArray;
    function Q(e) {
      return nt(e);
    }
    function it(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function at(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function we(e) {
      if (at(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(e)), Ee(e);
    }
    var N = P.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Ce, ee;
    ee = {};
    function ot(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ut(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lt(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var i = C(N.current.type);
        ee[i] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(N.current.type), e.ref), ee[i] = !0);
      }
    }
    function ct(e, r) {
      {
        var i = function() {
          je || (je = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function ft(e, r) {
      {
        var i = function() {
          Ce || (Ce = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var dt = function(e, r, i, c, v, p, h) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function ht(e, r, i, c, v) {
      {
        var p, h = {}, d = null, R = null;
        i !== void 0 && (we(i), d = "" + i), ut(r) && (we(r.key), d = "" + r.key), ot(r) && (R = r.ref, lt(r, v));
        for (p in r)
          U.call(r, p) && !st.hasOwnProperty(p) && (h[p] = r[p]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (p in m)
            h[p] === void 0 && (h[p] = m[p]);
        }
        if (d || R) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && ct(h, y), R && ft(h, y);
        }
        return dt(e, d, R, v, c, N.current, h);
      }
    }
    var te = P.ReactCurrentOwner, Te = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, i = q(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(i);
      } else
        Te.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Oe() {
      {
        if (te.current) {
          var e = C(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function pt(e) {
      {
        var r = Oe();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = pt(r);
        if (Fe[i])
          return;
        Fe[i] = !0;
        var c = "";
        e && e._owner && e._owner !== te.current && (c = " It was passed a child from " + C(e._owner.type) + "."), k(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), k(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var i = 0; i < e.length; i++) {
            var c = e[i];
            ne(c) && xe(c, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = Me(e);
          if (typeof v == "function" && v !== e.entries)
            for (var p = v.call(e), h; !(h = p.next()).done; )
              ne(h.value) && xe(h.value, r);
        }
      }
    }
    function _t(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          i = r.propTypes;
        else
          return;
        if (i) {
          var c = C(r);
          rt(i, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var v = C(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var c = r[i];
          if (c !== "children" && c !== "key") {
            k(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ke(e, r, i, c, v, p) {
      {
        var h = He(e);
        if (!h) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = vt(v);
          R ? d += R : d += Oe();
          var m;
          e === null ? m = "null" : Q(e) ? m = "array" : e !== void 0 && e.$$typeof === a ? (m = "<" + (C(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, d);
        }
        var y = ht(e, r, i, v, p);
        if (y == null)
          return y;
        if (h) {
          var E = r.children;
          if (E !== void 0)
            if (c)
              if (Q(E)) {
                for (var A = 0; A < E.length; A++)
                  Pe(E[A], e);
                Object.freeze && Object.freeze(E);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(E, e);
        }
        return e === t ? mt(y) : _t(y), y;
      }
    }
    function yt(e, r, i) {
      return ke(e, r, i, !0);
    }
    function gt(e, r, i) {
      return ke(e, r, i, !1);
    }
    var St = gt, Rt = yt;
    $.Fragment = t, $.jsx = St, $.jsxs = Rt;
  }()), $;
}
process.env.NODE_ENV === "production" ? ae.exports = jt() : ae.exports = Ct();
var w = ae.exports, L = {}, W = oe;
function Tt(s) {
  return s && typeof s == "object" && "default" in s ? s : { default: s };
}
var G = /* @__PURE__ */ Tt(W);
function Ne(s, a) {
  for (var u = 0; u < a.length; u++) {
    var t = a[u];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(s, t.key, t);
  }
}
function Ot(s, a, u) {
  return a && Ne(s.prototype, a), u && Ne(s, u), s;
}
var J = typeof process < "u" && process.env && process.env.NODE_ENV === "production", ie = function(s) {
  return Object.prototype.toString.call(s) === "[object String]";
}, Ft = /* @__PURE__ */ function() {
  function s(u) {
    var t = u === void 0 ? {} : u, n = t.name, l = n === void 0 ? "stylesheet" : n, o = t.optimizeForSpeed, f = o === void 0 ? J : o;
    O(ie(l), "`name` must be a string"), this._name = l, this._deletedRulePlaceholder = "#" + l + "-deleted-rule____{}", O(typeof f == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = f, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
    var _ = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = _ ? _.getAttribute("content") : null;
  }
  var a = s.prototype;
  return a.setOptimizeForSpeed = function(t) {
    O(typeof t == "boolean", "`setOptimizeForSpeed` accepts a boolean"), O(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = t, this.inject();
  }, a.isOptimizeForSpeed = function() {
    return this._optimizeForSpeed;
  }, a.inject = function() {
    var t = this;
    if (O(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (J || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
      return;
    }
    this._serverSheet = {
      cssRules: [],
      insertRule: function(n, l) {
        return typeof l == "number" ? t._serverSheet.cssRules[l] = {
          cssText: n
        } : t._serverSheet.cssRules.push({
          cssText: n
        }), l;
      },
      deleteRule: function(n) {
        t._serverSheet.cssRules[n] = null;
      }
    };
  }, a.getSheetForTag = function(t) {
    if (t.sheet)
      return t.sheet;
    for (var n = 0; n < document.styleSheets.length; n++)
      if (document.styleSheets[n].ownerNode === t)
        return document.styleSheets[n];
  }, a.getSheet = function() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  }, a.insertRule = function(t, n) {
    if (O(ie(t), "`insertRule` accepts only strings"), typeof window > "u")
      return typeof n != "number" && (n = this._serverSheet.cssRules.length), this._serverSheet.insertRule(t, n), this._rulesCount++;
    if (this._optimizeForSpeed) {
      var l = this.getSheet();
      typeof n != "number" && (n = l.cssRules.length);
      try {
        l.insertRule(t, n);
      } catch {
        return J || console.warn(`StyleSheet: illegal rule: 

` + t + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
      }
    } else {
      var o = this._tags[n];
      this._tags.push(this.makeStyleTag(this._name, t, o));
    }
    return this._rulesCount++;
  }, a.replaceRule = function(t, n) {
    if (this._optimizeForSpeed || typeof window > "u") {
      var l = typeof window < "u" ? this.getSheet() : this._serverSheet;
      if (n.trim() || (n = this._deletedRulePlaceholder), !l.cssRules[t])
        return t;
      l.deleteRule(t);
      try {
        l.insertRule(n, t);
      } catch {
        J || console.warn(`StyleSheet: illegal rule: 

` + n + `

See https://stackoverflow.com/q/20007992 for more info`), l.insertRule(this._deletedRulePlaceholder, t);
      }
    } else {
      var o = this._tags[t];
      O(o, "old rule at index `" + t + "` not found"), o.textContent = n;
    }
    return t;
  }, a.deleteRule = function(t) {
    if (typeof window > "u") {
      this._serverSheet.deleteRule(t);
      return;
    }
    if (this._optimizeForSpeed)
      this.replaceRule(t, "");
    else {
      var n = this._tags[t];
      O(n, "rule at index `" + t + "` not found"), n.parentNode.removeChild(n), this._tags[t] = null;
    }
  }, a.flush = function() {
    this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(t) {
      return t && t.parentNode.removeChild(t);
    }), this._tags = []) : this._serverSheet.cssRules = [];
  }, a.cssRules = function() {
    var t = this;
    return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(n, l) {
      return l ? n = n.concat(Array.prototype.map.call(t.getSheetForTag(l).cssRules, function(o) {
        return o.cssText === t._deletedRulePlaceholder ? null : o;
      })) : n.push(null), n;
    }, []);
  }, a.makeStyleTag = function(t, n, l) {
    n && O(ie(n), "makeStyleTag accepts only strings as second parameter");
    var o = document.createElement("style");
    this._nonce && o.setAttribute("nonce", this._nonce), o.type = "text/css", o.setAttribute("data-" + t, ""), n && o.appendChild(document.createTextNode(n));
    var f = document.head || document.getElementsByTagName("head")[0];
    return l ? f.insertBefore(o, l) : f.appendChild(o), o;
  }, Ot(s, [
    {
      key: "length",
      get: function() {
        return this._rulesCount;
      }
    }
  ]), s;
}();
function O(s, a) {
  if (!s)
    throw new Error("StyleSheet: " + a + ".");
}
function xt(s) {
  for (var a = 5381, u = s.length; u; )
    a = a * 33 ^ s.charCodeAt(--u);
  return a >>> 0;
}
var Pt = xt, kt = function(s) {
  return s.replace(/\/style/gi, "\\/style");
}, z = {};
function se(s, a) {
  if (!a)
    return "jsx-" + s;
  var u = String(a), t = s + u;
  return z[t] || (z[t] = "jsx-" + Pt(s + "-" + u)), z[t];
}
function Ie(s, a) {
  var u = /__jsx-style-dynamic-selector/g;
  typeof window > "u" && (a = kt(a));
  var t = s + a;
  return z[t] || (z[t] = a.replace(u, s)), z[t];
}
function At(s, a) {
  return a === void 0 && (a = {}), s.map(function(u) {
    var t = u[0], n = u[1];
    return /* @__PURE__ */ G.default.createElement("style", {
      id: "__" + t,
      // Avoid warnings upon render with a key
      key: "__" + t,
      nonce: a.nonce ? a.nonce : void 0,
      dangerouslySetInnerHTML: {
        __html: n
      }
    });
  });
}
var zt = /* @__PURE__ */ function() {
  function s(u) {
    var t = u === void 0 ? {} : u, n = t.styleSheet, l = n === void 0 ? null : n, o = t.optimizeForSpeed, f = o === void 0 ? !1 : o;
    this._sheet = l || new Ft({
      name: "styled-jsx",
      optimizeForSpeed: f
    }), this._sheet.inject(), l && typeof f == "boolean" && (this._sheet.setOptimizeForSpeed(f), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }
  var a = s.prototype;
  return a.add = function(t) {
    var n = this;
    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(t.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(b, g) {
      return b[g] = 0, b;
    }, {}));
    var l = this.getIdAndRules(t), o = l.styleId, f = l.rules;
    if (o in this._instancesCounts) {
      this._instancesCounts[o] += 1;
      return;
    }
    var _ = f.map(function(b) {
      return n._sheet.insertRule(b);
    }).filter(function(b) {
      return b !== -1;
    });
    this._indices[o] = _, this._instancesCounts[o] = 1;
  }, a.remove = function(t) {
    var n = this, l = this.getIdAndRules(t).styleId;
    if (Dt(l in this._instancesCounts, "styleId: `" + l + "` not found"), this._instancesCounts[l] -= 1, this._instancesCounts[l] < 1) {
      var o = this._fromServer && this._fromServer[l];
      o ? (o.parentNode.removeChild(o), delete this._fromServer[l]) : (this._indices[l].forEach(function(f) {
        return n._sheet.deleteRule(f);
      }), delete this._indices[l]), delete this._instancesCounts[l];
    }
  }, a.update = function(t, n) {
    this.add(n), this.remove(t);
  }, a.flush = function() {
    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }, a.cssRules = function() {
    var t = this, n = this._fromServer ? Object.keys(this._fromServer).map(function(o) {
      return [
        o,
        t._fromServer[o]
      ];
    }) : [], l = this._sheet.cssRules();
    return n.concat(Object.keys(this._indices).map(function(o) {
      return [
        o,
        t._indices[o].map(function(f) {
          return l[f].cssText;
        }).join(t._optimizeForSpeed ? "" : `
`)
      ];
    }).filter(function(o) {
      return !!o[1];
    }));
  }, a.styles = function(t) {
    return At(this.cssRules(), t);
  }, a.getIdAndRules = function(t) {
    var n = t.children, l = t.dynamic, o = t.id;
    if (l) {
      var f = se(o, l);
      return {
        styleId: f,
        rules: Array.isArray(n) ? n.map(function(_) {
          return Ie(f, _);
        }) : [
          Ie(f, n)
        ]
      };
    }
    return {
      styleId: se(o),
      rules: Array.isArray(n) ? n : [
        n
      ]
    };
  }, a.selectFromServer = function() {
    var t = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return t.reduce(function(n, l) {
      var o = l.id.slice(2);
      return n[o] = l, n;
    }, {});
  }, s;
}();
function Dt(s, a) {
  if (!s)
    throw new Error("StyleSheetRegistry: " + a + ".");
}
var H = /* @__PURE__ */ W.createContext(null);
H.displayName = "StyleSheetContext";
function ue() {
  return new zt();
}
function Nt(s) {
  var a = s.registry, u = s.children, t = W.useContext(H), n = W.useState(function() {
    return t || a || ue();
  }), l = n[0];
  return /* @__PURE__ */ G.default.createElement(H.Provider, {
    value: l
  }, u);
}
function We() {
  return W.useContext(H);
}
var It = G.default.useInsertionEffect || G.default.useLayoutEffect, $e = typeof window < "u" ? ue() : void 0;
function Le(s) {
  var a = $e || We();
  return a ? typeof window > "u" ? (a.add(s), null) : (It(function() {
    return a.add(s), function() {
      a.remove(s);
    };
  }, [
    s.id,
    String(s.dynamic)
  ]), null) : null;
}
Le.dynamic = function(s) {
  return s.map(function(a) {
    var u = a[0], t = a[1];
    return se(u, t);
  }).join(" ");
};
L.StyleRegistry = Nt;
L.createStyleRegistry = ue;
L.style = Le;
L.useStyleRegistry = We;
var $t = L.style;
const Wt = /* @__PURE__ */ wt($t);
function Yt({
  routeRoot: s = "/",
  initialRoute: a
}) {
  const [u, t] = bt(a);
  Et(() => {
    const o = (f) => {
      f.detail.url.startsWith(s) ? t(f.detail.url.replace(s, "")) : t("");
    };
    return document.addEventListener("routechange", o), () => {
      document.removeEventListener("routechange", o);
    };
  }, []);
  const n = (o) => {
    const f = o.target.getAttribute("href");
    o.preventDefault();
    const _ = Object.assign(new CustomEvent("routerequest", {
      bubbles: !0,
      detail: {
        href: f
      }
    }), {
      originalEvent: o
    });
    o.target.dispatchEvent(_);
  }, l = (o) => {
    const f = o.target.getAttribute("href"), _ = Object.assign(new CustomEvent("prefetchrequest", {
      bubbles: !0,
      detail: {
        href: f
      }
    }), {
      originalEvent: o
    });
    o.target.dispatchEvent(_);
  };
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Wt, { id: "1370157471", children: ["li.selected.jsx-1370157471{background-color:blue;}", "li.selected.jsx-1370157471 *.jsx-1370157471{color:white;}"] }),
    /* @__PURE__ */ w.jsxs("ul", { className: "jsx-1370157471", children: [
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((u === "foo/bar" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/foo/bar", onClick: n, className: "jsx-1370157471", children: "Nav to /foo/bar" }) }),
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((u === "baz" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/baz", onClick: n, className: "jsx-1370157471", children: "Nav to /baz" }) }),
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((u === "content" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/content", onMouseOver: l, onClick: n, className: "jsx-1370157471", children: "Nav to /content with dynamic content" }) }),
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((u === "invalid-route" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/invalid-route", onClick: n, className: "jsx-1370157471", children: "This nav is invalid" }) })
    ] })
  ] });
}
export {
  Yt as default
};
