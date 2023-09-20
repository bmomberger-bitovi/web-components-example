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
  var s = oe, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(v, d, m) {
    var S, j = {}, F = null, Y = null;
    m !== void 0 && (F = "" + m), d.key !== void 0 && (F = "" + d.key), d.ref !== void 0 && (Y = d.ref);
    for (S in d)
      t.call(d, S) && !o.hasOwnProperty(S) && (j[S] = d[S]);
    if (v && v.defaultProps)
      for (S in d = v.defaultProps, d)
        j[S] === void 0 && (j[S] = d[S]);
    return { $$typeof: a, type: v, key: F, ref: Y, props: j, _owner: n.current };
  }
  return I.Fragment = u, I.jsx = l, I.jsxs = l, I;
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
    var s = oe, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), le = Symbol.iterator, Ye = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = le && e[le] || e[Ye];
      return typeof r == "function" ? r : null;
    }
    var P = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        Ve("error", e, i);
      }
    }
    function Ve(e, r, i) {
      {
        var c = P.ReactDebugCurrentFrame, p = c.getStackAddendum();
        p !== "" && (r += "%s", i = i.concat([p]));
        var _ = i.map(function(h) {
          return String(h);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var Ue = !1, qe = !1, Be = !1, Je = !1, Ge = !1, ce;
    ce = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === o || Ge || e === n || e === m || e === S || Je || e === Y || Ue || qe || Be || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === j || e.$$typeof === l || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Xe(e, r, i) {
      var c = e.displayName;
      if (c)
        return c;
      var p = r.displayName || r.name || "";
      return p !== "" ? i + "(" + p + ")" : i;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case u:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case m:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return fe(r) + ".Consumer";
          case l:
            var i = e;
            return fe(i._context) + ".Provider";
          case d:
            return Xe(e, e.render, "ForwardRef");
          case j:
            var c = e.displayName || null;
            return c !== null ? c : C(e.type) || "Memo";
          case F: {
            var p = e, _ = p._payload, h = p._init;
            try {
              return C(h(_));
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
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, K;
    function M(e, r, i) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (p) {
            var c = p.stack.trim().match(/\n( *(at )?)/);
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
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = X.current, X.current = null, Ke();
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
          for (var f = T.stack.split(`
`), b = c.stack.split(`
`), y = f.length - 1, g = b.length - 1; y >= 1 && g >= 0 && f[y] !== b[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (f[y] !== b[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || f[y] !== b[g]) {
                    var E = `
` + f[y].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, E), E;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = _, Ze(), Error.prepareStackTrace = p;
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
    function U(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, tt(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case m:
          return M("Suspense");
        case S:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return et(e.render);
          case j:
            return U(e.type, r, i);
          case F: {
            var c = e, p = c._payload, _ = c._init;
            try {
              return U(_(p), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Re = {}, be = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, i = U(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(i);
      } else
        be.setExtraStackFrame(null);
    }
    function rt(e, r, i, c, p) {
      {
        var _ = Function.call.bind(q);
        for (var h in e)
          if (_(e, h)) {
            var f = void 0;
            try {
              if (typeof e[h] != "function") {
                var b = Error((c || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              f = e[h](r, h, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              f = y;
            }
            f && !(f instanceof Error) && (B(p), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, h, typeof f), B(null)), f instanceof Error && !(f.message in Re) && (Re[f.message] = !0, B(p), R("Failed %s type: %s", i, f.message), B(null));
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
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(e)), Ee(e);
    }
    var N = P.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Ce, ee;
    ee = {};
    function ot(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ut(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lt(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var i = C(N.current.type);
        ee[i] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(N.current.type), e.ref), ee[i] = !0);
      }
    }
    function ct(e, r) {
      {
        var i = function() {
          je || (je = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ce || (Ce = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var dt = function(e, r, i, c, p, _, h) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function ht(e, r, i, c, p) {
      {
        var _, h = {}, f = null, b = null;
        i !== void 0 && (we(i), f = "" + i), ut(r) && (we(r.key), f = "" + r.key), ot(r) && (b = r.ref, lt(r, p));
        for (_ in r)
          q.call(r, _) && !st.hasOwnProperty(_) && (h[_] = r[_]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (_ in y)
            h[_] === void 0 && (h[_] = y[_]);
        }
        if (f || b) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && ct(h, g), b && ft(h, g);
        }
        return dt(e, f, b, p, c, N.current, h);
      }
    }
    var te = P.ReactCurrentOwner, Te = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, i = U(e.type, e._source, r ? r.type : null);
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
        e && e._owner && e._owner !== te.current && (c = " It was passed a child from " + C(e._owner.type) + "."), k(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), k(null);
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
          var p = Me(e);
          if (typeof p == "function" && p !== e.entries)
            for (var _ = p.call(e), h; !(h = _.next()).done; )
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
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
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
          var p = C(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var c = r[i];
          if (c !== "children" && c !== "key") {
            k(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ke(e, r, i, c, p, _) {
      {
        var h = He(e);
        if (!h) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = vt(p);
          b ? f += b : f += Oe();
          var y;
          e === null ? y = "null" : Q(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (C(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, f);
        }
        var g = ht(e, r, i, p, _);
        if (g == null)
          return g;
        if (h) {
          var E = r.children;
          if (E !== void 0)
            if (c)
              if (Q(E)) {
                for (var A = 0; A < E.length; A++)
                  Pe(E[A], e);
                Object.freeze && Object.freeze(E);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(E, e);
        }
        return e === t ? mt(g) : _t(g), g;
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
    var t = u === void 0 ? {} : u, n = t.name, o = n === void 0 ? "stylesheet" : n, l = t.optimizeForSpeed, v = l === void 0 ? J : l;
    O(ie(o), "`name` must be a string"), this._name = o, this._deletedRulePlaceholder = "#" + o + "-deleted-rule____{}", O(typeof v == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = v, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
    var d = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = d ? d.getAttribute("content") : null;
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
      insertRule: function(n, o) {
        return typeof o == "number" ? t._serverSheet.cssRules[o] = {
          cssText: n
        } : t._serverSheet.cssRules.push({
          cssText: n
        }), o;
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
      var o = this.getSheet();
      typeof n != "number" && (n = o.cssRules.length);
      try {
        o.insertRule(t, n);
      } catch {
        return J || console.warn(`StyleSheet: illegal rule: 

` + t + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
      }
    } else {
      var l = this._tags[n];
      this._tags.push(this.makeStyleTag(this._name, t, l));
    }
    return this._rulesCount++;
  }, a.replaceRule = function(t, n) {
    if (this._optimizeForSpeed || typeof window > "u") {
      var o = typeof window < "u" ? this.getSheet() : this._serverSheet;
      if (n.trim() || (n = this._deletedRulePlaceholder), !o.cssRules[t])
        return t;
      o.deleteRule(t);
      try {
        o.insertRule(n, t);
      } catch {
        J || console.warn(`StyleSheet: illegal rule: 

` + n + `

See https://stackoverflow.com/q/20007992 for more info`), o.insertRule(this._deletedRulePlaceholder, t);
      }
    } else {
      var l = this._tags[t];
      O(l, "old rule at index `" + t + "` not found"), l.textContent = n;
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
    return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(n, o) {
      return o ? n = n.concat(Array.prototype.map.call(t.getSheetForTag(o).cssRules, function(l) {
        return l.cssText === t._deletedRulePlaceholder ? null : l;
      })) : n.push(null), n;
    }, []);
  }, a.makeStyleTag = function(t, n, o) {
    n && O(ie(n), "makeStyleTag accepts only strings as second parameter");
    var l = document.createElement("style");
    this._nonce && l.setAttribute("nonce", this._nonce), l.type = "text/css", l.setAttribute("data-" + t, ""), n && l.appendChild(document.createTextNode(n));
    var v = document.head || document.getElementsByTagName("head")[0];
    return o ? v.insertBefore(l, o) : v.appendChild(l), l;
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
    var t = u === void 0 ? {} : u, n = t.styleSheet, o = n === void 0 ? null : n, l = t.optimizeForSpeed, v = l === void 0 ? !1 : l;
    this._sheet = o || new Ft({
      name: "styled-jsx",
      optimizeForSpeed: v
    }), this._sheet.inject(), o && typeof v == "boolean" && (this._sheet.setOptimizeForSpeed(v), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }
  var a = s.prototype;
  return a.add = function(t) {
    var n = this;
    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(t.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(m, S) {
      return m[S] = 0, m;
    }, {}));
    var o = this.getIdAndRules(t), l = o.styleId, v = o.rules;
    if (l in this._instancesCounts) {
      this._instancesCounts[l] += 1;
      return;
    }
    var d = v.map(function(m) {
      return n._sheet.insertRule(m);
    }).filter(function(m) {
      return m !== -1;
    });
    this._indices[l] = d, this._instancesCounts[l] = 1;
  }, a.remove = function(t) {
    var n = this, o = this.getIdAndRules(t).styleId;
    if (Dt(o in this._instancesCounts, "styleId: `" + o + "` not found"), this._instancesCounts[o] -= 1, this._instancesCounts[o] < 1) {
      var l = this._fromServer && this._fromServer[o];
      l ? (l.parentNode.removeChild(l), delete this._fromServer[o]) : (this._indices[o].forEach(function(v) {
        return n._sheet.deleteRule(v);
      }), delete this._indices[o]), delete this._instancesCounts[o];
    }
  }, a.update = function(t, n) {
    this.add(n), this.remove(t);
  }, a.flush = function() {
    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }, a.cssRules = function() {
    var t = this, n = this._fromServer ? Object.keys(this._fromServer).map(function(l) {
      return [
        l,
        t._fromServer[l]
      ];
    }) : [], o = this._sheet.cssRules();
    return n.concat(Object.keys(this._indices).map(function(l) {
      return [
        l,
        t._indices[l].map(function(v) {
          return o[v].cssText;
        }).join(t._optimizeForSpeed ? "" : `
`)
      ];
    }).filter(function(l) {
      return !!l[1];
    }));
  }, a.styles = function(t) {
    return At(this.cssRules(), t);
  }, a.getIdAndRules = function(t) {
    var n = t.children, o = t.dynamic, l = t.id;
    if (o) {
      var v = se(l, o);
      return {
        styleId: v,
        rules: Array.isArray(n) ? n.map(function(d) {
          return Ie(v, d);
        }) : [
          Ie(v, n)
        ]
      };
    }
    return {
      styleId: se(l),
      rules: Array.isArray(n) ? n : [
        n
      ]
    };
  }, a.selectFromServer = function() {
    var t = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return t.reduce(function(n, o) {
      var l = o.id.slice(2);
      return n[l] = o, n;
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
  }), o = n[0];
  return /* @__PURE__ */ G.default.createElement(H.Provider, {
    value: o
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
  initialRoute: a,
  onRouteRequest: u,
  onPrefetchRequest: t
}) {
  const [n, o] = bt(a.startsWith(s) ? a.replace(s, "") : "");
  Et(() => {
    const d = (m) => {
      m.detail.url.startsWith(s) ? o(m.detail.url.replace(s, "")) : o("");
    };
    return document.addEventListener("routechange", d), () => {
      document.removeEventListener("routechange", d);
    };
  }, []);
  const l = (d) => {
    const m = d.target.getAttribute("href");
    d.preventDefault();
    const S = Object.assign(new CustomEvent("routerequest", {
      bubbles: !0,
      detail: {
        href: m
      }
    }), {
      originalEvent: d
    });
    d.target.dispatchEvent(S), typeof u == "function" && u(m);
  }, v = (d) => {
    const m = d.target.getAttribute("href"), S = Object.assign(new CustomEvent("prefetchrequest", {
      bubbles: !0,
      detail: {
        href: m
      }
    }), {
      originalEvent: d
    });
    d.target.dispatchEvent(S), typeof t == "function" && t(m);
  };
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Wt, { id: "1370157471", children: ["li.selected.jsx-1370157471{background-color:blue;}", "li.selected.jsx-1370157471 *.jsx-1370157471{color:white;}"] }),
    /* @__PURE__ */ w.jsxs("ul", { className: "jsx-1370157471", children: [
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((n === "foo/bar" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/foo/bar", onClick: l, className: "jsx-1370157471", children: "Nav to /foo/bar" }) }),
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((n === "baz" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/baz", onClick: l, className: "jsx-1370157471", children: "Nav to /baz" }) }),
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((s === "/content" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/content", onMouseOver: v, onClick: l, className: "jsx-1370157471", children: "Nav to /content with dynamic content" }) }),
      /* @__PURE__ */ w.jsx("li", { className: "jsx-1370157471 " + ((n === "invalid-route" ? "selected" : "") || ""), children: /* @__PURE__ */ w.jsx("a", { href: "/invalid-route", onClick: l, className: "jsx-1370157471", children: "This nav is invalid" }) })
    ] })
  ] });
}
export {
  Yt as default
};
