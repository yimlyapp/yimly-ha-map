var Kv = Object.create, Im = Object.defineProperty, Jv = Object.getOwnPropertyDescriptor, Fv = Object.getOwnPropertyNames, Iv = Object.getPrototypeOf, Wm = Object.prototype.hasOwnProperty, ta = (b, B) => () => (B || (b((B = { exports: {} }).exports, B), b = null), B.exports), Wv = (b, B, N, F) => {
  if (B && typeof B == "object" || typeof B == "function")
    for (var _ = Fv(B), st = 0, tt = _.length, ft; st < tt; st++)
      ft = _[st], !Wm.call(b, ft) && ft !== N && Im(b, ft, {
        get: ((X) => B[X]).bind(null, ft),
        enumerable: !(F = Jv(B, ft)) || F.enumerable
      });
  return b;
}, $m = (b, B, N) => (N = b != null ? Kv(Iv(b)) : {}, Wv(B || !b || !b.__esModule || !Wm.call(b, "default") ? Im(N, "default", {
  value: b,
  enumerable: !0
}) : N, b)), $v = /* @__PURE__ */ ta(((b) => {
  var B = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), tt = Symbol.for("react.consumer"), ft = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Lt = Symbol.for("react.suspense"), qt = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), lt = Symbol.for("react.view_transition"), mt = Symbol.iterator;
  function $(v) {
    return v === null || typeof v != "object" ? null : (v = mt && v[mt] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var pt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, J = Object.assign, gt = {};
  function ot(v, O, V) {
    this.props = v, this.context = O, this.refs = gt, this.updater = V || pt;
  }
  ot.prototype.isReactComponent = {}, ot.prototype.setState = function(v, O) {
    if (typeof v != "object" && typeof v != "function" && v != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, v, O, "setState");
  }, ot.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function Xt() {
  }
  Xt.prototype = ot.prototype;
  function Et(v, O, V) {
    this.props = v, this.context = O, this.refs = gt, this.updater = V || pt;
  }
  var kt = Et.prototype = new Xt();
  kt.constructor = Et, J(kt, ot.prototype), kt.isPureReactComponent = !0;
  var Kt = Array.isArray;
  function wt() {
  }
  var vt = {
    H: null,
    A: null,
    T: null,
    S: null
  }, Rt = Object.prototype.hasOwnProperty;
  function xt(v, O, V) {
    var I = V.ref;
    return {
      $$typeof: B,
      type: v,
      key: O,
      ref: I !== void 0 ? I : null,
      props: V
    };
  }
  function _t(v, O) {
    return xt(v.type, O, v.props);
  }
  function Mt(v) {
    return typeof v == "object" && v !== null && v.$$typeof === B;
  }
  function Ct(v) {
    var O = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + v.replace(/[=:]/g, function(V) {
      return O[V];
    });
  }
  var Wt = /\/+/g;
  function H(v, O) {
    return typeof v == "object" && v !== null && v.key != null ? Ct("" + v.key) : O.toString(36);
  }
  function at(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(wt, wt) : (v.status = "pending", v.then(function(O) {
          v.status === "pending" && (v.status = "fulfilled", v.value = O);
        }, function(O) {
          v.status === "pending" && (v.status = "rejected", v.reason = O);
        })), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function x(v, O, V, I, yt) {
    var St = typeof v;
    (St === "undefined" || St === "boolean") && (v = null);
    var Dt = !1;
    if (v === null) Dt = !0;
    else switch (St) {
      case "bigint":
      case "string":
      case "number":
        Dt = !0;
        break;
      case "object":
        switch (v.$$typeof) {
          case B:
          case N:
            Dt = !0;
            break;
          case q:
            return Dt = v._init, x(Dt(v._payload), O, V, I, yt);
        }
    }
    if (Dt) return yt = yt(v), Dt = I === "" ? "." + H(v, 0) : I, Kt(yt) ? (V = "", Dt != null && (V = Dt.replace(Wt, "$&/") + "/"), x(yt, O, V, "", function(di) {
      return di;
    })) : yt != null && (Mt(yt) && (yt = _t(yt, V + (yt.key == null || v && v.key === yt.key ? "" : ("" + yt.key).replace(Wt, "$&/") + "/") + Dt)), O.push(yt)), 1;
    Dt = 0;
    var K = I === "" ? "." : I + ":";
    if (Kt(v)) for (var ht = 0; ht < v.length; ht++) I = v[ht], St = K + H(I, ht), Dt += x(I, O, V, St, yt);
    else if (ht = $(v), typeof ht == "function") for (v = ht.call(v), ht = 0; !(I = v.next()).done; ) I = I.value, St = K + H(I, ht++), Dt += x(I, O, V, St, yt);
    else if (St === "object") {
      if (typeof v.then == "function") return x(at(v), O, V, I, yt);
      throw O = String(v), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Dt;
  }
  function G(v, O, V) {
    if (v == null) return v;
    var I = [], yt = 0;
    return x(v, I, "", "", function(St) {
      return O.call(V, St, yt++);
    }), I;
  }
  function R(v) {
    if (v._status === -1) {
      var O = v._result, V = O();
      V.then(function(I) {
        (v._status === 0 || v._status === -1) && (v._status = 1, v._result = I, V.status === void 0 && (V.status = "fulfilled", V.value = I));
      }, function(I) {
        (v._status === 0 || v._status === -1) && (v._status = 2, v._result = I, V.status === void 0 && (V.status = "rejected", V.reason = I));
      }), v._status === -1 && (v._status = 0, v._result = V);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var P = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  };
  function Y(v) {
    var O = vt.T, V = {};
    V.types = O !== null ? O.types : null, vt.T = V;
    try {
      var I = v(), yt = vt.S;
      yt !== null && yt(V, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(wt, P);
    } catch (St) {
      P(St);
    } finally {
      O !== null && V.types !== null && (O.types = V.types), vt.T = O;
    }
  }
  function rt(v) {
    var O = vt.T;
    if (O !== null) {
      var V = O.types;
      V === null ? O.types = [v] : V.indexOf(v) === -1 && V.push(v);
    } else Y(rt.bind(null, v));
  }
  var U = {
    map: G,
    forEach: function(v, O, V) {
      G(v, function() {
        O.apply(this, arguments);
      }, V);
    },
    count: function(v) {
      var O = 0;
      return G(v, function() {
        O++;
      }), O;
    },
    toArray: function(v) {
      return G(v, function(O) {
        return O;
      }) || [];
    },
    only: function(v) {
      if (!Mt(v)) throw Error("React.Children.only expected to receive a single React element child.");
      return v;
    }
  };
  b.Activity = C, b.Children = U, b.Component = ot, b.Fragment = F, b.Profiler = st, b.PureComponent = Et, b.StrictMode = _, b.Suspense = Lt, b.ViewTransition = lt, b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = vt, b.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return vt.H.useMemoCache(v);
    }
  }, b.addTransitionType = rt, b.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, b.cacheSignal = function() {
    return null;
  }, b.cloneElement = function(v, O, V) {
    if (v == null) throw Error("The argument must be a React element, but you passed " + v + ".");
    var I = J({}, v.props), yt = v.key;
    if (O != null) for (St in O.key !== void 0 && (yt = "" + O.key), O) !Rt.call(O, St) || St === "key" || St === "__self" || St === "__source" || St === "ref" && O.ref === void 0 || (I[St] = O[St]);
    var St = arguments.length - 2;
    if (St === 1) I.children = V;
    else if (1 < St) {
      for (var Dt = Array(St), K = 0; K < St; K++) Dt[K] = arguments[K + 2];
      I.children = Dt;
    }
    return xt(v.type, yt, I);
  }, b.createContext = function(v) {
    return v = {
      $$typeof: ft,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: tt,
      _context: v
    }, v;
  }, b.createElement = function(v, O, V) {
    var I, yt = {}, St = null;
    if (O != null) for (I in O.key !== void 0 && (St = "" + O.key), O) Rt.call(O, I) && I !== "key" && I !== "__self" && I !== "__source" && (yt[I] = O[I]);
    var Dt = arguments.length - 2;
    if (Dt === 1) yt.children = V;
    else if (1 < Dt) {
      for (var K = Array(Dt), ht = 0; ht < Dt; ht++) K[ht] = arguments[ht + 2];
      yt.children = K;
    }
    if (v && v.defaultProps) for (I in Dt = v.defaultProps, Dt) yt[I] === void 0 && (yt[I] = Dt[I]);
    return xt(v, St, yt);
  }, b.createRef = function() {
    return { current: null };
  }, b.forwardRef = function(v) {
    return {
      $$typeof: X,
      render: v
    };
  }, b.isValidElement = Mt, b.lazy = function(v) {
    return {
      $$typeof: q,
      _payload: {
        _status: -1,
        _result: v
      },
      _init: R
    };
  }, b.memo = function(v, O) {
    return {
      $$typeof: qt,
      type: v,
      compare: O === void 0 ? null : O
    };
  }, b.startTransition = Y, b.unstable_useCacheRefresh = function() {
    return vt.H.useCacheRefresh();
  }, b.use = function(v) {
    return vt.H.use(v);
  }, b.useActionState = function(v, O, V) {
    return vt.H.useActionState(v, O, V);
  }, b.useCallback = function(v, O) {
    return vt.H.useCallback(v, O);
  }, b.useContext = function(v) {
    return vt.H.useContext(v);
  }, b.useDebugValue = function() {
  }, b.useDeferredValue = function(v, O) {
    return vt.H.useDeferredValue(v, O);
  }, b.useEffect = function(v, O) {
    return vt.H.useEffect(v, O);
  }, b.useEffectEvent = function(v) {
    return vt.H.useEffectEvent(v);
  }, b.useId = function() {
    return vt.H.useId();
  }, b.useImperativeHandle = function(v, O, V) {
    return vt.H.useImperativeHandle(v, O, V);
  }, b.useInsertionEffect = function(v, O) {
    return vt.H.useInsertionEffect(v, O);
  }, b.useLayoutEffect = function(v, O) {
    return vt.H.useLayoutEffect(v, O);
  }, b.useMemo = function(v, O) {
    return vt.H.useMemo(v, O);
  }, b.useOptimistic = function(v, O) {
    return vt.H.useOptimistic(v, O);
  }, b.useReducer = function(v, O, V) {
    return vt.H.useReducer(v, O, V);
  }, b.useRef = function(v) {
    return vt.H.useRef(v);
  }, b.useState = function(v) {
    return vt.H.useState(v);
  }, b.useSyncExternalStore = function(v, O, V) {
    return vt.H.useSyncExternalStore(v, O, V);
  }, b.useTransition = function() {
    return vt.H.useTransition();
  }, b.version = "19.3.0";
})), kf = /* @__PURE__ */ ta(((b, B) => {
  B.exports = $v();
})), tp = /* @__PURE__ */ ta(((b) => {
  function B(H, at) {
    var x = H.length;
    H.push(at);
    t: for (; 0 < x; ) {
      var G = x - 1 >>> 1, R = H[G];
      if (0 < _(R, at)) H[G] = at, H[x] = R, x = G;
      else break t;
    }
  }
  function N(H) {
    return H.length === 0 ? null : H[0];
  }
  function F(H) {
    if (H.length === 0) return null;
    var at = H[0], x = H.pop();
    if (x !== at) {
      H[0] = x;
      t: for (var G = 0, R = H.length, P = R >>> 1; G < P; ) {
        var Y = 2 * (G + 1) - 1, rt = H[Y], U = Y + 1, v = H[U];
        if (0 > _(rt, x)) U < R && 0 > _(v, rt) ? (H[G] = v, H[U] = x, G = U) : (H[G] = rt, H[Y] = x, G = Y);
        else if (U < R && 0 > _(v, x)) H[G] = v, H[U] = x, G = U;
        else break t;
      }
    }
    return at;
  }
  function _(H, at) {
    var x = H.sortIndex - at.sortIndex;
    return x !== 0 ? x : H.id - at.id;
  }
  if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var st = performance;
    b.unstable_now = function() {
      return st.now();
    };
  } else {
    var tt = Date, ft = tt.now();
    b.unstable_now = function() {
      return tt.now() - ft;
    };
  }
  var X = [], Lt = [], qt = 1, q = null, C = 3, lt = !1, mt = !1, $ = !1, pt = !1, J = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, ot = typeof setImmediate < "u" ? setImmediate : null;
  function Xt(H) {
    for (var at = N(Lt); at !== null; ) {
      if (at.callback === null) F(Lt);
      else if (at.startTime <= H) F(Lt), at.sortIndex = at.expirationTime, B(X, at);
      else break;
      at = N(Lt);
    }
  }
  function Et(H) {
    if ($ = !1, Xt(H), !mt) if (N(X) !== null) mt = !0, kt || (kt = !0, _t());
    else {
      var at = N(Lt);
      at !== null && Wt(Et, at.startTime - H);
    }
  }
  var kt = !1, Kt = -1, wt = 5, vt = -1;
  function Rt() {
    return pt ? !0 : !(b.unstable_now() - vt < wt);
  }
  function xt() {
    if (pt = !1, kt) {
      var H = b.unstable_now();
      vt = H;
      var at = !0;
      try {
        t: {
          mt = !1, $ && ($ = !1, gt(Kt), Kt = -1), lt = !0;
          var x = C;
          try {
            e: {
              for (Xt(H), q = N(X); q !== null && !(q.expirationTime > H && Rt()); ) {
                var G = q.callback;
                if (typeof G == "function") {
                  q.callback = null, C = q.priorityLevel;
                  var R = G(q.expirationTime <= H);
                  if (H = b.unstable_now(), typeof R == "function") {
                    q.callback = R, Xt(H), at = !0;
                    break e;
                  }
                  q === N(X) && F(X), Xt(H);
                } else F(X);
                q = N(X);
              }
              if (q !== null) at = !0;
              else {
                var P = N(Lt);
                P !== null && Wt(Et, P.startTime - H), at = !1;
              }
            }
            break t;
          } finally {
            q = null, C = x, lt = !1;
          }
          at = void 0;
        }
      } finally {
        at ? _t() : kt = !1;
      }
    }
  }
  var _t;
  if (typeof ot == "function") _t = function() {
    ot(xt);
  };
  else if (typeof MessageChannel < "u") {
    var Mt = new MessageChannel(), Ct = Mt.port2;
    Mt.port1.onmessage = xt, _t = function() {
      Ct.postMessage(null);
    };
  } else _t = function() {
    J(xt, 0);
  };
  function Wt(H, at) {
    Kt = J(function() {
      H(b.unstable_now());
    }, at);
  }
  b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(H) {
    H.callback = null;
  }, b.unstable_forceFrameRate = function(H) {
    0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wt = 0 < H ? Math.floor(1e3 / H) : 5;
  }, b.unstable_getCurrentPriorityLevel = function() {
    return C;
  }, b.unstable_next = function(H) {
    switch (C) {
      case 1:
      case 2:
      case 3:
        var at = 3;
        break;
      default:
        at = C;
    }
    var x = C;
    C = at;
    try {
      return H();
    } finally {
      C = x;
    }
  }, b.unstable_requestPaint = function() {
    pt = !0;
  }, b.unstable_runWithPriority = function(H, at) {
    switch (H) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        H = 3;
    }
    var x = C;
    C = H;
    try {
      return at();
    } finally {
      C = x;
    }
  }, b.unstable_scheduleCallback = function(H, at, x) {
    var G = b.unstable_now();
    switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? G + x : G) : x = G, H) {
      case 1:
        var R = -1;
        break;
      case 2:
        R = 250;
        break;
      case 5:
        R = 1073741823;
        break;
      case 4:
        R = 1e4;
        break;
      default:
        R = 5e3;
    }
    return R = x + R, H = {
      id: qt++,
      callback: at,
      priorityLevel: H,
      startTime: x,
      expirationTime: R,
      sortIndex: -1
    }, x > G ? (H.sortIndex = x, B(Lt, H), N(X) === null && H === N(Lt) && ($ ? (gt(Kt), Kt = -1) : $ = !0, Wt(Et, x - G))) : (H.sortIndex = R, B(X, H), mt || lt || (mt = !0, kt || (kt = !0, _t()))), H;
  }, b.unstable_shouldYield = Rt, b.unstable_wrapCallback = function(H) {
    var at = C;
    return function() {
      var x = C;
      C = at;
      try {
        return H.apply(this, arguments);
      } finally {
        C = x;
      }
    };
  };
})), ep = /* @__PURE__ */ ta(((b, B) => {
  B.exports = tp();
})), ip = /* @__PURE__ */ ta(((b) => {
  var B = kf();
  function N(q) {
    var C = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      C += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var lt = 2; lt < arguments.length; lt++) C += "&args[]=" + encodeURIComponent(arguments[lt]);
    }
    return "Minified React error #" + q + "; visit " + C + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function F() {
  }
  var _ = {
    d: {
      f: F,
      r: function() {
        throw Error(N(522));
      },
      D: F,
      C: F,
      L: F,
      m: F,
      X: F,
      S: F,
      M: F
    },
    p: 0,
    findDOMNode: null
  }, st = Symbol.for("react.portal"), tt = Symbol.for("react.recoverable"), ft = Symbol.for("react.optimistic_key");
  function X(q, C, lt) {
    var mt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: st,
      key: mt == null ? null : mt === ft ? ft : "" + mt,
      children: q,
      containerInfo: C,
      implementation: lt
    };
  }
  var Lt = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function qt(q, C) {
    if (q === "font") return "";
    if (typeof C == "string") return C === "use-credentials" ? C : "";
  }
  b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, b.browser = function(q) {
    return {
      $$typeof: tt,
      _reason: q
    };
  }, b.createPortal = function(q, C) {
    var lt = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!C || C.nodeType !== 1 && C.nodeType !== 9 && C.nodeType !== 11) throw Error(N(299));
    return X(q, C, null, lt);
  }, b.flushSync = function(q) {
    var C = Lt.T, lt = _.p;
    try {
      if (Lt.T = null, _.p = 2, q) return q();
    } finally {
      Lt.T = C, _.p = lt, _.d.f();
    }
  }, b.preconnect = function(q, C) {
    typeof q == "string" && (C ? (C = C.crossOrigin, C = typeof C == "string" ? C === "use-credentials" ? C : "" : void 0) : C = null, _.d.C(q, C));
  }, b.prefetchDNS = function(q) {
    typeof q == "string" && _.d.D(q);
  }, b.preinit = function(q, C) {
    if (typeof q == "string" && C && typeof C.as == "string") {
      var lt = C.as, mt = qt(lt, C.crossOrigin), $ = typeof C.integrity == "string" ? C.integrity : void 0, pt = typeof C.fetchPriority == "string" ? C.fetchPriority : void 0;
      lt === "style" ? _.d.S(q, typeof C.precedence == "string" ? C.precedence : void 0, {
        crossOrigin: mt,
        integrity: $,
        fetchPriority: pt
      }) : lt === "script" && _.d.X(q, {
        crossOrigin: mt,
        integrity: $,
        fetchPriority: pt,
        nonce: typeof C.nonce == "string" ? C.nonce : void 0
      });
    }
  }, b.preinitModule = function(q, C) {
    if (typeof q == "string") if (typeof C == "object" && C !== null) {
      if (C.as == null || C.as === "script") {
        var lt = qt(C.as, C.crossOrigin);
        _.d.M(q, {
          crossOrigin: lt,
          integrity: typeof C.integrity == "string" ? C.integrity : void 0,
          nonce: typeof C.nonce == "string" ? C.nonce : void 0,
          fetchPriority: typeof C.fetchPriority == "string" ? C.fetchPriority : void 0
        });
      }
    } else C ?? _.d.M(q);
  }, b.preload = function(q, C) {
    if (typeof q == "string" && typeof C == "object" && C !== null && typeof C.as == "string") {
      var lt = C.as, mt = qt(lt, C.crossOrigin);
      _.d.L(q, lt, {
        crossOrigin: mt,
        integrity: typeof C.integrity == "string" ? C.integrity : void 0,
        nonce: typeof C.nonce == "string" ? C.nonce : void 0,
        type: typeof C.type == "string" ? C.type : void 0,
        fetchPriority: typeof C.fetchPriority == "string" ? C.fetchPriority : void 0,
        referrerPolicy: typeof C.referrerPolicy == "string" ? C.referrerPolicy : void 0,
        imageSrcSet: typeof C.imageSrcSet == "string" ? C.imageSrcSet : void 0,
        imageSizes: typeof C.imageSizes == "string" ? C.imageSizes : void 0,
        media: typeof C.media == "string" ? C.media : void 0
      });
    }
  }, b.preloadModule = function(q, C) {
    if (typeof q == "string") if (C) {
      var lt = qt(C.as, C.crossOrigin);
      _.d.m(q, {
        as: typeof C.as == "string" && C.as !== "script" ? C.as : void 0,
        crossOrigin: lt,
        integrity: typeof C.integrity == "string" ? C.integrity : void 0,
        nonce: typeof C.nonce == "string" ? C.nonce : void 0,
        fetchPriority: typeof C.fetchPriority == "string" ? C.fetchPriority : void 0
      });
    } else _.d.m(q);
  }, b.requestFormReset = function(q) {
    _.d.r(q);
  }, b.unstable_batchedUpdates = function(q, C) {
    return q(C);
  }, b.useFormState = function(q, C, lt) {
    return Lt.H.useFormState(q, C, lt);
  }, b.useFormStatus = function() {
    return Lt.H.useHostTransitionStatus();
  }, b.version = "19.3.0";
})), ap = /* @__PURE__ */ ta(((b, B) => {
  function N() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (F) {
        console.error(F);
      }
  }
  N(), B.exports = ip();
})), np = /* @__PURE__ */ ta(((b) => {
  var B = ep(), N = kf(), F = ap();
  function _(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function st(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function tt(t) {
    for (var e = t, a = e; a && !a.alternate; ) e = a, (e.flags & 4098) !== 0 && (t = e.return), a = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function ft(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function X(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function Lt(t) {
    if (tt(t) !== t) throw Error(_(188));
  }
  function qt(t) {
    var e = t.alternate;
    if (!e) {
      if (e = tt(t), e === null) throw Error(_(188));
      return e !== t ? null : t;
    }
    for (var a = t, n = e; ; ) {
      var o = a.return;
      if (o === null) break;
      var r = o.alternate;
      if (r === null) {
        if (n = o.return, n !== null) {
          a = n;
          continue;
        }
        break;
      }
      if (o.child === r.child) {
        for (r = o.child; r; ) {
          if (r === a) return Lt(o), t;
          if (r === n) return Lt(o), e;
          r = r.sibling;
        }
        throw Error(_(188));
      }
      if (a.return !== n.return) a = o, n = r;
      else {
        for (var c = !1, h = o.child; h; ) {
          if (h === a) {
            c = !0, a = o, n = r;
            break;
          }
          if (h === n) {
            c = !0, n = o, a = r;
            break;
          }
          h = h.sibling;
        }
        if (!c) {
          for (h = r.child; h; ) {
            if (h === a) {
              c = !0, a = r, n = o;
              break;
            }
            if (h === n) {
              c = !0, n = r, a = o;
              break;
            }
            h = h.sibling;
          }
          if (!c) throw Error(_(189));
        }
      }
      if (a.alternate !== n) throw Error(_(190));
    }
    if (a.tag !== 3) throw Error(_(188));
    return a.stateNode.current === a ? t : e;
  }
  function q(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = q(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function C(t, e, a, n, o, r) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && a(t, n, o, r) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && C(t.child, e, a, n, o, r)) return !0;
      t = t.sibling;
    }
    return !1;
  }
  function lt(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function mt(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function $(t) {
    var e = [null, null], a = lt(t);
    return a === null || pt(e, t, a.child, { foundSelf: !1 }), e;
  }
  function pt(t, e, a, n) {
    for (; a !== null; ) {
      if (a === e) n.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (n.foundSelf) return t[1] = a, !0;
        t[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && pt(t, e, a.child, n)) return !0;
      a = a.sibling;
    }
    return !1;
  }
  function J(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(_(559));
    }
  }
  var gt = null, ot = null;
  function Xt(t, e, a) {
    return t === a ? !0 : t === e ? (gt = t, !0) : !1;
  }
  function Et(t, e, a) {
    return t === a ? (ot = t, !1) : t === e ? (ot !== null && (gt = t), !0) : !1;
  }
  function kt(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Kt(t, e, a) {
    for (var n = 0, o = t; o; o = a(o)) n++;
    o = 0;
    for (var r = e; r; r = a(r)) o++;
    for (; 0 < n - o; ) t = a(t), n--;
    for (; 0 < o - n; ) e = a(e), o--;
    for (; n--; ) {
      if (t === e || e !== null && t === e.alternate) return t;
      t = a(t), e = a(e);
    }
    return null;
  }
  var wt = Object.assign, vt = Symbol.for("react.element"), Rt = Symbol.for("react.transitional.element"), xt = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), Mt = Symbol.for("react.strict_mode"), Ct = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), H = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), rt = Symbol.for("react.legacy_hidden"), U = Symbol.for("react.memo_cache_sentinel"), v = Symbol.for("react.view_transition"), O = Symbol.for("react.recoverable"), V = Symbol.iterator;
  function I(t) {
    return t === null || typeof t != "object" ? null : (t = V && t[V] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var yt = Symbol.for("react.client.reference");
  function St(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === yt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _t:
        return "Fragment";
      case Ct:
        return "Profiler";
      case Mt:
        return "StrictMode";
      case x:
        return "Suspense";
      case G:
        return "SuspenseList";
      case Y:
        return "Activity";
      case v:
        return "ViewTransition";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case xt:
        return "Portal";
      case H:
        return t.displayName || "Context";
      case Wt:
        return (t._context.displayName || "Context") + ".Consumer";
      case at:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case R:
        return e = t.displayName || null, e !== null ? e : St(t.type) || "Memo";
      case P:
        e = t._payload, t = t._init;
        try {
          return St(t(e));
        } catch {
        }
    }
    return null;
  }
  var Dt = Array.isArray, K = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, di = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, _a = [], De = -1;
  function le(t) {
    return { current: t };
  }
  function ge(t) {
    0 > De || (t.current = _a[De], _a[De] = null, De--);
  }
  function ae(t, e) {
    De++, _a[De] = t.current, t.current = e;
  }
  var mi = le(null), ya = le(null), Ui = le(null), jn = le(null);
  function El(t, e) {
    switch (ae(Ui, e), ae(ya, t), ae(mi, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? nm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = nm(e), t = lm(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    ge(mi), ae(mi, t);
  }
  function qa() {
    ge(mi), ge(ya), ge(Ui);
  }
  function kn(t) {
    var e = t.memoizedState;
    e !== null && (Mo._currentValue = e.memoizedState, ae(jn, t)), e = mi.current;
    var a = lm(e, t.type);
    e !== a && (ae(ya, t), ae(mi, a));
  }
  function Dn(t) {
    ya.current === t && (ge(mi), ge(ya)), jn.current === t && (ge(jn), Mo._currentValue = di);
  }
  var Cl, Ur;
  function qi(t) {
    if (Cl === void 0) try {
      throw Error();
    } catch (a) {
      var e = a.stack.trim().match(/\n( *(at )?)/);
      Cl = e && e[1] || "", Ur = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Cl + t + Ur;
  }
  var Ml = !1;
  function ko(t, e) {
    if (!t || Ml) return "";
    Ml = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var D = function() {
              throw Error();
            };
            if (Object.defineProperty(D.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(D, []);
              } catch (Q) {
                var w = Q;
              }
              Reflect.construct(t, [], D);
            } else {
              try {
                D.call();
              } catch (Q) {
                w = Q;
              }
              D = !1;
              try {
                var M = Object.getOwnPropertyDescriptor(t.prototype, "props");
                Object.defineProperty(t.prototype, "props", {
                  configurable: !0,
                  set: function() {
                    throw Error();
                  }
                }), D = !0, new t();
              } finally {
                D && (M !== void 0 ? Object.defineProperty(t.prototype, "props", M) : delete t.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (Q) {
              w = Q;
            }
            (D = t()) && typeof D.catch == "function" && D.catch(function() {
            });
          }
        } catch (Q) {
          if (Q && w && typeof Q.stack == "string") return [Q.stack, w.stack];
        }
        return [null, null];
      } };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
      o && o.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var r = n.DetermineComponentFrameRoot(), c = r[0], h = r[1];
      if (c && h) {
        var p = c.split(`
`), T = h.split(`
`);
        for (o = n = 0; n < p.length && !p[n].includes("DetermineComponentFrameRoot"); ) n++;
        for (; o < T.length && !T[o].includes("DetermineComponentFrameRoot"); ) o++;
        if (n === p.length || o === T.length) for (n = p.length - 1, o = T.length - 1; 1 <= n && 0 <= o && p[n] !== T[o]; ) o--;
        for (; 1 <= n && 0 <= o; n--, o--) if (p[n] !== T[o]) {
          if (n !== 1 || o !== 1) do
            if (n--, o--, 0 > o || p[n] !== T[o]) {
              var A = `
` + p[n].replace(" at new ", " at ");
              return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
            }
          while (1 <= n && 0 <= o);
          break;
        }
      }
    } finally {
      Ml = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? qi(a) : "";
  }
  function qr(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return qi(t.type);
      case 16:
        return qi("Lazy");
      case 13:
        return t.child !== e && e !== null ? qi("Suspense Fallback") : qi("Suspense");
      case 19:
        return qi("SuspenseList");
      case 0:
      case 15:
        return ko(t.type, !1);
      case 11:
        return ko(t.type.render, !1);
      case 1:
        return ko(t.type, !0);
      case 31:
        return qi("Activity");
      case 30:
        return qi("ViewTransition");
      default:
        return "";
    }
  }
  function Al(t) {
    try {
      var e = "", a = null;
      do
        e += qr(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Ol = Object.prototype.hasOwnProperty, Do = B.unstable_scheduleCallback, ba = B.unstable_cancelCallback, yu = B.unstable_shouldYield, bu = B.unstable_requestPaint, Ye = B.unstable_now, Yr = B.unstable_getCurrentPriorityLevel, Ro = B.unstable_ImmediatePriority, Gr = B.unstable_UserBlockingPriority, Ll = B.unstable_NormalPriority, xu = B.unstable_LowPriority, Pr = B.unstable_IdlePriority, wu = B.log, Su = B.unstable_setDisableYieldValue, xa = null, Ve = null;
  function ea(t) {
    if (typeof wu == "function" && Su(t), Ve && typeof Ve.setStrictMode == "function") try {
      Ve.setStrictMode(xa, t);
    } catch {
    }
  }
  var Xe = Math.clz32 ? Math.clz32 : ut, Tu = Math.log, Mi = Math.LN2;
  function ut(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Tu(t) / Mi | 0) | 0;
  }
  var Rn = 256, Bn = 262144, Zn = 4194304;
  function ia(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ya(t, e, a) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var o = 0, r = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var h = n & 134217727;
    return h !== 0 ? (n = h & ~r, n !== 0 ? o = ia(n) : (c &= h, c !== 0 ? o = ia(c) : a || (a = h & ~t, a !== 0 && (o = ia(a))))) : (h = n & ~r, h !== 0 ? o = ia(h) : c !== 0 ? o = ia(c) : a || (a = n & ~t, a !== 0 && (o = ia(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & r) === 0 && (r = o & -o, a = e & -e, r >= a || r === 32 && (a & 4194048) !== 0) ? e : o;
  }
  function Ga(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function wa(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
      var n = 31 - Xe(a), o = 1 << n;
      e |= t[n], a &= ~o;
    }
    return e;
  }
  function Vr(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xr() {
    var t = Zn;
    return Zn <<= 1, (Zn & 62914560) === 0 && (Zn = 4194304), t;
  }
  function Bo(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function jl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function zu(t, e, a, n, o, r) {
    var c = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var h = t.entanglements, p = t.expirationTimes, T = t.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var A = 31 - Xe(a), D = 1 << A;
      h[A] = 0, p[A] = -1;
      var w = T[A];
      if (w !== null) for (T[A] = null, A = 0; A < w.length; A++) {
        var M = w[A];
        M !== null && (M.lane &= -536870913);
      }
      a &= ~D;
    }
    n !== 0 && Zo(t, n, 0), r !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(c & ~e));
  }
  function Zo(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - Xe(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | a & 261930;
  }
  function Qr(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var n = 31 - Xe(a), o = 1 << n;
      o & e | t[n] & e && (t[n] |= e), a &= ~o;
    }
  }
  function Hn(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : Kr(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function Kr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ho(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jr() {
    var t = ht.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qm(t.type));
  }
  function Fr(t, e) {
    var a = ht.p;
    try {
      return ht.p = t, e();
    } finally {
      ht.p = a;
    }
  }
  var Yi = Math.random().toString(36).slice(2), be = "__reactFiber$" + Yi, we = "__reactProps$" + Yi, Pa = "__reactContainer$" + Yi, Uo = "__reactEvents$" + Yi, Un = "__reactListeners$" + Yi, Pt = "__reactHandles$" + Yi, ue = "__reactResources$" + Yi, aa = "__reactMarker$" + Yi, Gi = "__reactLoad$" + Yi;
  function Pi(t) {
    delete t[be], delete t[we], delete t[Un], delete t[Pt];
  }
  function Vi(t) {
    var e;
    if (e = t[be]) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Pa] || a[be]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null) for (t = Sm(t); t !== null; ) {
          if (a = t[be]) return a;
          t = Sm(t);
        }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function zt(t) {
    if (t = t[be] || t[Pa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function oe(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(_(33));
  }
  function na(t) {
    var e = t[ue];
    return e || (e = t[ue] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function me(t) {
    t[aa] = !0;
  }
  function Qe(t) {
    t[Gi] = void 0;
  }
  var Ir = /* @__PURE__ */ new Set(), qn = {};
  function Ke(t, e) {
    re(t, e), re(t + "Capture", e);
  }
  function re(t, e) {
    for (qn[t] = e, t = 0; t < e.length; t++) Ir.add(e[t]);
  }
  var Sa = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Va = {}, Xa = {};
  function qo(t) {
    return Ol.call(Xa, t) ? !0 : Ol.call(Va, t) ? !1 : Sa.test(t) ? Xa[t] = !0 : (Va[t] = !0, !1);
  }
  var Zt = !1;
  function kl() {
    var t = Zt;
    return Zt = !1, t;
  }
  function Qa(t, e, a) {
    if (qo(e)) if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var n = e.toLowerCase().slice(0, 5);
          if (n !== "data-" && n !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, a);
    }
  }
  function Ta(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, a);
    }
  }
  function vi(t, e, a, n) {
    if (n === null) t.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, n);
    }
  }
  function Re(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Yn(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Wr(t, e, a) {
    var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, r = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(c) {
          a = "" + c, r.call(this, c);
        }
      }), Object.defineProperty(t, e, { enumerable: n.enumerable }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Gn(t) {
    if (!t._valueTracker) {
      var e = Yn(t) ? "checked" : "value";
      t._valueTracker = Wr(t, e, "" + t[e]);
    }
  }
  function $r(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), n = "";
    return t && (n = Yn(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== a ? (e.setValue(t), !0) : !1;
  }
  var Nt = /[\n"\\]/g;
  function ve(t) {
    return t.replace(Nt, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jt(t, e, a, n, o, r, c, h) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Re(e)) : t.value !== "" + Re(e) && (t.value = "" + Re(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? c === "number" && t.value == e ? Pn(t, Re(t.value)) : Pn(t, Re(e)) : a != null ? Pn(t, Re(a)) : n != null && t.removeAttribute("value"), o == null && r != null && (t.defaultChecked = !!r), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Re(h) : t.removeAttribute("name");
  }
  function Yo(t, e, a, n, o, r, c, h) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || a != null) {
      if (!(r !== "submit" && r !== "reset" || e != null)) {
        Gn(t);
        return;
      }
      a = a != null ? "" + Re(a) : "", e = e != null ? "" + Re(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? o, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = h ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Gn(t);
  }
  function Pn(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function la(t, e, a, n) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < a.length; o++) e["$" + a[o]] = !0;
      for (a = 0; a < t.length; a++) o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && n && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Re(a), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === a) {
          t[o].selected = !0, n && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Dl(t, e, a) {
    if (e != null && (e = "" + Re(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Re(a) : "";
  }
  function oa(t, e, a, n) {
    if (e == null) {
      if (n != null) {
        if (a != null) throw Error(_(92));
        if (Dt(n)) {
          if (1 < n.length) throw Error(_(93));
          n = n[0];
        }
        a = n;
      }
      a ??= "", e = a;
    }
    a = Re(e), t.defaultValue = a, n = t.textContent, n === a && n !== "" && n !== null && (t.value = n), Gn(t);
  }
  function ra(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Vn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Se(t, e, a) {
    var n = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Vn.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function sa(t, e, a) {
    if (e != null && typeof e != "object") throw Error(_(62));
    if (t = t.style, a != null) {
      for (var n in a) !a.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "", Zt = !0);
      for (var o in e) n = e[o], e.hasOwnProperty(o) && a[o] !== n && (Se(t, o, n), Zt = !0);
    } else for (var r in e) e.hasOwnProperty(r) && Se(t, r, e[r]);
  }
  function Rl(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var ts = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Nu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xn(t) {
    return Nu.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ii() {
  }
  var Go = null;
  function Bl(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var jt = null, Ka = null;
  function ai(t) {
    var e = zt(t);
    if (e && (t = e.stateNode)) {
      var a = t[we] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Jt(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + ve("" + e) + '"][type="radio"]'), e = 0; e < a.length; e++) {
              var n = a[e];
              if (n !== t && n.form === t.form) {
                var o = n[we] || null;
                if (!o) throw Error(_(90));
                Jt(n, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (e = 0; e < a.length; e++) n = a[e], n.form === t.form && $r(n);
          }
          break t;
        case "textarea":
          Dl(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && la(t, !!a.multiple, e, !1);
      }
    }
  }
  var za = !1;
  function Po(t, e, a) {
    if (za) return t(e, a);
    za = !0;
    try {
      return t(e);
    } finally {
      if (za = !1, (jt !== null || Ka !== null) && (eu(), jt && (e = jt, t = Ka, Ka = jt = null, ai(e), t)))
        for (e = 0; e < t.length; e++) ai(t[e]);
    }
  }
  function Qn(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var n = a[we] || null;
    if (n === null) return null;
    a = n[e];
    t: switch (e) {
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
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(_(231, e, typeof a));
    return a;
  }
  var pi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vo = !1;
  if (pi) try {
    var Ja = {};
    Object.defineProperty(Ja, "passive", { get: function() {
      Vo = !0;
    } }), window.addEventListener("test", Ja, Ja), window.removeEventListener("test", Ja, Ja);
  } catch {
    Vo = !1;
  }
  var ua = null, Kn = null, Zl = null;
  function gi() {
    if (Zl) return Zl;
    var t, e = Kn, a = e.length, n, o = "value" in ua ? ua.value : ua.textContent, r = o.length;
    for (t = 0; t < a && e[t] === o[t]; t++) ;
    var c = a - t;
    for (n = 1; n <= c && e[a - n] === o[r - n]; n++) ;
    return Zl = o.slice(t, 1 < n ? 1 - n : void 0);
  }
  function Hl(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Jn() {
    return !0;
  }
  function Xi() {
    return !1;
  }
  function Me(t) {
    function e(a, n, o, r, c) {
      this._reactName = a, this._targetInst = o, this.type = n, this.nativeEvent = r, this.target = c, this.currentTarget = null;
      for (var h in t) t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(r) : r[h]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Jn : Xi, this.isPropagationStopped = Xi, this;
    }
    return wt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Jn);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Jn);
      },
      persist: function() {
      },
      isPersistent: Jn
    }), e;
  }
  var Qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fa = Me(Qi), Fn = wt({}, Qi, {
    view: 0,
    detail: 0
  }), es = Me(Fn), Ul, Xo, In, Ia = wt({}, Fn, {
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
    getModifierState: Qo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== In && (In && t.type === "mousemove" ? (Ul = t.screenX - In.screenX, Xo = t.screenY - In.screenY) : Xo = Ul = 0, In = t), Ul);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Xo;
    }
  }), is = Me(Ia), as = Me(wt({}, Ia, { dataTransfer: 0 })), ql = Me(wt({}, Fn, { relatedTarget: 0 })), Yl = Me(wt({}, Qi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Na = Me(wt({}, Qi, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } })), ns = Me(wt({}, Qi, { data: 0 })), Wn = {
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
  }, ni = {
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
  }, ls = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function os(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ls[t]) ? !!e[t] : !1;
  }
  function Qo() {
    return os;
  }
  var Ko = Me(wt({}, Fn, {
    key: function(t) {
      if (t.key) {
        var e = Wn[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Hl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ni[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qo,
    charCode: function(t) {
      return t.type === "keypress" ? Hl(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Hl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  })), Gl = Me(wt({}, Ia, {
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
  })), Eu = Me(wt({}, Qi, { submitter: 0 })), Cu = Me(wt({}, Fn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qo
  })), rs = Me(wt({}, Qi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Mu = Me(wt({}, Ia, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), _i = Me(wt({}, Qi, {
    newState: 0,
    oldState: 0,
    source: 0
  })), Wa = [
    9,
    13,
    27,
    32
  ], Jo = pi && "CompositionEvent" in window, Je = null;
  pi && "documentMode" in document && (Je = document.documentMode);
  var Au = pi && "TextEvent" in window && !Je, Ea = pi && (!Jo || Je && 8 < Je && 11 >= Je), ss = " ", $a = !1;
  function Fo(t, e) {
    switch (t) {
      case "keyup":
        return Wa.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $n(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var tn = !1;
  function ca(t, e) {
    switch (t) {
      case "compositionend":
        return $n(e);
      case "keypress":
        return e.which !== 32 ? null : ($a = !0, ss);
      case "textInput":
        return t = e.data, t === ss && $a ? null : t;
      default:
        return null;
    }
  }
  function Pl(t, e) {
    if (tn) return t === "compositionend" || !Jo && Fo(t, e) ? (t = gi(), Zl = Kn = ua = null, tn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ea && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ou = {
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
  function Vl(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ou[t.type] : e === "textarea";
  }
  function us(t, e, a, n) {
    jt ? Ka ? Ka.push(n) : Ka = [n] : jt = n, e = ru(e, "onChange"), 0 < e.length && (a = new Fa("onChange", "change", null, a, n), t.push({
      event: a,
      listeners: e
    }));
  }
  var Fe = null, tl = null;
  function en(t) {
    Id(t, 0);
  }
  function Xl(t) {
    if ($r(oe(t))) return t;
  }
  function Ai(t, e) {
    if (t === "change") return e;
  }
  var el = !1;
  if (pi) {
    var Ql;
    if (pi) {
      var il = "oninput" in document;
      if (!il) {
        var al = document.createElement("div");
        al.setAttribute("oninput", "return;"), il = typeof al.oninput == "function";
      }
      Ql = il;
    } else Ql = !1;
    el = Ql && (!document.documentMode || 9 < document.documentMode);
  }
  function Kl() {
    Fe && (Fe.detachEvent("onpropertychange", nl), tl = Fe = null);
  }
  function nl(t) {
    if (t.propertyName === "value" && Xl(tl)) {
      var e = [];
      us(e, tl, t, Bl(t)), Po(en, e);
    }
  }
  function an(t, e, a) {
    t === "focusin" ? (Kl(), Fe = e, tl = a, Fe.attachEvent("onpropertychange", nl)) : t === "focusout" && Kl();
  }
  function Jl(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Xl(tl);
  }
  function Io(t, e) {
    if (t === "click") return Xl(e);
  }
  function cs(t, e) {
    if (t === "input" || t === "change") return Xl(e);
  }
  function Lu(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ae = typeof Object.is == "function" ? Object.is : Lu;
  function ll(t, e) {
    if (Ae(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var a = Object.keys(t), n = Object.keys(e);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var o = a[n];
      if (!Ol.call(e, o) || !Ae(t[o], e[o])) return !1;
    }
    return !0;
  }
  function Fl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function fs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Wo(t, e) {
    var a = fs(t);
    t = 0;
    for (var n; a; ) {
      if (a.nodeType === 3) {
        if (n = t + a.textContent.length, t <= e && n >= e) return {
          node: a,
          offset: e - t
        };
        t = n;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = fs(a);
    }
  }
  function hs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? hs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function yi(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Fl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Fl(t.document);
    }
    return e;
  }
  function nn(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ju = pi && "documentMode" in document && 11 >= document.documentMode, Ki = null, $o = null, ln = null, tr = !1;
  function on(t, e, a) {
    var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    tr || Ki == null || Ki !== Fl(n) || (n = Ki, "selectionStart" in n && nn(n) ? n = {
      start: n.selectionStart,
      end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ln && ll(ln, n) || (ln = n, n = ru($o, "onSelect"), 0 < n.length && (e = new Fa("onSelect", "select", null, e, a), t.push({
      event: e,
      listeners: n
    }), e.target = Ki)));
  }
  function Ca(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var bi = {
    animationend: Ca("Animation", "AnimationEnd"),
    animationiteration: Ca("Animation", "AnimationIteration"),
    animationstart: Ca("Animation", "AnimationStart"),
    transitionrun: Ca("Transition", "TransitionRun"),
    transitionstart: Ca("Transition", "TransitionStart"),
    transitioncancel: Ca("Transition", "TransitionCancel"),
    transitionend: Ca("Transition", "TransitionEnd")
  }, Il = {}, er = {};
  pi && (er = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);
  function Ma(t) {
    if (Il[t]) return Il[t];
    if (!bi[t]) return t;
    var e = bi[t], a;
    for (a in e) if (e.hasOwnProperty(a) && a in er) return Il[t] = e[a];
    return t;
  }
  var Oi = Ma("animationend"), ir = Ma("animationiteration"), ar = Ma("animationstart"), ol = Ma("transitionrun"), ku = Ma("transitionstart"), Wl = Ma("transitioncancel"), rn = Ma("transitionend"), nr = /* @__PURE__ */ new Map(), $l = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  $l.push("scrollEnd");
  function xi(t, e) {
    nr.set(t, e), Ke(e, [t]);
  }
  var ds = 0;
  function Li(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = Wi.identifierPrefix;
    var a = ds++;
    return t = "_" + t + "t_" + a.toString(32) + "_", e.autoName = t;
  }
  function lr(t) {
    if (t == null || typeof t == "string") return t;
    var e = null, a = yo;
    if (a !== null) for (var n = 0; n < a.length; n++) {
      var o = t[a[n]];
      if (o != null) {
        if (o === "none") return "none";
        e = e == null ? o : e + (" " + o);
      }
    }
    return e ?? t.default;
  }
  function ji(t, e) {
    return t = lr(t), e = lr(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var rl = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, li = [], Aa = 0, to = 0;
  function eo() {
    for (var t = Aa, e = to = Aa = 0; e < t; ) {
      var a = li[e];
      li[e++] = null;
      var n = li[e];
      li[e++] = null;
      var o = li[e];
      li[e++] = null;
      var r = li[e];
      if (li[e++] = null, n !== null && o !== null) {
        var c = n.pending;
        c === null ? o.next = o : (o.next = c.next, c.next = o), n.pending = o;
      }
      r !== 0 && u(a, o, r);
    }
  }
  function i(t, e, a, n) {
    li[Aa++] = t, li[Aa++] = e, li[Aa++] = a, li[Aa++] = n, to |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function l(t, e, a, n) {
    return i(t, e, a, n), f(t);
  }
  function s(t, e) {
    return i(t, null, null, e), f(t);
  }
  function u(t, e, a) {
    t.lanes |= a;
    var n = t.alternate;
    n !== null && (n.lanes |= a);
    for (var o = !1, r = t.return; r !== null; ) r.childLanes |= a, n = r.alternate, n !== null && (n.childLanes |= a), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (o = !0)), t = r, r = r.return;
    return t.tag === 3 ? (r = t.stateNode, o && e !== null && (o = 31 - Xe(a), t = r.hiddenUpdates, n = t[o], n === null ? t[o] = [e] : n.push(e), e.lane = a | 536870912), r) : null;
  }
  function f(t) {
    if (50 < Er) throw Er = 0, tu = null, Error(_(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var d = {};
  function g(t, e, a, n) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function z(t, e, a, n) {
    return new g(t, e, a, n);
  }
  function j(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Z(t, e) {
    var a = t.alternate;
    return a === null ? (a = z(t.tag, e, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 1206910976, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function W(t, e) {
    t.flags &= 1206910978;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function dt(t, e, a, n, o, r) {
    var c = 0;
    if (n = t, typeof n == "function") j(n) && (c = 1);
    else if (typeof n == "string") c = Lv(t, a, mi.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (n) {
      case Y:
        return t = z(31, a, e, o), t.elementType = Y, t.lanes = r, t;
      case _t:
        return Tt(a.children, o, r, e);
      case Mt:
        c = 8, o |= 24;
        break;
      case Ct:
        return t = z(12, a, e, o | 2), t.elementType = Ct, t.lanes = r, t;
      case x:
        return t = z(13, a, e, o), t.elementType = x, t.lanes = r, t;
      case G:
        return t = z(19, a, e, o), t.elementType = G, t.lanes = r, t;
      case rt:
      case v:
        return t = o | 32, t = z(30, a, e, t), t.elementType = v, t.lanes = r, t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }, t;
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case H:
            c = 10;
            break t;
          case Wt:
            c = 9;
            break t;
          case at:
            c = 11;
            break t;
          case R:
            c = 14;
            break t;
          case P:
            c = 16, n = null;
            break t;
        }
        c = 29, a = Error(_(130, t === null ? "null" : typeof t, "")), n = null;
    }
    return e = z(c, a, e, o), e.elementType = t, e.type = n, e.lanes = r, e;
  }
  function Tt(t, e, a, n) {
    return t = z(7, t, n, e), t.lanes = a, t;
  }
  function he(t, e, a) {
    return t = z(6, t, null, e), t.lanes = a, t;
  }
  function Oe(t) {
    var e = z(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function oi(t, e, a) {
    return e = z(4, t.children !== null ? t.children : [], t.key, e), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var ri = /* @__PURE__ */ new WeakMap();
  function Ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = ri.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Al(e)
      }, ri.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Al(e)
    };
  }
  var sn = [], un = 0, io = null, cn = 0, si = [], Ie = 0, $t = null, We = 1, ki = "";
  function wi(t, e) {
    sn[un++] = cn, sn[un++] = io, io = t, cn = e;
  }
  function or(t, e, a) {
    si[Ie++] = We, si[Ie++] = ki, si[Ie++] = $t, $t = t;
    var n = We;
    t = ki;
    var o = 32 - Xe(n) - 1;
    n &= ~(1 << o), a += 1;
    var r = 32 - Xe(e) + o;
    if (30 < r) {
      var c = o - o % 5;
      r = (n & (1 << c) - 1).toString(32), n >>= c, o -= c, We = 1 << 32 - Xe(e) + o | a << o | n, ki = r + t;
    } else We = 1 << r | a << o | n, ki = t;
  }
  function ms(t) {
    t.return !== null && (wi(t, 1), or(t, 1, 0));
  }
  function Du(t) {
    for (; t === io; ) io = sn[--un], sn[un] = null, cn = sn[--un], sn[un] = null;
    for (; t === $t; ) $t = si[--Ie], si[Ie] = null, ki = si[--Ie], si[Ie] = null, We = si[--Ie], si[Ie] = null;
  }
  function Rf(t, e) {
    si[Ie++] = We, si[Ie++] = ki, si[Ie++] = $t, We = e.id, ki = e.overflow, $t = t;
  }
  var Le = null, ce = null, Bt = !1, fn = null, Di = !1, Ru = Error(_(519));
  function hn(t) {
    throw rr(Ge(Error(_(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), Ru;
  }
  function Bf(t) {
    var e = t.stateNode, a = t.type, n = t.memoizedProps;
    switch (e[be] = t, e[we] = n, a) {
      case "dialog":
        Ut("cancel", e), Ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ut("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mr.length; a++) Ut(Mr[a], e);
        break;
      case "source":
        Ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Ut("error", e), Ut("load", e);
        break;
      case "details":
        Ut("toggle", e);
        break;
      case "input":
        Ut("invalid", e), Yo(e, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0);
        break;
      case "select":
        Ut("invalid", e);
        break;
      case "textarea":
        Ut("invalid", e), oa(e, n.value, n.defaultValue, n.children);
    }
    a = n.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || n.suppressHydrationWarning === !0 || im(e.textContent, a) ? (n.popover != null && (Ut("beforetoggle", e), Ut("toggle", e)), n.onScroll != null && Ut("scroll", e), n.onScrollEnd != null && Ut("scrollend", e), n.onClick != null && (e.onclick = ii), e = !0) : e = !1, e || hn(t, !0);
  }
  function vs(t) {
    for (Le = t.return; Le; ) switch (Le.tag) {
      case 5:
      case 31:
      case 13:
        Di = !1;
        return;
      case 27:
      case 3:
        Di = !0;
        return;
      default:
        Le = Le.return;
    }
  }
  function ao(t) {
    if (t !== Le) return !1;
    if (!Bt) return vs(t), Bt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || hf(t.type, t.memoizedProps)), a = !a), a && ce && hn(t), vs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(_(317));
      ce = wm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(_(317));
      ce = wm(t);
    } else e === 27 ? (e = ce, Nn(t.type) ? (t = xf, xf = null, ce = t) : ce = e) : ce = Le ? Zi(t.stateNode.nextSibling) : null;
    return !0;
  }
  function sl() {
    ce = Le = null, Bt = !1;
  }
  function Bu() {
    var t = fn;
    return t !== null && (fi === null ? fi = t : fi.push.apply(fi, t), fn = null), t;
  }
  function rr(t) {
    fn === null ? fn = [t] : fn.push(t);
  }
  var Zu = le(null), ul = null, Oa = null;
  function dn(t, e, a) {
    ae(Zu, e._currentValue), e._currentValue = a;
  }
  function La(t) {
    t._currentValue = Zu.current, ge(Zu);
  }
  function ps(t, e, a) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Hu(t, e, a, n) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var r = o.dependencies;
      if (r !== null) {
        var c = o.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var h = r;
          r = o;
          for (var p = 0; p < e.length; p++) if (h.context === e[p]) {
            r.lanes |= a, h = r.alternate, h !== null && (h.lanes |= a), ps(r.return, a, t), n || (c = null);
            break t;
          }
          r = h.next;
        }
      } else if (o.tag === 18) {
        if (c = o.return, c === null) throw Error(_(341));
        c.lanes |= a, r = c.alternate, r !== null && (r.lanes |= a), ps(c, a, t), c = null;
      } else o.tag === 13 && o.memoizedState !== null && o.memoizedState.dehydrated === null ? (o.lanes |= a, c = o.alternate, c !== null && (c.lanes |= a), ps(o.return, a, t), c = o.child, c = c !== null ? c.sibling : null) : c = o.child;
      if (c !== null) c.return = o;
      else for (c = o; c !== null; ) {
        if (c === t) {
          c = null;
          break;
        }
        if (o = c.sibling, o !== null) {
          o.return = c.return, c = o;
          break;
        }
        c = c.return;
      }
      o = c;
    }
  }
  function cl(t, e, a, n) {
    t = null;
    for (var o = e, r = !1; o !== null; ) {
      if (!r) {
        if ((o.flags & 524288) !== 0) r = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var c = o.alternate;
        if (c === null) throw Error(_(387));
        if (c = c.memoizedProps, c !== null) {
          var h = o.type;
          Ae(o.pendingProps.value, c.value) || (t !== null ? t.push(h) : t = [h]);
        }
      } else if (o === jn.current) {
        if (c = o.alternate, c === null) throw Error(_(387));
        c.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(Mo) : t = [Mo]);
      }
      o = o.return;
    }
    return t !== null && Hu(e, t, a, n), e.flags |= 262144, t !== null;
  }
  function gs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function fl(t) {
    ul = t, Oa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Be(t) {
    return Zf(ul, t);
  }
  function _s(t, e) {
    return ul === null && fl(t), Zf(t, e);
  }
  function Zf(t, e) {
    var a = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: a,
      next: null
    }, Oa === null) {
      if (t === null) throw Error(_(308));
      Oa = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else Oa = Oa.next = e;
    return a;
  }
  var n0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, l0 = B.unstable_scheduleCallback, o0 = B.unstable_NormalPriority, Te = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Uu() {
    return {
      controller: new n0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function sr(t) {
    t.refCount--, t.refCount === 0 && l0(o0, function() {
      t.controller.abort();
    });
  }
  function Hf(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var a = t.transitionTypes;
      for (a === null && (a = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var n = e[t];
        a.indexOf(n) === -1 && a.push(n);
      }
    }
  }
  var ur = null;
  function r0(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var cr = null, qu = 0, hl = 0, no = null;
  function s0(t, e) {
    if (cr === null) {
      var a = cr = [];
      qu = 0, hl = nf(), no = {
        status: "pending",
        value: void 0,
        then: function(n) {
          a.push(n);
        }
      };
    }
    return qu++, e.then(Uf, Uf), e;
  }
  function Uf() {
    if (--qu === 0 && (ur = null, cr !== null)) {
      no !== null && (no.status = "fulfilled");
      var t = cr;
      cr = null, hl = 0, no = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function u0(t, e) {
    var a = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        a.push(o);
      }
    };
    return t.then(function() {
      n.status = "fulfilled", n.value = e;
      for (var o = 0; o < a.length; o++) (0, a[o])(e);
    }, function(o) {
      for (n.status = "rejected", n.reason = o, o = 0; o < a.length; o++) (0, a[o])(void 0);
    }), n;
  }
  var qf = K.S;
  K.S = function(t, e) {
    if (Ad = Ye(), typeof e == "object" && e !== null && typeof e.then == "function" && s0(t, e), ur !== null) for (var a = So; a !== null; ) Hf(a, ur), a = a.next;
    if (a = t.types, a !== null) {
      for (var n = So; n !== null; ) Hf(n, a), n = n.next;
      if (hl !== 0) {
        n = ur, n === null && (n = ur = []);
        for (var o = 0; o < a.length; o++) {
          var r = a[o];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    qf !== null && qf(t, e);
  };
  var dl = le(null);
  function Yu() {
    var t = dl.current;
    return t !== null ? t : se.pooledCache;
  }
  function ys(t, e) {
    e === null ? ae(dl, dl.current) : ae(dl, e.pool);
  }
  function Yf() {
    var t = Yu();
    return t === null ? null : {
      parent: Te._currentValue,
      pool: t
    };
  }
  var lo = Error(_(460)), Gu = Error(_(474)), bs = Error(_(542)), xs = { then: function() {
  } };
  function Gf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Pf(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(ii, ii), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Xf(t), t === void 0 && !("reason" in e) ? Error(_(600)) : t;
      default:
        if (typeof e.status == "string") e.then(ii, ii);
        else {
          if (t = se, t !== null && 100 < t.shellSuspendCounter) throw Error(_(482));
          t = e, t.status = "pending", t.then(function(n) {
            if (e.status === "pending") {
              var o = e;
              o.status = "fulfilled", o.value = n;
            }
          }, function(n) {
            if (e.status === "pending") {
              var o = e;
              o.status = "rejected", o.reason = n;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Xf(t), t;
        }
        throw vl = e, lo;
    }
  }
  function ml(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (vl = a, lo) : a;
    }
  }
  var vl = null;
  function Vf() {
    if (vl === null) throw Error(_(459));
    var t = vl;
    return vl = null, t;
  }
  function Xf(t) {
    if (t === lo || t === bs) throw Error(_(483));
  }
  var oo = null, fr = 0;
  function ws(t) {
    var e = fr;
    return fr += 1, oo === null && (oo = []), Pf(oo, t, e);
  }
  function mn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ss(t, e) {
    throw e.$$typeof === vt ? Error(_(525)) : (t = Object.prototype.toString.call(e), Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Qf(t) {
    function e(S, y) {
      if (t) {
        var E = S.deletions;
        E === null ? (S.deletions = [y], S.flags |= 16) : E.push(y);
      }
    }
    function a(S, y) {
      if (!t) return null;
      for (; y !== null; ) e(S, y), y = y.sibling;
      return null;
    }
    function n(S) {
      for (var y = /* @__PURE__ */ new Map(); S !== null; ) S.key === null ? y.set(S.index, S) : y.set(S.key, S), S = S.sibling;
      return y;
    }
    function o(S, y) {
      return S = Z(S, y), S.index = 0, S.sibling = null, S;
    }
    function r(S, y, E) {
      return S.index = E, t ? (E = S.alternate, E !== null ? (E = E.index, E < y ? (S.flags |= 2, y) : E) : (S.flags |= 134217730, y)) : (S.flags |= 1048576, y);
    }
    function c(S) {
      return t && S.alternate === null && (S.flags |= 134217730), S;
    }
    function h(S, y, E, k) {
      return y === null || y.tag !== 6 ? (y = he(E, S.mode, k), y.return = S, y) : (y = o(y, E), y.return = S, y);
    }
    function p(S, y, E, k) {
      var et = E.type;
      return et === _t ? (S = A(S, y, E.props.children, k, E.key), mn(S, E), S) : y !== null && (y.elementType === et || typeof et == "object" && et !== null && et.$$typeof === P && ml(et) === y.type) ? (y = o(y, E.props), mn(y, E), y.return = S, y) : (y = dt(E.type, E.key, E.props, null, S.mode, k), mn(y, E), y.return = S, y);
    }
    function T(S, y, E, k) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== E.containerInfo || y.stateNode.implementation !== E.implementation ? (y = oi(E, S.mode, k), y.return = S, y) : (y = o(y, E.children || []), y.return = S, y);
    }
    function A(S, y, E, k, et) {
      return y === null || y.tag !== 7 ? (y = Tt(E, S.mode, k, et), y.return = S, y) : (y = o(y, E), y.return = S, y);
    }
    function D(S, y, E) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = he("" + y, S.mode, E), y.return = S, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Rt:
            return E = dt(y.type, y.key, y.props, null, S.mode, E), mn(E, y), E.return = S, E;
          case xt:
            return y = oi(y, S.mode, E), y.return = S, y;
          case P:
            return y = ml(y), D(S, y, E);
        }
        if (Dt(y) || I(y)) return y = Tt(y, S.mode, E, null), y.return = S, y;
        if (typeof y.then == "function") return D(S, ws(y), E);
        if (y.$$typeof === H) return D(S, _s(S, y), E);
        Ss(S, y);
      }
      return null;
    }
    function w(S, y, E, k) {
      var et = y !== null ? y.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return et !== null ? null : h(S, y, "" + E, k);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Rt:
            return E.key === et ? p(S, y, E, k) : null;
          case xt:
            return E.key === et ? T(S, y, E, k) : null;
          case P:
            return E = ml(E), w(S, y, E, k);
        }
        if (Dt(E) || I(E)) return et !== null ? null : A(S, y, E, k, null);
        if (typeof E.then == "function") return w(S, y, ws(E), k);
        if (E.$$typeof === H) return w(S, y, _s(S, E), k);
        Ss(S, E);
      }
      return null;
    }
    function M(S, y, E, k, et) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return S = S.get(E) || null, h(y, S, "" + k, et);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Rt:
            return S = S.get(k.key === null ? E : k.key) || null, p(y, S, k, et);
          case xt:
            return S = S.get(k.key === null ? E : k.key) || null, T(y, S, k, et);
          case P:
            return k = ml(k), M(S, y, E, k, et);
        }
        if (Dt(k) || I(k)) return S = S.get(E) || null, A(y, S, k, et, null);
        if (typeof k.then == "function") return M(S, y, E, ws(k), et);
        if (k.$$typeof === H) return M(S, y, E, _s(y, k), et);
        Ss(y, k);
      }
      return null;
    }
    function Q(S, y, E, k) {
      for (var et = null, Gt = null, ct = y, bt = y = 0, Ee = null; ct !== null && bt < E.length; bt++) {
        ct.index > bt ? (Ee = ct, ct = null) : Ee = ct.sibling;
        var Vt = w(S, ct, E[bt], k);
        if (Vt === null) {
          ct === null && (ct = Ee);
          break;
        }
        t && ct && Vt.alternate === null && e(S, ct), y = r(Vt, y, bt), Gt === null ? et = Vt : Gt.sibling = Vt, Gt = Vt, ct = Ee;
      }
      if (bt === E.length) return a(S, ct), Bt && wi(S, bt), et;
      if (ct === null) {
        for (; bt < E.length; bt++) ct = D(S, E[bt], k), ct !== null && (y = r(ct, y, bt), Gt === null ? et = ct : Gt.sibling = ct, Gt = ct);
        return Bt && wi(S, bt), et;
      }
      for (ct = n(ct); bt < E.length; bt++) Ee = M(ct, S, bt, E[bt], k), Ee !== null && (t && (Vt = Ee.alternate, Vt !== null && ct.delete(Vt.key === null ? bt : Vt.key)), y = r(Ee, y, bt), Gt === null ? et = Ee : Gt.sibling = Ee, Gt = Ee);
      return t && ct.forEach(function(On) {
        return e(S, On);
      }), Bt && wi(S, bt), et;
    }
    function nt(S, y, E, k) {
      if (E == null) throw Error(_(151));
      for (var et = null, Gt = null, ct = y, bt = y = 0, Ee = null, Vt = E.next(); ct !== null && !Vt.done; bt++, Vt = E.next()) {
        ct.index > bt ? (Ee = ct, ct = null) : Ee = ct.sibling;
        var On = w(S, ct, Vt.value, k);
        if (On === null) {
          ct === null && (ct = Ee);
          break;
        }
        t && ct && On.alternate === null && e(S, ct), y = r(On, y, bt), Gt === null ? et = On : Gt.sibling = On, Gt = On, ct = Ee;
      }
      if (Vt.done) return a(S, ct), Bt && wi(S, bt), et;
      if (ct === null) {
        for (; !Vt.done; bt++, Vt = E.next()) Vt = D(S, Vt.value, k), Vt !== null && (y = r(Vt, y, bt), Gt === null ? et = Vt : Gt.sibling = Vt, Gt = Vt);
        return Bt && wi(S, bt), et;
      }
      for (ct = n(ct); !Vt.done; bt++, Vt = E.next()) Vt = M(ct, S, bt, Vt.value, k), Vt !== null && (t && (Ee = Vt.alternate, Ee !== null && ct.delete(Ee.key === null ? bt : Ee.key)), y = r(Vt, y, bt), Gt === null ? et = Vt : Gt.sibling = Vt, Gt = Vt);
      return t && ct.forEach(function(Qv) {
        return e(S, Qv);
      }), Bt && wi(S, bt), et;
    }
    function Ot(S, y, E, k) {
      if (typeof E == "object" && E !== null && E.type === _t && E.key === null && E.props.ref === void 0 && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Rt:
            t: {
              for (var et = E.key; y !== null; ) {
                if (y.key === et) {
                  if (et = E.type, et === _t) {
                    if (y.tag === 7) {
                      a(S, y.sibling), k = o(y, E.props.children), mn(k, E), k.return = S, S = k;
                      break t;
                    }
                  } else if (y.elementType === et || typeof et == "object" && et !== null && et.$$typeof === P && ml(et) === y.type) {
                    a(S, y.sibling), k = o(y, E.props), mn(k, E), k.return = S, S = k;
                    break t;
                  }
                  a(S, y);
                  break;
                } else e(S, y);
                y = y.sibling;
              }
              E.type === _t ? (k = Tt(E.props.children, S.mode, k, E.key), mn(k, E), k.return = S, S = k) : (k = dt(E.type, E.key, E.props, null, S.mode, k), mn(k, E), k.return = S, S = k);
            }
            return c(S);
          case xt:
            t: {
              for (et = E.key; y !== null; ) {
                if (y.key === et) if (y.tag === 4 && y.stateNode.containerInfo === E.containerInfo && y.stateNode.implementation === E.implementation) {
                  a(S, y.sibling), k = o(y, E.children || []), k.return = S, S = k;
                  break t;
                } else {
                  a(S, y);
                  break;
                }
                else e(S, y);
                y = y.sibling;
              }
              k = oi(E, S.mode, k), k.return = S, S = k;
            }
            return c(S);
          case P:
            return E = ml(E), Ot(S, y, E, k);
        }
        if (Dt(E)) return Q(S, y, E, k);
        if (I(E)) {
          if (et = I(E), typeof et != "function") throw Error(_(150));
          return E = et.call(E), nt(S, y, E, k);
        }
        if (typeof E.then == "function") return Ot(S, y, ws(E), k);
        if (E.$$typeof === H) return Ot(S, y, _s(S, E), k);
        Ss(S, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, y !== null && y.tag === 6 ? (a(S, y.sibling), k = o(y, E), k.return = S, S = k) : (a(S, y), k = he(E, S.mode, k), k.return = S, S = k), c(S)) : a(S, y);
    }
    return function(S, y, E, k) {
      try {
        fr = 0;
        var et = Ot(S, y, E, k);
        return oo = null, et;
      } catch (ct) {
        if (ct === lo || ct === bs) throw ct;
        var Gt = z(29, ct, null, S.mode);
        return Gt.lanes = k, Gt.return = S, Gt;
      }
    };
  }
  var pl = Qf(!0), Kf = Qf(!1), vn = !1;
  function Pu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Vu(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function gl(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function _l(t, e, a) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Qt & 2) !== 0) {
      var o = n.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), n.pending = e, e = f(t), u(t, null, a), e;
    }
    return i(t, n, e, a), f(t);
  }
  function hr(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, a |= n, e.lanes = a, Qr(t, a);
    }
  }
  function Xu(t, e) {
    var a = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, a === n)) {
      var o = null, r = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          r === null ? o = r = c : r = r.next = c, a = a.next;
        } while (a !== null);
        r === null ? o = r = e : r = r.next = e;
      } else o = r = e;
      a = {
        baseState: n.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: r,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var Qu = !1;
  function dr() {
    if (Qu) {
      var t = no;
      if (t !== null) throw t;
    }
  }
  function mr(t, e, a, n) {
    Qu = !1;
    var o = t.updateQueue;
    vn = !1;
    var r = o.firstBaseUpdate, c = o.lastBaseUpdate, h = o.shared.pending;
    if (h !== null) {
      o.shared.pending = null;
      var p = h, T = p.next;
      p.next = null, c === null ? r = T : c.next = T, c = p;
      var A = t.alternate;
      A !== null && (A = A.updateQueue, h = A.lastBaseUpdate, h !== c && (h === null ? A.firstBaseUpdate = T : h.next = T, A.lastBaseUpdate = p));
    }
    if (r !== null) {
      var D = o.baseState;
      c = 0, A = T = p = null, h = r;
      do {
        var w = h.lane & -536870913, M = w !== h.lane;
        if (M ? (Yt & w) === w : (n & w) === w) {
          w !== 0 && w === hl && (Qu = !0), A !== null && (A = A.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = t, nt = h;
            w = e;
            var Ot = a;
            switch (nt.tag) {
              case 1:
                if (Q = nt.payload, typeof Q == "function") {
                  D = Q.call(Ot, D, w);
                  break t;
                }
                D = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = nt.payload, w = typeof Q == "function" ? Q.call(Ot, D, w) : Q, w == null) break t;
                D = wt({}, D, w);
                break t;
              case 2:
                vn = !0;
            }
          }
          w = h.callback, w !== null && (t.flags |= 64, M && (t.flags |= 8192), M = o.callbacks, M === null ? o.callbacks = [w] : M.push(w));
        } else M = {
          lane: w,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        }, A === null ? (T = A = M, p = D) : A = A.next = M, c |= w;
        if (h = h.next, h === null) {
          if (h = o.shared.pending, h === null) break;
          M = h, h = M.next, M.next = null, o.lastBaseUpdate = M, o.shared.pending = null;
        }
      } while (!0);
      A === null && (p = D), o.baseState = p, o.firstBaseUpdate = T, o.lastBaseUpdate = A, r === null && (o.shared.lanes = 0), wn |= c, t.lanes = c, t.memoizedState = D;
    }
  }
  function Jf(t, e) {
    if (typeof t != "function") throw Error(_(191, t));
    t.call(e);
  }
  function Ff(t, e) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) Jf(a[t], e);
  }
  var pn = le(null), Ts = le(0);
  function If(t, e) {
    t = Ba, ae(Ts, t), ae(pn, e), Ba = t | e.baseLanes;
  }
  function Ku() {
    ae(Ts, Ba), ae(pn, pn.current);
  }
  function Ju() {
    Ba = Ts.current, ge(pn), ge(Ts);
  }
  var Ze = le(null), Pe = null;
  function gn(t) {
    var e = t.alternate;
    ae(He, He.current & 1), ae(Ze, t), Pe === null && (e === null || pn.current !== null || e.memoizedState !== null) && (Pe = t);
  }
  function Fu(t) {
    ae(He, He.current), ae(Ze, t), Pe === null && (Pe = t);
  }
  function Wf(t) {
    t.tag === 22 ? (ae(He, He.current), ae(Ze, t), Pe === null && (Pe = t)) : _n();
  }
  function _n() {
    ae(He, He.current), ae(Ze, Ze.current);
  }
  function Si(t) {
    ge(Ze), Pe === t && (Pe = null), ge(He);
  }
  var He = le(0);
  function vr(t, e) {
    ae(Ze, Ze.current), ae(He, e);
  }
  function Iu(t) {
    ge(He), ge(Ze), Pe === t && (Pe = null);
  }
  function zs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || yf(a) || bf(a))) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var ja = 0, At = null, ne = null, ze = null, Ns = !1, ro = !1, yl = !1, Es = 0, pr = 0, so = null, c0 = 0;
  function _e() {
    throw Error(_(321));
  }
  function Wu(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++) if (!Ae(t[a], e[a])) return !1;
    return !0;
  }
  function $u(t, e, a, n, o, r) {
    return ja = r, At = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, K.H = t === null || t.memoizedState === null ? Dh : Rh, yl = !1, r = a(n, o), yl = !1, ro && (r = th(e, a, n, o)), $f(t), r;
  }
  function $f(t) {
    K.H = ks;
    var e = ne !== null && ne.next !== null;
    if (ja = 0, ze = ne = At = null, Ns = !1, pr = 0, so = null, e) throw Error(_(300));
    t === null || Ne || (t = t.dependencies, t !== null && gs(t) && (Ne = !0));
  }
  function th(t, e, a, n) {
    At = t;
    var o = 0;
    do {
      if (ro && (so = null), pr = 0, ro = !1, 25 <= o) throw Error(_(301));
      if (o += 1, ze = ne = null, t.updateQueue != null) {
        var r = t.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      K.H = _0, r = e(a, n);
    } while (ro);
    return r;
  }
  function f0() {
    var t = K.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? gr(e) : e, t = t.useState()[0], (ne !== null ? ne.memoizedState : null) !== t && (At.flags |= 1024), e;
  }
  function tc() {
    var t = Es !== 0;
    return Es = 0, t;
  }
  function ec(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function ic(t) {
    if (Ns) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ns = !1;
    }
    ja = 0, ze = ne = At = null, ro = !1, pr = Es = 0, so = null;
  }
  function $e() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ze === null ? At.memoizedState = ze = t : ze = ze.next = t, ze;
  }
  function xe() {
    if (ne === null) {
      var t = At.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ne.next;
    var e = ze === null ? At.memoizedState : ze.next;
    if (e !== null) ze = e, ne = t;
    else {
      if (t === null)
        throw At.alternate === null ? Error(_(467)) : Error(_(310));
      ne = t, t = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null
      }, ze === null ? At.memoizedState = ze = t : ze = ze.next = t;
    }
    return ze;
  }
  function Cs() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function gr(t) {
    var e = pr;
    return pr += 1, so === null && (so = []), t = Pf(so, t, e), e = At, (ze === null ? e.memoizedState : ze.next) === null && (e = e.alternate, K.H = e === null || e.memoizedState === null ? Dh : Rh), t;
  }
  function Ms(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return gr(t);
      if (t.$$typeof === O) return;
      if (t.$$typeof === H) return Be(t);
    }
    throw Error(_(438, String(t)));
  }
  function ac(t) {
    var e = null, a = At.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var n = At.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (e ??= {
      data: [],
      index: 0
    }, a === null && (a = Cs(), At.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0) for (a = e.data[e.index] = Array(t), n = 0; n < t; n++) a[n] = U;
    return e.index++, a;
  }
  function ka(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function As(t) {
    return nc(xe(), ne, t);
  }
  function nc(t, e, a) {
    var n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = a;
    var o = t.baseQueue, r = n.pending;
    if (r !== null) {
      if (o !== null) {
        var c = o.next;
        o.next = r.next, r.next = c;
      }
      e.baseQueue = o = r, n.pending = null;
    }
    if (r = t.baseState, o === null) t.memoizedState = r;
    else {
      e = o.next;
      var h = c = null, p = null, T = e, A = !1;
      do {
        var D = T.lane & -536870913;
        if (D !== T.lane ? (Yt & D) === D : (ja & D) === D) {
          var w = T.revertLane;
          if (w === 0) p !== null && (p = p.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }), D === hl && (A = !0);
          else if ((ja & w) === w) {
            T = T.next, w === hl && (A = !0);
            continue;
          } else D = {
            lane: 0,
            revertLane: T.revertLane,
            gesture: null,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, p === null ? (h = p = D, c = r) : p = p.next = D, At.lanes |= w, wn |= w;
          D = T.action, yl && a(r, D), r = T.hasEagerState ? T.eagerState : a(r, D);
        } else w = {
          lane: D,
          revertLane: T.revertLane,
          gesture: T.gesture,
          action: T.action,
          hasEagerState: T.hasEagerState,
          eagerState: T.eagerState,
          next: null
        }, p === null ? (h = p = w, c = r) : p = p.next = w, At.lanes |= D, wn |= D;
        T = T.next;
      } while (T !== null && T !== e);
      if (p === null ? c = r : p.next = h, !Ae(r, t.memoizedState) && (Ne = !0, A && (a = no, a !== null))) throw a;
      t.memoizedState = r, t.baseState = c, t.baseQueue = p, n.lastRenderedState = r;
    }
    return o === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function lc(t) {
    var e = xe(), a = e.queue;
    if (a === null) throw Error(_(311));
    a.lastRenderedReducer = t;
    var n = a.dispatch, o = a.pending, r = e.memoizedState;
    if (o !== null) {
      a.pending = null;
      var c = o = o.next;
      do
        r = t(r, c.action), c = c.next;
      while (c !== o);
      Ae(r, e.memoizedState) || (Ne = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), a.lastRenderedState = r;
    }
    return [r, n];
  }
  function eh(t, e, a) {
    var n = At, o = xe(), r = Bt;
    if (r) {
      if (a === void 0) throw Error(_(407));
      a = a();
    } else a = e();
    var c = !Ae((ne || o).memoizedState, a);
    if (c && (o.memoizedState = a, Ne = !0), o = o.queue, sc(nh.bind(null, n, o, t), [t]), t = o.getSnapshot !== e || c || ze !== null && (ze.memoizedState.tag & 1) !== 0, uo(t ? 9 : 8, { destroy: void 0 }, ah.bind(null, n, o, a, e), null), t) {
      if (n.flags |= 2048, se === null) throw Error(_(349));
      r || (ja & 127) !== 0 || ih(n, e, a);
    }
    return a;
  }
  function ih(t, e, a) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: a
    }, e = At.updateQueue, e === null ? (e = Cs(), At.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function ah(t, e, a, n) {
    e.value = a, e.getSnapshot = n, lh(e) && oh(t);
  }
  function nh(t, e, a) {
    return a(function() {
      lh(e) && oh(t);
    });
  }
  function lh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ae(t, a);
    } catch {
      return !0;
    }
  }
  function oh(t) {
    var e = s(t, 2);
    e !== null && hi(e, t, 2);
  }
  function oc(t) {
    var e = $e();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), yl) {
        ea(!0);
        try {
          a();
        } finally {
          ea(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ka,
      lastRenderedState: t
    }, e;
  }
  function rh(t, e, a, n) {
    return t.baseState = a, nc(t, ne, typeof n == "function" ? n : ka);
  }
  function h0(t, e, a, n, o) {
    if (js(t)) throw Error(_(485));
    if (t = e.action, t !== null) {
      var r = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          r.listeners.push(c);
        }
      };
      K.T !== null ? a(!0) : r.isTransition = !1, n(r), a = e.pending, a === null ? (r.next = e.pending = r, sh(e, r)) : (r.next = a.next, e.pending = a.next = r);
    }
  }
  function sh(t, e) {
    var a = e.action, n = e.payload, o = t.state;
    if (e.isTransition) {
      var r = K.T, c = {};
      c.types = r !== null ? r.types : null, K.T = c;
      try {
        var h = a(o, n), p = K.S;
        p !== null && p(c, h), uh(t, e, h);
      } catch (T) {
        rc(t, e, T);
      } finally {
        r !== null && c.types !== null && (r.types = c.types), K.T = r;
      }
    } else try {
      r = a(o, n), uh(t, e, r);
    } catch (T) {
      rc(t, e, T);
    }
  }
  function uh(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(n) {
      ch(t, e, n);
    }, function(n) {
      return rc(t, e, n);
    }) : ch(t, e, a);
  }
  function ch(t, e, a) {
    e.status = "fulfilled", e.value = a, fh(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, sh(t, a)));
  }
  function rc(t, e, a) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = a, fh(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function fh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function hh(t, e) {
    return e;
  }
  function dh(t, e) {
    if (Bt) {
      var a = se.formState;
      if (a !== null) {
        t: {
          var n = At;
          if (Bt) {
            if (ce) {
              e: {
                for (var o = ce, r = Di; o.nodeType !== 8; ) {
                  if (!r) {
                    o = null;
                    break e;
                  }
                  if (o = Zi(o.nextSibling), o === null) {
                    o = null;
                    break e;
                  }
                }
                r = o.data, o = r === "F!" || r === "F" ? o : null;
              }
              if (o) {
                ce = Zi(o.nextSibling), n = o.data === "F!";
                break t;
              }
            }
            hn(n);
          }
          n = !1;
        }
        n && (e = a[0]);
      }
    }
    return a = $e(), a.memoizedState = a.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hh,
      lastRenderedState: e
    }, a.queue = n, a = Lh.bind(null, At, n), n.dispatch = a, n = oc(!1), r = dc.bind(null, At, !1, n.queue), n = $e(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = o, a = h0.bind(null, At, o, r, a), o.dispatch = a, n.memoizedState = t, [
      e,
      a,
      !1
    ];
  }
  function mh(t) {
    return vh(xe(), ne, t);
  }
  function vh(t, e, a) {
    if (e = nc(t, e, hh)[0], t = As(ka)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var n = gr(e);
    } catch (c) {
      throw c === lo ? bs : c;
    }
    else n = e;
    e = xe();
    var o = e.queue, r = o.dispatch;
    return a !== e.memoizedState && (At.flags |= 2048, uo(9, { destroy: void 0 }, d0.bind(null, o, a), null)), [
      n,
      r,
      t
    ];
  }
  function d0(t, e) {
    t.action = e;
  }
  function ph(t) {
    var e = xe(), a = ne;
    if (a !== null) return vh(e, a, t);
    xe(), e = e.memoizedState, a = xe();
    var n = a.queue.dispatch;
    return a.memoizedState = t, [
      e,
      n,
      !1
    ];
  }
  function uo(t, e, a, n) {
    return t = {
      tag: t,
      create: a,
      deps: n,
      inst: e,
      next: null
    }, e = At.updateQueue, e === null && (e = Cs(), At.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (n = a.next, a.next = t, t.next = n, e.lastEffect = t), t;
  }
  function gh() {
    return xe().memoizedState;
  }
  function Os(t, e, a, n) {
    var o = $e();
    At.flags |= t, o.memoizedState = uo(1 | e, { destroy: void 0 }, a, n === void 0 ? null : n);
  }
  function Ls(t, e, a, n) {
    var o = xe();
    n = n === void 0 ? null : n;
    var r = o.memoizedState.inst;
    ne !== null && n !== null && Wu(n, ne.memoizedState.deps) ? o.memoizedState = uo(e, r, a, n) : (At.flags |= t, o.memoizedState = uo(1 | e, r, a, n));
  }
  function _h(t, e) {
    Os(8390656, 8, t, e);
  }
  function sc(t, e) {
    Ls(2048, 8, t, e);
  }
  function m0(t) {
    At.flags |= 4;
    var e = At.updateQueue;
    if (e === null) e = Cs(), At.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function yh(t) {
    var e = xe().memoizedState;
    return m0({
      ref: e,
      nextImpl: t
    }), function() {
      if ((Qt & 2) !== 0) throw Error(_(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function bh(t, e) {
    return Ls(4, 2, t, e);
  }
  function xh(t, e) {
    return Ls(4, 4, t, e);
  }
  function wh(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function Sh(t, e, a) {
    a = a != null ? a.concat([t]) : null, Ls(4, 4, wh.bind(null, e, t), a);
  }
  function uc() {
  }
  function Th(t, e) {
    var a = xe();
    e = e === void 0 ? null : e;
    var n = a.memoizedState;
    return e !== null && Wu(e, n[1]) ? n[0] : (a.memoizedState = [t, e], t);
  }
  function zh(t, e) {
    var a = xe();
    e = e === void 0 ? null : e;
    var n = a.memoizedState;
    if (e !== null && Wu(e, n[1])) return n[0];
    if (n = t(), yl) {
      ea(!0);
      try {
        t();
      } finally {
        ea(!1);
      }
    }
    return a.memoizedState = [n, e], n;
  }
  function cc(t, e, a) {
    return a === void 0 || (ja & 1073741824) !== 0 && (Yt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Ld(), At.lanes |= t, wn |= t, a);
  }
  function Nh(t, e, a, n) {
    return Ae(a, e) ? a : pn.current !== null ? (t = cc(t, a, n), Ae(t, e) || (Ne = !0), t) : (ja & 106) === 0 || (ja & 1073741824) !== 0 && (Yt & 261930) === 0 ? (Ne = !0, t.memoizedState = a) : (t = Ld(), At.lanes |= t, wn |= t, e);
  }
  function Eh(t, e, a, n, o) {
    var r = ht.p;
    ht.p = r !== 0 && 8 > r ? r : 8;
    var c = K.T, h = {};
    h.types = c !== null ? c.types : null, K.T = h, dc(t, !1, e, a);
    try {
      var p = o(), T = K.S;
      T !== null && T(h, p), p !== null && typeof p == "object" && typeof p.then == "function" ? _r(t, e, u0(p, n), Bi(t)) : _r(t, e, n, Bi(t));
    } catch (A) {
      _r(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: A
      }, Bi());
    } finally {
      ht.p = r, c !== null && h.types !== null && (c.types = h.types), K.T = c;
    }
  }
  function v0() {
  }
  function fc(t, e, a, n) {
    if (t.tag !== 5) throw Error(_(476));
    var o = Ch(t).queue;
    Eh(t, o, e, di, a === null ? v0 : function() {
      return Mh(t), a(n);
    });
  }
  function Ch(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: di,
      baseState: di,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: di
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Mh(t) {
    var e = Ch(t);
    e.next === null && (e = t.alternate.memoizedState), _r(t, e.next.queue, {}, Bi());
  }
  function hc() {
    return Be(Mo);
  }
  function Ah() {
    return xe().memoizedState;
  }
  function Oh() {
    return xe().memoizedState;
  }
  function p0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Bi();
          t = gl(a);
          var n = _l(e, t, a);
          n !== null && (hi(n, e, a), hr(n, e, a)), e = { cache: Uu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function g0(t, e, a) {
    var n = Bi();
    a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, js(t) ? jh(e, a) : (a = l(t, e, a, n), a !== null && (hi(a, t, n), kh(a, e, n)));
  }
  function Lh(t, e, a) {
    _r(t, e, a, Bi());
  }
  function _r(t, e, a, n) {
    var o = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (js(t)) jh(e, o);
    else {
      var r = t.alternate;
      if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try {
        var c = e.lastRenderedState, h = r(c, a);
        if (o.hasEagerState = !0, o.eagerState = h, Ae(h, c)) return i(t, e, o, 0), se === null && eo(), !1;
      } catch {
      }
      if (a = l(t, e, o, n), a !== null) return hi(a, t, n), kh(a, e, n), !0;
    }
    return !1;
  }
  function dc(t, e, a, n) {
    if (n = {
      lane: 2,
      revertLane: nf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, js(t)) {
      if (e) throw Error(_(479));
    } else e = l(t, a, n, 2), e !== null && hi(e, t, 2);
  }
  function js(t) {
    var e = t.alternate;
    return t === At || e !== null && e === At;
  }
  function jh(t, e) {
    ro = Ns = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function kh(t, e, a) {
    if ((a & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, a |= n, e.lanes = a, Qr(t, a);
    }
  }
  var ks = {
    readContext: Be,
    use: Ms,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useLayoutEffect: _e,
    useInsertionEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useSyncExternalStore: _e,
    useId: _e,
    useHostTransitionStatus: _e,
    useFormState: _e,
    useActionState: _e,
    useOptimistic: _e,
    useMemoCache: _e,
    useCacheRefresh: _e,
    useEffectEvent: _e
  }, Dh = {
    readContext: Be,
    use: Ms,
    useCallback: function(t, e) {
      return $e().memoizedState = [t, e === void 0 ? null : e], t;
    },
    useContext: Be,
    useEffect: _h,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Os(4194308, 4, wh.bind(null, e, t), a);
    },
    useLayoutEffect: function(t, e) {
      return Os(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Os(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = $e();
      e = e === void 0 ? null : e;
      var n = t();
      if (yl) {
        ea(!0);
        try {
          t();
        } finally {
          ea(!1);
        }
      }
      return a.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, a) {
      var n = $e();
      if (a !== void 0) {
        var o = a(e);
        if (yl) {
          ea(!0);
          try {
            a(e);
          } finally {
            ea(!1);
          }
        }
      } else o = e;
      return n.memoizedState = n.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, n.queue = t, t = t.dispatch = g0.bind(null, At, t), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = $e();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = oc(t);
      var e = t.queue, a = Lh.bind(null, At, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: uc,
    useDeferredValue: function(t, e) {
      return cc($e(), t, e);
    },
    useTransition: function() {
      var t = oc(!1);
      return t = Eh.bind(null, At, t.queue, !0, !1), $e().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var n = At, o = $e();
      if (Bt) {
        if (a === void 0) throw Error(_(407));
        a = a();
      } else {
        if (a = e(), se === null) throw Error(_(349));
        (Yt & 127) !== 0 || ih(n, e, a);
      }
      o.memoizedState = a;
      var r = {
        value: a,
        getSnapshot: e
      };
      return o.queue = r, _h(nh.bind(null, n, r, t), [t]), n.flags |= 2048, uo(9, { destroy: void 0 }, ah.bind(null, n, r, a, e), null), a;
    },
    useId: function() {
      var t = $e(), e = se.identifierPrefix;
      if (Bt) {
        var a = ki, n = We;
        a = (n & ~(1 << 32 - Xe(n) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = Es++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else a = c0++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: hc,
    useFormState: dh,
    useActionState: dh,
    useOptimistic: function(t) {
      var e = $e();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = dc.bind(null, At, !0, a), a.dispatch = e, [t, e];
    },
    useMemoCache: ac,
    useCacheRefresh: function() {
      return $e().memoizedState = p0.bind(null, At);
    },
    useEffectEvent: function(t) {
      var e = $e(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Qt & 2) !== 0) throw Error(_(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Rh = {
    readContext: Be,
    use: Ms,
    useCallback: Th,
    useContext: Be,
    useEffect: sc,
    useImperativeHandle: Sh,
    useInsertionEffect: bh,
    useLayoutEffect: xh,
    useMemo: zh,
    useReducer: As,
    useRef: gh,
    useState: function() {
      return As(ka);
    },
    useDebugValue: uc,
    useDeferredValue: function(t, e) {
      return Nh(xe(), ne.memoizedState, t, e);
    },
    useTransition: function() {
      var t = As(ka)[0], e = xe().memoizedState;
      return [typeof t == "boolean" ? t : gr(t), e];
    },
    useSyncExternalStore: eh,
    useId: Ah,
    useHostTransitionStatus: hc,
    useFormState: mh,
    useActionState: mh,
    useOptimistic: function(t, e) {
      return rh(xe(), ne, t, e);
    },
    useMemoCache: ac,
    useCacheRefresh: Oh,
    useEffectEvent: yh
  }, _0 = {
    readContext: Be,
    use: Ms,
    useCallback: Th,
    useContext: Be,
    useEffect: sc,
    useImperativeHandle: Sh,
    useInsertionEffect: bh,
    useLayoutEffect: xh,
    useMemo: zh,
    useReducer: lc,
    useRef: gh,
    useState: function() {
      return lc(ka);
    },
    useDebugValue: uc,
    useDeferredValue: function(t, e) {
      var a = xe();
      return ne === null ? cc(a, t, e) : Nh(a, ne.memoizedState, t, e);
    },
    useTransition: function() {
      var t = lc(ka)[0], e = xe().memoizedState;
      return [typeof t == "boolean" ? t : gr(t), e];
    },
    useSyncExternalStore: eh,
    useId: Ah,
    useHostTransitionStatus: hc,
    useFormState: ph,
    useActionState: ph,
    useOptimistic: function(t, e) {
      var a = xe();
      return ne !== null ? rh(a, ne, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: ac,
    useCacheRefresh: Oh,
    useEffectEvent: yh
  };
  function mc(t, e, a, n) {
    e = t.memoizedState, a = a(n, e), a = a == null ? e : wt({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var vc = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var n = Bi(), o = gl(n);
      o.payload = e, a != null && (o.callback = a), e = _l(t, o, n), e !== null && (hi(e, t, n), hr(e, t, n));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var n = Bi(), o = gl(n);
      o.tag = 1, o.payload = e, a != null && (o.callback = a), e = _l(t, o, n), e !== null && (hi(e, t, n), hr(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = Bi(), n = gl(a);
      n.tag = 2, e != null && (n.callback = e), e = _l(t, n, a), e !== null && (hi(e, t, a), hr(e, t, a));
    }
  };
  function Bh(t, e, a, n, o, r, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, r, c) : e.prototype && e.prototype.isPureReactComponent ? !ll(a, n) || !ll(o, r) : !0;
  }
  function Zh(t, e, a, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, n), e.state !== t && vc.enqueueReplaceState(e, e.state, null);
  }
  function bl(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var n in e) n !== "ref" && (a[n] = e[n]);
    }
    if (t = t.defaultProps) {
      a === e && (a = wt({}, a));
      for (var o in t) a[o] === void 0 && (a[o] = t[o]);
    }
    return a;
  }
  function y0(t) {
    rl(t);
  }
  function b0(t) {
    console.error(t);
  }
  function x0(t) {
    rl(t);
  }
  function Ds(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Hh(t, e, a) {
    try {
      var n = t.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function pc(t, e, a) {
    return a = gl(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Ds(t, e);
    }, a;
  }
  function Uh(t) {
    return t = gl(t), t.tag = 3, t;
  }
  function qh(t, e, a, n) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var r = n.value;
      t.payload = function() {
        return o(r);
      }, t.callback = function() {
        Hh(e, a, n);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Hh(e, a, n), typeof o != "function" && (Sn === null ? Sn = /* @__PURE__ */ new Set([this]) : Sn.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, { componentStack: h !== null ? h : "" });
    });
  }
  function w0(t, e, a, n, o) {
    if (a.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = a.alternate, e !== null && cl(e, a, o, !0), a = Ze.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return Pe === null ? iu() : a.alternate === null && ye === 0 && (ye = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, n === xs ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), tf(t, n, o)), !1;
          case 22:
            return a.flags |= 65536, n === xs ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : a.add(n)), tf(t, n, o)), !1;
        }
        throw Error(_(435, a.tag));
      }
      return tf(t, n, o), iu(), !1;
    }
    if (Bt) return e = Ze.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, n !== Ru && (t = Error(_(422), { cause: n }), rr(Ge(t, a)))) : (n !== Ru && (e = Error(_(423), { cause: n }), rr(Ge(e, a))), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, n = Ge(n, a), o = pc(t.stateNode, n, o), Xu(t, o), ye !== 4 && (ye = 2)), !1;
    var r = Error(_(520), { cause: n });
    if (r = Ge(r, a), Nr === null ? Nr = [r] : Nr.push(r), ye !== 4 && (ye = 2), e === null) return !0;
    n = Ge(n, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = o & -o, a.lanes |= t, t = pc(a.stateNode, n, t), Xu(a, t), !1;
        case 1:
          if (e = a.type, r = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Sn === null || !Sn.has(r)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = Uh(o), qh(o, t, a, n), Xu(a, o), !1;
          break;
        case 22:
          if (a.memoizedState !== null) return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var gc = Error(_(461)), Ne = !1;
  function Ce(t, e, a, n) {
    e.child = t === null ? Kf(e, null, a, n) : pl(e, t.child, a, n);
  }
  function Yh(t, e, a, n, o) {
    a = a.render;
    var r = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var h in n) h !== "ref" && (c[h] = n[h]);
    } else c = n;
    return fl(e), n = $u(t, e, a, c, r, o), h = tc(), t !== null && !Ne ? (ec(t, e, o), Da(t, e, o)) : (Bt && h && ms(e), e.flags |= 1, Ce(t, e, n, o), e.child);
  }
  function Gh(t, e, a, n, o) {
    if (t === null) {
      var r = a.type;
      return typeof r == "function" && !j(r) && r.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = r, Ph(t, e, r, n, o)) : (t = dt(a.type, null, n, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (r = t.child, !zc(t, o)) {
      var c = r.memoizedProps;
      if (a = a.compare, a = a !== null ? a : ll, a(c, n) && t.ref === e.ref) return Da(t, e, o);
    }
    return e.flags |= 1, t = Z(r, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ph(t, e, a, n, o) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (ll(r, n) && t.ref === e.ref) if (Ne = !1, e.pendingProps = n = r, zc(t, o)) (t.flags & 131072) !== 0 && (Ne = !0);
      else return e.lanes = t.lanes, Da(t, e, o);
    }
    return _c(t, e, a, n, o);
  }
  function Vh(t, e, a, n) {
    var o = n.children, r = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | a : a, t !== null) {
          for (n = e.child = t.child, o = 0; n !== null; ) o = o | n.lanes | n.childLanes, n = n.sibling;
          n = o & ~r;
        } else n = 0, e.child = null;
        return Xh(t, e, r, a, n);
      }
      if ((a & 536870912) !== 0) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && ys(e, r !== null ? r.cachePool : null), r !== null ? If(e, r) : Ku(), Wf(e);
      else return n = e.lanes = 536870912, Xh(t, e, r !== null ? r.baseLanes | a : a, a, n);
    } else r !== null ? (ys(e, r.cachePool), If(e, r), _n(), e.memoizedState = null) : (t !== null && ys(e, null), Ku(), _n());
    return Ce(t, e, o, a), e.child;
  }
  function yr(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Xh(t, e, a, n, o) {
    var r = Yu();
    return r = r === null ? null : {
      parent: Te._currentValue,
      pool: r
    }, e.memoizedState = {
      baseLanes: a,
      cachePool: r
    }, t !== null && ys(e, null), Ku(), Wf(e), t !== null && cl(t, e, n, !0), e.childLanes = o, null;
  }
  function Rs(t, e) {
    return e = Bs({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Qh(t, e, a) {
    return pl(e, t.child, null, a), t = Rs(e, e.pendingProps), t.flags |= 2, Si(e), e.memoizedState = null, t;
  }
  function S0(t, e, a) {
    var n = e.pendingProps, o = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Bt) {
        if (n.mode === "hidden") return t = Rs(e, n), e.lanes = 536870912, t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, yr(null, t);
        if (Fu(e), (t = ce) ? (t = xm(t, Di), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: $t !== null ? {
            id: We,
            overflow: ki
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Oe(t), a.return = e, e.child = a, Le = e, ce = null)) : t = null, t === null) throw hn(e);
        return e.lanes = 536870912, null;
      }
      return Rs(e, n);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var c = r.dehydrated;
      if (Fu(e), o) if (e.flags & 256) e.flags &= -257, e = Qh(t, e, a);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(_(558));
      else if (Ne || cl(t, e, a, !1), o = (a & t.childLanes) !== 0, Ne || o) {
        if (pn.current === null) {
          if (n = se, n !== null && (c = Hn(n, a), c !== 0 && c !== r.retryLane)) throw r.retryLane = c, s(t, c), hi(n, t, c), gc;
          iu();
        }
        e = Qh(t, e, a);
      } else t = r.treeContext, ce = Zi(c.nextSibling), Le = e, Bt = !0, fn = null, Di = !1, t !== null && Rf(e, t), e = Rs(e, n), e.flags |= 134221824;
      return e;
    }
    return t = Z(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function co(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(_(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function _c(t, e, a, n, o) {
    return fl(e), a = $u(t, e, a, n, void 0, o), n = tc(), t !== null && !Ne ? (ec(t, e, o), Da(t, e, o)) : (Bt && n && ms(e), e.flags |= 1, Ce(t, e, a, o), e.child);
  }
  function Kh(t, e, a, n, o, r) {
    return fl(e), e.updateQueue = null, a = th(e, n, a, o), $f(t), n = tc(), t !== null && !Ne ? (ec(t, e, r), Da(t, e, r)) : (Bt && n && ms(e), e.flags |= 1, Ce(t, e, a, r), e.child);
  }
  function Jh(t, e, a, n, o) {
    if (fl(e), e.stateNode === null) {
      var r = d, c = a.contextType;
      typeof c == "object" && c !== null && (r = Be(c)), r = new a(n, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = vc, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = n, r.state = e.memoizedState, r.refs = {}, Pu(e), c = a.contextType, r.context = typeof c == "object" && c !== null ? Be(c) : d, r.state = e.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (mc(e, a, c, n), r.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (c = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), c !== r.state && vc.enqueueReplaceState(r, r.state, null), mr(e, n, r, o), dr(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      r = e.stateNode;
      var h = e.memoizedProps, p = bl(a, h);
      r.props = p;
      var T = r.context, A = a.contextType;
      c = d, typeof A == "object" && A !== null && (c = Be(A));
      var D = a.getDerivedStateFromProps;
      A = typeof D == "function" || typeof r.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, A || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h || T !== c) && Zh(e, r, n, c), vn = !1;
      var w = e.memoizedState;
      r.state = w, mr(e, n, r, o), dr(), T = e.memoizedState, h || w !== T || vn ? (typeof D == "function" && (mc(e, a, D, n), T = e.memoizedState), (p = vn || Bh(e, a, p, n, w, T, c)) ? (A || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = T), r.props = n, r.state = T, r.context = c, n = p) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      r = e.stateNode, Vu(t, e), c = e.memoizedProps, A = bl(a, c), r.props = A, D = e.pendingProps, w = r.context, T = a.contextType, p = d, typeof T == "object" && T !== null && (p = Be(T)), h = a.getDerivedStateFromProps, (T = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (c !== D || w !== p) && Zh(e, r, n, p), vn = !1, w = e.memoizedState, r.state = w, mr(e, n, r, o), dr();
      var M = e.memoizedState;
      c !== D || w !== M || vn || t !== null && t.dependencies !== null && gs(t.dependencies) ? (typeof h == "function" && (mc(e, a, h, n), M = e.memoizedState), (A = vn || Bh(e, a, A, n, w, M, p) || t !== null && t.dependencies !== null && gs(t.dependencies)) ? (T || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, M, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, M, p)), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || c === t.memoizedProps && w === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && w === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = M), r.props = n, r.state = M, r.context = p, n = A) : (typeof r.componentDidUpdate != "function" || c === t.memoizedProps && w === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && w === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return r = n, co(t, e), n = (e.flags & 128) !== 0, r || n ? (r = e.stateNode, a = n && typeof a.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && n ? (e.child = pl(e, t.child, null, o), e.child = pl(e, null, a, o)) : Ce(t, e, a, o), e.memoizedState = r.state, t = e.child) : t = Da(t, e, o), t;
  }
  function Fh(t, e, a, n) {
    return sl(), e.flags |= 256, Ce(t, e, a, n), e.child;
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(t) {
    return {
      baseLanes: t,
      cachePool: Yf()
    };
  }
  function xc(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Ni), t;
  }
  function Ih(t, e, a) {
    var n = e.pendingProps, o = !1, r = (e.flags & 128) !== 0, c;
    if ((c = r) || (c = t !== null && t.memoizedState === null ? !1 : (He.current & 2) !== 0), c && (o = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Bt) {
        if (o ? gn(e) : _n(), (t = ce) ? (t = xm(t, Di), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: $t !== null ? {
            id: We,
            overflow: ki
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Oe(t), a.return = e, e.child = a, Le = e, ce = null)) : t = null, t === null) throw hn(e);
        return bf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return r = n.children, n = n.fallback, o ? (_n(), o = e.mode, r = Bs({
        mode: "hidden",
        children: r
      }, o), n = Tt(n, o, a, null), r.return = e, n.return = e, r.sibling = n, e.child = r, n = e.child, n.memoizedState = bc(a), n.childLanes = xc(t, c, a), e.memoizedState = yc, yr(null, n)) : (gn(e), wc(e, r));
    }
    var h = t.memoizedState;
    if (h !== null) {
      var p = h.dehydrated;
      if (p !== null) return T0(t, e, r, c, n, p, h, a);
    }
    return o ? (_n(), o = n.fallback, r = e.mode, h = t.child, p = h.sibling, n = Z(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 1206910976, p !== null ? o = Z(p, o) : (o = Tt(o, r, a, null), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, yr(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = bc(a) : (r = o.cachePool, r !== null ? (h = Te._currentValue, r = r.parent !== h ? {
      parent: h,
      pool: h
    } : r) : r = Yf(), o = {
      baseLanes: o.baseLanes | a,
      cachePool: r
    }), n.memoizedState = o, n.childLanes = xc(t, c, a), e.memoizedState = yc, yr(t.child, n)) : (gn(e), a = t.child, t = a.sibling, a = Z(a, {
      mode: "visible",
      children: n.children
    }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function wc(t, e) {
    return e = Bs({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function Bs(t, e) {
    return t = z(22, t, null, e), t.lanes = 0, t;
  }
  function Zs(t, e, a) {
    return pl(e, t.child, null, a), t = wc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function T0(t, e, a, n, o, r, c, h) {
    if (a)
      return e.flags & 256 ? (gn(e), e.flags &= -257, Zs(t, e, h)) : e.memoizedState !== null ? (_n(), e.child = t.child, e.flags |= 128, null) : (_n(), r = o.fallback, c = e.mode, o = Bs({
        mode: "visible",
        children: o.children
      }, c), r = Tt(r, c, h, null), r.flags |= 2, o.return = e, r.return = e, o.sibling = r, e.child = o, pl(e, t.child, null, h), o = e.child, o.memoizedState = bc(h), o.childLanes = xc(t, n, h), e.memoizedState = yc, yr(null, o));
    if (gn(e), bf(r)) {
      if (n = r.nextSibling && r.nextSibling.dataset, n) var p = n.dgst;
      return n = p, n !== "" && (o = Error(_(419)), o.stack = "", o.digest = n, rr({
        value: o,
        source: null,
        stack: null
      })), Zs(t, e, h);
    }
    if (Ne || cl(t, e, h, !1), n = (h & t.childLanes) !== 0, Ne || n) {
      if (pn.current !== null) return Zs(t, e, h);
      if (n = se, n !== null && (o = Hn(n, h), o !== 0 && o !== c.retryLane)) throw c.retryLane = o, s(t, o), hi(n, t, o), gc;
      return yf(r) || iu(), Zs(t, e, h);
    }
    return yf(r) ? (e.flags |= 192, e.child = t.child, null) : (t = c.treeContext, ce = Zi(r.nextSibling), Le = e, Bt = !0, fn = null, Di = !1, t !== null && Rf(e, t), e = wc(e, o.children), e.flags |= 134221824, e);
  }
  function Wh(t, e, a) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), ps(t.return, e, a);
  }
  function $h(t) {
    for (var e = null; t !== null; ) {
      var a = t.alternate;
      a !== null && zs(a) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Hs(t, e, a, n, o, r) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: a,
      tailMode: o,
      treeForkCount: r
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = n, c.tail = a, c.tailMode = o, c.treeForkCount = r);
  }
  function Sc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var a = e.sibling;
      e.sibling = t.child, t.child = e, e = a;
    }
  }
  function Tc(t, e, a) {
    var n = e.pendingProps, o = n.revealOrder, r = n.tail;
    n = n.children;
    var c = He.current;
    if (e.flags & 128) return vr(e, c), null;
    var h = (c & 2) !== 0;
    if (h ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, vr(e, c), o === "backwards" && t !== null ? (Sc(t), Ce(t, e, n, a), Sc(t)) : Ce(t, e, n, a), n = Bt ? cn : 0, !h && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Wh(t, a, e);
      else if (t.tag === 19) Wh(t, a, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (o) {
      case "backwards":
        a = $h(e.child), a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null, Sc(e)), Hs(e, !0, o, null, r, n);
        break;
      case "unstable_legacy-backwards":
        for (a = null, o = e.child, e.child = null; o !== null; ) {
          if (t = o.alternate, t !== null && zs(t) === null) {
            e.child = o;
            break;
          }
          t = o.sibling, o.sibling = a, a = o, o = t;
        }
        Hs(e, !0, a, null, r, n);
        break;
      case "together":
        Hs(e, !1, null, null, void 0, n);
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        a = $h(e.child), a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Hs(e, !1, o, a, r, n);
    }
    return e.child;
  }
  function td(t, e, a) {
    var n = e.pendingProps;
    return dn(e, e.type, n.value), Ce(t, e, n.children, a), e.child;
  }
  function Da(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), wn |= e.lanes, (a & e.childLanes) === 0) if (t !== null) {
      if (cl(t, e, a, !1), (a & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(_(153));
    if (e.child !== null) {
      for (t = e.child, a = Z(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; ) t = t.sibling, a = a.sibling = Z(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function zc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && gs(t)));
  }
  function z0(t, e, a) {
    switch (e.tag) {
      case 3:
        El(e, e.stateNode.containerInfo), dn(e, Te, t.memoizedState.cache), sl();
        break;
      case 27:
      case 5:
        kn(e);
        break;
      case 4:
        El(e, e.stateNode.containerInfo);
        break;
      case 10:
        dn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, Fu(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null) return gn(e), e.flags |= 128, null;
          n = cl(t, e, a, !1);
          var o = e.child.childLanes;
          return n || (a & o) !== 0 ? Ih(t, e, a) : (gn(e), t = Da(t, e, a), t !== null ? t.sibling : null);
        }
        gn(e);
        break;
      case 19:
        if (e.flags & 128) return Tc(t, e, a);
        if (o = (t.flags & 128) !== 0, n = (a & e.childLanes) !== 0, n || (cl(t, e, a, !1), n = (a & e.childLanes) !== 0), o) {
          if (n) return Tc(t, e, a);
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), vr(e, He.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Vh(t, e, a, e.pendingProps);
      case 24:
        dn(e, Te, t.memoizedState.cache);
    }
    return Da(t, e, a);
  }
  function ed(t, e, a) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Ne = !0;
    else {
      if (!zc(t, a) && (e.flags & 128) === 0) return Ne = !1, z0(t, e, a);
      Ne = (t.flags & 131072) !== 0;
    }
    else Ne = !1, Bt && (e.flags & 1048576) !== 0 && or(e, cn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = ml(e.elementType), e.type = t, typeof t == "function") j(t) ? (n = bl(t, n), e.tag = 1, e = Jh(null, e, t, n, a)) : (e.tag = 0, e = _c(null, e, t, n, a));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === at) {
                e.tag = 11, e = Yh(null, e, t, n, a);
                break t;
              } else if (o === R) {
                e.tag = 14, e = Gh(null, e, t, n, a);
                break t;
              } else if (o === H) {
                e.tag = 10, e.type = t, e = td(null, e, a);
                break t;
              }
            }
            throw e = St(t) || t, Error(_(306, e, ""));
          }
        }
        return e;
      case 0:
        return _c(t, e, e.type, e.pendingProps, a);
      case 1:
        return n = e.type, o = bl(n, e.pendingProps), Jh(t, e, n, o, a);
      case 3:
        t: {
          if (El(e, e.stateNode.containerInfo), t === null) throw Error(_(387));
          n = e.pendingProps;
          var r = e.memoizedState;
          o = r.element, Vu(t, e), mr(e, n, null, a);
          var c = e.memoizedState;
          if (n = c.cache, dn(e, Te, n), n !== r.cache && Hu(e, [Te], a, !0), dr(), n = c.element, r.isDehydrated) if (r = {
            element: n,
            isDehydrated: !1,
            cache: c.cache
          }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
            e = Fh(t, e, n, a);
            break t;
          } else if (n !== o) {
            o = Ge(Error(_(424)), e), rr(o), e = Fh(t, e, n, a);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (ce = Zi(t.firstChild), Le = e, Bt = !0, fn = null, Di = !0, a = Kf(e, null, n, a), e.child = a; a; ) a.flags = a.flags & -3 | 134221824, a = a.sibling;
          }
          else {
            if (sl(), n === o) {
              e = Da(t, e, a);
              break t;
            }
            Ce(t, e, n, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return co(t, e), t === null ? (a = Cm(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : Bt || (e.stateNode = om(e.type, e.pendingProps, Ui.current, e)) : e.memoizedState = Cm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return kn(e), t === null && Bt && (n = e.stateNode = Tm(e.type, e.pendingProps, Ui.current), Le = e, Di = !0, o = ce, Nn(e.type) ? (xf = o, ce = Zi(n.firstChild)) : ce = o), Ce(t, e, e.pendingProps.children, a), co(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Bt && ((o = n = ce) && (n = gv(n, e.type, e.pendingProps, Di), n !== null ? (e.stateNode = n, Le = e, ce = Zi(n.firstChild), Di = !1, o = !0) : o = !1), o || hn(e)), kn(e), o = e.type, r = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = r.children, hf(o, r) ? n = null : c !== null && hf(o, c) && (e.flags |= 32), e.memoizedState !== null && (o = $u(t, e, f0, null, null, a), Mo._currentValue = o), co(t, e), Ce(t, e, n, a), e.child;
      case 6:
        return t === null && Bt && ((t = a = ce) && (a = _v(a, e.pendingProps, Di), a !== null ? (e.stateNode = a, Le = e, ce = null, t = !0) : t = !1), t || hn(e)), null;
      case 13:
        return Ih(t, e, a);
      case 4:
        return El(e, e.stateNode.containerInfo), n = e.pendingProps, t === null ? e.child = pl(e, null, n, a) : Ce(t, e, n, a), e.child;
      case 11:
        return Yh(t, e, e.type, e.pendingProps, a);
      case 7:
        return n = e.pendingProps, co(t, e), Ce(t, e, n, a), e.child;
      case 8:
        return Ce(t, e, e.pendingProps.children, a), e.child;
      case 12:
        return Ce(t, e, e.pendingProps.children, a), e.child;
      case 10:
        return td(t, e, a);
      case 9:
        return o = e.type._context, n = e.pendingProps.children, fl(e), o = Be(o), n = n(o), e.flags |= 1, Ce(t, e, n, a), e.child;
      case 14:
        return Gh(t, e, e.type, e.pendingProps, a);
      case 15:
        return Ph(t, e, e.type, e.pendingProps, a);
      case 19:
        return Tc(t, e, a);
      case 31:
        return S0(t, e, a);
      case 22:
        return Vh(t, e, a, e.pendingProps);
      case 24:
        return fl(e), n = Be(Te), t === null ? (o = Yu(), o === null && (o = se, r = Uu(), o.pooledCache = r, r.refCount++, r !== null && (o.pooledCacheLanes |= a), o = r), e.memoizedState = {
          parent: n,
          cache: o
        }, Pu(e), dn(e, Te, o)) : ((t.lanes & a) !== 0 && (Vu(t, e), mr(e, null, null, a), dr()), o = t.memoizedState, r = e.memoizedState, o.parent !== n ? (o = {
          parent: n,
          cache: n
        }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), dn(e, Te, n)) : (n = r.cache, dn(e, Te, n), n !== o.cache && Hu(e, [Te], a, !0))), Ce(t, e, e.pendingProps.children, a), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), n = e.pendingProps, n.name != null && n.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Bt && ms(e), t !== null && t.memoizedProps.name !== n.name ? e.flags |= 4194816 : co(t, e), Ce(t, e, n.children, a), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(_(156, e.tag));
  }
  function Ra(t) {
    t.flags |= 4;
  }
  function Nc(t, e, a, n, o) {
    var r;
    if ((r = (t.mode & 32) !== 0) && (r = a === null ? Lm(e, n) : Lm(e, n) && (n.src !== a.src || n.srcSet !== a.srcSet)), r) {
      if (t.flags |= 16777216, (o & 335544128) === o) if (t.stateNode.complete) t.flags |= 8192;
      else if (Rd()) t.flags |= 8192;
      else throw vl = xs, Gu;
    } else t.flags &= -16777217;
  }
  function id(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !jm(e)) if (Rd()) t.flags |= 8192;
    else throw vl = xs, Gu;
  }
  function Us(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Xr() : 536870912, t.lanes |= e, po |= e);
  }
  function br(t, e) {
    if (!Bt) switch (t.tailMode) {
      case "visible":
        break;
      case "collapsed":
        for (var a = t.tail, n = null; a !== null; ) a.alternate !== null && (n = a), a = a.sibling;
        n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
        break;
      default:
        for (e = t.tail, a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? t.tail = null : a.sibling = null;
    }
  }
  function fe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, n = 0;
    if (e) for (var o = t.child; o !== null; ) a |= o.lanes | o.childLanes, n |= o.subtreeFlags & 1206910976, n |= o.flags & 1206910976, o.return = t, o = o.sibling;
    else for (o = t.child; o !== null; ) a |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= n, t.childLanes = a, e;
  }
  function N0(t, e, a) {
    var n = e.pendingProps;
    switch (Du(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return fe(e), null;
      case 1:
        return fe(e), null;
      case 3:
        return a = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), La(Te), qa(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (ao(e) ? Ra(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Bu())), fe(e), null;
      case 26:
        var o = e.type, r = e.memoizedState;
        return t === null ? (Ra(e), r !== null ? (fe(e), id(e, r)) : (fe(e), Nc(e, o, null, n, a))) : r ? r !== t.memoizedState ? (Ra(e), fe(e), id(e, r)) : (fe(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && Ra(e), fe(e), Nc(e, o, t, n, a)), null;
      case 27:
        if (Dn(e), a = Ui.current, o = e.type, t !== null && e.stateNode != null) t.memoizedProps !== n && Ra(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(_(166));
            return fe(e), e.subtreeFlags &= -33554433, null;
          }
          t = mi.current, ao(e) ? Bf(e, t) : (t = Tm(o, n, a), e.stateNode = t, Ra(e));
        }
        return fe(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Dn(e), o = e.type, t !== null && e.stateNode != null) t.memoizedProps !== n && Ra(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(_(166));
            return fe(e), e.subtreeFlags &= -33554433, null;
          }
          if (r = mi.current, ao(e)) Bf(e, r);
          else {
            var c = Or(Ui.current);
            switch (r) {
              case 1:
                r = c.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                r = c.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    r = c.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    r = c.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    r = c.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                    break;
                  case "select":
                    r = typeof n.is == "string" ? c.createElement("select", { is: n.is }) : c.createElement("select"), n.multiple ? r.multiple = !0 : n.size && (r.size = n.size);
                    break;
                  default:
                    r = typeof n.is == "string" ? c.createElement(o, { is: n.is }) : c.createElement(o);
                }
            }
            r[be] = e, r[we] = n;
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) r.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e) break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = r;
            t: switch (qe(r, o, n), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && Ra(e);
          }
        }
        return fe(e), e.subtreeFlags &= -33554433, Nc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && Ra(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(_(166));
          if (t = Ui.current, ao(e)) {
            if (t = e.stateNode, a = e.memoizedProps, n = null, o = Le, o !== null) switch (o.tag) {
              case 27:
              case 5:
                n = o.memoizedProps;
            }
            t[be] = e, t = !!(t.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || im(t.nodeValue, a)), t || hn(e, !0);
          } else t = Or(t).createTextNode(n), t[be] = e, e.stateNode = t;
        }
        return fe(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = ao(e), a !== null) {
            if (t === null) {
              if (!n) throw Error(_(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(_(557));
              t[be] = e;
            } else sl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            fe(e), t = !1;
          } else a = Bu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (Si(e), e) : (Si(e), null);
          if ((e.flags & 128) !== 0) throw Error(_(558));
        }
        return fe(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = ao(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(_(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(_(317));
              o[be] = e;
            } else sl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            fe(e), o = !1;
          } else o = Bu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (Si(e), e) : (Si(e), null);
        }
        return Si(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = n !== null, t = t !== null && t.memoizedState !== null, a && (n = e.child, o = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (o = n.alternate.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== o && (n.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Us(e, e.updateQueue), fe(e), null);
      case 4:
        return qa(), t === null && Wd(e.stateNode.containerInfo), e.flags |= 67108864, fe(e), null;
      case 10:
        return La(e.type), fe(e), null;
      case 19:
        if (Iu(e), n = e.memoizedState, n === null) return fe(e), null;
        if (o = (e.flags & 128) !== 0, r = n.rendering, r === null) if (o) br(n, !1);
        else {
          if (ye !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (r = zs(t), r !== null) {
              for (e.flags |= 128, br(n, !1), t = r.updateQueue, e.updateQueue = t, Us(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; ) W(a, t), a = a.sibling;
              return vr(e, He.current & 1 | 2), Bt && wi(e, n.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          n.tail !== null && Ye() > Ws && (e.flags |= 128, o = !0, br(n, !1), e.lanes = 4194304);
        }
        else {
          if (!o) if (t = zs(r), t !== null) {
            if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Us(e, t), br(n, !0), n.tail === null && n.tailMode !== "collapsed" && n.tailMode !== "visible" && !r.alternate && !Bt) return fe(e), null;
          } else 2 * Ye() - n.renderingStartTime > Ws && a !== 536870912 && (e.flags |= 128, o = !0, br(n, !1), e.lanes = 4194304);
          n.isBackwards ? (r.sibling = e.child, e.child = r) : (t = n.last, t !== null ? t.sibling = r : e.child = r, n.last = r);
        }
        if (n.tail !== null) {
          t = n.tail;
          t: {
            for (a = t; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break t;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Ye(), t.sibling = null, r = He.current, r = o ? r & 1 | 2 : r & 1, n.tailMode === "visible" || n.tailMode === "collapsed" || !a || Bt ? vr(e, r) : (a = r, ae(Ze, e), ae(He, a), Pe === null && (Pe = e)), Bt && wi(e, n.treeForkCount), t;
        }
        return fe(e), null;
      case 22:
      case 23:
        return Si(e), Ju(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (fe(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : fe(e), a = e.updateQueue, a !== null && Us(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== a && (e.flags |= 2048), t !== null && ge(dl), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), La(Te), fe(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, fe(e), null;
    }
    throw Error(_(156, e.tag));
  }
  function E0(t, e) {
    switch (Du(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return La(Te), qa(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Dn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Si(e), e.alternate === null) throw Error(_(340));
          sl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Si(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(_(340));
          sl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Iu(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return qa(), null;
      case 10:
        return La(e.type), null;
      case 22:
      case 23:
        return Si(e), Ju(), t !== null && ge(dl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return La(Te), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ad(t, e) {
    switch (Du(e), e.tag) {
      case 3:
        La(Te), qa();
        break;
      case 26:
      case 27:
      case 5:
        Dn(e);
        break;
      case 4:
        qa();
        break;
      case 31:
        e.memoizedState !== null && Si(e);
        break;
      case 13:
        Si(e);
        break;
      case 19:
        Iu(e);
        break;
      case 10:
        La(e.type);
        break;
      case 22:
      case 23:
        Si(e), Ju(), t !== null && ge(dl);
        break;
      case 24:
        La(Te);
    }
  }
  function xr(t, e) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var o = n.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            n = void 0;
            var r = a.create, c = a.inst;
            n = r(), c.destroy = n;
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (h) {
      ee(e, e.return, h);
    }
  }
  function yn(t, e, a) {
    try {
      var n = e.updateQueue, o = n !== null ? n.lastEffect : null;
      if (o !== null) {
        var r = o.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            var c = n.inst, h = c.destroy;
            if (h !== void 0) {
              c.destroy = void 0, o = e;
              var p = a, T = h;
              try {
                T();
              } catch (A) {
                ee(o, p, A);
              }
            }
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (A) {
      ee(e, e.return, A);
    }
  }
  function nd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Ff(e, a);
      } catch (n) {
        ee(t, t.return, n);
      }
    }
  }
  function ld(t, e, a) {
    a.props = bl(t.type, t.memoizedProps), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (n) {
      ee(t, e, n);
    }
  }
  function fa(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            var o = t.stateNode, r = Li(t.memoizedProps, o);
            (o.ref === null || o.ref.name !== r) && (o.ref = mm(r)), n = o.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var c = new Ei(t);
              C(t.child, !1, vv, c, void 0, void 0), t.stateNode = c;
            }
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(n) : a.current = n;
      }
    } catch (h) {
      ee(t, e, h);
    }
  }
  function Ue(t, e) {
    var a = t.ref, n = t.refCleanup;
    if (a !== null) if (typeof n == "function") try {
      n();
    } catch (o) {
      ee(t, e, o);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (o) {
      ee(t, e, o);
    }
    else a.current = null;
  }
  function qs(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null) for (var a = 0; a < e.length; a++) bm(t.stateNode, e[a]);
  }
  function od(t) {
    for (var e = t.return; e !== null && (Cc(e) && bm(t.stateNode, e.stateNode), !Ec(e)); )
      e = e.return;
  }
  function wr(t) {
    for (var e = t.return; e !== null && (Cc(e) && pv(t.stateNode, e.stateNode), !Ec(e)); )
      e = e.return;
  }
  function Ec(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Cc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Mc(t) {
    var e = t.type, a = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break t;
        case "img":
          a.src ? n.src = a.src : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (o) {
      ee(t, t.return, o);
    }
  }
  function Ac(t, e, a) {
    try {
      var n = t.stateNode;
      I0(n, t.type, a, e), n[we] = e;
    } catch (o) {
      ee(t, t.return, o);
    }
  }
  function rd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Nn(t.type) || t.tag === 4;
  }
  function Oc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || rd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Nn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Lc(t, e, a, n) {
    var o = t.tag;
    if (o === 5 || o === 6) o = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(o, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(o), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ii)), qs(t, n), Zt = !0;
    else if (o !== 4 && (o === 27 && (qs(t, n), n = null, Nn(t.type) && (a = t.stateNode, e = null)), t = t.child, t !== null)) for (Lc(t, e, a, n), t = t.sibling; t !== null; ) Lc(t, e, a, n), t = t.sibling;
  }
  function Ys(t, e, a, n) {
    var o = t.tag;
    if (o === 5 || o === 6) o = t.stateNode, e ? a.insertBefore(o, e) : a.appendChild(o), qs(t, n), Zt = !0;
    else if (o !== 4 && (o === 27 && (qs(t, n), n = null, Nn(t.type) && (a = t.stateNode)), t = t.child, t !== null)) for (Ys(t, e, a, n), t = t.sibling; t !== null; ) Ys(t, e, a, n), t = t.sibling;
  }
  function sd(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var n = t.type, o = e.attributes; o.length; ) e.removeAttributeNode(o[0]);
      qe(e, n, a), e[be] = t, e[we] = a;
    } catch (r) {
      ee(t, t.return, r);
    }
  }
  var Gs = !1, Ti = null;
  function ud(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Gs = !0);
  }
  var ha = null;
  function cd() {
    var t = ha;
    return ha = null, t;
  }
  var ui = 0;
  function fo(t, e, a, n, o) {
    return ui = 0, fd(t.child, e, a, n, o);
  }
  function fd(t, e, a, n, o) {
    for (var r = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null) {
          var h = vf(c);
          n.push(h), h.view && (r = !0);
        } else r || vf(c).view && (r = !0);
        Gs = !0, fm(c, ui === 0 ? e : e + "_" + ui, a), ui++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o || fd(t.child, e, a, n, o) && (r = !0));
      t = t.sibling;
    }
    return r;
  }
  function da(t, e) {
    for (; t !== null; )
      t.tag === 5 ? hm(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || da(t.child, e)), t = t.sibling;
  }
  function Ps(t) {
    if ((t.subtreeFlags & 18874368) !== 0) for (t = t.child; t !== null; ) {
      if ((t.tag !== 22 || t.memoizedState === null) && (Ps(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
        var e = t.memoizedProps;
        if (e.name == null || e.name === "auto") throw Error(_(544));
        var a = e.name;
        e = ji(e.default, e.share), e !== "none" && (fo(t, a, e, null, !1) || da(t.child, !1));
      }
      t = t.sibling;
    }
  }
  function jc(t, e) {
    if (t.tag === 30) {
      var a = t.stateNode, n = t.memoizedProps, o = Li(n, a), r = ji(n.default, a.paired ? n.share : n.enter);
      r !== "none" ? fo(t, o, r, null, !1) ? (Ps(t), a.paired || e || bo(t, n.onEnter)) : da(t.child, !1) : Ps(t);
    } else if ((t.subtreeFlags & 33554432) !== 0) for (t = t.child; t !== null; ) jc(t, e), t = t.sibling;
    else Ps(t);
  }
  function kc(t) {
    if (Ti !== null && Ti.size !== 0) {
      var e = Ti;
      if ((t.subtreeFlags & 18874368) !== 0) for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var a = t.memoizedProps, n = a.name;
            if (n != null && n !== "auto") {
              var o = e.get(n);
              if (o !== void 0) {
                var r = ji(a.default, a.share);
                if (r !== "none" && (fo(t, n, r, null, !1) ? (r = t.stateNode, o.paired = r, r.paired = o, bo(t, a.onShare)) : da(t.child, !1)), e.delete(n), e.size === 0) break;
              }
            }
          }
          kc(t);
        }
        t = t.sibling;
      }
    }
  }
  function Dc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, a = Li(e, t.stateNode), n = Ti !== null ? Ti.get(a) : void 0, o = ji(e.default, n !== void 0 ? e.share : e.exit);
      o !== "none" && (fo(t, a, o, null, !1) ? n !== void 0 ? (o = t.stateNode, n.paired = o, o.paired = n, Ti.delete(a), bo(t, e.onShare)) : bo(t, e.onExit) : da(t.child, !1)), Ti !== null && kc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0) for (t = t.child; t !== null; ) Dc(t), t = t.sibling;
    else Ti !== null && kc(t);
  }
  function hd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = Li(e, t.stateNode);
        e = ji(e.default, e.update), t.flags &= -5, e !== "none" && fo(t, a, e, t.memoizedState = [], !1);
      } else (t.subtreeFlags & 33554432) !== 0 && hd(t);
      t = t.sibling;
    }
  }
  function Rc(t) {
    if ((t.subtreeFlags & 18874368) !== 0) for (t = t.child; t !== null; ) {
      if (t.tag !== 22 || t.memoizedState === null) {
        if (t.tag === 30 && (t.flags & 18874368) !== 0) {
          var e = t.stateNode;
          e.paired !== null && (e.paired = null, da(t.child, !1));
        }
        Rc(t);
      }
      t = t.sibling;
    }
  }
  function Vs(t) {
    if (t.tag === 30) t.stateNode.paired = null, da(t.child, !1), Rc(t);
    else if ((t.subtreeFlags & 33554432) !== 0) for (t = t.child; t !== null; ) Vs(t), t = t.sibling;
    else Rc(t);
  }
  function dd(t) {
    for (t = t.child; t !== null; ) t.tag === 30 ? da(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && dd(t), t = t.sibling;
  }
  function Bc(t, e, a, n, o, r, c) {
    for (var h = !1; e !== null; ) {
      if (e.tag === 5) {
        var p = e.stateNode;
        if (r !== null && ui < r.length) {
          var T = r[ui], A = vf(p);
          (T.view || A.view) && (h = !0);
          var D;
          if (D = (t.flags & 4) === 0) if (A.clip) D = !0;
          else {
            D = T.rect;
            var w = A.rect;
            D = D.y !== w.y || D.x !== w.x || D.height !== w.height || D.width !== w.width;
          }
          D && (t.flags |= 4), A.abs ? A = !T.abs : (T = T.rect, A = A.rect, A = T.height !== A.height || T.width !== A.width), A && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && fm(p, ui === 0 ? a : a + "_" + ui, o), h && (t.flags & 4) !== 0 || (ha === null && (ha = []), ha.push(p, ui === 0 ? n : n + "_" + ui, e.memoizedProps)), ui++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && c ? t.flags |= e.flags & 32 : Bc(t, e.child, a, n, o, r, c) && (h = !0));
      e = e.sibling;
    }
    return h;
  }
  function md(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var a = t.memoizedProps, n = t.stateNode, o = Li(a, n), r = ji(a.default, a.update);
        if (e) {
          n = n.clones;
          var c = n === null ? null : n.map(av);
        } else c = t.memoizedState, t.memoizedState = null;
        n = t;
        var h = t.child;
        ui = 0, o = Bc(n, h, o, o, r, c, !1), (t.flags & 4) !== 0 && o && (e || bo(t, a.onUpdate));
      } else (t.subtreeFlags & 33554432) !== 0 && md(t, e);
      t = t.sibling;
    }
  }
  var je = !1, Ft = !1, ma = !1, Zc = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, ke = null, va = !1, Sr = !1, Xs = !1, Hc = !1;
  function C0(t, e, a) {
    if (t = t.containerInfo, cf = Ao, t = yi(t), nn(t)) {
      if ("selectionStart" in t) var n = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var r = o.anchorOffset, c = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break t;
          }
          var h = 0, p = -1, T = -1, A = 0, D = 0, w = t, M = null;
          e: for (; ; ) {
            for (var Q; w !== n || r !== 0 && w.nodeType !== 3 || (p = h + r), w !== c || o !== 0 && w.nodeType !== 3 || (T = h + o), w.nodeType === 3 && (h += w.nodeValue.length), (Q = w.firstChild) !== null; )
              M = w, w = Q;
            for (; ; ) {
              if (w === t) break e;
              if (M === n && ++A === r && (p = h), M === c && ++D === o && (T = h), (Q = w.nextSibling) !== null) break;
              w = M, M = w.parentNode;
            }
            w = Q;
          }
          n = p === -1 || T === -1 ? null : {
            start: p,
            end: T
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (ff = {
      focusedElem: t,
      selectionRange: n
    }, Ao = !1, a = (a & 335544064) === a, ke = e, e = a ? 9270 : 1024; ke !== null; ) {
      if (t = ke, a && (n = t.deletions, n !== null)) for (r = 0; r < n.length; r++) a && Dc(n[r]);
      if (t.alternate === null && (t.flags & 2) !== 0) a && ud(t), Qs(a);
      else {
        if (t.tag === 22) {
          if (n = t.alternate, t.memoizedState !== null) {
            n !== null && n.memoizedState === null && a && Dc(n), Qs(a);
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            a && ud(t), Qs(a);
            continue;
          }
        }
        n = t.child, (t.subtreeFlags & e) !== 0 && n !== null ? (n.return = t, ke = n) : (a && hd(t), Qs(a));
      }
    }
    Ti = null;
  }
  function Qs(t) {
    for (; ke !== null; ) {
      var e = ke, a = t, n = e.alternate, o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((o & 1024) !== 0 && n !== null) {
            a = void 0, o = n.memoizedProps, n = n.memoizedState;
            var r = e.stateNode;
            try {
              var c = bl(e.type, o);
              a = r.getSnapshotBeforeUpdate(c, n), r.__reactInternalSnapshotBeforeUpdate = a;
            } catch (h) {
              ee(e, e.return, h);
            }
          }
          break;
        case 3:
          if ((o & 1024) !== 0) {
            if (n = e.stateNode.containerInfo, a = n.nodeType, a === 9) _f(n);
            else if (a === 1) switch (n.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                _f(n);
                break;
              default:
                n.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          a && n !== null && (a = Li(n.memoizedProps, n.stateNode), o = e.memoizedProps, o = ji(o.default, o.update), o !== "none" && fo(n, a, o, n.memoizedState = [], !0));
          break;
        default:
          if ((o & 1024) !== 0) throw Error(_(163));
      }
      if (n = e.sibling, n !== null) {
        n.return = e.return, ke = n;
        break;
      }
      ke = e.return;
    }
  }
  function pd(t, e, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        pa(t, a), n & 4 && xr(5, a);
        break;
      case 1:
        if (pa(t, a), n & 4) if (t = a.stateNode, e === null) try {
          t.componentDidMount();
        } catch (c) {
          ee(a, a.return, c);
        }
        else {
          var o = bl(a.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            ee(a, a.return, c);
          }
        }
        n & 64 && nd(a), n & 512 && fa(a, a.return);
        break;
      case 3:
        if (pa(t, a), n & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              e = a.child.stateNode;
              break;
            case 1:
              e = a.child.stateNode;
          }
          try {
            Ff(t, e);
          } catch (c) {
            ee(a, a.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && sd(a);
      case 26:
      case 5:
        pa(t, a), e === null && n & 4 && Mc(a), n & 512 && fa(a, a.return);
        break;
      case 12:
        pa(t, a);
        break;
      case 31:
        pa(t, a), n & 4 && bd(t, a);
        break;
      case 13:
        pa(t, a), n & 4 && xd(t, a), n & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = U0.bind(null, a), yv(t, a))));
        break;
      case 22:
        if (n = a.memoizedState !== null || je, !n) {
          var r = e !== null && e.memoizedState !== null || Ft;
          e = je, o = Ft, je = n, (Ft = r) && !o ? (n = 2, (a.subtreeFlags & 8772) !== 0 && (n |= 1), Ii(t, a, n)) : pa(t, a), je = e, Ft = o;
        }
        break;
      case 30:
        pa(t, a), n & 512 && fa(a, a.return);
        break;
      case 7:
        n & 512 && fa(a, a.return);
      default:
        pa(t, a);
    }
  }
  function Uc(t, e) {
    for (t = t.child; t !== null; ) gd(t, e), t = t.sibling;
  }
  function gd(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var a = t.stateNode;
          if (e) {
            var n = a.style;
            typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
          } else {
            var o = t.stateNode, r = t.memoizedProps.style, c = r != null && r.hasOwnProperty("display") ? r.display : null;
            o.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (p) {
          ee(t, t.return, p);
        }
        qc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Zt = !0;
        } catch (p) {
          ee(t, t.return, p);
        }
        break;
      case 18:
        try {
          var h = t.stateNode;
          e ? cm(h, !0) : cm(t.stateNode, !1);
        } catch (p) {
          ee(t, t.return, p);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Uc(t, e);
        break;
      default:
        Uc(t, e);
    }
  }
  function qc(t, e) {
    if (t.subtreeFlags & 67108864) for (t = t.child; t !== null; ) {
      t: {
        var a = t, n = e;
        switch (a.tag) {
          case 4:
            gd(a, n);
            break t;
          case 22:
            a.memoizedState === null && qc(a, n);
            break t;
          default:
            qc(a, n);
        }
      }
      t = t.sibling;
    }
  }
  function _d(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _d(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Pi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var de = null, ci = !1;
  function Ji(t, e, a) {
    for (a = a.child; a !== null; ) yd(t, e, a), a = a.sibling;
  }
  function yd(t, e, a) {
    if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
      Ve.onCommitFiberUnmount(xa, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Ft || Ue(a, e), Ji(t, e, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !Ft && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ft || Ue(a, e), wr(a);
        var n = de, o = ci;
        Nn(a.type) && (de = a.stateNode, ci = !1), Ji(t, e, a), zm(a.stateNode, a.type, a.memoizedProps), de = n, ci = o;
        break;
      case 5:
        Ft || Ue(a, e), wr(a);
      case 6:
        if (a.tag === 6 && wr(a), n = de, o = ci, de = null, Ji(t, e, a), de = n, ci = o, de !== null) if (ci) try {
          (de.nodeType === 9 ? de.body : de.nodeName === "HTML" ? de.ownerDocument.body : de).removeChild(a.stateNode), Zt = !0;
        } catch (r) {
          ee(a, e, r);
        }
        else try {
          de.removeChild(a.stateNode), Zt = !0;
        } catch (r) {
          ee(a, e, r);
        }
        break;
      case 18:
        de !== null && (ci ? (t = de, um(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), Oo(t)) : um(de, a.stateNode));
        break;
      case 4:
        n = de, o = ci, de = a.stateNode.containerInfo, ci = !0, Ji(t, e, a), de = n, ci = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yn(2, a, e), Ft || yn(4, a, e), Ji(t, e, a);
        break;
      case 1:
        Ft || (Ue(a, e), n = a.stateNode, typeof n.componentWillUnmount == "function" && ld(a, e, n)), Ji(t, e, a);
        break;
      case 21:
        Ji(t, e, a);
        break;
      case 22:
        Ft = (n = Ft) || a.memoizedState !== null, Ji(t, e, a), Ft = n;
        break;
      case 30:
        Ue(a, e), Ji(t, e, a);
        break;
      case 7:
        Ft || Ue(a, e), Ji(t, e, a);
        break;
      default:
        Ji(t, e, a);
    }
  }
  function bd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Oo(t);
      } catch (a) {
        ee(e, e.return, a);
      }
    }
  }
  function xd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Oo(t);
    } catch (a) {
      ee(e, e.return, a);
    }
  }
  function M0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new vd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new vd()), e;
      default:
        throw Error(_(435, t.tag));
    }
  }
  function Ks(t, e) {
    var a = M0(t);
    e.forEach(function(n) {
      if (!a.has(n)) {
        a.add(n);
        var o = q0.bind(null, t, n);
        n.then(o, o);
      }
    });
  }
  function ti(t, e, a) {
    var n = e.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var r = n[o], c = t, h = e, p = h;
      t: for (; p !== null; ) {
        switch (p.tag) {
          case 27:
            if (Nn(p.type)) {
              de = p.stateNode, ci = !1;
              break t;
            }
            break;
          case 5:
            de = p.stateNode, ci = !1;
            break t;
          case 3:
          case 4:
            de = p.stateNode.containerInfo, ci = !0;
            break t;
        }
        p = p.return;
      }
      if (de === null) throw Error(_(160));
      yd(c, h, r), de = null, ci = !1, c = r.alternate, c !== null && (c.return = null), r.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) wd(e, t, a), e = e.sibling;
  }
  var Fi = null;
  function wd(t, e, a) {
    var n = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (o & 4 && (n = t.updateQueue, n = n !== null ? n.events : null, n !== null)) for (var r = 0; r < n.length; r++) {
          var c = n[r];
          c.ref.impl = c.nextImpl;
        }
        ti(e, t, a), ei(t), o & 4 && (yn(3, t, t.return), xr(3, t), yn(5, t, t.return));
        break;
      case 1:
        ti(e, t, a), ei(t), o & 512 && (Ft || n === null || Ue(n, n.return)), o & 64 && je && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        if (r = Fi, ti(e, t, a), ei(t), o & 512 && (Ft || n === null || Ue(n, n.return)), o & 4) if (o = n !== null ? n.memoizedState : null, a = t.memoizedState, n === null) if (a === null) if (t.stateNode === null) if (je) t.stateNode = om(t.type, t.memoizedProps, e.containerInfo, t);
        else {
          t: {
            e = t.type, a = t.memoizedProps, o = r.ownerDocument || r;
            e: switch (e) {
              case "title":
                n = o.getElementsByTagName("title")[0], (!n || n[aa] || n[be] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = o.createElement(e), o.head.insertBefore(n, o.querySelector("head > title"))), qe(n, e, a), n[be] = t, me(n), e = n;
                break t;
              case "link":
                if (r = Om("link", "href", o).get(e + (a.href || ""))) {
                  for (c = 0; c < r.length; c++) if (n = r[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                    r.splice(c, 1);
                    break e;
                  }
                }
                n = o.createElement(e), qe(n, e, a), o.head.appendChild(n);
                break;
              case "meta":
                if (r = Om("meta", "content", o).get(e + (a.content || ""))) {
                  for (c = 0; c < r.length; c++) if (n = r[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                    r.splice(c, 1);
                    break e;
                  }
                }
                n = o.createElement(e), qe(n, e, a), o.head.appendChild(n);
                break;
              default:
                throw Error(_(468, e));
            }
            n[be] = t, me(n), e = n;
          }
          t.stateNode = e;
        }
        else je || zf(r, t.type, t.stateNode);
        else t.stateNode = Am(r, a, t.memoizedProps);
        else o !== a ? (o === null ? (e = n.stateNode, e === null || Ft || e.parentNode.removeChild(e)) : o.count--, a === null ? je || zf(r, t.type, t.stateNode) : Am(r, a, t.memoizedProps)) : a === null && t.stateNode !== null && Ac(t, t.memoizedProps, n.memoizedProps);
        break;
      case 27:
        ti(e, t, a), ei(t), o & 512 && (Ft || n === null || Ue(n, n.return)), n !== null && o & 4 && Ac(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (r = ma, ma = !1, ti(e, t, a), ma = r, ei(t), o & 512 && (Ft || n === null || Ue(n, n.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ra(e, ""), Zt = !0;
          } catch (A) {
            ee(t, t.return, A);
          }
        }
        o & 4 && t.stateNode != null && (e = t.memoizedProps, Ac(t, e, n !== null ? n.memoizedProps : e)), o & 1024 && (Zc = !0);
        break;
      case 6:
        if (ti(e, t, a), ei(t), o & 4) {
          if (t.stateNode === null) throw Error(_(162));
          e = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = e, Zt = !0;
          } catch (A) {
            ee(t, t.return, A);
          }
        }
        break;
      case 3:
        if (Zt = !1, uu = null, r = Fi, Fi = Lr(e.containerInfo), ti(e, t, a), Fi = r, ei(t), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Oo(e.containerInfo);
        } catch (A) {
          ee(t, t.return, A);
        }
        Zc && (Zc = !1, Sd(t)), Zt = !1;
        break;
      case 4:
        o = ma, ma = je, n = kl(), r = Fi, Fi = Lr(t.stateNode.containerInfo), ti(e, t, a), ei(t), Fi = r, Zt && Sr && (Xs = !0), Zt = n, ma = o;
        break;
      case 12:
        ti(e, t, a), ei(t);
        break;
      case 31:
        ti(e, t, a), ei(t), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ks(t, e)));
        break;
      case 13:
        ti(e, t, a), ei(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Is = Ye()), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ks(t, e)));
        break;
      case 22:
        r = t.memoizedState !== null, c = n !== null && n.memoizedState !== null;
        var h = je, p = Ft, T = ma;
        je = h || r, ma = T || r, Ft = p || c, ti(e, t, a), Ft = p, ma = T, je = h, ei(t), o & 8192 && (e = t.stateNode, e._visibility = r ? e._visibility & -2 : e._visibility | 1, !r || n === null || c || je || Ft || (e = c || Ft, a = je, n = Ft, je = r || je, Ft = e, bn(t, 2), je = a, Ft = n), !r && ma || Uc(t, r)), o & 4 && (e = t.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, Ks(t, a))));
        break;
      case 19:
        ti(e, t, a), ei(t), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ks(t, e)));
        break;
      case 30:
        o & 512 && (Ft || n === null || Ue(n, n.return)), o = kl(), r = Sr, c = (a & 335544064) === a, h = t.memoizedProps, Sr = c && ji(h.default, h.update) !== "none", ti(e, t, a), ei(t), c && n !== null && Zt && (t.flags |= 4), Sr = r, Zt = o;
        break;
      case 21:
        break;
      case 7:
        o & 512 && (Ft || n === null || Ue(n, n.return)), n && n.stateNode !== null && (n.stateNode._fragmentFiber = t);
      default:
        ti(e, t, a), ei(t);
    }
  }
  function ei(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, n = t.return; n !== null; ) {
          if (rd(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var o = t.return; o !== null; ) {
          if (Cc(o)) {
            var r = o.stateNode;
            n === null ? n = [r] : n.push(r);
          }
          if (Ec(o)) break;
          o = o.return;
        }
        var c = n;
        if (a == null) throw Error(_(160));
        switch (a.tag) {
          case 27:
            var h = a.stateNode;
            Ys(t, Oc(t), h, c);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (ra(p, ""), a.flags &= -33), Ys(t, Oc(t), p, c);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo;
            Lc(t, Oc(t), T, c);
            break;
          default:
            throw Error(_(161));
        }
      } catch (A) {
        ee(t, t.return, A);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Sd(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      Sd(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Ao = !0, e.reset(), Ao = !1), t = t.sibling;
    }
  }
  function ho(t, e) {
    if (e.subtreeFlags & 9270) for (e = e.child; e !== null; ) Td(e, t), e = e.sibling;
    else md(e, !1);
  }
  function Td(t, e) {
    var a = t.alternate;
    if (a === null) jc(t, !1);
    else switch (t.tag) {
      case 3:
        if (Hc = va = !1, cd(), ho(e, t), !va && !Xs) {
          if (t = ha, t !== null) for (var n = 0; n < t.length; n += 3) {
            a = t[n];
            var o = t[n + 1];
            hm(a, t[n + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate({
              opacity: [0, 0],
              pointerEvents: ["none", "none"]
            }, {
              duration: 0,
              fill: "forwards",
              pseudoElement: "::view-transition-group(" + o + ")"
            });
          }
          t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate({
            opacity: [0, 0],
            pointerEvents: ["none", "none"]
          }, {
            duration: 0,
            fill: "forwards",
            pseudoElement: "::view-transition-group(root)"
          }), t.animate({
            width: [0, 0],
            height: [0, 0]
          }, {
            duration: 0,
            fill: "forwards",
            pseudoElement: "::view-transition"
          })), Hc = !0;
        }
        ha = null;
        break;
      case 5:
        ho(e, t);
        break;
      case 4:
        n = va, va = !1, ho(e, t), va && (Xs = !0), va = n;
        break;
      case 22:
        t.memoizedState === null && (a.memoizedState !== null ? jc(t, !1) : ho(e, t));
        break;
      case 30:
        n = va, o = cd(), va = !1, ho(e, t), va && (t.flags |= 4);
        var r = t.memoizedProps, c = t.stateNode;
        e = Li(r, c), c = Li(a.memoizedProps, c);
        var h = ji(r.default, r.update);
        h === "none" ? e = !1 : (r = a.memoizedState, a.memoizedState = null, a = t.child, ui = 0, e = Bc(t, a, e, c, h, r, !0), ui !== (r === null ? 0 : r.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (bo(t, t.memoizedProps.onUpdate), ha = o) : o !== null && (o.push.apply(o, ha), ha = o), va = (t.flags & 32) !== 0 ? !0 : n;
        break;
      default:
        ho(e, t);
    }
  }
  function pa(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) pd(t, e.alternate, e), e = e.sibling;
  }
  function bn(t, e) {
    for (t = t.child; t !== null; ) {
      var a = t, n = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yn(4, a, a.return), bn(a, n);
          break;
        case 1:
          Ue(a, a.return);
          var o = a.stateNode;
          typeof o.componentWillUnmount == "function" && ld(a, a.return, o), bn(a, n);
          break;
        case 27:
          (n & 2) !== 0 && zm(a.stateNode, a.type, a.memoizedProps);
        case 5:
          Ue(a, a.return), a.tag !== 5 && a.tag !== 27 || wr(a), bn(a, n);
          break;
        case 6:
          wr(a);
          break;
        case 26:
          Ue(a, a.return), o = a.stateNode, a.memoizedState !== null || o === null || Ft || o.parentNode.removeChild(o), bn(a, n);
          break;
        case 22:
          a.memoizedState === null && bn(a, n);
          break;
        case 30:
          Ue(a, a.return), bn(a, n);
          break;
        case 7:
          Ue(a, a.return);
        default:
          bn(a, n);
      }
      t = t.sibling;
    }
  }
  function Ii(t, e, a) {
    for (a = (e.subtreeFlags & 8772) !== 0 ? a : a & -2, e = e.child; e !== null; ) {
      var n = e.alternate, o = t, r = e, c = r.flags, h = (a & 1) !== 0;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ii(o, r, a), xr(4, r);
          break;
        case 1:
          if (Ii(o, r, a), n = r, o = n.stateNode, typeof o.componentDidMount == "function") try {
            o.componentDidMount();
          } catch (A) {
            ee(n, n.return, A);
          }
          if (n = r, o = n.updateQueue, o !== null) {
            var p = n.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++) Jf(T[o], p);
            } catch (A) {
              ee(n, n.return, A);
            }
          }
          h && c & 64 && nd(r), fa(r, r.return);
          break;
        case 27:
          (a & 2) !== 0 && sd(r);
        case 5:
          r.tag !== 5 && r.tag !== 27 || od(r), Ii(o, r, a), h && n === null && c & 4 && Mc(r), fa(r, r.return);
          break;
        case 6:
          od(r);
          break;
        case 26:
          p = r.stateNode, r.memoizedState !== null || p === null || je || zf(Lr(p.ownerDocument), r.type, p), Ii(o, r, a), h && n === null && c & 4 && Mc(r), fa(r, r.return);
          break;
        case 12:
          Ii(o, r, a);
          break;
        case 31:
          Ii(o, r, a), h && c & 4 && bd(o, r);
          break;
        case 13:
          Ii(o, r, a), h && c & 4 && xd(o, r);
          break;
        case 22:
          r.memoizedState === null && Ii(o, r, a), fa(r, r.return);
          break;
        case 30:
          Ii(o, r, a), fa(r, r.return);
          break;
        case 7:
          fa(r, r.return);
        default:
          Ii(o, r, a);
      }
      e = e.sibling;
    }
  }
  function Yc(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && sr(a));
  }
  function Gc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && sr(t));
  }
  function Ri(t, e, a, n) {
    var o = (a & 335544064) === a;
    if (e.subtreeFlags & (o ? 10262 : 10256)) for (e = e.child; e !== null; ) zd(t, e, a, n), e = e.sibling;
    else o && dd(e);
  }
  function zd(t, e, a, n) {
    var o = (a & 335544064) === a;
    o && e.alternate === null && e.return !== null && e.return.alternate !== null && Vs(e);
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ri(t, e, a, n), r & 2048 && xr(9, e);
        break;
      case 1:
        Ri(t, e, a, n);
        break;
      case 3:
        Ri(t, e, a, n), o && Hc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), r & 2048 && (r = null, e.alternate !== null && (r = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== r && (e.refCount++, r != null && sr(r)));
        break;
      case 12:
        if (r & 2048) {
          Ri(t, e, a, n), r = e.stateNode;
          try {
            var c = e.memoizedProps, h = c.id, p = c.onPostCommit;
            typeof p == "function" && p(h, e.alternate === null ? "mount" : "update", r.passiveEffectDuration, -0);
          } catch (T) {
            ee(e, e.return, T);
          }
        } else Ri(t, e, a, n);
        break;
      case 31:
        Ri(t, e, a, n);
        break;
      case 13:
        Ri(t, e, a, n);
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, h = e.alternate, e.memoizedState !== null ? (o && h !== null && h.memoizedState === null && Vs(h), c._visibility & 2 ? Ri(t, e, a, n) : Tr(t, e)) : (o && h !== null && h.memoizedState !== null && Vs(e), c._visibility & 2 ? Ri(t, e, a, n) : (c._visibility |= 2, mo(t, e, a, n, (e.subtreeFlags & 10256) !== 0 || !1))), r & 2048 && Yc(h, e);
        break;
      case 24:
        Ri(t, e, a, n), r & 2048 && Gc(e.alternate, e);
        break;
      case 30:
        o && (r = e.alternate, r !== null && (da(r.child, !0), da(e.child, !0))), Ri(t, e, a, n);
        break;
      default:
        Ri(t, e, a, n);
    }
  }
  function mo(t, e, a, n, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var r = t, c = e, h = a, p = n, T = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          mo(r, c, h, p, o), xr(8, c);
          break;
        case 23:
          break;
        case 22:
          var A = c.stateNode;
          c.memoizedState !== null ? A._visibility & 2 ? mo(r, c, h, p, o) : Tr(r, c) : (A._visibility |= 2, mo(r, c, h, p, o)), o && T & 2048 && Yc(c.alternate, c);
          break;
        case 24:
          mo(r, c, h, p, o), o && T & 2048 && Gc(c.alternate, c);
          break;
        default:
          mo(r, c, h, p, o);
      }
      e = e.sibling;
    }
  }
  function Tr(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var a = t, n = e, o = n.flags;
      switch (n.tag) {
        case 22:
          Tr(a, n), o & 2048 && Yc(n.alternate, n);
          break;
        case 24:
          Tr(a, n), o & 2048 && Gc(n.alternate, n);
          break;
        default:
          Tr(a, n);
      }
      e = e.sibling;
    }
  }
  var xl = 8192;
  function wl(t, e, a) {
    if (t.subtreeFlags & xl) for (t = t.child; t !== null; ) Nd(t, e, a), t = t.sibling;
  }
  function Nd(t, e, a) {
    switch (t.tag) {
      case 26:
        wl(t, e, a), t.flags & xl && (t.memoizedState !== null ? jv(a, Fi, t.memoizedState, t.memoizedProps) : (t = t.stateNode, (e & 335544128) === e && Dm(a, t)));
        break;
      case 5:
        wl(t, e, a), t.flags & xl && (t = t.stateNode, (e & 335544128) === e && Dm(a, t));
        break;
      case 3:
      case 4:
        var n = Fi;
        Fi = Lr(t.stateNode.containerInfo), wl(t, e, a), Fi = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = xl, xl = 16777216, wl(t, e, a), xl = n) : wl(t, e, a));
        break;
      case 30:
        if ((t.flags & xl) !== 0 && (n = t.memoizedProps.name, n != null && n !== "auto")) {
          var o = t.stateNode;
          o.paired = null, Ti === null && (Ti = /* @__PURE__ */ new Map()), Ti.set(n, o);
        }
        wl(t, e, a);
        break;
      default:
        wl(t, e, a);
    }
  }
  function Ed(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function zr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var n = e[a];
        ke = n, Md(n, t);
      }
      Ed(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Cd(t), t = t.sibling;
  }
  function Cd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zr(t), t.flags & 2048 && yn(9, t, t.return);
        break;
      case 3:
        zr(t);
        break;
      case 12:
        zr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Js(t)) : zr(t);
        break;
      default:
        zr(t);
    }
  }
  function Js(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var n = e[a];
        ke = n, Md(n, t);
      }
      Ed(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          yn(8, e, e.return), Js(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, Js(e));
          break;
        default:
          Js(e);
      }
      t = t.sibling;
    }
  }
  function Md(t, e) {
    for (; ke !== null; ) {
      var a = ke;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          yn(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          sr(a.memoizedState.cache);
      }
      if (n = a.child, n !== null) n.return = a, ke = n;
      else t: for (a = t; ke !== null; ) {
        n = ke;
        var o = n.sibling, r = n.return;
        if (_d(n), n === a) {
          ke = null;
          break t;
        }
        if (o !== null) {
          o.return = r, ke = o;
          break t;
        }
        ke = r;
      }
    }
  }
  var A0 = {
    getCacheForType: function(t) {
      var e = Be(Te), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return Be(Te).controller.signal;
    }
  }, O0 = typeof WeakMap == "function" ? WeakMap : Map, Qt = 0, se = null, Ht = null, Yt = 0, te = 0, zi = null, xn = !1, vo = !1, Pc = !1, Ba = 0, ye = 0, wn = 0, Sl = 0, Fs = 0, Ni = 0, po = 0, Nr = null, fi = null, Vc = !1, Is = 0, Ad = 0, Ws = 1 / 0, $s = null, Sn = null, pe = 0, Wi = null, Tl = null, ga = 0, Xc = 0, Qc = null, Od = null, go = null, _o = null, yo = null, Er = 0, tu = null;
  function Bi() {
    return (Qt & 2) !== 0 && Yt !== 0 ? Yt & -Yt : K.T !== null ? nf() : Jr();
  }
  function Ld() {
    if (Ni === 0) if ((Yt & 536870912) === 0 || Bt) {
      var t = Bn;
      Bn <<= 1, (Bn & 3932160) === 0 && (Bn = 262144), Ni = t;
    } else Ni = 536870912;
    return t = Ze.current, t !== null && (t.flags |= 32), Ni;
  }
  function bo(t, e) {
    if (e != null) {
      var a = t.stateNode, n = a.ref;
      n === null && (n = a.ref = mm(Li(t.memoizedProps, a))), _o === null && (_o = []), _o.push(e.bind(null, n));
    }
  }
  function hi(t, e, a) {
    (t === se && (te === 2 || te === 9) || t.cancelPendingCommit !== null) && (xo(t, 0), Tn(t, Yt, Ni, !1)), jl(t, a), ((Qt & 2) === 0 || t !== se) && (t === se && ((Qt & 2) === 0 && (Sl |= a), ye === 4 && Tn(t, Yt, Ni, !1)), Za(t));
  }
  function jd(t, e, a) {
    if ((Qt & 6) !== 0) throw Error(_(327));
    var n = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ga(t, e), o = n ? k0(t, e) : Jc(t, e, !0), r = n;
    do {
      if (o === 0) {
        vo && !n && Tn(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, r && !L0(a)) {
          o = Jc(t, e, !1), r = !1;
          continue;
        }
        if (o === 2) {
          if (r = e, t.errorRecoveryDisabledLanes & r) var c = 0;
          else c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            t: {
              var h = t;
              o = Nr;
              var p = h.current.memoizedState.isDehydrated;
              if (p && (xo(h, c).flags |= 256), c = Jc(h, c, !1), c !== 2 && c !== 6) {
                if (Pc && !p) {
                  h.errorRecoveryDisabledLanes |= r, Sl |= r, o = 4;
                  break t;
                }
                r = fi, fi = o, r !== null && (fi === null ? fi = r : fi.push.apply(fi, r));
              }
              o = c;
            }
            if (r = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          xo(t, 0), Tn(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, r = o, r) {
            case 0:
            case 1:
              throw Error(_(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e) break;
            case 6:
              Tn(n, e, Ni, !xn);
              break t;
            case 2:
              fi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(_(329));
          }
          if ((e & 62914560) === e && (o = Is + 300 - Ye(), 10 < o)) {
            if (Tn(n, e, Ni, !xn), Ya(n, 0, !0) !== 0) break t;
            ga = e, n.timeoutHandle = mf(kd.bind(null, n, a, fi, $s, Vc, e, Ni, Sl, po, xn, r, "Throttled", -0, 0), o);
            break t;
          }
          kd(n, a, fi, $s, Vc, e, Ni, Sl, po, xn, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Za(t);
  }
  function kd(t, e, a, n, o, r, c, h, p, T, A, D, w, M) {
    t.timeoutHandle = -1;
    var Q = e.subtreeFlags, nt = (r & 335544064) === r;
    if (D = null, (nt || Q & 8192 || (Q & 16785408) === 16785408) && (D = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: ii
    }, Ti = null, Nd(e, r, D), nt && (Q = D, nt = t.containerInfo, nt = (nt.nodeType === 9 ? nt : nt.ownerDocument).__reactViewTransition, nt != null && (Q.count++, Q.waitingForViewTransition = !0, Q = Dr.bind(Q), nt.finished.then(Q, Q))), Q = (r & 62914560) === r ? Is - Ye() : (r & 4194048) === r ? Ad - Ye() : 0, Q = kv(D, Q), Q !== null)) {
      ga = r, t.cancelPendingCommit = Q(Yd.bind(null, t, e, r, a, n, o, c, h, p, T, A, D, null, w, M)), Tn(t, r, c, !T);
      return;
    }
    Yd(t, e, r, a, n, o, c, h, p, T, A, D);
  }
  function L0(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null))) for (var n = 0; n < a.length; n++) {
        var o = a[n], r = o.getSnapshot;
        o = o.value;
        try {
          if (!Ae(r(), o)) return !1;
        } catch {
          return !1;
        }
      }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null) a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Tn(t, e, a, n) {
    e = wa(t, e), e &= ~Fs, e &= ~Sl, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var r = 31 - Xe(o), c = 1 << r;
      n[r] = -1, o &= ~c;
    }
    a !== 0 && Zo(t, a, e);
  }
  function eu() {
    return (Qt & 6) === 0 ? (Cr(0, !1), !1) : !0;
  }
  function Kc() {
    if (Ht !== null) {
      if (te === 0) var t = Ht.return;
      else t = Ht, Oa = ul = null, ic(t), oo = null, fr = 0, t = Ht;
      for (; t !== null; ) ad(t.alternate, t), t = t.return;
      Ht = null;
    }
  }
  function xo(t, e) {
    var a = t.timeoutHandle;
    return a !== -1 && (t.timeoutHandle = -1, tv(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), ga = 0, Kc(), se = t, Ht = a = Z(t.current, null), Yt = e, te = 0, zi = null, xn = !1, vo = Ga(t, e), Pc = !1, po = Ni = Fs = Sl = wn = ye = 0, fi = Nr = null, Vc = !1, Ba = wa(t, e), eo(), a;
  }
  function Dd(t, e) {
    At = null, K.H = ks, e === lo || e === bs ? (e = Vf(), te = 3) : e === Gu ? (e = Vf(), te = 4) : te = e === gc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, zi = e, Ht === null && (ye = 1, Ds(t, Ge(e, t.current)));
  }
  function Rd() {
    var t = Ze.current;
    return t === null ? !0 : (Yt & 4194048) === Yt ? Pe === null : (Yt & 62914560) === Yt || (Yt & 536870912) !== 0 ? t === Pe : !1;
  }
  function Bd() {
    var t = K.H;
    return K.H = ks, t === null ? ks : t;
  }
  function Zd() {
    var t = K.A;
    return K.A = A0, t;
  }
  function iu() {
    ye = 4, xn || (Yt & 4194048) !== Yt && Ze.current !== null || (vo = !0), (wn & 134217727) === 0 && (Sl & 134217727) === 0 || se === null || Tn(se, Yt, Ni, !1);
  }
  function Jc(t, e, a) {
    var n = Qt;
    Qt |= 2;
    var o = Bd(), r = Zd();
    (se !== t || Yt !== e) && ($s = null, xo(t, e)), e = !1;
    var c = ye;
    t: do
      try {
        if (te !== 0 && Ht !== null) {
          var h = Ht, p = zi;
          switch (te) {
            case 8:
              Kc(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ze.current === null && (e = !0);
              var T = te;
              if (te = 0, zi = null, wo(t, h, p, T), a && vo) {
                c = 0;
                break t;
              }
              break;
            default:
              T = te, te = 0, zi = null, wo(t, h, p, T);
          }
        }
        j0(), c = ye;
        break;
      } catch (A) {
        Dd(t, A);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Oa = ul = null, Qt = n, K.H = o, K.A = r, Ht === null && (se = null, Yt = 0, eo()), c;
  }
  function j0() {
    for (; Ht !== null; ) Hd(Ht);
  }
  function k0(t, e) {
    var a = Qt;
    Qt |= 2;
    var n = Bd(), o = Zd();
    se !== t || Yt !== e ? ($s = null, Ws = Ye() + 500, xo(t, e)) : vo = Ga(t, e);
    t: do
      try {
        if (te !== 0 && Ht !== null) {
          e = Ht;
          var r = zi;
          e: switch (te) {
            case 1:
              te = 0, zi = null, wo(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Gf(r)) {
                te = 0, zi = null, Ud(e);
                break;
              }
              e = function() {
                te !== 2 && te !== 9 || se !== t || (te = 7), Za(t);
              }, r.then(e, e);
              break t;
            case 3:
              te = 7;
              break t;
            case 4:
              te = 5;
              break t;
            case 7:
              Gf(r) ? (te = 0, zi = null, Ud(e)) : (te = 0, zi = null, wo(t, e, r, 7));
              break;
            case 5:
              var c = null;
              switch (Ht.tag) {
                case 26:
                  c = Ht.memoizedState;
                case 5:
                case 27:
                  var h = Ht;
                  if (c ? jm(c) : h.stateNode.complete) {
                    te = 0, zi = null;
                    var p = h.sibling;
                    if (p !== null) Ht = p;
                    else {
                      var T = h.return;
                      T !== null ? (Ht = T, au(T)) : Ht = null;
                    }
                    break e;
                  }
              }
              te = 0, zi = null, wo(t, e, r, 5);
              break;
            case 6:
              te = 0, zi = null, wo(t, e, r, 6);
              break;
            case 8:
              Kc(), ye = 6;
              break t;
            default:
              throw Error(_(462));
          }
        }
        D0();
        break;
      } catch (A) {
        Dd(t, A);
      }
    while (!0);
    return Oa = ul = null, K.H = n, K.A = o, Qt = a, Ht !== null ? 0 : (se = null, Yt = 0, eo(), ye);
  }
  function D0() {
    for (; Ht !== null && !yu(); ) Hd(Ht);
  }
  function Hd(t) {
    var e = ed(t.alternate, t, Ba);
    t.memoizedProps = t.pendingProps, e === null ? au(t) : Ht = e;
  }
  function Ud(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Kh(a, e, e.pendingProps, e.type, void 0, Yt);
        break;
      case 11:
        e = Kh(a, e, e.pendingProps, e.type.render, e.ref, Yt);
        break;
      case 5:
        ic(e);
        var n = e;
        n === Le && (Bt ? (vs(n), n.tag === 5 && n.stateNode != null && (ce = n.stateNode)) : (vs(n), Bt = !0));
      default:
        ad(a, e), e = Ht = W(e, Ba), e = ed(a, e, Ba);
    }
    t.memoizedProps = t.pendingProps, e === null ? au(t) : Ht = e;
  }
  function wo(t, e, a, n) {
    Oa = ul = null, ic(e), oo = null, fr = 0;
    var o = e.return;
    try {
      if (w0(t, o, e, a, Yt)) {
        ye = 1, Ds(t, Ge(a, t.current)), Ht = null;
        return;
      }
    } catch (r) {
      if (o !== null) throw Ht = o, r;
      ye = 1, Ds(t, Ge(a, t.current)), Ht = null;
      return;
    }
    e.flags & 32768 ? (Bt || n === 1 ? t = !0 : vo || (Yt & 536870912) !== 0 ? t = !1 : (xn = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ze.current, n !== null && n.tag === 13 && (n.flags |= 16384))), qd(e, t)) : au(e);
  }
  function au(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        qd(e, xn);
        return;
      }
      t = e.return;
      var a = N0(e.alternate, e, Ba);
      if (a !== null) {
        Ht = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        Ht = e;
        return;
      }
      Ht = e = t;
    } while (e !== null);
    ye === 0 && (ye = 5);
  }
  function qd(t, e) {
    do {
      var a = E0(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, Ht = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        Ht = t;
        return;
      }
      Ht = t = a;
    } while (t !== null);
    ye = 6, Ht = null;
  }
  function Yd(t, e, a, n, o, r, c, h, p, T, A, D) {
    t.cancelPendingCommit = null;
    do
      nu();
    while (pe !== 0);
    if ((Qt & 6) !== 0) throw Error(_(327));
    if (e !== null) {
      if (e === t.current) throw Error(_(177));
      t === se && (Ht = se = null, Yt = 0), Tl = e, Wi = t, ga = a, Qc = o, Od = n, R0(t, e, a, c, h, p, D);
    }
  }
  function R0(t, e, a, n, o, r, c) {
    var h = e.lanes | e.childLanes;
    if (Xc = h, h |= to, zu(t, a, h, n, o, r), _o = null, (a & 335544064) === a ? (yo = r0(t), n = 10262) : (yo = null, n = 10256), (e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Y0(Ll, function() {
      return $c(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Gs = !1, n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
      n = K.T, K.T = null, o = ht.p, ht.p = 2, r = Qt, Qt |= 4;
      try {
        C0(t, e, a);
      } finally {
        Qt = r, ht.p = o, K.T = n;
      }
    }
    pe = 1, Gs ? go = ov(c, t.containerInfo, yo, Fc, Ic, Z0, Wc, $c, B0, null, null) : (Fc(), Ic(), Wc());
  }
  function B0(t) {
    if (pe !== 0) {
      var e = Wi.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Z0() {
    pe === 3 && (pe = 0, Td(Tl, Wi), pe = 4);
  }
  function Fc() {
    if (pe === 1) {
      pe = 0;
      var t = Wi, e = Tl, a = ga, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = K.T, K.T = null;
        var o = ht.p;
        ht.p = 2;
        var r = Qt;
        Qt |= 4;
        try {
          Sr = Xs = !1, wd(e, t, a), a = ff;
          var c = yi(t.containerInfo), h = a.focusedElem, p = a.selectionRange;
          if (c !== h && h && h.ownerDocument && hs(h.ownerDocument.documentElement, h)) {
            if (p !== null && nn(h)) {
              var T = p.start, A = p.end;
              if (A === void 0 && (A = T), "selectionStart" in h) h.selectionStart = T, h.selectionEnd = Math.min(A, h.value.length);
              else {
                var D = h.ownerDocument || document, w = D && D.defaultView || window;
                if (w.getSelection) {
                  var M = w.getSelection(), Q = h.textContent.length, nt = Math.min(p.start, Q), Ot = p.end === void 0 ? nt : Math.min(p.end, Q);
                  !M.extend && nt > Ot && (c = Ot, Ot = nt, nt = c);
                  var S = Wo(h, nt), y = Wo(h, Ot);
                  if (S && y && (M.rangeCount !== 1 || M.anchorNode !== S.node || M.anchorOffset !== S.offset || M.focusNode !== y.node || M.focusOffset !== y.offset)) {
                    var E = D.createRange();
                    E.setStart(S.node, S.offset), M.removeAllRanges(), nt > Ot ? (M.addRange(E), M.extend(y.node, y.offset)) : (E.setEnd(y.node, y.offset), M.addRange(E));
                  }
                }
              }
            }
            for (D = [], M = h; M = M.parentNode; ) M.nodeType === 1 && D.push({
              element: M,
              left: M.scrollLeft,
              top: M.scrollTop
            });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
              var k = D[h];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          Ao = !!cf, ff = cf = null;
        } finally {
          Qt = r, ht.p = o, K.T = n;
        }
      }
      t.current = e, pe = 2;
    }
  }
  function Ic() {
    if (pe === 2) {
      pe = 0;
      var t = Wi, e = Tl, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = K.T, K.T = null;
        var n = ht.p;
        ht.p = 2;
        var o = Qt;
        Qt |= 4;
        try {
          pd(t, e.alternate, e);
        } finally {
          Qt = o, ht.p = n, K.T = a;
        }
      }
      pe = 3;
    }
  }
  function Wc() {
    if (pe === 4 || pe === 3) {
      pe = 0;
      var t = go;
      go = null, bu();
      var e = Wi, a = Tl, n = ga, o = Od, r = (n & 335544064) === n ? 10262 : 10256;
      if ((a.subtreeFlags & r) !== 0 || (a.flags & r) !== 0 ? pe = 5 : (pe = 0, Tl = Wi = null, Gd(e, e.pendingLanes)), r = e.pendingLanes, r === 0 && (Sn = null), Ho(n), a = a.stateNode, Ve && typeof Ve.onCommitFiberRoot == "function") try {
        Ve.onCommitFiberRoot(xa, a, void 0, (a.current.flags & 128) === 128);
      } catch {
      }
      if (o !== null) {
        a = K.T, r = ht.p, ht.p = 2, K.T = null;
        try {
          for (var c = e.onRecoverableError, h = 0; h < o.length; h++) {
            var p = o[h];
            c(p.value, { componentStack: p.stack });
          }
        } finally {
          K.T = a, ht.p = r;
        }
      }
      if (o = _o, c = yo, yo = null, o !== null && (_o = null, c === null && (c = []), t !== null)) for (p = 0; p < o.length; p++) a = (0, o[p])(c), a !== void 0 && t.finished.finally(a);
      (ga & 3) !== 0 && nu(), Za(e), r = e.pendingLanes, (n & 261930) !== 0 && (r & 42) !== 0 ? e === tu ? Er++ : (Er = 0, tu = e) : (Er = 0, tu = null), Cr(0, !1);
    }
  }
  function Gd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, sr(e)));
  }
  function nu() {
    return go !== null && (go.skipTransition(), go = null), Fc(), Ic(), Wc(), $c();
  }
  function $c() {
    if (pe !== 5) return !1;
    var t = Wi, e = Xc;
    Xc = 0;
    var a = Ho(ga), n = K.T, o = ht.p;
    try {
      ht.p = 32 > a ? 32 : a, K.T = null, a = Qc, Qc = null;
      var r = Wi, c = ga;
      if (pe = 0, Tl = Wi = null, ga = 0, (Qt & 6) !== 0) throw Error(_(331));
      var h = Qt;
      if (Qt |= 4, Cd(r.current), zd(r, r.current, c, a), Qt = h, Cr(0, !1), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
        Ve.onPostCommitFiberRoot(xa, r);
      } catch {
      }
      return !0;
    } finally {
      ht.p = o, K.T = n, Gd(t, e);
    }
  }
  function Pd(t, e, a) {
    e = Ge(a, e), e = pc(t.stateNode, e, 2), t = _l(t, e, 2), t !== null && (jl(t, 2), Za(t));
  }
  function ee(t, e, a) {
    if (t.tag === 3) Pd(t, t, a);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Pd(e, t, a);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Sn === null || !Sn.has(n))) {
          t = Ge(a, t), a = Uh(2), n = _l(e, a, 2), n !== null && (qh(a, n, e, t), jl(n, 2), Za(n));
          break;
        }
      }
      e = e.return;
    }
  }
  function tf(t, e, a) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new O0();
      var o = /* @__PURE__ */ new Set();
      n.set(e, o);
    } else o = n.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(e, o));
    o.has(a) || (Pc = !0, o.add(a), t = H0.bind(null, t, e, a), e.then(t, t));
  }
  function H0(t, e, a) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, se === t && (Yt & a) === a && ((ye === 4 || ye === 3 && (Yt & 62914560) === Yt && 300 > Ye() - Is) && (Qt & 2) === 0 ? xo(t, 0) : Fs |= a, po === Yt && (po = 0)), Za(t);
  }
  function Vd(t, e) {
    e === 0 && (e = Xr()), t = s(t, e), t !== null && (jl(t, e), Za(t));
  }
  function U0(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Vd(t, a);
  }
  function q0(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, o = t.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(_(314));
    }
    n !== null && n.delete(e), Vd(t, a);
  }
  function Y0(t, e) {
    return Do(t, e);
  }
  var So = null, To = null, ef = !1, lu = !1, af = !1, zn = 0;
  function Za(t) {
    t !== To && t.next === null && (To === null ? So = To = t : To = To.next = t), lu = !0, ef || (ef = !0, P0());
  }
  function Cr(t, e) {
    if (!af && lu) {
      af = !0;
      do
        for (var a = !1, n = So; n !== null; ) {
          if (!e) if (t !== 0) {
            var o = n.pendingLanes;
            if (o === 0) var r = 0;
            else {
              var c = n.suspendedLanes, h = n.pingedLanes;
              r = (1 << 31 - Xe(42 | t) + 1) - 1, r &= o & ~(c & ~h), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (a = !0, Jd(n, r));
          } else r = Yt, r = Ya(n, n === se ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || Ga(n, r) || (a = !0, Jd(n, r));
          n = n.next;
        }
      while (a);
      af = !1;
    }
  }
  function G0() {
    Xd();
  }
  function Xd() {
    lu = ef = !1;
    var t = 0;
    zn !== 0 && $0() && (t = zn);
    for (var e = Ye(), a = null, n = So; n !== null; ) {
      var o = n.next, r = Qd(n, e);
      r === 0 ? (n.next = null, a === null ? So = o : a.next = o, o === null && (To = a)) : (a = n, (t !== 0 || (r & 3) !== 0) && (lu = !0)), n = o;
    }
    pe !== 0 && pe !== 5 || Cr(t, !1), zn !== 0 && (zn = 0);
  }
  function Qd(t, e) {
    for (var a = t.suspendedLanes, n = t.pingedLanes, o = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
      var c = 31 - Xe(r), h = 1 << c, p = o[c];
      p === -1 ? ((h & a) === 0 || (h & n) !== 0) && (o[c] = Vr(h, e)) : p <= e && (t.expiredLanes |= h), r &= ~h;
    }
    if (e = se, a = Yt, a = Ya(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n = t.callbackNode, a === 0 || t === e && (te === 2 || te === 9) || t.cancelPendingCommit !== null) return n !== null && n !== null && ba(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Ga(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (n !== null && ba(n), Ho(a)) {
        case 2:
        case 8:
          a = Gr;
          break;
        case 32:
          a = Ll;
          break;
        case 268435456:
          a = Pr;
          break;
        default:
          a = Ll;
      }
      return n = Kd.bind(null, t), a = Do(a, n), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return n !== null && n !== null && ba(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Kd(t, e) {
    if (pe !== 0 && pe !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (nu() && t.callbackNode !== a) return null;
    var n = Yt;
    return n = Ya(t, t === se ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n === 0 ? null : (jd(t, n, e), Qd(t, Ye()), t.callbackNode != null && t.callbackNode === a ? Kd.bind(null, t) : null);
  }
  function Jd(t, e) {
    if (nu()) return null;
    jd(t, e, !0);
  }
  function P0() {
    ev(function() {
      (Qt & 6) !== 0 ? Do(Ro, G0) : Xd();
    });
  }
  function nf() {
    if (zn === 0) {
      var t = hl;
      t === 0 && (t = Rn, Rn <<= 1, (Rn & 261888) === 0 && (Rn = 256)), zn = t;
    }
    return zn;
  }
  function Fd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Xn(t);
  }
  function V0(t, e, a, n, o) {
    if (e === "submit" && a && a.stateNode === o) {
      var r = Fd((o[we] || null).action), c = n.submitter;
      c && (e = (e = c[we] || null) ? Fd(e.formAction) : c.getAttribute("formAction"), e !== null && (r = e, c = null));
      var h = new Fa("action", "action", null, n, o);
      t.push({
        event: h,
        listeners: [{
          instance: null,
          listener: function() {
            if (n.defaultPrevented) {
              if (zn !== 0) {
                var p = new FormData(o, c);
                fc(a, {
                  pending: !0,
                  data: p,
                  method: o.method,
                  action: r
                }, null, p);
              }
            } else typeof r == "function" && (h.preventDefault(), p = new FormData(o, c), fc(a, {
              pending: !0,
              data: p,
              method: o.method,
              action: r
            }, r, p));
          },
          currentTarget: o
        }]
      });
    }
  }
  for (var lf = 0; lf < $l.length; lf++) {
    var of = $l[lf];
    xi(of.toLowerCase(), "on" + (of[0].toUpperCase() + of.slice(1)));
  }
  xi(Oi, "onAnimationEnd"), xi(ir, "onAnimationIteration"), xi(ar, "onAnimationStart"), xi("dblclick", "onDoubleClick"), xi("focusin", "onFocus"), xi("focusout", "onBlur"), xi(ol, "onTransitionRun"), xi(ku, "onTransitionStart"), xi(Wl, "onTransitionCancel"), xi(rn, "onTransitionEnd"), re("onMouseEnter", ["mouseout", "mouseover"]), re("onMouseLeave", ["mouseout", "mouseover"]), re("onPointerEnter", ["pointerout", "pointerover"]), re("onPointerLeave", ["pointerout", "pointerover"]), Ke("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ke("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ke("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ke("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ke("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ke("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), X0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mr));
  function Id(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var n = t[a], o = n.event;
      n = n.listeners;
      t: {
        var r = void 0;
        if (e) for (var c = n.length - 1; 0 <= c; c--) {
          var h = n[c], p = h.instance, T = h.currentTarget;
          if (h = h.listener, p !== r && o.isPropagationStopped()) break t;
          r = h, o.currentTarget = T;
          try {
            r(o);
          } catch (A) {
            rl(A);
          }
          o.currentTarget = null, r = p;
        }
        else for (c = 0; c < n.length; c++) {
          if (h = n[c], p = h.instance, T = h.currentTarget, h = h.listener, p !== r && o.isPropagationStopped()) break t;
          r = h, o.currentTarget = T;
          try {
            r(o);
          } catch (A) {
            rl(A);
          }
          o.currentTarget = null, r = p;
        }
      }
    }
  }
  function Ut(t, e) {
    var a = e[Uo];
    a === void 0 && (a = e[Uo] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    a.has(n) || ($d(e, t, 2, !1), a.add(n));
  }
  function rf(t, e, a) {
    var n = 0;
    e && (n |= 4), $d(a, t, n, e);
  }
  var ou = "_reactListening" + Math.random().toString(36).slice(2);
  function Wd(t) {
    if (!t[ou]) {
      t[ou] = !0, Ir.forEach(function(a) {
        a !== "selectionchange" && (X0.has(a) || rf(a, !1, t), rf(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ou] || (e[ou] = !0, rf("selectionchange", !1, e));
    }
  }
  function $d(t, e, a, n) {
    switch (qm(e)) {
      case 2:
        var o = Uv;
        break;
      case 8:
        o = qv;
        break;
      default:
        o = Ef;
    }
    a = o.bind(null, e, a, t), o = void 0, !Vo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), n ? o !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: o
    }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, { passive: o }) : t.addEventListener(e, a, !1);
  }
  function sf(t, e, a, n, o) {
    var r = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null) t: for (; ; ) {
      if (n === null) return;
      var c = n.tag;
      if (c === 3 || c === 4) {
        var h = n.stateNode.containerInfo;
        if (h === o) break;
        if (c === 4) for (c = n.return; c !== null; ) {
          var p = c.tag;
          if ((p === 3 || p === 4) && c.stateNode.containerInfo === o) return;
          c = c.return;
        }
        for (; h !== null; ) {
          if (c = Vi(h), c === null) return;
          if (p = c.tag, p === 5 || p === 6 || p === 26 || p === 27) {
            n = r = c;
            continue t;
          }
          h = h.parentNode;
        }
      }
      n = n.return;
    }
    Po(function() {
      var T = r, A = Bl(a), D = [];
      t: {
        var w = nr.get(t);
        if (w !== void 0) {
          var M = Fa, Q = t;
          switch (t) {
            case "keypress":
              if (Hl(a) === 0) break t;
            case "keydown":
            case "keyup":
              M = Ko;
              break;
            case "focusin":
              Q = "focus", M = ql;
              break;
            case "focusout":
              Q = "blur", M = ql;
              break;
            case "beforeblur":
            case "afterblur":
              M = ql;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = is;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = as;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Cu;
              break;
            case Oi:
            case ir:
            case ar:
              M = Yl;
              break;
            case rn:
              M = rs;
              break;
            case "scroll":
            case "scrollend":
              M = es;
              break;
            case "wheel":
              M = Mu;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Na;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Gl;
              break;
            case "submit":
              M = Eu;
              break;
            case "toggle":
            case "beforetoggle":
              M = _i;
          }
          var nt = (e & 4) !== 0, Ot = !nt && (t === "scroll" || t === "scrollend"), S = nt ? w !== null ? w + "Capture" : null : w;
          nt = [];
          for (var y = T, E; y !== null; ) {
            var k = y;
            if (E = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || E === null || S === null || (k = Qn(y, S), k != null && nt.push(Ar(y, k, E))), Ot) break;
            y = y.return;
          }
          0 < nt.length && (w = new M(w, Q, null, a, A), D.push({
            event: w,
            listeners: nt
          }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (M = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout", M && a !== Go && (Q = a.relatedTarget || a.fromElement) && (Vi(Q) || Q[Pa])) break t;
          (w || M) && (Q = A.window === A ? A : (M = A.ownerDocument) ? M.defaultView || M.parentWindow : window, w ? (M = a.relatedTarget || a.toElement, w = T, M = M ? Vi(M) : null, M !== null && (Ot = tt(M), nt = M.tag, M !== Ot || nt !== 5 && nt !== 27 && nt !== 6) && (M = null)) : (w = null, M = T), w !== M && (nt = is, k = "onMouseLeave", S = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (nt = Gl, k = "onPointerLeave", S = "onPointerEnter", y = "pointer"), Ot = w == null ? Q : oe(w), E = M == null ? Q : oe(M), Q = new nt(k, y + "leave", w, a, A), Q.target = Ot, Q.relatedTarget = E, k = null, Vi(A) === T && (nt = new nt(S, y + "enter", M, a, A), nt.target = E, nt.relatedTarget = Ot, k = nt), Ot = k, nt = w && M ? Kt(w, M, Q0) : null, w !== null && tm(D, Q, w, nt, !1), M !== null && Ot !== null && tm(D, Ot, M, nt, !0)));
        }
        t: {
          if (w = T ? oe(T) : window, M = w.nodeName && w.nodeName.toLowerCase(), M === "select" || M === "input" && w.type === "file") var et = Ai;
          else if (Vl(w)) if (el) et = cs;
          else {
            et = Jl;
            var Gt = an;
          }
          else M = w.nodeName, !M || M.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? T && Rl(T.elementType) && (et = Ai) : et = Io;
          if (et && (et = et(t, T))) {
            us(D, et, a, A);
            break t;
          }
          Gt && Gt(t, w, T);
        }
        switch (Gt = T ? oe(T) : window, t) {
          case "focusin":
            (Vl(Gt) || Gt.contentEditable === "true") && (Ki = Gt, $o = T, ln = null);
            break;
          case "focusout":
            ln = $o = Ki = null;
            break;
          case "mousedown":
            tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tr = !1, on(D, a, A);
            break;
          case "selectionchange":
            if (ju) break;
          case "keydown":
          case "keyup":
            on(D, a, A);
        }
        var ct;
        if (Jo) t: {
          switch (t) {
            case "compositionstart":
              var bt = "onCompositionStart";
              break t;
            case "compositionend":
              bt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              bt = "onCompositionUpdate";
              break t;
          }
          bt = void 0;
        }
        else tn ? Fo(t, a) && (bt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (bt = "onCompositionStart");
        bt && (Ea && a.locale !== "ko" && (tn || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && tn && (ct = gi()) : (ua = A, Kn = "value" in ua ? ua.value : ua.textContent, tn = !0)), Gt = ru(T, bt), 0 < Gt.length && (bt = new ns(bt, t, null, a, A), D.push({
          event: bt,
          listeners: Gt
        }), ct ? bt.data = ct : (ct = $n(a), ct !== null && (bt.data = ct)))), (ct = Au ? ca(t, a) : Pl(t, a)) && (bt = ru(T, "onBeforeInput"), 0 < bt.length && (Gt = new ns("onBeforeInput", "beforeinput", null, a, A), D.push({
          event: Gt,
          listeners: bt
        }), Gt.data = ct)), V0(D, t, T, a, A);
      }
      Id(D, e);
    });
  }
  function Ar(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function ru(t, e) {
    for (var a = e + "Capture", n = []; t !== null; ) {
      var o = t, r = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || r === null || (o = Qn(t, a), o != null && n.unshift(Ar(t, o, r)), o = Qn(t, e), o != null && n.push(Ar(t, o, r))), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Q0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function tm(t, e, a, n, o) {
    for (var r = e._reactName, c = []; a !== null && a !== n; ) {
      var h = a, p = h.alternate, T = h.stateNode;
      if (h = h.tag, p !== null && p === n) break;
      h !== 5 && h !== 26 && h !== 27 || T === null || (p = T, o ? (T = Qn(a, r), T != null && c.unshift(Ar(a, T, p))) : o || (T = Qn(a, r), T != null && c.push(Ar(a, T, p)))), a = a.return;
    }
    c.length !== 0 && t.push({
      event: e,
      listeners: c
    });
  }
  var K0 = /\r\n?/g, J0 = /\u0000|\uFFFD/g;
  function em(t) {
    return (typeof t == "string" ? t : "" + t).replace(K0, `
`).replace(J0, "");
  }
  function im(t, e) {
    return e = em(e), em(t) === e;
  }
  function ie(t, e, a, n, o, r) {
    switch (a) {
      case "children":
        if (typeof n == "string") e === "body" || e === "textarea" && n === "" || ra(t, n);
        else if (typeof n == "number" || typeof n == "bigint") e !== "body" && ra(t, "" + n);
        else return;
        break;
      case "className":
        Ta(t, "class", n);
        break;
      case "tabIndex":
        Ta(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ta(t, a, n);
        break;
      case "style":
        sa(t, n, r);
        return;
      case "data":
        if (e !== "object") {
          Ta(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(a);
          break;
        }
        n = Xn(n), t.setAttribute(a, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof r == "function" && (a === "formAction" ? (e !== "input" && ie(t, e, "name", o.name, o, null), ie(t, e, "formEncType", o.formEncType, o, null), ie(t, e, "formMethod", o.formMethod, o, null), ie(t, e, "formTarget", o.formTarget, o, null)) : (ie(t, e, "encType", o.encType, o, null), ie(t, e, "method", o.method, o, null), ie(t, e, "target", o.target, o, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(a);
          break;
        }
        n = Xn(n), t.setAttribute(a, n);
        break;
      case "onClick":
        n != null && (t.onclick = ii);
        return;
      case "onScroll":
        n != null && Ut("scroll", t);
        return;
      case "onScrollEnd":
        n != null && Ut("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(_(61));
          if (a = n.__html, a != null) {
            if (o.children != null) throw Error(_(60));
            r?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = Xn(n), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(a, n) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(a, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(a, n) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(a, n) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(a) : t.setAttribute(a, n);
        break;
      case "popover":
        Ut("beforetoggle", t), Ut("toggle", t), Qa(t, "popover", n);
        break;
      case "xlinkActuate":
        vi(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        vi(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        vi(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        vi(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        vi(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        vi(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        vi(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        vi(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        vi(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        Qa(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") a = ts.get(a) || a, Qa(t, a, n);
        else return;
    }
    Zt = !0;
  }
  function uf(t, e, a, n, o, r) {
    switch (a) {
      case "style":
        sa(t, n, r);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(_(61));
          if (a = n.__html, a != null) {
            if (o.children != null) throw Error(_(60));
            r?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof n == "string") ra(t, n);
        else if (typeof n == "number" || typeof n == "bigint") ra(t, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && Ut("scroll", t);
        return;
      case "onScrollEnd":
        n != null && Ut("scrollend", t);
        return;
      case "onClick":
        n != null && (t.onclick = ii);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!qn.hasOwnProperty(a)) t: {
          if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), r = a.slice(2, o ? a.length - 7 : void 0), e = t[we] || null, e = e != null ? e[a] : null, typeof e == "function" && t.removeEventListener(r, e, o), typeof n == "function")) {
            typeof e != "function" && e !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(r, n, o);
            break t;
          }
          Zt = !0, a in t ? t[a] = n : n === !0 ? t.setAttribute(a, "") : Qa(t, a, n);
        }
        return;
    }
    Zt = !0;
  }
  function qe(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ut("error", t), Ut("load", t);
        var n = !1, o = !1, r;
        for (r in a) if (a.hasOwnProperty(r)) {
          var c = a[r];
          if (c != null) switch (r) {
            case "src":
              n = !0;
              break;
            case "srcSet":
              o = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(_(137, e));
            default:
              ie(t, e, r, c, a, null);
          }
        }
        o && ie(t, e, "srcSet", a.srcSet, a, null), n && ie(t, e, "src", a.src, a, null);
        return;
      case "input":
        Ut("invalid", t);
        var h = r = c = o = null, p = null, T = null;
        for (n in a) if (a.hasOwnProperty(n)) {
          var A = a[n];
          if (A != null) switch (n) {
            case "name":
              o = A;
              break;
            case "type":
              c = A;
              break;
            case "checked":
              p = A;
              break;
            case "defaultChecked":
              T = A;
              break;
            case "value":
              r = A;
              break;
            case "defaultValue":
              h = A;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(_(137, e));
              break;
            default:
              ie(t, e, n, A, a, null);
          }
        }
        Yo(t, r, h, p, T, c, o, !1);
        return;
      case "select":
        Ut("invalid", t), n = c = r = null;
        for (o in a) if (a.hasOwnProperty(o) && (h = a[o], h != null)) switch (o) {
          case "value":
            r = h;
            break;
          case "defaultValue":
            c = h;
            break;
          case "multiple":
            n = h;
          default:
            ie(t, e, o, h, a, null);
        }
        e = r, a = c, t.multiple = !!n, e != null ? la(t, !!n, e, !1) : a != null && la(t, !!n, a, !0);
        return;
      case "textarea":
        Ut("invalid", t), r = o = n = null;
        for (c in a) if (a.hasOwnProperty(c) && (h = a[c], h != null)) switch (c) {
          case "value":
            n = h;
            break;
          case "defaultValue":
            o = h;
            break;
          case "children":
            r = h;
            break;
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(_(91));
            break;
          default:
            ie(t, e, c, h, a, null);
        }
        oa(t, n, o, r);
        return;
      case "option":
        for (p in a) if (a.hasOwnProperty(p) && (n = a[p], n != null)) switch (p) {
          case "selected":
            t.selected = n && typeof n != "function" && typeof n != "symbol";
            break;
          default:
            ie(t, e, p, n, a, null);
        }
        return;
      case "dialog":
        Ut("beforetoggle", t), Ut("toggle", t), Ut("cancel", t), Ut("close", t);
        break;
      case "iframe":
      case "object":
        Ut("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Mr.length; n++) Ut(Mr[n], t);
        break;
      case "image":
        Ut("error", t), Ut("load", t);
        break;
      case "details":
        Ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ut("error", t), Ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in a) if (a.hasOwnProperty(T) && (n = a[T], n != null)) switch (T) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(_(137, e));
          default:
            ie(t, e, T, n, a, null);
        }
        return;
      default:
        if (Rl(e)) {
          for (A in a) a.hasOwnProperty(A) && (n = a[A], n !== void 0 && uf(t, e, A, n, a, void 0));
          return;
        }
    }
    for (h in a) a.hasOwnProperty(h) && (n = a[h], n != null && ie(t, e, h, n, a, null));
  }
  var F0 = {};
  function I0(t, e, a, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, r = null, c = null, h = null, p = null, T = null, A = null;
        for (M in a) {
          var D = a[M];
          if (a.hasOwnProperty(M) && D != null) switch (M) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              p = D;
            default:
              n.hasOwnProperty(M) || ie(t, e, M, null, n, D);
          }
        }
        for (var w in n) {
          var M = n[w];
          if (D = a[w], n.hasOwnProperty(w) && (M != null || D != null)) switch (w) {
            case "type":
              M !== D && (Zt = !0), r = M;
              break;
            case "name":
              M !== D && (Zt = !0), o = M;
              break;
            case "checked":
              M !== D && (Zt = !0), T = M;
              break;
            case "defaultChecked":
              M !== D && (Zt = !0), A = M;
              break;
            case "value":
              M !== D && (Zt = !0), c = M;
              break;
            case "defaultValue":
              M !== D && (Zt = !0), h = M;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (M != null) throw Error(_(137, e));
              break;
            default:
              M !== D && ie(t, e, w, M, n, D);
          }
        }
        Jt(t, c, h, p, T, A, r, o);
        return;
      case "select":
        M = c = h = w = null;
        for (r in a) if (p = a[r], a.hasOwnProperty(r) && p != null) switch (r) {
          case "value":
            break;
          case "multiple":
            M = p;
          default:
            n.hasOwnProperty(r) || ie(t, e, r, null, n, p);
        }
        for (o in n) if (r = n[o], p = a[o], n.hasOwnProperty(o) && (r != null || p != null)) switch (o) {
          case "value":
            r !== p && (Zt = !0), w = r;
            break;
          case "defaultValue":
            r !== p && (Zt = !0), h = r;
            break;
          case "multiple":
            r !== p && (Zt = !0), c = r;
          default:
            r !== p && ie(t, e, o, r, n, p);
        }
        e = h, a = c, n = M, w != null ? la(t, !!a, w, !1) : !!n != !!a && (e != null ? la(t, !!a, e, !0) : la(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        M = w = null;
        for (h in a) if (o = a[h], a.hasOwnProperty(h) && o != null && !n.hasOwnProperty(h)) switch (h) {
          case "value":
            break;
          case "children":
            break;
          default:
            ie(t, e, h, null, n, o);
        }
        for (c in n) if (o = n[c], r = a[c], n.hasOwnProperty(c) && (o != null || r != null)) switch (c) {
          case "value":
            o !== r && (Zt = !0), w = o;
            break;
          case "defaultValue":
            o !== r && (Zt = !0), M = o;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(_(91));
            break;
          default:
            o !== r && ie(t, e, c, o, n, r);
        }
        Dl(t, w, M);
        return;
      case "option":
        for (var Q in a) if (w = a[Q], a.hasOwnProperty(Q) && w != null && !n.hasOwnProperty(Q)) switch (Q) {
          case "selected":
            t.selected = !1;
            break;
          default:
            ie(t, e, Q, null, n, w);
        }
        for (p in n) if (w = n[p], M = a[p], n.hasOwnProperty(p) && w !== M && (w != null || M != null)) switch (p) {
          case "selected":
            w !== M && (Zt = !0), t.selected = w && typeof w != "function" && typeof w != "symbol";
            break;
          default:
            ie(t, e, p, w, n, M);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in a) w = a[nt], a.hasOwnProperty(nt) && w != null && !n.hasOwnProperty(nt) && ie(t, e, nt, null, n, w);
        for (T in n) if (w = n[T], M = a[T], n.hasOwnProperty(T) && w !== M && (w != null || M != null)) switch (T) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (w != null) throw Error(_(137, e));
            break;
          default:
            ie(t, e, T, w, n, M);
        }
        return;
      default:
        if (Rl(e)) {
          for (var Ot in a) w = a[Ot], a.hasOwnProperty(Ot) && w !== void 0 && !n.hasOwnProperty(Ot) && uf(t, e, Ot, void 0, n, w);
          for (A in n) w = n[A], M = a[A], !n.hasOwnProperty(A) || w === M || w === void 0 && M === void 0 || uf(t, e, A, w, n, M);
          return;
        }
    }
    for (var S in a) w = a[S], a.hasOwnProperty(S) && w != null && !n.hasOwnProperty(S) && ie(t, e, S, null, n, w);
    for (D in n) w = n[D], M = a[D], !n.hasOwnProperty(D) || w === M || w == null && M == null || ie(t, e, D, w, n, M);
  }
  function am(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function W0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), n = 0; n < a.length; n++) {
        var o = a[n], r = o.transferSize, c = o.initiatorType, h = o.duration;
        if (r && h && am(c)) {
          for (c = 0, h = o.responseEnd, n += 1; n < a.length; n++) {
            var p = a[n], T = p.startTime;
            if (T > h) break;
            var A = p.transferSize, D = p.initiatorType;
            A && am(D) && (p = p.responseEnd, c += A * (p < h ? 1 : (h - T) / (p - T)));
          }
          if (--n, e += 8 * (r + c) / (o.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var cf = null, ff = null;
  function Or(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function nm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lm(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function om(t, e, a, n) {
    return a = Or(a).createElement(t), a[be] = n, a[we] = e, qe(a, t, e), me(a), a;
  }
  function hf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var df = null;
  function $0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === df ? !1 : (df = t, !0) : (df = null, !1);
  }
  var mf = typeof setTimeout == "function" ? setTimeout : void 0, tv = typeof clearTimeout == "function" ? clearTimeout : void 0, rm = typeof Promise == "function" ? Promise : void 0, sm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : mf, ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof rm < "u" ? function(t) {
    return rm.resolve(null).then(t).catch(iv);
  } : mf;
  function iv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Nn(t) {
    return t === "head";
  }
  function um(t, e) {
    var a = e, n = 0;
    do {
      var o = a.nextSibling;
      if (t.removeChild(a), o && o.nodeType === 8) if (a = o.data, a === "/$" || a === "/&") {
        if (n === 0) {
          t.removeChild(o), Oo(e);
          return;
        }
        n--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") n++;
      else if (a === "html") wf(t.ownerDocument.documentElement);
      else if (a === "head") {
        a = t.ownerDocument.head, wf(a);
        for (var r = a.firstChild; r; ) {
          var c = r.nextSibling, h = r.nodeName;
          r[aa] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && r.rel.toLowerCase() === "stylesheet" || a.removeChild(r), r = c;
        }
      } else a === "body" && wf(t.ownerDocument.body);
      a = o;
    } while (a);
    Oo(e);
  }
  function cm(t, e) {
    var a = t;
    t = 0;
    do {
      var n = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), n && n.nodeType === 8) if (a = n.data, a === "/$") {
        if (t === 0) break;
        t--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = n;
    } while (a);
  }
  function fm(t, e, a) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, a != null && (t.style.viewTransitionClass = a), a = getComputedStyle(t), a.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var n = 1;
      else for (var o = n = 0; o < e.length; o++) {
        var r = e[o];
        0 < r.width && 0 < r.height && n++;
      }
      n === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + a.paddingTop, t.marginBottom = "-" + a.paddingBottom);
    }
  }
  function hm(t, e) {
    t = t.style, e = e.style;
    var a = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (a = e.display, t.display = a == null || typeof a == "boolean" ? "" : a, a = e.margin, a != null ? t.margin = a : (a = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = a == null || typeof a == "boolean" ? "" : a, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function dm(t, e, a) {
    return a = a.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= a.innerHeight && t.left <= a.innerWidth
    };
  }
  function vf(t) {
    return dm(t.getBoundingClientRect(), getComputedStyle(t), t);
  }
  function av(t) {
    var e = t.getBoundingClientRect();
    e = new DOMRect(e.x + 2e4, e.y + 2e4, e.width, e.height);
    var a = getComputedStyle(t);
    return dm(e, a, t);
  }
  function nv(t) {
    return t.documentElement.clientHeight;
  }
  function lv(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function ov(t, e, a, n, o, r, c, h, p) {
    var T = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var A = T.startViewTransition({
        update: function() {
          var w = T.defaultView, M = w.navigation && w.navigation.transition, Q = T.fonts.status;
          n();
          var nt = [];
          if (Q === "loaded" && (nv(T), T.fonts.status === "loading" && nt.push(T.fonts.ready)), Q = nt.length, t !== null) for (var Ot = t.suspenseyImages, S = 0, y = 0; y < Ot.length; y++) {
            var E = Ot[y];
            if (!E.complete) {
              var k = E.getBoundingClientRect();
              if (0 < k.bottom && 0 < k.right && k.top < w.innerHeight && k.left < w.innerWidth) {
                if (S += km(E), S > cu) {
                  nt.length = Q;
                  break;
                }
                E = new Promise(lv.bind(E)), nt.push(E);
              }
            }
          }
          if (0 < nt.length) return w = Promise.race([Promise.all(nt), new Promise(function(et) {
            return setTimeout(et, 500);
          })]).then(o, o), (M ? Promise.allSettled([M.finished, w]) : w).then(r, r);
          if (o(), M) return M.finished.then(r, r);
          r();
        },
        types: a
      });
      T.__reactViewTransition = A;
      var D = [];
      return A.ready.then(function() {
        for (var w = T.documentElement.getAnimations({ subtree: !0 }), M = 0; M < w.length; M++) {
          var Q = w[M], nt = Q.effect, Ot = nt.pseudoElement;
          if (Ot != null && Ot.startsWith("::view-transition")) {
            D.push(Q), Q = nt.getKeyframes();
            for (var S = Ot = void 0, y = !0, E = 0; E < Q.length; E++) {
              var k = Q[E], et = k.width;
              if (Ot === void 0) Ot = et;
              else if (Ot !== et) {
                y = !1;
                break;
              }
              if (et = k.height, S === void 0) S = et;
              else if (S !== et) {
                y = !1;
                break;
              }
              delete k.width, delete k.height, k.transform === "none" && delete k.transform;
            }
            y && Ot !== void 0 && S !== void 0 && (nt.setKeyframes(Q), y = getComputedStyle(nt.target, nt.pseudoElement), y.width !== Ot || y.height !== S) && (y = Q[0], y.width = Ot, y.height = S, y = Q[Q.length - 1], y.width = Ot, y.height = S, nt.setKeyframes(Q));
          }
        }
        c();
      }, function(w) {
        T.__reactViewTransition === A && (T.__reactViewTransition = null);
        try {
          if (typeof w == "object" && w !== null) switch (w.name) {
            case "InvalidStateError":
              (w.message === "View transition was skipped because document visibility state is hidden." || w.message === "Skipping view transition because document visibility state has become hidden." || w.message === "Skipping view transition because viewport size changed." || w.message === "Transition was aborted because of invalid state") && (w = null);
          }
          w !== null && p(w);
        } finally {
          n(), o(), c();
        }
      }), A.finished.finally(function() {
        for (var w = 0; w < D.length; w++) D[w].cancel();
        T.__reactViewTransition === A && (T.__reactViewTransition = null), h();
      }), A;
    } catch {
      return n(), o(), c(), null;
    }
  }
  function zl(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  zl.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : wt({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, zl.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, a = t.getAnimations({ subtree: !0 }), n = [], o = 0; o < a.length; o++) {
      var r = a[o].effect;
      r !== null && r.target === t && r.pseudoElement === e && n.push(a[o]);
    }
    return n;
  }, zl.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function mm(t) {
    return {
      name: t,
      group: new zl("group", t),
      imagePair: new zl("image-pair", t),
      old: new zl("old", t),
      new: new zl("new", t)
    };
  }
  function Ei(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Ei.prototype.addEventListener = function(t, e, a) {
    var n = null, o = null;
    if (!(a != null && typeof a != "boolean" && (n = a.signal || null, n !== null && n.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var r = this._eventListeners;
      if (pm(r, t, e, a) === -1) {
        var c = this, h = e;
        a != null && typeof a != "boolean" && a.once === !0 && (h = function(p) {
          c.removeEventListener(t, e, a), typeof e == "function" ? e.call(this, p) : e.handleEvent(p);
        }), n !== null && (o = c.removeEventListener.bind(c, t, e, a), n.addEventListener("abort", o, { once: !0 }), o = n.removeEventListener.bind(n, "abort", o)), n = zo(a), r.push({
          type: t,
          listener: e,
          optionsOrUseCapture: a,
          attachedListener: h,
          cleanup: o
        }), C(this._fragmentFiber.child, !1, rv, t, h, n);
      }
      this._eventListeners = r;
    }
  };
  function rv(t, e, a, n) {
    return J(t).addEventListener(e, a, n), !1;
  }
  Ei.prototype.removeEventListener = function(t, e, a) {
    var n = this._eventListeners;
    if (n !== null && (e = pm(n, t, e, a), e !== -1)) {
      var o = n[e];
      a = o.attachedListener;
      var r = o.cleanup;
      o = zo(o.optionsOrUseCapture), C(this._fragmentFiber.child, !1, sv, t, a, o), n.splice(e, 1), r !== null && r();
    }
  };
  function sv(t, e, a, n) {
    return J(t).removeEventListener(e, a, n), !1;
  }
  function zo(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? {
      capture: t.capture,
      passive: t.passive
    } : t;
  }
  function vm(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function pm(t, e, a, n) {
    if (t.length === 0) return -1;
    n = vm(n);
    for (var o = 0; o < t.length; o++) {
      var r = t[o];
      if (r.type === e && r.listener === a && vm(r.optionsOrUseCapture) === n) return o;
    }
    return -1;
  }
  Ei.prototype.dispatchEvent = function(t) {
    var e = lt(this._fragmentFiber);
    if (e === null) return !0;
    e = J(e);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !t.bubbles) {
      var n = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (a) for (var o = 0; o < a.length; o++) {
        var r = a[o];
        n.addEventListener(r.type, r.attachedListener, zo(r.optionsOrUseCapture));
      }
      if (e.appendChild(n), t = n.dispatchEvent(t), a) for (o = 0; o < a.length; o++) r = a[o], n.removeEventListener(r.type, r.attachedListener, zo(r.optionsOrUseCapture));
      return e.removeChild(n), t;
    }
    return e.dispatchEvent(t);
  }, Ei.prototype.focus = function(t) {
    C(this._fragmentFiber.child, !0, gm, t, void 0, void 0);
  };
  function gm(t, e) {
    return t.tag === 6 ? !1 : (t = J(t), bv(t, e));
  }
  Ei.prototype.focusLast = function(t) {
    var e = [];
    C(this._fragmentFiber.child, !0, pf, e, void 0, void 0);
    for (var a = e.length - 1; 0 <= a && !gm(e[a], t); a--) ;
  };
  function pf(t, e) {
    return e.push(t), !1;
  }
  Ei.prototype.blur = function() {
    var t = lt(this._fragmentFiber);
    t !== null && (t = J(t), t = Or(t).activeElement, t !== null && C(this._fragmentFiber.child, !1, uv, t, void 0, void 0));
  };
  function uv(t, e) {
    return t.tag === 6 ? !1 : (t = J(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ei.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), C(this._fragmentFiber.child, !1, cv, t, void 0, void 0);
  };
  function cv(t, e) {
    return t.tag === 6 || (t = J(t), e.observe(t)), !1;
  }
  Ei.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), C(this._fragmentFiber.child, !1, fv, t, void 0, void 0);
      for (var a = e = 0; a < $i.length; a++) {
        var n = $i[a];
        n.fragmentInstance === this && n.observer === t ? t.unobserve(n.instance) : $i[e++] = n;
      }
      $i.length = e;
    }
  };
  function fv(t, e) {
    return t.tag === 6 || (t = J(t), e.unobserve(t)), !1;
  }
  var $i = [], gf = !1;
  function hv(t, e, a) {
    $i.push({
      fragmentInstance: t,
      observer: e,
      instance: a
    }), gf || (gf = !0, xv(function() {
      gf = !1;
      var n = $i;
      $i = [];
      for (var o = 0; o < n.length; o++) {
        var r = n[o];
        r.observer.unobserve(r.instance);
      }
    }));
  }
  Ei.prototype.getClientRects = function() {
    var t = [];
    return C(this._fragmentFiber.child, !1, dv, t, void 0, void 0), t;
  };
  function dv(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var a = t.ownerDocument.createRange();
      a.selectNodeContents(t), e.push.apply(e, a.getClientRects());
    } else t = J(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ei.prototype.getRootNode = function(t) {
    var e = lt(this._fragmentFiber);
    return e === null ? this : J(e).getRootNode(t);
  }, Ei.prototype.compareDocumentPosition = function(t) {
    var e = lt(this._fragmentFiber);
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    C(this._fragmentFiber.child, !1, pf, a, void 0, void 0);
    var n = J(e);
    if (a.length === 0) {
      if (a = n, mt(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27) break;
            e = e.return;
          }
          e = null;
        }
        e != null && (a = e);
      }
      e = this._fragmentFiber;
      var o = n = a.compareDocumentPosition(t);
      return a === t ? o = Node.DOCUMENT_POSITION_CONTAINS : n & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = $(e)[1], a === null ? o = Node.DOCUMENT_POSITION_PRECEDING : (t = J(a).compareDocumentPosition(t), o = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), o |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = J(a[0]), o = J(a[a.length - 1]);
    var r = mt(this._fragmentFiber) ? e.parentElement : n;
    if (r == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    n = r.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, r = r.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = e.compareDocumentPosition(t), h = o.compareDocumentPosition(t), p = c & Node.DOCUMENT_POSITION_CONTAINED_BY || h & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return h = n && r && c & Node.DOCUMENT_POSITION_FOLLOWING && h & Node.DOCUMENT_POSITION_PRECEDING, e = n && e === t || r && o === t || p || h ? Node.DOCUMENT_POSITION_CONTAINED_BY : !n && e === t || !r && o === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || mv(e, this._fragmentFiber, a[0], a[a.length - 1], t) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function mv(t, e, a, n, o) {
    var r = Vi(o);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!r) t: {
        for (; r !== null; ) {
          if (r.tag === 7 && (r === e || r.alternate === e)) {
            a = !0;
            break t;
          }
          r = r.return;
        }
        a = !1;
      }
      return a;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (r === null) return r = o.ownerDocument, o === r || o === r.documentElement || o === r.body;
      t: {
        for (r = e, e = lt(e); r !== null; ) {
          if (!(r.tag !== 5 && r.tag !== 3 && r.tag !== 27 || r !== e && r.alternate !== e)) {
            r = !0;
            break t;
          }
          r = r.return;
        }
        r = !1;
      }
      return r;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!r) && !(e = r === a) && (e = Kt(a, r, kt), e === null ? e = !1 : (C(e, !0, Xt, r, a), r = gt, gt = null, e = r !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!r) && !(e = r === n) && (e = Kt(n, r, kt), e === null ? e = !1 : (C(e, !0, Et, r, n), r = gt, ot = gt = null, e = r !== null)), e) : !1;
  }
  function _m(t, e) {
    var a = t.ownerDocument.createRange();
    a.selectNodeContents(t), t = a.getBoundingClientRect(), window.scrollTo(window.scrollX + t.left, e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight);
  }
  Ei.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(_(566));
    var e = [];
    C(this._fragmentFiber.child, !1, pf, e, void 0, void 0);
    var a = t !== !1;
    if (e.length === 0) {
      var n = $(this._fragmentFiber);
      if (n = a ? n[1] || n[0] || lt(this._fragmentFiber) : n[0] || n[1], n === null) return;
      if (n.tag === 6) {
        t = J(n), _m(t, a);
        return;
      }
      if (n = J(n), n.nodeType !== 9) {
        if (n.nodeType === 11) {
          a = "host" in n ? n.host : null, a !== null && a.scrollIntoView(t);
          return;
        }
        n.scrollIntoView(t);
      }
    }
    for (n = a ? e.length - 1 : 0; n !== (a ? -1 : e.length); ) {
      var o = e[n];
      o.tag === 6 ? (o = J(o), _m(o, a)) : J(o).scrollIntoView(t), n += a ? -1 : 1;
    }
  };
  function vv(t, e) {
    return t = J(t), ym(t, e), !1;
  }
  function ym(t, e) {
    t.reactFragments ??= /* @__PURE__ */ new Set(), t.reactFragments.add(e);
  }
  function bm(t, e) {
    var a = e._eventListeners;
    if (a !== null) for (var n = 0; n < a.length; n++) {
      var o = a[n];
      t.addEventListener(o.type, o.attachedListener, zo(o.optionsOrUseCapture));
    }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(r) {
      for (var c = 0, h = 0; h < $i.length; h++) {
        var p = $i[h];
        (p.fragmentInstance !== e || p.observer !== r || p.instance !== t) && ($i[c++] = p);
      }
      $i.length = c, r.observe(t);
    }), ym(t, e));
  }
  function pv(t, e) {
    var a = e._eventListeners;
    if (a !== null) for (var n = 0; n < a.length; n++) {
      var o = a[n];
      t.removeEventListener(o.type, o.attachedListener, zo(o.optionsOrUseCapture));
    }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(r) {
      typeof r.rootMargin == "string" ? hv(e, r, t) : r.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function _f(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _f(a), Pi(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function gv(t, e, a, n) {
    for (; t.nodeType === 1; ) {
      var o = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[aa]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (r !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (r = t.getAttribute("src"), (r !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var r = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (t = Zi(t.nextSibling), t === null) break;
    }
    return null;
  }
  function _v(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Zi(t.nextSibling), t === null)) return null;
    return t;
  }
  function xm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Zi(t.nextSibling), t === null)) return null;
    return t;
  }
  function yf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function bf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function yv(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading") e();
    else {
      var n = function() {
        e(), a.removeEventListener("DOMContentLoaded", n);
      };
      a.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Zi(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var xf = null;
  function wm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0) return Zi(t.nextSibling);
          e--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Sm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function bv(t, e) {
    function a() {
      n = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var n = !1;
    try {
      t.ownerDocument.addEventListener("focus", a, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", a, !0);
    }
    return n;
  }
  function xv(t) {
    sm(function() {
      sm(function(e) {
        return t(e);
      });
    });
  }
  function Tm(t, e, a) {
    switch (e = Or(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(_(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(_(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(_(454));
        return t;
      default:
        throw Error(_(451));
    }
  }
  function zm(t, e, a) {
    for (var n in a) {
      var o = a[n];
      a.hasOwnProperty(n) && o != null && ie(t, e, n, null, F0, o);
    }
    a.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === ii && (t.onclick = null), Pi(t);
  }
  function wf(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Pi(t);
  }
  var Hi = /* @__PURE__ */ new Map(), Nm = /* @__PURE__ */ new Set();
  function Lr(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ha = ht.d;
  ht.d = {
    f: wv,
    r: Sv,
    D: Tv,
    C: zv,
    L: Nv,
    m: Ev,
    X: Mv,
    S: Cv,
    M: Av
  };
  function wv() {
    var t = Ha.f(), e = eu();
    return t || e;
  }
  function Sv(t) {
    var e = zt(t);
    e !== null && e.tag === 5 && e.type === "form" ? Mh(e) : Ha.r(t);
  }
  var No = typeof document > "u" ? null : document;
  function Em(t, e, a) {
    var n = No;
    if (n && typeof e == "string" && e) {
      var o = ve(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Nm.has(o) || (Nm.add(o), t = {
        rel: t,
        crossOrigin: a,
        href: e
      }, n.querySelector(o) === null && (e = n.createElement("link"), qe(e, "link", t), me(e), n.head.appendChild(e)));
    }
  }
  function Tv(t) {
    Ha.D(t), Em("dns-prefetch", t, null);
  }
  function zv(t, e) {
    Ha.C(t, e), Em("preconnect", t, e);
  }
  function Nv(t, e, a) {
    Ha.L(t, e, a);
    var n = No;
    if (n && t && e) {
      var o = 'link[rel="preload"][as="' + ve(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ve(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ve(a.imageSizes) + '"]')) : o += '[href="' + ve(t) + '"]';
      var r = o;
      switch (e) {
        case "style":
          r = Eo(t);
          break;
        case "script":
          r = Co(t);
      }
      if (!(Hi.has(r) || (t = wt({
        rel: "preload",
        href: e === "image" && a && a.imageSrcSet ? void 0 : t,
        as: e
      }, a), Hi.set(r, t), n.querySelector(o) !== null || e === "style" && n.querySelector(jr(r)) || e === "script" && n.querySelector(kr(r))))) {
        var c = n.createElement("link");
        qe(c, "link", t), e === "style" && (c[Gi] = !0, c.onload = c.onerror = function() {
          Qe(c);
        }), me(c), n.head.appendChild(c);
      }
    }
  }
  function Ev(t, e) {
    Ha.m(t, e);
    var a = No;
    if (a && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + ve(n) + '"][href="' + ve(t) + '"]', r = o;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Co(t);
      }
      if (!Hi.has(r) && (t = wt({
        rel: "modulepreload",
        href: t
      }, e), Hi.set(r, t), a.querySelector(o) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(kr(r))) return;
        }
        n = a.createElement("link"), qe(n, "link", t), me(n), a.head.appendChild(n);
      }
    }
  }
  function Cv(t, e, a) {
    Ha.S(t, e, a);
    var n = No;
    if (n && t) {
      var o = na(n).hoistableStyles, r = Eo(t);
      e = e || "default";
      var c = o.get(r);
      if (!c) {
        var h = {
          loading: 0,
          preload: null
        };
        if (c = n.querySelector(jr(r))) h.loading = 5;
        else {
          t = wt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, a), (a = Hi.get(r)) && Sf(t, a);
          var p = c = n.createElement("link");
          me(p), qe(p, "link", t), p._p = new Promise(function(T, A) {
            p.onload = T, p.onerror = A;
          }), p.addEventListener("load", function() {
            h.loading |= 1;
          }), p.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, su(c, e, n);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: h
        }, o.set(r, c);
      }
    }
  }
  function Mv(t, e) {
    Ha.X(t, e);
    var a = No;
    if (a && t) {
      var n = na(a).hoistableScripts, o = Co(t), r = n.get(o);
      r || (r = a.querySelector(kr(o)), r || (t = wt({
        src: t,
        async: !0
      }, e), (e = Hi.get(o)) && Tf(t, e), r = a.createElement("script"), me(r), qe(r, "link", t), a.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, n.set(o, r));
    }
  }
  function Av(t, e) {
    Ha.M(t, e);
    var a = No;
    if (a && t) {
      var n = na(a).hoistableScripts, o = Co(t), r = n.get(o);
      r || (r = a.querySelector(kr(o)), r || (t = wt({
        src: t,
        async: !0,
        type: "module"
      }, e), (e = Hi.get(o)) && Tf(t, e), r = a.createElement("script"), me(r), qe(r, "link", t), a.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, n.set(o, r));
    }
  }
  function Cm(t, e, a, n) {
    var o = (o = Ui.current) ? Lr(o) : null;
    if (!o) throw Error(_(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Eo(a.href), e = na(o).hoistableStyles, n = e.get(a), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, n)), n) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Eo(a.href);
          var r = na(o).hoistableStyles, c = r.get(t);
          if (c || (o = o.ownerDocument || o, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, r.set(t, c), (r = o.querySelector(jr(t))) ? r._p || (c.instance = r, c.state.loading = 5) : (r = Hi.get(t), r || (r = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Hi.set(t, r)), Ov(o, t, r, c.state))), e && n === null) throw Error(_(528, ""));
          return c;
        }
        if (e && n !== null) throw Error(_(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Co(a), e = na(o).hoistableScripts, n = e.get(a), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, n)), n) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(_(444, t));
    }
  }
  function Eo(t) {
    return 'href="' + ve(t) + '"';
  }
  function jr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Mm(t) {
    return wt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Ov(t, e, a, n) {
    if (e = t.querySelector('link[rel="preload"][as="style"][' + e + "]")) {
      if (e[Gi] !== !0) {
        n.loading = 1;
        return;
      }
    } else e = t.createElement("link"), e[Gi] = !0, e.onload = e.onerror = Qe.bind(null, e), qe(e, "link", a), me(e), t.head.appendChild(e);
    n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    });
  }
  function Co(t) {
    return '[src="' + ve(t) + '"]';
  }
  function kr(t) {
    return "script[async]" + t;
  }
  function Am(t, e, a) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var n = t.querySelector('style[data-href~="' + ve(a.href) + '"]');
        if (n) return e.instance = n, me(n), n;
        var o = wt({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return n = (t.ownerDocument || t).createElement("style"), me(n), qe(n, "style", o), su(n, a.precedence, t), e.instance = n;
      case "stylesheet":
        o = Eo(a.href);
        var r = t.querySelector(jr(o));
        if (r) return e.state.loading |= 4, e.instance = r, me(r), r;
        n = Mm(a), (o = Hi.get(o)) && Sf(n, o), r = (t.ownerDocument || t).createElement("link"), me(r);
        var c = r;
        return c._p = new Promise(function(h, p) {
          c.onload = h, c.onerror = p;
        }), qe(r, "link", n), e.state.loading |= 4, su(r, a.precedence, t), e.instance = r;
      case "script":
        return r = Co(a.src), (o = t.querySelector(kr(r))) ? (e.instance = o, me(o), o) : (n = a, (o = Hi.get(r)) && (n = wt({}, a), Tf(n, o)), t = t.ownerDocument || t, o = t.createElement("script"), me(o), qe(o, "link", n), t.head.appendChild(o), e.instance = o);
      case "void":
        return null;
      default:
        throw Error(_(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, su(n, a.precedence, t));
    return e.instance;
  }
  function su(t, e, a) {
    for (var n = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = n.length ? n[n.length - 1] : null, r = o, c = 0; c < n.length; c++) {
      var h = n[c];
      if (h.dataset.precedence === e) r = h;
      else if (r !== o) break;
    }
    r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function Sf(t, e) {
    t.crossOrigin ??= e.crossOrigin, t.referrerPolicy ??= e.referrerPolicy, t.title ??= e.title;
  }
  function Tf(t, e) {
    t.crossOrigin ??= e.crossOrigin, t.referrerPolicy ??= e.referrerPolicy, t.integrity ??= e.integrity;
  }
  var uu = null;
  function Om(t, e, a) {
    if (uu === null) {
      var n = /* @__PURE__ */ new Map(), o = uu = /* @__PURE__ */ new Map();
      o.set(a, n);
    } else o = uu, n = o.get(a), n || (n = /* @__PURE__ */ new Map(), o.set(a, n));
    if (n.has(t)) return n;
    for (n.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
      var r = a[o];
      if (!(r[aa] || r[be] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = r.getAttribute(e) || "";
        c = t + c;
        var h = n.get(c);
        h ? h.push(r) : n.set(c, [r]);
      }
    }
    return n;
  }
  function zf(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null);
  }
  function Lv(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0;
    }
    return !1;
  }
  function Lm(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function jm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function km(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Dm(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += km(e), t.suspenseyImages.push(e)), t = Dv.bind(t), e.decode().then(t, t));
  }
  function jv(t, e, a, n) {
    if (a.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var o = Eo(n.href), r = e.querySelector(jr(o));
        if (r) {
          e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Dr.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = r, me(r);
          return;
        }
        r = e.ownerDocument || e, n = Mm(n), (o = Hi.get(o)) && Sf(n, o), r = r.createElement("link"), me(r);
        var c = r;
        c._p = new Promise(function(h, p) {
          c.onload = h, c.onerror = p;
        }), qe(r, "link", n), a.instance = r;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Dr.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var cu = 0;
  function kv(t, e) {
    return t.stylesheets && t.count === 0 && hu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var n = setTimeout(function() {
        if (t.stylesheets && hu(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4 + e);
      0 < t.imgBytes && cu === 0 && (cu = 62500 * W0());
      var o = setTimeout(function() {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && hu(t, t.stylesheets), t.unsuspend)) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, (t.imgBytes > cu ? 50 : 800) + e);
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(o);
      };
    } : null;
  }
  function Rm(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) hu(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Dr() {
    this.count--, Rm(this);
  }
  function Dv() {
    this.imgCount--, Rm(this);
  }
  var fu = null;
  function hu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, fu = /* @__PURE__ */ new Map(), e.forEach(Rv, t), fu = null, Dr.call(t));
  }
  function Rv(t, e) {
    if (!(e.state.loading & 4)) {
      var a = fu.get(t);
      if (a) var n = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), fu.set(t, a);
        for (var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < o.length; r++) {
          var c = o[r];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), n = c);
        }
        n && a.set(null, n);
      }
      o = e.instance, c = o.getAttribute("data-precedence"), r = a.get(c) || n, r === n && a.set(null, o), a.set(c, o), this.count++, n = Dr.bind(this), o.addEventListener("load", n), o.addEventListener("error", n), r ? r.parentNode.insertBefore(o, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Mo = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: di,
    _currentValue2: di,
    _threadCount: 0
  };
  function Bv(t, e, a, n, o, r, c, h, p) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bo(0), this.hiddenUpdates = Bo(null), this.identifierPrefix = n, this.onUncaughtError = o, this.onCaughtError = r, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zv(t, e, a, n, o, r, c, h, p, T, A, D) {
    return t = new Bv(t, e, a, c, p, T, A, D, h), e = 1, r === !0 && (e |= 24), r = z(3, null, null, e), t.current = r, r.stateNode = t, e = Uu(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
      element: n,
      isDehydrated: a,
      cache: e
    }, Pu(r), t;
  }
  function Hv(t) {
    return t ? (t = d, t) : d;
  }
  function Bm(t, e, a, n, o, r) {
    o = Hv(o), n.context === null ? n.context = o : n.pendingContext = o, n = gl(e), n.payload = { element: a }, r = r === void 0 ? null : r, r !== null && (n.callback = r), a = _l(t, n, e), a !== null && (hi(a, t, e), hr(a, t, e));
  }
  function Zm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Nf(t, e) {
    Zm(t, e), (t = t.alternate) && Zm(t, e);
  }
  function Hm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = s(t, 67108864);
      e !== null && hi(e, t, 67108864), Nf(t, 67108864);
    }
  }
  function Um(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Bi();
      e = Kr(e);
      var a = s(t, e);
      a !== null && hi(a, t, e), Nf(t, e);
    }
  }
  var Ao = !0;
  function Uv(t, e, a, n) {
    var o = K.T;
    K.T = null;
    var r = ht.p;
    try {
      ht.p = 2, Ef(t, e, a, n);
    } finally {
      ht.p = r, K.T = o;
    }
  }
  function qv(t, e, a, n) {
    var o = K.T;
    K.T = null;
    var r = ht.p;
    try {
      ht.p = 8, Ef(t, e, a, n);
    } finally {
      ht.p = r, K.T = o;
    }
  }
  function Ef(t, e, a, n) {
    if (Ao) {
      var o = Cf(n);
      if (o === null) sf(t, e, n, du, a), Ym(t, n);
      else if (Gv(o, t, e, a, n)) n.stopPropagation();
      else if (Ym(t, n), e & 4 && -1 < Yv.indexOf(t)) {
        for (; o !== null; ) {
          var r = zt(o);
          if (r !== null) switch (r.tag) {
            case 3:
              if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                var c = ia(r.pendingLanes);
                if (c !== 0) {
                  var h = r;
                  for (h.pendingLanes |= 2, h.entangledLanes |= 2; c; ) {
                    var p = 1 << 31 - Xe(c);
                    h.entanglements[1] |= p, c &= ~p;
                  }
                  Za(r), (Qt & 6) === 0 && (Ws = Ye() + 500, Cr(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              h = s(r, 2), h !== null && hi(h, r, 2), eu(), Nf(r, 2);
          }
          if (r = Cf(n), r === null && sf(t, e, n, du, a), r === o) break;
          o = r;
        }
        o !== null && n.stopPropagation();
      } else sf(t, e, n, null, a);
    }
  }
  function Cf(t) {
    return t = Bl(t), Mf(t);
  }
  var du = null;
  function Mf(t) {
    if (du = null, t = Vi(t), t !== null) {
      var e = tt(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = ft(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = X(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return du = t, null;
  }
  function qm(t) {
    switch (t) {
      case "beforetoggle":
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
      case "seeked":
      case "submit":
      case "toggle":
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
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Yr()) {
          case Ro:
            return 2;
          case Gr:
            return 8;
          case Ll:
          case xu:
            return 32;
          case Pr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Af = !1, En = null, Cn = null, Mn = null, Rr = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map(), An = [], Yv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Ym(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Cn = null;
        break;
      case "mouseover":
      case "mouseout":
        Mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(e.pointerId);
    }
  }
  function Zr(t, e, a, n, o, r) {
    return t === null || t.nativeEvent !== r ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: n,
      nativeEvent: r,
      targetContainers: [o]
    }, e !== null && (e = zt(e), e !== null && Hm(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function Gv(t, e, a, n, o) {
    switch (e) {
      case "focusin":
        return En = Zr(En, t, e, a, n, o), !0;
      case "dragenter":
        return Cn = Zr(Cn, t, e, a, n, o), !0;
      case "mouseover":
        return Mn = Zr(Mn, t, e, a, n, o), !0;
      case "pointerover":
        var r = o.pointerId;
        return Rr.set(r, Zr(Rr.get(r) || null, t, e, a, n, o)), !0;
      case "gotpointercapture":
        return r = o.pointerId, Br.set(r, Zr(Br.get(r) || null, t, e, a, n, o)), !0;
    }
    return !1;
  }
  function Gm(t) {
    var e = Vi(t.target);
    if (e !== null) {
      var a = tt(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = ft(a), e !== null) {
            t.blockedOn = e, Fr(t.priority, function() {
              Um(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = X(a), e !== null) {
            t.blockedOn = e, Fr(t.priority, function() {
              Um(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function mu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Cf(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var n = new a.constructor(a.type, a);
        Go = n, a.target.dispatchEvent(n), Go = null;
      } else return e = zt(a), e !== null && Hm(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function Pm(t, e, a) {
    mu(t) && a.delete(e);
  }
  function Pv() {
    Af = !1, En !== null && mu(En) && (En = null), Cn !== null && mu(Cn) && (Cn = null), Mn !== null && mu(Mn) && (Mn = null), Rr.forEach(Pm), Br.forEach(Pm);
  }
  function vu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Af || (Af = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, Pv)));
  }
  var pu = null;
  function Vm(t) {
    pu !== t && (pu = t, B.unstable_scheduleCallback(B.unstable_NormalPriority, function() {
      pu === t && (pu = null);
      for (var e = 0; e < t.length; e += 3) {
        var a = t[e], n = t[e + 1], o = t[e + 2];
        if (typeof n != "function") {
          if (Mf(n || a) === null) continue;
          break;
        }
        var r = zt(a);
        r !== null && (t.splice(e, 3), e -= 3, fc(r, {
          pending: !0,
          data: o,
          method: a.method,
          action: n
        }, n, o));
      }
    }));
  }
  function Oo(t) {
    function e(p) {
      return vu(p, t);
    }
    En !== null && vu(En, t), Cn !== null && vu(Cn, t), Mn !== null && vu(Mn, t), Rr.forEach(e), Br.forEach(e);
    for (var a = 0; a < An.length; a++) {
      var n = An[a];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < An.length && (a = An[0], a.blockedOn === null); ) Gm(a), a.blockedOn === null && An.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null) for (n = 0; n < a.length; n += 3) {
      var o = a[n], r = a[n + 1], c = o[we] || null;
      if (typeof r == "function") c || Vm(a);
      else if (c) {
        var h = null;
        if (r && r.hasAttribute("formAction")) {
          if (o = r, c = r[we] || null) h = c.formAction;
          else if (Mf(o) !== null) continue;
        } else h = c.action;
        typeof h == "function" ? a[n + 1] = h : (a.splice(n, 3), n -= 3), Vm(a);
      }
    }
  }
  function Vv() {
    function t(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(c) {
            return o = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      o !== null && (o(), o = null), n || setTimeout(a, 20);
    }
    function a() {
      if (!n && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, o = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), o !== null && (o(), o = null);
      };
    }
  }
  function Of(t) {
    this._internalRoot = t;
  }
  Lf.prototype.render = Of.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(_(409));
    var a = e.current;
    Bm(a, Bi(), t, e, null, null);
  }, Lf.prototype.unmount = Of.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Bm(t.current, 2, null, t, null, null), eu(), e[Pa] = null;
    }
  };
  function Lf(t) {
    this._internalRoot = t;
  }
  Lf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Jr();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var a = 0; a < An.length && e !== 0 && e < An[a].priority; a++) ;
      An.splice(a, 0, t), a === 0 && Gm(t);
    }
  };
  var Xm = N.version;
  if (Xm !== "19.3.0") throw Error(_(527, Xm, "19.3.0"));
  ht.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(_(188)) : (t = Object.keys(t).join(","), Error(_(268, t)));
    return t = qt(e), t = t !== null ? q(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Xv = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: K,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gu.isDisabled && gu.supportsFiber) try {
      xa = gu.inject(Xv), Ve = gu;
    } catch {
    }
  }
  b.createRoot = function(t, e) {
    if (!st(t)) throw Error(_(299));
    var a = !1, n = "", o = y0, r = b0, c = x0;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Zv(t, 1, !1, null, null, a, n, null, o, r, c, Vv), t[Pa] = e.current, Wd(t), new Of(e);
  };
})), lp = /* @__PURE__ */ ta(((b, B) => {
  function N() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (F) {
        console.error(F);
      }
  }
  N(), B.exports = np();
})), it = /* @__PURE__ */ $m(kf(), 1), op = lp(), Ln = {
  osm: {
    id: "osm",
    name: "OSM Standard",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  },
  positron: {
    id: "positron",
    name: "Positron",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  },
  bright: {
    id: "bright",
    name: "Bright",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  },
  liberty: {
    id: "liberty",
    name: "Liberty",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  },
  dark: {
    id: "dark",
    name: "Dark",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  },
  fiord: {
    id: "fiord",
    name: "Fiord",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; Esri',
    maxZoom: 16
  }
}, jf = "yimly_active_circle", Qm = "yimly_preferences", _u = {
  mapStyle: "osm",
  showAccuracyCircles: !0,
  showDeviceMarkers: !0,
  showZones: !0,
  autoFollowZoom: 16
};
try {
  localStorage.removeItem("yimly_ha_session"), sessionStorage.removeItem("yimly_ha_session"), localStorage.removeItem("ha_token"), sessionStorage.removeItem("ha_token");
} catch {
}
var Ua = {
  getCircle() {
    try {
      const b = localStorage.getItem(jf);
      return b ? JSON.parse(b) : null;
    } catch {
      return null;
    }
  },
  saveCircle(b) {
    try {
      b ? localStorage.setItem(jf, JSON.stringify(b)) : localStorage.removeItem(jf);
    } catch (B) {
      console.error("Error saving circle to localStorage", B);
    }
  },
  getPreferences() {
    try {
      const b = localStorage.getItem(Qm);
      return b ? {
        ..._u,
        ...JSON.parse(b)
      } : _u;
    } catch {
      return _u;
    }
  },
  savePreferences(b) {
    try {
      const B = {
        ...this.getPreferences(),
        ...b
      };
      return localStorage.setItem(Qm, JSON.stringify(B)), B;
    } catch (B) {
      return console.error("Error saving preferences", B), _u;
    }
  }
}, Nl = [
  {
    name: "Pastel Coral",
    hex: "#FF8E85",
    bgLight: "#FFF0EE",
    borderLight: "#FFCCC7",
    textDark: "#B23A30"
  },
  {
    name: "Pastel Peach",
    hex: "#FFB37C",
    bgLight: "#FFF4EC",
    borderLight: "#FFDEC7",
    textDark: "#B55E1C"
  },
  {
    name: "Pastel Honey",
    hex: "#FFD269",
    bgLight: "#FFFBEB",
    borderLight: "#FFE8A8",
    textDark: "#A0740E"
  },
  {
    name: "Pastel Sage",
    hex: "#98D8AA",
    bgLight: "#F0F9F3",
    borderLight: "#CDECD7",
    textDark: "#2C7342"
  },
  {
    name: "Pastel Mint",
    hex: "#7DD8C7",
    bgLight: "#EDFBF8",
    borderLight: "#BEEDE4",
    textDark: "#1E7564"
  },
  {
    name: "Pastel Sky",
    hex: "#7BC9FF",
    bgLight: "#EFF8FF",
    borderLight: "#BDE2FF",
    textDark: "#1765A3"
  },
  {
    name: "Pastel Periwinkle",
    hex: "#9C98FF",
    bgLight: "#F3F2FF",
    borderLight: "#CEC8FF",
    textDark: "#413A9E"
  },
  {
    name: "Pastel Lavender",
    hex: "#C698FF",
    bgLight: "#F7F0FF",
    borderLight: "#E3C8FF",
    textDark: "#6730A5"
  },
  {
    name: "Pastel Rose",
    hex: "#FF98CA",
    bgLight: "#FFF0F7",
    borderLight: "#FFC8E5",
    textDark: "#A62669"
  }
], rp = Nl[0].hex, sp = /* @__PURE__ */ ta(((b, B) => {
  (function(N, F) {
    typeof b == "object" && typeof B < "u" ? F(b) : typeof define == "function" && define.amd ? define(["exports"], F) : (N = typeof globalThis < "u" ? globalThis : N || self, F(N.leaflet = {}));
  })(b, (function(N) {
    "use strict";
    var F = "1.9.4";
    function _(i) {
      for (var l, s = 1, u = arguments.length, f; s < u; s++) {
        f = arguments[s];
        for (l in f) i[l] = f[l];
      }
      return i;
    }
    var st = Object.create || /* @__PURE__ */ (function() {
      function i() {
      }
      return function(l) {
        return i.prototype = l, new i();
      };
    })();
    function tt(i, l) {
      var s = Array.prototype.slice;
      if (i.bind) return i.bind.apply(i, s.call(arguments, 1));
      var u = s.call(arguments, 2);
      return function() {
        return i.apply(l, u.length ? u.concat(s.call(arguments)) : arguments);
      };
    }
    var ft = 0;
    function X(i) {
      return "_leaflet_id" in i || (i._leaflet_id = ++ft), i._leaflet_id;
    }
    function Lt(i, l, s) {
      var u, f, d, g = function() {
        u = !1, f && (d.apply(s, f), f = !1);
      };
      return d = function() {
        u ? f = arguments : (i.apply(s, arguments), setTimeout(g, l), u = !0);
      }, d;
    }
    function qt(i, l, s) {
      var u = l[1], f = l[0], d = u - f;
      return i === u && s ? i : ((i - f) % d + d) % d + f;
    }
    function q() {
      return !1;
    }
    function C(i, l) {
      if (l === !1) return i;
      var s = Math.pow(10, l === void 0 ? 6 : l);
      return Math.round(i * s) / s;
    }
    function lt(i) {
      return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
    }
    function mt(i) {
      return lt(i).split(/\s+/);
    }
    function $(i, l) {
      Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? st(i.options) : {});
      for (var s in l) i.options[s] = l[s];
      return i.options;
    }
    function pt(i, l, s) {
      var u = [];
      for (var f in i) u.push(encodeURIComponent(s ? f.toUpperCase() : f) + "=" + encodeURIComponent(i[f]));
      return (!l || l.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var J = /\{ *([\w_ -]+) *\}/g;
    function gt(i, l) {
      return i.replace(J, function(s, u) {
        var f = l[u];
        if (f === void 0) throw new Error("No value provided for variable " + s);
        return typeof f == "function" && (f = f(l)), f;
      });
    }
    var ot = Array.isArray || function(i) {
      return Object.prototype.toString.call(i) === "[object Array]";
    };
    function Xt(i, l) {
      for (var s = 0; s < i.length; s++) if (i[s] === l) return s;
      return -1;
    }
    var Et = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function kt(i) {
      return window["webkit" + i] || window["moz" + i] || window["ms" + i];
    }
    var Kt = 0;
    function wt(i) {
      var l = +/* @__PURE__ */ new Date(), s = Math.max(0, 16 - (l - Kt));
      return Kt = l + s, window.setTimeout(i, s);
    }
    var vt = window.requestAnimationFrame || kt("RequestAnimationFrame") || wt, Rt = window.cancelAnimationFrame || kt("CancelAnimationFrame") || kt("CancelRequestAnimationFrame") || function(i) {
      window.clearTimeout(i);
    };
    function xt(i, l, s) {
      if (s && vt === wt) i.call(l);
      else return vt.call(window, tt(i, l));
    }
    function _t(i) {
      i && Rt.call(window, i);
    }
    var Mt = {
      __proto__: null,
      extend: _,
      create: st,
      bind: tt,
      get lastId() {
        return ft;
      },
      stamp: X,
      throttle: Lt,
      wrapNum: qt,
      falseFn: q,
      formatNum: C,
      trim: lt,
      splitWords: mt,
      setOptions: $,
      getParamString: pt,
      template: gt,
      isArray: ot,
      indexOf: Xt,
      emptyImageUrl: Et,
      requestFn: vt,
      cancelFn: Rt,
      requestAnimFrame: xt,
      cancelAnimFrame: _t
    };
    function Ct() {
    }
    Ct.extend = function(i) {
      var l = function() {
        $(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, s = l.__super__ = this.prototype, u = st(s);
      u.constructor = l, l.prototype = u;
      for (var f in this) Object.prototype.hasOwnProperty.call(this, f) && f !== "prototype" && f !== "__super__" && (l[f] = this[f]);
      return i.statics && _(l, i.statics), i.includes && (Wt(i.includes), _.apply(null, [u].concat(i.includes))), _(u, i), delete u.statics, delete u.includes, u.options && (u.options = s.options ? st(s.options) : {}, _(u.options, i.options)), u._initHooks = [], u.callInitHooks = function() {
        if (!this._initHooksCalled) {
          s.callInitHooks && s.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var d = 0, g = u._initHooks.length; d < g; d++) u._initHooks[d].call(this);
        }
      }, l;
    }, Ct.include = function(i) {
      var l = this.prototype.options;
      return _(this.prototype, i), i.options && (this.prototype.options = l, this.mergeOptions(i.options)), this;
    }, Ct.mergeOptions = function(i) {
      return _(this.prototype.options, i), this;
    }, Ct.addInitHook = function(i) {
      var l = Array.prototype.slice.call(arguments, 1), s = typeof i == "function" ? i : function() {
        this[i].apply(this, l);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(s), this;
    };
    function Wt(i) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        i = ot(i) ? i : [i];
        for (var l = 0; l < i.length; l++) i[l] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (/* @__PURE__ */ new Error()).stack);
      }
    }
    var H = {
      on: function(i, l, s) {
        if (typeof i == "object") for (var u in i) this._on(u, i[u], l);
        else {
          i = mt(i);
          for (var f = 0, d = i.length; f < d; f++) this._on(i[f], l, s);
        }
        return this;
      },
      off: function(i, l, s) {
        if (!arguments.length) delete this._events;
        else if (typeof i == "object") for (var u in i) this._off(u, i[u], l);
        else {
          i = mt(i);
          for (var f = arguments.length === 1, d = 0, g = i.length; d < g; d++) f ? this._off(i[d]) : this._off(i[d], l, s);
        }
        return this;
      },
      _on: function(i, l, s, u) {
        if (typeof l != "function") {
          console.warn("wrong listener type: " + typeof l);
          return;
        }
        if (this._listens(i, l, s) === !1) {
          s === this && (s = void 0);
          var f = {
            fn: l,
            ctx: s
          };
          u && (f.once = !0), this._events = this._events || {}, this._events[i] = this._events[i] || [], this._events[i].push(f);
        }
      },
      _off: function(i, l, s) {
        var u, f, d;
        if (this._events && (u = this._events[i], !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (f = 0, d = u.length; f < d; f++) u[f].fn = q;
            delete this._events[i];
            return;
          }
          if (typeof l != "function") {
            console.warn("wrong listener type: " + typeof l);
            return;
          }
          var g = this._listens(i, l, s);
          if (g !== !1) {
            var z = u[g];
            this._firingCount && (z.fn = q, this._events[i] = u = u.slice()), u.splice(g, 1);
          }
        }
      },
      fire: function(i, l, s) {
        if (!this.listens(i, s)) return this;
        var u = _({}, l, {
          type: i,
          target: this,
          sourceTarget: l && l.sourceTarget || this
        });
        if (this._events) {
          var f = this._events[i];
          if (f) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var d = 0, g = f.length; d < g; d++) {
              var z = f[d], j = z.fn;
              z.once && this.off(i, j, z.ctx), j.call(z.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return s && this._propagateEvent(u), this;
      },
      listens: function(i, l, s, u) {
        typeof i != "string" && console.warn('"string" type argument expected');
        var f = l;
        typeof l != "function" && (u = !!l, f = void 0, s = void 0);
        var d = this._events && this._events[i];
        if (d && d.length && this._listens(i, f, s) !== !1)
          return !0;
        if (u) {
          for (var g in this._eventParents) if (this._eventParents[g].listens(i, l, s, u)) return !0;
        }
        return !1;
      },
      _listens: function(i, l, s) {
        if (!this._events) return !1;
        var u = this._events[i] || [];
        if (!l) return !!u.length;
        s === this && (s = void 0);
        for (var f = 0, d = u.length; f < d; f++) if (u[f].fn === l && u[f].ctx === s) return f;
        return !1;
      },
      once: function(i, l, s) {
        if (typeof i == "object") for (var u in i) this._on(u, i[u], l, !0);
        else {
          i = mt(i);
          for (var f = 0, d = i.length; f < d; f++) this._on(i[f], l, s, !0);
        }
        return this;
      },
      addEventParent: function(i) {
        return this._eventParents = this._eventParents || {}, this._eventParents[X(i)] = i, this;
      },
      removeEventParent: function(i) {
        return this._eventParents && delete this._eventParents[X(i)], this;
      },
      _propagateEvent: function(i) {
        for (var l in this._eventParents) this._eventParents[l].fire(i.type, _({
          layer: i.target,
          propagatedFrom: i.target
        }, i), !0);
      }
    };
    H.addEventListener = H.on, H.removeEventListener = H.clearAllEventListeners = H.off, H.addOneTimeEventListener = H.once, H.fireEvent = H.fire, H.hasEventListeners = H.listens;
    var at = Ct.extend(H);
    function x(i, l, s) {
      this.x = s ? Math.round(i) : i, this.y = s ? Math.round(l) : l;
    }
    var G = Math.trunc || function(i) {
      return i > 0 ? Math.floor(i) : Math.ceil(i);
    };
    x.prototype = {
      clone: function() {
        return new x(this.x, this.y);
      },
      add: function(i) {
        return this.clone()._add(R(i));
      },
      _add: function(i) {
        return this.x += i.x, this.y += i.y, this;
      },
      subtract: function(i) {
        return this.clone()._subtract(R(i));
      },
      _subtract: function(i) {
        return this.x -= i.x, this.y -= i.y, this;
      },
      divideBy: function(i) {
        return this.clone()._divideBy(i);
      },
      _divideBy: function(i) {
        return this.x /= i, this.y /= i, this;
      },
      multiplyBy: function(i) {
        return this.clone()._multiplyBy(i);
      },
      _multiplyBy: function(i) {
        return this.x *= i, this.y *= i, this;
      },
      scaleBy: function(i) {
        return new x(this.x * i.x, this.y * i.y);
      },
      unscaleBy: function(i) {
        return new x(this.x / i.x, this.y / i.y);
      },
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = G(this.x), this.y = G(this.y), this;
      },
      distanceTo: function(i) {
        i = R(i);
        var l = i.x - this.x, s = i.y - this.y;
        return Math.sqrt(l * l + s * s);
      },
      equals: function(i) {
        return i = R(i), i.x === this.x && i.y === this.y;
      },
      contains: function(i) {
        return i = R(i), Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y);
      },
      toString: function() {
        return "Point(" + C(this.x) + ", " + C(this.y) + ")";
      }
    };
    function R(i, l, s) {
      return i instanceof x ? i : ot(i) ? new x(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new x(i.x, i.y) : new x(i, l, s);
    }
    function P(i, l) {
      if (i)
        for (var s = l ? [i, l] : i, u = 0, f = s.length; u < f; u++) this.extend(s[u]);
    }
    P.prototype = {
      extend: function(i) {
        var l, s;
        if (!i) return this;
        if (i instanceof x || typeof i[0] == "number" || "x" in i) l = s = R(i);
        else if (i = Y(i), l = i.min, s = i.max, !l || !s) return this;
        return !this.min && !this.max ? (this.min = l.clone(), this.max = s.clone()) : (this.min.x = Math.min(l.x, this.min.x), this.max.x = Math.max(s.x, this.max.x), this.min.y = Math.min(l.y, this.min.y), this.max.y = Math.max(s.y, this.max.y)), this;
      },
      getCenter: function(i) {
        return R((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, i);
      },
      getBottomLeft: function() {
        return R(this.min.x, this.max.y);
      },
      getTopRight: function() {
        return R(this.max.x, this.min.y);
      },
      getTopLeft: function() {
        return this.min;
      },
      getBottomRight: function() {
        return this.max;
      },
      getSize: function() {
        return this.max.subtract(this.min);
      },
      contains: function(i) {
        var l, s;
        return typeof i[0] == "number" || i instanceof x ? i = R(i) : i = Y(i), i instanceof P ? (l = i.min, s = i.max) : l = s = i, l.x >= this.min.x && s.x <= this.max.x && l.y >= this.min.y && s.y <= this.max.y;
      },
      intersects: function(i) {
        i = Y(i);
        var l = this.min, s = this.max, u = i.min, f = i.max, d = f.x >= l.x && u.x <= s.x, g = f.y >= l.y && u.y <= s.y;
        return d && g;
      },
      overlaps: function(i) {
        i = Y(i);
        var l = this.min, s = this.max, u = i.min, f = i.max, d = f.x > l.x && u.x < s.x, g = f.y > l.y && u.y < s.y;
        return d && g;
      },
      isValid: function() {
        return !!(this.min && this.max);
      },
      pad: function(i) {
        var l = this.min, s = this.max, u = Math.abs(l.x - s.x) * i, f = Math.abs(l.y - s.y) * i;
        return Y(R(l.x - u, l.y - f), R(s.x + u, s.y + f));
      },
      equals: function(i) {
        return i ? (i = Y(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : !1;
      }
    };
    function Y(i, l) {
      return !i || i instanceof P ? i : new P(i, l);
    }
    function rt(i, l) {
      if (i)
        for (var s = l ? [i, l] : i, u = 0, f = s.length; u < f; u++) this.extend(s[u]);
    }
    rt.prototype = {
      extend: function(i) {
        var l = this._southWest, s = this._northEast, u, f;
        if (i instanceof v)
          u = i, f = i;
        else if (i instanceof rt) {
          if (u = i._southWest, f = i._northEast, !u || !f) return this;
        } else return i ? this.extend(O(i) || U(i)) : this;
        return !l && !s ? (this._southWest = new v(u.lat, u.lng), this._northEast = new v(f.lat, f.lng)) : (l.lat = Math.min(u.lat, l.lat), l.lng = Math.min(u.lng, l.lng), s.lat = Math.max(f.lat, s.lat), s.lng = Math.max(f.lng, s.lng)), this;
      },
      pad: function(i) {
        var l = this._southWest, s = this._northEast, u = Math.abs(l.lat - s.lat) * i, f = Math.abs(l.lng - s.lng) * i;
        return new rt(new v(l.lat - u, l.lng - f), new v(s.lat + u, s.lng + f));
      },
      getCenter: function() {
        return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      },
      getSouthWest: function() {
        return this._southWest;
      },
      getNorthEast: function() {
        return this._northEast;
      },
      getNorthWest: function() {
        return new v(this.getNorth(), this.getWest());
      },
      getSouthEast: function() {
        return new v(this.getSouth(), this.getEast());
      },
      getWest: function() {
        return this._southWest.lng;
      },
      getSouth: function() {
        return this._southWest.lat;
      },
      getEast: function() {
        return this._northEast.lng;
      },
      getNorth: function() {
        return this._northEast.lat;
      },
      contains: function(i) {
        typeof i[0] == "number" || i instanceof v || "lat" in i ? i = O(i) : i = U(i);
        var l = this._southWest, s = this._northEast, u, f;
        return i instanceof rt ? (u = i.getSouthWest(), f = i.getNorthEast()) : u = f = i, u.lat >= l.lat && f.lat <= s.lat && u.lng >= l.lng && f.lng <= s.lng;
      },
      intersects: function(i) {
        i = U(i);
        var l = this._southWest, s = this._northEast, u = i.getSouthWest(), f = i.getNorthEast(), d = f.lat >= l.lat && u.lat <= s.lat, g = f.lng >= l.lng && u.lng <= s.lng;
        return d && g;
      },
      overlaps: function(i) {
        i = U(i);
        var l = this._southWest, s = this._northEast, u = i.getSouthWest(), f = i.getNorthEast(), d = f.lat > l.lat && u.lat < s.lat, g = f.lng > l.lng && u.lng < s.lng;
        return d && g;
      },
      toBBoxString: function() {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth()
        ].join(",");
      },
      equals: function(i, l) {
        return i ? (i = U(i), this._southWest.equals(i.getSouthWest(), l) && this._northEast.equals(i.getNorthEast(), l)) : !1;
      },
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function U(i, l) {
      return i instanceof rt ? i : new rt(i, l);
    }
    function v(i, l, s) {
      if (isNaN(i) || isNaN(l)) throw new Error("Invalid LatLng object: (" + i + ", " + l + ")");
      this.lat = +i, this.lng = +l, s !== void 0 && (this.alt = +s);
    }
    v.prototype = {
      equals: function(i, l) {
        return i ? (i = O(i), Math.max(Math.abs(this.lat - i.lat), Math.abs(this.lng - i.lng)) <= (l === void 0 ? 1e-9 : l)) : !1;
      },
      toString: function(i) {
        return "LatLng(" + C(this.lat, i) + ", " + C(this.lng, i) + ")";
      },
      distanceTo: function(i) {
        return I.distance(this, O(i));
      },
      wrap: function() {
        return I.wrapLatLng(this);
      },
      toBounds: function(i) {
        var l = 180 * i / 40075017, s = l / Math.cos(Math.PI / 180 * this.lat);
        return U([this.lat - l, this.lng - s], [this.lat + l, this.lng + s]);
      },
      clone: function() {
        return new v(this.lat, this.lng, this.alt);
      }
    };
    function O(i, l, s) {
      return i instanceof v ? i : ot(i) && typeof i[0] != "object" ? i.length === 3 ? new v(i[0], i[1], i[2]) : i.length === 2 ? new v(i[0], i[1]) : null : i == null ? i : typeof i == "object" && "lat" in i ? new v(i.lat, "lng" in i ? i.lng : i.lon, i.alt) : l === void 0 ? null : new v(i, l, s);
    }
    var V = {
      latLngToPoint: function(i, l) {
        var s = this.projection.project(i), u = this.scale(l);
        return this.transformation._transform(s, u);
      },
      pointToLatLng: function(i, l) {
        var s = this.scale(l), u = this.transformation.untransform(i, s);
        return this.projection.unproject(u);
      },
      project: function(i) {
        return this.projection.project(i);
      },
      unproject: function(i) {
        return this.projection.unproject(i);
      },
      scale: function(i) {
        return 256 * Math.pow(2, i);
      },
      zoom: function(i) {
        return Math.log(i / 256) / Math.LN2;
      },
      getProjectedBounds: function(i) {
        if (this.infinite) return null;
        var l = this.projection.bounds, s = this.scale(i);
        return new P(this.transformation.transform(l.min, s), this.transformation.transform(l.max, s));
      },
      infinite: !1,
      wrapLatLng: function(i) {
        var l = this.wrapLng ? qt(i.lng, this.wrapLng, !0) : i.lng, s = this.wrapLat ? qt(i.lat, this.wrapLat, !0) : i.lat, u = i.alt;
        return new v(s, l, u);
      },
      wrapLatLngBounds: function(i) {
        var l = i.getCenter(), s = this.wrapLatLng(l), u = l.lat - s.lat, f = l.lng - s.lng;
        if (u === 0 && f === 0) return i;
        var d = i.getSouthWest(), g = i.getNorthEast();
        return new rt(new v(d.lat - u, d.lng - f), new v(g.lat - u, g.lng - f));
      }
    }, I = _({}, V, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function(i, l) {
        var s = Math.PI / 180, u = i.lat * s, f = l.lat * s, d = Math.sin((l.lat - i.lat) * s / 2), g = Math.sin((l.lng - i.lng) * s / 2), z = d * d + Math.cos(u) * Math.cos(f) * g * g, j = 2 * Math.atan2(Math.sqrt(z), Math.sqrt(1 - z));
        return this.R * j;
      }
    }), yt = 6378137, St = {
      R: yt,
      MAX_LATITUDE: 85.0511287798,
      project: function(i) {
        var l = Math.PI / 180, s = this.MAX_LATITUDE, u = Math.max(Math.min(s, i.lat), -s), f = Math.sin(u * l);
        return new x(this.R * i.lng * l, this.R * Math.log((1 + f) / (1 - f)) / 2);
      },
      unproject: function(i) {
        var l = 180 / Math.PI;
        return new v((2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * l, i.x * l / this.R);
      },
      bounds: (function() {
        var i = yt * Math.PI;
        return new P([-i, -i], [i, i]);
      })()
    };
    function Dt(i, l, s, u) {
      if (ot(i)) {
        this._a = i[0], this._b = i[1], this._c = i[2], this._d = i[3];
        return;
      }
      this._a = i, this._b = l, this._c = s, this._d = u;
    }
    Dt.prototype = {
      transform: function(i, l) {
        return this._transform(i.clone(), l);
      },
      _transform: function(i, l) {
        return l = l || 1, i.x = l * (this._a * i.x + this._b), i.y = l * (this._c * i.y + this._d), i;
      },
      untransform: function(i, l) {
        return l = l || 1, new x((i.x / l - this._b) / this._a, (i.y / l - this._d) / this._c);
      }
    };
    function K(i, l, s, u) {
      return new Dt(i, l, s, u);
    }
    var ht = _({}, I, {
      code: "EPSG:3857",
      projection: St,
      transformation: (function() {
        var i = 0.5 / (Math.PI * St.R);
        return K(i, 0.5, -i, 0.5);
      })()
    }), di = _({}, ht, { code: "EPSG:900913" });
    function _a(i) {
      return document.createElementNS("http://www.w3.org/2000/svg", i);
    }
    function De(i, l) {
      for (var s = "", u = 0, f, d = i.length, g, z, j; u < d; u++) {
        for (z = i[u], f = 0, g = z.length; f < g; f++)
          j = z[f], s += (f ? "L" : "M") + j.x + " " + j.y;
        s += l ? ut.svg ? "z" : "x" : "";
      }
      return s || "M0 0";
    }
    var le = document.documentElement.style, ge = "ActiveXObject" in window, ae = ge && !document.addEventListener, mi = "msLaunchUri" in navigator && !("documentMode" in document), ya = Mi("webkit"), Ui = Mi("android"), jn = Mi("android 2") || Mi("android 3"), El = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), qa = Ui && Mi("Google") && El < 537 && !("AudioNode" in window), kn = !!window.opera, Dn = !mi && Mi("chrome"), Cl = Mi("gecko") && !ya && !kn && !ge, Ur = !Dn && Mi("safari"), qi = Mi("phantom"), Ml = "OTransition" in le, ko = navigator.platform.indexOf("Win") === 0, qr = ge && "transition" in le, Al = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !jn, Ol = "MozPerspective" in le, Do = !window.L_DISABLE_3D && (qr || Al || Ol) && !Ml && !qi, ba = typeof orientation < "u" || Mi("mobile"), yu = ba && ya, bu = ba && Al, Ye = !window.PointerEvent && window.MSPointerEvent, Yr = !!(window.PointerEvent || Ye), Ro = "ontouchstart" in window || !!window.TouchEvent, Gr = !window.L_NO_TOUCH && (Ro || Yr), Ll = ba && kn, xu = ba && Cl, Pr = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, wu = (function() {
      var i = !1;
      try {
        var l = Object.defineProperty({}, "passive", { get: function() {
          i = !0;
        } });
        window.addEventListener("testPassiveEventSupport", q, l), window.removeEventListener("testPassiveEventSupport", q, l);
      } catch {
      }
      return i;
    })(), Su = (function() {
      return !!document.createElement("canvas").getContext;
    })(), xa = !!(document.createElementNS && _a("svg").createSVGRect), Ve = !!xa && (function() {
      var i = document.createElement("div");
      return i.innerHTML = "<svg/>", (i.firstChild && i.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    })(), ea = !xa && (function() {
      try {
        var i = document.createElement("div");
        i.innerHTML = '<v:shape adj="1"/>';
        var l = i.firstChild;
        return l.style.behavior = "url(#default#VML)", l && typeof l.adj == "object";
      } catch {
        return !1;
      }
    })(), Xe = navigator.platform.indexOf("Mac") === 0, Tu = navigator.platform.indexOf("Linux") === 0;
    function Mi(i) {
      return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
    }
    var ut = {
      ie: ge,
      ielt9: ae,
      edge: mi,
      webkit: ya,
      android: Ui,
      android23: jn,
      androidStock: qa,
      opera: kn,
      chrome: Dn,
      gecko: Cl,
      safari: Ur,
      phantom: qi,
      opera12: Ml,
      win: ko,
      ie3d: qr,
      webkit3d: Al,
      gecko3d: Ol,
      any3d: Do,
      mobile: ba,
      mobileWebkit: yu,
      mobileWebkit3d: bu,
      msPointer: Ye,
      pointer: Yr,
      touch: Gr,
      touchNative: Ro,
      mobileOpera: Ll,
      mobileGecko: xu,
      retina: Pr,
      passiveEvents: wu,
      canvas: Su,
      svg: xa,
      vml: ea,
      inlineSvg: Ve,
      mac: Xe,
      linux: Tu
    }, Rn = ut.msPointer ? "MSPointerDown" : "pointerdown", Bn = ut.msPointer ? "MSPointerMove" : "pointermove", Zn = ut.msPointer ? "MSPointerUp" : "pointerup", ia = ut.msPointer ? "MSPointerCancel" : "pointercancel", Ya = {
      touchstart: Rn,
      touchmove: Bn,
      touchend: Zn,
      touchcancel: ia
    }, Ga = {
      touchstart: Kr,
      touchmove: Hn,
      touchend: Hn,
      touchcancel: Hn
    }, wa = {}, Vr = !1;
    function Xr(i, l, s) {
      return l === "touchstart" && Qr(), Ga[l] ? (s = Ga[l].bind(this, s), i.addEventListener(Ya[l], s, !1), s) : (console.warn("wrong event specified:", l), q);
    }
    function Bo(i, l, s) {
      if (!Ya[l]) {
        console.warn("wrong event specified:", l);
        return;
      }
      i.removeEventListener(Ya[l], s, !1);
    }
    function jl(i) {
      wa[i.pointerId] = i;
    }
    function zu(i) {
      wa[i.pointerId] && (wa[i.pointerId] = i);
    }
    function Zo(i) {
      delete wa[i.pointerId];
    }
    function Qr() {
      Vr || (document.addEventListener(Rn, jl, !0), document.addEventListener(Bn, zu, !0), document.addEventListener(Zn, Zo, !0), document.addEventListener(ia, Zo, !0), Vr = !0);
    }
    function Hn(i, l) {
      if (l.pointerType !== (l.MSPOINTER_TYPE_MOUSE || "mouse")) {
        l.touches = [];
        for (var s in wa) l.touches.push(wa[s]);
        l.changedTouches = [l], i(l);
      }
    }
    function Kr(i, l) {
      l.MSPOINTER_TYPE_TOUCH && l.pointerType === l.MSPOINTER_TYPE_TOUCH && Se(l), Hn(i, l);
    }
    function Ho(i) {
      var l = {}, s, u;
      for (u in i)
        s = i[u], l[u] = s && s.bind ? s.bind(i) : s;
      return i = l, l.type = "dblclick", l.detail = 2, l.isTrusted = !1, l._simulated = !0, l;
    }
    var Jr = 200;
    function Fr(i, l) {
      i.addEventListener("dblclick", l);
      var s = 0, u;
      function f(d) {
        if (d.detail !== 1) {
          u = d.detail;
          return;
        }
        if (!(d.pointerType === "mouse" || d.sourceCapabilities && !d.sourceCapabilities.firesTouchEvents)) {
          var g = Rl(d);
          if (!(g.some(function(j) {
            return j instanceof HTMLLabelElement && j.attributes.for;
          }) && !g.some(function(j) {
            return j instanceof HTMLInputElement || j instanceof HTMLSelectElement;
          }))) {
            var z = Date.now();
            z - s <= Jr ? (u++, u === 2 && l(Ho(d))) : u = 1, s = z;
          }
        }
      }
      return i.addEventListener("click", f), {
        dblclick: l,
        simDblclick: f
      };
    }
    function Yi(i, l) {
      i.removeEventListener("dblclick", l.dblclick), i.removeEventListener("click", l.simDblclick);
    }
    var be = qn([
      "transform",
      "webkitTransform",
      "OTransform",
      "MozTransform",
      "msTransform"
    ]), we = qn([
      "webkitTransition",
      "transition",
      "OTransition",
      "MozTransition",
      "msTransition"
    ]), Pa = we === "webkitTransition" || we === "OTransition" ? we + "End" : "transitionend";
    function Uo(i) {
      return typeof i == "string" ? document.getElementById(i) : i;
    }
    function Un(i, l) {
      var s = i.style[l] || i.currentStyle && i.currentStyle[l];
      if ((!s || s === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(i, null);
        s = u ? u[l] : null;
      }
      return s === "auto" ? null : s;
    }
    function Pt(i, l, s) {
      var u = document.createElement(i);
      return u.className = l || "", s && s.appendChild(u), u;
    }
    function ue(i) {
      var l = i.parentNode;
      l && l.removeChild(i);
    }
    function aa(i) {
      for (; i.firstChild; ) i.removeChild(i.firstChild);
    }
    function Gi(i) {
      var l = i.parentNode;
      l && l.lastChild !== i && l.appendChild(i);
    }
    function Pi(i) {
      var l = i.parentNode;
      l && l.firstChild !== i && l.insertBefore(i, l.firstChild);
    }
    function Vi(i, l) {
      if (i.classList !== void 0) return i.classList.contains(l);
      var s = me(i);
      return s.length > 0 && new RegExp("(^|\\s)" + l + "(\\s|$)").test(s);
    }
    function zt(i, l) {
      if (i.classList !== void 0)
        for (var s = mt(l), u = 0, f = s.length; u < f; u++) i.classList.add(s[u]);
      else if (!Vi(i, l)) {
        var d = me(i);
        na(i, (d ? d + " " : "") + l);
      }
    }
    function oe(i, l) {
      i.classList !== void 0 ? i.classList.remove(l) : na(i, lt((" " + me(i) + " ").replace(" " + l + " ", " ")));
    }
    function na(i, l) {
      i.className.baseVal === void 0 ? i.className = l : i.className.baseVal = l;
    }
    function me(i) {
      return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
    }
    function Qe(i, l) {
      "opacity" in i.style ? i.style.opacity = l : "filter" in i.style && Ir(i, l);
    }
    function Ir(i, l) {
      var s = !1, u = "DXImageTransform.Microsoft.Alpha";
      try {
        s = i.filters.item(u);
      } catch {
        if (l === 1) return;
      }
      l = Math.round(l * 100), s ? (s.Enabled = l !== 100, s.Opacity = l) : i.style.filter += " progid:" + u + "(opacity=" + l + ")";
    }
    function qn(i) {
      for (var l = document.documentElement.style, s = 0; s < i.length; s++) if (i[s] in l) return i[s];
      return !1;
    }
    function Ke(i, l, s) {
      var u = l || new x(0, 0);
      i.style[be] = (ut.ie3d ? "translate(" + u.x + "px," + u.y + "px)" : "translate3d(" + u.x + "px," + u.y + "px,0)") + (s ? " scale(" + s + ")" : "");
    }
    function re(i, l) {
      i._leaflet_pos = l, ut.any3d ? Ke(i, l) : (i.style.left = l.x + "px", i.style.top = l.y + "px");
    }
    function Sa(i) {
      return i._leaflet_pos || new x(0, 0);
    }
    var Va, Xa, qo;
    if ("onselectstart" in document)
      Va = function() {
        Nt(window, "selectstart", Se);
      }, Xa = function() {
        Jt(window, "selectstart", Se);
      };
    else {
      var Zt = qn([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect"
      ]);
      Va = function() {
        if (Zt) {
          var i = document.documentElement.style;
          qo = i[Zt], i[Zt] = "none";
        }
      }, Xa = function() {
        Zt && (document.documentElement.style[Zt] = qo, qo = void 0);
      };
    }
    function kl() {
      Nt(window, "dragstart", Se);
    }
    function Qa() {
      Jt(window, "dragstart", Se);
    }
    var Ta, vi;
    function Re(i) {
      for (; i.tabIndex === -1; ) i = i.parentNode;
      i.style && (Yn(), Ta = i, vi = i.style.outlineStyle, i.style.outlineStyle = "none", Nt(window, "keydown", Yn));
    }
    function Yn() {
      Ta && (Ta.style.outlineStyle = vi, Ta = void 0, vi = void 0, Jt(window, "keydown", Yn));
    }
    function Wr(i) {
      do
        i = i.parentNode;
      while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
      return i;
    }
    function Gn(i) {
      var l = i.getBoundingClientRect();
      return {
        x: l.width / i.offsetWidth || 1,
        y: l.height / i.offsetHeight || 1,
        boundingClientRect: l
      };
    }
    var $r = {
      __proto__: null,
      TRANSFORM: be,
      TRANSITION: we,
      TRANSITION_END: Pa,
      get: Uo,
      getStyle: Un,
      create: Pt,
      remove: ue,
      empty: aa,
      toFront: Gi,
      toBack: Pi,
      hasClass: Vi,
      addClass: zt,
      removeClass: oe,
      setClass: na,
      getClass: me,
      setOpacity: Qe,
      testProp: qn,
      setTransform: Ke,
      setPosition: re,
      getPosition: Sa,
      get disableTextSelection() {
        return Va;
      },
      get enableTextSelection() {
        return Xa;
      },
      disableImageDrag: kl,
      enableImageDrag: Qa,
      preventOutline: Re,
      restoreOutline: Yn,
      getSizedParentNode: Wr,
      getScale: Gn
    };
    function Nt(i, l, s, u) {
      if (l && typeof l == "object") for (var f in l) la(i, f, l[f], s);
      else {
        l = mt(l);
        for (var d = 0, g = l.length; d < g; d++) la(i, l[d], s, u);
      }
      return this;
    }
    var ve = "_leaflet_events";
    function Jt(i, l, s, u) {
      if (arguments.length === 1)
        Yo(i), delete i[ve];
      else if (l && typeof l == "object") for (var f in l) Dl(i, f, l[f], s);
      else if (l = mt(l), arguments.length === 2) Yo(i, function(z) {
        return Xt(l, z) !== -1;
      });
      else for (var d = 0, g = l.length; d < g; d++) Dl(i, l[d], s, u);
      return this;
    }
    function Yo(i, l) {
      for (var s in i[ve]) {
        var u = s.split(/\d/)[0];
        (!l || l(u)) && Dl(i, u, null, null, s);
      }
    }
    var Pn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function la(i, l, s, u) {
      var f = l + X(s) + (u ? "_" + X(u) : "");
      if (i[ve] && i[ve][f]) return this;
      var d = function(z) {
        return s.call(u || i, z || window.event);
      }, g = d;
      !ut.touchNative && ut.pointer && l.indexOf("touch") === 0 ? d = Xr(i, l, d) : ut.touch && l === "dblclick" ? d = Fr(i, d) : "addEventListener" in i ? l === "touchstart" || l === "touchmove" || l === "wheel" || l === "mousewheel" ? i.addEventListener(Pn[l] || l, d, ut.passiveEvents ? { passive: !1 } : !1) : l === "mouseenter" || l === "mouseleave" ? (d = function(z) {
        z = z || window.event, ii(i, z) && g(z);
      }, i.addEventListener(Pn[l], d, !1)) : i.addEventListener(l, g, !1) : i.attachEvent("on" + l, d), i[ve] = i[ve] || {}, i[ve][f] = d;
    }
    function Dl(i, l, s, u, f) {
      f = f || l + X(s) + (u ? "_" + X(u) : "");
      var d = i[ve] && i[ve][f];
      if (!d) return this;
      !ut.touchNative && ut.pointer && l.indexOf("touch") === 0 ? Bo(i, l, d) : ut.touch && l === "dblclick" ? Yi(i, d) : "removeEventListener" in i ? i.removeEventListener(Pn[l] || l, d, !1) : i.detachEvent("on" + l, d), i[ve][f] = null;
    }
    function oa(i) {
      return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = !0 : i.cancelBubble = !0, this;
    }
    function ra(i) {
      return la(i, "wheel", oa), this;
    }
    function Vn(i) {
      return Nt(i, "mousedown touchstart dblclick contextmenu", oa), i._leaflet_disable_click = !0, this;
    }
    function Se(i) {
      return i.preventDefault ? i.preventDefault() : i.returnValue = !1, this;
    }
    function sa(i) {
      return Se(i), oa(i), this;
    }
    function Rl(i) {
      if (i.composedPath) return i.composedPath();
      for (var l = [], s = i.target; s; )
        l.push(s), s = s.parentNode;
      return l;
    }
    function ts(i, l) {
      if (!l) return new x(i.clientX, i.clientY);
      var s = Gn(l), u = s.boundingClientRect;
      return new x((i.clientX - u.left) / s.x - l.clientLeft, (i.clientY - u.top) / s.y - l.clientTop);
    }
    var Nu = ut.linux && ut.chrome ? window.devicePixelRatio : ut.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function Xn(i) {
      return ut.edge ? i.wheelDeltaY / 2 : i.deltaY && i.deltaMode === 0 ? -i.deltaY / Nu : i.deltaY && i.deltaMode === 1 ? -i.deltaY * 20 : i.deltaY && i.deltaMode === 2 ? -i.deltaY * 60 : i.deltaX || i.deltaZ ? 0 : i.wheelDelta ? (i.wheelDeltaY || i.wheelDelta) / 2 : i.detail && Math.abs(i.detail) < 32765 ? -i.detail * 20 : i.detail ? i.detail / -32765 * 60 : 0;
    }
    function ii(i, l) {
      var s = l.relatedTarget;
      if (!s) return !0;
      try {
        for (; s && s !== i; ) s = s.parentNode;
      } catch {
        return !1;
      }
      return s !== i;
    }
    var Go = {
      __proto__: null,
      on: Nt,
      off: Jt,
      stopPropagation: oa,
      disableScrollPropagation: ra,
      disableClickPropagation: Vn,
      preventDefault: Se,
      stop: sa,
      getPropagationPath: Rl,
      getMousePosition: ts,
      getWheelDelta: Xn,
      isExternalTarget: ii,
      addListener: Nt,
      removeListener: Jt
    }, Bl = at.extend({
      run: function(i, l, s, u) {
        this.stop(), this._el = i, this._inProgress = !0, this._duration = s || 0.25, this._easeOutPower = 1 / Math.max(u || 0.5, 0.2), this._startPos = Sa(i), this._offset = l.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = xt(this._animate, this), this._step();
      },
      _step: function(i) {
        var l = +/* @__PURE__ */ new Date() - this._startTime, s = this._duration * 1e3;
        l < s ? this._runFrame(this._easeOut(l / s), i) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(i, l) {
        var s = this._startPos.add(this._offset.multiplyBy(i));
        l && s._round(), re(this._el, s), this.fire("step");
      },
      _complete: function() {
        _t(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(i) {
        return 1 - Math.pow(1 - i, this._easeOutPower);
      }
    }), jt = at.extend({
      options: {
        crs: ht,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0
      },
      initialize: function(i, l) {
        l = $(this, l), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(i), this._initLayout(), this._onResize = tt(this._onResize, this), this._initEvents(), l.maxBounds && this.setMaxBounds(l.maxBounds), l.zoom !== void 0 && (this._zoom = this._limitZoom(l.zoom)), l.center && l.zoom !== void 0 && this.setView(O(l.center), l.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = we && ut.any3d && !ut.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Nt(this._proxy, Pa, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      setView: function(i, l, s) {
        return l = l === void 0 ? this._zoom : this._limitZoom(l), i = this._limitCenter(O(i), l, this.options.maxBounds), s = s || {}, this._stop(), this._loaded && !s.reset && s !== !0 && (s.animate !== void 0 && (s.zoom = _({ animate: s.animate }, s.zoom), s.pan = _({
          animate: s.animate,
          duration: s.duration
        }, s.pan)), this._zoom !== l ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, l, s.zoom) : this._tryAnimatedPan(i, s.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(i, l, s.pan && s.pan.noMoveStart), this);
      },
      setZoom: function(i, l) {
        return this._loaded ? this.setView(this.getCenter(), i, { zoom: l }) : (this._zoom = i, this);
      },
      zoomIn: function(i, l) {
        return i = i || (ut.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + i, l);
      },
      zoomOut: function(i, l) {
        return i = i || (ut.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - i, l);
      },
      setZoomAround: function(i, l, s) {
        var u = this.getZoomScale(l), f = this.getSize().divideBy(2), d = (i instanceof x ? i : this.latLngToContainerPoint(i)).subtract(f).multiplyBy(1 - 1 / u), g = this.containerPointToLatLng(f.add(d));
        return this.setView(g, l, { zoom: s });
      },
      _getBoundsCenterZoom: function(i, l) {
        l = l || {}, i = i.getBounds ? i.getBounds() : U(i);
        var s = R(l.paddingTopLeft || l.padding || [0, 0]), u = R(l.paddingBottomRight || l.padding || [0, 0]), f = this.getBoundsZoom(i, !1, s.add(u));
        if (f = typeof l.maxZoom == "number" ? Math.min(l.maxZoom, f) : f, f === 1 / 0) return {
          center: i.getCenter(),
          zoom: f
        };
        var d = u.subtract(s).divideBy(2), g = this.project(i.getSouthWest(), f), z = this.project(i.getNorthEast(), f);
        return {
          center: this.unproject(g.add(z).divideBy(2).add(d), f),
          zoom: f
        };
      },
      fitBounds: function(i, l) {
        if (i = U(i), !i.isValid()) throw new Error("Bounds are not valid.");
        var s = this._getBoundsCenterZoom(i, l);
        return this.setView(s.center, s.zoom, l);
      },
      fitWorld: function(i) {
        return this.fitBounds([[-90, -180], [90, 180]], i);
      },
      panTo: function(i, l) {
        return this.setView(i, this._zoom, { pan: l });
      },
      panBy: function(i, l) {
        if (i = R(i).round(), l = l || {}, !i.x && !i.y) return this.fire("moveend");
        if (l.animate !== !0 && !this.getSize().contains(i))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(i)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new Bl(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), l.noMoveStart || this.fire("movestart"), l.animate !== !1) {
          zt(this._mapPane, "leaflet-pan-anim");
          var s = this._getMapPanePos().subtract(i).round();
          this._panAnim.run(this._mapPane, s, l.duration || 0.25, l.easeLinearity);
        } else
          this._rawPanBy(i), this.fire("move").fire("moveend");
        return this;
      },
      flyTo: function(i, l, s) {
        if (s = s || {}, s.animate === !1 || !ut.any3d) return this.setView(i, l, s);
        this._stop();
        var u = this.project(this.getCenter()), f = this.project(i), d = this.getSize(), g = this._zoom;
        i = O(i), l = l === void 0 ? g : l;
        var z = Math.max(d.x, d.y), j = z * this.getZoomScale(g, l), Z = f.distanceTo(u) || 1, W = 1.42, dt = W * W;
        function Tt($t) {
          var We = $t ? -1 : 1, ki = $t ? j : z, wi = (j * j - z * z + We * dt * dt * Z * Z) / (2 * ki * dt * Z), or = Math.sqrt(wi * wi + 1) - wi;
          return or < 1e-9 ? -18 : Math.log(or);
        }
        function he($t) {
          return (Math.exp($t) - Math.exp(-$t)) / 2;
        }
        function Oe($t) {
          return (Math.exp($t) + Math.exp(-$t)) / 2;
        }
        function oi($t) {
          return he($t) / Oe($t);
        }
        var ri = Tt(0);
        function Ge($t) {
          return z * (Oe(ri) / Oe(ri + W * $t));
        }
        function sn($t) {
          return z * (Oe(ri) * oi(ri + W * $t) - he(ri)) / dt;
        }
        function un($t) {
          return 1 - Math.pow(1 - $t, 1.5);
        }
        var io = Date.now(), cn = (Tt(1) - ri) / W, si = s.duration ? 1e3 * s.duration : 1e3 * cn * 0.8;
        function Ie() {
          var $t = (Date.now() - io) / si, We = un($t) * cn;
          $t <= 1 ? (this._flyToFrame = xt(Ie, this), this._move(this.unproject(u.add(f.subtract(u).multiplyBy(sn(We) / Z)), g), this.getScaleZoom(z / Ge(We), g), { flyTo: !0 })) : this._move(i, l)._moveEnd(!0);
        }
        return this._moveStart(!0, s.noMoveStart), Ie.call(this), this;
      },
      flyToBounds: function(i, l) {
        var s = this._getBoundsCenterZoom(i, l);
        return this.flyTo(s.center, s.zoom, l);
      },
      setMaxBounds: function(i) {
        return i = U(i), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), i.isValid() ? (this.options.maxBounds = i, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      setMinZoom: function(i) {
        var l = this.options.minZoom;
        return this.options.minZoom = i, this._loaded && l !== i && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(i) : this;
      },
      setMaxZoom: function(i) {
        var l = this.options.maxZoom;
        return this.options.maxZoom = i, this._loaded && l !== i && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(i) : this;
      },
      panInsideBounds: function(i, l) {
        this._enforcingBounds = !0;
        var s = this.getCenter(), u = this._limitCenter(s, this._zoom, U(i));
        return s.equals(u) || this.panTo(u, l), this._enforcingBounds = !1, this;
      },
      panInside: function(i, l) {
        l = l || {};
        var s = R(l.paddingTopLeft || l.padding || [0, 0]), u = R(l.paddingBottomRight || l.padding || [0, 0]), f = this.project(this.getCenter()), d = this.project(i), g = this.getPixelBounds(), z = Y([g.min.add(s), g.max.subtract(u)]), j = z.getSize();
        if (!z.contains(d)) {
          this._enforcingBounds = !0;
          var Z = d.subtract(z.getCenter()), W = z.extend(d).getSize().subtract(j);
          f.x += Z.x < 0 ? -W.x : W.x, f.y += Z.y < 0 ? -W.y : W.y, this.panTo(this.unproject(f), l), this._enforcingBounds = !1;
        }
        return this;
      },
      invalidateSize: function(i) {
        if (!this._loaded) return this;
        i = _({
          animate: !1,
          pan: !0
        }, i === !0 ? { animate: !0 } : i);
        var l = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var s = this.getSize(), u = l.divideBy(2).round(), f = s.divideBy(2).round(), d = u.subtract(f);
        return !d.x && !d.y ? this : (i.animate && i.pan ? this.panBy(d) : (i.pan && this._rawPanBy(d), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(tt(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: l,
          newSize: s
        }));
      },
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      locate: function(i) {
        if (i = this._locateOptions = _({
          timeout: 1e4,
          watch: !1
        }, i), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var l = tt(this._handleGeolocationResponse, this), s = tt(this._handleGeolocationError, this);
        return i.watch ? this._locationWatchId = navigator.geolocation.watchPosition(l, s, i) : navigator.geolocation.getCurrentPosition(l, s, i), this;
      },
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(i) {
        if (this._container._leaflet_id) {
          var l = i.code, s = i.message || (l === 1 ? "permission denied" : l === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: l,
            message: "Geolocation error: " + s + "."
          });
        }
      },
      _handleGeolocationResponse: function(i) {
        if (this._container._leaflet_id) {
          var l = i.coords.latitude, s = i.coords.longitude, u = new v(l, s), f = u.toBounds(i.coords.accuracy * 2), d = this._locateOptions;
          if (d.setView) {
            var g = this.getBoundsZoom(f);
            this.setView(u, d.maxZoom ? Math.min(g, d.maxZoom) : g);
          }
          var z = {
            latlng: u,
            bounds: f,
            timestamp: i.timestamp
          };
          for (var j in i.coords) typeof i.coords[j] == "number" && (z[j] = i.coords[j]);
          this.fire("locationfound", z);
        }
      },
      addHandler: function(i, l) {
        if (!l) return this;
        var s = this[i] = new l(this);
        return this._handlers.push(s), this.options[i] && s.enable(), this;
      },
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), ue(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (_t(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var i;
        for (i in this._layers) this._layers[i].remove();
        for (i in this._panes) ue(this._panes[i]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      createPane: function(i, l) {
        var s = Pt("div", "leaflet-pane" + (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""), l || this._mapPane);
        return i && (this._panes[i] = s), s;
      },
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      getZoom: function() {
        return this._zoom;
      },
      getBounds: function() {
        var i = this.getPixelBounds();
        return new rt(this.unproject(i.getBottomLeft()), this.unproject(i.getTopRight()));
      },
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      getBoundsZoom: function(i, l, s) {
        i = U(i), s = R(s || [0, 0]);
        var u = this.getZoom() || 0, f = this.getMinZoom(), d = this.getMaxZoom(), g = i.getNorthWest(), z = i.getSouthEast(), j = this.getSize().subtract(s), Z = Y(this.project(z, u), this.project(g, u)).getSize(), W = ut.any3d ? this.options.zoomSnap : 1, dt = j.x / Z.x, Tt = j.y / Z.y, he = l ? Math.max(dt, Tt) : Math.min(dt, Tt);
        return u = this.getScaleZoom(he, u), W && (u = Math.round(u / (W / 100)) * (W / 100), u = l ? Math.ceil(u / W) * W : Math.floor(u / W) * W), Math.max(f, Math.min(d, u));
      },
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
      },
      getPixelBounds: function(i, l) {
        var s = this._getTopLeftPoint(i, l);
        return new P(s, s.add(this.getSize()));
      },
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function(i) {
        return this.options.crs.getProjectedBounds(i === void 0 ? this.getZoom() : i);
      },
      getPane: function(i) {
        return typeof i == "string" ? this._panes[i] : i;
      },
      getPanes: function() {
        return this._panes;
      },
      getContainer: function() {
        return this._container;
      },
      getZoomScale: function(i, l) {
        var s = this.options.crs;
        return l = l === void 0 ? this._zoom : l, s.scale(i) / s.scale(l);
      },
      getScaleZoom: function(i, l) {
        var s = this.options.crs;
        l = l === void 0 ? this._zoom : l;
        var u = s.zoom(i * s.scale(l));
        return isNaN(u) ? 1 / 0 : u;
      },
      project: function(i, l) {
        return l = l === void 0 ? this._zoom : l, this.options.crs.latLngToPoint(O(i), l);
      },
      unproject: function(i, l) {
        return l = l === void 0 ? this._zoom : l, this.options.crs.pointToLatLng(R(i), l);
      },
      layerPointToLatLng: function(i) {
        var l = R(i).add(this.getPixelOrigin());
        return this.unproject(l);
      },
      latLngToLayerPoint: function(i) {
        return this.project(O(i))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function(i) {
        return this.options.crs.wrapLatLng(O(i));
      },
      wrapLatLngBounds: function(i) {
        return this.options.crs.wrapLatLngBounds(U(i));
      },
      distance: function(i, l) {
        return this.options.crs.distance(O(i), O(l));
      },
      containerPointToLayerPoint: function(i) {
        return R(i).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function(i) {
        return R(i).add(this._getMapPanePos());
      },
      containerPointToLatLng: function(i) {
        var l = this.containerPointToLayerPoint(R(i));
        return this.layerPointToLatLng(l);
      },
      latLngToContainerPoint: function(i) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(O(i)));
      },
      mouseEventToContainerPoint: function(i) {
        return ts(i, this._container);
      },
      mouseEventToLayerPoint: function(i) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i));
      },
      mouseEventToLatLng: function(i) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
      },
      _initContainer: function(i) {
        var l = this._container = Uo(i);
        if (l) {
          if (l._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        Nt(l, "scroll", this._onScroll, this), this._containerId = X(l);
      },
      _initLayout: function() {
        var i = this._container;
        this._fadeAnimated = this.options.fadeAnimation && ut.any3d, zt(i, "leaflet-container" + (ut.touch ? " leaflet-touch" : "") + (ut.retina ? " leaflet-retina" : "") + (ut.ielt9 ? " leaflet-oldie" : "") + (ut.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var l = Un(i, "position");
        l !== "absolute" && l !== "relative" && l !== "fixed" && l !== "sticky" && (i.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var i = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), re(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (zt(i.markerPane, "leaflet-zoom-hide"), zt(i.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function(i, l, s) {
        re(this._mapPane, new x(0, 0));
        var u = !this._loaded;
        this._loaded = !0, l = this._limitZoom(l), this.fire("viewprereset");
        var f = this._zoom !== l;
        this._moveStart(f, s)._move(i, l)._moveEnd(f), this.fire("viewreset"), u && this.fire("load");
      },
      _moveStart: function(i, l) {
        return i && this.fire("zoomstart"), l || this.fire("movestart"), this;
      },
      _move: function(i, l, s, u) {
        l === void 0 && (l = this._zoom);
        var f = this._zoom !== l;
        return this._zoom = l, this._lastCenter = i, this._pixelOrigin = this._getNewPixelOrigin(i), u ? s && s.pinch && this.fire("zoom", s) : ((f || s && s.pinch) && this.fire("zoom", s), this.fire("move", s)), this;
      },
      _moveEnd: function(i) {
        return i && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return _t(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(i) {
        re(this._mapPane, this._getMapPanePos().subtract(i));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function(i) {
        this._targets = {}, this._targets[X(this._container)] = this;
        var l = i ? Jt : Nt;
        l(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && l(window, "resize", this._onResize, this), ut.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        _t(this._resizeRequest), this._resizeRequest = xt(function() {
          this.invalidateSize({ debounceMoveend: !0 });
        }, this);
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var i = this._getMapPanePos();
        Math.max(Math.abs(i.x), Math.abs(i.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(i, l) {
        for (var s = [], u, f = l === "mouseout" || l === "mouseover", d = i.target || i.srcElement, g = !1; d; ) {
          if (u = this._targets[X(d)], u && (l === "click" || l === "preclick") && this._draggableMoved(u)) {
            g = !0;
            break;
          }
          if (u && u.listens(l, !0) && (f && !ii(d, i) || (s.push(u), f)) || d === this._container) break;
          d = d.parentNode;
        }
        return !s.length && !g && !f && this.listens(l, !0) && (s = [this]), s;
      },
      _isClickDisabled: function(i) {
        for (; i && i !== this._container; ) {
          if (i._leaflet_disable_click) return !0;
          i = i.parentNode;
        }
      },
      _handleDOMEvent: function(i) {
        var l = i.target || i.srcElement;
        if (!(!this._loaded || l._leaflet_disable_events || i.type === "click" && this._isClickDisabled(l))) {
          var s = i.type;
          s === "mousedown" && Re(l), this._fireDOMEvent(i, s);
        }
      },
      _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu"
      ],
      _fireDOMEvent: function(i, l, s) {
        if (i.type === "click") {
          var u = _({}, i);
          u.type = "preclick", this._fireDOMEvent(u, u.type, s);
        }
        var f = this._findEventTargets(i, l);
        if (s) {
          for (var d = [], g = 0; g < s.length; g++) s[g].listens(l, !0) && d.push(s[g]);
          f = d.concat(f);
        }
        if (f.length) {
          l === "contextmenu" && Se(i);
          var z = f[0], j = { originalEvent: i };
          if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
            var Z = z.getLatLng && (!z._radius || z._radius <= 10);
            j.containerPoint = Z ? this.latLngToContainerPoint(z.getLatLng()) : this.mouseEventToContainerPoint(i), j.layerPoint = this.containerPointToLayerPoint(j.containerPoint), j.latlng = Z ? z.getLatLng() : this.layerPointToLatLng(j.layerPoint);
          }
          for (g = 0; g < f.length; g++)
            if (f[g].fire(l, j, !0), j.originalEvent._stopped || f[g].options.bubblingMouseEvents === !1 && Xt(this._mouseEvents, l) !== -1) return;
        }
      },
      _draggableMoved: function(i) {
        return i = i.dragging && i.dragging.enabled() ? i : this, i.dragging && i.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var i = 0, l = this._handlers.length; i < l; i++) this._handlers[i].disable();
      },
      whenReady: function(i, l) {
        return this._loaded ? i.call(l || this, { target: this }) : this.on("load", i, l), this;
      },
      _getMapPanePos: function() {
        return Sa(this._mapPane) || new x(0, 0);
      },
      _moved: function() {
        var i = this._getMapPanePos();
        return i && !i.equals([0, 0]);
      },
      _getTopLeftPoint: function(i, l) {
        return (i && l !== void 0 ? this._getNewPixelOrigin(i, l) : this.getPixelOrigin()).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(i, l) {
        var s = this.getSize()._divideBy(2);
        return this.project(i, l)._subtract(s)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(i, l, s) {
        var u = this._getNewPixelOrigin(s, l);
        return this.project(i, l)._subtract(u);
      },
      _latLngBoundsToNewLayerBounds: function(i, l, s) {
        var u = this._getNewPixelOrigin(s, l);
        return Y([
          this.project(i.getSouthWest(), l)._subtract(u),
          this.project(i.getNorthWest(), l)._subtract(u),
          this.project(i.getSouthEast(), l)._subtract(u),
          this.project(i.getNorthEast(), l)._subtract(u)
        ]);
      },
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function(i) {
        return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function(i, l, s) {
        if (!s) return i;
        var u = this.project(i, l), f = this.getSize().divideBy(2), d = new P(u.subtract(f), u.add(f)), g = this._getBoundsOffset(d, s, l);
        return Math.abs(g.x) <= 1 && Math.abs(g.y) <= 1 ? i : this.unproject(u.add(g), l);
      },
      _limitOffset: function(i, l) {
        if (!l) return i;
        var s = this.getPixelBounds(), u = new P(s.min.add(i), s.max.add(i));
        return i.add(this._getBoundsOffset(u, l));
      },
      _getBoundsOffset: function(i, l, s) {
        var u = Y(this.project(l.getNorthEast(), s), this.project(l.getSouthWest(), s)), f = u.min.subtract(i.min), d = u.max.subtract(i.max);
        return new x(this._rebound(f.x, -d.x), this._rebound(f.y, -d.y));
      },
      _rebound: function(i, l) {
        return i + l > 0 ? Math.round(i - l) / 2 : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(l));
      },
      _limitZoom: function(i) {
        var l = this.getMinZoom(), s = this.getMaxZoom(), u = ut.any3d ? this.options.zoomSnap : 1;
        return u && (i = Math.round(i / u) * u), Math.max(l, Math.min(s, i));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        oe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(i, l) {
        var s = this._getCenterOffset(i)._trunc();
        return (l && l.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, l), !0);
      },
      _createAnimProxy: function() {
        var i = this._proxy = Pt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(i), this.on("zoomanim", function(l) {
          var s = be, u = this._proxy.style[s];
          Ke(this._proxy, this.project(l.center, l.zoom), this.getZoomScale(l.zoom, 1)), u === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        ue(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var i = this.getCenter(), l = this.getZoom();
        Ke(this._proxy, this.project(i, l), this.getZoomScale(l, 1));
      },
      _catchTransitionEnd: function(i) {
        this._animatingZoom && i.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(i, l, s) {
        if (this._animatingZoom) return !0;
        if (s = s || {}, !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(l - this._zoom) > this.options.zoomAnimationThreshold) return !1;
        var u = this.getZoomScale(l), f = this._getCenterOffset(i)._divideBy(1 - 1 / u);
        return s.animate !== !0 && !this.getSize().contains(f) ? !1 : (xt(function() {
          this._moveStart(!0, s.noMoveStart || !1)._animateZoom(i, l, !0);
        }, this), !0);
      },
      _animateZoom: function(i, l, s, u) {
        this._mapPane && (s && (this._animatingZoom = !0, this._animateToCenter = i, this._animateToZoom = l, zt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: i,
          zoom: l,
          noUpdate: u
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(tt(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && oe(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function Ka(i, l) {
      return new jt(i, l);
    }
    var ai = Ct.extend({
      options: { position: "topright" },
      initialize: function(i) {
        $(this, i);
      },
      getPosition: function() {
        return this.options.position;
      },
      setPosition: function(i) {
        var l = this._map;
        return l && l.removeControl(this), this.options.position = i, l && l.addControl(this), this;
      },
      getContainer: function() {
        return this._container;
      },
      addTo: function(i) {
        this.remove(), this._map = i;
        var l = this._container = this.onAdd(i), s = this.getPosition(), u = i._controlCorners[s];
        return zt(l, "leaflet-control"), s.indexOf("bottom") !== -1 ? u.insertBefore(l, u.firstChild) : u.appendChild(l), this._map.on("unload", this.remove, this), this;
      },
      remove: function() {
        return this._map ? (ue(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(i) {
        this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
      }
    }), za = function(i) {
      return new ai(i);
    };
    jt.include({
      addControl: function(i) {
        return i.addTo(this), this;
      },
      removeControl: function(i) {
        return i.remove(), this;
      },
      _initControlPos: function() {
        var i = this._controlCorners = {}, l = "leaflet-", s = this._controlContainer = Pt("div", l + "control-container", this._container);
        function u(f, d) {
          var g = l + f + " " + l + d;
          i[f + d] = Pt("div", g, s);
        }
        u("top", "left"), u("top", "right"), u("bottom", "left"), u("bottom", "right");
      },
      _clearControlPos: function() {
        for (var i in this._controlCorners) ue(this._controlCorners[i]);
        ue(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Po = ai.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function(i, l, s, u) {
          return s < u ? -1 : u < s ? 1 : 0;
        }
      },
      initialize: function(i, l, s) {
        $(this, s), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var u in i) this._addLayer(i[u], u);
        for (u in l) this._addLayer(l[u], u, !0);
      },
      onAdd: function(i) {
        this._initLayout(), this._update(), this._map = i, i.on("zoomend", this._checkDisabledLayers, this);
        for (var l = 0; l < this._layers.length; l++) this._layers[l].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(i) {
        return ai.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function(i, l) {
        return this._addLayer(i, l), this._map ? this._update() : this;
      },
      addOverlay: function(i, l) {
        return this._addLayer(i, l, !0), this._map ? this._update() : this;
      },
      removeLayer: function(i) {
        i.off("add remove", this._onLayerChange, this);
        var l = this._getLayer(X(i));
        return l && this._layers.splice(this._layers.indexOf(l), 1), this._map ? this._update() : this;
      },
      expand: function() {
        zt(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var i = this._map.getSize().y - (this._container.offsetTop + 50);
        return i < this._section.clientHeight ? (zt(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : oe(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      collapse: function() {
        return oe(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var i = "leaflet-control-layers", l = this._container = Pt("div", i), s = this.options.collapsed;
        l.setAttribute("aria-haspopup", !0), Vn(l), ra(l);
        var u = this._section = Pt("section", i + "-list");
        s && (this._map.on("click", this.collapse, this), Nt(l, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var f = this._layersLink = Pt("a", i + "-toggle", l);
        f.href = "#", f.title = "Layers", f.setAttribute("role", "button"), Nt(f, {
          keydown: function(d) {
            d.keyCode === 13 && this._expandSafely();
          },
          click: function(d) {
            Se(d), this._expandSafely();
          }
        }, this), s || this.expand(), this._baseLayersList = Pt("div", i + "-base", u), this._separator = Pt("div", i + "-separator", u), this._overlaysList = Pt("div", i + "-overlays", u), l.appendChild(u);
      },
      _getLayer: function(i) {
        for (var l = 0; l < this._layers.length; l++) if (this._layers[l] && X(this._layers[l].layer) === i) return this._layers[l];
      },
      _addLayer: function(i, l, s) {
        this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: i,
          name: l,
          overlay: s
        }), this.options.sortLayers && this._layers.sort(tt(function(u, f) {
          return this.options.sortFunction(u.layer, f.layer, u.name, f.name);
        }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container) return this;
        aa(this._baseLayersList), aa(this._overlaysList), this._layerControlInputs = [];
        var i, l, s, u, f = 0;
        for (s = 0; s < this._layers.length; s++)
          u = this._layers[s], this._addItem(u), l = l || u.overlay, i = i || !u.overlay, f += u.overlay ? 0 : 1;
        return this.options.hideSingleBase && (i = i && f > 1, this._baseLayersList.style.display = i ? "" : "none"), this._separator.style.display = l && i ? "" : "none", this;
      },
      _onLayerChange: function(i) {
        this._handlingClick || this._update();
        var l = this._getLayer(X(i.target)), s = l.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
        s && this._map.fire(s, l);
      },
      _createRadioElement: function(i, l) {
        var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + i + '"' + (l ? ' checked="checked"' : "") + "/>", u = document.createElement("div");
        return u.innerHTML = s, u.firstChild;
      },
      _addItem: function(i) {
        var l = document.createElement("label"), s = this._map.hasLayer(i.layer), u;
        i.overlay ? (u = document.createElement("input"), u.type = "checkbox", u.className = "leaflet-control-layers-selector", u.defaultChecked = s) : u = this._createRadioElement("leaflet-base-layers_" + X(this), s), this._layerControlInputs.push(u), u.layerId = X(i.layer), Nt(u, "click", this._onInputClick, this);
        var f = document.createElement("span");
        f.innerHTML = " " + i.name;
        var d = document.createElement("span");
        return l.appendChild(d), d.appendChild(u), d.appendChild(f), (i.overlay ? this._overlaysList : this._baseLayersList).appendChild(l), this._checkDisabledLayers(), l;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var i = this._layerControlInputs, l, s, u = [], f = [];
          this._handlingClick = !0;
          for (var d = i.length - 1; d >= 0; d--)
            l = i[d], s = this._getLayer(l.layerId).layer, l.checked ? u.push(s) : l.checked || f.push(s);
          for (d = 0; d < f.length; d++) this._map.hasLayer(f[d]) && this._map.removeLayer(f[d]);
          for (d = 0; d < u.length; d++) this._map.hasLayer(u[d]) || this._map.addLayer(u[d]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var i = this._layerControlInputs, l, s, u = this._map.getZoom(), f = i.length - 1; f >= 0; f--)
          l = i[f], s = this._getLayer(l.layerId).layer, l.disabled = s.options.minZoom !== void 0 && u < s.options.minZoom || s.options.maxZoom !== void 0 && u > s.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var i = this._section;
        this._preventClick = !0, Nt(i, "click", Se), this.expand();
        var l = this;
        setTimeout(function() {
          Jt(i, "click", Se), l._preventClick = !1;
        });
      }
    }), Qn = function(i, l, s) {
      return new Po(i, l, s);
    }, pi = ai.extend({
      options: {
        position: "topleft",
        zoomInText: '<span aria-hidden="true">+</span>',
        zoomInTitle: "Zoom in",
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(i) {
        var l = "leaflet-control-zoom", s = Pt("div", l + " leaflet-bar"), u = this.options;
        return this._zoomInButton = this._createButton(u.zoomInText, u.zoomInTitle, l + "-in", s, this._zoomIn), this._zoomOutButton = this._createButton(u.zoomOutText, u.zoomOutTitle, l + "-out", s, this._zoomOut), this._updateDisabled(), i.on("zoomend zoomlevelschange", this._updateDisabled, this), s;
      },
      onRemove: function(i) {
        i.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(i) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
      },
      _zoomOut: function(i) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
      },
      _createButton: function(i, l, s, u, f) {
        var d = Pt("a", s, u);
        return d.innerHTML = i, d.href = "#", d.title = l, d.setAttribute("role", "button"), d.setAttribute("aria-label", l), Vn(d), Nt(d, "click", sa), Nt(d, "click", f, this), Nt(d, "click", this._refocusOnMap, this), d;
      },
      _updateDisabled: function() {
        var i = this._map, l = "leaflet-disabled";
        oe(this._zoomInButton, l), oe(this._zoomOutButton, l), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (zt(this._zoomOutButton, l), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (zt(this._zoomInButton, l), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    jt.mergeOptions({ zoomControl: !0 }), jt.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new pi(), this.addControl(this.zoomControl));
    });
    var Vo = function(i) {
      return new pi(i);
    }, Ja = ai.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0
      },
      onAdd: function(i) {
        var l = "leaflet-control-scale", s = Pt("div", l), u = this.options;
        return this._addScales(u, l + "-line", s), i.on(u.updateWhenIdle ? "moveend" : "move", this._update, this), i.whenReady(this._update, this), s;
      },
      onRemove: function(i) {
        i.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(i, l, s) {
        i.metric && (this._mScale = Pt("div", l, s)), i.imperial && (this._iScale = Pt("div", l, s));
      },
      _update: function() {
        var i = this._map, l = i.getSize().y / 2, s = i.distance(i.containerPointToLatLng([0, l]), i.containerPointToLatLng([this.options.maxWidth, l]));
        this._updateScales(s);
      },
      _updateScales: function(i) {
        this.options.metric && i && this._updateMetric(i), this.options.imperial && i && this._updateImperial(i);
      },
      _updateMetric: function(i) {
        var l = this._getRoundNum(i), s = l < 1e3 ? l + " m" : l / 1e3 + " km";
        this._updateScale(this._mScale, s, l / i);
      },
      _updateImperial: function(i) {
        var l = i * 3.2808399, s, u, f;
        l > 5280 ? (s = l / 5280, u = this._getRoundNum(s), this._updateScale(this._iScale, u + " mi", u / s)) : (f = this._getRoundNum(l), this._updateScale(this._iScale, f + " ft", f / l));
      },
      _updateScale: function(i, l, s) {
        i.style.width = Math.round(this.options.maxWidth * s) + "px", i.innerHTML = l;
      },
      _getRoundNum: function(i) {
        var l = Math.pow(10, (Math.floor(i) + "").length - 1), s = i / l;
        return s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1, l * s;
      }
    }), ua = function(i) {
      return new Ja(i);
    }, Kn = ai.extend({
      options: {
        position: "bottomright",
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (ut.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
      },
      initialize: function(i) {
        $(this, i), this._attributions = {};
      },
      onAdd: function(i) {
        i.attributionControl = this, this._container = Pt("div", "leaflet-control-attribution"), Vn(this._container);
        for (var l in i._layers) i._layers[l].getAttribution && this.addAttribution(i._layers[l].getAttribution());
        return this._update(), i.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(i) {
        i.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(i) {
        i.layer.getAttribution && (this.addAttribution(i.layer.getAttribution()), i.layer.once("remove", function() {
          this.removeAttribution(i.layer.getAttribution());
        }, this));
      },
      setPrefix: function(i) {
        return this.options.prefix = i, this._update(), this;
      },
      addAttribution: function(i) {
        return i ? (this._attributions[i] || (this._attributions[i] = 0), this._attributions[i]++, this._update(), this) : this;
      },
      removeAttribution: function(i) {
        return i ? (this._attributions[i] && (this._attributions[i]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var i = [];
          for (var l in this._attributions) this._attributions[l] && i.push(l);
          var s = [];
          this.options.prefix && s.push(this.options.prefix), i.length && s.push(i.join(", ")), this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    jt.mergeOptions({ attributionControl: !0 }), jt.addInitHook(function() {
      this.options.attributionControl && new Kn().addTo(this);
    });
    var Zl = function(i) {
      return new Kn(i);
    };
    ai.Layers = Po, ai.Zoom = pi, ai.Scale = Ja, ai.Attribution = Kn, za.layers = Qn, za.zoom = Vo, za.scale = ua, za.attribution = Zl;
    var gi = Ct.extend({
      initialize: function(i) {
        this._map = i;
      },
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      enabled: function() {
        return !!this._enabled;
      }
    });
    gi.addTo = function(i, l) {
      return i.addHandler(l, this), this;
    };
    var Hl = { Events: H }, Jn = ut.touch ? "touchstart mousedown" : "mousedown", Xi = at.extend({
      options: { clickTolerance: 3 },
      initialize: function(i, l, s, u) {
        $(this, u), this._element = i, this._dragStartTarget = l || i, this._preventOutline = s;
      },
      enable: function() {
        this._enabled || (Nt(this._dragStartTarget, Jn, this._onDown, this), this._enabled = !0);
      },
      disable: function() {
        this._enabled && (Xi._dragging === this && this.finishDrag(!0), Jt(this._dragStartTarget, Jn, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(i) {
        if (this._enabled && (this._moved = !1, !Vi(this._element, "leaflet-zoom-anim"))) {
          if (i.touches && i.touches.length !== 1) {
            Xi._dragging === this && this.finishDrag();
            return;
          }
          if (!(Xi._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (Xi._dragging = this, this._preventOutline && Re(this._element), kl(), Va(), !this._moving)) {
            this.fire("down");
            var l = i.touches ? i.touches[0] : i, s = Wr(this._element);
            this._startPoint = new x(l.clientX, l.clientY), this._startPos = Sa(this._element), this._parentScale = Gn(s);
            var u = i.type === "mousedown";
            Nt(document, u ? "mousemove" : "touchmove", this._onMove, this), Nt(document, u ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(i) {
        if (this._enabled) {
          if (i.touches && i.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var l = i.touches && i.touches.length === 1 ? i.touches[0] : i, s = new x(l.clientX, l.clientY)._subtract(this._startPoint);
          !s.x && !s.y || Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance || (s.x /= this._parentScale.x, s.y /= this._parentScale.y, Se(i), this._moved || (this.fire("dragstart"), this._moved = !0, zt(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), zt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, this._lastEvent = i, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var i = { originalEvent: this._lastEvent };
        this.fire("predrag", i), re(this._element, this._newPos), this.fire("drag", i);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(i) {
        oe(document.body, "leaflet-dragging"), this._lastTarget && (oe(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Jt(document, "mousemove touchmove", this._onMove, this), Jt(document, "mouseup touchend touchcancel", this._onUp, this), Qa(), Xa();
        var l = this._moved && this._moving;
        this._moving = !1, Xi._dragging = !1, l && this.fire("dragend", {
          noInertia: i,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function Me(i, l, s) {
      for (var u, f = [
        1,
        4,
        2,
        8
      ], d = 0, g, z, j, Z, W = i.length, dt, Tt; d < W; d++) i[d]._code = Na(i[d], l);
      for (z = 0; z < 4; z++) {
        for (dt = f[z], u = [], d = 0, W = i.length, g = W - 1; d < W; g = d++)
          j = i[d], Z = i[g], j._code & dt ? Z._code & dt || (Tt = Yl(Z, j, dt, l, s), Tt._code = Na(Tt, l), u.push(Tt)) : (Z._code & dt && (Tt = Yl(Z, j, dt, l, s), Tt._code = Na(Tt, l), u.push(Tt)), u.push(j));
        i = u;
      }
      return i;
    }
    function Qi(i, l) {
      var s, u, f, d, g, z, j, Z, W;
      if (!i || i.length === 0) throw new Error("latlngs not passed");
      ni(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
      var dt = O([0, 0]), Tt = U(i);
      Tt.getNorthWest().distanceTo(Tt.getSouthWest()) * Tt.getNorthEast().distanceTo(Tt.getNorthWest()) < 1700 && (dt = Fa(i));
      var he = i.length, Oe = [];
      for (s = 0; s < he; s++) {
        var oi = O(i[s]);
        Oe.push(l.project(O([oi.lat - dt.lat, oi.lng - dt.lng])));
      }
      for (z = j = Z = 0, s = 0, u = he - 1; s < he; u = s++)
        f = Oe[s], d = Oe[u], g = f.y * d.x - d.y * f.x, j += (f.x + d.x) * g, Z += (f.y + d.y) * g, z += g * 3;
      z === 0 ? W = Oe[0] : W = [j / z, Z / z];
      var ri = l.unproject(R(W));
      return O([ri.lat + dt.lat, ri.lng + dt.lng]);
    }
    function Fa(i) {
      for (var l = 0, s = 0, u = 0, f = 0; f < i.length; f++) {
        var d = O(i[f]);
        l += d.lat, s += d.lng, u++;
      }
      return O([l / u, s / u]);
    }
    var Fn = {
      __proto__: null,
      clipPolygon: Me,
      polygonCenter: Qi,
      centroid: Fa
    };
    function es(i, l) {
      if (!l || !i.length) return i.slice();
      var s = l * l;
      return i = is(i, s), i = In(i, s), i;
    }
    function Ul(i, l, s) {
      return Math.sqrt(Wn(i, l, s, !0));
    }
    function Xo(i, l, s) {
      return Wn(i, l, s);
    }
    function In(i, l) {
      var s = i.length, u = new (typeof Uint8Array < "u" ? Uint8Array : Array)(s);
      u[0] = u[s - 1] = 1, Ia(i, u, l, 0, s - 1);
      var f, d = [];
      for (f = 0; f < s; f++) u[f] && d.push(i[f]);
      return d;
    }
    function Ia(i, l, s, u, f) {
      for (var d = 0, g, z = u + 1, j; z <= f - 1; z++)
        j = Wn(i[z], i[u], i[f], !0), j > d && (g = z, d = j);
      d > s && (l[g] = 1, Ia(i, l, s, u, g), Ia(i, l, s, g, f));
    }
    function is(i, l) {
      for (var s = [i[0]], u = 1, f = 0, d = i.length; u < d; u++) ns(i[u], i[f]) > l && (s.push(i[u]), f = u);
      return f < d - 1 && s.push(i[d - 1]), s;
    }
    var as;
    function ql(i, l, s, u, f) {
      var d = u ? as : Na(i, s), g = Na(l, s), z, j, Z;
      for (as = g; ; ) {
        if (!(d | g)) return [i, l];
        if (d & g) return !1;
        z = d || g, j = Yl(i, l, z, s, f), Z = Na(j, s), z === d ? (i = j, d = Z) : (l = j, g = Z);
      }
    }
    function Yl(i, l, s, u, f) {
      var d = l.x - i.x, g = l.y - i.y, z = u.min, j = u.max, Z, W;
      return s & 8 ? (Z = i.x + d * (j.y - i.y) / g, W = j.y) : s & 4 ? (Z = i.x + d * (z.y - i.y) / g, W = z.y) : s & 2 ? (Z = j.x, W = i.y + g * (j.x - i.x) / d) : s & 1 && (Z = z.x, W = i.y + g * (z.x - i.x) / d), new x(Z, W, f);
    }
    function Na(i, l) {
      var s = 0;
      return i.x < l.min.x ? s |= 1 : i.x > l.max.x && (s |= 2), i.y < l.min.y ? s |= 4 : i.y > l.max.y && (s |= 8), s;
    }
    function ns(i, l) {
      var s = l.x - i.x, u = l.y - i.y;
      return s * s + u * u;
    }
    function Wn(i, l, s, u) {
      var f = l.x, d = l.y, g = s.x - f, z = s.y - d, j = g * g + z * z, Z;
      return j > 0 && (Z = ((i.x - f) * g + (i.y - d) * z) / j, Z > 1 ? (f = s.x, d = s.y) : Z > 0 && (f += g * Z, d += z * Z)), g = i.x - f, z = i.y - d, u ? g * g + z * z : new x(f, d);
    }
    function ni(i) {
      return !ot(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
    }
    function ls(i) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ni(i);
    }
    function os(i, l) {
      var s, u, f, d, g, z, j, Z;
      if (!i || i.length === 0) throw new Error("latlngs not passed");
      ni(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
      var W = O([0, 0]), dt = U(i);
      dt.getNorthWest().distanceTo(dt.getSouthWest()) * dt.getNorthEast().distanceTo(dt.getNorthWest()) < 1700 && (W = Fa(i));
      var Tt = i.length, he = [];
      for (s = 0; s < Tt; s++) {
        var Oe = O(i[s]);
        he.push(l.project(O([Oe.lat - W.lat, Oe.lng - W.lng])));
      }
      for (s = 0, u = 0; s < Tt - 1; s++) u += he[s].distanceTo(he[s + 1]) / 2;
      if (u === 0) Z = he[0];
      else for (s = 0, d = 0; s < Tt - 1; s++)
        if (g = he[s], z = he[s + 1], f = g.distanceTo(z), d += f, d > u) {
          j = (d - u) / f, Z = [z.x - j * (z.x - g.x), z.y - j * (z.y - g.y)];
          break;
        }
      var oi = l.unproject(R(Z));
      return O([oi.lat + W.lat, oi.lng + W.lng]);
    }
    var Qo = {
      __proto__: null,
      simplify: es,
      pointToSegmentDistance: Ul,
      closestPointOnSegment: Xo,
      clipSegment: ql,
      _getEdgeIntersection: Yl,
      _getBitCode: Na,
      _sqClosestPointOnSegment: Wn,
      isFlat: ni,
      _flat: ls,
      polylineCenter: os
    }, Ko = {
      project: function(i) {
        return new x(i.lng, i.lat);
      },
      unproject: function(i) {
        return new v(i.y, i.x);
      },
      bounds: new P([-180, -90], [180, 90])
    }, Gl = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new P([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(i) {
        var l = Math.PI / 180, s = this.R, u = i.lat * l, f = this.R_MINOR / s, d = Math.sqrt(1 - f * f), g = d * Math.sin(u), z = Math.tan(Math.PI / 4 - u / 2) / Math.pow((1 - g) / (1 + g), d / 2);
        return u = -s * Math.log(Math.max(z, 1e-10)), new x(i.lng * l * s, u);
      },
      unproject: function(i) {
        for (var l = 180 / Math.PI, s = this.R, u = this.R_MINOR / s, f = Math.sqrt(1 - u * u), d = Math.exp(-i.y / s), g = Math.PI / 2 - 2 * Math.atan(d), z = 0, j = 0.1, Z; z < 15 && Math.abs(j) > 1e-7; z++)
          Z = f * Math.sin(g), Z = Math.pow((1 - Z) / (1 + Z), f / 2), j = Math.PI / 2 - 2 * Math.atan(d * Z) - g, g += j;
        return new v(g * l, i.x * l / s);
      }
    }, Eu = {
      __proto__: null,
      LonLat: Ko,
      Mercator: Gl,
      SphericalMercator: St
    }, Cu = _({}, I, {
      code: "EPSG:3395",
      projection: Gl,
      transformation: (function() {
        var i = 0.5 / (Math.PI * Gl.R);
        return K(i, 0.5, -i, 0.5);
      })()
    }), rs = _({}, I, {
      code: "EPSG:4326",
      projection: Ko,
      transformation: K(1 / 180, 1, -1 / 180, 0.5)
    }), Mu = _({}, V, {
      projection: Ko,
      transformation: K(1, 0, -1, 0),
      scale: function(i) {
        return Math.pow(2, i);
      },
      zoom: function(i) {
        return Math.log(i) / Math.LN2;
      },
      distance: function(i, l) {
        var s = l.lng - i.lng, u = l.lat - i.lat;
        return Math.sqrt(s * s + u * u);
      },
      infinite: !0
    });
    V.Earth = I, V.EPSG3395 = Cu, V.EPSG3857 = ht, V.EPSG900913 = di, V.EPSG4326 = rs, V.Simple = Mu;
    var _i = at.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0
      },
      addTo: function(i) {
        return i.addLayer(this), this;
      },
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function(i) {
        return i && i.removeLayer(this), this;
      },
      getPane: function(i) {
        return this._map.getPane(i ? this.options[i] || i : this.options.pane);
      },
      addInteractiveTarget: function(i) {
        return this._map._targets[X(i)] = this, this;
      },
      removeInteractiveTarget: function(i) {
        return delete this._map._targets[X(i)], this;
      },
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(i) {
        var l = i.target;
        if (l.hasLayer(this)) {
          if (this._map = l, this._zoomAnimated = l._zoomAnimated, this.getEvents) {
            var s = this.getEvents();
            l.on(s, this), this.once("remove", function() {
              l.off(s, this);
            }, this);
          }
          this.onAdd(l), this.fire("add"), l.fire("layeradd", { layer: this });
        }
      }
    });
    jt.include({
      addLayer: function(i) {
        if (!i._layerAdd) throw new Error("The provided object is not a Layer.");
        var l = X(i);
        return this._layers[l] ? this : (this._layers[l] = i, i._mapToAdd = this, i.beforeAdd && i.beforeAdd(this), this.whenReady(i._layerAdd, i), this);
      },
      removeLayer: function(i) {
        var l = X(i);
        return this._layers[l] ? (this._loaded && i.onRemove(this), delete this._layers[l], this._loaded && (this.fire("layerremove", { layer: i }), i.fire("remove")), i._map = i._mapToAdd = null, this) : this;
      },
      hasLayer: function(i) {
        return X(i) in this._layers;
      },
      eachLayer: function(i, l) {
        for (var s in this._layers) i.call(l, this._layers[s]);
        return this;
      },
      _addLayers: function(i) {
        i = i ? ot(i) ? i : [i] : [];
        for (var l = 0, s = i.length; l < s; l++) this.addLayer(i[l]);
      },
      _addZoomLimit: function(i) {
        (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) && (this._zoomBoundLayers[X(i)] = i, this._updateZoomLevels());
      },
      _removeZoomLimit: function(i) {
        var l = X(i);
        this._zoomBoundLayers[l] && (delete this._zoomBoundLayers[l], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var i = 1 / 0, l = -1 / 0, s = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var f = this._zoomBoundLayers[u].options;
          i = f.minZoom === void 0 ? i : Math.min(i, f.minZoom), l = f.maxZoom === void 0 ? l : Math.max(l, f.maxZoom);
        }
        this._layersMaxZoom = l === -1 / 0 ? void 0 : l, this._layersMinZoom = i === 1 / 0 ? void 0 : i, s !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Wa = _i.extend({
      initialize: function(i, l) {
        $(this, l), this._layers = {};
        var s, u;
        if (i) for (s = 0, u = i.length; s < u; s++) this.addLayer(i[s]);
      },
      addLayer: function(i) {
        var l = this.getLayerId(i);
        return this._layers[l] = i, this._map && this._map.addLayer(i), this;
      },
      removeLayer: function(i) {
        var l = i in this._layers ? i : this.getLayerId(i);
        return this._map && this._layers[l] && this._map.removeLayer(this._layers[l]), delete this._layers[l], this;
      },
      hasLayer: function(i) {
        return (typeof i == "number" ? i : this.getLayerId(i)) in this._layers;
      },
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function(i) {
        var l = Array.prototype.slice.call(arguments, 1), s, u;
        for (s in this._layers)
          u = this._layers[s], u[i] && u[i].apply(u, l);
        return this;
      },
      onAdd: function(i) {
        this.eachLayer(i.addLayer, i);
      },
      onRemove: function(i) {
        this.eachLayer(i.removeLayer, i);
      },
      eachLayer: function(i, l) {
        for (var s in this._layers) i.call(l, this._layers[s]);
        return this;
      },
      getLayer: function(i) {
        return this._layers[i];
      },
      getLayers: function() {
        var i = [];
        return this.eachLayer(i.push, i), i;
      },
      setZIndex: function(i) {
        return this.invoke("setZIndex", i);
      },
      getLayerId: function(i) {
        return X(i);
      }
    }), Jo = function(i, l) {
      return new Wa(i, l);
    }, Je = Wa.extend({
      addLayer: function(i) {
        return this.hasLayer(i) ? this : (i.addEventParent(this), Wa.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
      },
      removeLayer: function(i) {
        return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), Wa.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
      },
      setStyle: function(i) {
        return this.invoke("setStyle", i);
      },
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      getBounds: function() {
        var i = new rt();
        for (var l in this._layers) {
          var s = this._layers[l];
          i.extend(s.getBounds ? s.getBounds() : s.getLatLng());
        }
        return i;
      }
    }), Au = function(i, l) {
      return new Je(i, l);
    }, Ea = Ct.extend({
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        crossOrigin: !1
      },
      initialize: function(i) {
        $(this, i);
      },
      createIcon: function(i) {
        return this._createIcon("icon", i);
      },
      createShadow: function(i) {
        return this._createIcon("shadow", i);
      },
      _createIcon: function(i, l) {
        var s = this._getIconUrl(i);
        if (!s) {
          if (i === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var u = this._createImg(s, l && l.tagName === "IMG" ? l : null);
        return this._setIconStyles(u, i), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), u;
      },
      _setIconStyles: function(i, l) {
        var s = this.options, u = s[l + "Size"];
        typeof u == "number" && (u = [u, u]);
        var f = R(u), d = R(l === "shadow" && s.shadowAnchor || s.iconAnchor || f && f.divideBy(2, !0));
        i.className = "leaflet-marker-" + l + " " + (s.className || ""), d && (i.style.marginLeft = -d.x + "px", i.style.marginTop = -d.y + "px"), f && (i.style.width = f.x + "px", i.style.height = f.y + "px");
      },
      _createImg: function(i, l) {
        return l = l || document.createElement("img"), l.src = i, l;
      },
      _getIconUrl: function(i) {
        return ut.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
      }
    });
    function ss(i) {
      return new Ea(i);
    }
    var $a = Ea.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(i) {
        return typeof $a.imagePath != "string" && ($a.imagePath = this._detectIconPath()), (this.options.imagePath || $a.imagePath) + Ea.prototype._getIconUrl.call(this, i);
      },
      _stripUrl: function(i) {
        var l = function(s, u, f) {
          var d = u.exec(s);
          return d && d[f];
        };
        return i = l(i, /^url\((['"])?(.+)\1\)$/, 2), i && l(i, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var i = Pt("div", "leaflet-default-icon-path", document.body), l = Un(i, "background-image") || Un(i, "backgroundImage");
        if (document.body.removeChild(i), l = this._stripUrl(l), l) return l;
        var s = document.querySelector('link[href$="leaflet.css"]');
        return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
      }
    }), Fo = gi.extend({
      initialize: function(i) {
        this._marker = i;
      },
      addHooks: function() {
        var i = this._marker._icon;
        this._draggable || (this._draggable = new Xi(i, i, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), zt(i, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && oe(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(i) {
        var l = this._marker, s = l._map, u = this._marker.options.autoPanSpeed, f = this._marker.options.autoPanPadding, d = Sa(l._icon), g = s.getPixelBounds(), z = s.getPixelOrigin(), j = Y(g.min._subtract(z).add(f), g.max._subtract(z).subtract(f));
        if (!j.contains(d)) {
          var Z = R((Math.max(j.max.x, d.x) - j.max.x) / (g.max.x - j.max.x) - (Math.min(j.min.x, d.x) - j.min.x) / (g.min.x - j.min.x), (Math.max(j.max.y, d.y) - j.max.y) / (g.max.y - j.max.y) - (Math.min(j.min.y, d.y) - j.min.y) / (g.min.y - j.min.y)).multiplyBy(u);
          s.panBy(Z, { animate: !1 }), this._draggable._newPos._add(Z), this._draggable._startPos._add(Z), re(l._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = xt(this._adjustPan.bind(this, i));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(i) {
        this._marker.options.autoPan && (_t(this._panRequest), this._panRequest = xt(this._adjustPan.bind(this, i)));
      },
      _onDrag: function(i) {
        var l = this._marker, s = l._shadow, u = Sa(l._icon), f = l._map.layerPointToLatLng(u);
        s && re(s, u), l._latlng = f, i.latlng = f, i.oldLatLng = this._oldLatLng, l.fire("move", i).fire("drag", i);
      },
      _onDragEnd: function(i) {
        _t(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
      }
    }), $n = _i.extend({
      options: {
        icon: new $a(),
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "Marker",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        shadowPane: "shadowPane",
        bubblingMouseEvents: !1,
        autoPanOnFocus: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10
      },
      initialize: function(i, l) {
        $(this, l), this._latlng = O(i);
      },
      onAdd: function(i) {
        this._zoomAnimated = this._zoomAnimated && i.options.markerZoomAnimation, this._zoomAnimated && i.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(i) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && i.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      getLatLng: function() {
        return this._latlng;
      },
      setLatLng: function(i) {
        var l = this._latlng;
        return this._latlng = O(i), this.update(), this.fire("move", {
          oldLatLng: l,
          latlng: this._latlng
        });
      },
      setZIndexOffset: function(i) {
        return this.options.zIndexOffset = i, this.update();
      },
      getIcon: function() {
        return this.options.icon;
      },
      setIcon: function(i) {
        return this.options.icon = i, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(i);
        }
        return this;
      },
      _initIcon: function() {
        var i = this.options, l = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), s = i.icon.createIcon(this._icon), u = !1;
        s !== this._icon && (this._icon && this._removeIcon(), u = !0, i.title && (s.title = i.title), s.tagName === "IMG" && (s.alt = i.alt || "")), zt(s, l), i.keyboard && (s.tabIndex = "0", s.setAttribute("role", "button")), this._icon = s, i.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Nt(s, "focus", this._panOnFocus, this);
        var f = i.icon.createShadow(this._shadow), d = !1;
        f !== this._shadow && (this._removeShadow(), d = !0), f && (zt(f, l), f.alt = ""), this._shadow = f, i.opacity < 1 && this._updateOpacity(), u && this.getPane().appendChild(this._icon), this._initInteraction(), f && d && this.getPane(i.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Jt(this._icon, "focus", this._panOnFocus, this), ue(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && ue(this._shadow), this._shadow = null;
      },
      _setPos: function(i) {
        this._icon && re(this._icon, i), this._shadow && re(this._shadow, i), this._zIndex = i.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(i) {
        this._icon && (this._icon.style.zIndex = this._zIndex + i);
      },
      _animateZoom: function(i) {
        var l = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center).round();
        this._setPos(l);
      },
      _initInteraction: function() {
        if (this.options.interactive && (zt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Fo)) {
          var i = this.options.draggable;
          this.dragging && (i = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Fo(this), i && this.dragging.enable();
        }
      },
      setOpacity: function(i) {
        return this.options.opacity = i, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var i = this.options.opacity;
        this._icon && Qe(this._icon, i), this._shadow && Qe(this._shadow, i);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var i = this._map;
        if (i) {
          var l = this.options.icon.options, s = l.iconSize ? R(l.iconSize) : R(0, 0), u = l.iconAnchor ? R(l.iconAnchor) : R(0, 0);
          i.panInside(this._latlng, {
            paddingTopLeft: u,
            paddingBottomRight: s.subtract(u)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function tn(i, l) {
      return new $n(i, l);
    }
    var ca = _i.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0
      },
      beforeAdd: function(i) {
        this._renderer = i.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function(i) {
        return $(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
      },
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), Pl = ca.extend({
      options: {
        fill: !0,
        radius: 10
      },
      initialize: function(i, l) {
        $(this, l), this._latlng = O(i), this._radius = this.options.radius;
      },
      setLatLng: function(i) {
        var l = this._latlng;
        return this._latlng = O(i), this.redraw(), this.fire("move", {
          oldLatLng: l,
          latlng: this._latlng
        });
      },
      getLatLng: function() {
        return this._latlng;
      },
      setRadius: function(i) {
        return this.options.radius = this._radius = i, this.redraw();
      },
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(i) {
        var l = i && i.radius || this._radius;
        return ca.prototype.setStyle.call(this, i), this.setRadius(l), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var i = this._radius, l = this._radiusY || i, s = this._clickTolerance(), u = [i + s, l + s];
        this._pxBounds = new P(this._point.subtract(u), this._point.add(u));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      _containsPoint: function(i) {
        return i.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Ou(i, l) {
      return new Pl(i, l);
    }
    var Vl = Pl.extend({
      initialize: function(i, l, s) {
        if (typeof l == "number" && (l = _({}, s, { radius: l })), $(this, l), this._latlng = O(i), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function(i) {
        return this._mRadius = i, this.redraw();
      },
      getRadius: function() {
        return this._mRadius;
      },
      getBounds: function() {
        var i = [this._radius, this._radiusY || this._radius];
        return new rt(this._map.layerPointToLatLng(this._point.subtract(i)), this._map.layerPointToLatLng(this._point.add(i)));
      },
      setStyle: ca.prototype.setStyle,
      _project: function() {
        var i = this._latlng.lng, l = this._latlng.lat, s = this._map, u = s.options.crs;
        if (u.distance === I.distance) {
          var f = Math.PI / 180, d = this._mRadius / I.R / f, g = s.project([l + d, i]), z = s.project([l - d, i]), j = g.add(z).divideBy(2), Z = s.unproject(j).lat, W = Math.acos((Math.cos(d * f) - Math.sin(l * f) * Math.sin(Z * f)) / (Math.cos(l * f) * Math.cos(Z * f))) / f;
          (isNaN(W) || W === 0) && (W = d / Math.cos(Math.PI / 180 * l)), this._point = j.subtract(s.getPixelOrigin()), this._radius = isNaN(W) ? 0 : j.x - s.project([Z, i - W]).x, this._radiusY = j.y - g.y;
        } else {
          var dt = u.unproject(u.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = s.latLngToLayerPoint(this._latlng), this._radius = this._point.x - s.latLngToLayerPoint(dt).x;
        }
        this._updateBounds();
      }
    });
    function us(i, l, s) {
      return new Vl(i, l, s);
    }
    var Fe = ca.extend({
      options: {
        smoothFactor: 1,
        noClip: !1
      },
      initialize: function(i, l) {
        $(this, l), this._setLatLngs(i);
      },
      getLatLngs: function() {
        return this._latlngs;
      },
      setLatLngs: function(i) {
        return this._setLatLngs(i), this.redraw();
      },
      isEmpty: function() {
        return !this._latlngs.length;
      },
      closestLayerPoint: function(i) {
        for (var l = 1 / 0, s = null, u = Wn, f, d, g = 0, z = this._parts.length; g < z; g++)
          for (var j = this._parts[g], Z = 1, W = j.length; Z < W; Z++) {
            f = j[Z - 1], d = j[Z];
            var dt = u(i, f, d, !0);
            dt < l && (l = dt, s = u(i, f, d));
          }
        return s && (s.distance = Math.sqrt(l)), s;
      },
      getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return os(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function() {
        return this._bounds;
      },
      addLatLng: function(i, l) {
        return l = l || this._defaultShape(), i = O(i), l.push(i), this._bounds.extend(i), this.redraw();
      },
      _setLatLngs: function(i) {
        this._bounds = new rt(), this._latlngs = this._convertLatLngs(i);
      },
      _defaultShape: function() {
        return ni(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function(i) {
        for (var l = [], s = ni(i), u = 0, f = i.length; u < f; u++) s ? (l[u] = O(i[u]), this._bounds.extend(l[u])) : l[u] = this._convertLatLngs(i[u]);
        return l;
      },
      _project: function() {
        var i = new P();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
      },
      _updateBounds: function() {
        var i = this._clickTolerance(), l = new x(i, i);
        this._rawPxBounds && (this._pxBounds = new P([this._rawPxBounds.min.subtract(l), this._rawPxBounds.max.add(l)]));
      },
      _projectLatlngs: function(i, l, s) {
        var u = i[0] instanceof v, f = i.length, d, g;
        if (u) {
          for (g = [], d = 0; d < f; d++)
            g[d] = this._map.latLngToLayerPoint(i[d]), s.extend(g[d]);
          l.push(g);
        } else for (d = 0; d < f; d++) this._projectLatlngs(i[d], l, s);
      },
      _clipPoints: function() {
        var i = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var l = this._parts, s = 0, u, f = 0, d = this._rings.length, g, z, j; s < d; s++)
            for (j = this._rings[s], u = 0, g = j.length; u < g - 1; u++)
              z = ql(j[u], j[u + 1], i, u, !0), z && (l[f] = l[f] || [], l[f].push(z[0]), (z[1] !== j[u + 1] || u === g - 2) && (l[f].push(z[1]), f++));
        }
      },
      _simplifyPoints: function() {
        for (var i = this._parts, l = this.options.smoothFactor, s = 0, u = i.length; s < u; s++) i[s] = es(i[s], l);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function(i, l) {
        var s, u, f, d, g, z, j = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
        for (s = 0, d = this._parts.length; s < d; s++)
          for (z = this._parts[s], u = 0, g = z.length, f = g - 1; u < g; f = u++)
            if (!(!l && u === 0) && Ul(i, z[f], z[u]) <= j)
              return !0;
        return !1;
      }
    });
    function tl(i, l) {
      return new Fe(i, l);
    }
    Fe._flat = ls;
    var en = Fe.extend({
      options: { fill: !0 },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return Qi(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(i) {
        var l = Fe.prototype._convertLatLngs.call(this, i), s = l.length;
        return s >= 2 && l[0] instanceof v && l[0].equals(l[s - 1]) && l.pop(), l;
      },
      _setLatLngs: function(i) {
        Fe.prototype._setLatLngs.call(this, i), ni(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return ni(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var i = this._renderer._bounds, l = this.options.weight, s = new x(l, l);
        if (i = new P(i.min.subtract(s), i.max.add(s)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, f = this._rings.length, d; u < f; u++)
            d = Me(this._rings[u], i, !0), d.length && this._parts.push(d);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function(i) {
        var l = !1, s, u, f, d, g, z, j, Z;
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
        for (d = 0, j = this._parts.length; d < j; d++)
          for (s = this._parts[d], g = 0, Z = s.length, z = Z - 1; g < Z; z = g++)
            u = s[g], f = s[z], u.y > i.y != f.y > i.y && i.x < (f.x - u.x) * (i.y - u.y) / (f.y - u.y) + u.x && (l = !l);
        return l || Fe.prototype._containsPoint.call(this, i, !0);
      }
    });
    function Xl(i, l) {
      return new en(i, l);
    }
    var Ai = Je.extend({
      initialize: function(i, l) {
        $(this, l), this._layers = {}, i && this.addData(i);
      },
      addData: function(i) {
        var l = ot(i) ? i : i.features, s, u, f;
        if (l) {
          for (s = 0, u = l.length; s < u; s++)
            f = l[s], (f.geometries || f.geometry || f.features || f.coordinates) && this.addData(f);
          return this;
        }
        var d = this.options;
        if (d.filter && !d.filter(i)) return this;
        var g = el(i, d);
        return g ? (g.feature = Jl(i), g.defaultOptions = g.options, this.resetStyle(g), d.onEachFeature && d.onEachFeature(i, g), this.addLayer(g)) : this;
      },
      resetStyle: function(i) {
        return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = _({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
      },
      setStyle: function(i) {
        return this.eachLayer(function(l) {
          this._setLayerStyle(l, i);
        }, this);
      },
      _setLayerStyle: function(i, l) {
        i.setStyle && (typeof l == "function" && (l = l(i.feature)), i.setStyle(l));
      }
    });
    function el(i, l) {
      var s = i.type === "Feature" ? i.geometry : i, u = s ? s.coordinates : null, f = [], d = l && l.pointToLayer, g = l && l.coordsToLatLng || il, z, j, Z, W;
      if (!u && !s) return null;
      switch (s.type) {
        case "Point":
          return z = g(u), Ql(d, i, z, l);
        case "MultiPoint":
          for (Z = 0, W = u.length; Z < W; Z++)
            z = g(u[Z]), f.push(Ql(d, i, z, l));
          return new Je(f);
        case "LineString":
        case "MultiLineString":
          return j = al(u, s.type === "LineString" ? 0 : 1, g), new Fe(j, l);
        case "Polygon":
        case "MultiPolygon":
          return j = al(u, s.type === "Polygon" ? 1 : 2, g), new en(j, l);
        case "GeometryCollection":
          for (Z = 0, W = s.geometries.length; Z < W; Z++) {
            var dt = el({
              geometry: s.geometries[Z],
              type: "Feature",
              properties: i.properties
            }, l);
            dt && f.push(dt);
          }
          return new Je(f);
        case "FeatureCollection":
          for (Z = 0, W = s.features.length; Z < W; Z++) {
            var Tt = el(s.features[Z], l);
            Tt && f.push(Tt);
          }
          return new Je(f);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Ql(i, l, s, u) {
      return i ? i(l, s) : new $n(s, u && u.markersInheritOptions && u);
    }
    function il(i) {
      return new v(i[1], i[0], i[2]);
    }
    function al(i, l, s) {
      for (var u = [], f = 0, d = i.length, g; f < d; f++)
        g = l ? al(i[f], l - 1, s) : (s || il)(i[f]), u.push(g);
      return u;
    }
    function Kl(i, l) {
      return i = O(i), i.alt !== void 0 ? [
        C(i.lng, l),
        C(i.lat, l),
        C(i.alt, l)
      ] : [C(i.lng, l), C(i.lat, l)];
    }
    function nl(i, l, s, u) {
      for (var f = [], d = 0, g = i.length; d < g; d++) f.push(l ? nl(i[d], ni(i[d]) ? 0 : l - 1, s, u) : Kl(i[d], u));
      return !l && s && f.length > 0 && f.push(f[0].slice()), f;
    }
    function an(i, l) {
      return i.feature ? _({}, i.feature, { geometry: l }) : Jl(l);
    }
    function Jl(i) {
      return i.type === "Feature" || i.type === "FeatureCollection" ? i : {
        type: "Feature",
        properties: {},
        geometry: i
      };
    }
    var Io = { toGeoJSON: function(i) {
      return an(this, {
        type: "Point",
        coordinates: Kl(this.getLatLng(), i)
      });
    } };
    $n.include(Io), Vl.include(Io), Pl.include(Io), Fe.include({ toGeoJSON: function(i) {
      var l = !ni(this._latlngs), s = nl(this._latlngs, l ? 1 : 0, !1, i);
      return an(this, {
        type: (l ? "Multi" : "") + "LineString",
        coordinates: s
      });
    } }), en.include({ toGeoJSON: function(i) {
      var l = !ni(this._latlngs), s = l && !ni(this._latlngs[0]), u = nl(this._latlngs, s ? 2 : l ? 1 : 0, !0, i);
      return l || (u = [u]), an(this, {
        type: (s ? "Multi" : "") + "Polygon",
        coordinates: u
      });
    } }), Wa.include({
      toMultiPoint: function(i) {
        var l = [];
        return this.eachLayer(function(s) {
          l.push(s.toGeoJSON(i).geometry.coordinates);
        }), an(this, {
          type: "MultiPoint",
          coordinates: l
        });
      },
      toGeoJSON: function(i) {
        var l = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (l === "MultiPoint") return this.toMultiPoint(i);
        var s = l === "GeometryCollection", u = [];
        return this.eachLayer(function(f) {
          if (f.toGeoJSON) {
            var d = f.toGeoJSON(i);
            if (s) u.push(d.geometry);
            else {
              var g = Jl(d);
              g.type === "FeatureCollection" ? u.push.apply(u, g.features) : u.push(g);
            }
          }
        }), s ? an(this, {
          geometries: u,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: u
        };
      }
    });
    function cs(i, l) {
      return new Ai(i, l);
    }
    var Lu = cs, Ae = _i.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: ""
      },
      initialize: function(i, l, s) {
        this._url = i, this._bounds = U(l), $(this, s);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (zt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        ue(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function(i) {
        return this.options.opacity = i, this._image && this._updateOpacity(), this;
      },
      setStyle: function(i) {
        return i.opacity && this.setOpacity(i.opacity), this;
      },
      bringToFront: function() {
        return this._map && Gi(this._image), this;
      },
      bringToBack: function() {
        return this._map && Pi(this._image), this;
      },
      setUrl: function(i) {
        return this._url = i, this._image && (this._image.src = i), this;
      },
      setBounds: function(i) {
        return this._bounds = U(i), this._map && this._reset(), this;
      },
      getEvents: function() {
        var i = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      },
      setZIndex: function(i) {
        return this.options.zIndex = i, this._updateZIndex(), this;
      },
      getBounds: function() {
        return this._bounds;
      },
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var i = this._url.tagName === "IMG", l = this._image = i ? this._url : Pt("img");
        if (zt(l, "leaflet-image-layer"), this._zoomAnimated && zt(l, "leaflet-zoom-animated"), this.options.className && zt(l, this.options.className), l.onselectstart = q, l.onmousemove = q, l.onload = tt(this.fire, this, "load"), l.onerror = tt(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (l.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
          this._url = l.src;
          return;
        }
        l.src = this._url, l.alt = this.options.alt;
      },
      _animateZoom: function(i) {
        var l = this._map.getZoomScale(i.zoom), s = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
        Ke(this._image, s, l);
      },
      _reset: function() {
        var i = this._image, l = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), s = l.getSize();
        re(i, l.min), i.style.width = s.x + "px", i.style.height = s.y + "px";
      },
      _updateOpacity: function() {
        Qe(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var i = this.options.errorOverlayUrl;
        i && this._url !== i && (this._url = i, this._image.src = i);
      },
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), ll = function(i, l, s) {
      return new Ae(i, l, s);
    }, Fl = Ae.extend({
      options: {
        autoplay: !0,
        loop: !0,
        keepAspectRatio: !0,
        muted: !1,
        playsInline: !0
      },
      _initImage: function() {
        var i = this._url.tagName === "VIDEO", l = this._image = i ? this._url : Pt("video");
        if (zt(l, "leaflet-image-layer"), this._zoomAnimated && zt(l, "leaflet-zoom-animated"), this.options.className && zt(l, this.options.className), l.onselectstart = q, l.onmousemove = q, l.onloadeddata = tt(this.fire, this, "load"), i) {
          for (var s = l.getElementsByTagName("source"), u = [], f = 0; f < s.length; f++) u.push(s[f].src);
          this._url = s.length > 0 ? u : [l.src];
          return;
        }
        ot(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(l.style, "objectFit") && (l.style.objectFit = "fill"), l.autoplay = !!this.options.autoplay, l.loop = !!this.options.loop, l.muted = !!this.options.muted, l.playsInline = !!this.options.playsInline;
        for (var d = 0; d < this._url.length; d++) {
          var g = Pt("source");
          g.src = this._url[d], l.appendChild(g);
        }
      }
    });
    function fs(i, l, s) {
      return new Fl(i, l, s);
    }
    var Wo = Ae.extend({ _initImage: function() {
      var i = this._image = this._url;
      zt(i, "leaflet-image-layer"), this._zoomAnimated && zt(i, "leaflet-zoom-animated"), this.options.className && zt(i, this.options.className), i.onselectstart = q, i.onmousemove = q;
    } });
    function hs(i, l, s) {
      return new Wo(i, l, s);
    }
    var yi = _i.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: ""
      },
      initialize: function(i, l) {
        i && (i instanceof v || ot(i)) ? (this._latlng = O(i), $(this, l)) : ($(this, i), this._source = l), this.options.content && (this._content = this.options.content);
      },
      openOn: function(i) {
        return i = arguments.length ? i : this._source._map, i.hasLayer(this) || i.addLayer(this), this;
      },
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function(i) {
        return this._map ? this.close() : (arguments.length ? this._source = i : i = this._source, this._prepareOpen(), this.openOn(i._map)), this;
      },
      onAdd: function(i) {
        this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && Qe(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && Qe(this._container, 1), this.bringToFront(), this.options.interactive && (zt(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(i) {
        i._fadeAnimated ? (Qe(this._container, 0), this._removeTimeout = setTimeout(tt(ue, void 0, this._container), 200)) : ue(this._container), this.options.interactive && (oe(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      getLatLng: function() {
        return this._latlng;
      },
      setLatLng: function(i) {
        return this._latlng = O(i), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      getContent: function() {
        return this._content;
      },
      setContent: function(i) {
        return this._content = i, this.update(), this;
      },
      getElement: function() {
        return this._container;
      },
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var i = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      },
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function() {
        return this._map && Gi(this._container), this;
      },
      bringToBack: function() {
        return this._map && Pi(this._container), this;
      },
      _prepareOpen: function(i) {
        var l = this._source;
        if (!l._map) return !1;
        if (l instanceof Je) {
          l = null;
          var s = this._source._layers;
          for (var u in s) if (s[u]._map) {
            l = s[u];
            break;
          }
          if (!l) return !1;
          this._source = l;
        }
        if (!i)
          if (l.getCenter) i = l.getCenter();
          else if (l.getLatLng) i = l.getLatLng();
          else if (l.getBounds) i = l.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(i), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var i = this._contentNode, l = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof l == "string") i.innerHTML = l;
          else {
            for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
            i.appendChild(l);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng), l = R(this.options.offset), s = this._getAnchor();
          this._zoomAnimated ? re(this._container, i.add(s)) : l = l.add(i).add(s);
          var u = this._containerBottom = -l.y, f = this._containerLeft = -Math.round(this._containerWidth / 2) + l.x;
          this._container.style.bottom = u + "px", this._container.style.left = f + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    jt.include({ _initOverlay: function(i, l, s, u) {
      var f = l;
      return f instanceof i || (f = new i(u).setContent(l)), s && f.setLatLng(s), f;
    } }), _i.include({ _initOverlay: function(i, l, s, u) {
      var f = s;
      return f instanceof i ? ($(f, u), f._source = this) : (f = l && !u ? l : new i(u, this), f.setContent(s)), f;
    } });
    var nn = yi.extend({
      options: {
        pane: "popupPane",
        offset: [0, 7],
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: ""
      },
      openOn: function(i) {
        return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, yi.prototype.openOn.call(this, i);
      },
      onAdd: function(i) {
        yi.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ca || this._source.on("preclick", oa));
      },
      onRemove: function(i) {
        yi.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ca || this._source.off("preclick", oa));
      },
      getEvents: function() {
        var i = yi.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
      },
      _initLayout: function() {
        var i = "leaflet-popup", l = this._container = Pt("div", i + " " + (this.options.className || "") + " leaflet-zoom-animated"), s = this._wrapper = Pt("div", i + "-content-wrapper", l);
        if (this._contentNode = Pt("div", i + "-content", s), Vn(l), ra(this._contentNode), Nt(l, "contextmenu", oa), this._tipContainer = Pt("div", i + "-tip-container", l), this._tip = Pt("div", i + "-tip", this._tipContainer), this.options.closeButton) {
          var u = this._closeButton = Pt("a", i + "-close-button", l);
          u.setAttribute("role", "button"), u.setAttribute("aria-label", "Close popup"), u.href = "#close", u.innerHTML = '<span aria-hidden="true">&#215;</span>', Nt(u, "click", function(f) {
            Se(f), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var i = this._contentNode, l = i.style;
        l.width = "", l.whiteSpace = "nowrap";
        var s = i.offsetWidth;
        s = Math.min(s, this.options.maxWidth), s = Math.max(s, this.options.minWidth), l.width = s + 1 + "px", l.whiteSpace = "", l.height = "";
        var u = i.offsetHeight, f = this.options.maxHeight, d = "leaflet-popup-scrolled";
        f && u > f ? (l.height = f + "px", zt(i, d)) : oe(i, d), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(i) {
        var l = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), s = this._getAnchor();
        re(this._container, l.add(s));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var i = this._map, l = parseInt(Un(this._container, "marginBottom"), 10) || 0, s = this._container.offsetHeight + l, u = this._containerWidth, f = new x(this._containerLeft, -s - this._containerBottom);
          f._add(Sa(this._container));
          var d = i.layerPointToContainerPoint(f), g = R(this.options.autoPanPadding), z = R(this.options.autoPanPaddingTopLeft || g), j = R(this.options.autoPanPaddingBottomRight || g), Z = i.getSize(), W = 0, dt = 0;
          d.x + u + j.x > Z.x && (W = d.x + u - Z.x + j.x), d.x - W - z.x < 0 && (W = d.x - z.x), d.y + s + j.y > Z.y && (dt = d.y + s - Z.y + j.y), d.y - dt - z.y < 0 && (dt = d.y - z.y), (W || dt) && (this.options.keepInView && (this._autopanning = !0), i.fire("autopanstart").panBy([W, dt]));
        }
      },
      _getAnchor: function() {
        return R(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), ju = function(i, l) {
      return new nn(i, l);
    };
    jt.mergeOptions({ closePopupOnClick: !0 }), jt.include({
      openPopup: function(i, l, s) {
        return this._initOverlay(nn, i, l, s).openOn(this), this;
      },
      closePopup: function(i) {
        return i = arguments.length ? i : this._popup, i && i.close(), this;
      }
    }), _i.include({
      bindPopup: function(i, l) {
        return this._popup = this._initOverlay(nn, this._popup, i, l), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      openPopup: function(i) {
        return this._popup && (this instanceof Je || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
      },
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      setPopupContent: function(i) {
        return this._popup && this._popup.setContent(i), this;
      },
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(i) {
        if (!(!this._popup || !this._map)) {
          sa(i);
          var l = i.layer || i.target;
          if (this._popup._source === l && !(l instanceof ca)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(i.latlng);
            return;
          }
          this._popup._source = l, this.openPopup(i.latlng);
        }
      },
      _movePopup: function(i) {
        this._popup.setLatLng(i.latlng);
      },
      _onKeyPress: function(i) {
        i.originalEvent.keyCode === 13 && this._openPopup(i);
      }
    });
    var Ki = yi.extend({
      options: {
        pane: "tooltipPane",
        offset: [0, 0],
        direction: "auto",
        permanent: !1,
        sticky: !1,
        opacity: 0.9
      },
      onAdd: function(i) {
        yi.prototype.onAdd.call(this, i), this.setOpacity(this.options.opacity), i.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(i) {
        yi.prototype.onRemove.call(this, i), i.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var i = yi.prototype.getEvents.call(this);
        return this.options.permanent || (i.preclick = this.close), i;
      },
      _initLayout: function() {
        var i = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = Pt("div", i), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + X(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(i) {
        var l, s, u = this._map, f = this._container, d = u.latLngToContainerPoint(u.getCenter()), g = u.layerPointToContainerPoint(i), z = this.options.direction, j = f.offsetWidth, Z = f.offsetHeight, W = R(this.options.offset), dt = this._getAnchor();
        z === "top" ? (l = j / 2, s = Z) : z === "bottom" ? (l = j / 2, s = 0) : z === "center" ? (l = j / 2, s = Z / 2) : z === "right" ? (l = 0, s = Z / 2) : z === "left" ? (l = j, s = Z / 2) : g.x < d.x ? (z = "right", l = 0, s = Z / 2) : (z = "left", l = j + (W.x + dt.x) * 2, s = Z / 2), i = i.subtract(R(l, s, !0)).add(W).add(dt), oe(f, "leaflet-tooltip-right"), oe(f, "leaflet-tooltip-left"), oe(f, "leaflet-tooltip-top"), oe(f, "leaflet-tooltip-bottom"), zt(f, "leaflet-tooltip-" + z), re(f, i);
      },
      _updatePosition: function() {
        var i = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(i);
      },
      setOpacity: function(i) {
        this.options.opacity = i, this._container && Qe(this._container, i);
      },
      _animateZoom: function(i) {
        var l = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
        this._setPosition(l);
      },
      _getAnchor: function() {
        return R(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), $o = function(i, l) {
      return new Ki(i, l);
    };
    jt.include({
      openTooltip: function(i, l, s) {
        return this._initOverlay(Ki, i, l, s).openOn(this), this;
      },
      closeTooltip: function(i) {
        return i.close(), this;
      }
    }), _i.include({
      bindTooltip: function(i, l) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ki, this._tooltip, i, l), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(i) {
        if (!(!i && this._tooltipHandlersAdded)) {
          var l = i ? "off" : "on", s = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? s.add = this._openTooltip : (s.mouseover = this._openTooltip, s.mouseout = this.closeTooltip, s.click = this._openTooltip, this._map ? this._addFocusListeners() : s.add = this._addFocusListeners), this._tooltip.options.sticky && (s.mousemove = this._moveTooltip), this[l](s), this._tooltipHandlersAdded = !i;
        }
      },
      openTooltip: function(i) {
        return this._tooltip && (this instanceof Je || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      },
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function(i) {
        return this._tooltip && this._tooltip.setContent(i), this;
      },
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(i) {
        var l = typeof i.getElement == "function" && i.getElement();
        l && (Nt(l, "focus", function() {
          this._tooltip._source = i, this.openTooltip();
        }, this), Nt(l, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(i) {
        var l = typeof i.getElement == "function" && i.getElement();
        l && l.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(i) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var l = this;
            this._map.once("moveend", function() {
              l._openOnceFlag = !1, l._openTooltip(i);
            });
            return;
          }
          this._tooltip._source = i.layer || i.target, this.openTooltip(this._tooltip.options.sticky ? i.latlng : void 0);
        }
      },
      _moveTooltip: function(i) {
        var l = i.latlng, s, u;
        this._tooltip.options.sticky && i.originalEvent && (s = this._map.mouseEventToContainerPoint(i.originalEvent), u = this._map.containerPointToLayerPoint(s), l = this._map.layerPointToLatLng(u)), this._tooltip.setLatLng(l);
      }
    });
    var ln = Ea.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(i) {
        var l = i && i.tagName === "DIV" ? i : document.createElement("div"), s = this.options;
        if (s.html instanceof Element ? (aa(l), l.appendChild(s.html)) : l.innerHTML = s.html !== !1 ? s.html : "", s.bgPos) {
          var u = R(s.bgPos);
          l.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(l, "icon"), l;
      },
      createShadow: function() {
        return null;
      }
    });
    function tr(i) {
      return new ln(i);
    }
    Ea.Default = $a;
    var on = _i.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: ut.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2
      },
      initialize: function(i) {
        $(this, i);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(i) {
        i._addZoomLimit(this);
      },
      onRemove: function(i) {
        this._removeAllTiles(), ue(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      bringToFront: function() {
        return this._map && (Gi(this._container), this._setAutoZIndex(Math.max)), this;
      },
      bringToBack: function() {
        return this._map && (Pi(this._container), this._setAutoZIndex(Math.min)), this;
      },
      getContainer: function() {
        return this._container;
      },
      setOpacity: function(i) {
        return this.options.opacity = i, this._updateOpacity(), this;
      },
      setZIndex: function(i) {
        return this.options.zIndex = i, this._updateZIndex(), this;
      },
      isLoading: function() {
        return this._loading;
      },
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var i = this._clampZoom(this._map.getZoom());
          i !== this._tileZoom && (this._tileZoom = i, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var i = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = Lt(this._onMoveEnd, this.options.updateInterval, this)), i.move = this._onMove), this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      },
      createTile: function() {
        return document.createElement("div");
      },
      getTileSize: function() {
        var i = this.options.tileSize;
        return i instanceof x ? i : new x(i, i);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(i) {
        for (var l = this.getPane().children, s = -i(-1 / 0, 1 / 0), u = 0, f = l.length, d; u < f; u++)
          d = l[u].style.zIndex, l[u] !== this._container && d && (s = i(s, +d));
        isFinite(s) && (this.options.zIndex = s + i(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !ut.ielt9) {
          Qe(this._container, this.options.opacity);
          var i = +/* @__PURE__ */ new Date(), l = !1, s = !1;
          for (var u in this._tiles) {
            var f = this._tiles[u];
            if (!(!f.current || !f.loaded)) {
              var d = Math.min(1, (i - f.loaded) / 200);
              Qe(f.el, d), d < 1 ? l = !0 : (f.active ? s = !0 : this._onOpaqueTile(f), f.active = !0);
            }
          }
          s && !this._noPrune && this._pruneTiles(), l && (_t(this._fadeFrame), this._fadeFrame = xt(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: q,
      _initContainer: function() {
        this._container || (this._container = Pt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var i = this._tileZoom, l = this.options.maxZoom;
        if (i !== void 0) {
          for (var s in this._levels)
            s = Number(s), this._levels[s].el.children.length || s === i ? (this._levels[s].el.style.zIndex = l - Math.abs(i - s), this._onUpdateLevel(s)) : (ue(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]);
          var u = this._levels[i], f = this._map;
          return u || (u = this._levels[i] = {}, u.el = Pt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), u.el.style.zIndex = l, u.origin = f.project(f.unproject(f.getPixelOrigin()), i).round(), u.zoom = i, this._setZoomTransform(u, f.getCenter(), f.getZoom()), u.el.offsetWidth, this._onCreateLevel(u)), this._level = u, u;
        }
      },
      _onUpdateLevel: q,
      _onRemoveLevel: q,
      _onCreateLevel: q,
      _pruneTiles: function() {
        if (this._map) {
          var i, l, s = this._map.getZoom();
          if (s > this.options.maxZoom || s < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (i in this._tiles)
            l = this._tiles[i], l.retain = l.current;
          for (i in this._tiles)
            if (l = this._tiles[i], l.current && !l.active) {
              var u = l.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) || this._retainChildren(u.x, u.y, u.z, u.z + 2);
            }
          for (i in this._tiles) this._tiles[i].retain || this._removeTile(i);
        }
      },
      _removeTilesAtZoom: function(i) {
        for (var l in this._tiles)
          this._tiles[l].coords.z === i && this._removeTile(l);
      },
      _removeAllTiles: function() {
        for (var i in this._tiles) this._removeTile(i);
      },
      _invalidateAll: function() {
        for (var i in this._levels)
          ue(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(i, l, s, u) {
        var f = Math.floor(i / 2), d = Math.floor(l / 2), g = s - 1, z = new x(+f, +d);
        z.z = +g;
        var j = this._tileCoordsToKey(z), Z = this._tiles[j];
        return Z && Z.active ? (Z.retain = !0, !0) : (Z && Z.loaded && (Z.retain = !0), g > u ? this._retainParent(f, d, g, u) : !1);
      },
      _retainChildren: function(i, l, s, u) {
        for (var f = 2 * i; f < 2 * i + 2; f++) for (var d = 2 * l; d < 2 * l + 2; d++) {
          var g = new x(f, d);
          g.z = s + 1;
          var z = this._tileCoordsToKey(g), j = this._tiles[z];
          if (j && j.active) {
            j.retain = !0;
            continue;
          } else j && j.loaded && (j.retain = !0);
          s + 1 < u && this._retainChildren(f, d, s + 1, u);
        }
      },
      _resetView: function(i) {
        var l = i && (i.pinch || i.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), l, l);
      },
      _animateZoom: function(i) {
        this._setView(i.center, i.zoom, !0, i.noUpdate);
      },
      _clampZoom: function(i) {
        var l = this.options;
        return l.minNativeZoom !== void 0 && i < l.minNativeZoom ? l.minNativeZoom : l.maxNativeZoom !== void 0 && l.maxNativeZoom < i ? l.maxNativeZoom : i;
      },
      _setView: function(i, l, s, u) {
        var f = Math.round(l);
        this.options.maxZoom !== void 0 && f > this.options.maxZoom || this.options.minZoom !== void 0 && f < this.options.minZoom ? f = void 0 : f = this._clampZoom(f);
        var d = this.options.updateWhenZooming && f !== this._tileZoom;
        (!u || d) && (this._tileZoom = f, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), f !== void 0 && this._update(i), s || this._pruneTiles(), this._noPrune = !!s), this._setZoomTransforms(i, l);
      },
      _setZoomTransforms: function(i, l) {
        for (var s in this._levels) this._setZoomTransform(this._levels[s], i, l);
      },
      _setZoomTransform: function(i, l, s) {
        var u = this._map.getZoomScale(s, i.zoom), f = i.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(l, s)).round();
        ut.any3d ? Ke(i.el, f, u) : re(i.el, f);
      },
      _resetGrid: function() {
        var i = this._map, l = i.options.crs, s = this._tileSize = this.getTileSize(), u = this._tileZoom, f = this._map.getPixelWorldBounds(this._tileZoom);
        f && (this._globalTileRange = this._pxBoundsToTileRange(f)), this._wrapX = l.wrapLng && !this.options.noWrap && [Math.floor(i.project([0, l.wrapLng[0]], u).x / s.x), Math.ceil(i.project([0, l.wrapLng[1]], u).x / s.y)], this._wrapY = l.wrapLat && !this.options.noWrap && [Math.floor(i.project([l.wrapLat[0], 0], u).y / s.x), Math.ceil(i.project([l.wrapLat[1], 0], u).y / s.y)];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(i) {
        var l = this._map, s = l._animatingZoom ? Math.max(l._animateToZoom, l.getZoom()) : l.getZoom(), u = l.getZoomScale(s, this._tileZoom), f = l.project(i, this._tileZoom).floor(), d = l.getSize().divideBy(u * 2);
        return new P(f.subtract(d), f.add(d));
      },
      _update: function(i) {
        var l = this._map;
        if (l) {
          var s = this._clampZoom(l.getZoom());
          if (i === void 0 && (i = l.getCenter()), this._tileZoom !== void 0) {
            var u = this._getTiledPixelBounds(i), f = this._pxBoundsToTileRange(u), d = f.getCenter(), g = [], z = this.options.keepBuffer, j = new P(f.getBottomLeft().subtract([z, -z]), f.getTopRight().add([z, -z]));
            if (!(isFinite(f.min.x) && isFinite(f.min.y) && isFinite(f.max.x) && isFinite(f.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var Z in this._tiles) {
              var W = this._tiles[Z].coords;
              (W.z !== this._tileZoom || !j.contains(new x(W.x, W.y))) && (this._tiles[Z].current = !1);
            }
            if (Math.abs(s - this._tileZoom) > 1) {
              this._setView(i, s);
              return;
            }
            for (var dt = f.min.y; dt <= f.max.y; dt++) for (var Tt = f.min.x; Tt <= f.max.x; Tt++) {
              var he = new x(Tt, dt);
              if (he.z = this._tileZoom, !!this._isValidTile(he)) {
                var Oe = this._tiles[this._tileCoordsToKey(he)];
                Oe ? Oe.current = !0 : g.push(he);
              }
            }
            if (g.sort(function(ri, Ge) {
              return ri.distanceTo(d) - Ge.distanceTo(d);
            }), g.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var oi = document.createDocumentFragment();
              for (Tt = 0; Tt < g.length; Tt++) this._addTile(g[Tt], oi);
              this._level.el.appendChild(oi);
            }
          }
        }
      },
      _isValidTile: function(i) {
        var l = this._map.options.crs;
        if (!l.infinite) {
          var s = this._globalTileRange;
          if (!l.wrapLng && (i.x < s.min.x || i.x > s.max.x) || !l.wrapLat && (i.y < s.min.y || i.y > s.max.y)) return !1;
        }
        if (!this.options.bounds) return !0;
        var u = this._tileCoordsToBounds(i);
        return U(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function(i) {
        return this._tileCoordsToBounds(this._keyToTileCoords(i));
      },
      _tileCoordsToNwSe: function(i) {
        var l = this._map, s = this.getTileSize(), u = i.scaleBy(s), f = u.add(s);
        return [l.unproject(u, i.z), l.unproject(f, i.z)];
      },
      _tileCoordsToBounds: function(i) {
        var l = this._tileCoordsToNwSe(i), s = new rt(l[0], l[1]);
        return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
      },
      _tileCoordsToKey: function(i) {
        return i.x + ":" + i.y + ":" + i.z;
      },
      _keyToTileCoords: function(i) {
        var l = i.split(":"), s = new x(+l[0], +l[1]);
        return s.z = +l[2], s;
      },
      _removeTile: function(i) {
        var l = this._tiles[i];
        l && (ue(l.el), delete this._tiles[i], this.fire("tileunload", {
          tile: l.el,
          coords: this._keyToTileCoords(i)
        }));
      },
      _initTile: function(i) {
        zt(i, "leaflet-tile");
        var l = this.getTileSize();
        i.style.width = l.x + "px", i.style.height = l.y + "px", i.onselectstart = q, i.onmousemove = q, ut.ielt9 && this.options.opacity < 1 && Qe(i, this.options.opacity);
      },
      _addTile: function(i, l) {
        var s = this._getTilePos(i), u = this._tileCoordsToKey(i), f = this.createTile(this._wrapCoords(i), tt(this._tileReady, this, i));
        this._initTile(f), this.createTile.length < 2 && xt(tt(this._tileReady, this, i, null, f)), re(f, s), this._tiles[u] = {
          el: f,
          coords: i,
          current: !0
        }, l.appendChild(f), this.fire("tileloadstart", {
          tile: f,
          coords: i
        });
      },
      _tileReady: function(i, l, s) {
        l && this.fire("tileerror", {
          error: l,
          tile: s,
          coords: i
        });
        var u = this._tileCoordsToKey(i);
        s = this._tiles[u], s && (s.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Qe(s.el, 0), _t(this._fadeFrame), this._fadeFrame = xt(this._updateOpacity, this)) : (s.active = !0, this._pruneTiles()), l || (zt(s.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: s.el,
          coords: i
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), ut.ielt9 || !this._map._fadeAnimated ? xt(this._pruneTiles, this) : setTimeout(tt(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(i) {
        var l = new x(this._wrapX ? qt(i.x, this._wrapX) : i.x, this._wrapY ? qt(i.y, this._wrapY) : i.y);
        return l.z = i.z, l;
      },
      _pxBoundsToTileRange: function(i) {
        var l = this.getTileSize();
        return new P(i.min.unscaleBy(l).floor(), i.max.unscaleBy(l).ceil().subtract([1, 1]));
      },
      _noTilesToLoad: function() {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return !1;
        return !0;
      }
    });
    function Ca(i) {
      return new on(i);
    }
    var bi = on.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1
      },
      initialize: function(i, l) {
        this._url = i, l = $(this, l), l.detectRetina && ut.retina && l.maxZoom > 0 ? (l.tileSize = Math.floor(l.tileSize / 2), l.zoomReverse ? (l.zoomOffset--, l.minZoom = Math.min(l.maxZoom, l.minZoom + 1)) : (l.zoomOffset++, l.maxZoom = Math.max(l.minZoom, l.maxZoom - 1)), l.minZoom = Math.max(0, l.minZoom)) : l.zoomReverse ? l.minZoom = Math.min(l.maxZoom, l.minZoom) : l.maxZoom = Math.max(l.minZoom, l.maxZoom), typeof l.subdomains == "string" && (l.subdomains = l.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      setUrl: function(i, l) {
        return this._url === i && l === void 0 && (l = !0), this._url = i, l || this.redraw(), this;
      },
      createTile: function(i, l) {
        var s = document.createElement("img");
        return Nt(s, "load", tt(this._tileOnLoad, this, l, s)), Nt(s, "error", tt(this._tileOnError, this, l, s)), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy), s.alt = "", s.src = this.getTileUrl(i), s;
      },
      getTileUrl: function(i) {
        var l = {
          r: ut.retina ? "@2x" : "",
          s: this._getSubdomain(i),
          x: i.x,
          y: i.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var s = this._globalTileRange.max.y - i.y;
          this.options.tms && (l.y = s), l["-y"] = s;
        }
        return gt(this._url, _(l, this.options));
      },
      _tileOnLoad: function(i, l) {
        ut.ielt9 ? setTimeout(tt(i, this, null, l), 0) : i(null, l);
      },
      _tileOnError: function(i, l, s) {
        var u = this.options.errorTileUrl;
        u && l.getAttribute("src") !== u && (l.src = u), i(s, l);
      },
      _onTileRemove: function(i) {
        i.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var i = this._tileZoom, l = this.options.maxZoom, s = this.options.zoomReverse, u = this.options.zoomOffset;
        return s && (i = l - i), i + u;
      },
      _getSubdomain: function(i) {
        var l = Math.abs(i.x + i.y) % this.options.subdomains.length;
        return this.options.subdomains[l];
      },
      _abortLoading: function() {
        var i, l;
        for (i in this._tiles) if (this._tiles[i].coords.z !== this._tileZoom && (l = this._tiles[i].el, l.onload = q, l.onerror = q, !l.complete)) {
          l.src = Et;
          var s = this._tiles[i].coords;
          ue(l), delete this._tiles[i], this.fire("tileabort", {
            tile: l,
            coords: s
          });
        }
      },
      _removeTile: function(i) {
        var l = this._tiles[i];
        if (l)
          return l.el.setAttribute("src", Et), on.prototype._removeTile.call(this, i);
      },
      _tileReady: function(i, l, s) {
        if (!(!this._map || s && s.getAttribute("src") === Et))
          return on.prototype._tileReady.call(this, i, l, s);
      }
    });
    function Il(i, l) {
      return new bi(i, l);
    }
    var er = bi.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1"
      },
      options: {
        crs: null,
        uppercase: !1
      },
      initialize: function(i, l) {
        this._url = i;
        var s = _({}, this.defaultWmsParams);
        for (var u in l) u in this.options || (s[u] = l[u]);
        l = $(this, l);
        var f = l.detectRetina && ut.retina ? 2 : 1, d = this.getTileSize();
        s.width = d.x * f, s.height = d.y * f, this.wmsParams = s;
      },
      onAdd: function(i) {
        this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var l = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[l] = this._crs.code, bi.prototype.onAdd.call(this, i);
      },
      getTileUrl: function(i) {
        var l = this._tileCoordsToNwSe(i), s = this._crs, u = Y(s.project(l[0]), s.project(l[1])), f = u.min, d = u.max, g = (this._wmsVersion >= 1.3 && this._crs === rs ? [
          f.y,
          f.x,
          d.y,
          d.x
        ] : [
          f.x,
          f.y,
          d.x,
          d.y
        ]).join(","), z = bi.prototype.getTileUrl.call(this, i);
        return z + pt(this.wmsParams, z, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + g;
      },
      setParams: function(i, l) {
        return _(this.wmsParams, i), l || this.redraw(), this;
      }
    });
    function Ma(i, l) {
      return new er(i, l);
    }
    bi.WMS = er, Il.wms = Ma;
    var Oi = _i.extend({
      options: { padding: 0.1 },
      initialize: function(i) {
        $(this, i), X(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), zt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var i = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i;
      },
      _onAnimZoom: function(i) {
        this._updateTransform(i.center, i.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(i, l) {
        var s = this._map.getZoomScale(l, this._zoom), u = this._map.getSize().multiplyBy(0.5 + this.options.padding), f = this._map.project(this._center, l), d = u.multiplyBy(-s).add(f).subtract(this._map._getNewPixelOrigin(i, l));
        ut.any3d ? Ke(this._container, d, s) : re(this._container, d);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var i in this._layers) this._layers[i]._reset();
      },
      _onZoomEnd: function() {
        for (var i in this._layers) this._layers[i]._project();
      },
      _updatePaths: function() {
        for (var i in this._layers) this._layers[i]._update();
      },
      _update: function() {
        var i = this.options.padding, l = this._map.getSize(), s = this._map.containerPointToLayerPoint(l.multiplyBy(-i)).round();
        this._bounds = new P(s, s.add(l.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), ir = Oi.extend({
      options: { tolerance: 0 },
      getEvents: function() {
        var i = Oi.prototype.getEvents.call(this);
        return i.viewprereset = this._onViewPreReset, i;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        Oi.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var i = this._container = document.createElement("canvas");
        Nt(i, "mousemove", this._onMouseMove, this), Nt(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Nt(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = !0, this._ctx = i.getContext("2d");
      },
      _destroyContainer: function() {
        _t(this._redrawRequest), delete this._ctx, ue(this._container), Jt(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var i;
          this._redrawBounds = null;
          for (var l in this._layers)
            i = this._layers[l], i._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Oi.prototype._update.call(this);
          var i = this._bounds, l = this._container, s = i.getSize(), u = ut.retina ? 2 : 1;
          re(l, i.min), l.width = u * s.x, l.height = u * s.y, l.style.width = s.x + "px", l.style.height = s.y + "px", ut.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
        }
      },
      _reset: function() {
        Oi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(i) {
        this._updateDashArray(i), this._layers[X(i)] = i;
        var l = i._order = {
          layer: i,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = l), this._drawLast = l, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(i) {
        this._requestRedraw(i);
      },
      _removePath: function(i) {
        var l = i._order, s = l.next, u = l.prev;
        s ? s.prev = u : this._drawLast = u, u ? u.next = s : this._drawFirst = s, delete i._order, delete this._layers[X(i)], this._requestRedraw(i);
      },
      _updatePath: function(i) {
        this._extendRedrawBounds(i), i._project(), i._update(), this._requestRedraw(i);
      },
      _updateStyle: function(i) {
        this._updateDashArray(i), this._requestRedraw(i);
      },
      _updateDashArray: function(i) {
        if (typeof i.options.dashArray == "string") {
          for (var l = i.options.dashArray.split(/[, ]+/), s = [], u, f = 0; f < l.length; f++) {
            if (u = Number(l[f]), isNaN(u)) return;
            s.push(u);
          }
          i.options._dashArray = s;
        } else i.options._dashArray = i.options.dashArray;
      },
      _requestRedraw: function(i) {
        this._map && (this._extendRedrawBounds(i), this._redrawRequest = this._redrawRequest || xt(this._redraw, this));
      },
      _extendRedrawBounds: function(i) {
        if (i._pxBounds) {
          var l = (i.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new P(), this._redrawBounds.extend(i._pxBounds.min.subtract([l, l])), this._redrawBounds.extend(i._pxBounds.max.add([l, l]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var i = this._redrawBounds;
        if (i) {
          var l = i.getSize();
          this._ctx.clearRect(i.min.x, i.min.y, l.x, l.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var i, l = this._redrawBounds;
        if (this._ctx.save(), l) {
          var s = l.getSize();
          this._ctx.beginPath(), this._ctx.rect(l.min.x, l.min.y, s.x, s.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var u = this._drawFirst; u; u = u.next)
          i = u.layer, (!l || i._pxBounds && i._pxBounds.intersects(l)) && i._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(i, l) {
        if (this._drawing) {
          var s, u, f, d, g = i._parts, z = g.length, j = this._ctx;
          if (z) {
            for (j.beginPath(), s = 0; s < z; s++) {
              for (u = 0, f = g[s].length; u < f; u++)
                d = g[s][u], j[u ? "lineTo" : "moveTo"](d.x, d.y);
              l && j.closePath();
            }
            this._fillStroke(j, i);
          }
        }
      },
      _updateCircle: function(i) {
        if (!(!this._drawing || i._empty())) {
          var l = i._point, s = this._ctx, u = Math.max(Math.round(i._radius), 1), f = (Math.max(Math.round(i._radiusY), 1) || u) / u;
          f !== 1 && (s.save(), s.scale(1, f)), s.beginPath(), s.arc(l.x, l.y / f, u, 0, Math.PI * 2, !1), f !== 1 && s.restore(), this._fillStroke(s, i);
        }
      },
      _fillStroke: function(i, l) {
        var s = l.options;
        s.fill && (i.globalAlpha = s.fillOpacity, i.fillStyle = s.fillColor || s.color, i.fill(s.fillRule || "evenodd")), s.stroke && s.weight !== 0 && (i.setLineDash && i.setLineDash(l.options && l.options._dashArray || []), i.globalAlpha = s.opacity, i.lineWidth = s.weight, i.strokeStyle = s.color, i.lineCap = s.lineCap, i.lineJoin = s.lineJoin, i.stroke());
      },
      _onClick: function(i) {
        for (var l = this._map.mouseEventToLayerPoint(i), s, u, f = this._drawFirst; f; f = f.next)
          s = f.layer, s.options.interactive && s._containsPoint(l) && (!(i.type === "click" || i.type === "preclick") || !this._map._draggableMoved(s)) && (u = s);
        this._fireEvent(u ? [u] : !1, i);
      },
      _onMouseMove: function(i) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var l = this._map.mouseEventToLayerPoint(i);
          this._handleMouseHover(i, l);
        }
      },
      _handleMouseOut: function(i) {
        var l = this._hoveredLayer;
        l && (oe(this._container, "leaflet-interactive"), this._fireEvent([l], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(i, l) {
        if (!this._mouseHoverThrottled) {
          for (var s, u, f = this._drawFirst; f; f = f.next)
            s = f.layer, s.options.interactive && s._containsPoint(l) && (u = s);
          u !== this._hoveredLayer && (this._handleMouseOut(i), u && (zt(this._container, "leaflet-interactive"), this._fireEvent([u], i, "mouseover"), this._hoveredLayer = u)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, i), this._mouseHoverThrottled = !0, setTimeout(tt(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(i, l, s) {
        this._map._fireDOMEvent(l, s || l.type, i);
      },
      _bringToFront: function(i) {
        var l = i._order;
        if (l) {
          var s = l.next, u = l.prev;
          if (s) s.prev = u;
          else return;
          u ? u.next = s : s && (this._drawFirst = s), l.prev = this._drawLast, this._drawLast.next = l, l.next = null, this._drawLast = l, this._requestRedraw(i);
        }
      },
      _bringToBack: function(i) {
        var l = i._order;
        if (l) {
          var s = l.next, u = l.prev;
          if (u) u.next = s;
          else return;
          s ? s.prev = u : u && (this._drawLast = u), l.prev = null, l.next = this._drawFirst, this._drawFirst.prev = l, this._drawFirst = l, this._requestRedraw(i);
        }
      }
    });
    function ar(i) {
      return ut.canvas ? new ir(i) : null;
    }
    var ol = (function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
          return document.createElement("<lvml:" + i + ' class="lvml">');
        };
      } catch {
      }
      return function(i) {
        return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    })(), ku = {
      _initContainer: function() {
        this._container = Pt("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (Oi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(i) {
        var l = i._container = ol("shape");
        zt(l, "leaflet-vml-shape " + (this.options.className || "")), l.coordsize = "1 1", i._path = ol("path"), l.appendChild(i._path), this._updateStyle(i), this._layers[X(i)] = i;
      },
      _addPath: function(i) {
        var l = i._container;
        this._container.appendChild(l), i.options.interactive && i.addInteractiveTarget(l);
      },
      _removePath: function(i) {
        var l = i._container;
        ue(l), i.removeInteractiveTarget(l), delete this._layers[X(i)];
      },
      _updateStyle: function(i) {
        var l = i._stroke, s = i._fill, u = i.options, f = i._container;
        f.stroked = !!u.stroke, f.filled = !!u.fill, u.stroke ? (l || (l = i._stroke = ol("stroke")), f.appendChild(l), l.weight = u.weight + "px", l.color = u.color, l.opacity = u.opacity, u.dashArray ? l.dashStyle = ot(u.dashArray) ? u.dashArray.join(" ") : u.dashArray.replace(/( *, *)/g, " ") : l.dashStyle = "", l.endcap = u.lineCap.replace("butt", "flat"), l.joinstyle = u.lineJoin) : l && (f.removeChild(l), i._stroke = null), u.fill ? (s || (s = i._fill = ol("fill")), f.appendChild(s), s.color = u.fillColor || u.color, s.opacity = u.fillOpacity) : s && (f.removeChild(s), i._fill = null);
      },
      _updateCircle: function(i) {
        var l = i._point.round(), s = Math.round(i._radius), u = Math.round(i._radiusY || s);
        this._setPath(i, i._empty() ? "M0 0" : "AL " + l.x + "," + l.y + " " + s + "," + u + " 0,23592600");
      },
      _setPath: function(i, l) {
        i._path.v = l;
      },
      _bringToFront: function(i) {
        Gi(i._container);
      },
      _bringToBack: function(i) {
        Pi(i._container);
      }
    }, Wl = ut.vml ? ol : _a, rn = Oi.extend({
      _initContainer: function() {
        this._container = Wl("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Wl("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        ue(this._container), Jt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Oi.prototype._update.call(this);
          var i = this._bounds, l = i.getSize(), s = this._container;
          (!this._svgSize || !this._svgSize.equals(l)) && (this._svgSize = l, s.setAttribute("width", l.x), s.setAttribute("height", l.y)), re(s, i.min), s.setAttribute("viewBox", [
            i.min.x,
            i.min.y,
            l.x,
            l.y
          ].join(" ")), this.fire("update");
        }
      },
      _initPath: function(i) {
        var l = i._path = Wl("path");
        i.options.className && zt(l, i.options.className), i.options.interactive && zt(l, "leaflet-interactive"), this._updateStyle(i), this._layers[X(i)] = i;
      },
      _addPath: function(i) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
      },
      _removePath: function(i) {
        ue(i._path), i.removeInteractiveTarget(i._path), delete this._layers[X(i)];
      },
      _updatePath: function(i) {
        i._project(), i._update();
      },
      _updateStyle: function(i) {
        var l = i._path, s = i.options;
        l && (s.stroke ? (l.setAttribute("stroke", s.color), l.setAttribute("stroke-opacity", s.opacity), l.setAttribute("stroke-width", s.weight), l.setAttribute("stroke-linecap", s.lineCap), l.setAttribute("stroke-linejoin", s.lineJoin), s.dashArray ? l.setAttribute("stroke-dasharray", s.dashArray) : l.removeAttribute("stroke-dasharray"), s.dashOffset ? l.setAttribute("stroke-dashoffset", s.dashOffset) : l.removeAttribute("stroke-dashoffset")) : l.setAttribute("stroke", "none"), s.fill ? (l.setAttribute("fill", s.fillColor || s.color), l.setAttribute("fill-opacity", s.fillOpacity), l.setAttribute("fill-rule", s.fillRule || "evenodd")) : l.setAttribute("fill", "none"));
      },
      _updatePoly: function(i, l) {
        this._setPath(i, De(i._parts, l));
      },
      _updateCircle: function(i) {
        var l = i._point, s = Math.max(Math.round(i._radius), 1), u = Math.max(Math.round(i._radiusY), 1) || s, f = "a" + s + "," + u + " 0 1,0 ", d = i._empty() ? "M0 0" : "M" + (l.x - s) + "," + l.y + f + s * 2 + ",0 " + f + -s * 2 + ",0 ";
        this._setPath(i, d);
      },
      _setPath: function(i, l) {
        i._path.setAttribute("d", l);
      },
      _bringToFront: function(i) {
        Gi(i._path);
      },
      _bringToBack: function(i) {
        Pi(i._path);
      }
    });
    ut.vml && rn.include(ku);
    function nr(i) {
      return ut.svg || ut.vml ? new rn(i) : null;
    }
    jt.include({
      getRenderer: function(i) {
        var l = i.options.renderer || this._getPaneRenderer(i.options.pane) || this.options.renderer || this._renderer;
        return l || (l = this._renderer = this._createRenderer()), this.hasLayer(l) || this.addLayer(l), l;
      },
      _getPaneRenderer: function(i) {
        if (i === "overlayPane" || i === void 0) return !1;
        var l = this._paneRenderers[i];
        return l === void 0 && (l = this._createRenderer({ pane: i }), this._paneRenderers[i] = l), l;
      },
      _createRenderer: function(i) {
        return this.options.preferCanvas && ar(i) || nr(i);
      }
    });
    var $l = en.extend({
      initialize: function(i, l) {
        en.prototype.initialize.call(this, this._boundsToLatLngs(i), l);
      },
      setBounds: function(i) {
        return this.setLatLngs(this._boundsToLatLngs(i));
      },
      _boundsToLatLngs: function(i) {
        return i = U(i), [
          i.getSouthWest(),
          i.getNorthWest(),
          i.getNorthEast(),
          i.getSouthEast()
        ];
      }
    });
    function xi(i, l) {
      return new $l(i, l);
    }
    rn.create = Wl, rn.pointsToPath = De, Ai.geometryToLayer = el, Ai.coordsToLatLng = il, Ai.coordsToLatLngs = al, Ai.latLngToCoords = Kl, Ai.latLngsToCoords = nl, Ai.getFeature = an, Ai.asFeature = Jl, jt.mergeOptions({ boxZoom: !0 });
    var ds = gi.extend({
      initialize: function(i) {
        this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
      },
      addHooks: function() {
        Nt(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        Jt(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        ue(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(i) {
        if (!i.shiftKey || i.which !== 1 && i.button !== 1) return !1;
        this._clearDeferredResetState(), this._resetState(), Va(), kl(), this._startPoint = this._map.mouseEventToContainerPoint(i), Nt(document, {
          contextmenu: sa,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(i) {
        this._moved || (this._moved = !0, this._box = Pt("div", "leaflet-zoom-box", this._container), zt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
        var l = new P(this._point, this._startPoint), s = l.getSize();
        re(this._box, l.min), this._box.style.width = s.x + "px", this._box.style.height = s.y + "px";
      },
      _finish: function() {
        this._moved && (ue(this._box), oe(this._container, "leaflet-crosshair")), Xa(), Qa(), Jt(document, {
          contextmenu: sa,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(i) {
        if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(tt(this._resetState, this), 0);
          var l = new rt(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(l).fire("boxzoomend", { boxZoomBounds: l });
        }
      },
      _onKeyDown: function(i) {
        i.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    jt.addInitHook("addHandler", "boxZoom", ds), jt.mergeOptions({ doubleClickZoom: !0 });
    var Li = gi.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(i) {
        var l = this._map, s = l.getZoom(), u = l.options.zoomDelta, f = i.originalEvent.shiftKey ? s - u : s + u;
        l.options.doubleClickZoom === "center" ? l.setZoom(f) : l.setZoomAround(i.containerPoint, f);
      }
    });
    jt.addInitHook("addHandler", "doubleClickZoom", Li), jt.mergeOptions({
      dragging: !0,
      inertia: !0,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0
    });
    var lr = gi.extend({
      addHooks: function() {
        if (!this._draggable) {
          var i = this._map;
          this._draggable = new Xi(i._mapPane, i._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
        }
        zt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        oe(this._map._container, "leaflet-grab"), oe(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var i = this._map;
        if (i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var l = U(this._map.options.maxBounds);
          this._offsetLimit = Y(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else this._offsetLimit = null;
        i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(i) {
        if (this._map.options.inertia) {
          var l = this._lastTime = +/* @__PURE__ */ new Date(), s = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(s), this._times.push(l), this._prunePositions(l);
        }
        this._map.fire("move", i).fire("drag", i);
      },
      _prunePositions: function(i) {
        for (; this._positions.length > 1 && i - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var i = this._map.getSize().divideBy(2), l = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = l.subtract(i).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(i, l) {
        return i - (i - l) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var i = this._draggable._newPos.subtract(this._draggable._startPos), l = this._offsetLimit;
          i.x < l.min.x && (i.x = this._viscousLimit(i.x, l.min.x)), i.y < l.min.y && (i.y = this._viscousLimit(i.y, l.min.y)), i.x > l.max.x && (i.x = this._viscousLimit(i.x, l.max.x)), i.y > l.max.y && (i.y = this._viscousLimit(i.y, l.max.y)), this._draggable._newPos = this._draggable._startPos.add(i);
        }
      },
      _onPreDragWrap: function() {
        var i = this._worldWidth, l = Math.round(i / 2), s = this._initialWorldOffset, u = this._draggable._newPos.x, f = (u - l + s) % i + l - s, d = (u + l + s) % i - l - s, g = Math.abs(f + s) < Math.abs(d + s) ? f : d;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = g;
      },
      _onDragEnd: function(i) {
        var l = this._map, s = l.options, u = !s.inertia || i.noInertia || this._times.length < 2;
        if (l.fire("dragend", i), u) l.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var f = this._lastPos.subtract(this._positions[0]), d = (this._lastTime - this._times[0]) / 1e3, g = s.easeLinearity, z = f.multiplyBy(g / d), j = z.distanceTo([0, 0]), Z = Math.min(s.inertiaMaxSpeed, j), W = z.multiplyBy(Z / j), dt = Z / (s.inertiaDeceleration * g), Tt = W.multiplyBy(-dt / 2).round();
          !Tt.x && !Tt.y ? l.fire("moveend") : (Tt = l._limitOffset(Tt, l.options.maxBounds), xt(function() {
            l.panBy(Tt, {
              duration: dt,
              easeLinearity: g,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    jt.addInitHook("addHandler", "dragging", lr), jt.mergeOptions({
      keyboard: !0,
      keyboardPanDelta: 80
    });
    var ji = gi.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [
          187,
          107,
          61,
          171
        ],
        zoomOut: [
          189,
          109,
          54,
          173
        ]
      },
      initialize: function(i) {
        this._map = i, this._setPanDelta(i.options.keyboardPanDelta), this._setZoomDelta(i.options.zoomDelta);
      },
      addHooks: function() {
        var i = this._map._container;
        i.tabIndex <= 0 && (i.tabIndex = "0"), Nt(i, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), Jt(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var i = document.body, l = document.documentElement, s = i.scrollTop || l.scrollTop, u = i.scrollLeft || l.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, s);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(i) {
        for (var l = this._panKeys = {}, s = this.keyCodes, u = 0, f = s.left.length; u < f; u++) l[s.left[u]] = [-1 * i, 0];
        for (u = 0, f = s.right.length; u < f; u++) l[s.right[u]] = [i, 0];
        for (u = 0, f = s.down.length; u < f; u++) l[s.down[u]] = [0, i];
        for (u = 0, f = s.up.length; u < f; u++) l[s.up[u]] = [0, -1 * i];
      },
      _setZoomDelta: function(i) {
        for (var l = this._zoomKeys = {}, s = this.keyCodes, u = 0, f = s.zoomIn.length; u < f; u++) l[s.zoomIn[u]] = i;
        for (u = 0, f = s.zoomOut.length; u < f; u++) l[s.zoomOut[u]] = -i;
      },
      _addHooks: function() {
        Nt(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Jt(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(i) {
        if (!(i.altKey || i.ctrlKey || i.metaKey)) {
          var l = i.keyCode, s = this._map, u;
          if (l in this._panKeys) {
            if (!s._panAnim || !s._panAnim._inProgress)
              if (u = this._panKeys[l], i.shiftKey && (u = R(u).multiplyBy(3)), s.options.maxBounds && (u = s._limitOffset(R(u), s.options.maxBounds)), s.options.worldCopyJump) {
                var f = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(u)));
                s.panTo(f);
              } else s.panBy(u);
          } else if (l in this._zoomKeys) s.setZoom(s.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[l]);
          else if (l === 27 && s._popup && s._popup.options.closeOnEscapeKey) s.closePopup();
          else return;
          sa(i);
        }
      }
    });
    jt.addInitHook("addHandler", "keyboard", ji), jt.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60
    });
    var rl = gi.extend({
      addHooks: function() {
        Nt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Jt(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(i) {
        var l = Xn(i), s = this._map.options.wheelDebounceTime;
        this._delta += l, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var u = Math.max(s - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(tt(this._performZoom, this), u), sa(i);
      },
      _performZoom: function() {
        var i = this._map, l = i.getZoom(), s = this._map.options.zoomSnap || 0;
        i._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), f = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(u)))) / Math.LN2, d = s ? Math.ceil(f / s) * s : f, g = i._limitZoom(l + (this._delta > 0 ? d : -d)) - l;
        this._delta = 0, this._startTime = null, g && (i.options.scrollWheelZoom === "center" ? i.setZoom(l + g) : i.setZoomAround(this._lastMousePos, l + g));
      }
    });
    jt.addInitHook("addHandler", "scrollWheelZoom", rl);
    var li = 600;
    jt.mergeOptions({
      tapHold: ut.touchNative && ut.safari && ut.mobile,
      tapTolerance: 15
    });
    var Aa = gi.extend({
      addHooks: function() {
        Nt(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Jt(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(i) {
        if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
          var l = i.touches[0];
          this._startPos = this._newPos = new x(l.clientX, l.clientY), this._holdTimeout = setTimeout(tt(function() {
            this._cancel(), this._isTapValid() && (Nt(document, "touchend", Se), Nt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", l));
          }, this), li), Nt(document, "touchend touchcancel contextmenu", this._cancel, this), Nt(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function i() {
        Jt(document, "touchend", Se), Jt(document, "touchend touchcancel", i);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), Jt(document, "touchend touchcancel contextmenu", this._cancel, this), Jt(document, "touchmove", this._onMove, this);
      },
      _onMove: function(i) {
        var l = i.touches[0];
        this._newPos = new x(l.clientX, l.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(i, l) {
        var s = new MouseEvent(i, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: l.screenX,
          screenY: l.screenY,
          clientX: l.clientX,
          clientY: l.clientY
        });
        s._simulated = !0, l.target.dispatchEvent(s);
      }
    });
    jt.addInitHook("addHandler", "tapHold", Aa), jt.mergeOptions({
      touchZoom: ut.touch,
      bounceAtZoomLimits: !0
    });
    var to = gi.extend({
      addHooks: function() {
        zt(this._map._container, "leaflet-touch-zoom"), Nt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        oe(this._map._container, "leaflet-touch-zoom"), Jt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(i) {
        var l = this._map;
        if (!(!i.touches || i.touches.length !== 2 || l._animatingZoom || this._zooming)) {
          var s = l.mouseEventToContainerPoint(i.touches[0]), u = l.mouseEventToContainerPoint(i.touches[1]);
          this._centerPoint = l.getSize()._divideBy(2), this._startLatLng = l.containerPointToLatLng(this._centerPoint), l.options.touchZoom !== "center" && (this._pinchStartLatLng = l.containerPointToLatLng(s.add(u)._divideBy(2))), this._startDist = s.distanceTo(u), this._startZoom = l.getZoom(), this._moved = !1, this._zooming = !0, l._stop(), Nt(document, "touchmove", this._onTouchMove, this), Nt(document, "touchend touchcancel", this._onTouchEnd, this), Se(i);
        }
      },
      _onTouchMove: function(i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var l = this._map, s = l.mouseEventToContainerPoint(i.touches[0]), u = l.mouseEventToContainerPoint(i.touches[1]), f = s.distanceTo(u) / this._startDist;
          if (this._zoom = l.getScaleZoom(f, this._startZoom), !l.options.bounceAtZoomLimits && (this._zoom < l.getMinZoom() && f < 1 || this._zoom > l.getMaxZoom() && f > 1) && (this._zoom = l._limitZoom(this._zoom)), l.options.touchZoom === "center") {
            if (this._center = this._startLatLng, f === 1) return;
          } else {
            var d = s._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (f === 1 && d.x === 0 && d.y === 0) return;
            this._center = l.unproject(l.project(this._pinchStartLatLng, this._zoom).subtract(d), this._zoom);
          }
          this._moved || (l._moveStart(!0, !1), this._moved = !0), _t(this._animRequest);
          var g = tt(l._move, l, this._center, this._zoom, {
            pinch: !0,
            round: !1
          }, void 0);
          this._animRequest = xt(g, this, !0), Se(i);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, _t(this._animRequest), Jt(document, "touchmove", this._onTouchMove, this), Jt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    jt.addInitHook("addHandler", "touchZoom", to), jt.BoxZoom = ds, jt.DoubleClickZoom = Li, jt.Drag = lr, jt.Keyboard = ji, jt.ScrollWheelZoom = rl, jt.TapHold = Aa, jt.TouchZoom = to, N.Bounds = P, N.Browser = ut, N.CRS = V, N.Canvas = ir, N.Circle = Vl, N.CircleMarker = Pl, N.Class = Ct, N.Control = ai, N.DivIcon = ln, N.DivOverlay = yi, N.DomEvent = Go, N.DomUtil = $r, N.Draggable = Xi, N.Evented = at, N.FeatureGroup = Je, N.GeoJSON = Ai, N.GridLayer = on, N.Handler = gi, N.Icon = Ea, N.ImageOverlay = Ae, N.LatLng = v, N.LatLngBounds = rt, N.Layer = _i, N.LayerGroup = Wa, N.LineUtil = Qo, N.Map = jt, N.Marker = $n, N.Mixin = Hl, N.Path = ca, N.Point = x, N.PolyUtil = Fn, N.Polygon = en, N.Polyline = Fe, N.Popup = nn, N.PosAnimation = Bl, N.Projection = Eu, N.Rectangle = $l, N.Renderer = Oi, N.SVG = rn, N.SVGOverlay = Wo, N.TileLayer = bi, N.Tooltip = Ki, N.Transformation = Dt, N.Util = Mt, N.VideoOverlay = Fl, N.bind = tt, N.bounds = Y, N.canvas = ar, N.circle = us, N.circleMarker = Ou, N.control = za, N.divIcon = tr, N.extend = _, N.featureGroup = Au, N.geoJSON = cs, N.geoJson = Lu, N.gridLayer = Ca, N.icon = ss, N.imageOverlay = ll, N.latLng = O, N.latLngBounds = U, N.layerGroup = Jo, N.map = Ka, N.marker = tn, N.point = R, N.polygon = Xl, N.polyline = tl, N.popup = ju, N.rectangle = xi, N.setOptions = $, N.stamp = X, N.svg = nr, N.svgOverlay = hs, N.tileLayer = Il, N.tooltip = $o, N.transformation = K, N.version = F, N.videoOverlay = fs;
    var eo = window.L;
    N.noConflict = function() {
      return window.L = eo, this;
    }, window.L = N;
  }));
})), up = /* @__PURE__ */ ta(((b) => {
  var B = Symbol.for("react.transitional.element");
  function N(F, _, st) {
    var tt = null;
    if (st !== void 0 && (tt = "" + st), _.key !== void 0 && (tt = "" + _.key), "key" in _) {
      st = {};
      for (var ft in _) ft !== "key" && (st[ft] = _[ft]);
    } else st = _;
    return _ = st.ref, {
      $$typeof: B,
      type: F,
      key: tt,
      ref: _ !== void 0 ? _ : null,
      props: st
    };
  }
  b.jsx = N, b.jsxs = N;
})), cp = /* @__PURE__ */ ta(((b, B) => {
  B.exports = up();
})), Ci = /* @__PURE__ */ $m(sp(), 1), m = cp(), fp = ({ map: b, targets: B, onSelectTarget: N, selectedId: F }) => {
  const [_, st] = (0, it.useState)([]), tt = (0, it.useCallback)(() => {
    if (!b) return;
    const ft = b.getContainer(), X = ft.clientWidth, Lt = ft.clientHeight;
    if (X <= 0 || Lt <= 0) return;
    const qt = 76, q = 88, C = 28, lt = 64, mt = C, $ = X - lt, pt = qt, J = Lt - q;
    if ($ <= mt || J <= pt) return;
    const gt = (mt + $) / 2, ot = (pt + J) / 2, Xt = ($ - mt) / 2, Et = (J - pt) / 2, kt = [];
    B.forEach((Rt) => {
      if (typeof Rt.lat != "number" || typeof Rt.lng != "number" || isNaN(Rt.lat) || isNaN(Rt.lng)) return;
      const xt = [Rt.lat, Rt.lng], _t = b.latLngToContainerPoint(xt);
      if (_t.x >= 18 && _t.x <= $ + 10 && _t.y >= 66 && _t.y <= J + 10) return;
      const Mt = _t.x - gt, Ct = _t.y - ot;
      if (Mt === 0 && Ct === 0) return;
      const Wt = Math.atan2(Ct, Mt) * 180 / Math.PI, H = Math.abs(Mt) > 0 ? Xt / Math.abs(Mt) : 1 / 0, at = Math.abs(Ct) > 0 ? Et / Math.abs(Ct) : 1 / 0, x = Math.min(H, at);
      let G = gt + Mt * x, R = ot + Ct * x, P;
      x === at ? (P = Ct < 0 ? "top" : "bottom", R = Ct < 0 ? pt : J) : (P = Mt < 0 ? "left" : "right", G = Mt < 0 ? mt : $);
      const Y = b.getCenter().distanceTo(xt), rt = Math.round(Y / 1e3 * 10) / 10;
      kt.push({
        target: Rt,
        edgeX: G,
        edgeY: R,
        angleDeg: Wt,
        distanceKm: rt,
        side: P
      });
    });
    const Kt = 48, wt = [
      "top",
      "bottom",
      "left",
      "right"
    ], vt = [];
    wt.forEach((Rt) => {
      const xt = kt.filter((Mt) => Mt.side === Rt);
      if (xt.length <= 1) {
        vt.push(...xt);
        return;
      }
      const _t = Rt === "top" || Rt === "bottom";
      xt.sort((Mt, Ct) => _t ? Mt.edgeX - Ct.edgeX : Mt.edgeY - Ct.edgeY);
      for (let Mt = 0; Mt < 3; Mt++) for (let Ct = 1; Ct < xt.length; Ct++) {
        const Wt = xt[Ct - 1], H = xt[Ct], at = _t ? H.edgeX - Wt.edgeX : H.edgeY - Wt.edgeY;
        if (at < Kt) {
          const x = (Kt - at) / 2;
          _t ? (Wt.edgeX = Math.max(mt, Wt.edgeX - x), H.edgeX = Math.min($, H.edgeX + x)) : (Wt.edgeY = Math.max(pt, Wt.edgeY - x), H.edgeY = Math.min(J, H.edgeY + x));
        }
      }
      vt.push(...xt);
    }), st(vt);
  }, [b, B]);
  return (0, it.useEffect)(() => {
    if (!b) return;
    tt();
    const ft = () => {
      tt();
    };
    return b.on("move", ft), b.on("zoom", ft), b.on("resize", ft), () => {
      b.off("move", ft), b.off("zoom", ft), b.off("resize", ft);
    };
  }, [b, tt]), _.length === 0 ? null : /* @__PURE__ */ (0, m.jsx)("div", {
    className: "pointer-events-none absolute inset-0 z-[450] overflow-hidden",
    children: _.map((ft) => {
      const { target: X, edgeX: Lt, edgeY: qt, angleDeg: q, distanceKm: C } = ft, lt = F === X.id, mt = X.name.split(" ").map((ot) => ot[0]).slice(0, 2).join("").toUpperCase() || "?", $ = q * Math.PI / 180, pt = 23, J = Math.cos($) * pt, gt = Math.sin($) * pt;
      return /* @__PURE__ */ (0, m.jsxs)("div", {
        onClick: (ot) => {
          ot.stopPropagation(), N(X.id, X.lat, X.lng);
        },
        style: { transform: `translate3d(${Lt}px, ${qt}px, 0) translate(-50%, -50%)` },
        className: "pointer-events-auto absolute flex cursor-pointer items-center justify-center transition-transform duration-75 active:scale-95",
        title: `${X.name} (${C} km away) - Tap to locate`,
        children: [/* @__PURE__ */ (0, m.jsx)("div", {
          style: {
            transform: `translate(${J}px, ${gt}px) rotate(${q}deg)`,
            color: X.color
          },
          className: "absolute pointer-events-none drop-shadow-sm transition-transform",
          children: /* @__PURE__ */ (0, m.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "currentColor",
            children: /* @__PURE__ */ (0, m.jsx)("path", {
              d: "M13 7L3 1.5V12.5L13 7Z",
              stroke: "#FFFFFF",
              strokeWidth: "1.5",
              strokeLinejoin: "round"
            })
          })
        }), /* @__PURE__ */ (0, m.jsxs)("div", {
          style: {
            borderColor: "#FFFFFF",
            boxShadow: lt ? `0 0 0 3px ${X.color}, 0 6px 18px rgba(0,0,0,0.22)` : "0 4px 14px rgba(0, 0, 0, 0.16)"
          },
          className: "relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition-all hover:scale-110",
          children: [/* @__PURE__ */ (0, m.jsx)("div", {
            style: { backgroundColor: X.color },
            className: "flex h-8 w-8 items-center justify-center overflow-hidden rounded-full font-bold text-white shadow-inner",
            children: X.avatarUrl ? /* @__PURE__ */ (0, m.jsx)("img", {
              src: X.avatarUrl,
              alt: X.name,
              className: "h-full w-full object-cover",
              referrerPolicy: "no-referrer",
              onError: (ot) => {
                ot.target.style.display = "none";
              }
            }) : /* @__PURE__ */ (0, m.jsx)("span", {
              className: "text-[11px] font-bold tracking-tight text-white drop-shadow-sm",
              children: mt
            })
          }), C > 0 && /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "absolute -bottom-4.5 whitespace-nowrap rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[9px] font-medium text-white shadow backdrop-blur-xs",
            children: [C, "km"]
          })]
        })]
      }, X.id);
    })
  });
}, hp = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), dp = (b) => b.replace(/^([A-Z])|[\s-_]+(\w)/g, (B, N, F) => F ? F.toUpperCase() : N.toLowerCase()), Km = (b) => {
  const B = dp(b);
  return B.charAt(0).toUpperCase() + B.slice(1);
}, t0 = (...b) => b.filter((B, N, F) => !!B && B.trim() !== "" && F.indexOf(B) === N).join(" ").trim(), mp = (b) => {
  for (const B in b) if (B.startsWith("aria-") || B === "role" || B === "title") return !0;
}, vp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, pp = (0, it.forwardRef)(({ color: b = "currentColor", size: B = 24, strokeWidth: N = 2, absoluteStrokeWidth: F, className: _ = "", children: st, iconNode: tt, ...ft }, X) => (0, it.createElement)("svg", {
  ref: X,
  ...vp,
  width: B,
  height: B,
  stroke: b,
  strokeWidth: F ? Number(N) * 24 / Number(B) : N,
  className: t0("lucide", _),
  ...!st && !mp(ft) && { "aria-hidden": "true" },
  ...ft
}, [...tt.map(([Lt, qt]) => (0, it.createElement)(Lt, qt)), ...Array.isArray(st) ? st : [st]])), It = (b, B) => {
  const N = (0, it.forwardRef)(({ className: F, ..._ }, st) => (0, it.createElement)(pp, {
    ref: st,
    iconNode: B,
    className: t0(`lucide-${hp(Km(b))}`, `lucide-${b}`, F),
    ..._
  }));
  return N.displayName = Km(b), N;
}, gp = [
  ["path", {
    d: "m11 7-3 5h4l-3 5",
    key: "b4a64w"
  }],
  ["path", {
    d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",
    key: "lre1cr"
  }],
  ["path", {
    d: "M22 14v-4",
    key: "14q9d5"
  }],
  ["path", {
    d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",
    key: "13q5k0"
  }]
], _p = It("battery-charging", gp), yp = [["path", {
  d: "M 22 14 L 22 10",
  key: "nqc4tb"
}], ["rect", {
  x: "2",
  y: "6",
  width: "16",
  height: "12",
  rx: "2",
  key: "13zb55"
}]], bp = It("battery", yp), xp = [
  ["path", {
    d: "M10.268 21a2 2 0 0 0 3.464 0",
    key: "vwvbt9"
  }],
  ["path", {
    d: "M22 8c0-2.3-.8-4.3-2-6",
    key: "5bb3ad"
  }],
  ["path", {
    d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
    key: "11g9vi"
  }],
  ["path", {
    d: "M4 2C2.8 3.7 2 5.7 2 8",
    key: "tap9e0"
  }]
], wp = It("bell-ring", xp), Sp = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
  key: "11g9vi"
}]], Tp = It("bell", Sp), zp = [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]], e0 = It("check", zp), Np = [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]], Lo = It("chevron-down", Np), Ep = [["path", {
  d: "m18 15-6-6-6 6",
  key: "153udz"
}]], jo = It("chevron-up", Ep), Cp = [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
  }],
  ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
  }]
], Mp = It("circle-alert", Cp), Ap = [["path", {
  d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
  key: "9ktpf1"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]], Op = It("compass", Ap), Lp = [["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]], jp = It("copy", Lp), kp = [
  ["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
  }],
  ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
  }],
  ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
  }]
], Dp = It("external-link", kp), Rp = [["path", {
  d: "m12 14 4-4",
  key: "9kzdfg"
}], ["path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0",
  key: "19p75a"
}]], Bp = It("gauge", Rp), Zp = [["path", {
  d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
  key: "5wwlr5"
}], ["path", {
  d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "r6nss1"
}]], Hp = It("house", Zp), Up = [
  ["path", {
    d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
    key: "zw3jo"
  }],
  ["path", {
    d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
    key: "1wduqc"
  }],
  ["path", {
    d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
    key: "kqbvx6"
  }]
], qp = It("layers", Up), Yp = [
  ["line", {
    x1: "2",
    x2: "5",
    y1: "12",
    y2: "12",
    key: "bvdh0s"
  }],
  ["line", {
    x1: "19",
    x2: "22",
    y1: "12",
    y2: "12",
    key: "1tbv5k"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "5",
    key: "11lu5j"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "19",
    y2: "22",
    key: "x3vr5v"
  }],
  ["circle", {
    cx: "12",
    cy: "12",
    r: "7",
    key: "fim9np"
  }],
  ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
  }]
], Gp = It("locate-fixed", Yp), Pp = [
  ["path", {
    d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
    key: "169xi5"
  }],
  ["path", {
    d: "M15 5.764v15",
    key: "1pn4in"
  }],
  ["path", {
    d: "M9 3.236v15",
    key: "1uimfh"
  }]
], Jm = It("map", Pp), Vp = [
  ["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
  }],
  ["path", {
    d: "m21 3-7 7",
    key: "1l2asr"
  }],
  ["path", {
    d: "m3 21 7-7",
    key: "tjx5ai"
  }],
  ["path", {
    d: "M9 21H3v-6",
    key: "wtvkvv"
  }]
], Xp = It("maximize-2", Vp), Qp = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}]], Kp = It("minus", Qp), Jp = [["polygon", {
  points: "3 11 22 2 13 21 11 13 3 11",
  key: "1ltx0t"
}]], i0 = It("navigation", Jp), Fp = [["path", {
  d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
  key: "10ikf1"
}]], Ip = It("play", Fp), Wp = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "M12 5v14",
  key: "s699le"
}]], a0 = It("plus", Wp), $p = [
  ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
  }],
  ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
  }],
  ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
  }],
  ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
  }],
  ["path", {
    d: "M21 21v.01",
    key: "ents32"
  }],
  ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
  }],
  ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
  }],
  ["path", {
    d: "M12 3h.01",
    key: "n36tog"
  }],
  ["path", {
    d: "M12 16v.01",
    key: "133mhm"
  }],
  ["path", {
    d: "M16 12h1",
    key: "1slzba"
  }],
  ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
  }],
  ["path", {
    d: "M12 21v-1",
    key: "1880an"
  }]
], tg = It("qr-code", $p), eg = [
  ["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
  }],
  ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
  }],
  ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
  }],
  ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
  }]
], ig = It("refresh-cw", eg), ag = [["path", {
  d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
  key: "1i5ecw"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]], ng = It("settings", ag), lg = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]], og = It("shield-check", lg), rg = [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  ry: "2",
  key: "1yt0o3"
}], ["path", {
  d: "M12 18h.01",
  key: "mhygvu"
}]], Fm = It("smartphone", rg), sg = [
  ["path", {
    d: "M10 11v6",
    key: "nco0om"
  }],
  ["path", {
    d: "M14 11v6",
    key: "outv1u"
  }],
  ["path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
    key: "miytrc"
  }],
  ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
  }],
  ["path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    key: "e791ji"
  }]
], ug = It("trash-2", sg), cg = [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
  key: "975kel"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4",
  key: "17ys0d"
}]], fg = It("user", cg), hg = [
  ["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
  }],
  ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
  }],
  ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
  }],
  ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
  }]
], Hr = It("users", hg), dg = [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]], Df = It("x", dg), mg = ({ members: b, entities: B, selectedMemberId: N, onSelectMember: F, onSelectDevice: _, mapStyle: st, onChangeMapStyle: tt, showAccuracyCircles: ft = !0, showZones: X = !0, showPrivateDevices: Lt = !0, isFollowing: qt = !0, followPaused: q, onFollowResume: C, onUserManualPan: lt, haUrl: mt }) => {
  const $ = (0, it.useRef)(null), pt = (0, it.useRef)(null), J = (0, it.useRef)(null), gt = (0, it.useRef)(/* @__PURE__ */ new Map()), ot = (0, it.useRef)(/* @__PURE__ */ new Map()), Xt = (0, it.useRef)(/* @__PURE__ */ new Map()), Et = (0, it.useRef)(/* @__PURE__ */ new Map()), kt = (0, it.useRef)(!1), [Kt, wt] = (0, it.useState)(!1), [vt, Rt] = (0, it.useState)(!1);
  (0, it.useEffect)(() => {
    if (!$.current || pt.current) return;
    const x = Ci.default.map($.current, {
      zoomControl: !1,
      attributionControl: !0,
      minZoom: 2,
      maxZoom: 19
    }).setView([51.5074, -0.1278], 13), G = Ln[st] || Ln.osm, R = Ci.default.tileLayer(G.url, {
      attribution: G.attribution,
      maxZoom: G.maxZoom,
      subdomains: "abcd"
    }).addTo(x);
    J.current = R, pt.current = x, wt(!0);
    const P = () => {
      kt.current || lt();
    };
    x.on("dragstart", P), x.on("zoomstart", (rt) => {
      kt.current || rt.originalEvent && P();
    }), x.on("moveend", () => {
      kt.current = !1;
    });
    let Y = null;
    return typeof ResizeObserver < "u" && $.current && (Y = new ResizeObserver(() => {
      x.invalidateSize();
    }), Y.observe($.current)), () => {
      Y && Y.disconnect(), x.remove(), pt.current = null;
    };
  }, []), (0, it.useEffect)(() => {
    const x = pt.current;
    if (!x) return;
    const G = Ln[st] || Ln.osm;
    J.current && x.removeLayer(J.current);
    const R = Ci.default.tileLayer(G.url, {
      attribution: G.attribution,
      maxZoom: G.maxZoom,
      subdomains: "abcd"
    }).addTo(x);
    J.current = R;
  }, [st]);
  const [xt, _t] = (0, it.useState)([]);
  (0, it.useEffect)(() => {
    const x = pt.current;
    if (!x || !Kt) return;
    const G = [], R = [], P = /* @__PURE__ */ new Set();
    if (b.forEach((Y) => {
      P.add(Y.id);
      const rt = B[Y.ha_person_id], U = rt?.attributes?.latitude, v = rt?.attributes?.longitude, O = rt?.attributes?.gps_accuracy;
      if (typeof U == "number" && typeof v == "number" && !isNaN(U) && !isNaN(v)) {
        R.push([U, v]);
        let V;
        const I = rt?.attributes?.source;
        I && B[I] && (V = B[I].attributes?.battery_level);
        let yt = rt?.attributes?.entity_picture;
        yt && yt.startsWith("/") && (yt = `${mt}${yt}`), G.push({
          id: Y.id,
          name: Y.display_name,
          lat: U,
          lng: v,
          color: Y.color,
          avatarUrl: yt,
          batteryLevel: V
        });
        const St = N === Y.id, Dt = Y.display_name.split(" ").map((le) => le[0]).slice(0, 2).join("").toUpperCase() || "?", K = St ? 48 : 42, ht = K / 2, di = `
          <div class="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style="--member-color-glow: ${Y.color}80">
            ${St ? `<div class="absolute -inset-3 rounded-full yimly-selected-pulse" style="background-color: ${Y.color}35;"></div>` : ""}
            <div
              class="relative rounded-full bg-white p-0.5 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 group-hover:scale-105"
              style="width: ${K}px; height: ${K}px; border: ${St ? "3.5px" : "2.5px"} solid ${Y.color}; ${St ? "box-shadow: 0 4px 16px rgba(0,0,0,0.22);" : ""}"
            >
              <div
                class="w-full h-full rounded-full flex items-center justify-center overflow-hidden font-bold text-white shadow-inner"
                style="background-color: ${Y.color};"
              >
                ${yt ? `<img src="${yt}" alt="${Y.display_name}" class="w-full h-full object-cover" />` : `<span class="${St ? "text-sm" : "text-xs"} font-bold text-white drop-shadow-sm tracking-tight">${Dt}</span>`}
              </div>
              ${V !== void 0 ? `<div class="absolute -bottom-1 bg-slate-900/90 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full shadow border border-white/70">${V}%</div>` : ""}
            </div>
            <!-- Name Label below marker -->
            <div class="absolute -bottom-5.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-semibold pointer-events-none transition-all duration-150 ${St ? "bg-slate-900 text-white ring-2 ring-white shadow-md scale-105" : "bg-white/95 text-slate-800 shadow-sm border border-slate-200/70"}">
              ${Y.display_name}
            </div>
          </div>
        `, _a = Ci.default.divIcon({
          className: "yimly-marker",
          html: di,
          iconSize: [K, K],
          iconAnchor: [ht, ht]
        });
        let De = gt.current.get(Y.id);
        if (De ? (De.setLatLng([U, v]), De.setIcon(_a), De.setZIndexOffset(St ? 1e3 : 100)) : (De = Ci.default.marker([U, v], {
          icon: _a,
          zIndexOffset: St ? 1e3 : 100
        }).addTo(x), De.on("click", (le) => {
          Ci.default.DomEvent.stopPropagation(le), F(Y.id);
        }), gt.current.set(Y.id, De)), O && O > 5 && St) {
          let le = Et.current.get(Y.id);
          le ? (le.setLatLng([U, v]), le.setRadius(O)) : (le = Ci.default.circle([U, v], {
            radius: O,
            color: Y.color,
            weight: 1.5,
            fillColor: Y.color,
            fillOpacity: 0.12,
            dashArray: "4, 5"
          }).addTo(x), Et.current.set(Y.id, le));
        } else {
          const le = Et.current.get(Y.id);
          le && (x.removeLayer(le), Et.current.delete(Y.id));
        }
      }
    }), gt.current.forEach((Y, rt) => {
      P.has(rt) || (x.removeLayer(Y), gt.current.delete(rt));
    }), Object.values(B).filter((Y) => Y.entity_id.startsWith("device_tracker.")).forEach((Y) => {
      const rt = Y.attributes?.latitude, U = Y.attributes?.longitude, v = Y.entity_id, O = b.find((yt) => B[yt.ha_person_id]?.attributes?.source === v), V = O || b.find((yt) => yt.linked_device_tracker_id === v), I = V ? V.color : "#64748B";
      if (!O && typeof rt == "number" && typeof U == "number" && !isNaN(rt) && !isNaN(U)) {
        const yt = N === v, St = `
          <div class="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            <div
              class="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shadow-md yimly-device-breathing transition-transform active:scale-95 group-hover:scale-110"
              style="border: 2.5px solid ${I};"
            >
              <svg class="w-4 h-4" style="color: ${I};" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div class="absolute -bottom-4 whitespace-nowrap bg-white/95 px-1.5 py-0.2 rounded text-[9px] font-semibold text-slate-700 shadow-xs border border-slate-200 pointer-events-none opacity-85">
              ${Y.attributes.friendly_name || v.replace("device_tracker.", "")}
            </div>
          </div>
        `, Dt = Ci.default.divIcon({
          className: "yimly-device-marker",
          html: St,
          iconSize: [34, 34],
          iconAnchor: [17, 17]
        });
        let K = ot.current.get(v);
        K ? (K.setLatLng([rt, U]), K.setIcon(Dt)) : (K = Ci.default.marker([rt, U], {
          icon: Dt,
          zIndexOffset: yt ? 500 : 50
        }).addTo(x), K.on("click", (ht) => {
          Ci.default.DomEvent.stopPropagation(ht), F(v);
        }), ot.current.set(v, K));
      }
    }), Object.values(B).filter((Y) => Y.entity_id.startsWith("zone.")).forEach((Y) => {
      const rt = Y.attributes?.latitude, U = Y.attributes?.longitude, v = Y.attributes?.radius || 100, O = Y.entity_id;
      if (typeof rt == "number" && typeof U == "number" && !isNaN(rt) && !isNaN(U)) {
        let V = Xt.current.get(O);
        if (V)
          V.setLatLng([rt, U]), V.setRadius(v);
        else {
          V = Ci.default.circle([rt, U], {
            radius: v,
            color: "#64748B",
            weight: 1,
            fillColor: "#94A3B8",
            fillOpacity: 0.1,
            dashArray: "3, 6"
          }).addTo(x);
          const I = Y.attributes.friendly_name || O.replace("zone.", "");
          V.bindTooltip(I, {
            permanent: !1,
            direction: "center",
            className: "text-xs font-semibold text-slate-600 bg-white/90 rounded-md px-1.5 py-0.5 border border-slate-200 shadow-xs"
          }), Xt.current.set(O, V);
        }
      }
    }), _t(G), R.length > 0 && !N && !q) {
      const Y = Ci.default.latLngBounds(R);
      Y.isValid() && (kt.current = !0, x.fitBounds(Y, {
        padding: [60, 60],
        maxZoom: 16
      }));
    }
  }, [
    b,
    B,
    N,
    Kt,
    mt
  ]), (0, it.useEffect)(() => {
    const x = pt.current;
    if (!x || !N || q) return;
    const G = b.find((Y) => Y.id === N);
    let R, P;
    if (G) {
      const Y = B[G.ha_person_id];
      R = Y?.attributes?.latitude, P = Y?.attributes?.longitude;
    } else {
      const Y = B[N];
      R = Y?.attributes?.latitude, P = Y?.attributes?.longitude;
    }
    typeof R == "number" && typeof P == "number" && !isNaN(R) && !isNaN(P) && (kt.current = !0, x.panTo([R, P], {
      animate: !0,
      duration: 0.8
    }));
  }, [
    N,
    q,
    B,
    b
  ]);
  const Mt = (x, G, R) => {
    F(x), C?.(), pt.current && (kt.current = !0, pt.current.flyTo([G, R], Math.max(pt.current.getZoom(), 16), { duration: 0.9 }));
  }, Ct = () => {
    kt.current = !0, pt.current?.zoomIn();
  }, Wt = () => {
    kt.current = !0, pt.current?.zoomOut();
  }, H = () => {
    const x = pt.current;
    if (!x) return;
    const G = [];
    if (b.forEach((R) => {
      const P = B[R.ha_person_id];
      P?.attributes?.latitude && P?.attributes?.longitude && G.push([P.attributes.latitude, P.attributes.longitude]);
    }), G.length > 0) {
      const R = Ci.default.latLngBounds(G);
      kt.current = !0, x.fitBounds(R, {
        padding: [70, 70],
        maxZoom: 16
      });
    }
  }, at = xt.length > 0;
  return /* @__PURE__ */ (0, m.jsxs)("div", {
    className: "relative h-full w-full overflow-hidden select-none bg-slate-100",
    children: [
      /* @__PURE__ */ (0, m.jsx)("div", {
        ref: $,
        className: "h-full w-full",
        onClick: () => {
          F(null);
        }
      }),
      /* @__PURE__ */ (0, m.jsx)(fp, {
        map: pt.current,
        targets: xt,
        onSelectTarget: Mt,
        selectedId: N
      }),
      !at && /* @__PURE__ */ (0, m.jsx)("div", {
        className: "pointer-events-none absolute inset-0 flex items-center justify-center p-6 z-[300]",
        children: /* @__PURE__ */ (0, m.jsxs)("div", {
          className: "rounded-2xl border border-white/80 bg-white/90 px-5 py-4 text-center shadow-lg backdrop-blur-md max-w-sm",
          children: [/* @__PURE__ */ (0, m.jsx)("p", {
            className: "text-sm font-semibold text-slate-800",
            children: "No device locations available yet."
          }), /* @__PURE__ */ (0, m.jsx)("p", {
            className: "mt-1 text-xs text-slate-500",
            children: "Ensure Home Assistant Companion App location tracking is enabled for your users."
          })]
        })
      }),
      /* @__PURE__ */ (0, m.jsxs)("div", {
        className: "absolute right-3.5 top-20 z-[400] flex flex-col gap-2",
        onClick: (x) => x.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "relative",
            children: [/* @__PURE__ */ (0, m.jsx)("button", {
              onClick: () => Rt(!vt),
              className: "flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white",
              title: "Map Style",
              children: /* @__PURE__ */ (0, m.jsx)(qp, { className: "h-4.5 w-4.5 sm:h-5 sm:w-5" })
            }), vt && /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "absolute right-12 sm:right-13 top-0 w-44 rounded-2xl border border-white/70 bg-white/95 p-1.5 shadow-xl backdrop-blur-md z-[500]",
              onClick: (x) => x.stopPropagation(),
              children: [/* @__PURE__ */ (0, m.jsx)("p", {
                className: "px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400",
                children: "Map Style"
              }), /* @__PURE__ */ (0, m.jsx)("div", {
                className: "flex flex-col gap-0.5",
                children: Object.keys(Ln).map((x) => {
                  const G = Ln[x], R = st === x;
                  return /* @__PURE__ */ (0, m.jsxs)("button", {
                    onClick: () => {
                      tt(x), Rt(!1);
                    },
                    className: `flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${R ? "bg-slate-900 text-white shadow-xs" : "text-slate-700 hover:bg-slate-100"}`,
                    children: [/* @__PURE__ */ (0, m.jsx)("span", { children: G.name }), R && /* @__PURE__ */ (0, m.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-white" })]
                  }, x);
                })
              })]
            })]
          }),
          at && /* @__PURE__ */ (0, m.jsx)("button", {
            onClick: H,
            className: "flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white",
            title: "Recenter All Members",
            children: /* @__PURE__ */ (0, m.jsx)(Xp, { className: "h-4.5 w-4.5 sm:h-5 sm:w-5" })
          }),
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-md backdrop-blur-md",
            children: [/* @__PURE__ */ (0, m.jsx)("button", {
              onClick: Ct,
              className: "flex h-9.5 w-10 sm:h-10 sm:w-11 items-center justify-center border-b border-slate-200/50 text-slate-700 transition-colors active:bg-slate-100 hover:bg-white",
              title: "Zoom In",
              children: /* @__PURE__ */ (0, m.jsx)(a0, { className: "h-4 w-4" })
            }), /* @__PURE__ */ (0, m.jsx)("button", {
              onClick: Wt,
              className: "flex h-9.5 w-10 sm:h-10 sm:w-11 items-center justify-center text-slate-700 transition-colors active:bg-slate-100 hover:bg-white",
              title: "Zoom Out",
              children: /* @__PURE__ */ (0, m.jsx)(Kp, { className: "h-4 w-4" })
            })]
          })
        ]
      })
    ]
  });
}, vg = ({ circle: b, onOpenCircleModal: B, onOpenSettingsModal: N, followPaused: F, selectedMemberName: _, onResumeFollow: st, connectionStatus: tt, onReconnect: ft }) => /* @__PURE__ */ (0, m.jsxs)("header", {
  className: "pointer-events-none absolute left-0 right-0 top-0 z-[500] flex items-center justify-between p-3.5 sm:p-4",
  children: [
    /* @__PURE__ */ (0, m.jsxs)("button", {
      onClick: B,
      className: "pointer-events-auto flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white cursor-pointer",
      title: "Manage Family Circle",
      children: [/* @__PURE__ */ (0, m.jsx)("div", {
        className: "flex h-6 w-6 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xs",
        children: /* @__PURE__ */ (0, m.jsx)(Hr, { className: "h-3.5 w-3.5" })
      }), /* @__PURE__ */ (0, m.jsxs)("div", {
        className: "flex flex-col text-left",
        children: [/* @__PURE__ */ (0, m.jsx)("span", {
          className: "text-xs font-bold text-slate-900 max-w-[100px] sm:max-w-[150px] truncate",
          children: b?.name || "Family Circle"
        }), b?.members?.length ? /* @__PURE__ */ (0, m.jsxs)("span", {
          className: "text-[10px] text-slate-500 font-semibold",
          children: [
            b.members.length,
            " member",
            b.members.length > 1 ? "s" : ""
          ]
        }) : /* @__PURE__ */ (0, m.jsx)("span", {
          className: "text-[10px] text-indigo-600 font-semibold",
          children: "Setup Circle"
        })]
      })]
    }),
    /* @__PURE__ */ (0, m.jsxs)("div", {
      className: "flex items-center gap-2",
      children: [F && _ && /* @__PURE__ */ (0, m.jsxs)("button", {
        onClick: st,
        className: "pointer-events-auto flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-md backdrop-blur-md transition-all hover:bg-indigo-50 active:scale-95 cursor-pointer animate-in fade-in duration-150",
        title: "Resume following real-time location",
        children: [/* @__PURE__ */ (0, m.jsx)(i0, { className: "h-3.5 w-3.5 fill-indigo-600 text-indigo-600" }), /* @__PURE__ */ (0, m.jsxs)("span", {
          className: "max-w-[140px] truncate",
          children: ["Resume ", _]
        })]
      }), tt !== "connected" && !F && /* @__PURE__ */ (0, m.jsxs)("button", {
        onClick: ft,
        className: `pointer-events-auto flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer ${tt === "connecting" ? "border-amber-200 bg-amber-50/95 text-amber-800" : "border-slate-200 bg-white/90 text-slate-600"}`,
        children: [tt === "connecting" ? /* @__PURE__ */ (0, m.jsx)(ig, { className: "h-3 w-3 animate-spin text-amber-700" }) : /* @__PURE__ */ (0, m.jsx)(Mp, { className: "h-3 w-3 text-slate-500" }), /* @__PURE__ */ (0, m.jsx)("span", { children: tt === "connecting" ? "Connecting" : tt === "auth_required" ? "Connect HA" : "Disconnected" })]
      })]
    }),
    /* @__PURE__ */ (0, m.jsx)("button", {
      onClick: N,
      className: "pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all active:scale-95 hover:bg-white cursor-pointer",
      title: "Settings",
      children: /* @__PURE__ */ (0, m.jsx)(ng, { className: "h-4.5 w-4.5 sm:h-5 sm:w-5" })
    })
  ]
}), pg = ({ selectedId: b, members: B, entities: N, isCurrentUser: F, isFollowing: _, followPaused: st, onToggleFollow: tt, onRecenter: ft, onClose: X, onPingDevice: Lt }) => {
  const [qt, q] = (0, it.useState)(!1), [C, lt] = (0, it.useState)(!1), [mt, $] = (0, it.useState)(!1);
  if (!b) return null;
  const pt = B.find((x) => x.id === b), J = b.startsWith("device_tracker.");
  let gt = "", ot = "#7BC9FF", Xt, Et, kt = "Unknown", Kt = "";
  if (pt) {
    gt = pt.display_name, ot = pt.color, Xt = N[pt.ha_person_id], kt = Xt?.state || "Unknown", Kt = Xt?.last_updated || "";
    const x = Xt?.attributes?.source;
    x && N[x] && (Et = N[x]);
  } else J && (Et = N[b], gt = Et?.attributes?.friendly_name || b.replace("device_tracker.", ""), kt = Et?.state || "Unknown", Kt = Et?.last_updated || "");
  const wt = (x) => {
    if (!x) return "Just now";
    const G = Date.now() - new Date(x).getTime(), R = Math.floor(G / 1e3);
    if (R < 45) return "Just now";
    const P = Math.floor(R / 60);
    if (P === 1) return "1 min ago";
    if (P < 60) return `${P} min ago`;
    const Y = Math.floor(P / 60);
    if (Y === 1) return "1 hr ago";
    if (Y < 24) return `${Y} hr ago`;
    const rt = Math.floor(Y / 24);
    return rt === 1 ? "1 day ago" : `${rt} days ago`;
  }, vt = Xt?.attributes?.latitude ?? Et?.attributes?.latitude, Rt = Xt?.attributes?.longitude ?? Et?.attributes?.longitude, xt = Xt?.attributes?.gps_accuracy ?? Et?.attributes?.gps_accuracy, _t = Et?.attributes?.battery_level, Mt = Et?.attributes?.battery_state, Ct = Et?.attributes?.altitude, Wt = Et?.attributes?.speed, H = async () => {
    const x = Et?.entity_id || Xt?.attributes?.source;
    if (x) {
      lt(!0), $(!1);
      try {
        await Lt(x), $(!0), setTimeout(() => $(!1), 3e3);
      } catch (G) {
        console.error("Failed to ping device", G);
      } finally {
        lt(!1);
      }
    }
  }, at = () => {
    vt && Rt && window.open(`https://maps.google.com/?q=${vt},${Rt}`, "_blank");
  };
  return /* @__PURE__ */ (0, m.jsx)("div", {
    className: "pointer-events-none fixed inset-x-0 bottom-0 z-[500] flex justify-center",
    children: /* @__PURE__ */ (0, m.jsxs)("div", {
      className: "pointer-events-auto w-full max-w-lg rounded-t-3xl rounded-b-none border-t border-x border-b-0 border-white/80 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 flex flex-col pb-safe",
      onClick: (x) => x.stopPropagation(),
      children: [
        /* @__PURE__ */ (0, m.jsx)("button", {
          onClick: () => q(!qt),
          className: "flex w-full items-center justify-center pt-3 pb-1.5 active:opacity-70 cursor-pointer",
          title: qt ? "Collapse" : "Expand",
          children: /* @__PURE__ */ (0, m.jsx)("div", { className: "h-1.5 w-11 rounded-full bg-slate-300" })
        }),
        /* @__PURE__ */ (0, m.jsx)("div", {
          className: "px-5 pb-3.5 pt-0.5",
          children: /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [/* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */ (0, m.jsx)("div", {
                style: { backgroundColor: ot },
                className: "h-9 w-1.5 rounded-full shrink-0 shadow-xs"
              }), /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex flex-col",
                children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */ (0, m.jsx)("h2", {
                    className: "text-base font-bold text-slate-900 tracking-tight",
                    children: gt
                  }), F && /* @__PURE__ */ (0, m.jsx)("span", {
                    className: "rounded-full bg-slate-100 px-2 py-0.2 text-[10px] font-semibold text-slate-600",
                    children: "You"
                  })]
                }), /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-1.5 text-xs text-slate-500 mt-0.5",
                  children: [
                    /* @__PURE__ */ (0, m.jsx)("span", {
                      className: "capitalize font-semibold text-slate-700",
                      children: kt === "not_home" ? "Away" : kt
                    }),
                    /* @__PURE__ */ (0, m.jsx)("span", { children: "•" }),
                    /* @__PURE__ */ (0, m.jsx)("span", { children: wt(Kt) })
                  ]
                })]
              })]
            }), /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ (0, m.jsxs)("button", {
                  onClick: tt,
                  className: `flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-all active:scale-95 cursor-pointer ${_ && !st ? "bg-slate-900 text-white shadow-xs" : st ? "border border-indigo-300 bg-indigo-50 text-indigo-700 hover:bg-indigo-100" : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`,
                  title: st ? "Resume Follow" : _ ? "Following live" : "Follow on map",
                  children: [st ? /* @__PURE__ */ (0, m.jsx)(Ip, { className: "h-3 w-3 fill-indigo-600" }) : /* @__PURE__ */ (0, m.jsx)(i0, { className: `h-3.5 w-3.5 ${_ && !st ? "fill-white" : ""}` }), /* @__PURE__ */ (0, m.jsx)("span", { children: st ? "Resume Follow" : _ ? "Following" : "Follow" })]
                }),
                /* @__PURE__ */ (0, m.jsx)("button", {
                  onClick: ft,
                  className: "flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-colors hover:bg-slate-50 active:scale-95 cursor-pointer",
                  title: "Center on map",
                  children: /* @__PURE__ */ (0, m.jsx)(Gp, { className: "h-4 w-4" })
                }),
                /* @__PURE__ */ (0, m.jsx)("button", {
                  onClick: X,
                  className: "flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95 cursor-pointer",
                  title: "Deselect",
                  children: /* @__PURE__ */ (0, m.jsx)(Df, { className: "h-4 w-4" })
                })
              ]
            })]
          })
        }),
        qt && /* @__PURE__ */ (0, m.jsxs)("div", {
          className: "border-t border-slate-100 bg-slate-50/70 px-5 pb-6 pt-4 space-y-4 overflow-y-auto max-h-[62vh] overscroll-contain animate-in fade-in slide-in-from-bottom-2 duration-200",
          style: { touchAction: "pan-y" },
          children: [
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "grid grid-cols-2 gap-2 text-xs",
              children: [
                /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs",
                  children: [Mt === "charging" ? /* @__PURE__ */ (0, m.jsx)(_p, { className: "h-5 w-5 text-emerald-600 shrink-0" }) : /* @__PURE__ */ (0, m.jsx)(bp, { className: "h-5 w-5 text-slate-600 shrink-0" }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
                    children: "Battery"
                  }), /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "text-sm font-semibold text-slate-800",
                    children: [_t !== void 0 ? `${_t}%` : "Unavailable", Mt === "charging" && /* @__PURE__ */ (0, m.jsx)("span", {
                      className: "ml-1 text-[10px] text-emerald-600 font-normal",
                      children: "Charging"
                    })]
                  })] })]
                }),
                /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs",
                  children: [/* @__PURE__ */ (0, m.jsx)(Op, { className: "h-5 w-5 text-slate-600 shrink-0" }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
                    children: "Accuracy"
                  }), /* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-sm font-semibold text-slate-800",
                    children: xt !== void 0 ? `±${Math.round(xt)} m` : "Unknown"
                  })] })]
                }),
                Wt !== void 0 && /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs",
                  children: [/* @__PURE__ */ (0, m.jsx)(Bp, { className: "h-5 w-5 text-slate-600 shrink-0" }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
                    children: "Speed"
                  }), /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "text-sm font-semibold text-slate-800",
                    children: [Math.round(Wt), " km/h"]
                  })] })]
                }),
                Ct !== void 0 && /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-2.5 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs",
                  children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "flex h-5 w-5 items-center justify-center font-bold text-slate-600 text-xs shrink-0",
                    children: "▲"
                  }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
                    children: "Altitude"
                  }), /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "text-sm font-semibold text-slate-800",
                    children: [Math.round(Ct), " m"]
                  })] })]
                })
              ]
            }),
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "rounded-2xl border border-slate-200/60 bg-white p-3 space-y-1.5 text-xs",
              children: [
                /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between text-slate-600",
                  children: [/* @__PURE__ */ (0, m.jsx)("span", {
                    className: "text-[11px] text-slate-400 font-medium",
                    children: "Home Assistant Entity"
                  }), /* @__PURE__ */ (0, m.jsx)("span", {
                    className: "font-mono text-[11px] text-slate-700",
                    children: pt?.ha_person_id || b
                  })]
                }),
                Et && /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between text-slate-600",
                  children: [/* @__PURE__ */ (0, m.jsx)("span", {
                    className: "text-[11px] text-slate-400 font-medium",
                    children: "Source Tracker"
                  }), /* @__PURE__ */ (0, m.jsx)("span", {
                    className: "font-mono text-[11px] text-slate-700",
                    children: Et.entity_id
                  })]
                }),
                vt !== void 0 && Rt !== void 0 && /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between text-slate-600 pt-1 border-t border-slate-100",
                  children: [/* @__PURE__ */ (0, m.jsx)("span", {
                    className: "text-[11px] text-slate-400 font-medium",
                    children: "Coordinates"
                  }), /* @__PURE__ */ (0, m.jsxs)("span", {
                    className: "font-mono text-[11px] text-slate-700",
                    children: [
                      vt.toFixed(5),
                      ", ",
                      Rt.toFixed(5)
                    ]
                  })]
                })
              ]
            }),
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex items-center gap-2 pt-1",
              children: [F && /* @__PURE__ */ (0, m.jsxs)("button", {
                onClick: H,
                disabled: C,
                className: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95 disabled:opacity-60 cursor-pointer",
                children: [/* @__PURE__ */ (0, m.jsx)(wp, { className: `h-4 w-4 ${C ? "animate-bounce" : ""}` }), /* @__PURE__ */ (0, m.jsx)("span", { children: C ? "Pinging..." : mt ? "Ping Sent!" : "Ping My Device" })]
              }), vt !== void 0 && Rt !== void 0 && /* @__PURE__ */ (0, m.jsxs)("button", {
                onClick: at,
                className: "flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-800 shadow-2xs transition-all hover:bg-slate-50 active:scale-95 cursor-pointer",
                children: [/* @__PURE__ */ (0, m.jsx)(Dp, { className: "h-4 w-4 text-slate-500" }), /* @__PURE__ */ (0, m.jsx)("span", { children: "Directions" })]
              })]
            })
          ]
        })
      ]
    })
  });
}, gg = ({ isOpen: b, onClose: B, circle: N, haPersons: F, onCreateCircle: _, onJoinCircle: st, onLeaveCircle: tt, onAddMember: ft, onRemoveMember: X, onUpdateMemberColor: Lt, currentPersonId: qt }) => {
  const [q, C] = (0, it.useState)("members"), [lt, mt] = (0, it.useState)("My Family"), [$, pt] = (0, it.useState)(qt || F.length > 0 && F.find((U) => U.entity_id === qt)?.entity_id || ""), [J, gt] = (0, it.useState)(rp), [ot, Xt] = (0, it.useState)(""), [Et, kt] = (0, it.useState)("#FF8E85"), [Kt, wt] = (0, it.useState)(!1), [vt, Rt] = (0, it.useState)(!1), [xt, _t] = (0, it.useState)(!1), [Mt, Ct] = (0, it.useState)(""), [Wt, H] = (0, it.useState)(""), [at, x] = (0, it.useState)(Nl[1].hex);
  if (!b) return null;
  const G = F.filter((U) => !N?.members.some((v) => v.ha_person_id === U.entity_id)), R = () => {
    N?.code && (navigator.clipboard.writeText(N.code), wt(!0), setTimeout(() => wt(!1), 2e3));
  }, P = (U) => {
    if (U.preventDefault(), !lt.trim()) return;
    const v = F.find((O) => O.entity_id === $);
    _(lt.trim(), v ? v.entity_id : $ || "person.user", J), C("members");
  }, Y = (U) => {
    U.preventDefault(), ot.trim() && (st(ot.trim().toUpperCase()), C("members"));
  }, rt = () => {
    if (!Mt) return;
    const U = F.find((O) => O.entity_id === Mt), v = Wt.trim() || U?.attributes.friendly_name || Mt;
    ft(Mt, v, at), _t(!1), Ct(""), H("");
  };
  return /* @__PURE__ */ (0, m.jsx)("div", {
    className: "fixed inset-0 z-[600] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150",
    children: /* @__PURE__ */ (0, m.jsxs)("div", {
      className: "w-full max-w-lg overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-2xl backdrop-blur-xl",
      children: [/* @__PURE__ */ (0, m.jsxs)("div", {
        className: "flex items-center justify-between border-b border-slate-100 px-6 py-4",
        children: [/* @__PURE__ */ (0, m.jsxs)("div", {
          className: "flex items-center gap-2.5",
          children: [/* @__PURE__ */ (0, m.jsx)("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white",
            children: /* @__PURE__ */ (0, m.jsx)(Hr, { className: "h-4 w-4" })
          }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("h3", {
            className: "text-base font-semibold text-slate-900",
            children: N ? N.name : "Family Circle"
          }), /* @__PURE__ */ (0, m.jsx)("p", {
            className: "text-[11px] text-slate-500",
            children: N ? `Code: ${N.code}` : "Connect your family via Home Assistant"
          })] })]
        }), /* @__PURE__ */ (0, m.jsx)("button", {
          onClick: B,
          className: "flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95",
          children: /* @__PURE__ */ (0, m.jsx)(Df, { className: "h-5 w-5" })
        })]
      }), /* @__PURE__ */ (0, m.jsx)("div", {
        className: "p-6",
        children: N ? /* @__PURE__ */ (0, m.jsxs)("div", {
          className: "space-y-5",
          children: [
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex flex-col",
                children: [/* @__PURE__ */ (0, m.jsx)("span", {
                  className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                  children: "Invite Code"
                }), /* @__PURE__ */ (0, m.jsx)("span", {
                  className: "font-mono text-base font-bold text-slate-900 tracking-wider",
                  children: N.code
                })]
              }), /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/* @__PURE__ */ (0, m.jsxs)("button", {
                  onClick: R,
                  className: "flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95",
                  children: [Kt ? /* @__PURE__ */ (0, m.jsx)(e0, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ (0, m.jsx)(jp, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, m.jsx)("span", { children: Kt ? "Copied" : "Copy" })]
                }), /* @__PURE__ */ (0, m.jsx)("button", {
                  onClick: () => Rt(!vt),
                  className: "flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95",
                  title: "Show QR Code",
                  children: /* @__PURE__ */ (0, m.jsx)(tg, { className: "h-4 w-4" })
                })]
              })]
            }),
            vt && /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 text-center",
              children: [/* @__PURE__ */ (0, m.jsx)("div", {
                className: "rounded-xl bg-white p-3 shadow-md",
                children: /* @__PURE__ */ (0, m.jsx)("img", {
                  src: `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(N.code)}`,
                  alt: "QR Join Code",
                  className: "h-32 w-32"
                })
              }), /* @__PURE__ */ (0, m.jsx)("span", {
                className: "mt-2 text-xs font-medium text-indigo-900",
                children: "Scan with camera or companion app to join"
              })]
            }),
            /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex items-center justify-between mb-2",
              children: [/* @__PURE__ */ (0, m.jsxs)("h4", {
                className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                children: [
                  "Members (",
                  N.members.length,
                  ")"
                ]
              }), G.length > 0 && /* @__PURE__ */ (0, m.jsxs)("button", {
                onClick: () => _t(!0),
                className: "flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800",
                children: [/* @__PURE__ */ (0, m.jsx)(a0, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, m.jsx)("span", { children: "Add HA Person" })]
              })]
            }), /* @__PURE__ */ (0, m.jsx)("div", {
              className: "space-y-2 max-h-56 overflow-y-auto pr-1",
              children: N.members.map((U) => /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white p-3 shadow-2xs",
                children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "relative group",
                    children: /* @__PURE__ */ (0, m.jsx)("div", {
                      style: { backgroundColor: U.color },
                      className: "h-7 w-7 rounded-full ring-2 ring-white shadow-xs cursor-pointer flex items-center justify-center text-white text-xs font-bold",
                      children: U.display_name.charAt(0).toUpperCase()
                    })
                  }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "flex items-center gap-1.5",
                    children: [/* @__PURE__ */ (0, m.jsx)("span", {
                      className: "text-xs font-semibold text-slate-800",
                      children: U.display_name
                    }), U.is_self && /* @__PURE__ */ (0, m.jsx)("span", {
                      className: "rounded-full bg-slate-100 px-1.5 py-0.2 text-[9px] font-medium text-slate-500",
                      children: "You"
                    })]
                  }), /* @__PURE__ */ (0, m.jsx)("span", {
                    className: "text-[10px] font-mono text-slate-400",
                    children: U.ha_person_id
                  })] })]
                }), /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center gap-1.5",
                  children: [/* @__PURE__ */ (0, m.jsx)("select", {
                    value: U.color,
                    onChange: (v) => Lt(U.id, v.target.value),
                    className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700",
                    children: Nl.map((v) => /* @__PURE__ */ (0, m.jsx)("option", {
                      value: v.hex,
                      children: v.name
                    }, v.hex))
                  }), N.members.length > 1 && /* @__PURE__ */ (0, m.jsx)("button", {
                    onClick: () => X(U.id),
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors",
                    title: "Remove Member",
                    children: /* @__PURE__ */ (0, m.jsx)(ug, { className: "h-3.5 w-3.5" })
                  })]
                })]
              }, U.id))
            })] }),
            xt && /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 space-y-3 animate-in fade-in duration-150",
              children: [
                /* @__PURE__ */ (0, m.jsx)("h5", {
                  className: "text-xs font-bold text-indigo-950",
                  children: "Add Home Assistant Person"
                }),
                /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("label", {
                  className: "block text-[11px] font-medium text-slate-600 mb-1",
                  children: "Select HA Person Entity"
                }), /* @__PURE__ */ (0, m.jsxs)("select", {
                  value: Mt,
                  onChange: (U) => {
                    const v = U.target.value;
                    Ct(v);
                    const O = F.find((V) => V.entity_id === v);
                    O && H(O.attributes.friendly_name || v);
                  },
                  className: "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900",
                  children: [/* @__PURE__ */ (0, m.jsx)("option", {
                    value: "",
                    children: "-- Choose person --"
                  }), G.map((U) => /* @__PURE__ */ (0, m.jsx)("option", {
                    value: U.entity_id,
                    children: U.attributes.friendly_name || U.entity_id
                  }, U.entity_id))]
                })] }),
                /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("label", {
                  className: "block text-[11px] font-medium text-slate-600 mb-1",
                  children: "Member Colour"
                }), /* @__PURE__ */ (0, m.jsx)("div", {
                  className: "flex flex-wrap gap-1.5",
                  children: Nl.map((U) => /* @__PURE__ */ (0, m.jsx)("button", {
                    type: "button",
                    onClick: () => x(U.hex),
                    style: { backgroundColor: U.hex },
                    className: `h-6 w-6 rounded-full transition-transform ${at === U.hex ? "ring-2 ring-slate-900 scale-110" : ""}`
                  }, U.hex))
                })] }),
                /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-end gap-2 pt-1",
                  children: [/* @__PURE__ */ (0, m.jsx)("button", {
                    type: "button",
                    onClick: () => _t(!1),
                    className: "rounded-xl px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200/50",
                    children: "Cancel"
                  }), /* @__PURE__ */ (0, m.jsx)("button", {
                    type: "button",
                    onClick: rt,
                    disabled: !Mt,
                    className: "rounded-xl bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-xs disabled:opacity-50",
                    children: "Add to Circle"
                  })]
                })
              ]
            }),
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "pt-2 border-t border-slate-100 flex items-center justify-between",
              children: [/* @__PURE__ */ (0, m.jsx)("button", {
                type: "button",
                onClick: tt,
                className: "text-xs font-medium text-rose-600 hover:text-rose-700",
                children: "Leave / Reset Circle"
              }), /* @__PURE__ */ (0, m.jsx)("button", {
                type: "button",
                onClick: B,
                className: "rounded-xl bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800",
                children: "Done"
              })]
            })
          ]
        }) : /* @__PURE__ */ (0, m.jsxs)("div", {
          className: "space-y-6",
          children: [
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "text-center",
              children: [
                /* @__PURE__ */ (0, m.jsx)("div", {
                  className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-3",
                  children: /* @__PURE__ */ (0, m.jsx)(Hr, { className: "h-7 w-7" })
                }),
                /* @__PURE__ */ (0, m.jsx)("h4", {
                  className: "text-lg font-bold text-slate-900 tracking-tight",
                  children: "Welcome to Yimly Family Circle"
                }),
                /* @__PURE__ */ (0, m.jsx)("p", {
                  className: "mt-1 text-xs text-slate-500 max-w-sm mx-auto",
                  children: "Create a new circle for your family or join an existing circle with a 6-digit code."
                })
              ]
            }),
            /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "flex rounded-xl bg-slate-100 p-1",
              children: [/* @__PURE__ */ (0, m.jsx)("button", {
                type: "button",
                onClick: () => C("create"),
                className: `flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${q !== "join" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
                children: "Create Circle"
              }), /* @__PURE__ */ (0, m.jsx)("button", {
                type: "button",
                onClick: () => C("join"),
                className: `flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${q === "join" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
                children: "Join with Code"
              })]
            }),
            q === "join" ? /* @__PURE__ */ (0, m.jsxs)("form", {
              onSubmit: Y,
              className: "space-y-4",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("label", {
                className: "block text-xs font-semibold text-slate-700 mb-1",
                children: "Circle Code"
              }), /* @__PURE__ */ (0, m.jsx)("input", {
                type: "text",
                placeholder: "e.g. YIM-834",
                value: ot,
                onChange: (U) => Xt(U.target.value.toUpperCase()),
                className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center font-mono text-base font-bold tracking-widest text-slate-900 uppercase focus:border-slate-900 focus:outline-none",
                maxLength: 7
              })] }), /* @__PURE__ */ (0, m.jsx)("button", {
                type: "submit",
                disabled: !ot.trim(),
                className: "w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 disabled:opacity-50",
                children: "Join Circle"
              })]
            }) : /* @__PURE__ */ (0, m.jsxs)("form", {
              onSubmit: P,
              className: "space-y-4",
              children: [
                /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("label", {
                  className: "block text-xs font-semibold text-slate-700 mb-1",
                  children: "Circle Name"
                }), /* @__PURE__ */ (0, m.jsx)("input", {
                  type: "text",
                  value: lt,
                  onChange: (U) => mt(U.target.value),
                  placeholder: "e.g. Our Family",
                  className: "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
                })] }),
                /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("label", {
                  className: "block text-xs font-semibold text-slate-700 mb-1",
                  children: "Your Home Assistant Person"
                }), /* @__PURE__ */ (0, m.jsx)("select", {
                  value: $,
                  onChange: (U) => pt(U.target.value),
                  className: "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none",
                  children: F.map((U) => /* @__PURE__ */ (0, m.jsxs)("option", {
                    value: U.entity_id,
                    children: [
                      U.attributes.friendly_name || U.entity_id,
                      " (",
                      U.entity_id,
                      ")"
                    ]
                  }, U.entity_id))
                })] }),
                /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("label", {
                  className: "block text-xs font-semibold text-slate-700 mb-1.5",
                  children: "Your Member Colour"
                }), /* @__PURE__ */ (0, m.jsx)("div", {
                  className: "flex flex-wrap gap-2",
                  children: Nl.map((U) => /* @__PURE__ */ (0, m.jsx)("button", {
                    type: "button",
                    onClick: () => gt(U.hex),
                    style: { backgroundColor: U.hex },
                    className: `h-7 w-7 rounded-full transition-transform active:scale-90 ${J === U.hex ? "ring-2 ring-slate-900 ring-offset-2 scale-110" : "hover:scale-105"}`,
                    title: U.name
                  }, U.hex))
                })] }),
                /* @__PURE__ */ (0, m.jsx)("button", {
                  type: "submit",
                  className: "w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800",
                  children: "Create Circle"
                })
              ]
            })
          ]
        })
      })]
    })
  });
}, _g = ({ isOpen: b, onClose: B, currentUser: N, currentPerson: F, deviceTrackers: _, mapStyle: st, onChangeMapStyle: tt, preferences: ft, onUpdatePreferences: X, onPingDevice: Lt, onOpenCircleModal: qt }) => {
  const [q, C] = (0, it.useState)({
    profile: !0,
    maps: !0,
    family: !1,
    devices: !1,
    notifications: !1,
    ha: !1
  }), [lt, mt] = (0, it.useState)({});
  if (!b) return null;
  const $ = (J) => {
    C((gt) => ({
      ...gt,
      [J]: !gt[J]
    }));
  }, pt = async (J) => {
    mt((gt) => ({
      ...gt,
      [J]: "pinging"
    }));
    try {
      await Lt(J), mt((gt) => ({
        ...gt,
        [J]: "success"
      })), setTimeout(() => {
        mt((gt) => ({
          ...gt,
          [J]: ""
        }));
      }, 3e3);
    } catch {
      mt((gt) => ({
        ...gt,
        [J]: "error"
      }));
    }
  };
  return /* @__PURE__ */ (0, m.jsx)("div", {
    className: "fixed inset-0 z-[650] flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150",
    onClick: B,
    children: /* @__PURE__ */ (0, m.jsxs)("div", {
      className: "flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-2xl backdrop-blur-xl",
      onClick: (J) => J.stopPropagation(),
      children: [/* @__PURE__ */ (0, m.jsxs)("div", {
        className: "flex items-center justify-between border-b border-slate-100 px-5 sm:px-6 py-4 shrink-0",
        children: [/* @__PURE__ */ (0, m.jsxs)("div", {
          className: "flex items-center gap-2.5",
          children: [/* @__PURE__ */ (0, m.jsx)("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xs",
            children: /* @__PURE__ */ (0, m.jsx)(Jm, { className: "h-4 w-4" })
          }), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("h3", {
            className: "text-base font-bold text-slate-900 tracking-tight",
            children: "Settings"
          }), /* @__PURE__ */ (0, m.jsx)("p", {
            className: "text-[11px] text-slate-500 font-medium",
            children: "Yimly Map & Home Assistant Preferences"
          })] })]
        }), /* @__PURE__ */ (0, m.jsx)("button", {
          onClick: B,
          className: "flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95 cursor-pointer",
          title: "Close",
          children: /* @__PURE__ */ (0, m.jsx)(Df, { className: "h-4.5 w-4.5" })
        })]
      }), /* @__PURE__ */ (0, m.jsxs)("div", {
        className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 overscroll-contain",
        style: { touchAction: "pan-y" },
        children: [
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs",
            children: [/* @__PURE__ */ (0, m.jsxs)("button", {
              onClick: () => $("profile"),
              className: "flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2.5",
                children: [/* @__PURE__ */ (0, m.jsx)(fg, { className: "h-4 w-4 text-slate-700" }), /* @__PURE__ */ (0, m.jsx)("span", {
                  className: "text-xs uppercase tracking-wider font-bold",
                  children: "Profile"
                })]
              }), q.profile ? /* @__PURE__ */ (0, m.jsx)(jo, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ (0, m.jsx)(Lo, { className: "h-4 w-4 text-slate-400" })]
            }), q.profile && /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-3.5 rounded-xl bg-white p-3 border border-slate-200/60 shadow-2xs",
                children: [/* @__PURE__ */ (0, m.jsx)("div", {
                  className: "flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white text-base font-bold shadow-xs shrink-0",
                  children: N?.name ? N.name.charAt(0).toUpperCase() : "U"
                }), /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    /* @__PURE__ */ (0, m.jsx)("h4", {
                      className: "text-sm font-bold text-slate-900 truncate",
                      children: N?.name || "Home Assistant User"
                    }),
                    /* @__PURE__ */ (0, m.jsxs)("p", {
                      className: "text-[11px] text-slate-400 font-mono truncate",
                      children: ["ID: ", N?.id || "Connected"]
                    }),
                    /* @__PURE__ */ (0, m.jsxs)("div", {
                      className: "mt-0.5 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold",
                      children: [/* @__PURE__ */ (0, m.jsx)(og, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, m.jsx)("span", { children: "Authenticated via Home Assistant Core" })]
                    })
                  ]
                })]
              }), /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "rounded-xl border border-slate-200/60 bg-white p-3 space-y-1",
                children: [/* @__PURE__ */ (0, m.jsx)("div", {
                  className: "text-[10px] uppercase font-bold tracking-wider text-slate-400",
                  children: "Linked Home Assistant Person"
                }), /* @__PURE__ */ (0, m.jsx)("div", {
                  className: "text-xs font-semibold text-slate-800",
                  children: F ? /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [/* @__PURE__ */ (0, m.jsx)("span", { children: F.attributes.friendly_name || F.entity_id }), /* @__PURE__ */ (0, m.jsx)("span", {
                      className: "font-mono text-[10px] text-slate-400",
                      children: F.entity_id
                    })]
                  }) : /* @__PURE__ */ (0, m.jsx)("span", {
                    className: "text-slate-500 font-normal",
                    children: "No Person entity linked to this HA user"
                  })
                })]
              })]
            })]
          }),
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs",
            children: [/* @__PURE__ */ (0, m.jsxs)("button", {
              onClick: () => $("family"),
              className: "flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2.5",
                children: [/* @__PURE__ */ (0, m.jsx)(Hr, { className: "h-4 w-4 text-slate-700" }), /* @__PURE__ */ (0, m.jsx)("span", {
                  className: "text-xs uppercase tracking-wider font-bold",
                  children: "Family Circle"
                })]
              }), q.family ? /* @__PURE__ */ (0, m.jsx)(jo, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ (0, m.jsx)(Lo, { className: "h-4 w-4 text-slate-400" })]
            }), q.family && /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150",
              children: [/* @__PURE__ */ (0, m.jsx)("p", {
                className: "text-xs text-slate-600 leading-relaxed",
                children: "Family Circles group your Home Assistant Persons and device trackers with custom pastel colours, display preferences, and invite codes."
              }), /* @__PURE__ */ (0, m.jsxs)("button", {
                onClick: () => {
                  B(), qt();
                },
                className: "flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition-all cursor-pointer",
                children: [/* @__PURE__ */ (0, m.jsx)(Hr, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, m.jsx)("span", { children: "Open Family Circle Management" })]
              })]
            })]
          }),
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs",
            children: [/* @__PURE__ */ (0, m.jsxs)("button", {
              onClick: () => $("maps"),
              className: "flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2.5",
                children: [/* @__PURE__ */ (0, m.jsx)(Jm, { className: "h-4 w-4 text-slate-700" }), /* @__PURE__ */ (0, m.jsx)("span", {
                  className: "text-xs uppercase tracking-wider font-bold",
                  children: "Maps"
                })]
              }), q.maps ? /* @__PURE__ */ (0, m.jsx)(jo, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ (0, m.jsx)(Lo, { className: "h-4 w-4 text-slate-400" })]
            }), q.maps && /* @__PURE__ */ (0, m.jsxs)("div", {
              className: "border-t border-slate-100 p-4 pt-3 space-y-4 bg-slate-50/40 text-xs animate-in fade-in duration-150",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                className: "text-[11px] font-bold text-slate-700 mb-2",
                children: "Map Tile Style"
              }), /* @__PURE__ */ (0, m.jsx)("div", {
                className: "grid grid-cols-2 gap-2",
                children: Object.keys(Ln).map((J) => {
                  const gt = Ln[J], ot = st === J;
                  return /* @__PURE__ */ (0, m.jsxs)("button", {
                    onClick: () => tt(J),
                    className: `flex items-center justify-between rounded-xl border p-2.5 text-left transition-all cursor-pointer ${ot ? "border-slate-900 bg-slate-900 text-white shadow-xs" : "border-slate-200 bg-white text-slate-800 hover:border-slate-300"}`,
                    children: [/* @__PURE__ */ (0, m.jsx)("span", {
                      className: "font-semibold text-xs",
                      children: gt.name
                    }), ot && /* @__PURE__ */ (0, m.jsx)(e0, { className: "h-3.5 w-3.5" })]
                  }, J);
                })
              })] }), /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "rounded-xl border border-slate-200/60 bg-white p-3 space-y-3",
                children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "font-semibold text-slate-800",
                    children: "Show Accuracy Circles"
                  }), /* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-500",
                    children: "Display translucent precision ring around active member"
                  })] }), /* @__PURE__ */ (0, m.jsx)("input", {
                    type: "checkbox",
                    checked: ft.showAccuracyCircles,
                    onChange: (J) => X({ showAccuracyCircles: J.target.checked }),
                    className: "h-4 w-4 rounded accent-slate-900 cursor-pointer"
                  })]
                }), /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between pt-2 border-t border-slate-100",
                  children: [/* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "font-semibold text-slate-800",
                    children: "Show Home Assistant Zones"
                  }), /* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-500",
                    children: "Render Home and defined zones on map"
                  })] }), /* @__PURE__ */ (0, m.jsx)("input", {
                    type: "checkbox",
                    checked: ft.showZones,
                    onChange: (J) => X({ showZones: J.target.checked }),
                    className: "h-4 w-4 rounded accent-slate-900 cursor-pointer"
                  })]
                })]
              })]
            })]
          }),
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs",
            children: [/* @__PURE__ */ (0, m.jsxs)("button", {
              onClick: () => $("devices"),
              className: "flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2.5",
                children: [/* @__PURE__ */ (0, m.jsx)(Fm, { className: "h-4 w-4 text-slate-700" }), /* @__PURE__ */ (0, m.jsxs)("span", {
                  className: "text-xs uppercase tracking-wider font-bold",
                  children: [
                    "Devices (",
                    _.length,
                    ")"
                  ]
                })]
              }), q.devices ? /* @__PURE__ */ (0, m.jsx)(jo, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ (0, m.jsx)(Lo, { className: "h-4 w-4 text-slate-400" })]
            }), q.devices && /* @__PURE__ */ (0, m.jsx)("div", {
              className: "border-t border-slate-100 p-4 pt-3 space-y-2 bg-slate-50/40 text-xs animate-in fade-in duration-150",
              children: /* @__PURE__ */ (0, m.jsx)("div", {
                className: "space-y-1.5 max-h-56 overflow-y-auto pr-1",
                children: _.length === 0 ? /* @__PURE__ */ (0, m.jsx)("p", {
                  className: "text-slate-500 text-xs py-2",
                  children: "No device trackers discovered from Home Assistant yet."
                }) : _.map((J) => {
                  const gt = lt[J.entity_id], ot = J.entity_id === F?.attributes.source;
                  return /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "flex items-center justify-between rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-2xs",
                    children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                      className: "flex items-center gap-2.5 min-w-0",
                      children: [/* @__PURE__ */ (0, m.jsx)("div", {
                        className: "flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 shrink-0",
                        children: /* @__PURE__ */ (0, m.jsx)(Fm, { className: "h-4 w-4" })
                      }), /* @__PURE__ */ (0, m.jsxs)("div", {
                        className: "min-w-0",
                        children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [/* @__PURE__ */ (0, m.jsx)("span", {
                            className: "text-xs font-semibold text-slate-800 truncate",
                            children: J.attributes.friendly_name || J.entity_id
                          }), ot && /* @__PURE__ */ (0, m.jsx)("span", {
                            className: "rounded-md bg-emerald-50 px-1 py-0.2 text-[8px] font-bold text-emerald-700 border border-emerald-200",
                            children: "You"
                          })]
                        }), /* @__PURE__ */ (0, m.jsx)("div", {
                          className: "text-[10px] text-slate-400 font-mono truncate",
                          children: J.entity_id
                        })]
                      })]
                    }), ot && /* @__PURE__ */ (0, m.jsx)("button", {
                      onClick: () => pt(J.entity_id),
                      disabled: gt === "pinging",
                      className: "rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shrink-0 disabled:opacity-50 cursor-pointer",
                      children: gt === "pinging" ? "Pinging..." : gt === "success" ? "Pinged!" : "Ping"
                    })]
                  }, J.entity_id);
                })
              })
            })]
          }),
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs",
            children: [/* @__PURE__ */ (0, m.jsxs)("button", {
              onClick: () => $("notifications"),
              className: "flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2.5",
                children: [/* @__PURE__ */ (0, m.jsx)(Tp, { className: "h-4 w-4 text-slate-700" }), /* @__PURE__ */ (0, m.jsx)("span", {
                  className: "text-xs uppercase tracking-wider font-bold",
                  children: "Notifications"
                })]
              }), q.notifications ? /* @__PURE__ */ (0, m.jsx)(jo, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ (0, m.jsx)(Lo, { className: "h-4 w-4 text-slate-400" })]
            }), q.notifications && /* @__PURE__ */ (0, m.jsx)("div", {
              className: "border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150",
              children: /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "rounded-xl border border-slate-200/60 bg-white p-3 space-y-2.5",
                children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "font-semibold text-slate-800",
                    children: "Zone Departure Alerts"
                  }), /* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-500",
                    children: "Notify when family members leave home or registered zones"
                  })] }), /* @__PURE__ */ (0, m.jsx)("input", {
                    type: "checkbox",
                    defaultChecked: !0,
                    className: "h-4 w-4 rounded accent-slate-900 cursor-pointer"
                  })]
                }), /* @__PURE__ */ (0, m.jsxs)("div", {
                  className: "flex items-center justify-between pt-2 border-t border-slate-100",
                  children: [/* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("div", {
                    className: "font-semibold text-slate-800",
                    children: "Low Battery Warnings"
                  }), /* @__PURE__ */ (0, m.jsx)("div", {
                    className: "text-[10px] text-slate-500",
                    children: "Notify when a family member device battery drops below 15%"
                  })] }), /* @__PURE__ */ (0, m.jsx)("input", {
                    type: "checkbox",
                    defaultChecked: !0,
                    className: "h-4 w-4 rounded accent-slate-900 cursor-pointer"
                  })]
                })]
              })
            })]
          }),
          /* @__PURE__ */ (0, m.jsxs)("div", {
            className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xs",
            children: [/* @__PURE__ */ (0, m.jsxs)("button", {
              onClick: () => $("ha"),
              className: "flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer",
              children: [/* @__PURE__ */ (0, m.jsxs)("div", {
                className: "flex items-center gap-2.5",
                children: [/* @__PURE__ */ (0, m.jsx)(Hp, { className: "h-4 w-4 text-slate-700" }), /* @__PURE__ */ (0, m.jsx)("span", {
                  className: "text-xs uppercase tracking-wider font-bold",
                  children: "Lovelace Card Info"
                })]
              }), q.ha ? /* @__PURE__ */ (0, m.jsx)(jo, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ (0, m.jsx)(Lo, { className: "h-4 w-4 text-slate-400" })]
            }), q.ha && /* @__PURE__ */ (0, m.jsx)("div", {
              className: "border-t border-slate-100 p-4 pt-3 space-y-3 bg-slate-50/40 text-xs animate-in fade-in duration-150",
              children: /* @__PURE__ */ (0, m.jsxs)("div", {
                className: "rounded-xl bg-white p-3 border border-slate-200/60 space-y-2",
                children: [
                  /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "flex items-center justify-between text-slate-700",
                    children: [/* @__PURE__ */ (0, m.jsx)("span", {
                      className: "font-semibold",
                      children: "Card Type"
                    }), /* @__PURE__ */ (0, m.jsx)("span", {
                      className: "font-mono text-[11px] text-slate-900 font-bold",
                      children: "custom:yimly-ha-map"
                    })]
                  }),
                  /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "flex items-center justify-between text-slate-700",
                    children: [/* @__PURE__ */ (0, m.jsx)("span", {
                      className: "font-semibold",
                      children: "HA User"
                    }), /* @__PURE__ */ (0, m.jsx)("span", {
                      className: "font-medium text-[11px] text-slate-900",
                      children: N?.name || "Home Assistant User"
                    })]
                  }),
                  /* @__PURE__ */ (0, m.jsxs)("div", {
                    className: "flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium pt-1 border-t border-slate-100",
                    children: [/* @__PURE__ */ (0, m.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, m.jsx)("span", { children: "Native Home Assistant hass lifecycle active" })]
                  })
                ]
              })
            })]
          })
        ]
      })]
    })
  });
}, yg = ({ hass: b, config: B }) => {
  const N = B.height ? typeof B.height == "number" ? `${B.height}px` : B.height : "500px", F = (0, it.useMemo)(() => b?.states || {}, [b?.states]), _ = (0, it.useMemo)(() => b?.user || null, [b?.user]), [st, tt] = (0, it.useState)(() => Ua.getCircle()), [ft, X] = (0, it.useState)(() => {
    const x = Ua.getPreferences();
    return B.map_style ? {
      ...x,
      mapStyle: B.map_style
    } : x;
  }), [Lt, qt] = (0, it.useState)(null), [q, C] = (0, it.useState)(!0), [lt, mt] = (0, it.useState)(!1), [$, pt] = (0, it.useState)(!1), [J, gt] = (0, it.useState)(!1), ot = (0, it.useMemo)(() => Object.values(F).filter((x) => x.entity_id.startsWith("person.")), [F]), Xt = (0, it.useMemo)(() => Object.values(F).filter((x) => x.entity_id.startsWith("device_tracker.")), [F]), Et = (0, it.useMemo)(() => {
    if (!_ || !_.id) return;
    const x = ot.find((R) => R.attributes?.user_id === _.id);
    if (x) return x;
    const G = _.name?.toLowerCase().trim();
    if (G) {
      const R = ot.find((P) => {
        const Y = P.attributes?.friendly_name?.toLowerCase().trim(), rt = P.entity_id.replace("person.", "").toLowerCase().trim();
        return Y === G || rt === G;
      });
      if (R) return R;
    }
  }, [_, ot]);
  (0, it.useEffect)(() => {
    if (ot.length > 0) {
      const x = Et?.entity_id;
      tt((G) => {
        const R = G?.members || [], P = new Map(R.map((U) => [U.id, U])), Y = ot.map((U, v) => {
          const O = P.get(U.entity_id), V = x ? U.entity_id === x : !1, I = Nl[v % Nl.length].hex;
          return {
            id: U.entity_id,
            ha_person_id: U.entity_id,
            display_name: U.attributes.friendly_name || U.entity_id.replace("person.", ""),
            color: O?.color || I,
            is_self: V,
            added_at: O?.added_at || (/* @__PURE__ */ new Date()).toISOString()
          };
        }), rt = {
          id: G?.id || "ha_family_circle",
          name: G?.name || "Family Circle",
          code: G?.code || "FAMILY",
          created_at: G?.created_at || (/* @__PURE__ */ new Date()).toISOString(),
          members: Y
        };
        return Ua.saveCircle(rt), rt;
      });
    }
  }, [ot, Et]);
  const kt = (0, it.useMemo)(() => st?.members.find((x) => x.id === Lt), [st?.members, Lt]), Kt = (0, it.useCallback)((x) => {
    qt(x), x && (C(!0), mt(!1));
  }, []), wt = (0, it.useCallback)((x) => {
    qt(x), C(!0), mt(!1);
  }, []), vt = (0, it.useCallback)(() => {
    mt(!0);
  }, []), Rt = (0, it.useCallback)(() => {
    mt(!1), C(!0);
  }, []), xt = (0, it.useCallback)((x) => {
    const G = Ua.savePreferences(x);
    X(G);
  }, []), _t = (0, it.useCallback)((x) => {
    const G = Ua.savePreferences({ mapStyle: x });
    X(G);
  }, []), Mt = (0, it.useCallback)(async (x) => {
    if (b)
      try {
        await b.callService("homeassistant", "update_entity", { entity_id: x });
      } catch (G) {
        console.warn("Failed to call HA service", G);
      }
  }, [b]), Ct = (0, it.useCallback)((x, G) => {
    tt((R) => {
      if (!R) return null;
      const P = {
        ...R,
        members: R.members.map((Y) => Y.id === x ? {
          ...Y,
          color: G
        } : Y)
      };
      return Ua.saveCircle(P), P;
    });
  }, []), Wt = (0, it.useCallback)((x, G, R) => {
    tt((P) => {
      if (!P) return null;
      const Y = {
        id: x,
        ha_person_id: x,
        display_name: G,
        color: R,
        added_at: (/* @__PURE__ */ new Date()).toISOString()
      }, rt = {
        ...P,
        members: [...P.members.filter((U) => U.id !== x), Y]
      };
      return Ua.saveCircle(rt), rt;
    });
  }, []), H = (0, it.useCallback)((x) => {
    tt((G) => {
      if (!G) return null;
      const R = {
        ...G,
        members: G.members.filter((P) => P.id !== x)
      };
      return Ua.saveCircle(R), R;
    });
  }, []), at = (0, it.useCallback)((x, G, R) => {
    const P = {
      id: `circle_${Date.now()}`,
      name: x,
      code: "FAMILY",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      members: [{
        id: G,
        ha_person_id: G,
        display_name: x,
        color: R,
        is_self: !0,
        added_at: (/* @__PURE__ */ new Date()).toISOString()
      }]
    };
    tt(P), Ua.saveCircle(P);
  }, []);
  return b ? /* @__PURE__ */ (0, m.jsxs)("div", {
    className: "yimly-card-container relative w-full overflow-hidden rounded-3xl bg-slate-50 shadow-md font-sans text-slate-900 border border-slate-200/50",
    style: {
      height: N,
      minHeight: "350px",
      maxHeight: "100%"
    },
    children: [
      /* @__PURE__ */ (0, m.jsx)(vg, {
        circle: st,
        onOpenCircleModal: () => pt(!0),
        onOpenSettingsModal: () => gt(!0),
        followPaused: lt,
        selectedMemberName: kt?.display_name,
        onResumeFollow: Rt,
        connectionStatus: "connected",
        onReconnect: () => {
        }
      }),
      /* @__PURE__ */ (0, m.jsx)(mg, {
        members: st?.members || [],
        entities: F,
        selectedMemberId: Lt,
        onSelectMember: Kt,
        onSelectDevice: wt,
        mapStyle: ft.mapStyle,
        onChangeMapStyle: _t,
        showAccuracyCircles: ft.showAccuracyCircles,
        showZones: ft.showZones,
        showPrivateDevices: ft.showDeviceMarkers,
        isFollowing: q,
        followPaused: lt,
        onUserManualPan: vt,
        haUrl: ""
      }),
      /* @__PURE__ */ (0, m.jsx)(pg, {
        selectedId: Lt,
        members: st?.members || [],
        entities: F,
        isCurrentUser: kt ? !!kt.is_self : !1,
        isFollowing: q,
        followPaused: lt,
        onToggleFollow: () => C((x) => !x),
        onRecenter: Rt,
        onClose: () => qt(null),
        onPingDevice: Mt
      }),
      /* @__PURE__ */ (0, m.jsx)(gg, {
        isOpen: $,
        onClose: () => pt(!1),
        circle: st,
        haPersons: ot,
        onCreateCircle: at,
        onJoinCircle: () => {
        },
        onLeaveCircle: () => {
        },
        onAddMember: Wt,
        onRemoveMember: H,
        onUpdateMemberColor: Ct,
        currentPersonId: Et?.entity_id
      }),
      /* @__PURE__ */ (0, m.jsx)(_g, {
        isOpen: J,
        onClose: () => gt(!1),
        currentUser: _,
        currentPerson: Et,
        deviceTrackers: Xt,
        mapStyle: ft.mapStyle,
        onChangeMapStyle: _t,
        preferences: ft,
        onUpdatePreferences: xt,
        connectionStatus: "connected",
        haUrl: "",
        onLogout: () => {
        },
        onPingDevice: Mt,
        onOpenCircleModal: () => {
          gt(!1), pt(!0);
        }
      })
    ]
  }) : /* @__PURE__ */ (0, m.jsx)("div", {
    className: "w-full flex items-center justify-center rounded-3xl bg-slate-100 text-slate-500 font-sans",
    style: {
      height: N,
      minHeight: "350px"
    },
    children: /* @__PURE__ */ (0, m.jsxs)("div", {
      className: "flex flex-col items-center gap-2 text-center p-6",
      children: [/* @__PURE__ */ (0, m.jsx)("div", { className: "h-6 w-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, m.jsx)("span", {
        className: "text-xs font-semibold text-slate-700",
        children: "Connecting to Home Assistant..."
      })]
    })
  });
}, bg = `/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-200:oklch(90.5% .093 164.15);--color-emerald-500:oklch(69.6% .17 162.48);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-indigo-50:oklch(96.2% .018 272.314);--color-indigo-100:oklch(93% .034 272.788);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-800:oklch(39.8% .195 277.366);--color-indigo-900:oklch(35.9% .144 278.697);--color-indigo-950:oklch(25.7% .09 281.288);--color-rose-50:oklch(96.9% .015 12.422);--color-rose-600:oklch(58.6% .253 17.585);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-slate-950:oklch(12.9% .042 264.695);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-lg:32rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-sm:0 1px 2px #00000026;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce:bounce 1s infinite;--blur-xs:4px;--blur-sm:8px;--blur-md:12px;--blur-xl:24px;--blur-2xl:40px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.-inset-3{inset:calc(var(--spacing) * -3)}.inset-0{inset:0}.inset-x-0{inset-inline:0}.top-0{top:0}.top-20{top:calc(var(--spacing) * 20)}.right-0{right:0}.right-3{right:calc(var(--spacing) * 3)}.right-3\\.5{right:calc(var(--spacing) * 3.5)}.right-12{right:calc(var(--spacing) * 12)}.-bottom-1{bottom:calc(var(--spacing) * -1)}.-bottom-4{bottom:calc(var(--spacing) * -4)}.-bottom-4\\.5{bottom:calc(var(--spacing) * -4.5)}.-bottom-5{bottom:calc(var(--spacing) * -5)}.-bottom-5\\.5{bottom:calc(var(--spacing) * -5.5)}.bottom-0{bottom:0}.left-0{left:0}.z-\\[300\\]{z-index:300}.z-\\[400\\]{z-index:400}.z-\\[450\\]{z-index:450}.z-\\[500\\]{z-index:500}.z-\\[600\\]{z-index:600}.z-\\[650\\]{z-index:650}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mb-1{margin-bottom:var(--spacing)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.ml-1{margin-left:var(--spacing)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.h-1{height:var(--spacing)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-4\\.5{height:calc(var(--spacing) * 4.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-9\\.5{height:calc(var(--spacing) * 9.5)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-32{height:calc(var(--spacing) * 32)}.h-\\[34px\\]{height:34px}.h-full{height:100%}.h-screen{height:100vh}.max-h-56{max-height:calc(var(--spacing) * 56)}.max-h-\\[62vh\\]{max-height:62vh}.max-h-\\[85vh\\]{max-height:85vh}.w-1{width:var(--spacing)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-2{width:calc(var(--spacing) * 2)}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-4\\.5{width:calc(var(--spacing) * 4.5)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-11{width:calc(var(--spacing) * 11)}.w-14{width:calc(var(--spacing) * 14)}.w-32{width:calc(var(--spacing) * 32)}.w-44{width:calc(var(--spacing) * 44)}.w-\\[34px\\]{width:34px}.w-full{width:100%}.w-screen{width:100vw}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[100px\\]{max-width:100px}.max-w-\\[140px\\]{max-width:140px}.max-w-full{max-width:100%}.max-w-lg{max-width:var(--container-lg)}.max-w-sm{max-width:var(--container-sm)}.min-w-0{min-width:0}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overscroll-contain{overscroll-behavior:contain}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-3xl{border-top-left-radius:var(--radius-3xl);border-top-right-radius:var(--radius-3xl)}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-amber-200{border-color:var(--color-amber-200)}.border-emerald-200{border-color:var(--color-emerald-200)}.border-indigo-100{border-color:var(--color-indigo-100)}.border-indigo-200{border-color:var(--color-indigo-200)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-indigo-600{border-color:var(--color-indigo-600)}.border-slate-100{border-color:var(--color-slate-100)}.border-slate-200{border-color:var(--color-slate-200)}.border-slate-200\\/50{border-color:#e2e8f080}@supports (color:color-mix(in lab, red, red)){.border-slate-200\\/50{border-color:color-mix(in oklab, var(--color-slate-200) 50%, transparent)}}.border-slate-200\\/60{border-color:#e2e8f099}@supports (color:color-mix(in lab, red, red)){.border-slate-200\\/60{border-color:color-mix(in oklab, var(--color-slate-200) 60%, transparent)}}.border-slate-200\\/70{border-color:#e2e8f0b3}@supports (color:color-mix(in lab, red, red)){.border-slate-200\\/70{border-color:color-mix(in oklab, var(--color-slate-200) 70%, transparent)}}.border-slate-200\\/80{border-color:#e2e8f0cc}@supports (color:color-mix(in lab, red, red)){.border-slate-200\\/80{border-color:color-mix(in oklab, var(--color-slate-200) 80%, transparent)}}.border-slate-700{border-color:var(--color-slate-700)}.border-slate-700\\/50{border-color:#31415880}@supports (color:color-mix(in lab, red, red)){.border-slate-700\\/50{border-color:color-mix(in oklab, var(--color-slate-700) 50%, transparent)}}.border-slate-700\\/60{border-color:#31415899}@supports (color:color-mix(in lab, red, red)){.border-slate-700\\/60{border-color:color-mix(in oklab, var(--color-slate-700) 60%, transparent)}}.border-slate-800{border-color:var(--color-slate-800)}.border-slate-900{border-color:var(--color-slate-900)}.border-white{border-color:var(--color-white)}.border-white\\/70{border-color:#ffffffb3}@supports (color:color-mix(in lab, red, red)){.border-white\\/70{border-color:color-mix(in oklab, var(--color-white) 70%, transparent)}}.border-white\\/80{border-color:#fffc}@supports (color:color-mix(in lab, red, red)){.border-white\\/80{border-color:color-mix(in oklab, var(--color-white) 80%, transparent)}}.border-t-transparent{border-top-color:#0000}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-50\\/95{background-color:#fffbebf2}@supports (color:color-mix(in lab, red, red)){.bg-amber-50\\/95{background-color:color-mix(in oklab, var(--color-amber-50) 95%, transparent)}}.bg-emerald-50{background-color:var(--color-emerald-50)}.bg-emerald-500{background-color:var(--color-emerald-500)}.bg-indigo-50{background-color:var(--color-indigo-50)}.bg-indigo-50\\/50{background-color:#eef2ff80}@supports (color:color-mix(in lab, red, red)){.bg-indigo-50\\/50{background-color:color-mix(in oklab, var(--color-indigo-50) 50%, transparent)}}.bg-indigo-50\\/60{background-color:#eef2ff99}@supports (color:color-mix(in lab, red, red)){.bg-indigo-50\\/60{background-color:color-mix(in oklab, var(--color-indigo-50) 60%, transparent)}}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-50\\/40{background-color:#f8fafc66}@supports (color:color-mix(in lab, red, red)){.bg-slate-50\\/40{background-color:color-mix(in oklab, var(--color-slate-50) 40%, transparent)}}.bg-slate-50\\/70{background-color:#f8fafcb3}@supports (color:color-mix(in lab, red, red)){.bg-slate-50\\/70{background-color:color-mix(in oklab, var(--color-slate-50) 70%, transparent)}}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-300{background-color:var(--color-slate-300)}.bg-slate-800{background-color:var(--color-slate-800)}.bg-slate-800\\/80{background-color:#1d293dcc}@supports (color:color-mix(in lab, red, red)){.bg-slate-800\\/80{background-color:color-mix(in oklab, var(--color-slate-800) 80%, transparent)}}.bg-slate-900{background-color:var(--color-slate-900)}.bg-slate-900\\/40{background-color:#0f172b66}@supports (color:color-mix(in lab, red, red)){.bg-slate-900\\/40{background-color:color-mix(in oklab, var(--color-slate-900) 40%, transparent)}}.bg-slate-900\\/60{background-color:#0f172b99}@supports (color:color-mix(in lab, red, red)){.bg-slate-900\\/60{background-color:color-mix(in oklab, var(--color-slate-900) 60%, transparent)}}.bg-slate-900\\/80{background-color:#0f172bcc}@supports (color:color-mix(in lab, red, red)){.bg-slate-900\\/80{background-color:color-mix(in oklab, var(--color-slate-900) 80%, transparent)}}.bg-slate-900\\/90{background-color:#0f172be6}@supports (color:color-mix(in lab, red, red)){.bg-slate-900\\/90{background-color:color-mix(in oklab, var(--color-slate-900) 90%, transparent)}}.bg-slate-950{background-color:var(--color-slate-950)}.bg-slate-950\\/60{background-color:#02061899}@supports (color:color-mix(in lab, red, red)){.bg-slate-950\\/60{background-color:color-mix(in oklab, var(--color-slate-950) 60%, transparent)}}.bg-slate-950\\/80{background-color:#020618cc}@supports (color:color-mix(in lab, red, red)){.bg-slate-950\\/80{background-color:color-mix(in oklab, var(--color-slate-950) 80%, transparent)}}.bg-white{background-color:var(--color-white)}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab, red, red)){.bg-white\\/90{background-color:color-mix(in oklab, var(--color-white) 90%, transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab, red, red)){.bg-white\\/95{background-color:color-mix(in oklab, var(--color-white) 95%, transparent)}}.fill-indigo-600{fill:var(--color-indigo-600)}.fill-white{fill:var(--color-white)}.object-cover{object-fit:cover}.p-0{padding:0}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-2\\.5{padding:calc(var(--spacing) * 2.5)}.p-3{padding:calc(var(--spacing) * 3)}.p-3\\.5{padding:calc(var(--spacing) * 3.5)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:var(--spacing)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-0{padding-block:0}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.pt-0{padding-top:0}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pr-1{padding-right:var(--spacing)}.pb-1{padding-bottom:var(--spacing)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-3\\.5{padding-bottom:calc(var(--spacing) * 3.5)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[8px\\]{font-size:8px}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-indigo-300{color:var(--color-indigo-300)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-indigo-950{color:var(--color-indigo-950)}.text-rose-600{color:var(--color-rose-600)}.text-slate-100{color:var(--color-slate-100)}.text-slate-200{color:var(--color-slate-200)}.text-slate-300{color:var(--color-slate-300)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-slate-800{color:var(--color-slate-800)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.accent-slate-900{accent-color:var(--color-slate-900)}.opacity-85{opacity:.85}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-2xs{--tw-shadow:0 1px var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-slate-900{--tw-ring-color:var(--color-slate-900)}.ring-white{--tw-ring-color:var(--color-white)}.ring-offset-2{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow-sm{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--drop-shadow-sm));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter\\!{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.backdrop-blur-2xl{--tw-backdrop-blur:blur(var(--blur-2xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-75{--tw-duration:75ms;transition-duration:75ms}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.group-hover\\:scale-105:is(:where(.group):hover *){--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:scale-110:hover{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-slate-300:hover{border-color:var(--color-slate-300)}.hover\\:bg-indigo-50:hover{background-color:var(--color-indigo-50)}.hover\\:bg-indigo-100:hover{background-color:var(--color-indigo-100)}.hover\\:bg-rose-50:hover{background-color:var(--color-rose-50)}.hover\\:bg-slate-50:hover{background-color:var(--color-slate-50)}.hover\\:bg-slate-50\\/70:hover{background-color:#f8fafcb3}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-slate-50\\/70:hover{background-color:color-mix(in oklab, var(--color-slate-50) 70%, transparent)}}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:bg-slate-200\\/50:hover{background-color:#e2e8f080}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-slate-200\\/50:hover{background-color:color-mix(in oklab, var(--color-slate-200) 50%, transparent)}}.hover\\:bg-slate-800:hover{background-color:var(--color-slate-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-indigo-800:hover{color:var(--color-indigo-800)}.hover\\:text-rose-600:hover{color:var(--color-rose-600)}.hover\\:text-rose-700:hover{color:var(--color-rose-700)}.hover\\:text-slate-900:hover{color:var(--color-slate-900)}.hover\\:text-white:hover{color:var(--color-white)}}.focus\\:border-slate-900:focus{border-color:var(--color-slate-900)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-90:active{--tw-scale-x:90%;--tw-scale-y:90%;--tw-scale-z:90%;scale:var(--tw-scale-x) var(--tw-scale-y)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}.active\\:bg-slate-100:active{background-color:var(--color-slate-100)}.active\\:opacity-70:active{opacity:.7}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60:disabled{opacity:.6}@media (width>=40rem){.sm\\:right-13{right:calc(var(--spacing) * 13)}.sm\\:flex{display:flex}.sm\\:h-5{height:calc(var(--spacing) * 5)}.sm\\:h-10{height:calc(var(--spacing) * 10)}.sm\\:h-11{height:calc(var(--spacing) * 11)}.sm\\:w-5{width:calc(var(--spacing) * 5)}.sm\\:w-11{width:calc(var(--spacing) * 11)}.sm\\:max-w-\\[150px\\]{max-width:150px}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:p-4{padding:calc(var(--spacing) * 4)}.sm\\:p-6{padding:calc(var(--spacing) * 6)}.sm\\:px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.sm\\:px-6{padding-inline:calc(var(--spacing) * 6)}.sm\\:py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}}}.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;top:0;left:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:0 0}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{-webkit-transform-origin:0 0;width:1600px;height:1600px}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{width:auto;padding:0;max-width:none!important;max-height:none!important}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:#33b5e566}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{box-sizing:border-box;z-index:800;width:0;height:0}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{z-index:800;pointer-events:visiblePainted;pointer-events:auto;position:relative}.leaflet-top,.leaflet-bottom{z-index:1000;pointer-events:none;position:absolute}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{outline-offset:1px;background:#ddd}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{background:#ffffff80;border:2px dotted #38f}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:.75rem;line-height:1.5}.leaflet-bar{border-radius:4px;box-shadow:0 1px 5px #000000a6}.leaflet-bar a{text-align:center;color:#000;background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;text-decoration:none;display:block}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom:none;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.leaflet-bar a.leaflet-disabled{cursor:default;color:#bbb;background-color:#f4f4f4}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{text-indent:1px;font:700 18px Lucida Console,Monaco,monospace}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{background:#fff;border-radius:5px;box-shadow:0 1px 5px #0006}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{color:#333;background:#fff;padding:6px 10px 6px 6px}.leaflet-control-layers-scrollbar{padding-right:5px;overflow:hidden scroll}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{font-size:1.08333em;display:block}.leaflet-control-layers-separator{border-top:1px solid #ddd;height:0;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{color:#333;padding:0 5px;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{width:1em;height:.6669em;vertical-align:baseline!important;display:inline!important}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{white-space:nowrap;box-sizing:border-box;text-shadow:1px 1px #fff;background:#fffc;border:2px solid #777;border-top:none;padding:2px 5px 1px;line-height:1.1}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{background-clip:padding-box;border:2px solid #0003}.leaflet-popup{text-align:center;margin-bottom:20px;position:absolute}.leaflet-popup-content-wrapper{text-align:left;border-radius:12px;padding:1px}.leaflet-popup-content{min-height:1px;margin:13px 24px 13px 20px;font-size:1.08333em;line-height:1.3}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{pointer-events:none;width:40px;height:20px;margin-top:-1px;margin-left:-20px;position:absolute;left:50%;overflow:hidden}.leaflet-popup-tip{pointer-events:auto;width:17px;height:17px;margin:-10px auto 0;padding:1px;transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{color:#333;background:#fff;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{text-align:center;color:#757575;background:0 0;border:none;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;text-decoration:none;position:absolute;top:0;right:0}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";width:24px;filter:progid:DXImageTransform.Microsoft.Matrix(M11=.707107, M12=.707107, M21=-.707107, M22=.707107);margin:0 auto}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-tooltip{color:#222;white-space:nowrap;-webkit-user-select:none;user-select:none;pointer-events:none;background-color:#fff;border:1px solid #fff;border-radius:3px;padding:6px;position:absolute;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{pointer-events:none;content:"";background:0 0;border:6px solid #0000;position:absolute}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{margin-left:-6px;left:50%}.leaflet-tooltip-top:before{border-top-color:#fff;margin-bottom:-12px;bottom:0}.leaflet-tooltip-bottom:before{border-bottom-color:#fff;margin-top:-12px;margin-left:-6px;top:0}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{margin-top:-6px;top:50%}.leaflet-tooltip-left:before{border-left-color:#fff;margin-right:-12px;right:0}.leaflet-tooltip-right:before{border-right-color:#fff;margin-left:-12px;left:0}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}html,body,#root{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;background-color:#f8fafc;width:100%;height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;overflow:hidden}.pb-safe{padding-bottom:max(env(safe-area-inset-bottom,0px), 12px)}.pt-safe{padding-top:max(env(safe-area-inset-top,0px), 12px)}.leaflet-div-icon{background:0 0!important;border:none!important}.leaflet-control-zoom{border:none!important;border-radius:16px!important;overflow:hidden!important;box-shadow:0 4px 14px #00000014!important}.leaflet-control-zoom-in,.leaflet-control-zoom-out{-webkit-backdrop-filter:blur(12px)!important;color:#334155!important;background-color:#ffffffd9!important;border:none!important;width:36px!important;height:36px!important;font-size:16px!important;line-height:36px!important;transition:all .15s!important}.leaflet-control-zoom-in:hover,.leaflet-control-zoom-out:hover{color:#0f172a!important;background-color:#fff!important}@keyframes yimly-breathe{0%,to{transform:scale(1);box-shadow:0 2px 8px #0000001f}50%{transform:scale(1.08);box-shadow:0 4px 16px #00000038}}.yimly-device-breathing{animation:2.5s ease-in-out infinite yimly-breathe}@keyframes yimly-selected-glow{0%{box-shadow:0 0 0 0 var(--member-color-glow,#7bc9ffb3)}70%{box-shadow:0 0 0 14px #7bc9ff00}to{box-shadow:0 0 #7bc9ff00}}.yimly-selected-pulse{animation:2s cubic-bezier(.25,1,.5,1) infinite yimly-selected-glow}::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-thumb{background:#94a3b84d;border-radius:9999px}::-webkit-scrollbar-thumb:hover{background:#94a3b880}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}`;
function xg() {
  if (!(typeof document > "u") && !document.getElementById("yimly-ha-map-styles")) {
    const b = document.createElement("style");
    b.id = "yimly-ha-map-styles", b.textContent = bg, document.head.appendChild(b);
  }
}
var wg = class extends HTMLElement {
  static getStubConfig() {
    return {
      type: "custom:yimly-ha-map",
      height: "500px",
      map_style: "osm"
    };
  }
  setConfig(b) {
    if (!b) throw new Error("Invalid configuration provided to yimly-ha-map card");
    this._config = {
      height: "500px",
      map_style: "osm",
      ...b,
      type: "custom:yimly-ha-map"
    }, this.updateCard();
  }
  set hass(b) {
    this._hass = b, this.updateCard();
  }
  get hass() {
    return this._hass;
  }
  getCardSize() {
    const b = String(this._config?.height || "500");
    return Math.max(1, Math.round((parseInt(b, 10) || 500) / 50));
  }
  getLayoutOptions() {
    const b = String(this._config?.height || "500");
    return {
      grid_rows: Math.max(4, Math.round((parseInt(b, 10) || 500) / 60)),
      grid_columns: 4,
      grid_min_rows: 4
    };
  }
  connectedCallback() {
    xg(), this._mountPoint || (this._mountPoint = document.createElement("div"), this._mountPoint.className = "yimly-ha-card-root w-full h-full", this.appendChild(this._mountPoint), this._root = (0, op.createRoot)(this._mountPoint)), this.updateCard();
  }
  disconnectedCallback() {
    this._root && (this._root.unmount(), this._root = void 0), this._mountPoint && (this._mountPoint.remove(), this._mountPoint = void 0);
  }
  updateCard() {
    !this._root || !this._config || this._root.render(it.createElement(yg, {
      hass: this._hass,
      config: this._config
    }));
  }
};
customElements.get("yimly-ha-map") || customElements.define("yimly-ha-map", wg);
window.customCards = window.customCards || [];
window.customCards.some((b) => b.type === "yimly-ha-map") || window.customCards.push({
  type: "yimly-ha-map",
  name: "Yimly HA Map",
  description: "Family location map card with live member tracking and edge markers",
  preview: !0,
  documentationURL: "https://github.com/yimlyapp/yimly-ha-map"
});
export {
  wg as YimlyHaMapCard
};
