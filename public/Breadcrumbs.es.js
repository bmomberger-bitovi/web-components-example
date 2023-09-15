import Ce, { useState as ur, useEffect as sr } from "react";
var X = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function lr() {
  if (Te)
    return A;
  Te = 1;
  var _ = Ce, y = Symbol.for("react.element"), k = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, T = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(c, s, P) {
    var h, g = {}, C = null, I = null;
    P !== void 0 && (C = "" + P), s.key !== void 0 && (C = "" + s.key), s.ref !== void 0 && (I = s.ref);
    for (h in s)
      R.call(s, h) && !O.hasOwnProperty(h) && (g[h] = s[h]);
    if (c && c.defaultProps)
      for (h in s = c.defaultProps, s)
        g[h] === void 0 && (g[h] = s[h]);
    return { $$typeof: y, type: c, key: C, ref: I, props: g, _owner: T.current };
  }
  return A.Fragment = k, A.jsx = p, A.jsxs = p, A;
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
var Oe;
function fr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Ce, y = Symbol.for("react.element"), k = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), Z = Symbol.iterator, Se = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var w = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, je = !1, ke = !1, De = !1, Fe = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === O || Fe || e === T || e === P || e === h || De || e === I || xe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === g || e.$$typeof === p || e.$$typeof === c || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case k:
          return "Portal";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case P:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ee(r) + ".Consumer";
          case p:
            var t = e;
            return ee(t._context) + ".Provider";
          case s:
            return $e(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case C: {
            var o = e, u = o._payload, i = o._init;
            try {
              return b(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, re, te, ne, ae, ie, oe, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ie() {
      {
        if (D === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
    function We() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: re
            }),
            info: S({}, e, {
              value: te
            }),
            warn: S({}, e, {
              value: ne
            }),
            error: S({}, e, {
              value: ae
            }),
            group: S({}, e, {
              value: ie
            }),
            groupCollapsed: S({}, e, {
              value: oe
            }),
            groupEnd: S({}, e, {
              value: ue
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = w.ReactCurrentDispatcher, U;
    function W(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, Ie();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (E) {
              n = E;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), v = n.stack.split(`
`), l = a.length - 1, f = v.length - 1; l >= 1 && f >= 0 && a[l] !== v[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== v[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== v[f]) {
                    var m = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, m), m;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = !1, M.current = u, We(), Error.prepareStackTrace = o;
      }
      var j = e ? e.displayName || e.name : "", Re = j ? W(j) : "";
      return typeof e == "function" && Y.set(e, Re), Re;
    }
    function Le(e, r, t) {
      return le(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ne(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case P:
          return W("Suspense");
        case h:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Le(e.render);
          case g:
            return L(e.type, r, t);
          case C: {
            var n = e, o = n._payload, u = n._init;
            try {
              return L(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, fe = {}, ce = w.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, o) {
      {
        var u = Function.call.bind(N);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(o), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(o), d("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Me = Array.isArray;
    function q(e) {
      return Me(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), de(e);
    }
    var F = w.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, he, J;
    J = {};
    function Je(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = b(F.current.type);
        J[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(F.current.type), e.ref), J[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (v = r.ref, ze(r, o));
        for (u in r)
          N.call(r, u) && !qe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, f), v && Ke(i, f);
        }
        return Xe(e, a, v, o, n, F.current, i);
      }
    }
    var G = w.ReactCurrentOwner, me = w.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function ge() {
      {
        if (G.current) {
          var e = b(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function er(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + b(e._owner.type) + "."), x(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Pe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              H(i.value) && Ee(i.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = b(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function ye(e, r, t, n, o, u) {
      {
        var i = Ae(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe(o);
          v ? a += v : a += ge();
          var l;
          e === null ? l = "null" : q(e) ? l = "array" : e !== void 0 && e.$$typeof === y ? (l = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = Ze(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (q(m)) {
                for (var j = 0; j < m.length; j++)
                  _e(m[j], e);
                Object.freeze && Object.freeze(m);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(m, e);
        }
        return e === R ? tr(f) : rr(f), f;
      }
    }
    function nr(e, r, t) {
      return ye(e, r, t, !0);
    }
    function ar(e, r, t) {
      return ye(e, r, t, !1);
    }
    var ir = ar, or = nr;
    $.Fragment = R, $.jsx = ir, $.jsxs = or;
  }()), $;
}
process.env.NODE_ENV === "production" ? X.exports = lr() : X.exports = fr();
var K = X.exports;
function dr({
  routeRoot: _ = "/",
  initialRoute: y,
  tokens: k = {
    $title: "Home"
  }
}) {
  const [R, T] = ur(y.startsWith(_) ? y.replace(_, "") : "");
  sr(() => {
    const c = (s) => {
      s.detail.url.startsWith(_) ? T(s.detail.url.replace(_, "")) : T("");
    };
    return document.addEventListener("routechange", c), () => {
      document.removeEventListener("routechange", c);
    };
  }, []);
  const O = [];
  let p = {
    home: k,
    $title: ""
  };
  return ["home", ...(R ?? "").split("/")].forEach((c) => {
    c !== "" && (p = p == null ? void 0 : p[c], O.push(p && p.$title ? p.$title : c));
  }), /* @__PURE__ */ K.jsx("ul", { children: O.map((c, s) => /* @__PURE__ */ K.jsxs("li", { children: [
    s !== 0 && /* @__PURE__ */ K.jsx("span", { children: " / " }),
    c
  ] }, `breadcrumb-${c}-${s}`)) });
}
export {
  dr as default
};
