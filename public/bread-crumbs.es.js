function cR(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var m0 = { exports: {} }, Tt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function eD() {
  if (eR)
    return Tt;
  eR = 1;
  var j = Symbol.for("react.element"), Y = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), ft = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), Pe = Symbol.for("react.provider"), S = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), X = Symbol.iterator;
  function ie(T) {
    return T === null || typeof T != "object" ? null : (T = X && T[X] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, xe = Object.assign, Xe = {};
  function Ie(T, $, ue) {
    this.props = T, this.context = $, this.refs = Xe, this.updater = ue || ae;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(T, $) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, $, "setState");
  }, Ie.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function qt() {
  }
  qt.prototype = Ie.prototype;
  function lt(T, $, ue) {
    this.props = T, this.context = $, this.refs = Xe, this.updater = ue || ae;
  }
  var Ge = lt.prototype = new qt();
  Ge.constructor = lt, xe(Ge, Ie.prototype), Ge.isPureReactComponent = !0;
  var dt = Array.isArray, _e = Object.prototype.hasOwnProperty, ut = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(T, $, ue) {
    var Ye, je = {}, gt = null, rt = null;
    if ($ != null)
      for (Ye in $.ref !== void 0 && (rt = $.ref), $.key !== void 0 && (gt = "" + $.key), $)
        _e.call($, Ye) && !He.hasOwnProperty(Ye) && (je[Ye] = $[Ye]);
    var pt = arguments.length - 2;
    if (pt === 1)
      je.children = ue;
    else if (1 < pt) {
      for (var at = Array(pt), Ft = 0; Ft < pt; Ft++)
        at[Ft] = arguments[Ft + 2];
      je.children = at;
    }
    if (T && T.defaultProps)
      for (Ye in pt = T.defaultProps, pt)
        je[Ye] === void 0 && (je[Ye] = pt[Ye]);
    return { $$typeof: j, type: T, key: gt, ref: rt, props: je, _owner: ut.current };
  }
  function bn(T, $) {
    return { $$typeof: j, type: T.type, key: $, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Qt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === j;
  }
  function Ot(T) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ue) {
      return $[ue];
    });
  }
  var En = /\/+/g;
  function Ae(T, $) {
    return typeof T == "object" && T !== null && T.key != null ? Ot("" + T.key) : $.toString(36);
  }
  function Ze(T, $, ue, Ye, je) {
    var gt = typeof T;
    (gt === "undefined" || gt === "boolean") && (T = null);
    var rt = !1;
    if (T === null)
      rt = !0;
    else
      switch (gt) {
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case j:
            case Y:
              rt = !0;
          }
      }
    if (rt)
      return rt = T, je = je(rt), T = Ye === "" ? "." + Ae(rt, 0) : Ye, dt(je) ? (ue = "", T != null && (ue = T.replace(En, "$&/") + "/"), Ze(je, $, ue, "", function(Ft) {
        return Ft;
      })) : je != null && (Qt(je) && (je = bn(je, ue + (!je.key || rt && rt.key === je.key ? "" : ("" + je.key).replace(En, "$&/") + "/") + T)), $.push(je)), 1;
    if (rt = 0, Ye = Ye === "" ? "." : Ye + ":", dt(T))
      for (var pt = 0; pt < T.length; pt++) {
        gt = T[pt];
        var at = Ye + Ae(gt, pt);
        rt += Ze(gt, $, ue, at, je);
      }
    else if (at = ie(T), typeof at == "function")
      for (T = at.call(T), pt = 0; !(gt = T.next()).done; )
        gt = gt.value, at = Ye + Ae(gt, pt++), rt += Ze(gt, $, ue, at, je);
    else if (gt === "object")
      throw $ = String(T), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return rt;
  }
  function At(T, $, ue) {
    if (T == null)
      return T;
    var Ye = [], je = 0;
    return Ze(T, Ye, "", "", function(gt) {
      return $.call(ue, gt, je++);
    }), Ye;
  }
  function bt(T) {
    if (T._status === -1) {
      var $ = T._result;
      $ = $(), $.then(function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ue);
      }, function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ue);
      }), T._status === -1 && (T._status = 0, T._result = $);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var ye = { current: null }, J = { transition: null }, we = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: J, ReactCurrentOwner: ut };
  return Tt.Children = { map: At, forEach: function(T, $, ue) {
    At(T, function() {
      $.apply(this, arguments);
    }, ue);
  }, count: function(T) {
    var $ = 0;
    return At(T, function() {
      $++;
    }), $;
  }, toArray: function(T) {
    return At(T, function($) {
      return $;
    }) || [];
  }, only: function(T) {
    if (!Qt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Tt.Component = Ie, Tt.Fragment = M, Tt.Profiler = yt, Tt.PureComponent = lt, Tt.StrictMode = ft, Tt.Suspense = de, Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Tt.cloneElement = function(T, $, ue) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Ye = xe({}, T.props), je = T.key, gt = T.ref, rt = T._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (gt = $.ref, rt = ut.current), $.key !== void 0 && (je = "" + $.key), T.type && T.type.defaultProps)
        var pt = T.type.defaultProps;
      for (at in $)
        _e.call($, at) && !He.hasOwnProperty(at) && (Ye[at] = $[at] === void 0 && pt !== void 0 ? pt[at] : $[at]);
    }
    var at = arguments.length - 2;
    if (at === 1)
      Ye.children = ue;
    else if (1 < at) {
      pt = Array(at);
      for (var Ft = 0; Ft < at; Ft++)
        pt[Ft] = arguments[Ft + 2];
      Ye.children = pt;
    }
    return { $$typeof: j, type: T.type, key: je, ref: gt, props: Ye, _owner: rt };
  }, Tt.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: Pe, _context: T }, T.Consumer = T;
  }, Tt.createElement = rn, Tt.createFactory = function(T) {
    var $ = rn.bind(null, T);
    return $.type = T, $;
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(T) {
    return { $$typeof: wt, render: T };
  }, Tt.isValidElement = Qt, Tt.lazy = function(T) {
    return { $$typeof: nt, _payload: { _status: -1, _result: T }, _init: bt };
  }, Tt.memo = function(T, $) {
    return { $$typeof: se, type: T, compare: $ === void 0 ? null : $ };
  }, Tt.startTransition = function(T) {
    var $ = J.transition;
    J.transition = {};
    try {
      T();
    } finally {
      J.transition = $;
    }
  }, Tt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Tt.useCallback = function(T, $) {
    return ye.current.useCallback(T, $);
  }, Tt.useContext = function(T) {
    return ye.current.useContext(T);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(T) {
    return ye.current.useDeferredValue(T);
  }, Tt.useEffect = function(T, $) {
    return ye.current.useEffect(T, $);
  }, Tt.useId = function() {
    return ye.current.useId();
  }, Tt.useImperativeHandle = function(T, $, ue) {
    return ye.current.useImperativeHandle(T, $, ue);
  }, Tt.useInsertionEffect = function(T, $) {
    return ye.current.useInsertionEffect(T, $);
  }, Tt.useLayoutEffect = function(T, $) {
    return ye.current.useLayoutEffect(T, $);
  }, Tt.useMemo = function(T, $) {
    return ye.current.useMemo(T, $);
  }, Tt.useReducer = function(T, $, ue) {
    return ye.current.useReducer(T, $, ue);
  }, Tt.useRef = function(T) {
    return ye.current.useRef(T);
  }, Tt.useState = function(T) {
    return ye.current.useState(T);
  }, Tt.useSyncExternalStore = function(T, $, ue) {
    return ye.current.useSyncExternalStore(T, $, ue);
  }, Tt.useTransition = function() {
    return ye.current.useTransition();
  }, Tt.version = "18.2.0", Tt;
}
var Xp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Xp.exports;
var tR;
function tD() {
  return tR || (tR = 1, function(j, Y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.2.0", ft = Symbol.for("react.element"), yt = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), wt = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), se = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), Xe = Symbol.for("react.offscreen"), Ie = Symbol.iterator, qt = "@@iterator";
      function lt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Ie && h[Ie] || h[qt];
        return typeof C == "function" ? C : null;
      }
      var Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, dt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, rn = null;
      function bn(h) {
        rn = h;
      }
      He.setExtraStackFrame = function(h) {
        rn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Qt = !1, Ot = !1, En = !1, Ae = !1, Ze = !1, At = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: dt,
        ReactCurrentOwner: ut
      };
      At.ReactDebugCurrentFrame = He, At.ReactCurrentActQueue = _e;
      function bt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          J("warn", h, z);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          J("error", h, z);
        }
      }
      function J(h, C, z) {
        {
          var F = At.ReactDebugCurrentFrame, K = F.getStackAddendum();
          K !== "" && (C += "%s", z = z.concat([K]));
          var ze = z.map(function(le) {
            return String(le);
          });
          ze.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ze);
        }
      }
      var we = {};
      function T(h, C) {
        {
          var z = h.constructor, F = z && (z.displayName || z.name) || "ReactClass", K = F + "." + C;
          if (we[K])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), we[K] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
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
        enqueueForceUpdate: function(h, C, z) {
          T(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, z, F) {
          T(h, "replaceState");
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
        enqueueSetState: function(h, C, z, F) {
          T(h, "setState");
        }
      }, ue = Object.assign, Ye = {};
      Object.freeze(Ye);
      function je(h, C, z) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = z || $;
      }
      je.prototype.isReactComponent = {}, je.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, je.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, rt = function(h, C) {
          Object.defineProperty(je.prototype, h, {
            get: function() {
              bt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var pt in gt)
          gt.hasOwnProperty(pt) && rt(pt, gt[pt]);
      }
      function at() {
      }
      at.prototype = je.prototype;
      function Ft(h, C, z) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = z || $;
      }
      var Vr = Ft.prototype = new at();
      Vr.constructor = Ft, ue(Vr, je.prototype), Vr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Pr = Array.isArray;
      function dn(h) {
        return Pr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function An(h) {
        try {
          return Fn(h), !1;
        } catch {
          return !0;
        }
      }
      function Fn(h) {
        return "" + h;
      }
      function xn(h) {
        if (An(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Fn(h);
      }
      function Br(h, C, z) {
        var F = h.displayName;
        if (F)
          return F;
        var K = C.displayName || C.name || "";
        return K !== "" ? z + "(" + K + ")" : z;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Pe:
            return "Fragment";
          case yt:
            return "Portal";
          case wt:
            return "Profiler";
          case S:
            return "StrictMode";
          case X:
            return "Suspense";
          case ie:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              var C = h;
              return $r(C) + ".Consumer";
            case de:
              var z = h;
              return $r(z._context) + ".Provider";
            case nt:
              return Br(h, h.render, "ForwardRef");
            case ae:
              var F = h.displayName || null;
              return F !== null ? F : In(h.type) || "Memo";
            case xe: {
              var K = h, ze = K._payload, le = K._init;
              try {
                return In(le(ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, sa, er;
      er = {};
      function Ir(h) {
        if (vr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (vr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var z = function() {
          hr || (hr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function li(h, C) {
        var z = function() {
          sa || (sa = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && ut.current && h.__self && ut.current.stateNode !== h.__self) {
          var C = In(ut.current.type);
          er[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var ee = function(h, C, z, F, K, ze, le) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ft,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: le,
          // Record the component responsible for creating this element.
          _owner: ze
        };
        return Me._store = {}, Object.defineProperty(Me._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Me, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function be(h, C, z) {
        var F, K = {}, ze = null, le = null, Me = null, st = null;
        if (C != null) {
          Ir(C) && (le = C.ref, ca(C)), pn(C) && (xn(C.key), ze = "" + C.key), Me = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (K[F] = C[F]);
        }
        var Dt = arguments.length - 2;
        if (Dt === 1)
          K.children = z;
        else if (Dt > 1) {
          for (var Xt = Array(Dt), It = 0; It < Dt; It++)
            Xt[It] = arguments[It + 2];
          Object.freeze && Object.freeze(Xt), K.children = Xt;
        }
        if (h && h.defaultProps) {
          var Kt = h.defaultProps;
          for (F in Kt)
            K[F] === void 0 && (K[F] = Kt[F]);
        }
        if (ze || le) {
          var nn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ze && wr(K, nn), le && li(K, nn);
        }
        return ee(h, ze, le, Me, st, ut.current, K);
      }
      function it(h, C) {
        var z = ee(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function zt(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, K = ue({}, h.props), ze = h.key, le = h.ref, Me = h._self, st = h._source, Dt = h._owner;
        if (C != null) {
          Ir(C) && (le = C.ref, Dt = ut.current), pn(C) && (xn(C.key), ze = "" + C.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (C[F] === void 0 && Xt !== void 0 ? K[F] = Xt[F] : K[F] = C[F]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          K.children = z;
        else if (It > 1) {
          for (var Kt = Array(It), nn = 0; nn < It; nn++)
            Kt[nn] = arguments[nn + 2];
          K.children = Kt;
        }
        return ee(h.type, ze, le, Me, st, Dt, K);
      }
      function jt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ft;
      }
      var _n = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(K) {
          return z[K];
        });
        return "$" + F;
      }
      var Yt = !1, br = /\/+/g;
      function Ht(h) {
        return h.replace(br, "$&/");
      }
      function Vt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (xn(h.key), mr("" + h.key)) : C.toString(36);
      }
      function Wa(h, C, z, F, K) {
        var ze = typeof h;
        (ze === "undefined" || ze === "boolean") && (h = null);
        var le = !1;
        if (h === null)
          le = !0;
        else
          switch (ze) {
            case "string":
            case "number":
              le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ft:
                case yt:
                  le = !0;
              }
          }
        if (le) {
          var Me = h, st = K(Me), Dt = F === "" ? _n + Vt(Me, 0) : F;
          if (dn(st)) {
            var Xt = "";
            Dt != null && (Xt = Ht(Dt) + "/"), Wa(st, C, Xt, "", function(Bf) {
              return Bf;
            });
          } else
            st != null && (jt(st) && (st.key && (!Me || Me.key !== st.key) && xn(st.key), st = it(
              st,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (st.key && (!Me || Me.key !== st.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ht("" + st.key) + "/"
              ) : "") + Dt
            )), C.push(st));
          return 1;
        }
        var It, Kt, nn = 0, mt = F === "" ? _n : F + vn;
        if (dn(h))
          for (var Li = 0; Li < h.length; Li++)
            It = h[Li], Kt = mt + Vt(It, Li), nn += Wa(It, C, z, Kt, K);
        else {
          var Xu = lt(h);
          if (typeof Xu == "function") {
            var Xo = h;
            Xu === Xo.entries && (Yt || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Pf = Xu.call(Xo), Ka, Ko = 0; !(Ka = Pf.next()).done; )
              It = Ka.value, Kt = mt + Vt(It, Ko++), nn += Wa(It, C, z, Kt, K);
          } else if (ze === "object") {
            var Zo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Zo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Zo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function ba(h, C, z) {
        if (h == null)
          return h;
        var F = [], K = 0;
        return Wa(h, F, "", "", function(ze) {
          return C.call(z, ze, K++);
        }), F;
      }
      function al(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, z) {
        ba(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function ju(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function Di(h) {
        if (!jt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function il(h) {
        var C = {
          $$typeof: se,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
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
        C.Provider = {
          $$typeof: de,
          _context: C
        };
        var z = !1, F = !1, K = !1;
        {
          var ze = {
            $$typeof: se,
            _context: C
          };
          Object.defineProperties(ze, {
            Provider: {
              get: function() {
                return F || (F = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(le) {
                C.Provider = le;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(le) {
                C._currentValue = le;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(le) {
                C._currentValue2 = le;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(le) {
                C._threadCount = le;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(le) {
                K || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", le), K = !0);
              }
            }
          }), C.Consumer = ze;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, ui = 0, da = 1, oi = 2;
      function xr(h) {
        if (h._status === fa) {
          var C = h._result, z = C();
          if (z.then(function(ze) {
            if (h._status === ui || h._status === fa) {
              var le = h;
              le._status = da, le._result = ze;
            }
          }, function(ze) {
            if (h._status === ui || h._status === fa) {
              var le = h;
              le._status = oi, le._result = ze;
            }
          }), h._status === fa) {
            var F = h;
            F._status = ui, F._result = z;
          }
        }
        if (h._status === da) {
          var K = h._result;
          return K === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, z = {
          $$typeof: xe,
          _payload: C,
          _init: xr
        };
        {
          var F, K;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(ze) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = ze, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(ze) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = ze, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function si(h) {
        h != null && h.$$typeof === ae ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: nt,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(F) {
              z = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Pe || h === wt || Ze || h === S || h === X || h === ie || Ae || h === Xe || Qt || Ot || En || typeof h == "object" && h !== null && (h.$$typeof === xe || h.$$typeof === ae || h.$$typeof === de || h.$$typeof === se || h.$$typeof === nt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function te(h, C) {
        I(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: ae,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(K) {
              F = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return z;
      }
      function pe() {
        var h = Ge.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ke(h) {
        var C = pe();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function St(h) {
        var C = pe();
        return C.useState(h);
      }
      function Je(h, C, z) {
        var F = pe();
        return F.useReducer(h, C, z);
      }
      function Oe(h) {
        var C = pe();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var z = pe();
        return z.useEffect(h, C);
      }
      function en(h, C) {
        var z = pe();
        return z.useInsertionEffect(h, C);
      }
      function tn(h, C) {
        var z = pe();
        return z.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var z = pe();
        return z.useCallback(h, C);
      }
      function ci(h, C) {
        var z = pe();
        return z.useMemo(h, C);
      }
      function Hu(h, C, z) {
        var F = pe();
        return F.useImperativeHandle(h, C, z);
      }
      function xt(h, C) {
        {
          var z = pe();
          return z.useDebugValue(h, C);
        }
      }
      function Hf() {
        var h = pe();
        return h.useTransition();
      }
      function Ga(h) {
        var C = pe();
        return C.useDeferredValue(h);
      }
      function ot() {
        var h = pe();
        return h.useId();
      }
      function fi(h, C, z) {
        var F = pe();
        return F.useSyncExternalStore(h, C, z);
      }
      var ll = 0, Vu, ul, Qr, Qo, _r, Wo, Go;
      function Ks() {
      }
      Ks.__reactDisabledLog = !0;
      function Pu() {
        {
          if (ll === 0) {
            Vu = console.log, ul = console.info, Qr = console.warn, Qo = console.error, _r = console.group, Wo = console.groupCollapsed, Go = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ks,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ll++;
        }
      }
      function ol() {
        {
          if (ll--, ll === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ue({}, h, {
                value: Vu
              }),
              info: ue({}, h, {
                value: ul
              }),
              warn: ue({}, h, {
                value: Qr
              }),
              error: ue({}, h, {
                value: Qo
              }),
              group: ue({}, h, {
                value: _r
              }),
              groupCollapsed: ue({}, h, {
                value: Wo
              }),
              groupEnd: ue({}, h, {
                value: Go
              })
            });
          }
          ll < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qa = At.ReactCurrentDispatcher, Dr;
      function sl(h, C, z) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (K) {
              var F = K.stack.trim().match(/\n( *(at )?)/);
              Dr = F && F[1] || "";
            }
          return `
` + Dr + h;
        }
      }
      var cl = !1, fl;
      {
        var Bu = typeof WeakMap == "function" ? WeakMap : Map;
        fl = new Bu();
      }
      function $u(h, C) {
        if (!h || cl)
          return "";
        {
          var z = fl.get(h);
          if (z !== void 0)
            return z;
        }
        var F;
        cl = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ze;
        ze = qa.current, qa.current = null, Pu();
        try {
          if (C) {
            var le = function() {
              throw Error();
            };
            if (Object.defineProperty(le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(le, []);
              } catch (mt) {
                F = mt;
              }
              Reflect.construct(h, [], le);
            } else {
              try {
                le.call();
              } catch (mt) {
                F = mt;
              }
              h.call(le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (mt) {
              F = mt;
            }
            h();
          }
        } catch (mt) {
          if (mt && F && typeof mt.stack == "string") {
            for (var Me = mt.stack.split(`
`), st = F.stack.split(`
`), Dt = Me.length - 1, Xt = st.length - 1; Dt >= 1 && Xt >= 0 && Me[Dt] !== st[Xt]; )
              Xt--;
            for (; Dt >= 1 && Xt >= 0; Dt--, Xt--)
              if (Me[Dt] !== st[Xt]) {
                if (Dt !== 1 || Xt !== 1)
                  do
                    if (Dt--, Xt--, Xt < 0 || Me[Dt] !== st[Xt]) {
                      var It = `
` + Me[Dt].replace(" at new ", " at ");
                      return h.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", h.displayName)), typeof h == "function" && fl.set(h, It), It;
                    }
                  while (Dt >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          cl = !1, qa.current = ze, ol(), Error.prepareStackTrace = K;
        }
        var Kt = h ? h.displayName || h.name : "", nn = Kt ? sl(Kt) : "";
        return typeof h == "function" && fl.set(h, nn), nn;
      }
      function ki(h, C, z) {
        return $u(h, !1);
      }
      function Vf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function di(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return $u(h, Vf(h));
        if (typeof h == "string")
          return sl(h);
        switch (h) {
          case X:
            return sl("Suspense");
          case ie:
            return sl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case nt:
              return ki(h.render);
            case ae:
              return di(h.type, C, z);
            case xe: {
              var F = h, K = F._payload, ze = F._init;
              try {
                return di(ze(K), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Yu = At.ReactDebugCurrentFrame;
      function ql(h) {
        if (h) {
          var C = h._owner, z = di(h.type, h._source, C ? C.type : null);
          Yu.setExtraStackFrame(z);
        } else
          Yu.setExtraStackFrame(null);
      }
      function Iu(h, C, z, F, K) {
        {
          var ze = Function.call.bind(vr);
          for (var le in h)
            if (ze(h, le)) {
              var Me = void 0;
              try {
                if (typeof h[le] != "function") {
                  var st = Error((F || "React class") + ": " + z + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Me = h[le](C, le, F, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Dt) {
                Me = Dt;
              }
              Me && !(Me instanceof Error) && (ql(K), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, le, typeof Me), ql(null)), Me instanceof Error && !(Me.message in Lt) && (Lt[Me.message] = !0, ql(K), ye("Failed %s type: %s", z, Me.message), ql(null));
            }
        }
      }
      function _t(h) {
        if (h) {
          var C = h._owner, z = di(h.type, h._source, C ? C.type : null);
          bn(z);
        } else
          bn(null);
      }
      var Qu;
      Qu = !1;
      function Wu() {
        if (ut.current) {
          var h = In(ut.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Qe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Xl(h) {
        return h != null ? Qe(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = Wu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function kr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = Wr(C);
          if (!hn[z]) {
            hn[z] = !0;
            var F = "";
            h && h._owner && h._owner !== ut.current && (F = " It was passed a child from " + In(h._owner.type) + "."), _t(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, F), _t(null);
          }
        }
      }
      function dl(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var z = 0; z < h.length; z++) {
              var F = h[z];
              jt(F) && kr(F, C);
            }
          else if (jt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = lt(h);
            if (typeof K == "function" && K !== h.entries)
              for (var ze = K.call(h), le; !(le = ze.next()).done; )
                jt(le.value) && kr(le.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === nt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ae))
            z = C.propTypes;
          else
            return;
          if (z) {
            var F = In(C);
            Iu(z, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Qu) {
            Qu = !0;
            var K = In(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var F = C[z];
            if (F !== "children" && F !== "key") {
              _t(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), _t(null);
              break;
            }
          }
          h.ref !== null && (_t(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
        }
      }
      function Zs(h, C, z) {
        var F = I(h);
        if (!F) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = Xl(C);
          ze ? K += ze : K += Wu();
          var le;
          h === null ? le = "null" : dn(h) ? le = "array" : h !== void 0 && h.$$typeof === ft ? (le = "<" + (In(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, K);
        }
        var Me = be.apply(this, arguments);
        if (Me == null)
          return Me;
        if (F)
          for (var st = 2; st < arguments.length; st++)
            dl(arguments[st], h);
        return h === Pe ? Pt(Me) : Cn(Me), Me;
      }
      var Gr = !1;
      function Qn(h) {
        var C = Zs.bind(null, h);
        return C.type = h, Gr || (Gr = !0, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function pi(h, C, z) {
        for (var F = zt.apply(this, arguments), K = 2; K < arguments.length; K++)
          dl(arguments[K], F.type);
        return Cn(F), F;
      }
      function Js(h, C) {
        var z = dt.transition;
        dt.transition = {};
        var F = dt.transition;
        dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (dt.transition = z, z === null && F._updatedFibers) {
            var K = F._updatedFibers.size;
            K > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Oi = !1, pl = null;
      function ec(h) {
        if (pl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = j && j[C];
            pl = z.call(j, "timers").setImmediate;
          } catch {
            pl = function(K) {
              Oi === !1 && (Oi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ze = new MessageChannel();
              ze.port1.onmessage = K, ze.port2.postMessage(void 0);
            };
          }
        return pl(h);
      }
      var xa = 0, vl = !1;
      function hl(h) {
        {
          var C = xa;
          xa++, _e.current === null && (_e.current = []);
          var z = _e.isBatchingLegacy, F;
          try {
            if (_e.isBatchingLegacy = !0, F = h(), !z && _e.didScheduleLegacyUpdate) {
              var K = _e.current;
              K !== null && (_e.didScheduleLegacyUpdate = !1, yl(K));
            }
          } catch (Kt) {
            throw _a(C), Kt;
          } finally {
            _e.isBatchingLegacy = z;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var ze = F, le = !1, Me = {
              then: function(Kt, nn) {
                le = !0, ze.then(function(mt) {
                  _a(C), xa === 0 ? Gu(mt, Kt, nn) : Kt(mt);
                }, function(mt) {
                  _a(C), nn(mt);
                });
              }
            };
            return !vl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              le || (vl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var st = F;
            if (_a(C), xa === 0) {
              var Dt = _e.current;
              Dt !== null && (yl(Dt), _e.current = null);
              var Xt = {
                then: function(Kt, nn) {
                  _e.current === null ? (_e.current = [], Gu(st, Kt, nn)) : Kt(st);
                }
              };
              return Xt;
            } else {
              var It = {
                then: function(Kt, nn) {
                  Kt(st);
                }
              };
              return It;
            }
          }
        }
      }
      function _a(h) {
        h !== xa - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function Gu(h, C, z) {
        {
          var F = _e.current;
          if (F !== null)
            try {
              yl(F), ec(function() {
                F.length === 0 ? (_e.current = null, C(h)) : Gu(h, C, z);
              });
            } catch (K) {
              z(K);
            }
          else
            C(h);
        }
      }
      var ml = !1;
      function yl(h) {
        if (!ml) {
          ml = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            ml = !1;
          }
        }
      }
      var Kl = Zs, qu = pi, qo = Qn, Xa = {
        map: ba,
        forEach: Gl,
        count: al,
        toArray: ju,
        only: Di
      };
      Y.Children = Xa, Y.Component = je, Y.Fragment = Pe, Y.Profiler = wt, Y.PureComponent = Ft, Y.StrictMode = S, Y.Suspense = X, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, Y.cloneElement = qu, Y.createContext = il, Y.createElement = Kl, Y.createFactory = qo, Y.createRef = pr, Y.forwardRef = si, Y.isValidElement = jt, Y.lazy = pa, Y.memo = te, Y.startTransition = Js, Y.unstable_act = hl, Y.useCallback = tr, Y.useContext = Ke, Y.useDebugValue = xt, Y.useDeferredValue = Ga, Y.useEffect = Ln, Y.useId = ot, Y.useImperativeHandle = Hu, Y.useInsertionEffect = en, Y.useLayoutEffect = tn, Y.useMemo = ci, Y.useReducer = Je, Y.useRef = Oe, Y.useState = St, Y.useSyncExternalStore = fi, Y.useTransition = Hf, Y.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Xp, Xp.exports)), Xp.exports;
}
process.env.NODE_ENV === "production" ? m0.exports = eD() : m0.exports = tD();
var Xs = m0.exports;
const fR = /* @__PURE__ */ cR(Xs);
var y0 = { exports: {} }, Ia = {}, Am = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function nD() {
  return nR || (nR = 1, function(j) {
    function Y(J, we) {
      var T = J.length;
      J.push(we);
      e:
        for (; 0 < T; ) {
          var $ = T - 1 >>> 1, ue = J[$];
          if (0 < yt(ue, we))
            J[$] = we, J[T] = ue, T = $;
          else
            break e;
        }
    }
    function M(J) {
      return J.length === 0 ? null : J[0];
    }
    function ft(J) {
      if (J.length === 0)
        return null;
      var we = J[0], T = J.pop();
      if (T !== we) {
        J[0] = T;
        e:
          for (var $ = 0, ue = J.length, Ye = ue >>> 1; $ < Ye; ) {
            var je = 2 * ($ + 1) - 1, gt = J[je], rt = je + 1, pt = J[rt];
            if (0 > yt(gt, T))
              rt < ue && 0 > yt(pt, gt) ? (J[$] = pt, J[rt] = T, $ = rt) : (J[$] = gt, J[je] = T, $ = je);
            else if (rt < ue && 0 > yt(pt, T))
              J[$] = pt, J[rt] = T, $ = rt;
            else
              break e;
          }
      }
      return we;
    }
    function yt(J, we) {
      var T = J.sortIndex - we.sortIndex;
      return T !== 0 ? T : J.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Pe = performance;
      j.unstable_now = function() {
        return Pe.now();
      };
    } else {
      var S = Date, wt = S.now();
      j.unstable_now = function() {
        return S.now() - wt;
      };
    }
    var de = [], se = [], nt = 1, X = null, ie = 3, ae = !1, xe = !1, Xe = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, qt = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ge(J) {
      for (var we = M(se); we !== null; ) {
        if (we.callback === null)
          ft(se);
        else if (we.startTime <= J)
          ft(se), we.sortIndex = we.expirationTime, Y(de, we);
        else
          break;
        we = M(se);
      }
    }
    function dt(J) {
      if (Xe = !1, Ge(J), !xe)
        if (M(de) !== null)
          xe = !0, bt(_e);
        else {
          var we = M(se);
          we !== null && ye(dt, we.startTime - J);
        }
    }
    function _e(J, we) {
      xe = !1, Xe && (Xe = !1, qt(rn), rn = -1), ae = !0;
      var T = ie;
      try {
        for (Ge(we), X = M(de); X !== null && (!(X.expirationTime > we) || J && !Ot()); ) {
          var $ = X.callback;
          if (typeof $ == "function") {
            X.callback = null, ie = X.priorityLevel;
            var ue = $(X.expirationTime <= we);
            we = j.unstable_now(), typeof ue == "function" ? X.callback = ue : X === M(de) && ft(de), Ge(we);
          } else
            ft(de);
          X = M(de);
        }
        if (X !== null)
          var Ye = !0;
        else {
          var je = M(se);
          je !== null && ye(dt, je.startTime - we), Ye = !1;
        }
        return Ye;
      } finally {
        X = null, ie = T, ae = !1;
      }
    }
    var ut = !1, He = null, rn = -1, bn = 5, Qt = -1;
    function Ot() {
      return !(j.unstable_now() - Qt < bn);
    }
    function En() {
      if (He !== null) {
        var J = j.unstable_now();
        Qt = J;
        var we = !0;
        try {
          we = He(!0, J);
        } finally {
          we ? Ae() : (ut = !1, He = null);
        }
      } else
        ut = !1;
    }
    var Ae;
    if (typeof lt == "function")
      Ae = function() {
        lt(En);
      };
    else if (typeof MessageChannel < "u") {
      var Ze = new MessageChannel(), At = Ze.port2;
      Ze.port1.onmessage = En, Ae = function() {
        At.postMessage(null);
      };
    } else
      Ae = function() {
        Ie(En, 0);
      };
    function bt(J) {
      He = J, ut || (ut = !0, Ae());
    }
    function ye(J, we) {
      rn = Ie(function() {
        J(j.unstable_now());
      }, we);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, j.unstable_continueExecution = function() {
      xe || ae || (xe = !0, bt(_e));
    }, j.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bn = 0 < J ? Math.floor(1e3 / J) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return ie;
    }, j.unstable_getFirstCallbackNode = function() {
      return M(de);
    }, j.unstable_next = function(J) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = ie;
      }
      var T = ie;
      ie = we;
      try {
        return J();
      } finally {
        ie = T;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(J, we) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var T = ie;
      ie = J;
      try {
        return we();
      } finally {
        ie = T;
      }
    }, j.unstable_scheduleCallback = function(J, we, T) {
      var $ = j.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? $ + T : $) : T = $, J) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = T + ue, J = { id: nt++, callback: we, priorityLevel: J, startTime: T, expirationTime: ue, sortIndex: -1 }, T > $ ? (J.sortIndex = T, Y(se, J), M(de) === null && J === M(se) && (Xe ? (qt(rn), rn = -1) : Xe = !0, ye(dt, T - $))) : (J.sortIndex = ue, Y(de, J), xe || ae || (xe = !0, bt(_e))), J;
    }, j.unstable_shouldYield = Ot, j.unstable_wrapCallback = function(J) {
      var we = ie;
      return function() {
        var T = ie;
        ie = we;
        try {
          return J.apply(this, arguments);
        } finally {
          ie = T;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rR;
function rD() {
  return rR || (rR = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Y = !1, M = !1, ft = 5;
      function yt(ee, be) {
        var it = ee.length;
        ee.push(be), wt(ee, be, it);
      }
      function Pe(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function S(ee) {
        if (ee.length === 0)
          return null;
        var be = ee[0], it = ee.pop();
        return it !== be && (ee[0] = it, de(ee, it, 0)), be;
      }
      function wt(ee, be, it) {
        for (var zt = it; zt > 0; ) {
          var jt = zt - 1 >>> 1, _n = ee[jt];
          if (se(_n, be) > 0)
            ee[jt] = be, ee[zt] = _n, zt = jt;
          else
            return;
        }
      }
      function de(ee, be, it) {
        for (var zt = it, jt = ee.length, _n = jt >>> 1; zt < _n; ) {
          var vn = (zt + 1) * 2 - 1, mr = ee[vn], Yt = vn + 1, br = ee[Yt];
          if (se(mr, be) < 0)
            Yt < jt && se(br, mr) < 0 ? (ee[zt] = br, ee[Yt] = be, zt = Yt) : (ee[zt] = mr, ee[vn] = be, zt = vn);
          else if (Yt < jt && se(br, be) < 0)
            ee[zt] = br, ee[Yt] = be, zt = Yt;
          else
            return;
        }
      }
      function se(ee, be) {
        var it = ee.sortIndex - be.sortIndex;
        return it !== 0 ? it : ee.id - be.id;
      }
      var nt = 1, X = 2, ie = 3, ae = 4, xe = 5;
      function Xe(ee, be) {
      }
      var Ie = typeof performance == "object" && typeof performance.now == "function";
      if (Ie) {
        var qt = performance;
        j.unstable_now = function() {
          return qt.now();
        };
      } else {
        var lt = Date, Ge = lt.now();
        j.unstable_now = function() {
          return lt.now() - Ge;
        };
      }
      var dt = 1073741823, _e = -1, ut = 250, He = 5e3, rn = 1e4, bn = dt, Qt = [], Ot = [], En = 1, Ae = null, Ze = ie, At = !1, bt = !1, ye = !1, J = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ee) {
        for (var be = Pe(Ot); be !== null; ) {
          if (be.callback === null)
            S(Ot);
          else if (be.startTime <= ee)
            S(Ot), be.sortIndex = be.expirationTime, yt(Qt, be);
          else
            return;
          be = Pe(Ot);
        }
      }
      function ue(ee) {
        if (ye = !1, $(ee), !bt)
          if (Pe(Qt) !== null)
            bt = !0, Ir(Ye);
          else {
            var be = Pe(Ot);
            be !== null && pn(ue, be.startTime - ee);
          }
      }
      function Ye(ee, be) {
        bt = !1, ye && (ye = !1, wr()), At = !0;
        var it = Ze;
        try {
          var zt;
          if (!M)
            return je(ee, be);
        } finally {
          Ae = null, Ze = it, At = !1;
        }
      }
      function je(ee, be) {
        var it = be;
        for ($(it), Ae = Pe(Qt); Ae !== null && !Y && !(Ae.expirationTime > it && (!ee || $r())); ) {
          var zt = Ae.callback;
          if (typeof zt == "function") {
            Ae.callback = null, Ze = Ae.priorityLevel;
            var jt = Ae.expirationTime <= it, _n = zt(jt);
            it = j.unstable_now(), typeof _n == "function" ? Ae.callback = _n : Ae === Pe(Qt) && S(Qt), $(it);
          } else
            S(Qt);
          Ae = Pe(Qt);
        }
        if (Ae !== null)
          return !0;
        var vn = Pe(Ot);
        return vn !== null && pn(ue, vn.startTime - it), !1;
      }
      function gt(ee, be) {
        switch (ee) {
          case nt:
          case X:
          case ie:
          case ae:
          case xe:
            break;
          default:
            ee = ie;
        }
        var it = Ze;
        Ze = ee;
        try {
          return be();
        } finally {
          Ze = it;
        }
      }
      function rt(ee) {
        var be;
        switch (Ze) {
          case nt:
          case X:
          case ie:
            be = ie;
            break;
          default:
            be = Ze;
            break;
        }
        var it = Ze;
        Ze = be;
        try {
          return ee();
        } finally {
          Ze = it;
        }
      }
      function pt(ee) {
        var be = Ze;
        return function() {
          var it = Ze;
          Ze = be;
          try {
            return ee.apply(this, arguments);
          } finally {
            Ze = it;
          }
        };
      }
      function at(ee, be, it) {
        var zt = j.unstable_now(), jt;
        if (typeof it == "object" && it !== null) {
          var _n = it.delay;
          typeof _n == "number" && _n > 0 ? jt = zt + _n : jt = zt;
        } else
          jt = zt;
        var vn;
        switch (ee) {
          case nt:
            vn = _e;
            break;
          case X:
            vn = ut;
            break;
          case xe:
            vn = bn;
            break;
          case ae:
            vn = rn;
            break;
          case ie:
          default:
            vn = He;
            break;
        }
        var mr = jt + vn, Yt = {
          id: En++,
          callback: be,
          priorityLevel: ee,
          startTime: jt,
          expirationTime: mr,
          sortIndex: -1
        };
        return jt > zt ? (Yt.sortIndex = jt, yt(Ot, Yt), Pe(Qt) === null && Yt === Pe(Ot) && (ye ? wr() : ye = !0, pn(ue, jt - zt))) : (Yt.sortIndex = mr, yt(Qt, Yt), !bt && !At && (bt = !0, Ir(Ye))), Yt;
      }
      function Ft() {
      }
      function Vr() {
        !bt && !At && (bt = !0, Ir(Ye));
      }
      function pr() {
        return Pe(Qt);
      }
      function Pr(ee) {
        ee.callback = null;
      }
      function dn() {
        return Ze;
      }
      var Yn = !1, An = null, Fn = -1, xn = ft, Br = -1;
      function $r() {
        var ee = j.unstable_now() - Br;
        return !(ee < xn);
      }
      function In() {
      }
      function vr(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? xn = Math.floor(1e3 / ee) : xn = ft;
      }
      var Yr = function() {
        if (An !== null) {
          var ee = j.unstable_now();
          Br = ee;
          var be = !0, it = !0;
          try {
            it = An(be, ee);
          } finally {
            it ? hr() : (Yn = !1, An = null);
          }
        } else
          Yn = !1;
      }, hr;
      if (typeof T == "function")
        hr = function() {
          T(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var sa = new MessageChannel(), er = sa.port2;
        sa.port1.onmessage = Yr, hr = function() {
          er.postMessage(null);
        };
      } else
        hr = function() {
          J(Yr, 0);
        };
      function Ir(ee) {
        An = ee, Yn || (Yn = !0, hr());
      }
      function pn(ee, be) {
        Fn = J(function() {
          ee(j.unstable_now());
        }, be);
      }
      function wr() {
        we(Fn), Fn = -1;
      }
      var li = In, ca = null;
      j.unstable_IdlePriority = xe, j.unstable_ImmediatePriority = nt, j.unstable_LowPriority = ae, j.unstable_NormalPriority = ie, j.unstable_Profiling = ca, j.unstable_UserBlockingPriority = X, j.unstable_cancelCallback = Pr, j.unstable_continueExecution = Vr, j.unstable_forceFrameRate = vr, j.unstable_getCurrentPriorityLevel = dn, j.unstable_getFirstCallbackNode = pr, j.unstable_next = rt, j.unstable_pauseExecution = Ft, j.unstable_requestPaint = li, j.unstable_runWithPriority = gt, j.unstable_scheduleCallback = at, j.unstable_shouldYield = $r, j.unstable_wrapCallback = pt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var aR;
function dR() {
  return aR || (aR = 1, process.env.NODE_ENV === "production" ? Am.exports = nD() : Am.exports = rD()), Am.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function aD() {
  if (iR)
    return Ia;
  iR = 1;
  var j = Xs, Y = dR();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ft = /* @__PURE__ */ new Set(), yt = {};
  function Pe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (yt[n] = r, n = 0; n < r.length; n++)
      ft.add(r[n]);
  }
  var wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), de = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nt = {}, X = {};
  function ie(n) {
    return de.call(X, n) ? !0 : de.call(nt, n) ? !1 : se.test(n) ? X[n] = !0 : (nt[n] = !0, !1);
  }
  function ae(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function xe(n, r, l, o) {
    if (r === null || typeof r > "u" || ae(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Xe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ie = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ie[n] = new Xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ie[r] = new Xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ie[n] = new Xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ie[n] = new Xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ie[n] = new Xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ie[n] = new Xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ie[n] = new Xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ie[n] = new Xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ie[n] = new Xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var qt = /[\-:]([a-z])/g;
  function lt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      qt,
      lt
    );
    Ie[r] = new Xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(qt, lt);
    Ie[r] = new Xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(qt, lt);
    Ie[r] = new Xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ie[n] = new Xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ie.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ie[n] = new Xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ge(n, r, l, o) {
    var c = Ie.hasOwnProperty(r) ? Ie[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (xe(r, l, c, o) && (l = null), o || c === null ? ie(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var dt = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), ut = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), Ot = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, $;
  function ue(n) {
    if ($ === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        $ = r && r[1] || "";
      }
    return `
` + $ + n;
  }
  var Ye = !1;
  function je(n, r) {
    if (!n || Ye)
      return "";
    Ye = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Ye = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ue(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return ue(n.type);
      case 16:
        return ue("Lazy");
      case 13:
        return ue("Suspense");
      case 19:
        return ue("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = je(n.type, !1), n;
      case 11:
        return n = je(n.type.render, !1), n;
      case 1:
        return n = je(n.type, !0), n;
      default:
        return "";
    }
  }
  function rt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case He:
        return "Fragment";
      case ut:
        return "Portal";
      case bn:
        return "Profiler";
      case rn:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ot:
          return (n.displayName || "Context") + ".Consumer";
        case Qt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case At:
          return r = n.displayName || null, r !== null ? r : rt(n.type) || "Memo";
        case bt:
          r = n._payload, n = n._init;
          try {
            return rt(n(r));
          } catch {
          }
      }
    return null;
  }
  function pt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return rt(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function at(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vr(n) {
    var r = Ft(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function pr(n) {
    n._valueTracker || (n._valueTracker = Vr(n));
  }
  function Pr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ft(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function An(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Fn(n, r) {
    r = r.checked, r != null && Ge(n, "checked", r, !1);
  }
  function xn(n, r) {
    Fn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function $r(n, r, l) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var In = Array.isArray;
  function vr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + at(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(M(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(M(92));
        if (In(l)) {
          if (1 < l.length)
            throw Error(M(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function sa(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function er(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function it(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = it(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var jt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _n(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(M(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var br = null, Ht = null, Vt = null;
  function Wa(n) {
    if (n = ss(n)) {
      if (typeof br != "function")
        throw Error(M(280));
      var r = n.stateNode;
      r && (r = ke(r), br(n.stateNode, n.type, r));
    }
  }
  function ba(n) {
    Ht ? Vt ? Vt.push(n) : Vt = [n] : Ht = n;
  }
  function al() {
    if (Ht) {
      var n = Ht, r = Vt;
      if (Vt = Ht = null, Wa(n), r)
        for (n = 0; n < r.length; n++)
          Wa(r[n]);
    }
  }
  function Gl(n, r) {
    return n(r);
  }
  function ju() {
  }
  var Di = !1;
  function il(n, r, l) {
    if (Di)
      return n(r, l);
    Di = !0;
    try {
      return Gl(n, r, l);
    } finally {
      Di = !1, (Ht !== null || Vt !== null) && (ju(), al());
    }
  }
  function fa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = ke(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(M(231, r, typeof l));
    return l;
  }
  var ui = !1;
  if (wt)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        ui = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      ui = !1;
    }
  function oi(n, r, l, o, c, d, m, E, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (W) {
      this.onError(W);
    }
  }
  var xr = !1, pa = null, si = !1, R = null, I = { onError: function(n) {
    xr = !0, pa = n;
  } };
  function te(n, r, l, o, c, d, m, E, w) {
    xr = !1, pa = null, oi.apply(I, arguments);
  }
  function pe(n, r, l, o, c, d, m, E, w) {
    if (te.apply(this, arguments), xr) {
      if (xr) {
        var A = pa;
        xr = !1, pa = null;
      } else
        throw Error(M(198));
      si || (si = !0, R = A);
    }
  }
  function Ke(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function St(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Je(n) {
    if (Ke(n) !== n)
      throw Error(M(188));
  }
  function Oe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ke(n), r === null)
        throw Error(M(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Je(c), n;
          if (d === o)
            return Je(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(M(189));
        }
      }
      if (l.alternate !== o)
        throw Error(M(190));
    }
    if (l.tag !== 3)
      throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = Oe(n), n !== null ? en(n) : null;
  }
  function en(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = en(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var tn = Y.unstable_scheduleCallback, tr = Y.unstable_cancelCallback, ci = Y.unstable_shouldYield, Hu = Y.unstable_requestPaint, xt = Y.unstable_now, Hf = Y.unstable_getCurrentPriorityLevel, Ga = Y.unstable_ImmediatePriority, ot = Y.unstable_UserBlockingPriority, fi = Y.unstable_NormalPriority, ll = Y.unstable_LowPriority, Vu = Y.unstable_IdlePriority, ul = null, Qr = null;
  function Qo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var _r = Math.clz32 ? Math.clz32 : Ks, Wo = Math.log, Go = Math.LN2;
  function Ks(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wo(n) / Go | 0) | 0;
  }
  var Pu = 64, ol = 4194304;
  function qa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Dr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qa(E) : (d &= m, d !== 0 && (o = qa(d)));
    } else
      m = l & ~c, m !== 0 ? o = qa(m) : d !== 0 && (o = qa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - _r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = sl(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function fl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bu() {
    var n = Pu;
    return Pu <<= 1, !(Pu & 4194240) && (Pu = 64), n;
  }
  function $u(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function Vf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - _r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function di(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Yu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ql, Iu, _t, Qu, Wu, Qe = !1, Xl = [], hn = null, Wr = null, kr = null, dl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Pt = [], Zs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        kr = null;
        break;
      case "pointerover":
      case "pointerout":
        dl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && Iu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function pi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return kr = Qn(kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return dl.set(d, Qn(dl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Js(n) {
    var r = ka(n.target);
    if (r !== null) {
      var l = Ke(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = St(l), r !== null) {
            n.blockedOn = r, Wu(n.priority, function() {
              _t(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Oi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = qu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mr = o, l.target.dispatchEvent(o), mr = null;
      } else
        return r = ss(l), r !== null && Iu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, l) {
    Oi(n) && l.delete(r);
  }
  function ec() {
    Qe = !1, hn !== null && Oi(hn) && (hn = null), Wr !== null && Oi(Wr) && (Wr = null), kr !== null && Oi(kr) && (kr = null), dl.forEach(pl), Cn.forEach(pl);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Qe || (Qe = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, ec)));
  }
  function vl(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < Xl.length) {
      xa(Xl[0], n);
      for (var l = 1; l < Xl.length; l++) {
        var o = Xl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && xa(hn, n), Wr !== null && xa(Wr, n), kr !== null && xa(kr, n), dl.forEach(r), Cn.forEach(r), l = 0; l < Pt.length; l++)
      o = Pt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Pt.length && (l = Pt[0], l.blockedOn === null); )
      Js(l), l.blockedOn === null && Pt.shift();
  }
  var hl = dt.ReactCurrentBatchConfig, _a = !0;
  function Gu(n, r, l, o) {
    var c = Lt, d = hl.transition;
    hl.transition = null;
    try {
      Lt = 1, yl(n, r, l, o);
    } finally {
      Lt = c, hl.transition = d;
    }
  }
  function ml(n, r, l, o) {
    var c = Lt, d = hl.transition;
    hl.transition = null;
    try {
      Lt = 4, yl(n, r, l, o);
    } finally {
      Lt = c, hl.transition = d;
    }
  }
  function yl(n, r, l, o) {
    if (_a) {
      var c = qu(n, r, l, o);
      if (c === null)
        sc(n, r, o, Kl, l), Gr(n, o);
      else if (pi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Zs.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && ql(d), d = qu(n, r, l, o), d === null && sc(n, r, o, Kl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        sc(n, r, o, null, l);
    }
  }
  var Kl = null;
  function qu(n, r, l, o) {
    if (Kl = null, n = Yt(o), n = ka(n), n !== null)
      if (r = Ke(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = St(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Kl = n, null;
  }
  function qo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Hf()) {
          case Ga:
            return 1;
          case ot:
            return 4;
          case fi:
          case ll:
            return 16;
          case Vu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xa = null, h = null, C = null;
  function z() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Xa ? Xa.value : Xa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function ze() {
    return !1;
  }
  function le(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : ze, this.isPropagationStopped = ze, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = le(Me), Dt = T({}, Me, { view: 0, detail: 0 }), Xt = le(Dt), It, Kt, nn, mt = T({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: If, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (It = n.screenX - nn.screenX, Kt = n.screenY - nn.screenY) : Kt = It = 0, nn = n), It);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), Li = le(mt), Xu = T({}, mt, { dataTransfer: 0 }), Xo = le(Xu), Pf = T({}, Dt, { relatedTarget: 0 }), Ka = le(Pf), Ko = T({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zo = le(Ko), Bf = T({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Vm = le(Bf), Pm = T({}, Me, { data: 0 }), $f = le(Pm), Yf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Kp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zp[n]) ? !!r[n] : !1;
  }
  function If() {
    return Jp;
  }
  var Mi = T({}, Dt, { key: function(n) {
    if (n.key) {
      var r = Yf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Kp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: If, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bm = le(Mi), Qf = T({}, mt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tc = le(Qf), Wf = T({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: If }), $m = le(Wf), nc = T({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ev = le(nc), qr = T({}, mt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ni = le(qr), Mn = [9, 13, 27, 32], Za = wt && "CompositionEvent" in window, Zl = null;
  wt && "documentMode" in document && (Zl = document.documentMode);
  var rc = wt && "TextEvent" in window && !Zl, tv = wt && (!Za || Zl && 8 < Zl && 11 >= Zl), Ku = String.fromCharCode(32), nv = !1;
  function rv(n, r) {
    switch (n) {
      case "keyup":
        return Mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ac(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Zu = !1;
  function Ym(n, r) {
    switch (n) {
      case "compositionend":
        return ac(r);
      case "keypress":
        return r.which !== 32 ? null : (nv = !0, Ku);
      case "textInput":
        return n = r.data, n === Ku && nv ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (Zu)
      return n === "compositionend" || !Za && rv(n, r) ? (n = z(), C = h = Xa = null, Zu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return tv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var av = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function iv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!av[n.type] : r === "textarea";
  }
  function lv(n, r, l, o) {
    ba(o), r = ls(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Jo = null, Ju = null;
  function eo(n) {
    oc(n, 0);
  }
  function to(n) {
    var r = ro(n);
    if (Pr(r))
      return n;
  }
  function uv(n, r) {
    if (n === "change")
      return r;
  }
  var Gf = !1;
  if (wt) {
    var qf;
    if (wt) {
      var Xf = "oninput" in document;
      if (!Xf) {
        var ov = document.createElement("div");
        ov.setAttribute("oninput", "return;"), Xf = typeof ov.oninput == "function";
      }
      qf = Xf;
    } else
      qf = !1;
    Gf = qf && (!document.documentMode || 9 < document.documentMode);
  }
  function sv() {
    Jo && (Jo.detachEvent("onpropertychange", cv), Ju = Jo = null);
  }
  function cv(n) {
    if (n.propertyName === "value" && to(Ju)) {
      var r = [];
      lv(r, Ju, n, Yt(n)), il(eo, r);
    }
  }
  function Qm(n, r, l) {
    n === "focusin" ? (sv(), Jo = r, Ju = l, Jo.attachEvent("onpropertychange", cv)) : n === "focusout" && sv();
  }
  function Wm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return to(Ju);
  }
  function Gm(n, r) {
    if (n === "click")
      return to(r);
  }
  function fv(n, r) {
    if (n === "input" || n === "change")
      return to(r);
  }
  function qm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Da = typeof Object.is == "function" ? Object.is : qm;
  function es(n, r) {
    if (Da(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!de.call(r, c) || !Da(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function dv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function pv(n, r) {
    var l = dv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = dv(l);
    }
  }
  function vv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ic() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function zi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lc(n) {
    var r = ic(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vv(l.ownerDocument.documentElement, l)) {
      if (o !== null && zi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = pv(l, d);
          var m = pv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var hv = wt && "documentMode" in document && 11 >= document.documentMode, Ja = null, Kf = null, ts = null, Zf = !1;
  function mv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Zf || Ja == null || Ja !== dn(o) || (o = Ja, "selectionStart" in o && zi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && es(ts, o) || (ts = o, o = ls(Kf, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ja)));
  }
  function uc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Jl = { animationend: uc("Animation", "AnimationEnd"), animationiteration: uc("Animation", "AnimationIteration"), animationstart: uc("Animation", "AnimationStart"), transitionend: uc("Transition", "TransitionEnd") }, Jf = {}, ed = {};
  wt && (ed = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function Wn(n) {
    if (Jf[n])
      return Jf[n];
    if (!Jl[n])
      return n;
    var r = Jl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in ed)
        return Jf[n] = r[l];
    return n;
  }
  var td = Wn("animationend"), yv = Wn("animationiteration"), gv = Wn("animationstart"), Sv = Wn("transitionend"), Ev = /* @__PURE__ */ new Map(), Cv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ui(n, r) {
    Ev.set(n, r), Pe(r, [n]);
  }
  for (var ns = 0; ns < Cv.length; ns++) {
    var eu = Cv[ns], Xm = eu.toLowerCase(), rs = eu[0].toUpperCase() + eu.slice(1);
    Ui(Xm, "on" + rs);
  }
  Ui(td, "onAnimationEnd"), Ui(yv, "onAnimationIteration"), Ui(gv, "onAnimationStart"), Ui("dblclick", "onDoubleClick"), Ui("focusin", "onFocus"), Ui("focusout", "onBlur"), Ui(Sv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Pe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Pe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Pe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Pe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Pe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Km = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function Rv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, pe(o, r, void 0, n), n.currentTarget = null;
  }
  function oc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], w = E.instance, A = E.currentTarget;
            if (E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Rv(c, E, A), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Rv(c, E, A), d = w;
          }
      }
    }
    if (si)
      throw n = R, si = !1, R = null, n;
  }
  function Zt(n, r) {
    var l = r[od];
    l === void 0 && (l = r[od] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function gl(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function no(n) {
    if (!n[Ai]) {
      n[Ai] = !0, ft.forEach(function(l) {
        l !== "selectionchange" && (Km.has(l) || gl(l, !1, n), gl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ai] || (r[Ai] = !0, gl("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (qo(r)) {
      case 1:
        var c = Gu;
        break;
      case 4:
        c = ml;
        break;
      default:
        c = yl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ui || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = ka(E), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    il(function() {
      var A = d, W = Yt(l), G = [];
      e: {
        var Q = Ev.get(n);
        if (Q !== void 0) {
          var ce = st, ge = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ce = Bm;
              break;
            case "focusin":
              ge = "focus", ce = Ka;
              break;
            case "focusout":
              ge = "blur", ce = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Ka;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = $m;
              break;
            case td:
            case yv:
            case gv:
              ce = Zo;
              break;
            case Sv:
              ce = ev;
              break;
            case "scroll":
              ce = Xt;
              break;
            case "wheel":
              ce = Ni;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = tc;
          }
          var Ce = (r & 4) !== 0, kn = !Ce && n === "scroll", D = Ce ? Q !== null ? Q + "Capture" : null : Q;
          Ce = [];
          for (var x = A, L; x !== null; ) {
            L = x;
            var Z = L.stateNode;
            if (L.tag === 5 && Z !== null && (L = Z, D !== null && (Z = fa(x, D), Z != null && Ce.push(is(x, Z, L)))), kn)
              break;
            x = x.return;
          }
          0 < Ce.length && (Q = new ce(Q, ge, null, l, W), G.push({ event: Q, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", Q && l !== mr && (ge = l.relatedTarget || l.fromElement) && (ka(ge) || ge[Fi]))
            break e;
          if ((ce || Q) && (Q = W.window === W ? W : (Q = W.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ce ? (ge = l.relatedTarget || l.toElement, ce = A, ge = ge ? ka(ge) : null, ge !== null && (kn = Ke(ge), ge !== kn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (ce = null, ge = A), ce !== ge)) {
            if (Ce = Li, Z = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = tc, Z = "onPointerLeave", D = "onPointerEnter", x = "pointer"), kn = ce == null ? Q : ro(ce), L = ge == null ? Q : ro(ge), Q = new Ce(Z, x + "leave", ce, l, W), Q.target = kn, Q.relatedTarget = L, Z = null, ka(W) === A && (Ce = new Ce(D, x + "enter", ge, l, W), Ce.target = L, Ce.relatedTarget = kn, Z = Ce), kn = Z, ce && ge)
              t: {
                for (Ce = ce, D = ge, x = 0, L = Ce; L; L = tu(L))
                  x++;
                for (L = 0, Z = D; Z; Z = tu(Z))
                  L++;
                for (; 0 < x - L; )
                  Ce = tu(Ce), x--;
                for (; 0 < L - x; )
                  D = tu(D), L--;
                for (; x--; ) {
                  if (Ce === D || D !== null && Ce === D.alternate)
                    break t;
                  Ce = tu(Ce), D = tu(D);
                }
                Ce = null;
              }
            else
              Ce = null;
            ce !== null && nd(G, Q, ce, Ce, !1), ge !== null && kn !== null && nd(G, kn, ge, Ce, !0);
          }
        }
        e: {
          if (Q = A ? ro(A) : window, ce = Q.nodeName && Q.nodeName.toLowerCase(), ce === "select" || ce === "input" && Q.type === "file")
            var Re = uv;
          else if (iv(Q))
            if (Gf)
              Re = fv;
            else {
              Re = Wm;
              var Se = Qm;
            }
          else
            (ce = Q.nodeName) && ce.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Re = Gm);
          if (Re && (Re = Re(n, A))) {
            lv(G, Re, l, W);
            break e;
          }
          Se && Se(n, Q, A), n === "focusout" && (Se = Q._wrapperState) && Se.controlled && Q.type === "number" && $r(Q, "number", Q.value);
        }
        switch (Se = A ? ro(A) : window, n) {
          case "focusin":
            (iv(Se) || Se.contentEditable === "true") && (Ja = Se, Kf = A, ts = null);
            break;
          case "focusout":
            ts = Kf = Ja = null;
            break;
          case "mousedown":
            Zf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zf = !1, mv(G, l, W);
            break;
          case "selectionchange":
            if (hv)
              break;
          case "keydown":
          case "keyup":
            mv(G, l, W);
        }
        var De;
        if (Za)
          e: {
            switch (n) {
              case "compositionstart":
                var $e = "onCompositionStart";
                break e;
              case "compositionend":
                $e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $e = "onCompositionUpdate";
                break e;
            }
            $e = void 0;
          }
        else
          Zu ? rv(n, l) && ($e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && ($e = "onCompositionStart");
        $e && (tv && l.locale !== "ko" && (Zu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Zu && (De = z()) : (Xa = W, h = "value" in Xa ? Xa.value : Xa.textContent, Zu = !0)), Se = ls(A, $e), 0 < Se.length && ($e = new $f($e, n, null, l, W), G.push({ event: $e, listeners: Se }), De ? $e.data = De : (De = ac(l), De !== null && ($e.data = De)))), (De = rc ? Ym(n, l) : Im(n, l)) && (A = ls(A, "onBeforeInput"), 0 < A.length && (W = new $f("onBeforeInput", "beforeinput", null, l, W), G.push({ event: W, listeners: A }), W.data = De));
      }
      oc(G, r);
    });
  }
  function is(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, l), d != null && o.unshift(is(n, d, c)), d = fa(n, r), d != null && o.push(is(n, d, c))), n = n.return;
    }
    return o;
  }
  function tu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function nd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (w = fa(l, d), w != null && m.unshift(is(l, w, E))) : c || (w = fa(l, d), w != null && m.push(is(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var rd = /\r\n?/g, Zm = /\u0000|\uFFFD/g;
  function ad(n) {
    return (typeof n == "string" ? n : "" + n).replace(rd, `
`).replace(Zm, "");
  }
  function cc(n, r, l) {
    if (r = ad(r), ad(n) !== r && l)
      throw Error(M(425));
  }
  function fc() {
  }
  var id = null, nu = null;
  function us(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ru = typeof setTimeout == "function" ? setTimeout : void 0, wv = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(n) {
    return ld.resolve(null).then(n).catch(Jm);
  } : ru;
  function Jm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Sl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), vl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    vl(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function os(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var El = Math.random().toString(36).slice(2), vi = "__reactFiber$" + El, au = "__reactProps$" + El, Fi = "__reactContainer$" + El, od = "__reactEvents$" + El, ey = "__reactListeners$" + El, sd = "__reactHandles$" + El;
  function ka(n) {
    var r = n[vi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fi] || l[vi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = os(n); n !== null; ) {
            if (l = n[vi])
              return l;
            n = os(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[vi] || n[Fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ro(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(M(33));
  }
  function ke(n) {
    return n[au] || null;
  }
  var Cl = [], an = -1;
  function et(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > an || (n.current = Cl[an], Cl[an] = null, an--);
  }
  function Bt(n, r) {
    an++, Cl[an] = n.current, n.current = r;
  }
  var hi = {}, Be = et(hi), Rn = et(!1), Xr = hi;
  function Oa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return hi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function La() {
    Ut(Rn), Ut(Be);
  }
  function Rl(n, r, l) {
    if (Be.current !== hi)
      throw Error(M(168));
    Bt(Be, r), Bt(Rn, l);
  }
  function cs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(M(108, pt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || hi, Xr = Be.current, Bt(Be, n), Bt(Rn, Rn.current), !0;
  }
  function bv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(M(169));
    l ? (n = cs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Ut(Rn), Ut(Be), Bt(Be, n)) : Ut(Rn), Bt(Rn, l);
  }
  var va = null, Gn = !1, fs = !1;
  function cd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function fd(n) {
    Gn = !0, cd(n);
  }
  function Kr() {
    if (!fs && va !== null) {
      fs = !0;
      var n = 0, r = Lt;
      try {
        var l = va;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, Gn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), tn(Ga, Kr), c;
      } finally {
        Lt = r, fs = !1;
      }
    }
    return null;
  }
  var Tl = [], Zr = 0, iu = null, ao = 0, Jr = [], yr = 0, Ma = null, nr = 1, ji = "";
  function ha(n, r) {
    Tl[Zr++] = ao, Tl[Zr++] = iu, iu = n, ao = r;
  }
  function dd(n, r, l) {
    Jr[yr++] = nr, Jr[yr++] = ji, Jr[yr++] = Ma, Ma = n;
    var o = nr;
    n = ji;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - _r(r) + c | l << c | o, ji = d + n;
    } else
      nr = 1 << d | l << c | o, ji = n;
  }
  function pc(n) {
    n.return !== null && (ha(n, 1), dd(n, 1, 0));
  }
  function pd(n) {
    for (; n === iu; )
      iu = Tl[--Zr], Tl[Zr] = null, ao = Tl[--Zr], Tl[Zr] = null;
    for (; n === Ma; )
      Ma = Jr[--yr], Jr[yr] = null, ji = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, ln = !1, Na = null;
  function vd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ma !== null ? { id: nr, overflow: ji } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hc(n) {
    if (ln) {
      var r = ea;
      if (r) {
        var l = r;
        if (!xv(n, r)) {
          if (vc(n))
            throw Error(M(418));
          r = ei(l.nextSibling);
          var o = ma;
          r && xv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, ln = !1, ma = n);
        }
      } else {
        if (vc(n))
          throw Error(M(418));
        n.flags = n.flags & -4097 | 2, ln = !1, ma = n;
      }
    }
  }
  function _v(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function mc(n) {
    if (n !== ma)
      return !1;
    if (!ln)
      return _v(n), ln = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !us(n.type, n.memoizedProps)), r && (r = ea)) {
      if (vc(n))
        throw Dv(), Error(M(418));
      for (; r; )
        vd(n, r), r = ei(r.nextSibling);
    }
    if (_v(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ma ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Dv() {
    for (var n = ea; n; )
      n = ei(n.nextSibling);
  }
  function mn() {
    ea = ma = null, ln = !1;
  }
  function hd(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var yc = dt.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mi = et(null), gc = null, wl = null, md = null;
  function yd() {
    md = wl = gc = null;
  }
  function bl(n) {
    var r = mi.current;
    Ut(mi), n._currentValue = r;
  }
  function qn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ne(n, r) {
    gc = n, md = wl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Nn = !0), n.firstContext = null);
  }
  function Dn(n) {
    var r = n._currentValue;
    if (md !== n)
      if (n = { context: n, memoizedValue: r, next: null }, wl === null) {
        if (gc === null)
          throw Error(M(308));
        wl = n, gc.dependencies = { lanes: 0, firstContext: n };
      } else
        wl = wl.next = n;
    return r;
  }
  var rr = null;
  function gd(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function kv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, gd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Hi(n, o);
  }
  function Hi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xl = !1;
  function Sd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Hi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, gd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Hi(n, l);
  }
  function Sc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  function Ed(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Dl(n, r, l, o) {
    var c = n.updateQueue;
    xl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = A : E.next = A, W.lastBaseUpdate = w));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, W = A = w = null, E = d;
      do {
        var Q = E.lane, ce = E.eventTime;
        if ((o & Q) === Q) {
          W !== null && (W = W.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch (Q = r, ce = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  G = ge.call(ce, G, Q);
                  break e;
                }
                G = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, Q = typeof ge == "function" ? ge.call(ce, G, Q) : ge, Q == null)
                  break e;
                G = T({}, G, Q);
                break e;
              case 2:
                xl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else
          ce = { eventTime: ce, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (A = W = ce, w = G) : W = W.next = ce, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (1);
      if (W === null && (w = G), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Yi |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function lu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(M(191, c));
          c.call(o);
        }
      }
  }
  var Ov = new j.Component().refs;
  function Cd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ec = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ke(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (Rr(r, n, c, o), Sc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (Rr(r, n, c, o), Sc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), o = zn(n), c = Vi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = _l(n, c, o), r !== null && (Rr(r, n, o, l), Sc(r, n, o));
  } };
  function Lv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Mv(n, r, l) {
    var o = !1, c = hi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Dn(d) : (c = cn(r) ? Xr : Be.current, o = r.contextTypes, d = (o = o != null) ? Oa(n, c) : hi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ec, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Nv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ec.enqueueReplaceState(r, r.state, null);
  }
  function Cc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Ov, Sd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Dn(d) : (d = cn(r) ? Xr : Be.current, c.context = Oa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Cd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ec.enqueueReplaceState(c, c.state, null), Dl(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function io(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Ov && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(M(284));
      if (!l._owner)
        throw Error(M(290, n));
    }
    return n;
  }
  function Rc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Al(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, Z) {
      return x === null || x.tag !== 6 ? (x = Os(L, D.mode, Z), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function w(D, x, L, Z) {
      var Re = L.type;
      return Re === He ? W(D, x, L.props.children, Z, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === bt && zv(Re) === x.type) ? (Z = c(x, L.props), Z.ref = io(D, x, L), Z.return = D, Z) : (Z = ef(L.type, L.key, L.props, null, D.mode, Z), Z.ref = io(D, x, L), Z.return = D, Z);
    }
    function A(D, x, L, Z) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = bu(L, D.mode, Z), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function W(D, x, L, Z, Re) {
      return x === null || x.tag !== 7 ? (x = wu(L, D.mode, Z, Re), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function G(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Os("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _e:
            return L = ef(x.type, x.key, x.props, null, D.mode, L), L.ref = io(D, null, x), L.return = D, L;
          case ut:
            return x = bu(x, D.mode, L), x.return = D, x;
          case bt:
            var Z = x._init;
            return G(D, Z(x._payload), L);
        }
        if (In(x) || we(x))
          return x = wu(x, D.mode, L, null), x.return = D, x;
        Rc(D, x);
      }
      return null;
    }
    function Q(D, x, L, Z) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return Re !== null ? null : E(D, x, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            return L.key === Re ? w(D, x, L, Z) : null;
          case ut:
            return L.key === Re ? A(D, x, L, Z) : null;
          case bt:
            return Re = L._init, Q(
              D,
              x,
              Re(L._payload),
              Z
            );
        }
        if (In(L) || we(L))
          return Re !== null ? null : W(D, x, L, Z, null);
        Rc(D, L);
      }
      return null;
    }
    function ce(D, x, L, Z, Re) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number")
        return D = D.get(L) || null, E(x, D, "" + Z, Re);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case _e:
            return D = D.get(Z.key === null ? L : Z.key) || null, w(x, D, Z, Re);
          case ut:
            return D = D.get(Z.key === null ? L : Z.key) || null, A(x, D, Z, Re);
          case bt:
            var Se = Z._init;
            return ce(D, x, L, Se(Z._payload), Re);
        }
        if (In(Z) || we(Z))
          return D = D.get(L) || null, W(x, D, Z, Re, null);
        Rc(x, Z);
      }
      return null;
    }
    function ge(D, x, L, Z) {
      for (var Re = null, Se = null, De = x, $e = x = 0, Zn = null; De !== null && $e < L.length; $e++) {
        De.index > $e ? (Zn = De, De = null) : Zn = De.sibling;
        var kt = Q(D, De, L[$e], Z);
        if (kt === null) {
          De === null && (De = Zn);
          break;
        }
        n && De && kt.alternate === null && r(D, De), x = d(kt, x, $e), Se === null ? Re = kt : Se.sibling = kt, Se = kt, De = Zn;
      }
      if ($e === L.length)
        return l(D, De), ln && ha(D, $e), Re;
      if (De === null) {
        for (; $e < L.length; $e++)
          De = G(D, L[$e], Z), De !== null && (x = d(De, x, $e), Se === null ? Re = De : Se.sibling = De, Se = De);
        return ln && ha(D, $e), Re;
      }
      for (De = o(D, De); $e < L.length; $e++)
        Zn = ce(De, D, $e, L[$e], Z), Zn !== null && (n && Zn.alternate !== null && De.delete(Zn.key === null ? $e : Zn.key), x = d(Zn, x, $e), Se === null ? Re = Zn : Se.sibling = Zn, Se = Zn);
      return n && De.forEach(function(Fl) {
        return r(D, Fl);
      }), ln && ha(D, $e), Re;
    }
    function Ce(D, x, L, Z) {
      var Re = we(L);
      if (typeof Re != "function")
        throw Error(M(150));
      if (L = Re.call(L), L == null)
        throw Error(M(151));
      for (var Se = Re = null, De = x, $e = x = 0, Zn = null, kt = L.next(); De !== null && !kt.done; $e++, kt = L.next()) {
        De.index > $e ? (Zn = De, De = null) : Zn = De.sibling;
        var Fl = Q(D, De, kt.value, Z);
        if (Fl === null) {
          De === null && (De = Zn);
          break;
        }
        n && De && Fl.alternate === null && r(D, De), x = d(Fl, x, $e), Se === null ? Re = Fl : Se.sibling = Fl, Se = Fl, De = Zn;
      }
      if (kt.done)
        return l(
          D,
          De
        ), ln && ha(D, $e), Re;
      if (De === null) {
        for (; !kt.done; $e++, kt = L.next())
          kt = G(D, kt.value, Z), kt !== null && (x = d(kt, x, $e), Se === null ? Re = kt : Se.sibling = kt, Se = kt);
        return ln && ha(D, $e), Re;
      }
      for (De = o(D, De); !kt.done; $e++, kt = L.next())
        kt = ce(De, D, $e, kt.value, Z), kt !== null && (n && kt.alternate !== null && De.delete(kt.key === null ? $e : kt.key), x = d(kt, x, $e), Se === null ? Re = kt : Se.sibling = kt, Se = kt);
      return n && De.forEach(function(Ey) {
        return r(D, Ey);
      }), ln && ha(D, $e), Re;
    }
    function kn(D, x, L, Z) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            e: {
              for (var Re = L.key, Se = x; Se !== null; ) {
                if (Se.key === Re) {
                  if (Re = L.type, Re === He) {
                    if (Se.tag === 7) {
                      l(D, Se.sibling), x = c(Se, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Se.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === bt && zv(Re) === Se.type) {
                    l(D, Se.sibling), x = c(Se, L.props), x.ref = io(D, Se, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Se);
                  break;
                } else
                  r(D, Se);
                Se = Se.sibling;
              }
              L.type === He ? (x = wu(L.props.children, D.mode, Z, L.key), x.return = D, D = x) : (Z = ef(L.type, L.key, L.props, null, D.mode, Z), Z.ref = io(D, x, L), Z.return = D, D = Z);
            }
            return m(D);
          case ut:
            e: {
              for (Se = L.key; x !== null; ) {
                if (x.key === Se)
                  if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                    l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                    break e;
                  } else {
                    l(D, x);
                    break;
                  }
                else
                  r(D, x);
                x = x.sibling;
              }
              x = bu(L, D.mode, Z), x.return = D, D = x;
            }
            return m(D);
          case bt:
            return Se = L._init, kn(D, x, Se(L._payload), Z);
        }
        if (In(L))
          return ge(D, x, L, Z);
        if (we(L))
          return Ce(D, x, L, Z);
        Rc(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = Os(L, D.mode, Z), x.return = D, D = x), m(D)) : l(D, x);
    }
    return kn;
  }
  var lo = Uv(!0), Av = Uv(!1), ds = {}, ti = et(ds), ps = et(ds), uo = et(ds);
  function uu(n) {
    if (n === ds)
      throw Error(M(174));
    return n;
  }
  function Rd(n, r) {
    switch (Bt(uo, r), Bt(ps, n), Bt(ti, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Ut(ti), Bt(ti, r);
  }
  function kl() {
    Ut(ti), Ut(ps), Ut(uo);
  }
  function Ne(n) {
    uu(uo.current);
    var r = uu(ti.current), l = pn(r, n.type);
    r !== l && (Bt(ps, n), Bt(ti, l));
  }
  function ct(n) {
    ps.current === n && (Ut(ti), Ut(ps));
  }
  var Ue = et(0);
  function yn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var za = [];
  function Tc() {
    for (var n = 0; n < za.length; n++)
      za[n]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var wc = dt.ReactCurrentDispatcher, Td = dt.ReactCurrentBatchConfig, ou = 0, un = null, P = null, Et = null, Fe = !1, yi = !1, ga = 0, su = 0;
  function on() {
    throw Error(M(321));
  }
  function cu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Da(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ol(n, r, l, o, c, d) {
    if (ou = d, un = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wc.current = n === null || n.memoizedState === null ? ny : ry, n = l(o, c), yi) {
      d = 0;
      do {
        if (yi = !1, ga = 0, 25 <= d)
          throw Error(M(301));
        d += 1, Et = P = null, r.updateQueue = null, wc.current = bd, n = l(o, c);
      } while (yi);
    }
    if (wc.current = Vc, r = P !== null && P.next !== null, ou = 0, Et = P = un = null, Fe = !1, r)
      throw Error(M(300));
    return n;
  }
  function fu() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function Ua() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? un.memoizedState = Et = n : Et = Et.next = n, Et;
  }
  function ta() {
    if (P === null) {
      var n = un.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = P.next;
    var r = Et === null ? un.memoizedState : Et.next;
    if (r !== null)
      Et = r, P = n;
    else {
      if (n === null)
        throw Error(M(310));
      P = n, n = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null }, Et === null ? un.memoizedState = Et = n : Et = Et.next = n;
    }
    return Et;
  }
  function du(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function vs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = P, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, A = d;
      do {
        var W = A.lane;
        if ((ou & W) === W)
          w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var G = {
            lane: W,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (E = w = G, m = o) : w = w.next = G, un.lanes |= W, Yi |= W;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = E, Da(o, r.memoizedState) || (Nn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, un.lanes |= d, Yi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function hs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Da(d, r.memoizedState) || (Nn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function bc() {
  }
  function xc(n, r) {
    var l = un, o = ta(), c = r(), d = !Da(o.memoizedState, c);
    if (d && (o.memoizedState = c, Nn = !0), o = o.queue, ms(kc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Et !== null && Et.memoizedState.tag & 1) {
      if (l.flags |= 2048, pu(9, Dc.bind(null, l, o, c, r), void 0, null), gn === null)
        throw Error(M(349));
      ou & 30 || _c(l, r, c);
    }
    return c;
  }
  function _c(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Dc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Oc(r) && Lc(n);
  }
  function kc(n, r, l) {
    return l(function() {
      Oc(r) && Lc(n);
    });
  }
  function Oc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Da(n, l);
    } catch {
      return !0;
    }
  }
  function Lc(n) {
    var r = Hi(n, 1);
    r !== null && Rr(r, n, 1, -1);
  }
  function Mc(n) {
    var r = Ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: du, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hc.bind(null, un, n), [r.memoizedState, n];
  }
  function pu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Nc() {
    return ta().memoizedState;
  }
  function vu(n, r, l, o) {
    var c = Ua();
    un.flags |= n, c.memoizedState = pu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pi(n, r, l, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (P !== null) {
      var m = P.memoizedState;
      if (d = m.destroy, o !== null && cu(o, m.deps)) {
        c.memoizedState = pu(r, l, d, o);
        return;
      }
    }
    un.flags |= n, c.memoizedState = pu(1 | r, l, d, o);
  }
  function zc(n, r) {
    return vu(8390656, 8, n, r);
  }
  function ms(n, r) {
    return Pi(2048, 8, n, r);
  }
  function Uc(n, r) {
    return Pi(4, 2, n, r);
  }
  function Ac(n, r) {
    return Pi(4, 4, n, r);
  }
  function wd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function oo(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pi(4, 4, wd.bind(null, r, n), l);
  }
  function Fc() {
  }
  function so(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function na(n, r, l) {
    return ou & 21 ? (Da(l, r) || (l = Bu(), un.lanes |= l, Yi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Nn = !0), n.memoizedState = l);
  }
  function ty(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Td.transition;
    Td.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Td.transition = o;
    }
  }
  function Jt() {
    return ta().memoizedState;
  }
  function jc(n, r, l) {
    var o = zn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, co(n))
      ys(r, l);
    else if (l = kv(n, r, l, o), l !== null) {
      var c = Cr();
      Rr(l, n, o, c), Fv(l, r, o);
    }
  }
  function Hc(n, r, l) {
    var o = zn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (co(n))
      ys(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, Da(E, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, gd(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = kv(n, r, c, o), l !== null && (c = Cr(), Rr(l, n, o, c), Fv(l, r, o));
    }
  }
  function co(n) {
    var r = n.alternate;
    return n === un || r !== null && r === un;
  }
  function ys(n, r) {
    yi = Fe = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Fv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  var Vc = { readContext: Dn, useCallback: on, useContext: on, useEffect: on, useImperativeHandle: on, useInsertionEffect: on, useLayoutEffect: on, useMemo: on, useReducer: on, useRef: on, useState: on, useDebugValue: on, useDeferredValue: on, useTransition: on, useMutableSource: on, useSyncExternalStore: on, useId: on, unstable_isNewReconciler: !1 }, ny = { readContext: Dn, useCallback: function(n, r) {
    return Ua().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Dn, useEffect: zc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, vu(
      4194308,
      4,
      wd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ua();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ua();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = jc.bind(null, un, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ua();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Mc, useDebugValue: Fc, useDeferredValue: function(n) {
    return Ua().memoizedState = n;
  }, useTransition: function() {
    var n = Mc(!1), r = n[0];
    return n = ty.bind(null, n[1]), Ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = un, c = Ua();
    if (ln) {
      if (l === void 0)
        throw Error(M(407));
      l = l();
    } else {
      if (l = r(), gn === null)
        throw Error(M(349));
      ou & 30 || _c(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, zc(kc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, pu(9, Dc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ua(), r = gn.identifierPrefix;
    if (ln) {
      var l = ji, o = nr;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ga++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = su++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ry = {
    readContext: Dn,
    useCallback: so,
    useContext: Dn,
    useEffect: ms,
    useImperativeHandle: oo,
    useInsertionEffect: Uc,
    useLayoutEffect: Ac,
    useMemo: Ll,
    useReducer: vs,
    useRef: Nc,
    useState: function() {
      return vs(du);
    },
    useDebugValue: Fc,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, P.memoizedState, n);
    },
    useTransition: function() {
      var n = vs(du)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: bc,
    useSyncExternalStore: xc,
    useId: Jt,
    unstable_isNewReconciler: !1
  }, bd = { readContext: Dn, useCallback: so, useContext: Dn, useEffect: ms, useImperativeHandle: oo, useInsertionEffect: Uc, useLayoutEffect: Ac, useMemo: Ll, useReducer: hs, useRef: Nc, useState: function() {
    return hs(du);
  }, useDebugValue: Fc, useDeferredValue: function(n) {
    var r = ta();
    return P === null ? r.memoizedState = n : na(r, P.memoizedState, n);
  }, useTransition: function() {
    var n = hs(du)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: bc, useSyncExternalStore: xc, useId: Jt, unstable_isNewReconciler: !1 };
  function fo(n, r) {
    try {
      var l = "", o = r;
      do
        l += gt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function gs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Pc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ay = typeof WeakMap == "function" ? WeakMap : Map;
  function jv(n, r, l) {
    l = Vi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Gc || (Gc = !0, Su = o), Pc(n, r);
    }, l;
  }
  function Ss(n, r, l) {
    l = Vi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Pc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Pc(n, r), typeof o != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Hv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ay();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = fy.bind(null, n, r, l), r.then(n, n));
  }
  function xd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function _d(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Vi(-1, 1), r.tag = 2, _l(l, r, 1))), l.lanes |= 1), n);
  }
  var iy = dt.ReactCurrentOwner, Nn = !1;
  function Hn(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : lo(r, n.child, l, o);
  }
  function Ml(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ne(r, c), o = Ol(n, r, l, o, d, c), l = fu(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (ln && l && pc(r), r.flags |= 1, Hn(n, r, o, c), r.child);
  }
  function Bc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = ef(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref)
        if (Nn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Nn = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return po(n, r, l, o, c);
  }
  function hu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Bt(So, Sa), Sa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Bt(So, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Bt(So, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Bt(So, Sa), Sa |= o;
    return Hn(n, r, c, l), r.child;
  }
  function tt(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function po(n, r, l, o, c) {
    var d = cn(l) ? Xr : Be.current;
    return d = Oa(r, d), ne(r, c), l = Ol(n, r, l, o, d, c), o = fu(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (ln && o && pc(r), r.flags |= 1, Hn(n, r, l, c), r.child);
  }
  function Dd(n, r, l, o, c) {
    if (cn(l)) {
      var d = !0;
      dc(r);
    } else
      d = !1;
    if (ne(r, c), r.stateNode === null)
      gr(n, r), Mv(r, l, o), Cc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Dn(A) : (A = cn(l) ? Xr : Be.current, A = Oa(r, A));
      var W = l.getDerivedStateFromProps, G = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && Nv(r, m, o, A), xl = !1;
      var Q = r.memoizedState;
      m.state = Q, Dl(r, o, m, c), w = r.memoizedState, E !== o || Q !== w || Rn.current || xl ? (typeof W == "function" && (Cd(r, l, W, o), w = r.memoizedState), (E = xl || Lv(r, l, E, o, Q, w, A)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, jn(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ya(r.type, E), m.props = A, G = r.pendingProps, Q = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = Dn(w) : (w = cn(l) ? Xr : Be.current, w = Oa(r, w));
      var ce = l.getDerivedStateFromProps;
      (W = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || Q !== w) && Nv(r, m, o, w), xl = !1, Q = r.memoizedState, m.state = Q, Dl(r, o, m, c);
      var ge = r.memoizedState;
      E !== G || Q !== ge || Rn.current || xl ? (typeof ce == "function" && (Cd(r, l, ce, o), ge = r.memoizedState), (A = xl || Lv(r, l, A, o, Q, ge, w) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Vv(n, r, l, o, d, c);
  }
  function Vv(n, r, l, o, c, d) {
    tt(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && bv(r, l, !1), ar(n, r, d);
    o = r.stateNode, iy.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = lo(r, n.child, null, d), r.child = lo(r, null, E, d)) : Hn(n, r, E, d), r.memoizedState = o.state, c && bv(r, l, !0), r.child;
  }
  function Pv(n) {
    var r = n.stateNode;
    r.pendingContext ? Rl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rl(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function $c(n, r, l, o, c) {
    return mn(), hd(c), r.flags |= 256, Hn(n, r, l, o), r.child;
  }
  var mu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Od(n, r, l) {
    var o = r.pendingProps, c = Ue.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Bt(Ue, c & 1), n === null)
      return hc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = ks(m, o, 0, null), n = wu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = kd(l), r.memoizedState = mu, n) : Ld(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ly(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Al(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Al(E, d) : (d = wu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? kd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = mu, o;
    }
    return d = n.child, n = d.sibling, o = Al(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ld(n, r) {
    return r = ks({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vo(n, r, l, o) {
    return o !== null && hd(o), lo(r, n.child, null, l), n = Ld(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ly(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = gs(Error(M(422))), vo(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = ks({ mode: "visible", children: o.children }, c, 0, null), d = wu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && lo(r, n.child, null, m), r.child.memoizedState = kd(m), r.memoizedState = mu, d);
    if (!(r.mode & 1))
      return vo(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(M(419)), o = gs(d, o, void 0), vo(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Nn || E) {
      if (o = gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Hi(n, c), Rr(o, n, c, -1));
      }
      return $d(), o = gs(Error(M(421))), vo(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), ma = r, ln = !0, Na = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = ji, Jr[yr++] = Ma, nr = n.id, ji = n.overflow, Ma = r), r = Ld(r, o.children), r.flags |= 4096, r);
  }
  function Md(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qn(n.return, r, l);
  }
  function Yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Nd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Hn(n, r, o.children, l), o = Ue.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Md(n, l, r);
            else if (n.tag === 19)
              Md(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Bt(Ue, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Yc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Yc(r, !0, l, null, d);
          break;
        case "together":
          Yc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function gr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ar(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Yi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Bi(n, r, l) {
    switch (r.tag) {
      case 3:
        Pv(r), mn();
        break;
      case 5:
        Ne(r);
        break;
      case 1:
        cn(r.type) && dc(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Bt(mi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Bt(Ue, Ue.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Od(n, r, l) : (Bt(Ue, Ue.current & 1), n = ar(n, r, l), n !== null ? n.sibling : null);
        Bt(Ue, Ue.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Nd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Bt(Ue, Ue.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, hu(n, r, l);
    }
    return ar(n, r, l);
  }
  var Es, yu, Aa, Vn;
  Es = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, yu = function() {
  }, Aa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, uu(ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = fc);
      }
      _n(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (yt.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== E && (w != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = w;
          else
            A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (yt.hasOwnProperty(A) ? (w != null && A === "onScroll" && Zt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Vn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Cs(n, r) {
    if (!ln)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (pd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sr(r), null;
      case 1:
        return cn(r.type) && La(), Sr(r), null;
      case 3:
        return o = r.stateNode, kl(), Ut(Rn), Ut(Be), Tc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (Ds(Na), Na = null))), yu(n, r), Sr(r), null;
      case 5:
        ct(r);
        var c = uu(uo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Aa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(M(166));
            return Sr(r), null;
          }
          if (n = uu(ti.current), mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[vi] = r, o[au] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Zt("cancel", o), Zt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Zt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++)
                  Zt(as[c], o);
                break;
              case "source":
                Zt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Zt(
                  "error",
                  o
                ), Zt("load", o);
                break;
              case "details":
                Zt("toggle", o);
                break;
              case "input":
                An(o, d), Zt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Zt("invalid", o);
                break;
              case "textarea":
                hr(o, d), Zt("invalid", o);
            }
            _n(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && cc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && cc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : yt.hasOwnProperty(m) && E != null && m === "onScroll" && Zt("scroll", o);
              }
            switch (l) {
              case "input":
                pr(o), Br(o, d, !0);
                break;
              case "textarea":
                pr(o), er(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = fc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[vi] = r, n[au] = o, Es(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(l, o), l) {
                case "dialog":
                  Zt("cancel", n), Zt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Zt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++)
                    Zt(as[c], n);
                  c = o;
                  break;
                case "source":
                  Zt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Zt(
                    "error",
                    n
                  ), Zt("load", n), c = o;
                  break;
                case "details":
                  Zt("toggle", n), c = o;
                  break;
                case "input":
                  An(n, o), c = Yn(n, o), Zt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Zt("invalid", n);
                  break;
                case "textarea":
                  hr(n, o), c = Yr(n, o), Zt("invalid", n);
                  break;
                default:
                  c = o;
              }
              _n(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var w = E[d];
                  d === "style" ? zt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && li(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && ca(n, w) : typeof w == "number" && ca(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (yt.hasOwnProperty(d) ? w != null && d === "onScroll" && Zt("scroll", n) : w != null && Ge(n, d, w, m));
                }
              switch (l) {
                case "input":
                  pr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? vr(n, !!o.multiple, d, !1) : o.defaultValue != null && vr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = fc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Vn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(M(166));
          if (l = uu(uo.current), uu(ti.current), mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[vi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  cc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && cc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[vi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (Ut(Ue), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ln && ea !== null && r.mode & 1 && !(r.flags & 128))
            Dv(), mn(), r.flags |= 98560, d = !1;
          else if (d = mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(M(317));
              d[vi] = r;
            } else
              mn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            Na !== null && (Ds(Na), Na = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ue.current & 1 ? Bn === 0 && (Bn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return kl(), yu(n, r), n === null && no(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return bl(r.type._context), Sr(r), null;
      case 17:
        return cn(r.type) && La(), Sr(r), null;
      case 19:
        if (Ut(Ue), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Cs(d, !1);
          else {
            if (Bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, Cs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Bt(Ue, Ue.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && xt() > Co && (r.flags |= 128, o = !0, Cs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Cs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln)
                return Sr(r), null;
            } else
              2 * xt() - d.renderingStartTime > Co && l !== 1073741824 && (r.flags |= 128, o = !0, Cs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = xt(), r.sibling = null, l = Ue.current, Bt(Ue, o ? l & 1 | 2 : l & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return Bd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function zd(n, r) {
    switch (pd(r), r.tag) {
      case 1:
        return cn(r.type) && La(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return kl(), Ut(Rn), Ut(Be), Tc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (Ut(Ue), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(M(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(Ue), null;
      case 4:
        return kl(), null;
      case 10:
        return bl(r.type._context), null;
      case 22:
      case 23:
        return Bd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rs = !1, Pn = !1, Bv = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function ho(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          wn(n, r, o);
        }
      else
        l.current = null;
  }
  function Ts(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var $v = !1;
  function Yv(n, r) {
    if (id = _a, n = ic(), zi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, w = -1, A = 0, W = 0, G = n, Q = null;
            t:
              for (; ; ) {
                for (var ce; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (w = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (ce = G.firstChild) !== null; )
                  Q = G, G = ce;
                for (; ; ) {
                  if (G === n)
                    break t;
                  if (Q === l && ++A === c && (E = m), Q === d && ++W === o && (w = m), (ce = G.nextSibling) !== null)
                    break;
                  G = Q, Q = G.parentNode;
                }
                G = ce;
              }
            l = E === -1 || w === -1 ? null : { start: E, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (nu = { focusedElem: n, selectionRange: l }, _a = !1, me = r; me !== null; )
      if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, me = n;
      else
        for (; me !== null; ) {
          r = me;
          try {
            var ge = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ge !== null) {
                    var Ce = ge.memoizedProps, kn = ge.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ya(r.type, Ce), kn);
                    D.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(M(163));
              }
          } catch (Z) {
            wn(r, r.return, Z);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, me = n;
            break;
          }
          me = r.return;
        }
    return ge = $v, $v = !1, ge;
  }
  function ws(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ts(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function bs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ud(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[vi], delete r[au], delete r[od], delete r[ey], delete r[sd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Iv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ic(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Iv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function mo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = fc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (mo(n, r, l), n = n.sibling; n !== null; )
        mo(n, r, l), n = n.sibling;
  }
  function gi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (gi(n, r, l), n = n.sibling; n !== null; )
        gi(n, r, l), n = n.sibling;
  }
  var fn = null, Xn = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; )
      yo(n, r, l), l = l.sibling;
  }
  function yo(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(ul, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Pn || ho(l, r);
      case 6:
        var o = fn, c = Xn;
        fn = null, Fa(n, r, l), fn = o, Xn = c, fn !== null && (Xn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (Xn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Sl(n.parentNode, l) : n.nodeType === 1 && Sl(n, l), vl(n)) : Sl(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = Xn, fn = l.stateNode.containerInfo, Xn = !0, Fa(n, r, l), fn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ts(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!Pn && (ho(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            wn(l, r, E);
          }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Pn = (o = Pn) || l.memoizedState !== null, Fa(n, r, l), Pn = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function $i(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Bv()), r.forEach(function(o) {
        var c = py.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ni(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  fn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  fn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  fn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (fn === null)
            throw Error(M(160));
          yo(d, m, c), fn = null, Xn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (A) {
          wn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Qv(r, n), r = r.sibling;
  }
  function Qv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ni(r, n), Si(n), o & 4) {
          try {
            ws(3, n, n.return), bs(3, n);
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
          try {
            ws(5, n, n.return);
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ni(r, n), Si(n), o & 512 && l !== null && ho(l, l.return);
        break;
      case 5:
        if (ni(r, n), Si(n), o & 512 && l !== null && ho(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Fn(c, d), vn(E, m);
              var A = vn(E, d);
              for (m = 0; m < w.length; m += 2) {
                var W = w[m], G = w[m + 1];
                W === "style" ? zt(c, G) : W === "dangerouslySetInnerHTML" ? li(c, G) : W === "children" ? ca(c, G) : Ge(c, W, G, A);
              }
              switch (E) {
                case "input":
                  xn(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var Q = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ce = d.value;
                  ce != null ? vr(c, !!d.multiple, ce, !1) : Q !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[au] = d;
            } catch (Ce) {
              wn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (ni(r, n), Si(n), o & 4) {
          if (n.stateNode === null)
            throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ni(r, n), Si(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            vl(r.containerInfo);
          } catch (Ce) {
            wn(n, n.return, Ce);
          }
        break;
      case 4:
        ni(r, n), Si(n);
        break;
      case 13:
        ni(r, n), Si(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Hd = xt())), o & 4 && $i(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Pn = (A = Pn) || W, ni(r, n), Pn = A) : ni(r, n), Si(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !W && n.mode & 1)
            for (me = n, W = n.child; W !== null; ) {
              for (G = me = W; me !== null; ) {
                switch (Q = me, ce = Q.child, Q.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ws(4, Q, Q.return);
                    break;
                  case 1:
                    ho(Q, Q.return);
                    var ge = Q.stateNode;
                    if (typeof ge.componentWillUnmount == "function") {
                      o = Q, l = Q.return;
                      try {
                        r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                      } catch (Ce) {
                        wn(o, l, Ce);
                      }
                    }
                    break;
                  case 5:
                    ho(Q, Q.return);
                    break;
                  case 22:
                    if (Q.memoizedState !== null) {
                      Fd(G);
                      continue;
                    }
                }
                ce !== null ? (ce.return = Q, me = ce) : Fd(G);
              }
              W = W.sibling;
            }
          e:
            for (W = null, G = n; ; ) {
              if (G.tag === 5) {
                if (W === null) {
                  W = G;
                  try {
                    c = G.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, w = G.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = it("display", m));
                  } catch (Ce) {
                    wn(n, n.return, Ce);
                  }
                }
              } else if (G.tag === 6) {
                if (W === null)
                  try {
                    G.stateNode.nodeValue = A ? "" : G.memoizedProps;
                  } catch (Ce) {
                    wn(n, n.return, Ce);
                  }
              } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
                G.child.return = G, G = G.child;
                continue;
              }
              if (G === n)
                break e;
              for (; G.sibling === null; ) {
                if (G.return === null || G.return === n)
                  break e;
                W === G && (W = null), G = G.return;
              }
              W === G && (W = null), G.sibling.return = G.return, G = G.sibling;
            }
        }
        break;
      case 19:
        ni(r, n), Si(n), o & 4 && $i(n);
        break;
      case 21:
        break;
      default:
        ni(
          r,
          n
        ), Si(n);
    }
  }
  function Si(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Iv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Ic(n);
            gi(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ic(n);
            mo(n, E, m);
            break;
          default:
            throw Error(M(161));
        }
      } catch (w) {
        wn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Wv(n, r, l) {
    me = n, go(n);
  }
  function go(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Rs;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || Pn;
          E = Rs;
          var A = Pn;
          if (Rs = m, (Pn = w) && !A)
            for (me = c; me !== null; )
              m = me, w = m.child, m.tag === 22 && m.memoizedState !== null ? qv(c) : w !== null ? (w.return = m, me = w) : qv(c);
          for (; d !== null; )
            me = d, go(d), d = d.sibling;
          me = c, Rs = E, Pn = A;
        }
        Gv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Gv(n);
    }
  }
  function Gv(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Pn || bs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Pn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && lu(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  lu(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var W = A.memoizedState;
                    if (W !== null) {
                      var G = W.dehydrated;
                      G !== null && vl(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(M(163));
            }
          Pn || r.flags & 512 && Ud(r);
        } catch (Q) {
          wn(r, r.return, Q);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Fd(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function qv(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              bs(4, r);
            } catch (w) {
              wn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                wn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Ud(r);
            } catch (w) {
              wn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ud(r);
            } catch (w) {
              wn(r, m, w);
            }
        }
      } catch (w) {
        wn(r, r.return, w);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var Qc = Math.ceil, xs = dt.ReactCurrentDispatcher, jd = dt.ReactCurrentOwner, Er = dt.ReactCurrentBatchConfig, vt = 0, gn = null, Tn = null, Kn = 0, Sa = 0, So = et(0), Bn = 0, _s = null, Yi = 0, Wc = 0, Eo = 0, gu = null, Or = null, Hd = 0, Co = 1 / 0, Ii = null, Gc = !1, Su = null, Ei = null, Nl = !1, zl = null, qc = 0, Ro = 0, Xc = null, Eu = -1, Cu = 0;
  function Cr() {
    return vt & 6 ? xt() : Eu !== -1 ? Eu : Eu = xt();
  }
  function zn(n) {
    return n.mode & 1 ? vt & 2 && Kn !== 0 ? Kn & -Kn : yc.transition !== null ? (Cu === 0 && (Cu = Bu()), Cu) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qo(n.type)), n) : 1;
  }
  function Rr(n, r, l, o) {
    if (50 < Ro)
      throw Ro = 0, Xc = null, Error(M(185));
    ki(n, l, o), (!(vt & 2) || n !== gn) && (n === gn && (!(vt & 2) && (Wc |= l), Bn === 4 && ja(n, Kn)), Tr(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (Co = xt() + 500, Gn && Kr()));
  }
  function Tr(n, r) {
    var l = n.callbackNode;
    cl(n, r);
    var o = Dr(n, n === gn ? Kn : 0);
    if (o === 0)
      l !== null && tr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tr(l), r === 1)
        n.tag === 0 ? fd(Xv.bind(null, n)) : cd(Xv.bind(null, n)), ud(function() {
          !(vt & 6) && Kr();
        }), l = null;
      else {
        switch (Yu(o)) {
          case 1:
            l = Ga;
            break;
          case 4:
            l = ot;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = Vu;
            break;
          default:
            l = fi;
        }
        l = Id(l, To.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function To(n, r) {
    if (Eu = -1, Cu = 0, vt & 6)
      throw Error(M(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l)
      return null;
    var o = Dr(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Zc(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = Kc();
      (gn !== n || Kn !== r) && (Ii = null, Co = xt() + 500, Ru(n, r));
      do
        try {
          sy();
          break;
        } catch (E) {
          Kv(n, E);
        }
      while (1);
      yd(), xs.current = d, vt = c, Tn !== null ? r = 0 : (gn = null, Kn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fl(n), c !== 0 && (o = c, r = Vd(n, c))), r === 1)
        throw l = _s, Ru(n, 0), ja(n, o), Tr(n, xt()), l;
      if (r === 6)
        ja(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Pd(c) && (r = Zc(n, o), r === 2 && (d = fl(n), d !== 0 && (o = d, r = Vd(n, d))), r === 1))
          throw l = _s, Ru(n, 0), ja(n, o), Tr(n, xt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            Tu(n, Or, Ii);
            break;
          case 3:
            if (ja(n, o), (o & 130023424) === o && (r = Hd + 500 - xt(), 10 < r)) {
              if (Dr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ru(Tu.bind(null, n, Or, Ii), r);
              break;
            }
            Tu(n, Or, Ii);
            break;
          case 4:
            if (ja(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = xt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Qc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ru(Tu.bind(null, n, Or, Ii), o);
              break;
            }
            Tu(n, Or, Ii);
            break;
          case 5:
            Tu(n, Or, Ii);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return Tr(n, xt()), n.callbackNode === l ? To.bind(null, n) : null;
  }
  function Vd(n, r) {
    var l = gu;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = Zc(n, r), n !== 2 && (r = Or, Or = l, r !== null && Ds(r)), n;
  }
  function Ds(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function Pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Da(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ja(n, r) {
    for (r &= ~Eo, r &= ~Wc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Xv(n) {
    if (vt & 6)
      throw Error(M(327));
    bo();
    var r = Dr(n, 0);
    if (!(r & 1))
      return Tr(n, xt()), null;
    var l = Zc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = fl(n);
      o !== 0 && (r = o, l = Vd(n, o));
    }
    if (l === 1)
      throw l = _s, Ru(n, 0), ja(n, r), Tr(n, xt()), l;
    if (l === 6)
      throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, Or, Ii), Tr(n, xt()), null;
  }
  function wo(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (Co = xt() + 500, Gn && Kr());
    }
  }
  function Ul(n) {
    zl !== null && zl.tag === 0 && !(vt & 6) && bo();
    var r = vt;
    vt |= 1;
    var l = Er.transition, o = Lt;
    try {
      if (Er.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, Er.transition = l, vt = r, !(vt & 6) && Kr();
    }
  }
  function Bd() {
    Sa = So.current, Ut(So);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, wv(l)), Tn !== null)
      for (l = Tn.return; l !== null; ) {
        var o = l;
        switch (pd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && La();
            break;
          case 3:
            kl(), Ut(Rn), Ut(Be), Tc();
            break;
          case 5:
            ct(o);
            break;
          case 4:
            kl();
            break;
          case 13:
            Ut(Ue);
            break;
          case 19:
            Ut(Ue);
            break;
          case 10:
            bl(o.type._context);
            break;
          case 22:
          case 23:
            Bd();
        }
        l = l.return;
      }
    if (gn = n, Tn = n = Al(n.current, null), Kn = Sa = r, Bn = 0, _s = null, Eo = Wc = Yi = 0, Or = gu = null, rr !== null) {
      for (r = 0; r < rr.length; r++)
        if (l = rr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      rr = null;
    }
    return n;
  }
  function Kv(n, r) {
    do {
      var l = Tn;
      try {
        if (yd(), wc.current = Vc, Fe) {
          for (var o = un.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fe = !1;
        }
        if (ou = 0, Et = P = un = null, yi = !1, ga = 0, jd.current = null, l === null || l.return === null) {
          Bn = 1, _s = r, Tn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = Kn, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, W = E, G = W.tag;
            if (!(W.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var Q = W.alternate;
              Q ? (W.updateQueue = Q.updateQueue, W.memoizedState = Q.memoizedState, W.lanes = Q.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var ce = xd(m);
            if (ce !== null) {
              ce.flags &= -257, _d(ce, m, E, d, r), ce.mode & 1 && Hv(d, A, r), r = ce, w = A;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(w), r.updateQueue = Ce;
              } else
                ge.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Hv(d, A, r), $d();
                break e;
              }
              w = Error(M(426));
            }
          } else if (ln && E.mode & 1) {
            var kn = xd(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), _d(kn, m, E, d, r), hd(fo(w, E));
              break e;
            }
          }
          d = w = fo(w, E), Bn !== 4 && (Bn = 2), gu === null ? gu = [d] : gu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = jv(d, w, r);
                Ed(d, D);
                break e;
              case 1:
                E = w;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ei === null || !Ei.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Z = Ss(d, E, r);
                  Ed(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Yd(l);
      } catch (Re) {
        r = Re, Tn === l && l !== null && (Tn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Kc() {
    var n = xs.current;
    return xs.current = Vc, n === null ? Vc : n;
  }
  function $d() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), gn === null || !(Yi & 268435455) && !(Wc & 268435455) || ja(gn, Kn);
  }
  function Zc(n, r) {
    var l = vt;
    vt |= 2;
    var o = Kc();
    (gn !== n || Kn !== r) && (Ii = null, Ru(n, r));
    do
      try {
        oy();
        break;
      } catch (c) {
        Kv(n, c);
      }
    while (1);
    if (yd(), vt = l, xs.current = o, Tn !== null)
      throw Error(M(261));
    return gn = null, Kn = 0, Bn;
  }
  function oy() {
    for (; Tn !== null; )
      Zv(Tn);
  }
  function sy() {
    for (; Tn !== null && !ci(); )
      Zv(Tn);
  }
  function Zv(n) {
    var r = eh(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Yd(n) : Tn = r, jd.current = null;
  }
  function Yd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = zd(l, r), l !== null) {
          l.flags &= 32767, Tn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, Tn = null;
          return;
        }
      } else if (l = uy(l, r, Sa), l !== null) {
        Tn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Tn = r;
        return;
      }
      Tn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Tu(n, r, l) {
    var o = Lt, c = Er.transition;
    try {
      Er.transition = null, Lt = 1, cy(n, r, l, o);
    } finally {
      Er.transition = c, Lt = o;
    }
    return null;
  }
  function cy(n, r, l, o) {
    do
      bo();
    while (zl !== null);
    if (vt & 6)
      throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Vf(n, d), n === gn && (Tn = gn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Nl || (Nl = !0, Id(fi, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Er.transition, Er.transition = null;
      var m = Lt;
      Lt = 1;
      var E = vt;
      vt |= 4, jd.current = null, Yv(n, l), Qv(l, n), lc(nu), _a = !!id, nu = id = null, n.current = l, Wv(l), Hu(), vt = E, Lt = m, Er.transition = d;
    } else
      n.current = l;
    if (Nl && (Nl = !1, zl = n, qc = c), d = n.pendingLanes, d === 0 && (Ei = null), Qo(l.stateNode), Tr(n, xt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Gc)
      throw Gc = !1, n = Su, Su = null, n;
    return qc & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === Xc ? Ro++ : (Ro = 0, Xc = n) : Ro = 0, Kr(), null;
  }
  function bo() {
    if (zl !== null) {
      var n = Yu(qc), r = Er.transition, l = Lt;
      try {
        if (Er.transition = null, Lt = 16 > n ? 16 : n, zl === null)
          var o = !1;
        else {
          if (n = zl, zl = null, qc = 0, vt & 6)
            throw Error(M(331));
          var c = vt;
          for (vt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var A = E[w];
                  for (me = A; me !== null; ) {
                    var W = me;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, W, d);
                    }
                    var G = W.child;
                    if (G !== null)
                      G.return = W, me = G;
                    else
                      for (; me !== null; ) {
                        W = me;
                        var Q = W.sibling, ce = W.return;
                        if (Ad(W), W === A) {
                          me = null;
                          break;
                        }
                        if (Q !== null) {
                          Q.return = ce, me = Q;
                          break;
                        }
                        me = ce;
                      }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var kn = Ce.sibling;
                      Ce.sibling = null, Ce = kn;
                    } while (Ce !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, me = m;
            else
              e:
                for (; me !== null; ) {
                  if (d = me, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, me = D;
                    break e;
                  }
                  me = d.return;
                }
          }
          var x = n.current;
          for (me = x; me !== null; ) {
            m = me;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, me = L;
            else
              e:
                for (m = x; me !== null; ) {
                  if (E = me, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          bs(9, E);
                      }
                    } catch (Re) {
                      wn(E, E.return, Re);
                    }
                  if (E === m) {
                    me = null;
                    break e;
                  }
                  var Z = E.sibling;
                  if (Z !== null) {
                    Z.return = E.return, me = Z;
                    break e;
                  }
                  me = E.return;
                }
          }
          if (vt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(ul, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, Er.transition = r;
      }
    }
    return !1;
  }
  function Jv(n, r, l) {
    r = fo(l, r), r = jv(n, r, 1), n = _l(n, r, 1), r = Cr(), n !== null && (ki(n, 1, r), Tr(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3)
      Jv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Jv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ei === null || !Ei.has(o))) {
            n = fo(l, n), n = Ss(r, n, 1), r = _l(r, n, 1), n = Cr(), r !== null && (ki(r, 1, n), Tr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function fy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, gn === n && (Kn & l) === l && (Bn === 4 || Bn === 3 && (Kn & 130023424) === Kn && 500 > xt() - Hd ? Ru(n, 0) : Eo |= l), Tr(n, r);
  }
  function Jc(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var l = Cr();
    n = Hi(n, r), n !== null && (ki(n, r, l), Tr(n, l));
  }
  function dy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Jc(n, l);
  }
  function py(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(M(314));
    }
    o !== null && o.delete(r), Jc(n, l);
  }
  var eh;
  eh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        Nn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Nn = !1, Bi(n, r, l);
        Nn = !!(n.flags & 131072);
      }
    else
      Nn = !1, ln && r.flags & 1048576 && dd(r, ao, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = Oa(r, Be.current);
        ne(r, l), c = Ol(null, r, o, n, c, l);
        var d = fu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, cn(o) ? (d = !0, dc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Sd(r), c.updater = Ec, r.stateNode = c, c._reactInternals = r, Cc(r, o, n, l), r = Vv(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && pc(r), Hn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = ya(o, n), c) {
            case 0:
              r = po(null, r, o, n, l);
              break e;
            case 1:
              r = Dd(null, r, o, n, l);
              break e;
            case 11:
              r = Ml(null, r, o, n, l);
              break e;
            case 14:
              r = Bc(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), po(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Dd(n, r, o, c, l);
      case 3:
        e: {
          if (Pv(r), n === null)
            throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jn(n, r), Dl(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = fo(Error(M(423)), r), r = $c(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = fo(Error(M(424)), r), r = $c(n, r, o, l, c);
              break e;
            } else
              for (ea = ei(r.stateNode.containerInfo.firstChild), ma = r, ln = !0, Na = null, l = Av(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mn(), o === c) {
              r = ar(n, r, l);
              break e;
            }
            Hn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ne(r), n === null && hc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, us(o, c) ? m = null : d !== null && us(o, d) && (r.flags |= 32), tt(n, r), Hn(n, r, m, l), r.child;
      case 6:
        return n === null && hc(r), null;
      case 13:
        return Od(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = lo(r, null, o, l) : Hn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Ml(n, r, o, c, l);
      case 7:
        return Hn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Hn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Hn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Bt(mi, o._currentValue), o._currentValue = m, d !== null)
            if (Da(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = ar(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var w = E.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = Vi(-1, l & -l), w.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var W = A.pending;
                          W === null ? w.next = w : (w.next = W.next, W.next = w), A.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), qn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(M(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), qn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Hn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ne(r, l), c = Dn(c), o = o(c), r.flags |= 1, Hn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Bc(n, r, o, c, l);
      case 15:
        return ra(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, cn(o) ? (n = !0, dc(r)) : n = !1, ne(r, l), Mv(r, o, c), Cc(r, o, c, l), Vv(null, r, o, !0, n, l);
      case 19:
        return Nd(n, r, l);
      case 22:
        return hu(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function Id(n, r) {
    return tn(n, r);
  }
  function vy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new vy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function")
      return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === At)
        return 14;
    }
    return 2;
  }
  function Al(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ef(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Qd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case He:
            return wu(l.children, c, d, r);
          case rn:
            m = 8, c |= 8;
            break;
          case bn:
            return n = Ha(12, l, r, c | 2), n.elementType = bn, n.lanes = d, n;
          case Ae:
            return n = Ha(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
          case Ze:
            return n = Ha(19, l, r, c), n.elementType = Ze, n.lanes = d, n;
          case ye:
            return ks(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Qt:
                  m = 10;
                  break e;
                case Ot:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case At:
                  m = 14;
                  break e;
                case bt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(M(130, n == null ? n : typeof n, ""));
        }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function wu(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function ks(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Os(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function bu(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function my(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $u(0), this.expirationTimes = $u(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $u(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function tf(n, r, l, o, c, d, m, E, w) {
    return n = new my(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sd(d), n;
  }
  function th(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ut, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Wd(n) {
    if (!n)
      return hi;
    n = n._reactInternals;
    e: {
      if (Ke(n) !== n || n.tag !== 1)
        throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (cn(l))
        return cs(n, l, r);
    }
    return r;
  }
  function nh(n, r, l, o, c, d, m, E, w) {
    return n = tf(l, o, !0, n, c, d, m, E, w), n.context = Wd(null), l = n.current, o = Cr(), c = zn(l), d = Vi(o, c), d.callback = r ?? null, _l(l, d, c), n.current.lanes = c, ki(n, c, o), Tr(n, o), n;
  }
  function Ls(n, r, l, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return l = Wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Vi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = _l(c, r, m), n !== null && (Rr(n, c, m, d), Sc(n, c, m)), m;
  }
  function nf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function rh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Gd(n, r) {
    rh(n, r), (n = n.alternate) && rh(n, r);
  }
  function ah() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function rf(n) {
    this._internalRoot = n;
  }
  Qi.prototype.render = rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(M(409));
    Ls(n, r, null, null);
  }, Qi.prototype.unmount = rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ul(function() {
        Ls(null, n, null, null);
      }), r[Fi] = null;
    }
  };
  function Qi(n) {
    this._internalRoot = n;
  }
  Qi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Qu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Pt.length && r !== 0 && r < Pt[l].priority; l++)
        ;
      Pt.splice(l, 0, n), l === 0 && Js(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = nf(m);
          d.call(A);
        };
      }
      var m = nh(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = m, n[Fi] = m.current, no(n.nodeType === 8 ? n.parentNode : n), Ul(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = nf(w);
        E.call(A);
      };
    }
    var w = tf(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = w, n[Fi] = w.current, no(n.nodeType === 8 ? n.parentNode : n), Ul(function() {
      Ls(r, w, l, o);
    }), w;
  }
  function lf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = nf(m);
          E.call(w);
        };
      }
      Ls(r, m, n, c);
    } else
      m = yy(l, r, n, c, o);
    return nf(m);
  }
  ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qa(r.pendingLanes);
          l !== 0 && (di(r, l | 1), Tr(r, xt()), !(vt & 6) && (Co = xt() + 500, Kr()));
        }
        break;
      case 13:
        Ul(function() {
          var o = Hi(n, 1);
          if (o !== null) {
            var c = Cr();
            Rr(o, n, 1, c);
          }
        }), Gd(n, 1);
    }
  }, Iu = function(n) {
    if (n.tag === 13) {
      var r = Hi(n, 134217728);
      if (r !== null) {
        var l = Cr();
        Rr(r, n, 134217728, l);
      }
      Gd(n, 134217728);
    }
  }, _t = function(n) {
    if (n.tag === 13) {
      var r = zn(n), l = Hi(n, r);
      if (l !== null) {
        var o = Cr();
        Rr(l, n, r, o);
      }
      Gd(n, r);
    }
  }, Qu = function() {
    return Lt;
  }, Wu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, br = function(n, r, l) {
    switch (r) {
      case "input":
        if (xn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = ke(o);
              if (!c)
                throw Error(M(90));
              Pr(o), xn(o, c);
            }
          }
        }
        break;
      case "textarea":
        sa(n, l);
        break;
      case "select":
        r = l.value, r != null && vr(n, !!l.multiple, r, !1);
    }
  }, Gl = wo, ju = Ul;
  var gy = { usingClientEntryPoint: !1, Events: [ss, ro, ke, ba, al, wo] }, xo = { findFiberByHostInstance: ka, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Sy = { bundleType: xo.bundleType, version: xo.version, rendererPackageName: xo.rendererPackageName, rendererConfig: xo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xo.findFiberByHostInstance || ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uf.isDisabled && uf.supportsFiber)
      try {
        ul = uf.inject(Sy), Qr = uf;
      } catch {
      }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r))
      throw Error(M(200));
    return th(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!Xd(n))
      throw Error(M(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = tf(n, 1, !1, null, null, l, !1, o, c), n[Fi] = r.current, no(n.nodeType === 8 ? n.parentNode : n), new rf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Ul(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!af(r))
      throw Error(M(200));
    return lf(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!Xd(n))
      throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = nh(r, null, n, 1, l ?? null, c, !1, d, m), n[Fi] = r.current, no(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Qi(r);
  }, Ia.render = function(n, r, l) {
    if (!af(r))
      throw Error(M(200));
    return lf(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!af(n))
      throw Error(M(40));
    return n._reactRootContainer ? (Ul(function() {
      lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fi] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = wo, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!af(l))
      throw Error(M(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(M(38));
    return lf(n, r, l, !1, o);
  }, Ia.version = "18.2.0-next-9e3b772b8-20220608", Ia;
}
var Qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function iD() {
  return lR || (lR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var j = Xs, Y = dR(), M = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ft = !1;
    function yt(e) {
      ft = e;
    }
    function Pe(e) {
      if (!ft) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        wt("warn", e, a);
      }
    }
    function S(e) {
      if (!ft) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        wt("error", e, a);
      }
    }
    function wt(e, t, a) {
      {
        var i = M.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var de = 0, se = 1, nt = 2, X = 3, ie = 4, ae = 5, xe = 6, Xe = 7, Ie = 8, qt = 9, lt = 10, Ge = 11, dt = 12, _e = 13, ut = 14, He = 15, rn = 16, bn = 17, Qt = 18, Ot = 19, En = 21, Ae = 22, Ze = 23, At = 24, bt = 25, ye = !0, J = !1, we = !1, T = !1, $ = !1, ue = !0, Ye = !1, je = !1, gt = !0, rt = !0, pt = !0, at = /* @__PURE__ */ new Set(), Ft = {}, Vr = {};
    function pr(e, t) {
      Pr(e, t), Pr(e + "Capture", t);
    }
    function Pr(e, t) {
      Ft[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ft[e] = t;
      {
        var a = e.toLowerCase();
        Vr[a] = e, e === "onDoubleClick" && (Vr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        at.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function An(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Fn(e) {
      try {
        return xn(e), !1;
      } catch {
        return !0;
      }
    }
    function xn(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Fn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function $r(e) {
      if (Fn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    function In(e, t) {
      if (Fn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function vr(e, t) {
      if (Fn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function Yr(e) {
      if (Fn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    function hr(e) {
      if (Fn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    var sa = 0, er = 1, Ir = 2, pn = 3, wr = 4, li = 5, ca = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", it = new RegExp("^[" + ee + "][" + be + "]*$"), zt = {}, jt = {};
    function _n(e) {
      return Yn.call(jt, e) ? !0 : Yn.call(zt, e) ? !1 : it.test(e) ? (jt[e] = !0, !0) : (zt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case wr:
            return t === !1;
          case li:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function br(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Ht(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === pn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, Wa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Wa.forEach(function(e) {
      Vt[e] = new Ht(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Ht(
        t,
        er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        Ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        Ir,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        li,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ba = /[\-\:]([a-z])/g, al = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, al);
      Vt[t] = new Ht(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, al);
      Vt[t] = new Ht(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, al);
      Vt[t] = new Ht(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gl = "xlinkHref";
    Vt[Gl] = new Ht(
      "xlinkHref",
      er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Ht(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ju = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Di = !1;
    function il(e) {
      !Di && ju.test(e) && (Di = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && il("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Yt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Yt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return Yt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ui(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
      var u = br(t);
      if (!vn(t, u, i)) {
        if (Yt(t, a, u, i) && (a = null), i || u === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === pn || _ === wr && a === !0 ? b = "" : (Br(a, y), b = "" + a, u.sanitizeURL && il(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var oi = Symbol.for("react.element"), xr = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), te = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), Ke = Symbol.for("react.suspense"), St = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.cache"), Hu = Symbol.for("react.tracing_marker"), xt = Symbol.iterator, Hf = "@@iterator";
    function Ga(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = xt && e[xt] || e[Hf];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, fi = 0, ll, Vu, ul, Qr, Qo, _r, Wo;
    function Go() {
    }
    Go.__reactDisabledLog = !0;
    function Ks() {
      {
        if (fi === 0) {
          ll = console.log, Vu = console.info, ul = console.warn, Qr = console.error, Qo = console.group, _r = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Go,
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
        fi++;
      }
    }
    function Pu() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: ll
            }),
            info: ot({}, e, {
              value: Vu
            }),
            warn: ot({}, e, {
              value: ul
            }),
            error: ot({}, e, {
              value: Qr
            }),
            group: ot({}, e, {
              value: Qo
            }),
            groupCollapsed: ot({}, e, {
              value: _r
            }),
            groupEnd: ot({}, e, {
              value: Wo
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ol = M.ReactCurrentDispatcher, qa;
    function Dr(e, t, a) {
      {
        if (qa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            qa = i && i[1] || "";
          }
        return `
` + qa + e;
      }
    }
    var sl = !1, cl;
    {
      var fl = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new fl();
    }
    function Bu(e, t) {
      if (!e || sl)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      sl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ol.current, ol.current = null, Ks();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        sl = !1, ol.current = s, Pu(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", N = b ? Dr(b) : "";
      return typeof e == "function" && cl.set(e, N), N;
    }
    function $u(e, t, a) {
      return Bu(e, !0);
    }
    function ki(e, t, a) {
      return Bu(e, !1);
    }
    function Vf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function di(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bu(e, Vf(e));
      if (typeof e == "string")
        return Dr(e);
      switch (e) {
        case Ke:
          return Dr("Suspense");
        case St:
          return Dr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pe:
            return ki(e.render);
          case Je:
            return di(e.type, t, a);
          case Oe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return di(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return Dr(e.type);
        case rn:
          return Dr("Lazy");
        case _e:
          return Dr("Suspense");
        case Ot:
          return Dr("SuspenseList");
        case de:
        case nt:
        case He:
          return ki(e.type);
        case Ge:
          return ki(e.type.render);
        case se:
          return $u(e.type);
        default:
          return "";
      }
    }
    function Yu(e) {
      try {
        var t = "", a = e;
        do
          t += Lt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ql(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Iu(e) {
      return e.displayName || "Context";
    }
    function _t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case xr:
          return "Portal";
        case R:
          return "Profiler";
        case si:
          return "StrictMode";
        case Ke:
          return "Suspense";
        case St:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case te:
            var t = e;
            return Iu(t) + ".Consumer";
          case I:
            var a = e;
            return Iu(a._context) + ".Provider";
          case pe:
            return ql(e, e.render, "ForwardRef");
          case Je:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case Oe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Wu(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case At:
          return "Cache";
        case qt:
          var i = a;
          return Wu(i) + ".Consumer";
        case lt:
          var u = a;
          return Wu(u._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case Ge:
          return Qu(a, a.render, "ForwardRef");
        case Xe:
          return "Fragment";
        case ae:
          return a;
        case ie:
          return "Portal";
        case X:
          return "Root";
        case xe:
          return "Text";
        case rn:
          return _t(a);
        case Ie:
          return a === si ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case dt:
          return "Profiler";
        case En:
          return "Scope";
        case _e:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case bt:
          return "TracingMarker";
        case se:
        case de:
        case bn:
        case nt:
        case ut:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = M.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function kr() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function dl() {
      return hn === null ? "" : Yu(hn);
    }
    function Cn() {
      Xl.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Pt(e) {
      Xl.getCurrentStack = e === null ? null : dl, hn = e, Wr = !1;
    }
    function Zs() {
      return hn;
    }
    function Gr(e) {
      Wr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function pi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return hr(e), e;
        default:
          return "";
      }
    }
    var Js = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Oi(e, t) {
      Js[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function pl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ec(e) {
      return e._valueTracker;
    }
    function xa(e) {
      e._valueTracker = null;
    }
    function vl(e) {
      var t = "";
      return e && (pl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function hl(e) {
      var t = pl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      hr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            hr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            hr(p), i = "" + p;
          },
          stopTracking: function() {
            xa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function _a(e) {
      ec(e) || (e._valueTracker = hl(e));
    }
    function Gu(e) {
      if (!e)
        return !1;
      var t = ec(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = vl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ml(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yl = !1, Kl = !1, qu = !1, qo = !1;
    function Xa(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Oi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Kl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Kl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), yl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: pi(t.value != null ? t.value : i),
        controlled: Xa(t)
      };
    }
    function z(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Xa(t);
        !a._wrapperState.controlled && i && !qo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qo = !0), a._wrapperState.controlled && !i && !qu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qu = !0);
      }
      z(e, t);
      var u = pi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function K(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function ze(e, t) {
      var a = e;
      F(a, t), le(a, t);
    }
    function le(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Rh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Gu(f), F(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ml(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var st = !1, Dt = !1, Xt = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? j.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Dt || (Dt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Xt || (Xt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function Kt(e, t) {
      t.value != null && e.setAttribute("value", Qn(pi(t.value)));
    }
    var nn = Array.isArray;
    function mt(e) {
      return nn(e);
    }
    var Li;
    Li = !1;
    function Xu() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Xo = ["value", "defaultValue"];
    function Pf(e) {
      {
        Oi("select", e);
        for (var t = 0; t < Xo.length; t++) {
          var a = Xo[t];
          if (e[a] != null) {
            var i = mt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Xu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Xu());
          }
        }
      }
    }
    function Ka(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Qn(pi(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Ko(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Zo(e, t) {
      var a = e;
      Pf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Li && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Li = !0);
    }
    function Bf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ka(a, !!t.multiple, i, !1) : t.defaultValue != null && Ka(a, !!t.multiple, t.defaultValue, !0);
    }
    function Vm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ka(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ka(a, !!t.multiple, t.defaultValue, !0) : Ka(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pm(e, t) {
      var a = e, i = t.value;
      i != null && Ka(a, !!t.multiple, i, !1);
    }
    var $f = !1;
    function Yf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kp(e, t) {
      var a = e;
      Oi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !$f && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), $f = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: pi(i)
      };
    }
    function Zp(e, t) {
      var a = e, i = pi(t.value), u = pi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function Jp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function If(e, t) {
      Zp(e, t);
    }
    var Mi = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/1998/Math/MathML", Qf = "http://www.w3.org/2000/svg";
    function tc(e) {
      switch (e) {
        case "svg":
          return Qf;
        case "math":
          return Bm;
        default:
          return Mi;
      }
    }
    function Wf(e, t) {
      return e == null || e === Mi ? tc(t) : e === Qf && t === "foreignObject" ? Mi : e;
    }
    var $m = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, nc, ev = $m(function(e, t) {
      if (e.namespaceURI === Qf && !("innerHTML" in e)) {
        nc = nc || document.createElement("div"), nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Ni = 3, Mn = 8, Za = 9, Zl = 11, rc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ni) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, tv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ku = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function nv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var rv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ku).forEach(function(e) {
      rv.forEach(function(t) {
        Ku[nv(t, e)] = Ku[e];
      });
    });
    function ac(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ku.hasOwnProperty(e) && Ku[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var Zu = /([A-Z])/g, Ym = /^ms-/;
    function Im(e) {
      return e.replace(Zu, "-$1").toLowerCase().replace(Ym, "-ms-");
    }
    var av = function() {
    };
    {
      var iv = /^(?:webkit|moz|o)[A-Z]/, lv = /^-ms-/, Jo = /-(.)/g, Ju = /;\s*$/, eo = {}, to = {}, uv = !1, Gf = !1, qf = function(e) {
        return e.replace(Jo, function(t, a) {
          return a.toUpperCase();
        });
      }, Xf = function(e) {
        eo.hasOwnProperty(e) && eo[e] || (eo[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          qf(e.replace(lv, "ms-"))
        ));
      }, ov = function(e) {
        eo.hasOwnProperty(e) && eo[e] || (eo[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, sv = function(e, t) {
        to.hasOwnProperty(t) && to[t] || (to[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ju, "")));
      }, cv = function(e, t) {
        uv || (uv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qm = function(e, t) {
        Gf || (Gf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      av = function(e, t) {
        e.indexOf("-") > -1 ? Xf(e) : iv.test(e) ? ov(e) : Ju.test(t) && sv(e, t), typeof t == "number" && (isNaN(t) ? cv(e, t) : isFinite(t) || Qm(e, t));
      };
    }
    var Wm = av;
    function Gm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Im(i)) + ":", t += ac(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function fv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Wm(i, t[i]);
          var s = ac(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function qm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Da(e) {
      var t = {};
      for (var a in e)
        for (var i = tv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function es(e, t) {
      {
        if (!t)
          return;
        var a = Da(e), i = Da(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", qm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var dv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, pv = ot({
      menuitem: !0
    }, dv), vv = "__html";
    function ic(e, t) {
      if (t) {
        if (pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(vv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function zi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var lc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, hv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ja = {}, Kf = new RegExp("^(aria)-[" + be + "]*$"), ts = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function Zf(e, t) {
      {
        if (Yn.call(Ja, t) && Ja[t])
          return !0;
        if (ts.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = hv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ja[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ja[t] = !0, !0;
        }
        if (Kf.test(t)) {
          var u = t.toLowerCase(), s = hv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ja[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ja[t] = !0, !0;
        }
      }
      return !0;
    }
    function mv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Zf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function uc(e, t) {
      zi(e, t) || mv(e, t);
    }
    var Jl = !1;
    function Jf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ed = function() {
    };
    {
      var Wn = {}, td = /^on./, yv = /^on[^A-Z]/, gv = new RegExp("^(aria)-[" + be + "]*$"), Sv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      ed = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (td.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (td.test(t))
          return yv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (gv.test(t) || Sv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = br(t), y = v !== null && v.type === sa;
        if (lc.hasOwnProperty(u)) {
          var g = lc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Wn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Ev = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ed(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Cv(e, t, a) {
      zi(e, t) || Ev(e, t, a);
    }
    var Ui = 1, ns = 2, eu = 4, Xm = Ui | ns | eu, rs = null;
    function as(e) {
      rs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), rs = e;
    }
    function Km() {
      rs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), rs = null;
    }
    function Rv(e) {
      return e === rs;
    }
    function oc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ni ? t.parentNode : t;
    }
    var Zt = null, gl = null, Ai = null;
    function no(e) {
      var t = ko(e);
      if (t) {
        if (typeof Zt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rh(a);
          Zt(t.stateNode, t.type, i);
        }
      }
    }
    function Tv(e) {
      Zt = e;
    }
    function sc(e) {
      gl ? Ai ? Ai.push(e) : Ai = [e] : gl = e;
    }
    function is() {
      return gl !== null || Ai !== null;
    }
    function ls() {
      if (gl) {
        var e = gl, t = Ai;
        if (gl = null, Ai = null, no(e), t)
          for (var a = 0; a < t.length; a++)
            no(t[a]);
      }
    }
    var tu = function(e, t) {
      return e(t);
    }, nd = function() {
    }, rd = !1;
    function Zm() {
      var e = is();
      e && (nd(), ls());
    }
    function ad(e, t, a) {
      if (rd)
        return e(t, a);
      rd = !0;
      try {
        return tu(e, t, a);
      } finally {
        rd = !1, Zm();
      }
    }
    function cc(e, t, a) {
      tu = e, nd = a;
    }
    function fc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function id(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && fc(t));
        default:
          return !1;
      }
    }
    function nu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (id(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (dn)
      try {
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
      } catch {
        us = !1;
      }
    function wv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var ld = wv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ud = document.createElement("react");
      ld = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          ud.removeEventListener(V, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ve = Array.prototype.slice.call(arguments, 3);
        function Le() {
          _ = !0, H(), a.apply(i, ve), b = !1;
        }
        var Te, Rt = !1, ht = !1;
        function k(O) {
          if (Te = O.error, Rt = !0, Te === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), ud.addEventListener(V, Le, !1), g.initEvent(V, !1, !1), ud.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && b && (Rt ? ht && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", k), !_)
          return H(), wv.apply(this, arguments);
      };
    }
    var Jm = ld, Sl = !1, ei = null, os = !1, El = null, vi = {
      onError: function(e) {
        Sl = !0, ei = e;
      }
    };
    function au(e, t, a, i, u, s, f, p, v) {
      Sl = !1, ei = null, Jm.apply(vi, arguments);
    }
    function Fi(e, t, a, i, u, s, f, p, v) {
      if (au.apply(this, arguments), Sl) {
        var y = sd();
        os || (os = !0, El = y);
      }
    }
    function od() {
      if (os) {
        var e = El;
        throw os = !1, El = null, e;
      }
    }
    function ey() {
      return Sl;
    }
    function sd() {
      if (Sl) {
        var e = ei;
        return Sl = !1, ei = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ka(e) {
      return e._reactInternals;
    }
    function ss(e) {
      return e._reactInternals !== void 0;
    }
    function ro(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), Cl = (
      /*                */
      1
    ), an = (
      /*                    */
      2
    ), et = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), Bt = (
      /*                 */
      32
    ), hi = (
      /*                     */
      64
    ), Be = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), Oa = (
      /*                     */
      1024
    ), cn = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), cs = (
      /*             */
      16384
    ), dc = cn | et | hi | Xr | Oa | cs, bv = (
      /*               */
      32767
    ), va = (
      /*                   */
      32768
    ), Gn = (
      /*                */
      65536
    ), fs = (
      /* */
      131072
    ), cd = (
      /*                       */
      1048576
    ), fd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), Tl = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), iu = (
      /*              */
      33554432
    ), ao = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      et | Oa | 0
    ), Jr = an | et | Ut | Bt | Xr | La | Rl, yr = et | hi | Xr | Rl, Ma = cn | Ut, nr = Kr | Tl | fd, ji = M.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (an | La)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === X ? a : null;
    }
    function dd(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function pc(e) {
      return e.tag === X ? e.stateNode.containerInfo : null;
    }
    function pd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = ji.current;
        if (t !== null && t.tag === se) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ka(e);
      return u ? ha(u) === u : !1;
    }
    function ea(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ln(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== X)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Na(e) {
      var t = ln(e);
      return t !== null ? vd(t) : null;
    }
    function vd(e) {
      if (e.tag === ae || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = vd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xv(e) {
      var t = ln(e);
      return t !== null ? vc(t) : null;
    }
    function vc(e) {
      if (e.tag === ae || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ie) {
          var a = vc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hc = Y.unstable_scheduleCallback, _v = Y.unstable_cancelCallback, mc = Y.unstable_shouldYield, Dv = Y.unstable_requestPaint, mn = Y.unstable_now, hd = Y.unstable_getCurrentPriorityLevel, yc = Y.unstable_ImmediatePriority, ya = Y.unstable_UserBlockingPriority, mi = Y.unstable_NormalPriority, gc = Y.unstable_LowPriority, wl = Y.unstable_IdlePriority, md = Y.unstable_yieldValue, yd = Y.unstable_setDisableYieldValue, bl = null, qn = null, ne = null, Dn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        gt && (e = ot({}, e, {
          getLaneLabelMap: _l,
          injectProfilingHooks: Vi
        })), bl = t.inject(e), qn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function kv(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(bl, e, t);
        } catch (a) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Hi(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Be) === Be;
          if (rt) {
            var i;
            switch (t) {
              case gr:
                i = yc;
                break;
              case ar:
                i = ya;
                break;
              case Bi:
                i = mi;
                break;
              case Es:
                i = wl;
                break;
              default:
                i = mi;
                break;
            }
            qn.onCommitFiberRoot(bl, e, i, a);
          }
        } catch (u) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function xl(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(bl, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Sd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(bl, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof md == "function" && (yd(e), yt(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(bl, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vi(e) {
      ne = e;
    }
    function _l() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < un; a++) {
          var i = ty(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Sc(e) {
      ne !== null && typeof ne.markCommitStarted == "function" && ne.markCommitStarted(e);
    }
    function Ed() {
      ne !== null && typeof ne.markCommitStopped == "function" && ne.markCommitStopped();
    }
    function Dl(e) {
      ne !== null && typeof ne.markComponentRenderStarted == "function" && ne.markComponentRenderStarted(e);
    }
    function lu() {
      ne !== null && typeof ne.markComponentRenderStopped == "function" && ne.markComponentRenderStopped();
    }
    function Ov(e) {
      ne !== null && typeof ne.markComponentPassiveEffectMountStarted == "function" && ne.markComponentPassiveEffectMountStarted(e);
    }
    function Cd() {
      ne !== null && typeof ne.markComponentPassiveEffectMountStopped == "function" && ne.markComponentPassiveEffectMountStopped();
    }
    function Ec(e) {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStarted == "function" && ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function Lv() {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStopped == "function" && ne.markComponentPassiveEffectUnmountStopped();
    }
    function Mv(e) {
      ne !== null && typeof ne.markComponentLayoutEffectMountStarted == "function" && ne.markComponentLayoutEffectMountStarted(e);
    }
    function Nv() {
      ne !== null && typeof ne.markComponentLayoutEffectMountStopped == "function" && ne.markComponentLayoutEffectMountStopped();
    }
    function Cc(e) {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStarted == "function" && ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function io() {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStopped == "function" && ne.markComponentLayoutEffectUnmountStopped();
    }
    function Rc(e, t, a) {
      ne !== null && typeof ne.markComponentErrored == "function" && ne.markComponentErrored(e, t, a);
    }
    function zv(e, t, a) {
      ne !== null && typeof ne.markComponentSuspended == "function" && ne.markComponentSuspended(e, t, a);
    }
    function Uv(e) {
      ne !== null && typeof ne.markLayoutEffectsStarted == "function" && ne.markLayoutEffectsStarted(e);
    }
    function lo() {
      ne !== null && typeof ne.markLayoutEffectsStopped == "function" && ne.markLayoutEffectsStopped();
    }
    function Av(e) {
      ne !== null && typeof ne.markPassiveEffectsStarted == "function" && ne.markPassiveEffectsStarted(e);
    }
    function ds() {
      ne !== null && typeof ne.markPassiveEffectsStopped == "function" && ne.markPassiveEffectsStopped();
    }
    function ti(e) {
      ne !== null && typeof ne.markRenderStarted == "function" && ne.markRenderStarted(e);
    }
    function ps() {
      ne !== null && typeof ne.markRenderYielded == "function" && ne.markRenderYielded();
    }
    function uo() {
      ne !== null && typeof ne.markRenderStopped == "function" && ne.markRenderStopped();
    }
    function uu(e) {
      ne !== null && typeof ne.markRenderScheduled == "function" && ne.markRenderScheduled(e);
    }
    function Rd(e, t) {
      ne !== null && typeof ne.markForceUpdateScheduled == "function" && ne.markForceUpdateScheduled(e, t);
    }
    function kl(e, t) {
      ne !== null && typeof ne.markStateUpdateScheduled == "function" && ne.markStateUpdateScheduled(e, t);
    }
    var Ne = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Ue = (
      /*                    */
      2
    ), yn = (
      /*               */
      8
    ), za = (
      /*              */
      16
    ), Tc = Math.clz32 ? Math.clz32 : ou, wc = Math.log, Td = Math.LN2;
    function ou(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (wc(t) / Td | 0) | 0;
    }
    var un = 31, P = (
      /*                        */
      0
    ), Et = (
      /*                          */
      0
    ), Fe = (
      /*                        */
      1
    ), yi = (
      /*    */
      2
    ), ga = (
      /*             */
      4
    ), su = (
      /*            */
      8
    ), on = (
      /*                     */
      16
    ), cu = (
      /*                */
      32
    ), Ol = (
      /*                       */
      4194240
    ), fu = (
      /*                        */
      64
    ), Ua = (
      /*                        */
      128
    ), ta = (
      /*                        */
      256
    ), du = (
      /*                        */
      512
    ), vs = (
      /*                        */
      1024
    ), hs = (
      /*                        */
      2048
    ), bc = (
      /*                        */
      4096
    ), xc = (
      /*                        */
      8192
    ), _c = (
      /*                        */
      16384
    ), Dc = (
      /*                       */
      32768
    ), kc = (
      /*                       */
      65536
    ), Oc = (
      /*                       */
      131072
    ), Lc = (
      /*                       */
      262144
    ), Mc = (
      /*                       */
      524288
    ), pu = (
      /*                       */
      1048576
    ), Nc = (
      /*                       */
      2097152
    ), vu = (
      /*                            */
      130023424
    ), Pi = (
      /*                             */
      4194304
    ), zc = (
      /*                             */
      8388608
    ), ms = (
      /*                             */
      16777216
    ), Uc = (
      /*                             */
      33554432
    ), Ac = (
      /*                             */
      67108864
    ), wd = Pi, oo = (
      /*          */
      134217728
    ), Fc = (
      /*                          */
      268435455
    ), so = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function ty(e) {
      {
        if (e & Fe)
          return "Sync";
        if (e & yi)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & su)
          return "DefaultHydration";
        if (e & on)
          return "Default";
        if (e & cu)
          return "TransitionHydration";
        if (e & Ol)
          return "Transition";
        if (e & vu)
          return "Retry";
        if (e & oo)
          return "SelectiveHydration";
        if (e & so)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Jt = -1, jc = fu, Hc = Pi;
    function co(e) {
      switch (Nn(e)) {
        case Fe:
          return Fe;
        case yi:
          return yi;
        case ga:
          return ga;
        case su:
          return su;
        case on:
          return on;
        case cu:
          return cu;
        case fu:
        case Ua:
        case ta:
        case du:
        case vs:
        case hs:
        case bc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case pu:
        case Nc:
          return e & Ol;
        case Pi:
        case zc:
        case ms:
        case Uc:
        case Ac:
          return e & vu;
        case oo:
          return oo;
        case so:
          return so;
        case Ll:
          return Ll;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ys(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Fc;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = co(p);
        else {
          var v = f & s;
          v !== P && (i = co(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = co(y) : s !== P && (i = co(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = Nn(i), _ = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === on && (_ & Ol) !== P
        )
          return t;
      }
      (i & ga) !== P && (i |= a & on);
      var b = e.entangledLanes;
      if (b !== P)
        for (var N = e.entanglements, U = i & b; U > 0; ) {
          var H = Ml(U), ve = 1 << H;
          i |= N[H], U &= ~ve;
        }
      return i;
    }
    function Fv(e, t) {
      for (var a = e.eventTimes, i = Jt; t > 0; ) {
        var u = Ml(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Vc(e, t) {
      switch (e) {
        case Fe:
        case yi:
        case ga:
          return t + 250;
        case su:
        case on:
        case cu:
        case fu:
        case Ua:
        case ta:
        case du:
        case vs:
        case hs:
        case bc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case pu:
        case Nc:
          return t + 5e3;
        case Pi:
        case zc:
        case ms:
        case Uc:
        case Ac:
          return Jt;
        case oo:
        case so:
        case Ll:
        case na:
          return Jt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Jt;
      }
    }
    function ny(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p, y = s[p];
        y === Jt ? ((v & i) === P || (v & u) !== P) && (s[p] = Vc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ry(e) {
      return co(e.pendingLanes);
    }
    function bd(e) {
      var t = e.pendingLanes & ~na;
      return t !== P ? t : t & na ? na : P;
    }
    function fo(e) {
      return (e & Fe) !== P;
    }
    function gs(e) {
      return (e & Fc) !== P;
    }
    function Pc(e) {
      return (e & vu) === e;
    }
    function ay(e) {
      var t = Fe | ga | on;
      return (e & t) === P;
    }
    function jv(e) {
      return (e & Ol) === e;
    }
    function Ss(e, t) {
      var a = yi | ga | su | on;
      return (t & a) !== P;
    }
    function Hv(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function xd(e) {
      return (e & Ol) !== P;
    }
    function _d() {
      var e = jc;
      return jc <<= 1, (jc & Ol) === P && (jc = fu), e;
    }
    function iy() {
      var e = Hc;
      return Hc <<= 1, (Hc & vu) === P && (Hc = Pi), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function Hn(e) {
      return Nn(e);
    }
    function Ml(e) {
      return 31 - Tc(e);
    }
    function Bc(e) {
      return Ml(e);
    }
    function ra(e, t) {
      return (e & t) !== P;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function po(e, t) {
      return e & ~t;
    }
    function Dd(e, t) {
      return e & t;
    }
    function Vv(e) {
      return e;
    }
    function Pv(e, t) {
      return e !== Et && e < t ? e : t;
    }
    function $c(e) {
      for (var t = [], a = 0; a < un; a++)
        t.push(e);
      return t;
    }
    function mu(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Bc(t);
      i[u] = a;
    }
    function kd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ml(i), s = 1 << u;
        a[u] = Jt, i &= ~s;
      }
    }
    function Od(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ld(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p;
        i[p] = P, u[p] = Jt, s[p] = Jt, f &= ~v;
      }
    }
    function vo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ml(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ly(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case ga:
          i = yi;
          break;
        case on:
          i = su;
          break;
        case fu:
        case Ua:
        case ta:
        case du:
        case vs:
        case hs:
        case bc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case pu:
        case Nc:
        case Pi:
        case zc:
        case ms:
        case Uc:
        case Ac:
          i = cu;
          break;
        case Ll:
          i = so;
          break;
        default:
          i = Et;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Et ? Et : i;
    }
    function Md(e, t, a) {
      if (rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Bc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Yc(e, t) {
      if (rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Bc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Nd(e, t) {
      return null;
    }
    var gr = Fe, ar = ga, Bi = on, Es = Ll, yu = Et;
    function Aa() {
      return yu;
    }
    function Vn(e) {
      yu = e;
    }
    function Cs(e, t) {
      var a = yu;
      try {
        return yu = e, t();
      } finally {
        yu = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function zd(e, t) {
      return e !== 0 && e < t;
    }
    function Rs(e) {
      var t = Nn(e);
      return zd(gr, t) ? zd(ar, t) ? gs(t) ? Bi : Es : ar : gr;
    }
    function Pn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Bv;
    function me(e) {
      Bv = e;
    }
    function ho(e) {
      Bv(e);
    }
    var Ts;
    function $v(e) {
      Ts = e;
    }
    var Yv;
    function ws(e) {
      Yv = e;
    }
    var bs;
    function Ud(e) {
      bs = e;
    }
    var Ad;
    function Iv(e) {
      Ad = e;
    }
    var Ic = !1, mo = [], gi = null, fn = null, Xn = null, Fa = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), $i = [], ni = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Qv(e) {
      return ni.indexOf(e) > -1;
    }
    function Si(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Wv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gi = null;
          break;
        case "dragenter":
        case "dragleave":
          fn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          yo.delete(i);
          break;
        }
      }
    }
    function go(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Si(t, a, i, u, s);
        if (t !== null) {
          var p = ko(t);
          p !== null && Ts(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Gv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return gi = go(gi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return fn = go(fn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xn = go(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Fa.set(y, go(Fa.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return yo.set(_, go(yo.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Fd(e) {
      var t = zs(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = dd(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                Yv(a);
              });
              return;
            }
          } else if (i === X) {
            var s = a.stateNode;
            if (Pn(s)) {
              e.blockedOn = pc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function qv(e) {
      for (var t = bs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $i.length && zd(t, $i[i].priority); i++)
        ;
      $i.splice(i, 0, a), i === 0 && Fd(a);
    }
    function Qc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = gu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          as(s), u.target.dispatchEvent(s), Km();
        } else {
          var f = ko(i);
          return f !== null && Ts(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function xs(e, t, a) {
      Qc(e) && a.delete(t);
    }
    function jd() {
      Ic = !1, gi !== null && Qc(gi) && (gi = null), fn !== null && Qc(fn) && (fn = null), Xn !== null && Qc(Xn) && (Xn = null), Fa.forEach(xs), yo.forEach(xs);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ic || (Ic = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, jd)));
    }
    function vt(e) {
      if (mo.length > 0) {
        Er(mo[0], e);
        for (var t = 1; t < mo.length; t++) {
          var a = mo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      gi !== null && Er(gi, e), fn !== null && Er(fn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Fa.forEach(i), yo.forEach(i);
      for (var u = 0; u < $i.length; u++) {
        var s = $i[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $i.length > 0; ) {
        var f = $i[0];
        if (f.blockedOn !== null)
          break;
        Fd(f), f.blockedOn === null && $i.shift();
      }
    }
    var gn = M.ReactCurrentBatchConfig, Tn = !0;
    function Kn(e) {
      Tn = !!e;
    }
    function Sa() {
      return Tn;
    }
    function So(e, t, a) {
      var i = Or(t), u;
      switch (i) {
        case gr:
          u = Bn;
          break;
        case ar:
          u = _s;
          break;
        case Bi:
        default:
          u = Yi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Bn(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Vn(gr), Yi(e, t, a, i);
      } finally {
        Vn(u), gn.transition = s;
      }
    }
    function _s(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Vn(ar), Yi(e, t, a, i);
      } finally {
        Vn(u), gn.transition = s;
      }
    }
    function Yi(e, t, a, i) {
      Tn && Wc(e, t, a, i);
    }
    function Wc(e, t, a, i) {
      var u = gu(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Eo, a), Wv(e, i);
        return;
      }
      if (Gv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Wv(e, i), t & eu && Qv(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && ho(s);
          var f = gu(e, t, a, i);
          if (f === null && _y(e, t, i, Eo, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Eo = null;
    function gu(e, t, a, i) {
      Eo = null;
      var u = oc(i), s = zs(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = dd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === X) {
            var y = f.stateNode;
            if (Pn(y))
              return pc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Eo = s, null;
    }
    function Or(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return gr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ar;
        case "message": {
          var t = hd();
          switch (t) {
            case yc:
              return gr;
            case ya:
              return ar;
            case mi:
            case gc:
              return Bi;
            case wl:
              return Es;
            default:
              return Bi;
          }
        }
        default:
          return Bi;
      }
    }
    function Hd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Co(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ii(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Su = null, Ei = null, Nl = null;
    function zl(e) {
      return Su = e, Ei = Xc(), !0;
    }
    function qc() {
      Su = null, Ei = null, Nl = null;
    }
    function Ro() {
      if (Nl)
        return Nl;
      var e, t = Ei, a = t.length, i, u = Xc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Nl = u.slice(e, p), Nl;
    }
    function Xc() {
      return "value" in Su ? Su.value : Su.textContent;
    }
    function Eu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function zn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cu
      }), t;
    }
    var Rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Tr = zn(Rr), To = ot({}, Rr, {
      view: 0,
      detail: 0
    }), Vd = zn(To), Ds, Pd, ja;
    function Xv(e) {
      e !== ja && (ja && e.type === "mousemove" ? (Ds = e.screenX - ja.screenX, Pd = e.screenY - ja.screenY) : (Ds = 0, Pd = 0), ja = e);
    }
    var wo = ot({}, To, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Jc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Xv(e), Ds);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Pd;
      }
    }), Ul = zn(wo), Bd = ot({}, wo, {
      dataTransfer: 0
    }), Ru = zn(Bd), Kv = ot({}, To, {
      relatedTarget: 0
    }), Kc = zn(Kv), $d = ot({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Zc = zn($d), oy = ot({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sy = zn(oy), Zv = ot({}, Rr, {
      data: 0
    }), Yd = zn(Zv), Tu = Yd, cy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, bo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Jv(e) {
      if (e.key) {
        var t = cy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Eu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? bo[e.keyCode] || "Unidentified" : "";
    }
    var wn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function fy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wn[e];
      return i ? !!a[i] : !1;
    }
    function Jc(e) {
      return fy;
    }
    var dy = ot({}, To, {
      key: Jv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Jc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Eu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), py = zn(dy), eh = ot({}, wo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = zn(eh), vy = ot({}, To, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jc
    }), Ha = zn(vy), Qd = ot({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), hy = zn(Qd), Al = ot({}, wo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), ef = zn(Al), wu = [9, 13, 27, 32], ks = 229, Os = dn && "CompositionEvent" in window, bu = null;
    dn && "documentMode" in document && (bu = document.documentMode);
    var my = dn && "TextEvent" in window && !bu, tf = dn && (!Os || bu && bu > 8 && bu <= 11), th = 32, Wd = String.fromCharCode(th);
    function nh() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ls = !1;
    function nf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function rh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Gd(e, t) {
      return e === "keydown" && t.keyCode === ks;
    }
    function ah(e, t) {
      switch (e) {
        case "keyup":
          return wu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ks;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function qd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function rf(e) {
      return e.locale === "ko";
    }
    var Qi = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (Os ? s = rh(t) : Qi ? ah(t, i) && (s = "onCompositionEnd") : Gd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      tf && !rf(i) && (!Qi && s === "onCompositionStart" ? Qi = zl(u) : s === "onCompositionEnd" && Qi && (f = Ro()));
      var p = sh(a, s);
      if (p.length > 0) {
        var v = new Yd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = qd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function af(e, t) {
      switch (e) {
        case "compositionend":
          return qd(t);
        case "keypress":
          var a = t.which;
          return a !== th ? null : (Ls = !0, Wd);
        case "textInput":
          var i = t.data;
          return i === Wd && Ls ? null : i;
        default:
          return null;
      }
    }
    function ih(e, t) {
      if (Qi) {
        if (e === "compositionend" || !Os && ah(e, t)) {
          var a = Ro();
          return qc(), Qi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return tf && !rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yy(e, t, a, i, u) {
      var s;
      if (my ? s = af(t, i) : s = ih(t, i), !s)
        return null;
      var f = sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Tu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function lf(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), yy(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function xo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function uf() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      sc(i);
      var u = sh(t, "onChange");
      if (u.length > 0) {
        var s = new Tr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, oc(e)), ad(d, t);
    }
    function d(e) {
      M0(e, 0);
    }
    function m(e) {
      var t = pf(e);
      if (Gu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    dn && (w = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", G);
    }
    function W() {
      r && (r.detachEvent("onpropertychange", G), r = null, l = null);
    }
    function G(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function Q(e, t, a) {
      e === "focusin" ? (W(), A(t, a)) : e === "focusout" && W();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ce(e, t) {
      if (e === "click")
        return m(t);
    }
    function kn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? pf(a) : window, v, y;
      if (o(p) ? v = E : xo(p) ? w ? v = kn : (v = ce, y = Q) : ge(p) && (v = Ce), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      Pr("onMouseEnter", ["mouseout", "mouseover"]), Pr("onMouseLeave", ["mouseout", "mouseover"]), Pr("onPointerEnter", ["pointerout", "pointerover"]), Pr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Z(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Rv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (zs(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var b, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (b = a, N = U ? zs(U) : null, N !== null) {
            var H = ha(N);
            (N !== H || N.tag !== ae && N.tag !== xe) && (N = null);
          }
        } else
          b = null, N = a;
        if (b !== N) {
          var ve = Ul, Le = "onMouseLeave", Te = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ve = Id, Le = "onPointerLeave", Te = "onPointerEnter", Rt = "pointer");
          var ht = b == null ? g : pf(b), k = N == null ? g : pf(N), V = new ve(Le, Rt + "leave", b, i, u);
          V.target = ht, V.relatedTarget = k;
          var O = null, q = zs(u);
          if (q === a) {
            var he = new ve(Te, Rt + "enter", N, i, u);
            he.target = k, he.relatedTarget = ht, O = he;
          }
          NR(e, V, O, b, N);
        }
      }
    }
    function Re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Re;
    function De(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function $e(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function kt(e, t) {
      for (var a = $e(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ni) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = $e(Zn(a));
      }
    }
    function Fl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e:
        for (; ; ) {
          for (var b = null; g === t && (a === 0 || g.nodeType === Ni) && (f = s + a), g === i && (u === 0 || g.nodeType === Ni) && (p = s + u), g.nodeType === Ni && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
            _ = g, g = b;
          for (; ; ) {
            if (g === e)
              break e;
            if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
              break;
            g = _, _ = g.parentNode;
          }
          g = b;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function vR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = kt(e, f), g = kt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function E0(e) {
      return e && e.nodeType === Ni;
    }
    function C0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : E0(e) ? !1 : E0(t) ? C0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function hR(e) {
      return e && e.ownerDocument && C0(e.ownerDocument.documentElement, e);
    }
    function mR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function R0() {
      for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
        if (mR(t))
          e = t.contentWindow;
        else
          return t;
        t = ml(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function yR() {
      var e = R0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? SR(e) : null
      };
    }
    function gR(e) {
      var t = R0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && hR(a)) {
        i !== null && Cy(a) && ER(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function SR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Fl(e), t || {
        start: 0,
        end: 0
      };
    }
    function ER(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : vR(e, t);
    }
    var CR = dn && "documentMode" in document && document.documentMode <= 11;
    function RR() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var of = null, Ry = null, Kd = null, Ty = !1;
    function TR(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function wR(e) {
      return e.window === e ? e.document : e.nodeType === Za ? e : e.ownerDocument;
    }
    function T0(e, t, a) {
      var i = wR(a);
      if (!(Ty || of == null || of !== ml(i))) {
        var u = TR(of);
        if (!Kd || !De(Kd, u)) {
          Kd = u;
          var s = sh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Tr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = of;
          }
        }
      }
    }
    function bR(e, t, a, i, u, s, f) {
      var p = a ? pf(a) : window;
      switch (t) {
        case "focusin":
          (xo(p) || p.contentEditable === "true") && (of = p, Ry = a, Kd = null);
          break;
        case "focusout":
          of = null, Ry = null, Kd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, T0(e, i, u);
          break;
        case "selectionchange":
          if (CR)
            break;
        case "keydown":
        case "keyup":
          T0(e, i, u);
      }
    }
    function lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var sf = {
      animationend: lh("Animation", "AnimationEnd"),
      animationiteration: lh("Animation", "AnimationIteration"),
      animationstart: lh("Animation", "AnimationStart"),
      transitionend: lh("Transition", "TransitionEnd")
    }, wy = {}, w0 = {};
    dn && (w0 = document.createElement("div").style, "AnimationEvent" in window || (delete sf.animationend.animation, delete sf.animationiteration.animation, delete sf.animationstart.animation), "TransitionEvent" in window || delete sf.transitionend.transition);
    function uh(e) {
      if (wy[e])
        return wy[e];
      if (!sf[e])
        return e;
      var t = sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in w0)
          return wy[e] = t[a];
      return e;
    }
    var b0 = uh("animationend"), x0 = uh("animationiteration"), _0 = uh("animationstart"), D0 = uh("transitionend"), k0 = /* @__PURE__ */ new Map(), O0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      k0.set(e, t), pr(t, [e]);
    }
    function xR() {
      for (var e = 0; e < O0.length; e++) {
        var t = O0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(b0, "onAnimationEnd"), _o(x0, "onAnimationIteration"), _o(_0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(D0, "onTransitionEnd");
    }
    function _R(e, t, a, i, u, s, f) {
      var p = k0.get(t);
      if (p !== void 0) {
        var v = Tr, y = t;
        switch (t) {
          case "keypress":
            if (Eu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = py;
            break;
          case "focusin":
            y = "focus", v = Kc;
            break;
          case "focusout":
            y = "blur", v = Kc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Kc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ul;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ru;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ha;
            break;
          case b0:
          case x0:
          case _0:
            v = Zc;
            break;
          case D0:
            v = hy;
            break;
          case "scroll":
            v = Vd;
            break;
          case "wheel":
            v = ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Id;
            break;
        }
        var g = (s & eu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = LR(a, p, i.type, g, _);
          if (b.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: b
            });
          }
        }
      }
    }
    xR(), L(), uf(), RR(), nh();
    function DR(e, t, a, i, u, s, f) {
      _R(e, t, a, i, u, s);
      var p = (s & Xm) === 0;
      p && (Z(e, t, a, i, u), x(e, t, a, i, u), bR(e, t, a, i, u), lf(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], by = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function L0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fi(i, t, void 0, e), e.currentTarget = null;
    }
    function kR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          L0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, b = g.currentTarget, N = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          L0(e, N, b), i = _;
        }
    }
    function M0(e, t) {
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        kR(s, f, a);
      }
      od();
    }
    function OR(e, t, a, i, u) {
      var s = oc(a), f = [];
      DR(f, e, i, a, s, t), M0(f, t);
    }
    function Sn(e, t) {
      by.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = lw(t), u = zR(e, a);
      i.has(u) || (N0(t, e, ns, a), i.add(u));
    }
    function xy(e, t, a) {
      by.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), N0(a, e, i, t);
    }
    var oh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[oh]) {
        e[oh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (by.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Za ? e : e.ownerDocument;
        t !== null && (t[oh] || (t[oh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function N0(e, t, a, i, u) {
      var s = So(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ii(e, t, s, f) : Co(e, t, s) : f !== void 0 ? Gc(e, t, s, f) : Hd(e, t, s);
    }
    function z0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & Ui) && !(t & ns)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === X || v === ie) {
                var y = p.stateNode.containerInfo;
                if (z0(y, f))
                  break;
                if (v === ie)
                  for (var g = p.return; g !== null; ) {
                    var _ = g.tag;
                    if (_ === X || _ === ie) {
                      var b = g.stateNode.containerInfo;
                      if (z0(b, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var N = zs(y);
                  if (N === null)
                    return;
                  var U = N.tag;
                  if (U === ae || U === xe) {
                    p = s = N;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      ad(function() {
        return OR(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function LR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, N = _.tag;
        if (N === ae && b !== null && (g = b, p !== null)) {
          var U = nu(y, p);
          U != null && v.push(ep(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ae && f !== null) {
          var v = f, y = nu(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = nu(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    function MR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = cf(s))
        u++;
      for (var f = 0, p = i; p; p = cf(p))
        f++;
      for (; u - f > 0; )
        a = cf(a), u--;
      for (; f - u > 0; )
        i = cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = cf(a), i = cf(i);
      }
      return null;
    }
    function U0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ae && g !== null) {
          var b = g;
          if (u) {
            var N = nu(p, s);
            N != null && f.unshift(ep(p, N, b));
          } else if (!u) {
            var U = nu(p, s);
            U != null && f.push(ep(p, U, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NR(e, t, a, i, u) {
      var s = i && u ? MR(i, u) : null;
      i !== null && U0(e, t, i, s, !1), u !== null && a !== null && U0(e, a, u, s, !0);
    }
    function zR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", ch = "suppressContentEditableWarning", Do = "suppressHydrationWarning", A0 = "autoFocus", Ms = "children", Ns = "style", fh = "__html", Dy, dh, np, F0, ph, j0, H0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, dh = function(e, t) {
      uc(e, t), Jf(e, t), Cv(e, t, {
        registrationNameDependencies: Ft,
        possibleRegistrationNames: Vr
      });
    }, j0 = dn && !document.documentMode, np = function(e, t, a) {
      if (!Va) {
        var i = vh(a), u = vh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, F0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, ph = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, H0 = function(e, t) {
      var a = e.namespaceURI === Mi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var UR = /\r\n?/g, AR = /\u0000|\uFFFD/g;
    function vh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(UR, `
`).replace(AR, "");
    }
    function hh(e, t, a, i) {
      var u = vh(t), s = vh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function V0(e) {
      return e.nodeType === Za ? e : e.ownerDocument;
    }
    function FR() {
    }
    function mh(e) {
      e.onclick = FR;
    }
    function jR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ns)
            f && Object.freeze(f), fv(t, f);
          else if (s === tp) {
            var p = f ? f[fh] : void 0;
            p != null && ev(t, p);
          } else if (s === Ms)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && rc(t, f);
            } else
              typeof f == "number" && rc(t, "" + f);
          else
            s === ch || s === Do || s === A0 || (Ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && ph(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function HR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ns ? fv(e, f) : s === tp ? ev(e, f) : s === Ms ? rc(e, f) : da(e, s, f, i);
      }
    }
    function VR(e, t, a, i) {
      var u, s = V0(a), f, p = i;
      if (p === Mi && (p = tc(e)), p === Mi) {
        if (u = zi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Mi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PR(e, t) {
      return V0(t).createTextNode(e);
    }
    function BR(e, t, a, i) {
      var u = zi(t, a);
      dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            Sn(Zd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          It(e, a), s = a;
          break;
        case "select":
          Zo(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kp(e, a), s = Yf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ic(t, s), jR(t, e, i, s, u), t) {
        case "input":
          _a(e), K(e, a, !1);
          break;
        case "textarea":
          _a(e), Jp(e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          Bf(e, a);
          break;
        default:
          typeof s.onClick == "function" && mh(e);
          break;
      }
    }
    function $R(e, t, a, i, u) {
      dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Yf(e, a), p = Yf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && mh(e);
          break;
      }
      ic(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ns) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === tp || v === Ms || v === ch || v === Do || v === A0 || (Ft.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === N || b == null && N == null))
          if (v === Ns)
            if (b && Object.freeze(b), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && N[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === tp) {
            var U = b ? b[fh] : void 0, H = N ? N[fh] : void 0;
            U != null && H !== U && (s = s || []).push(v, U);
          } else
            v === Ms ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === ch || v === Do || (Ft.hasOwnProperty(v) ? (b != null && (typeof b != "function" && ph(v, b), v === "onScroll" && Sn("scroll", e)), !s && N !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (es(g, p[Ns]), (s = s || []).push(Ns, g)), s;
    }
    function YR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && z(e, u);
      var s = zi(a, i), f = zi(a, u);
      switch (HR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Zp(e, u);
          break;
        case "select":
          Vm(e, u);
          break;
      }
    }
    function IR(e) {
      {
        var t = e.toLowerCase();
        return lc.hasOwnProperty(t) && lc[t] || null;
      }
    }
    function QR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = zi(t, a), dh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            Sn(Zd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kp(e, a), Sn("invalid", e);
          break;
      }
      ic(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var b = g[_].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var H = a[U];
          if (U === Ms)
            typeof H == "string" ? e.textContent !== H && (a[Do] !== !0 && hh(e.textContent, H, s, f), N = [Ms, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Do] !== !0 && hh(e.textContent, H, s, f), N = [Ms, "" + H]);
          else if (Ft.hasOwnProperty(U))
            H != null && (typeof H != "function" && ph(U, H), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ve = void 0, Le = p && Ye ? null : br(U);
            if (a[Do] !== !0) {
              if (!(U === ch || U === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var Te = e.innerHTML, Rt = H ? H[fh] : void 0;
                  if (Rt != null) {
                    var ht = H0(e, Rt);
                    ht !== Te && np(U, Te, ht);
                  }
                } else if (U === Ns) {
                  if (v.delete(U), j0) {
                    var k = Gm(H);
                    ve = e.getAttribute("style"), k !== ve && np(U, ve, k);
                  }
                } else if (p && !Ye)
                  v.delete(U.toLowerCase()), ve = ui(e, U, H), H !== ve && np(U, ve, H);
                else if (!vn(U, Le, p) && !Yt(U, H, Le, p)) {
                  var V = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ve = fa(e, U, H, Le);
                  else {
                    var O = i;
                    if (O === Mi && (O = tc(t)), O === Mi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = IR(U);
                      q !== null && q !== U && (V = !0, v.delete(q)), v.delete(U);
                    }
                    ve = ui(e, U, H);
                  }
                  var he = Ye;
                  !he && H !== ve && !V && np(U, ve, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && F0(v), t) {
        case "input":
          _a(e), K(e, a, !0);
          break;
        case "textarea":
          _a(e), Jp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && mh(e);
          break;
      }
      return N;
    }
    function WR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function GR(e, t, a) {
      switch (t) {
        case "input":
          ze(e, a);
          return;
        case "textarea":
          If(e, a);
          return;
        case "select":
          Pm(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var qR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], P0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], XR = P0.concat(["button"]), KR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], B0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = ot({}, e || B0), i = {
          tag: t
        };
        return P0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), XR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return KR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, JR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, $0 = {};
      rp = function(e, t, a) {
        a = a || B0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ZR(e, u) ? null : i, f = s ? null : JR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!$0[y]) {
            $0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var yh = "suppressHydrationWarning", gh = "$", Sh = "/$", ip = "$?", lp = "$!", eT = "style", Ny = null, zy = null;
    function tT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Za:
        case Zl: {
          t = i === Za ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Wf(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Wf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function nT(e, t, a) {
      {
        var i = e, u = Wf(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function bD(e) {
      return e;
    }
    function rT(e) {
      Ny = Sa(), zy = yR();
      var t = null;
      return Kn(!1), t;
    }
    function aT(e) {
      gR(zy), Kn(Ny), Ny = null, zy = null;
    }
    function iT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = VR(e, t, a, s);
      return sp(u, y), By(y, t), y;
    }
    function lT(e, t) {
      e.appendChild(t);
    }
    function uT(e, t, a, i, u) {
      switch (BR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function oT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return $R(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function sT(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = PR(e, t);
      return sp(i, s), s;
    }
    function cT() {
      var e = window.event;
      return e === void 0 ? Bi : Or(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, fT = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, Y0 = typeof Promise == "function" ? Promise : void 0, dT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Y0 < "u" ? function(e) {
      return Y0.resolve(null).then(e).catch(pT);
    } : Ay;
    function pT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function hT(e, t, a, i, u, s) {
      YR(e, t, a, i, u), By(e, u);
    }
    function I0(e) {
      rc(e, "");
    }
    function mT(e, t, a) {
      e.nodeValue = a;
    }
    function yT(e, t) {
      e.appendChild(t);
    }
    function gT(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && mh(a);
    }
    function ST(e, t, a) {
      e.insertBefore(t, a);
    }
    function ET(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function CT(e, t) {
      e.removeChild(t);
    }
    function RT(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Sh)
            if (i === 0) {
              e.removeChild(u), vt(t);
              return;
            } else
              i--;
          else
            (s === gh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      vt(t);
    }
    function TT(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === qr && jy(e, t), vt(e);
    }
    function wT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function bT(e) {
      e.nodeValue = "";
    }
    function xT(e, t) {
      e = e;
      var a = t[eT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ac("display", i);
    }
    function _T(e, t) {
      e.nodeValue = t;
    }
    function DT(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Za && e.documentElement && e.removeChild(e.documentElement);
    }
    function kT(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function OT(e, t) {
      return t === "" || e.nodeType !== Ni ? null : e;
    }
    function LT(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function Q0(e) {
      return e.data === ip;
    }
    function Hy(e) {
      return e.data === lp;
    }
    function MT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function NT(e, t) {
      e._reactRetry = t;
    }
    function Eh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Ni)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === gh || a === lp || a === ip)
            break;
          if (a === Sh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Eh(e.nextSibling);
    }
    function zT(e) {
      return Eh(e.firstChild);
    }
    function UT(e) {
      return Eh(e.firstChild);
    }
    function AT(e) {
      return Eh(e.nextSibling);
    }
    function FT(e, t, a, i, u, s, f) {
      sp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ct) !== Ne;
      return QR(e, t, a, p, i, y, f);
    }
    function jT(e, t, a, i) {
      return sp(a, e), a.mode & ct, WR(e, t);
    }
    function HT(e, t) {
      sp(t, e);
    }
    function VT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Sh) {
            if (a === 0)
              return up(t);
            a--;
          } else
            (i === gh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function W0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === gh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function PT(e) {
      vt(e);
    }
    function BT(e) {
      vt(e);
    }
    function $T(e) {
      return e !== "head" && e !== "body";
    }
    function YT(e, t, a, i) {
      var u = !0;
      hh(t.nodeValue, a, i, u);
    }
    function IT(e, t, a, i, u, s) {
      if (t[yh] !== !0) {
        var f = !0;
        hh(i.nodeValue, u, s, f);
      }
    }
    function QT(e, t) {
      t.nodeType === qr ? ky(e, t) : t.nodeType === Mn || Oy(e, t);
    }
    function WT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ky(a, t) : t.nodeType === Mn || Oy(a, t));
      }
    }
    function GT(e, t, a, i, u) {
      (u || t[yh] !== !0) && (i.nodeType === qr ? ky(a, i) : i.nodeType === Mn || Oy(a, i));
    }
    function qT(e, t, a) {
      Ly(e, t);
    }
    function XT(e, t) {
      My(e, t);
    }
    function KT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function ZT(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function JT(e, t, a, i, u, s) {
      (s || t[yh] !== !0) && Ly(a, i);
    }
    function ew(e, t, a, i, u) {
      (u || t[yh] !== !0) && My(a, i);
    }
    function tw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function nw(e) {
      Jd(e);
    }
    var ff = Math.random().toString(36).slice(2), df = "__reactFiber$" + ff, Vy = "__reactProps$" + ff, op = "__reactContainer$" + ff, Py = "__reactEvents$" + ff, rw = "__reactListeners$" + ff, aw = "__reactHandles$" + ff;
    function iw(e) {
      delete e[df], delete e[Vy], delete e[Py], delete e[rw], delete e[aw];
    }
    function sp(e, t) {
      t[df] = e;
    }
    function Ch(e, t) {
      t[op] = e;
    }
    function G0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function zs(e) {
      var t = e[df];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[df], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = W0(e); u !== null; ) {
              var s = u[df];
              if (s)
                return s;
              u = W0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[df] || e[op];
      return t && (t.tag === ae || t.tag === xe || t.tag === _e || t.tag === X) ? t : null;
    }
    function pf(e) {
      if (e.tag === ae || e.tag === xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function lw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var q0 = {}, X0 = M.ReactDebugCurrentFrame;
    function Th(e) {
      if (e) {
        var t = e._owner, a = di(e.type, e._source, t ? t.type : null);
        X0.setExtraStackFrame(a);
      } else
        X0.setExtraStackFrame(null);
    }
    function Wi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Th(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Th(null)), p instanceof Error && !(p.message in q0) && (q0[p.message] = !0, Th(u), S("Failed %s type: %s", a, p.message), Th(null));
          }
      }
    }
    var $y = [], wh;
    wh = [];
    var xu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== wh[xu] && S("Unexpected Fiber popped."), e.current = $y[xu], $y[xu] = null, wh[xu] = null, xu--;
    }
    function ia(e, t, a) {
      xu++, $y[xu] = e.current, wh[xu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var ri = {};
    Object.freeze(ri);
    var _u = Oo(ri), jl = Oo(!1), Iy = ri;
    function vf(e, t, a) {
      return a && Hl(t) ? Iy : _u.current;
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function hf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ri;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Qe(e) || "Unknown";
          Wi(i, s, "context", p);
        }
        return u && K0(e, t, s), s;
      }
    }
    function bh() {
      return jl.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xh(e) {
      aa(jl, e), aa(_u, e);
    }
    function Qy(e) {
      aa(jl, e), aa(_u, e);
    }
    function Z0(e, t, a) {
      {
        if (_u.current !== ri)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(_u, t, e), ia(jl, a, e);
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Qe(e) || "Unknown";
          Wi(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function _h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ri;
        return Iy = _u.current, ia(_u, a, e), ia(jl, jl.current, e), !0;
      }
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = J0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, aa(jl, e), aa(_u, e), ia(_u, u, e), ia(jl, a, e);
        } else
          aa(jl, e), ia(jl, a, e);
      }
    }
    function uw(e) {
      {
        if (!pd(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case X:
              return t.stateNode.context;
            case se: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Dh = 1, Du = null, Wy = !1, Gy = !1;
    function tE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function ow(e) {
      Wy = !0, tE(e);
    }
    function nE() {
      Wy && Mo();
    }
    function Mo() {
      if (!Gy && Du !== null) {
        Gy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = Du;
          for (Vn(gr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Wy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), hc(yc, Mo), s;
        } finally {
          Vn(t), Gy = !1;
        }
      }
      return null;
    }
    var mf = [], yf = 0, kh = null, Oh = 0, Ci = [], Ri = 0, Us = null, ku = 1, Ou = "";
    function sw(e) {
      return Fs(), (e.flags & cd) !== ke;
    }
    function cw(e) {
      return Fs(), Oh;
    }
    function fw() {
      var e = Ou, t = ku, a = t & ~dw(t);
      return a.toString(32) + e;
    }
    function As(e, t) {
      Fs(), mf[yf++] = Oh, mf[yf++] = kh, kh = e, Oh = t;
    }
    function rE(e, t, a) {
      Fs(), Ci[Ri++] = ku, Ci[Ri++] = Ou, Ci[Ri++] = Us, Us = e;
      var i = ku, u = Ou, s = Lh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Lh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, N = s - y, U = Lh(t) + N, H = p << N, ve = H | b, Le = _ + u;
        ku = 1 << U | ve, Ou = Le;
      } else {
        var Te = p << s, Rt = Te | f, ht = u;
        ku = 1 << v | Rt, Ou = ht;
      }
    }
    function qy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        As(e, a), rE(e, a, i);
      }
    }
    function Lh(e) {
      return 32 - Tc(e);
    }
    function dw(e) {
      return 1 << Lh(e) - 1;
    }
    function Xy(e) {
      for (; e === kh; )
        kh = mf[--yf], mf[yf] = null, Oh = mf[--yf], mf[yf] = null;
      for (; e === Us; )
        Us = Ci[--Ri], Ci[Ri] = null, Ou = Ci[--Ri], Ci[Ri] = null, ku = Ci[--Ri], Ci[Ri] = null;
    }
    function pw() {
      return Fs(), Us !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function vw(e, t) {
      Fs(), Ci[Ri++] = ku, Ci[Ri++] = Ou, Ci[Ri++] = Us, ku = t.id, Ou = t.overflow, Us = e;
    }
    function Fs() {
      Mr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, Ti = null, Gi = !1, js = !1, No = null;
    function hw() {
      Gi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aE() {
      js = !0;
    }
    function mw() {
      return js;
    }
    function yw(e) {
      var t = e.stateNode.containerInfo;
      return Ti = UT(t), Lr = e, Gi = !0, No = null, js = !1, !0;
    }
    function gw(e, t, a) {
      return Ti = AT(t), Lr = e, Gi = !0, No = null, js = !1, a !== null && vw(e, a), !0;
    }
    function iE(e, t) {
      switch (e.tag) {
        case X: {
          QT(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & ct) !== Ne;
          GT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && WT(i.dehydrated, t);
          break;
        }
      }
    }
    function lE(e, t) {
      iE(e, t);
      var a = C_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (js)
          return;
        switch (e.tag) {
          case X: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, qT(a, i);
                break;
              case xe:
                var u = t.pendingProps;
                XT(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ae: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ct) !== Ne;
                JT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case xe: {
                var _ = t.pendingProps, b = (e.mode & ct) !== Ne;
                ew(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null)
              switch (t.tag) {
                case ae:
                  var H = t.type;
                  t.pendingProps, KT(U, H);
                  break;
                case xe:
                  var ve = t.pendingProps;
                  ZT(U, ve);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function uE(e, t) {
      t.flags = t.flags & ~La | an, Ky(e, t);
    }
    function oE(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = kT(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, Ti = zT(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = OT(t, u);
          return s !== null ? (e.stateNode = s, Lr = e, Ti = null, !0) : !1;
        }
        case _e: {
          var f = LT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: pw(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = R_(f);
            return v.return = e, e.child = v, Lr = e, Ti = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & ct) !== Ne && (e.flags & Be) === ke;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Gi) {
        var t = Ti;
        if (!t) {
          Zy(e) && (Ky(Lr, e), Jy()), uE(Lr, e), Gi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!oE(e, t)) {
          Zy(e) && (Ky(Lr, e), Jy()), t = up(a);
          var i = Lr;
          if (!t || !oE(e, t)) {
            uE(Lr, e), Gi = !1, Lr = e;
            return;
          }
          lE(i, a);
        }
      }
    }
    function Sw(e, t, a) {
      var i = e.stateNode, u = !js, s = FT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ew(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jT(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case X: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== Ne;
              YT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ct) !== Ne;
              IT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Cw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      HT(a, e);
    }
    function Rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return VT(a);
    }
    function sE(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== X && t.tag !== _e; )
        t = t.return;
      Lr = t;
    }
    function Mh(e) {
      if (e !== Lr)
        return !1;
      if (!Gi)
        return sE(e), Gi = !0, !1;
      if (e.tag !== X && (e.tag !== ae || $T(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ti;
        if (t)
          if (Zy(e))
            cE(e), Jy();
          else
            for (; t; )
              lE(e, t), t = up(t);
      }
      return sE(e), e.tag === _e ? Ti = Rw(e) : Ti = Lr ? up(e.stateNode) : null, !0;
    }
    function Tw() {
      return Gi && Ti !== null;
    }
    function cE(e) {
      for (var t = Ti; t; )
        iE(e, t), t = up(t);
    }
    function gf() {
      Lr = null, Ti = null, Gi = !1, js = !1;
    }
    function fE() {
      No !== null && (i1(No), No = null);
    }
    function Mr() {
      return Gi;
    }
    function tg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var ww = M.ReactCurrentBatchConfig, bw = null;
    function xw() {
      return ww.transition;
    }
    var qi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var _w = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, Hs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Vs = /* @__PURE__ */ new Set();
      qi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, qi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          e.add(Qe(b) || "Component"), Vs.add(b.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          t.add(Qe(b) || "Component"), Vs.add(b.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          a.add(Qe(b) || "Component"), Vs.add(b.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          i.add(Qe(b) || "Component"), Vs.add(b.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          u.add(Qe(b) || "Component"), Vs.add(b.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(b) {
          s.add(Qe(b) || "Component"), Vs.add(b.type);
        }), mp = []), t.size > 0) {
          var f = Hs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Hs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Hs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Hs(e);
          Pe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Hs(a);
          Pe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Hs(u);
          Pe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Nh = /* @__PURE__ */ new Map(), dE = /* @__PURE__ */ new Set();
      qi.recordLegacyContextWarning = function(e, t) {
        var a = _w(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!dE.has(e.type)) {
          var i = Nh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Nh.set(a, i)), i.push(e));
        }
      }, qi.flushLegacyContextWarning = function() {
        Nh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Qe(s) || "Component"), dE.add(s.type);
            });
            var u = Hs(i);
            try {
              Pt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, qi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Nh = /* @__PURE__ */ new Map();
      };
    }
    function Xi(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var ng = Oo(null), rg;
    rg = {};
    var zh = null, Sf = null, ag = null, Uh = !1;
    function Ah() {
      zh = null, Sf = null, ag = null, Uh = !1;
    }
    function pE() {
      Uh = !0;
    }
    function vE() {
      Uh = !1;
    }
    function hE(e, t, a) {
      ia(ng, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== rg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = rg;
    }
    function ig(e, t) {
      var a = ng.current;
      aa(ng, t), e._currentValue = a;
    }
    function lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dw(e, t, a) {
      kw(e, t, a);
    }
    function kw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === se) {
                var p = Hn(a), v = Lu(Jt, p);
                v.tag = jh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = tt(b.lanes, a)), lg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === lt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = tt(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = tt(U.lanes, a)), lg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Ef(e, t) {
      zh = e, Sf = null, ag = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Op(), a.firstContext = null);
      }
    }
    function Jn(e) {
      Uh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ag !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Sf === null) {
          if (zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Sf = a, zh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Sf = Sf.next = a;
      }
      return t;
    }
    var Ps = null;
    function ug(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    function Ow() {
      if (Ps !== null) {
        for (var e = 0; e < Ps.length; e++) {
          var t = Ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ps = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Lw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Pa(e, t) {
      return Fh(e, t);
    }
    var Nw = Fh;
    function Fh(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (an | La)) !== ke && y1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (an | La)) !== ke && y1(e), i = u, u = u.return;
      if (i.tag === X) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, jh = 2, og = 3, Hh = !1, sg, Vh;
    sg = !1, Vh = null;
    function cg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Vh === u && !sg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sg = !0), Nx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Nw(e, a);
      } else
        return Mw(e, u, t, a);
    }
    function Ph(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (xd(a)) {
          var s = u.lanes;
          s = Dd(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, vo(e, f);
        }
      }
    }
    function fg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function zw(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & yn) {
                jn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case og:
          e.flags = e.flags & ~Gn | Be;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & yn) {
                jn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : ot({}, i, y);
        }
        case jh:
          return Hh = !0, i;
      }
      return i;
    }
    function Bh(e, t, a, i) {
      var u = e.updateQueue;
      Hh = !1, Vh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = P, H = null, ve = null, Le = null, Te = s;
        do {
          var Rt = Te.lane, ht = Te.eventTime;
          if (hu(i, Rt)) {
            if (Le !== null) {
              var V = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Et,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Le = Le.next = V;
            }
            N = zw(e, u, Te, N, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== Et) {
              e.flags |= hi;
              var q = u.effects;
              q === null ? u.effects = [Te] : q.push(Te);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: Rt,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Le === null ? (ve = Le = k, H = N) : Le = Le.next = k, U = tt(U, Rt);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, oe = he.next;
            he.next = null, Te = oe, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (H = N), u.baseState = H, u.firstBaseUpdate = ve, u.lastBaseUpdate = Le;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var qe = Ve;
          do
            U = tt(U, qe.lane), qe = qe.next;
          while (qe !== Ve);
        } else
          s === null && (u.shared.lanes = P);
        Bp(U), e.lanes = U, e.memoizedState = N;
      }
      Vh = null;
    }
    function Uw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Hh = !1;
    }
    function $h() {
      return Hh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Uw(f, a));
        }
    }
    var dg = {}, RE = new j.Component().refs, pg, vg, hg, mg, yg, TE, Yh, gg, Sg, Eg;
    {
      pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var wE = /* @__PURE__ */ new Set();
      Yh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          wE.has(a) || (wE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, TE = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
          yg.has(a) || (yg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(dg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(dg);
    }
    function Cg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & yn) {
          jn(!0);
          try {
            s = a(i, u);
          } finally {
            jn(!1);
          }
        }
        TE(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Rg = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = ka(e), u = Ra(), s = Bo(i), f = Lu(u, s);
        f.payload = t, a != null && (Yh(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (dr(p, i, s, u), Ph(p, i, s)), kl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ka(e), u = Ra(), s = Bo(i), f = Lu(u, s);
        f.tag = gE, f.payload = t, a != null && (Yh(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (dr(p, i, s, u), Ph(p, i, s)), kl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ka(e), i = Ra(), u = Bo(a), s = Lu(i, u);
        s.tag = jh, t != null && (Yh(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (dr(f, a, u, i), Ph(f, a, u)), Rd(a, u);
      }
    };
    function bE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yn) {
            jn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              jn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !De(a, i) || !De(u, s) : !0;
    }
    function Aw(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Sg.has(t) && (Sg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hg.has(t) && (hg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || mt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function xE(e, t) {
      t.updater = Rg, e.stateNode = t, ro(t, e), t._reactInternalInstance = dg;
    }
    function _E(e, t, a) {
      var i = !1, u = ri, s = ri, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === te && f._context === void 0
        );
        if (!p && !Eg.has(t)) {
          Eg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === I ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = vf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? hf(e, u) : ri;
      }
      var g = new t(a, s);
      if (e.mode & yn) {
        jn(!0);
        try {
          g = new t(a, s);
        } finally {
          jn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      xE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = _t(t) || "Component";
          vg.has(b) || (vg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), N !== null || U !== null || H !== null) {
            var ve = _t(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mg.has(ve) || (mg.add(ve), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ve, Le, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && K0(e, u, s), g;
    }
    function Fw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), Rg.enqueueReplaceState(t, t.state, null));
    }
    function DE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Qe(e) || "Component";
          pg.has(s) || (pg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Rg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Tg(e, t, a, i) {
      Aw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = RE, cg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = vf(e, t, !0);
        u.context = hf(e, f);
      }
      {
        if (u.state === a) {
          var p = _t(t) || "Component";
          gg.has(p) || (gg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && qi.recordLegacyContextWarning(e, u), qi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Cg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Fw(e, u), Bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = et;
        y |= Kr, (e.mode & za) !== Ne && (y |= Zr), e.flags |= y;
      }
    }
    function jw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ri;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = vf(e, t, !0);
        v = hf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && DE(e, u, a, v), EE();
      var b = e.memoizedState, N = u.state = b;
      if (Bh(e, a, u, i), N = e.memoizedState, s === a && b === N && !bh() && !$h()) {
        if (typeof u.componentDidMount == "function") {
          var U = et;
          U |= Kr, (e.mode & za) !== Ne && (U |= Zr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (Cg(e, t, g, a), N = e.memoizedState);
      var H = $h() || bE(e, t, s, a, b, N, v);
      if (H) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ve = et;
          ve |= Kr, (e.mode & za) !== Ne && (ve |= Zr), e.flags |= ve;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = et;
          Le |= Kr, (e.mode & za) !== Ne && (Le |= Zr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, H;
    }
    function Hw(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Xi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ri;
      if (typeof g == "object" && g !== null)
        _ = Jn(g);
      else {
        var b = vf(t, a, !0);
        _ = hf(t, b);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && DE(t, s, i, _), EE();
      var H = t.memoizedState, ve = s.state = H;
      if (Bh(t, i, s, u), ve = t.memoizedState, f === v && H === ve && !bh() && !$h() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Oa), !1;
      typeof N == "function" && (Cg(t, a, N, i), ve = t.memoizedState);
      var Le = $h() || bE(t, a, p, i, H, ve, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ve, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ve, _)), typeof s.componentDidUpdate == "function" && (t.flags |= et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Oa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Oa), t.memoizedProps = i, t.memoizedState = ve), s.props = i, s.state = ve, s.context = _, Le;
    }
    var wg, bg, xg, _g, Dg, kE = function(e, t) {
    };
    wg = !1, bg = !1, xg = {}, _g = {}, Dg = {}, kE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Qe(t) || "Component";
        _g[a] || (_g[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || je) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Qe(e) || "Component";
          xg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          In(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var b = v.refs;
            b === RE && (b = v.refs = {}), _ === null ? delete b[y] : b[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qh(e) {
      {
        var t = Qe(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function OE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function LE(e) {
      function t(k, V) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [V], k.flags |= Ut) : O.push(V);
        }
      }
      function a(k, V) {
        if (!e)
          return null;
        for (var O = V; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, V) {
        for (var O = /* @__PURE__ */ new Map(), q = V; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, V) {
        var O = qs(k, V);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, V, O) {
        if (k.index = O, !e)
          return k.flags |= cd, V;
        var q = k.alternate;
        if (q !== null) {
          var he = q.index;
          return he < V ? (k.flags |= an, V) : he;
        } else
          return k.flags |= an, V;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= an), k;
      }
      function p(k, V, O, q) {
        if (V === null || V.tag !== xe) {
          var he = t0(O, k.mode, q);
          return he.return = k, he;
        } else {
          var oe = u(V, O);
          return oe.return = k, oe;
        }
      }
      function v(k, V, O, q) {
        var he = O.type;
        if (he === pa)
          return g(k, V, O.props.children, q, O.key);
        if (V !== null && (V.elementType === he || // Keep this check inline so it only runs on the false path:
        C1(V, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof he == "object" && he !== null && he.$$typeof === Oe && OE(he) === V.type)) {
          var oe = u(V, O.props);
          return oe.ref = yp(k, V, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Ve = e0(O, k.mode, q);
        return Ve.ref = yp(k, V, O), Ve.return = k, Ve;
      }
      function y(k, V, O, q) {
        if (V === null || V.tag !== ie || V.stateNode.containerInfo !== O.containerInfo || V.stateNode.implementation !== O.implementation) {
          var he = n0(O, k.mode, q);
          return he.return = k, he;
        } else {
          var oe = u(V, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, V, O, q, he) {
        if (V === null || V.tag !== Xe) {
          var oe = Yo(O, k.mode, q, he);
          return oe.return = k, oe;
        } else {
          var Ve = u(V, O);
          return Ve.return = k, Ve;
        }
      }
      function _(k, V, O) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var q = t0("" + V, k.mode, O);
          return q.return = k, q;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case oi: {
              var he = e0(V, k.mode, O);
              return he.ref = yp(k, null, V), he.return = k, he;
            }
            case xr: {
              var oe = n0(V, k.mode, O);
              return oe.return = k, oe;
            }
            case Oe: {
              var Ve = V._payload, qe = V._init;
              return _(k, qe(Ve), O);
            }
          }
          if (mt(V) || Ga(V)) {
            var Gt = Yo(V, k.mode, O, null);
            return Gt.return = k, Gt;
          }
          Ih(k, V);
        }
        return typeof V == "function" && Qh(k), null;
      }
      function b(k, V, O, q) {
        var he = V !== null ? V.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return he !== null ? null : p(k, V, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi:
              return O.key === he ? v(k, V, O, q) : null;
            case xr:
              return O.key === he ? y(k, V, O, q) : null;
            case Oe: {
              var oe = O._payload, Ve = O._init;
              return b(k, V, Ve(oe), q);
            }
          }
          if (mt(O) || Ga(O))
            return he !== null ? null : g(k, V, O, q, null);
          Ih(k, O);
        }
        return typeof O == "function" && Qh(k), null;
      }
      function N(k, V, O, q, he) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var oe = k.get(O) || null;
          return p(V, oe, "" + q, he);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case oi: {
              var Ve = k.get(q.key === null ? O : q.key) || null;
              return v(V, Ve, q, he);
            }
            case xr: {
              var qe = k.get(q.key === null ? O : q.key) || null;
              return y(V, qe, q, he);
            }
            case Oe:
              var Gt = q._payload, Mt = q._init;
              return N(k, V, O, Mt(Gt), he);
          }
          if (mt(q) || Ga(q)) {
            var $n = k.get(O) || null;
            return g(V, $n, q, he, null);
          }
          Ih(V, q);
        }
        return typeof q == "function" && Qh(V), null;
      }
      function U(k, V, O) {
        {
          if (typeof k != "object" || k === null)
            return V;
          switch (k.$$typeof) {
            case oi:
            case xr:
              kE(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(q);
                break;
              }
              if (!V.has(q)) {
                V.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Oe:
              var he = k._payload, oe = k._init;
              U(oe(he), V, O);
              break;
          }
        }
        return V;
      }
      function H(k, V, O, q) {
        for (var he = null, oe = 0; oe < O.length; oe++) {
          var Ve = O[oe];
          he = U(Ve, he, k);
        }
        for (var qe = null, Gt = null, Mt = V, $n = 0, Nt = 0, Un = null; Mt !== null && Nt < O.length; Nt++) {
          Mt.index > Nt ? (Un = Mt, Mt = null) : Un = Mt.sibling;
          var ua = b(k, Mt, O[Nt], q);
          if (ua === null) {
            Mt === null && (Mt = Un);
            break;
          }
          e && Mt && ua.alternate === null && t(k, Mt), $n = s(ua, $n, Nt), Gt === null ? qe = ua : Gt.sibling = ua, Gt = ua, Mt = Un;
        }
        if (Nt === O.length) {
          if (a(k, Mt), Mr()) {
            var Hr = Nt;
            As(k, Hr);
          }
          return qe;
        }
        if (Mt === null) {
          for (; Nt < O.length; Nt++) {
            var ii = _(k, O[Nt], q);
            ii !== null && ($n = s(ii, $n, Nt), Gt === null ? qe = ii : Gt.sibling = ii, Gt = ii);
          }
          if (Mr()) {
            var Ta = Nt;
            As(k, Ta);
          }
          return qe;
        }
        for (var wa = i(k, Mt); Nt < O.length; Nt++) {
          var oa = N(wa, k, Nt, O[Nt], q);
          oa !== null && (e && oa.alternate !== null && wa.delete(oa.key === null ? Nt : oa.key), $n = s(oa, $n, Nt), Gt === null ? qe = oa : Gt.sibling = oa, Gt = oa);
        }
        if (e && wa.forEach(function(Ff) {
          return t(k, Ff);
        }), Mr()) {
          var Fu = Nt;
          As(k, Fu);
        }
        return qe;
      }
      function ve(k, V, O, q) {
        var he = Ga(O);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (bg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), bg = !0), O.entries === he && (wg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var oe = he.call(O);
          if (oe)
            for (var Ve = null, qe = oe.next(); !qe.done; qe = oe.next()) {
              var Gt = qe.value;
              Ve = U(Gt, Ve, k);
            }
        }
        var Mt = he.call(O);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Nt = null, Un = V, ua = 0, Hr = 0, ii = null, Ta = Mt.next(); Un !== null && !Ta.done; Hr++, Ta = Mt.next()) {
          Un.index > Hr ? (ii = Un, Un = null) : ii = Un.sibling;
          var wa = b(k, Un, Ta.value, q);
          if (wa === null) {
            Un === null && (Un = ii);
            break;
          }
          e && Un && wa.alternate === null && t(k, Un), ua = s(wa, ua, Hr), Nt === null ? $n = wa : Nt.sibling = wa, Nt = wa, Un = ii;
        }
        if (Ta.done) {
          if (a(k, Un), Mr()) {
            var oa = Hr;
            As(k, oa);
          }
          return $n;
        }
        if (Un === null) {
          for (; !Ta.done; Hr++, Ta = Mt.next()) {
            var Fu = _(k, Ta.value, q);
            Fu !== null && (ua = s(Fu, ua, Hr), Nt === null ? $n = Fu : Nt.sibling = Fu, Nt = Fu);
          }
          if (Mr()) {
            var Ff = Hr;
            As(k, Ff);
          }
          return $n;
        }
        for (var Wp = i(k, Un); !Ta.done; Hr++, Ta = Mt.next()) {
          var Wl = N(Wp, k, Hr, Ta.value, q);
          Wl !== null && (e && Wl.alternate !== null && Wp.delete(Wl.key === null ? Hr : Wl.key), ua = s(Wl, ua, Hr), Nt === null ? $n = Wl : Nt.sibling = Wl, Nt = Wl);
        }
        if (e && Wp.forEach(function(J_) {
          return t(k, J_);
        }), Mr()) {
          var Z_ = Hr;
          As(k, Z_);
        }
        return $n;
      }
      function Le(k, V, O, q) {
        if (V !== null && V.tag === xe) {
          a(k, V.sibling);
          var he = u(V, O);
          return he.return = k, he;
        }
        a(k, V);
        var oe = t0(O, k.mode, q);
        return oe.return = k, oe;
      }
      function Te(k, V, O, q) {
        for (var he = O.key, oe = V; oe !== null; ) {
          if (oe.key === he) {
            var Ve = O.type;
            if (Ve === pa) {
              if (oe.tag === Xe) {
                a(k, oe.sibling);
                var qe = u(oe, O.props.children);
                return qe.return = k, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (oe.elementType === Ve || // Keep this check inline so it only runs on the false path:
            C1(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Oe && OE(Ve) === oe.type) {
              a(k, oe.sibling);
              var Gt = u(oe, O.props);
              return Gt.ref = yp(k, oe, O), Gt.return = k, Gt._debugSource = O._source, Gt._debugOwner = O._owner, Gt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === pa) {
          var Mt = Yo(O.props.children, k.mode, q, O.key);
          return Mt.return = k, Mt;
        } else {
          var $n = e0(O, k.mode, q);
          return $n.ref = yp(k, V, O), $n.return = k, $n;
        }
      }
      function Rt(k, V, O, q) {
        for (var he = O.key, oe = V; oe !== null; ) {
          if (oe.key === he)
            if (oe.tag === ie && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Ve = u(oe, O.children || []);
              return Ve.return = k, Ve;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var qe = n0(O, k.mode, q);
        return qe.return = k, qe;
      }
      function ht(k, V, O, q) {
        var he = typeof O == "object" && O !== null && O.type === pa && O.key === null;
        if (he && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi:
              return f(Te(k, V, O, q));
            case xr:
              return f(Rt(k, V, O, q));
            case Oe:
              var oe = O._payload, Ve = O._init;
              return ht(k, V, Ve(oe), q);
          }
          if (mt(O))
            return H(k, V, O, q);
          if (Ga(O))
            return ve(k, V, O, q);
          Ih(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, V, "" + O, q)) : (typeof O == "function" && Qh(k), a(k, V));
      }
      return ht;
    }
    var Cf = LE(!0), ME = LE(!1);
    function Vw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = qs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = qs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Pw(e, t) {
      for (var a = e.child; a !== null; )
        m_(a, t), a = a.sibling;
    }
    var gp = {}, Uo = Oo(gp), Sp = Oo(gp), Wh = Oo(gp);
    function Gh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function NE() {
      var e = Gh(Wh.current);
      return e;
    }
    function kg(e, t) {
      ia(Wh, t, e), ia(Sp, e, e), ia(Uo, gp, e);
      var a = tT(t);
      aa(Uo, e), ia(Uo, a, e);
    }
    function Rf(e) {
      aa(Uo, e), aa(Sp, e), aa(Wh, e);
    }
    function Og() {
      var e = Gh(Uo.current);
      return e;
    }
    function zE(e) {
      Gh(Wh.current);
      var t = Gh(Uo.current), a = nT(t, e.type);
      t !== a && (ia(Sp, e, e), ia(Uo, a, e));
    }
    function Lg(e) {
      Sp.current === e && (aa(Uo, e), aa(Sp, e));
    }
    var Bw = 0, UE = 1, AE = 1, Ep = 2, Ki = Oo(Bw);
    function Mg(e, t) {
      return (e & t) !== 0;
    }
    function Tf(e) {
      return e & UE;
    }
    function Ng(e, t) {
      return e & UE | t;
    }
    function $w(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ia(Ki, t, e);
    }
    function wf(e) {
      aa(Ki, e);
    }
    function Yw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Q0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === Ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Be) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = (
      /*   */
      0
    ), ir = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), lr = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), zg = [];
    function Ug() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function Iw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = M.ReactCurrentDispatcher, Cp = M.ReactCurrentBatchConfig, Ag, bf;
    Ag = /* @__PURE__ */ new Set();
    var Bs = P, Wt = null, ur = null, or = null, Xh = !1, Rp = !1, Tp = 0, Qw = 0, Ww = 25, B = null, wi = null, Fo = -1, Fg = !1;
    function $t() {
      {
        var e = B;
        wi === null ? wi = [e] : wi.push(e);
      }
    }
    function re() {
      {
        var e = B;
        wi !== null && (Fo++, wi[Fo] !== e && Gw(e));
      }
    }
    function xf(e) {
      e != null && !mt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function Gw(e) {
      {
        var t = Qe(Wt);
        if (!Ag.has(t) && (Ag.add(t), wi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = wi[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function _f(e, t, a, i, u, s) {
      Bs = s, Wt = t, wi = e !== null ? e._debugHookTypes : null, Fo = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? fe.current = aC : wi !== null ? fe.current = rC : fe.current = nC;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Ww)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, ur = null, or = null, t.updateQueue = null, Fo = -1, fe.current = iC, f = a(i, u);
        } while (Rp);
      }
      fe.current = sm, t._debugHookTypes = wi;
      var v = ur !== null && ur.next !== null;
      if (Bs = P, Wt = null, ur = null, or = null, B = null, wi = null, Fo = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== Ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Df() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function FE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & za) !== Ne ? t.flags &= ~(iu | Zr | cn | et) : t.flags &= ~(cn | et), e.lanes = po(e.lanes, a);
    }
    function jE() {
      if (fe.current = sm, Xh) {
        for (var e = Wt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      Bs = P, Wt = null, ur = null, or = null, wi = null, Fo = -1, B = null, KE = !1, Rp = !1, Tp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? Wt.memoizedState = or = e : or = or.next = e, or;
    }
    function bi() {
      var e;
      if (ur === null) {
        var t = Wt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ur.next;
      var a;
      if (or === null ? a = Wt.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, ur = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ur = e;
        var i = {
          memoizedState: ur.memoizedState,
          baseState: ur.baseState,
          baseQueue: ur.baseQueue,
          queue: ur.queue,
          next: null
        };
        or === null ? Wt.memoizedState = or = i : or = or.next = i;
      }
      return or;
    }
    function HE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Vg(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Zw.bind(null, Wt, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ur, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, b = null, N = null, U = null, H = g;
        do {
          var ve = H.lane;
          if (hu(Bs, ve)) {
            if (U !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Et,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              U = U.next = Te;
            }
            if (H.hasEagerState)
              _ = H.eagerState;
            else {
              var Rt = H.action;
              _ = e(_, Rt);
            }
          } else {
            var Le = {
              lane: ve,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            U === null ? (N = U = Le, b = _) : U = U.next = Le, Wt.lanes = tt(Wt.lanes, ve), Bp(ve);
          }
          H = H.next;
        } while (H !== null && H !== g);
        U === null ? b = _ : U.next = N, Se(_, i.memoizedState) || Op(), i.memoizedState = _, i.baseState = b, i.baseQueue = U, u.lastRenderedState = _;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var V = k.lane;
          Wt.lanes = tt(Wt.lanes, V), Bp(V), k = k.next;
        } while (k !== ht);
      } else
        f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Bg(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || Op(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function xD(e, t, a) {
    }
    function _D(e, t, a) {
    }
    function $g(e, t, a) {
      var i = Wt, u = Pl(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), bf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), bf = !0);
      } else {
        if (s = t(), !bf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), bf = !0);
        }
        var v = _m();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(v, Bs) || VE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, tm(BE.bind(null, i, y, e), [e]), i.flags |= cn, wp(ir | Nr, PE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = Wt, u = bi(), s = t();
      if (!bf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), bf = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, Op());
      var y = u.queue;
      if (xp(BE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      or !== null && or.memoizedState.tag & ir) {
        i.flags |= cn, wp(ir | Nr, PE.bind(null, i, y, s, t), void 0, null);
        var g = _m();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(g, Bs) || VE(i, t, s);
      }
      return s;
    }
    function VE(e, t, a) {
      e.flags |= cs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Wt.updateQueue;
      if (u === null)
        u = HE(), Wt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function PE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, $E(t) && YE(e);
    }
    function BE(e, t, a) {
      var i = function() {
        $E(t) && YE(e);
      };
      return a(i);
    }
    function $E(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function YE(e) {
      var t = Pa(e, Fe);
      t !== null && dr(t, e, Fe, Jt);
    }
    function Zh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jw.bind(null, Wt, a);
      return [t.memoizedState, i];
    }
    function Yg(e) {
      return Pg(Hg);
    }
    function Ig(e) {
      return Bg(Hg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Wt.updateQueue;
      if (s === null)
        s = HE(), Wt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Qg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = bi();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      Wt.flags |= e, u.memoizedState = wp(ir | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = bi(), s = i === void 0 ? null : i, f = void 0;
      if (ur !== null) {
        var p = ur.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (jg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Wt.flags |= e, u.memoizedState = wp(ir | t, a, f, s);
    }
    function tm(e, t) {
      return (Wt.mode & za) !== Ne ? bp(iu | cn | Tl, Nr, e, t) : bp(cn | Tl, Nr, e, t);
    }
    function xp(e, t) {
      return em(cn, Nr, e, t);
    }
    function Wg(e, t) {
      return bp(et, Vl, e, t);
    }
    function nm(e, t) {
      return em(et, Vl, e, t);
    }
    function Gg(e, t) {
      var a = et;
      return a |= Kr, (Wt.mode & za) !== Ne && (a |= Zr), bp(a, lr, e, t);
    }
    function rm(e, t) {
      return em(et, lr, e, t);
    }
    function IE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function qg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = et;
      return u |= Kr, (Wt.mode & za) !== Ne && (u |= Zr), bp(u, lr, IE.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(et, lr, IE.bind(null, t, e), i);
    }
    function qw(e, t) {
    }
    var im = qw;
    function Xg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Kg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function QE(e) {
      var t = bi(), a = ur, i = a.memoizedState;
      return GE(t, i, e);
    }
    function WE(e) {
      var t = bi();
      if (ur === null)
        return t.memoizedState = e, e;
      var a = ur.memoizedState;
      return GE(t, a, e);
    }
    function GE(e, t, a) {
      var i = !ay(Bs);
      if (i) {
        if (!Se(a, t)) {
          var u = _d();
          Wt.lanes = tt(Wt.lanes, u), Bp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Op()), e.memoizedState = a, a;
    }
    function Xw(e, t, a) {
      var i = Aa();
      Vn(Sr(i, ar)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = Zh(!1), t = e[0], a = e[1], i = Xw.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function qE() {
      var e = Yg(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    function XE() {
      var e = Ig(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    var KE = !1;
    function Kw() {
      return KE;
    }
    function eS() {
      var e = Pl(), t = _m(), a = t.identifierPrefix, i;
      if (Mr()) {
        var u = fw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Qw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = bi(), t = e.memoizedState;
      return t;
    }
    function Zw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZE(e))
        JE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          dr(s, e, i, f), eC(s, t, i);
        }
      }
      tC(e, i);
    }
    function Jw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZE(e))
        JE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                Lw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var _ = Ra();
          dr(g, e, i, _), eC(g, t, i);
        }
      }
      tC(e, i);
    }
    function ZE(e) {
      var t = e.alternate;
      return e === Wt || t !== null && t === Wt;
    }
    function JE(e, t) {
      Rp = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function eC(e, t, a) {
      if (xd(a)) {
        var i = t.lanes;
        i = Dd(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, vo(e, u);
      }
    }
    function tC(e, t, a) {
      kl(e, t);
    }
    var sm = {
      readContext: Jn,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: J
    }, nC = null, rC = null, aC = null, iC = null, Bl = null, Zi = null, cm = null;
    {
      var tS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      nC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", $t(), xf(t), Xg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", $t(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", $t(), xf(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", $t(), xf(a), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", $t(), xf(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", $t(), xf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", $t(), xf(t);
          var a = fe.current;
          fe.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", $t();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Vg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", $t(), Qg(e);
        },
        useState: function(e) {
          B = "useState", $t();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Zh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", $t(), Zg(e);
        },
        useTransition: function() {
          return B = "useTransition", $t(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", $t(), $g(e, t, a);
        },
        useId: function() {
          return B = "useId", $t(), eS();
        },
        unstable_isNewReconciler: J
      }, rC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), Xg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), Gg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = fe.current;
          fe.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Vg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Qg(e);
        },
        useState: function(e) {
          B = "useState", re();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Zh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), Zg(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), $g(e, t, a);
        },
        useId: function() {
          return B = "useId", re(), eS();
        },
        unstable_isNewReconciler: J
      }, aC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = fe.current;
          fe.current = Zi;
          try {
            return um(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Jh();
        },
        useState: function(e) {
          B = "useState", re();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Yg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), im();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), QE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", re(), om();
        },
        unstable_isNewReconciler: J
      }, iC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = fe.current;
          fe.current = cm;
          try {
            return um(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = fe.current;
          fe.current = cm;
          try {
            return Bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Jh();
        },
        useState: function(e) {
          B = "useState", re();
          var t = fe.current;
          fe.current = cm;
          try {
            return Ig(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), im();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), WE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), XE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", re(), om();
        },
        unstable_isNewReconciler: J
      }, Bl = {
        readContext: function(e) {
          return tS(), Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), $t(), Xg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), $t(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), $t(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), $t(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), $t(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), $t(), Gg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), $t();
          var a = fe.current;
          fe.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), $t();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Vg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), $t(), Qg(e);
        },
        useState: function(e) {
          B = "useState", We(), $t();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Zh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), $t(), Zg(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), $t(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), $t(), $g(e, t, a);
        },
        useId: function() {
          return B = "useId", We(), $t(), eS();
        },
        unstable_isNewReconciler: J
      }, Zi = {
        readContext: function(e) {
          return tS(), Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), re(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), re();
          var a = fe.current;
          fe.current = Zi;
          try {
            return um(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), re();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), re(), Jh();
        },
        useState: function(e) {
          B = "useState", We(), re();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Yg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), re(), im();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), re(), QE(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", We(), re(), om();
        },
        unstable_isNewReconciler: J
      }, cm = {
        readContext: function(e) {
          return tS(), Jn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), re(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), re();
          var a = fe.current;
          fe.current = Zi;
          try {
            return um(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), re();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), re(), Jh();
        },
        useState: function(e) {
          B = "useState", We(), re();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Ig(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), re(), im();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), re(), WE(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), re(), XE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", We(), re(), om();
        },
        unstable_isNewReconciler: J
      };
    }
    var jo = Y.unstable_now, lC = 0, fm = -1, _p = -1, dm = -1, nS = !1, pm = !1;
    function uC() {
      return nS;
    }
    function eb() {
      pm = !0;
    }
    function tb() {
      nS = !1, pm = !1;
    }
    function nb() {
      nS = pm, pm = !1;
    }
    function oC() {
      return lC;
    }
    function sC() {
      lC = jo();
    }
    function rS(e) {
      _p = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function cC(e) {
      _p = -1;
    }
    function vm(e, t) {
      if (_p >= 0) {
        var a = jo() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function $l(e) {
      if (fm >= 0) {
        var t = jo() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case dt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function aS(e) {
      if (dm >= 0) {
        var t = jo() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case dt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yl() {
      fm = jo();
    }
    function iS() {
      dm = jo();
    }
    function lS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function $s(e, t) {
      return {
        value: e,
        source: t,
        stack: Yu(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rb(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = rb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(i);
        }
        var p = u ? Qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === X)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var ab = typeof WeakMap == "function" ? WeakMap : Map;
    function fC(e, t, a) {
      var i = Lu(Jt, a);
      i.tag = og, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Xx(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Lu(Jt, a);
      i.tag = og;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          R1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        R1(e), oS(e, t), typeof u != "function" && Gx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, Fe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), i;
    }
    function dC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ab(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Kx.bind(null, e, t, a);
        rr && $p(e, a), t.then(s, s);
      }
    }
    function ib(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function lb(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === Ne && (a === de || a === Ge || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function pC(e) {
      var t = e;
      do {
        if (t.tag === _e && Yw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function vC(e, t, a, i, u) {
      if ((e.mode & ct) === Ne) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= Be, a.flags |= fs, a.flags &= ~(dc | va), a.tag === se) {
            var s = a.alternate;
            if (s === null)
              a.tag = bn;
            else {
              var f = Lu(Jt, Fe);
              f.tag = jh, zo(a, f, Fe);
            }
          }
          a.lanes = tt(a.lanes, Fe);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function ub(e, t, a, i, u) {
      if (a.flags |= va, rr && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        lb(a), Mr() && a.mode & ct && aE();
        var f = pC(t);
        if (f !== null) {
          f.flags &= ~Rn, vC(f, t, a, e, u), f.mode & ct && dC(e, s, u), ib(f, e, s);
          return;
        } else {
          if (!fo(u)) {
            dC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Mr() && a.mode & ct) {
        aE();
        var v = pC(t);
        if (v !== null) {
          (v.flags & Gn) === ke && (v.flags |= Rn), vC(v, t, a, e, u), tg($s(i, a));
          return;
        }
      }
      i = $s(i, a), Vx(i);
      var y = t;
      do {
        switch (y.tag) {
          case X: {
            var g = i;
            y.flags |= Gn;
            var _ = Hn(u);
            y.lanes = tt(y.lanes, _);
            var b = fC(y, g, _);
            fg(y, b);
            return;
          }
          case se:
            var N = i, U = y.type, H = y.stateNode;
            if ((y.flags & Be) === ke && (typeof U.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !p1(H))) {
              y.flags |= Gn;
              var ve = Hn(u);
              y.lanes = tt(y.lanes, ve);
              var Le = sS(y, N, ve);
              fg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ob() {
      return null;
    }
    var Dp = M.ReactCurrentOwner, Ji = !1, cS, kp, fS, dS, pS, Ys, vS, hm;
    cS = {}, kp = {}, fS = {}, dS = {}, pS = {}, Ys = !1, vS = {}, hm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = ME(t, null, a, i) : t.child = Cf(t, e.child, a, i);
    }
    function sb(e, t, a, i) {
      t.child = Cf(t, e.child, null, i), t.child = Cf(t, null, a, i);
    }
    function hC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wi(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Ef(t, u), Dl(t);
      {
        if (Dp.current = t, Gr(!0), v = _f(e, t, f, i, p, u), y = Df(), t.mode & yn) {
          jn(!0);
          try {
            v = _f(e, t, f, i, p, u), y = Df();
          } finally {
            jn(!1);
          }
        }
        Gr(!1);
      }
      return lu(), e !== null && !Ji ? (FE(e, t, u), Mu(e, t, u)) : (Mr() && y && qy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (v_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Af(s), t.tag = He, t.type = f, yS(t, s), yC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Wi(
            p,
            i,
            // Resolved props
            "prop",
            _t(s)
          );
        }
        var v = JS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Wi(
          g,
          i,
          // Resolved props
          "prop",
          _t(y)
        );
      }
      var _ = e.child, b = TS(e, u);
      if (!b) {
        var N = _.memoizedProps, U = a.compare;
        if (U = U !== null ? U : De, U(N, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Cl;
      var H = qs(_, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function yC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Oe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Wi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (De(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ji = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & fs) !== ke && (Ji = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function gC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & ct) === Ne) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Dm(t, a);
        } else if (ra(a, na)) {
          var _ = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          Dm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = tt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Dm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = tt(s.baseLanes, a), t.memoizedState = null) : N = a, Dm(t, N);
      }
      return Ea(e, t, u, a), t.child;
    }
    function cb(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function fb(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function db(e, t, a) {
      {
        t.flags |= et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function SC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= fd);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wi(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var p = vf(t, a, !0);
        f = hf(t, p);
      }
      var v, y;
      Ef(t, u), Dl(t);
      {
        if (Dp.current = t, Gr(!0), v = _f(e, t, a, i, f, u), y = Df(), t.mode & yn) {
          jn(!0);
          try {
            v = _f(e, t, a, i, f, u), y = Df();
          } finally {
            jn(!1);
          }
        }
        Gr(!1);
      }
      return lu(), e !== null && !Ji ? (FE(e, t, u), Mu(e, t, u)) : (Mr() && y && qy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function EC(e, t, a, i, u) {
      {
        switch (k_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Be, t.flags |= Gn;
            var y = new Error("Simulated error coming from DevTools"), g = Hn(u);
            t.lanes = tt(t.lanes, g);
            var _ = sS(t, $s(y, t), g);
            fg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Wi(
            b,
            i,
            // Resolved props
            "prop",
            _t(a)
          );
        }
      }
      var N;
      Hl(a) ? (N = !0, _h(t)) : N = !1, Ef(t, u);
      var U = t.stateNode, H;
      U === null ? (ym(e, t), _E(t, a, i), Tg(t, a, i, u), H = !0) : e === null ? H = jw(t, a, i, u) : H = Hw(e, t, a, i, u);
      var ve = mS(e, t, a, H, N, u);
      {
        var Le = t.stateNode;
        H && Le.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), Ys = !0);
      }
      return ve;
    }
    function mS(e, t, a, i, u, s) {
      SC(e, t);
      var f = (t.flags & Be) !== ke;
      if (!i && !f)
        return u && eE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, cC();
      else {
        Dl(t);
        {
          if (Gr(!0), v = p.render(), t.mode & yn) {
            jn(!0);
            try {
              p.render();
            } finally {
              jn(!1);
            }
          }
          Gr(!1);
        }
        lu();
      }
      return t.flags |= Cl, e !== null && f ? sb(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && eE(t, a, !0), t.child;
    }
    function CC(e) {
      var t = e.stateNode;
      t.pendingContext ? Z0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Z0(e, t.context, !1), kg(e, t.containerInfo);
    }
    function pb(e, t, a) {
      if (CC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), Bh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = $s(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return RC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = $s(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return RC(e, t, p, a, _);
        } else {
          yw(t);
          var b = ME(t, null, p, a);
          t.child = b;
          for (var N = b; N; )
            N.flags = N.flags & ~an | La, N = N.sibling;
        }
      } else {
        if (gf(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function RC(e, t, a, i, u) {
      return gf(), tg(u), t.flags |= Rn, Ea(e, t, a, i), t.child;
    }
    function vb(e, t, a) {
      zE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Bt), SC(e, t), Ea(e, t, f, a), t.child;
    }
    function hb(e, t) {
      return e === null && eg(t), null;
    }
    function mb(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = h_(v), g = Xi(v, u), _;
      switch (y) {
        case de:
          return yS(t, v), t.type = v = Af(v), _ = hS(null, t, v, g, i), _;
        case se:
          return t.type = v = WS(v), _ = EC(null, t, v, g, i), _;
        case Ge:
          return t.type = v = GS(v), _ = hC(null, t, v, g, i), _;
        case ut: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Wi(
              b,
              g,
              // Resolved for outer only
              "prop",
              _t(v)
            );
          }
          return _ = mC(
            null,
            t,
            v,
            Xi(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Oe && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function yb(e, t, a, i, u) {
      ym(e, t), t.tag = se;
      var s;
      return Hl(a) ? (s = !0, _h(t)) : s = !1, Ef(t, u), _E(t, a, i), Tg(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function gb(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s;
      {
        var f = vf(t, a, !1);
        s = hf(t, f);
      }
      Ef(t, i);
      var p, v;
      Dl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = _t(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & yn && qi.recordLegacyContextWarning(t, null), Gr(!0), Dp.current = t, p = _f(null, t, a, u, s, i), v = Df(), Gr(!1);
      }
      if (lu(), t.flags |= Cl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = _t(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = _t(a) || "Unknown";
          kp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), kp[_] = !0);
        }
        t.tag = se, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Hl(a) ? (b = !0, _h(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, cg(t), xE(t, p), Tg(t, a, u, i), mS(null, t, a, !0, b, i);
      } else {
        if (t.tag = de, t.mode & yn) {
          jn(!0);
          try {
            p = _f(null, t, a, u, s, i), v = Df();
          } finally {
            jn(!1);
          }
        }
        return Mr() && v && qy(t), Ea(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = _t(t) || "Unknown";
          dS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), dS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = _t(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support contextType.", p), fS[p] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Et
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: ob(),
        transitions: null
      };
    }
    function Sb(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Eb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Mg(e, Ep);
    }
    function Cb(e, t) {
      return po(e.childLanes, t);
    }
    function TC(e, t, a) {
      var i = t.pendingProps;
      O_(t) && (t.flags |= Be);
      var u = Ki.current, s = !1, f = (t.flags & Be) !== ke;
      if (f || Eb(u, e) ? (s = !0, t.flags &= ~Be) : (e === null || e.memoizedState !== null) && (u = $w(u, AE)), u = Tf(u), Ao(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return xb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = Rb(t, y, g, a), b = t.child;
          return b.memoizedState = SS(a), t.memoizedState = gS, _;
        } else
          return ES(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return _b(e, t, f, i, U, N, a);
        }
        if (s) {
          var H = i.fallback, ve = i.children, Le = wb(e, t, ve, H, a), Te = t.child, Rt = e.child.memoizedState;
          return Te.memoizedState = Rt === null ? SS(a) : Sb(Rt, a), Te.childLanes = Cb(e, a), t.memoizedState = gS, Le;
        } else {
          var ht = i.children, k = Tb(e, t, ht, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Rb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ct) === Ne && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Ue && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = CS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return w1(e, t, P, null);
    }
    function wC(e, t) {
      return qs(e, t);
    }
    function Tb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = wC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === Ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ut) : p.push(s);
      }
      return t.child = f, f;
    }
    function wb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === Ne && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Ue && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = wC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var _;
      return p !== null ? _ = qs(p, i) : (_ = Yo(i, s, u, null), _.flags |= an), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function mm(e, t, a, i) {
      i !== null && tg(i), Cf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= an, t.memoizedState = null, f;
    }
    function bb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Yo(i, s, u, null);
      return v.flags |= an, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ct) !== Ne && Cf(t, e.child, null, u), v;
    }
    function xb(e, t, a) {
      return (e.mode & ct) === Ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Fe) : Hy(t) ? e.lanes = su : e.lanes = na, null;
    }
    function _b(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return mm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Be, null;
          var V = i.children, O = i.fallback, q = bb(e, t, V, O, f), he = t.child;
          return he.memoizedState = SS(f), t.memoizedState = gS, q;
        }
      else {
        if (hw(), (t.mode & ct) === Ne)
          return mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = MT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = uS(_, p, y);
          return mm(e, t, f, b);
        }
        var N = ra(f, e.childLanes);
        if (Ji || N) {
          var U = _m();
          if (U !== null) {
            var H = ly(U, f);
            if (H !== Et && H !== s.retryLane) {
              s.retryLane = H;
              var ve = Jt;
              Pa(e, H), dr(U, e, H, ve);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return mm(e, t, f, Le);
        } else if (Q0(u)) {
          t.flags |= Be, t.child = e.child;
          var Te = Zx.bind(null, e);
          return NT(u, Te), null;
        } else {
          gw(t, u, s.treeContext);
          var Rt = i.children, ht = ES(t, Rt);
          return ht.flags |= La, ht;
        }
      }
    }
    function bC(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), lg(e.return, t, a);
    }
    function Db(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && bC(i, a, e);
        } else if (i.tag === Ot)
          bC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function kb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ob(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Lb(e, t) {
      e !== void 0 && !hm[e] && (e !== "collapsed" && e !== "hidden" ? (hm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (hm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xC(e, t) {
      {
        var a = mt(e), i = !a && typeof Ga(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Mb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!xC(e[a], a))
              return;
        } else {
          var i = Ga(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!xC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function _C(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ob(u), Lb(s, u), Mb(f, u), Ea(e, t, f, a);
      var p = Ki.current, v = Mg(p, Ep);
      if (v)
        p = Ng(p, Ep), t.flags |= Be;
      else {
        var y = e !== null && (e.flags & Be) !== ke;
        y && Db(t, t.child, a), p = Tf(p);
      }
      if (Ao(t, p), (t.mode & ct) === Ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = kb(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && qh(U) === null) {
                t.child = N;
                break;
              }
              var H = N.sibling;
              N.sibling = b, b = N, N = H;
            }
            RS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Nb(e, t, a) {
      kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Cf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var DC = !1;
    function zb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || DC || (DC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Wi(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !bh())
            return Mu(e, t, a);
        } else
          Dw(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var kC = !1;
    function Ub(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (kC || (kC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ef(t, a);
      var f = Jn(i);
      Dl(t);
      var p;
      return Dp.current = t, Gr(!0), p = s(f), Gr(!1), lu(), t.flags |= Cl, Ea(e, t, p, a), t.child;
    }
    function Op() {
      Ji = !0;
    }
    function ym(e, t) {
      (t.mode & ct) === Ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= an);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), cC(), Bp(t.lanes), ra(a, t.childLanes) ? (Vw(e, t), t.child) : null;
    }
    function Ab(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= an, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function Fb(e, t, a) {
      switch (t.tag) {
        case X:
          CC(t), t.stateNode, gf();
          break;
        case ae:
          zE(t);
          break;
        case se: {
          var i = t.type;
          Hl(i) && _h(t);
          break;
        }
        case ie:
          kg(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case dt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Tf(Ki.current)), t.flags |= Be, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return TC(e, t, a);
            Ao(t, Tf(Ki.current));
            var _ = Mu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Ao(t, Tf(Ki.current));
          break;
        }
        case Ot: {
          var b = (e.flags & Be) !== ke, N = ra(a, t.childLanes);
          if (b) {
            if (N)
              return _C(e, t, a);
            t.flags |= Be;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ao(t, Ki.current), N)
            break;
          return null;
        }
        case Ae:
        case Ze:
          return t.lanes = P, gC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function OC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ab(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ji = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Be) === ke)
            return Ji = !1, Fb(e, t, a);
          (e.flags & fs) !== ke ? Ji = !0 : Ji = !1;
        }
      } else if (Ji = !1, Mr() && sw(t)) {
        var f = t.index, p = cw();
        rE(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case nt:
          return gb(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return mb(e, t, v, a);
        }
        case de: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : Xi(y, g);
          return hS(e, t, y, _, a);
        }
        case se: {
          var b = t.type, N = t.pendingProps, U = t.elementType === b ? N : Xi(b, N);
          return EC(e, t, b, U, a);
        }
        case X:
          return pb(e, t, a);
        case ae:
          return vb(e, t, a);
        case xe:
          return hb(e, t);
        case _e:
          return TC(e, t, a);
        case ie:
          return Nb(e, t, a);
        case Ge: {
          var H = t.type, ve = t.pendingProps, Le = t.elementType === H ? ve : Xi(H, ve);
          return hC(e, t, H, Le, a);
        }
        case Xe:
          return cb(e, t, a);
        case Ie:
          return fb(e, t, a);
        case dt:
          return db(e, t, a);
        case lt:
          return zb(e, t, a);
        case qt:
          return Ub(e, t, a);
        case ut: {
          var Te = t.type, Rt = t.pendingProps, ht = Xi(Te, Rt);
          if (t.type !== t.elementType) {
            var k = Te.propTypes;
            k && Wi(
              k,
              ht,
              // Resolved for outer only
              "prop",
              _t(Te)
            );
          }
          return ht = Xi(Te.type, ht), mC(e, t, Te, ht, a);
        }
        case He:
          return yC(e, t, t.type, t.pendingProps, a);
        case bn: {
          var V = t.type, O = t.pendingProps, q = t.elementType === V ? O : Xi(V, O);
          return yb(e, t, V, q, a);
        }
        case Ot:
          return _C(e, t, a);
        case En:
          break;
        case Ae:
          return gC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function kf(e) {
      e.flags |= et;
    }
    function LC(e) {
      e.flags |= Xr, e.flags |= fd;
    }
    var MC, wS, NC, zC;
    MC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === xe)
          lT(e, u.stateNode);
        else if (u.tag !== ie) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, NC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = oT(f, a, s, i, u, p);
        t.updateQueue = v, v && kf(t);
      }
    }, zC = function(e, t, a, i) {
      a !== i && kf(t);
    };
    function Lp(e, t) {
      if (!Mr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = ke;
      if (t) {
        if ((e.mode & Ue) !== Ne) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = tt(a, tt(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = tt(a, tt(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ue) !== Ne) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jb(e, t, a) {
      if (Tw() && (t.mode & ct) !== Ne && (t.flags & Be) === ke)
        return cE(t), gf(), t.flags |= Rn | va | Gn, !1;
      var i = Mh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Cw(t), zr(t), (t.mode & Ue) !== Ne) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (gf(), (t.flags & Be) === ke && (t.memoizedState = null), t.flags |= et, zr(t), (t.mode & Ue) !== Ne) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fE(), !0;
    }
    function UC(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case nt:
        case rn:
        case He:
        case de:
        case Ge:
        case Xe:
        case Ie:
        case dt:
        case qt:
        case ut:
          return zr(t), null;
        case se: {
          var u = t.type;
          return Hl(u) && xh(t), zr(t), null;
        }
        case X: {
          var s = t.stateNode;
          if (Rf(t), Qy(t), Ug(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Mh(t);
            if (f)
              kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== ke) && (t.flags |= Oa, fE());
            }
          }
          return wS(e, t), zr(t), null;
        }
        case ae: {
          Lg(t);
          var v = NE(), y = t.type;
          if (e !== null && t.stateNode != null)
            NC(e, t, y, i, v), e.ref !== t.ref && LC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = Og(), _ = Mh(t);
            if (_)
              Sw(t, v, g) && kf(t);
            else {
              var b = iT(y, i, v, g, t);
              MC(b, t, !1, !1), t.stateNode = b, uT(b, y, i, v) && kf(t);
            }
            t.ref !== null && LC(t);
          }
          return zr(t), null;
        }
        case xe: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            zC(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = NE(), ve = Og(), Le = Mh(t);
            Le ? Ew(t) && kf(t) : t.stateNode = sT(N, H, ve, t);
          }
          return zr(t), null;
        }
        case _e: {
          wf(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = jb(e, t, Te);
            if (!Rt)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & Be) !== ke)
            return t.lanes = a, (t.mode & Ue) !== Ne && lS(t), t;
          var ht = Te !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var V = t.child;
            if (V.flags |= Rl, (t.mode & ct) !== Ne) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              O || Mg(Ki.current, AE) ? Hx() : BS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= et), zr(t), (t.mode & Ue) !== Ne && ht) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case ie:
          return Rf(t), wS(e, t), e === null && nw(t.stateNode.containerInfo), zr(t), null;
        case lt:
          var oe = t.type._context;
          return ig(oe, t), zr(t), null;
        case bn: {
          var Ve = t.type;
          return Hl(Ve) && xh(t), zr(t), null;
        }
        case Ot: {
          wf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return zr(t), null;
          var Gt = (t.flags & Be) !== ke, Mt = qe.rendering;
          if (Mt === null)
            if (Gt)
              Lp(qe, !1);
            else {
              var $n = Px() && (e === null || (e.flags & Be) === ke);
              if (!$n)
                for (var Nt = t.child; Nt !== null; ) {
                  var Un = qh(Nt);
                  if (Un !== null) {
                    Gt = !0, t.flags |= Be, Lp(qe, !1);
                    var ua = Un.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= et), t.subtreeFlags = ke, Pw(t, a), Ao(t, Ng(Ki.current, Ep)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              qe.tail !== null && mn() > n1() && (t.flags |= Be, Gt = !0, Lp(qe, !1), t.lanes = wd);
            }
          else {
            if (!Gt) {
              var Hr = qh(Mt);
              if (Hr !== null) {
                t.flags |= Be, Gt = !0;
                var ii = Hr.updateQueue;
                if (ii !== null && (t.updateQueue = ii, t.flags |= et), Lp(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Mt.alternate && !Mr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mn() * 2 - qe.renderingStartTime > n1() && a !== na && (t.flags |= Be, Gt = !0, Lp(qe, !1), t.lanes = wd);
            }
            if (qe.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var Ta = qe.last;
              Ta !== null ? Ta.sibling = Mt : t.child = Mt, qe.last = Mt;
            }
          }
          if (qe.tail !== null) {
            var wa = qe.tail;
            qe.rendering = wa, qe.tail = wa.sibling, qe.renderingStartTime = mn(), wa.sibling = null;
            var oa = Ki.current;
            return Gt ? oa = Ng(oa, Ep) : oa = Tf(oa), Ao(t, oa), wa;
          }
          return zr(t), null;
        }
        case En:
          break;
        case Ae:
        case Ze: {
          PS(t);
          var Fu = t.memoizedState, Ff = Fu !== null;
          if (e !== null) {
            var Wp = e.memoizedState, Wl = Wp !== null;
            Wl !== Ff && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= Rl);
          }
          return !Ff || (t.mode & ct) === Ne ? zr(t) : ra(Ql, na) && (zr(t), t.subtreeFlags & (an | et) && (t.flags |= Rl)), null;
        }
        case At:
          return null;
        case bt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hb(e, t, a) {
      switch (Xy(t), t.tag) {
        case se: {
          var i = t.type;
          Hl(i) && xh(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | Be, (t.mode & Ue) !== Ne && lS(t), t) : null;
        }
        case X: {
          t.stateNode, Rf(t), Qy(t), Ug();
          var s = t.flags;
          return (s & Gn) !== ke && (s & Be) === ke ? (t.flags = s & ~Gn | Be, t) : null;
        }
        case ae:
          return Lg(t), null;
        case _e: {
          wf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            gf();
          }
          var p = t.flags;
          return p & Gn ? (t.flags = p & ~Gn | Be, (t.mode & Ue) !== Ne && lS(t), t) : null;
        }
        case Ot:
          return wf(t), null;
        case ie:
          return Rf(t), null;
        case lt:
          var v = t.type._context;
          return ig(v, t), null;
        case Ae:
        case Ze:
          return PS(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function AC(e, t, a) {
      switch (Xy(t), t.tag) {
        case se: {
          var i = t.type.childContextTypes;
          i != null && xh(t);
          break;
        }
        case X: {
          t.stateNode, Rf(t), Qy(t), Ug();
          break;
        }
        case ae: {
          Lg(t);
          break;
        }
        case ie:
          Rf(t);
          break;
        case _e:
          wf(t);
          break;
        case Ot:
          wf(t);
          break;
        case lt:
          var u = t.type._context;
          ig(u, t);
          break;
        case Ae:
        case Ze:
          PS(t);
          break;
      }
    }
    var FC = null;
    FC = /* @__PURE__ */ new Set();
    var gm = !1, Ur = !1, Vb = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Of = null, Lf = null;
    function Pb(e) {
      au(null, function() {
        throw e;
      }), sd();
    }
    var Bb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ue)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function jC(e, t) {
      try {
        Ho(lr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function bS(e, t, a) {
      try {
        Bb(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function $b(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function HC(e, t) {
      try {
        PC(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Mf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (rt && pt && e.mode & Ue)
              try {
                Yl(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          a.current = null;
    }
    function Sm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var VC = !1;
    function Yb(e, t) {
      rT(e.containerInfo), Ee = t, Ib();
      var a = VC;
      return VC = !1, a;
    }
    function Ib() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & ao) !== ke && t !== null ? (t.return = e, Ee = t) : Qb();
      }
    }
    function Qb() {
      for (; Ee !== null; ) {
        var e = Ee;
        Pt(e);
        try {
          Wb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Wb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Oa) !== ke) {
        switch (Pt(e), e.tag) {
          case de:
          case Ge:
          case He:
            break;
          case se: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Xi(e.type, i), u);
              {
                var p = FC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case X: {
            {
              var v = e.stateNode;
              DT(v.containerInfo);
            }
            break;
          }
          case ae:
          case xe:
          case ie:
          case bn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function el(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Ba ? Ec(t) : (e & lr) !== Ba && Cc(t), (e & Vl) !== Ba && Yp(!0), Sm(t, a, p), (e & Vl) !== Ba && Yp(!1), (e & Nr) !== Ba ? Lv() : (e & lr) !== Ba && io());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Ba ? Ov(t) : (e & lr) !== Ba && Mv(t);
            var f = s.create;
            (e & Vl) !== Ba && Yp(!0), s.destroy = f(), (e & Vl) !== Ba && Yp(!1), (e & Nr) !== Ba ? Cd() : (e & lr) !== Ba && Nv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & lr) !== ke ? v = "useLayoutEffect" : (s.tag & Vl) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Gb(e, t) {
      if ((t.flags & et) !== ke)
        switch (t.tag) {
          case dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = oC(), p = t.alternate === null ? "mount" : "update";
            uC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case X:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case dt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function qb(e, t, a, i) {
      if ((a.flags & yr) !== ke)
        switch (a.tag) {
          case de:
          case Ge:
          case He: {
            if (!Ur)
              if (a.mode & Ue)
                try {
                  Yl(), Ho(lr | ir, a);
                } finally {
                  $l(a);
                }
              else
                Ho(lr | ir, a);
            break;
          }
          case se: {
            var u = a.stateNode;
            if (a.flags & et && !Ur)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Ue)
                  try {
                    Yl(), u.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Xi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Ue)
                  try {
                    Yl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), CE(a, p, u));
            break;
          }
          case X: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    y = a.child.stateNode;
                    break;
                  case se:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case ae: {
            var g = a.stateNode;
            if (t === null && a.flags & et) {
              var _ = a.type, b = a.memoizedProps;
              vT(g, _, b);
            }
            break;
          }
          case xe:
            break;
          case ie:
            break;
          case dt: {
            {
              var N = a.memoizedProps, U = N.onCommit, H = N.onRender, ve = a.stateNode.effectDuration, Le = oC(), Te = t === null ? "mount" : "update";
              uC() && (Te = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, Te, ve, Le), Qx(a);
                var Rt = a.return;
                e:
                  for (; Rt !== null; ) {
                    switch (Rt.tag) {
                      case X:
                        var ht = Rt.stateNode;
                        ht.effectDuration += ve;
                        break e;
                      case dt:
                        var k = Rt.stateNode;
                        k.effectDuration += ve;
                        break e;
                    }
                    Rt = Rt.return;
                  }
              }
            }
            break;
          }
          case _e: {
            rx(e, a);
            break;
          }
          case Ot:
          case bn:
          case En:
          case Ae:
          case Ze:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & Xr && PC(a);
    }
    function Xb(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case He: {
          if (e.mode & Ue)
            try {
              Yl(), jC(e, e.return);
            } finally {
              $l(e);
            }
          else
            jC(e, e.return);
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $b(e, e.return, t), HC(e, e.return);
          break;
        }
        case ae: {
          HC(e, e.return);
          break;
        }
      }
    }
    function Kb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? wT(u) : xT(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? bT(s) : _T(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === Ze) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function PC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ue)
            try {
              Yl(), u = t(i);
            } finally {
              $l(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = i;
      }
    }
    function Zb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function BC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, BC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && iw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Jb(e) {
      for (var t = e.return; t !== null; ) {
        if ($C(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $C(e) {
      return e.tag === ae || e.tag === X || e.tag === ie;
    }
    function YC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || $C(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== xe && t.tag !== Qt; ) {
            if (t.flags & an || t.child === null || t.tag === ie)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & an))
            return t.stateNode;
        }
    }
    function ex(e) {
      var t = Jb(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & Bt && (I0(a), t.flags &= ~Bt);
          var i = YC(e);
          _S(e, i, a);
          break;
        }
        case X:
        case ie: {
          var u = t.stateNode.containerInfo, s = YC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ae || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? ET(a, s, t) : gT(a, s);
      } else if (i !== ie) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ae || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? ST(a, s, t) : yT(a, s);
      } else if (i !== ie) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Ar = null, tl = !1;
    function tx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ae: {
                Ar = i.stateNode, tl = !1;
                break e;
              }
              case X: {
                Ar = i.stateNode.containerInfo, tl = !0;
                break e;
              }
              case ie: {
                Ar = i.stateNode.containerInfo, tl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        IC(e, t, a), Ar = null, tl = !1;
      }
      Zb(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        IC(e, t, i), i = i.sibling;
    }
    function IC(e, t, a) {
      switch (Sd(a), a.tag) {
        case ae:
          Ur || Mf(a, t);
        case xe: {
          {
            var i = Ar, u = tl;
            Ar = null, Vo(e, t, a), Ar = i, tl = u, Ar !== null && (tl ? RT(Ar, a.stateNode) : CT(Ar, a.stateNode));
          }
          return;
        }
        case Qt: {
          Ar !== null && (tl ? TT(Ar, a.stateNode) : jy(Ar, a.stateNode));
          return;
        }
        case ie: {
          {
            var s = Ar, f = tl;
            Ar = a.stateNode.containerInfo, tl = !0, Vo(e, t, a), Ar = s, tl = f;
          }
          return;
        }
        case de:
        case Ge:
        case ut:
        case He: {
          if (!Ur) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, N = _.tag;
                  b !== void 0 && ((N & Vl) !== Ba ? Sm(a, t, b) : (N & lr) !== Ba && (Cc(a), a.mode & Ue ? (Yl(), Sm(a, t, b), $l(a)) : Sm(a, t, b), io())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case se: {
          if (!Ur) {
            Mf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && bS(a, t, U);
          }
          Vo(e, t, a);
          return;
        }
        case En: {
          Vo(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var H = Ur;
            Ur = H || a.memoizedState !== null, Vo(e, t, a), Ur = H;
          } else
            Vo(e, t, a);
          break;
        }
        default: {
          Vo(e, t, a);
          return;
        }
      }
    }
    function nx(e) {
      e.memoizedState;
    }
    function rx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && BT(s);
          }
        }
      }
    }
    function QC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Vb()), t.forEach(function(i) {
          var u = Jx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (Of !== null && Lf !== null)
                $p(Lf, Of);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ax(e, t, a) {
      Of = a, Lf = e, Pt(t), WC(t, e), Pt(t), Of = null, Lf = null;
    }
    function nl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            tx(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = Zs();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Pt(p), WC(p, e), p = p.sibling;
      Pt(f);
    }
    function WC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case de:
        case Ge:
        case ut:
        case He: {
          if (nl(t, e), Il(e), u & et) {
            try {
              el(Vl | ir, e, e.return), Ho(Vl | ir, e);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
            if (e.mode & Ue) {
              try {
                Yl(), el(lr | ir, e, e.return);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
              $l(e);
            } else
              try {
                el(lr | ir, e, e.return);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
          }
          return;
        }
        case se: {
          nl(t, e), Il(e), u & Xr && i !== null && Mf(i, i.return);
          return;
        }
        case ae: {
          nl(t, e), Il(e), u & Xr && i !== null && Mf(i, i.return);
          {
            if (e.flags & Bt) {
              var s = e.stateNode;
              try {
                I0(s);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
            }
            if (u & et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    hT(f, g, y, v, p, e);
                  } catch (Ve) {
                    sn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (nl(t, e), Il(e), u & et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, N = i !== null ? i.memoizedProps : b;
            try {
              mT(_, N, b);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
          }
          return;
        }
        case X: {
          if (nl(t, e), Il(e), u & et && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                PT(t.containerInfo);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
          }
          return;
        }
        case ie: {
          nl(t, e), Il(e);
          return;
        }
        case _e: {
          nl(t, e), Il(e);
          var H = e.child;
          if (H.flags & Rl) {
            var ve = H.stateNode, Le = H.memoizedState, Te = Le !== null;
            if (ve.isHidden = Te, Te) {
              var Rt = H.alternate !== null && H.alternate.memoizedState !== null;
              Rt || jx();
            }
          }
          if (u & et) {
            try {
              nx(e);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
            QC(e);
          }
          return;
        }
        case Ae: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var k = Ur;
            Ur = k || ht, nl(t, e), Ur = k;
          } else
            nl(t, e);
          if (Il(e), u & Rl) {
            var V = e.stateNode, O = e.memoizedState, q = O !== null, he = e;
            if (V.isHidden = q, q && !ht && (he.mode & ct) !== Ne) {
              Ee = he;
              for (var oe = he.child; oe !== null; )
                Ee = oe, lx(oe), oe = oe.sibling;
            }
            Kb(he, q);
          }
          return;
        }
        case Ot: {
          nl(t, e), Il(e), u & et && QC(e);
          return;
        }
        case En:
          return;
        default: {
          nl(t, e), Il(e);
          return;
        }
      }
    }
    function Il(e) {
      var t = e.flags;
      if (t & an) {
        try {
          ex(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~an;
      }
      t & La && (e.flags &= ~La);
    }
    function ix(e, t, a) {
      Of = a, Lf = t, Ee = e, GC(e, t, a), Of = null, Lf = null;
    }
    function GC(e, t, a) {
      for (var i = (e.mode & ct) !== Ne; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || gm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ur, _ = gm, b = Ur;
            gm = p, Ur = g, Ur && !b && (Ee = u, ux(u));
            for (var N = s; N !== null; )
              Ee = N, GC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Ee = u, gm = _, Ur = b, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yr) !== ke && s !== null ? (s.return = u, Ee = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & yr) !== ke) {
          var u = i.alternate;
          Pt(i);
          try {
            qb(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function lx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case de:
          case Ge:
          case ut:
          case He: {
            if (t.mode & Ue)
              try {
                Yl(), el(lr, t, t.return);
              } finally {
                $l(t);
              }
            else
              el(lr, t, t.return);
            break;
          }
          case se: {
            Mf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && bS(t, t.return, i);
            break;
          }
          case ae: {
            Mf(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              qC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : qC(e);
      }
    }
    function qC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ux(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            XC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : XC(e);
      }
    }
    function XC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Pt(t);
        try {
          Xb(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ox(e, t, a, i) {
      Ee = t, sx(t, e, a, i);
    }
    function sx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Ma) !== ke && s !== null ? (s.return = u, Ee = s) : cx(e, t, a, i);
      }
    }
    function cx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & cn) !== ke) {
          Pt(u);
          try {
            fx(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function fx(e, t, a, i) {
      switch (t.tag) {
        case de:
        case Ge:
        case He: {
          if (t.mode & Ue) {
            iS();
            try {
              Ho(Nr | ir, t);
            } finally {
              aS(t);
            }
          } else
            Ho(Nr | ir, t);
          break;
        }
      }
    }
    function dx(e) {
      Ee = e, px();
    }
    function px() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Ut) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, mx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Ma) !== ke && t !== null ? (t.return = e, Ee = t) : vx();
      }
    }
    function vx() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & cn) !== ke && (Pt(e), hx(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function hx(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case He: {
          e.mode & Ue ? (iS(), el(Nr | ir, e, e.return), aS(e)) : el(Nr | ir, e, e.return);
          break;
        }
      }
    }
    function mx(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Pt(a), gx(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : yx(e);
      }
    }
    function yx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (BC(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function gx(e, t) {
      switch (e.tag) {
        case de:
        case Ge:
        case He: {
          e.mode & Ue ? (iS(), el(Nr, e, t), aS(e)) : el(Nr, e, t);
          break;
        }
      }
    }
    function Sx(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case He: {
          try {
            Ho(lr | ir, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Ex(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case He: {
          try {
            Ho(Nr | ir, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Cx(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case He: {
          try {
            el(lr | ir, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && bS(e, e.return, t);
          break;
        }
      }
    }
    function Rx(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case He:
          try {
            el(Nr | ir, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Mp = Symbol.for;
      Mp("selector.component"), Mp("selector.has_pseudo_class"), Mp("selector.role"), Mp("selector.test_id"), Mp("selector.text");
    }
    var Tx = [];
    function wx() {
      Tx.forEach(function(e) {
        return e();
      });
    }
    var bx = M.ReactCurrentActQueue;
    function xx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function KC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && bx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _x = Math.ceil, kS = M.ReactCurrentDispatcher, OS = M.ReactCurrentOwner, Fr = M.ReactCurrentBatchConfig, rl = M.ReactCurrentActQueue, sr = (
      /*             */
      0
    ), ZC = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), xi = (
      /*                */
      4
    ), Nu = 0, Np = 1, Is = 2, Em = 3, zp = 4, JC = 5, LS = 6, Ct = sr, Ca = null, On = null, cr = P, Ql = P, MS = Oo(P), fr = Nu, Up = null, Cm = P, Ap = P, Rm = P, Fp = null, $a = null, NS = 0, e1 = 500, t1 = 1 / 0, Dx = 500, zu = null;
    function jp() {
      t1 = mn() + Dx;
    }
    function n1() {
      return t1;
    }
    var Tm = !1, zS = null, Nf = null, Qs = !1, Po = null, Hp = P, US = [], AS = null, kx = 50, Vp = 0, FS = null, jS = !1, wm = !1, Ox = 50, zf = 0, bm = null, Pp = Jt, xm = P, r1 = !1;
    function _m() {
      return Ca;
    }
    function Ra() {
      return (Ct & (jr | xi)) !== sr ? mn() : (Pp !== Jt || (Pp = mn()), Pp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ct) === Ne)
        return Fe;
      if ((Ct & jr) !== sr && cr !== P)
        return Hn(cr);
      var a = xw() !== bw;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return xm === Et && (xm = _d()), xm;
      }
      var u = Aa();
      if (u !== Et)
        return u;
      var s = cT();
      return s;
    }
    function Lx(e) {
      var t = e.mode;
      return (t & ct) === Ne ? Fe : iy();
    }
    function dr(e, t, a, i) {
      t_(), r1 && S("useInsertionEffect must not schedule updates."), jS && (wm = !0), mu(e, a, i), (Ct & jr) !== P && e === Ca ? a_(t) : (rr && Md(e, t, a), i_(t), e === Ca && ((Ct & jr) === sr && (Ap = tt(Ap, a)), fr === zp && $o(e, cr)), Ya(e, i), a === Fe && Ct === sr && (t.mode & ct) === Ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !rl.isBatchingLegacy && (jp(), nE()));
    }
    function Mx(e, t, a) {
      var i = e.current;
      i.lanes = t, mu(e, t, a), Ya(e, a);
    }
    function Nx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & jr) !== sr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      ny(e, t);
      var i = ys(e, e === Ca ? cr : P);
      if (i === P) {
        a !== null && S1(a), e.callbackNode = null, e.callbackPriority = Et;
        return;
      }
      var u = Nn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(rl.current !== null && a !== IS)) {
        a == null && s !== Fe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && S1(a);
      var f;
      if (u === Fe)
        e.tag === Lo ? (rl.isBatchingLegacy !== null && (rl.didScheduleLegacyUpdate = !0), ow(l1.bind(null, e))) : tE(l1.bind(null, e)), rl.current !== null ? rl.current.push(Mo) : dT(function() {
          (Ct & (jr | xi)) === sr && Mo();
        }), f = null;
      else {
        var p;
        switch (Rs(i)) {
          case gr:
            p = yc;
            break;
          case ar:
            p = ya;
            break;
          case Bi:
            p = mi;
            break;
          case Es:
            p = wl;
            break;
          default:
            p = mi;
            break;
        }
        f = QS(p, a1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function a1(e, t) {
      if (tb(), Pp = Jt, xm = P, (Ct & (jr | xi)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ys(e, e === Ca ? cr : P);
      if (u === P)
        return null;
      var s = !Ss(e, u) && !Hv(e, u) && !t, f = s ? $x(e, u) : km(e, u);
      if (f !== Nu) {
        if (f === Is) {
          var p = bd(e);
          p !== P && (u = p, f = HS(e, p));
        }
        if (f === Np) {
          var v = Up;
          throw Ws(e, P), $o(e, u), Ya(e, mn()), v;
        }
        if (f === LS)
          $o(e, u);
        else {
          var y = !Ss(e, u), g = e.current.alternate;
          if (y && !Ux(g)) {
            if (f = km(e, u), f === Is) {
              var _ = bd(e);
              _ !== P && (u = _, f = HS(e, _));
            }
            if (f === Np) {
              var b = Up;
              throw Ws(e, P), $o(e, u), Ya(e, mn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, zx(e, f, u);
        }
      }
      return Ya(e, mn()), e.callbackNode === a ? a1.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Fp;
      if (Pn(e)) {
        var i = Ws(e, t);
        i.flags |= Rn, tw(e.containerInfo);
      }
      var u = km(e, t);
      if (u !== Is) {
        var s = $a;
        $a = a, s !== null && i1(s);
      }
      return u;
    }
    function i1(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function zx(e, t, a) {
      switch (t) {
        case Nu:
        case Np:
          throw new Error("Root did not complete. This is a bug in React.");
        case Is: {
          Gs(e, $a, zu);
          break;
        }
        case Em: {
          if ($o(e, a), Pc(a) && // do not delay if we're inside an act() scope
          !E1()) {
            var i = NS + e1 - mn();
            if (i > 10) {
              var u = ys(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                Ra(), Od(e, s);
                break;
              }
              e.timeoutHandle = Ay(Gs.bind(null, e, $a, zu), i);
              break;
            }
          }
          Gs(e, $a, zu);
          break;
        }
        case zp: {
          if ($o(e, a), jv(a))
            break;
          if (!E1()) {
            var f = Fv(e, a), p = f, v = mn() - p, y = e_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(Gs.bind(null, e, $a, zu), y);
              break;
            }
          }
          Gs(e, $a, zu);
          break;
        }
        case JC: {
          Gs(e, $a, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ux(e) {
      for (var t = e; ; ) {
        if (t.flags & cs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & cs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = po(t, Rm), t = po(t, Ap), kd(e, t);
    }
    function l1(e) {
      if (nb(), (Ct & (jr | xi)) !== sr)
        throw new Error("Should not already be working.");
      Au();
      var t = ys(e, P);
      if (!ra(t, Fe))
        return Ya(e, mn()), null;
      var a = km(e, t);
      if (e.tag !== Lo && a === Is) {
        var i = bd(e);
        i !== P && (t = i, a = HS(e, i));
      }
      if (a === Np) {
        var u = Up;
        throw Ws(e, P), $o(e, t), Ya(e, mn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Gs(e, $a, zu), Ya(e, mn()), null;
    }
    function Ax(e, t) {
      t !== P && (vo(e, tt(t, Fe)), Ya(e, mn()), (Ct & (jr | xi)) === sr && (jp(), Mo()));
    }
    function VS(e, t) {
      var a = Ct;
      Ct |= ZC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !rl.isBatchingLegacy && (jp(), nE());
      }
    }
    function Fx(e, t, a, i, u) {
      var s = Aa(), f = Fr.transition;
      try {
        return Fr.transition = null, Vn(gr), e(t, a, i, u);
      } finally {
        Vn(s), Fr.transition = f, Ct === sr && jp();
      }
    }
    function Uu(e) {
      Po !== null && Po.tag === Lo && (Ct & (jr | xi)) === sr && Au();
      var t = Ct;
      Ct |= ZC;
      var a = Fr.transition, i = Aa();
      try {
        return Fr.transition = null, Vn(gr), e ? e() : void 0;
      } finally {
        Vn(i), Fr.transition = a, Ct = t, (Ct & (jr | xi)) === sr && Mo();
      }
    }
    function u1() {
      return (Ct & (jr | xi)) !== sr;
    }
    function Dm(e, t) {
      ia(MS, Ql, e), Ql = tt(Ql, t);
    }
    function PS(e) {
      Ql = MS.current, aa(MS, e);
    }
    function Ws(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, fT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          AC(u, i), i = i.return;
        }
      Ca = e;
      var s = qs(e.current, null);
      return On = s, cr = Ql = t, fr = Nu, Up = null, Cm = P, Ap = P, Rm = P, Fp = null, $a = null, Ow(), qi.discardPendingWarnings(), s;
    }
    function o1(e, t) {
      do {
        var a = On;
        try {
          if (Ah(), jE(), Cn(), OS.current = null, a === null || a.return === null) {
            fr = Np, Up = t, On = null;
            return;
          }
          if (rt && a.mode & Ue && vm(a, !0), gt)
            if (lu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zv(a, i, cr);
            } else
              Rc(a, t, cr);
          ub(e, a.return, a, t, cr), d1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function s1() {
      var e = kS.current;
      return kS.current = sm, e === null ? sm : e;
    }
    function c1(e) {
      kS.current = e;
    }
    function jx() {
      NS = mn();
    }
    function Bp(e) {
      Cm = tt(e, Cm);
    }
    function Hx() {
      fr === Nu && (fr = Em);
    }
    function BS() {
      (fr === Nu || fr === Em || fr === Is) && (fr = zp), Ca !== null && (gs(Cm) || gs(Ap)) && $o(Ca, cr);
    }
    function Vx(e) {
      fr !== zp && (fr = Is), Fp === null ? Fp = [e] : Fp.push(e);
    }
    function Px() {
      return fr === Nu;
    }
    function km(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = s1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, cr), u.clear()), Yc(e, t);
        }
        zu = Nd(), Ws(e, t);
      }
      ti(t);
      do
        try {
          Bx();
          break;
        } catch (s) {
          o1(e, s);
        }
      while (!0);
      if (Ah(), Ct = a, c1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return uo(), Ca = null, cr = P, fr;
    }
    function Bx() {
      for (; On !== null; )
        f1(On);
    }
    function $x(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = s1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, cr), u.clear()), Yc(e, t);
        }
        zu = Nd(), jp(), Ws(e, t);
      }
      ti(t);
      do
        try {
          Yx();
          break;
        } catch (s) {
          o1(e, s);
        }
      while (!0);
      return Ah(), c1(i), Ct = a, On !== null ? (ps(), Nu) : (uo(), Ca = null, cr = P, fr);
    }
    function Yx() {
      for (; On !== null && !mc(); )
        f1(On);
    }
    function f1(e) {
      var t = e.alternate;
      Pt(e);
      var a;
      (e.mode & Ue) !== Ne ? (rS(e), a = $S(t, e, Ql), vm(e, !0)) : a = $S(t, e, Ql), Cn(), e.memoizedProps = e.pendingProps, a === null ? d1(e) : On = a, OS.current = null;
    }
    function d1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === ke) {
          Pt(t);
          var u = void 0;
          if ((t.mode & Ue) === Ne ? u = UC(a, t, Ql) : (rS(t), u = UC(a, t, Ql), vm(t, !1)), Cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Hb(a, t);
          if (s !== null) {
            s.flags &= bv, On = s;
            return;
          }
          if ((t.mode & Ue) !== Ne) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = ke, i.deletions = null;
          else {
            fr = LS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      fr === Nu && (fr = JC);
    }
    function Gs(e, t, a) {
      var i = Aa(), u = Fr.transition;
      try {
        Fr.transition = null, Vn(gr), Ix(e, t, a, i);
      } finally {
        Fr.transition = u, Vn(i);
      }
      return null;
    }
    function Ix(e, t, a, i) {
      do
        Au();
      while (Po !== null);
      if (n_(), (Ct & (jr | xi)) !== sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Sc(s), u === null)
        return Ed(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Et;
      var f = tt(u.lanes, u.childLanes);
      Ld(e, f), e === Ca && (Ca = null, On = null, cr = P), ((u.subtreeFlags & Ma) !== ke || (u.flags & Ma) !== ke) && (Qs || (Qs = !0, AS = a, QS(mi, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (ao | Jr | yr | Ma)) !== ke, v = (u.flags & (ao | Jr | yr | Ma)) !== ke;
      if (p || v) {
        var y = Fr.transition;
        Fr.transition = null;
        var g = Aa();
        Vn(gr);
        var _ = Ct;
        Ct |= xi, OS.current = null, Yb(e, u), sC(), ax(e, u, s), aT(e.containerInfo), e.current = u, Uv(s), ix(u, e, s), lo(), Dv(), Ct = _, Vn(g), Fr.transition = y;
      } else
        e.current = u, sC();
      var b = Qs;
      if (Qs ? (Qs = !1, Po = e, Hp = s) : (zf = 0, bm = null), f = e.pendingLanes, f === P && (Nf = null), b || m1(e.current, !1), Hi(u.stateNode, i), rr && e.memoizedUpdaters.clear(), wx(), Ya(e, mn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var H = t[U], ve = H.stack, Le = H.digest;
          N(H.value, {
            componentStack: ve,
            digest: Le
          });
        }
      if (Tm) {
        Tm = !1;
        var Te = zS;
        throw zS = null, Te;
      }
      return ra(Hp, Fe) && e.tag !== Lo && Au(), f = e.pendingLanes, ra(f, Fe) ? (eb(), e === FS ? Vp++ : (Vp = 0, FS = e)) : Vp = 0, Mo(), Ed(), null;
    }
    function Au() {
      if (Po !== null) {
        var e = Rs(Hp), t = uy(Bi, e), a = Fr.transition, i = Aa();
        try {
          return Fr.transition = null, Vn(t), Wx();
        } finally {
          Vn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function Qx(e) {
      US.push(e), Qs || (Qs = !0, QS(mi, function() {
        return Au(), null;
      }));
    }
    function Wx() {
      if (Po === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Po, a = Hp;
      if (Po = null, Hp = P, (Ct & (jr | xi)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, wm = !1, Av(a);
      var i = Ct;
      Ct |= xi, dx(t.current), ox(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Gb(t, f);
        }
      }
      ds(), m1(t.current, !0), Ct = i, Mo(), wm ? t === bm ? zf++ : (zf = 0, bm = t) : zf = 0, jS = !1, wm = !1, xl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function p1(e) {
      return Nf !== null && Nf.has(e);
    }
    function Gx(e) {
      Nf === null ? Nf = /* @__PURE__ */ new Set([e]) : Nf.add(e);
    }
    function qx(e) {
      Tm || (Tm = !0, zS = e);
    }
    var Xx = qx;
    function v1(e, t, a) {
      var i = $s(a, t), u = fC(e, i, Fe), s = zo(e, u, Fe), f = Ra();
      s !== null && (mu(s, Fe, f), Ya(s, f));
    }
    function sn(e, t, a) {
      if (Pb(a), Yp(!1), e.tag === X) {
        v1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === X) {
          v1(i, e, a);
          return;
        } else if (i.tag === se) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !p1(s)) {
            var f = $s(a, e), p = sS(i, f, Fe), v = zo(i, p, Fe), y = Ra();
            v !== null && (mu(v, Fe, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Kx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Od(e, a), l_(e), Ca === e && hu(cr, a) && (fr === zp || fr === Em && Pc(cr) && mn() - NS < e1 ? Ws(e, P) : Rm = tt(Rm, a)), Ya(e, u);
    }
    function h1(e, t) {
      t === Et && (t = Lx(e));
      var a = Ra(), i = Pa(e, t);
      i !== null && (mu(i, t, a), Ya(i, a));
    }
    function Zx(e) {
      var t = e.memoizedState, a = Et;
      t !== null && (a = t.retryLane), h1(e, a);
    }
    function Jx(e, t) {
      var a = Et, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), h1(e, a);
    }
    function e_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _x(e / 1960) * 1960;
    }
    function t_() {
      if (Vp > kx)
        throw Vp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      zf > Ox && (zf = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function n_() {
      qi.flushLegacyContextWarning(), qi.flushPendingUnsafeLifecycleWarnings();
    }
    function m1(e, t) {
      Pt(e), Om(e, Zr, Cx), t && Om(e, iu, Rx), Om(e, Zr, Sx), t && Om(e, iu, Ex), Cn();
    }
    function Om(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Lm = null;
    function y1(e) {
      {
        if ((Ct & jr) !== sr || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== nt && t !== X && t !== se && t !== de && t !== Ge && t !== ut && t !== He)
          return;
        var a = Qe(e) || "ReactComponent";
        if (Lm !== null) {
          if (Lm.has(a))
            return;
          Lm.add(a);
        } else
          Lm = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Pt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Pt(e) : Cn();
        }
      }
    }
    var $S;
    {
      var r_ = null;
      $S = function(e, t, a) {
        var i = b1(r_, t);
        try {
          return OC(e, t, a);
        } catch (s) {
          if (mw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), jE(), AC(e, t), b1(t, i), t.mode & Ue && rS(t), au(null, OC, null, e, t, a), ey()) {
            var u = sd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var g1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function a_(e) {
      if (Wr && !Kw())
        switch (e.tag) {
          case de:
          case Ge:
          case He: {
            var t = On && Qe(On) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case se: {
            g1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), g1 = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Md(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = rl.current;
        return a !== null ? (a.push(t), IS) : hc(e, t);
      }
    }
    function S1(e) {
      if (e !== IS)
        return _v(e);
    }
    function E1() {
      return rl.current !== null;
    }
    function i_(e) {
      {
        if (e.mode & ct) {
          if (!KC())
            return;
        } else if (!xx() || Ct !== sr || e.tag !== de && e.tag !== Ge && e.tag !== He)
          return;
        if (rl.current === null) {
          var t = hn;
          try {
            Pt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? Pt(e) : Cn();
          }
        }
      }
    }
    function l_(e) {
      e.tag !== Lo && KC() && rl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yp(e) {
      r1 = e;
    }
    var _i = null, Uf = null, u_ = function(e) {
      _i = e;
    };
    function Af(e) {
      {
        if (_i === null)
          return e;
        var t = _i(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Af(e);
    }
    function GS(e) {
      {
        if (_i === null)
          return e;
        var t = _i(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Af(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: pe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function C1(e, t) {
      {
        if (_i === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case se: {
            typeof i == "function" && (u = !0);
            break;
          }
          case de: {
            (typeof i == "function" || s === Oe) && (u = !0);
            break;
          }
          case Ge: {
            (s === pe || s === Oe) && (u = !0);
            break;
          }
          case ut:
          case He: {
            (s === Je || s === Oe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = _i(a);
          if (f !== void 0 && f === _i(i))
            return !0;
        }
        return !1;
      }
    }
    function R1(e) {
      {
        if (_i === null || typeof WeakSet != "function")
          return;
        Uf === null && (Uf = /* @__PURE__ */ new WeakSet()), Uf.add(e);
      }
    }
    var o_ = function(e, t) {
      {
        if (_i === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          qS(e.current, i, a);
        });
      }
    }, s_ = function(e, t) {
      {
        if (e.context !== ri)
          return;
        Au(), Uu(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case de:
          case He:
          case se:
            v = p;
            break;
          case Ge:
            v = p.render;
            break;
        }
        if (_i === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = _i(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === se ? g = !0 : y = !0));
        }
        if (Uf !== null && (Uf.has(e) || i !== null && Uf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Pa(e, Fe);
          b !== null && dr(b, e, Fe, Jt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var c_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case de:
          case He:
          case se:
            p = f;
            break;
          case Ge:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? f_(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function f_(e, t) {
      {
        var a = d_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function d_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var T1 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function p_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ai = function(e, t, a, i) {
      return new p_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function v_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function h_(e) {
      if (typeof e == "function")
        return ZS(e) ? se : de;
      if (e != null) {
        var t = e.$$typeof;
        if (t === pe)
          return Ge;
        if (t === Je)
          return ut;
      }
      return nt;
    }
    function qs(e, t) {
      var a = e.alternate;
      a === null ? (a = ai(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case nt:
        case de:
        case He:
          a.type = Af(e.type);
          break;
        case se:
          a.type = WS(e.type);
          break;
        case Ge:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function m_(e, t) {
      e.flags &= nr | an;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function y_(e, t, a) {
      var i;
      return e === Dh ? (i = ct, t === !0 && (i |= yn, i |= za)) : i = Ne, rr && (i |= Ue), ai(X, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = nt, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = se, p = WS(p)) : p = Af(p);
      else if (typeof e == "string")
        f = ae;
      else
        e:
          switch (e) {
            case pa:
              return Yo(a.children, u, s, t);
            case si:
              f = Ie, u |= yn, (u & ct) !== Ne && (u |= za);
              break;
            case R:
              return g_(a, u, s, t);
            case Ke:
              return S_(a, u, s, t);
            case St:
              return E_(a, u, s, t);
            case tn:
              return w1(a, u, s, t);
            case tr:
            case Ln:
            case ci:
            case Hu:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case I:
                    f = lt;
                    break e;
                  case te:
                    f = qt;
                    break e;
                  case pe:
                    f = Ge, p = GS(p);
                    break e;
                  case Je:
                    f = ut;
                    break e;
                  case Oe:
                    f = rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Qe(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = ai(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ai(Xe, e, i, t);
      return u.lanes = a, u;
    }
    function g_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ai(dt, e, i, t | Ue);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function S_(e, t, a, i) {
      var u = ai(_e, e, i, t);
      return u.elementType = Ke, u.lanes = a, u;
    }
    function E_(e, t, a, i) {
      var u = ai(Ot, e, i, t);
      return u.elementType = St, u.lanes = a, u;
    }
    function w1(e, t, a, i) {
      var u = ai(Ae, e, i, t);
      u.elementType = tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = ai(xe, e, null, t);
      return i.lanes = a, i;
    }
    function C_() {
      var e = ai(ae, null, null, Ne);
      return e.elementType = "DELETED", e;
    }
    function R_(e) {
      var t = ai(Qt, null, null, Ne);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ai(ie, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function b1(e, t) {
      return e === null && (e = ai(nt, null, null, Ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function T_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Et, this.eventTimes = $c(P), this.expirationTimes = $c(Jt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = $c(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < un; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Dh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function x1(e, t, a, i, u, s, f, p, v, y) {
      var g = new T_(e, t, a, p, v), _ = y_(t, s);
      g.current = _, _.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = b;
      }
      return cg(_), g;
    }
    var r0 = "18.2.0";
    function w_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function _1(e) {
      if (!e)
        return ri;
      var t = ka(e), a = uw(t);
      if (t.tag === se) {
        var i = t.type;
        if (Hl(i))
          return J0(t, i, a);
      }
      return a;
    }
    function b_(e, t) {
      {
        var a = ka(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Na(a);
        if (u === null)
          return null;
        if (u.mode & yn) {
          var s = Qe(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = hn;
            try {
              Pt(u), a.mode & yn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Pt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function D1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return x1(e, t, v, y, a, i, u, s, f);
    }
    function k1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = x1(a, i, g, e, u, s, f, p, v);
      _.context = _1(null);
      var b = _.current, N = Ra(), U = Bo(b), H = Lu(N, U);
      return H.callback = t ?? null, zo(b, H, U), Mx(_, U, N), _;
    }
    function Ip(e, t, a, i) {
      kv(t, e);
      var u = t.current, s = Ra(), f = Bo(u);
      uu(f);
      var p = _1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(hn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (dr(y, u, f, s), Ph(y, u, f)), f;
    }
    function Mm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function x_(e) {
      switch (e.tag) {
        case X: {
          var t = e.stateNode;
          if (Pn(t)) {
            var a = ry(t);
            Ax(t, a);
          }
          break;
        }
        case _e: {
          Uu(function() {
            var u = Pa(e, Fe);
            if (u !== null) {
              var s = Ra();
              dr(u, e, Fe, s);
            }
          });
          var i = Fe;
          l0(e, i);
          break;
        }
      }
    }
    function O1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Pv(a.retryLane, t));
    }
    function l0(e, t) {
      O1(e, t);
      var a = e.alternate;
      a && O1(a, t);
    }
    function __(e) {
      if (e.tag === _e) {
        var t = oo, a = Pa(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function D_(e) {
      if (e.tag === _e) {
        var t = Bo(e), a = Pa(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function L1(e) {
      var t = xv(e);
      return t === null ? null : t.stateNode;
    }
    var M1 = function(e) {
      return null;
    };
    function k_(e) {
      return M1(e);
    }
    var N1 = function(e) {
      return !1;
    };
    function O_(e) {
      return N1(e);
    }
    var z1 = null, U1 = null, A1 = null, F1 = null, j1 = null, H1 = null, V1 = null, P1 = null, B1 = null;
    {
      var $1 = function(e, t, a) {
        var i = t[a], u = mt(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (mt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = $1(e[i], t, a + 1), u);
      }, Y1 = function(e, t) {
        return $1(e, t, 0);
      }, I1 = function(e, t, a, i) {
        var u = t[i], s = mt(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], mt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = I1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Q1 = function(e, t, a) {
        if (t.length !== a.length) {
          Pe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Pe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return I1(e, t, a, 0);
      }, W1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = mt(e) ? e.slice() : ot({}, e);
        return s[u] = W1(e[u], t, a + 1, i), s;
      }, G1 = function(e, t, a) {
        return W1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      z1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = G1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Pa(e, Fe);
          f !== null && dr(f, e, Fe, Jt);
        }
      }, U1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = Y1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = Pa(e, Fe);
          s !== null && dr(s, e, Fe, Jt);
        }
      }, A1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = Q1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Pa(e, Fe);
          f !== null && dr(f, e, Fe, Jt);
        }
      }, F1 = function(e, t, a) {
        e.pendingProps = G1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, Fe);
        i !== null && dr(i, e, Fe, Jt);
      }, j1 = function(e, t) {
        e.pendingProps = Y1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pa(e, Fe);
        a !== null && dr(a, e, Fe, Jt);
      }, H1 = function(e, t, a) {
        e.pendingProps = Q1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, Fe);
        i !== null && dr(i, e, Fe, Jt);
      }, V1 = function(e) {
        var t = Pa(e, Fe);
        t !== null && dr(t, e, Fe, Jt);
      }, P1 = function(e) {
        M1 = e;
      }, B1 = function(e) {
        N1 = e;
      };
    }
    function L_(e) {
      var t = Na(e);
      return t === null ? null : t.stateNode;
    }
    function M_(e) {
      return null;
    }
    function N_() {
      return hn;
    }
    function z_(e) {
      var t = e.findFiberByHostInstance, a = M.ReactCurrentDispatcher;
      return gd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: z1,
        overrideHookStateDeletePath: U1,
        overrideHookStateRenamePath: A1,
        overrideProps: F1,
        overridePropsDeletePath: j1,
        overridePropsRenamePath: H1,
        setErrorHandler: P1,
        setSuspenseHandler: B1,
        scheduleUpdate: V1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: L_,
        findFiberByHostInstance: t || M_,
        // React Refresh
        findHostInstancesForRefresh: c_,
        scheduleRefresh: o_,
        scheduleRoot: s_,
        setRefreshHandler: u_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: N_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var q1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Nm.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : zm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = L1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, Nm.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        u1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Ip(null, e, null, null);
        }), G0(t);
      }
    };
    function U_(e, t) {
      if (!zm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      X1(e);
      var a = !1, i = !1, u = "", s = q1;
      t != null && (t.hydrate ? Pe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === oi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = D1(e, Dh, null, a, i, u, s);
      Ch(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return Jd(p), new o0(f);
    }
    function Nm(e) {
      this._internalRoot = e;
    }
    function A_(e) {
      e && qv(e);
    }
    Nm.prototype.unstable_scheduleHydration = A_;
    function F_(e, t, a) {
      if (!zm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      X1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = q1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = k1(t, null, e, Dh, i, s, f, p, v);
      if (Ch(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Iw(y, _);
        }
      return new Nm(y);
    }
    function zm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Zl || !ue));
    }
    function Qp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Zl || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function X1(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var j_ = M.ReactCurrentOwner, K1;
    K1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = L1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Za ? e.documentElement : e.firstChild : null;
    }
    function Z1() {
    }
    function H_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Mm(f);
            s.call(b);
          };
        }
        var f = k1(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Z1
        );
        e._reactRootContainer = f, Ch(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return Jd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Mm(g);
            y.call(b);
          };
        }
        var g = D1(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Z1
        );
        e._reactRootContainer = g, Ch(g.current, e);
        var _ = e.nodeType === Mn ? e.parentNode : e;
        return Jd(_), Uu(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function V_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Um(e, t, a, i, u) {
      K1(a), V_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = H_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Mm(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return Mm(f);
    }
    function P_(e) {
      {
        var t = j_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : b_(e, "findDOMNode");
    }
    function B_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Um(null, e, t, !0, a);
    }
    function $_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Um(null, e, t, !1, a);
    }
    function Y_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ss(e))
        throw new Error("parentComponent must be a valid React Component");
      return Um(e, t, a, !1, i);
    }
    function I_(e) {
      if (!Qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Um(null, null, e, !1, function() {
            e._reactRootContainer = null, G0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && ko(u)), f = e.nodeType === qr && Qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    me(x_), $v(__), ws(D_), Ud(Aa), Iv(Cs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tv(GR), cc(VS, Fx, Uu);
    function Q_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zm(t))
        throw new Error("Target container is not a DOM element.");
      return w_(e, t, null, a);
    }
    function W_(e, t, a, i) {
      return Y_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, pf, Rh, sc, ls, VS]
    };
    function G_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t);
    }
    function q_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), F_(e, t, a);
    }
    function X_(e) {
      return u1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var K_ = z_({
      findFiberByHostInstance: zs,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!K_ && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var J1 = window.location.protocol;
      /^(https?|file):$/.test(J1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (J1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Qa.createPortal = Q_, Qa.createRoot = G_, Qa.findDOMNode = P_, Qa.flushSync = X_, Qa.hydrate = B_, Qa.hydrateRoot = q_, Qa.render = $_, Qa.unmountComponentAtNode = I_, Qa.unstable_batchedUpdates = VS, Qa.unstable_renderSubtreeIntoContainer = W_, Qa.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
function pR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pR);
    } catch (j) {
      console.error(j);
    }
  }
}
process.env.NODE_ENV === "production" ? (pR(), y0.exports = aD()) : y0.exports = iD();
var lD = y0.exports;
const uD = /* @__PURE__ */ cR(lD);
var oD = Object.defineProperty, sD = (j, Y, M) => Y in j ? oD(j, Y, { enumerable: !0, configurable: !0, writable: !0, value: M }) : j[Y] = M, Fm = (j, Y, M) => (sD(j, typeof Y != "symbol" ? Y + "" : Y, M), M);
const cD = {
  stringify: (j) => j,
  parse: (j) => j
}, fD = {
  stringify: (j) => `${j}`,
  parse: (j) => parseFloat(j)
}, dD = {
  stringify: (j) => j ? "true" : "false",
  parse: (j) => /^[ty1-9]/i.test(j)
}, pD = {
  stringify: (j) => j.name,
  parse: (j, Y) => {
    const M = (() => {
      if (typeof window < "u" && j in window)
        return window[j];
      if (typeof global < "u" && j in global)
        return global[j];
    })();
    return typeof M == "function" ? M.bind(Y) : void 0;
  }
}, vD = {
  stringify: (j) => JSON.stringify(j),
  parse: (j) => JSON.parse(j)
}, p0 = {
  string: cD,
  number: fD,
  boolean: dD,
  function: pD,
  json: vD
}, v0 = Symbol.for("r2wc.render"), jm = Symbol.for("r2wc.connected"), jf = Symbol.for("r2wc.context"), Io = Symbol.for("r2wc.props");
function hD(j, Y, M) {
  var ft, yt, Pe;
  Y.props || (Y.props = j.propTypes ? Object.keys(j.propTypes) : []);
  const S = (Array.isArray(Y.props) ? Y.props.slice() : Object.keys(Y.props)).filter((X) => X !== "container"), wt = {}, de = {}, se = {};
  for (const X of S) {
    wt[X] = Array.isArray(Y.props) ? "string" : Y.props[X];
    const ie = mD(X);
    de[X] = ie, se[ie] = X;
  }
  class nt extends HTMLElement {
    constructor() {
      super(), Fm(this, ft, !0), Fm(this, yt), Fm(this, Pe, {}), Fm(this, "container"), Y.shadow ? this.container = this.attachShadow({
        mode: Y.shadow
      }) : this.container = this, this[Io].container = this.container;
      for (const ie of S) {
        const ae = de[ie], xe = this.getAttribute(ae), Xe = wt[ie], Ie = p0[Xe];
        xe && Ie != null && Ie.parse && (this[Io][ie] = Ie.parse(xe, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(se);
    }
    connectedCallback() {
      this[jm] = !0, this[v0]();
    }
    disconnectedCallback() {
      this[jm] = !1, this[jf] && M.unmount(this[jf]);
    }
    attributeChangedCallback(ie, ae, xe) {
      const Xe = se[ie], Ie = wt[Xe], qt = p0[Ie];
      Xe in wt && qt != null && qt.parse && (this[Io][Xe] = qt.parse(xe, this), this[v0]());
    }
    [(ft = jm, yt = jf, Pe = Io, v0)]() {
      this[jm] && (this[jf] ? M.update(this[jf], this[Io]) : this[jf] = M.mount(
        this.container,
        j,
        this[Io]
      ));
    }
  }
  for (const X of S) {
    const ie = de[X], ae = wt[X];
    Object.defineProperty(nt.prototype, X, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Io][X];
      },
      set(xe) {
        this[Io][X] = xe;
        const Xe = p0[ae];
        if (Xe != null && Xe.stringify) {
          const Ie = Xe.stringify(xe);
          this.getAttribute(ie) !== Ie && this.setAttribute(ie, Ie);
        }
      }
    });
  }
  return nt;
}
function mD(j = "") {
  return j.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
var g0, Hm = uD;
if (process.env.NODE_ENV === "production")
  g0 = Hm.createRoot, Hm.hydrateRoot;
else {
  var uR = Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  g0 = function(j, Y) {
    uR.usingClientEntryPoint = !0;
    try {
      return Hm.createRoot(j, Y);
    } finally {
      uR.usingClientEntryPoint = !1;
    }
  };
}
function yD(j, Y, M) {
  const ft = g0(j), yt = fR.createElement(Y, M);
  return ft.render(yt), {
    root: ft,
    ReactComponent: Y
  };
}
function gD({ root: j, ReactComponent: Y }, M) {
  const ft = fR.createElement(Y, M);
  j.render(ft);
}
function SD({ root: j }) {
  j.unmount();
}
function ED(j, Y = {}) {
  return hD(j, Y, { mount: yD, update: gD, unmount: SD });
}
var S0 = { exports: {} }, Gp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function CD() {
  if (oR)
    return Gp;
  oR = 1;
  var j = Xs, Y = Symbol.for("react.element"), M = Symbol.for("react.fragment"), ft = Object.prototype.hasOwnProperty, yt = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(wt, de, se) {
    var nt, X = {}, ie = null, ae = null;
    se !== void 0 && (ie = "" + se), de.key !== void 0 && (ie = "" + de.key), de.ref !== void 0 && (ae = de.ref);
    for (nt in de)
      ft.call(de, nt) && !Pe.hasOwnProperty(nt) && (X[nt] = de[nt]);
    if (wt && wt.defaultProps)
      for (nt in de = wt.defaultProps, de)
        X[nt] === void 0 && (X[nt] = de[nt]);
    return { $$typeof: Y, type: wt, key: ie, ref: ae, props: X, _owner: yt.current };
  }
  return Gp.Fragment = M, Gp.jsx = S, Gp.jsxs = S, Gp;
}
var qp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function RD() {
  return sR || (sR = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Xs, Y = Symbol.for("react.element"), M = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), yt = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), wt = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), xe = Symbol.iterator, Xe = "@@iterator";
    function Ie(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = xe && R[xe] || R[Xe];
      return typeof I == "function" ? I : null;
    }
    var qt = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function lt(R) {
      {
        for (var I = arguments.length, te = new Array(I > 1 ? I - 1 : 0), pe = 1; pe < I; pe++)
          te[pe - 1] = arguments[pe];
        Ge("error", R, te);
      }
    }
    function Ge(R, I, te) {
      {
        var pe = qt.ReactDebugCurrentFrame, Ke = pe.getStackAddendum();
        Ke !== "" && (I += "%s", te = te.concat([Ke]));
        var St = te.map(function(Je) {
          return String(Je);
        });
        St.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, St);
      }
    }
    var dt = !1, _e = !1, ut = !1, He = !1, rn = !1, bn;
    bn = Symbol.for("react.module.reference");
    function Qt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === ft || R === Pe || rn || R === yt || R === se || R === nt || He || R === ae || dt || _e || ut || typeof R == "object" && R !== null && (R.$$typeof === ie || R.$$typeof === X || R.$$typeof === S || R.$$typeof === wt || R.$$typeof === de || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === bn || R.getModuleId !== void 0));
    }
    function Ot(R, I, te) {
      var pe = R.displayName;
      if (pe)
        return pe;
      var Ke = I.displayName || I.name || "";
      return Ke !== "" ? te + "(" + Ke + ")" : te;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Ae(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && lt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case ft:
          return "Fragment";
        case M:
          return "Portal";
        case Pe:
          return "Profiler";
        case yt:
          return "StrictMode";
        case se:
          return "Suspense";
        case nt:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case wt:
            var I = R;
            return En(I) + ".Consumer";
          case S:
            var te = R;
            return En(te._context) + ".Provider";
          case de:
            return Ot(R, R.render, "ForwardRef");
          case X:
            var pe = R.displayName || null;
            return pe !== null ? pe : Ae(R.type) || "Memo";
          case ie: {
            var Ke = R, St = Ke._payload, Je = Ke._init;
            try {
              return Ae(Je(St));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, At = 0, bt, ye, J, we, T, $, ue;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function je() {
      {
        if (At === 0) {
          bt = console.log, ye = console.info, J = console.warn, we = console.error, T = console.group, $ = console.groupCollapsed, ue = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        At++;
      }
    }
    function gt() {
      {
        if (At--, At === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, R, {
              value: bt
            }),
            info: Ze({}, R, {
              value: ye
            }),
            warn: Ze({}, R, {
              value: J
            }),
            error: Ze({}, R, {
              value: we
            }),
            group: Ze({}, R, {
              value: T
            }),
            groupCollapsed: Ze({}, R, {
              value: $
            }),
            groupEnd: Ze({}, R, {
              value: ue
            })
          });
        }
        At < 0 && lt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var rt = qt.ReactCurrentDispatcher, pt;
    function at(R, I, te) {
      {
        if (pt === void 0)
          try {
            throw Error();
          } catch (Ke) {
            var pe = Ke.stack.trim().match(/\n( *(at )?)/);
            pt = pe && pe[1] || "";
          }
        return `
` + pt + R;
      }
    }
    var Ft = !1, Vr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Vr = new pr();
    }
    function Pr(R, I) {
      if (!R || Ft)
        return "";
      {
        var te = Vr.get(R);
        if (te !== void 0)
          return te;
      }
      var pe;
      Ft = !0;
      var Ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var St;
      St = rt.current, rt.current = null, je();
      try {
        if (I) {
          var Je = function() {
            throw Error();
          };
          if (Object.defineProperty(Je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Je, []);
            } catch (xt) {
              pe = xt;
            }
            Reflect.construct(R, [], Je);
          } else {
            try {
              Je.call();
            } catch (xt) {
              pe = xt;
            }
            R.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            pe = xt;
          }
          R();
        }
      } catch (xt) {
        if (xt && pe && typeof xt.stack == "string") {
          for (var Oe = xt.stack.split(`
`), Ln = pe.stack.split(`
`), en = Oe.length - 1, tn = Ln.length - 1; en >= 1 && tn >= 0 && Oe[en] !== Ln[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Oe[en] !== Ln[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Oe[en] !== Ln[tn]) {
                    var tr = `
` + Oe[en].replace(" at new ", " at ");
                    return R.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Vr.set(R, tr), tr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        Ft = !1, rt.current = St, gt(), Error.prepareStackTrace = Ke;
      }
      var ci = R ? R.displayName || R.name : "", Hu = ci ? at(ci) : "";
      return typeof R == "function" && Vr.set(R, Hu), Hu;
    }
    function dn(R, I, te) {
      return Pr(R, !1);
    }
    function Yn(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function An(R, I, te) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pr(R, Yn(R));
      if (typeof R == "string")
        return at(R);
      switch (R) {
        case se:
          return at("Suspense");
        case nt:
          return at("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case de:
            return dn(R.render);
          case X:
            return An(R.type, I, te);
          case ie: {
            var pe = R, Ke = pe._payload, St = pe._init;
            try {
              return An(St(Ke), I, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Fn = Object.prototype.hasOwnProperty, xn = {}, Br = qt.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var I = R._owner, te = An(R.type, R._source, I ? I.type : null);
        Br.setExtraStackFrame(te);
      } else
        Br.setExtraStackFrame(null);
    }
    function In(R, I, te, pe, Ke) {
      {
        var St = Function.call.bind(Fn);
        for (var Je in R)
          if (St(R, Je)) {
            var Oe = void 0;
            try {
              if (typeof R[Je] != "function") {
                var Ln = Error((pe || "React class") + ": " + te + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Oe = R[Je](I, Je, pe, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Oe = en;
            }
            Oe && !(Oe instanceof Error) && ($r(Ke), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", te, Je, typeof Oe), $r(null)), Oe instanceof Error && !(Oe.message in xn) && (xn[Oe.message] = !0, $r(Ke), lt("Failed %s type: %s", te, Oe.message), $r(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(R) {
      return vr(R);
    }
    function hr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, te = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return te;
      }
    }
    function sa(R) {
      try {
        return er(R), !1;
      } catch {
        return !0;
      }
    }
    function er(R) {
      return "" + R;
    }
    function Ir(R) {
      if (sa(R))
        return lt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(R)), er(R);
    }
    var pn = qt.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, li, ca, ee;
    ee = {};
    function be(R) {
      if (Fn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function it(R) {
      if (Fn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, I) {
      if (typeof R.ref == "string" && pn.current && I && pn.current.stateNode !== I) {
        var te = Ae(pn.current.type);
        ee[te] || (lt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(pn.current.type), R.ref), ee[te] = !0);
      }
    }
    function jt(R, I) {
      {
        var te = function() {
          li || (li = !0, lt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        te.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function _n(R, I) {
      {
        var te = function() {
          ca || (ca = !0, lt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        te.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var vn = function(R, I, te, pe, Ke, St, Je) {
      var Oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Y,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: te,
        props: Je,
        // Record the component responsible for creating this element.
        _owner: St
      };
      return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(Oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
    };
    function mr(R, I, te, pe, Ke) {
      {
        var St, Je = {}, Oe = null, Ln = null;
        te !== void 0 && (Ir(te), Oe = "" + te), it(I) && (Ir(I.key), Oe = "" + I.key), be(I) && (Ln = I.ref, zt(I, Ke));
        for (St in I)
          Fn.call(I, St) && !wr.hasOwnProperty(St) && (Je[St] = I[St]);
        if (R && R.defaultProps) {
          var en = R.defaultProps;
          for (St in en)
            Je[St] === void 0 && (Je[St] = en[St]);
        }
        if (Oe || Ln) {
          var tn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Oe && jt(Je, tn), Ln && _n(Je, tn);
        }
        return vn(R, Oe, Ln, Ke, pe, pn.current, Je);
      }
    }
    var Yt = qt.ReactCurrentOwner, br = qt.ReactDebugCurrentFrame;
    function Ht(R) {
      if (R) {
        var I = R._owner, te = An(R.type, R._source, I ? I.type : null);
        br.setExtraStackFrame(te);
      } else
        br.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function Wa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === Y;
    }
    function ba() {
      {
        if (Yt.current) {
          var R = Ae(Yt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function al(R) {
      {
        if (R !== void 0) {
          var I = R.fileName.replace(/^.*[\\\/]/, ""), te = R.lineNumber;
          return `

Check your code at ` + I + ":" + te + ".";
        }
        return "";
      }
    }
    var Gl = {};
    function ju(R) {
      {
        var I = ba();
        if (!I) {
          var te = typeof R == "string" ? R : R.displayName || R.name;
          te && (I = `

Check the top-level render call using <` + te + ">.");
        }
        return I;
      }
    }
    function Di(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var te = ju(I);
        if (Gl[te])
          return;
        Gl[te] = !0;
        var pe = "";
        R && R._owner && R._owner !== Yt.current && (pe = " It was passed a child from " + Ae(R._owner.type) + "."), Ht(R), lt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, pe), Ht(null);
      }
    }
    function il(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var te = 0; te < R.length; te++) {
            var pe = R[te];
            Wa(pe) && Di(pe, I);
          }
        else if (Wa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ke = Ie(R);
          if (typeof Ke == "function" && Ke !== R.entries)
            for (var St = Ke.call(R), Je; !(Je = St.next()).done; )
              Wa(Je.value) && Di(Je.value, I);
        }
      }
    }
    function fa(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var te;
        if (typeof I == "function")
          te = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === de || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === X))
          te = I.propTypes;
        else
          return;
        if (te) {
          var pe = Ae(I);
          In(te, R.props, "prop", pe, R);
        } else if (I.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var Ke = Ae(I);
          lt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && lt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ui(R) {
      {
        for (var I = Object.keys(R.props), te = 0; te < I.length; te++) {
          var pe = I[te];
          if (pe !== "children" && pe !== "key") {
            Ht(R), lt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), Ht(null);
            break;
          }
        }
        R.ref !== null && (Ht(R), lt("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    function da(R, I, te, pe, Ke, St) {
      {
        var Je = Qt(R);
        if (!Je) {
          var Oe = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = al(Ke);
          Ln ? Oe += Ln : Oe += ba();
          var en;
          R === null ? en = "null" : Yr(R) ? en = "array" : R !== void 0 && R.$$typeof === Y ? (en = "<" + (Ae(R.type) || "Unknown") + " />", Oe = " Did you accidentally export a JSX literal instead of a component?") : en = typeof R, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Oe);
        }
        var tn = mr(R, I, te, Ke, St);
        if (tn == null)
          return tn;
        if (Je) {
          var tr = I.children;
          if (tr !== void 0)
            if (pe)
              if (Yr(tr)) {
                for (var ci = 0; ci < tr.length; ci++)
                  il(tr[ci], R);
                Object.freeze && Object.freeze(tr);
              } else
                lt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              il(tr, R);
        }
        return R === ft ? ui(tn) : fa(tn), tn;
      }
    }
    function oi(R, I, te) {
      return da(R, I, te, !0);
    }
    function xr(R, I, te) {
      return da(R, I, te, !1);
    }
    var pa = xr, si = oi;
    qp.Fragment = ft, qp.jsx = pa, qp.jsxs = si;
  }()), qp;
}
process.env.NODE_ENV === "production" ? S0.exports = CD() : S0.exports = RD();
var h0 = S0.exports;
function TD({
  routeRoot: j = "/",
  initialRoute: Y
}) {
  const [M, ft] = Xs.useState("/");
  return Xs.useEffect(() => {
    const yt = (Pe) => {
      Pe.data.url.startsWith(j) ? ft(Pe.data.url.replace(j, "")) : ft("");
    };
    return document.addEventListener("routechange", yt), () => {
      document.removeEventListener("routechange", yt);
    };
  }, []), /* @__PURE__ */ h0.jsx("ul", { children: ["Home", ...M.split("/")].map((yt, Pe) => /* @__PURE__ */ h0.jsxs("li", { children: [
    Pe !== 0 && /* @__PURE__ */ h0.jsx("span", { children: " / " }),
    yt
  ] }, `breadcrumb-${yt}-${Pe}`)) });
}
const wD = ED(TD, {
  props: {
    routeRoot: "string",
    initialRoute: "string"
  }
});
customElements.define("bread-crumbs", wD);
