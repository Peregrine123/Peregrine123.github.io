var fi = { exports: {} }, be = {};
var hd;
function Wv() {
  if (hd) return be;
  hd = 1;
  var O = /* @__PURE__ */ Symbol.for("react.transitional.element"), il = /* @__PURE__ */ Symbol.for("react.fragment");
  function k(o, ol, vl) {
    var Al = null;
    if (vl !== void 0 && (Al = "" + vl), ol.key !== void 0 && (Al = "" + ol.key), "key" in ol) {
      vl = {};
      for (var rl in ol)
        rl !== "key" && (vl[rl] = ol[rl]);
    } else vl = ol;
    return ol = vl.ref, {
      $$typeof: O,
      type: o,
      key: Al,
      ref: ol !== void 0 ? ol : null,
      props: vl
    };
  }
  return be.Fragment = il, be.jsx = k, be.jsxs = k, be;
}
var od;
function $v() {
  return od || (od = 1, fi.exports = Wv()), fi.exports;
}
var _ = $v(), ci = { exports: {} }, B = {};
var rd;
function kv() {
  if (rd) return B;
  rd = 1;
  var O = /* @__PURE__ */ Symbol.for("react.transitional.element"), il = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), ol = /* @__PURE__ */ Symbol.for("react.profiler"), vl = /* @__PURE__ */ Symbol.for("react.consumer"), Al = /* @__PURE__ */ Symbol.for("react.context"), rl = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), sl = Symbol.iterator;
  function _l(y) {
    return y === null || typeof y != "object" ? null : (y = sl && y[sl] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var pl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Nl = Object.assign, Jl = {};
  function wl(y, T, M) {
    this.props = y, this.context = T, this.refs = Jl, this.updater = M || pl;
  }
  wl.prototype.isReactComponent = {}, wl.prototype.setState = function(y, T) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, T, "setState");
  }, wl.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function ot() {
  }
  ot.prototype = wl.prototype;
  function jl(y, T, M) {
    this.props = y, this.context = T, this.refs = Jl, this.updater = M || pl;
  }
  var Ll = jl.prototype = new ot();
  Ll.constructor = jl, Nl(Ll, wl.prototype), Ll.isPureReactComponent = !0;
  var ut = Array.isArray;
  function Yl() {
  }
  var Q = { H: null, A: null, T: null, S: null }, Cl = Object.prototype.hasOwnProperty;
  function et(y, T, M) {
    var U = M.ref;
    return {
      $$typeof: O,
      type: y,
      key: T,
      ref: U !== void 0 ? U : null,
      props: M
    };
  }
  function bl(y, T) {
    return et(y.type, T, y.props);
  }
  function rt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === O;
  }
  function Vl(y) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(M) {
      return T[M];
    });
  }
  var C = /\/+/g;
  function $(y, T) {
    return typeof y == "object" && y !== null && y.key != null ? Vl("" + y.key) : T.toString(36);
  }
  function W(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Yl, Yl) : (y.status = "pending", y.then(
          function(T) {
            y.status === "pending" && (y.status = "fulfilled", y.value = T);
          },
          function(T) {
            y.status === "pending" && (y.status = "rejected", y.reason = T);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function S(y, T, M, U, Y) {
    var X = typeof y;
    (X === "undefined" || X === "boolean") && (y = null);
    var tl = !1;
    if (y === null) tl = !0;
    else
      switch (X) {
        case "bigint":
        case "string":
        case "number":
          tl = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case O:
            case il:
              tl = !0;
              break;
            case J:
              return tl = y._init, S(
                tl(y._payload),
                T,
                M,
                U,
                Y
              );
          }
      }
    if (tl)
      return Y = Y(y), tl = U === "" ? "." + $(y, 0) : U, ut(Y) ? (M = "", tl != null && (M = tl.replace(C, "$&/") + "/"), S(Y, T, M, "", function(Ou) {
        return Ou;
      })) : Y != null && (rt(Y) && (Y = bl(
        Y,
        M + (Y.key == null || y && y.key === Y.key ? "" : ("" + Y.key).replace(
          C,
          "$&/"
        ) + "/") + tl
      )), T.push(Y)), 1;
    tl = 0;
    var Wl = U === "" ? "." : U + ":";
    if (ut(y))
      for (var zl = 0; zl < y.length; zl++)
        U = y[zl], X = Wl + $(U, zl), tl += S(
          U,
          T,
          M,
          X,
          Y
        );
    else if (zl = _l(y), typeof zl == "function")
      for (y = zl.call(y), zl = 0; !(U = y.next()).done; )
        U = U.value, X = Wl + $(U, zl++), tl += S(
          U,
          T,
          M,
          X,
          Y
        );
    else if (X === "object") {
      if (typeof y.then == "function")
        return S(
          W(y),
          T,
          M,
          U,
          Y
        );
      throw T = String(y), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return tl;
  }
  function A(y, T, M) {
    if (y == null) return y;
    var U = [], Y = 0;
    return S(y, U, "", "", function(X) {
      return T.call(M, X, Y++);
    }), U;
  }
  function q(y) {
    if (y._status === -1) {
      var T = y._result;
      T = T(), T.then(
        function(M) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = M);
        },
        function(M) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = M);
        }
      ), y._status === -1 && (y._status = 0, y._result = T);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ll = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, al = {
    map: A,
    forEach: function(y, T, M) {
      A(
        y,
        function() {
          T.apply(this, arguments);
        },
        M
      );
    },
    count: function(y) {
      var T = 0;
      return A(y, function() {
        T++;
      }), T;
    },
    toArray: function(y) {
      return A(y, function(T) {
        return T;
      }) || [];
    },
    only: function(y) {
      if (!rt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return B.Activity = R, B.Children = al, B.Component = wl, B.Fragment = k, B.Profiler = ol, B.PureComponent = jl, B.StrictMode = o, B.Suspense = N, B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, B.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return Q.H.useMemoCache(y);
    }
  }, B.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, B.cacheSignal = function() {
    return null;
  }, B.cloneElement = function(y, T, M) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var U = Nl({}, y.props), Y = y.key;
    if (T != null)
      for (X in T.key !== void 0 && (Y = "" + T.key), T)
        !Cl.call(T, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && T.ref === void 0 || (U[X] = T[X]);
    var X = arguments.length - 2;
    if (X === 1) U.children = M;
    else if (1 < X) {
      for (var tl = Array(X), Wl = 0; Wl < X; Wl++)
        tl[Wl] = arguments[Wl + 2];
      U.children = tl;
    }
    return et(y.type, Y, U);
  }, B.createContext = function(y) {
    return y = {
      $$typeof: Al,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: vl,
      _context: y
    }, y;
  }, B.createElement = function(y, T, M) {
    var U, Y = {}, X = null;
    if (T != null)
      for (U in T.key !== void 0 && (X = "" + T.key), T)
        Cl.call(T, U) && U !== "key" && U !== "__self" && U !== "__source" && (Y[U] = T[U]);
    var tl = arguments.length - 2;
    if (tl === 1) Y.children = M;
    else if (1 < tl) {
      for (var Wl = Array(tl), zl = 0; zl < tl; zl++)
        Wl[zl] = arguments[zl + 2];
      Y.children = Wl;
    }
    if (y && y.defaultProps)
      for (U in tl = y.defaultProps, tl)
        Y[U] === void 0 && (Y[U] = tl[U]);
    return et(y, X, Y);
  }, B.createRef = function() {
    return { current: null };
  }, B.forwardRef = function(y) {
    return { $$typeof: rl, render: y };
  }, B.isValidElement = rt, B.lazy = function(y) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: y },
      _init: q
    };
  }, B.memo = function(y, T) {
    return {
      $$typeof: E,
      type: y,
      compare: T === void 0 ? null : T
    };
  }, B.startTransition = function(y) {
    var T = Q.T, M = {};
    Q.T = M;
    try {
      var U = y(), Y = Q.S;
      Y !== null && Y(M, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(Yl, ll);
    } catch (X) {
      ll(X);
    } finally {
      T !== null && M.types !== null && (T.types = M.types), Q.T = T;
    }
  }, B.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, B.use = function(y) {
    return Q.H.use(y);
  }, B.useActionState = function(y, T, M) {
    return Q.H.useActionState(y, T, M);
  }, B.useCallback = function(y, T) {
    return Q.H.useCallback(y, T);
  }, B.useContext = function(y) {
    return Q.H.useContext(y);
  }, B.useDebugValue = function() {
  }, B.useDeferredValue = function(y, T) {
    return Q.H.useDeferredValue(y, T);
  }, B.useEffect = function(y, T) {
    return Q.H.useEffect(y, T);
  }, B.useEffectEvent = function(y) {
    return Q.H.useEffectEvent(y);
  }, B.useId = function() {
    return Q.H.useId();
  }, B.useImperativeHandle = function(y, T, M) {
    return Q.H.useImperativeHandle(y, T, M);
  }, B.useInsertionEffect = function(y, T) {
    return Q.H.useInsertionEffect(y, T);
  }, B.useLayoutEffect = function(y, T) {
    return Q.H.useLayoutEffect(y, T);
  }, B.useMemo = function(y, T) {
    return Q.H.useMemo(y, T);
  }, B.useOptimistic = function(y, T) {
    return Q.H.useOptimistic(y, T);
  }, B.useReducer = function(y, T, M) {
    return Q.H.useReducer(y, T, M);
  }, B.useRef = function(y) {
    return Q.H.useRef(y);
  }, B.useState = function(y) {
    return Q.H.useState(y);
  }, B.useSyncExternalStore = function(y, T, M) {
    return Q.H.useSyncExternalStore(
      y,
      T,
      M
    );
  }, B.useTransition = function() {
    return Q.H.useTransition();
  }, B.version = "19.2.4", B;
}
var Sd;
function mi() {
  return Sd || (Sd = 1, ci.exports = kv()), ci.exports;
}
var Rl = mi(), ii = { exports: {} }, ze = {}, si = { exports: {} }, yi = {};
var gd;
function Fv() {
  return gd || (gd = 1, (function(O) {
    function il(S, A) {
      var q = S.length;
      S.push(A);
      l: for (; 0 < q; ) {
        var ll = q - 1 >>> 1, al = S[ll];
        if (0 < ol(al, A))
          S[ll] = A, S[q] = al, q = ll;
        else break l;
      }
    }
    function k(S) {
      return S.length === 0 ? null : S[0];
    }
    function o(S) {
      if (S.length === 0) return null;
      var A = S[0], q = S.pop();
      if (q !== A) {
        S[0] = q;
        l: for (var ll = 0, al = S.length, y = al >>> 1; ll < y; ) {
          var T = 2 * (ll + 1) - 1, M = S[T], U = T + 1, Y = S[U];
          if (0 > ol(M, q))
            U < al && 0 > ol(Y, M) ? (S[ll] = Y, S[U] = q, ll = U) : (S[ll] = M, S[T] = q, ll = T);
          else if (U < al && 0 > ol(Y, q))
            S[ll] = Y, S[U] = q, ll = U;
          else break l;
        }
      }
      return A;
    }
    function ol(S, A) {
      var q = S.sortIndex - A.sortIndex;
      return q !== 0 ? q : S.id - A.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var vl = performance;
      O.unstable_now = function() {
        return vl.now();
      };
    } else {
      var Al = Date, rl = Al.now();
      O.unstable_now = function() {
        return Al.now() - rl;
      };
    }
    var N = [], E = [], J = 1, R = null, sl = 3, _l = !1, pl = !1, Nl = !1, Jl = !1, wl = typeof setTimeout == "function" ? setTimeout : null, ot = typeof clearTimeout == "function" ? clearTimeout : null, jl = typeof setImmediate < "u" ? setImmediate : null;
    function Ll(S) {
      for (var A = k(E); A !== null; ) {
        if (A.callback === null) o(E);
        else if (A.startTime <= S)
          o(E), A.sortIndex = A.expirationTime, il(N, A);
        else break;
        A = k(E);
      }
    }
    function ut(S) {
      if (Nl = !1, Ll(S), !pl)
        if (k(N) !== null)
          pl = !0, Yl || (Yl = !0, Vl());
        else {
          var A = k(E);
          A !== null && W(ut, A.startTime - S);
        }
    }
    var Yl = !1, Q = -1, Cl = 5, et = -1;
    function bl() {
      return Jl ? !0 : !(O.unstable_now() - et < Cl);
    }
    function rt() {
      if (Jl = !1, Yl) {
        var S = O.unstable_now();
        et = S;
        var A = !0;
        try {
          l: {
            pl = !1, Nl && (Nl = !1, ot(Q), Q = -1), _l = !0;
            var q = sl;
            try {
              t: {
                for (Ll(S), R = k(N); R !== null && !(R.expirationTime > S && bl()); ) {
                  var ll = R.callback;
                  if (typeof ll == "function") {
                    R.callback = null, sl = R.priorityLevel;
                    var al = ll(
                      R.expirationTime <= S
                    );
                    if (S = O.unstable_now(), typeof al == "function") {
                      R.callback = al, Ll(S), A = !0;
                      break t;
                    }
                    R === k(N) && o(N), Ll(S);
                  } else o(N);
                  R = k(N);
                }
                if (R !== null) A = !0;
                else {
                  var y = k(E);
                  y !== null && W(
                    ut,
                    y.startTime - S
                  ), A = !1;
                }
              }
              break l;
            } finally {
              R = null, sl = q, _l = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Vl() : Yl = !1;
        }
      }
    }
    var Vl;
    if (typeof jl == "function")
      Vl = function() {
        jl(rt);
      };
    else if (typeof MessageChannel < "u") {
      var C = new MessageChannel(), $ = C.port2;
      C.port1.onmessage = rt, Vl = function() {
        $.postMessage(null);
      };
    } else
      Vl = function() {
        wl(rt, 0);
      };
    function W(S, A) {
      Q = wl(function() {
        S(O.unstable_now());
      }, A);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, O.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Cl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, O.unstable_next = function(S) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = sl;
      }
      var q = sl;
      sl = A;
      try {
        return S();
      } finally {
        sl = q;
      }
    }, O.unstable_requestPaint = function() {
      Jl = !0;
    }, O.unstable_runWithPriority = function(S, A) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var q = sl;
      sl = S;
      try {
        return A();
      } finally {
        sl = q;
      }
    }, O.unstable_scheduleCallback = function(S, A, q) {
      var ll = O.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ll + q : ll) : q = ll, S) {
        case 1:
          var al = -1;
          break;
        case 2:
          al = 250;
          break;
        case 5:
          al = 1073741823;
          break;
        case 4:
          al = 1e4;
          break;
        default:
          al = 5e3;
      }
      return al = q + al, S = {
        id: J++,
        callback: A,
        priorityLevel: S,
        startTime: q,
        expirationTime: al,
        sortIndex: -1
      }, q > ll ? (S.sortIndex = q, il(E, S), k(N) === null && S === k(E) && (Nl ? (ot(Q), Q = -1) : Nl = !0, W(ut, q - ll))) : (S.sortIndex = al, il(N, S), pl || _l || (pl = !0, Yl || (Yl = !0, Vl()))), S;
    }, O.unstable_shouldYield = bl, O.unstable_wrapCallback = function(S) {
      var A = sl;
      return function() {
        var q = sl;
        sl = A;
        try {
          return S.apply(this, arguments);
        } finally {
          sl = q;
        }
      };
    };
  })(yi)), yi;
}
var bd;
function Iv() {
  return bd || (bd = 1, si.exports = Fv()), si.exports;
}
var di = { exports: {} }, Kl = {};
var zd;
function Pv() {
  if (zd) return Kl;
  zd = 1;
  var O = mi();
  function il(N) {
    var E = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        E += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + N + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function k() {
  }
  var o = {
    d: {
      f: k,
      r: function() {
        throw Error(il(522));
      },
      D: k,
      C: k,
      L: k,
      m: k,
      X: k,
      S: k,
      M: k
    },
    p: 0,
    findDOMNode: null
  }, ol = /* @__PURE__ */ Symbol.for("react.portal");
  function vl(N, E, J) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ol,
      key: R == null ? null : "" + R,
      children: N,
      containerInfo: E,
      implementation: J
    };
  }
  var Al = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function rl(N, E) {
    if (N === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Kl.createPortal = function(N, E) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(il(299));
    return vl(N, E, null, J);
  }, Kl.flushSync = function(N) {
    var E = Al.T, J = o.p;
    try {
      if (Al.T = null, o.p = 2, N) return N();
    } finally {
      Al.T = E, o.p = J, o.d.f();
    }
  }, Kl.preconnect = function(N, E) {
    typeof N == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(N, E));
  }, Kl.prefetchDNS = function(N) {
    typeof N == "string" && o.d.D(N);
  }, Kl.preinit = function(N, E) {
    if (typeof N == "string" && E && typeof E.as == "string") {
      var J = E.as, R = rl(J, E.crossOrigin), sl = typeof E.integrity == "string" ? E.integrity : void 0, _l = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      J === "style" ? o.d.S(
        N,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: R,
          integrity: sl,
          fetchPriority: _l
        }
      ) : J === "script" && o.d.X(N, {
        crossOrigin: R,
        integrity: sl,
        fetchPriority: _l,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(N, E) {
    if (typeof N == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var J = rl(
            E.as,
            E.crossOrigin
          );
          o.d.M(N, {
            crossOrigin: J,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(N);
  }, Kl.preload = function(N, E) {
    if (typeof N == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var J = E.as, R = rl(J, E.crossOrigin);
      o.d.L(N, J, {
        crossOrigin: R,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Kl.preloadModule = function(N, E) {
    if (typeof N == "string")
      if (E) {
        var J = rl(E.as, E.crossOrigin);
        o.d.m(N, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: J,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(N);
  }, Kl.requestFormReset = function(N) {
    o.d.r(N);
  }, Kl.unstable_batchedUpdates = function(N, E) {
    return N(E);
  }, Kl.useFormState = function(N, E, J) {
    return Al.H.useFormState(N, E, J);
  }, Kl.useFormStatus = function() {
    return Al.H.useHostTransitionStatus();
  }, Kl.version = "19.2.4", Kl;
}
var Td;
function lh() {
  if (Td) return di.exports;
  Td = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (il) {
        console.error(il);
      }
  }
  return O(), di.exports = Pv(), di.exports;
}
var Ed;
function th() {
  if (Ed) return ze;
  Ed = 1;
  var O = Iv(), il = mi(), k = lh();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ol(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function vl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function Al(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function rl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(l) {
    if (vl(l) !== l)
      throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = vl(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return N(e), l;
          if (n === u) return N(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (a.alternate !== u) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = J(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, sl = /* @__PURE__ */ Symbol.for("react.element"), _l = /* @__PURE__ */ Symbol.for("react.transitional.element"), pl = /* @__PURE__ */ Symbol.for("react.portal"), Nl = /* @__PURE__ */ Symbol.for("react.fragment"), Jl = /* @__PURE__ */ Symbol.for("react.strict_mode"), wl = /* @__PURE__ */ Symbol.for("react.profiler"), ot = /* @__PURE__ */ Symbol.for("react.consumer"), jl = /* @__PURE__ */ Symbol.for("react.context"), Ll = /* @__PURE__ */ Symbol.for("react.forward_ref"), ut = /* @__PURE__ */ Symbol.for("react.suspense"), Yl = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), Cl = /* @__PURE__ */ Symbol.for("react.lazy"), et = /* @__PURE__ */ Symbol.for("react.activity"), bl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rt = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object" ? null : (l = rt && l[rt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var C = /* @__PURE__ */ Symbol.for("react.client.reference");
  function $(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === C ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Nl:
        return "Fragment";
      case wl:
        return "Profiler";
      case Jl:
        return "StrictMode";
      case ut:
        return "Suspense";
      case Yl:
        return "SuspenseList";
      case et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pl:
          return "Portal";
        case jl:
          return l.displayName || "Context";
        case ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ll:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Q:
          return t = l.displayName || null, t !== null ? t : $(l.type) || "Memo";
        case Cl:
          t = l._payload, l = l._init;
          try {
            return $(l(t));
          } catch {
          }
      }
    return null;
  }
  var W = Array.isArray, S = il.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ll = [], al = -1;
  function y(l) {
    return { current: l };
  }
  function T(l) {
    0 > al || (l.current = ll[al], ll[al] = null, al--);
  }
  function M(l, t) {
    al++, ll[al] = l.current, l.current = t;
  }
  var U = y(null), Y = y(null), X = y(null), tl = y(null);
  function Wl(l, t) {
    switch (M(X, t), M(Y, l), M(U, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Yy(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Yy(t), l = xy(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(U), M(U, l);
  }
  function zl() {
    T(U), T(Y), T(X);
  }
  function Ou(l) {
    l.memoizedState !== null && M(tl, l);
    var t = U.current, a = xy(t, l.type);
    t !== a && (M(Y, l), M(U, a));
  }
  function Te(l) {
    Y.current === l && (T(U), T(Y)), tl.current === l && (T(tl), oe._currentValue = q);
  }
  var Xn, vi;
  function Aa(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Xn = t && t[1] || "", vi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xn + l + vi;
  }
  var Zn = !1;
  function Ln(l, t) {
    if (!l || Zn) return "";
    Zn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (r) {
                  var h = r;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (r) {
                  h = r;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                h = r;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (r) {
            if (r && h && typeof r.stack == "string")
              return [r.stack, h.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), v = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < v.length && !v[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === v.length)
          for (u = i.length - 1, e = v.length - 1; 1 <= u && 0 <= e && i[u] !== v[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== v[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Zn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Aa(a) : "";
  }
  function Md(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Aa(l.type);
      case 16:
        return Aa("Lazy");
      case 13:
        return l.child !== t && t !== null ? Aa("Suspense Fallback") : Aa("Suspense");
      case 19:
        return Aa("SuspenseList");
      case 0:
      case 15:
        return Ln(l.type, !1);
      case 11:
        return Ln(l.type.render, !1);
      case 1:
        return Ln(l.type, !0);
      case 31:
        return Aa("Activity");
      default:
        return "";
    }
  }
  function hi(l) {
    try {
      var t = "", a = null;
      do
        t += Md(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Kn = O.unstable_scheduleCallback, Jn = O.unstable_cancelCallback, Od = O.unstable_shouldYield, Dd = O.unstable_requestPaint, nt = O.unstable_now, Ud = O.unstable_getCurrentPriorityLevel, oi = O.unstable_ImmediatePriority, ri = O.unstable_UserBlockingPriority, Ee = O.unstable_NormalPriority, pd = O.unstable_LowPriority, Si = O.unstable_IdlePriority, Nd = O.log, Hd = O.unstable_setDisableYieldValue, Du = null, ft = null;
  function It(l) {
    if (typeof Nd == "function" && Hd(l), ft && typeof ft.setStrictMode == "function")
      try {
        ft.setStrictMode(Du, l);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : Cd, Rd = Math.log, jd = Math.LN2;
  function Cd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Rd(l) / jd | 0) | 0;
  }
  var Ae = 256, _e = 262144, Me = 4194304;
  function _a(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Oe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = _a(u) : (f &= c, f !== 0 ? e = _a(f) : a || (a = c & ~l, a !== 0 && (e = _a(a))))) : (c = u & ~n, c !== 0 ? e = _a(c) : f !== 0 ? e = _a(f) : a || (a = u & ~l, a !== 0 && (e = _a(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Uu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function qd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function gi() {
    var l = Me;
    return Me <<= 1, (Me & 62914560) === 0 && (Me = 4194304), l;
  }
  function wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function pu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Bd(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, v = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - ct(a), z = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = v[g];
      if (h !== null)
        for (v[g] = null, g = 0; g < h.length; g++) {
          var r = h[g];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && bi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bi(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - ct(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function zi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - ct(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function Ti(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ei() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : cd(l.type));
  }
  function Ai(l, t) {
    var a = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = a;
    }
  }
  var Pt = Math.random().toString(36).slice(2), xl = "__reactFiber$" + Pt, kl = "__reactProps$" + Pt, Za = "__reactContainer$" + Pt, kn = "__reactEvents$" + Pt, Yd = "__reactListeners$" + Pt, xd = "__reactHandles$" + Pt, _i = "__reactResources$" + Pt, Nu = "__reactMarker$" + Pt;
  function Fn(l) {
    delete l[xl], delete l[kl], delete l[kn], delete l[Yd], delete l[xd];
  }
  function La(l) {
    var t = l[xl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[xl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Ky(l); l !== null; ) {
            if (a = l[xl]) return a;
            l = Ky(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[xl] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Hu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Ka(l) {
    var t = l[_i];
    return t || (t = l[_i] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ql(l) {
    l[Nu] = !0;
  }
  var Mi = /* @__PURE__ */ new Set(), Oi = {};
  function Ma(l, t) {
    Ja(l, t), Ja(l + "Capture", t);
  }
  function Ja(l, t) {
    for (Oi[l] = t, l = 0; l < t.length; l++)
      Mi.add(t[l]);
  }
  var Gd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Di = {}, Ui = {};
  function Qd(l) {
    return Vn.call(Ui, l) ? !0 : Vn.call(Di, l) ? !1 : Gd.test(l) ? Ui[l] = !0 : (Di[l] = !0, !1);
  }
  function De(l, t, a) {
    if (Qd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ue(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ct(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function St(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xd(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function In(l) {
    if (!l._valueTracker) {
      var t = pi(l) ? "checked" : "value";
      l._valueTracker = Xd(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Ni(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = pi(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function pe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zd = /[\n"\\]/g;
  function gt(l) {
    return l.replace(
      Zd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pn(l, t, a, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + St(t)) : l.value !== "" + St(t) && (l.value = "" + St(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, St(t)) : a != null ? lf(l, f, St(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + St(c) : l.removeAttribute("name");
  }
  function Hi(l, t, a, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      a = a != null ? "" + St(a) : "", t = t != null ? "" + St(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), In(l);
  }
  function lf(l, t, a) {
    t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function wa(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + St(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ri(l, t, a) {
    if (t != null && (t = "" + St(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + St(a) : "";
  }
  function ji(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (W(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = St(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), In(l);
  }
  function Wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ld = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ci(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ld.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function qi(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && Ci(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ci(l, n, t[n]);
  }
  function tf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Vd = /* @__PURE__ */ new Map([
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
  ]), Kd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return Kd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function qt() {
  }
  var af = null;
  function uf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $a = null, ka = null;
  function Bi(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + gt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[kl] || null;
                if (!e) throw Error(o(90));
                Pn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Ni(u);
          }
          break l;
        case "textarea":
          Ri(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && wa(l, !!a.multiple, t, !1);
      }
    }
  }
  var ef = !1;
  function Yi(l, t, a) {
    if (ef) return l(t, a);
    ef = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (ef = !1, ($a !== null || ka !== null) && (gn(), $a && (t = $a, l = ka, ka = $a = null, Bi(t), l)))
        for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Ru(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[kl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        o(231, t, typeof a)
      );
    return a;
  }
  var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nf = !1;
  if (Bt)
    try {
      var ju = {};
      Object.defineProperty(ju, "passive", {
        get: function() {
          nf = !0;
        }
      }), window.addEventListener("test", ju, ju), window.removeEventListener("test", ju, ju);
    } catch {
      nf = !1;
    }
  var la = null, ff = null, He = null;
  function xi() {
    if (He) return He;
    var l, t = ff, a = t.length, u, e = "value" in la ? la.value : la.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return He = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function je() {
    return !0;
  }
  function Gi() {
    return !1;
  }
  function Fl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? je : Gi, this.isPropagationStopped = Gi, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = je);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = je);
      },
      persist: function() {
      },
      isPersistent: je
    }), t;
  }
  var Oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = Fl(Oa), Cu = R({}, Oa, { view: 0, detail: 0 }), Jd = Fl(Cu), cf, sf, qu, qe = R({}, Cu, {
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
    getModifierState: df,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== qu && (qu && l.type === "mousemove" ? (cf = l.screenX - qu.screenX, sf = l.screenY - qu.screenY) : sf = cf = 0, qu = l), cf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : sf;
    }
  }), Qi = Fl(qe), wd = R({}, qe, { dataTransfer: 0 }), Wd = Fl(wd), $d = R({}, Cu, { relatedTarget: 0 }), yf = Fl($d), kd = R({}, Oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fd = Fl(kd), Id = R({}, Oa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Pd = Fl(Id), lm = R({}, Oa, { data: 0 }), Xi = Fl(lm), tm = {
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
  }, am = {
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
  }, um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function em(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = um[l]) ? !!t[l] : !1;
  }
  function df() {
    return em;
  }
  var nm = R({}, Cu, {
    key: function(l) {
      if (l.key) {
        var t = tm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? am[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: df,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), fm = Fl(nm), cm = R({}, qe, {
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
  }), Zi = Fl(cm), im = R({}, Cu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: df
  }), sm = Fl(im), ym = R({}, Oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dm = Fl(ym), mm = R({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vm = Fl(mm), hm = R({}, Oa, {
    newState: 0,
    oldState: 0
  }), om = Fl(hm), rm = [9, 13, 27, 32], mf = Bt && "CompositionEvent" in window, Bu = null;
  Bt && "documentMode" in document && (Bu = document.documentMode);
  var Sm = Bt && "TextEvent" in window && !Bu, Li = Bt && (!mf || Bu && 8 < Bu && 11 >= Bu), Vi = " ", Ki = !1;
  function Ji(l, t) {
    switch (l) {
      case "keyup":
        return rm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Fa = !1;
  function gm(l, t) {
    switch (l) {
      case "compositionend":
        return wi(t);
      case "keypress":
        return t.which !== 32 ? null : (Ki = !0, Vi);
      case "textInput":
        return l = t.data, l === Vi && Ki ? null : l;
      default:
        return null;
    }
  }
  function bm(l, t) {
    if (Fa)
      return l === "compositionend" || !mf && Ji(l, t) ? (l = xi(), He = ff = la = null, Fa = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Li && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zm = {
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
  function Wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!zm[l.type] : t === "textarea";
  }
  function $i(l, t, a, u) {
    $a ? ka ? ka.push(u) : ka = [u] : $a = u, t = Mn(t, "onChange"), 0 < t.length && (a = new Ce(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Yu = null, xu = null;
  function Tm(l) {
    Hy(l, 0);
  }
  function Be(l) {
    var t = Hu(l);
    if (Ni(t)) return l;
  }
  function ki(l, t) {
    if (l === "change") return t;
  }
  var Fi = !1;
  if (Bt) {
    var vf;
    if (Bt) {
      var hf = "oninput" in document;
      if (!hf) {
        var Ii = document.createElement("div");
        Ii.setAttribute("oninput", "return;"), hf = typeof Ii.oninput == "function";
      }
      vf = hf;
    } else vf = !1;
    Fi = vf && (!document.documentMode || 9 < document.documentMode);
  }
  function Pi() {
    Yu && (Yu.detachEvent("onpropertychange", ls), xu = Yu = null);
  }
  function ls(l) {
    if (l.propertyName === "value" && Be(xu)) {
      var t = [];
      $i(
        t,
        xu,
        l,
        uf(l)
      ), Yi(Tm, t);
    }
  }
  function Em(l, t, a) {
    l === "focusin" ? (Pi(), Yu = t, xu = a, Yu.attachEvent("onpropertychange", ls)) : l === "focusout" && Pi();
  }
  function Am(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(xu);
  }
  function _m(l, t) {
    if (l === "click") return Be(t);
  }
  function Mm(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function Om(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var it = typeof Object.is == "function" ? Object.is : Om;
  function Gu(l, t) {
    if (it(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !it(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function ts(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function as(l, t) {
    var a = ts(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ts(a);
    }
  }
  function us(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? us(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function es(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = pe(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dm = Bt && "documentMode" in document && 11 >= document.documentMode, Ia = null, rf = null, Qu = null, Sf = !1;
  function ns(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sf || Ia == null || Ia !== pe(u) || (u = Ia, "selectionStart" in u && of(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Gu(Qu, u) || (Qu = u, u = Mn(rf, "onSelect"), 0 < u.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Ia)));
  }
  function Da(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Pa = {
    animationend: Da("Animation", "AnimationEnd"),
    animationiteration: Da("Animation", "AnimationIteration"),
    animationstart: Da("Animation", "AnimationStart"),
    transitionrun: Da("Transition", "TransitionRun"),
    transitionstart: Da("Transition", "TransitionStart"),
    transitioncancel: Da("Transition", "TransitionCancel"),
    transitionend: Da("Transition", "TransitionEnd")
  }, gf = {}, fs = {};
  Bt && (fs = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Ua(l) {
    if (gf[l]) return gf[l];
    if (!Pa[l]) return l;
    var t = Pa[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in fs)
        return gf[l] = t[a];
    return l;
  }
  var cs = Ua("animationend"), is = Ua("animationiteration"), ss = Ua("animationstart"), Um = Ua("transitionrun"), pm = Ua("transitionstart"), Nm = Ua("transitioncancel"), ys = Ua("transitionend"), ds = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bf.push("scrollEnd");
  function Dt(l, t) {
    ds.set(l, t), Ma(t, [l]);
  }
  var Ye = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, bt = [], lu = 0, zf = 0;
  function xe() {
    for (var l = lu, t = zf = lu = 0; t < l; ) {
      var a = bt[t];
      bt[t++] = null;
      var u = bt[t];
      bt[t++] = null;
      var e = bt[t];
      bt[t++] = null;
      var n = bt[t];
      if (bt[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && ms(a, e, n);
    }
  }
  function Ge(l, t, a, u) {
    bt[lu++] = l, bt[lu++] = t, bt[lu++] = a, bt[lu++] = u, zf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function Tf(l, t, a, u) {
    return Ge(l, t, a, u), Qe(l);
  }
  function pa(l, t) {
    return Ge(l, null, null, t), Qe(l);
  }
  function ms(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ct(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, Nc = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var tu = {};
  function Hm(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(l, t, a, u) {
    return new Hm(l, t, a, u);
  }
  function Ef(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Yt(l, t) {
    var a = l.alternate;
    return a === null ? (a = st(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function vs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") Ef(l) && (f = 1);
    else if (typeof l == "string")
      f = Bv(
        l,
        a,
        U.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case et:
          return l = st(31, a, t, e), l.elementType = et, l.lanes = n, l;
        case Nl:
          return Na(a.children, e, n, t);
        case Jl:
          f = 8, e |= 24;
          break;
        case wl:
          return l = st(12, a, t, e | 2), l.elementType = wl, l.lanes = n, l;
        case ut:
          return l = st(13, a, t, e), l.elementType = ut, l.lanes = n, l;
        case Yl:
          return l = st(19, a, t, e), l.elementType = Yl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case jl:
                f = 10;
                break l;
              case ot:
                f = 9;
                break l;
              case Ll:
                f = 11;
                break l;
              case Q:
                f = 14;
                break l;
              case Cl:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = st(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Na(l, t, a, u) {
    return l = st(7, l, u, t), l.lanes = a, l;
  }
  function Af(l, t, a) {
    return l = st(6, l, null, t), l.lanes = a, l;
  }
  function hs(l) {
    var t = st(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _f(l, t, a) {
    return t = st(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var os = /* @__PURE__ */ new WeakMap();
  function zt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = os.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: hi(t)
      }, os.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: hi(t)
    };
  }
  var au = [], uu = 0, Ze = null, Xu = 0, Tt = [], Et = 0, ta = null, Nt = 1, Ht = "";
  function xt(l, t) {
    au[uu++] = Xu, au[uu++] = Ze, Ze = l, Xu = t;
  }
  function rs(l, t, a) {
    Tt[Et++] = Nt, Tt[Et++] = Ht, Tt[Et++] = ta, ta = l;
    var u = Nt;
    l = Ht;
    var e = 32 - ct(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - ct(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Nt = 1 << 32 - ct(t) + e | a << e | u, Ht = n + l;
    } else
      Nt = 1 << n | a << e | u, Ht = l;
  }
  function Mf(l) {
    l.return !== null && (xt(l, 1), rs(l, 1, 0));
  }
  function Of(l) {
    for (; l === Ze; )
      Ze = au[--uu], au[uu] = null, Xu = au[--uu], au[uu] = null;
    for (; l === ta; )
      ta = Tt[--Et], Tt[Et] = null, Ht = Tt[--Et], Tt[Et] = null, Nt = Tt[--Et], Tt[Et] = null;
  }
  function Ss(l, t) {
    Tt[Et++] = Nt, Tt[Et++] = Ht, Tt[Et++] = ta, Nt = t.id, Ht = t.overflow, ta = l;
  }
  var Gl = null, dl = null, w = !1, aa = null, At = !1, Df = Error(o(519));
  function ua(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zu(zt(t, l)), Df;
  }
  function gs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[xl] = l, t[kl] = u, a) {
      case "dialog":
        L("cancel", t), L("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++)
          L(ye[a], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        L("error", t), L("load", t);
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        L("invalid", t), Hi(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        L("invalid", t), ji(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || qy(t.textContent, a) ? (u.popover != null && (L("beforetoggle", t), L("toggle", t)), u.onScroll != null && L("scroll", t), u.onScrollEnd != null && L("scrollend", t), u.onClick != null && (t.onclick = qt), t = !0) : t = !1, t || ua(l, !0);
  }
  function bs(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 5:
        case 31:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function eu(l) {
    if (l !== Gl) return !1;
    if (!w) return bs(l), w = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Kc(l.type, l.memoizedProps)), a = !a), a && dl && ua(l), bs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      dl = Vy(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      dl = Vy(l);
    } else
      t === 27 ? (t = dl, Sa(l.type) ? (l = kc, kc = null, dl = l) : dl = t) : dl = Gl ? Mt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    dl = Gl = null, w = !1;
  }
  function Uf() {
    var l = aa;
    return l !== null && (tt === null ? tt = l : tt.push.apply(
      tt,
      l
    ), aa = null), l;
  }
  function Zu(l) {
    aa === null ? aa = [l] : aa.push(l);
  }
  var pf = y(null), Ra = null, Gt = null;
  function ea(l, t, a) {
    M(pf, t._currentValue), t._currentValue = a;
  }
  function Qt(l) {
    l._currentValue = pf.current, T(pf);
  }
  function Nf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Hf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Nf(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(o(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Nf(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function nu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          it(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === tl.current) {
        if (f = e.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && Hf(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Le(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!it(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ja(l) {
    Ra = l, Gt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ql(l) {
    return zs(Ra, l);
  }
  function Ve(l, t) {
    return Ra === null && ja(l), zs(l, t);
  }
  function zs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Gt === null) {
      if (l === null) throw Error(o(308));
      Gt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Gt = Gt.next = t;
    return a;
  }
  var Rm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, jm = O.unstable_scheduleCallback, Cm = O.unstable_NormalPriority, Ml = {
    $$typeof: jl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rf() {
    return {
      controller: new Rm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lu(l) {
    l.refCount--, l.refCount === 0 && jm(Cm, function() {
      l.controller.abort();
    });
  }
  var Vu = null, jf = 0, fu = 0, cu = null;
  function qm(l, t) {
    if (Vu === null) {
      var a = Vu = [];
      jf = 0, fu = Bc(), cu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return jf++, t.then(Ts, Ts), t;
  }
  function Ts() {
    if (--jf === 0 && Vu !== null) {
      cu !== null && (cu.status = "fulfilled");
      var l = Vu;
      Vu = null, fu = 0, cu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Bm(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var Es = S.S;
  S.S = function(l, t) {
    ny = nt(), typeof t == "object" && t !== null && typeof t.then == "function" && qm(l, t), Es !== null && Es(l, t);
  };
  var Ca = y(null);
  function Cf() {
    var l = Ca.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? M(Ca, Ca.current) : M(Ca, t.pool);
  }
  function As() {
    var l = Cf();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var iu = Error(o(460)), qf = Error(o(474)), Je = Error(o(542)), we = { then: function() {
  } };
  function _s(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ms(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(qt, qt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ds(l), l;
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ds(l), l;
        }
        throw Ba = t, iu;
    }
  }
  function qa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ba = a, iu) : a;
    }
  }
  var Ba = null;
  function Os() {
    if (Ba === null) throw Error(o(459));
    var l = Ba;
    return Ba = null, l;
  }
  function Ds(l) {
    if (l === iu || l === Je)
      throw Error(o(483));
  }
  var su = null, Ku = 0;
  function We(l) {
    var t = Ku;
    return Ku += 1, su === null && (su = []), Ms(su, l, t);
  }
  function Ju(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === sl ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Us(l) {
    function t(d, s) {
      if (l) {
        var m = d.deletions;
        m === null ? (d.deletions = [s], d.flags |= 16) : m.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function u(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function e(d, s) {
      return d = Yt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, m) {
      return d.index = m, l ? (m = d.alternate, m !== null ? (m = m.index, m < s ? (d.flags |= 67108866, s) : m) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, m, b) {
      return s === null || s.tag !== 6 ? (s = Af(m, d.mode, b), s.return = d, s) : (s = e(s, m), s.return = d, s);
    }
    function i(d, s, m, b) {
      var H = m.type;
      return H === Nl ? g(
        d,
        s,
        m.props.children,
        b,
        m.key
      ) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Cl && qa(H) === s.type) ? (s = e(s, m.props), Ju(s, m), s.return = d, s) : (s = Xe(
        m.type,
        m.key,
        m.props,
        null,
        d.mode,
        b
      ), Ju(s, m), s.return = d, s);
    }
    function v(d, s, m, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = _f(m, d.mode, b), s.return = d, s) : (s = e(s, m.children || []), s.return = d, s);
    }
    function g(d, s, m, b, H) {
      return s === null || s.tag !== 7 ? (s = Na(
        m,
        d.mode,
        b,
        H
      ), s.return = d, s) : (s = e(s, m), s.return = d, s);
    }
    function z(d, s, m) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Af(
          "" + s,
          d.mode,
          m
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case _l:
            return m = Xe(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              m
            ), Ju(m, s), m.return = d, m;
          case pl:
            return s = _f(
              s,
              d.mode,
              m
            ), s.return = d, s;
          case Cl:
            return s = qa(s), z(d, s, m);
        }
        if (W(s) || Vl(s))
          return s = Na(
            s,
            d.mode,
            m,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return z(d, We(s), m);
        if (s.$$typeof === jl)
          return z(
            d,
            Ve(d, s),
            m
          );
        $e(d, s);
      }
      return null;
    }
    function h(d, s, m, b) {
      var H = s !== null ? s.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return H !== null ? null : c(d, s, "" + m, b);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case _l:
            return m.key === H ? i(d, s, m, b) : null;
          case pl:
            return m.key === H ? v(d, s, m, b) : null;
          case Cl:
            return m = qa(m), h(d, s, m, b);
        }
        if (W(m) || Vl(m))
          return H !== null ? null : g(d, s, m, b, null);
        if (typeof m.then == "function")
          return h(
            d,
            s,
            We(m),
            b
          );
        if (m.$$typeof === jl)
          return h(
            d,
            s,
            Ve(d, m),
            b
          );
        $e(d, m);
      }
      return null;
    }
    function r(d, s, m, b, H) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(m) || null, c(s, d, "" + b, H);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case _l:
            return d = d.get(
              b.key === null ? m : b.key
            ) || null, i(s, d, b, H);
          case pl:
            return d = d.get(
              b.key === null ? m : b.key
            ) || null, v(s, d, b, H);
          case Cl:
            return b = qa(b), r(
              d,
              s,
              m,
              b,
              H
            );
        }
        if (W(b) || Vl(b))
          return d = d.get(m) || null, g(s, d, b, H, null);
        if (typeof b.then == "function")
          return r(
            d,
            s,
            m,
            We(b),
            H
          );
        if (b.$$typeof === jl)
          return r(
            d,
            s,
            m,
            Ve(s, b),
            H
          );
        $e(s, b);
      }
      return null;
    }
    function D(d, s, m, b) {
      for (var H = null, F = null, p = s, G = s = 0, K = null; p !== null && G < m.length; G++) {
        p.index > G ? (K = p, p = null) : K = p.sibling;
        var I = h(
          d,
          p,
          m[G],
          b
        );
        if (I === null) {
          p === null && (p = K);
          break;
        }
        l && p && I.alternate === null && t(d, p), s = n(I, s, G), F === null ? H = I : F.sibling = I, F = I, p = K;
      }
      if (G === m.length)
        return a(d, p), w && xt(d, G), H;
      if (p === null) {
        for (; G < m.length; G++)
          p = z(d, m[G], b), p !== null && (s = n(
            p,
            s,
            G
          ), F === null ? H = p : F.sibling = p, F = p);
        return w && xt(d, G), H;
      }
      for (p = u(p); G < m.length; G++)
        K = r(
          p,
          d,
          G,
          m[G],
          b
        ), K !== null && (l && K.alternate !== null && p.delete(
          K.key === null ? G : K.key
        ), s = n(
          K,
          s,
          G
        ), F === null ? H = K : F.sibling = K, F = K);
      return l && p.forEach(function(Ea) {
        return t(d, Ea);
      }), w && xt(d, G), H;
    }
    function j(d, s, m, b) {
      if (m == null) throw Error(o(151));
      for (var H = null, F = null, p = s, G = s = 0, K = null, I = m.next(); p !== null && !I.done; G++, I = m.next()) {
        p.index > G ? (K = p, p = null) : K = p.sibling;
        var Ea = h(d, p, I.value, b);
        if (Ea === null) {
          p === null && (p = K);
          break;
        }
        l && p && Ea.alternate === null && t(d, p), s = n(Ea, s, G), F === null ? H = Ea : F.sibling = Ea, F = Ea, p = K;
      }
      if (I.done)
        return a(d, p), w && xt(d, G), H;
      if (p === null) {
        for (; !I.done; G++, I = m.next())
          I = z(d, I.value, b), I !== null && (s = n(I, s, G), F === null ? H = I : F.sibling = I, F = I);
        return w && xt(d, G), H;
      }
      for (p = u(p); !I.done; G++, I = m.next())
        I = r(p, d, G, I.value, b), I !== null && (l && I.alternate !== null && p.delete(I.key === null ? G : I.key), s = n(I, s, G), F === null ? H = I : F.sibling = I, F = I);
      return l && p.forEach(function(wv) {
        return t(d, wv);
      }), w && xt(d, G), H;
    }
    function cl(d, s, m, b) {
      if (typeof m == "object" && m !== null && m.type === Nl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case _l:
            l: {
              for (var H = m.key; s !== null; ) {
                if (s.key === H) {
                  if (H = m.type, H === Nl) {
                    if (s.tag === 7) {
                      a(
                        d,
                        s.sibling
                      ), b = e(
                        s,
                        m.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Cl && qa(H) === s.type) {
                    a(
                      d,
                      s.sibling
                    ), b = e(s, m.props), Ju(b, m), b.return = d, d = b;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              m.type === Nl ? (b = Na(
                m.props.children,
                d.mode,
                b,
                m.key
              ), b.return = d, d = b) : (b = Xe(
                m.type,
                m.key,
                m.props,
                null,
                d.mode,
                b
              ), Ju(b, m), b.return = d, d = b);
            }
            return f(d);
          case pl:
            l: {
              for (H = m.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                    a(
                      d,
                      s.sibling
                    ), b = e(s, m.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              b = _f(m, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case Cl:
            return m = qa(m), cl(
              d,
              s,
              m,
              b
            );
        }
        if (W(m))
          return D(
            d,
            s,
            m,
            b
          );
        if (Vl(m)) {
          if (H = Vl(m), typeof H != "function") throw Error(o(150));
          return m = H.call(m), j(
            d,
            s,
            m,
            b
          );
        }
        if (typeof m.then == "function")
          return cl(
            d,
            s,
            We(m),
            b
          );
        if (m.$$typeof === jl)
          return cl(
            d,
            s,
            Ve(d, m),
            b
          );
        $e(d, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, s !== null && s.tag === 6 ? (a(d, s.sibling), b = e(s, m), b.return = d, d = b) : (a(d, s), b = Af(m, d.mode, b), b.return = d, d = b), f(d)) : a(d, s);
    }
    return function(d, s, m, b) {
      try {
        Ku = 0;
        var H = cl(
          d,
          s,
          m,
          b
        );
        return su = null, H;
      } catch (p) {
        if (p === iu || p === Je) throw p;
        var F = st(29, p, null, d.mode);
        return F.lanes = b, F.return = d, F;
      }
    };
  }
  var Ya = Us(!0), ps = Us(!1), na = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function fa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (P & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Qe(l), ms(l, null, a), t;
    }
    return Ge(l, u, t, a), Qe(l);
  }
  function wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, zi(l, a);
    }
  }
  function xf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Gf = !1;
  function Wu() {
    if (Gf) {
      var l = cu;
      if (l !== null) throw l;
    }
  }
  function $u(l, t, a, u) {
    Gf = !1;
    var e = l.updateQueue;
    na = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, v = i.next;
      i.next = null, f === null ? n = v : f.next = v, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = v : c.next = v, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, g = v = i = null, c = n;
      do {
        var h = c.lane & -536870913, r = h !== c.lane;
        if (r ? (V & h) === h : (u & h) === h) {
          h !== 0 && h === fu && (Gf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var D = l, j = c;
            h = t;
            var cl = a;
            switch (j.tag) {
              case 1:
                if (D = j.payload, typeof D == "function") {
                  z = D.call(cl, z, h);
                  break l;
                }
                z = D;
                break l;
              case 3:
                D.flags = D.flags & -65537 | 128;
              case 0:
                if (D = j.payload, h = typeof D == "function" ? D.call(cl, z, h) : D, h == null) break l;
                z = R({}, z, h);
                break l;
              case 2:
                na = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, r && (l.flags |= 8192), r = e.callbacks, r === null ? e.callbacks = [h] : r.push(h));
        } else
          r = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (v = g = r, i = z) : g = g.next = r, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = z), e.baseState = i, e.firstBaseUpdate = v, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), ma |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function Ns(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Ns(a[l], t);
  }
  var yu = y(null), ke = y(0);
  function Rs(l, t) {
    l = $t, M(ke, l), M(yu, t), $t = l | t.baseLanes;
  }
  function Qf() {
    M(ke, $t), M(yu, yu.current);
  }
  function Xf() {
    $t = ke.current, T(yu), T(ke);
  }
  var yt = y(null), _t = null;
  function ia(l) {
    var t = l.alternate;
    M(Tl, Tl.current & 1), M(yt, l), _t === null && (t === null || yu.current !== null || t.memoizedState !== null) && (_t = l);
  }
  function Zf(l) {
    M(Tl, Tl.current), M(yt, l), _t === null && (_t = l);
  }
  function js(l) {
    l.tag === 22 ? (M(Tl, Tl.current), M(yt, l), _t === null && (_t = l)) : sa();
  }
  function sa() {
    M(Tl, Tl.current), M(yt, yt.current);
  }
  function dt(l) {
    T(yt), _t === l && (_t = null), T(Tl);
  }
  var Tl = y(0);
  function Fe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Wc(a) || $c(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Xt = 0, x = null, nl = null, Ol = null, Ie = !1, du = !1, xa = !1, Pe = 0, ku = 0, mu = null, Ym = 0;
  function Sl() {
    throw Error(o(321));
  }
  function Lf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!it(l[a], t[a])) return !1;
    return !0;
  }
  function Vf(l, t, a, u, e, n) {
    return Xt = n, x = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? r0 : nc, xa = !1, n = a(u, e), xa = !1, du && (n = qs(
      t,
      a,
      u,
      e
    )), Cs(l), n;
  }
  function Cs(l) {
    S.H = Pu;
    var t = nl !== null && nl.next !== null;
    if (Xt = 0, Ol = nl = x = null, Ie = !1, ku = 0, mu = null, t) throw Error(o(300));
    l === null || Dl || (l = l.dependencies, l !== null && Le(l) && (Dl = !0));
  }
  function qs(l, t, a, u) {
    x = l;
    var e = 0;
    do {
      if (du && (mu = null), ku = 0, du = !1, 25 <= e) throw Error(o(301));
      if (e += 1, Ol = nl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = S0, n = t(a, u);
    } while (du);
    return n;
  }
  function xm() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fu(t) : t, l = l.useState()[0], (nl !== null ? nl.memoizedState : null) !== l && (x.flags |= 1024), t;
  }
  function Kf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Jf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function wf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Xt = 0, Ol = nl = x = null, du = !1, ku = Pe = 0, mu = null;
  }
  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ol === null ? x.memoizedState = Ol = l : Ol = Ol.next = l, Ol;
  }
  function El() {
    if (nl === null) {
      var l = x.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = Ol === null ? x.memoizedState : Ol.next;
    if (t !== null)
      Ol = t, nl = l;
    else {
      if (l === null)
        throw x.alternate === null ? Error(o(467)) : Error(o(310));
      nl = l, l = {
        memoizedState: nl.memoizedState,
        baseState: nl.baseState,
        baseQueue: nl.baseQueue,
        queue: nl.queue,
        next: null
      }, Ol === null ? x.memoizedState = Ol = l : Ol = Ol.next = l;
    }
    return Ol;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fu(l) {
    var t = ku;
    return ku += 1, mu === null && (mu = []), l = Ms(mu, l, t), t = x, (Ol === null ? t.memoizedState : Ol.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? r0 : nc), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === jl) return Ql(l);
    }
    throw Error(o(438, String(l)));
  }
  function Wf(l) {
    var t = null, a = x.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = x.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), x.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = bl;
    return t.index++, a;
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = El();
    return $f(t, nl, l);
  }
  function $f(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, v = t, g = !1;
      do {
        var z = v.lane & -536870913;
        if (z !== v.lane ? (V & z) === z : (Xt & z) === z) {
          var h = v.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), z === fu && (g = !0);
          else if ((Xt & h) === h) {
            v = v.next, h === fu && (g = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, i === null ? (c = i = z, f = n) : i = i.next = z, x.lanes |= h, ma |= h;
          z = v.action, xa && a(n, z), n = v.hasEagerState ? v.eagerState : a(n, z);
        } else
          h = {
            lane: z,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, x.lanes |= z, ma |= z;
        v = v.next;
      } while (v !== null && v !== t);
      if (i === null ? f = n : i.next = c, !it(n, l.memoizedState) && (Dl = !0, g && (a = cu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function kf(l) {
    var t = El(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      it(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Bs(l, t, a) {
    var u = x, e = El(), n = w;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var f = !it(
      (nl || e).memoizedState,
      a
    );
    if (f && (e.memoizedState = a, Dl = !0), e = e.queue, Pf(Gs.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || f || Ol !== null && Ol.memoizedState.tag & 1) {
      if (u.flags |= 2048, vu(
        9,
        { destroy: void 0 },
        xs.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), yl === null) throw Error(o(349));
      n || (Xt & 127) !== 0 || Ys(u, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = x.updateQueue, t === null ? (t = ln(), x.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function xs(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Qs(t) && Xs(l);
  }
  function Gs(l, t, a) {
    return a(function() {
      Qs(t) && Xs(l);
    });
  }
  function Qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !it(l, a);
    } catch {
      return !0;
    }
  }
  function Xs(l) {
    var t = pa(l, 2);
    t !== null && at(t, l, 2);
  }
  function Ff(l) {
    var t = $l();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), xa) {
        It(!0);
        try {
          a();
        } finally {
          It(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zt,
      lastRenderedState: l
    }, t;
  }
  function Zs(l, t, a, u) {
    return l.baseState = a, $f(
      l,
      nl,
      typeof u == "function" ? u : Zt
    );
  }
  function Gm(l, t, a, u, e) {
    if (nn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      S.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Ls(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Ls(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var c = a(e, u), i = S.S;
        i !== null && i(f, c), Vs(l, t, c);
      } catch (v) {
        If(l, t, v);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), S.T = n;
      }
    } else
      try {
        n = a(e, u), Vs(l, t, n);
      } catch (v) {
        If(l, t, v);
      }
  }
  function Vs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Ks(l, t, u);
      },
      function(u) {
        return If(l, t, u);
      }
    ) : Ks(l, t, a);
  }
  function Ks(l, t, a) {
    t.status = "fulfilled", t.value = a, Js(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Ls(l, a)));
  }
  function If(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Js(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Js(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ws(l, t) {
    return t;
  }
  function Ws(l, t) {
    if (w) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var u = x;
          if (w) {
            if (dl) {
              t: {
                for (var e = dl, n = At; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Mt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                dl = Mt(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            ua(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = $l(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ws,
      lastRenderedState: t
    }, a.queue = u, a = v0.bind(
      null,
      x,
      u
    ), u.dispatch = a, u = Ff(!1), n = ec.bind(
      null,
      x,
      !1,
      u.queue
    ), u = $l(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = Gm.bind(
      null,
      x,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function $s(l) {
    var t = El();
    return ks(t, nl, l);
  }
  function ks(l, t, a) {
    if (t = $f(
      l,
      t,
      ws
    )[0], l = an(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Fu(t);
      } catch (f) {
        throw f === iu ? Je : f;
      }
    else u = t;
    t = El();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (x.flags |= 2048, vu(
      9,
      { destroy: void 0 },
      Qm.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function Qm(l, t) {
    l.action = t;
  }
  function Fs(l) {
    var t = El(), a = nl;
    if (a !== null)
      return ks(t, a, l);
    El(), t = t.memoizedState, a = El();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function vu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = x.updateQueue, t === null && (t = ln(), x.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function Is() {
    return El().memoizedState;
  }
  function un(l, t, a, u) {
    var e = $l();
    x.flags |= l, e.memoizedState = vu(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function en(l, t, a, u) {
    var e = El();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    nl !== null && u !== null && Lf(u, nl.memoizedState.deps) ? e.memoizedState = vu(t, n, a, u) : (x.flags |= l, e.memoizedState = vu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Ps(l, t) {
    un(8390656, 8, l, t);
  }
  function Pf(l, t) {
    en(2048, 8, l, t);
  }
  function Xm(l) {
    x.flags |= 4;
    var t = x.updateQueue;
    if (t === null)
      t = ln(), x.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function l0(l) {
    var t = El().memoizedState;
    return Xm({ ref: t, nextImpl: l }), function() {
      if ((P & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function t0(l, t) {
    return en(4, 2, l, t);
  }
  function a0(l, t) {
    return en(4, 4, l, t);
  }
  function u0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function e0(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4, 4, u0.bind(null, t, l), a);
  }
  function lc() {
  }
  function n0(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Lf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function f0(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Lf(t, u[1]))
      return u[0];
    if (u = l(), xa) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function tc(l, t, a) {
    return a === void 0 || (Xt & 1073741824) !== 0 && (V & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = cy(), x.lanes |= l, ma |= l, a);
  }
  function c0(l, t, a, u) {
    return it(a, t) ? a : yu.current !== null ? (l = tc(l, a, u), it(l, t) || (Dl = !0), l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (V & 261930) === 0 ? (Dl = !0, l.memoizedState = a) : (l = cy(), x.lanes |= l, ma |= l, t);
  }
  function i0(l, t, a, u, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, ec(l, !1, t, a);
    try {
      var i = e(), v = S.S;
      if (v !== null && v(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Bm(
          i,
          u
        );
        Iu(
          l,
          t,
          g,
          ht(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          ht(l)
        );
    } catch (z) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        ht()
      );
    } finally {
      A.p = n, f !== null && c.types !== null && (f.types = c.types), S.T = f;
    }
  }
  function Zm() {
  }
  function ac(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var e = s0(l).queue;
    i0(
      l,
      e,
      t,
      q,
      a === null ? Zm : function() {
        return y0(l), a(u);
      }
    );
  }
  function s0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: q
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function y0(l) {
    var t = s0(l);
    t.next === null && (t = l.alternate.memoizedState), Iu(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function uc() {
    return Ql(oe);
  }
  function d0() {
    return El().memoizedState;
  }
  function m0() {
    return El().memoizedState;
  }
  function Lm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ht();
          l = fa(a);
          var u = ca(t, l, a);
          u !== null && (at(u, t, a), wu(u, t, a)), t = { cache: Rf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vm(l, t, a) {
    var u = ht();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? h0(t, a) : (a = Tf(l, t, a, u), a !== null && (at(a, l, u), o0(a, t, u)));
  }
  function v0(l, t, a) {
    var u = ht();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) h0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = c, it(c, f))
            return Ge(l, t, e, 0), yl === null && xe(), !1;
        } catch {
        }
      if (a = Tf(l, t, e, u), a !== null)
        return at(a, l, u), o0(a, t, u), !0;
    }
    return !1;
  }
  function ec(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(o(479));
    } else
      t = Tf(
        l,
        a,
        u,
        2
      ), t !== null && at(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === x || t !== null && t === x;
  }
  function h0(l, t) {
    du = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function o0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, zi(l, a);
    }
  }
  var Pu = {
    readContext: Ql,
    use: tn,
    useCallback: Sl,
    useContext: Sl,
    useEffect: Sl,
    useImperativeHandle: Sl,
    useLayoutEffect: Sl,
    useInsertionEffect: Sl,
    useMemo: Sl,
    useReducer: Sl,
    useRef: Sl,
    useState: Sl,
    useDebugValue: Sl,
    useDeferredValue: Sl,
    useTransition: Sl,
    useSyncExternalStore: Sl,
    useId: Sl,
    useHostTransitionStatus: Sl,
    useFormState: Sl,
    useActionState: Sl,
    useOptimistic: Sl,
    useMemoCache: Sl,
    useCacheRefresh: Sl
  };
  Pu.useEffectEvent = Sl;
  var r0 = {
    readContext: Ql,
    use: tn,
    useCallback: function(l, t) {
      return $l().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ql,
    useEffect: Ps,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(
        4194308,
        4,
        u0.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = $l();
      t = t === void 0 ? null : t;
      var u = l();
      if (xa) {
        It(!0);
        try {
          l();
        } finally {
          It(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = $l();
      if (a !== void 0) {
        var e = a(t);
        if (xa) {
          It(!0);
          try {
            a(t);
          } finally {
            It(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Vm.bind(
        null,
        x,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = $l();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ff(l);
      var t = l.queue, a = v0.bind(null, x, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var a = $l();
      return tc(a, l, t);
    },
    useTransition: function() {
      var l = Ff(!1);
      return l = i0.bind(
        null,
        x,
        l.queue,
        !0,
        !1
      ), $l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = x, e = $l();
      if (w) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), yl === null)
          throw Error(o(349));
        (V & 127) !== 0 || Ys(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Ps(Gs.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, vu(
        9,
        { destroy: void 0 },
        xs.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = $l(), t = yl.identifierPrefix;
      if (w) {
        var a = Ht, u = Nt;
        a = (u & ~(1 << 32 - ct(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Ym++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: uc,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l) {
      var t = $l();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ec.bind(
        null,
        x,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Wf,
    useCacheRefresh: function() {
      return $l().memoizedState = Lm.bind(
        null,
        x
      );
    },
    useEffectEvent: function(l) {
      var t = $l(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((P & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, nc = {
    readContext: Ql,
    use: tn,
    useCallback: n0,
    useContext: Ql,
    useEffect: Pf,
    useImperativeHandle: e0,
    useInsertionEffect: t0,
    useLayoutEffect: a0,
    useMemo: f0,
    useReducer: an,
    useRef: Is,
    useState: function() {
      return an(Zt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var a = El();
      return c0(
        a,
        nl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(Zt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : Fu(l),
        t
      ];
    },
    useSyncExternalStore: Bs,
    useId: d0,
    useHostTransitionStatus: uc,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l, t) {
      var a = El();
      return Zs(a, nl, l, t);
    },
    useMemoCache: Wf,
    useCacheRefresh: m0
  };
  nc.useEffectEvent = l0;
  var S0 = {
    readContext: Ql,
    use: tn,
    useCallback: n0,
    useContext: Ql,
    useEffect: Pf,
    useImperativeHandle: e0,
    useInsertionEffect: t0,
    useLayoutEffect: a0,
    useMemo: f0,
    useReducer: kf,
    useRef: Is,
    useState: function() {
      return kf(Zt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var a = El();
      return nl === null ? tc(a, l, t) : c0(
        a,
        nl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = kf(Zt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : Fu(l),
        t
      ];
    },
    useSyncExternalStore: Bs,
    useId: d0,
    useHostTransitionStatus: uc,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l, t) {
      var a = El();
      return nl !== null ? Zs(a, nl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Wf,
    useCacheRefresh: m0
  };
  S0.useEffectEvent = l0;
  function fc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : R({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var cc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = ht(), e = fa(u);
      e.payload = t, a != null && (e.callback = a), t = ca(l, e, u), t !== null && (at(t, l, u), wu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = ht(), e = fa(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = ca(l, e, u), t !== null && (at(t, l, u), wu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ht(), u = fa(a);
      u.tag = 2, t != null && (u.callback = t), t = ca(l, u, a), t !== null && (at(t, l, a), wu(t, l, a));
    }
  };
  function g0(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(e, n) : !0;
  }
  function b0(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && cc.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = R({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function z0(l) {
    Ye(l);
  }
  function T0(l) {
    console.error(l);
  }
  function E0(l) {
    Ye(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function A0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ic(l, t, a) {
    return a = fa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function _0(l) {
    return l = fa(l), l.tag = 3, l;
  }
  function M0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        A0(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      A0(t, a, u), typeof e != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Km(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && nu(
        t,
        a,
        e,
        !0
      ), a = yt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return _t === null ? bn() : a.alternate === null && gl === 0 && (gl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), jc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), jc(l, u, e)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return jc(l, u, e), bn(), !1;
    }
    if (w)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Df && (l = Error(o(422), { cause: u }), Zu(zt(l, a)))) : (u !== Df && (t = Error(o(423), {
        cause: u
      }), Zu(
        zt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = zt(u, a), e = ic(
        l.stateNode,
        u,
        e
      ), xf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(o(520), { cause: u });
    if (n = zt(n, a), ce === null ? ce = [n] : ce.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    u = zt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ic(a.stateNode, u, l), xf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (va === null || !va.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = _0(e), M0(
              e,
              l,
              a,
              u
            ), xf(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var sc = Error(o(461)), Dl = !1;
  function Xl(l, t, a, u) {
    t.child = l === null ? ps(t, null, a, u) : Ya(
      t,
      l.child,
      a,
      u
    );
  }
  function O0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return ja(t), u = Vf(
      l,
      t,
      a,
      f,
      n,
      e
    ), c = Kf(), l !== null && !Dl ? (Jf(l, t, e), Lt(l, t, e)) : (w && c && Mf(t), t.flags |= 1, Xl(l, t, u, e), t.child);
  }
  function D0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Ef(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, U0(
        l,
        t,
        n,
        u,
        e
      )) : (l = Xe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Sc(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(f, u) && l.ref === t.ref)
        return Lt(l, t, e);
    }
    return t.flags |= 1, l = Yt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function U0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Gu(n, u) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = u = n, Sc(l, e))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, Lt(l, t, e);
    }
    return yc(
      l,
      t,
      a,
      u,
      e
    );
  }
  function p0(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return N0(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Rs(t, n) : Qf(), js(t);
      else
        return u = t.lanes = 536870912, N0(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ke(t, n.cachePool), Rs(t, n), sa(), t.memoizedState = null) : (l !== null && Ke(t, null), Qf(), sa());
    return Xl(l, t, e, a), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function N0(l, t, a, u, e) {
    var n = Cf();
    return n = n === null ? null : { parent: Ml._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), Qf(), js(t), l !== null && nu(l, t, u, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = yn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function H0(l, t, a) {
    return Ya(t, l.child, null, a), l = cn(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function Jm(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (w) {
        if (u.mode === "hidden")
          return l = cn(t, u), t.lanes = 536870912, le(null, l);
        if (Zf(t), (l = dl) ? (l = Ly(
          l,
          At
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ta !== null ? { id: Nt, overflow: Ht } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = hs(l), a.return = t, t.child = a, Gl = t, dl = null)) : l = null, l === null) throw ua(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Zf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = H0(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Dl || nu(l, t, a, !1), e = (a & l.childLanes) !== 0, Dl || e) {
        if (u = yl, u !== null && (f = Ti(u, a), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, pa(l, f), at(u, l, f), sc;
        bn(), t = H0(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, dl = Mt(f.nextSibling), Gl = t, w = !0, aa = null, At = !1, l !== null && Ss(t, l), t = cn(t, u), t.flags |= 4096;
      return t;
    }
    return l = Yt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function yc(l, t, a, u, e) {
    return ja(t), a = Vf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Kf(), l !== null && !Dl ? (Jf(l, t, e), Lt(l, t, e)) : (w && u && Mf(t), t.flags |= 1, Xl(l, t, a, e), t.child);
  }
  function R0(l, t, a, u, e, n) {
    return ja(t), t.updateQueue = null, a = qs(
      t,
      u,
      a,
      e
    ), Cs(l), u = Kf(), l !== null && !Dl ? (Jf(l, t, n), Lt(l, t, n)) : (w && u && Mf(t), t.flags |= 1, Xl(l, t, a, n), t.child);
  }
  function j0(l, t, a, u, e) {
    if (ja(t), t.stateNode === null) {
      var n = tu, f = a.contextType;
      typeof f == "object" && f !== null && (n = Ql(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Bf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Ql(f) : tu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (fc(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && cc.enqueueReplaceState(n, n.state, null), $u(t, u, n, e), Wu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ga(a, c);
      n.props = i;
      var v = n.context, g = a.contextType;
      f = tu, typeof g == "object" && g !== null && (f = Ql(g));
      var z = a.getDerivedStateFromProps;
      g = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== f) && b0(
        t,
        n,
        u,
        f
      ), na = !1;
      var h = t.memoizedState;
      n.state = h, $u(t, u, n, e), Wu(), v = t.memoizedState, c || h !== v || na ? (typeof z == "function" && (fc(
        t,
        a,
        z,
        u
      ), v = t.memoizedState), (i = na || g0(
        t,
        a,
        i,
        u,
        h,
        v,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = v), n.props = u, n.state = v, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, g = Ga(a, f), n.props = g, z = t.pendingProps, h = n.context, v = a.contextType, i = tu, typeof v == "object" && v !== null && (i = Ql(v)), c = a.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || h !== i) && b0(
        t,
        n,
        u,
        i
      ), na = !1, h = t.memoizedState, n.state = h, $u(t, u, n, e), Wu();
      var r = t.memoizedState;
      f !== z || h !== r || na || l !== null && l.dependencies !== null && Le(l.dependencies) ? (typeof c == "function" && (fc(
        t,
        a,
        c,
        u
      ), r = t.memoizedState), (g = na || g0(
        t,
        a,
        g,
        u,
        h,
        r,
        i
      ) || l !== null && l.dependencies !== null && Le(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        r,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = r), n.props = u, n.state = r, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ya(
      t,
      l.child,
      null,
      e
    ), t.child = Ya(
      t,
      null,
      a,
      e
    )) : Xl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Lt(
      l,
      t,
      e
    ), l;
  }
  function C0(l, t, a, u) {
    return Ha(), t.flags |= 256, Xl(l, t, a, u), t.child;
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(l) {
    return { baseLanes: l, cachePool: As() };
  }
  function vc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= vt), l;
  }
  function q0(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (w) {
        if (e ? ia(t) : sa(), (l = dl) ? (l = Ly(
          l,
          At
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ta !== null ? { id: Nt, overflow: Ht } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = hs(l), a.return = t, t.child = a, Gl = t, dl = null)) : l = null, l === null) throw ua(t);
        return $c(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (sa(), e = t.mode, c = yn(
        { mode: "hidden", children: c },
        e
      ), u = Na(
        u,
        e,
        a,
        null
      ), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = mc(a), u.childLanes = vc(
        l,
        f,
        a
      ), t.memoizedState = dc, le(null, u)) : (ia(t), hc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (ia(t), t.flags &= -257, t = oc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (sa(), t.child = l.child, t.flags |= 128, t = null) : (sa(), c = u.fallback, e = t.mode, u = yn(
          { mode: "visible", children: u.children },
          e
        ), c = Na(
          c,
          e,
          a,
          null
        ), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ya(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = mc(a), u.childLanes = vc(
          l,
          f,
          a
        ), t.memoizedState = dc, t = le(null, u));
      else if (ia(t), $c(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var v = f.dgst;
        f = v, u = Error(o(419)), u.stack = "", u.digest = f, Zu({ value: u, source: null, stack: null }), t = oc(
          l,
          t,
          a
        );
      } else if (Dl || nu(l, t, a, !1), f = (a & l.childLanes) !== 0, Dl || f) {
        if (f = yl, f !== null && (u = Ti(f, a), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, pa(l, u), at(f, l, u), sc;
        Wc(c) || bn(), t = oc(
          l,
          t,
          a
        );
      } else
        Wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, dl = Mt(
          c.nextSibling
        ), Gl = t, w = !0, aa = null, At = !1, l !== null && Ss(t, l), t = hc(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (sa(), c = u.fallback, e = t.mode, i = l.child, v = i.sibling, u = Yt(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, v !== null ? c = Yt(
      v,
      c
    ) : (c = Na(
      c,
      e,
      a,
      null
    ), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, le(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = mc(a) : (e = c.cachePool, e !== null ? (i = Ml._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = As(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: e
    }), u.memoizedState = c, u.childLanes = vc(
      l,
      f,
      a
    ), t.memoizedState = dc, le(l.child, u)) : (ia(t), a = l.child, l = a.sibling, a = Yt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function hc(l, t) {
    return t = yn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function yn(l, t) {
    return l = st(22, l, null, t), l.lanes = 0, l;
  }
  function oc(l, t, a) {
    return Ya(t, l.child, null, a), l = hc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function B0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Nf(l.return, t, a);
  }
  function rc(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
  }
  function Y0(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = Tl.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, M(Tl, f), Xl(l, t, u, a), u = w ? Xu : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && B0(l, a, t);
        else if (l.tag === 19)
          B0(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && Fe(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), rc(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Fe(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        rc(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        rc(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ma |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (nu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = Yt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Yt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Le(l)));
  }
  function wm(l, t, a) {
    switch (t.tag) {
      case 3:
        Wl(t, t.stateNode.containerInfo), ea(t, Ml, l.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ea(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Zf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (ia(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? q0(l, t, a) : (ia(t), l = Lt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        ia(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (nu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Y0(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), M(Tl, Tl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, p0(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ea(t, Ml, l.memoizedState.cache);
    }
    return Lt(l, t, a);
  }
  function x0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!Sc(l, a) && (t.flags & 128) === 0)
          return Dl = !1, wm(
            l,
            t,
            a
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, w && (t.flags & 1048576) !== 0 && rs(t, Xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = qa(t.elementType), t.type = l, typeof l == "function")
            Ef(l) ? (u = Ga(l, u), t.tag = 1, t = j0(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = yc(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Ll) {
                t.tag = 11, t = O0(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === Q) {
                t.tag = 14, t = D0(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = $(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return yc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Ga(
          u,
          t.pendingProps
        ), j0(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Wl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), $u(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, ea(t, Ml, u), u !== n.cache && Hf(
            t,
            [Ml],
            a,
            !0
          ), Wu(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = C0(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = zt(
                Error(o(424)),
                t
              ), Zu(e), t = C0(
                l,
                t,
                u,
                a
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, dl = Mt(l.firstChild), Gl = t, w = !0, aa = null, At = !0, a = ps(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ha(), u === e) {
              t = Lt(
                l,
                t,
                a
              );
              break l;
            }
            Xl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = $y(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : w || (a = t.type, l = t.pendingProps, u = On(
          X.current
        ).createElement(a), u[xl] = t, u[kl] = l, Zl(u, a, l), ql(u), t.stateNode = u) : t.memoizedState = $y(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ou(t), l === null && w && (u = t.stateNode = Jy(
          t.type,
          t.pendingProps,
          X.current
        ), Gl = t, At = !0, e = dl, Sa(t.type) ? (kc = e, dl = Mt(u.firstChild)) : dl = e), Xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && w && ((e = u = dl) && (u = Av(
          u,
          t.type,
          t.pendingProps,
          At
        ), u !== null ? (t.stateNode = u, Gl = t, dl = Mt(u.firstChild), At = !1, e = !0) : e = !1), e || ua(t)), Ou(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Kc(e, n) ? u = null : f !== null && Kc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          xm,
          null,
          null,
          a
        ), oe._currentValue = e), sn(l, t), Xl(l, t, u, a), t.child;
      case 6:
        return l === null && w && ((l = a = dl) && (a = _v(
          a,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, Gl = t, dl = null, l = !0) : l = !1), l || ua(t)), null;
      case 13:
        return q0(l, t, a);
      case 4:
        return Wl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ya(
          t,
          null,
          u,
          a
        ) : Xl(l, t, u, a), t.child;
      case 11:
        return O0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Xl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, ea(t, t.type, u.value), Xl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, ja(t), e = Ql(e), u = u(e), t.flags |= 1, Xl(l, t, u, a), t.child;
      case 14:
        return D0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return U0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Y0(l, t, a);
      case 31:
        return Jm(l, t, a);
      case 22:
        return p0(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ja(t), u = Ql(Ml), l === null ? (e = Cf(), e === null && (e = yl, n = Rf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Bf(t), ea(t, Ml, e)) : ((l.lanes & a) !== 0 && (Yf(l, t), $u(t, null, null, a), Wu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), ea(t, Ml, u)) : (u = n.cache, ea(t, Ml, u), u !== e.cache && Hf(
          t,
          [Ml],
          a,
          !0
        ))), Xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Vt(l) {
    l.flags |= 4;
  }
  function gc(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dy()) l.flags |= 8192;
        else
          throw Ba = we, qf;
    } else l.flags &= -16777217;
  }
  function G0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ld(t))
      if (dy()) l.flags |= 8192;
      else
        throw Ba = we, qf;
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? gi() : 536870912, l.lanes |= t, Su |= t);
  }
  function te(l, t) {
    if (!w)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function Wm(l, t, a) {
    var u = t.pendingProps;
    switch (Of(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Qt(Ml), zl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (eu(t) ? Vt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uf())), ml(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Vt(t), n !== null ? (ml(t), G0(t, n)) : (ml(t), gc(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Vt(t), ml(t), G0(t, n)) : (ml(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Vt(t), ml(t), gc(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (Te(t), a = X.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Vt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ml(t), null;
          }
          l = U.current, eu(t) ? gs(t) : (l = Jy(e, u, a), t.stateNode = l, Vt(t));
        }
        return ml(t), null;
      case 5:
        if (Te(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Vt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ml(t), null;
          }
          if (n = U.current, eu(t))
            gs(t);
          else {
            var f = On(
              X.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[xl] = t, n[kl] = u;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Zl(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Vt(t);
          }
        }
        return ml(t), gc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Vt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = X.current, eu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Gl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[xl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || qy(l.nodeValue, a)), l || ua(t, !0);
          } else
            l = On(l).createTextNode(
              u
            ), l[xl] = t, t.stateNode = l;
        }
        return ml(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = eu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[xl] = t;
            } else
              Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), l = !1;
          } else
            a = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return ml(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = eu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
              e[xl] = t;
            } else
              Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), e = !1;
          } else
            e = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), dn(t, t.updateQueue), ml(t), null);
      case 4:
        return zl(), l === null && Qc(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return Qt(t.type), ml(t), null;
      case 19:
        if (T(Tl), u = t.memoizedState, u === null) return ml(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) te(u, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Fe(l), n !== null) {
                  for (t.flags |= 128, te(u, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    vs(a, l), a = a.sibling;
                  return M(
                    Tl,
                    Tl.current & 1 | 2
                  ), w && xt(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && nt() > rn && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Fe(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), te(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !w)
                return ml(t), null;
            } else
              2 * nt() - u.renderingStartTime > rn && a !== 536870912 && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = nt(), l.sibling = null, a = Tl.current, M(
          Tl,
          e ? a & 1 | 2 : a & 1
        ), w && xt(t, u.treeForkCount), l) : (ml(t), null);
      case 22:
      case 23:
        return dt(t), Xf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), a = t.updateQueue, a !== null && dn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && T(Ca), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qt(Ml), ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function $m(l, t) {
    switch (Of(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Qt(Ml), zl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(o(340));
          Ha();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ha();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(Tl), null;
      case 4:
        return zl(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return dt(t), Xf(), l !== null && T(Ca), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Qt(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q0(l, t) {
    switch (Of(t), t.tag) {
      case 3:
        Qt(Ml), zl();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        zl();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        T(Tl);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        dt(t), Xf(), l !== null && T(Ca);
        break;
      case 24:
        Qt(Ml);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      el(t, t.return, c);
    }
  }
  function ya(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = a, v = c;
              try {
                v();
              } catch (g) {
                el(
                  e,
                  i,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      el(t, t.return, g);
    }
  }
  function X0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Hs(t, a);
      } catch (u) {
        el(l, l.return, u);
      }
    }
  }
  function Z0(l, t, a) {
    a.props = Ga(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      el(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      el(l, t, e);
    }
  }
  function Rt(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          el(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          el(l, t, e);
        }
      else a.current = null;
  }
  function L0(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function bc(l, t, a) {
    try {
      var u = l.stateNode;
      Sv(u, l.type, a, t), u[kl] = t;
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function V0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Sa(l.type) || l.tag === 4;
  }
  function zc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || V0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Sa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = qt));
    else if (u !== 4 && (u === 27 && Sa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (Tc(l, t, a), l = l.sibling; l !== null; )
        Tc(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && Sa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (mn(l, t, a), l = l.sibling; l !== null; )
        mn(l, t, a), l = l.sibling;
  }
  function K0(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Zl(t, u, a), t[xl] = l, t[kl] = a;
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Kt = !1, Ul = !1, Ec = !1, J0 = typeof WeakSet == "function" ? WeakSet : Set, Bl = null;
  function km(l, t) {
    if (l = l.containerInfo, Lc = jn, l = es(l), of(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, c = -1, i = -1, v = 0, g = 0, z = l, h = null;
            t: for (; ; ) {
              for (var r; z !== a || e !== 0 && z.nodeType !== 3 || (c = f + e), z !== n || u !== 0 && z.nodeType !== 3 || (i = f + u), z.nodeType === 3 && (f += z.nodeValue.length), (r = z.firstChild) !== null; )
                h = z, z = r;
              for (; ; ) {
                if (z === l) break t;
                if (h === a && ++v === e && (c = f), h === n && ++g === u && (i = f), (r = z.nextSibling) !== null) break;
                z = h, h = z.parentNode;
              }
              z = r;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vc = { focusedElem: l, selectionRange: a }, jn = !1, Bl = t; Bl !== null; )
      if (t = Bl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Bl = l;
      else
        for (; Bl !== null; ) {
          switch (t = Bl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var D = Ga(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    D,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (j) {
                  el(
                    a,
                    a.return,
                    j
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  wc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wc(l);
                      break;
                    default:
                      l.textContent = "";
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
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Bl = l;
            break;
          }
          Bl = t.return;
        }
  }
  function w0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        wt(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if (wt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              el(a, a.return, f);
            }
          else {
            var e = Ga(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              el(
                a,
                a.return,
                f
              );
            }
          }
        u & 64 && X0(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if (wt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Hs(l, t);
          } catch (f) {
            el(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && K0(a);
      case 26:
      case 5:
        wt(l, a), t === null && u & 4 && L0(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        wt(l, a);
        break;
      case 31:
        wt(l, a), u & 4 && k0(l, a);
        break;
      case 13:
        wt(l, a), u & 4 && F0(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = nv.bind(
          null,
          a
        ), Mv(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Kt, !u) {
          t = t !== null && t.memoizedState !== null || Ul, e = Kt;
          var n = Ul;
          Kt = u, (Ul = t) && !n ? Wt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : wt(l, a), Kt = e, Ul = n;
        }
        break;
      case 30:
        break;
      default:
        wt(l, a);
    }
  }
  function W0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, W0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, Il = !1;
  function Jt(l, t, a) {
    for (a = a.child; a !== null; )
      $0(l, t, a), a = a.sibling;
  }
  function $0(l, t, a) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(Du, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Ul || Rt(a, t), Jt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ul || Rt(a, t);
        var u = hl, e = Il;
        Sa(a.type) && (hl = a.stateNode, Il = !1), Jt(
          l,
          t,
          a
        ), me(a.stateNode), hl = u, Il = e;
        break;
      case 5:
        Ul || Rt(a, t);
      case 6:
        if (u = hl, e = Il, hl = null, Jt(
          l,
          t,
          a
        ), hl = u, Il = e, hl !== null)
          if (Il)
            try {
              (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(a.stateNode);
            } catch (n) {
              el(
                a,
                t,
                n
              );
            }
          else
            try {
              hl.removeChild(a.stateNode);
            } catch (n) {
              el(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        hl !== null && (Il ? (l = hl, Xy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Mu(l)) : Xy(hl, a.stateNode));
        break;
      case 4:
        u = hl, e = Il, hl = a.stateNode.containerInfo, Il = !0, Jt(
          l,
          t,
          a
        ), hl = u, Il = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ya(2, a, t), Ul || ya(4, a, t), Jt(
          l,
          t,
          a
        );
        break;
      case 1:
        Ul || (Rt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Z0(
          a,
          t,
          u
        )), Jt(
          l,
          t,
          a
        );
        break;
      case 21:
        Jt(
          l,
          t,
          a
        );
        break;
      case 22:
        Ul = (u = Ul) || a.memoizedState !== null, Jt(
          l,
          t,
          a
        ), Ul = u;
        break;
      default:
        Jt(
          l,
          t,
          a
        );
    }
  }
  function k0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Mu(l);
      } catch (a) {
        el(t, t.return, a);
      }
    }
  }
  function F0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Mu(l);
      } catch (a) {
        el(t, t.return, a);
      }
  }
  function Fm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new J0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new J0()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function vn(l, t) {
    var a = Fm(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = fv.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Pl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Sa(c.type)) {
                hl = c.stateNode, Il = !1;
                break l;
              }
              break;
            case 5:
              hl = c.stateNode, Il = !1;
              break l;
            case 3:
            case 4:
              hl = c.stateNode.containerInfo, Il = !0;
              break l;
          }
          c = c.return;
        }
        if (hl === null) throw Error(o(160));
        $0(n, f, e), hl = null, Il = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        I0(t, l), t = t.sibling;
  }
  var Ut = null;
  function I0(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pl(t, l), lt(l), u & 4 && (ya(3, l, l.return), ae(3, l), ya(5, l, l.return));
        break;
      case 1:
        Pl(t, l), lt(l), u & 512 && (Ul || a === null || Rt(a, a.return)), u & 64 && Kt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = Ut;
        if (Pl(t, l), lt(l), u & 512 && (Ul || a === null || Rt(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Nu] || n[xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Zl(n, u, a), n[xl] = l, ql(n), u = n;
                      break l;
                    case "link":
                      var f = Iy(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Zl(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Iy(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Zl(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, u));
                  }
                  n[xl] = l, ql(n), u = n;
                }
                l.stateNode = u;
              } else
                Py(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Fy(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Py(
              e,
              l.type,
              l.stateNode
            ) : Fy(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && bc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Pl(t, l), lt(l), u & 512 && (Ul || a === null || Rt(a, a.return)), a !== null && u & 4 && bc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Pl(t, l), lt(l), u & 512 && (Ul || a === null || Rt(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wa(e, "");
          } catch (D) {
            el(l, l.return, D);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, bc(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (Ec = !0);
        break;
      case 6:
        if (Pl(t, l), lt(l), u & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (D) {
            el(l, l.return, D);
          }
        }
        break;
      case 3:
        if (pn = null, e = Ut, Ut = Dn(t.containerInfo), Pl(t, l), Ut = e, lt(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Mu(t.containerInfo);
          } catch (D) {
            el(l, l.return, D);
          }
        Ec && (Ec = !1, P0(l));
        break;
      case 4:
        u = Ut, Ut = Dn(
          l.stateNode.containerInfo
        ), Pl(t, l), lt(l), Ut = u;
        break;
      case 12:
        Pl(t, l), lt(l);
        break;
      case 31:
        Pl(t, l), lt(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, vn(l, u)));
        break;
      case 13:
        Pl(t, l), lt(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (on = nt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, vn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, v = Kt, g = Ul;
        if (Kt = v || e, Ul = g || i, Pl(t, l), Ul = g, Kt = v, lt(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Kt || Ul || Qa(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var z = i.memoizedProps.style, h = z != null && z.hasOwnProperty("display") ? z.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (D) {
                  el(i, i.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (D) {
                  el(i, i.return, D);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var r = i.stateNode;
                  e ? Zy(r, !0) : Zy(i.stateNode, !1);
                } catch (D) {
                  el(i, i.return, D);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, vn(l, a))));
        break;
      case 19:
        Pl(t, l), lt(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, vn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pl(t, l), lt(l);
    }
  }
  function lt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (V0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = zc(l);
            mn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Wa(f, ""), a.flags &= -33);
            var c = zc(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, v = zc(l);
            Tc(
              l,
              v,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        el(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function P0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        P0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        w0(l, t.alternate, t), t = t.sibling;
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ya(4, t, t.return), Qa(t);
          break;
        case 1:
          Rt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Z0(
            t,
            t.return,
            a
          ), Qa(t);
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          Rt(t, t.return), Qa(t);
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wt(
            e,
            n,
            a
          ), ae(4, n);
          break;
        case 1:
          if (Wt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (v) {
              el(u, u.return, v);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ns(i[e], c);
            } catch (v) {
              el(u, u.return, v);
            }
          }
          a && f & 64 && X0(n), ue(n, n.return);
          break;
        case 27:
          K0(n);
        case 26:
        case 5:
          Wt(
            e,
            n,
            a
          ), a && u === null && f & 4 && L0(n), ue(n, n.return);
          break;
        case 12:
          Wt(
            e,
            n,
            a
          );
          break;
        case 31:
          Wt(
            e,
            n,
            a
          ), a && f & 4 && k0(e, n);
          break;
        case 13:
          Wt(
            e,
            n,
            a
          ), a && f & 4 && F0(e, n);
          break;
        case 22:
          n.memoizedState === null && Wt(
            e,
            n,
            a
          ), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          Wt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function _c(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l));
  }
  function pt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ly(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function ly(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pt(
          l,
          t,
          a,
          u
        ), e & 2048 && ae(9, t);
        break;
      case 1:
        pt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        pt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (e & 2048) {
          pt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            el(t, t.return, i);
          }
        } else
          pt(
            l,
            t,
            a,
            u
          );
        break;
      case 31:
        pt(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        pt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? pt(
          l,
          t,
          a,
          u
        ) : ee(l, t) : n._visibility & 2 ? pt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, hu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Ac(f, t);
        break;
      case 24:
        pt(
          l,
          t,
          a,
          u
        ), e & 2048 && _c(t.alternate, t);
        break;
      default:
        pt(
          l,
          t,
          a,
          u
        );
    }
  }
  function hu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = a, i = u, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          hu(
            n,
            f,
            c,
            i,
            e
          ), ae(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? hu(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (g._visibility |= 2, hu(
            n,
            f,
            c,
            i,
            e
          )), e && v & 2048 && Ac(
            f.alternate,
            f
          );
          break;
        case 24:
          hu(
            n,
            f,
            c,
            i,
            e
          ), e && v & 2048 && _c(f.alternate, f);
          break;
        default:
          hu(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && Ac(
              u.alternate,
              u
            );
            break;
          case 24:
            ee(a, u), e & 2048 && _c(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function ou(l, t, a) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ty(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function ty(l, t, a) {
    switch (l.tag) {
      case 26:
        ou(
          l,
          t,
          a
        ), l.flags & ne && l.memoizedState !== null && Yv(
          a,
          Ut,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ou(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = Ut;
        Ut = Dn(l.stateNode.containerInfo), ou(
          l,
          t,
          a
        ), Ut = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ne, ne = 16777216, ou(
          l,
          t,
          a
        ), ne = u) : ou(
          l,
          t,
          a
        ));
        break;
      default:
        ou(
          l,
          t,
          a
        );
    }
  }
  function ay(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Bl = u, ey(
            u,
            l
          );
        }
      ay(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        uy(l), l = l.sibling;
  }
  function uy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && ya(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Bl = u, ey(
            u,
            l
          );
        }
      ay(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, t, t.return), hn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ey(l, t) {
    for (; Bl !== null; ) {
      var a = Bl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Lu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Bl = u;
      else
        l: for (a = l; Bl !== null; ) {
          u = Bl;
          var e = u.sibling, n = u.return;
          if (W0(u), u === a) {
            Bl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Bl = e;
            break l;
          }
          Bl = n;
        }
    }
  }
  var Im = {
    getCacheForType: function(l) {
      var t = Ql(Ml), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Ql(Ml).controller.signal;
    }
  }, Pm = typeof WeakMap == "function" ? WeakMap : Map, P = 0, yl = null, Z = null, V = 0, ul = 0, mt = null, da = !1, ru = !1, Mc = !1, $t = 0, gl = 0, ma = 0, Xa = 0, Oc = 0, vt = 0, Su = 0, ce = null, tt = null, Dc = !1, on = 0, ny = 0, rn = 1 / 0, Sn = null, va = null, Hl = 0, ha = null, gu = null, kt = 0, Uc = 0, pc = null, fy = null, ie = 0, Nc = null;
  function ht() {
    return (P & 2) !== 0 && V !== 0 ? V & -V : S.T !== null ? Bc() : Ei();
  }
  function cy() {
    if (vt === 0)
      if ((V & 536870912) === 0 || w) {
        var l = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), vt = l;
      } else vt = 536870912;
    return l = yt.current, l !== null && (l.flags |= 32), vt;
  }
  function at(l, t, a) {
    (l === yl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (bu(l, 0), oa(
      l,
      V,
      vt,
      !1
    )), pu(l, a), ((P & 2) === 0 || l !== yl) && (l === yl && ((P & 2) === 0 && (Xa |= a), gl === 4 && oa(
      l,
      V,
      vt,
      !1
    )), jt(l));
  }
  function iy(l, t, a) {
    if ((P & 6) !== 0) throw Error(o(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Uu(l, t), e = u ? av(l, t) : Rc(l, t, !0), n = u;
    do {
      if (e === 0) {
        ru && !u && oa(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !lv(a)) {
          e = Rc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ce;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (bu(c, f).flags |= 256), f = Rc(
                c,
                f,
                !1
              ), f !== 2) {
                if (Mc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Xa |= n, e = 4;
                  break l;
                }
                n = tt, tt = e, n !== null && (tt === null ? tt = n : tt.push.apply(
                  tt,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          bu(l, 0), oa(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              oa(
                u,
                t,
                vt,
                !da
              );
              break l;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (e = on + 300 - nt(), 10 < e)) {
            if (oa(
              u,
              t,
              vt,
              !da
            ), Oe(u, 0, !0) !== 0) break l;
            kt = t, u.timeoutHandle = Gy(
              sy.bind(
                null,
                u,
                a,
                tt,
                Sn,
                Dc,
                t,
                vt,
                Xa,
                Su,
                da,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          sy(
            u,
            a,
            tt,
            Sn,
            Dc,
            t,
            vt,
            Xa,
            Su,
            da,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    jt(l);
  }
  function sy(l, t, a, u, e, n, f, c, i, v, g, z, h, r) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt
      }, ty(
        t,
        n,
        z
      );
      var D = (n & 62914560) === n ? on - nt() : (n & 4194048) === n ? ny - nt() : 0;
      if (D = xv(
        z,
        D
      ), D !== null) {
        kt = n, l.cancelPendingCommit = D(
          Sy.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            f,
            c,
            i,
            g,
            z,
            null,
            h,
            r
          )
        ), oa(l, n, f, !v);
        return;
      }
    }
    Sy(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      c,
      i
    );
  }
  function lv(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!it(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function oa(l, t, a, u) {
    t &= ~Oc, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ct(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && bi(l, a, t);
  }
  function gn() {
    return (P & 6) === 0 ? (se(0), !1) : !0;
  }
  function Hc() {
    if (Z !== null) {
      if (ul === 0)
        var l = Z.return;
      else
        l = Z, Gt = Ra = null, wf(l), su = null, Ku = 0, l = Z;
      for (; l !== null; )
        Q0(l.alternate, l), l = l.return;
      Z = null;
    }
  }
  function bu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, zv(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), kt = 0, Hc(), yl = l, Z = a = Yt(l.current, null), V = t, ul = 0, mt = null, da = !1, ru = Uu(l, t), Mc = !1, Su = vt = Oc = Xa = ma = gl = 0, tt = ce = null, Dc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - ct(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return $t = t, xe(), a;
  }
  function yy(l, t) {
    x = null, S.H = Pu, t === iu || t === Je ? (t = Os(), ul = 3) : t === qf ? (t = Os(), ul = 4) : ul = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mt = t, Z === null && (gl = 1, fn(
      l,
      zt(t, l.current)
    ));
  }
  function dy() {
    var l = yt.current;
    return l === null ? !0 : (V & 4194048) === V ? _t === null : (V & 62914560) === V || (V & 536870912) !== 0 ? l === _t : !1;
  }
  function my() {
    var l = S.H;
    return S.H = Pu, l === null ? Pu : l;
  }
  function vy() {
    var l = S.A;
    return S.A = Im, l;
  }
  function bn() {
    gl = 4, da || (V & 4194048) !== V && yt.current !== null || (ru = !0), (ma & 134217727) === 0 && (Xa & 134217727) === 0 || yl === null || oa(
      yl,
      V,
      vt,
      !1
    );
  }
  function Rc(l, t, a) {
    var u = P;
    P |= 2;
    var e = my(), n = vy();
    (yl !== l || V !== t) && (Sn = null, bu(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (ul !== 0 && Z !== null) {
          var c = Z, i = mt;
          switch (ul) {
            case 8:
              Hc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var v = ul;
              if (ul = 0, mt = null, zu(l, c, i, v), a && ru) {
                f = 0;
                break l;
              }
              break;
            default:
              v = ul, ul = 0, mt = null, zu(l, c, i, v);
          }
        }
        tv(), f = gl;
        break;
      } catch (g) {
        yy(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Gt = Ra = null, P = u, S.H = e, S.A = n, Z === null && (yl = null, V = 0, xe()), f;
  }
  function tv() {
    for (; Z !== null; ) hy(Z);
  }
  function av(l, t) {
    var a = P;
    P |= 2;
    var u = my(), e = vy();
    yl !== l || V !== t ? (Sn = null, rn = nt() + 500, bu(l, t)) : ru = Uu(
      l,
      t
    );
    l: do
      try {
        if (ul !== 0 && Z !== null) {
          t = Z;
          var n = mt;
          t: switch (ul) {
            case 1:
              ul = 0, mt = null, zu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_s(n)) {
                ul = 0, mt = null, oy(t);
                break;
              }
              t = function() {
                ul !== 2 && ul !== 9 || yl !== l || (ul = 7), jt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ul = 7;
              break l;
            case 4:
              ul = 5;
              break l;
            case 7:
              _s(n) ? (ul = 0, mt = null, oy(t)) : (ul = 0, mt = null, zu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (f ? ld(f) : c.stateNode.complete) {
                    ul = 0, mt = null;
                    var i = c.sibling;
                    if (i !== null) Z = i;
                    else {
                      var v = c.return;
                      v !== null ? (Z = v, zn(v)) : Z = null;
                    }
                    break t;
                  }
              }
              ul = 0, mt = null, zu(l, t, n, 5);
              break;
            case 6:
              ul = 0, mt = null, zu(l, t, n, 6);
              break;
            case 8:
              Hc(), gl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        uv();
        break;
      } catch (g) {
        yy(l, g);
      }
    while (!0);
    return Gt = Ra = null, S.H = u, S.A = e, P = a, Z !== null ? 0 : (yl = null, V = 0, xe(), gl);
  }
  function uv() {
    for (; Z !== null && !Od(); )
      hy(Z);
  }
  function hy(l) {
    var t = x0(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Z = t;
  }
  function oy(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = R0(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          V
        );
        break;
      case 11:
        t = R0(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          V
        );
        break;
      case 5:
        wf(t);
      default:
        Q0(a, t), t = Z = vs(t, $t), t = x0(a, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Z = t;
  }
  function zu(l, t, a, u) {
    Gt = Ra = null, wf(t), su = null, Ku = 0;
    var e = t.return;
    try {
      if (Km(
        l,
        e,
        t,
        a,
        V
      )) {
        gl = 1, fn(
          l,
          zt(a, l.current)
        ), Z = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Z = e, n;
      gl = 1, fn(
        l,
        zt(a, l.current)
      ), Z = null;
      return;
    }
    t.flags & 32768 ? (w || u === 1 ? l = !0 : ru || (V & 536870912) !== 0 ? l = !1 : (da = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = yt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), ry(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ry(
          t,
          da
        );
        return;
      }
      l = t.return;
      var a = Wm(
        t.alternate,
        t,
        $t
      );
      if (a !== null) {
        Z = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function ry(l, t) {
    do {
      var a = $m(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, Z = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        Z = l;
        return;
      }
      Z = l = a;
    } while (l !== null);
    gl = 6, Z = null;
  }
  function Sy(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      Tn();
    while (Hl !== 0);
    if ((P & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= zf, Bd(
        l,
        a,
        n,
        f,
        c,
        i
      ), l === yl && (Z = yl = null, V = 0), gu = t, ha = l, kt = a, Uc = n, pc = e, fy = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, cv(Ee, function() {
        return Ey(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null, e = A.p, A.p = 2, f = P, P |= 4;
        try {
          km(l, t, a);
        } finally {
          P = f, A.p = e, S.T = u;
        }
      }
      Hl = 1, gy(), by(), zy();
    }
  }
  function gy() {
    if (Hl === 1) {
      Hl = 0;
      var l = ha, t = gu, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var u = A.p;
        A.p = 2;
        var e = P;
        P |= 4;
        try {
          I0(t, l);
          var n = Vc, f = es(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && us(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && of(c)) {
              var v = i.start, g = i.end;
              if (g === void 0 && (g = v), "selectionStart" in c)
                c.selectionStart = v, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, h = z && z.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), D = c.textContent.length, j = Math.min(i.start, D), cl = i.end === void 0 ? j : Math.min(i.end, D);
                  !r.extend && j > cl && (f = cl, cl = j, j = f);
                  var d = as(
                    c,
                    j
                  ), s = as(
                    c,
                    cl
                  );
                  if (d && s && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== s.node || r.focusOffset !== s.offset)) {
                    var m = z.createRange();
                    m.setStart(d.node, d.offset), r.removeAllRanges(), j > cl ? (r.addRange(m), r.extend(s.node, s.offset)) : (m.setEnd(s.node, s.offset), r.addRange(m));
                  }
                }
              }
            }
            for (z = [], r = c; r = r.parentNode; )
              r.nodeType === 1 && z.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var b = z[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          jn = !!Lc, Vc = Lc = null;
        } finally {
          P = e, A.p = u, S.T = a;
        }
      }
      l.current = t, Hl = 2;
    }
  }
  function by() {
    if (Hl === 2) {
      Hl = 0;
      var l = ha, t = gu, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var u = A.p;
        A.p = 2;
        var e = P;
        P |= 4;
        try {
          w0(l, t.alternate, t);
        } finally {
          P = e, A.p = u, S.T = a;
        }
      }
      Hl = 3;
    }
  }
  function zy() {
    if (Hl === 4 || Hl === 3) {
      Hl = 0, Dd();
      var l = ha, t = gu, a = kt, u = fy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Hl = 5 : (Hl = 0, gu = ha = null, Ty(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (va = null), $n(a), t = t.stateNode, ft && typeof ft.onCommitFiberRoot == "function")
        try {
          ft.onCommitFiberRoot(
            Du,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = S.T, e = A.p, A.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, A.p = e;
        }
      }
      (kt & 3) !== 0 && Tn(), jt(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Nc ? ie++ : (ie = 0, Nc = l) : ie = 0, se(0);
    }
  }
  function Ty(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Lu(t)));
  }
  function Tn() {
    return gy(), by(), zy(), Ey();
  }
  function Ey() {
    if (Hl !== 5) return !1;
    var l = ha, t = Uc;
    Uc = 0;
    var a = $n(kt), u = S.T, e = A.p;
    try {
      A.p = 32 > a ? 32 : a, S.T = null, a = pc, pc = null;
      var n = ha, f = kt;
      if (Hl = 0, gu = ha = null, kt = 0, (P & 6) !== 0) throw Error(o(331));
      var c = P;
      if (P |= 4, uy(n.current), ly(
        n,
        n.current,
        f,
        a
      ), P = c, se(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function")
        try {
          ft.onPostCommitFiberRoot(Du, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = e, S.T = u, Ty(l, t);
    }
  }
  function Ay(l, t, a) {
    t = zt(a, t), t = ic(l.stateNode, t, 2), l = ca(l, t, 2), l !== null && (pu(l, 2), jt(l));
  }
  function el(l, t, a) {
    if (l.tag === 3)
      Ay(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ay(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (va === null || !va.has(u))) {
            l = zt(a, l), a = _0(2), u = ca(t, a, 2), u !== null && (M0(
              a,
              u,
              t,
              l
            ), pu(u, 2), jt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function jc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Pm();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (Mc = !0, e.add(a), l = ev.bind(null, l, t, a), t.then(l, l));
  }
  function ev(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && (V & a) === a && (gl === 4 || gl === 3 && (V & 62914560) === V && 300 > nt() - on ? (P & 2) === 0 && bu(l, 0) : Oc |= a, Su === V && (Su = 0)), jt(l);
  }
  function _y(l, t) {
    t === 0 && (t = gi()), l = pa(l, t), l !== null && (pu(l, t), jt(l));
  }
  function nv(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), _y(l, a);
  }
  function fv(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(t), _y(l, a);
  }
  function cv(l, t) {
    return Kn(l, t);
  }
  var En = null, Tu = null, Cc = !1, An = !1, qc = !1, ra = 0;
  function jt(l) {
    l !== Tu && l.next === null && (Tu === null ? En = Tu = l : Tu = Tu.next = l), An = !0, Cc || (Cc = !0, sv());
  }
  function se(l, t) {
    if (!qc && An) {
      qc = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - ct(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Uy(u, n));
          } else
            n = V, n = Oe(
              u,
              u === yl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Uu(u, n) || (a = !0, Uy(u, n));
          u = u.next;
        }
      while (a);
      qc = !1;
    }
  }
  function iv() {
    My();
  }
  function My() {
    An = Cc = !1;
    var l = 0;
    ra !== 0 && bv() && (l = ra);
    for (var t = nt(), a = null, u = En; u !== null; ) {
      var e = u.next, n = Oy(u, t);
      n === 0 ? (u.next = null, a === null ? En = e : a.next = e, e === null && (Tu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (An = !0)), u = e;
    }
    Hl !== 0 && Hl !== 5 || se(l), ra !== 0 && (ra = 0);
  }
  function Oy(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ct(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = qd(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = yl, a = V, a = Oe(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Jn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Uu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Jn(u), $n(a)) {
        case 2:
        case 8:
          a = ri;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = Si;
          break;
        default:
          a = Ee;
      }
      return u = Dy.bind(null, l), a = Kn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Jn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Dy(l, t) {
    if (Hl !== 0 && Hl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a)
      return null;
    var u = V;
    return u = Oe(
      l,
      l === yl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (iy(l, u, t), Oy(l, nt()), l.callbackNode != null && l.callbackNode === a ? Dy.bind(null, l) : null);
  }
  function Uy(l, t) {
    if (Tn()) return null;
    iy(l, t, !0);
  }
  function sv() {
    Tv(function() {
      (P & 6) !== 0 ? Kn(
        oi,
        iv
      ) : My();
    });
  }
  function Bc() {
    if (ra === 0) {
      var l = fu;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), ra = l;
    }
    return ra;
  }
  function py(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ne("" + l);
  }
  function Ny(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function yv(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = py(
        (e[kl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[kl] || null) ? py(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ce(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ra !== 0) {
                  var i = f ? Ny(e, f) : new FormData(e);
                  ac(
                    a,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Ny(e, f) : new FormData(e), ac(
                  a,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Yc = 0; Yc < bf.length; Yc++) {
    var xc = bf[Yc], dv = xc.toLowerCase(), mv = xc[0].toUpperCase() + xc.slice(1);
    Dt(
      dv,
      "on" + mv
    );
  }
  Dt(cs, "onAnimationEnd"), Dt(is, "onAnimationIteration"), Dt(ss, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Um, "onTransitionRun"), Dt(pm, "onTransitionStart"), Dt(Nm, "onTransitionCancel"), Dt(ys, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ma(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ma(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ma("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ma(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ma(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ma(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye)
  );
  function Hy(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, v = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
            try {
              n(e);
            } catch (g) {
              Ye(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, v = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
            try {
              n(e);
            } catch (g) {
              Ye(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function L(l, t) {
    var a = t[kn];
    a === void 0 && (a = t[kn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Ry(t, l, 2, !1), a.add(u));
  }
  function Gc(l, t, a) {
    var u = 0;
    t && (u |= 4), Ry(
      a,
      l,
      u,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(l) {
    if (!l[_n]) {
      l[_n] = !0, Mi.forEach(function(a) {
        a !== "selectionchange" && (vv.has(a) || Gc(a, !1, l), Gc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, Gc("selectionchange", !1, t));
    }
  }
  function Ry(l, t, a, u) {
    switch (cd(t)) {
      case 2:
        var e = Xv;
        break;
      case 8:
        e = Zv;
        break;
      default:
        e = ti;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Xc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = La(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Yi(function() {
      var v = n, g = uf(a), z = [];
      l: {
        var h = ds.get(l);
        if (h !== void 0) {
          var r = Ce, D = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = fm;
              break;
            case "focusin":
              D = "focus", r = yf;
              break;
            case "focusout":
              D = "blur", r = yf;
              break;
            case "beforeblur":
            case "afterblur":
              r = yf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = Wd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = sm;
              break;
            case cs:
            case is:
            case ss:
              r = Fd;
              break;
            case ys:
              r = dm;
              break;
            case "scroll":
            case "scrollend":
              r = Jd;
              break;
            case "wheel":
              r = vm;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Pd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Zi;
              break;
            case "toggle":
            case "beforetoggle":
              r = om;
          }
          var j = (t & 4) !== 0, cl = !j && (l === "scroll" || l === "scrollend"), d = j ? h !== null ? h + "Capture" : null : h;
          j = [];
          for (var s = v, m; s !== null; ) {
            var b = s;
            if (m = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || m === null || d === null || (b = Ru(s, d), b != null && j.push(
              de(s, b, m)
            )), cl) break;
            s = s.return;
          }
          0 < j.length && (h = new r(
            h,
            D,
            null,
            a,
            g
          ), z.push({ event: h, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && a !== af && (D = a.relatedTarget || a.fromElement) && (La(D) || D[Za]))
            break l;
          if ((r || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (D = a.relatedTarget || a.toElement, r = v, D = D ? La(D) : null, D !== null && (cl = vl(D), j = D.tag, D !== cl || j !== 5 && j !== 27 && j !== 6) && (D = null)) : (r = null, D = v), r !== D)) {
            if (j = Qi, b = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (j = Zi, b = "onPointerLeave", d = "onPointerEnter", s = "pointer"), cl = r == null ? h : Hu(r), m = D == null ? h : Hu(D), h = new j(
              b,
              s + "leave",
              r,
              a,
              g
            ), h.target = cl, h.relatedTarget = m, b = null, La(g) === v && (j = new j(
              d,
              s + "enter",
              D,
              a,
              g
            ), j.target = m, j.relatedTarget = cl, b = j), cl = b, r && D)
              t: {
                for (j = hv, d = r, s = D, m = 0, b = d; b; b = j(b))
                  m++;
                b = 0;
                for (var H = s; H; H = j(H))
                  b++;
                for (; 0 < m - b; )
                  d = j(d), m--;
                for (; 0 < b - m; )
                  s = j(s), b--;
                for (; m--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    j = d;
                    break t;
                  }
                  d = j(d), s = j(s);
                }
                j = null;
              }
            else j = null;
            r !== null && jy(
              z,
              h,
              r,
              j,
              !1
            ), D !== null && cl !== null && jy(
              z,
              cl,
              D,
              j,
              !0
            );
          }
        }
        l: {
          if (h = v ? Hu(v) : window, r = h.nodeName && h.nodeName.toLowerCase(), r === "select" || r === "input" && h.type === "file")
            var F = ki;
          else if (Wi(h))
            if (Fi)
              F = Mm;
            else {
              F = Am;
              var p = Em;
            }
          else
            r = h.nodeName, !r || r.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? v && tf(v.elementType) && (F = ki) : F = _m;
          if (F && (F = F(l, v))) {
            $i(
              z,
              F,
              a,
              g
            );
            break l;
          }
          p && p(l, h, v), l === "focusout" && v && h.type === "number" && v.memoizedProps.value != null && lf(h, "number", h.value);
        }
        switch (p = v ? Hu(v) : window, l) {
          case "focusin":
            (Wi(p) || p.contentEditable === "true") && (Ia = p, rf = v, Qu = null);
            break;
          case "focusout":
            Qu = rf = Ia = null;
            break;
          case "mousedown":
            Sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sf = !1, ns(z, a, g);
            break;
          case "selectionchange":
            if (Dm) break;
          case "keydown":
          case "keyup":
            ns(z, a, g);
        }
        var G;
        if (mf)
          l: {
            switch (l) {
              case "compositionstart":
                var K = "onCompositionStart";
                break l;
              case "compositionend":
                K = "onCompositionEnd";
                break l;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break l;
            }
            K = void 0;
          }
        else
          Fa ? Ji(l, a) && (K = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (K = "onCompositionStart");
        K && (Li && a.locale !== "ko" && (Fa || K !== "onCompositionStart" ? K === "onCompositionEnd" && Fa && (G = xi()) : (la = g, ff = "value" in la ? la.value : la.textContent, Fa = !0)), p = Mn(v, K), 0 < p.length && (K = new Xi(
          K,
          l,
          null,
          a,
          g
        ), z.push({ event: K, listeners: p }), G ? K.data = G : (G = wi(a), G !== null && (K.data = G)))), (G = Sm ? gm(l, a) : bm(l, a)) && (K = Mn(v, "onBeforeInput"), 0 < K.length && (p = new Xi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), z.push({
          event: p,
          listeners: K
        }), p.data = G)), yv(
          z,
          l,
          v,
          a,
          g
        );
      }
      Hy(z, t);
    });
  }
  function de(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ru(l, a), e != null && u.unshift(
        de(l, e, n)
      ), e = Ru(l, t), e != null && u.push(
        de(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function hv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function jy(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a, i = c.alternate, v = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || v === null || (i = v, e ? (v = Ru(a, n), v != null && f.unshift(
        de(a, v, i)
      )) : e || (v = Ru(a, n), v != null && f.push(
        de(a, v, i)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var ov = /\r\n?/g, rv = /\u0000|\uFFFD/g;
  function Cy(l) {
    return (typeof l == "string" ? l : "" + l).replace(ov, `
`).replace(rv, "");
  }
  function qy(l, t) {
    return t = Cy(t), Cy(l) === t;
  }
  function fl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Wa(l, "" + u);
        break;
      case "className":
        Ue(l, "class", u);
        break;
      case "tabIndex":
        Ue(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, a, u);
        break;
      case "style":
        qi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ne("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && fl(l, t, "name", e.name, e, null), fl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), fl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), fl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (fl(l, t, "encType", e.encType, e, null), fl(l, t, "method", e.method, e, null), fl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ne("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "onScroll":
        u != null && L("scroll", l);
        break;
      case "onScrollEnd":
        u != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Ne("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), De(l, "popover", u);
        break;
      case "xlinkActuate":
        Ct(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Ct(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Ct(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Ct(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Ct(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Ct(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Ct(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Ct(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Ct(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        De(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Vd.get(a) || a, De(l, a, u));
    }
  }
  function Zc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        qi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Wa(l, u) : (typeof u == "number" || typeof u == "bigint") && Wa(l, "" + u);
        break;
      case "onScroll":
        u != null && L("scroll", l);
        break;
      case "onScrollEnd":
        u != null && L("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Oi.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[kl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : De(l, a, u);
          }
    }
  }
  function Zl(l, t, a) {
    switch (t) {
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
        L("error", l), L("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  fl(l, t, n, f, a, null);
              }
          }
        e && fl(l, t, "srcSet", a.srcSet, a, null), u && fl(l, t, "src", a.src, a, null);
        return;
      case "input":
        L("invalid", l);
        var c = n = f = e = null, i = null, v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(o(137, t));
                  break;
                default:
                  fl(l, t, u, g, a, null);
              }
          }
        Hi(
          l,
          n,
          c,
          i,
          v,
          f,
          e,
          !1
        );
        return;
      case "select":
        L("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (c = a[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                fl(l, t, e, c, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? wa(l, !!u, t, !1) : a != null && wa(l, !!u, a, !0);
        return;
      case "textarea":
        L("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (c = a[f], c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                fl(l, t, f, c, a, null);
            }
        ji(l, u, e, n);
        return;
      case "option":
        for (i in a)
          a.hasOwnProperty(i) && (u = a[i], u != null) && (i === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : fl(l, t, i, u, a, null));
        return;
      case "dialog":
        L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l);
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++)
          L(ye[u], l);
        break;
      case "image":
        L("error", l), L("load", l);
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        L("error", l), L("load", l);
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
        for (v in a)
          if (a.hasOwnProperty(v) && (u = a[v], u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                fl(l, t, v, u, a, null);
            }
        return;
      default:
        if (tf(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Zc(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (u = a[c], u != null && fl(l, t, c, u, a, null));
  }
  function Sv(l, t, a, u) {
    switch (t) {
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
        var e = null, n = null, f = null, c = null, i = null, v = null, g = null;
        for (r in a) {
          var z = a[r];
          if (a.hasOwnProperty(r) && z != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                u.hasOwnProperty(r) || fl(l, t, r, null, u, z);
            }
        }
        for (var h in u) {
          var r = u[h];
          if (z = a[h], u.hasOwnProperty(h) && (r != null || z != null))
            switch (h) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                v = r;
                break;
              case "defaultChecked":
                g = r;
                break;
              case "value":
                f = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(o(137, t));
                break;
              default:
                r !== z && fl(
                  l,
                  t,
                  h,
                  r,
                  u,
                  z
                );
            }
        }
        Pn(
          l,
          f,
          c,
          i,
          v,
          g,
          n,
          e
        );
        return;
      case "select":
        r = f = c = h = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                u.hasOwnProperty(n) || fl(
                  l,
                  t,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && fl(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = c, a = f, u = r, h != null ? wa(l, !!a, h, !1) : !!u != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        r = h = null;
        for (c in a)
          if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, t, c, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && fl(l, t, f, e, u, n);
            }
        Ri(l, h, r);
        return;
      case "option":
        for (var D in a)
          h = a[D], a.hasOwnProperty(D) && h != null && !u.hasOwnProperty(D) && (D === "selected" ? l.selected = !1 : fl(
            l,
            t,
            D,
            null,
            u,
            h
          ));
        for (i in u)
          h = u[i], r = a[i], u.hasOwnProperty(i) && h !== r && (h != null || r != null) && (i === "selected" ? l.selected = h && typeof h != "function" && typeof h != "symbol" : fl(
            l,
            t,
            i,
            h,
            u,
            r
          ));
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
        for (var j in a)
          h = a[j], a.hasOwnProperty(j) && h != null && !u.hasOwnProperty(j) && fl(l, t, j, null, u, h);
        for (v in u)
          if (h = u[v], r = a[v], u.hasOwnProperty(v) && h !== r && (h != null || r != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(o(137, t));
                break;
              default:
                fl(
                  l,
                  t,
                  v,
                  h,
                  u,
                  r
                );
            }
        return;
      default:
        if (tf(t)) {
          for (var cl in a)
            h = a[cl], a.hasOwnProperty(cl) && h !== void 0 && !u.hasOwnProperty(cl) && Zc(
              l,
              t,
              cl,
              void 0,
              u,
              h
            );
          for (g in u)
            h = u[g], r = a[g], !u.hasOwnProperty(g) || h === r || h === void 0 && r === void 0 || Zc(
              l,
              t,
              g,
              h,
              u,
              r
            );
          return;
        }
    }
    for (var d in a)
      h = a[d], a.hasOwnProperty(d) && h != null && !u.hasOwnProperty(d) && fl(l, t, d, null, u, h);
    for (z in u)
      h = u[z], r = a[z], !u.hasOwnProperty(z) || h === r || h == null && r == null || fl(l, t, z, h, u, r);
  }
  function By(l) {
    switch (l) {
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
  function gv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && By(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u], v = i.startTime;
            if (v > c) break;
            var g = i.transferSize, z = i.initiatorType;
            g && By(z) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - v) / (i - v)));
          }
          if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Lc = null, Vc = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xy(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function bv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Jc ? !1 : (Jc = l, !0) : (Jc = null, !1);
  }
  var Gy = typeof setTimeout == "function" ? setTimeout : void 0, zv = typeof clearTimeout == "function" ? clearTimeout : void 0, Qy = typeof Promise == "function" ? Promise : void 0, Tv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qy < "u" ? function(l) {
    return Qy.resolve(null).then(l).catch(Ev);
  } : Gy;
  function Ev(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Sa(l) {
    return l === "head";
  }
  function Xy(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), Mu(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          me(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, me(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Nu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
          }
        } else
          a === "body" && me(l.ownerDocument.body);
      a = e;
    } while (a);
    Mu(t);
  }
  function Zy(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(a), Fn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Av(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Nu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Mt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function _v(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Mt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ly(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Mt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $c(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Mv(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function Mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var kc = null;
  function Vy(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Mt(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ky(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jy(l, t, a) {
    switch (t = On(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var Ot = /* @__PURE__ */ new Map(), wy = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ft = A.d;
  A.d = {
    f: Ov,
    r: Dv,
    D: Uv,
    C: pv,
    L: Nv,
    m: Hv,
    X: jv,
    S: Rv,
    M: Cv
  };
  function Ov() {
    var l = Ft.f(), t = gn();
    return l || t;
  }
  function Dv(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? y0(t) : Ft.r(l);
  }
  var Eu = typeof document > "u" ? null : document;
  function Wy(l, t, a) {
    var u = Eu;
    if (u && typeof t == "string" && t) {
      var e = gt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), wy.has(e) || (wy.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Zl(t, "link", l), ql(t), u.head.appendChild(t)));
    }
  }
  function Uv(l) {
    Ft.D(l), Wy("dns-prefetch", l, null);
  }
  function pv(l, t) {
    Ft.C(l, t), Wy("preconnect", l, t);
  }
  function Nv(l, t, a) {
    Ft.L(l, t, a);
    var u = Eu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + gt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + gt(
        a.imageSizes
      ) + '"]')) : e += '[href="' + gt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Au(l);
          break;
        case "script":
          n = _u(l);
      }
      Ot.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), Ot.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(ve(n)) || t === "script" && u.querySelector(he(n)) || (t = u.createElement("link"), Zl(t, "link", l), ql(t), u.head.appendChild(t)));
    }
  }
  function Hv(l, t) {
    Ft.m(l, t);
    var a = Eu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + gt(u) + '"][href="' + gt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _u(l);
      }
      if (!Ot.has(n) && (l = R({ rel: "modulepreload", href: l }, t), Ot.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(he(n)))
              return;
        }
        u = a.createElement("link"), Zl(u, "link", l), ql(u), a.head.appendChild(u);
      }
    }
  }
  function Rv(l, t, a) {
    Ft.S(l, t, a);
    var u = Eu;
    if (u && l) {
      var e = Ka(u).hoistableStyles, n = Au(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          ve(n)
        ))
          c.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = Ot.get(n)) && Fc(l, a);
          var i = f = u.createElement("link");
          ql(i), Zl(i, "link", l), i._p = new Promise(function(v, g) {
            i.onload = v, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Un(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function jv(l, t) {
    Ft.X(l, t);
    var a = Eu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = _u(l), n = u.get(e);
      n || (n = a.querySelector(he(e)), n || (l = R({ src: l, async: !0 }, t), (t = Ot.get(e)) && Ic(l, t), n = a.createElement("script"), ql(n), Zl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Cv(l, t) {
    Ft.M(l, t);
    var a = Eu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = _u(l), n = u.get(e);
      n || (n = a.querySelector(he(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = Ot.get(e)) && Ic(l, t), n = a.createElement("script"), ql(n), Zl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function $y(l, t, a, u) {
    var e = (e = X.current) ? Dn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Au(a.href), a = Ka(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Au(a.href);
          var n = Ka(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ve(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), Ot.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ot.set(l, a), n || qv(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _u(a), a = Ka(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function Au(l) {
    return 'href="' + gt(l) + '"';
  }
  function ve(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ky(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function qv(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Zl(t, "link", a), ql(t), l.head.appendChild(t));
  }
  function _u(l) {
    return '[src="' + gt(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function Fy(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + gt(a.href) + '"]'
          );
          if (u)
            return t.instance = u, ql(u), u;
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), ql(u), Zl(u, "style", e), Un(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Au(a.href);
          var n = l.querySelector(
            ve(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, ql(n), n;
          u = ky(a), (e = Ot.get(e)) && Fc(u, e), n = (l.ownerDocument || l).createElement("link"), ql(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Zl(n, "link", u), t.state.loading |= 4, Un(n, a.precedence, l), t.instance = n;
        case "script":
          return n = _u(a.src), (e = l.querySelector(
            he(n)
          )) ? (t.instance = e, ql(e), e) : (u = a, (e = Ot.get(n)) && (u = R({}, a), Ic(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), ql(e), Zl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var pn = null;
  function Iy(l, t, a) {
    if (pn === null) {
      var u = /* @__PURE__ */ new Map(), e = pn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = pn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Nu] || n[xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Py(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Bv(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function ld(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yv(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Au(u.href), n = t.querySelector(
          ve(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, ql(n);
          return;
        }
        n = t.ownerDocument || t, u = ky(u), (e = Ot.get(e)) && Fc(u, e), n = n.createElement("link"), ql(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Zl(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Nn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Pc = 0;
  function xv(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pc === 0 && (Pc = 62500 * gv());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Pc ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(Gv, l), Hn = null, Nn.call(l));
  }
  function Gv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Hn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Hn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Nn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: jl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Qv(l, t, a, u, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function td(l, t, a, u, e, n, f, c, i, v, g, z) {
    return l = new Qv(
      l,
      t,
      a,
      f,
      i,
      v,
      g,
      z,
      c
    ), t = 1, n === !0 && (t |= 24), n = st(3, null, null, t), l.current = n, n.stateNode = l, t = Rf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Bf(n), l;
  }
  function ad(l) {
    return l ? (l = tu, l) : tu;
  }
  function ud(l, t, a, u, e, n) {
    e = ad(e), u.context === null ? u.context = e : u.pendingContext = e, u = fa(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = ca(l, u, t), a !== null && (at(a, l, t), wu(a, l, t));
  }
  function ed(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function li(l, t) {
    ed(l, t), (l = l.alternate) && ed(l, t);
  }
  function nd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = pa(l, 67108864);
      t !== null && at(t, l, 67108864), li(l, 67108864);
    }
  }
  function fd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = Wn(t);
      var a = pa(l, t);
      a !== null && at(a, l, t), li(l, t);
    }
  }
  var jn = !0;
  function Xv(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = A.p;
    try {
      A.p = 2, ti(l, t, a, u);
    } finally {
      A.p = n, S.T = e;
    }
  }
  function Zv(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = A.p;
    try {
      A.p = 8, ti(l, t, a, u);
    } finally {
      A.p = n, S.T = e;
    }
  }
  function ti(l, t, a, u) {
    if (jn) {
      var e = ai(u);
      if (e === null)
        Xc(
          l,
          t,
          u,
          Cn,
          a
        ), id(l, u);
      else if (Vv(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (id(l, u), t & 4 && -1 < Lv.indexOf(l)) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = _a(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - ct(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    jt(n), (P & 6) === 0 && (rn = nt() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = pa(n, 2), c !== null && at(c, n, 2), gn(), li(n, 2);
            }
          if (n = ai(u), n === null && Xc(
            l,
            t,
            u,
            Cn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Xc(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function ai(l) {
    return l = uf(l), ui(l);
  }
  var Cn = null;
  function ui(l) {
    if (Cn = null, l = La(l), l !== null) {
      var t = vl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = Al(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = rl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function cd(l) {
    switch (l) {
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
      case "resize":
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
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ud()) {
          case oi:
            return 2;
          case ri:
            return 8;
          case Ee:
          case pd:
            return 32;
          case Si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ei = !1, ga = null, ba = null, za = null, re = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Ta = [], Lv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function id(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ga = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        za = null;
        break;
      case "pointerover":
      case "pointerout":
        re.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function ge(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Va(t), t !== null && nd(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Vv(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ga = ge(
          ga,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ba = ge(
          ba,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return za = ge(
          za,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return re.set(
          n,
          ge(
            re.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, Se.set(
          n,
          ge(
            Se.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function sd(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = vl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = Al(a), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              fd(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = rl(a), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              fd(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ai(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        af = u, a.target.dispatchEvent(u), af = null;
      } else
        return t = Va(a), t !== null && nd(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function yd(l, t, a) {
    qn(l) && a.delete(t);
  }
  function Kv() {
    ei = !1, ga !== null && qn(ga) && (ga = null), ba !== null && qn(ba) && (ba = null), za !== null && qn(za) && (za = null), re.forEach(yd), Se.forEach(yd);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ei || (ei = !0, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      Kv
    )));
  }
  var Yn = null;
  function dd(l) {
    Yn !== l && (Yn = l, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      function() {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (ui(u || a) === null)
              continue;
            break;
          }
          var n = Va(a);
          n !== null && (l.splice(t, 3), t -= 3, ac(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function Mu(l) {
    function t(i) {
      return Bn(i, l);
    }
    ga !== null && Bn(ga, l), ba !== null && Bn(ba, l), za !== null && Bn(za, l), re.forEach(t), Se.forEach(t);
    for (var a = 0; a < Ta.length; a++) {
      var u = Ta[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Ta.length && (a = Ta[0], a.blockedOn === null); )
      sd(a), a.blockedOn === null && Ta.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[kl] || null;
        if (typeof n == "function")
          f || dd(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[kl] || null)
              c = f.formAction;
            else if (ui(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), dd(a);
        }
      }
  }
  function md() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ni(l) {
    this._internalRoot = l;
  }
  xn.prototype.render = ni.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, u = ht();
    ud(a, u, l, t, null, null);
  }, xn.prototype.unmount = ni.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ud(l.current, 2, null, l, null, null), gn(), t[Za] = null;
    }
  };
  function xn(l) {
    this._internalRoot = l;
  }
  xn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ei();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ta.length && t !== 0 && t < Ta[a].priority; a++) ;
      Ta.splice(a, 0, l), a === 0 && sd(l);
    }
  };
  var vd = il.version;
  if (vd !== "19.2.4")
    throw Error(
      o(
        527,
        vd,
        "19.2.4"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        Du = Gn.inject(
          Jv
        ), ft = Gn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!ol(l)) throw Error(o(299));
    var a = !1, u = "", e = z0, n = T0, f = E0;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = td(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      f,
      md
    ), l[Za] = t.current, Qc(l), new ni(t);
  }, ze.hydrateRoot = function(l, t, a) {
    if (!ol(l)) throw Error(o(299));
    var u = !1, e = "", n = z0, f = T0, c = E0, i = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (i = a.formState)), t = td(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      i,
      n,
      f,
      c,
      md
    ), t.context = ad(null), a = t.current, u = ht(), u = Wn(u), e = fa(u), e.callback = null, ca(a, e, u), a = u, t.current.lanes = a, pu(t, a), jt(t), l[Za] = t.current, Qc(l), new xn(t);
  }, ze.version = "19.2.4", ze;
}
var Ad;
function ah() {
  if (Ad) return ii.exports;
  Ad = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (il) {
        console.error(il);
      }
  }
  return O(), ii.exports = th(), ii.exports;
}
var uh = ah();
const eh = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, nh = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, fh = (O) => {
  const il = new Date(O);
  return Number.isNaN(il.getTime()) ? O : new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(il);
}, _d = (O, il, k) => k || (il.split("/").pop() ?? il), ch = (O) => O.replace(/\r\n/g, `
`).replace(nh, _d).replace(eh, _d);
function ih({ dataUrl: O, markdownBaseUrl: il }) {
  const k = "llm-library-search", [o, ol] = Rl.useState(null), [vl, Al] = Rl.useState(""), [rl, N] = Rl.useState([]), [E, J] = Rl.useState(null), [R, sl] = Rl.useState(null), [_l, pl] = Rl.useState(!1), [Nl, Jl] = Rl.useState("idle"), [wl, ot] = Rl.useState(""), [jl, Ll] = Rl.useState(null), ut = Rl.useRef({}), Yl = Rl.useRef(null);
  Rl.useEffect(() => {
    Yl.current = E;
  }, [E]), Rl.useEffect(() => {
    let C = !1;
    return (async () => {
      try {
        sl(null);
        const W = await fetch(O);
        if (!W.ok)
          throw new Error(`HTTP ${W.status}`);
        const S = await W.json();
        C || ol(S);
      } catch (W) {
        if (!C) {
          const S = W instanceof Error ? W.message : "Unknown error";
          sl(`加载 LLM Library 数据失败：${S}`);
        }
      }
    })(), () => {
      C = !0;
    };
  }, [O]), Rl.useEffect(() => {
    if (!E)
      return;
    const C = (W) => {
      if (W.key === "Escape") {
        if (_l) {
          pl(!1);
          return;
        }
        J(null);
      }
    };
    window.addEventListener("keydown", C);
    const $ = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      window.removeEventListener("keydown", C), document.body.style.overflow = $;
    };
  }, [_l, E]), Rl.useEffect(() => {
    pl(!1), Jl("idle"), ot(""), Ll(null);
  }, [E]);
  const Q = o?.items ?? [], Cl = Rl.useMemo(() => {
    const C = vl.trim().toLowerCase();
    return Q.filter(($) => {
      const W = !C || $.title.toLowerCase().includes(C) || $.preview.toLowerCase().includes(C), S = rl.length === 0 || rl.every((A) => $.secondaryTags.includes(A));
      return W && S;
    }).sort(($, W) => $.title.localeCompare(W.title));
  }, [rl, Q, vl]), et = Rl.useMemo(() => o ? Object.entries(o.tagCounts).sort((C, $) => $[1] !== C[1] ? $[1] - C[1] : C[0].localeCompare($[0])) : [], [o]), bl = Rl.useMemo(() => Q.find((C) => C.id === E) ?? null, [Q, E]), rt = (C) => {
    N(($) => $.includes(C) ? $.filter((W) => W !== C) : [...$, C]);
  }, Vl = async () => {
    if (!bl)
      return;
    pl(!0), Ll(null);
    const C = ut.current[bl.id];
    if (C) {
      ot(C), Jl("ready");
      return;
    }
    Jl("loading");
    try {
      const $ = new URL(bl.markdownAsset, new URL(il, window.location.href)).toString(), W = await fetch($);
      if (!W.ok)
        throw new Error(`HTTP ${W.status}`);
      const S = await W.text(), A = ch(S), [{ marked: q }, { default: ll }] = await Promise.all([import("./marked.esm-esrH5msa.js"), import("./purify.es-DjuStgSH.js")]), al = await q.parse(A, {
        async: !1,
        breaks: !0,
        gfm: !0
      }), y = ll.sanitize(al, {
        USE_PROFILES: {
          html: !0
        }
      });
      if (Yl.current !== bl.id)
        return;
      ut.current[bl.id] = y, ot(y), Jl("ready");
    } catch ($) {
      const W = $ instanceof Error ? $.message : "Unknown error";
      Jl("error"), Ll(`加载全文失败：${W}`);
    }
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "llm-library-app", children: [
    /* @__PURE__ */ _.jsxs("section", { className: "llm-library-hero", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("p", { className: "llm-library-eyebrow", children: "Showcase" }),
        /* @__PURE__ */ _.jsx("h2", { children: "站内浏览的 LLM 文献卡片墙" }),
        /* @__PURE__ */ _.jsx("p", { className: "llm-library-intro", children: "从当前仓库整理出的 99 篇 LLM 相关笔记。首屏只保留标题，点击后再看标签、摘要预览和原始路径。" })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "llm-library-metrics", "aria-label": "Library statistics", children: [
        /* @__PURE__ */ _.jsxs("article", { children: [
          /* @__PURE__ */ _.jsx("span", { children: "文章总数" }),
          /* @__PURE__ */ _.jsx("strong", { children: o?.totalCount ?? "—" })
        ] }),
        /* @__PURE__ */ _.jsxs("article", { children: [
          /* @__PURE__ */ _.jsx("span", { children: "二级标签" }),
          /* @__PURE__ */ _.jsx("strong", { children: et.length || "—" })
        ] }),
        /* @__PURE__ */ _.jsxs("article", { children: [
          /* @__PURE__ */ _.jsx("span", { children: "当前结果" }),
          /* @__PURE__ */ _.jsx("strong", { children: Cl.length })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("section", { className: "llm-library-controls", "aria-label": "Search and filters", children: [
      /* @__PURE__ */ _.jsxs("label", { className: "llm-library-search", children: [
        /* @__PURE__ */ _.jsx("span", { children: "搜索标题 / 摘要" }),
        /* @__PURE__ */ _.jsx(
          "input",
          {
            id: k,
            name: k,
            type: "search",
            value: vl,
            onChange: (C) => Al(C.target.value),
            placeholder: "例如：Agent、Qwen、Reasoning"
          }
        )
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "llm-library-toolbar", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "llm-library-selection", children: [
          /* @__PURE__ */ _.jsx("span", { children: "已选标签" }),
          /* @__PURE__ */ _.jsx("strong", { children: rl.length === 0 ? "全部" : rl.join(" · ") })
        ] }),
        /* @__PURE__ */ _.jsx(
          "button",
          {
            type: "button",
            className: "llm-library-reset",
            onClick: () => {
              Al(""), N([]);
            },
            disabled: !vl && rl.length === 0,
            children: "清空筛选"
          }
        )
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "llm-library-tag-grid", "aria-label": "Secondary tags", children: et.map(([C, $]) => {
        const W = rl.includes(C);
        return /* @__PURE__ */ _.jsxs("button", { type: "button", className: W ? "tag-chip active" : "tag-chip", onClick: () => rt(C), children: [
          /* @__PURE__ */ _.jsx("span", { children: C }),
          /* @__PURE__ */ _.jsx("span", { children: $ })
        ] }, C);
      }) })
    ] }),
    R ? /* @__PURE__ */ _.jsx("div", { className: "llm-library-state error", role: "alert", children: R }) : null,
    !o && !R ? /* @__PURE__ */ _.jsx("div", { className: "llm-library-state", children: "正在加载文献数据…" }) : null,
    o ? /* @__PURE__ */ _.jsx("section", { className: "llm-library-grid", "aria-label": "LLM library results", children: Cl.length > 0 ? Cl.map((C) => /* @__PURE__ */ _.jsx("button", { type: "button", className: "llm-library-card", onClick: () => J(C.id), children: /* @__PURE__ */ _.jsx("span", { className: "llm-library-card-title", children: C.title }) }, C.id)) : /* @__PURE__ */ _.jsxs("div", { className: "llm-library-empty", children: [
      /* @__PURE__ */ _.jsx("h3", { children: "没有匹配结果" }),
      /* @__PURE__ */ _.jsx("p", { children: "试试清空关键词，或者移除部分二级标签。" })
    ] }) }) : null,
    o ? /* @__PURE__ */ _.jsxs("footer", { className: "llm-library-footer", children: [
      "数据生成时间：",
      fh(o.generatedAt)
    ] }) : null,
    bl ? /* @__PURE__ */ _.jsx("div", { className: "llm-library-modal-backdrop", onClick: () => J(null), role: "presentation", children: /* @__PURE__ */ _.jsxs(
      "section",
      {
        className: _l ? "llm-library-modal llm-library-modal--reader" : "llm-library-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "llm-library-modal-title",
        onClick: (C) => C.stopPropagation(),
        children: [
          /* @__PURE__ */ _.jsxs("header", { className: "llm-library-modal-header", children: [
            /* @__PURE__ */ _.jsxs("div", { children: [
              /* @__PURE__ */ _.jsx("p", { className: "llm-library-eyebrow", children: _l ? "Reader" : "Detail" }),
              /* @__PURE__ */ _.jsx("h3", { id: "llm-library-modal-title", children: bl.title })
            ] }),
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-modal-actions", children: [
              _l ? /* @__PURE__ */ _.jsx("button", { type: "button", className: "llm-library-secondary-action", onClick: () => pl(!1), children: "返回摘要" }) : /* @__PURE__ */ _.jsx("button", { type: "button", className: "llm-library-primary-action", onClick: Vl, children: "查看全文" }),
              /* @__PURE__ */ _.jsx("button", { type: "button", className: "llm-library-close", onClick: () => J(null), children: "关闭" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "llm-library-modal-body", children: _l ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-tag-list", children: [
              /* @__PURE__ */ _.jsx("span", { className: "detail-chip primary", children: bl.primaryTag }),
              bl.secondaryTags.map((C) => /* @__PURE__ */ _.jsx("span", { className: "detail-chip", children: C }, C))
            ] }),
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-detail-block", children: [
              /* @__PURE__ */ _.jsx("h4", { children: "原始路径" }),
              /* @__PURE__ */ _.jsx("code", { children: bl.sourcePath })
            ] }),
            Nl === "loading" ? /* @__PURE__ */ _.jsx("div", { className: "llm-library-state", children: "正在加载全文并渲染 Markdown…" }) : null,
            Nl === "error" ? /* @__PURE__ */ _.jsx("div", { className: "llm-library-state error", role: "alert", children: jl }) : null,
            Nl === "ready" ? /* @__PURE__ */ _.jsx("article", { className: "llm-library-reader", dangerouslySetInnerHTML: { __html: wl } }) : null
          ] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-tag-list", children: [
              /* @__PURE__ */ _.jsx("span", { className: "detail-chip primary", children: bl.primaryTag }),
              bl.secondaryTags.map((C) => /* @__PURE__ */ _.jsx("span", { className: "detail-chip", children: C }, C))
            ] }),
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-detail-block", children: [
              /* @__PURE__ */ _.jsx("h4", { children: "摘要预览" }),
              /* @__PURE__ */ _.jsx("p", { children: bl.preview })
            ] }),
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-detail-block", children: [
              /* @__PURE__ */ _.jsx("h4", { children: "原始路径" }),
              /* @__PURE__ */ _.jsx("code", { children: bl.sourcePath })
            ] }),
            /* @__PURE__ */ _.jsxs("div", { className: "llm-library-detail-block", children: [
              /* @__PURE__ */ _.jsx("h4", { children: "继续阅读" }),
              /* @__PURE__ */ _.jsx("p", { children: "点击右上角的“查看全文”，会把该篇 Markdown 正文渲染后呈现出来。" })
            ] })
          ] }) })
        ]
      }
    ) }) : null
  ] });
}
const Qn = document.getElementById("llm-library-root");
if (Qn) {
  const O = Qn.getAttribute("data-source") ?? "/assets/json/llm-library-data.json", il = Qn.getAttribute("data-markdown-base") ?? "/assets/llm-library/markdown/";
  uh.createRoot(Qn).render(
    /* @__PURE__ */ _.jsx(Rl.StrictMode, { children: /* @__PURE__ */ _.jsx(ih, { dataUrl: O, markdownBaseUrl: il }) })
  );
}
