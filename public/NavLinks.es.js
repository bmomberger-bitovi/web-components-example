function tn(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var Ht = { exports: {} }, Je = {}, Gt = { exports: {} }, C = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function rn() {
  if (br)
    return C;
  br = 1;
  var p = Symbol.for("react.element"), u = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), K = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, $e = {};
  function ie(n, l, S) {
    this.props = n, this.context = l, this.refs = $e, this.updater = S || te;
  }
  ie.prototype.isReactComponent = {}, ie.prototype.setState = function(n, l) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, l, "setState");
  }, ie.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = ie.prototype;
  function U(n, l, S) {
    this.props = n, this.context = l, this.refs = $e, this.updater = S || te;
  }
  var _e = U.prototype = new ue();
  _e.constructor = U, fe(_e, ie.prototype), _e.isPureReactComponent = !0;
  var se = Array.isArray, q = Object.prototype.hasOwnProperty, Z = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(n, l, S) {
    var F, O = {}, $ = null, N = null;
    if (l != null)
      for (F in l.ref !== void 0 && (N = l.ref), l.key !== void 0 && ($ = "" + l.key), l)
        q.call(l, F) && !de.hasOwnProperty(F) && (O[F] = l[F]);
    var D = arguments.length - 2;
    if (D === 1)
      O.children = S;
    else if (1 < D) {
      for (var A = Array(D), G = 0; G < D; G++)
        A[G] = arguments[G + 2];
      O.children = A;
    }
    if (n && n.defaultProps)
      for (F in D = n.defaultProps, D)
        O[F] === void 0 && (O[F] = D[F]);
    return { $$typeof: p, type: n, key: $, ref: N, props: O, _owner: Z.current };
  }
  function we(n, l) {
    return { $$typeof: p, type: n.type, key: l, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === p;
  }
  function Be(n) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(S) {
      return l[S];
    });
  }
  var Te = /\/+/g;
  function ee(n, l) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : l.toString(36);
  }
  function re(n, l, S, F, O) {
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
      return N = n, O = O(N), n = F === "" ? "." + ee(N, 0) : F, se(O) ? (S = "", n != null && (S = n.replace(Te, "$&/") + "/"), re(O, l, S, "", function(G) {
        return G;
      })) : O != null && (Ce(O) && (O = we(O, S + (!O.key || N && N.key === O.key ? "" : ("" + O.key).replace(Te, "$&/") + "/") + n)), l.push(O)), 1;
    if (N = 0, F = F === "" ? "." : F + ":", se(n))
      for (var D = 0; D < n.length; D++) {
        $ = n[D];
        var A = F + ee($, D);
        N += re($, l, S, A, O);
      }
    else if (A = ae(n), typeof A == "function")
      for (n = A.call(n), D = 0; !($ = n.next()).done; )
        $ = $.value, A = F + ee($, D++), N += re($, l, S, A, O);
    else if ($ === "object")
      throw l = String(n), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return N;
  }
  function J(n, l, S) {
    if (n == null)
      return n;
    var F = [], O = 0;
    return re(n, F, "", "", function($) {
      return l.call(S, $, O++);
    }), F;
  }
  function ce(n) {
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
  var g = { current: null }, pe = { transition: null }, Oe = { ReactCurrentDispatcher: g, ReactCurrentBatchConfig: pe, ReactCurrentOwner: Z };
  return C.Children = { map: J, forEach: function(n, l, S) {
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
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, C.Component = ie, C.Fragment = _, C.Profiler = f, C.PureComponent = U, C.StrictMode = i, C.Suspense = T, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, C.cloneElement = function(n, l, S) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var F = fe({}, n.props), O = n.key, $ = n.ref, N = n._owner;
    if (l != null) {
      if (l.ref !== void 0 && ($ = l.ref, N = Z.current), l.key !== void 0 && (O = "" + l.key), n.type && n.type.defaultProps)
        var D = n.type.defaultProps;
      for (A in l)
        q.call(l, A) && !de.hasOwnProperty(A) && (F[A] = l[A] === void 0 && D !== void 0 ? D[A] : l[A]);
    }
    var A = arguments.length - 2;
    if (A === 1)
      F.children = S;
    else if (1 < A) {
      D = Array(A);
      for (var G = 0; G < A; G++)
        D[G] = arguments[G + 2];
      F.children = D;
    }
    return { $$typeof: p, type: n.type, key: O, ref: $, props: F, _owner: N };
  }, C.createContext = function(n) {
    return n = { $$typeof: v, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: m, _context: n }, n.Consumer = n;
  }, C.createElement = he, C.createFactory = function(n) {
    var l = he.bind(null, n);
    return l.type = n, l;
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(n) {
    return { $$typeof: E, render: n };
  }, C.isValidElement = Ce, C.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: ce };
  }, C.memo = function(n, l) {
    return { $$typeof: B, type: n, compare: l === void 0 ? null : l };
  }, C.startTransition = function(n) {
    var l = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = l;
    }
  }, C.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, C.useCallback = function(n, l) {
    return g.current.useCallback(n, l);
  }, C.useContext = function(n) {
    return g.current.useContext(n);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(n) {
    return g.current.useDeferredValue(n);
  }, C.useEffect = function(n, l) {
    return g.current.useEffect(n, l);
  }, C.useId = function() {
    return g.current.useId();
  }, C.useImperativeHandle = function(n, l, S) {
    return g.current.useImperativeHandle(n, l, S);
  }, C.useInsertionEffect = function(n, l) {
    return g.current.useInsertionEffect(n, l);
  }, C.useLayoutEffect = function(n, l) {
    return g.current.useLayoutEffect(n, l);
  }, C.useMemo = function(n, l) {
    return g.current.useMemo(n, l);
  }, C.useReducer = function(n, l, S) {
    return g.current.useReducer(n, l, S);
  }, C.useRef = function(n) {
    return g.current.useRef(n);
  }, C.useState = function(n) {
    return g.current.useState(n);
  }, C.useSyncExternalStore = function(n, l, S) {
    return g.current.useSyncExternalStore(n, l, S);
  }, C.useTransition = function() {
    return g.current.useTransition();
  }, C.version = "18.2.0", C;
}
var Qe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qe.exports;
var Rr;
function nn() {
  return Rr || (Rr = 1, function(p, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var _ = "18.2.0", i = Symbol.for("react.element"), f = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), B = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), ie = Symbol.iterator, ue = "@@iterator";
      function U(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = ie && e[ie] || e[ue];
        return typeof t == "function" ? t : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
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
      }, de = {}, he = null;
      function we(e) {
        he = e;
      }
      de.setExtraStackFrame = function(e) {
        he = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        he && (e += he);
        var t = de.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var Ce = !1, Be = !1, Te = !1, ee = !1, re = !1, J = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: Z
      };
      J.ReactDebugCurrentFrame = de, J.ReactCurrentActQueue = q;
      function ce(e) {
        {
          for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function g(e) {
        {
          for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, t, a) {
        {
          var o = J.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (t += "%s", a = a.concat([c]));
          var b = a.map(function(y) {
            return String(y);
          });
          b.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, b);
        }
      }
      var Oe = {};
      function n(e, t) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + t;
          if (Oe[c])
            return;
          g("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), Oe[c] = !0;
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
        enqueueForceUpdate: function(e, t, a) {
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
        enqueueReplaceState: function(e, t, a, o) {
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
        enqueueSetState: function(e, t, a, o) {
          n(e, "setState");
        }
      }, S = Object.assign, F = {};
      Object.freeze(F);
      function O(e, t, a) {
        this.props = e, this.context = t, this.refs = F, this.updater = a || l;
      }
      O.prototype.isReactComponent = {}, O.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, O.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var $ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, N = function(e, t) {
          Object.defineProperty(O.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var D in $)
          $.hasOwnProperty(D) && N(D, $[D]);
      }
      function A() {
      }
      A.prototype = O.prototype;
      function G(e, t, a) {
        this.props = e, this.context = t, this.refs = F, this.updater = a || l;
      }
      var ge = G.prototype = new A();
      ge.constructor = G, S(ge, O.prototype), ge.isPureReactComponent = !0;
      function wt() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var rt = Array.isArray;
      function Ne(e) {
        return rt(e);
      }
      function Ct(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return ke(e), !1;
        } catch {
          return !0;
        }
      }
      function ke(e) {
        return "" + e;
      }
      function je(e) {
        if (Le(e))
          return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(e)), ke(e);
      }
      function nt(e, t, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = t.displayName || t.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case m:
            return "Fragment";
          case f:
            return "Portal";
          case E:
            return "Profiler";
          case v:
            return "StrictMode";
          case K:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case B:
              var t = e;
              return Pe(t) + ".Consumer";
            case T:
              var a = e;
              return Pe(a._context) + ".Provider";
            case M:
              return nt(e, e.render, "ForwardRef");
            case te:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case fe: {
              var c = e, b = c._payload, y = c._init;
              try {
                return ve(y(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Fe = Object.prototype.hasOwnProperty, ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, at, ot, Me;
      Me = {};
      function qe(e) {
        if (Fe.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function be(e) {
        if (Fe.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Tt(e, t) {
        var a = function() {
          at || (at = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function it(e, t) {
        var a = function() {
          ot || (ot = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ut(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var t = ve(Z.current.type);
          Me[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Me[t] = !0);
        }
      }
      var Ae = function(e, t, a, o, c, b, y) {
        var R = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: i,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: a,
          props: y,
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
      function Ot(e, t, a) {
        var o, c = {}, b = null, y = null, R = null, j = null;
        if (t != null) {
          qe(t) && (y = t.ref, ut(t)), be(t) && (je(t.key), b = "" + t.key), R = t.__self === void 0 ? null : t.__self, j = t.__source === void 0 ? null : t.__source;
          for (o in t)
            Fe.call(t, o) && !ze.hasOwnProperty(o) && (c[o] = t[o]);
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
        if (b || y) {
          var H = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Tt(c, H), y && it(c, H);
        }
        return Ae(e, b, y, R, j, Z.current, c);
      }
      function kt(e, t) {
        var a = Ae(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function jt(e, t, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = S({}, e.props), b = e.key, y = e.ref, R = e._self, j = e._source, I = e._owner;
        if (t != null) {
          qe(t) && (y = t.ref, I = Z.current), be(t) && (je(t.key), b = "" + t.key);
          var L;
          e.type && e.type.defaultProps && (L = e.type.defaultProps);
          for (o in t)
            Fe.call(t, o) && !ze.hasOwnProperty(o) && (t[o] === void 0 && L !== void 0 ? c[o] = L[o] : c[o] = t[o]);
        }
        var z = arguments.length - 2;
        if (z === 1)
          c.children = a;
        else if (z > 1) {
          for (var V = Array(z), H = 0; H < z; H++)
            V[H] = arguments[H + 2];
          c.children = V;
        }
        return Ae(e.type, b, y, R, j, I, c);
      }
      function Re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === i;
      }
      var st = ".", Pt = ":";
      function Ft(e) {
        var t = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var We = !1, ct = /\/+/g;
      function ye(e) {
        return e.replace(ct, "$&/");
      }
      function xe(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (je(e.key), Ft("" + e.key)) : t.toString(36);
      }
      function Se(e, t, a, o, c) {
        var b = typeof e;
        (b === "undefined" || b === "boolean") && (e = null);
        var y = !1;
        if (e === null)
          y = !0;
        else
          switch (b) {
            case "string":
            case "number":
              y = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case i:
                case f:
                  y = !0;
              }
          }
        if (y) {
          var R = e, j = c(R), I = o === "" ? st + xe(R, 0) : o;
          if (Ne(j)) {
            var L = "";
            I != null && (L = ye(I) + "/"), Se(j, t, L, "", function(en) {
              return en;
            });
          } else
            j != null && (Re(j) && (j.key && (!R || R.key !== j.key) && je(j.key), j = kt(
              j,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (j.key && (!R || R.key !== j.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + j.key) + "/"
              ) : "") + I
            )), t.push(j));
          return 1;
        }
        var z, V, H = 0, Q = o === "" ? st : o + Pt;
        if (Ne(e))
          for (var bt = 0; bt < e.length; bt++)
            z = e[bt], V = Q + xe(z, bt), H += Se(z, t, a, V, c);
        else {
          var Bt = U(e);
          if (typeof Bt == "function") {
            var mr = e;
            Bt === mr.entries && (We || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var Qr = Bt.call(mr), _r, Zr = 0; !(_r = Qr.next()).done; )
              z = _r.value, V = Q + xe(z, Zr++), H += Se(z, t, a, V, c);
          } else if (b === "object") {
            var gr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (gr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : gr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return H;
      }
      function De(e, t, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Se(e, o, "", "", function(b) {
          return t.call(a, b, c++);
        }), o;
      }
      function At(e) {
        var t = 0;
        return De(e, function() {
          t++;
        }), t;
      }
      function lt(e, t, a) {
        De(e, function() {
          t.apply(this, arguments);
        }, a);
      }
      function xt(e) {
        return De(e, function(t) {
          return t;
        }) || [];
      }
      function ft(e) {
        if (!Re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function dt(e) {
        var t = {
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
        t.Provider = {
          $$typeof: T,
          _context: t
        };
        var a = !1, o = !1, c = !1;
        {
          var b = {
            $$typeof: B,
            _context: t
          };
          Object.defineProperties(b, {
            Provider: {
              get: function() {
                return o || (o = !0, g("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(y) {
                t.Provider = y;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(y) {
                t._currentValue = y;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(y) {
                t._currentValue2 = y;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(y) {
                t._threadCount = y;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, g("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(y) {
                c || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", y), c = !0);
              }
            }
          }), t.Consumer = b;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var Ie = -1, He = 0, Ge = 1, Dt = 2;
      function It(e) {
        if (e._status === Ie) {
          var t = e._result, a = t();
          if (a.then(function(b) {
            if (e._status === He || e._status === Ie) {
              var y = e;
              y._status = Ge, y._result = b;
            }
          }, function(b) {
            if (e._status === He || e._status === Ie) {
              var y = e;
              y._status = Dt, y._result = b;
            }
          }), e._status === Ie) {
            var o = e;
            o._status = He, o._result = a;
          }
        }
        if (e._status === Ge) {
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
      function $t(e) {
        var t = {
          // We use these fields to store the result.
          _status: Ie,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: t,
          _init: It
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
      function Nt(e) {
        e != null && e.$$typeof === te ? g("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? g("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && g("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && g("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(t, "displayName", {
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
        return t;
      }
      var r;
      r = Symbol.for("react.module.reference");
      function s(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === m || e === E || re || e === v || e === K || e === ae || ee || e === $e || Ce || Be || Te || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === te || e.$$typeof === T || e.$$typeof === B || e.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === r || e.getModuleId !== void 0));
      }
      function d(e, t) {
        s(e) || g("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: te,
          type: e,
          compare: t === void 0 ? null : t
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
      function h() {
        var e = _e.current;
        return e === null && g(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function P(e) {
        var t = h();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? g("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && g("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function x(e) {
        var t = h();
        return t.useState(e);
      }
      function k(e, t, a) {
        var o = h();
        return o.useReducer(e, t, a);
      }
      function w(e) {
        var t = h();
        return t.useRef(e);
      }
      function X(e, t) {
        var a = h();
        return a.useEffect(e, t);
      }
      function W(e, t) {
        var a = h();
        return a.useInsertionEffect(e, t);
      }
      function Y(e, t) {
        var a = h();
        return a.useLayoutEffect(e, t);
      }
      function ne(e, t) {
        var a = h();
        return a.useCallback(e, t);
      }
      function Ee(e, t) {
        var a = h();
        return a.useMemo(e, t);
      }
      function pt(e, t, a) {
        var o = h();
        return o.useImperativeHandle(e, t, a);
      }
      function le(e, t) {
        {
          var a = h();
          return a.useDebugValue(e, t);
        }
      }
      function jr() {
        var e = h();
        return e.useTransition();
      }
      function Pr(e) {
        var t = h();
        return t.useDeferredValue(e);
      }
      function Fr() {
        var e = h();
        return e.useId();
      }
      function Ar(e, t, a) {
        var o = h();
        return o.useSyncExternalStore(e, t, a);
      }
      var Ke = 0, Xt, Qt, Zt, er, tr, rr, nr;
      function ar() {
      }
      ar.__reactDisabledLog = !0;
      function xr() {
        {
          if (Ke === 0) {
            Xt = console.log, Qt = console.info, Zt = console.warn, er = console.error, tr = console.group, rr = console.groupCollapsed, nr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ar,
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
          Ke++;
        }
      }
      function Dr() {
        {
          if (Ke--, Ke === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: S({}, e, {
                value: Xt
              }),
              info: S({}, e, {
                value: Qt
              }),
              warn: S({}, e, {
                value: Zt
              }),
              error: S({}, e, {
                value: er
              }),
              group: S({}, e, {
                value: tr
              }),
              groupCollapsed: S({}, e, {
                value: rr
              }),
              groupEnd: S({}, e, {
                value: nr
              })
            });
          }
          Ke < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Lt = J.ReactCurrentDispatcher, zt;
      function vt(e, t, a) {
        {
          if (zt === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              zt = o && o[1] || "";
            }
          return `
` + zt + e;
        }
      }
      var Mt = !1, ht;
      {
        var Ir = typeof WeakMap == "function" ? WeakMap : Map;
        ht = new Ir();
      }
      function or(e, t) {
        if (!e || Mt)
          return "";
        {
          var a = ht.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Mt = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var b;
        b = Lt.current, Lt.current = null, xr();
        try {
          if (t) {
            var y = function() {
              throw Error();
            };
            if (Object.defineProperty(y.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(y, []);
              } catch (Q) {
                o = Q;
              }
              Reflect.construct(e, [], y);
            } else {
              try {
                y.call();
              } catch (Q) {
                o = Q;
              }
              e.call(y.prototype);
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
`), j = o.stack.split(`
`), I = R.length - 1, L = j.length - 1; I >= 1 && L >= 0 && R[I] !== j[L]; )
              L--;
            for (; I >= 1 && L >= 0; I--, L--)
              if (R[I] !== j[L]) {
                if (I !== 1 || L !== 1)
                  do
                    if (I--, L--, L < 0 || R[I] !== j[L]) {
                      var z = `
` + R[I].replace(" at new ", " at ");
                      return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ht.set(e, z), z;
                    }
                  while (I >= 1 && L >= 0);
                break;
              }
          }
        } finally {
          Mt = !1, Lt.current = b, Dr(), Error.prepareStackTrace = c;
        }
        var V = e ? e.displayName || e.name : "", H = V ? vt(V) : "";
        return typeof e == "function" && ht.set(e, H), H;
      }
      function $r(e, t, a) {
        return or(e, !1);
      }
      function Nr(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function yt(e, t, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return or(e, Nr(e));
        if (typeof e == "string")
          return vt(e);
        switch (e) {
          case K:
            return vt("Suspense");
          case ae:
            return vt("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return $r(e.render);
            case te:
              return yt(e.type, t, a);
            case fe: {
              var o = e, c = o._payload, b = o._init;
              try {
                return yt(b(c), t, a);
              } catch {
              }
            }
          }
        return "";
      }
      var ir = {}, ur = J.ReactDebugCurrentFrame;
      function mt(e) {
        if (e) {
          var t = e._owner, a = yt(e.type, e._source, t ? t.type : null);
          ur.setExtraStackFrame(a);
        } else
          ur.setExtraStackFrame(null);
      }
      function Lr(e, t, a, o, c) {
        {
          var b = Function.call.bind(Fe);
          for (var y in e)
            if (b(e, y)) {
              var R = void 0;
              try {
                if (typeof e[y] != "function") {
                  var j = Error((o || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                R = e[y](t, y, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (I) {
                R = I;
              }
              R && !(R instanceof Error) && (mt(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, y, typeof R), mt(null)), R instanceof Error && !(R.message in ir) && (ir[R.message] = !0, mt(c), g("Failed %s type: %s", a, R.message), mt(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var t = e._owner, a = yt(e.type, e._source, t ? t.type : null);
          we(a);
        } else
          we(null);
      }
      var Wt;
      Wt = !1;
      function sr() {
        if (Z.current) {
          var e = ve(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function zr(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + t + ":" + a + ".";
        }
        return "";
      }
      function Mr(e) {
        return e != null ? zr(e.__source) : "";
      }
      var cr = {};
      function Wr(e) {
        var t = sr();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
      function lr(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Wr(t);
          if (!cr[a]) {
            cr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), Ve(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function fr(e, t) {
        if (typeof e == "object") {
          if (Ne(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Re(o) && lr(o, t);
            }
          else if (Re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = U(e);
            if (typeof c == "function" && c !== e.entries)
              for (var b = c.call(e), y; !(y = b.next()).done; )
                Re(y.value) && lr(y.value, t);
          }
        }
      }
      function dr(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var a;
          if (typeof t == "function")
            a = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === te))
            a = t.propTypes;
          else
            return;
          if (a) {
            var o = ve(t);
            Lr(a, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !Wt) {
            Wt = !0;
            var c = ve(t);
            g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Vr(e) {
        {
          for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
            var o = t[a];
            if (o !== "children" && o !== "key") {
              Ve(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function pr(e, t, a) {
        var o = s(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = Mr(t);
          b ? c += b : c += sr();
          var y;
          e === null ? y = "null" : Ne(e) ? y = "array" : e !== void 0 && e.$$typeof === i ? (y = "<" + (ve(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, g("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var R = Ot.apply(this, arguments);
        if (R == null)
          return R;
        if (o)
          for (var j = 2; j < arguments.length; j++)
            fr(arguments[j], e);
        return e === m ? Vr(R) : dr(R), R;
      }
      var vr = !1;
      function Ur(e) {
        var t = pr.bind(null, e);
        return t.type = e, vr || (vr = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Yr(e, t, a) {
        for (var o = jt.apply(this, arguments), c = 2; c < arguments.length; c++)
          fr(arguments[c], o.type);
        return dr(o), o;
      }
      function Br(e, t) {
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var hr = !1, _t = null;
      function qr(e) {
        if (_t === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), a = p && p[t];
            _t = a.call(p, "timers").setImmediate;
          } catch {
            _t = function(c) {
              hr === !1 && (hr = !0, typeof MessageChannel > "u" && g("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var b = new MessageChannel();
              b.port1.onmessage = c, b.port2.postMessage(void 0);
            };
          }
        return _t(e);
      }
      var Ue = 0, yr = !1;
      function Hr(e) {
        {
          var t = Ue;
          Ue++, q.current === null && (q.current = []);
          var a = q.isBatchingLegacy, o;
          try {
            if (q.isBatchingLegacy = !0, o = e(), !a && q.didScheduleLegacyUpdate) {
              var c = q.current;
              c !== null && (q.didScheduleLegacyUpdate = !1, Yt(c));
            }
          } catch (V) {
            throw gt(t), V;
          } finally {
            q.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var b = o, y = !1, R = {
              then: function(V, H) {
                y = !0, b.then(function(Q) {
                  gt(t), Ue === 0 ? Vt(Q, V, H) : V(Q);
                }, function(Q) {
                  gt(t), H(Q);
                });
              }
            };
            return !yr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              y || (yr = !0, g("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), R;
          } else {
            var j = o;
            if (gt(t), Ue === 0) {
              var I = q.current;
              I !== null && (Yt(I), q.current = null);
              var L = {
                then: function(V, H) {
                  q.current === null ? (q.current = [], Vt(j, V, H)) : V(j);
                }
              };
              return L;
            } else {
              var z = {
                then: function(V, H) {
                  V(j);
                }
              };
              return z;
            }
          }
        }
      }
      function gt(e) {
        e !== Ue - 1 && g("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Vt(e, t, a) {
        {
          var o = q.current;
          if (o !== null)
            try {
              Yt(o), qr(function() {
                o.length === 0 ? (q.current = null, t(e)) : Vt(e, t, a);
              });
            } catch (c) {
              a(c);
            }
          else
            t(e);
        }
      }
      var Ut = !1;
      function Yt(e) {
        if (!Ut) {
          Ut = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var a = e[t];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            Ut = !1;
          }
        }
      }
      var Gr = pr, Kr = Yr, Jr = Ur, Xr = {
        map: De,
        forEach: lt,
        count: At,
        toArray: xt,
        only: ft
      };
      u.Children = Xr, u.Component = O, u.Fragment = m, u.Profiler = E, u.PureComponent = G, u.StrictMode = v, u.Suspense = K, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, u.cloneElement = Kr, u.createContext = dt, u.createElement = Gr, u.createFactory = Jr, u.createRef = wt, u.forwardRef = Nt, u.isValidElement = Re, u.lazy = $t, u.memo = d, u.startTransition = Br, u.unstable_act = Hr, u.useCallback = ne, u.useContext = P, u.useDebugValue = le, u.useDeferredValue = Pr, u.useEffect = X, u.useId = Fr, u.useImperativeHandle = pt, u.useInsertionEffect = W, u.useLayoutEffect = Y, u.useMemo = Ee, u.useReducer = k, u.useRef = w, u.useState = x, u.useSyncExternalStore = Ar, u.useTransition = jr, u.version = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qe, Qe.exports)), Qe.exports;
}
process.env.NODE_ENV === "production" ? Gt.exports = rn() : Gt.exports = nn();
var Ze = Gt.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function an() {
  if (Sr)
    return Je;
  Sr = 1;
  var p = Ze, u = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, T, B) {
    var M, K = {}, ae = null, te = null;
    B !== void 0 && (ae = "" + B), T.key !== void 0 && (ae = "" + T.key), T.ref !== void 0 && (te = T.ref);
    for (M in T)
      i.call(T, M) && !m.hasOwnProperty(M) && (K[M] = T[M]);
    if (E && E.defaultProps)
      for (M in T = E.defaultProps, T)
        K[M] === void 0 && (K[M] = T[M]);
    return { $$typeof: u, type: E, key: ae, ref: te, props: K, _owner: f.current };
  }
  return Je.Fragment = _, Je.jsx = v, Je.jsxs = v, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function on() {
  return Er || (Er = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Ze, u = Symbol.for("react.element"), _ = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), E = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), fe = Symbol.iterator, $e = "@@iterator";
    function ie(r) {
      if (r === null || typeof r != "object")
        return null;
      var s = fe && r[fe] || r[$e];
      return typeof s == "function" ? s : null;
    }
    var ue = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(r) {
      {
        for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          d[h - 1] = arguments[h];
        _e("error", r, d);
      }
    }
    function _e(r, s, d) {
      {
        var h = ue.ReactDebugCurrentFrame, P = h.getStackAddendum();
        P !== "" && (s += "%s", d = d.concat([P]));
        var x = d.map(function(k) {
          return String(k);
        });
        x.unshift("Warning: " + s), Function.prototype.apply.call(console[r], console, x);
      }
    }
    var se = !1, q = !1, Z = !1, de = !1, he = !1, we;
    we = Symbol.for("react.module.reference");
    function Ce(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === m || he || r === f || r === B || r === M || de || r === te || se || q || Z || typeof r == "object" && r !== null && (r.$$typeof === ae || r.$$typeof === K || r.$$typeof === v || r.$$typeof === E || r.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === we || r.getModuleId !== void 0));
    }
    function Be(r, s, d) {
      var h = r.displayName;
      if (h)
        return h;
      var P = s.displayName || s.name || "";
      return P !== "" ? d + "(" + P + ")" : d;
    }
    function Te(r) {
      return r.displayName || "Context";
    }
    function ee(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case _:
          return "Portal";
        case m:
          return "Profiler";
        case f:
          return "StrictMode";
        case B:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case E:
            var s = r;
            return Te(s) + ".Consumer";
          case v:
            var d = r;
            return Te(d._context) + ".Provider";
          case T:
            return Be(r, r.render, "ForwardRef");
          case K:
            var h = r.displayName || null;
            return h !== null ? h : ee(r.type) || "Memo";
          case ae: {
            var P = r, x = P._payload, k = P._init;
            try {
              return ee(k(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, J = 0, ce, g, pe, Oe, n, l, S;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function O() {
      {
        if (J === 0) {
          ce = console.log, g = console.info, pe = console.warn, Oe = console.error, n = console.group, l = console.groupCollapsed, S = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        J++;
      }
    }
    function $() {
      {
        if (J--, J === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, r, {
              value: ce
            }),
            info: re({}, r, {
              value: g
            }),
            warn: re({}, r, {
              value: pe
            }),
            error: re({}, r, {
              value: Oe
            }),
            group: re({}, r, {
              value: n
            }),
            groupCollapsed: re({}, r, {
              value: l
            }),
            groupEnd: re({}, r, {
              value: S
            })
          });
        }
        J < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = ue.ReactCurrentDispatcher, D;
    function A(r, s, d) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (P) {
            var h = P.stack.trim().match(/\n( *(at )?)/);
            D = h && h[1] || "";
          }
        return `
` + D + r;
      }
    }
    var G = !1, ge;
    {
      var wt = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new wt();
    }
    function rt(r, s) {
      if (!r || G)
        return "";
      {
        var d = ge.get(r);
        if (d !== void 0)
          return d;
      }
      var h;
      G = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = N.current, N.current = null, O();
      try {
        if (s) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (le) {
              h = le;
            }
            Reflect.construct(r, [], k);
          } else {
            try {
              k.call();
            } catch (le) {
              h = le;
            }
            r.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            h = le;
          }
          r();
        }
      } catch (le) {
        if (le && h && typeof le.stack == "string") {
          for (var w = le.stack.split(`
`), X = h.stack.split(`
`), W = w.length - 1, Y = X.length - 1; W >= 1 && Y >= 0 && w[W] !== X[Y]; )
            Y--;
          for (; W >= 1 && Y >= 0; W--, Y--)
            if (w[W] !== X[Y]) {
              if (W !== 1 || Y !== 1)
                do
                  if (W--, Y--, Y < 0 || w[W] !== X[Y]) {
                    var ne = `
` + w[W].replace(" at new ", " at ");
                    return r.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", r.displayName)), typeof r == "function" && ge.set(r, ne), ne;
                  }
                while (W >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        G = !1, N.current = x, $(), Error.prepareStackTrace = P;
      }
      var Ee = r ? r.displayName || r.name : "", pt = Ee ? A(Ee) : "";
      return typeof r == "function" && ge.set(r, pt), pt;
    }
    function Ne(r, s, d) {
      return rt(r, !1);
    }
    function Ct(r) {
      var s = r.prototype;
      return !!(s && s.isReactComponent);
    }
    function Le(r, s, d) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return rt(r, Ct(r));
      if (typeof r == "string")
        return A(r);
      switch (r) {
        case B:
          return A("Suspense");
        case M:
          return A("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case T:
            return Ne(r.render);
          case K:
            return Le(r.type, s, d);
          case ae: {
            var h = r, P = h._payload, x = h._init;
            try {
              return Le(x(P), s, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, je = {}, nt = ue.ReactDebugCurrentFrame;
    function Pe(r) {
      if (r) {
        var s = r._owner, d = Le(r.type, r._source, s ? s.type : null);
        nt.setExtraStackFrame(d);
      } else
        nt.setExtraStackFrame(null);
    }
    function ve(r, s, d, h, P) {
      {
        var x = Function.call.bind(ke);
        for (var k in r)
          if (x(r, k)) {
            var w = void 0;
            try {
              if (typeof r[k] != "function") {
                var X = Error((h || "React class") + ": " + d + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              w = r[k](s, k, h, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              w = W;
            }
            w && !(w instanceof Error) && (Pe(P), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", d, k, typeof w), Pe(null)), w instanceof Error && !(w.message in je) && (je[w.message] = !0, Pe(P), U("Failed %s type: %s", d, w.message), Pe(null));
          }
      }
    }
    var Fe = Array.isArray;
    function ze(r) {
      return Fe(r);
    }
    function at(r) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, d = s && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return d;
      }
    }
    function ot(r) {
      try {
        return Me(r), !1;
      } catch {
        return !0;
      }
    }
    function Me(r) {
      return "" + r;
    }
    function qe(r) {
      if (ot(r))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(r)), Me(r);
    }
    var be = ue.ReactCurrentOwner, Tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, it, ut, Ae;
    Ae = {};
    function Ot(r) {
      if (ke.call(r, "ref")) {
        var s = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function kt(r) {
      if (ke.call(r, "key")) {
        var s = Object.getOwnPropertyDescriptor(r, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function jt(r, s) {
      if (typeof r.ref == "string" && be.current && s && be.current.stateNode !== s) {
        var d = ee(be.current.type);
        Ae[d] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(be.current.type), r.ref), Ae[d] = !0);
      }
    }
    function Re(r, s) {
      {
        var d = function() {
          it || (it = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function st(r, s) {
      {
        var d = function() {
          ut || (ut = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Pt = function(r, s, d, h, P, x, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: r,
        key: s,
        ref: d,
        props: k,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Ft(r, s, d, h, P) {
      {
        var x, k = {}, w = null, X = null;
        d !== void 0 && (qe(d), w = "" + d), kt(s) && (qe(s.key), w = "" + s.key), Ot(s) && (X = s.ref, jt(s, P));
        for (x in s)
          ke.call(s, x) && !Tt.hasOwnProperty(x) && (k[x] = s[x]);
        if (r && r.defaultProps) {
          var W = r.defaultProps;
          for (x in W)
            k[x] === void 0 && (k[x] = W[x]);
        }
        if (w || X) {
          var Y = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          w && Re(k, Y), X && st(k, Y);
        }
        return Pt(r, w, X, P, h, be.current, k);
      }
    }
    var We = ue.ReactCurrentOwner, ct = ue.ReactDebugCurrentFrame;
    function ye(r) {
      if (r) {
        var s = r._owner, d = Le(r.type, r._source, s ? s.type : null);
        ct.setExtraStackFrame(d);
      } else
        ct.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Se(r) {
      return typeof r == "object" && r !== null && r.$$typeof === u;
    }
    function De() {
      {
        if (We.current) {
          var r = ee(We.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function At(r) {
      {
        if (r !== void 0) {
          var s = r.fileName.replace(/^.*[\\\/]/, ""), d = r.lineNumber;
          return `

Check your code at ` + s + ":" + d + ".";
        }
        return "";
      }
    }
    var lt = {};
    function xt(r) {
      {
        var s = De();
        if (!s) {
          var d = typeof r == "string" ? r : r.displayName || r.name;
          d && (s = `

Check the top-level render call using <` + d + ">.");
        }
        return s;
      }
    }
    function ft(r, s) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var d = xt(s);
        if (lt[d])
          return;
        lt[d] = !0;
        var h = "";
        r && r._owner && r._owner !== We.current && (h = " It was passed a child from " + ee(r._owner.type) + "."), ye(r), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, h), ye(null);
      }
    }
    function dt(r, s) {
      {
        if (typeof r != "object")
          return;
        if (ze(r))
          for (var d = 0; d < r.length; d++) {
            var h = r[d];
            Se(h) && ft(h, s);
          }
        else if (Se(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var P = ie(r);
          if (typeof P == "function" && P !== r.entries)
            for (var x = P.call(r), k; !(k = x.next()).done; )
              Se(k.value) && ft(k.value, s);
        }
      }
    }
    function Ie(r) {
      {
        var s = r.type;
        if (s == null || typeof s == "string")
          return;
        var d;
        if (typeof s == "function")
          d = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === K))
          d = s.propTypes;
        else
          return;
        if (d) {
          var h = ee(s);
          ve(d, r.props, "prop", h, r);
        } else if (s.PropTypes !== void 0 && !xe) {
          xe = !0;
          var P = ee(s);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(r) {
      {
        for (var s = Object.keys(r.props), d = 0; d < s.length; d++) {
          var h = s[d];
          if (h !== "children" && h !== "key") {
            ye(r), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), ye(null);
            break;
          }
        }
        r.ref !== null && (ye(r), U("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function Ge(r, s, d, h, P, x) {
      {
        var k = Ce(r);
        if (!k) {
          var w = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = At(P);
          X ? w += X : w += De();
          var W;
          r === null ? W = "null" : ze(r) ? W = "array" : r !== void 0 && r.$$typeof === u ? (W = "<" + (ee(r.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : W = typeof r, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, w);
        }
        var Y = Ft(r, s, d, P, x);
        if (Y == null)
          return Y;
        if (k) {
          var ne = s.children;
          if (ne !== void 0)
            if (h)
              if (ze(ne)) {
                for (var Ee = 0; Ee < ne.length; Ee++)
                  dt(ne[Ee], r);
                Object.freeze && Object.freeze(ne);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dt(ne, r);
        }
        return r === i ? He(Y) : Ie(Y), Y;
      }
    }
    function Dt(r, s, d) {
      return Ge(r, s, d, !0);
    }
    function It(r, s, d) {
      return Ge(r, s, d, !1);
    }
    var $t = It, Nt = Dt;
    Xe.Fragment = i, Xe.jsx = $t, Xe.jsxs = Nt;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Ht.exports = an() : Ht.exports = on();
var oe = Ht.exports, tt = {}, et = Ze;
function un(p) {
  return p && typeof p == "object" && "default" in p ? p : { default: p };
}
var St = /* @__PURE__ */ un(et);
function wr(p, u) {
  for (var _ = 0; _ < u.length; _++) {
    var i = u[_];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(p, i.key, i);
  }
}
function sn(p, u, _) {
  return u && wr(p.prototype, u), _ && wr(p, _), p;
}
var Rt = typeof process < "u" && process.env && process.env.NODE_ENV === "production", qt = function(p) {
  return Object.prototype.toString.call(p) === "[object String]";
}, cn = /* @__PURE__ */ function() {
  function p(_) {
    var i = _ === void 0 ? {} : _, f = i.name, m = f === void 0 ? "stylesheet" : f, v = i.optimizeForSpeed, E = v === void 0 ? Rt : v;
    me(qt(m), "`name` must be a string"), this._name = m, this._deletedRulePlaceholder = "#" + m + "-deleted-rule____{}", me(typeof E == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = E, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
    var T = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = T ? T.getAttribute("content") : null;
  }
  var u = p.prototype;
  return u.setOptimizeForSpeed = function(i) {
    me(typeof i == "boolean", "`setOptimizeForSpeed` accepts a boolean"), me(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = i, this.inject();
  }, u.isOptimizeForSpeed = function() {
    return this._optimizeForSpeed;
  }, u.inject = function() {
    var i = this;
    if (me(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (Rt || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
      return;
    }
    this._serverSheet = {
      cssRules: [],
      insertRule: function(f, m) {
        return typeof m == "number" ? i._serverSheet.cssRules[m] = {
          cssText: f
        } : i._serverSheet.cssRules.push({
          cssText: f
        }), m;
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
    if (me(qt(i), "`insertRule` accepts only strings"), typeof window > "u")
      return typeof f != "number" && (f = this._serverSheet.cssRules.length), this._serverSheet.insertRule(i, f), this._rulesCount++;
    if (this._optimizeForSpeed) {
      var m = this.getSheet();
      typeof f != "number" && (f = m.cssRules.length);
      try {
        m.insertRule(i, f);
      } catch {
        return Rt || console.warn(`StyleSheet: illegal rule: 

` + i + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
      }
    } else {
      var v = this._tags[f];
      this._tags.push(this.makeStyleTag(this._name, i, v));
    }
    return this._rulesCount++;
  }, u.replaceRule = function(i, f) {
    if (this._optimizeForSpeed || typeof window > "u") {
      var m = typeof window < "u" ? this.getSheet() : this._serverSheet;
      if (f.trim() || (f = this._deletedRulePlaceholder), !m.cssRules[i])
        return i;
      m.deleteRule(i);
      try {
        m.insertRule(f, i);
      } catch {
        Rt || console.warn(`StyleSheet: illegal rule: 

` + f + `

See https://stackoverflow.com/q/20007992 for more info`), m.insertRule(this._deletedRulePlaceholder, i);
      }
    } else {
      var v = this._tags[i];
      me(v, "old rule at index `" + i + "` not found"), v.textContent = f;
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
      me(f, "rule at index `" + i + "` not found"), f.parentNode.removeChild(f), this._tags[i] = null;
    }
  }, u.flush = function() {
    this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(i) {
      return i && i.parentNode.removeChild(i);
    }), this._tags = []) : this._serverSheet.cssRules = [];
  }, u.cssRules = function() {
    var i = this;
    return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(f, m) {
      return m ? f = f.concat(Array.prototype.map.call(i.getSheetForTag(m).cssRules, function(v) {
        return v.cssText === i._deletedRulePlaceholder ? null : v;
      })) : f.push(null), f;
    }, []);
  }, u.makeStyleTag = function(i, f, m) {
    f && me(qt(f), "makeStyleTag accepts only strings as second parameter");
    var v = document.createElement("style");
    this._nonce && v.setAttribute("nonce", this._nonce), v.type = "text/css", v.setAttribute("data-" + i, ""), f && v.appendChild(document.createTextNode(f));
    var E = document.head || document.getElementsByTagName("head")[0];
    return m ? E.insertBefore(v, m) : E.appendChild(v), v;
  }, sn(p, [
    {
      key: "length",
      get: function() {
        return this._rulesCount;
      }
    }
  ]), p;
}();
function me(p, u) {
  if (!p)
    throw new Error("StyleSheet: " + u + ".");
}
function ln(p) {
  for (var u = 5381, _ = p.length; _; )
    u = u * 33 ^ p.charCodeAt(--_);
  return u >>> 0;
}
var fn = ln, dn = function(p) {
  return p.replace(/\/style/gi, "\\/style");
}, Ye = {};
function Kt(p, u) {
  if (!u)
    return "jsx-" + p;
  var _ = String(u), i = p + _;
  return Ye[i] || (Ye[i] = "jsx-" + fn(p + "-" + _)), Ye[i];
}
function Cr(p, u) {
  var _ = /__jsx-style-dynamic-selector/g;
  typeof window > "u" && (u = dn(u));
  var i = p + u;
  return Ye[i] || (Ye[i] = u.replace(_, p)), Ye[i];
}
function pn(p, u) {
  return u === void 0 && (u = {}), p.map(function(_) {
    var i = _[0], f = _[1];
    return /* @__PURE__ */ St.default.createElement("style", {
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
  function p(_) {
    var i = _ === void 0 ? {} : _, f = i.styleSheet, m = f === void 0 ? null : f, v = i.optimizeForSpeed, E = v === void 0 ? !1 : v;
    this._sheet = m || new cn({
      name: "styled-jsx",
      optimizeForSpeed: E
    }), this._sheet.inject(), m && typeof E == "boolean" && (this._sheet.setOptimizeForSpeed(E), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }
  var u = p.prototype;
  return u.add = function(i) {
    var f = this;
    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(i.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(B, M) {
      return B[M] = 0, B;
    }, {}));
    var m = this.getIdAndRules(i), v = m.styleId, E = m.rules;
    if (v in this._instancesCounts) {
      this._instancesCounts[v] += 1;
      return;
    }
    var T = E.map(function(B) {
      return f._sheet.insertRule(B);
    }).filter(function(B) {
      return B !== -1;
    });
    this._indices[v] = T, this._instancesCounts[v] = 1;
  }, u.remove = function(i) {
    var f = this, m = this.getIdAndRules(i).styleId;
    if (hn(m in this._instancesCounts, "styleId: `" + m + "` not found"), this._instancesCounts[m] -= 1, this._instancesCounts[m] < 1) {
      var v = this._fromServer && this._fromServer[m];
      v ? (v.parentNode.removeChild(v), delete this._fromServer[m]) : (this._indices[m].forEach(function(E) {
        return f._sheet.deleteRule(E);
      }), delete this._indices[m]), delete this._instancesCounts[m];
    }
  }, u.update = function(i, f) {
    this.add(f), this.remove(i);
  }, u.flush = function() {
    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }, u.cssRules = function() {
    var i = this, f = this._fromServer ? Object.keys(this._fromServer).map(function(v) {
      return [
        v,
        i._fromServer[v]
      ];
    }) : [], m = this._sheet.cssRules();
    return f.concat(Object.keys(this._indices).map(function(v) {
      return [
        v,
        i._indices[v].map(function(E) {
          return m[E].cssText;
        }).join(i._optimizeForSpeed ? "" : `
`)
      ];
    }).filter(function(v) {
      return !!v[1];
    }));
  }, u.styles = function(i) {
    return pn(this.cssRules(), i);
  }, u.getIdAndRules = function(i) {
    var f = i.children, m = i.dynamic, v = i.id;
    if (m) {
      var E = Kt(v, m);
      return {
        styleId: E,
        rules: Array.isArray(f) ? f.map(function(T) {
          return Cr(E, T);
        }) : [
          Cr(E, f)
        ]
      };
    }
    return {
      styleId: Kt(v),
      rules: Array.isArray(f) ? f : [
        f
      ]
    };
  }, u.selectFromServer = function() {
    var i = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return i.reduce(function(f, m) {
      var v = m.id.slice(2);
      return f[v] = m, f;
    }, {});
  }, p;
}();
function hn(p, u) {
  if (!p)
    throw new Error("StyleSheetRegistry: " + u + ".");
}
var Et = /* @__PURE__ */ et.createContext(null);
Et.displayName = "StyleSheetContext";
function Jt() {
  return new vn();
}
function yn(p) {
  var u = p.registry, _ = p.children, i = et.useContext(Et), f = et.useState(function() {
    return i || u || Jt();
  }), m = f[0];
  return /* @__PURE__ */ St.default.createElement(Et.Provider, {
    value: m
  }, _);
}
function Or() {
  return et.useContext(Et);
}
var mn = St.default.useInsertionEffect || St.default.useLayoutEffect, Tr = typeof window < "u" ? Jt() : void 0;
function kr(p) {
  var u = Tr || Or();
  return u ? typeof window > "u" ? (u.add(p), null) : (mn(function() {
    return u.add(p), function() {
      u.remove(p);
    };
  }, [
    p.id,
    String(p.dynamic)
  ]), null) : null;
}
kr.dynamic = function(p) {
  return p.map(function(u) {
    var _ = u[0], i = u[1];
    return Kt(_, i);
  }).join(" ");
};
tt.StyleRegistry = yn;
tt.createStyleRegistry = Jt;
tt.style = kr;
tt.useStyleRegistry = Or;
var _n = tt.style;
const gn = /* @__PURE__ */ tn(_n);
function bn({
  routeRoot: p = "/",
  initialRoute: u
}) {
  const [_, i] = Ze.useState(u);
  Ze.useEffect(() => {
    const v = (E) => {
      E.data.url.startsWith(p) ? i(E.data.url.replace(p, "")) : i("");
    };
    return document.addEventListener("routechange", v), () => {
      document.removeEventListener("routechange", v);
    };
  }, []);
  const f = (v) => {
    const E = v.target.getAttribute("href");
    v.preventDefault();
    const T = new CustomEvent("routerequest", {
      bubbles: !0
    });
    T.data = {
      href: E
    }, T.originalEvent = v, v.target.dispatchEvent(T);
  }, m = (v) => {
    const E = v.target.getAttribute("href"), T = new CustomEvent("prefetchrequest", {
      bubbles: !0
    });
    T.data = {
      href: E
    }, T.originalEvent = v, v.target.dispatchEvent(T);
  };
  return /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    /* @__PURE__ */ oe.jsx(gn, { id: "1370157471", children: ["li.selected.jsx-1370157471{background-color:blue;}", "li.selected.jsx-1370157471 *.jsx-1370157471{color:white;}"] }),
    /* @__PURE__ */ oe.jsxs("ul", { className: "jsx-1370157471", children: [
      /* @__PURE__ */ oe.jsx("li", { className: "jsx-1370157471 " + ((_ === "foo/bar" ? "selected" : "") || ""), children: /* @__PURE__ */ oe.jsx("a", { href: "/foo/bar", onClick: f, className: "jsx-1370157471", children: "Nav to /foo/bar" }) }),
      /* @__PURE__ */ oe.jsx("li", { className: "jsx-1370157471 " + ((_ === "baz" ? "selected" : "") || ""), children: /* @__PURE__ */ oe.jsx("a", { href: "/baz", onClick: f, className: "jsx-1370157471", children: "Nav to /baz" }) }),
      /* @__PURE__ */ oe.jsx("li", { className: "jsx-1370157471 " + ((_ === "content" ? "selected" : "") || ""), children: /* @__PURE__ */ oe.jsx("a", { href: "/content", onMouseOver: m, onClick: f, className: "jsx-1370157471", children: "Nav to /content with dynamic content" }) }),
      /* @__PURE__ */ oe.jsx("li", { className: "jsx-1370157471 " + ((_ === "invalid-route" ? "selected" : "") || ""), children: /* @__PURE__ */ oe.jsx("a", { href: "/invalid-route", onClick: f, className: "jsx-1370157471", children: "This nav is invalid" }) })
    ] })
  ] });
}
export {
  bn as default
};
