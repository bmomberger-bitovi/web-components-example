function D0(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var _0 = { exports: {} }, _t = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function hk() {
  if (fR)
    return _t;
  fR = 1;
  var D = Symbol.for("react.element"), O = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), g = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), J = Symbol.iterator;
  function ce(T) {
    return T === null || typeof T != "object" ? null : (T = J && T[J] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Oe = Object.assign, et = {};
  function Ge(T, I, de) {
    this.props = T, this.context = I, this.refs = et, this.updater = de || se;
  }
  Ge.prototype.isReactComponent = {}, Ge.prototype.setState = function(T, I) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, I, "setState");
  }, Ge.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function qt() {
  }
  qt.prototype = Ge.prototype;
  function st(T, I, de) {
    this.props = T, this.context = I, this.refs = et, this.updater = de || se;
  }
  var Ke = st.prototype = new qt();
  Ke.constructor = st, Oe(Ke, Ge.prototype), Ke.isPureReactComponent = !0;
  var vt = Array.isArray, Le = Object.prototype.hasOwnProperty, ct = { current: null }, $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(T, I, de) {
    var We, Be = {}, St = null, lt = null;
    if (I != null)
      for (We in I.ref !== void 0 && (lt = I.ref), I.key !== void 0 && (St = "" + I.key), I)
        Le.call(I, We) && !$e.hasOwnProperty(We) && (Be[We] = I[We]);
    var ht = arguments.length - 2;
    if (ht === 1)
      Be.children = de;
    else if (1 < ht) {
      for (var ut = Array(ht), Ft = 0; Ft < ht; Ft++)
        ut[Ft] = arguments[Ft + 2];
      Be.children = ut;
    }
    if (T && T.defaultProps)
      for (We in ht = T.defaultProps, ht)
        Be[We] === void 0 && (Be[We] = ht[We]);
    return { $$typeof: D, type: T, key: St, ref: lt, props: Be, _owner: ct.current };
  }
  function wn(T, I) {
    return { $$typeof: D, type: T.type, key: I, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Qt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === D;
  }
  function Ot(T) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(de) {
      return I[de];
    });
  }
  var En = /\/+/g;
  function Pe(T, I) {
    return typeof T == "object" && T !== null && T.key != null ? Ot("" + T.key) : I.toString(36);
  }
  function nt(T, I, de, We, Be) {
    var St = typeof T;
    (St === "undefined" || St === "boolean") && (T = null);
    var lt = !1;
    if (T === null)
      lt = !0;
    else
      switch (St) {
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case D:
            case O:
              lt = !0;
          }
      }
    if (lt)
      return lt = T, Be = Be(lt), T = We === "" ? "." + Pe(lt, 0) : We, vt(Be) ? (de = "", T != null && (de = T.replace(En, "$&/") + "/"), nt(Be, I, de, "", function(Ft) {
        return Ft;
      })) : Be != null && (Qt(Be) && (Be = wn(Be, de + (!Be.key || lt && lt.key === Be.key ? "" : ("" + Be.key).replace(En, "$&/") + "/") + T)), I.push(Be)), 1;
    if (lt = 0, We = We === "" ? "." : We + ":", vt(T))
      for (var ht = 0; ht < T.length; ht++) {
        St = T[ht];
        var ut = We + Pe(St, ht);
        lt += nt(St, I, de, ut, Be);
      }
    else if (ut = ce(T), typeof ut == "function")
      for (T = ut.call(T), ht = 0; !(St = T.next()).done; )
        St = St.value, ut = We + Pe(St, ht++), lt += nt(St, I, de, ut, Be);
    else if (St === "object")
      throw I = String(T), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return lt;
  }
  function At(T, I, de) {
    if (T == null)
      return T;
    var We = [], Be = 0;
    return nt(T, We, "", "", function(St) {
      return I.call(de, St, Be++);
    }), We;
  }
  function wt(T) {
    if (T._status === -1) {
      var I = T._result;
      I = I(), I.then(function(de) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = de);
      }, function(de) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = de);
      }), T._status === -1 && (T._status = 0, T._result = I);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var Ee = { current: null }, ne = { transition: null }, ke = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ne, ReactCurrentOwner: ct };
  return _t.Children = { map: At, forEach: function(T, I, de) {
    At(T, function() {
      I.apply(this, arguments);
    }, de);
  }, count: function(T) {
    var I = 0;
    return At(T, function() {
      I++;
    }), I;
  }, toArray: function(T) {
    return At(T, function(I) {
      return I;
    }) || [];
  }, only: function(T) {
    if (!Qt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, _t.Component = Ge, _t.Fragment = w, _t.Profiler = q, _t.PureComponent = st, _t.StrictMode = P, _t.Suspense = re, _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, _t.cloneElement = function(T, I, de) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var We = Oe({}, T.props), Be = T.key, St = T.ref, lt = T._owner;
    if (I != null) {
      if (I.ref !== void 0 && (St = I.ref, lt = ct.current), I.key !== void 0 && (Be = "" + I.key), T.type && T.type.defaultProps)
        var ht = T.type.defaultProps;
      for (ut in I)
        Le.call(I, ut) && !$e.hasOwnProperty(ut) && (We[ut] = I[ut] === void 0 && ht !== void 0 ? ht[ut] : I[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1)
      We.children = de;
    else if (1 < ut) {
      ht = Array(ut);
      for (var Ft = 0; Ft < ut; Ft++)
        ht[Ft] = arguments[Ft + 2];
      We.children = ht;
    }
    return { $$typeof: D, type: T.type, key: Be, ref: St, props: We, _owner: lt };
  }, _t.createContext = function(T) {
    return T = { $$typeof: g, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: Z, _context: T }, T.Consumer = T;
  }, _t.createElement = rn, _t.createFactory = function(T) {
    var I = rn.bind(null, T);
    return I.type = T, I;
  }, _t.createRef = function() {
    return { current: null };
  }, _t.forwardRef = function(T) {
    return { $$typeof: _e, render: T };
  }, _t.isValidElement = Qt, _t.lazy = function(T) {
    return { $$typeof: Je, _payload: { _status: -1, _result: T }, _init: wt };
  }, _t.memo = function(T, I) {
    return { $$typeof: oe, type: T, compare: I === void 0 ? null : I };
  }, _t.startTransition = function(T) {
    var I = ne.transition;
    ne.transition = {};
    try {
      T();
    } finally {
      ne.transition = I;
    }
  }, _t.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, _t.useCallback = function(T, I) {
    return Ee.current.useCallback(T, I);
  }, _t.useContext = function(T) {
    return Ee.current.useContext(T);
  }, _t.useDebugValue = function() {
  }, _t.useDeferredValue = function(T) {
    return Ee.current.useDeferredValue(T);
  }, _t.useEffect = function(T, I) {
    return Ee.current.useEffect(T, I);
  }, _t.useId = function() {
    return Ee.current.useId();
  }, _t.useImperativeHandle = function(T, I, de) {
    return Ee.current.useImperativeHandle(T, I, de);
  }, _t.useInsertionEffect = function(T, I) {
    return Ee.current.useInsertionEffect(T, I);
  }, _t.useLayoutEffect = function(T, I) {
    return Ee.current.useLayoutEffect(T, I);
  }, _t.useMemo = function(T, I) {
    return Ee.current.useMemo(T, I);
  }, _t.useReducer = function(T, I, de) {
    return Ee.current.useReducer(T, I, de);
  }, _t.useRef = function(T) {
    return Ee.current.useRef(T);
  }, _t.useState = function(T) {
    return Ee.current.useState(T);
  }, _t.useSyncExternalStore = function(T, I, de) {
    return Ee.current.useSyncExternalStore(T, I, de);
  }, _t.useTransition = function() {
    return Ee.current.useTransition();
  }, _t.version = "18.2.0", _t;
}
var Jp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jp.exports;
var dR;
function mk() {
  return dR || (dR = 1, function(D, O) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = "18.2.0", P = Symbol.for("react.element"), q = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), oe = Symbol.for("react.context"), Je = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), et = Symbol.for("react.offscreen"), Ge = Symbol.iterator, qt = "@@iterator";
      function st(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Ge && h[Ge] || h[qt];
        return typeof C == "function" ? C : null;
      }
      var Ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, vt = {
        transition: null
      }, Le = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ct = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $e = {}, rn = null;
      function wn(h) {
        rn = h;
      }
      $e.setExtraStackFrame = function(h) {
        rn = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Qt = !1, Ot = !1, En = !1, Pe = !1, nt = !1, At = {
        ReactCurrentDispatcher: Ke,
        ReactCurrentBatchConfig: vt,
        ReactCurrentOwner: ct
      };
      At.ReactDebugCurrentFrame = $e, At.ReactCurrentActQueue = Le;
      function wt(h) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            A[H - 1] = arguments[H];
          ne("warn", h, A);
        }
      }
      function Ee(h) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            A[H - 1] = arguments[H];
          ne("error", h, A);
        }
      }
      function ne(h, C, A) {
        {
          var H = At.ReactDebugCurrentFrame, ee = H.getStackAddendum();
          ee !== "" && (C += "%s", A = A.concat([ee]));
          var je = A.map(function(fe) {
            return String(fe);
          });
          je.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, je);
        }
      }
      var ke = {};
      function T(h, C) {
        {
          var A = h.constructor, H = A && (A.displayName || A.name) || "ReactClass", ee = H + "." + C;
          if (ke[ee])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), ke[ee] = !0;
        }
      }
      var I = {
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
        enqueueForceUpdate: function(h, C, A) {
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
        enqueueReplaceState: function(h, C, A, H) {
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
        enqueueSetState: function(h, C, A, H) {
          T(h, "setState");
        }
      }, de = Object.assign, We = {};
      Object.freeze(We);
      function Be(h, C, A) {
        this.props = h, this.context = C, this.refs = We, this.updater = A || I;
      }
      Be.prototype.isReactComponent = {}, Be.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Be.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var St = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, lt = function(h, C) {
          Object.defineProperty(Be.prototype, h, {
            get: function() {
              wt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ht in St)
          St.hasOwnProperty(ht) && lt(ht, St[ht]);
      }
      function ut() {
      }
      ut.prototype = Be.prototype;
      function Ft(h, C, A) {
        this.props = h, this.context = C, this.refs = We, this.updater = A || I;
      }
      var Pr = Ft.prototype = new ut();
      Pr.constructor = Ft, de(Pr, Be.prototype), Pr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Vr = Array.isArray;
      function dn(h) {
        return Vr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, A = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return A;
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
      function bn(h) {
        if (An(h))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Fn(h);
      }
      function Br(h, C, A) {
        var H = h.displayName;
        if (H)
          return H;
        var ee = C.displayName || C.name || "";
        return ee !== "" ? A + "(" + ee + ")" : A;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Z:
            return "Fragment";
          case q:
            return "Portal";
          case _e:
            return "Profiler";
          case g:
            return "StrictMode";
          case J:
            return "Suspense";
          case ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              var C = h;
              return $r(C) + ".Consumer";
            case re:
              var A = h;
              return $r(A._context) + ".Provider";
            case Je:
              return Br(h, h.render, "ForwardRef");
            case se:
              var H = h.displayName || null;
              return H !== null ? H : In(h.type) || "Memo";
            case Oe: {
              var ee = h, je = ee._payload, fe = ee._init;
              try {
                return In(fe(je));
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
      function _r(h, C) {
        var A = function() {
          hr || (hr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: A,
          configurable: !0
        });
      }
      function li(h, C) {
        var A = function() {
          sa || (sa = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: A,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = In(ct.current.type);
          er[C] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var ae = function(h, C, A, H, ee, je, fe) {
        var Ae = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: P,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: A,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: je
        };
        return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ae, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ae, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
      };
      function De(h, C, A) {
        var H, ee = {}, je = null, fe = null, Ae = null, dt = null;
        if (C != null) {
          Ir(C) && (fe = C.ref, ca(C)), pn(C) && (bn(C.key), je = "" + C.key), Ae = C.__self === void 0 ? null : C.__self, dt = C.__source === void 0 ? null : C.__source;
          for (H in C)
            vr.call(C, H) && !Yr.hasOwnProperty(H) && (ee[H] = C[H]);
        }
        var kt = arguments.length - 2;
        if (kt === 1)
          ee.children = A;
        else if (kt > 1) {
          for (var Xt = Array(kt), It = 0; It < kt; It++)
            Xt[It] = arguments[It + 2];
          Object.freeze && Object.freeze(Xt), ee.children = Xt;
        }
        if (h && h.defaultProps) {
          var Kt = h.defaultProps;
          for (H in Kt)
            ee[H] === void 0 && (ee[H] = Kt[H]);
        }
        if (je || fe) {
          var nn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          je && _r(ee, nn), fe && li(ee, nn);
        }
        return ae(h, je, fe, Ae, dt, ct.current, ee);
      }
      function ot(h, C) {
        var A = ae(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return A;
      }
      function zt(h, C, A) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, ee = de({}, h.props), je = h.key, fe = h.ref, Ae = h._self, dt = h._source, kt = h._owner;
        if (C != null) {
          Ir(C) && (fe = C.ref, kt = ct.current), pn(C) && (bn(C.key), je = "" + C.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (H in C)
            vr.call(C, H) && !Yr.hasOwnProperty(H) && (C[H] === void 0 && Xt !== void 0 ? ee[H] = Xt[H] : ee[H] = C[H]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          ee.children = A;
        else if (It > 1) {
          for (var Kt = Array(It), nn = 0; nn < It; nn++)
            Kt[nn] = arguments[nn + 2];
          ee.children = Kt;
        }
        return ae(h.type, je, fe, Ae, dt, kt, ee);
      }
      function jt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === P;
      }
      var xn = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, A = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(ee) {
          return A[ee];
        });
        return "$" + H;
      }
      var Yt = !1, wr = /\/+/g;
      function Ht(h) {
        return h.replace(wr, "$&/");
      }
      function Pt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (bn(h.key), mr("" + h.key)) : C.toString(36);
      }
      function Wa(h, C, A, H, ee) {
        var je = typeof h;
        (je === "undefined" || je === "boolean") && (h = null);
        var fe = !1;
        if (h === null)
          fe = !0;
        else
          switch (je) {
            case "string":
            case "number":
              fe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case P:
                case q:
                  fe = !0;
              }
          }
        if (fe) {
          var Ae = h, dt = ee(Ae), kt = H === "" ? xn + Pt(Ae, 0) : H;
          if (dn(dt)) {
            var Xt = "";
            kt != null && (Xt = Ht(kt) + "/"), Wa(dt, C, Xt, "", function(If) {
              return If;
            });
          } else
            dt != null && (jt(dt) && (dt.key && (!Ae || Ae.key !== dt.key) && bn(dt.key), dt = ot(
              dt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              A + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (dt.key && (!Ae || Ae.key !== dt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ht("" + dt.key) + "/"
              ) : "") + kt
            )), C.push(dt));
          return 1;
        }
        var It, Kt, nn = 0, gt = H === "" ? xn : H + vn;
        if (dn(h))
          for (var Ni = 0; Ni < h.length; Ni++)
            It = h[Ni], Kt = gt + Pt(It, Ni), nn += Wa(It, C, A, Kt, ee);
        else {
          var Zu = st(h);
          if (typeof Zu == "function") {
            var Jo = h;
            Zu === Jo.entries && (Yt || wt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Yf = Zu.call(Jo), Ka, es = 0; !(Ka = Yf.next()).done; )
              It = Ka.value, Kt = gt + Pt(It, es++), nn += Wa(It, C, A, Kt, ee);
          } else if (je === "object") {
            var ts = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ts === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ts) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function wa(h, C, A) {
        if (h == null)
          return h;
        var H = [], ee = 0;
        return Wa(h, H, "", "", function(je) {
          return C.call(A, je, ee++);
        }), H;
      }
      function il(h) {
        var C = 0;
        return wa(h, function() {
          C++;
        }), C;
      }
      function ql(h, C, A) {
        wa(h, function() {
          C.apply(this, arguments);
        }, A);
      }
      function Pu(h) {
        return wa(h, function(C) {
          return C;
        }) || [];
      }
      function Di(h) {
        if (!jt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ll(h) {
        var C = {
          $$typeof: oe,
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
          $$typeof: re,
          _context: C
        };
        var A = !1, H = !1, ee = !1;
        {
          var je = {
            $$typeof: oe,
            _context: C
          };
          Object.defineProperties(je, {
            Provider: {
              get: function() {
                return H || (H = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(fe) {
                C.Provider = fe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(fe) {
                C._currentValue = fe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(fe) {
                C._currentValue2 = fe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(fe) {
                C._threadCount = fe;
              }
            },
            Consumer: {
              get: function() {
                return A || (A = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(fe) {
                ee || (wt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), ee = !0);
              }
            }
          }), C.Consumer = je;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, ui = 0, da = 1, oi = 2;
      function br(h) {
        if (h._status === fa) {
          var C = h._result, A = C();
          if (A.then(function(je) {
            if (h._status === ui || h._status === fa) {
              var fe = h;
              fe._status = da, fe._result = je;
            }
          }, function(je) {
            if (h._status === ui || h._status === fa) {
              var fe = h;
              fe._status = oi, fe._result = je;
            }
          }), h._status === fa) {
            var H = h;
            H._status = ui, H._result = A;
          }
        }
        if (h._status === da) {
          var ee = h._result;
          return ee === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, A = {
          $$typeof: Oe,
          _payload: C,
          _init: br
        };
        {
          var H, ee;
          Object.defineProperties(A, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(je) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = je, Object.defineProperty(A, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(je) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = je, Object.defineProperty(A, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return A;
      }
      function si(h) {
        h != null && h.$$typeof === se ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ee("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Je,
          render: h
        };
        {
          var A;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(H) {
              A = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Z || h === _e || nt || h === g || h === J || h === ce || Pe || h === et || Qt || Ot || En || typeof h == "object" && h !== null && (h.$$typeof === Oe || h.$$typeof === se || h.$$typeof === re || h.$$typeof === oe || h.$$typeof === Je || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        Q(h) || Ee("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var A = {
          $$typeof: se,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(ee) {
              H = ee, !h.name && !h.displayName && (h.displayName = ee);
            }
          });
        }
        return A;
      }
      function me() {
        var h = Ke.current;
        return h === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function tt(h) {
        var C = me();
        if (h._context !== void 0) {
          var A = h._context;
          A.Consumer === h ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : A.Provider === h && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Et(h) {
        var C = me();
        return C.useState(h);
      }
      function rt(h, C, A) {
        var H = me();
        return H.useReducer(h, C, A);
      }
      function ze(h) {
        var C = me();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var A = me();
        return A.useEffect(h, C);
      }
      function en(h, C) {
        var A = me();
        return A.useInsertionEffect(h, C);
      }
      function tn(h, C) {
        var A = me();
        return A.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var A = me();
        return A.useCallback(h, C);
      }
      function ci(h, C) {
        var A = me();
        return A.useMemo(h, C);
      }
      function Vu(h, C, A) {
        var H = me();
        return H.useImperativeHandle(h, C, A);
      }
      function bt(h, C) {
        {
          var A = me();
          return A.useDebugValue(h, C);
        }
      }
      function Bf() {
        var h = me();
        return h.useTransition();
      }
      function Ga(h) {
        var C = me();
        return C.useDeferredValue(h);
      }
      function ft() {
        var h = me();
        return h.useId();
      }
      function fi(h, C, A) {
        var H = me();
        return H.useSyncExternalStore(h, C, A);
      }
      var ul = 0, Bu, ol, Qr, qo, xr, Xo, Ko;
      function Js() {
      }
      Js.__reactDisabledLog = !0;
      function $u() {
        {
          if (ul === 0) {
            Bu = console.log, ol = console.info, Qr = console.warn, qo = console.error, xr = console.group, Xo = console.groupCollapsed, Ko = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Js,
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
          ul++;
        }
      }
      function sl() {
        {
          if (ul--, ul === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: de({}, h, {
                value: Bu
              }),
              info: de({}, h, {
                value: ol
              }),
              warn: de({}, h, {
                value: Qr
              }),
              error: de({}, h, {
                value: qo
              }),
              group: de({}, h, {
                value: xr
              }),
              groupCollapsed: de({}, h, {
                value: Xo
              }),
              groupEnd: de({}, h, {
                value: Ko
              })
            });
          }
          ul < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qa = At.ReactCurrentDispatcher, kr;
      function cl(h, C, A) {
        {
          if (kr === void 0)
            try {
              throw Error();
            } catch (ee) {
              var H = ee.stack.trim().match(/\n( *(at )?)/);
              kr = H && H[1] || "";
            }
          return `
` + kr + h;
        }
      }
      var fl = !1, dl;
      {
        var Yu = typeof WeakMap == "function" ? WeakMap : Map;
        dl = new Yu();
      }
      function Iu(h, C) {
        if (!h || fl)
          return "";
        {
          var A = dl.get(h);
          if (A !== void 0)
            return A;
        }
        var H;
        fl = !0;
        var ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var je;
        je = qa.current, qa.current = null, $u();
        try {
          if (C) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (gt) {
                H = gt;
              }
              Reflect.construct(h, [], fe);
            } else {
              try {
                fe.call();
              } catch (gt) {
                H = gt;
              }
              h.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gt) {
              H = gt;
            }
            h();
          }
        } catch (gt) {
          if (gt && H && typeof gt.stack == "string") {
            for (var Ae = gt.stack.split(`
`), dt = H.stack.split(`
`), kt = Ae.length - 1, Xt = dt.length - 1; kt >= 1 && Xt >= 0 && Ae[kt] !== dt[Xt]; )
              Xt--;
            for (; kt >= 1 && Xt >= 0; kt--, Xt--)
              if (Ae[kt] !== dt[Xt]) {
                if (kt !== 1 || Xt !== 1)
                  do
                    if (kt--, Xt--, Xt < 0 || Ae[kt] !== dt[Xt]) {
                      var It = `
` + Ae[kt].replace(" at new ", " at ");
                      return h.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", h.displayName)), typeof h == "function" && dl.set(h, It), It;
                    }
                  while (kt >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          fl = !1, qa.current = je, sl(), Error.prepareStackTrace = ee;
        }
        var Kt = h ? h.displayName || h.name : "", nn = Kt ? cl(Kt) : "";
        return typeof h == "function" && dl.set(h, nn), nn;
      }
      function Oi(h, C, A) {
        return Iu(h, !1);
      }
      function $f(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function di(h, C, A) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Iu(h, $f(h));
        if (typeof h == "string")
          return cl(h);
        switch (h) {
          case J:
            return cl("Suspense");
          case ce:
            return cl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Je:
              return Oi(h.render);
            case se:
              return di(h.type, C, A);
            case Oe: {
              var H = h, ee = H._payload, je = H._init;
              try {
                return di(je(ee), C, A);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Qu = At.ReactDebugCurrentFrame;
      function Xl(h) {
        if (h) {
          var C = h._owner, A = di(h.type, h._source, C ? C.type : null);
          Qu.setExtraStackFrame(A);
        } else
          Qu.setExtraStackFrame(null);
      }
      function Wu(h, C, A, H, ee) {
        {
          var je = Function.call.bind(vr);
          for (var fe in h)
            if (je(h, fe)) {
              var Ae = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var dt = Error((H || "React class") + ": " + A + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                Ae = h[fe](C, fe, H, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (kt) {
                Ae = kt;
              }
              Ae && !(Ae instanceof Error) && (Xl(ee), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", A, fe, typeof Ae), Xl(null)), Ae instanceof Error && !(Ae.message in Lt) && (Lt[Ae.message] = !0, Xl(ee), Ee("Failed %s type: %s", A, Ae.message), Xl(null));
            }
        }
      }
      function xt(h) {
        if (h) {
          var C = h._owner, A = di(h.type, h._source, C ? C.type : null);
          wn(A);
        } else
          wn(null);
      }
      var Gu;
      Gu = !1;
      function qu() {
        if (ct.current) {
          var h = In(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function qe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), A = h.lineNumber;
          return `

Check your code at ` + C + ":" + A + ".";
        }
        return "";
      }
      function Kl(h) {
        return h != null ? qe(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = qu();
        if (!C) {
          var A = typeof h == "string" ? h : h.displayName || h.name;
          A && (C = `

Check the top-level render call using <` + A + ">.");
        }
        return C;
      }
      function Dr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var A = Wr(C);
          if (!hn[A]) {
            hn[A] = !0;
            var H = "";
            h && h._owner && h._owner !== ct.current && (H = " It was passed a child from " + In(h._owner.type) + "."), xt(h), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, H), xt(null);
          }
        }
      }
      function pl(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var A = 0; A < h.length; A++) {
              var H = h[A];
              jt(H) && Dr(H, C);
            }
          else if (jt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ee = st(h);
            if (typeof ee == "function" && ee !== h.entries)
              for (var je = ee.call(h), fe; !(fe = je.next()).done; )
                jt(fe.value) && Dr(fe.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var A;
          if (typeof C == "function")
            A = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Je || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === se))
            A = C.propTypes;
          else
            return;
          if (A) {
            var H = In(C);
            Wu(A, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Gu) {
            Gu = !0;
            var ee = In(C);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Vt(h) {
        {
          for (var C = Object.keys(h.props), A = 0; A < C.length; A++) {
            var H = C[A];
            if (H !== "children" && H !== "key") {
              xt(h), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), xt(null);
              break;
            }
          }
          h.ref !== null && (xt(h), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
        }
      }
      function ec(h, C, A) {
        var H = Q(h);
        if (!H) {
          var ee = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Kl(C);
          je ? ee += je : ee += qu();
          var fe;
          h === null ? fe = "null" : dn(h) ? fe = "array" : h !== void 0 && h.$$typeof === P ? (fe = "<" + (In(h.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, ee);
        }
        var Ae = De.apply(this, arguments);
        if (Ae == null)
          return Ae;
        if (H)
          for (var dt = 2; dt < arguments.length; dt++)
            pl(arguments[dt], h);
        return h === Z ? Vt(Ae) : Cn(Ae), Ae;
      }
      var Gr = !1;
      function Qn(h) {
        var C = ec.bind(null, h);
        return C.type = h, Gr || (Gr = !0, wt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return wt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function pi(h, C, A) {
        for (var H = zt.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
          pl(arguments[ee], H.type);
        return Cn(H), H;
      }
      function tc(h, C) {
        var A = vt.transition;
        vt.transition = {};
        var H = vt.transition;
        vt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (vt.transition = A, A === null && H._updatedFibers) {
            var ee = H._updatedFibers.size;
            ee > 10 && wt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Li = !1, vl = null;
      function nc(h) {
        if (vl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), A = D && D[C];
            vl = A.call(D, "timers").setImmediate;
          } catch {
            vl = function(ee) {
              Li === !1 && (Li = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var je = new MessageChannel();
              je.port1.onmessage = ee, je.port2.postMessage(void 0);
            };
          }
        return vl(h);
      }
      var ba = 0, hl = !1;
      function ml(h) {
        {
          var C = ba;
          ba++, Le.current === null && (Le.current = []);
          var A = Le.isBatchingLegacy, H;
          try {
            if (Le.isBatchingLegacy = !0, H = h(), !A && Le.didScheduleLegacyUpdate) {
              var ee = Le.current;
              ee !== null && (Le.didScheduleLegacyUpdate = !1, gl(ee));
            }
          } catch (Kt) {
            throw xa(C), Kt;
          } finally {
            Le.isBatchingLegacy = A;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var je = H, fe = !1, Ae = {
              then: function(Kt, nn) {
                fe = !0, je.then(function(gt) {
                  xa(C), ba === 0 ? Xu(gt, Kt, nn) : Kt(gt);
                }, function(gt) {
                  xa(C), nn(gt);
                });
              }
            };
            return !hl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              fe || (hl = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ae;
          } else {
            var dt = H;
            if (xa(C), ba === 0) {
              var kt = Le.current;
              kt !== null && (gl(kt), Le.current = null);
              var Xt = {
                then: function(Kt, nn) {
                  Le.current === null ? (Le.current = [], Xu(dt, Kt, nn)) : Kt(dt);
                }
              };
              return Xt;
            } else {
              var It = {
                then: function(Kt, nn) {
                  Kt(dt);
                }
              };
              return It;
            }
          }
        }
      }
      function xa(h) {
        h !== ba - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function Xu(h, C, A) {
        {
          var H = Le.current;
          if (H !== null)
            try {
              gl(H), nc(function() {
                H.length === 0 ? (Le.current = null, C(h)) : Xu(h, C, A);
              });
            } catch (ee) {
              A(ee);
            }
          else
            C(h);
        }
      }
      var yl = !1;
      function gl(h) {
        if (!yl) {
          yl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var A = h[C];
              do
                A = A(!0);
              while (A !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            yl = !1;
          }
        }
      }
      var Zl = ec, Ku = pi, Zo = Qn, Xa = {
        map: wa,
        forEach: ql,
        count: il,
        toArray: Pu,
        only: Di
      };
      O.Children = Xa, O.Component = Be, O.Fragment = Z, O.Profiler = _e, O.PureComponent = Ft, O.StrictMode = g, O.Suspense = J, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, O.cloneElement = Ku, O.createContext = ll, O.createElement = Zl, O.createFactory = Zo, O.createRef = pr, O.forwardRef = si, O.isValidElement = jt, O.lazy = pa, O.memo = ie, O.startTransition = tc, O.unstable_act = ml, O.useCallback = tr, O.useContext = tt, O.useDebugValue = bt, O.useDeferredValue = Ga, O.useEffect = Ln, O.useId = ft, O.useImperativeHandle = Vu, O.useInsertionEffect = en, O.useLayoutEffect = tn, O.useMemo = ci, O.useReducer = rt, O.useRef = ze, O.useState = Et, O.useSyncExternalStore = fi, O.useTransition = Bf, O.version = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
process.env.NODE_ENV === "production" ? _0.exports = hk() : _0.exports = mk();
var Go = _0.exports;
const _R = /* @__PURE__ */ D0(Go);
var w0 = { exports: {} }, Ia = {}, Vm = { exports: {} }, S0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pR;
function yk() {
  return pR || (pR = 1, function(D) {
    function O(ne, ke) {
      var T = ne.length;
      ne.push(ke);
      e:
        for (; 0 < T; ) {
          var I = T - 1 >>> 1, de = ne[I];
          if (0 < q(de, ke))
            ne[I] = ke, ne[T] = de, T = I;
          else
            break e;
        }
    }
    function w(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function P(ne) {
      if (ne.length === 0)
        return null;
      var ke = ne[0], T = ne.pop();
      if (T !== ke) {
        ne[0] = T;
        e:
          for (var I = 0, de = ne.length, We = de >>> 1; I < We; ) {
            var Be = 2 * (I + 1) - 1, St = ne[Be], lt = Be + 1, ht = ne[lt];
            if (0 > q(St, T))
              lt < de && 0 > q(ht, St) ? (ne[I] = ht, ne[lt] = T, I = lt) : (ne[I] = St, ne[Be] = T, I = Be);
            else if (lt < de && 0 > q(ht, T))
              ne[I] = ht, ne[lt] = T, I = lt;
            else
              break e;
          }
      }
      return ke;
    }
    function q(ne, ke) {
      var T = ne.sortIndex - ke.sortIndex;
      return T !== 0 ? T : ne.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Z = performance;
      D.unstable_now = function() {
        return Z.now();
      };
    } else {
      var g = Date, _e = g.now();
      D.unstable_now = function() {
        return g.now() - _e;
      };
    }
    var re = [], oe = [], Je = 1, J = null, ce = 3, se = !1, Oe = !1, et = !1, Ge = typeof setTimeout == "function" ? setTimeout : null, qt = typeof clearTimeout == "function" ? clearTimeout : null, st = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ke(ne) {
      for (var ke = w(oe); ke !== null; ) {
        if (ke.callback === null)
          P(oe);
        else if (ke.startTime <= ne)
          P(oe), ke.sortIndex = ke.expirationTime, O(re, ke);
        else
          break;
        ke = w(oe);
      }
    }
    function vt(ne) {
      if (et = !1, Ke(ne), !Oe)
        if (w(re) !== null)
          Oe = !0, wt(Le);
        else {
          var ke = w(oe);
          ke !== null && Ee(vt, ke.startTime - ne);
        }
    }
    function Le(ne, ke) {
      Oe = !1, et && (et = !1, qt(rn), rn = -1), se = !0;
      var T = ce;
      try {
        for (Ke(ke), J = w(re); J !== null && (!(J.expirationTime > ke) || ne && !Ot()); ) {
          var I = J.callback;
          if (typeof I == "function") {
            J.callback = null, ce = J.priorityLevel;
            var de = I(J.expirationTime <= ke);
            ke = D.unstable_now(), typeof de == "function" ? J.callback = de : J === w(re) && P(re), Ke(ke);
          } else
            P(re);
          J = w(re);
        }
        if (J !== null)
          var We = !0;
        else {
          var Be = w(oe);
          Be !== null && Ee(vt, Be.startTime - ke), We = !1;
        }
        return We;
      } finally {
        J = null, ce = T, se = !1;
      }
    }
    var ct = !1, $e = null, rn = -1, wn = 5, Qt = -1;
    function Ot() {
      return !(D.unstable_now() - Qt < wn);
    }
    function En() {
      if ($e !== null) {
        var ne = D.unstable_now();
        Qt = ne;
        var ke = !0;
        try {
          ke = $e(!0, ne);
        } finally {
          ke ? Pe() : (ct = !1, $e = null);
        }
      } else
        ct = !1;
    }
    var Pe;
    if (typeof st == "function")
      Pe = function() {
        st(En);
      };
    else if (typeof MessageChannel < "u") {
      var nt = new MessageChannel(), At = nt.port2;
      nt.port1.onmessage = En, Pe = function() {
        At.postMessage(null);
      };
    } else
      Pe = function() {
        Ge(En, 0);
      };
    function wt(ne) {
      $e = ne, ct || (ct = !0, Pe());
    }
    function Ee(ne, ke) {
      rn = Ge(function() {
        ne(D.unstable_now());
      }, ke);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, D.unstable_continueExecution = function() {
      Oe || se || (Oe = !0, wt(Le));
    }, D.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return ce;
    }, D.unstable_getFirstCallbackNode = function() {
      return w(re);
    }, D.unstable_next = function(ne) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = ce;
      }
      var T = ce;
      ce = ke;
      try {
        return ne();
      } finally {
        ce = T;
      }
    }, D.unstable_pauseExecution = function() {
    }, D.unstable_requestPaint = function() {
    }, D.unstable_runWithPriority = function(ne, ke) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var T = ce;
      ce = ne;
      try {
        return ke();
      } finally {
        ce = T;
      }
    }, D.unstable_scheduleCallback = function(ne, ke, T) {
      var I = D.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? I + T : I) : T = I, ne) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return de = T + de, ne = { id: Je++, callback: ke, priorityLevel: ne, startTime: T, expirationTime: de, sortIndex: -1 }, T > I ? (ne.sortIndex = T, O(oe, ne), w(re) === null && ne === w(oe) && (et ? (qt(rn), rn = -1) : et = !0, Ee(vt, T - I))) : (ne.sortIndex = de, O(re, ne), Oe || se || (Oe = !0, wt(Le))), ne;
    }, D.unstable_shouldYield = Ot, D.unstable_wrapCallback = function(ne) {
      var ke = ce;
      return function() {
        var T = ce;
        ce = ke;
        try {
          return ne.apply(this, arguments);
        } finally {
          ce = T;
        }
      };
    };
  }(S0)), S0;
}
var E0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vR;
function gk() {
  return vR || (vR = 1, function(D) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var O = !1, w = !1, P = 5;
      function q(ae, De) {
        var ot = ae.length;
        ae.push(De), _e(ae, De, ot);
      }
      function Z(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function g(ae) {
        if (ae.length === 0)
          return null;
        var De = ae[0], ot = ae.pop();
        return ot !== De && (ae[0] = ot, re(ae, ot, 0)), De;
      }
      function _e(ae, De, ot) {
        for (var zt = ot; zt > 0; ) {
          var jt = zt - 1 >>> 1, xn = ae[jt];
          if (oe(xn, De) > 0)
            ae[jt] = De, ae[zt] = xn, zt = jt;
          else
            return;
        }
      }
      function re(ae, De, ot) {
        for (var zt = ot, jt = ae.length, xn = jt >>> 1; zt < xn; ) {
          var vn = (zt + 1) * 2 - 1, mr = ae[vn], Yt = vn + 1, wr = ae[Yt];
          if (oe(mr, De) < 0)
            Yt < jt && oe(wr, mr) < 0 ? (ae[zt] = wr, ae[Yt] = De, zt = Yt) : (ae[zt] = mr, ae[vn] = De, zt = vn);
          else if (Yt < jt && oe(wr, De) < 0)
            ae[zt] = wr, ae[Yt] = De, zt = Yt;
          else
            return;
        }
      }
      function oe(ae, De) {
        var ot = ae.sortIndex - De.sortIndex;
        return ot !== 0 ? ot : ae.id - De.id;
      }
      var Je = 1, J = 2, ce = 3, se = 4, Oe = 5;
      function et(ae, De) {
      }
      var Ge = typeof performance == "object" && typeof performance.now == "function";
      if (Ge) {
        var qt = performance;
        D.unstable_now = function() {
          return qt.now();
        };
      } else {
        var st = Date, Ke = st.now();
        D.unstable_now = function() {
          return st.now() - Ke;
        };
      }
      var vt = 1073741823, Le = -1, ct = 250, $e = 5e3, rn = 1e4, wn = vt, Qt = [], Ot = [], En = 1, Pe = null, nt = ce, At = !1, wt = !1, Ee = !1, ne = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function I(ae) {
        for (var De = Z(Ot); De !== null; ) {
          if (De.callback === null)
            g(Ot);
          else if (De.startTime <= ae)
            g(Ot), De.sortIndex = De.expirationTime, q(Qt, De);
          else
            return;
          De = Z(Ot);
        }
      }
      function de(ae) {
        if (Ee = !1, I(ae), !wt)
          if (Z(Qt) !== null)
            wt = !0, Ir(We);
          else {
            var De = Z(Ot);
            De !== null && pn(de, De.startTime - ae);
          }
      }
      function We(ae, De) {
        wt = !1, Ee && (Ee = !1, _r()), At = !0;
        var ot = nt;
        try {
          var zt;
          if (!w)
            return Be(ae, De);
        } finally {
          Pe = null, nt = ot, At = !1;
        }
      }
      function Be(ae, De) {
        var ot = De;
        for (I(ot), Pe = Z(Qt); Pe !== null && !O && !(Pe.expirationTime > ot && (!ae || $r())); ) {
          var zt = Pe.callback;
          if (typeof zt == "function") {
            Pe.callback = null, nt = Pe.priorityLevel;
            var jt = Pe.expirationTime <= ot, xn = zt(jt);
            ot = D.unstable_now(), typeof xn == "function" ? Pe.callback = xn : Pe === Z(Qt) && g(Qt), I(ot);
          } else
            g(Qt);
          Pe = Z(Qt);
        }
        if (Pe !== null)
          return !0;
        var vn = Z(Ot);
        return vn !== null && pn(de, vn.startTime - ot), !1;
      }
      function St(ae, De) {
        switch (ae) {
          case Je:
          case J:
          case ce:
          case se:
          case Oe:
            break;
          default:
            ae = ce;
        }
        var ot = nt;
        nt = ae;
        try {
          return De();
        } finally {
          nt = ot;
        }
      }
      function lt(ae) {
        var De;
        switch (nt) {
          case Je:
          case J:
          case ce:
            De = ce;
            break;
          default:
            De = nt;
            break;
        }
        var ot = nt;
        nt = De;
        try {
          return ae();
        } finally {
          nt = ot;
        }
      }
      function ht(ae) {
        var De = nt;
        return function() {
          var ot = nt;
          nt = De;
          try {
            return ae.apply(this, arguments);
          } finally {
            nt = ot;
          }
        };
      }
      function ut(ae, De, ot) {
        var zt = D.unstable_now(), jt;
        if (typeof ot == "object" && ot !== null) {
          var xn = ot.delay;
          typeof xn == "number" && xn > 0 ? jt = zt + xn : jt = zt;
        } else
          jt = zt;
        var vn;
        switch (ae) {
          case Je:
            vn = Le;
            break;
          case J:
            vn = ct;
            break;
          case Oe:
            vn = wn;
            break;
          case se:
            vn = rn;
            break;
          case ce:
          default:
            vn = $e;
            break;
        }
        var mr = jt + vn, Yt = {
          id: En++,
          callback: De,
          priorityLevel: ae,
          startTime: jt,
          expirationTime: mr,
          sortIndex: -1
        };
        return jt > zt ? (Yt.sortIndex = jt, q(Ot, Yt), Z(Qt) === null && Yt === Z(Ot) && (Ee ? _r() : Ee = !0, pn(de, jt - zt))) : (Yt.sortIndex = mr, q(Qt, Yt), !wt && !At && (wt = !0, Ir(We))), Yt;
      }
      function Ft() {
      }
      function Pr() {
        !wt && !At && (wt = !0, Ir(We));
      }
      function pr() {
        return Z(Qt);
      }
      function Vr(ae) {
        ae.callback = null;
      }
      function dn() {
        return nt;
      }
      var Yn = !1, An = null, Fn = -1, bn = P, Br = -1;
      function $r() {
        var ae = D.unstable_now() - Br;
        return !(ae < bn);
      }
      function In() {
      }
      function vr(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? bn = Math.floor(1e3 / ae) : bn = P;
      }
      var Yr = function() {
        if (An !== null) {
          var ae = D.unstable_now();
          Br = ae;
          var De = !0, ot = !0;
          try {
            ot = An(De, ae);
          } finally {
            ot ? hr() : (Yn = !1, An = null);
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
          ne(Yr, 0);
        };
      function Ir(ae) {
        An = ae, Yn || (Yn = !0, hr());
      }
      function pn(ae, De) {
        Fn = ne(function() {
          ae(D.unstable_now());
        }, De);
      }
      function _r() {
        ke(Fn), Fn = -1;
      }
      var li = In, ca = null;
      D.unstable_IdlePriority = Oe, D.unstable_ImmediatePriority = Je, D.unstable_LowPriority = se, D.unstable_NormalPriority = ce, D.unstable_Profiling = ca, D.unstable_UserBlockingPriority = J, D.unstable_cancelCallback = Vr, D.unstable_continueExecution = Pr, D.unstable_forceFrameRate = vr, D.unstable_getCurrentPriorityLevel = dn, D.unstable_getFirstCallbackNode = pr, D.unstable_next = lt, D.unstable_pauseExecution = Ft, D.unstable_requestPaint = li, D.unstable_runWithPriority = St, D.unstable_scheduleCallback = ut, D.unstable_shouldYield = $r, D.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(E0)), E0;
}
var hR;
function wR() {
  return hR || (hR = 1, process.env.NODE_ENV === "production" ? Vm.exports = yk() : Vm.exports = gk()), Vm.exports;
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
var mR;
function Sk() {
  if (mR)
    return Ia;
  mR = 1;
  var D = Go, O = wR();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var P = /* @__PURE__ */ new Set(), q = {};
  function Z(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (q[n] = r, n = 0; n < r.length; n++)
      P.add(r[n]);
  }
  var _e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), re = Object.prototype.hasOwnProperty, oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Je = {}, J = {};
  function ce(n) {
    return re.call(J, n) ? !0 : re.call(Je, n) ? !1 : oe.test(n) ? J[n] = !0 : (Je[n] = !0, !1);
  }
  function se(n, r, l, o) {
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
  function Oe(n, r, l, o) {
    if (r === null || typeof r > "u" || se(n, r, l, o))
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
  function et(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ge[n] = new et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ge[r] = new et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ge[n] = new et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ge[n] = new et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ge[n] = new et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ge[n] = new et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ge[n] = new et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ge[n] = new et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ge[n] = new et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var qt = /[\-:]([a-z])/g;
  function st(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      qt,
      st
    );
    Ge[r] = new et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(qt, st);
    Ge[r] = new et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(qt, st);
    Ge[r] = new et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ge[n] = new et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ge.xlinkHref = new et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ge[n] = new et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ke(n, r, l, o) {
    var c = Ge.hasOwnProperty(r) ? Ge[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Oe(r, l, c, o) && (l = null), o || c === null ? ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var vt = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Le = Symbol.for("react.element"), ct = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), Ot = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, I;
  function de(n) {
    if (I === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        I = r && r[1] || "";
      }
    return `
` + I + n;
  }
  var We = !1;
  function Be(n, r) {
    if (!n || We)
      return "";
    We = !0;
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
          } catch (j) {
            var o = j;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (j) {
            o = j;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          o = j;
        }
        n();
      }
    } catch (j) {
      if (j && o && typeof j.stack == "string") {
        for (var c = j.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var _ = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)), _;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? de(n) : "";
  }
  function St(n) {
    switch (n.tag) {
      case 5:
        return de(n.type);
      case 16:
        return de("Lazy");
      case 13:
        return de("Suspense");
      case 19:
        return de("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Be(n.type, !1), n;
      case 11:
        return n = Be(n.type.render, !1), n;
      case 1:
        return n = Be(n.type, !0), n;
      default:
        return "";
    }
  }
  function lt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case $e:
        return "Fragment";
      case ct:
        return "Portal";
      case wn:
        return "Profiler";
      case rn:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case nt:
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
          return r = n.displayName || null, r !== null ? r : lt(n.type) || "Memo";
        case wt:
          r = n._payload, n = n._init;
          try {
            return lt(n(r));
          } catch {
          }
      }
    return null;
  }
  function ht(n) {
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
        return lt(r);
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
  function ut(n) {
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
  function Pr(n) {
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
    n._valueTracker || (n._valueTracker = Pr(n));
  }
  function Vr(n) {
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
    l = ut(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Fn(n, r) {
    r = r.checked, r != null && Ke(n, "checked", r, !1);
  }
  function bn(n, r) {
    Fn(n, r);
    var l = ut(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + ut(l), r = null, c = 0; c < n.length; c++) {
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
      throw Error(w(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(w(92));
        if (In(l)) {
          if (1 < l.length)
            throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ut(l) };
  }
  function sa(n, r) {
    var l = ut(r.value), o = ut(r.defaultValue);
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
  var _r, li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _r.firstChild; n.firstChild; )
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
  var ae = {
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
  }, De = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ae).forEach(function(n) {
    De.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ae[r] = ae[n];
    });
  });
  function ot(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ae.hasOwnProperty(n) && ae[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = ot(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var jt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xn(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(w(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(w(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(w(62));
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
  var wr = null, Ht = null, Pt = null;
  function Wa(n) {
    if (n = ds(n)) {
      if (typeof wr != "function")
        throw Error(w(280));
      var r = n.stateNode;
      r && (r = Me(r), wr(n.stateNode, n.type, r));
    }
  }
  function wa(n) {
    Ht ? Pt ? Pt.push(n) : Pt = [n] : Ht = n;
  }
  function il() {
    if (Ht) {
      var n = Ht, r = Pt;
      if (Pt = Ht = null, Wa(n), r)
        for (n = 0; n < r.length; n++)
          Wa(r[n]);
    }
  }
  function ql(n, r) {
    return n(r);
  }
  function Pu() {
  }
  var Di = !1;
  function ll(n, r, l) {
    if (Di)
      return n(r, l);
    Di = !0;
    try {
      return ql(n, r, l);
    } finally {
      Di = !1, (Ht !== null || Pt !== null) && (Pu(), il());
    }
  }
  function fa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Me(l);
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
      throw Error(w(231, r, typeof l));
    return l;
  }
  var ui = !1;
  if (_e)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        ui = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      ui = !1;
    }
  function oi(n, r, l, o, c, d, m, E, _) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, j);
    } catch (G) {
      this.onError(G);
    }
  }
  var br = !1, pa = null, si = !1, R = null, Q = { onError: function(n) {
    br = !0, pa = n;
  } };
  function ie(n, r, l, o, c, d, m, E, _) {
    br = !1, pa = null, oi.apply(Q, arguments);
  }
  function me(n, r, l, o, c, d, m, E, _) {
    if (ie.apply(this, arguments), br) {
      if (br) {
        var j = pa;
        br = !1, pa = null;
      } else
        throw Error(w(198));
      si || (si = !0, R = j);
    }
  }
  function tt(n) {
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
  function Et(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function rt(n) {
    if (tt(n) !== n)
      throw Error(w(188));
  }
  function ze(n) {
    var r = n.alternate;
    if (!r) {
      if (r = tt(n), r === null)
        throw Error(w(188));
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
            return rt(c), n;
          if (d === o)
            return rt(c), r;
          d = d.sibling;
        }
        throw Error(w(188));
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
            throw Error(w(189));
        }
      }
      if (l.alternate !== o)
        throw Error(w(190));
    }
    if (l.tag !== 3)
      throw Error(w(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = ze(n), n !== null ? en(n) : null;
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
  var tn = O.unstable_scheduleCallback, tr = O.unstable_cancelCallback, ci = O.unstable_shouldYield, Vu = O.unstable_requestPaint, bt = O.unstable_now, Bf = O.unstable_getCurrentPriorityLevel, Ga = O.unstable_ImmediatePriority, ft = O.unstable_UserBlockingPriority, fi = O.unstable_NormalPriority, ul = O.unstable_LowPriority, Bu = O.unstable_IdlePriority, ol = null, Qr = null;
  function qo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var xr = Math.clz32 ? Math.clz32 : Js, Xo = Math.log, Ko = Math.LN2;
  function Js(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xo(n) / Ko | 0) | 0;
  }
  var $u = 64, sl = 4194304;
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
  function kr(n, r) {
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
        l = 31 - xr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
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
  function fl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - xr(d), E = 1 << m, _ = c[m];
      _ === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : _ <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function dl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Yu() {
    var n = $u;
    return $u <<= 1, !($u & 4194240) && ($u = 64), n;
  }
  function Iu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Oi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xr(r), n[r] = l;
  }
  function $f(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - xr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function di(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - xr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Qu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xl, Wu, xt, Gu, qu, qe = !1, Kl = [], hn = null, Wr = null, Dr = null, pl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Vt = [], ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ds(r), r !== null && Wu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function pi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = Qn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return pl.set(d, Qn(pl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function tc(n) {
    var r = Da(n.target);
    if (r !== null) {
      var l = tt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Et(l), r !== null) {
            n.blockedOn = r, qu(n.priority, function() {
              xt(l);
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
  function Li(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ku(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mr = o, l.target.dispatchEvent(o), mr = null;
      } else
        return r = ds(l), r !== null && Wu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function vl(n, r, l) {
    Li(n) && l.delete(r);
  }
  function nc() {
    qe = !1, hn !== null && Li(hn) && (hn = null), Wr !== null && Li(Wr) && (Wr = null), Dr !== null && Li(Dr) && (Dr = null), pl.forEach(vl), Cn.forEach(vl);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, qe || (qe = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, nc)));
  }
  function hl(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < Kl.length) {
      ba(Kl[0], n);
      for (var l = 1; l < Kl.length; l++) {
        var o = Kl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && ba(hn, n), Wr !== null && ba(Wr, n), Dr !== null && ba(Dr, n), pl.forEach(r), Cn.forEach(r), l = 0; l < Vt.length; l++)
      o = Vt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Vt.length && (l = Vt[0], l.blockedOn === null); )
      tc(l), l.blockedOn === null && Vt.shift();
  }
  var ml = vt.ReactCurrentBatchConfig, xa = !0;
  function Xu(n, r, l, o) {
    var c = Lt, d = ml.transition;
    ml.transition = null;
    try {
      Lt = 1, gl(n, r, l, o);
    } finally {
      Lt = c, ml.transition = d;
    }
  }
  function yl(n, r, l, o) {
    var c = Lt, d = ml.transition;
    ml.transition = null;
    try {
      Lt = 4, gl(n, r, l, o);
    } finally {
      Lt = c, ml.transition = d;
    }
  }
  function gl(n, r, l, o) {
    if (xa) {
      var c = Ku(n, r, l, o);
      if (c === null)
        fc(n, r, o, Zl, l), Gr(n, o);
      else if (pi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < ec.indexOf(n)) {
        for (; c !== null; ) {
          var d = ds(c);
          if (d !== null && Xl(d), d = Ku(n, r, l, o), d === null && fc(n, r, o, Zl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        fc(n, r, o, null, l);
    }
  }
  var Zl = null;
  function Ku(n, r, l, o) {
    if (Zl = null, n = Yt(o), n = Da(n), n !== null)
      if (r = tt(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Et(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zl = n, null;
  }
  function Zo(n) {
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
        switch (Bf()) {
          case Ga:
            return 1;
          case ft:
            return 4;
          case fi:
          case ul:
            return 16;
          case Bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xa = null, h = null, C = null;
  function A() {
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
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ee() {
    return !0;
  }
  function je() {
    return !1;
  }
  function fe(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ee : je, this.isPropagationStopped = je, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ee);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ee);
    }, persist: function() {
    }, isPersistent: ee }), r;
  }
  var Ae = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dt = fe(Ae), kt = T({}, Ae, { view: 0, detail: 0 }), Xt = fe(kt), It, Kt, nn, gt = T({}, kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Gf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (It = n.screenX - nn.screenX, Kt = n.screenY - nn.screenY) : Kt = It = 0, nn = n), It);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), Ni = fe(gt), Zu = T({}, gt, { dataTransfer: 0 }), Jo = fe(Zu), Yf = T({}, kt, { relatedTarget: 0 }), Ka = fe(Yf), es = T({}, Ae, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ts = fe(es), If = T({}, Ae, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Gm = fe(If), qm = T({}, Ae, { data: 0 }), Qf = fe(qm), Wf = {
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
  }, nv = {
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
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function av(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = rv[n]) ? !!r[n] : !1;
  }
  function Gf() {
    return av;
  }
  var Mi = T({}, kt, { key: function(n) {
    if (n.key) {
      var r = Wf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Gf, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Xm = fe(Mi), qf = T({}, gt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rc = fe(qf), Xf = T({}, kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Gf }), Km = fe(Xf), ac = T({}, Ae, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), iv = fe(ac), qr = T({}, gt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zi = fe(qr), Nn = [9, 13, 27, 32], Za = _e && "CompositionEvent" in window, Jl = null;
  _e && "documentMode" in document && (Jl = document.documentMode);
  var ic = _e && "TextEvent" in window && !Jl, lv = _e && (!Za || Jl && 8 < Jl && 11 >= Jl), Ju = String.fromCharCode(32), uv = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return Nn.indexOf(r.keyCode) !== -1;
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
  function lc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var eo = !1;
  function Zm(n, r) {
    switch (n) {
      case "compositionend":
        return lc(r);
      case "keypress":
        return r.which !== 32 ? null : (uv = !0, Ju);
      case "textInput":
        return n = r.data, n === Ju && uv ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (eo)
      return n === "compositionend" || !Za && ov(n, r) ? (n = A(), C = h = Xa = null, eo = !1, n) : null;
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
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var sv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!sv[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    wa(o), r = ss(r, "onChange"), 0 < r.length && (l = new dt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ns = null, to = null;
  function no(n) {
    cc(n, 0);
  }
  function ro(n) {
    var r = io(n);
    if (Vr(r))
      return n;
  }
  function dv(n, r) {
    if (n === "change")
      return r;
  }
  var Kf = !1;
  if (_e) {
    var Zf;
    if (_e) {
      var Jf = "oninput" in document;
      if (!Jf) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), Jf = typeof pv.oninput == "function";
      }
      Zf = Jf;
    } else
      Zf = !1;
    Kf = Zf && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    ns && (ns.detachEvent("onpropertychange", hv), to = ns = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && ro(to)) {
      var r = [];
      fv(r, to, n, Yt(n)), ll(no, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (vv(), ns = r, to = l, ns.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ro(to);
  }
  function ny(n, r) {
    if (n === "click")
      return ro(r);
  }
  function mv(n, r) {
    if (n === "input" || n === "change")
      return ro(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ka = typeof Object.is == "function" ? Object.is : ry;
  function rs(n, r) {
    if (ka(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!re.call(r, c) || !ka(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
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
      l = yv(l);
    }
  }
  function Sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function uc() {
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
  function Ui(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function oc(n) {
    var r = uc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ui(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gv(l, d);
          var m = gv(
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
  var Ev = _e && "documentMode" in document && 11 >= document.documentMode, Ja = null, ed = null, as = null, td = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    td || Ja == null || Ja !== dn(o) || (o = Ja, "selectionStart" in o && Ui(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), as && rs(as, o) || (as = o, o = ss(ed, "onSelect"), 0 < o.length && (r = new dt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ja)));
  }
  function sc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var eu = { animationend: sc("Animation", "AnimationEnd"), animationiteration: sc("Animation", "AnimationIteration"), animationstart: sc("Animation", "AnimationStart"), transitionend: sc("Transition", "TransitionEnd") }, nd = {}, rd = {};
  _e && (rd = document.createElement("div").style, "AnimationEvent" in window || (delete eu.animationend.animation, delete eu.animationiteration.animation, delete eu.animationstart.animation), "TransitionEvent" in window || delete eu.transitionend.transition);
  function Wn(n) {
    if (nd[n])
      return nd[n];
    if (!eu[n])
      return n;
    var r = eu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in rd)
        return nd[n] = r[l];
    return n;
  }
  var ad = Wn("animationend"), Rv = Wn("animationiteration"), Tv = Wn("animationstart"), _v = Wn("transitionend"), wv = /* @__PURE__ */ new Map(), bv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ai(n, r) {
    wv.set(n, r), Z(r, [n]);
  }
  for (var is = 0; is < bv.length; is++) {
    var tu = bv[is], ay = tu.toLowerCase(), ls = tu[0].toUpperCase() + tu.slice(1);
    Ai(ay, "on" + ls);
  }
  Ai(ad, "onAnimationEnd"), Ai(Rv, "onAnimationIteration"), Ai(Tv, "onAnimationStart"), Ai("dblclick", "onDoubleClick"), Ai("focusin", "onFocus"), Ai("focusout", "onBlur"), Ai(_v, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Z("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Z("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Z("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Z("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Z("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Z("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function xv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function cc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], _ = E.instance, j = E.currentTarget;
            if (E = E.listener, _ !== d && c.isPropagationStopped())
              break e;
            xv(c, E, j), d = _;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], _ = E.instance, j = E.currentTarget, E = E.listener, _ !== d && c.isPropagationStopped())
              break e;
            xv(c, E, j), d = _;
          }
      }
    }
    if (si)
      throw n = R, si = !1, R = null, n;
  }
  function Zt(n, r) {
    var l = r[fd];
    l === void 0 && (l = r[fd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (kv(r, n, 2, !1), l.add(o));
  }
  function Sl(n, r, l) {
    var o = 0;
    r && (o |= 4), kv(l, n, o, r);
  }
  var Fi = "_reactListening" + Math.random().toString(36).slice(2);
  function ao(n) {
    if (!n[Fi]) {
      n[Fi] = !0, P.forEach(function(l) {
        l !== "selectionchange" && (iy.has(l) || Sl(l, !1, n), Sl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Fi] || (r[Fi] = !0, Sl("selectionchange", !1, r));
    }
  }
  function kv(n, r, l, o) {
    switch (Zo(r)) {
      case 1:
        var c = Xu;
        break;
      case 4:
        c = yl;
        break;
      default:
        c = gl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ui || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function fc(n, r, l, o, c) {
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
                var _ = m.tag;
                if ((_ === 3 || _ === 4) && (_ = m.stateNode.containerInfo, _ === c || _.nodeType === 8 && _.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Da(E), m === null)
                return;
              if (_ = m.tag, _ === 5 || _ === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    ll(function() {
      var j = d, G = Yt(l), X = [];
      e: {
        var W = wv.get(n);
        if (W !== void 0) {
          var ve = dt, Ce = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ve = Xm;
              break;
            case "focusin":
              Ce = "focus", ve = Ka;
              break;
            case "focusout":
              Ce = "blur", ve = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              ve = Ka;
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
              ve = Ni;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ve = Jo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ve = Km;
              break;
            case ad:
            case Rv:
            case Tv:
              ve = ts;
              break;
            case _v:
              ve = iv;
              break;
            case "scroll":
              ve = Xt;
              break;
            case "wheel":
              ve = zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ve = Gm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ve = rc;
          }
          var we = (r & 4) !== 0, Dn = !we && n === "scroll", L = we ? W !== null ? W + "Capture" : null : W;
          we = [];
          for (var x = j, z; x !== null; ) {
            z = x;
            var te = z.stateNode;
            if (z.tag === 5 && te !== null && (z = te, L !== null && (te = fa(x, L), te != null && we.push(os(x, te, z)))), Dn)
              break;
            x = x.return;
          }
          0 < we.length && (W = new ve(W, Ce, null, l, G), X.push({ event: W, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", ve = n === "mouseout" || n === "pointerout", W && l !== mr && (Ce = l.relatedTarget || l.fromElement) && (Da(Ce) || Ce[ji]))
            break e;
          if ((ve || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, ve ? (Ce = l.relatedTarget || l.toElement, ve = j, Ce = Ce ? Da(Ce) : null, Ce !== null && (Dn = tt(Ce), Ce !== Dn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (ve = null, Ce = j), ve !== Ce)) {
            if (we = Ni, te = "onMouseLeave", L = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (we = rc, te = "onPointerLeave", L = "onPointerEnter", x = "pointer"), Dn = ve == null ? W : io(ve), z = Ce == null ? W : io(Ce), W = new we(te, x + "leave", ve, l, G), W.target = Dn, W.relatedTarget = z, te = null, Da(G) === j && (we = new we(L, x + "enter", Ce, l, G), we.target = z, we.relatedTarget = Dn, te = we), Dn = te, ve && Ce)
              t: {
                for (we = ve, L = Ce, x = 0, z = we; z; z = nu(z))
                  x++;
                for (z = 0, te = L; te; te = nu(te))
                  z++;
                for (; 0 < x - z; )
                  we = nu(we), x--;
                for (; 0 < z - x; )
                  L = nu(L), z--;
                for (; x--; ) {
                  if (we === L || L !== null && we === L.alternate)
                    break t;
                  we = nu(we), L = nu(L);
                }
                we = null;
              }
            else
              we = null;
            ve !== null && id(X, W, ve, we, !1), Ce !== null && Dn !== null && id(X, Dn, Ce, we, !0);
          }
        }
        e: {
          if (W = j ? io(j) : window, ve = W.nodeName && W.nodeName.toLowerCase(), ve === "select" || ve === "input" && W.type === "file")
            var be = dv;
          else if (cv(W))
            if (Kf)
              be = mv;
            else {
              be = ty;
              var Re = ey;
            }
          else
            (ve = W.nodeName) && ve.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (be = ny);
          if (be && (be = be(n, j))) {
            fv(X, be, l, G);
            break e;
          }
          Re && Re(n, W, j), n === "focusout" && (Re = W._wrapperState) && Re.controlled && W.type === "number" && $r(W, "number", W.value);
        }
        switch (Re = j ? io(j) : window, n) {
          case "focusin":
            (cv(Re) || Re.contentEditable === "true") && (Ja = Re, ed = j, as = null);
            break;
          case "focusout":
            as = ed = Ja = null;
            break;
          case "mousedown":
            td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            td = !1, Cv(X, l, G);
            break;
          case "selectionchange":
            if (Ev)
              break;
          case "keydown":
          case "keyup":
            Cv(X, l, G);
        }
        var Ne;
        if (Za)
          e: {
            switch (n) {
              case "compositionstart":
                var Qe = "onCompositionStart";
                break e;
              case "compositionend":
                Qe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Qe = "onCompositionUpdate";
                break e;
            }
            Qe = void 0;
          }
        else
          eo ? ov(n, l) && (Qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (lv && l.locale !== "ko" && (eo || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && eo && (Ne = A()) : (Xa = G, h = "value" in Xa ? Xa.value : Xa.textContent, eo = !0)), Re = ss(j, Qe), 0 < Re.length && (Qe = new Qf(Qe, n, null, l, G), X.push({ event: Qe, listeners: Re }), Ne ? Qe.data = Ne : (Ne = lc(l), Ne !== null && (Qe.data = Ne)))), (Ne = ic ? Zm(n, l) : Jm(n, l)) && (j = ss(j, "onBeforeInput"), 0 < j.length && (G = new Qf("onBeforeInput", "beforeinput", null, l, G), X.push({ event: G, listeners: j }), G.data = Ne));
      }
      cc(X, r);
    });
  }
  function os(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ss(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, l), d != null && o.unshift(os(n, d, c)), d = fa(n, r), d != null && o.push(os(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function id(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, _ = E.alternate, j = E.stateNode;
      if (_ !== null && _ === o)
        break;
      E.tag === 5 && j !== null && (E = j, c ? (_ = fa(l, d), _ != null && m.unshift(os(l, _, E))) : c || (_ = fa(l, d), _ != null && m.push(os(l, _, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ld = /\r\n?/g, ly = /\u0000|\uFFFD/g;
  function ud(n) {
    return (typeof n == "string" ? n : "" + n).replace(ld, `
`).replace(ly, "");
  }
  function dc(n, r, l) {
    if (r = ud(r), ud(n) !== r && l)
      throw Error(w(425));
  }
  function pc() {
  }
  var od = null, ru = null;
  function cs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var au = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, sd = typeof Promise == "function" ? Promise : void 0, cd = typeof queueMicrotask == "function" ? queueMicrotask : typeof sd < "u" ? function(n) {
    return sd.resolve(null).then(n).catch(uy);
  } : au;
  function uy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function El(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), hl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    hl(r);
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
  function fs(n) {
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
  var Cl = Math.random().toString(36).slice(2), vi = "__reactFiber$" + Cl, iu = "__reactProps$" + Cl, ji = "__reactContainer$" + Cl, fd = "__reactEvents$" + Cl, oy = "__reactListeners$" + Cl, dd = "__reactHandles$" + Cl;
  function Da(n) {
    var r = n[vi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ji] || l[vi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = fs(n); n !== null; ) {
            if (l = n[vi])
              return l;
            n = fs(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ds(n) {
    return n = n[vi] || n[ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function io(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(w(33));
  }
  function Me(n) {
    return n[iu] || null;
  }
  var Rl = [], an = -1;
  function at(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > an || (n.current = Rl[an], Rl[an] = null, an--);
  }
  function Bt(n, r) {
    an++, Rl[an] = n.current, n.current = r;
  }
  var hi = {}, Ie = at(hi), Rn = at(!1), Xr = hi;
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
    Ut(Rn), Ut(Ie);
  }
  function Tl(n, r, l) {
    if (Ie.current !== hi)
      throw Error(w(168));
    Bt(Ie, r), Bt(Rn, l);
  }
  function ps(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(w(108, ht(n) || "Unknown", c));
    return T({}, l, o);
  }
  function vc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || hi, Xr = Ie.current, Bt(Ie, n), Bt(Rn, Rn.current), !0;
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(w(169));
    l ? (n = ps(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Ut(Rn), Ut(Ie), Bt(Ie, n)) : Ut(Rn), Bt(Rn, l);
  }
  var va = null, Gn = !1, vs = !1;
  function pd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function vd(n) {
    Gn = !0, pd(n);
  }
  function Kr() {
    if (!vs && va !== null) {
      vs = !0;
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
        Lt = r, vs = !1;
      }
    }
    return null;
  }
  var _l = [], Zr = 0, lu = null, lo = 0, Jr = [], yr = 0, Na = null, nr = 1, Hi = "";
  function ha(n, r) {
    _l[Zr++] = lo, _l[Zr++] = lu, lu = n, lo = r;
  }
  function hd(n, r, l) {
    Jr[yr++] = nr, Jr[yr++] = Hi, Jr[yr++] = Na, Na = n;
    var o = nr;
    n = Hi;
    var c = 32 - xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - xr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - xr(r) + c | l << c | o, Hi = d + n;
    } else
      nr = 1 << d | l << c | o, Hi = n;
  }
  function hc(n) {
    n.return !== null && (ha(n, 1), hd(n, 1, 0));
  }
  function md(n) {
    for (; n === lu; )
      lu = _l[--Zr], _l[Zr] = null, lo = _l[--Zr], _l[Zr] = null;
    for (; n === Na; )
      Na = Jr[--yr], Jr[yr] = null, Hi = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, ln = !1, Ma = null;
  function yd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Lv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Na !== null ? { id: nr, overflow: Hi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function mc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yc(n) {
    if (ln) {
      var r = ea;
      if (r) {
        var l = r;
        if (!Lv(n, r)) {
          if (mc(n))
            throw Error(w(418));
          r = ei(l.nextSibling);
          var o = ma;
          r && Lv(n, r) ? yd(o, l) : (n.flags = n.flags & -4097 | 2, ln = !1, ma = n);
        }
      } else {
        if (mc(n))
          throw Error(w(418));
        n.flags = n.flags & -4097 | 2, ln = !1, ma = n;
      }
    }
  }
  function Nv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function gc(n) {
    if (n !== ma)
      return !1;
    if (!ln)
      return Nv(n), ln = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !cs(n.type, n.memoizedProps)), r && (r = ea)) {
      if (mc(n))
        throw Mv(), Error(w(418));
      for (; r; )
        yd(n, r), r = ei(r.nextSibling);
    }
    if (Nv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(w(317));
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
  function Mv() {
    for (var n = ea; n; )
      n = ei(n.nextSibling);
  }
  function mn() {
    ea = ma = null, ln = !1;
  }
  function gd(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var Sc = vt.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mi = at(null), Ec = null, wl = null, Sd = null;
  function Ed() {
    Sd = wl = Ec = null;
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
  function le(n, r) {
    Ec = n, Sd = wl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Mn = !0), n.firstContext = null);
  }
  function kn(n) {
    var r = n._currentValue;
    if (Sd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, wl === null) {
        if (Ec === null)
          throw Error(w(308));
        wl = n, Ec.dependencies = { lanes: 0, firstContext: n };
      } else
        wl = wl.next = n;
    return r;
  }
  var rr = null;
  function Cd(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function zv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Pi(n, o);
  }
  function Pi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xl = !1;
  function Rd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, mt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Pi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Pi(n, l);
  }
  function Cc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  function Td(n, r) {
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
      var _ = E, j = _.next;
      _.next = null, m === null ? d = j : m.next = j, m = _;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = j : E.next = j, G.lastBaseUpdate = _));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, G = j = _ = null, E = d;
      do {
        var W = E.lane, ve = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: ve,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ce = n, we = E;
            switch (W = r, ve = l, we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  X = Ce.call(ve, X, W);
                  break e;
                }
                X = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, W = typeof Ce == "function" ? Ce.call(ve, X, W) : Ce, W == null)
                  break e;
                X = T({}, X, W);
                break e;
              case 2:
                xl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else
          ve = { eventTime: ve, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (j = G = ve, _ = X) : G = G.next = ve, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (1);
      if (G === null && (_ = X), c.baseState = _, c.firstBaseUpdate = j, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ii |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function uu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(w(191, c));
          c.call(o);
        }
      }
  }
  var Uv = new D.Component().refs;
  function _d(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Rc = { isMounted: function(n) {
    return (n = n._reactInternals) ? tt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Rr(r, n, c, o), Cc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Rr(r, n, c, o), Cc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), o = zn(n), c = Vi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, o), r !== null && (Rr(r, n, o, l), Cc(r, n, o));
  } };
  function Av(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !rs(l, o) || !rs(c, d) : !0;
  }
  function Fv(n, r, l) {
    var o = !1, c = hi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = kn(d) : (c = cn(r) ? Xr : Ie.current, o = r.contextTypes, d = (o = o != null) ? Oa(n, c) : hi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Rc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function jv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Rc.enqueueReplaceState(r, r.state, null);
  }
  function Tc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Uv, Rd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = kn(d) : (d = cn(r) ? Xr : Ie.current, c.context = Oa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (_d(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Rc.enqueueReplaceState(c, c.state, null), Dl(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function uo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(w(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(w(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Uv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(w(284));
      if (!l._owner)
        throw Error(w(290, n));
    }
    return n;
  }
  function _c(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Hv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Pv(n) {
    function r(L, x) {
      if (n) {
        var z = L.deletions;
        z === null ? (L.deletions = [x], L.flags |= 16) : z.push(x);
      }
    }
    function l(L, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(L, x), x = x.sibling;
      return null;
    }
    function o(L, x) {
      for (L = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? L.set(x.key, x) : L.set(x.index, x), x = x.sibling;
      return L;
    }
    function c(L, x) {
      return L = Fl(L, x), L.index = 0, L.sibling = null, L;
    }
    function d(L, x, z) {
      return L.index = z, n ? (z = L.alternate, z !== null ? (z = z.index, z < x ? (L.flags |= 2, x) : z) : (L.flags |= 2, x)) : (L.flags |= 1048576, x);
    }
    function m(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function E(L, x, z, te) {
      return x === null || x.tag !== 6 ? (x = Ms(z, L.mode, te), x.return = L, x) : (x = c(x, z), x.return = L, x);
    }
    function _(L, x, z, te) {
      var be = z.type;
      return be === $e ? G(L, x, z.props.children, te, z.key) : x !== null && (x.elementType === be || typeof be == "object" && be !== null && be.$$typeof === wt && Hv(be) === x.type) ? (te = c(x, z.props), te.ref = uo(L, x, z), te.return = L, te) : (te = nf(z.type, z.key, z.props, null, L.mode, te), te.ref = uo(L, x, z), te.return = L, te);
    }
    function j(L, x, z, te) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== z.containerInfo || x.stateNode.implementation !== z.implementation ? (x = bu(z, L.mode, te), x.return = L, x) : (x = c(x, z.children || []), x.return = L, x);
    }
    function G(L, x, z, te, be) {
      return x === null || x.tag !== 7 ? (x = wu(z, L.mode, te, be), x.return = L, x) : (x = c(x, z), x.return = L, x);
    }
    function X(L, x, z) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ms("" + x, L.mode, z), x.return = L, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Le:
            return z = nf(x.type, x.key, x.props, null, L.mode, z), z.ref = uo(L, null, x), z.return = L, z;
          case ct:
            return x = bu(x, L.mode, z), x.return = L, x;
          case wt:
            var te = x._init;
            return X(L, te(x._payload), z);
        }
        if (In(x) || ke(x))
          return x = wu(x, L.mode, z, null), x.return = L, x;
        _c(L, x);
      }
      return null;
    }
    function W(L, x, z, te) {
      var be = x !== null ? x.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number")
        return be !== null ? null : E(L, x, "" + z, te);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Le:
            return z.key === be ? _(L, x, z, te) : null;
          case ct:
            return z.key === be ? j(L, x, z, te) : null;
          case wt:
            return be = z._init, W(
              L,
              x,
              be(z._payload),
              te
            );
        }
        if (In(z) || ke(z))
          return be !== null ? null : G(L, x, z, te, null);
        _c(L, z);
      }
      return null;
    }
    function ve(L, x, z, te, be) {
      if (typeof te == "string" && te !== "" || typeof te == "number")
        return L = L.get(z) || null, E(x, L, "" + te, be);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case Le:
            return L = L.get(te.key === null ? z : te.key) || null, _(x, L, te, be);
          case ct:
            return L = L.get(te.key === null ? z : te.key) || null, j(x, L, te, be);
          case wt:
            var Re = te._init;
            return ve(L, x, z, Re(te._payload), be);
        }
        if (In(te) || ke(te))
          return L = L.get(z) || null, G(x, L, te, be, null);
        _c(x, te);
      }
      return null;
    }
    function Ce(L, x, z, te) {
      for (var be = null, Re = null, Ne = x, Qe = x = 0, Zn = null; Ne !== null && Qe < z.length; Qe++) {
        Ne.index > Qe ? (Zn = Ne, Ne = null) : Zn = Ne.sibling;
        var Dt = W(L, Ne, z[Qe], te);
        if (Dt === null) {
          Ne === null && (Ne = Zn);
          break;
        }
        n && Ne && Dt.alternate === null && r(L, Ne), x = d(Dt, x, Qe), Re === null ? be = Dt : Re.sibling = Dt, Re = Dt, Ne = Zn;
      }
      if (Qe === z.length)
        return l(L, Ne), ln && ha(L, Qe), be;
      if (Ne === null) {
        for (; Qe < z.length; Qe++)
          Ne = X(L, z[Qe], te), Ne !== null && (x = d(Ne, x, Qe), Re === null ? be = Ne : Re.sibling = Ne, Re = Ne);
        return ln && ha(L, Qe), be;
      }
      for (Ne = o(L, Ne); Qe < z.length; Qe++)
        Zn = ve(Ne, L, Qe, z[Qe], te), Zn !== null && (n && Zn.alternate !== null && Ne.delete(Zn.key === null ? Qe : Zn.key), x = d(Zn, x, Qe), Re === null ? be = Zn : Re.sibling = Zn, Re = Zn);
      return n && Ne.forEach(function(jl) {
        return r(L, jl);
      }), ln && ha(L, Qe), be;
    }
    function we(L, x, z, te) {
      var be = ke(z);
      if (typeof be != "function")
        throw Error(w(150));
      if (z = be.call(z), z == null)
        throw Error(w(151));
      for (var Re = be = null, Ne = x, Qe = x = 0, Zn = null, Dt = z.next(); Ne !== null && !Dt.done; Qe++, Dt = z.next()) {
        Ne.index > Qe ? (Zn = Ne, Ne = null) : Zn = Ne.sibling;
        var jl = W(L, Ne, Dt.value, te);
        if (jl === null) {
          Ne === null && (Ne = Zn);
          break;
        }
        n && Ne && jl.alternate === null && r(L, Ne), x = d(jl, x, Qe), Re === null ? be = jl : Re.sibling = jl, Re = jl, Ne = Zn;
      }
      if (Dt.done)
        return l(
          L,
          Ne
        ), ln && ha(L, Qe), be;
      if (Ne === null) {
        for (; !Dt.done; Qe++, Dt = z.next())
          Dt = X(L, Dt.value, te), Dt !== null && (x = d(Dt, x, Qe), Re === null ? be = Dt : Re.sibling = Dt, Re = Dt);
        return ln && ha(L, Qe), be;
      }
      for (Ne = o(L, Ne); !Dt.done; Qe++, Dt = z.next())
        Dt = ve(Ne, L, Qe, Dt.value, te), Dt !== null && (n && Dt.alternate !== null && Ne.delete(Dt.key === null ? Qe : Dt.key), x = d(Dt, x, Qe), Re === null ? be = Dt : Re.sibling = Dt, Re = Dt);
      return n && Ne.forEach(function(ky) {
        return r(L, ky);
      }), ln && ha(L, Qe), be;
    }
    function Dn(L, x, z, te) {
      if (typeof z == "object" && z !== null && z.type === $e && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Le:
            e: {
              for (var be = z.key, Re = x; Re !== null; ) {
                if (Re.key === be) {
                  if (be = z.type, be === $e) {
                    if (Re.tag === 7) {
                      l(L, Re.sibling), x = c(Re, z.props.children), x.return = L, L = x;
                      break e;
                    }
                  } else if (Re.elementType === be || typeof be == "object" && be !== null && be.$$typeof === wt && Hv(be) === Re.type) {
                    l(L, Re.sibling), x = c(Re, z.props), x.ref = uo(L, Re, z), x.return = L, L = x;
                    break e;
                  }
                  l(L, Re);
                  break;
                } else
                  r(L, Re);
                Re = Re.sibling;
              }
              z.type === $e ? (x = wu(z.props.children, L.mode, te, z.key), x.return = L, L = x) : (te = nf(z.type, z.key, z.props, null, L.mode, te), te.ref = uo(L, x, z), te.return = L, L = te);
            }
            return m(L);
          case ct:
            e: {
              for (Re = z.key; x !== null; ) {
                if (x.key === Re)
                  if (x.tag === 4 && x.stateNode.containerInfo === z.containerInfo && x.stateNode.implementation === z.implementation) {
                    l(L, x.sibling), x = c(x, z.children || []), x.return = L, L = x;
                    break e;
                  } else {
                    l(L, x);
                    break;
                  }
                else
                  r(L, x);
                x = x.sibling;
              }
              x = bu(z, L.mode, te), x.return = L, L = x;
            }
            return m(L);
          case wt:
            return Re = z._init, Dn(L, x, Re(z._payload), te);
        }
        if (In(z))
          return Ce(L, x, z, te);
        if (ke(z))
          return we(L, x, z, te);
        _c(L, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z, x !== null && x.tag === 6 ? (l(L, x.sibling), x = c(x, z), x.return = L, L = x) : (l(L, x), x = Ms(z, L.mode, te), x.return = L, L = x), m(L)) : l(L, x);
    }
    return Dn;
  }
  var oo = Pv(!0), Vv = Pv(!1), hs = {}, ti = at(hs), ms = at(hs), so = at(hs);
  function ou(n) {
    if (n === hs)
      throw Error(w(174));
    return n;
  }
  function wd(n, r) {
    switch (Bt(so, r), Bt(ms, n), Bt(ti, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Ut(ti), Bt(ti, r);
  }
  function Ol() {
    Ut(ti), Ut(ms), Ut(so);
  }
  function Fe(n) {
    ou(so.current);
    var r = ou(ti.current), l = pn(r, n.type);
    r !== l && (Bt(ms, n), Bt(ti, l));
  }
  function pt(n) {
    ms.current === n && (Ut(ti), Ut(ms));
  }
  var He = at(0);
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
  function wc() {
    for (var n = 0; n < za.length; n++)
      za[n]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var bc = vt.ReactCurrentDispatcher, bd = vt.ReactCurrentBatchConfig, su = 0, un = null, $ = null, Ct = null, Ve = !1, yi = !1, ga = 0, cu = 0;
  function on() {
    throw Error(w(321));
  }
  function fu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ka(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ll(n, r, l, o, c, d) {
    if (su = d, un = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bc.current = n === null || n.memoizedState === null ? cy : fy, n = l(o, c), yi) {
      d = 0;
      do {
        if (yi = !1, ga = 0, 25 <= d)
          throw Error(w(301));
        d += 1, Ct = $ = null, r.updateQueue = null, bc.current = kd, n = l(o, c);
      } while (yi);
    }
    if (bc.current = Bc, r = $ !== null && $.next !== null, su = 0, Ct = $ = un = null, Ve = !1, r)
      throw Error(w(300));
    return n;
  }
  function du() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function Ua() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ct === null ? un.memoizedState = Ct = n : Ct = Ct.next = n, Ct;
  }
  function ta() {
    if ($ === null) {
      var n = un.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = $.next;
    var r = Ct === null ? un.memoizedState : Ct.next;
    if (r !== null)
      Ct = r, $ = n;
    else {
      if (n === null)
        throw Error(w(310));
      $ = n, n = { memoizedState: $.memoizedState, baseState: $.baseState, baseQueue: $.baseQueue, queue: $.queue, next: null }, Ct === null ? un.memoizedState = Ct = n : Ct = Ct.next = n;
    }
    return Ct;
  }
  function pu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ys(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = $, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, _ = null, j = d;
      do {
        var G = j.lane;
        if ((su & G) === G)
          _ !== null && (_ = _.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), o = j.hasEagerState ? j.eagerState : n(o, j.action);
        else {
          var X = {
            lane: G,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          _ === null ? (E = _ = X, m = o) : _ = _.next = X, un.lanes |= G, Ii |= G;
        }
        j = j.next;
      } while (j !== null && j !== d);
      _ === null ? m = o : _.next = E, ka(o, r.memoizedState) || (Mn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = _, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, un.lanes |= d, Ii |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function gs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ka(d, r.memoizedState) || (Mn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function xc() {
  }
  function kc(n, r) {
    var l = un, o = ta(), c = r(), d = !ka(o.memoizedState, c);
    if (d && (o.memoizedState = c, Mn = !0), o = o.queue, Ss(Lc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ct !== null && Ct.memoizedState.tag & 1) {
      if (l.flags |= 2048, vu(9, Oc.bind(null, l, o, c, r), void 0, null), gn === null)
        throw Error(w(349));
      su & 30 || Dc(l, r, c);
    }
    return c;
  }
  function Dc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Oc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Nc(r) && Mc(n);
  }
  function Lc(n, r, l) {
    return l(function() {
      Nc(r) && Mc(n);
    });
  }
  function Nc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ka(n, l);
    } catch {
      return !0;
    }
  }
  function Mc(n) {
    var r = Pi(n, 1);
    r !== null && Rr(r, n, 1, -1);
  }
  function zc(n) {
    var r = Ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vc.bind(null, un, n), [r.memoizedState, n];
  }
  function vu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Uc() {
    return ta().memoizedState;
  }
  function hu(n, r, l, o) {
    var c = Ua();
    un.flags |= n, c.memoizedState = vu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Bi(n, r, l, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if ($ !== null) {
      var m = $.memoizedState;
      if (d = m.destroy, o !== null && fu(o, m.deps)) {
        c.memoizedState = vu(r, l, d, o);
        return;
      }
    }
    un.flags |= n, c.memoizedState = vu(1 | r, l, d, o);
  }
  function Ac(n, r) {
    return hu(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return Bi(2048, 8, n, r);
  }
  function Fc(n, r) {
    return Bi(4, 2, n, r);
  }
  function jc(n, r) {
    return Bi(4, 4, n, r);
  }
  function xd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function co(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Bi(4, 4, xd.bind(null, r, n), l);
  }
  function Hc() {
  }
  function fo(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Nl(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function na(n, r, l) {
    return su & 21 ? (ka(l, r) || (l = Yu(), un.lanes |= l, Ii |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Mn = !0), n.memoizedState = l);
  }
  function sy(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = bd.transition;
    bd.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, bd.transition = o;
    }
  }
  function Jt() {
    return ta().memoizedState;
  }
  function Pc(n, r, l) {
    var o = zn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, po(n))
      Es(r, l);
    else if (l = zv(n, r, l, o), l !== null) {
      var c = Cr();
      Rr(l, n, o, c), Bv(l, r, o);
    }
  }
  function Vc(n, r, l) {
    var o = zn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (po(n))
      Es(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ka(E, m)) {
            var _ = r.interleaved;
            _ === null ? (c.next = c, Cd(r)) : (c.next = _.next, _.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = zv(n, r, c, o), l !== null && (c = Cr(), Rr(l, n, o, c), Bv(l, r, o));
    }
  }
  function po(n) {
    var r = n.alternate;
    return n === un || r !== null && r === un;
  }
  function Es(n, r) {
    yi = Ve = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Bv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  var Bc = { readContext: kn, useCallback: on, useContext: on, useEffect: on, useImperativeHandle: on, useInsertionEffect: on, useLayoutEffect: on, useMemo: on, useReducer: on, useRef: on, useState: on, useDebugValue: on, useDeferredValue: on, useTransition: on, useMutableSource: on, useSyncExternalStore: on, useId: on, unstable_isNewReconciler: !1 }, cy = { readContext: kn, useCallback: function(n, r) {
    return Ua().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: kn, useEffect: Ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hu(
      4194308,
      4,
      xd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return hu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return hu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ua();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ua();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Pc.bind(null, un, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ua();
    return n = { current: n }, r.memoizedState = n;
  }, useState: zc, useDebugValue: Hc, useDeferredValue: function(n) {
    return Ua().memoizedState = n;
  }, useTransition: function() {
    var n = zc(!1), r = n[0];
    return n = sy.bind(null, n[1]), Ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = un, c = Ua();
    if (ln) {
      if (l === void 0)
        throw Error(w(407));
      l = l();
    } else {
      if (l = r(), gn === null)
        throw Error(w(349));
      su & 30 || Dc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ac(Lc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, vu(9, Oc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ua(), r = gn.identifierPrefix;
    if (ln) {
      var l = Hi, o = nr;
      l = (o & ~(1 << 32 - xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ga++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = cu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, fy = {
    readContext: kn,
    useCallback: fo,
    useContext: kn,
    useEffect: Ss,
    useImperativeHandle: co,
    useInsertionEffect: Fc,
    useLayoutEffect: jc,
    useMemo: Nl,
    useReducer: ys,
    useRef: Uc,
    useState: function() {
      return ys(pu);
    },
    useDebugValue: Hc,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, $.memoizedState, n);
    },
    useTransition: function() {
      var n = ys(pu)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: xc,
    useSyncExternalStore: kc,
    useId: Jt,
    unstable_isNewReconciler: !1
  }, kd = { readContext: kn, useCallback: fo, useContext: kn, useEffect: Ss, useImperativeHandle: co, useInsertionEffect: Fc, useLayoutEffect: jc, useMemo: Nl, useReducer: gs, useRef: Uc, useState: function() {
    return gs(pu);
  }, useDebugValue: Hc, useDeferredValue: function(n) {
    var r = ta();
    return $ === null ? r.memoizedState = n : na(r, $.memoizedState, n);
  }, useTransition: function() {
    var n = gs(pu)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: xc, useSyncExternalStore: kc, useId: Jt, unstable_isNewReconciler: !1 };
  function vo(n, r) {
    try {
      var l = "", o = r;
      do
        l += St(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Cs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function $c(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var dy = typeof WeakMap == "function" ? WeakMap : Map;
  function $v(n, r, l) {
    l = Vi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Xc || (Xc = !0, Eu = o), $c(n, r);
    }, l;
  }
  function Rs(n, r, l) {
    l = Vi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        $c(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      $c(n, r), typeof o != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Yv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new dy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Sy.bind(null, n, r, l), r.then(n, n));
  }
  function Dd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Od(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Vi(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n);
  }
  var py = vt.ReactCurrentOwner, Mn = !1;
  function Hn(n, r, l, o) {
    r.child = n === null ? Vv(r, null, l, o) : oo(r, n.child, l, o);
  }
  function Ml(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return le(r, c), o = Ll(n, r, l, o, d, c), l = du(), n !== null && !Mn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (ln && l && hc(r), r.flags |= 1, Hn(n, r, o, c), r.child);
  }
  function Yc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = nf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : rs, l(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref)
        if (Mn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Mn = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return ho(n, r, l, o, c);
  }
  function mu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Bt(Co, Sa), Sa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Bt(Co, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Bt(Co, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Bt(Co, Sa), Sa |= o;
    return Hn(n, r, c, l), r.child;
  }
  function it(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ho(n, r, l, o, c) {
    var d = cn(l) ? Xr : Ie.current;
    return d = Oa(r, d), le(r, c), l = Ll(n, r, l, o, d, c), o = du(), n !== null && !Mn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (ln && o && hc(r), r.flags |= 1, Hn(n, r, l, c), r.child);
  }
  function Ld(n, r, l, o, c) {
    if (cn(l)) {
      var d = !0;
      vc(r);
    } else
      d = !1;
    if (le(r, c), r.stateNode === null)
      gr(n, r), Fv(r, l, o), Tc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var _ = m.context, j = l.contextType;
      typeof j == "object" && j !== null ? j = kn(j) : (j = cn(l) ? Xr : Ie.current, j = Oa(r, j));
      var G = l.getDerivedStateFromProps, X = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || _ !== j) && jv(r, m, o, j), xl = !1;
      var W = r.memoizedState;
      m.state = W, Dl(r, o, m, c), _ = r.memoizedState, E !== o || W !== _ || Rn.current || xl ? (typeof G == "function" && (_d(r, l, G, o), _ = r.memoizedState), (E = xl || Av(r, l, E, o, W, _, j)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = _), m.props = o, m.state = _, m.context = j, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, jn(n, r), E = r.memoizedProps, j = r.type === r.elementType ? E : ya(r.type, E), m.props = j, X = r.pendingProps, W = m.context, _ = l.contextType, typeof _ == "object" && _ !== null ? _ = kn(_) : (_ = cn(l) ? Xr : Ie.current, _ = Oa(r, _));
      var ve = l.getDerivedStateFromProps;
      (G = typeof ve == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || W !== _) && jv(r, m, o, _), xl = !1, W = r.memoizedState, m.state = W, Dl(r, o, m, c);
      var Ce = r.memoizedState;
      E !== X || W !== Ce || Rn.current || xl ? (typeof ve == "function" && (_d(r, l, ve, o), Ce = r.memoizedState), (j = xl || Av(r, l, j, o, W, Ce, _) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ce, _), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ce, _)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ce), m.props = o, m.state = Ce, m.context = _, o = j) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Iv(n, r, l, o, d, c);
  }
  function Iv(n, r, l, o, c, d) {
    it(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Ov(r, l, !1), ar(n, r, d);
    o = r.stateNode, py.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = oo(r, n.child, null, d), r.child = oo(r, null, E, d)) : Hn(n, r, E, d), r.memoizedState = o.state, c && Ov(r, l, !0), r.child;
  }
  function Qv(n) {
    var r = n.stateNode;
    r.pendingContext ? Tl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tl(n, r.context, !1), wd(n, r.containerInfo);
  }
  function Ic(n, r, l, o, c) {
    return mn(), gd(c), r.flags |= 256, Hn(n, r, l, o), r.child;
  }
  var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Nd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Md(n, r, l) {
    var o = r.pendingProps, c = He.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Bt(He, c & 1), n === null)
      return yc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ns(m, o, 0, null), n = wu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Nd(l), r.memoizedState = yu, n) : zd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return vy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var _ = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = _, r.deletions = null) : (o = Fl(c, _), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = wu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Nd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = yu, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function zd(n, r) {
    return r = Ns({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function mo(n, r, l, o) {
    return o !== null && gd(o), oo(r, n.child, null, l), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function vy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Cs(Error(w(422))), mo(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ns({ mode: "visible", children: o.children }, c, 0, null), d = wu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && oo(r, n.child, null, m), r.child.memoizedState = Nd(m), r.memoizedState = yu, d);
    if (!(r.mode & 1))
      return mo(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(w(419)), o = Cs(d, o, void 0), mo(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Mn || E) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Pi(n, c), Rr(o, n, c, -1));
      }
      return Qd(), o = Cs(Error(w(421))), mo(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ey.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), ma = r, ln = !0, Ma = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = Hi, Jr[yr++] = Na, nr = n.id, Hi = n.overflow, Na = r), r = zd(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qn(n.return, r, l);
  }
  function Qc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ad(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Hn(n, r, o.children, l), o = He.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Ud(n, l, r);
            else if (n.tag === 19)
              Ud(n, l, r);
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
    if (Bt(He, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Qc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Qc(r, !0, l, null, d);
          break;
        case "together":
          Qc(r, !1, null, null, void 0);
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
    if (n !== null && (r.dependencies = n.dependencies), Ii |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function $i(n, r, l) {
    switch (r.tag) {
      case 3:
        Qv(r), mn();
        break;
      case 5:
        Fe(r);
        break;
      case 1:
        cn(r.type) && vc(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Bt(mi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Bt(He, He.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Md(n, r, l) : (Bt(He, He.current & 1), n = ar(n, r, l), n !== null ? n.sibling : null);
        Bt(He, He.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Ad(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Bt(He, He.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mu(n, r, l);
    }
    return ar(n, r, l);
  }
  var Ts, gu, Aa, Pn;
  Ts = function(n, r) {
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
  }, gu = function() {
  }, Aa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ou(ti.current);
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
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = pc);
      }
      xn(l, o);
      var m;
      l = null;
      for (j in c)
        if (!o.hasOwnProperty(j) && c.hasOwnProperty(j) && c[j] != null)
          if (j === "style") {
            var E = c[j];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (q.hasOwnProperty(j) ? d || (d = []) : (d = d || []).push(j, null));
      for (j in o) {
        var _ = o[j];
        if (E = c != null ? c[j] : void 0, o.hasOwnProperty(j) && _ !== E && (_ != null || E != null))
          if (j === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || _ && _.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in _)
                _.hasOwnProperty(m) && E[m] !== _[m] && (l || (l = {}), l[m] = _[m]);
            } else
              l || (d || (d = []), d.push(
                j,
                l
              )), l = _;
          else
            j === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, E = E ? E.__html : void 0, _ != null && E !== _ && (d = d || []).push(j, _)) : j === "children" ? typeof _ != "string" && typeof _ != "number" || (d = d || []).push(j, "" + _) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (q.hasOwnProperty(j) ? (_ != null && j === "onScroll" && Zt("scroll", n), d || E === _ || (d = [])) : (d = d || []).push(j, _));
      }
      l && (d = d || []).push("style", l);
      var j = d;
      (r.updateQueue = j) && (r.flags |= 4);
    }
  }, Pn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
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
  function hy(n, r, l) {
    var o = r.pendingProps;
    switch (md(r), r.tag) {
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
        return o = r.stateNode, Ol(), Ut(Rn), Ut(Ie), wc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (gc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Ls(Ma), Ma = null))), gu(n, r), Sr(r), null;
      case 5:
        pt(r);
        var c = ou(so.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Aa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(w(166));
            return Sr(r), null;
          }
          if (n = ou(ti.current), gc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[vi] = r, o[iu] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < us.length; c++)
                  Zt(us[c], o);
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
            xn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && dc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && dc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : q.hasOwnProperty(m) && E != null && m === "onScroll" && Zt("scroll", o);
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
                typeof d.onClick == "function" && (o.onclick = pc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[vi] = r, n[iu] = o, Ts(n, r, !1, !1), r.stateNode = n;
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
                  for (c = 0; c < us.length; c++)
                    Zt(us[c], n);
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
              xn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var _ = E[d];
                  d === "style" ? zt(n, _) : d === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && li(n, _)) : d === "children" ? typeof _ == "string" ? (l !== "textarea" || _ !== "") && ca(n, _) : typeof _ == "number" && ca(n, "" + _) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (q.hasOwnProperty(d) ? _ != null && d === "onScroll" && Zt("scroll", n) : _ != null && Ke(n, d, _, m));
                }
              switch (l) {
                case "input":
                  pr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ut(o.value));
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
                  typeof c.onClick == "function" && (n.onclick = pc);
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
          Pn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(w(166));
          if (l = ou(so.current), ou(ti.current), gc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[vi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  dc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && dc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[vi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (Ut(He), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ln && ea !== null && r.mode & 1 && !(r.flags & 128))
            Mv(), mn(), r.flags |= 98560, d = !1;
          else if (d = gc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(w(317));
              d[vi] = r;
            } else
              mn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            Ma !== null && (Ls(Ma), Ma = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || He.current & 1 ? Bn === 0 && (Bn = 3) : Qd())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return Ol(), gu(n, r), n === null && ao(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return bl(r.type._context), Sr(r), null;
      case 17:
        return cn(r.type) && La(), Sr(r), null;
      case 19:
        if (Ut(He), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            _s(d, !1);
          else {
            if (Bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Bt(He, He.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && bt() > To && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln)
                return Sr(r), null;
            } else
              2 * bt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = bt(), r.sibling = null, l = He.current, Bt(He, o ? l & 1 | 2 : l & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return Id(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function Fd(n, r) {
    switch (md(r), r.tag) {
      case 1:
        return cn(r.type) && La(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ol(), Ut(Rn), Ut(Ie), wc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return pt(r), null;
      case 13:
        if (Ut(He), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(w(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(He), null;
      case 4:
        return Ol(), null;
      case 10:
        return bl(r.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ws = !1, Vn = !1, Wv = typeof WeakSet == "function" ? WeakSet : Set, Se = null;
  function yo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          _n(n, r, o);
        }
      else
        l.current = null;
  }
  function bs(n, r, l) {
    try {
      l();
    } catch (o) {
      _n(n, r, o);
    }
  }
  var Gv = !1;
  function qv(n, r) {
    if (od = xa, n = uc(), Ui(n)) {
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
            var m = 0, E = -1, _ = -1, j = 0, G = 0, X = n, W = null;
            t:
              for (; ; ) {
                for (var ve; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (_ = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (ve = X.firstChild) !== null; )
                  W = X, X = ve;
                for (; ; ) {
                  if (X === n)
                    break t;
                  if (W === l && ++j === c && (E = m), W === d && ++G === o && (_ = m), (ve = X.nextSibling) !== null)
                    break;
                  X = W, W = X.parentNode;
                }
                X = ve;
              }
            l = E === -1 || _ === -1 ? null : { start: E, end: _ };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (ru = { focusedElem: n, selectionRange: l }, xa = !1, Se = r; Se !== null; )
      if (r = Se, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Se = n;
      else
        for (; Se !== null; ) {
          r = Se;
          try {
            var Ce = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ce !== null) {
                    var we = Ce.memoizedProps, Dn = Ce.memoizedState, L = r.stateNode, x = L.getSnapshotBeforeUpdate(r.elementType === r.type ? we : ya(r.type, we), Dn);
                    L.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var z = r.stateNode.containerInfo;
                  z.nodeType === 1 ? z.textContent = "" : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(w(163));
              }
          } catch (te) {
            _n(r, r.return, te);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Se = n;
            break;
          }
          Se = r.return;
        }
    return Ce = Gv, Gv = !1, Ce;
  }
  function xs(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && bs(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function ks(n, r) {
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
  function jd(n) {
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
  function Hd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[vi], delete r[iu], delete r[fd], delete r[oy], delete r[dd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Xv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Wc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Xv(n.return))
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
  function go(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = pc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (go(n, r, l), n = n.sibling; n !== null; )
        go(n, r, l), n = n.sibling;
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
      So(n, r, l), l = l.sibling;
  }
  function So(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(ol, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Vn || yo(l, r);
      case 6:
        var o = fn, c = Xn;
        fn = null, Fa(n, r, l), fn = o, Xn = c, fn !== null && (Xn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (Xn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? El(n.parentNode, l) : n.nodeType === 1 && El(n, l), hl(n)) : El(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = Xn, fn = l.stateNode.containerInfo, Xn = !0, Fa(n, r, l), fn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Vn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && bs(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!Vn && (yo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            _n(l, r, E);
          }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Vn = (o = Vn) || l.memoizedState !== null, Fa(n, r, l), Vn = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Yi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wv()), r.forEach(function(o) {
        var c = Cy.bind(null, n, o);
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
            throw Error(w(160));
          So(d, m, c), fn = null, Xn = !1;
          var _ = c.alternate;
          _ !== null && (_.return = null), c.return = null;
        } catch (j) {
          _n(c, r, j);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Kv(r, n), r = r.sibling;
  }
  function Kv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ni(r, n), Si(n), o & 4) {
          try {
            xs(3, n, n.return), ks(3, n);
          } catch (we) {
            _n(n, n.return, we);
          }
          try {
            xs(5, n, n.return);
          } catch (we) {
            _n(n, n.return, we);
          }
        }
        break;
      case 1:
        ni(r, n), Si(n), o & 512 && l !== null && yo(l, l.return);
        break;
      case 5:
        if (ni(r, n), Si(n), o & 512 && l !== null && yo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (we) {
            _n(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, _ = n.updateQueue;
          if (n.updateQueue = null, _ !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Fn(c, d), vn(E, m);
              var j = vn(E, d);
              for (m = 0; m < _.length; m += 2) {
                var G = _[m], X = _[m + 1];
                G === "style" ? zt(c, X) : G === "dangerouslySetInnerHTML" ? li(c, X) : G === "children" ? ca(c, X) : Ke(c, G, X, j);
              }
              switch (E) {
                case "input":
                  bn(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var W = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ve = d.value;
                  ve != null ? vr(c, !!d.multiple, ve, !1) : W !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[iu] = d;
            } catch (we) {
              _n(n, n.return, we);
            }
        }
        break;
      case 6:
        if (ni(r, n), Si(n), o & 4) {
          if (n.stateNode === null)
            throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            _n(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ni(r, n), Si(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            hl(r.containerInfo);
          } catch (we) {
            _n(n, n.return, we);
          }
        break;
      case 4:
        ni(r, n), Si(n);
        break;
      case 13:
        ni(r, n), Si(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = bt())), o & 4 && Yi(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Vn = (j = Vn) || G, ni(r, n), Vn = j) : ni(r, n), Si(n), o & 8192) {
          if (j = n.memoizedState !== null, (n.stateNode.isHidden = j) && !G && n.mode & 1)
            for (Se = n, G = n.child; G !== null; ) {
              for (X = Se = G; Se !== null; ) {
                switch (W = Se, ve = W.child, W.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xs(4, W, W.return);
                    break;
                  case 1:
                    yo(W, W.return);
                    var Ce = W.stateNode;
                    if (typeof Ce.componentWillUnmount == "function") {
                      o = W, l = W.return;
                      try {
                        r = o, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
                      } catch (we) {
                        _n(o, l, we);
                      }
                    }
                    break;
                  case 5:
                    yo(W, W.return);
                    break;
                  case 22:
                    if (W.memoizedState !== null) {
                      Pd(X);
                      continue;
                    }
                }
                ve !== null ? (ve.return = W, Se = ve) : Pd(X);
              }
              G = G.sibling;
            }
          e:
            for (G = null, X = n; ; ) {
              if (X.tag === 5) {
                if (G === null) {
                  G = X;
                  try {
                    c = X.stateNode, j ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, _ = X.memoizedProps.style, m = _ != null && _.hasOwnProperty("display") ? _.display : null, E.style.display = ot("display", m));
                  } catch (we) {
                    _n(n, n.return, we);
                  }
                }
              } else if (X.tag === 6) {
                if (G === null)
                  try {
                    X.stateNode.nodeValue = j ? "" : X.memoizedProps;
                  } catch (we) {
                    _n(n, n.return, we);
                  }
              } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
                X.child.return = X, X = X.child;
                continue;
              }
              if (X === n)
                break e;
              for (; X.sibling === null; ) {
                if (X.return === null || X.return === n)
                  break e;
                G === X && (G = null), X = X.return;
              }
              G === X && (G = null), X.sibling.return = X.return, X = X.sibling;
            }
        }
        break;
      case 19:
        ni(r, n), Si(n), o & 4 && Yi(n);
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
            if (Xv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(w(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Wc(n);
            gi(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Wc(n);
            go(n, E, m);
            break;
          default:
            throw Error(w(161));
        }
      } catch (_) {
        _n(n, n.return, _);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Zv(n, r, l) {
    Se = n, Eo(n);
  }
  function Eo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Se !== null; ) {
      var c = Se, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ws;
        if (!m) {
          var E = c.alternate, _ = E !== null && E.memoizedState !== null || Vn;
          E = ws;
          var j = Vn;
          if (ws = m, (Vn = _) && !j)
            for (Se = c; Se !== null; )
              m = Se, _ = m.child, m.tag === 22 && m.memoizedState !== null ? eh(c) : _ !== null ? (_.return = m, Se = _) : eh(c);
          for (; d !== null; )
            Se = d, Eo(d), d = d.sibling;
          Se = c, ws = E, Vn = j;
        }
        Jv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Se = d) : Jv(n);
    }
  }
  function Jv(n) {
    for (; Se !== null; ) {
      var r = Se;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Vn || ks(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Vn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && uu(r, d, o);
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
                  uu(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var _ = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      _.autoFocus && l.focus();
                      break;
                    case "img":
                      _.src && (l.src = _.src);
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
                  var j = r.alternate;
                  if (j !== null) {
                    var G = j.memoizedState;
                    if (G !== null) {
                      var X = G.dehydrated;
                      X !== null && hl(X);
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
                throw Error(w(163));
            }
          Vn || r.flags & 512 && jd(r);
        } catch (W) {
          _n(r, r.return, W);
        }
      }
      if (r === n) {
        Se = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Se = l;
        break;
      }
      Se = r.return;
    }
  }
  function Pd(n) {
    for (; Se !== null; ) {
      var r = Se;
      if (r === n) {
        Se = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Se = l;
        break;
      }
      Se = r.return;
    }
  }
  function eh(n) {
    for (; Se !== null; ) {
      var r = Se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ks(4, r);
            } catch (_) {
              _n(r, l, _);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (_) {
                _n(r, c, _);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (_) {
              _n(r, d, _);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (_) {
              _n(r, m, _);
            }
        }
      } catch (_) {
        _n(r, r.return, _);
      }
      if (r === n) {
        Se = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Se = E;
        break;
      }
      Se = r.return;
    }
  }
  var Gc = Math.ceil, Ds = vt.ReactCurrentDispatcher, Vd = vt.ReactCurrentOwner, Er = vt.ReactCurrentBatchConfig, mt = 0, gn = null, Tn = null, Kn = 0, Sa = 0, Co = at(0), Bn = 0, Os = null, Ii = 0, qc = 0, Ro = 0, Su = null, Or = null, Bd = 0, To = 1 / 0, Qi = null, Xc = !1, Eu = null, Ei = null, zl = !1, Ul = null, Kc = 0, _o = 0, Zc = null, Cu = -1, Ru = 0;
  function Cr() {
    return mt & 6 ? bt() : Cu !== -1 ? Cu : Cu = bt();
  }
  function zn(n) {
    return n.mode & 1 ? mt & 2 && Kn !== 0 ? Kn & -Kn : Sc.transition !== null ? (Ru === 0 && (Ru = Yu()), Ru) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Zo(n.type)), n) : 1;
  }
  function Rr(n, r, l, o) {
    if (50 < _o)
      throw _o = 0, Zc = null, Error(w(185));
    Oi(n, l, o), (!(mt & 2) || n !== gn) && (n === gn && (!(mt & 2) && (qc |= l), Bn === 4 && ja(n, Kn)), Tr(n, o), l === 1 && mt === 0 && !(r.mode & 1) && (To = bt() + 500, Gn && Kr()));
  }
  function Tr(n, r) {
    var l = n.callbackNode;
    fl(n, r);
    var o = kr(n, n === gn ? Kn : 0);
    if (o === 0)
      l !== null && tr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tr(l), r === 1)
        n.tag === 0 ? vd(th.bind(null, n)) : pd(th.bind(null, n)), cd(function() {
          !(mt & 6) && Kr();
        }), l = null;
      else {
        switch (Qu(o)) {
          case 1:
            l = Ga;
            break;
          case 4:
            l = ft;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = Bu;
            break;
          default:
            l = fi;
        }
        l = Gd(l, wo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function wo(n, r) {
    if (Cu = -1, Ru = 0, mt & 6)
      throw Error(w(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l)
      return null;
    var o = kr(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = ef(n, o);
    else {
      r = o;
      var c = mt;
      mt |= 2;
      var d = Jc();
      (gn !== n || Kn !== r) && (Qi = null, To = bt() + 500, Tu(n, r));
      do
        try {
          yy();
          break;
        } catch (E) {
          nh(n, E);
        }
      while (1);
      Ed(), Ds.current = d, mt = c, Tn !== null ? r = 0 : (gn = null, Kn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = dl(n), c !== 0 && (o = c, r = $d(n, c))), r === 1)
        throw l = Os, Tu(n, 0), ja(n, o), Tr(n, bt()), l;
      if (r === 6)
        ja(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Yd(c) && (r = ef(n, o), r === 2 && (d = dl(n), d !== 0 && (o = d, r = $d(n, d))), r === 1))
          throw l = Os, Tu(n, 0), ja(n, o), Tr(n, bt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            _u(n, Or, Qi);
            break;
          case 3:
            if (ja(n, o), (o & 130023424) === o && (r = Bd + 500 - bt(), 10 < r)) {
              if (kr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = au(_u.bind(null, n, Or, Qi), r);
              break;
            }
            _u(n, Or, Qi);
            break;
          case 4:
            if (ja(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - xr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Gc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = au(_u.bind(null, n, Or, Qi), o);
              break;
            }
            _u(n, Or, Qi);
            break;
          case 5:
            _u(n, Or, Qi);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return Tr(n, bt()), n.callbackNode === l ? wo.bind(null, n) : null;
  }
  function $d(n, r) {
    var l = Su;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = ef(n, r), n !== 2 && (r = Or, Or = l, r !== null && Ls(r)), n;
  }
  function Ls(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function Yd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ka(d(), c))
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
    for (r &= ~Ro, r &= ~qc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function th(n) {
    if (mt & 6)
      throw Error(w(327));
    xo();
    var r = kr(n, 0);
    if (!(r & 1))
      return Tr(n, bt()), null;
    var l = ef(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = dl(n);
      o !== 0 && (r = o, l = $d(n, o));
    }
    if (l === 1)
      throw l = Os, Tu(n, 0), ja(n, r), Tr(n, bt()), l;
    if (l === 6)
      throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, _u(n, Or, Qi), Tr(n, bt()), null;
  }
  function bo(n, r) {
    var l = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = l, mt === 0 && (To = bt() + 500, Gn && Kr());
    }
  }
  function Al(n) {
    Ul !== null && Ul.tag === 0 && !(mt & 6) && xo();
    var r = mt;
    mt |= 1;
    var l = Er.transition, o = Lt;
    try {
      if (Er.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, Er.transition = l, mt = r, !(mt & 6) && Kr();
    }
  }
  function Id() {
    Sa = Co.current, Ut(Co);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), Tn !== null)
      for (l = Tn.return; l !== null; ) {
        var o = l;
        switch (md(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && La();
            break;
          case 3:
            Ol(), Ut(Rn), Ut(Ie), wc();
            break;
          case 5:
            pt(o);
            break;
          case 4:
            Ol();
            break;
          case 13:
            Ut(He);
            break;
          case 19:
            Ut(He);
            break;
          case 10:
            bl(o.type._context);
            break;
          case 22:
          case 23:
            Id();
        }
        l = l.return;
      }
    if (gn = n, Tn = n = Fl(n.current, null), Kn = Sa = r, Bn = 0, Os = null, Ro = qc = Ii = 0, Or = Su = null, rr !== null) {
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
  function nh(n, r) {
    do {
      var l = Tn;
      try {
        if (Ed(), bc.current = Bc, Ve) {
          for (var o = un.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ve = !1;
        }
        if (su = 0, Ct = $ = un = null, yi = !1, ga = 0, Vd.current = null, l === null || l.return === null) {
          Bn = 1, Os = r, Tn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, _ = r;
          if (r = Kn, E.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var j = _, G = E, X = G.tag;
            if (!(G.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var ve = Dd(m);
            if (ve !== null) {
              ve.flags &= -257, Od(ve, m, E, d, r), ve.mode & 1 && Yv(d, j, r), r = ve, _ = j;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(_), r.updateQueue = we;
              } else
                Ce.add(_);
              break e;
            } else {
              if (!(r & 1)) {
                Yv(d, j, r), Qd();
                break e;
              }
              _ = Error(w(426));
            }
          } else if (ln && E.mode & 1) {
            var Dn = Dd(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Od(Dn, m, E, d, r), gd(vo(_, E));
              break e;
            }
          }
          d = _ = vo(_, E), Bn !== 4 && (Bn = 2), Su === null ? Su = [d] : Su.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = $v(d, _, r);
                Td(d, L);
                break e;
              case 1:
                E = _;
                var x = d.type, z = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Ei === null || !Ei.has(z)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var te = Rs(d, E, r);
                  Td(d, te);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Wd(l);
      } catch (be) {
        r = be, Tn === l && l !== null && (Tn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jc() {
    var n = Ds.current;
    return Ds.current = Bc, n === null ? Bc : n;
  }
  function Qd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), gn === null || !(Ii & 268435455) && !(qc & 268435455) || ja(gn, Kn);
  }
  function ef(n, r) {
    var l = mt;
    mt |= 2;
    var o = Jc();
    (gn !== n || Kn !== r) && (Qi = null, Tu(n, r));
    do
      try {
        my();
        break;
      } catch (c) {
        nh(n, c);
      }
    while (1);
    if (Ed(), mt = l, Ds.current = o, Tn !== null)
      throw Error(w(261));
    return gn = null, Kn = 0, Bn;
  }
  function my() {
    for (; Tn !== null; )
      rh(Tn);
  }
  function yy() {
    for (; Tn !== null && !ci(); )
      rh(Tn);
  }
  function rh(n) {
    var r = ih(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Wd(n) : Tn = r, Vd.current = null;
  }
  function Wd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Fd(l, r), l !== null) {
          l.flags &= 32767, Tn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, Tn = null;
          return;
        }
      } else if (l = hy(l, r, Sa), l !== null) {
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
  function _u(n, r, l) {
    var o = Lt, c = Er.transition;
    try {
      Er.transition = null, Lt = 1, gy(n, r, l, o);
    } finally {
      Er.transition = c, Lt = o;
    }
    return null;
  }
  function gy(n, r, l, o) {
    do
      xo();
    while (Ul !== null);
    if (mt & 6)
      throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($f(n, d), n === gn && (Tn = gn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zl || (zl = !0, Gd(fi, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Er.transition, Er.transition = null;
      var m = Lt;
      Lt = 1;
      var E = mt;
      mt |= 4, Vd.current = null, qv(n, l), Kv(l, n), oc(ru), xa = !!od, ru = od = null, n.current = l, Zv(l), Vu(), mt = E, Lt = m, Er.transition = d;
    } else
      n.current = l;
    if (zl && (zl = !1, Ul = n, Kc = c), d = n.pendingLanes, d === 0 && (Ei = null), qo(l.stateNode), Tr(n, bt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Xc)
      throw Xc = !1, n = Eu, Eu = null, n;
    return Kc & 1 && n.tag !== 0 && xo(), d = n.pendingLanes, d & 1 ? n === Zc ? _o++ : (_o = 0, Zc = n) : _o = 0, Kr(), null;
  }
  function xo() {
    if (Ul !== null) {
      var n = Qu(Kc), r = Er.transition, l = Lt;
      try {
        if (Er.transition = null, Lt = 16 > n ? 16 : n, Ul === null)
          var o = !1;
        else {
          if (n = Ul, Ul = null, Kc = 0, mt & 6)
            throw Error(w(331));
          var c = mt;
          for (mt |= 4, Se = n.current; Se !== null; ) {
            var d = Se, m = d.child;
            if (Se.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var _ = 0; _ < E.length; _++) {
                  var j = E[_];
                  for (Se = j; Se !== null; ) {
                    var G = Se;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xs(8, G, d);
                    }
                    var X = G.child;
                    if (X !== null)
                      X.return = G, Se = X;
                    else
                      for (; Se !== null; ) {
                        G = Se;
                        var W = G.sibling, ve = G.return;
                        if (Hd(G), G === j) {
                          Se = null;
                          break;
                        }
                        if (W !== null) {
                          W.return = ve, Se = W;
                          break;
                        }
                        Se = ve;
                      }
                  }
                }
                var Ce = d.alternate;
                if (Ce !== null) {
                  var we = Ce.child;
                  if (we !== null) {
                    Ce.child = null;
                    do {
                      var Dn = we.sibling;
                      we.sibling = null, we = Dn;
                    } while (we !== null);
                  }
                }
                Se = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, Se = m;
            else
              e:
                for (; Se !== null; ) {
                  if (d = Se, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xs(9, d, d.return);
                    }
                  var L = d.sibling;
                  if (L !== null) {
                    L.return = d.return, Se = L;
                    break e;
                  }
                  Se = d.return;
                }
          }
          var x = n.current;
          for (Se = x; Se !== null; ) {
            m = Se;
            var z = m.child;
            if (m.subtreeFlags & 2064 && z !== null)
              z.return = m, Se = z;
            else
              e:
                for (m = x; Se !== null; ) {
                  if (E = Se, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ks(9, E);
                      }
                    } catch (be) {
                      _n(E, E.return, be);
                    }
                  if (E === m) {
                    Se = null;
                    break e;
                  }
                  var te = E.sibling;
                  if (te !== null) {
                    te.return = E.return, Se = te;
                    break e;
                  }
                  Se = E.return;
                }
          }
          if (mt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(ol, n);
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
  function ah(n, r, l) {
    r = vo(l, r), r = $v(n, r, 1), n = kl(n, r, 1), r = Cr(), n !== null && (Oi(n, 1, r), Tr(n, r));
  }
  function _n(n, r, l) {
    if (n.tag === 3)
      ah(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ah(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ei === null || !Ei.has(o))) {
            n = vo(l, n), n = Rs(r, n, 1), r = kl(r, n, 1), n = Cr(), r !== null && (Oi(r, 1, n), Tr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, gn === n && (Kn & l) === l && (Bn === 4 || Bn === 3 && (Kn & 130023424) === Kn && 500 > bt() - Bd ? Tu(n, 0) : Ro |= l), Tr(n, r);
  }
  function tf(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = Cr();
    n = Pi(n, r), n !== null && (Oi(n, r, l), Tr(n, l));
  }
  function Ey(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), tf(n, l);
  }
  function Cy(n, r) {
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
        throw Error(w(314));
    }
    o !== null && o.delete(r), tf(n, l);
  }
  var ih;
  ih = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        Mn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Mn = !1, $i(n, r, l);
        Mn = !!(n.flags & 131072);
      }
    else
      Mn = !1, ln && r.flags & 1048576 && hd(r, lo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = Oa(r, Ie.current);
        le(r, l), c = Ll(null, r, o, n, c, l);
        var d = du();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, cn(o) ? (d = !0, vc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rd(r), c.updater = Rc, r.stateNode = c, c._reactInternals = r, Tc(r, o, n, l), r = Iv(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && hc(r), Hn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ty(o), n = ya(o, n), c) {
            case 0:
              r = ho(null, r, o, n, l);
              break e;
            case 1:
              r = Ld(null, r, o, n, l);
              break e;
            case 11:
              r = Ml(null, r, o, n, l);
              break e;
            case 14:
              r = Yc(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(w(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), ho(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Ld(n, r, o, c, l);
      case 3:
        e: {
          if (Qv(r), n === null)
            throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jn(n, r), Dl(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = vo(Error(w(423)), r), r = Ic(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = vo(Error(w(424)), r), r = Ic(n, r, o, l, c);
              break e;
            } else
              for (ea = ei(r.stateNode.containerInfo.firstChild), ma = r, ln = !0, Ma = null, l = Vv(r, null, o, l), r.child = l; l; )
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
        return Fe(r), n === null && yc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, cs(o, c) ? m = null : d !== null && cs(o, d) && (r.flags |= 32), it(n, r), Hn(n, r, m, l), r.child;
      case 6:
        return n === null && yc(r), null;
      case 13:
        return Md(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = oo(r, null, o, l) : Hn(n, r, o, l), r.child;
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
            if (ka(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = ar(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var _ = E.firstContext; _ !== null; ) {
                    if (_.context === o) {
                      if (d.tag === 1) {
                        _ = Vi(-1, l & -l), _.tag = 2;
                        var j = d.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var G = j.pending;
                          G === null ? _.next = _ : (_.next = G.next, G.next = _), j.pending = _;
                        }
                      }
                      d.lanes |= l, _ = d.alternate, _ !== null && (_.lanes |= l), qn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    _ = _.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(w(341));
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
        return c = r.type, o = r.pendingProps.children, le(r, l), c = kn(c), o = o(c), r.flags |= 1, Hn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Yc(n, r, o, c, l);
      case 15:
        return ra(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, cn(o) ? (n = !0, vc(r)) : n = !1, le(r, l), Fv(r, o, c), Tc(r, o, c, l), Iv(null, r, o, !0, n, l);
      case 19:
        return Ad(n, r, l);
      case 22:
        return mu(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function Gd(n, r) {
    return tn(n, r);
  }
  function Ry(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new Ry(n, r, l, o);
  }
  function qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ty(n) {
    if (typeof n == "function")
      return qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === At)
        return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function nf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      qd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case $e:
            return wu(l.children, c, d, r);
          case rn:
            m = 8, c |= 8;
            break;
          case wn:
            return n = Ha(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
          case Pe:
            return n = Ha(13, l, r, c), n.elementType = Pe, n.lanes = d, n;
          case nt:
            return n = Ha(19, l, r, c), n.elementType = nt, n.lanes = d, n;
          case Ee:
            return Ns(l, c, d, r);
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
                case wt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(w(130, n == null ? n : typeof n, ""));
        }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function wu(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function Ns(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ms(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function bu(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function _y(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Iu(0), this.expirationTimes = Iu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Iu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function rf(n, r, l, o, c, d, m, E, _) {
    return n = new _y(n, r, l, E, _), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rd(d), n;
  }
  function lh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ct, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Xd(n) {
    if (!n)
      return hi;
    n = n._reactInternals;
    e: {
      if (tt(n) !== n || n.tag !== 1)
        throw Error(w(170));
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
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (cn(l))
        return ps(n, l, r);
    }
    return r;
  }
  function uh(n, r, l, o, c, d, m, E, _) {
    return n = rf(l, o, !0, n, c, d, m, E, _), n.context = Xd(null), l = n.current, o = Cr(), c = zn(l), d = Vi(o, c), d.callback = r ?? null, kl(l, d, c), n.current.lanes = c, Oi(n, c, o), Tr(n, o), n;
  }
  function zs(n, r, l, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return l = Xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Vi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = kl(c, r, m), n !== null && (Rr(n, c, m, d), Cc(n, c, m)), m;
  }
  function af(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function oh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Kd(n, r) {
    oh(n, r), (n = n.alternate) && oh(n, r);
  }
  function sh() {
    return null;
  }
  var Zd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function lf(n) {
    this._internalRoot = n;
  }
  Wi.prototype.render = lf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(w(409));
    zs(n, r, null, null);
  }, Wi.prototype.unmount = lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Al(function() {
        zs(null, n, null, null);
      }), r[ji] = null;
    }
  };
  function Wi(n) {
    this._internalRoot = n;
  }
  Wi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Gu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Vt.length && r !== 0 && r < Vt[l].priority; l++)
        ;
      Vt.splice(l, 0, n), l === 0 && tc(n);
    }
  };
  function Jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function uf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ch() {
  }
  function wy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var j = af(m);
          d.call(j);
        };
      }
      var m = uh(r, o, n, 0, null, !1, !1, "", ch);
      return n._reactRootContainer = m, n[ji] = m.current, ao(n.nodeType === 8 ? n.parentNode : n), Al(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var j = af(_);
        E.call(j);
      };
    }
    var _ = rf(n, 0, !1, null, null, !1, !1, "", ch);
    return n._reactRootContainer = _, n[ji] = _.current, ao(n.nodeType === 8 ? n.parentNode : n), Al(function() {
      zs(r, _, l, o);
    }), _;
  }
  function of(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var _ = af(m);
          E.call(_);
        };
      }
      zs(r, m, n, c);
    } else
      m = wy(l, r, n, c, o);
    return af(m);
  }
  Xl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qa(r.pendingLanes);
          l !== 0 && (di(r, l | 1), Tr(r, bt()), !(mt & 6) && (To = bt() + 500, Kr()));
        }
        break;
      case 13:
        Al(function() {
          var o = Pi(n, 1);
          if (o !== null) {
            var c = Cr();
            Rr(o, n, 1, c);
          }
        }), Kd(n, 1);
    }
  }, Wu = function(n) {
    if (n.tag === 13) {
      var r = Pi(n, 134217728);
      if (r !== null) {
        var l = Cr();
        Rr(r, n, 134217728, l);
      }
      Kd(n, 134217728);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = zn(n), l = Pi(n, r);
      if (l !== null) {
        var o = Cr();
        Rr(l, n, r, o);
      }
      Kd(n, r);
    }
  }, Gu = function() {
    return Lt;
  }, qu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, wr = function(n, r, l) {
    switch (r) {
      case "input":
        if (bn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Me(o);
              if (!c)
                throw Error(w(90));
              Vr(o), bn(o, c);
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
  }, ql = bo, Pu = Al;
  var by = { usingClientEntryPoint: !1, Events: [ds, io, Me, wa, il, bo] }, ko = { findFiberByHostInstance: Da, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, xy = { bundleType: ko.bundleType, version: ko.version, rendererPackageName: ko.rendererPackageName, rendererConfig: ko.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ko.findFiberByHostInstance || sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sf.isDisabled && sf.supportsFiber)
      try {
        ol = sf.inject(xy), Qr = sf;
      } catch {
      }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(r))
      throw Error(w(200));
    return lh(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!Jd(n))
      throw Error(w(299));
    var l = !1, o = "", c = Zd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = rf(n, 1, !1, null, null, l, !1, o, c), n[ji] = r.current, ao(n.nodeType === 8 ? n.parentNode : n), new lf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Al(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!uf(r))
      throw Error(w(200));
    return of(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!Jd(n))
      throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Zd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = uh(r, null, n, 1, l ?? null, c, !1, d, m), n[ji] = r.current, ao(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Wi(r);
  }, Ia.render = function(n, r, l) {
    if (!uf(r))
      throw Error(w(200));
    return of(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!uf(n))
      throw Error(w(40));
    return n._reactRootContainer ? (Al(function() {
      of(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ji] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = bo, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!uf(l))
      throw Error(w(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(w(38));
    return of(n, r, l, !1, o);
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
var yR;
function Ek() {
  return yR || (yR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var D = Go, O = wR(), w = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = !1;
    function q(e) {
      P = e;
    }
    function Z(e) {
      if (!P) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        _e("warn", e, a);
      }
    }
    function g(e) {
      if (!P) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        _e("error", e, a);
      }
    }
    function _e(e, t, a) {
      {
        var i = w.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var re = 0, oe = 1, Je = 2, J = 3, ce = 4, se = 5, Oe = 6, et = 7, Ge = 8, qt = 9, st = 10, Ke = 11, vt = 12, Le = 13, ct = 14, $e = 15, rn = 16, wn = 17, Qt = 18, Ot = 19, En = 21, Pe = 22, nt = 23, At = 24, wt = 25, Ee = !0, ne = !1, ke = !1, T = !1, I = !1, de = !0, We = !1, Be = !1, St = !0, lt = !0, ht = !0, ut = /* @__PURE__ */ new Set(), Ft = {}, Pr = {};
    function pr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      Ft[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ft[e] = t;
      {
        var a = e.toLowerCase();
        Pr[a] = e, e === "onDoubleClick" && (Pr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
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
        return bn(e), !1;
      } catch {
        return !0;
      }
    }
    function bn(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Fn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), bn(e);
    }
    function $r(e) {
      if (Fn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), bn(e);
    }
    function In(e, t) {
      if (Fn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), bn(e);
    }
    function vr(e, t) {
      if (Fn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), bn(e);
    }
    function Yr(e) {
      if (Fn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), bn(e);
    }
    function hr(e) {
      if (Fn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), bn(e);
    }
    var sa = 0, er = 1, Ir = 2, pn = 3, _r = 4, li = 5, ca = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", De = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ae + "][" + De + "]*$"), zt = {}, jt = {};
    function xn(e) {
      return Yn.call(jt, e) ? !0 : Yn.call(zt, e) ? !1 : ot.test(e) ? (jt[e] = !0, !0) : (zt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
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
          case _r:
            return t === !1;
          case li:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function wr(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function Ht(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === pn || t === _r, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, Wa = [
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
      Pt[e] = new Ht(
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
      Pt[t] = new Ht(
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
      Pt[e] = new Ht(
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
      Pt[e] = new Ht(
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
      Pt[e] = new Ht(
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
      Pt[e] = new Ht(
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
      Pt[e] = new Ht(
        e,
        _r,
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
      Pt[e] = new Ht(
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
      Pt[e] = new Ht(
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
    var wa = /[\-\:]([a-z])/g, il = function(e) {
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
      var t = e.replace(wa, il);
      Pt[t] = new Ht(
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
      var t = e.replace(wa, il);
      Pt[t] = new Ht(
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
      var t = e.replace(wa, il);
      Pt[t] = new Ht(
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
      Pt[e] = new Ht(
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
    var ql = "xlinkHref";
    Pt[ql] = new Ht(
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
      Pt[e] = new Ht(
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
    var Pu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Di = !1;
    function ll(e) {
      !Di && Pu.test(e) && (Di = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && ll("" + a);
        var s = i.attributeName, f = null;
        if (i.type === _r) {
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
        if (!xn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
      var u = wr(t);
      if (!vn(t, u, i)) {
        if (Yt(t, a, u, i) && (a = null), i || u === null) {
          if (xn(t)) {
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
        var y = u.attributeName, S = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var k = u.type, b;
          k === pn || k === _r && a === !0 ? b = "" : (Br(a, y), b = "" + a, u.sanitizeURL && ll(b.toString())), S ? e.setAttributeNS(S, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var oi = Symbol.for("react.element"), br = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ie = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), Et = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.cache"), Vu = Symbol.for("react.tracing_marker"), bt = Symbol.iterator, Bf = "@@iterator";
    function Ga(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = bt && e[bt] || e[Bf];
      return typeof t == "function" ? t : null;
    }
    var ft = Object.assign, fi = 0, ul, Bu, ol, Qr, qo, xr, Xo;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function Js() {
      {
        if (fi === 0) {
          ul = console.log, Bu = console.info, ol = console.warn, Qr = console.error, qo = console.group, xr = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ko,
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
    function $u() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ft({}, e, {
              value: ul
            }),
            info: ft({}, e, {
              value: Bu
            }),
            warn: ft({}, e, {
              value: ol
            }),
            error: ft({}, e, {
              value: Qr
            }),
            group: ft({}, e, {
              value: qo
            }),
            groupCollapsed: ft({}, e, {
              value: xr
            }),
            groupEnd: ft({}, e, {
              value: Xo
            })
          });
        }
        fi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sl = w.ReactCurrentDispatcher, qa;
    function kr(e, t, a) {
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
    var cl = !1, fl;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      fl = new dl();
    }
    function Yu(e, t) {
      if (!e || cl)
        return "";
      {
        var a = fl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      cl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = sl.current, sl.current = null, Js();
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
            } catch (F) {
              i = F;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (F) {
              i = F;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            i = F;
          }
          e();
        }
      } catch (F) {
        if (F && i && typeof F.stack == "string") {
          for (var p = F.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, S = v.length - 1; y >= 1 && S >= 0 && p[y] !== v[S]; )
            S--;
          for (; y >= 1 && S >= 0; y--, S--)
            if (p[y] !== v[S]) {
              if (y !== 1 || S !== 1)
                do
                  if (y--, S--, S < 0 || p[y] !== v[S]) {
                    var k = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && fl.set(e, k), k;
                  }
                while (y >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        cl = !1, sl.current = s, $u(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", U = b ? kr(b) : "";
      return typeof e == "function" && fl.set(e, U), U;
    }
    function Iu(e, t, a) {
      return Yu(e, !0);
    }
    function Oi(e, t, a) {
      return Yu(e, !1);
    }
    function $f(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function di(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Yu(e, $f(e));
      if (typeof e == "string")
        return kr(e);
      switch (e) {
        case tt:
          return kr("Suspense");
        case Et:
          return kr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            return Oi(e.render);
          case rt:
            return di(e.type, t, a);
          case ze: {
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
        case se:
          return kr(e.type);
        case rn:
          return kr("Lazy");
        case Le:
          return kr("Suspense");
        case Ot:
          return kr("SuspenseList");
        case re:
        case Je:
        case $e:
          return Oi(e.type);
        case Ke:
          return Oi(e.type.render);
        case oe:
          return Iu(e.type);
        default:
          return "";
      }
    }
    function Qu(e) {
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
    function Xl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Wu(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case br:
          return "Portal";
        case R:
          return "Profiler";
        case si:
          return "StrictMode";
        case tt:
          return "Suspense";
        case Et:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ie:
            var t = e;
            return Wu(t) + ".Consumer";
          case Q:
            var a = e;
            return Wu(a._context) + ".Provider";
          case me:
            return Xl(e, e.render, "ForwardRef");
          case rt:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case ze: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Gu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function qu(e) {
      return e.displayName || "Context";
    }
    function qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case At:
          return "Cache";
        case qt:
          var i = a;
          return qu(i) + ".Consumer";
        case st:
          var u = a;
          return qu(u._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case Ke:
          return Gu(a, a.render, "ForwardRef");
        case et:
          return "Fragment";
        case se:
          return a;
        case ce:
          return "Portal";
        case J:
          return "Root";
        case Oe:
          return "Text";
        case rn:
          return xt(a);
        case Ge:
          return a === si ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case vt:
          return "Profiler";
        case En:
          return "Scope";
        case Le:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case wt:
          return "TracingMarker";
        case oe:
        case re:
        case wn:
        case Je:
        case ct:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = w.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function Dr() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return qe(e);
      }
      return null;
    }
    function pl() {
      return hn === null ? "" : Qu(hn);
    }
    function Cn() {
      Kl.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Vt(e) {
      Kl.getCurrentStack = e === null ? null : pl, hn = e, Wr = !1;
    }
    function ec() {
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
    var tc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Li(e, t) {
      tc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function vl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function nc(e) {
      return e._valueTracker;
    }
    function ba(e) {
      e._valueTracker = null;
    }
    function hl(e) {
      var t = "";
      return e && (vl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ml(e) {
      var t = vl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
            ba(e), delete e[t];
          }
        };
        return f;
      }
    }
    function xa(e) {
      nc(e) || (e._valueTracker = ml(e));
    }
    function Xu(e) {
      if (!e)
        return !1;
      var t = nc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function yl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var gl = !1, Zl = !1, Ku = !1, Zo = !1;
    function Xa(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Li("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zl && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), Zl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !gl && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), gl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: pi(t.value != null ? t.value : i),
        controlled: Xa(t)
      };
    }
    function A(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function H(e, t) {
      var a = e;
      {
        var i = Xa(t);
        !a._wrapperState.controlled && i && !Zo && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Zo = !0), a._wrapperState.controlled && !i && !Ku && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ku = !0);
      }
      A(e, t);
      var u = pi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ae(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ae(a, t.type, pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ee(e, t, a) {
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
    function je(e, t) {
      var a = e;
      H(a, t), fe(a, t);
    }
    function fe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Xu(f), H(f, p);
          }
        }
      }
    }
    function Ae(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || yl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var dt = !1, kt = !1, Xt = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? D.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || kt || (kt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Xt || (Xt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !dt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), dt = !0);
    }
    function Kt(e, t) {
      t.value != null && e.setAttribute("value", Qn(pi(t.value)));
    }
    var nn = Array.isArray;
    function gt(e) {
      return nn(e);
    }
    var Ni;
    Ni = !1;
    function Zu() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Jo = ["value", "defaultValue"];
    function Yf(e) {
      {
        Li("select", e);
        for (var t = 0; t < Jo.length; t++) {
          var a = Jo[t];
          if (e[a] != null) {
            var i = gt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Zu()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Zu());
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
        for (var S = Qn(pi(a)), k = null, b = 0; b < u.length; b++) {
          if (u[b].value === S) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          k === null && !u[b].disabled && (k = u[b]);
        }
        k !== null && (k.selected = !0);
      }
    }
    function es(e, t) {
      return ft({}, t, {
        value: void 0
      });
    }
    function ts(e, t) {
      var a = e;
      Yf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ni && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ni = !0);
    }
    function If(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ka(a, !!t.multiple, i, !1) : t.defaultValue != null && Ka(a, !!t.multiple, t.defaultValue, !0);
    }
    function Gm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ka(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ka(a, !!t.multiple, t.defaultValue, !0) : Ka(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qm(e, t) {
      var a = e, i = t.value;
      i != null && Ka(a, !!t.multiple, i, !1);
    }
    var Qf = !1;
    function Wf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ft({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function nv(e, t) {
      var a = e;
      Li("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Qf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), Qf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (gt(u)) {
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
    function rv(e, t) {
      var a = e, i = pi(t.value), u = pi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gf(e, t) {
      rv(e, t);
    }
    var Mi = "http://www.w3.org/1999/xhtml", Xm = "http://www.w3.org/1998/Math/MathML", qf = "http://www.w3.org/2000/svg";
    function rc(e) {
      switch (e) {
        case "svg":
          return qf;
        case "math":
          return Xm;
        default:
          return Mi;
      }
    }
    function Xf(e, t) {
      return e == null || e === Mi ? rc(t) : e === qf && t === "foreignObject" ? Mi : e;
    }
    var Km = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ac, iv = Km(function(e, t) {
      if (e.namespaceURI === qf && !("innerHTML" in e)) {
        ac = ac || document.createElement("div"), ac.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ac.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, zi = 3, Nn = 8, Za = 9, Jl = 11, ic = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === zi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, lv = {
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
    }, Ju = {
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
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ju).forEach(function(e) {
      ov.forEach(function(t) {
        Ju[uv(t, e)] = Ju[e];
      });
    });
    function lc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ju.hasOwnProperty(e) && Ju[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var eo = /([A-Z])/g, Zm = /^ms-/;
    function Jm(e) {
      return e.replace(eo, "-$1").toLowerCase().replace(Zm, "-ms-");
    }
    var sv = function() {
    };
    {
      var cv = /^(?:webkit|moz|o)[A-Z]/, fv = /^-ms-/, ns = /-(.)/g, to = /;\s*$/, no = {}, ro = {}, dv = !1, Kf = !1, Zf = function(e) {
        return e.replace(ns, function(t, a) {
          return a.toUpperCase();
        });
      }, Jf = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zf(e.replace(fv, "ms-"))
        ));
      }, pv = function(e) {
        no.hasOwnProperty(e) && no[e] || (no[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        ro.hasOwnProperty(t) && ro[t] || (ro[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(to, "")));
      }, hv = function(e, t) {
        dv || (dv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ey = function(e, t) {
        Kf || (Kf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? Jf(e) : cv.test(e) ? pv(e) : to.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || ey(e, t));
      };
    }
    var ty = sv;
    function ny(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Jm(i)) + ":", t += lc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ty(i, t[i]);
          var s = lc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ka(e) {
      var t = {};
      for (var a in e)
        for (var i = lv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function rs(e, t) {
      {
        if (!t)
          return;
        var a = ka(e), i = ka(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ry(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var yv = {
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
    }, gv = ft({
      menuitem: !0
    }, yv), Sv = "__html";
    function uc(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ui(e, t) {
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
    var oc = {
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
    }, Ev = {
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
    }, Ja = {}, ed = new RegExp("^(aria)-[" + De + "]*$"), as = new RegExp("^(aria)[A-Z][" + De + "]*$");
    function td(e, t) {
      {
        if (Yn.call(Ja, t) && Ja[t])
          return !0;
        if (as.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ev.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ja[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ja[t] = !0, !0;
        }
        if (ed.test(t)) {
          var u = t.toLowerCase(), s = Ev.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ja[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ja[t] = !0, !0;
        }
      }
      return !0;
    }
    function Cv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = td(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function sc(e, t) {
      Ui(e, t) || Cv(e, t);
    }
    var eu = !1;
    function nd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !eu && (eu = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var rd = function() {
    };
    {
      var Wn = {}, ad = /^on./, Rv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + De + "]*$"), _v = new RegExp("^(aria)[A-Z][" + De + "]*$");
      rd = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (ad.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (ad.test(t))
          return Rv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (Tv.test(t) || _v.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = wr(t), y = v !== null && v.type === sa;
        if (oc.hasOwnProperty(u)) {
          var S = oc[u];
          if (S !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, S), Wn[t] = !0, !0;
        } else if (!y && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = rd(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function bv(e, t, a) {
      Ui(e, t) || wv(e, t, a);
    }
    var Ai = 1, is = 2, tu = 4, ay = Ai | is | tu, ls = null;
    function us(e) {
      ls !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ls = e;
    }
    function iy() {
      ls === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ls = null;
    }
    function xv(e) {
      return e === ls;
    }
    function cc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === zi ? t.parentNode : t;
    }
    var Zt = null, Sl = null, Fi = null;
    function ao(e) {
      var t = Lo(e);
      if (t) {
        if (typeof Zt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          Zt(t.stateNode, t.type, i);
        }
      }
    }
    function kv(e) {
      Zt = e;
    }
    function fc(e) {
      Sl ? Fi ? Fi.push(e) : Fi = [e] : Sl = e;
    }
    function os() {
      return Sl !== null || Fi !== null;
    }
    function ss() {
      if (Sl) {
        var e = Sl, t = Fi;
        if (Sl = null, Fi = null, ao(e), t)
          for (var a = 0; a < t.length; a++)
            ao(t[a]);
      }
    }
    var nu = function(e, t) {
      return e(t);
    }, id = function() {
    }, ld = !1;
    function ly() {
      var e = os();
      e && (id(), ss());
    }
    function ud(e, t, a) {
      if (ld)
        return e(t, a);
      ld = !0;
      try {
        return nu(e, t, a);
      } finally {
        ld = !1, ly();
      }
    }
    function dc(e, t, a) {
      nu = e, id = a;
    }
    function pc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function od(e, t, a) {
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
          return !!(a.disabled && pc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (od(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var cs = !1;
    if (dn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            cs = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        cs = !1;
      }
    function Dv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (S) {
        this.onError(S);
      }
    }
    var sd = Dv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var cd = document.createElement("react");
      sd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), k = !1, b = !0, U = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          cd.removeEventListener(B, Ue, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var ye = Array.prototype.slice.call(arguments, 3);
        function Ue() {
          k = !0, V(), a.apply(i, ye), b = !1;
        }
        var xe, Tt = !1, yt = !1;
        function N(M) {
          if (xe = M.error, Tt = !0, xe === null && M.colno === 0 && M.lineno === 0 && (yt = !0), M.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", N), cd.addEventListener(B, Ue, !1), S.initEvent(B, !1, !1), cd.dispatchEvent(S), F && Object.defineProperty(window, "event", F), k && b && (Tt ? yt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", N), !k)
          return V(), Dv.apply(this, arguments);
      };
    }
    var uy = sd, El = !1, ei = null, fs = !1, Cl = null, vi = {
      onError: function(e) {
        El = !0, ei = e;
      }
    };
    function iu(e, t, a, i, u, s, f, p, v) {
      El = !1, ei = null, uy.apply(vi, arguments);
    }
    function ji(e, t, a, i, u, s, f, p, v) {
      if (iu.apply(this, arguments), El) {
        var y = dd();
        fs || (fs = !0, Cl = y);
      }
    }
    function fd() {
      if (fs) {
        var e = Cl;
        throw fs = !1, Cl = null, e;
      }
    }
    function oy() {
      return El;
    }
    function dd() {
      if (El) {
        var e = ei;
        return El = !1, ei = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Da(e) {
      return e._reactInternals;
    }
    function ds(e) {
      return e._reactInternals !== void 0;
    }
    function io(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), Rl = (
      /*                */
      1
    ), an = (
      /*                    */
      2
    ), at = (
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
    ), Ie = (
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
    ), Tl = (
      /*                   */
      8192
    ), ps = (
      /*             */
      16384
    ), vc = cn | at | hi | Xr | Oa | ps, Ov = (
      /*               */
      32767
    ), va = (
      /*                   */
      32768
    ), Gn = (
      /*                */
      65536
    ), vs = (
      /* */
      131072
    ), pd = (
      /*                       */
      1048576
    ), vd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), _l = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), lu = (
      /*              */
      33554432
    ), lo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      at | Oa | 0
    ), Jr = an | at | Ut | Bt | Xr | La | Tl, yr = at | hi | Xr | Tl, Na = cn | Ut, nr = Kr | _l | vd, Hi = w.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (an | La)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function hd(e) {
      if (e.tag === Le) {
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
    function hc(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function md(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = Hi.current;
        if (t !== null && t.tag === oe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Da(e);
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
          for (var y = !1, S = s.child; S; ) {
            if (S === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (S === u) {
              y = !0, u = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!y) {
            for (S = f.child; S; ) {
              if (S === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (S === u) {
                y = !0, u = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ma(e) {
      var t = ln(e);
      return t !== null ? yd(t) : null;
    }
    function yd(e) {
      if (e.tag === se || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = yd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Lv(e) {
      var t = ln(e);
      return t !== null ? mc(t) : null;
    }
    function mc(e) {
      if (e.tag === se || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ce) {
          var a = mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var yc = O.unstable_scheduleCallback, Nv = O.unstable_cancelCallback, gc = O.unstable_shouldYield, Mv = O.unstable_requestPaint, mn = O.unstable_now, gd = O.unstable_getCurrentPriorityLevel, Sc = O.unstable_ImmediatePriority, ya = O.unstable_UserBlockingPriority, mi = O.unstable_NormalPriority, Ec = O.unstable_LowPriority, wl = O.unstable_IdlePriority, Sd = O.unstable_yieldValue, Ed = O.unstable_setDisableYieldValue, bl = null, qn = null, le = null, kn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Cd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        St && (e = ft({}, e, {
          getLaneLabelMap: kl,
          injectProfilingHooks: Vi
        })), bl = t.inject(e), qn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function zv(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(bl, e, t);
        } catch (a) {
          kn || (kn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Pi(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ie) === Ie;
          if (lt) {
            var i;
            switch (t) {
              case gr:
                i = Sc;
                break;
              case ar:
                i = ya;
                break;
              case $i:
                i = mi;
                break;
              case Ts:
                i = wl;
                break;
              default:
                i = mi;
                break;
            }
            qn.onCommitFiberRoot(bl, e, i, a);
          }
        } catch (u) {
          kn || (kn = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function xl(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(bl, e);
        } catch (t) {
          kn || (kn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Rd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(bl, e);
        } catch (t) {
          kn || (kn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof Sd == "function" && (Ed(e), q(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(bl, e);
        } catch (t) {
          kn || (kn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Vi(e) {
      le = e;
    }
    function kl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < un; a++) {
          var i = sy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cc(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function Td() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function Dl(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function uu() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Uv(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function _d() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function Rc(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function Av() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function jv() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function Tc(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function _c(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function Hv(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function Pv(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function oo() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function Vv(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function hs() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function ti(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function ms() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function so() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function ou(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function wd(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function Ol(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var Fe = (
      /*                         */
      0
    ), pt = (
      /*                 */
      1
    ), He = (
      /*                    */
      2
    ), yn = (
      /*               */
      8
    ), za = (
      /*              */
      16
    ), wc = Math.clz32 ? Math.clz32 : su, bc = Math.log, bd = Math.LN2;
    function su(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (bc(t) / bd | 0) | 0;
    }
    var un = 31, $ = (
      /*                        */
      0
    ), Ct = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), yi = (
      /*    */
      2
    ), ga = (
      /*             */
      4
    ), cu = (
      /*            */
      8
    ), on = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), Ll = (
      /*                       */
      4194240
    ), du = (
      /*                        */
      64
    ), Ua = (
      /*                        */
      128
    ), ta = (
      /*                        */
      256
    ), pu = (
      /*                        */
      512
    ), ys = (
      /*                        */
      1024
    ), gs = (
      /*                        */
      2048
    ), xc = (
      /*                        */
      4096
    ), kc = (
      /*                        */
      8192
    ), Dc = (
      /*                        */
      16384
    ), Oc = (
      /*                       */
      32768
    ), Lc = (
      /*                       */
      65536
    ), Nc = (
      /*                       */
      131072
    ), Mc = (
      /*                       */
      262144
    ), zc = (
      /*                       */
      524288
    ), vu = (
      /*                       */
      1048576
    ), Uc = (
      /*                       */
      2097152
    ), hu = (
      /*                            */
      130023424
    ), Bi = (
      /*                             */
      4194304
    ), Ac = (
      /*                             */
      8388608
    ), Ss = (
      /*                             */
      16777216
    ), Fc = (
      /*                             */
      33554432
    ), jc = (
      /*                             */
      67108864
    ), xd = Bi, co = (
      /*          */
      134217728
    ), Hc = (
      /*                          */
      268435455
    ), fo = (
      /*               */
      268435456
    ), Nl = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function sy(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & yi)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & cu)
          return "DefaultHydration";
        if (e & on)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & Ll)
          return "Transition";
        if (e & hu)
          return "Retry";
        if (e & co)
          return "SelectiveHydration";
        if (e & fo)
          return "IdleHydration";
        if (e & Nl)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Jt = -1, Pc = du, Vc = Bi;
    function po(e) {
      switch (Mn(e)) {
        case Ve:
          return Ve;
        case yi:
          return yi;
        case ga:
          return ga;
        case cu:
          return cu;
        case on:
          return on;
        case fu:
          return fu;
        case du:
        case Ua:
        case ta:
        case pu:
        case ys:
        case gs:
        case xc:
        case kc:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case vu:
        case Uc:
          return e & Ll;
        case Bi:
        case Ac:
        case Ss:
        case Fc:
        case jc:
          return e & hu;
        case co:
          return co;
        case fo:
          return fo;
        case Nl:
          return Nl;
        case na:
          return na;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Es(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hc;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = po(p);
        else {
          var v = f & s;
          v !== $ && (i = po(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = po(y) : s !== $ && (i = po(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var S = Mn(i), k = Mn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= k || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === on && (k & Ll) !== $
        )
          return t;
      }
      (i & ga) !== $ && (i |= a & on);
      var b = e.entangledLanes;
      if (b !== $)
        for (var U = e.entanglements, F = i & b; F > 0; ) {
          var V = Ml(F), ye = 1 << V;
          i |= U[V], F &= ~ye;
        }
      return i;
    }
    function Bv(e, t) {
      for (var a = e.eventTimes, i = Jt; t > 0; ) {
        var u = Ml(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Bc(e, t) {
      switch (e) {
        case Ve:
        case yi:
        case ga:
          return t + 250;
        case cu:
        case on:
        case fu:
        case du:
        case Ua:
        case ta:
        case pu:
        case ys:
        case gs:
        case xc:
        case kc:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case vu:
        case Uc:
          return t + 5e3;
        case Bi:
        case Ac:
        case Ss:
        case Fc:
        case jc:
          return Jt;
        case co:
        case fo:
        case Nl:
        case na:
          return Jt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Jt;
      }
    }
    function cy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p, y = s[p];
        y === Jt ? ((v & i) === $ || (v & u) !== $) && (s[p] = Bc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function fy(e) {
      return po(e.pendingLanes);
    }
    function kd(e) {
      var t = e.pendingLanes & ~na;
      return t !== $ ? t : t & na ? na : $;
    }
    function vo(e) {
      return (e & Ve) !== $;
    }
    function Cs(e) {
      return (e & Hc) !== $;
    }
    function $c(e) {
      return (e & hu) === e;
    }
    function dy(e) {
      var t = Ve | ga | on;
      return (e & t) === $;
    }
    function $v(e) {
      return (e & Ll) === e;
    }
    function Rs(e, t) {
      var a = yi | ga | cu | on;
      return (t & a) !== $;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Dd(e) {
      return (e & Ll) !== $;
    }
    function Od() {
      var e = Pc;
      return Pc <<= 1, (Pc & Ll) === $ && (Pc = du), e;
    }
    function py() {
      var e = Vc;
      return Vc <<= 1, (Vc & hu) === $ && (Vc = Bi), e;
    }
    function Mn(e) {
      return e & -e;
    }
    function Hn(e) {
      return Mn(e);
    }
    function Ml(e) {
      return 31 - wc(e);
    }
    function Yc(e) {
      return Ml(e);
    }
    function ra(e, t) {
      return (e & t) !== $;
    }
    function mu(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function ho(e, t) {
      return e & ~t;
    }
    function Ld(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Qv(e, t) {
      return e !== Ct && e < t ? e : t;
    }
    function Ic(e) {
      for (var t = [], a = 0; a < un; a++)
        t.push(e);
      return t;
    }
    function yu(e, t, a) {
      e.pendingLanes |= t, t !== Nl && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = Yc(t);
      i[u] = a;
    }
    function Nd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ml(i), s = 1 << u;
        a[u] = Jt, i &= ~s;
      }
    }
    function Md(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p;
        i[p] = $, u[p] = Jt, s[p] = Jt, f &= ~v;
      }
    }
    function mo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ml(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function vy(e, t) {
      var a = Mn(t), i;
      switch (a) {
        case ga:
          i = yi;
          break;
        case on:
          i = cu;
          break;
        case du:
        case Ua:
        case ta:
        case pu:
        case ys:
        case gs:
        case xc:
        case kc:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case vu:
        case Uc:
        case Bi:
        case Ac:
        case Ss:
        case Fc:
        case jc:
          i = fu;
          break;
        case Nl:
          i = fo;
          break;
        default:
          i = Ct;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ct ? Ct : i;
    }
    function Ud(e, t, a) {
      if (rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Yc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Qc(e, t) {
      if (rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Yc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var gr = Ve, ar = ga, $i = on, Ts = Nl, gu = Ct;
    function Aa() {
      return gu;
    }
    function Pn(e) {
      gu = e;
    }
    function _s(e, t) {
      var a = gu;
      try {
        return gu = e, t();
      } finally {
        gu = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function hy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Fd(e, t) {
      return e !== 0 && e < t;
    }
    function ws(e) {
      var t = Mn(e);
      return Fd(gr, t) ? Fd(ar, t) ? Cs(t) ? $i : Ts : ar : gr;
    }
    function Vn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Wv;
    function Se(e) {
      Wv = e;
    }
    function yo(e) {
      Wv(e);
    }
    var bs;
    function Gv(e) {
      bs = e;
    }
    var qv;
    function xs(e) {
      qv = e;
    }
    var ks;
    function jd(e) {
      ks = e;
    }
    var Hd;
    function Xv(e) {
      Hd = e;
    }
    var Wc = !1, go = [], gi = null, fn = null, Xn = null, Fa = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Yi = [], ni = [
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
    function Kv(e) {
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
    function Zv(e, t) {
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
          So.delete(i);
          break;
        }
      }
    }
    function Eo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Si(t, a, i, u, s);
        if (t !== null) {
          var p = Lo(t);
          p !== null && bs(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Jv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return gi = Eo(gi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return fn = Eo(fn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xn = Eo(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Fa.set(y, Eo(Fa.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, k = S.pointerId;
          return So.set(k, Eo(So.get(k) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = Fs(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Le) {
            var u = hd(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                qv(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (Vn(s)) {
              e.blockedOn = hc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function eh(e) {
      for (var t = ks(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Yi.length && Fd(t, Yi[i].priority); i++)
        ;
      Yi.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Gc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Su(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          us(s), u.target.dispatchEvent(s), iy();
        } else {
          var f = Lo(i);
          return f !== null && bs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ds(e, t, a) {
      Gc(e) && a.delete(t);
    }
    function Vd() {
      Wc = !1, gi !== null && Gc(gi) && (gi = null), fn !== null && Gc(fn) && (fn = null), Xn !== null && Gc(Xn) && (Xn = null), Fa.forEach(Ds), So.forEach(Ds);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Wc || (Wc = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, Vd)));
    }
    function mt(e) {
      if (go.length > 0) {
        Er(go[0], e);
        for (var t = 1; t < go.length; t++) {
          var a = go[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      gi !== null && Er(gi, e), fn !== null && Er(fn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Fa.forEach(i), So.forEach(i);
      for (var u = 0; u < Yi.length; u++) {
        var s = Yi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Yi.length > 0; ) {
        var f = Yi[0];
        if (f.blockedOn !== null)
          break;
        Pd(f), f.blockedOn === null && Yi.shift();
      }
    }
    var gn = w.ReactCurrentBatchConfig, Tn = !0;
    function Kn(e) {
      Tn = !!e;
    }
    function Sa() {
      return Tn;
    }
    function Co(e, t, a) {
      var i = Or(t), u;
      switch (i) {
        case gr:
          u = Bn;
          break;
        case ar:
          u = Os;
          break;
        case $i:
        default:
          u = Ii;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Bn(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Pn(gr), Ii(e, t, a, i);
      } finally {
        Pn(u), gn.transition = s;
      }
    }
    function Os(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Pn(ar), Ii(e, t, a, i);
      } finally {
        Pn(u), gn.transition = s;
      }
    }
    function Ii(e, t, a, i) {
      Tn && qc(e, t, a, i);
    }
    function qc(e, t, a, i) {
      var u = Su(e, t, a, i);
      if (u === null) {
        Uy(e, t, i, Ro, a), Zv(e, i);
        return;
      }
      if (Jv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Zv(e, i), t & tu && Kv(e)) {
        for (; u !== null; ) {
          var s = Lo(u);
          s !== null && yo(s);
          var f = Su(e, t, a, i);
          if (f === null && Uy(e, t, i, Ro, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Uy(e, t, i, null, a);
    }
    var Ro = null;
    function Su(e, t, a, i) {
      Ro = null;
      var u = cc(i), s = Fs(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Le) {
            var v = hd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (Vn(y))
              return hc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ro = s, null;
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
          var t = gd();
          switch (t) {
            case Sc:
              return gr;
            case ya:
              return ar;
            case mi:
            case Ec:
              return $i;
            case wl:
              return Ts;
            default:
              return $i;
          }
        }
        default:
          return $i;
      }
    }
    function Bd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Xc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Eu = null, Ei = null, zl = null;
    function Ul(e) {
      return Eu = e, Ei = Zc(), !0;
    }
    function Kc() {
      Eu = null, Ei = null, zl = null;
    }
    function _o() {
      if (zl)
        return zl;
      var e, t = Ei, a = t.length, i, u = Zc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = u.slice(e, p), zl;
    }
    function Zc() {
      return "value" in Eu ? Eu.value : Eu.textContent;
    }
    function Cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ru() {
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
        return y ? this.isDefaultPrevented = Ru : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return ft(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ru);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ru);
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
        isPersistent: Ru
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
    }, Tr = zn(Rr), wo = ft({}, Rr, {
      view: 0,
      detail: 0
    }), $d = zn(wo), Ls, Yd, ja;
    function th(e) {
      e !== ja && (ja && e.type === "mousemove" ? (Ls = e.screenX - ja.screenX, Yd = e.screenY - ja.screenY) : (Ls = 0, Yd = 0), ja = e);
    }
    var bo = ft({}, wo, {
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
      getModifierState: tf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (th(e), Ls);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Yd;
      }
    }), Al = zn(bo), Id = ft({}, bo, {
      dataTransfer: 0
    }), Tu = zn(Id), nh = ft({}, wo, {
      relatedTarget: 0
    }), Jc = zn(nh), Qd = ft({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ef = zn(Qd), my = ft({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), yy = zn(my), rh = ft({}, Rr, {
      data: 0
    }), Wd = zn(rh), _u = Wd, gy = {
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
    }, xo = {
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
    function ah(e) {
      if (e.key) {
        var t = gy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? xo[e.keyCode] || "Unidentified" : "";
    }
    var _n = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Sy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = _n[e];
      return i ? !!a[i] : !1;
    }
    function tf(e) {
      return Sy;
    }
    var Ey = ft({}, wo, {
      key: ah,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Cy = zn(Ey), ih = ft({}, bo, {
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
    }), Gd = zn(ih), Ry = ft({}, wo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tf
    }), Ha = zn(Ry), qd = ft({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ty = zn(qd), Fl = ft({}, bo, {
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
    }), nf = zn(Fl), wu = [9, 13, 27, 32], Ns = 229, Ms = dn && "CompositionEvent" in window, bu = null;
    dn && "documentMode" in document && (bu = document.documentMode);
    var _y = dn && "TextEvent" in window && !bu, rf = dn && (!Ms || bu && bu > 8 && bu <= 11), lh = 32, Xd = String.fromCharCode(lh);
    function uh() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zs = !1;
    function af(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function oh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Kd(e, t) {
      return e === "keydown" && t.keyCode === Ns;
    }
    function sh(e, t) {
      switch (e) {
        case "keyup":
          return wu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ns;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Zd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function lf(e) {
      return e.locale === "ko";
    }
    var Wi = !1;
    function Jd(e, t, a, i, u) {
      var s, f;
      if (Ms ? s = oh(t) : Wi ? sh(t, i) && (s = "onCompositionEnd") : Kd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      rf && !lf(i) && (!Wi && s === "onCompositionStart" ? Wi = Ul(u) : s === "onCompositionEnd" && Wi && (f = _o()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new Wd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Zd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function uf(e, t) {
      switch (e) {
        case "compositionend":
          return Zd(t);
        case "keypress":
          var a = t.which;
          return a !== lh ? null : (zs = !0, Xd);
        case "textInput":
          var i = t.data;
          return i === Xd && zs ? null : i;
        default:
          return null;
      }
    }
    function ch(e, t) {
      if (Wi) {
        if (e === "compositionend" || !Ms && sh(e, t)) {
          var a = _o();
          return Kc(), Wi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!af(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return rf && !lf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function wy(e, t, a, i, u) {
      var s;
      if (_y ? s = uf(t, i) : s = ch(t, i), !s)
        return null;
      var f = vh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new _u("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function of(e, t, a, i, u, s, f) {
      Jd(e, t, a, i, u), wy(e, t, a, i, u);
    }
    var by = {
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
    function ko(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!by[e.type] : t === "textarea";
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
    function xy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function sf() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      fc(i);
      var u = vh(t, "onChange");
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
      n(t, l, e, cc(e)), ud(d, t);
    }
    function d(e) {
      $0(e, 0);
    }
    function m(e) {
      var t = hf(e);
      if (Xu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    dn && (_ = xy("input") && (!document.documentMode || document.documentMode > 9));
    function j(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", X);
    }
    function G() {
      r && (r.detachEvent("onpropertychange", X), r = null, l = null);
    }
    function X(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (G(), j(t, a)) : e === "focusout" && G();
    }
    function ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function we(e, t) {
      if (e === "click")
        return m(t);
    }
    function Dn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ae(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? hf(a) : window, v, y;
      if (o(p) ? v = E : ko(p) ? _ ? v = Dn : (v = ve, y = W) : Ce(p) && (v = we), v) {
        var S = v(t, a);
        if (S) {
          n(e, S, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && L(p);
    }
    function z() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function te(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !xv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Fs(y) || pp(y)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var k = u.ownerDocument;
          k ? S = k.defaultView || k.parentWindow : S = window;
        }
        var b, U;
        if (v) {
          var F = i.relatedTarget || i.toElement;
          if (b = a, U = F ? Fs(F) : null, U !== null) {
            var V = ha(U);
            (U !== V || U.tag !== se && U.tag !== Oe) && (U = null);
          }
        } else
          b = null, U = a;
        if (b !== U) {
          var ye = Al, Ue = "onMouseLeave", xe = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ye = Gd, Ue = "onPointerLeave", xe = "onPointerEnter", Tt = "pointer");
          var yt = b == null ? S : hf(b), N = U == null ? S : hf(U), B = new ye(Ue, Tt + "leave", b, i, u);
          B.target = yt, B.relatedTarget = N;
          var M = null, K = Fs(u);
          if (K === a) {
            var ge = new ye(xe, Tt + "enter", U, i, u);
            ge.target = N, ge.relatedTarget = yt, M = ge;
          }
          GR(e, B, M, b, U);
        }
      }
    }
    function be(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Re = typeof Object.is == "function" ? Object.is : be;
    function Ne(e, t) {
      if (Re(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !Re(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Qe(e) {
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
    function Dt(e, t) {
      for (var a = Qe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === zi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Qe(Zn(a));
      }
    }
    function jl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return ky(e, u, s, f, p);
    }
    function ky(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, S = e, k = null;
      e:
        for (; ; ) {
          for (var b = null; S === t && (a === 0 || S.nodeType === zi) && (f = s + a), S === i && (u === 0 || S.nodeType === zi) && (p = s + u), S.nodeType === zi && (s += S.nodeValue.length), (b = S.firstChild) !== null; )
            k = S, S = b;
          for (; ; ) {
            if (S === e)
              break e;
            if (k === t && ++v === a && (f = s), k === i && ++y === u && (p = s), (b = S.nextSibling) !== null)
              break;
            S = k, k = S.parentNode;
          }
          S = b;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function DR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Dt(e, f), S = Dt(e, p);
        if (y && S) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var k = a.createRange();
          k.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(k), u.extend(S.node, S.offset)) : (k.setEnd(S.node, S.offset), u.addRange(k));
        }
      }
    }
    function L0(e) {
      return e && e.nodeType === zi;
    }
    function N0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : L0(e) ? !1 : L0(t) ? N0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function OR(e) {
      return e && e.ownerDocument && N0(e.ownerDocument.documentElement, e);
    }
    function LR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function M0() {
      for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement; ) {
        if (LR(t))
          e = t.contentWindow;
        else
          return t;
        t = yl(e.document);
      }
      return t;
    }
    function Dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function NR() {
      var e = M0();
      return {
        focusedElem: e,
        selectionRange: Dy(e) ? zR(e) : null
      };
    }
    function MR(e) {
      var t = M0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && OR(a)) {
        i !== null && Dy(a) && UR(a, i);
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
    function zR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = jl(e), t || {
        start: 0,
        end: 0
      };
    }
    function UR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : DR(e, t);
    }
    var AR = dn && "documentMode" in document && document.documentMode <= 11;
    function FR() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var cf = null, Oy = null, ep = null, Ly = !1;
    function jR(e) {
      if ("selectionStart" in e && Dy(e))
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
    function HR(e) {
      return e.window === e ? e.document : e.nodeType === Za ? e : e.ownerDocument;
    }
    function z0(e, t, a) {
      var i = HR(a);
      if (!(Ly || cf == null || cf !== yl(i))) {
        var u = jR(cf);
        if (!ep || !Ne(ep, u)) {
          ep = u;
          var s = vh(Oy, "onSelect");
          if (s.length > 0) {
            var f = new Tr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = cf;
          }
        }
      }
    }
    function PR(e, t, a, i, u, s, f) {
      var p = a ? hf(a) : window;
      switch (t) {
        case "focusin":
          (ko(p) || p.contentEditable === "true") && (cf = p, Oy = a, ep = null);
          break;
        case "focusout":
          cf = null, Oy = null, ep = null;
          break;
        case "mousedown":
          Ly = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ly = !1, z0(e, i, u);
          break;
        case "selectionchange":
          if (AR)
            break;
        case "keydown":
        case "keyup":
          z0(e, i, u);
      }
    }
    function fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ff = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, Ny = {}, U0 = {};
    dn && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete ff.animationend.animation, delete ff.animationiteration.animation, delete ff.animationstart.animation), "TransitionEvent" in window || delete ff.transitionend.transition);
    function dh(e) {
      if (Ny[e])
        return Ny[e];
      if (!ff[e])
        return e;
      var t = ff[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in U0)
          return Ny[e] = t[a];
      return e;
    }
    var A0 = dh("animationend"), F0 = dh("animationiteration"), j0 = dh("animationstart"), H0 = dh("transitionend"), P0 = /* @__PURE__ */ new Map(), V0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Do(e, t) {
      P0.set(e, t), pr(t, [e]);
    }
    function VR() {
      for (var e = 0; e < V0.length; e++) {
        var t = V0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Do(a, "on" + i);
      }
      Do(A0, "onAnimationEnd"), Do(F0, "onAnimationIteration"), Do(j0, "onAnimationStart"), Do("dblclick", "onDoubleClick"), Do("focusin", "onFocus"), Do("focusout", "onBlur"), Do(H0, "onTransitionEnd");
    }
    function BR(e, t, a, i, u, s, f) {
      var p = P0.get(t);
      if (p !== void 0) {
        var v = Tr, y = t;
        switch (t) {
          case "keypress":
            if (Cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Cy;
            break;
          case "focusin":
            y = "focus", v = Jc;
            break;
          case "focusout":
            y = "blur", v = Jc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Jc;
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
            v = Al;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Tu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ha;
            break;
          case A0:
          case F0:
          case j0:
            v = ef;
            break;
          case H0:
            v = Ty;
            break;
          case "scroll":
            v = $d;
            break;
          case "wheel":
            v = nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = yy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Gd;
            break;
        }
        var S = (s & tu) !== 0;
        {
          var k = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = QR(a, p, i.type, S, k);
          if (b.length > 0) {
            var U = new v(p, y, null, i, u);
            e.push({
              event: U,
              listeners: b
            });
          }
        }
      }
    }
    VR(), z(), sf(), FR(), uh();
    function $R(e, t, a, i, u, s, f) {
      BR(e, t, a, i, u, s);
      var p = (s & ay) === 0;
      p && (te(e, t, a, i, u), x(e, t, a, i, u), PR(e, t, a, i, u), of(e, t, a, i, u));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], My = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function B0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ji(i, t, void 0, e), e.currentTarget = null;
    }
    function YR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          B0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var S = t[y], k = S.instance, b = S.currentTarget, U = S.listener;
          if (k !== i && e.isPropagationStopped())
            return;
          B0(e, U, b), i = k;
        }
    }
    function $0(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        YR(s, f, a);
      }
      fd();
    }
    function IR(e, t, a, i, u) {
      var s = cc(a), f = [];
      $R(f, e, i, a, s, t), $0(f, t);
    }
    function Sn(e, t) {
      My.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = C_(t), u = qR(e, a);
      i.has(u) || (Y0(t, e, is, a), i.add(u));
    }
    function zy(e, t, a) {
      My.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), Y0(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[ph]) {
        e[ph] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (My.has(a) || zy(a, !1, e), zy(a, !0, e));
        });
        var t = e.nodeType === Za ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, zy("selectionchange", !1, t)));
      }
    }
    function Y0(e, t, a, i, u) {
      var s = Co(e, t, a), f = void 0;
      cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qi(e, t, s, f) : To(e, t, s) : f !== void 0 ? Xc(e, t, s, f) : Bd(e, t, s);
    }
    function I0(e, t) {
      return e === t || e.nodeType === Nn && e.parentNode === t;
    }
    function Uy(e, t, a, i, u) {
      var s = i;
      if (!(t & Ai) && !(t & is)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === J || v === ce) {
                var y = p.stateNode.containerInfo;
                if (I0(y, f))
                  break;
                if (v === ce)
                  for (var S = p.return; S !== null; ) {
                    var k = S.tag;
                    if (k === J || k === ce) {
                      var b = S.stateNode.containerInfo;
                      if (I0(b, f))
                        return;
                    }
                    S = S.return;
                  }
                for (; y !== null; ) {
                  var U = Fs(y);
                  if (U === null)
                    return;
                  var F = U.tag;
                  if (F === se || F === Oe) {
                    p = s = U;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      ud(function() {
        return IR(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function QR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, S = null; y !== null; ) {
        var k = y, b = k.stateNode, U = k.tag;
        if (U === se && b !== null && (S = b, p !== null)) {
          var F = ru(y, p);
          F != null && v.push(rp(y, F, S));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function vh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === se && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(rp(u, y, v));
          var S = ru(u, t);
          S != null && i.push(rp(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function df(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== se);
      return e || null;
    }
    function WR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = df(s))
        u++;
      for (var f = 0, p = i; p; p = df(p))
        f++;
      for (; u - f > 0; )
        a = df(a), u--;
      for (; f - u > 0; )
        i = df(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = df(a), i = df(i);
      }
      return null;
    }
    function Q0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, S = v.stateNode, k = v.tag;
        if (y !== null && y === i)
          break;
        if (k === se && S !== null) {
          var b = S;
          if (u) {
            var U = ru(p, s);
            U != null && f.unshift(rp(p, U, b));
          } else if (!u) {
            var F = ru(p, s);
            F != null && f.push(rp(p, F, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function GR(e, t, a, i, u) {
      var s = i && u ? WR(i, u) : null;
      i !== null && Q0(e, t, i, s, !1), u !== null && a !== null && Q0(e, a, u, s, !0);
    }
    function qR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Pa = !1, ap = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", W0 = "autoFocus", Us = "children", As = "style", mh = "__html", Ay, yh, ip, G0, gh, q0, X0;
    Ay = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      sc(e, t), nd(e, t), bv(e, t, {
        registrationNameDependencies: Ft,
        possibleRegistrationNames: Pr
      });
    }, q0 = dn && !document.documentMode, ip = function(e, t, a) {
      if (!Pa) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Pa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, G0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, X0 = function(e, t) {
      var a = e.namespaceURI === Mi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var XR = /\r\n?/g, KR = /\u0000|\uFFFD/g;
    function Sh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(XR, `
`).replace(KR, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Pa || (Pa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function K0(e) {
      return e.nodeType === Za ? e : e.ownerDocument;
    }
    function ZR() {
    }
    function Ch(e) {
      e.onclick = ZR;
    }
    function JR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === As)
            f && Object.freeze(f), mv(t, f);
          else if (s === ap) {
            var p = f ? f[mh] : void 0;
            p != null && iv(t, p);
          } else if (s === Us)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ic(t, f);
            } else
              typeof f == "number" && ic(t, "" + f);
          else
            s === hh || s === Oo || s === W0 || (Ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function eT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === As ? mv(e, f) : s === ap ? iv(e, f) : s === Us ? ic(e, f) : da(e, s, f, i);
      }
    }
    function tT(e, t, a, i) {
      var u, s = K0(a), f, p = i;
      if (p === Mi && (p = rc(e)), p === Mi) {
        if (u = Ui(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Mi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(Ay, e) && (Ay[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function nT(e, t) {
      return K0(t).createTextNode(e);
    }
    function rT(e, t, a, i) {
      var u = Ui(t, a);
      yh(t, a);
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
          for (var f = 0; f < tp.length; f++)
            Sn(tp[f], e);
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
          ts(e, a), s = es(e, a), Sn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = Wf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (uc(t, s), JR(t, e, i, s, u), t) {
        case "input":
          xa(e), ee(e, a, !1);
          break;
        case "textarea":
          xa(e), av(e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          If(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ch(e);
          break;
      }
    }
    function aT(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = es(e, a), p = es(e, i), s = [];
          break;
        case "textarea":
          f = Wf(e, a), p = Wf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      uc(t, p);
      var v, y, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === As) {
            var k = f[v];
            for (y in k)
              k.hasOwnProperty(y) && (S || (S = {}), S[y] = "");
          } else
            v === ap || v === Us || v === hh || v === Oo || v === W0 || (Ft.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === U || b == null && U == null))
          if (v === As)
            if (b && Object.freeze(b), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (S || (S = {}), S[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && U[y] !== b[y] && (S || (S = {}), S[y] = b[y]);
            } else
              S || (s || (s = []), s.push(v, S)), S = b;
          else if (v === ap) {
            var F = b ? b[mh] : void 0, V = U ? U[mh] : void 0;
            F != null && V !== F && (s = s || []).push(v, F);
          } else
            v === Us ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === hh || v === Oo || (Ft.hasOwnProperty(v) ? (b != null && (typeof b != "function" && gh(v, b), v === "onScroll" && Sn("scroll", e)), !s && U !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return S && (rs(S, p[As]), (s = s || []).push(As, S)), s;
    }
    function iT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && A(e, u);
      var s = Ui(a, i), f = Ui(a, u);
      switch (eT(e, t, s, f), a) {
        case "input":
          H(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          Gm(e, u);
          break;
      }
    }
    function lT(e) {
      {
        var t = e.toLowerCase();
        return oc.hasOwnProperty(t) && oc[t] || null;
      }
    }
    function uT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ui(t, a), yh(t, a), t) {
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
          for (var y = 0; y < tp.length; y++)
            Sn(tp[y], e);
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
          ts(e, a), Sn("invalid", e);
          break;
        case "textarea":
          nv(e, a), Sn("invalid", e);
          break;
      }
      uc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, k = 0; k < S.length; k++) {
          var b = S[k].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[k].name);
          }
        }
      }
      var U = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var V = a[F];
          if (F === Us)
            typeof V == "string" ? e.textContent !== V && (a[Oo] !== !0 && Eh(e.textContent, V, s, f), U = [Us, V]) : typeof V == "number" && e.textContent !== "" + V && (a[Oo] !== !0 && Eh(e.textContent, V, s, f), U = [Us, "" + V]);
          else if (Ft.hasOwnProperty(F))
            V != null && (typeof V != "function" && gh(F, V), F === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ye = void 0, Ue = p && We ? null : wr(F);
            if (a[Oo] !== !0) {
              if (!(F === hh || F === Oo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === ap) {
                  var xe = e.innerHTML, Tt = V ? V[mh] : void 0;
                  if (Tt != null) {
                    var yt = X0(e, Tt);
                    yt !== xe && ip(F, xe, yt);
                  }
                } else if (F === As) {
                  if (v.delete(F), q0) {
                    var N = ny(V);
                    ye = e.getAttribute("style"), N !== ye && ip(F, ye, N);
                  }
                } else if (p && !We)
                  v.delete(F.toLowerCase()), ye = ui(e, F, V), V !== ye && ip(F, ye, V);
                else if (!vn(F, Ue, p) && !Yt(F, V, Ue, p)) {
                  var B = !1;
                  if (Ue !== null)
                    v.delete(Ue.attributeName), ye = fa(e, F, V, Ue);
                  else {
                    var M = i;
                    if (M === Mi && (M = rc(t)), M === Mi)
                      v.delete(F.toLowerCase());
                    else {
                      var K = lT(F);
                      K !== null && K !== F && (B = !0, v.delete(K)), v.delete(F);
                    }
                    ye = ui(e, F, V);
                  }
                  var ge = We;
                  !ge && V !== ye && !B && ip(F, ye, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Oo] !== !0 && G0(v), t) {
        case "input":
          xa(e), ee(e, a, !0);
          break;
        case "textarea":
          xa(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ch(e);
          break;
      }
      return U;
    }
    function oT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Fy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Hy(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Py(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function sT(e, t, a) {
      switch (t) {
        case "input":
          je(e, a);
          return;
        case "textarea":
          Gf(e, a);
          return;
        case "select":
          qm(e, a);
          return;
      }
    }
    var lp = function() {
    }, up = function() {
    };
    {
      var cT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Z0 = [
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
      ], fT = Z0.concat(["button"]), dT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], J0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      up = function(e, t) {
        var a = ft({}, e || J0), i = {
          tag: t
        };
        return Z0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), fT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), cT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var pT = function(e, t) {
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
            return dT.indexOf(t) === -1;
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
      }, vT = function(e, t) {
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
      }, eE = {};
      lp = function(e, t, a) {
        a = a || J0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = pT(e, u) ? null : i, f = s ? null : vT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!eE[y]) {
            eE[y] = !0;
            var S = e, k = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", k = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, k, b);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var Rh = "suppressHydrationWarning", Th = "$", _h = "/$", op = "$?", sp = "$!", hT = "style", Vy = null, By = null;
    function mT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Za:
        case Jl: {
          t = i === Za ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Xf(null, "");
          break;
        }
        default: {
          var s = i === Nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Xf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = up(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function yT(e, t, a) {
      {
        var i = e, u = Xf(i.namespace, t), s = up(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Jk(e) {
      return e;
    }
    function gT(e) {
      Vy = Sa(), By = NR();
      var t = null;
      return Kn(!1), t;
    }
    function ST(e) {
      MR(By), Kn(Vy), Vy = null, By = null;
    }
    function ET(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (lp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = up(f.ancestorInfo, e);
          lp(null, p, v);
        }
        s = f.namespace;
      }
      var y = tT(e, t, a, s);
      return dp(u, y), Xy(y, t), y;
    }
    function CT(e, t) {
      e.appendChild(t);
    }
    function RT(e, t, a, i, u) {
      switch (rT(e, t, a, i), t) {
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
    function TT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = up(f.ancestorInfo, t);
          lp(null, p, v);
        }
      }
      return aT(e, t, a, i);
    }
    function $y(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _T(e, t, a, i) {
      {
        var u = a;
        lp(null, e, u.ancestorInfo);
      }
      var s = nT(e, t);
      return dp(i, s), s;
    }
    function wT() {
      var e = window.event;
      return e === void 0 ? $i : Or(e.type);
    }
    var Yy = typeof setTimeout == "function" ? setTimeout : void 0, bT = typeof clearTimeout == "function" ? clearTimeout : void 0, Iy = -1, tE = typeof Promise == "function" ? Promise : void 0, xT = typeof queueMicrotask == "function" ? queueMicrotask : typeof tE < "u" ? function(e) {
      return tE.resolve(null).then(e).catch(kT);
    } : Yy;
    function kT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function DT(e, t, a, i) {
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
    function OT(e, t, a, i, u, s) {
      iT(e, t, a, i, u), Xy(e, u);
    }
    function nE(e) {
      ic(e, "");
    }
    function LT(e, t, a) {
      e.nodeValue = a;
    }
    function NT(e, t) {
      e.appendChild(t);
    }
    function MT(e, t) {
      var a;
      e.nodeType === Nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function zT(e, t, a) {
      e.insertBefore(t, a);
    }
    function UT(e, t, a) {
      e.nodeType === Nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function AT(e, t) {
      e.removeChild(t);
    }
    function FT(e, t) {
      e.nodeType === Nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Qy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Nn) {
          var s = u.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(u), mt(t);
              return;
            } else
              i--;
          else
            (s === Th || s === op || s === sp) && i++;
        }
        a = u;
      } while (a);
      mt(t);
    }
    function jT(e, t) {
      e.nodeType === Nn ? Qy(e.parentNode, t) : e.nodeType === qr && Qy(e, t), mt(e);
    }
    function HT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function PT(e) {
      e.nodeValue = "";
    }
    function VT(e, t) {
      e = e;
      var a = t[hT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = lc("display", i);
    }
    function BT(e, t) {
      e.nodeValue = t;
    }
    function $T(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Za && e.documentElement && e.removeChild(e.documentElement);
    }
    function YT(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function IT(e, t) {
      return t === "" || e.nodeType !== zi ? null : e;
    }
    function QT(e) {
      return e.nodeType !== Nn ? null : e;
    }
    function rE(e) {
      return e.data === op;
    }
    function Wy(e) {
      return e.data === sp;
    }
    function WT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function GT(e, t) {
      e._reactRetry = t;
    }
    function wh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === zi)
          break;
        if (t === Nn) {
          var a = e.data;
          if (a === Th || a === sp || a === op)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return wh(e.nextSibling);
    }
    function qT(e) {
      return wh(e.firstChild);
    }
    function XT(e) {
      return wh(e.firstChild);
    }
    function KT(e) {
      return wh(e.nextSibling);
    }
    function ZT(e, t, a, i, u, s, f) {
      dp(s, e), Xy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & pt) !== Fe;
      return uT(e, t, a, p, i, y, f);
    }
    function JT(e, t, a, i) {
      return dp(a, e), a.mode & pt, oT(e, t);
    }
    function e_(e, t) {
      dp(t, e);
    }
    function t_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return cp(t);
            a--;
          } else
            (i === Th || i === sp || i === op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function aE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Th || i === sp || i === op) {
            if (a === 0)
              return t;
            a--;
          } else
            i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function n_(e) {
      mt(e);
    }
    function r_(e) {
      mt(e);
    }
    function a_(e) {
      return e !== "head" && e !== "body";
    }
    function i_(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function l_(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function u_(e, t) {
      t.nodeType === qr ? Fy(e, t) : t.nodeType === Nn || jy(e, t);
    }
    function o_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? Fy(a, t) : t.nodeType === Nn || jy(a, t));
      }
    }
    function s_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === qr ? Fy(a, i) : i.nodeType === Nn || jy(a, i));
    }
    function c_(e, t, a) {
      Hy(e, t);
    }
    function f_(e, t) {
      Py(e, t);
    }
    function d_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Hy(i, t);
      }
    }
    function p_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Py(a, t);
      }
    }
    function v_(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && Hy(a, i);
    }
    function h_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && Py(a, i);
    }
    function m_(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function y_(e) {
      np(e);
    }
    var pf = Math.random().toString(36).slice(2), vf = "__reactFiber$" + pf, Gy = "__reactProps$" + pf, fp = "__reactContainer$" + pf, qy = "__reactEvents$" + pf, g_ = "__reactListeners$" + pf, S_ = "__reactHandles$" + pf;
    function E_(e) {
      delete e[vf], delete e[Gy], delete e[qy], delete e[g_], delete e[S_];
    }
    function dp(e, t) {
      t[vf] = e;
    }
    function bh(e, t) {
      t[fp] = e;
    }
    function iE(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function Fs(e) {
      var t = e[vf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[vf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = aE(e); u !== null; ) {
              var s = u[vf];
              if (s)
                return s;
              u = aE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lo(e) {
      var t = e[vf] || e[fp];
      return t && (t.tag === se || t.tag === Oe || t.tag === Le || t.tag === J) ? t : null;
    }
    function hf(e) {
      if (e.tag === se || e.tag === Oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[Gy] || null;
    }
    function Xy(e, t) {
      e[Gy] = t;
    }
    function C_(e) {
      var t = e[qy];
      return t === void 0 && (t = e[qy] = /* @__PURE__ */ new Set()), t;
    }
    var lE = {}, uE = w.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = di(e.type, e._source, t ? t.type : null);
        uE.setExtraStackFrame(a);
      } else
        uE.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, u) {
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
            p && !(p instanceof Error) && (kh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), kh(null)), p instanceof Error && !(p.message in lE) && (lE[p.message] = !0, kh(u), g("Failed %s type: %s", a, p.message), kh(null));
          }
      }
    }
    var Ky = [], Dh;
    Dh = [];
    var xu = -1;
    function No(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (xu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Dh[xu] && g("Unexpected Fiber popped."), e.current = Ky[xu], Ky[xu] = null, Dh[xu] = null, xu--;
    }
    function ia(e, t, a) {
      xu++, Ky[xu] = e.current, Dh[xu] = a, e.current = t;
    }
    var Zy;
    Zy = {};
    var ri = {};
    Object.freeze(ri);
    var ku = No(ri), Hl = No(!1), Jy = ri;
    function mf(e, t, a) {
      return a && Pl(t) ? Jy : ku.current;
    }
    function oE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function yf(e, t) {
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
          var p = qe(e) || "Unknown";
          Gi(i, s, "context", p);
        }
        return u && oE(e, t, s), s;
      }
    }
    function Oh() {
      return Hl.current;
    }
    function Pl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lh(e) {
      aa(Hl, e), aa(ku, e);
    }
    function eg(e) {
      aa(Hl, e), aa(ku, e);
    }
    function sE(e, t, a) {
      {
        if (ku.current !== ri)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(ku, t, e), ia(Hl, a, e);
      }
    }
    function cE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = qe(e) || "Unknown";
            Zy[s] || (Zy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = qe(e) || "Unknown";
          Gi(u, f, "child context", v);
        }
        return ft({}, a, f);
      }
    }
    function Nh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ri;
        return Jy = ku.current, ia(ku, a, e), ia(Hl, Hl.current, e), !0;
      }
    }
    function fE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = cE(e, t, Jy);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Hl, e), aa(ku, e), ia(ku, u, e), ia(Hl, a, e);
        } else
          aa(Hl, e), ia(Hl, a, e);
      }
    }
    function R_(e) {
      {
        if (!md(e) || e.tag !== oe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case oe: {
              var a = t.type;
              if (Pl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mo = 0, Mh = 1, Du = null, tg = !1, ng = !1;
    function dE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function T_(e) {
      tg = !0, dE(e);
    }
    function pE() {
      tg && zo();
    }
    function zo() {
      if (!ng && Du !== null) {
        ng = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = Du;
          for (Pn(gr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, tg = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), yc(Sc, zo), s;
        } finally {
          Pn(t), ng = !1;
        }
      }
      return null;
    }
    var gf = [], Sf = 0, zh = null, Uh = 0, Ci = [], Ri = 0, js = null, Ou = 1, Lu = "";
    function __(e) {
      return Ps(), (e.flags & pd) !== Me;
    }
    function w_(e) {
      return Ps(), Uh;
    }
    function b_() {
      var e = Lu, t = Ou, a = t & ~x_(t);
      return a.toString(32) + e;
    }
    function Hs(e, t) {
      Ps(), gf[Sf++] = Uh, gf[Sf++] = zh, zh = e, Uh = t;
    }
    function vE(e, t, a) {
      Ps(), Ci[Ri++] = Ou, Ci[Ri++] = Lu, Ci[Ri++] = js, js = e;
      var i = Ou, u = Lu, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, S = (1 << y) - 1, k = (f & S).toString(32), b = f >> y, U = s - y, F = Ah(t) + U, V = p << U, ye = V | b, Ue = k + u;
        Ou = 1 << F | ye, Lu = Ue;
      } else {
        var xe = p << s, Tt = xe | f, yt = u;
        Ou = 1 << v | Tt, Lu = yt;
      }
    }
    function rg(e) {
      Ps();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Hs(e, a), vE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - wc(e);
    }
    function x_(e) {
      return 1 << Ah(e) - 1;
    }
    function ag(e) {
      for (; e === zh; )
        zh = gf[--Sf], gf[Sf] = null, Uh = gf[--Sf], gf[Sf] = null;
      for (; e === js; )
        js = Ci[--Ri], Ci[Ri] = null, Lu = Ci[--Ri], Ci[Ri] = null, Ou = Ci[--Ri], Ci[Ri] = null;
    }
    function k_() {
      return Ps(), js !== null ? {
        id: Ou,
        overflow: Lu
      } : null;
    }
    function D_(e, t) {
      Ps(), Ci[Ri++] = Ou, Ci[Ri++] = Lu, Ci[Ri++] = js, Ou = t.id, Lu = t.overflow, js = e;
    }
    function Ps() {
      Nr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, Ti = null, qi = !1, Vs = !1, Uo = null;
    function O_() {
      qi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function hE() {
      Vs = !0;
    }
    function L_() {
      return Vs;
    }
    function N_(e) {
      var t = e.stateNode.containerInfo;
      return Ti = XT(t), Lr = e, qi = !0, Uo = null, Vs = !1, !0;
    }
    function M_(e, t, a) {
      return Ti = KT(t), Lr = e, qi = !0, Uo = null, Vs = !1, a !== null && D_(e, a), !0;
    }
    function mE(e, t) {
      switch (e.tag) {
        case J: {
          u_(e.stateNode.containerInfo, t);
          break;
        }
        case se: {
          var a = (e.mode & pt) !== Fe;
          s_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Le: {
          var i = e.memoizedState;
          i.dehydrated !== null && o_(i.dehydrated, t);
          break;
        }
      }
    }
    function yE(e, t) {
      mE(e, t);
      var a = Ax();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function ig(e, t) {
      {
        if (Vs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case se:
                var i = t.type;
                t.pendingProps, c_(a, i);
                break;
              case Oe:
                var u = t.pendingProps;
                f_(a, u);
                break;
            }
            break;
          }
          case se: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case se: {
                var v = t.type, y = t.pendingProps, S = (e.mode & pt) !== Fe;
                v_(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case Oe: {
                var k = t.pendingProps, b = (e.mode & pt) !== Fe;
                h_(
                  s,
                  f,
                  p,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Le: {
            var U = e.memoizedState, F = U.dehydrated;
            if (F !== null)
              switch (t.tag) {
                case se:
                  var V = t.type;
                  t.pendingProps, d_(F, V);
                  break;
                case Oe:
                  var ye = t.pendingProps;
                  p_(F, ye);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function gE(e, t) {
      t.flags = t.flags & ~La | an, ig(e, t);
    }
    function SE(e, t) {
      switch (e.tag) {
        case se: {
          var a = e.type;
          e.pendingProps;
          var i = YT(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, Ti = qT(i), !0) : !1;
        }
        case Oe: {
          var u = e.pendingProps, s = IT(t, u);
          return s !== null ? (e.stateNode = s, Lr = e, Ti = null, !0) : !1;
        }
        case Le: {
          var f = QT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: k_(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = Fx(f);
            return v.return = e, e.child = v, Lr = e, Ti = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function lg(e) {
      return (e.mode & pt) !== Fe && (e.flags & Ie) === Me;
    }
    function ug(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function og(e) {
      if (qi) {
        var t = Ti;
        if (!t) {
          lg(e) && (ig(Lr, e), ug()), gE(Lr, e), qi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!SE(e, t)) {
          lg(e) && (ig(Lr, e), ug()), t = cp(a);
          var i = Lr;
          if (!t || !SE(e, t)) {
            gE(Lr, e), qi = !1, Lr = e;
            return;
          }
          yE(i, a);
        }
      }
    }
    function z_(e, t, a) {
      var i = e.stateNode, u = !Vs, s = ZT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function U_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = JT(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & pt) !== Fe;
              i_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case se: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, S = (u.mode & pt) !== Fe;
              l_(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function A_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      e_(a, e);
    }
    function F_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return t_(a);
    }
    function EE(e) {
      for (var t = e.return; t !== null && t.tag !== se && t.tag !== J && t.tag !== Le; )
        t = t.return;
      Lr = t;
    }
    function Fh(e) {
      if (e !== Lr)
        return !1;
      if (!qi)
        return EE(e), qi = !0, !1;
      if (e.tag !== J && (e.tag !== se || a_(e.type) && !$y(e.type, e.memoizedProps))) {
        var t = Ti;
        if (t)
          if (lg(e))
            CE(e), ug();
          else
            for (; t; )
              yE(e, t), t = cp(t);
      }
      return EE(e), e.tag === Le ? Ti = F_(e) : Ti = Lr ? cp(e.stateNode) : null, !0;
    }
    function j_() {
      return qi && Ti !== null;
    }
    function CE(e) {
      for (var t = Ti; t; )
        mE(e, t), t = cp(t);
    }
    function Ef() {
      Lr = null, Ti = null, qi = !1, Vs = !1;
    }
    function RE() {
      Uo !== null && (m1(Uo), Uo = null);
    }
    function Nr() {
      return qi;
    }
    function sg(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var H_ = w.ReactCurrentBatchConfig, P_ = null;
    function V_() {
      return H_.transition;
    }
    var Xi = {
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
      var B_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, Bs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], $s = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        $s.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          e.add(qe(b) || "Component"), $s.add(b.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          t.add(qe(b) || "Component"), $s.add(b.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(b) {
          a.add(qe(b) || "Component"), $s.add(b.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(b) {
          i.add(qe(b) || "Component"), $s.add(b.type);
        }), yp = []);
        var u = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(b) {
          u.add(qe(b) || "Component"), $s.add(b.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(b) {
          s.add(qe(b) || "Component"), $s.add(b.type);
        }), Sp = []), t.size > 0) {
          var f = Bs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Bs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Bs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Bs(e);
          Z(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var S = Bs(a);
          Z(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var k = Bs(u);
          Z(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
      };
      var jh = /* @__PURE__ */ new Map(), TE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = B_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!TE.has(e.type)) {
          var i = jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(qe(s) || "Component"), TE.add(s.type);
            });
            var u = Bs(i);
            try {
              Vt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], jh = /* @__PURE__ */ new Map();
      };
    }
    function Ki(e, t) {
      if (e && e.defaultProps) {
        var a = ft({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var cg = No(null), fg;
    fg = {};
    var Hh = null, Cf = null, dg = null, Ph = !1;
    function Vh() {
      Hh = null, Cf = null, dg = null, Ph = !1;
    }
    function _E() {
      Ph = !0;
    }
    function wE() {
      Ph = !1;
    }
    function bE(e, t, a) {
      ia(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      aa(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (mu(i.childLanes, t) ? u !== null && !mu(u.childLanes, t) && (u.childLanes = it(u.childLanes, t)) : (i.childLanes = it(i.childLanes, t), u !== null && (u.childLanes = it(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $_(e, t, a) {
      Y_(e, t, a);
    }
    function Y_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === oe) {
                var p = Hn(a), v = Nu(Jt, p);
                v.tag = $h;
                var y = i.updateQueue;
                if (y !== null) {
                  var S = y.shared, k = S.pending;
                  k === null ? v.next = v : (v.next = k.next, k.next = v), S.pending = v;
                }
              }
              i.lanes = it(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = it(b.lanes, a)), vg(i.return, a, e), s.lanes = it(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === st)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = it(U.lanes, a);
          var F = U.alternate;
          F !== null && (F.lanes = it(F.lanes, a)), vg(U, a, e), u = i.sibling;
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
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Rf(e, t) {
      Hh = e, Cf = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function Jn(e) {
      Ph && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Cf === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Cf = a, Hh.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Cf = Cf.next = a;
      }
      return t;
    }
    var Ys = null;
    function hg(e) {
      Ys === null ? Ys = [e] : Ys.push(e);
    }
    function I_() {
      if (Ys !== null) {
        for (var e = 0; e < Ys.length; e++) {
          var t = Ys[e], a = t.interleaved;
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
        Ys = null;
      }
    }
    function xE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function Q_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function W_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function Va(e, t) {
      return Bh(e, t);
    }
    var G_ = Bh;
    function Bh(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (an | La)) !== Me && k1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = it(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (u.flags & (an | La)) !== Me && k1(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var kE = 0, DE = 1, $h = 2, mg = 3, Yh = !1, yg, Ih;
    yg = !1, Ih = null;
    function gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function OE(e, t) {
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
    function Nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: kE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ao(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ih === u && !yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = !0), Gb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, G_(e, a);
      } else
        return W_(e, u, t, a);
    }
    function Qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Dd(a)) {
          var s = u.lanes;
          s = Ld(s, e.pendingLanes);
          var f = it(s, a);
          u.lanes = f, mo(e, f);
        }
      }
    }
    function Sg(e, t) {
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
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function q_(e, t, a, i, u, s) {
      switch (a.tag) {
        case DE: {
          var f = a.payload;
          if (typeof f == "function") {
            _E();
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
              wE();
            }
            return p;
          }
          return f;
        }
        case mg:
          e.flags = e.flags & ~Gn | Ie;
        case kE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            _E(), y = v.call(s, i, u);
            {
              if (e.mode & yn) {
                jn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              wE();
            }
          } else
            y = v;
          return y == null ? i : ft({}, i, y);
        }
        case $h:
          return Yh = !0, i;
      }
      return i;
    }
    function Wh(e, t, a, i) {
      var u = e.updateQueue;
      Yh = !1, Ih = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var S = e.alternate;
        if (S !== null) {
          var k = S.updateQueue, b = k.lastBaseUpdate;
          b !== f && (b === null ? k.firstBaseUpdate = y : b.next = y, k.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, F = $, V = null, ye = null, Ue = null, xe = s;
        do {
          var Tt = xe.lane, yt = xe.eventTime;
          if (mu(i, Tt)) {
            if (Ue !== null) {
              var B = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ct,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Ue = Ue.next = B;
            }
            U = q_(e, u, xe, U, t, a);
            var M = xe.callback;
            if (M !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== Ct) {
              e.flags |= hi;
              var K = u.effects;
              K === null ? u.effects = [xe] : K.push(xe);
            }
          } else {
            var N = {
              eventTime: yt,
              lane: Tt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Ue === null ? (ye = Ue = N, V = U) : Ue = Ue.next = N, F = it(F, Tt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ge = p, pe = ge.next;
            ge.next = null, xe = pe, u.lastBaseUpdate = ge, u.shared.pending = null;
          }
        } while (!0);
        Ue === null && (V = U), u.baseState = V, u.firstBaseUpdate = ye, u.lastBaseUpdate = Ue;
        var Ye = u.shared.interleaved;
        if (Ye !== null) {
          var Ze = Ye;
          do
            F = it(F, Ze.lane), Ze = Ze.next;
          while (Ze !== Ye);
        } else
          s === null && (u.shared.lanes = $);
        Ip(F), e.lanes = F, e.memoizedState = U;
      }
      Ih = null;
    }
    function X_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function LE() {
      Yh = !1;
    }
    function Gh() {
      return Yh;
    }
    function NE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, X_(f, a));
        }
    }
    var Eg = {}, ME = new D.Component().refs, Cg, Rg, Tg, _g, wg, zE, qh, bg, xg, kg;
    {
      Cg = /* @__PURE__ */ new Set(), Rg = /* @__PURE__ */ new Set(), Tg = /* @__PURE__ */ new Set(), _g = /* @__PURE__ */ new Set(), bg = /* @__PURE__ */ new Set(), wg = /* @__PURE__ */ new Set(), xg = /* @__PURE__ */ new Set(), kg = /* @__PURE__ */ new Set();
      var UE = /* @__PURE__ */ new Set();
      qh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          UE.has(a) || (UE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, zE = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          wg.has(a) || (wg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Eg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Eg);
    }
    function Dg(e, t, a, i) {
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
        zE(t, s);
      }
      var f = s == null ? u : ft({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Og = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = Da(e), u = Ra(), s = Yo(i), f = Nu(u, s);
        f.payload = t, a != null && (qh(a, "setState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, u), Qh(p, i, s)), Ol(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Da(e), u = Ra(), s = Yo(i), f = Nu(u, s);
        f.tag = DE, f.payload = t, a != null && (qh(a, "replaceState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, u), Qh(p, i, s)), Ol(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Da(e), i = Ra(), u = Yo(a), s = Nu(i, u);
        s.tag = $h, t != null && (qh(t, "forceUpdate"), s.callback = t);
        var f = Ao(a, s, u);
        f !== null && (dr(f, a, u, i), Qh(f, a, u)), wd(a, u);
      }
    };
    function AE(e, t, a, i, u, s, f) {
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
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ne(a, i) || !Ne(u, s) : !0;
    }
    function K_(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !xg.has(t) && (xg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Tg.has(t) && (Tg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || gt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function FE(e, t) {
      t.updater = Og, e.stateNode = t, io(t, e), t._reactInternalInstance = Eg;
    }
    function jE(e, t, a) {
      var i = !1, u = ri, s = ri, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ie && f._context === void 0
        );
        if (!p && !kg.has(t)) {
          kg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Q ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = mf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? yf(e, u) : ri;
      }
      var S = new t(a, s);
      if (e.mode & yn) {
        jn(!0);
        try {
          S = new t(a, s);
        } finally {
          jn(!1);
        }
      }
      var k = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      FE(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && k === null) {
          var b = xt(t) || "Component";
          Rg.has(b) || (Rg.add(b), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, S.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var U = null, F = null, V = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), U !== null || F !== null || V !== null) {
            var ye = xt(t) || "Component", Ue = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _g.has(ye) || (_g.add(ye), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ye, Ue, U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && oE(e, u, s), S;
    }
    function Z_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), Og.enqueueReplaceState(t, t.state, null));
    }
    function HE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = qe(e) || "Component";
          Cg.has(s) || (Cg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Og.enqueueReplaceState(t, t.state, null);
      }
    }
    function Lg(e, t, a, i) {
      K_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = ME, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = mf(e, t, !0);
        u.context = yf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          bg.has(p) || (bg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Dg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Z_(e, u), Wh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = at;
        y |= Kr, (e.mode & za) !== Fe && (y |= Zr), e.flags |= y;
      }
    }
    function J_(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ri;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = mf(e, t, !0);
        v = yf(e, y);
      }
      var S = t.getDerivedStateFromProps, k = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !k && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && HE(e, u, a, v), LE();
      var b = e.memoizedState, U = u.state = b;
      if (Wh(e, a, u, i), U = e.memoizedState, s === a && b === U && !Oh() && !Gh()) {
        if (typeof u.componentDidMount == "function") {
          var F = at;
          F |= Kr, (e.mode & za) !== Fe && (F |= Zr), e.flags |= F;
        }
        return !1;
      }
      typeof S == "function" && (Dg(e, t, S, a), U = e.memoizedState);
      var V = Gh() || AE(e, t, s, a, b, U, v);
      if (V) {
        if (!k && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ye = at;
          ye |= Kr, (e.mode & za) !== Fe && (ye |= Zr), e.flags |= ye;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ue = at;
          Ue |= Kr, (e.mode & za) !== Fe && (Ue |= Zr), e.flags |= Ue;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, V;
    }
    function ew(e, t, a, i, u) {
      var s = t.stateNode;
      OE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ki(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, S = a.contextType, k = ri;
      if (typeof S == "object" && S !== null)
        k = Jn(S);
      else {
        var b = mf(t, a, !0);
        k = yf(t, b);
      }
      var U = a.getDerivedStateFromProps, F = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== k) && HE(t, s, i, k), LE();
      var V = t.memoizedState, ye = s.state = V;
      if (Wh(t, i, s, u), ye = t.memoizedState, f === v && V === ye && !Oh() && !Gh() && !ke)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Oa), !1;
      typeof U == "function" && (Dg(t, a, U, i), ye = t.memoizedState);
      var Ue = Gh() || AE(t, a, p, i, V, ye, k) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return Ue ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ye, k), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ye, k)), typeof s.componentDidUpdate == "function" && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Oa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Oa), t.memoizedProps = i, t.memoizedState = ye), s.props = i, s.state = ye, s.context = k, Ue;
    }
    var Ng, Mg, zg, Ug, Ag, PE = function(e, t) {
    };
    Ng = !1, Mg = !1, zg = {}, Ug = {}, Ag = {}, PE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        Ug[a] || (Ug[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || Be) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = qe(e) || "Component";
          zg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), zg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== oe)
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
          var S = function(k) {
            var b = v.refs;
            b === ME && (b = v.refs = {}), k === null ? delete b[y] : b[y] = k;
          };
          return S._stringRef = y, S;
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
    function Xh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Kh(e) {
      {
        var t = qe(e) || "Component";
        if (Ag[t])
          return;
        Ag[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function VE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function BE(e) {
      function t(N, B) {
        if (e) {
          var M = N.deletions;
          M === null ? (N.deletions = [B], N.flags |= Ut) : M.push(B);
        }
      }
      function a(N, B) {
        if (!e)
          return null;
        for (var M = B; M !== null; )
          t(N, M), M = M.sibling;
        return null;
      }
      function i(N, B) {
        for (var M = /* @__PURE__ */ new Map(), K = B; K !== null; )
          K.key !== null ? M.set(K.key, K) : M.set(K.index, K), K = K.sibling;
        return M;
      }
      function u(N, B) {
        var M = Zs(N, B);
        return M.index = 0, M.sibling = null, M;
      }
      function s(N, B, M) {
        if (N.index = M, !e)
          return N.flags |= pd, B;
        var K = N.alternate;
        if (K !== null) {
          var ge = K.index;
          return ge < B ? (N.flags |= an, B) : ge;
        } else
          return N.flags |= an, B;
      }
      function f(N) {
        return e && N.alternate === null && (N.flags |= an), N;
      }
      function p(N, B, M, K) {
        if (B === null || B.tag !== Oe) {
          var ge = s0(M, N.mode, K);
          return ge.return = N, ge;
        } else {
          var pe = u(B, M);
          return pe.return = N, pe;
        }
      }
      function v(N, B, M, K) {
        var ge = M.type;
        if (ge === pa)
          return S(N, B, M.props.children, K, M.key);
        if (B !== null && (B.elementType === ge || // Keep this check inline so it only runs on the false path:
        N1(B, M) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ge == "object" && ge !== null && ge.$$typeof === ze && VE(ge) === B.type)) {
          var pe = u(B, M.props);
          return pe.ref = Ep(N, B, M), pe.return = N, pe._debugSource = M._source, pe._debugOwner = M._owner, pe;
        }
        var Ye = o0(M, N.mode, K);
        return Ye.ref = Ep(N, B, M), Ye.return = N, Ye;
      }
      function y(N, B, M, K) {
        if (B === null || B.tag !== ce || B.stateNode.containerInfo !== M.containerInfo || B.stateNode.implementation !== M.implementation) {
          var ge = c0(M, N.mode, K);
          return ge.return = N, ge;
        } else {
          var pe = u(B, M.children || []);
          return pe.return = N, pe;
        }
      }
      function S(N, B, M, K, ge) {
        if (B === null || B.tag !== et) {
          var pe = Qo(M, N.mode, K, ge);
          return pe.return = N, pe;
        } else {
          var Ye = u(B, M);
          return Ye.return = N, Ye;
        }
      }
      function k(N, B, M) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var K = s0("" + B, N.mode, M);
          return K.return = N, K;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case oi: {
              var ge = o0(B, N.mode, M);
              return ge.ref = Ep(N, null, B), ge.return = N, ge;
            }
            case br: {
              var pe = c0(B, N.mode, M);
              return pe.return = N, pe;
            }
            case ze: {
              var Ye = B._payload, Ze = B._init;
              return k(N, Ze(Ye), M);
            }
          }
          if (gt(B) || Ga(B)) {
            var Gt = Qo(B, N.mode, M, null);
            return Gt.return = N, Gt;
          }
          Xh(N, B);
        }
        return typeof B == "function" && Kh(N), null;
      }
      function b(N, B, M, K) {
        var ge = B !== null ? B.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number")
          return ge !== null ? null : p(N, B, "" + M, K);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case oi:
              return M.key === ge ? v(N, B, M, K) : null;
            case br:
              return M.key === ge ? y(N, B, M, K) : null;
            case ze: {
              var pe = M._payload, Ye = M._init;
              return b(N, B, Ye(pe), K);
            }
          }
          if (gt(M) || Ga(M))
            return ge !== null ? null : S(N, B, M, K, null);
          Xh(N, M);
        }
        return typeof M == "function" && Kh(N), null;
      }
      function U(N, B, M, K, ge) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var pe = N.get(M) || null;
          return p(B, pe, "" + K, ge);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case oi: {
              var Ye = N.get(K.key === null ? M : K.key) || null;
              return v(B, Ye, K, ge);
            }
            case br: {
              var Ze = N.get(K.key === null ? M : K.key) || null;
              return y(B, Ze, K, ge);
            }
            case ze:
              var Gt = K._payload, Nt = K._init;
              return U(N, B, M, Nt(Gt), ge);
          }
          if (gt(K) || Ga(K)) {
            var $n = N.get(M) || null;
            return S(B, $n, K, ge, null);
          }
          Xh(B, K);
        }
        return typeof K == "function" && Kh(B), null;
      }
      function F(N, B, M) {
        {
          if (typeof N != "object" || N === null)
            return B;
          switch (N.$$typeof) {
            case oi:
            case br:
              PE(N, M);
              var K = N.key;
              if (typeof K != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(K);
                break;
              }
              if (!B.has(K)) {
                B.add(K);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case ze:
              var ge = N._payload, pe = N._init;
              F(pe(ge), B, M);
              break;
          }
        }
        return B;
      }
      function V(N, B, M, K) {
        for (var ge = null, pe = 0; pe < M.length; pe++) {
          var Ye = M[pe];
          ge = F(Ye, ge, N);
        }
        for (var Ze = null, Gt = null, Nt = B, $n = 0, Mt = 0, Un = null; Nt !== null && Mt < M.length; Mt++) {
          Nt.index > Mt ? (Un = Nt, Nt = null) : Un = Nt.sibling;
          var ua = b(N, Nt, M[Mt], K);
          if (ua === null) {
            Nt === null && (Nt = Un);
            break;
          }
          e && Nt && ua.alternate === null && t(N, Nt), $n = s(ua, $n, Mt), Gt === null ? Ze = ua : Gt.sibling = ua, Gt = ua, Nt = Un;
        }
        if (Mt === M.length) {
          if (a(N, Nt), Nr()) {
            var Hr = Mt;
            Hs(N, Hr);
          }
          return Ze;
        }
        if (Nt === null) {
          for (; Mt < M.length; Mt++) {
            var ii = k(N, M[Mt], K);
            ii !== null && ($n = s(ii, $n, Mt), Gt === null ? Ze = ii : Gt.sibling = ii, Gt = ii);
          }
          if (Nr()) {
            var Ta = Mt;
            Hs(N, Ta);
          }
          return Ze;
        }
        for (var _a = i(N, Nt); Mt < M.length; Mt++) {
          var oa = U(_a, N, Mt, M[Mt], K);
          oa !== null && (e && oa.alternate !== null && _a.delete(oa.key === null ? Mt : oa.key), $n = s(oa, $n, Mt), Gt === null ? Ze = oa : Gt.sibling = oa, Gt = oa);
        }
        if (e && _a.forEach(function(Hf) {
          return t(N, Hf);
        }), Nr()) {
          var ju = Mt;
          Hs(N, ju);
        }
        return Ze;
      }
      function ye(N, B, M, K) {
        var ge = Ga(M);
        if (typeof ge != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          M[Symbol.toStringTag] === "Generator" && (Mg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Mg = !0), M.entries === ge && (Ng || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ng = !0);
          var pe = ge.call(M);
          if (pe)
            for (var Ye = null, Ze = pe.next(); !Ze.done; Ze = pe.next()) {
              var Gt = Ze.value;
              Ye = F(Gt, Ye, N);
            }
        }
        var Nt = ge.call(M);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Mt = null, Un = B, ua = 0, Hr = 0, ii = null, Ta = Nt.next(); Un !== null && !Ta.done; Hr++, Ta = Nt.next()) {
          Un.index > Hr ? (ii = Un, Un = null) : ii = Un.sibling;
          var _a = b(N, Un, Ta.value, K);
          if (_a === null) {
            Un === null && (Un = ii);
            break;
          }
          e && Un && _a.alternate === null && t(N, Un), ua = s(_a, ua, Hr), Mt === null ? $n = _a : Mt.sibling = _a, Mt = _a, Un = ii;
        }
        if (Ta.done) {
          if (a(N, Un), Nr()) {
            var oa = Hr;
            Hs(N, oa);
          }
          return $n;
        }
        if (Un === null) {
          for (; !Ta.done; Hr++, Ta = Nt.next()) {
            var ju = k(N, Ta.value, K);
            ju !== null && (ua = s(ju, ua, Hr), Mt === null ? $n = ju : Mt.sibling = ju, Mt = ju);
          }
          if (Nr()) {
            var Hf = Hr;
            Hs(N, Hf);
          }
          return $n;
        }
        for (var Xp = i(N, Un); !Ta.done; Hr++, Ta = Nt.next()) {
          var Gl = U(Xp, N, Hr, Ta.value, K);
          Gl !== null && (e && Gl.alternate !== null && Xp.delete(Gl.key === null ? Hr : Gl.key), ua = s(Gl, ua, Hr), Mt === null ? $n = Gl : Mt.sibling = Gl, Mt = Gl);
        }
        if (e && Xp.forEach(function(vk) {
          return t(N, vk);
        }), Nr()) {
          var pk = Hr;
          Hs(N, pk);
        }
        return $n;
      }
      function Ue(N, B, M, K) {
        if (B !== null && B.tag === Oe) {
          a(N, B.sibling);
          var ge = u(B, M);
          return ge.return = N, ge;
        }
        a(N, B);
        var pe = s0(M, N.mode, K);
        return pe.return = N, pe;
      }
      function xe(N, B, M, K) {
        for (var ge = M.key, pe = B; pe !== null; ) {
          if (pe.key === ge) {
            var Ye = M.type;
            if (Ye === pa) {
              if (pe.tag === et) {
                a(N, pe.sibling);
                var Ze = u(pe, M.props.children);
                return Ze.return = N, Ze._debugSource = M._source, Ze._debugOwner = M._owner, Ze;
              }
            } else if (pe.elementType === Ye || // Keep this check inline so it only runs on the false path:
            N1(pe, M) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ye == "object" && Ye !== null && Ye.$$typeof === ze && VE(Ye) === pe.type) {
              a(N, pe.sibling);
              var Gt = u(pe, M.props);
              return Gt.ref = Ep(N, pe, M), Gt.return = N, Gt._debugSource = M._source, Gt._debugOwner = M._owner, Gt;
            }
            a(N, pe);
            break;
          } else
            t(N, pe);
          pe = pe.sibling;
        }
        if (M.type === pa) {
          var Nt = Qo(M.props.children, N.mode, K, M.key);
          return Nt.return = N, Nt;
        } else {
          var $n = o0(M, N.mode, K);
          return $n.ref = Ep(N, B, M), $n.return = N, $n;
        }
      }
      function Tt(N, B, M, K) {
        for (var ge = M.key, pe = B; pe !== null; ) {
          if (pe.key === ge)
            if (pe.tag === ce && pe.stateNode.containerInfo === M.containerInfo && pe.stateNode.implementation === M.implementation) {
              a(N, pe.sibling);
              var Ye = u(pe, M.children || []);
              return Ye.return = N, Ye;
            } else {
              a(N, pe);
              break;
            }
          else
            t(N, pe);
          pe = pe.sibling;
        }
        var Ze = c0(M, N.mode, K);
        return Ze.return = N, Ze;
      }
      function yt(N, B, M, K) {
        var ge = typeof M == "object" && M !== null && M.type === pa && M.key === null;
        if (ge && (M = M.props.children), typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case oi:
              return f(xe(N, B, M, K));
            case br:
              return f(Tt(N, B, M, K));
            case ze:
              var pe = M._payload, Ye = M._init;
              return yt(N, B, Ye(pe), K);
          }
          if (gt(M))
            return V(N, B, M, K);
          if (Ga(M))
            return ye(N, B, M, K);
          Xh(N, M);
        }
        return typeof M == "string" && M !== "" || typeof M == "number" ? f(Ue(N, B, "" + M, K)) : (typeof M == "function" && Kh(N), a(N, B));
      }
      return yt;
    }
    var Tf = BE(!0), $E = BE(!1);
    function tw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Zs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Zs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function nw(e, t) {
      for (var a = e.child; a !== null; )
        Lx(a, t), a = a.sibling;
    }
    var Cp = {}, Fo = No(Cp), Rp = No(Cp), Zh = No(Cp);
    function Jh(e) {
      if (e === Cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function YE() {
      var e = Jh(Zh.current);
      return e;
    }
    function Fg(e, t) {
      ia(Zh, t, e), ia(Rp, e, e), ia(Fo, Cp, e);
      var a = mT(t);
      aa(Fo, e), ia(Fo, a, e);
    }
    function _f(e) {
      aa(Fo, e), aa(Rp, e), aa(Zh, e);
    }
    function jg() {
      var e = Jh(Fo.current);
      return e;
    }
    function IE(e) {
      Jh(Zh.current);
      var t = Jh(Fo.current), a = yT(t, e.type);
      t !== a && (ia(Rp, e, e), ia(Fo, a, e));
    }
    function Hg(e) {
      Rp.current === e && (aa(Fo, e), aa(Rp, e));
    }
    var rw = 0, QE = 1, WE = 1, Tp = 2, Zi = No(rw);
    function Pg(e, t) {
      return (e & t) !== 0;
    }
    function wf(e) {
      return e & QE;
    }
    function Vg(e, t) {
      return e & QE | t;
    }
    function aw(e, t) {
      return e | t;
    }
    function jo(e, t) {
      ia(Zi, t, e);
    }
    function bf(e) {
      aa(Zi, e);
    }
    function iw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Le) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || rE(i) || Wy(i))
              return t;
          }
        } else if (t.tag === Ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ie) !== Me;
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
    ), Mr = (
      /*   */
      8
    ), Bg = [];
    function $g() {
      for (var e = 0; e < Bg.length; e++) {
        var t = Bg[e];
        t._workInProgressVersionPrimary = null;
      }
      Bg.length = 0;
    }
    function lw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var he = w.ReactCurrentDispatcher, _p = w.ReactCurrentBatchConfig, Yg, xf;
    Yg = /* @__PURE__ */ new Set();
    var Is = $, Wt = null, ur = null, or = null, tm = !1, wp = !1, bp = 0, uw = 0, ow = 25, Y = null, _i = null, Ho = -1, Ig = !1;
    function $t() {
      {
        var e = Y;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ue() {
      {
        var e = Y;
        _i !== null && (Ho++, _i[Ho] !== e && sw(e));
      }
    }
    function kf(e) {
      e != null && !gt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Y, typeof e);
    }
    function sw(e) {
      {
        var t = qe(Wt);
        if (!Yg.has(t) && (Yg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = _i[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

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
    function Qg(e, t) {
      if (Ig)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Y), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Y, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Re(e[a], t[a]))
          return !1;
      return !0;
    }
    function Df(e, t, a, i, u, s) {
      Is = s, Wt = t, _i = e !== null ? e._debugHookTypes : null, Ho = -1, Ig = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? he.current = hC : _i !== null ? he.current = vC : he.current = pC;
      var f = a(i, u);
      if (wp) {
        var p = 0;
        do {
          if (wp = !1, bp = 0, p >= ow)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ig = !1, ur = null, or = null, t.updateQueue = null, Ho = -1, he.current = mC, f = a(i, u);
        } while (wp);
      }
      he.current = vm, t._debugHookTypes = _i;
      var v = ur !== null && ur.next !== null;
      if (Is = $, Wt = null, ur = null, or = null, Y = null, _i = null, Ho = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pt) !== Fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Of() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function GE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & za) !== Fe ? t.flags &= ~(lu | Zr | cn | at) : t.flags &= ~(cn | at), e.lanes = ho(e.lanes, a);
    }
    function qE() {
      if (he.current = vm, tm) {
        for (var e = Wt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Is = $, Wt = null, ur = null, or = null, _i = null, Ho = -1, Y = null, oC = !1, wp = !1, bp = 0;
    }
    function Bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? Wt.memoizedState = or = e : or = or.next = e, or;
    }
    function wi() {
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
    function XE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Wg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Gg(e, t, a) {
      var i = Bl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = pw.bind(null, Wt, s);
      return [i.memoizedState, f];
    }
    function qg(e, t, a) {
      var i = wi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ur, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var S = f.next, k = s.baseState, b = null, U = null, F = null, V = S;
        do {
          var ye = V.lane;
          if (mu(Is, ye)) {
            if (F !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ct,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              F = F.next = xe;
            }
            if (V.hasEagerState)
              k = V.eagerState;
            else {
              var Tt = V.action;
              k = e(k, Tt);
            }
          } else {
            var Ue = {
              lane: ye,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            F === null ? (U = F = Ue, b = k) : F = F.next = Ue, Wt.lanes = it(Wt.lanes, ye), Ip(ye);
          }
          V = V.next;
        } while (V !== null && V !== S);
        F === null ? b = k : F.next = U, Re(k, i.memoizedState) || Mp(), i.memoizedState = k, i.baseState = b, i.baseQueue = F, u.lastRenderedState = k;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var N = yt;
        do {
          var B = N.lane;
          Wt.lanes = it(Wt.lanes, B), Ip(B), N = N.next;
        } while (N !== yt);
      } else
        f === null && (u.lanes = $);
      var M = u.dispatch;
      return [i.memoizedState, M];
    }
    function Xg(e, t, a) {
      var i = wi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var S = y.action;
          p = e(p, S), y = y.next;
        } while (y !== v);
        Re(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function eD(e, t, a) {
    }
    function tD(e, t, a) {
    }
    function Kg(e, t, a) {
      var i = Wt, u = Bl(), s, f = Nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), xf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), xf = !0);
      } else {
        if (s = t(), !xf) {
          var p = t();
          Re(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), xf = !0);
        }
        var v = Nm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(v, Is) || KE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(JE.bind(null, i, y, e), [e]), i.flags |= cn, xp(ir | Mr, ZE.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = Wt, u = wi(), s = t();
      if (!xf) {
        var f = t();
        Re(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), xf = !0);
      }
      var p = u.memoizedState, v = !Re(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (Dp(JE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      or !== null && or.memoizedState.tag & ir) {
        i.flags |= cn, xp(ir | Mr, ZE.bind(null, i, y, s, t), void 0, null);
        var S = Nm();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(S, Is) || KE(i, t, s);
      }
      return s;
    }
    function KE(e, t, a) {
      e.flags |= ps;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Wt.updateQueue;
      if (u === null)
        u = XE(), Wt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ZE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, eC(t) && tC(e);
    }
    function JE(e, t, a) {
      var i = function() {
        eC(t) && tC(e);
      };
      return a(i);
    }
    function eC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Re(a, i);
      } catch {
        return !0;
      }
    }
    function tC(e) {
      var t = Va(e, Ve);
      t !== null && dr(t, e, Ve, Jt);
    }
    function rm(e) {
      var t = Bl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: Wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = vw.bind(null, Wt, a);
      return [t.memoizedState, i];
    }
    function Zg(e) {
      return qg(Wg);
    }
    function Jg(e) {
      return Xg(Wg);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Wt.updateQueue;
      if (s === null)
        s = XE(), Wt.updateQueue = s, s.lastEffect = u.next = u;
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
    function eS(e) {
      var t = Bl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = wi();
      return t.memoizedState;
    }
    function kp(e, t, a, i) {
      var u = Bl(), s = i === void 0 ? null : i;
      Wt.flags |= e, u.memoizedState = xp(ir | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = wi(), s = i === void 0 ? null : i, f = void 0;
      if (ur !== null) {
        var p = ur.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Qg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      Wt.flags |= e, u.memoizedState = xp(ir | t, a, f, s);
    }
    function lm(e, t) {
      return (Wt.mode & za) !== Fe ? kp(lu | cn | _l, Mr, e, t) : kp(cn | _l, Mr, e, t);
    }
    function Dp(e, t) {
      return im(cn, Mr, e, t);
    }
    function tS(e, t) {
      return kp(at, Vl, e, t);
    }
    function um(e, t) {
      return im(at, Vl, e, t);
    }
    function nS(e, t) {
      var a = at;
      return a |= Kr, (Wt.mode & za) !== Fe && (a |= Zr), kp(a, lr, e, t);
    }
    function om(e, t) {
      return im(at, lr, e, t);
    }
    function nC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function rS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = at;
      return u |= Kr, (Wt.mode & za) !== Fe && (u |= Zr), kp(u, lr, nC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(at, lr, nC.bind(null, t, e), i);
    }
    function cw(e, t) {
    }
    var cm = cw;
    function aS(e, t) {
      var a = Bl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = wi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Qg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function iS(e, t) {
      var a = Bl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function dm(e, t) {
      var a = wi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Qg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function lS(e) {
      var t = Bl();
      return t.memoizedState = e, e;
    }
    function rC(e) {
      var t = wi(), a = ur, i = a.memoizedState;
      return iC(t, i, e);
    }
    function aC(e) {
      var t = wi();
      if (ur === null)
        return t.memoizedState = e, e;
      var a = ur.memoizedState;
      return iC(t, a, e);
    }
    function iC(e, t, a) {
      var i = !dy(Is);
      if (i) {
        if (!Re(a, t)) {
          var u = Od();
          Wt.lanes = it(Wt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function fw(e, t, a) {
      var i = Aa();
      Pn(Sr(i, ar)), e(!0);
      var u = _p.transition;
      _p.transition = {};
      var s = _p.transition;
      _p.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), _p.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Z("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function uS() {
      var e = rm(!1), t = e[0], a = e[1], i = fw.bind(null, a), u = Bl();
      return u.memoizedState = i, [t, i];
    }
    function lC() {
      var e = Zg(), t = e[0], a = wi(), i = a.memoizedState;
      return [t, i];
    }
    function uC() {
      var e = Jg(), t = e[0], a = wi(), i = a.memoizedState;
      return [t, i];
    }
    var oC = !1;
    function dw() {
      return oC;
    }
    function oS() {
      var e = Bl(), t = Nm(), a = t.identifierPrefix, i;
      if (Nr()) {
        var u = b_();
        i = ":" + a + "R" + u;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = uw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = wi(), t = e.memoizedState;
      return t;
    }
    function pw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sC(e))
        cC(t, u);
      else {
        var s = xE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          dr(s, e, i, f), fC(s, t, i);
        }
      }
      dC(e, i);
    }
    function vw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sC(e))
        cC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = he.current, he.current = Ji;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Re(y, v)) {
                Q_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              he.current = p;
            }
          }
        }
        var S = xE(e, t, u, i);
        if (S !== null) {
          var k = Ra();
          dr(S, e, i, k), fC(S, t, i);
        }
      }
      dC(e, i);
    }
    function sC(e) {
      var t = e.alternate;
      return e === Wt || t !== null && t === Wt;
    }
    function cC(e, t) {
      wp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function fC(e, t, a) {
      if (Dd(a)) {
        var i = t.lanes;
        i = Ld(i, e.pendingLanes);
        var u = it(i, a);
        t.lanes = u, mo(e, u);
      }
    }
    function dC(e, t, a) {
      Ol(e, t);
    }
    var vm = {
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
      unstable_isNewReconciler: ne
    }, pC = null, vC = null, hC = null, mC = null, $l = null, Ji = null, hm = null;
    {
      var sS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      pC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", $t(), kf(t), aS(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", $t(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", $t(), kf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", $t(), kf(a), rS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", $t(), kf(t), tS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", $t(), kf(t), nS(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", $t(), kf(t);
          var a = he.current;
          he.current = $l;
          try {
            return iS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", $t();
          var i = he.current;
          he.current = $l;
          try {
            return Gg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", $t(), eS(e);
        },
        useState: function(e) {
          Y = "useState", $t();
          var t = he.current;
          he.current = $l;
          try {
            return rm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", $t(), lS(e);
        },
        useTransition: function() {
          return Y = "useTransition", $t(), uS();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", $t(), Kg(e, t, a);
        },
        useId: function() {
          return Y = "useId", $t(), oS();
        },
        unstable_isNewReconciler: ne
      }, vC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), aS(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), rS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), tS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), nS(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = he.current;
          he.current = $l;
          try {
            return iS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = he.current;
          he.current = $l;
          try {
            return Gg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), eS(e);
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = he.current;
          he.current = $l;
          try {
            return rm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), lS(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), uS();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), Kg(e, t, a);
        },
        useId: function() {
          return Y = "useId", ue(), oS();
        },
        unstable_isNewReconciler: ne
      }, hC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), fm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), om(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = he.current;
          he.current = Ji;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = he.current;
          he.current = Ji;
          try {
            return qg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), am();
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = he.current;
          he.current = Ji;
          try {
            return Zg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), cm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), rC(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), lC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), nm(e, t);
        },
        useId: function() {
          return Y = "useId", ue(), pm();
        },
        unstable_isNewReconciler: ne
      }, mC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), fm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), om(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = he.current;
          he.current = hm;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = he.current;
          he.current = hm;
          try {
            return Xg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), am();
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = he.current;
          he.current = hm;
          try {
            return Jg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), cm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), aC(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), uC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), nm(e, t);
        },
        useId: function() {
          return Y = "useId", ue(), pm();
        },
        unstable_isNewReconciler: ne
      }, $l = {
        readContext: function(e) {
          return sS(), Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Xe(), $t(), aS(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Xe(), $t(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Xe(), $t(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Xe(), $t(), rS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Xe(), $t(), tS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Xe(), $t(), nS(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Xe(), $t();
          var a = he.current;
          he.current = $l;
          try {
            return iS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Xe(), $t();
          var i = he.current;
          he.current = $l;
          try {
            return Gg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Xe(), $t(), eS(e);
        },
        useState: function(e) {
          Y = "useState", Xe(), $t();
          var t = he.current;
          he.current = $l;
          try {
            return rm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Xe(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Xe(), $t(), lS(e);
        },
        useTransition: function() {
          return Y = "useTransition", Xe(), $t(), uS();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Xe(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Xe(), $t(), Kg(e, t, a);
        },
        useId: function() {
          return Y = "useId", Xe(), $t(), oS();
        },
        unstable_isNewReconciler: ne
      }, Ji = {
        readContext: function(e) {
          return sS(), Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Xe(), ue(), fm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Xe(), ue(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Xe(), ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Xe(), ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Xe(), ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Xe(), ue(), om(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Xe(), ue();
          var a = he.current;
          he.current = Ji;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Xe(), ue();
          var i = he.current;
          he.current = Ji;
          try {
            return qg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Xe(), ue(), am();
        },
        useState: function(e) {
          Y = "useState", Xe(), ue();
          var t = he.current;
          he.current = Ji;
          try {
            return Zg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Xe(), ue(), cm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Xe(), ue(), rC(e);
        },
        useTransition: function() {
          return Y = "useTransition", Xe(), ue(), lC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Xe(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Xe(), ue(), nm(e, t);
        },
        useId: function() {
          return Y = "useId", Xe(), ue(), pm();
        },
        unstable_isNewReconciler: ne
      }, hm = {
        readContext: function(e) {
          return sS(), Jn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Xe(), ue(), fm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Xe(), ue(), Jn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Xe(), ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Xe(), ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Xe(), ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Xe(), ue(), om(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Xe(), ue();
          var a = he.current;
          he.current = Ji;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Xe(), ue();
          var i = he.current;
          he.current = Ji;
          try {
            return Xg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Xe(), ue(), am();
        },
        useState: function(e) {
          Y = "useState", Xe(), ue();
          var t = he.current;
          he.current = Ji;
          try {
            return Jg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Xe(), ue(), cm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Xe(), ue(), aC(e);
        },
        useTransition: function() {
          return Y = "useTransition", Xe(), ue(), uC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Xe(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Xe(), ue(), nm(e, t);
        },
        useId: function() {
          return Y = "useId", Xe(), ue(), pm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Po = O.unstable_now, yC = 0, mm = -1, Op = -1, ym = -1, cS = !1, gm = !1;
    function gC() {
      return cS;
    }
    function hw() {
      gm = !0;
    }
    function mw() {
      cS = !1, gm = !1;
    }
    function yw() {
      cS = gm, gm = !1;
    }
    function SC() {
      return yC;
    }
    function EC() {
      yC = Po();
    }
    function fS(e) {
      Op = Po(), e.actualStartTime < 0 && (e.actualStartTime = Po());
    }
    function CC(e) {
      Op = -1;
    }
    function Sm(e, t) {
      if (Op >= 0) {
        var a = Po() - Op;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Op = -1;
      }
    }
    function Yl(e) {
      if (mm >= 0) {
        var t = Po() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case vt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function dS(e) {
      if (ym >= 0) {
        var t = Po() - ym;
        ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case vt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Il() {
      mm = Po();
    }
    function pS() {
      ym = Po();
    }
    function vS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Qs(e, t) {
      return {
        value: e,
        source: t,
        stack: Qu(t),
        digest: null
      };
    }
    function hS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function gw(e, t) {
      return !0;
    }
    function mS(e, t) {
      try {
        var a = gw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === oe)
            return;
          console.error(i);
        }
        var p = u ? qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var k = v + `
` + f + `

` + ("" + y);
        console.error(k);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var Sw = typeof WeakMap == "function" ? WeakMap : Map;
    function RC(e, t, a) {
      var i = Nu(Jt, a);
      i.tag = mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        fx(u), mS(e, t);
      }, i;
    }
    function yS(e, t, a) {
      var i = Nu(Jt, a);
      i.tag = mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          M1(e), mS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        M1(e), mS(e, t), typeof u != "function" && sx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, Ve) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), i;
    }
    function TC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Sw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = dx.bind(null, e, t, a);
        rr && Qp(e, a), t.then(s, s);
      }
    }
    function Ew(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Cw(e, t) {
      var a = e.tag;
      if ((e.mode & pt) === Fe && (a === re || a === Ke || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function _C(e) {
      var t = e;
      do {
        if (t.tag === Le && iw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function wC(e, t, a, i, u) {
      if ((e.mode & pt) === Fe) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= Ie, a.flags |= vs, a.flags &= ~(vc | va), a.tag === oe) {
            var s = a.alternate;
            if (s === null)
              a.tag = wn;
            else {
              var f = Nu(Jt, Ve);
              f.tag = $h, Ao(a, f, Ve);
            }
          }
          a.lanes = it(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function Rw(e, t, a, i, u) {
      if (a.flags |= va, rr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Cw(a), Nr() && a.mode & pt && hE();
        var f = _C(t);
        if (f !== null) {
          f.flags &= ~Rn, wC(f, t, a, e, u), f.mode & pt && TC(e, s, u), Ew(f, e, s);
          return;
        } else {
          if (!vo(u)) {
            TC(e, s, u), XS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nr() && a.mode & pt) {
        hE();
        var v = _C(t);
        if (v !== null) {
          (v.flags & Gn) === Me && (v.flags |= Rn), wC(v, t, a, e, u), sg(Qs(i, a));
          return;
        }
      }
      i = Qs(i, a), tx(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var S = i;
            y.flags |= Gn;
            var k = Hn(u);
            y.lanes = it(y.lanes, k);
            var b = RC(y, S, k);
            Sg(y, b);
            return;
          }
          case oe:
            var U = i, F = y.type, V = y.stateNode;
            if ((y.flags & Ie) === Me && (typeof F.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !_1(V))) {
              y.flags |= Gn;
              var ye = Hn(u);
              y.lanes = it(y.lanes, ye);
              var Ue = yS(y, U, ye);
              Sg(y, Ue);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Tw() {
      return null;
    }
    var Lp = w.ReactCurrentOwner, el = !1, gS, Np, SS, ES, CS, Ws, RS, Em;
    gS = {}, Np = {}, SS = {}, ES = {}, CS = {}, Ws = !1, RS = {}, Em = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = $E(t, null, a, i) : t.child = Tf(t, e.child, a, i);
    }
    function _w(e, t, a, i) {
      t.child = Tf(t, e.child, null, i), t.child = Tf(t, null, a, i);
    }
    function bC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Rf(t, u), Dl(t);
      {
        if (Lp.current = t, Gr(!0), v = Df(e, t, f, i, p, u), y = Of(), t.mode & yn) {
          jn(!0);
          try {
            v = Df(e, t, f, i, p, u), y = Of();
          } finally {
            jn(!1);
          }
        }
        Gr(!1);
      }
      return uu(), e !== null && !el ? (GE(e, t, u), Mu(e, t, u)) : (Nr() && y && rg(t), t.flags |= Rl, Ea(e, t, v, u), t.child);
    }
    function xC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Dx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = jf(s), t.tag = $e, t.type = f, wS(t, s), kC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Gi(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          );
        }
        var v = u0(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, S = y.propTypes;
        S && Gi(
          S,
          i,
          // Resolved props
          "prop",
          xt(y)
        );
      }
      var k = e.child, b = LS(e, u);
      if (!b) {
        var U = k.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Ne, F(U, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Rl;
      var V = Zs(k, i);
      return V.ref = t.ref, V.return = t, t.child = V, V;
    }
    function kC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ze) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Gi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (Ne(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (el = !1, t.pendingProps = i = S, LS(e, u))
            (e.flags & vs) !== Me && (el = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return TS(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & pt) === Fe) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Mm(t, a);
        } else if (ra(a, na)) {
          var k = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = k;
          var b = s !== null ? s.baseLanes : a;
          Mm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = it(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, Mm(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = it(s.baseLanes, a), t.memoizedState = null) : U = a, Mm(t, U);
      }
      return Ea(e, t, u, a), t.child;
    }
    function ww(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function bw(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function xw(e, t, a) {
      {
        t.flags |= at;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function OC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= vd);
    }
    function TS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = mf(t, a, !0);
        f = yf(t, p);
      }
      var v, y;
      Rf(t, u), Dl(t);
      {
        if (Lp.current = t, Gr(!0), v = Df(e, t, a, i, f, u), y = Of(), t.mode & yn) {
          jn(!0);
          try {
            v = Df(e, t, a, i, f, u), y = Of();
          } finally {
            jn(!1);
          }
        }
        Gr(!1);
      }
      return uu(), e !== null && !el ? (GE(e, t, u), Mu(e, t, u)) : (Nr() && y && rg(t), t.flags |= Rl, Ea(e, t, v, u), t.child);
    }
    function LC(e, t, a, i, u) {
      {
        switch (Yx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ie, t.flags |= Gn;
            var y = new Error("Simulated error coming from DevTools"), S = Hn(u);
            t.lanes = it(t.lanes, S);
            var k = yS(t, Qs(y, t), S);
            Sg(t, k);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Gi(
            b,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var U;
      Pl(a) ? (U = !0, Nh(t)) : U = !1, Rf(t, u);
      var F = t.stateNode, V;
      F === null ? (Rm(e, t), jE(t, a, i), Lg(t, a, i, u), V = !0) : e === null ? V = J_(t, a, i, u) : V = ew(e, t, a, i, u);
      var ye = _S(e, t, a, V, U, u);
      {
        var Ue = t.stateNode;
        V && Ue.props !== i && (Ws || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), Ws = !0);
      }
      return ye;
    }
    function _S(e, t, a, i, u, s) {
      OC(e, t);
      var f = (t.flags & Ie) !== Me;
      if (!i && !f)
        return u && fE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, CC();
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
        uu();
      }
      return t.flags |= Rl, e !== null && f ? _w(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && fE(t, a, !0), t.child;
    }
    function NC(e) {
      var t = e.stateNode;
      t.pendingContext ? sE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sE(e, t.context, !1), Fg(e, t.containerInfo);
    }
    function kw(e, t, a) {
      if (NC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      OE(e, t), Wh(t, i, null, a);
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
          var S = Qs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return MC(e, t, p, a, S);
        } else if (p !== s) {
          var k = Qs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return MC(e, t, p, a, k);
        } else {
          N_(t);
          var b = $E(t, null, p, a);
          t.child = b;
          for (var U = b; U; )
            U.flags = U.flags & ~an | La, U = U.sibling;
        }
      } else {
        if (Ef(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function MC(e, t, a, i, u) {
      return Ef(), sg(u), t.flags |= Rn, Ea(e, t, a, i), t.child;
    }
    function Dw(e, t, a) {
      IE(t), e === null && og(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = $y(i, u);
      return p ? f = null : s !== null && $y(i, s) && (t.flags |= Bt), OC(e, t), Ea(e, t, f, a), t.child;
    }
    function Ow(e, t) {
      return e === null && og(t), null;
    }
    function Lw(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = Ox(v), S = Ki(v, u), k;
      switch (y) {
        case re:
          return wS(t, v), t.type = v = jf(v), k = TS(null, t, v, S, i), k;
        case oe:
          return t.type = v = t0(v), k = LC(null, t, v, S, i), k;
        case Ke:
          return t.type = v = n0(v), k = bC(null, t, v, S, i), k;
        case ct: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Gi(
              b,
              S,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return k = xC(
            null,
            t,
            v,
            Ki(v.type, S),
            // The inner type can have defaults too
            i
          ), k;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ze && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function Nw(e, t, a, i, u) {
      Rm(e, t), t.tag = oe;
      var s;
      return Pl(a) ? (s = !0, Nh(t)) : s = !1, Rf(t, u), jE(t, a, i), Lg(t, a, i, u), _S(null, t, a, !0, s, u);
    }
    function Mw(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s;
      {
        var f = mf(t, a, !1);
        s = yf(t, f);
      }
      Rf(t, i);
      var p, v;
      Dl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          gS[y] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), gS[y] = !0);
        }
        t.mode & yn && Xi.recordLegacyContextWarning(t, null), Gr(!0), Lp.current = t, p = Df(null, t, a, u, s, i), v = Of(), Gr(!1);
      }
      if (uu(), t.flags |= Rl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = xt(a) || "Unknown";
        Np[S] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Np[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var k = xt(a) || "Unknown";
          Np[k] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), Np[k] = !0);
        }
        t.tag = oe, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Pl(a) ? (b = !0, Nh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gg(t), FE(t, p), Lg(t, a, u, i), _S(null, t, a, !0, b, i);
      } else {
        if (t.tag = re, t.mode & yn) {
          jn(!0);
          try {
            p = Df(null, t, a, u, s, i), v = Of();
          } finally {
            jn(!1);
          }
        }
        return Nr() && v && rg(t), Ea(null, t, p, i), wS(t, a), t.child;
      }
    }
    function wS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), CS[u] || (CS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = xt(t) || "Unknown";
          ES[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), ES[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = xt(t) || "Unknown";
          SS[p] || (g("%s: Function components do not support contextType.", p), SS[p] = !0);
        }
      }
    }
    var bS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ct
    };
    function xS(e) {
      return {
        baseLanes: e,
        cachePool: Tw(),
        transitions: null
      };
    }
    function zw(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Uw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Pg(e, Tp);
    }
    function Aw(e, t) {
      return ho(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      Ix(t) && (t.flags |= Ie);
      var u = Zi.current, s = !1, f = (t.flags & Ie) !== Me;
      if (f || Uw(u, e) ? (s = !0, t.flags &= ~Ie) : (e === null || e.memoizedState !== null) && (u = aw(u, WE)), u = wf(u), jo(t, u), e === null) {
        og(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Vw(t, v);
        }
        var y = i.children, S = i.fallback;
        if (s) {
          var k = Fw(t, y, S, a), b = t.child;
          return b.memoizedState = xS(a), t.memoizedState = bS, k;
        } else
          return kS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var F = U.dehydrated;
          if (F !== null)
            return Bw(e, t, f, i, F, U, a);
        }
        if (s) {
          var V = i.fallback, ye = i.children, Ue = Hw(e, t, ye, V, a), xe = t.child, Tt = e.child.memoizedState;
          return xe.memoizedState = Tt === null ? xS(a) : zw(Tt, a), xe.childLanes = Aw(e, a), t.memoizedState = bS, Ue;
        } else {
          var yt = i.children, N = jw(e, t, yt, a);
          return t.memoizedState = null, N;
        }
      }
    }
    function kS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = DS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Fw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & pt) === Fe && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & He && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, u, i, null)) : (p = DS(f, u), v = Qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function DS(e, t, a) {
      return U1(e, t, $, null);
    }
    function UC(e, t) {
      return Zs(e, t);
    }
    function jw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = UC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pt) === Fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ut) : p.push(s);
      }
      return t.child = f, f;
    }
    function Hw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & pt) === Fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        y = S, y.childLanes = $, y.pendingProps = v, t.mode & He && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = UC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var k;
      return p !== null ? k = Zs(p, i) : (k = Qo(i, s, u, null), k.flags |= an), k.return = t, y.return = t, y.sibling = k, t.child = y, k;
    }
    function Cm(e, t, a, i) {
      i !== null && sg(i), Tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = kS(t, s);
      return f.flags |= an, t.memoizedState = null, f;
    }
    function Pw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = DS(f, s), v = Qo(i, s, u, null);
      return v.flags |= an, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & pt) !== Fe && Tf(t, e.child, null, u), v;
    }
    function Vw(e, t, a) {
      return (e.mode & pt) === Fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : Wy(t) ? e.lanes = cu : e.lanes = na, null;
    }
    function Bw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var N = hS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, N);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ie, null;
          var B = i.children, M = i.fallback, K = Pw(e, t, B, M, f), ge = t.child;
          return ge.memoizedState = xS(f), t.memoizedState = bS, K;
        }
      else {
        if (O_(), (t.mode & pt) === Fe)
          return Cm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Wy(u)) {
          var p, v, y;
          {
            var S = WT(u);
            p = S.digest, v = S.message, y = S.stack;
          }
          var k;
          v ? k = new Error(v) : k = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = hS(k, p, y);
          return Cm(e, t, f, b);
        }
        var U = ra(f, e.childLanes);
        if (el || U) {
          var F = Nm();
          if (F !== null) {
            var V = vy(F, f);
            if (V !== Ct && V !== s.retryLane) {
              s.retryLane = V;
              var ye = Jt;
              Va(e, V), dr(F, e, V, ye);
            }
          }
          XS();
          var Ue = hS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, Ue);
        } else if (rE(u)) {
          t.flags |= Ie, t.child = e.child;
          var xe = px.bind(null, e);
          return GT(u, xe), null;
        } else {
          M_(t, u, s.treeContext);
          var Tt = i.children, yt = kS(t, Tt);
          return yt.flags |= La, yt;
        }
      }
    }
    function AC(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), vg(e.return, t, a);
    }
    function $w(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Le) {
          var u = i.memoizedState;
          u !== null && AC(i, a, e);
        } else if (i.tag === Ot)
          AC(i, a, e);
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
    function Yw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Iw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !RS[e])
        if (RS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Qw(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function FC(e, t) {
      {
        var a = gt(e), i = !a && typeof Ga(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ww(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (gt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!FC(e[a], a))
              return;
        } else {
          var i = Ga(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!FC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function OS(e, t, a, i, u) {
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
    function jC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Iw(u), Qw(s, u), Ww(f, u), Ea(e, t, f, a);
      var p = Zi.current, v = Pg(p, Tp);
      if (v)
        p = Vg(p, Tp), t.flags |= Ie;
      else {
        var y = e !== null && (e.flags & Ie) !== Me;
        y && $w(t, t.child, a), p = wf(p);
      }
      if (jo(t, p), (t.mode & pt) === Fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = Yw(t.child), k;
            S === null ? (k = t.child, t.child = null) : (k = S.sibling, S.sibling = null), OS(
              t,
              !1,
              // isBackwards
              k,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var F = U.alternate;
              if (F !== null && em(F) === null) {
                t.child = U;
                break;
              }
              var V = U.sibling;
              U.sibling = b, b = U, U = V;
            }
            OS(
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
            OS(
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
    function Gw(e, t, a) {
      Fg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Tf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var HC = !1;
    function qw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || HC || (HC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Gi(v, s, "prop", "Context.Provider");
      }
      if (bE(t, u, p), f !== null) {
        var y = f.value;
        if (Re(y, p)) {
          if (f.children === s.children && !Oh())
            return Mu(e, t, a);
        } else
          $_(t, u, a);
      }
      var S = s.children;
      return Ea(e, t, S, a), t.child;
    }
    var PC = !1;
    function Xw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (PC || (PC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Rf(t, a);
      var f = Jn(i);
      Dl(t);
      var p;
      return Lp.current = t, Gr(!0), p = s(f), Gr(!1), uu(), t.flags |= Rl, Ea(e, t, p, a), t.child;
    }
    function Mp() {
      el = !0;
    }
    function Rm(e, t) {
      (t.mode & pt) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= an);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), CC(), Ip(t.lanes), ra(a, t.childLanes) ? (tw(e, t), t.child) : null;
    }
    function Kw(e, t, a) {
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
    function LS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function Zw(e, t, a) {
      switch (t.tag) {
        case J:
          NC(t), t.stateNode, Ef();
          break;
        case se:
          IE(t);
          break;
        case oe: {
          var i = t.type;
          Pl(i) && Nh(t);
          break;
        }
        case ce:
          Fg(t, t.stateNode.containerInfo);
          break;
        case st: {
          var u = t.memoizedProps.value, s = t.type._context;
          bE(t, s, u);
          break;
        }
        case vt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= at);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Le: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, wf(Zi.current)), t.flags |= Ie, null;
            var y = t.child, S = y.childLanes;
            if (ra(a, S))
              return zC(e, t, a);
            jo(t, wf(Zi.current));
            var k = Mu(e, t, a);
            return k !== null ? k.sibling : null;
          } else
            jo(t, wf(Zi.current));
          break;
        }
        case Ot: {
          var b = (e.flags & Ie) !== Me, U = ra(a, t.childLanes);
          if (b) {
            if (U)
              return jC(e, t, a);
            t.flags |= Ie;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), jo(t, Zi.current), U)
            break;
          return null;
        }
        case Pe:
        case nt:
          return t.lanes = $, DC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function VC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Kw(e, t, u0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          el = !0;
        else {
          var s = LS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ie) === Me)
            return el = !1, Zw(e, t, a);
          (e.flags & vs) !== Me ? el = !0 : el = !1;
        }
      } else if (el = !1, Nr() && __(t)) {
        var f = t.index, p = w_();
        vE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case Je:
          return Mw(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return Lw(e, t, v, a);
        }
        case re: {
          var y = t.type, S = t.pendingProps, k = t.elementType === y ? S : Ki(y, S);
          return TS(e, t, y, k, a);
        }
        case oe: {
          var b = t.type, U = t.pendingProps, F = t.elementType === b ? U : Ki(b, U);
          return LC(e, t, b, F, a);
        }
        case J:
          return kw(e, t, a);
        case se:
          return Dw(e, t, a);
        case Oe:
          return Ow(e, t);
        case Le:
          return zC(e, t, a);
        case ce:
          return Gw(e, t, a);
        case Ke: {
          var V = t.type, ye = t.pendingProps, Ue = t.elementType === V ? ye : Ki(V, ye);
          return bC(e, t, V, Ue, a);
        }
        case et:
          return ww(e, t, a);
        case Ge:
          return bw(e, t, a);
        case vt:
          return xw(e, t, a);
        case st:
          return qw(e, t, a);
        case qt:
          return Xw(e, t, a);
        case ct: {
          var xe = t.type, Tt = t.pendingProps, yt = Ki(xe, Tt);
          if (t.type !== t.elementType) {
            var N = xe.propTypes;
            N && Gi(
              N,
              yt,
              // Resolved for outer only
              "prop",
              xt(xe)
            );
          }
          return yt = Ki(xe.type, yt), xC(e, t, xe, yt, a);
        }
        case $e:
          return kC(e, t, t.type, t.pendingProps, a);
        case wn: {
          var B = t.type, M = t.pendingProps, K = t.elementType === B ? M : Ki(B, M);
          return Nw(e, t, B, K, a);
        }
        case Ot:
          return jC(e, t, a);
        case En:
          break;
        case Pe:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lf(e) {
      e.flags |= at;
    }
    function BC(e) {
      e.flags |= Xr, e.flags |= vd;
    }
    var $C, NS, YC, IC;
    $C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === se || u.tag === Oe)
          CT(e, u.stateNode);
        else if (u.tag !== ce) {
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
    }, NS = function(e, t) {
    }, YC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = jg(), v = TT(f, a, s, i, u, p);
        t.updateQueue = v, v && Lf(t);
      }
    }, IC = function(e, t, a, i) {
      a !== i && Lf(t);
    };
    function zp(e, t) {
      if (!Nr())
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = Me;
      if (t) {
        if ((e.mode & He) !== Fe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = it(a, it(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = it(a, it(S.lanes, S.childLanes)), i |= S.subtreeFlags & nr, i |= S.flags & nr, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & He) !== Fe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = it(a, it(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = it(a, it(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Jw(e, t, a) {
      if (j_() && (t.mode & pt) !== Fe && (t.flags & Ie) === Me)
        return CE(t), Ef(), t.flags |= Rn | va | Gn, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (A_(t), zr(t), (t.mode & He) !== Fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ef(), (t.flags & Ie) === Me && (t.memoizedState = null), t.flags |= at, zr(t), (t.mode & He) !== Fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return RE(), !0;
    }
    function QC(e, t, a) {
      var i = t.pendingProps;
      switch (ag(t), t.tag) {
        case Je:
        case rn:
        case $e:
        case re:
        case Ke:
        case et:
        case Ge:
        case vt:
        case qt:
        case ct:
          return zr(t), null;
        case oe: {
          var u = t.type;
          return Pl(u) && Lh(t), zr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (_f(t), eg(t), $g(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Lf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== Me) && (t.flags |= Oa, RE());
            }
          }
          return NS(e, t), zr(t), null;
        }
        case se: {
          Hg(t);
          var v = YE(), y = t.type;
          if (e !== null && t.stateNode != null)
            YC(e, t, y, i, v), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var S = jg(), k = Fh(t);
            if (k)
              z_(t, v, S) && Lf(t);
            else {
              var b = ET(y, i, v, S, t);
              $C(b, t, !1, !1), t.stateNode = b, RT(b, y, i, v) && Lf(t);
            }
            t.ref !== null && BC(t);
          }
          return zr(t), null;
        }
        case Oe: {
          var U = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            IC(e, t, F, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = YE(), ye = jg(), Ue = Fh(t);
            Ue ? U_(t) && Lf(t) : t.stateNode = _T(U, V, ye, t);
          }
          return zr(t), null;
        }
        case Le: {
          bf(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Jw(e, t, xe);
            if (!Tt)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & Ie) !== Me)
            return t.lanes = a, (t.mode & He) !== Fe && vS(t), t;
          var yt = xe !== null, N = e !== null && e.memoizedState !== null;
          if (yt !== N && yt) {
            var B = t.child;
            if (B.flags |= Tl, (t.mode & pt) !== Fe) {
              var M = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !I);
              M || Pg(Zi.current, WE) ? ex() : XS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= at), zr(t), (t.mode & He) !== Fe && yt) {
            var ge = t.child;
            ge !== null && (t.treeBaseDuration -= ge.treeBaseDuration);
          }
          return null;
        }
        case ce:
          return _f(t), NS(e, t), e === null && y_(t.stateNode.containerInfo), zr(t), null;
        case st:
          var pe = t.type._context;
          return pg(pe, t), zr(t), null;
        case wn: {
          var Ye = t.type;
          return Pl(Ye) && Lh(t), zr(t), null;
        }
        case Ot: {
          bf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return zr(t), null;
          var Gt = (t.flags & Ie) !== Me, Nt = Ze.rendering;
          if (Nt === null)
            if (Gt)
              zp(Ze, !1);
            else {
              var $n = nx() && (e === null || (e.flags & Ie) === Me);
              if (!$n)
                for (var Mt = t.child; Mt !== null; ) {
                  var Un = em(Mt);
                  if (Un !== null) {
                    Gt = !0, t.flags |= Ie, zp(Ze, !1);
                    var ua = Un.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= at), t.subtreeFlags = Me, nw(t, a), jo(t, Vg(Zi.current, Tp)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              Ze.tail !== null && mn() > p1() && (t.flags |= Ie, Gt = !0, zp(Ze, !1), t.lanes = xd);
            }
          else {
            if (!Gt) {
              var Hr = em(Nt);
              if (Hr !== null) {
                t.flags |= Ie, Gt = !0;
                var ii = Hr.updateQueue;
                if (ii !== null && (t.updateQueue = ii, t.flags |= at), zp(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Nt.alternate && !Nr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mn() * 2 - Ze.renderingStartTime > p1() && a !== na && (t.flags |= Ie, Gt = !0, zp(Ze, !1), t.lanes = xd);
            }
            if (Ze.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var Ta = Ze.last;
              Ta !== null ? Ta.sibling = Nt : t.child = Nt, Ze.last = Nt;
            }
          }
          if (Ze.tail !== null) {
            var _a = Ze.tail;
            Ze.rendering = _a, Ze.tail = _a.sibling, Ze.renderingStartTime = mn(), _a.sibling = null;
            var oa = Zi.current;
            return Gt ? oa = Vg(oa, Tp) : oa = wf(oa), jo(t, oa), _a;
          }
          return zr(t), null;
        }
        case En:
          break;
        case Pe:
        case nt: {
          qS(t);
          var ju = t.memoizedState, Hf = ju !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Gl = Xp !== null;
            Gl !== Hf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= Tl);
          }
          return !Hf || (t.mode & pt) === Fe ? zr(t) : ra(Wl, na) && (zr(t), t.subtreeFlags & (an | at) && (t.flags |= Tl)), null;
        }
        case At:
          return null;
        case wt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function eb(e, t, a) {
      switch (ag(t), t.tag) {
        case oe: {
          var i = t.type;
          Pl(i) && Lh(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | Ie, (t.mode & He) !== Fe && vS(t), t) : null;
        }
        case J: {
          t.stateNode, _f(t), eg(t), $g();
          var s = t.flags;
          return (s & Gn) !== Me && (s & Ie) === Me ? (t.flags = s & ~Gn | Ie, t) : null;
        }
        case se:
          return Hg(t), null;
        case Le: {
          bf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ef();
          }
          var p = t.flags;
          return p & Gn ? (t.flags = p & ~Gn | Ie, (t.mode & He) !== Fe && vS(t), t) : null;
        }
        case Ot:
          return bf(t), null;
        case ce:
          return _f(t), null;
        case st:
          var v = t.type._context;
          return pg(v, t), null;
        case Pe:
        case nt:
          return qS(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function WC(e, t, a) {
      switch (ag(t), t.tag) {
        case oe: {
          var i = t.type.childContextTypes;
          i != null && Lh(t);
          break;
        }
        case J: {
          t.stateNode, _f(t), eg(t), $g();
          break;
        }
        case se: {
          Hg(t);
          break;
        }
        case ce:
          _f(t);
          break;
        case Le:
          bf(t);
          break;
        case Ot:
          bf(t);
          break;
        case st:
          var u = t.type._context;
          pg(u, t);
          break;
        case Pe:
        case nt:
          qS(t);
          break;
      }
    }
    var GC = null;
    GC = /* @__PURE__ */ new Set();
    var Tm = !1, Ur = !1, tb = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Nf = null, Mf = null;
    function nb(e) {
      iu(null, function() {
        throw e;
      }), dd();
    }
    var rb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & He)
        try {
          Il(), t.componentWillUnmount();
        } finally {
          Yl(e);
        }
      else
        t.componentWillUnmount();
    };
    function qC(e, t) {
      try {
        Vo(lr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function MS(e, t, a) {
      try {
        rb(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function ab(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function XC(e, t) {
      try {
        ZC(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function zf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (lt && ht && e.mode & He)
              try {
                Il(), i = a(null);
              } finally {
                Yl(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var KC = !1;
    function ib(e, t) {
      gT(e.containerInfo), Te = t, lb();
      var a = KC;
      return KC = !1, a;
    }
    function lb() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & lo) !== Me && t !== null ? (t.return = e, Te = t) : ub();
      }
    }
    function ub() {
      for (; Te !== null; ) {
        var e = Te;
        Vt(e);
        try {
          ob(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function ob(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Oa) !== Me) {
        switch (Vt(e), e.tag) {
          case re:
          case Ke:
          case $e:
            break;
          case oe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ws && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ki(e.type, i), u);
              {
                var p = GC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              $T(v.containerInfo);
            }
            break;
          }
          case se:
          case Oe:
          case ce:
          case wn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function tl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Mr) !== Ba ? Rc(t) : (e & lr) !== Ba && Tc(t), (e & Vl) !== Ba && Wp(!0), _m(t, a, p), (e & Vl) !== Ba && Wp(!1), (e & Mr) !== Ba ? Av() : (e & lr) !== Ba && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Mr) !== Ba ? Uv(t) : (e & lr) !== Ba && Fv(t);
            var f = s.create;
            (e & Vl) !== Ba && Wp(!0), s.destroy = f(), (e & Vl) !== Ba && Wp(!1), (e & Mr) !== Ba ? _d() : (e & lr) !== Ba && jv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & lr) !== Me ? v = "useLayoutEffect" : (s.tag & Vl) !== Me ? v = "useInsertionEffect" : v = "useEffect";
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

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function sb(e, t) {
      if ((t.flags & at) !== Me)
        switch (t.tag) {
          case vt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = SC(), p = t.alternate === null ? "mount" : "update";
            gC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case J:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case vt:
                    var S = v.stateNode;
                    S.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function cb(e, t, a, i) {
      if ((a.flags & yr) !== Me)
        switch (a.tag) {
          case re:
          case Ke:
          case $e: {
            if (!Ur)
              if (a.mode & He)
                try {
                  Il(), Vo(lr | ir, a);
                } finally {
                  Yl(a);
                }
              else
                Vo(lr | ir, a);
            break;
          }
          case oe: {
            var u = a.stateNode;
            if (a.flags & at && !Ur)
              if (t === null)
                if (a.type === a.elementType && !Ws && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & He)
                  try {
                    Il(), u.componentDidMount();
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ki(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ws && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & He)
                  try {
                    Il(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ws && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), NE(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case se:
                    y = a.child.stateNode;
                    break;
                  case oe:
                    y = a.child.stateNode;
                    break;
                }
              NE(a, v, y);
            }
            break;
          }
          case se: {
            var S = a.stateNode;
            if (t === null && a.flags & at) {
              var k = a.type, b = a.memoizedProps;
              DT(S, k, b);
            }
            break;
          }
          case Oe:
            break;
          case ce:
            break;
          case vt: {
            {
              var U = a.memoizedProps, F = U.onCommit, V = U.onRender, ye = a.stateNode.effectDuration, Ue = SC(), xe = t === null ? "mount" : "update";
              gC() && (xe = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ue);
              {
                typeof F == "function" && F(a.memoizedProps.id, xe, ye, Ue), ux(a);
                var Tt = a.return;
                e:
                  for (; Tt !== null; ) {
                    switch (Tt.tag) {
                      case J:
                        var yt = Tt.stateNode;
                        yt.effectDuration += ye;
                        break e;
                      case vt:
                        var N = Tt.stateNode;
                        N.effectDuration += ye;
                        break e;
                    }
                    Tt = Tt.return;
                  }
              }
            }
            break;
          }
          case Le: {
            gb(e, a);
            break;
          }
          case Ot:
          case wn:
          case En:
          case Pe:
          case nt:
          case wt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & Xr && ZC(a);
    }
    function fb(e) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e: {
          if (e.mode & He)
            try {
              Il(), qC(e, e.return);
            } finally {
              Yl(e);
            }
          else
            qC(e, e.return);
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ab(e, e.return, t), XC(e, e.return);
          break;
        }
        case se: {
          XC(e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === se) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? HT(u) : VT(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === Oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? PT(s) : BT(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === nt) && i.memoizedState !== null && i !== e)) {
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
    function ZC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case se:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & He)
            try {
              Il(), u = t(i);
            } finally {
              Yl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = i;
      }
    }
    function pb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === se) {
          var a = e.stateNode;
          a !== null && E_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function vb(e) {
      for (var t = e.return; t !== null; ) {
        if (e1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function e1(e) {
      return e.tag === se || e.tag === J || e.tag === ce;
    }
    function t1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || e1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== se && t.tag !== Oe && t.tag !== Qt; ) {
            if (t.flags & an || t.child === null || t.tag === ce)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & an))
            return t.stateNode;
        }
    }
    function hb(e) {
      var t = vb(e);
      switch (t.tag) {
        case se: {
          var a = t.stateNode;
          t.flags & Bt && (nE(a), t.flags &= ~Bt);
          var i = t1(e);
          US(e, i, a);
          break;
        }
        case J:
        case ce: {
          var u = t.stateNode.containerInfo, s = t1(e);
          zS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function zS(e, t, a) {
      var i = e.tag, u = i === se || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? UT(a, s, t) : MT(a, s);
      } else if (i !== ce) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    function US(e, t, a) {
      var i = e.tag, u = i === se || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? zT(a, s, t) : NT(a, s);
      } else if (i !== ce) {
        var f = e.child;
        if (f !== null) {
          US(f, t, a);
          for (var p = f.sibling; p !== null; )
            US(p, t, a), p = p.sibling;
        }
      }
    }
    var Ar = null, nl = !1;
    function mb(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case se: {
                Ar = i.stateNode, nl = !1;
                break e;
              }
              case J: {
                Ar = i.stateNode.containerInfo, nl = !0;
                break e;
              }
              case ce: {
                Ar = i.stateNode.containerInfo, nl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        n1(e, t, a), Ar = null, nl = !1;
      }
      pb(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        n1(e, t, i), i = i.sibling;
    }
    function n1(e, t, a) {
      switch (Rd(a), a.tag) {
        case se:
          Ur || zf(a, t);
        case Oe: {
          {
            var i = Ar, u = nl;
            Ar = null, Bo(e, t, a), Ar = i, nl = u, Ar !== null && (nl ? FT(Ar, a.stateNode) : AT(Ar, a.stateNode));
          }
          return;
        }
        case Qt: {
          Ar !== null && (nl ? jT(Ar, a.stateNode) : Qy(Ar, a.stateNode));
          return;
        }
        case ce: {
          {
            var s = Ar, f = nl;
            Ar = a.stateNode.containerInfo, nl = !0, Bo(e, t, a), Ar = s, nl = f;
          }
          return;
        }
        case re:
        case Ke:
        case ct:
        case $e: {
          if (!Ur) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, S = y;
                do {
                  var k = S, b = k.destroy, U = k.tag;
                  b !== void 0 && ((U & Vl) !== Ba ? _m(a, t, b) : (U & lr) !== Ba && (Tc(a), a.mode & He ? (Il(), _m(a, t, b), Yl(a)) : _m(a, t, b), uo())), S = S.next;
                } while (S !== y);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case oe: {
          if (!Ur) {
            zf(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && MS(a, t, F);
          }
          Bo(e, t, a);
          return;
        }
        case En: {
          Bo(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & pt
          ) {
            var V = Ur;
            Ur = V || a.memoizedState !== null, Bo(e, t, a), Ur = V;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function yb(e) {
      e.memoizedState;
    }
    function gb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && r_(s);
          }
        }
      }
    }
    function r1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new tb()), t.forEach(function(i) {
          var u = vx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (Nf !== null && Mf !== null)
                Qp(Mf, Nf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Sb(e, t, a) {
      Nf = a, Mf = e, Vt(t), a1(t, e), Vt(t), Nf = null, Mf = null;
    }
    function rl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            mb(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = ec();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Vt(p), a1(p, e), p = p.sibling;
      Vt(f);
    }
    function a1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case re:
        case Ke:
        case ct:
        case $e: {
          if (rl(t, e), Ql(e), u & at) {
            try {
              tl(Vl | ir, e, e.return), Vo(Vl | ir, e);
            } catch (Ye) {
              sn(e, e.return, Ye);
            }
            if (e.mode & He) {
              try {
                Il(), tl(lr | ir, e, e.return);
              } catch (Ye) {
                sn(e, e.return, Ye);
              }
              Yl(e);
            } else
              try {
                tl(lr | ir, e, e.return);
              } catch (Ye) {
                sn(e, e.return, Ye);
              }
          }
          return;
        }
        case oe: {
          rl(t, e), Ql(e), u & Xr && i !== null && zf(i, i.return);
          return;
        }
        case se: {
          rl(t, e), Ql(e), u & Xr && i !== null && zf(i, i.return);
          {
            if (e.flags & Bt) {
              var s = e.stateNode;
              try {
                nE(s);
              } catch (Ye) {
                sn(e, e.return, Ye);
              }
            }
            if (u & at) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    OT(f, S, y, v, p, e);
                  } catch (Ye) {
                    sn(e, e.return, Ye);
                  }
              }
            }
          }
          return;
        }
        case Oe: {
          if (rl(t, e), Ql(e), u & at) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var k = e.stateNode, b = e.memoizedProps, U = i !== null ? i.memoizedProps : b;
            try {
              LT(k, U, b);
            } catch (Ye) {
              sn(e, e.return, Ye);
            }
          }
          return;
        }
        case J: {
          if (rl(t, e), Ql(e), u & at && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                n_(t.containerInfo);
              } catch (Ye) {
                sn(e, e.return, Ye);
              }
          }
          return;
        }
        case ce: {
          rl(t, e), Ql(e);
          return;
        }
        case Le: {
          rl(t, e), Ql(e);
          var V = e.child;
          if (V.flags & Tl) {
            var ye = V.stateNode, Ue = V.memoizedState, xe = Ue !== null;
            if (ye.isHidden = xe, xe) {
              var Tt = V.alternate !== null && V.alternate.memoizedState !== null;
              Tt || Jb();
            }
          }
          if (u & at) {
            try {
              yb(e);
            } catch (Ye) {
              sn(e, e.return, Ye);
            }
            r1(e);
          }
          return;
        }
        case Pe: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pt
          ) {
            var N = Ur;
            Ur = N || yt, rl(t, e), Ur = N;
          } else
            rl(t, e);
          if (Ql(e), u & Tl) {
            var B = e.stateNode, M = e.memoizedState, K = M !== null, ge = e;
            if (B.isHidden = K, K && !yt && (ge.mode & pt) !== Fe) {
              Te = ge;
              for (var pe = ge.child; pe !== null; )
                Te = pe, Cb(pe), pe = pe.sibling;
            }
            db(ge, K);
          }
          return;
        }
        case Ot: {
          rl(t, e), Ql(e), u & at && r1(e);
          return;
        }
        case En:
          return;
        default: {
          rl(t, e), Ql(e);
          return;
        }
      }
    }
    function Ql(e) {
      var t = e.flags;
      if (t & an) {
        try {
          hb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~an;
      }
      t & La && (e.flags &= ~La);
    }
    function Eb(e, t, a) {
      Nf = a, Mf = t, Te = e, i1(e, t, a), Nf = null, Mf = null;
    }
    function i1(e, t, a) {
      for (var i = (e.mode & pt) !== Fe; Te !== null; ) {
        var u = Te, s = u.child;
        if (u.tag === Pe && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            AS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, S = y || Ur, k = Tm, b = Ur;
            Tm = p, Ur = S, Ur && !b && (Te = u, Rb(u));
            for (var U = s; U !== null; )
              Te = U, i1(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            Te = u, Tm = k, Ur = b, AS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yr) !== Me && s !== null ? (s.return = u, Te = s) : AS(e, t, a);
      }
    }
    function AS(e, t, a) {
      for (; Te !== null; ) {
        var i = Te;
        if ((i.flags & yr) !== Me) {
          var u = i.alternate;
          Vt(i);
          try {
            cb(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Te = s;
          return;
        }
        Te = i.return;
      }
    }
    function Cb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case re:
          case Ke:
          case ct:
          case $e: {
            if (t.mode & He)
              try {
                Il(), tl(lr, t, t.return);
              } finally {
                Yl(t);
              }
            else
              tl(lr, t, t.return);
            break;
          }
          case oe: {
            zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && MS(t, t.return, i);
            break;
          }
          case se: {
            zf(t, t.return);
            break;
          }
          case Pe: {
            var u = t.memoizedState !== null;
            if (u) {
              l1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : l1(e);
      }
    }
    function l1(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function Rb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === Pe) {
          var i = t.memoizedState !== null;
          if (i) {
            u1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : u1(e);
      }
    }
    function u1(e) {
      for (; Te !== null; ) {
        var t = Te;
        Vt(t);
        try {
          fb(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function Tb(e, t, a, i) {
      Te = t, _b(t, e, a, i);
    }
    function _b(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te, s = u.child;
        (u.subtreeFlags & Na) !== Me && s !== null ? (s.return = u, Te = s) : wb(e, t, a, i);
      }
    }
    function wb(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te;
        if ((u.flags & cn) !== Me) {
          Vt(u);
          try {
            bb(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Te = s;
          return;
        }
        Te = u.return;
      }
    }
    function bb(e, t, a, i) {
      switch (t.tag) {
        case re:
        case Ke:
        case $e: {
          if (t.mode & He) {
            pS();
            try {
              Vo(Mr | ir, t);
            } finally {
              dS(t);
            }
          } else
            Vo(Mr | ir, t);
          break;
        }
      }
    }
    function xb(e) {
      Te = e, kb();
    }
    function kb() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & Ut) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Te = u, Lb(u, e);
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
            Te = e;
          }
        }
        (e.subtreeFlags & Na) !== Me && t !== null ? (t.return = e, Te = t) : Db();
      }
    }
    function Db() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & cn) !== Me && (Vt(e), Ob(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function Ob(e) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e: {
          e.mode & He ? (pS(), tl(Mr | ir, e, e.return), dS(e)) : tl(Mr | ir, e, e.return);
          break;
        }
      }
    }
    function Lb(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        Vt(a), Mb(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Te = i) : Nb(e);
      }
    }
    function Nb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = i, Te = a;
          return;
        }
        Te = i;
      }
    }
    function Mb(e, t) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e: {
          e.mode & He ? (pS(), tl(Mr, e, t), dS(e)) : tl(Mr, e, t);
          break;
        }
      }
    }
    function zb(e) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e: {
          try {
            Vo(lr | ir, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case oe: {
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
    function Ub(e) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e: {
          try {
            Vo(Mr | ir, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ab(e) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e: {
          try {
            tl(lr | ir, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && MS(e, e.return, t);
          break;
        }
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case re:
        case Ke:
        case $e:
          try {
            tl(Mr | ir, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var jb = [];
    function Hb() {
      jb.forEach(function(e) {
        return e();
      });
    }
    var Pb = w.ReactCurrentActQueue;
    function Vb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function o1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Pb.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Bb = Math.ceil, FS = w.ReactCurrentDispatcher, jS = w.ReactCurrentOwner, Fr = w.ReactCurrentBatchConfig, al = w.ReactCurrentActQueue, sr = (
      /*             */
      0
    ), s1 = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), bi = (
      /*                */
      4
    ), zu = 0, Ap = 1, Gs = 2, wm = 3, Fp = 4, c1 = 5, HS = 6, Rt = sr, Ca = null, On = null, cr = $, Wl = $, PS = No($), fr = zu, jp = null, bm = $, Hp = $, xm = $, Pp = null, $a = null, VS = 0, f1 = 500, d1 = 1 / 0, $b = 500, Uu = null;
    function Vp() {
      d1 = mn() + $b;
    }
    function p1() {
      return d1;
    }
    var km = !1, BS = null, Uf = null, qs = !1, $o = null, Bp = $, $S = [], YS = null, Yb = 50, $p = 0, IS = null, QS = !1, Dm = !1, Ib = 50, Af = 0, Om = null, Yp = Jt, Lm = $, v1 = !1;
    function Nm() {
      return Ca;
    }
    function Ra() {
      return (Rt & (jr | bi)) !== sr ? mn() : (Yp !== Jt || (Yp = mn()), Yp);
    }
    function Yo(e) {
      var t = e.mode;
      if ((t & pt) === Fe)
        return Ve;
      if ((Rt & jr) !== sr && cr !== $)
        return Hn(cr);
      var a = V_() !== P_;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lm === Ct && (Lm = Od()), Lm;
      }
      var u = Aa();
      if (u !== Ct)
        return u;
      var s = wT();
      return s;
    }
    function Qb(e) {
      var t = e.mode;
      return (t & pt) === Fe ? Ve : py();
    }
    function dr(e, t, a, i) {
      mx(), v1 && g("useInsertionEffect must not schedule updates."), QS && (Dm = !0), yu(e, a, i), (Rt & jr) !== $ && e === Ca ? Sx(t) : (rr && Ud(e, t, a), Ex(t), e === Ca && ((Rt & jr) === sr && (Hp = it(Hp, a)), fr === Fp && Io(e, cr)), Ya(e, i), a === Ve && Rt === sr && (t.mode & pt) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !al.isBatchingLegacy && (Vp(), pE()));
    }
    function Wb(e, t, a) {
      var i = e.current;
      i.lanes = t, yu(e, t, a), Ya(e, a);
    }
    function Gb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & jr) !== sr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      cy(e, t);
      var i = Es(e, e === Ca ? cr : $);
      if (i === $) {
        a !== null && O1(a), e.callbackNode = null, e.callbackPriority = Ct;
        return;
      }
      var u = Mn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(al.current !== null && a !== JS)) {
        a == null && s !== Ve && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && O1(a);
      var f;
      if (u === Ve)
        e.tag === Mo ? (al.isBatchingLegacy !== null && (al.didScheduleLegacyUpdate = !0), T_(y1.bind(null, e))) : dE(y1.bind(null, e)), al.current !== null ? al.current.push(zo) : xT(function() {
          (Rt & (jr | bi)) === sr && zo();
        }), f = null;
      else {
        var p;
        switch (ws(i)) {
          case gr:
            p = Sc;
            break;
          case ar:
            p = ya;
            break;
          case $i:
            p = mi;
            break;
          case Ts:
            p = wl;
            break;
          default:
            p = mi;
            break;
        }
        f = e0(p, h1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function h1(e, t) {
      if (mw(), Yp = Jt, Lm = $, (Rt & (jr | bi)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Es(e, e === Ca ? cr : $);
      if (u === $)
        return null;
      var s = !Rs(e, u) && !Yv(e, u) && !t, f = s ? ax(e, u) : zm(e, u);
      if (f !== zu) {
        if (f === Gs) {
          var p = kd(e);
          p !== $ && (u = p, f = WS(e, p));
        }
        if (f === Ap) {
          var v = jp;
          throw Xs(e, $), Io(e, u), Ya(e, mn()), v;
        }
        if (f === HS)
          Io(e, u);
        else {
          var y = !Rs(e, u), S = e.current.alternate;
          if (y && !Xb(S)) {
            if (f = zm(e, u), f === Gs) {
              var k = kd(e);
              k !== $ && (u = k, f = WS(e, k));
            }
            if (f === Ap) {
              var b = jp;
              throw Xs(e, $), Io(e, u), Ya(e, mn()), b;
            }
          }
          e.finishedWork = S, e.finishedLanes = u, qb(e, f, u);
        }
      }
      return Ya(e, mn()), e.callbackNode === a ? h1.bind(null, e) : null;
    }
    function WS(e, t) {
      var a = Pp;
      if (Vn(e)) {
        var i = Xs(e, t);
        i.flags |= Rn, m_(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== Gs) {
        var s = $a;
        $a = a, s !== null && m1(s);
      }
      return u;
    }
    function m1(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function qb(e, t, a) {
      switch (t) {
        case zu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case Gs: {
          Ks(e, $a, Uu);
          break;
        }
        case wm: {
          if (Io(e, a), $c(a) && // do not delay if we're inside an act() scope
          !L1()) {
            var i = VS + f1 - mn();
            if (i > 10) {
              var u = Es(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!mu(s, a)) {
                Ra(), Md(e, s);
                break;
              }
              e.timeoutHandle = Yy(Ks.bind(null, e, $a, Uu), i);
              break;
            }
          }
          Ks(e, $a, Uu);
          break;
        }
        case Fp: {
          if (Io(e, a), $v(a))
            break;
          if (!L1()) {
            var f = Bv(e, a), p = f, v = mn() - p, y = hx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Yy(Ks.bind(null, e, $a, Uu), y);
              break;
            }
          }
          Ks(e, $a, Uu);
          break;
        }
        case c1: {
          Ks(e, $a, Uu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Xb(e) {
      for (var t = e; ; ) {
        if (t.flags & ps) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Re(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ps && v !== null) {
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
    function Io(e, t) {
      t = ho(t, xm), t = ho(t, Hp), Nd(e, t);
    }
    function y1(e) {
      if (yw(), (Rt & (jr | bi)) !== sr)
        throw new Error("Should not already be working.");
      Fu();
      var t = Es(e, $);
      if (!ra(t, Ve))
        return Ya(e, mn()), null;
      var a = zm(e, t);
      if (e.tag !== Mo && a === Gs) {
        var i = kd(e);
        i !== $ && (t = i, a = WS(e, i));
      }
      if (a === Ap) {
        var u = jp;
        throw Xs(e, $), Io(e, t), Ya(e, mn()), u;
      }
      if (a === HS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ks(e, $a, Uu), Ya(e, mn()), null;
    }
    function Kb(e, t) {
      t !== $ && (mo(e, it(t, Ve)), Ya(e, mn()), (Rt & (jr | bi)) === sr && (Vp(), zo()));
    }
    function GS(e, t) {
      var a = Rt;
      Rt |= s1;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !al.isBatchingLegacy && (Vp(), pE());
      }
    }
    function Zb(e, t, a, i, u) {
      var s = Aa(), f = Fr.transition;
      try {
        return Fr.transition = null, Pn(gr), e(t, a, i, u);
      } finally {
        Pn(s), Fr.transition = f, Rt === sr && Vp();
      }
    }
    function Au(e) {
      $o !== null && $o.tag === Mo && (Rt & (jr | bi)) === sr && Fu();
      var t = Rt;
      Rt |= s1;
      var a = Fr.transition, i = Aa();
      try {
        return Fr.transition = null, Pn(gr), e ? e() : void 0;
      } finally {
        Pn(i), Fr.transition = a, Rt = t, (Rt & (jr | bi)) === sr && zo();
      }
    }
    function g1() {
      return (Rt & (jr | bi)) !== sr;
    }
    function Mm(e, t) {
      ia(PS, Wl, e), Wl = it(Wl, t);
    }
    function qS(e) {
      Wl = PS.current, aa(PS, e);
    }
    function Xs(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Iy && (e.timeoutHandle = Iy, bT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          WC(u, i), i = i.return;
        }
      Ca = e;
      var s = Zs(e.current, null);
      return On = s, cr = Wl = t, fr = zu, jp = null, bm = $, Hp = $, xm = $, Pp = null, $a = null, I_(), Xi.discardPendingWarnings(), s;
    }
    function S1(e, t) {
      do {
        var a = On;
        try {
          if (Vh(), qE(), Cn(), jS.current = null, a === null || a.return === null) {
            fr = Ap, jp = t, On = null;
            return;
          }
          if (lt && a.mode & He && Sm(a, !0), St)
            if (uu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Hv(a, i, cr);
            } else
              _c(a, t, cr);
          Rw(e, a.return, a, t, cr), T1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function E1() {
      var e = FS.current;
      return FS.current = vm, e === null ? vm : e;
    }
    function C1(e) {
      FS.current = e;
    }
    function Jb() {
      VS = mn();
    }
    function Ip(e) {
      bm = it(e, bm);
    }
    function ex() {
      fr === zu && (fr = wm);
    }
    function XS() {
      (fr === zu || fr === wm || fr === Gs) && (fr = Fp), Ca !== null && (Cs(bm) || Cs(Hp)) && Io(Ca, cr);
    }
    function tx(e) {
      fr !== Fp && (fr = Gs), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function nx() {
      return fr === zu;
    }
    function zm(e, t) {
      var a = Rt;
      Rt |= jr;
      var i = E1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, cr), u.clear()), Qc(e, t);
        }
        Uu = Ad(), Xs(e, t);
      }
      ti(t);
      do
        try {
          rx();
          break;
        } catch (s) {
          S1(e, s);
        }
      while (!0);
      if (Vh(), Rt = a, C1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return so(), Ca = null, cr = $, fr;
    }
    function rx() {
      for (; On !== null; )
        R1(On);
    }
    function ax(e, t) {
      var a = Rt;
      Rt |= jr;
      var i = E1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, cr), u.clear()), Qc(e, t);
        }
        Uu = Ad(), Vp(), Xs(e, t);
      }
      ti(t);
      do
        try {
          ix();
          break;
        } catch (s) {
          S1(e, s);
        }
      while (!0);
      return Vh(), C1(i), Rt = a, On !== null ? (ms(), zu) : (so(), Ca = null, cr = $, fr);
    }
    function ix() {
      for (; On !== null && !gc(); )
        R1(On);
    }
    function R1(e) {
      var t = e.alternate;
      Vt(e);
      var a;
      (e.mode & He) !== Fe ? (fS(e), a = KS(t, e, Wl), Sm(e, !0)) : a = KS(t, e, Wl), Cn(), e.memoizedProps = e.pendingProps, a === null ? T1(e) : On = a, jS.current = null;
    }
    function T1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === Me) {
          Vt(t);
          var u = void 0;
          if ((t.mode & He) === Fe ? u = QC(a, t, Wl) : (fS(t), u = QC(a, t, Wl), Sm(t, !1)), Cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = eb(a, t);
          if (s !== null) {
            s.flags &= Ov, On = s;
            return;
          }
          if ((t.mode & He) !== Fe) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = Me, i.deletions = null;
          else {
            fr = HS, On = null;
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
      fr === zu && (fr = c1);
    }
    function Ks(e, t, a) {
      var i = Aa(), u = Fr.transition;
      try {
        Fr.transition = null, Pn(gr), lx(e, t, a, i);
      } finally {
        Fr.transition = u, Pn(i);
      }
      return null;
    }
    function lx(e, t, a, i) {
      do
        Fu();
      while ($o !== null);
      if (yx(), (Rt & (jr | bi)) !== sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cc(s), u === null)
        return Td(), null;
      if (s === $ && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ct;
      var f = it(u.lanes, u.childLanes);
      zd(e, f), e === Ca && (Ca = null, On = null, cr = $), ((u.subtreeFlags & Na) !== Me || (u.flags & Na) !== Me) && (qs || (qs = !0, YS = a, e0(mi, function() {
        return Fu(), null;
      })));
      var p = (u.subtreeFlags & (lo | Jr | yr | Na)) !== Me, v = (u.flags & (lo | Jr | yr | Na)) !== Me;
      if (p || v) {
        var y = Fr.transition;
        Fr.transition = null;
        var S = Aa();
        Pn(gr);
        var k = Rt;
        Rt |= bi, jS.current = null, ib(e, u), EC(), Sb(e, u, s), ST(e.containerInfo), e.current = u, Pv(s), Eb(u, e, s), oo(), Mv(), Rt = k, Pn(S), Fr.transition = y;
      } else
        e.current = u, EC();
      var b = qs;
      if (qs ? (qs = !1, $o = e, Bp = s) : (Af = 0, Om = null), f = e.pendingLanes, f === $ && (Uf = null), b || x1(e.current, !1), Pi(u.stateNode, i), rr && e.memoizedUpdaters.clear(), Hb(), Ya(e, mn()), t !== null)
        for (var U = e.onRecoverableError, F = 0; F < t.length; F++) {
          var V = t[F], ye = V.stack, Ue = V.digest;
          U(V.value, {
            componentStack: ye,
            digest: Ue
          });
        }
      if (km) {
        km = !1;
        var xe = BS;
        throw BS = null, xe;
      }
      return ra(Bp, Ve) && e.tag !== Mo && Fu(), f = e.pendingLanes, ra(f, Ve) ? (hw(), e === IS ? $p++ : ($p = 0, IS = e)) : $p = 0, zo(), Td(), null;
    }
    function Fu() {
      if ($o !== null) {
        var e = ws(Bp), t = hy($i, e), a = Fr.transition, i = Aa();
        try {
          return Fr.transition = null, Pn(t), ox();
        } finally {
          Pn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function ux(e) {
      $S.push(e), qs || (qs = !0, e0(mi, function() {
        return Fu(), null;
      }));
    }
    function ox() {
      if ($o === null)
        return !1;
      var e = YS;
      YS = null;
      var t = $o, a = Bp;
      if ($o = null, Bp = $, (Rt & (jr | bi)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      QS = !0, Dm = !1, Vv(a);
      var i = Rt;
      Rt |= bi, xb(t.current), Tb(t, t.current, a, e);
      {
        var u = $S;
        $S = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          sb(t, f);
        }
      }
      hs(), x1(t.current, !0), Rt = i, zo(), Dm ? t === Om ? Af++ : (Af = 0, Om = t) : Af = 0, QS = !1, Dm = !1, xl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function _1(e) {
      return Uf !== null && Uf.has(e);
    }
    function sx(e) {
      Uf === null ? Uf = /* @__PURE__ */ new Set([e]) : Uf.add(e);
    }
    function cx(e) {
      km || (km = !0, BS = e);
    }
    var fx = cx;
    function w1(e, t, a) {
      var i = Qs(a, t), u = RC(e, i, Ve), s = Ao(e, u, Ve), f = Ra();
      s !== null && (yu(s, Ve, f), Ya(s, f));
    }
    function sn(e, t, a) {
      if (nb(a), Wp(!1), e.tag === J) {
        w1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          w1(i, e, a);
          return;
        } else if (i.tag === oe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !_1(s)) {
            var f = Qs(a, e), p = yS(i, f, Ve), v = Ao(i, p, Ve), y = Ra();
            v !== null && (yu(v, Ve, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function dx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Md(e, a), Cx(e), Ca === e && mu(cr, a) && (fr === Fp || fr === wm && $c(cr) && mn() - VS < f1 ? Xs(e, $) : xm = it(xm, a)), Ya(e, u);
    }
    function b1(e, t) {
      t === Ct && (t = Qb(e));
      var a = Ra(), i = Va(e, t);
      i !== null && (yu(i, t, a), Ya(i, a));
    }
    function px(e) {
      var t = e.memoizedState, a = Ct;
      t !== null && (a = t.retryLane), b1(e, a);
    }
    function vx(e, t) {
      var a = Ct, i;
      switch (e.tag) {
        case Le:
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
      i !== null && i.delete(t), b1(e, a);
    }
    function hx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Bb(e / 1960) * 1960;
    }
    function mx() {
      if ($p > Yb)
        throw $p = 0, IS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Af > Ib && (Af = 0, Om = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function yx() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function x1(e, t) {
      Vt(e), Um(e, Zr, Ab), t && Um(e, lu, Fb), Um(e, Zr, zb), t && Um(e, lu, Ub), Cn();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Am = null;
    function k1(e) {
      {
        if ((Rt & jr) !== sr || !(e.mode & pt))
          return;
        var t = e.tag;
        if (t !== Je && t !== J && t !== oe && t !== re && t !== Ke && t !== ct && t !== $e)
          return;
        var a = qe(e) || "ReactComponent";
        if (Am !== null) {
          if (Am.has(a))
            return;
          Am.add(a);
        } else
          Am = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Vt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Vt(e) : Cn();
        }
      }
    }
    var KS;
    {
      var gx = null;
      KS = function(e, t, a) {
        var i = A1(gx, t);
        try {
          return VC(e, t, a);
        } catch (s) {
          if (L_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Vh(), qE(), WC(e, t), A1(t, i), t.mode & He && fS(t), iu(null, VC, null, e, t, a), oy()) {
            var u = dd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var D1 = !1, ZS;
    ZS = /* @__PURE__ */ new Set();
    function Sx(e) {
      if (Wr && !dw())
        switch (e.tag) {
          case re:
          case Ke:
          case $e: {
            var t = On && qe(On) || "Unknown", a = t;
            if (!ZS.has(a)) {
              ZS.add(a);
              var i = qe(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case oe: {
            D1 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), D1 = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ud(e, i, t);
        });
      }
    }
    var JS = {};
    function e0(e, t) {
      {
        var a = al.current;
        return a !== null ? (a.push(t), JS) : yc(e, t);
      }
    }
    function O1(e) {
      if (e !== JS)
        return Nv(e);
    }
    function L1() {
      return al.current !== null;
    }
    function Ex(e) {
      {
        if (e.mode & pt) {
          if (!o1())
            return;
        } else if (!Vb() || Rt !== sr || e.tag !== re && e.tag !== Ke && e.tag !== $e)
          return;
        if (al.current === null) {
          var t = hn;
          try {
            Vt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(e));
          } finally {
            t ? Vt(e) : Cn();
          }
        }
      }
    }
    function Cx(e) {
      e.tag !== Mo && o1() && al.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      v1 = e;
    }
    var xi = null, Ff = null, Rx = function(e) {
      xi = e;
    };
    function jf(e) {
      {
        if (xi === null)
          return e;
        var t = xi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function t0(e) {
      return jf(e);
    }
    function n0(e) {
      {
        if (xi === null)
          return e;
        var t = xi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = jf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: me,
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
    function N1(e, t) {
      {
        if (xi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case oe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case re: {
            (typeof i == "function" || s === ze) && (u = !0);
            break;
          }
          case Ke: {
            (s === me || s === ze) && (u = !0);
            break;
          }
          case ct:
          case $e: {
            (s === rt || s === ze) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = xi(a);
          if (f !== void 0 && f === xi(i))
            return !0;
        }
        return !1;
      }
    }
    function M1(e) {
      {
        if (xi === null || typeof WeakSet != "function")
          return;
        Ff === null && (Ff = /* @__PURE__ */ new WeakSet()), Ff.add(e);
      }
    }
    var Tx = function(e, t) {
      {
        if (xi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fu(), Au(function() {
          r0(e.current, i, a);
        });
      }
    }, _x = function(e, t) {
      {
        if (e.context !== ri)
          return;
        Fu(), Au(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function r0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case re:
          case $e:
          case oe:
            v = p;
            break;
          case Ke:
            v = p.render;
            break;
        }
        if (xi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, S = !1;
        if (v !== null) {
          var k = xi(v);
          k !== void 0 && (a.has(k) ? S = !0 : t.has(k) && (f === oe ? S = !0 : y = !0));
        }
        if (Ff !== null && (Ff.has(e) || i !== null && Ff.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || y) {
          var b = Va(e, Ve);
          b !== null && dr(b, e, Ve, Jt);
        }
        u !== null && !S && r0(u, t, a), s !== null && r0(s, t, a);
      }
    }
    var wx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return a0(e.current, i, a), a;
      }
    };
    function a0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case re:
          case $e:
          case oe:
            p = f;
            break;
          case Ke:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? bx(e, a) : i !== null && a0(i, t, a), u !== null && a0(u, t, a);
      }
    }
    function bx(e, t) {
      {
        var a = xx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case se:
              t.add(i.stateNode);
              return;
            case ce:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function xx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === se)
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
    var i0;
    {
      i0 = !1;
      try {
        var z1 = Object.preventExtensions({});
      } catch {
        i0 = !0;
      }
    }
    function kx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !i0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ai = function(e, t, a, i) {
      return new kx(e, t, a, i);
    };
    function l0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Dx(e) {
      return typeof e == "function" && !l0(e) && e.defaultProps === void 0;
    }
    function Ox(e) {
      if (typeof e == "function")
        return l0(e) ? oe : re;
      if (e != null) {
        var t = e.$$typeof;
        if (t === me)
          return Ke;
        if (t === rt)
          return ct;
      }
      return Je;
    }
    function Zs(e, t) {
      var a = e.alternate;
      a === null ? (a = ai(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Je:
        case re:
        case $e:
          a.type = jf(e.type);
          break;
        case oe:
          a.type = t0(e.type);
          break;
        case Ke:
          a.type = n0(e.type);
          break;
      }
      return a;
    }
    function Lx(e, t) {
      e.flags &= nr | an;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Nx(e, t, a) {
      var i;
      return e === Mh ? (i = pt, t === !0 && (i |= yn, i |= za)) : i = Fe, rr && (i |= He), ai(J, null, null, i);
    }
    function u0(e, t, a, i, u, s) {
      var f = Je, p = e;
      if (typeof e == "function")
        l0(e) ? (f = oe, p = t0(p)) : p = jf(p);
      else if (typeof e == "string")
        f = se;
      else
        e:
          switch (e) {
            case pa:
              return Qo(a.children, u, s, t);
            case si:
              f = Ge, u |= yn, (u & pt) !== Fe && (u |= za);
              break;
            case R:
              return Mx(a, u, s, t);
            case tt:
              return zx(a, u, s, t);
            case Et:
              return Ux(a, u, s, t);
            case tn:
              return U1(a, u, s, t);
            case tr:
            case Ln:
            case ci:
            case Vu:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Q:
                    f = st;
                    break e;
                  case ie:
                    f = qt;
                    break e;
                  case me:
                    f = Ke, p = n0(p);
                    break e;
                  case rt:
                    f = ct;
                    break e;
                  case ze:
                    f = rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? qe(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var S = ai(f, a, t, u);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function o0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = u0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var u = ai(et, e, i, t);
      return u.lanes = a, u;
    }
    function Mx(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ai(vt, e, i, t | He);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function zx(e, t, a, i) {
      var u = ai(Le, e, i, t);
      return u.elementType = tt, u.lanes = a, u;
    }
    function Ux(e, t, a, i) {
      var u = ai(Ot, e, i, t);
      return u.elementType = Et, u.lanes = a, u;
    }
    function U1(e, t, a, i) {
      var u = ai(Pe, e, i, t);
      u.elementType = tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function s0(e, t, a) {
      var i = ai(Oe, e, null, t);
      return i.lanes = a, i;
    }
    function Ax() {
      var e = ai(se, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function Fx(e) {
      var t = ai(Qt, null, null, Fe);
      return t.stateNode = e, t;
    }
    function c0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ai(ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function A1(e, t) {
      return e === null && (e = ai(Je, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function jx(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Iy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ct, this.eventTimes = Ic($), this.expirationTimes = Ic(Jt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Ic($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < un; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function F1(e, t, a, i, u, s, f, p, v, y) {
      var S = new jx(e, t, a, p, v), k = Nx(t, s);
      S.current = k, k.stateNode = S;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        k.memoizedState = b;
      }
      return gg(k), S;
    }
    var f0 = "18.2.0";
    function Hx(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: br,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var d0, p0;
    d0 = !1, p0 = {};
    function j1(e) {
      if (!e)
        return ri;
      var t = Da(e), a = R_(t);
      if (t.tag === oe) {
        var i = t.type;
        if (Pl(i))
          return cE(t, i, a);
      }
      return a;
    }
    function Px(e, t) {
      {
        var a = Da(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ma(a);
        if (u === null)
          return null;
        if (u.mode & yn) {
          var s = qe(a) || "Component";
          if (!p0[s]) {
            p0[s] = !0;
            var f = hn;
            try {
              Vt(u), a.mode & yn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Vt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function H1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return F1(e, t, v, y, a, i, u, s, f);
    }
    function P1(e, t, a, i, u, s, f, p, v, y) {
      var S = !0, k = F1(a, i, S, e, u, s, f, p, v);
      k.context = j1(null);
      var b = k.current, U = Ra(), F = Yo(b), V = Nu(U, F);
      return V.callback = t ?? null, Ao(b, V, F), Wb(k, F, U), k;
    }
    function Gp(e, t, a, i) {
      zv(t, e);
      var u = t.current, s = Ra(), f = Yo(u);
      ou(f);
      var p = j1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !d0 && (d0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(hn) || "Unknown"));
      var v = Nu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ao(u, v, f);
      return y !== null && (dr(y, u, f, s), Qh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case se:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Vx(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (Vn(t)) {
            var a = fy(t);
            Kb(t, a);
          }
          break;
        }
        case Le: {
          Au(function() {
            var u = Va(e, Ve);
            if (u !== null) {
              var s = Ra();
              dr(u, e, Ve, s);
            }
          });
          var i = Ve;
          v0(e, i);
          break;
        }
      }
    }
    function V1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Qv(a.retryLane, t));
    }
    function v0(e, t) {
      V1(e, t);
      var a = e.alternate;
      a && V1(a, t);
    }
    function Bx(e) {
      if (e.tag === Le) {
        var t = co, a = Va(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        v0(e, t);
      }
    }
    function $x(e) {
      if (e.tag === Le) {
        var t = Yo(e), a = Va(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        v0(e, t);
      }
    }
    function B1(e) {
      var t = Lv(e);
      return t === null ? null : t.stateNode;
    }
    var $1 = function(e) {
      return null;
    };
    function Yx(e) {
      return $1(e);
    }
    var Y1 = function(e) {
      return !1;
    };
    function Ix(e) {
      return Y1(e);
    }
    var I1 = null, Q1 = null, W1 = null, G1 = null, q1 = null, X1 = null, K1 = null, Z1 = null, J1 = null;
    {
      var eR = function(e, t, a) {
        var i = t[a], u = gt(e) ? e.slice() : ft({}, e);
        return a + 1 === t.length ? (gt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = eR(e[i], t, a + 1), u);
      }, tR = function(e, t) {
        return eR(e, t, 0);
      }, nR = function(e, t, a, i) {
        var u = t[i], s = gt(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], gt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = nR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, rR = function(e, t, a) {
        if (t.length !== a.length) {
          Z("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Z("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nR(e, t, a, 0);
      }, aR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = gt(e) ? e.slice() : ft({}, e);
        return s[u] = aR(e[u], t, a + 1, i), s;
      }, iR = function(e, t, a) {
        return aR(e, t, 0, a);
      }, h0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      I1 = function(e, t, a, i) {
        var u = h0(e, t);
        if (u !== null) {
          var s = iR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var f = Va(e, Ve);
          f !== null && dr(f, e, Ve, Jt);
        }
      }, Q1 = function(e, t, a) {
        var i = h0(e, t);
        if (i !== null) {
          var u = tR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ft({}, e.memoizedProps);
          var s = Va(e, Ve);
          s !== null && dr(s, e, Ve, Jt);
        }
      }, W1 = function(e, t, a, i) {
        var u = h0(e, t);
        if (u !== null) {
          var s = rR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var f = Va(e, Ve);
          f !== null && dr(f, e, Ve, Jt);
        }
      }, G1 = function(e, t, a) {
        e.pendingProps = iR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ve);
        i !== null && dr(i, e, Ve, Jt);
      }, q1 = function(e, t) {
        e.pendingProps = tR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, Ve);
        a !== null && dr(a, e, Ve, Jt);
      }, X1 = function(e, t, a) {
        e.pendingProps = rR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ve);
        i !== null && dr(i, e, Ve, Jt);
      }, K1 = function(e) {
        var t = Va(e, Ve);
        t !== null && dr(t, e, Ve, Jt);
      }, Z1 = function(e) {
        $1 = e;
      }, J1 = function(e) {
        Y1 = e;
      };
    }
    function Qx(e) {
      var t = Ma(e);
      return t === null ? null : t.stateNode;
    }
    function Wx(e) {
      return null;
    }
    function Gx() {
      return hn;
    }
    function qx(e) {
      var t = e.findFiberByHostInstance, a = w.ReactCurrentDispatcher;
      return Cd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: I1,
        overrideHookStateDeletePath: Q1,
        overrideHookStateRenamePath: W1,
        overrideProps: G1,
        overridePropsDeletePath: q1,
        overridePropsRenamePath: X1,
        setErrorHandler: Z1,
        setSuspenseHandler: J1,
        scheduleUpdate: K1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Qx,
        findFiberByHostInstance: t || Wx,
        // React Refresh
        findHostInstancesForRefresh: wx,
        scheduleRefresh: Tx,
        scheduleRoot: _x,
        setRefreshHandler: Rx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Gx,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: f0
      });
    }
    var lR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function m0(e) {
      this._internalRoot = e;
    }
    jm.prototype.render = m0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Nn) {
          var i = B1(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, jm.prototype.unmount = m0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        g1() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Au(function() {
          Gp(null, e, null, null);
        }), iE(t);
      }
    };
    function Xx(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      uR(e);
      var a = !1, i = !1, u = "", s = lR;
      t != null && (t.hydrate ? Z("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === oi && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = H1(e, Mh, null, a, i, u, s);
      bh(f.current, e);
      var p = e.nodeType === Nn ? e.parentNode : e;
      return np(p), new m0(f);
    }
    function jm(e) {
      this._internalRoot = e;
    }
    function Kx(e) {
      e && eh(e);
    }
    jm.prototype.unstable_scheduleHydration = Kx;
    function Zx(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      uR(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = lR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = P1(t, null, e, Mh, i, s, f, p, v);
      if (bh(y.current, e), np(e), u)
        for (var S = 0; S < u.length; S++) {
          var k = u[S];
          lw(y, k);
        }
      return new jm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Jl || !de));
    }
    function qp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Jl || e.nodeType === Nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function uR(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Jx = w.ReactCurrentOwner, oR;
    oR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Nn) {
        var t = B1(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = y0(e), u = !!(i && Lo(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function y0(e) {
      return e ? e.nodeType === Za ? e.documentElement : e.firstChild : null;
    }
    function sR() {
    }
    function ek(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Fm(f);
            s.call(b);
          };
        }
        var f = P1(
          t,
          i,
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sR
        );
        e._reactRootContainer = f, bh(f.current, e);
        var p = e.nodeType === Nn ? e.parentNode : e;
        return np(p), Au(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Fm(S);
            y.call(b);
          };
        }
        var S = H1(
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sR
        );
        e._reactRootContainer = S, bh(S.current, e);
        var k = e.nodeType === Nn ? e.parentNode : e;
        return np(k), Au(function() {
          Gp(t, S, a, i);
        }), S;
      }
    }
    function tk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Pm(e, t, a, i, u) {
      oR(a), tk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = ek(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Fm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Fm(f);
    }
    function nk(e) {
      {
        var t = Jx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : Px(e, "findDOMNode");
    }
    function rk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Pm(null, e, t, !0, a);
    }
    function ak(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Pm(null, e, t, !1, a);
    }
    function ik(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ds(e))
        throw new Error("parentComponent must be a valid React Component");
      return Pm(e, t, a, !1, i);
    }
    function lk(e) {
      if (!qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = y0(e), i = a && !Lo(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Au(function() {
          Pm(null, null, e, !1, function() {
            e._reactRootContainer = null, iE(e);
          });
        }), !0;
      } else {
        {
          var u = y0(e), s = !!(u && Lo(u)), f = e.nodeType === qr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Se(Vx), Gv(Bx), xs($x), jd(Aa), Xv(_s), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), kv(sT), dc(GS, Zb, Au);
    function uk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return Hx(e, t, null, a);
    }
    function ok(e, t, a, i) {
      return ik(e, t, a, i);
    }
    var g0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lo, hf, xh, fc, ss, GS]
    };
    function sk(e, t) {
      return g0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Xx(e, t);
    }
    function ck(e, t, a) {
      return g0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Zx(e, t, a);
    }
    function fk(e) {
      return g1() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Au(e);
    }
    var dk = qx({
      findFiberByHostInstance: Fs,
      bundleType: 1,
      version: f0,
      rendererPackageName: "react-dom"
    });
    if (!dk && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var cR = window.location.protocol;
      /^(https?|file):$/.test(cR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (cR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0, Qa.createPortal = uk, Qa.createRoot = sk, Qa.findDOMNode = nk, Qa.flushSync = fk, Qa.hydrate = rk, Qa.hydrateRoot = ck, Qa.render = ak, Qa.unmountComponentAtNode = lk, Qa.unstable_batchedUpdates = GS, Qa.unstable_renderSubtreeIntoContainer = ok, Qa.version = f0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
function bR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bR);
    } catch (D) {
      console.error(D);
    }
  }
}
process.env.NODE_ENV === "production" ? (bR(), w0.exports = Sk()) : w0.exports = Ek();
var Ck = w0.exports;
const Rk = /* @__PURE__ */ D0(Ck);
var Tk = Object.defineProperty, _k = (D, O, w) => O in D ? Tk(D, O, { enumerable: !0, configurable: !0, writable: !0, value: w }) : D[O] = w, Bm = (D, O, w) => (_k(D, typeof O != "symbol" ? O + "" : O, w), w);
const wk = {
  stringify: (D) => D,
  parse: (D) => D
}, bk = {
  stringify: (D) => `${D}`,
  parse: (D) => parseFloat(D)
}, xk = {
  stringify: (D) => D ? "true" : "false",
  parse: (D) => /^[ty1-9]/i.test(D)
}, kk = {
  stringify: (D) => D.name,
  parse: (D, O) => {
    const w = (() => {
      if (typeof window < "u" && D in window)
        return window[D];
      if (typeof global < "u" && D in global)
        return global[D];
    })();
    return typeof w == "function" ? w.bind(O) : void 0;
  }
}, Dk = {
  stringify: (D) => JSON.stringify(D),
  parse: (D) => JSON.parse(D)
}, C0 = {
  string: wk,
  number: bk,
  boolean: xk,
  function: kk,
  json: Dk
}, R0 = Symbol.for("r2wc.render"), $m = Symbol.for("r2wc.connected"), Pf = Symbol.for("r2wc.context"), Wo = Symbol.for("r2wc.props");
function Ok(D, O, w) {
  var P, q, Z;
  O.props || (O.props = D.propTypes ? Object.keys(D.propTypes) : []);
  const g = (Array.isArray(O.props) ? O.props.slice() : Object.keys(O.props)).filter((J) => J !== "container"), _e = {}, re = {}, oe = {};
  for (const J of g) {
    _e[J] = Array.isArray(O.props) ? "string" : O.props[J];
    const ce = Lk(J);
    re[J] = ce, oe[ce] = J;
  }
  class Je extends HTMLElement {
    constructor() {
      super(), Bm(this, P, !0), Bm(this, q), Bm(this, Z, {}), Bm(this, "container"), O.shadow ? this.container = this.attachShadow({
        mode: O.shadow
      }) : this.container = this, this[Wo].container = this.container;
      for (const ce of g) {
        const se = re[ce], Oe = this.getAttribute(se), et = _e[ce], Ge = C0[et];
        Oe && Ge != null && Ge.parse && (this[Wo][ce] = Ge.parse(Oe, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(oe);
    }
    connectedCallback() {
      this[$m] = !0, this[R0]();
    }
    disconnectedCallback() {
      this[$m] = !1, this[Pf] && w.unmount(this[Pf]);
    }
    attributeChangedCallback(ce, se, Oe) {
      const et = oe[ce], Ge = _e[et], qt = C0[Ge];
      et in _e && qt != null && qt.parse && (this[Wo][et] = qt.parse(Oe, this), this[R0]());
    }
    [(P = $m, q = Pf, Z = Wo, R0)]() {
      this[$m] && (this[Pf] ? w.update(this[Pf], this[Wo]) : this[Pf] = w.mount(
        this.container,
        D,
        this[Wo]
      ));
    }
  }
  for (const J of g) {
    const ce = re[J], se = _e[J];
    Object.defineProperty(Je.prototype, J, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Wo][J];
      },
      set(Oe) {
        this[Wo][J] = Oe;
        const et = C0[se];
        if (et != null && et.stringify) {
          const Ge = et.stringify(Oe);
          this.getAttribute(ce) !== Ge && this.setAttribute(ce, Ge);
        }
      }
    });
  }
  return Je;
}
function Lk(D = "") {
  return D.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
var b0, Ym = Rk;
if (process.env.NODE_ENV === "production")
  b0 = Ym.createRoot, Ym.hydrateRoot;
else {
  var gR = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  b0 = function(D, O) {
    gR.usingClientEntryPoint = !0;
    try {
      return Ym.createRoot(D, O);
    } finally {
      gR.usingClientEntryPoint = !1;
    }
  };
}
function Nk(D, O, w) {
  const P = b0(D), q = _R.createElement(O, w);
  return P.render(q), {
    root: P,
    ReactComponent: O
  };
}
function Mk({ root: D, ReactComponent: O }, w) {
  const P = _R.createElement(O, w);
  D.render(P);
}
function zk({ root: D }) {
  D.unmount();
}
function Uk(D, O = {}) {
  return Ok(D, O, { mount: Nk, update: Mk, unmount: zk });
}
var x0 = { exports: {} }, Kp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SR;
function Ak() {
  if (SR)
    return Kp;
  SR = 1;
  var D = Go, O = Symbol.for("react.element"), w = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, q = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(_e, re, oe) {
    var Je, J = {}, ce = null, se = null;
    oe !== void 0 && (ce = "" + oe), re.key !== void 0 && (ce = "" + re.key), re.ref !== void 0 && (se = re.ref);
    for (Je in re)
      P.call(re, Je) && !Z.hasOwnProperty(Je) && (J[Je] = re[Je]);
    if (_e && _e.defaultProps)
      for (Je in re = _e.defaultProps, re)
        J[Je] === void 0 && (J[Je] = re[Je]);
    return { $$typeof: O, type: _e, key: ce, ref: se, props: J, _owner: q.current };
  }
  return Kp.Fragment = w, Kp.jsx = g, Kp.jsxs = g, Kp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ER;
function Fk() {
  return ER || (ER = 1, process.env.NODE_ENV !== "production" && function() {
    var D = Go, O = Symbol.for("react.element"), w = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), _e = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), Je = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), Oe = Symbol.iterator, et = "@@iterator";
    function Ge(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = Oe && R[Oe] || R[et];
      return typeof Q == "function" ? Q : null;
    }
    var qt = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function st(R) {
      {
        for (var Q = arguments.length, ie = new Array(Q > 1 ? Q - 1 : 0), me = 1; me < Q; me++)
          ie[me - 1] = arguments[me];
        Ke("error", R, ie);
      }
    }
    function Ke(R, Q, ie) {
      {
        var me = qt.ReactDebugCurrentFrame, tt = me.getStackAddendum();
        tt !== "" && (Q += "%s", ie = ie.concat([tt]));
        var Et = ie.map(function(rt) {
          return String(rt);
        });
        Et.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Et);
      }
    }
    var vt = !1, Le = !1, ct = !1, $e = !1, rn = !1, wn;
    wn = Symbol.for("react.module.reference");
    function Qt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === P || R === Z || rn || R === q || R === oe || R === Je || $e || R === se || vt || Le || ct || typeof R == "object" && R !== null && (R.$$typeof === ce || R.$$typeof === J || R.$$typeof === g || R.$$typeof === _e || R.$$typeof === re || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === wn || R.getModuleId !== void 0));
    }
    function Ot(R, Q, ie) {
      var me = R.displayName;
      if (me)
        return me;
      var tt = Q.displayName || Q.name || "";
      return tt !== "" ? ie + "(" + tt + ")" : ie;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Pe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && st("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case P:
          return "Fragment";
        case w:
          return "Portal";
        case Z:
          return "Profiler";
        case q:
          return "StrictMode";
        case oe:
          return "Suspense";
        case Je:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case _e:
            var Q = R;
            return En(Q) + ".Consumer";
          case g:
            var ie = R;
            return En(ie._context) + ".Provider";
          case re:
            return Ot(R, R.render, "ForwardRef");
          case J:
            var me = R.displayName || null;
            return me !== null ? me : Pe(R.type) || "Memo";
          case ce: {
            var tt = R, Et = tt._payload, rt = tt._init;
            try {
              return Pe(rt(Et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var nt = Object.assign, At = 0, wt, Ee, ne, ke, T, I, de;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function Be() {
      {
        if (At === 0) {
          wt = console.log, Ee = console.info, ne = console.warn, ke = console.error, T = console.group, I = console.groupCollapsed, de = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: We,
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
    function St() {
      {
        if (At--, At === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, R, {
              value: wt
            }),
            info: nt({}, R, {
              value: Ee
            }),
            warn: nt({}, R, {
              value: ne
            }),
            error: nt({}, R, {
              value: ke
            }),
            group: nt({}, R, {
              value: T
            }),
            groupCollapsed: nt({}, R, {
              value: I
            }),
            groupEnd: nt({}, R, {
              value: de
            })
          });
        }
        At < 0 && st("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lt = qt.ReactCurrentDispatcher, ht;
    function ut(R, Q, ie) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (tt) {
            var me = tt.stack.trim().match(/\n( *(at )?)/);
            ht = me && me[1] || "";
          }
        return `
` + ht + R;
      }
    }
    var Ft = !1, Pr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Pr = new pr();
    }
    function Vr(R, Q) {
      if (!R || Ft)
        return "";
      {
        var ie = Pr.get(R);
        if (ie !== void 0)
          return ie;
      }
      var me;
      Ft = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Et;
      Et = lt.current, lt.current = null, Be();
      try {
        if (Q) {
          var rt = function() {
            throw Error();
          };
          if (Object.defineProperty(rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(rt, []);
            } catch (bt) {
              me = bt;
            }
            Reflect.construct(R, [], rt);
          } else {
            try {
              rt.call();
            } catch (bt) {
              me = bt;
            }
            R.call(rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            me = bt;
          }
          R();
        }
      } catch (bt) {
        if (bt && me && typeof bt.stack == "string") {
          for (var ze = bt.stack.split(`
`), Ln = me.stack.split(`
`), en = ze.length - 1, tn = Ln.length - 1; en >= 1 && tn >= 0 && ze[en] !== Ln[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (ze[en] !== Ln[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || ze[en] !== Ln[tn]) {
                    var tr = `
` + ze[en].replace(" at new ", " at ");
                    return R.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Pr.set(R, tr), tr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        Ft = !1, lt.current = Et, St(), Error.prepareStackTrace = tt;
      }
      var ci = R ? R.displayName || R.name : "", Vu = ci ? ut(ci) : "";
      return typeof R == "function" && Pr.set(R, Vu), Vu;
    }
    function dn(R, Q, ie) {
      return Vr(R, !1);
    }
    function Yn(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function An(R, Q, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Vr(R, Yn(R));
      if (typeof R == "string")
        return ut(R);
      switch (R) {
        case oe:
          return ut("Suspense");
        case Je:
          return ut("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case re:
            return dn(R.render);
          case J:
            return An(R.type, Q, ie);
          case ce: {
            var me = R, tt = me._payload, Et = me._init;
            try {
              return An(Et(tt), Q, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Fn = Object.prototype.hasOwnProperty, bn = {}, Br = qt.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var Q = R._owner, ie = An(R.type, R._source, Q ? Q.type : null);
        Br.setExtraStackFrame(ie);
      } else
        Br.setExtraStackFrame(null);
    }
    function In(R, Q, ie, me, tt) {
      {
        var Et = Function.call.bind(Fn);
        for (var rt in R)
          if (Et(R, rt)) {
            var ze = void 0;
            try {
              if (typeof R[rt] != "function") {
                var Ln = Error((me || "React class") + ": " + ie + " type `" + rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              ze = R[rt](Q, rt, me, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              ze = en;
            }
            ze && !(ze instanceof Error) && ($r(tt), st("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ie, rt, typeof ze), $r(null)), ze instanceof Error && !(ze.message in bn) && (bn[ze.message] = !0, $r(tt), st("Failed %s type: %s", ie, ze.message), $r(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(R) {
      return vr(R);
    }
    function hr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, ie = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
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
        return st("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(R)), er(R);
    }
    var pn = qt.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, li, ca, ae;
    ae = {};
    function De(R) {
      if (Fn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ot(R) {
      if (Fn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, Q) {
      if (typeof R.ref == "string" && pn.current && Q && pn.current.stateNode !== Q) {
        var ie = Pe(pn.current.type);
        ae[ie] || (st('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(pn.current.type), R.ref), ae[ie] = !0);
      }
    }
    function jt(R, Q) {
      {
        var ie = function() {
          li || (li = !0, st("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function xn(R, Q) {
      {
        var ie = function() {
          ca || (ca = !0, st("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var vn = function(R, Q, ie, me, tt, Et, rt) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: ie,
        props: rt,
        // Record the component responsible for creating this element.
        _owner: Et
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function mr(R, Q, ie, me, tt) {
      {
        var Et, rt = {}, ze = null, Ln = null;
        ie !== void 0 && (Ir(ie), ze = "" + ie), ot(Q) && (Ir(Q.key), ze = "" + Q.key), De(Q) && (Ln = Q.ref, zt(Q, tt));
        for (Et in Q)
          Fn.call(Q, Et) && !_r.hasOwnProperty(Et) && (rt[Et] = Q[Et]);
        if (R && R.defaultProps) {
          var en = R.defaultProps;
          for (Et in en)
            rt[Et] === void 0 && (rt[Et] = en[Et]);
        }
        if (ze || Ln) {
          var tn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ze && jt(rt, tn), Ln && xn(rt, tn);
        }
        return vn(R, ze, Ln, tt, me, pn.current, rt);
      }
    }
    var Yt = qt.ReactCurrentOwner, wr = qt.ReactDebugCurrentFrame;
    function Ht(R) {
      if (R) {
        var Q = R._owner, ie = An(R.type, R._source, Q ? Q.type : null);
        wr.setExtraStackFrame(ie);
      } else
        wr.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Wa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === O;
    }
    function wa() {
      {
        if (Yt.current) {
          var R = Pe(Yt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function il(R) {
      {
        if (R !== void 0) {
          var Q = R.fileName.replace(/^.*[\\\/]/, ""), ie = R.lineNumber;
          return `

Check your code at ` + Q + ":" + ie + ".";
        }
        return "";
      }
    }
    var ql = {};
    function Pu(R) {
      {
        var Q = wa();
        if (!Q) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (Q = `

Check the top-level render call using <` + ie + ">.");
        }
        return Q;
      }
    }
    function Di(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = Pu(Q);
        if (ql[ie])
          return;
        ql[ie] = !0;
        var me = "";
        R && R._owner && R._owner !== Yt.current && (me = " It was passed a child from " + Pe(R._owner.type) + "."), Ht(R), st('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, me), Ht(null);
      }
    }
    function ll(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var ie = 0; ie < R.length; ie++) {
            var me = R[ie];
            Wa(me) && Di(me, Q);
          }
        else if (Wa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var tt = Ge(R);
          if (typeof tt == "function" && tt !== R.entries)
            for (var Et = tt.call(R), rt; !(rt = Et.next()).done; )
              Wa(rt.value) && Di(rt.value, Q);
        }
      }
    }
    function fa(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var ie;
        if (typeof Q == "function")
          ie = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === re || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === J))
          ie = Q.propTypes;
        else
          return;
        if (ie) {
          var me = Pe(Q);
          In(ie, R.props, "prop", me, R);
        } else if (Q.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var tt = Pe(Q);
          st("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && st("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ui(R) {
      {
        for (var Q = Object.keys(R.props), ie = 0; ie < Q.length; ie++) {
          var me = Q[ie];
          if (me !== "children" && me !== "key") {
            Ht(R), st("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Ht(null);
            break;
          }
        }
        R.ref !== null && (Ht(R), st("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    function da(R, Q, ie, me, tt, Et) {
      {
        var rt = Qt(R);
        if (!rt) {
          var ze = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = il(tt);
          Ln ? ze += Ln : ze += wa();
          var en;
          R === null ? en = "null" : Yr(R) ? en = "array" : R !== void 0 && R.$$typeof === O ? (en = "<" + (Pe(R.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : en = typeof R, st("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, ze);
        }
        var tn = mr(R, Q, ie, tt, Et);
        if (tn == null)
          return tn;
        if (rt) {
          var tr = Q.children;
          if (tr !== void 0)
            if (me)
              if (Yr(tr)) {
                for (var ci = 0; ci < tr.length; ci++)
                  ll(tr[ci], R);
                Object.freeze && Object.freeze(tr);
              } else
                st("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ll(tr, R);
        }
        return R === P ? ui(tn) : fa(tn), tn;
      }
    }
    function oi(R, Q, ie) {
      return da(R, Q, ie, !0);
    }
    function br(R, Q, ie) {
      return da(R, Q, ie, !1);
    }
    var pa = br, si = oi;
    Zp.Fragment = P, Zp.jsx = pa, Zp.jsxs = si;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? x0.exports = Ak() : x0.exports = Fk();
var ki = x0.exports, tv = {}, ev = Go;
function jk(D) {
  return D && typeof D == "object" && "default" in D ? D : { default: D };
}
var Qm = /* @__PURE__ */ jk(ev);
function CR(D, O) {
  for (var w = 0; w < O.length; w++) {
    var P = O[w];
    P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(D, P.key, P);
  }
}
function Hk(D, O, w) {
  return O && CR(D.prototype, O), w && CR(D, w), D;
}
var Im = typeof process < "u" && process.env && process.env.NODE_ENV === "production", T0 = function(D) {
  return Object.prototype.toString.call(D) === "[object String]";
}, Pk = /* @__PURE__ */ function() {
  function D(w) {
    var P = w === void 0 ? {} : w, q = P.name, Z = q === void 0 ? "stylesheet" : q, g = P.optimizeForSpeed, _e = g === void 0 ? Im : g;
    Hu(T0(Z), "`name` must be a string"), this._name = Z, this._deletedRulePlaceholder = "#" + Z + "-deleted-rule____{}", Hu(typeof _e == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = _e, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
    var re = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = re ? re.getAttribute("content") : null;
  }
  var O = D.prototype;
  return O.setOptimizeForSpeed = function(P) {
    Hu(typeof P == "boolean", "`setOptimizeForSpeed` accepts a boolean"), Hu(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = P, this.inject();
  }, O.isOptimizeForSpeed = function() {
    return this._optimizeForSpeed;
  }, O.inject = function() {
    var P = this;
    if (Hu(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (Im || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
      return;
    }
    this._serverSheet = {
      cssRules: [],
      insertRule: function(q, Z) {
        return typeof Z == "number" ? P._serverSheet.cssRules[Z] = {
          cssText: q
        } : P._serverSheet.cssRules.push({
          cssText: q
        }), Z;
      },
      deleteRule: function(q) {
        P._serverSheet.cssRules[q] = null;
      }
    };
  }, O.getSheetForTag = function(P) {
    if (P.sheet)
      return P.sheet;
    for (var q = 0; q < document.styleSheets.length; q++)
      if (document.styleSheets[q].ownerNode === P)
        return document.styleSheets[q];
  }, O.getSheet = function() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  }, O.insertRule = function(P, q) {
    if (Hu(T0(P), "`insertRule` accepts only strings"), typeof window > "u")
      return typeof q != "number" && (q = this._serverSheet.cssRules.length), this._serverSheet.insertRule(P, q), this._rulesCount++;
    if (this._optimizeForSpeed) {
      var Z = this.getSheet();
      typeof q != "number" && (q = Z.cssRules.length);
      try {
        Z.insertRule(P, q);
      } catch {
        return Im || console.warn(`StyleSheet: illegal rule: 

` + P + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
      }
    } else {
      var g = this._tags[q];
      this._tags.push(this.makeStyleTag(this._name, P, g));
    }
    return this._rulesCount++;
  }, O.replaceRule = function(P, q) {
    if (this._optimizeForSpeed || typeof window > "u") {
      var Z = typeof window < "u" ? this.getSheet() : this._serverSheet;
      if (q.trim() || (q = this._deletedRulePlaceholder), !Z.cssRules[P])
        return P;
      Z.deleteRule(P);
      try {
        Z.insertRule(q, P);
      } catch {
        Im || console.warn(`StyleSheet: illegal rule: 

` + q + `

See https://stackoverflow.com/q/20007992 for more info`), Z.insertRule(this._deletedRulePlaceholder, P);
      }
    } else {
      var g = this._tags[P];
      Hu(g, "old rule at index `" + P + "` not found"), g.textContent = q;
    }
    return P;
  }, O.deleteRule = function(P) {
    if (typeof window > "u") {
      this._serverSheet.deleteRule(P);
      return;
    }
    if (this._optimizeForSpeed)
      this.replaceRule(P, "");
    else {
      var q = this._tags[P];
      Hu(q, "rule at index `" + P + "` not found"), q.parentNode.removeChild(q), this._tags[P] = null;
    }
  }, O.flush = function() {
    this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(P) {
      return P && P.parentNode.removeChild(P);
    }), this._tags = []) : this._serverSheet.cssRules = [];
  }, O.cssRules = function() {
    var P = this;
    return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(q, Z) {
      return Z ? q = q.concat(Array.prototype.map.call(P.getSheetForTag(Z).cssRules, function(g) {
        return g.cssText === P._deletedRulePlaceholder ? null : g;
      })) : q.push(null), q;
    }, []);
  }, O.makeStyleTag = function(P, q, Z) {
    q && Hu(T0(q), "makeStyleTag accepts only strings as second parameter");
    var g = document.createElement("style");
    this._nonce && g.setAttribute("nonce", this._nonce), g.type = "text/css", g.setAttribute("data-" + P, ""), q && g.appendChild(document.createTextNode(q));
    var _e = document.head || document.getElementsByTagName("head")[0];
    return Z ? _e.insertBefore(g, Z) : _e.appendChild(g), g;
  }, Hk(D, [
    {
      key: "length",
      get: function() {
        return this._rulesCount;
      }
    }
  ]), D;
}();
function Hu(D, O) {
  if (!D)
    throw new Error("StyleSheet: " + O + ".");
}
function Vk(D) {
  for (var O = 5381, w = D.length; w; )
    O = O * 33 ^ D.charCodeAt(--w);
  return O >>> 0;
}
var Bk = Vk, $k = function(D) {
  return D.replace(/\/style/gi, "\\/style");
}, Vf = {};
function k0(D, O) {
  if (!O)
    return "jsx-" + D;
  var w = String(O), P = D + w;
  return Vf[P] || (Vf[P] = "jsx-" + Bk(D + "-" + w)), Vf[P];
}
function RR(D, O) {
  var w = /__jsx-style-dynamic-selector/g;
  typeof window > "u" && (O = $k(O));
  var P = D + O;
  return Vf[P] || (Vf[P] = O.replace(w, D)), Vf[P];
}
function Yk(D, O) {
  return O === void 0 && (O = {}), D.map(function(w) {
    var P = w[0], q = w[1];
    return /* @__PURE__ */ Qm.default.createElement("style", {
      id: "__" + P,
      // Avoid warnings upon render with a key
      key: "__" + P,
      nonce: O.nonce ? O.nonce : void 0,
      dangerouslySetInnerHTML: {
        __html: q
      }
    });
  });
}
var Ik = /* @__PURE__ */ function() {
  function D(w) {
    var P = w === void 0 ? {} : w, q = P.styleSheet, Z = q === void 0 ? null : q, g = P.optimizeForSpeed, _e = g === void 0 ? !1 : g;
    this._sheet = Z || new Pk({
      name: "styled-jsx",
      optimizeForSpeed: _e
    }), this._sheet.inject(), Z && typeof _e == "boolean" && (this._sheet.setOptimizeForSpeed(_e), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }
  var O = D.prototype;
  return O.add = function(P) {
    var q = this;
    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(P.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(oe, Je) {
      return oe[Je] = 0, oe;
    }, {}));
    var Z = this.getIdAndRules(P), g = Z.styleId, _e = Z.rules;
    if (g in this._instancesCounts) {
      this._instancesCounts[g] += 1;
      return;
    }
    var re = _e.map(function(oe) {
      return q._sheet.insertRule(oe);
    }).filter(function(oe) {
      return oe !== -1;
    });
    this._indices[g] = re, this._instancesCounts[g] = 1;
  }, O.remove = function(P) {
    var q = this, Z = this.getIdAndRules(P).styleId;
    if (Qk(Z in this._instancesCounts, "styleId: `" + Z + "` not found"), this._instancesCounts[Z] -= 1, this._instancesCounts[Z] < 1) {
      var g = this._fromServer && this._fromServer[Z];
      g ? (g.parentNode.removeChild(g), delete this._fromServer[Z]) : (this._indices[Z].forEach(function(_e) {
        return q._sheet.deleteRule(_e);
      }), delete this._indices[Z]), delete this._instancesCounts[Z];
    }
  }, O.update = function(P, q) {
    this.add(q), this.remove(P);
  }, O.flush = function() {
    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
  }, O.cssRules = function() {
    var P = this, q = this._fromServer ? Object.keys(this._fromServer).map(function(g) {
      return [
        g,
        P._fromServer[g]
      ];
    }) : [], Z = this._sheet.cssRules();
    return q.concat(Object.keys(this._indices).map(function(g) {
      return [
        g,
        P._indices[g].map(function(_e) {
          return Z[_e].cssText;
        }).join(P._optimizeForSpeed ? "" : `
`)
      ];
    }).filter(function(g) {
      return !!g[1];
    }));
  }, O.styles = function(P) {
    return Yk(this.cssRules(), P);
  }, O.getIdAndRules = function(P) {
    var q = P.children, Z = P.dynamic, g = P.id;
    if (Z) {
      var _e = k0(g, Z);
      return {
        styleId: _e,
        rules: Array.isArray(q) ? q.map(function(re) {
          return RR(_e, re);
        }) : [
          RR(_e, q)
        ]
      };
    }
    return {
      styleId: k0(g),
      rules: Array.isArray(q) ? q : [
        q
      ]
    };
  }, O.selectFromServer = function() {
    var P = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return P.reduce(function(q, Z) {
      var g = Z.id.slice(2);
      return q[g] = Z, q;
    }, {});
  }, D;
}();
function Qk(D, O) {
  if (!D)
    throw new Error("StyleSheetRegistry: " + O + ".");
}
var Wm = /* @__PURE__ */ ev.createContext(null);
Wm.displayName = "StyleSheetContext";
function O0() {
  return new Ik();
}
function Wk(D) {
  var O = D.registry, w = D.children, P = ev.useContext(Wm), q = ev.useState(function() {
    return P || O || O0();
  }), Z = q[0];
  return /* @__PURE__ */ Qm.default.createElement(Wm.Provider, {
    value: Z
  }, w);
}
function xR() {
  return ev.useContext(Wm);
}
var Gk = Qm.default.useInsertionEffect || Qm.default.useLayoutEffect, TR = typeof window < "u" ? O0() : void 0;
function kR(D) {
  var O = TR || xR();
  return O ? typeof window > "u" ? (O.add(D), null) : (Gk(function() {
    return O.add(D), function() {
      O.remove(D);
    };
  }, [
    D.id,
    String(D.dynamic)
  ]), null) : null;
}
kR.dynamic = function(D) {
  return D.map(function(O) {
    var w = O[0], P = O[1];
    return k0(w, P);
  }).join(" ");
};
tv.StyleRegistry = Wk;
tv.createStyleRegistry = O0;
tv.style = kR;
tv.useStyleRegistry = xR;
var qk = tv.style;
const Xk = /* @__PURE__ */ D0(qk);
function Kk({
  routeRoot: D = "/",
  initialRoute: O
}) {
  const [w, P] = Go.useState(O);
  Go.useEffect(() => {
    const g = (_e) => {
      _e.data.url.startsWith(D) ? P(_e.data.url.replace(D, "")) : P("");
    };
    return document.addEventListener("routechange", g), () => {
      document.removeEventListener("routechange", g);
    };
  }, []);
  const q = (g) => {
    const _e = g.target.getAttribute("href");
    g.preventDefault();
    const re = new CustomEvent("routerequest", {
      bubbles: !0
    });
    re.data = {
      href: _e
    }, re.originalEvent = g, g.target.dispatchEvent(re);
  }, Z = (g) => {
    const _e = g.target.getAttribute("href"), re = new CustomEvent("prefetchrequest", {
      bubbles: !0
    });
    re.data = {
      href: _e
    }, re.originalEvent = g, g.target.dispatchEvent(re);
  };
  return /* @__PURE__ */ ki.jsxs(ki.Fragment, { children: [
    /* @__PURE__ */ ki.jsx(Xk, { id: "1370157471", children: ["li.selected.jsx-1370157471{background-color:blue;}", "li.selected.jsx-1370157471 *.jsx-1370157471{color:white;}"] }),
    /* @__PURE__ */ ki.jsxs("ul", { className: "jsx-1370157471", children: [
      /* @__PURE__ */ ki.jsx("li", { className: "jsx-1370157471 " + ((w === "foo/bar" ? "selected" : "") || ""), children: /* @__PURE__ */ ki.jsx("a", { href: "/foo/bar", onClick: q, className: "jsx-1370157471", children: "Nav to /foo/bar" }) }),
      /* @__PURE__ */ ki.jsx("li", { className: "jsx-1370157471 " + ((w === "baz" ? "selected" : "") || ""), children: /* @__PURE__ */ ki.jsx("a", { href: "/baz", onClick: q, className: "jsx-1370157471", children: "Nav to /baz" }) }),
      /* @__PURE__ */ ki.jsx("li", { className: "jsx-1370157471 " + ((w === "content" ? "selected" : "") || ""), children: /* @__PURE__ */ ki.jsx("a", { href: "/content", onMouseOver: Z, onClick: q, className: "jsx-1370157471", children: "Nav to /content with dynamic content" }) }),
      /* @__PURE__ */ ki.jsx("li", { className: "jsx-1370157471 " + ((w === "invalid-route" ? "selected" : "") || ""), children: /* @__PURE__ */ ki.jsx("a", { href: "/invalid-route", onClick: q, className: "jsx-1370157471", children: "This nav is invalid" }) })
    ] })
  ] });
}
const Zk = Uk(Kk, {
  props: {
    routeRoot: "string",
    initialRoute: "string"
  }
});
customElements.define("nav-links", Zk);
