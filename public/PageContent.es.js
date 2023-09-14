function rn(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var qr = { exports: {} }, Ke = {}, Hr = { exports: {} }, w = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function tn() {
  if (bt)
    return w;
  bt = 1;
  var p = Symbol.for("react.element"), u = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), _ = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), K = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, Ie = {};
  function oe(n, l, S) {
    this.props = n, this.context = l, this.refs = Ie, this.updater = S || re;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, l) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, l, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = oe.prototype;
  function U(n, l, S) {
    this.props = n, this.context = l, this.refs = Ie, this.updater = S || re;
  }
  var me = U.prototype = new ie();
  me.constructor = U, le(me, oe.prototype), me.isPureReactComponent = !0;
  var ue = Array.isArray, q = Object.prototype.hasOwnProperty, Z = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, l, S) {
    var j, C = {}, $ = null, N = null;
    if (l != null)
      for (j in l.ref !== void 0 && (N = l.ref), l.key !== void 0 && ($ = "" + l.key), l)
        q.call(l, j) && !fe.hasOwnProperty(j) && (C[j] = l[j]);
    var D = arguments.length - 2;
    if (D === 1)
      C.children = S;
    else if (1 < D) {
      for (var F = Array(D), G = 0; G < D; G++)
        F[G] = arguments[G + 2];
      C.children = F;
    }
    if (n && n.defaultProps)
      for (j in D = n.defaultProps, D)
        C[j] === void 0 && (C[j] = D[j]);
    return { $$typeof: p, type: n, key: $, ref: N, props: C, _owner: Z.current };
  }
  function Ee(n, l) {
    return { $$typeof: p, type: n.type, key: l, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === p;
  }
  function Ye(n) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(S) {
      return l[S];
    });
  }
  var Ce = /\/+/g;
  function ee(n, l) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : l.toString(36);
  }
  function te(n, l, S, j, C) {
    var $ = typeof n;
    ($ === "undefined" || $ === "boolean") && (n = null);
    var N = !1;
    if (n === null)
      N = !0;
    else
      switch ($) {
        case "string":
        case "number":
          N = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case p:
            case u:
              N = !0;
          }
      }
    if (N)
      return N = n, C = C(N), n = j === "" ? "." + ee(N, 0) : j, ue(C) ? (S = "", n != null && (S = n.replace(Ce, "$&/") + "/"), te(C, l, S, "", function(G) {
        return G;
      })) : C != null && (we(C) && (C = Ee(C, S + (!C.key || N && N.key === C.key ? "" : ("" + C.key).replace(Ce, "$&/") + "/") + n)), l.push(C)), 1;
    if (N = 0, j = j === "" ? "." : j + ":", ue(n))
      for (var D = 0; D < n.length; D++) {
        $ = n[D];
        var F = j + ee($, D);
        N += te($, l, S, F, C);
      }
    else if (F = ae(n), typeof F == "function")
      for (n = F.call(n), D = 0; !($ = n.next()).done; )
        $ = $.value, F = j + ee($, D++), N += te($, l, S, F, C);
    else if ($ === "object")
      throw l = String(n), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return N;
  }
  function J(n, l, S) {
    if (n == null)
      return n;
    var j = [], C = 0;
    return te(n, j, "", "", function($) {
      return l.call(S, $, C++);
    }), j;
  }
  function se(n) {
    if (n._status === -1) {
      var l = n._result;
      l = l(), l.then(function(S) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = S);
      }, function(S) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = S);
      }), n._status === -1 && (n._status = 0, n._result = l);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var g = { current: null }, de = { transition: null }, Te = { ReactCurrentDispatcher: g, ReactCurrentBatchConfig: de, ReactCurrentOwner: Z };
  return w.Children = { map: J, forEach: function(n, l, S) {
    J(n, function() {
      l.apply(this, arguments);
    }, S);
  }, count: function(n) {
    var l = 0;
    return J(n, function() {
      l++;
    }), l;
  }, toArray: function(n) {
    return J(n, function(l) {
      return l;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, w.Component = oe, w.Fragment = m, w.Profiler = f, w.PureComponent = U, w.StrictMode = i, w.Suspense = x, w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, w.cloneElement = function(n, l, S) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var j = le({}, n.props), C = n.key, $ = n.ref, N = n._owner;
    if (l != null) {
      if (l.ref !== void 0 && ($ = l.ref, N = Z.current), l.key !== void 0 && (C = "" + l.key), n.type && n.type.defaultProps)
        var D = n.type.defaultProps;
      for (F in l)
        q.call(l, F) && !fe.hasOwnProperty(F) && (j[F] = l[F] === void 0 && D !== void 0 ? D[F] : l[F]);
    }
    var F = arguments.length - 2;
    if (F === 1)
      j.children = S;
    else if (1 < F) {
      D = Array(F);
      for (var G = 0; G < F; G++)
        D[G] = arguments[G + 2];
      j.children = D;
    }
    return { $$typeof: p, type: n.type, key: C, ref: $, props: j, _owner: N };
  }, w.createContext = function(n) {
    return n = { $$typeof: _, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: y, _context: n }, n.Consumer = n;
  }, w.createElement = ve, w.createFactory = function(n) {
    var l = ve.bind(null, n);
    return l.type = n, l;
  }, w.createRef = function() {
    return { current: null };
  }, w.forwardRef = function(n) {
    return { $$typeof: O, render: n };
  }, w.isValidElement = we, w.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: se };
  }, w.memo = function(n, l) {
    return { $$typeof: B, type: n, compare: l === void 0 ? null : l };
  }, w.startTransition = function(n) {
    var l = de.transition;
    de.transition = {};
    try {
      n();
    } finally {
      de.transition = l;
    }
  }, w.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, w.useCallback = function(n, l) {
    return g.current.useCallback(n, l);
  }, w.useContext = function(n) {
    return g.current.useContext(n);
  }, w.useDebugValue = function() {
  }, w.useDeferredValue = function(n) {
    return g.current.useDeferredValue(n);
  }, w.useEffect = function(n, l) {
    return g.current.useEffect(n, l);
  }, w.useId = function() {
    return g.current.useId();
  }, w.useImperativeHandle = function(n, l, S) {
    return g.current.useImperativeHandle(n, l, S);
  }, w.useInsertionEffect = function(n, l) {
    return g.current.useInsertionEffect(n, l);
  }, w.useLayoutEffect = function(n, l) {
    return g.current.useLayoutEffect(n, l);
  }, w.useMemo = function(n, l) {
    return g.current.useMemo(n, l);
  }, w.useReducer = function(n, l, S) {
    return g.current.useReducer(n, l, S);
  }, w.useRef = function(n) {
    return g.current.useRef(n);
  }, w.useState = function(n) {
    return g.current.useState(n);
  }, w.useSyncExternalStore = function(n, l, S) {
    return g.current.useSyncExternalStore(n, l, S);
  }, w.useTransition = function() {
    return g.current.useTransition();
  }, w.version = "18.2.0", w;
}
var Xe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Xe.exports;
var Rt;
function nn() {
  return Rt || (Rt = 1, function(p, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.2.0", i = Symbol.for("react.element"), f = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), B = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), oe = Symbol.iterator, ie = "@@iterator";
      function U(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ie];
        return typeof r == "function" ? r : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, q = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {}, ve = null;
      function Ee(e) {
        ve = e;
      }
      fe.setExtraStackFrame = function(e) {
        ve = e;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = fe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Ce = !1, ee = !1, te = !1, J = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: Z
      };
      J.ReactDebugCurrentFrame = fe, J.ReactCurrentActQueue = q;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("warn", e, a);
        }
      }
      function g(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("error", e, a);
        }
      }
      function de(e, r, a) {
        {
          var o = J.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var b = a.map(function(h) {
            return String(h);
          });
          b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (Te[c])
            return;
          g("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[c] = !0;
        }
      }
      var l = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, S = Object.assign, j = {};
      Object.freeze(j);
      function C(e, r, a) {
        this.props = e, this.context = r, this.refs = j, this.updater = a || l;
      }
      C.prototype.isReactComponent = {}, C.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, C.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var $ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, N = function(e, r) {
          Object.defineProperty(C.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var D in $)
          $.hasOwnProperty(D) && N(D, $[D]);
      }
      function F() {
      }
      F.prototype = C.prototype;
      function G(e, r, a) {
        this.props = e, this.context = r, this.refs = j, this.updater = a || l;
      }
      var _e = G.prototype = new F();
      _e.constructor = G, S(_e, C.prototype), _e.isPureReactComponent = !0;
      function Er() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var er = Array.isArray;
      function $e(e) {
        return er(e);
      }
      function wr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ne(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function ke(e) {
        if (Ne(e))
          return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(e)), Oe(e);
      }
      function rr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case y:
            return "Fragment";
          case f:
            return "Portal";
          case O:
            return "Profiler";
          case _:
            return "StrictMode";
          case K:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case B:
              var r = e;
              return Pe(r) + ".Consumer";
            case x:
              var a = e;
              return Pe(a._context) + ".Provider";
            case M:
              return rr(e, e.render, "ForwardRef");
            case re:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case le: {
              var c = e, b = c._payload, h = c._init;
              try {
                return pe(h(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, tr, nr, ze;
      ze = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ge(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Cr(e, r) {
        var a = function() {
          tr || (tr = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ar(e, r) {
        var a = function() {
          nr || (nr = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function or(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var r = pe(Z.current.type);
          ze[r] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), ze[r] = !0);
        }
      }
      var Fe = function(e, r, a, o, c, b, h) {
        var R = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: i,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: h,
          // Record the component responsible for creating this element.
          _owner: b
        };
        return R._store = {}, Object.defineProperty(R._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(R, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(R, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
      };
      function Tr(e, r, a) {
        var o, c = {}, b = null, h = null, R = null, k = null;
        if (r != null) {
          Be(r) && (h = r.ref, or(r)), ge(r) && (ke(r.key), b = "" + r.key), R = r.__self === void 0 ? null : r.__self, k = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var I = arguments.length - 2;
        if (I === 1)
          c.children = a;
        else if (I > 1) {
          for (var L = Array(I), z = 0; z < I; z++)
            L[z] = arguments[z + 2];
          Object.freeze && Object.freeze(L), c.children = L;
        }
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (o in V)
            c[o] === void 0 && (c[o] = V[o]);
        }
        if (b || h) {
          var H = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Cr(c, H), h && ar(c, H);
        }
        return Fe(e, b, h, R, k, Z.current, c);
      }
      function Or(e, r) {
        var a = Fe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function kr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = S({}, e.props), b = e.key, h = e.ref, R = e._self, k = e._source, I = e._owner;
        if (r != null) {
          Be(r) && (h = r.ref, I = Z.current), ge(r) && (ke(r.key), b = "" + r.key);
          var L;
          e.type && e.type.defaultProps && (L = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && L !== void 0 ? c[o] = L[o] : c[o] = r[o]);
        }
        var z = arguments.length - 2;
        if (z === 1)
          c.children = a;
        else if (z > 1) {
          for (var V = Array(z), H = 0; H < z; H++)
            V[H] = arguments[H + 2];
          c.children = V;
        }
        return Fe(e.type, b, h, R, k, I, c);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === i;
      }
      var ir = ".", Pr = ":";
      function jr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Me = !1, ur = /\/+/g;
      function he(e) {
        return e.replace(ur, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), jr("" + e.key)) : r.toString(36);
      }
      function Re(e, r, a, o, c) {
        var b = typeof e;
        (b === "undefined" || b === "boolean") && (e = null);
        var h = !1;
        if (e === null)
          h = !0;
        else
          switch (b) {
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case i:
                case f:
                  h = !0;
              }
          }
        if (h) {
          var R = e, k = c(R), I = o === "" ? ir + Ae(R, 0) : o;
          if ($e(k)) {
            var L = "";
            I != null && (L = he(I) + "/"), Re(k, r, L, "", function(en) {
              return en;
            });
          } else
            k != null && (be(k) && (k.key && (!R || R.key !== k.key) && ke(k.key), k = Or(
              k,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (k.key && (!R || R.key !== k.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                he("" + k.key) + "/"
              ) : "") + I
            )), r.push(k));
          return 1;
        }
        var z, V, H = 0, Q = o === "" ? ir : o + Pr;
        if ($e(e))
          for (var _r = 0; _r < e.length; _r++)
            z = e[_r], V = Q + Ae(z, _r), H += Re(z, r, a, V, c);
        else {
          var Yr = U(e);
          if (typeof Yr == "function") {
            var mt = e;
            Yr === mt.entries && (Me || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Qt = Yr.call(mt), _t, Zt = 0; !(_t = Qt.next()).done; )
              z = _t.value, V = Q + Ae(z, Zt++), H += Re(z, r, a, V, c);
          } else if (b === "object") {
            var gt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (gt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : gt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return H;
      }
      function xe(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Re(e, o, "", "", function(b) {
          return r.call(a, b, c++);
        }), o;
      }
      function Fr(e) {
        var r = 0;
        return xe(e, function() {
          r++;
        }), r;
      }
      function sr(e, r, a) {
        xe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Ar(e) {
        return xe(e, function(r) {
          return r;
        }) || [];
      }
      function cr(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function lr(e) {
        var r = {
          $$typeof: B,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: x,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var b = {
            $$typeof: B,
            _context: r
          };
          Object.defineProperties(b, {
            Provider: {
              get: function() {
                return o || (o = !0, g("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(h) {
                r.Provider = h;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(h) {
                r._currentValue = h;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(h) {
                r._currentValue2 = h;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(h) {
                r._threadCount = h;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, g("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(h) {
                c || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", h), c = !0);
              }
            }
          }), r.Consumer = b;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, qe = 0, He = 1, xr = 2;
      function Dr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(b) {
            if (e._status === qe || e._status === De) {
              var h = e;
              h._status = He, h._result = b;
            }
          }, function(b) {
            if (e._status === qe || e._status === De) {
              var h = e;
              h._status = xr, h._result = b;
            }
          }), e._status === De) {
            var o = e;
            o._status = qe, o._result = a;
          }
        }
        if (e._status === He) {
          var c = e._result;
          return c === void 0 && g(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || g(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Ir(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: le,
          _payload: r,
          _init: Dr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(b) {
                g("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = b, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(b) {
                g("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = b, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function $r(e) {
        e != null && e.$$typeof === re ? g("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? g("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && g("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && g("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function s(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === y || e === O || te || e === _ || e === K || e === ae || ee || e === Ie || we || Ye || Ce || typeof e == "object" && e !== null && (e.$$typeof === le || e.$$typeof === re || e.$$typeof === x || e.$$typeof === B || e.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function d(e, r) {
        s(e) || g("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: re,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function v() {
        var e = me.current;
        return e === null && g(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function P(e) {
        var r = v();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? g("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && g("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function A(e) {
        var r = v();
        return r.useState(e);
      }
      function T(e, r, a) {
        var o = v();
        return o.useReducer(e, r, a);
      }
      function E(e) {
        var r = v();
        return r.useRef(e);
      }
      function X(e, r) {
        var a = v();
        return a.useEffect(e, r);
      }
      function W(e, r) {
        var a = v();
        return a.useInsertionEffect(e, r);
      }
      function Y(e, r) {
        var a = v();
        return a.useLayoutEffect(e, r);
      }
      function ne(e, r) {
        var a = v();
        return a.useCallback(e, r);
      }
      function Se(e, r) {
        var a = v();
        return a.useMemo(e, r);
      }
      function fr(e, r, a) {
        var o = v();
        return o.useImperativeHandle(e, r, a);
      }
      function ce(e, r) {
        {
          var a = v();
          return a.useDebugValue(e, r);
        }
      }
      function Pt() {
        var e = v();
        return e.useTransition();
      }
      function jt(e) {
        var r = v();
        return r.useDeferredValue(e);
      }
      function Ft() {
        var e = v();
        return e.useId();
      }
      function At(e, r, a) {
        var o = v();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, Xr, Qr, Zr, et, rt, tt, nt;
      function at() {
      }
      at.__reactDisabledLog = !0;
      function xt() {
        {
          if (Ge === 0) {
            Xr = console.log, Qr = console.info, Zr = console.warn, et = console.error, rt = console.group, tt = console.groupCollapsed, nt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: at,
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
          Ge++;
        }
      }
      function Dt() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: S({}, e, {
                value: Xr
              }),
              info: S({}, e, {
                value: Qr
              }),
              warn: S({}, e, {
                value: Zr
              }),
              error: S({}, e, {
                value: et
              }),
              group: S({}, e, {
                value: rt
              }),
              groupCollapsed: S({}, e, {
                value: tt
              }),
              groupEnd: S({}, e, {
                value: nt
              })
            });
          }
          Ge < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Nr = J.ReactCurrentDispatcher, Lr;
      function dr(e, r, a) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              Lr = o && o[1] || "";
            }
          return `
` + Lr + e;
        }
      }
      var zr = !1, pr;
      {
        var It = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new It();
      }
      function ot(e, r) {
        if (!e || zr)
          return "";
        {
          var a = pr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        zr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var b;
        b = Nr.current, Nr.current = null, xt();
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
              } catch (Q) {
                o = Q;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (Q) {
                o = Q;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Q) {
              o = Q;
            }
            e();
          }
        } catch (Q) {
          if (Q && o && typeof Q.stack == "string") {
            for (var R = Q.stack.split(`
`), k = o.stack.split(`
`), I = R.length - 1, L = k.length - 1; I >= 1 && L >= 0 && R[I] !== k[L]; )
              L--;
            for (; I >= 1 && L >= 0; I--, L--)
              if (R[I] !== k[L]) {
                if (I !== 1 || L !== 1)
                  do
                    if (I--, L--, L < 0 || R[I] !== k[L]) {
                      var z = `
` + R[I].replace(" at new ", " at ");
                      return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && pr.set(e, z), z;
                    }
                  while (I >= 1 && L >= 0);
                break;
              }
          }
        } finally {
          zr = !1, Nr.current = b, Dt(), Error.prepareStackTrace = c;
        }
        var V = e ? e.displayName || e.name : "", H = V ? dr(V) : "";
        return typeof e == "function" && pr.set(e, H), H;
      }
      function $t(e, r, a) {
        return ot(e, !1);
      }
      function Nt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function vr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ot(e, Nt(e));
        if (typeof e == "string")
          return dr(e);
        switch (e) {
          case K:
            return dr("Suspense");
          case ae:
            return dr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return $t(e.render);
            case re:
              return vr(e.type, r, a);
            case le: {
              var o = e, c = o._payload, b = o._init;
              try {
                return vr(b(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var it = {}, ut = J.ReactDebugCurrentFrame;
      function hr(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          ut.setExtraStackFrame(a);
        } else
          ut.setExtraStackFrame(null);
      }
      function Lt(e, r, a, o, c) {
        {
          var b = Function.call.bind(je);
          for (var h in e)
            if (b(e, h)) {
              var R = void 0;
              try {
                if (typeof e[h] != "function") {
                  var k = Error((o || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw k.name = "Invariant Violation", k;
                }
                R = e[h](r, h, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (I) {
                R = I;
              }
              R && !(R instanceof Error) && (hr(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, h, typeof R), hr(null)), R instanceof Error && !(R.message in it) && (it[R.message] = !0, hr(c), g("Failed %s type: %s", a, R.message), hr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          Ee(a);
        } else
          Ee(null);
      }
      var Mr;
      Mr = !1;
      function st() {
        if (Z.current) {
          var e = pe(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function zt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Mt(e) {
        return e != null ? zt(e.__source) : "";
      }
      var ct = {};
      function Wt(e) {
        var r = st();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function lt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Wt(r);
          if (!ct[a]) {
            ct[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), We(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function ft(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && lt(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = U(e);
            if (typeof c == "function" && c !== e.entries)
              for (var b = c.call(e), h; !(h = b.next()).done; )
                be(h.value) && lt(h.value, r);
          }
        }
      }
      function dt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === re))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            Lt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Mr) {
            Mr = !0;
            var c = pe(r);
            g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Vt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function pt(e, r, a) {
        var o = s(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = Mt(r);
          b ? c += b : c += st();
          var h;
          e === null ? h = "null" : $e(e) ? h = "array" : e !== void 0 && e.$$typeof === i ? (h = "<" + (pe(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, g("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, c);
        }
        var R = Tr.apply(this, arguments);
        if (R == null)
          return R;
        if (o)
          for (var k = 2; k < arguments.length; k++)
            ft(arguments[k], e);
        return e === y ? Vt(R) : dt(R), R;
      }
      var vt = !1;
      function Ut(e) {
        var r = pt.bind(null, e);
        return r.type = e, vt || (vt = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Yt(e, r, a) {
        for (var o = kr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ft(arguments[c], o.type);
        return dt(o), o;
      }
      function Bt(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ht = !1, yr = null;
      function qt(e) {
        if (yr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = p && p[r];
            yr = a.call(p, "timers").setImmediate;
          } catch {
            yr = function(c) {
              ht === !1 && (ht = !0, typeof MessageChannel > "u" && g("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var b = new MessageChannel();
              b.port1.onmessage = c, b.port2.postMessage(void 0);
            };
          }
        return yr(e);
      }
      var Ve = 0, yt = !1;
      function Ht(e) {
        {
          var r = Ve;
          Ve++, q.current === null && (q.current = []);
          var a = q.isBatchingLegacy, o;
          try {
            if (q.isBatchingLegacy = !0, o = e(), !a && q.didScheduleLegacyUpdate) {
              var c = q.current;
              c !== null && (q.didScheduleLegacyUpdate = !1, Ur(c));
            }
          } catch (V) {
            throw mr(r), V;
          } finally {
            q.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var b = o, h = !1, R = {
              then: function(V, H) {
                h = !0, b.then(function(Q) {
                  mr(r), Ve === 0 ? Wr(Q, V, H) : V(Q);
                }, function(Q) {
                  mr(r), H(Q);
                });
              }
            };
            return !yt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              h || (yt = !0, g("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), R;
          } else {
            var k = o;
            if (mr(r), Ve === 0) {
              var I = q.current;
              I !== null && (Ur(I), q.current = null);
              var L = {
                then: function(V, H) {
                  q.current === null ? (q.current = [], Wr(k, V, H)) : V(k);
                }
              };
              return L;
            } else {
              var z = {
                then: function(V, H) {
                  V(k);
                }
              };
              return z;
            }
          }
        }
      }
      function mr(e) {
        e !== Ve - 1 && g("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Wr(e, r, a) {
        {
          var o = q.current;
          if (o !== null)
            try {
              Ur(o), qt(function() {
                o.length === 0 ? (q.current = null, r(e)) : Wr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Vr = !1;
      function Ur(e) {
        if (!Vr) {
          Vr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Vr = !1;
          }
        }
      }
      var Gt = pt, Kt = Yt, Jt = Ut, Xt = {
        map: xe,
        forEach: sr,
        count: Fr,
        toArray: Ar,
        only: cr
      };
      u.Children = Xt, u.Component = C, u.Fragment = y, u.Profiler = O, u.PureComponent = G, u.StrictMode = _, u.Suspense = K, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, u.cloneElement = Kt, u.createContext = lr, u.createElement = Gt, u.createFactory = Jt, u.createRef = Er, u.forwardRef = $r, u.isValidElement = be, u.lazy = Ir, u.memo = d, u.startTransition = Bt, u.unstable_act = Ht, u.useCallback = ne, u.useContext = P, u.useDebugValue = ce, u.useDeferredValue = jt, u.useEffect = X, u.useId = Ft, u.useImperativeHandle = fr, u.useInsertionEffect = W, u.useLayoutEffect = Y, u.useMemo = Se, u.useReducer = T, u.useRef = E, u.useState = A, u.useSyncExternalStore = At, u.useTransition = Pt, u.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Xe, Xe.exports)), Xe.exports;
}
process.env.NODE_ENV === "production" ? Hr.exports = tn() : Hr.exports = nn();
var Kr = Hr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function an() {
  if (St)
    return Ke;
  St = 1;
  var p = Kr, u = Symbol.for("react.element"), m = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(O, x, B) {
    var M, K = {}, ae = null, re = null;
    B !== void 0 && (ae = "" + B), x.key !== void 0 && (ae = "" + x.key), x.ref !== void 0 && (re = x.ref);
    for (M in x)
      i.call(x, M) && !y.hasOwnProperty(M) && (K[M] = x[M]);
    if (O && O.defaultProps)
      for (M in x = O.defaultProps, x)
        K[M] === void 0 && (K[M] = x[M]);
    return { $$typeof: u, type: O, key: ae, ref: re, props: K, _owner: f.current };
  }
  return Ke.Fragment = m, Ke.jsx = _, Ke.jsxs = _, Ke;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function on() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Kr, u = Symbol.for("react.element"), m = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), O = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), le = Symbol.iterator, Ie = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = le && t[le] || t[Ie];
      return typeof s == "function" ? s : null;
    }
    var ie = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(t) {
      {
        for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
          d[v - 1] = arguments[v];
        me("error", t, d);
      }
    }
    function me(t, s, d) {
      {
        var v = ie.ReactDebugCurrentFrame, P = v.getStackAddendum();
        P !== "" && (s += "%s", d = d.concat([P]));
        var A = d.map(function(T) {
          return String(T);
        });
        A.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, A);
      }
    }
    var ue = !1, q = !1, Z = !1, fe = !1, ve = !1, Ee;
    Ee = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === y || ve || t === f || t === B || t === M || fe || t === re || ue || q || Z || typeof t == "object" && t !== null && (t.$$typeof === ae || t.$$typeof === K || t.$$typeof === _ || t.$$typeof === O || t.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ee || t.getModuleId !== void 0));
    }
    function Ye(t, s, d) {
      var v = t.displayName;
      if (v)
        return v;
      var P = s.displayName || s.name || "";
      return P !== "" ? d + "(" + P + ")" : d;
    }
    function Ce(t) {
      return t.displayName || "Context";
    }
    function ee(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case m:
          return "Portal";
        case y:
          return "Profiler";
        case f:
          return "StrictMode";
        case B:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case O:
            var s = t;
            return Ce(s) + ".Consumer";
          case _:
            var d = t;
            return Ce(d._context) + ".Provider";
          case x:
            return Ye(t, t.render, "ForwardRef");
          case K:
            var v = t.displayName || null;
            return v !== null ? v : ee(t.type) || "Memo";
          case ae: {
            var P = t, A = P._payload, T = P._init;
            try {
              return ee(T(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, J = 0, se, g, de, Te, n, l, S;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function C() {
      {
        if (J === 0) {
          se = console.log, g = console.info, de = console.warn, Te = console.error, n = console.group, l = console.groupCollapsed, S = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        J++;
      }
    }
    function $() {
      {
        if (J--, J === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, t, {
              value: se
            }),
            info: te({}, t, {
              value: g
            }),
            warn: te({}, t, {
              value: de
            }),
            error: te({}, t, {
              value: Te
            }),
            group: te({}, t, {
              value: n
            }),
            groupCollapsed: te({}, t, {
              value: l
            }),
            groupEnd: te({}, t, {
              value: S
            })
          });
        }
        J < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = ie.ReactCurrentDispatcher, D;
    function F(t, s, d) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (P) {
            var v = P.stack.trim().match(/\n( *(at )?)/);
            D = v && v[1] || "";
          }
        return `
` + D + t;
      }
    }
    var G = !1, _e;
    {
      var Er = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new Er();
    }
    function er(t, s) {
      if (!t || G)
        return "";
      {
        var d = _e.get(t);
        if (d !== void 0)
          return d;
      }
      var v;
      G = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = N.current, N.current = null, C();
      try {
        if (s) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (ce) {
              v = ce;
            }
            Reflect.construct(t, [], T);
          } else {
            try {
              T.call();
            } catch (ce) {
              v = ce;
            }
            t.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            v = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && v && typeof ce.stack == "string") {
          for (var E = ce.stack.split(`
`), X = v.stack.split(`
`), W = E.length - 1, Y = X.length - 1; W >= 1 && Y >= 0 && E[W] !== X[Y]; )
            Y--;
          for (; W >= 1 && Y >= 0; W--, Y--)
            if (E[W] !== X[Y]) {
              if (W !== 1 || Y !== 1)
                do
                  if (W--, Y--, Y < 0 || E[W] !== X[Y]) {
                    var ne = `
` + E[W].replace(" at new ", " at ");
                    return t.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", t.displayName)), typeof t == "function" && _e.set(t, ne), ne;
                  }
                while (W >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        G = !1, N.current = A, $(), Error.prepareStackTrace = P;
      }
      var Se = t ? t.displayName || t.name : "", fr = Se ? F(Se) : "";
      return typeof t == "function" && _e.set(t, fr), fr;
    }
    function $e(t, s, d) {
      return er(t, !1);
    }
    function wr(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function Ne(t, s, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return er(t, wr(t));
      if (typeof t == "string")
        return F(t);
      switch (t) {
        case B:
          return F("Suspense");
        case M:
          return F("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case x:
            return $e(t.render);
          case K:
            return Ne(t.type, s, d);
          case ae: {
            var v = t, P = v._payload, A = v._init;
            try {
              return Ne(A(P), s, d);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, ke = {}, rr = ie.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var s = t._owner, d = Ne(t.type, t._source, s ? s.type : null);
        rr.setExtraStackFrame(d);
      } else
        rr.setExtraStackFrame(null);
    }
    function pe(t, s, d, v, P) {
      {
        var A = Function.call.bind(Oe);
        for (var T in t)
          if (A(t, T)) {
            var E = void 0;
            try {
              if (typeof t[T] != "function") {
                var X = Error((v || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              E = t[T](s, T, v, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              E = W;
            }
            E && !(E instanceof Error) && (Pe(P), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, T, typeof E), Pe(null)), E instanceof Error && !(E.message in ke) && (ke[E.message] = !0, Pe(P), U("Failed %s type: %s", d, E.message), Pe(null));
          }
      }
    }
    var je = Array.isArray;
    function Le(t) {
      return je(t);
    }
    function tr(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, d = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function nr(t) {
      try {
        return ze(t), !1;
      } catch {
        return !0;
      }
    }
    function ze(t) {
      return "" + t;
    }
    function Be(t) {
      if (nr(t))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(t)), ze(t);
    }
    var ge = ie.ReactCurrentOwner, Cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or, Fe;
    Fe = {};
    function Tr(t) {
      if (Oe.call(t, "ref")) {
        var s = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Or(t) {
      if (Oe.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function kr(t, s) {
      if (typeof t.ref == "string" && ge.current && s && ge.current.stateNode !== s) {
        var d = ee(ge.current.type);
        Fe[d] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(ge.current.type), t.ref), Fe[d] = !0);
      }
    }
    function be(t, s) {
      {
        var d = function() {
          ar || (ar = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function ir(t, s) {
      {
        var d = function() {
          or || (or = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Pr = function(t, s, d, v, P, A, T) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: t,
        key: s,
        ref: d,
        props: T,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function jr(t, s, d, v, P) {
      {
        var A, T = {}, E = null, X = null;
        d !== void 0 && (Be(d), E = "" + d), Or(s) && (Be(s.key), E = "" + s.key), Tr(s) && (X = s.ref, kr(s, P));
        for (A in s)
          Oe.call(s, A) && !Cr.hasOwnProperty(A) && (T[A] = s[A]);
        if (t && t.defaultProps) {
          var W = t.defaultProps;
          for (A in W)
            T[A] === void 0 && (T[A] = W[A]);
        }
        if (E || X) {
          var Y = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          E && be(T, Y), X && ir(T, Y);
        }
        return Pr(t, E, X, P, v, ge.current, T);
      }
    }
    var Me = ie.ReactCurrentOwner, ur = ie.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var s = t._owner, d = Ne(t.type, t._source, s ? s.type : null);
        ur.setExtraStackFrame(d);
      } else
        ur.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Re(t) {
      return typeof t == "object" && t !== null && t.$$typeof === u;
    }
    function xe() {
      {
        if (Me.current) {
          var t = ee(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Fr(t) {
      {
        if (t !== void 0) {
          var s = t.fileName.replace(/^.*[\\\/]/, ""), d = t.lineNumber;
          return `

Check your code at ` + s + ":" + d + ".";
        }
        return "";
      }
    }
    var sr = {};
    function Ar(t) {
      {
        var s = xe();
        if (!s) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (s = `

Check the top-level render call using <` + d + ">.");
        }
        return s;
      }
    }
    function cr(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = Ar(s);
        if (sr[d])
          return;
        sr[d] = !0;
        var v = "";
        t && t._owner && t._owner !== Me.current && (v = " It was passed a child from " + ee(t._owner.type) + "."), he(t), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), he(null);
      }
    }
    function lr(t, s) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var d = 0; d < t.length; d++) {
            var v = t[d];
            Re(v) && cr(v, s);
          }
        else if (Re(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var P = oe(t);
          if (typeof P == "function" && P !== t.entries)
            for (var A = P.call(t), T; !(T = A.next()).done; )
              Re(T.value) && cr(T.value, s);
        }
      }
    }
    function De(t) {
      {
        var s = t.type;
        if (s == null || typeof s == "string")
          return;
        var d;
        if (typeof s == "function")
          d = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === K))
          d = s.propTypes;
        else
          return;
        if (d) {
          var v = ee(s);
          pe(d, t.props, "prop", v, t);
        } else if (s.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var P = ee(s);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(t) {
      {
        for (var s = Object.keys(t.props), d = 0; d < s.length; d++) {
          var v = s[d];
          if (v !== "children" && v !== "key") {
            he(t), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), U("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function He(t, s, d, v, P, A) {
      {
        var T = we(t);
        if (!T) {
          var E = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Fr(P);
          X ? E += X : E += xe();
          var W;
          t === null ? W = "null" : Le(t) ? W = "array" : t !== void 0 && t.$$typeof === u ? (W = "<" + (ee(t.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : W = typeof t, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, E);
        }
        var Y = jr(t, s, d, P, A);
        if (Y == null)
          return Y;
        if (T) {
          var ne = s.children;
          if (ne !== void 0)
            if (v)
              if (Le(ne)) {
                for (var Se = 0; Se < ne.length; Se++)
                  lr(ne[Se], t);
                Object.freeze && Object.freeze(ne);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(ne, t);
        }
        return t === i ? qe(Y) : De(Y), Y;
      }
    }
    function xr(t, s, d) {
      return He(t, s, d, !0);
    }
    function Dr(t, s, d) {
      return He(t, s, d, !1);
    }
    var Ir = Dr, $r = xr;
    Je.Fragment = i, Je.jsx = Ir, Je.jsxs = $r;
  }()), Je;
}
process.env.NODE_ENV === "production" ? qr.exports = an() : qr.exports = on();
var gr = qr.exports, Ze = {}, Qe = Kr;
function un(p) {
  return p && typeof p == "object" && "default" in p ? p : { default: p };
}
var Rr = /* @__PURE__ */ un(Qe);
function wt(p, u) {
  for (var m = 0; m < u.length; m++) {
    var i = u[m];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(p, i.key, i);
  }
}
function sn(p, u, m) {
  return u && wt(p.prototype, u), m && wt(p, m), p;
}
var br = typeof process < "u" && process.env && process.env.NODE_ENV === "production", Br = function(p) {
  return Object.prototype.toString.call(p) === "[object String]";
}, cn = /* @__PURE__ */ function() {
  function p(m) {
    var i = m === void 0 ? {} : m, f = i.name, y = f === void 0 ? "stylesheet" : f, _ = i.optimizeForSpeed, O = _ === void 0 ? br : _;
    ye(Br(y), "`name` must be a string"), this._name = y, this._deletedRulePlaceholder = "#" + y + "-deleted-rule____{}", ye(typeof O == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = O, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
    var x = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = x ? x.getAttribute("content") : null;
  }
  var u = p.prototype;
  return u.setOptimizeForSpeed = function(i) {
    ye(typeof i == "boolean", "`setOptimizeForSpeed` accepts a boolean"), ye(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = i, this.inject();
  }, u.isOptimizeForSpeed = function() {
    return this._optimizeForSpeed;
  }, u.inject = function() {
    var i = this;
    if (ye(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (br || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
      return;
    }
    this._serverSheet = {
      cssRules: [],
      insertRule: function(f, y) {
        return typeof y == "number" ? i._serverSheet.cssRules[y] = {
          cssText: f
        } : i._serverSheet.cssRules.push({
          cssText: f
        }), y;
      },
      deleteRule: function(f) {
        i._serverSheet.cssRules[f] = null;
      }
    };
  }, u.getSheetForTag = function(i) {
    if (i.sheet)
      return i.sheet;
    for (var f = 0; f < document.styleSheets.length; f++)
      if (document.styleSheets[f].ownerNode === i)
        return document.styleSheets[f];
  }, u.getSheet = function() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  }, u.insertRule = function(i, f) {
    if (ye(Br(i), "`insertRule` accepts only strings"), typeof window > "u")
      return typeof f != "number" && (f = this._serverSheet.cssRules.length), this._serverSheet.insertRule(i, f), this._rulesCount++;
    if (this._optimizeForSpeed) {
      var y = this.getSheet();
      typeof f != "number" && (f = y.cssRules.length);
      try {
        y.insertRule(i, f);
      } catch {
        return br || console.warn(`StyleSheet: illegal rule: 

` + i + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
      }
    } else {
      var _ = this._tags[f];
      this._tags.push(this.makeStyleTag(this._name, i, _));
    }
    return this._rulesCount++;
  }, u.replaceRule = function(i, f) {
    if (this._optimizeForSpeed || typeof window > "u") {
      var y = typeof window < "u" ? this.getSheet() : this._serverSheet;
      if (f.trim() || (f = this._deletedRulePlaceholder), !y.cssRules[i])
        return i;
      y.deleteRule(i);
      try {
        y.insertRule(f, i);
      } catch {
        br || console.warn(`StyleSheet: illegal rule: 

` + f + `

See https://stackoverflow.com/q/20007992 for more info`), y.insertRule(this._deletedRulePlaceholder, i);
      }
    } else {
      var _ = this._tags[i];
      ye(_, "old rule at index `" + i + "` not found"), _.textContent = f;
    }
    return i;
  }, u.deleteRule = function(i) {
    if (typeof window > "u") {
      this._serverSheet.deleteRule(i);
      return;
    }
    if (this._optimizeForSpeed)
      this.replaceRule(i, "");
    else {
      var f = this._tags[i];
      ye(f, "rule at index `" + i + "` not found"), f.parentNode.removeChild(f), this._tags[i] = null;
    }
  }, u.flush = function() {
    this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(i) {
      return i && i.parentNode.removeChild(i);
    }), this._tags = []) : this._serverSheet.cssRules = [];
  }, u.cssRules = function() {
    var i = this;
    return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(f, y) {
      return y ? f = f.concat(Array.prototype.map.call(i.getSheetForTag(y).cssRules, function(_) {
        return _.cssText === i._deletedRulePlaceholder ? null : _;
      })) : f.push(null), f;
    }, []);
  }, u.makeStyleTag = function(i, f, y) {
    f && ye(Br(f), "makeStyleTag accepts only strings as second parameter");
    var _ = document.createElement("style");
    this._nonce && _.setAttribute("nonce", this._nonce), _.type = "text/css", _.setAttribute("data-" + i, ""), f && _.appendChild(document.createTextNode(f));
    var O = document.head || document.getElementsByTagName("head")[0];
    return y ? O.insertBefore(_, y) : O.appendChild(_), _;
  }, sn(p, [
    {
      key: "length",
      get: function() {
        return this._rulesCount;
      }
    }
  ]), p;
}();
function ye(p, u) {
  if (!p)
    throw new Error("StyleSheet: " + u + ".");
}
function ln(p) {
  for (var u = 5381, m = p.length; m; )
    u = u * 33 ^ p.charCodeAt(--m);
  return u >>> 0;
}
var fn = ln, dn = function(p) {
  return p.replace(/\/style/gi, "\\/style");
}, Ue = {};
function Gr(p, u) {
  if (!u)
    return "jsx-" + p;
  var m = String(u), i = p + m;
  return Ue[i] || (Ue[i] = "jsx-" + fn(p + "-" + m)), Ue[i];
}
function Ct(p, u) {
  var m = /__jsx-style-dynamic-selector/g;
  typeof window > "u" && (u = dn(u));
  var i = p + u;
  return Ue[i] || (Ue[i] = u.replace(m, p)), Ue[i];
}
function pn(p, u) {
  return u === void 0 && (u = {}), p.map(function(m) {
    var i = m[0], f = m[1];
    return /* @__PURE__ */ Rr.default.createElement("style", {
      id: "__" + i,
      // Avoid warnings upon render with a key
      key: "__" + i,
      nonce: u.nonce ? u.nonce : void 0,
      dangerouslySetInnerHTML: {
        __html: f
      }
    });
  });
}
var vn = /* @__PURE__ */ function() {
  function p(m) {
    var i = m === void 0 ? {} : m, f = i.styleSheet, y = f === void 0 ? null : f, _ = i.optimizeForSpeed, O = _ === void 0 ? !1 : _;
    this._sheet = y || new cn({
      name: "styled-jsx",
      optimizeForSpeed: O
    }), this._sheet.inject(), y && typeof O == "boolean" && (this._sheet.setOptimizeForSpeed(O), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }
  var u = p.prototype;
  return u.add = function(i) {
    var f = this;
    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(i.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(B, M) {
      return B[M] = 0, B;
    }, {}));
    var y = this.getIdAndRules(i), _ = y.styleId, O = y.rules;
    if (_ in this._instancesCounts) {
      this._instancesCounts[_] += 1;
      return;
    }
    var x = O.map(function(B) {
      return f._sheet.insertRule(B);
    }).filter(function(B) {
      return B !== -1;
    });
    this._indices[_] = x, this._instancesCounts[_] = 1;
  }, u.remove = function(i) {
    var f = this, y = this.getIdAndRules(i).styleId;
    if (hn(y in this._instancesCounts, "styleId: `" + y + "` not found"), this._instancesCounts[y] -= 1, this._instancesCounts[y] < 1) {
      var _ = this._fromServer && this._fromServer[y];
      _ ? (_.parentNode.removeChild(_), delete this._fromServer[y]) : (this._indices[y].forEach(function(O) {
        return f._sheet.deleteRule(O);
      }), delete this._indices[y]), delete this._instancesCounts[y];
    }
  }, u.update = function(i, f) {
    this.add(f), this.remove(i);
  }, u.flush = function() {
    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }, u.cssRules = function() {
    var i = this, f = this._fromServer ? Object.keys(this._fromServer).map(function(_) {
      return [
        _,
        i._fromServer[_]
      ];
    }) : [], y = this._sheet.cssRules();
    return f.concat(Object.keys(this._indices).map(function(_) {
      return [
        _,
        i._indices[_].map(function(O) {
          return y[O].cssText;
        }).join(i._optimizeForSpeed ? "" : `
`)
      ];
    }).filter(function(_) {
      return !!_[1];
    }));
  }, u.styles = function(i) {
    return pn(this.cssRules(), i);
  }, u.getIdAndRules = function(i) {
    var f = i.children, y = i.dynamic, _ = i.id;
    if (y) {
      var O = Gr(_, y);
      return {
        styleId: O,
        rules: Array.isArray(f) ? f.map(function(x) {
          return Ct(O, x);
        }) : [
          Ct(O, f)
        ]
      };
    }
    return {
      styleId: Gr(_),
      rules: Array.isArray(f) ? f : [
        f
      ]
    };
  }, u.selectFromServer = function() {
    var i = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return i.reduce(function(f, y) {
      var _ = y.id.slice(2);
      return f[_] = y, f;
    }, {});
  }, p;
}();
function hn(p, u) {
  if (!p)
    throw new Error("StyleSheetRegistry: " + u + ".");
}
var Sr = /* @__PURE__ */ Qe.createContext(null);
Sr.displayName = "StyleSheetContext";
function Jr() {
  return new vn();
}
function yn(p) {
  var u = p.registry, m = p.children, i = Qe.useContext(Sr), f = Qe.useState(function() {
    return i || u || Jr();
  }), y = f[0];
  return /* @__PURE__ */ Rr.default.createElement(Sr.Provider, {
    value: y
  }, m);
}
function Ot() {
  return Qe.useContext(Sr);
}
var mn = Rr.default.useInsertionEffect || Rr.default.useLayoutEffect, Tt = typeof window < "u" ? Jr() : void 0;
function kt(p) {
  var u = Tt || Ot();
  return u ? typeof window > "u" ? (u.add(p), null) : (mn(function() {
    return u.add(p), function() {
      u.remove(p);
    };
  }, [
    p.id,
    String(p.dynamic)
  ]), null) : null;
}
kt.dynamic = function(p) {
  return p.map(function(u) {
    var m = u[0], i = u[1];
    return Gr(m, i);
  }).join(" ");
};
Ze.StyleRegistry = yn;
Ze.createStyleRegistry = Jr;
Ze.style = kt;
Ze.useStyleRegistry = Ot;
var _n = Ze.style;
const gn = /* @__PURE__ */ rn(_n);
function bn() {
  return /* @__PURE__ */ gr.jsxs(gr.Fragment, { children: [
    /* @__PURE__ */ gr.jsx(gn, { id: "1816124295", children: ["div.jsx-1816124295{border:1px solid black;}"] }),
    /* @__PURE__ */ gr.jsx("div", { className: "jsx-1816124295", children: "This content is loaded dynamically" })
  ] });
}
export {
  bn as default
};
