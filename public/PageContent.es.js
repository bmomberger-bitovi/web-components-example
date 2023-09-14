import se from "react";
function bt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
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
function Et() {
  if (ze)
    return I;
  ze = 1;
  var o = se, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(v, _, b) {
    var S, w = {}, O = null, Y = null;
    b !== void 0 && (O = "" + b), _.key !== void 0 && (O = "" + _.key), _.ref !== void 0 && (Y = _.ref);
    for (S in _)
      r.call(_, S) && !s.hasOwnProperty(S) && (w[S] = _[S]);
    if (v && v.defaultProps)
      for (S in _ = v.defaultProps, _)
        w[S] === void 0 && (w[S] = _[S]);
    return { $$typeof: a, type: v, key: O, ref: Y, props: w, _owner: i.current };
  }
  return I.Fragment = u, I.jsx = l, I.jsxs = l, I;
}
var N = {};
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
function wt() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var o = se, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), v = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), le = Symbol.iterator, Le = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = le && e[le] || e[Le];
      return typeof t == "function" ? t : null;
    }
    var P = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++)
          n[f - 1] = arguments[f];
        Ve("error", e, n);
      }
    }
    function Ve(e, t, n) {
      {
        var f = P.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (t += "%s", n = n.concat([h]));
        var p = n.map(function(d) {
          return String(d);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ue = !1, qe = !1, Be = !1, Je = !1, Ge = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === s || Ge || e === i || e === b || e === S || Je || e === Y || Ue || qe || Be || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === l || e.$$typeof === v || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Xe(e, t, n) {
      var f = e.displayName;
      if (f)
        return f;
      var h = t.displayName || t.name || "";
      return h !== "" ? n + "(" + h + ")" : n;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case u:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case b:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var t = e;
            return ce(t) + ".Consumer";
          case l:
            var n = e;
            return ce(n._context) + ".Provider";
          case _:
            return Xe(e, e.render, "ForwardRef");
          case w:
            var f = e.displayName || null;
            return f !== null ? f : C(e.type) || "Memo";
          case O: {
            var h = e, p = h._payload, d = h._init;
            try {
              return C(d(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, z = 0, de, he, ve, pe, _e, ye, me;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ke() {
      {
        if (z === 0) {
          de = console.log, he = console.info, ve = console.warn, pe = console.error, _e = console.group, ye = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
        z++;
      }
    }
    function Ze() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: de
            }),
            info: F({}, e, {
              value: he
            }),
            warn: F({}, e, {
              value: ve
            }),
            error: F({}, e, {
              value: pe
            }),
            group: F({}, e, {
              value: _e
            }),
            groupCollapsed: F({}, e, {
              value: ye
            }),
            groupEnd: F({}, e, {
              value: me
            })
          });
        }
        z < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, K;
    function L(e, t, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (h) {
            var f = h.stack.trim().match(/\n( *(at )?)/);
            K = f && f[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, M;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Qe();
    }
    function ge(e, t) {
      if (!e || Z)
        return "";
      {
        var n = M.get(e);
        if (n !== void 0)
          return n;
      }
      var f;
      Z = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = X.current, X.current = null, Ke();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (T) {
              f = T;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (T) {
              f = T;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            f = T;
          }
          e();
        }
      } catch (T) {
        if (T && f && typeof T.stack == "string") {
          for (var c = T.stack.split(`
`), R = f.stack.split(`
`), y = c.length - 1, m = R.length - 1; y >= 1 && m >= 0 && c[y] !== R[m]; )
            m--;
          for (; y >= 1 && m >= 0; y--, m--)
            if (c[y] !== R[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, m < 0 || c[y] !== R[m]) {
                    var E = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, E), E;
                  }
                while (y >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = p, Ze(), Error.prepareStackTrace = h;
      }
      var x = e ? e.displayName || e.name : "", Ae = x ? L(x) : "";
      return typeof e == "function" && M.set(e, Ae), Ae;
    }
    function et(e, t, n) {
      return ge(e, !1);
    }
    function tt(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function V(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, tt(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case b:
          return L("Suspense");
        case S:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return et(e.render);
          case w:
            return V(e.type, t, n);
          case O: {
            var f = e, h = f._payload, p = f._init;
            try {
              return V(p(h), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Re = {}, be = P.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, n = V(e.type, e._source, t ? t.type : null);
        be.setExtraStackFrame(n);
      } else
        be.setExtraStackFrame(null);
    }
    function rt(e, t, n, f, h) {
      {
        var p = Function.call.bind(U);
        for (var d in e)
          if (p(e, d)) {
            var c = void 0;
            try {
              if (typeof e[d] != "function") {
                var R = Error((f || "React class") + ": " + n + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              c = e[d](t, d, f, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (q(h), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", n, d, typeof c), q(null)), c instanceof Error && !(c.message in Re) && (Re[c.message] = !0, q(h), g("Failed %s type: %s", n, c.message), q(null));
          }
      }
    }
    var nt = Array.isArray;
    function Q(e) {
      return nt(e);
    }
    function it(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
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
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(e)), Ee(e);
    }
    var D = P.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Te, ee;
    ee = {};
    function st(e) {
      if (U.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ut(e) {
      if (U.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lt(e, t) {
      if (typeof e.ref == "string" && D.current && t && D.current.stateNode !== t) {
        var n = C(D.current.type);
        ee[n] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(D.current.type), e.ref), ee[n] = !0);
      }
    }
    function ft(e, t) {
      {
        var n = function() {
          Ce || (Ce = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ct(e, t) {
      {
        var n = function() {
          Te || (Te = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var dt = function(e, t, n, f, h, p, d) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: d,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ht(e, t, n, f, h) {
      {
        var p, d = {}, c = null, R = null;
        n !== void 0 && (we(n), c = "" + n), ut(t) && (we(t.key), c = "" + t.key), st(t) && (R = t.ref, lt(t, h));
        for (p in t)
          U.call(t, p) && !ot.hasOwnProperty(p) && (d[p] = t[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            d[p] === void 0 && (d[p] = y[p]);
        }
        if (c || R) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ft(d, m), R && ct(d, m);
        }
        return dt(e, c, R, h, f, D.current, d);
      }
    }
    var te = P.ReactCurrentOwner, je = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var t = e._owner, n = V(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
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
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function pt(e) {
      {
        var t = Oe();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Pe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = pt(t);
        if (Fe[n])
          return;
        Fe[n] = !0;
        var f = "";
        e && e._owner && e._owner !== te.current && (f = " It was passed a child from " + C(e._owner.type) + "."), k(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, f), k(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var n = 0; n < e.length; n++) {
            var f = e[n];
            ne(f) && Pe(f, t);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = Me(e);
          if (typeof h == "function" && h !== e.entries)
            for (var p = h.call(e), d; !(d = p.next()).done; )
              ne(d.value) && Pe(d.value, t);
        }
      }
    }
    function _t(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          n = t.propTypes;
        else
          return;
        if (n) {
          var f = C(t);
          rt(n, e.props, "prop", f, e);
        } else if (t.PropTypes !== void 0 && !re) {
          re = !0;
          var h = C(t);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var f = t[n];
          if (f !== "children" && f !== "key") {
            k(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function xe(e, t, n, f, h, p) {
      {
        var d = He(e);
        if (!d) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = vt(h);
          R ? c += R : c += Oe();
          var y;
          e === null ? y = "null" : Q(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (C(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var m = ht(e, t, n, h, p);
        if (m == null)
          return m;
        if (d) {
          var E = t.children;
          if (E !== void 0)
            if (f)
              if (Q(E)) {
                for (var x = 0; x < E.length; x++)
                  ke(E[x], e);
                Object.freeze && Object.freeze(E);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(E, e);
        }
        return e === r ? yt(m) : _t(m), m;
      }
    }
    function mt(e, t, n) {
      return xe(e, t, n, !0);
    }
    function St(e, t, n) {
      return xe(e, t, n, !1);
    }
    var gt = St, Rt = mt;
    N.Fragment = r, N.jsx = gt, N.jsxs = Rt;
  }()), N;
}
process.env.NODE_ENV === "production" ? ae.exports = Et() : ae.exports = wt();
var B = ae.exports, W = {}, $ = se;
function Ct(o) {
  return o && typeof o == "object" && "default" in o ? o : { default: o };
}
var G = /* @__PURE__ */ Ct($);
function Ie(o, a) {
  for (var u = 0; u < a.length; u++) {
    var r = a[u];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, r.key, r);
  }
}
function Tt(o, a, u) {
  return a && Ie(o.prototype, a), u && Ie(o, u), o;
}
var J = typeof process < "u" && process.env && process.env.NODE_ENV === "production", ie = function(o) {
  return Object.prototype.toString.call(o) === "[object String]";
}, jt = /* @__PURE__ */ function() {
  function o(u) {
    var r = u === void 0 ? {} : u, i = r.name, s = i === void 0 ? "stylesheet" : i, l = r.optimizeForSpeed, v = l === void 0 ? J : l;
    j(ie(s), "`name` must be a string"), this._name = s, this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}", j(typeof v == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = v, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
    var _ = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = _ ? _.getAttribute("content") : null;
  }
  var a = o.prototype;
  return a.setOptimizeForSpeed = function(r) {
    j(typeof r == "boolean", "`setOptimizeForSpeed` accepts a boolean"), j(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = r, this.inject();
  }, a.isOptimizeForSpeed = function() {
    return this._optimizeForSpeed;
  }, a.inject = function() {
    var r = this;
    if (j(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (J || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
      return;
    }
    this._serverSheet = {
      cssRules: [],
      insertRule: function(i, s) {
        return typeof s == "number" ? r._serverSheet.cssRules[s] = {
          cssText: i
        } : r._serverSheet.cssRules.push({
          cssText: i
        }), s;
      },
      deleteRule: function(i) {
        r._serverSheet.cssRules[i] = null;
      }
    };
  }, a.getSheetForTag = function(r) {
    if (r.sheet)
      return r.sheet;
    for (var i = 0; i < document.styleSheets.length; i++)
      if (document.styleSheets[i].ownerNode === r)
        return document.styleSheets[i];
  }, a.getSheet = function() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  }, a.insertRule = function(r, i) {
    if (j(ie(r), "`insertRule` accepts only strings"), typeof window > "u")
      return typeof i != "number" && (i = this._serverSheet.cssRules.length), this._serverSheet.insertRule(r, i), this._rulesCount++;
    if (this._optimizeForSpeed) {
      var s = this.getSheet();
      typeof i != "number" && (i = s.cssRules.length);
      try {
        s.insertRule(r, i);
      } catch {
        return J || console.warn(`StyleSheet: illegal rule: 

` + r + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
      }
    } else {
      var l = this._tags[i];
      this._tags.push(this.makeStyleTag(this._name, r, l));
    }
    return this._rulesCount++;
  }, a.replaceRule = function(r, i) {
    if (this._optimizeForSpeed || typeof window > "u") {
      var s = typeof window < "u" ? this.getSheet() : this._serverSheet;
      if (i.trim() || (i = this._deletedRulePlaceholder), !s.cssRules[r])
        return r;
      s.deleteRule(r);
      try {
        s.insertRule(i, r);
      } catch {
        J || console.warn(`StyleSheet: illegal rule: 

` + i + `

See https://stackoverflow.com/q/20007992 for more info`), s.insertRule(this._deletedRulePlaceholder, r);
      }
    } else {
      var l = this._tags[r];
      j(l, "old rule at index `" + r + "` not found"), l.textContent = i;
    }
    return r;
  }, a.deleteRule = function(r) {
    if (typeof window > "u") {
      this._serverSheet.deleteRule(r);
      return;
    }
    if (this._optimizeForSpeed)
      this.replaceRule(r, "");
    else {
      var i = this._tags[r];
      j(i, "rule at index `" + r + "` not found"), i.parentNode.removeChild(i), this._tags[r] = null;
    }
  }, a.flush = function() {
    this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(r) {
      return r && r.parentNode.removeChild(r);
    }), this._tags = []) : this._serverSheet.cssRules = [];
  }, a.cssRules = function() {
    var r = this;
    return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(i, s) {
      return s ? i = i.concat(Array.prototype.map.call(r.getSheetForTag(s).cssRules, function(l) {
        return l.cssText === r._deletedRulePlaceholder ? null : l;
      })) : i.push(null), i;
    }, []);
  }, a.makeStyleTag = function(r, i, s) {
    i && j(ie(i), "makeStyleTag accepts only strings as second parameter");
    var l = document.createElement("style");
    this._nonce && l.setAttribute("nonce", this._nonce), l.type = "text/css", l.setAttribute("data-" + r, ""), i && l.appendChild(document.createTextNode(i));
    var v = document.head || document.getElementsByTagName("head")[0];
    return s ? v.insertBefore(l, s) : v.appendChild(l), l;
  }, Tt(o, [
    {
      key: "length",
      get: function() {
        return this._rulesCount;
      }
    }
  ]), o;
}();
function j(o, a) {
  if (!o)
    throw new Error("StyleSheet: " + a + ".");
}
function Ot(o) {
  for (var a = 5381, u = o.length; u; )
    a = a * 33 ^ o.charCodeAt(--u);
  return a >>> 0;
}
var Ft = Ot, Pt = function(o) {
  return o.replace(/\/style/gi, "\\/style");
}, A = {};
function oe(o, a) {
  if (!a)
    return "jsx-" + o;
  var u = String(a), r = o + u;
  return A[r] || (A[r] = "jsx-" + Ft(o + "-" + u)), A[r];
}
function Ne(o, a) {
  var u = /__jsx-style-dynamic-selector/g;
  typeof window > "u" && (a = Pt(a));
  var r = o + a;
  return A[r] || (A[r] = a.replace(u, o)), A[r];
}
function kt(o, a) {
  return a === void 0 && (a = {}), o.map(function(u) {
    var r = u[0], i = u[1];
    return /* @__PURE__ */ G.default.createElement("style", {
      id: "__" + r,
      // Avoid warnings upon render with a key
      key: "__" + r,
      nonce: a.nonce ? a.nonce : void 0,
      dangerouslySetInnerHTML: {
        __html: i
      }
    });
  });
}
var xt = /* @__PURE__ */ function() {
  function o(u) {
    var r = u === void 0 ? {} : u, i = r.styleSheet, s = i === void 0 ? null : i, l = r.optimizeForSpeed, v = l === void 0 ? !1 : l;
    this._sheet = s || new jt({
      name: "styled-jsx",
      optimizeForSpeed: v
    }), this._sheet.inject(), s && typeof v == "boolean" && (this._sheet.setOptimizeForSpeed(v), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }
  var a = o.prototype;
  return a.add = function(r) {
    var i = this;
    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(r.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(b, S) {
      return b[S] = 0, b;
    }, {}));
    var s = this.getIdAndRules(r), l = s.styleId, v = s.rules;
    if (l in this._instancesCounts) {
      this._instancesCounts[l] += 1;
      return;
    }
    var _ = v.map(function(b) {
      return i._sheet.insertRule(b);
    }).filter(function(b) {
      return b !== -1;
    });
    this._indices[l] = _, this._instancesCounts[l] = 1;
  }, a.remove = function(r) {
    var i = this, s = this.getIdAndRules(r).styleId;
    if (At(s in this._instancesCounts, "styleId: `" + s + "` not found"), this._instancesCounts[s] -= 1, this._instancesCounts[s] < 1) {
      var l = this._fromServer && this._fromServer[s];
      l ? (l.parentNode.removeChild(l), delete this._fromServer[s]) : (this._indices[s].forEach(function(v) {
        return i._sheet.deleteRule(v);
      }), delete this._indices[s]), delete this._instancesCounts[s];
    }
  }, a.update = function(r, i) {
    this.add(i), this.remove(r);
  }, a.flush = function() {
    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }, a.cssRules = function() {
    var r = this, i = this._fromServer ? Object.keys(this._fromServer).map(function(l) {
      return [
        l,
        r._fromServer[l]
      ];
    }) : [], s = this._sheet.cssRules();
    return i.concat(Object.keys(this._indices).map(function(l) {
      return [
        l,
        r._indices[l].map(function(v) {
          return s[v].cssText;
        }).join(r._optimizeForSpeed ? "" : `
`)
      ];
    }).filter(function(l) {
      return !!l[1];
    }));
  }, a.styles = function(r) {
    return kt(this.cssRules(), r);
  }, a.getIdAndRules = function(r) {
    var i = r.children, s = r.dynamic, l = r.id;
    if (s) {
      var v = oe(l, s);
      return {
        styleId: v,
        rules: Array.isArray(i) ? i.map(function(_) {
          return Ne(v, _);
        }) : [
          Ne(v, i)
        ]
      };
    }
    return {
      styleId: oe(l),
      rules: Array.isArray(i) ? i : [
        i
      ]
    };
  }, a.selectFromServer = function() {
    var r = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return r.reduce(function(i, s) {
      var l = s.id.slice(2);
      return i[l] = s, i;
    }, {});
  }, o;
}();
function At(o, a) {
  if (!o)
    throw new Error("StyleSheetRegistry: " + a + ".");
}
var H = /* @__PURE__ */ $.createContext(null);
H.displayName = "StyleSheetContext";
function ue() {
  return new xt();
}
function zt(o) {
  var a = o.registry, u = o.children, r = $.useContext(H), i = $.useState(function() {
    return r || a || ue();
  }), s = i[0];
  return /* @__PURE__ */ G.default.createElement(H.Provider, {
    value: s
  }, u);
}
function We() {
  return $.useContext(H);
}
var Dt = G.default.useInsertionEffect || G.default.useLayoutEffect, $e = typeof window < "u" ? ue() : void 0;
function Ye(o) {
  var a = $e || We();
  return a ? typeof window > "u" ? (a.add(o), null) : (Dt(function() {
    return a.add(o), function() {
      a.remove(o);
    };
  }, [
    o.id,
    String(o.dynamic)
  ]), null) : null;
}
Ye.dynamic = function(o) {
  return o.map(function(a) {
    var u = a[0], r = a[1];
    return oe(u, r);
  }).join(" ");
};
W.StyleRegistry = zt;
W.createStyleRegistry = ue;
W.style = Ye;
W.useStyleRegistry = We;
var It = W.style;
const Nt = /* @__PURE__ */ bt(It);
function Wt() {
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx(Nt, { id: "1816124295", children: ["div.jsx-1816124295{border:1px solid black;}"] }),
    /* @__PURE__ */ B.jsx("div", { className: "jsx-1816124295", children: "This content is loaded dynamically" })
  ] });
}
export {
  Wt as default
};
