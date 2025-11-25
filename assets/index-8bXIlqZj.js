(function () {
  const Y = document.createElement("link").relList;
  if (Y && Y.supports && Y.supports("modulepreload")) return;
  for (const B of document.querySelectorAll('link[rel="modulepreload"]')) h(B);
  new MutationObserver((B) => {
    for (const G of B)
      if (G.type === "childList")
        for (const cl of G.addedNodes)
          cl.tagName === "LINK" && cl.rel === "modulepreload" && h(cl);
  }).observe(document, { childList: !0, subtree: !0 });
  function q(B) {
    const G = {};
    return (
      B.integrity && (G.integrity = B.integrity),
      B.referrerPolicy && (G.referrerPolicy = B.referrerPolicy),
      B.crossOrigin === "use-credentials"
        ? (G.credentials = "include")
        : B.crossOrigin === "anonymous"
          ? (G.credentials = "omit")
          : (G.credentials = "same-origin"),
      G
    );
  }
  function h(B) {
    if (B.ep) return;
    B.ep = !0;
    const G = q(B);
    fetch(B.href, G);
  }
})();
var cf = { exports: {} },
  ze = {};
var S0;
function ly() {
  if (S0) return ze;
  S0 = 1;
  var _ = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.fragment");
  function q(h, B, G) {
    var cl = null;
    if (
      (G !== void 0 && (cl = "" + G),
      B.key !== void 0 && (cl = "" + B.key),
      "key" in B)
    ) {
      G = {};
      for (var Ol in B) Ol !== "key" && (G[Ol] = B[Ol]);
    } else G = B;
    return (
      (B = G.ref),
      { $$typeof: _, type: h, key: cl, ref: B !== void 0 ? B : null, props: G }
    );
  }
  return ((ze.Fragment = Y), (ze.jsx = q), (ze.jsxs = q), ze);
}
var b0;
function ty() {
  return (b0 || ((b0 = 1), (cf.exports = ly())), cf.exports);
}
var E = ty(),
  ff = { exports: {} },
  x = {};
var z0;
function ay() {
  if (z0) return x;
  z0 = 1;
  var _ = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    cl = Symbol.for("react.context"),
    Ol = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    L = Symbol.iterator;
  function Cl(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (L && d[L]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var zl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Hl = Object.assign,
    pt = {};
  function Gl(d, A, O) {
    ((this.props = d),
      (this.context = A),
      (this.refs = pt),
      (this.updater = O || zl));
  }
  ((Gl.prototype.isReactComponent = {}),
    (Gl.prototype.setState = function (d, A) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, A, "setState");
    }),
    (Gl.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function mt() {}
  mt.prototype = Gl.prototype;
  function rl(d, A, O) {
    ((this.props = d),
      (this.context = A),
      (this.refs = pt),
      (this.updater = O || zl));
  }
  var Kl = (rl.prototype = new mt());
  ((Kl.constructor = rl), Hl(Kl, Gl.prototype), (Kl.isPureReactComponent = !0));
  var Pl = Array.isArray;
  function Xl() {}
  var K = { H: null, A: null, T: null, S: null },
    Ml = Object.prototype.hasOwnProperty;
  function lt(d, A, O) {
    var N = O.ref;
    return {
      $$typeof: _,
      type: d,
      key: A,
      ref: N !== void 0 ? N : null,
      props: O,
    };
  }
  function Ht(d, A) {
    return lt(d.type, A, d.props);
  }
  function Al(d) {
    return typeof d == "object" && d !== null && d.$$typeof === _;
  }
  function Ql(d) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (O) {
        return A[O];
      })
    );
  }
  var Rt = /\/+/g;
  function _t(d, A) {
    return typeof d == "object" && d !== null && d.key != null
      ? Ql("" + d.key)
      : A.toString(36);
  }
  function tt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Xl, Xl)
            : ((d.status = "pending"),
              d.then(
                function (A) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = A));
                },
                function (A) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = A));
                },
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function o(d, A, O, N, X) {
    var w = typeof d;
    (w === "undefined" || w === "boolean") && (d = null);
    var ul = !1;
    if (d === null) ul = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          ul = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case _:
            case Y:
              ul = !0;
              break;
            case J:
              return ((ul = d._init), o(ul(d._payload), A, O, N, X));
          }
      }
    if (ul)
      return (
        (X = X(d)),
        (ul = N === "" ? "." + _t(d, 0) : N),
        Pl(X)
          ? ((O = ""),
            ul != null && (O = ul.replace(Rt, "$&/") + "/"),
            o(X, A, O, "", function (Mu) {
              return Mu;
            }))
          : X != null &&
            (Al(X) &&
              (X = Ht(
                X,
                O +
                  (X.key == null || (d && d.key === X.key)
                    ? ""
                    : ("" + X.key).replace(Rt, "$&/") + "/") +
                  ul,
              )),
            A.push(X)),
        1
      );
    ul = 0;
    var Vl = N === "" ? "." : N + ":";
    if (Pl(d))
      for (var gl = 0; gl < d.length; gl++)
        ((N = d[gl]), (w = Vl + _t(N, gl)), (ul += o(N, A, O, w, X)));
    else if (((gl = Cl(d)), typeof gl == "function"))
      for (d = gl.call(d), gl = 0; !(N = d.next()).done; )
        ((N = N.value), (w = Vl + _t(N, gl++)), (ul += o(N, A, O, w, X)));
    else if (w === "object") {
      if (typeof d.then == "function") return o(tt(d), A, O, N, X);
      throw (
        (A = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ul;
  }
  function T(d, A, O) {
    if (d == null) return d;
    var N = [],
      X = 0;
    return (
      o(d, N, "", "", function (w) {
        return A.call(O, w, X++);
      }),
      N
    );
  }
  function j(d) {
    if (d._status === -1) {
      var A = d._result;
      ((A = A()),
        A.then(
          function (O) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = O));
          },
          function (O) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = O));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = A)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var Z =
      typeof reportError == "function"
        ? reportError
        : function (d) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof d == "object" &&
                  d !== null &&
                  typeof d.message == "string"
                    ? String(d.message)
                    : String(d),
                error: d,
              });
              if (!window.dispatchEvent(A)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", d);
              return;
            }
            console.error(d);
          },
    al = {
      map: T,
      forEach: function (d, A, O) {
        T(
          d,
          function () {
            A.apply(this, arguments);
          },
          O,
        );
      },
      count: function (d) {
        var A = 0;
        return (
          T(d, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (d) {
        return (
          T(d, function (A) {
            return A;
          }) || []
        );
      },
      only: function (d) {
        if (!Al(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    };
  return (
    (x.Activity = R),
    (x.Children = al),
    (x.Component = Gl),
    (x.Fragment = q),
    (x.Profiler = B),
    (x.PureComponent = rl),
    (x.StrictMode = h),
    (x.Suspense = D),
    (x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (x.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return K.H.useMemoCache(d);
      },
    }),
    (x.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (x.cacheSignal = function () {
      return null;
    }),
    (x.cloneElement = function (d, A, O) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + ".",
        );
      var N = Hl({}, d.props),
        X = d.key;
      if (A != null)
        for (w in (A.key !== void 0 && (X = "" + A.key), A))
          !Ml.call(A, w) ||
            w === "key" ||
            w === "__self" ||
            w === "__source" ||
            (w === "ref" && A.ref === void 0) ||
            (N[w] = A[w]);
      var w = arguments.length - 2;
      if (w === 1) N.children = O;
      else if (1 < w) {
        for (var ul = Array(w), Vl = 0; Vl < w; Vl++)
          ul[Vl] = arguments[Vl + 2];
        N.children = ul;
      }
      return lt(d.type, X, N);
    }),
    (x.createContext = function (d) {
      return (
        (d = {
          $$typeof: cl,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: G, _context: d }),
        d
      );
    }),
    (x.createElement = function (d, A, O) {
      var N,
        X = {},
        w = null;
      if (A != null)
        for (N in (A.key !== void 0 && (w = "" + A.key), A))
          Ml.call(A, N) &&
            N !== "key" &&
            N !== "__self" &&
            N !== "__source" &&
            (X[N] = A[N]);
      var ul = arguments.length - 2;
      if (ul === 1) X.children = O;
      else if (1 < ul) {
        for (var Vl = Array(ul), gl = 0; gl < ul; gl++)
          Vl[gl] = arguments[gl + 2];
        X.children = Vl;
      }
      if (d && d.defaultProps)
        for (N in ((ul = d.defaultProps), ul))
          X[N] === void 0 && (X[N] = ul[N]);
      return lt(d, w, X);
    }),
    (x.createRef = function () {
      return { current: null };
    }),
    (x.forwardRef = function (d) {
      return { $$typeof: Ol, render: d };
    }),
    (x.isValidElement = Al),
    (x.lazy = function (d) {
      return { $$typeof: J, _payload: { _status: -1, _result: d }, _init: j };
    }),
    (x.memo = function (d, A) {
      return { $$typeof: p, type: d, compare: A === void 0 ? null : A };
    }),
    (x.startTransition = function (d) {
      var A = K.T,
        O = {};
      K.T = O;
      try {
        var N = d(),
          X = K.S;
        (X !== null && X(O, N),
          typeof N == "object" &&
            N !== null &&
            typeof N.then == "function" &&
            N.then(Xl, Z));
      } catch (w) {
        Z(w);
      } finally {
        (A !== null && O.types !== null && (A.types = O.types), (K.T = A));
      }
    }),
    (x.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (x.use = function (d) {
      return K.H.use(d);
    }),
    (x.useActionState = function (d, A, O) {
      return K.H.useActionState(d, A, O);
    }),
    (x.useCallback = function (d, A) {
      return K.H.useCallback(d, A);
    }),
    (x.useContext = function (d) {
      return K.H.useContext(d);
    }),
    (x.useDebugValue = function () {}),
    (x.useDeferredValue = function (d, A) {
      return K.H.useDeferredValue(d, A);
    }),
    (x.useEffect = function (d, A) {
      return K.H.useEffect(d, A);
    }),
    (x.useEffectEvent = function (d) {
      return K.H.useEffectEvent(d);
    }),
    (x.useId = function () {
      return K.H.useId();
    }),
    (x.useImperativeHandle = function (d, A, O) {
      return K.H.useImperativeHandle(d, A, O);
    }),
    (x.useInsertionEffect = function (d, A) {
      return K.H.useInsertionEffect(d, A);
    }),
    (x.useLayoutEffect = function (d, A) {
      return K.H.useLayoutEffect(d, A);
    }),
    (x.useMemo = function (d, A) {
      return K.H.useMemo(d, A);
    }),
    (x.useOptimistic = function (d, A) {
      return K.H.useOptimistic(d, A);
    }),
    (x.useReducer = function (d, A, O) {
      return K.H.useReducer(d, A, O);
    }),
    (x.useRef = function (d) {
      return K.H.useRef(d);
    }),
    (x.useState = function (d) {
      return K.H.useState(d);
    }),
    (x.useSyncExternalStore = function (d, A, O) {
      return K.H.useSyncExternalStore(d, A, O);
    }),
    (x.useTransition = function () {
      return K.H.useTransition();
    }),
    (x.version = "19.2.4"),
    x
  );
}
var A0;
function hf() {
  return (A0 || ((A0 = 1), (ff.exports = ay())), ff.exports);
}
var Dl = hf(),
  sf = { exports: {} },
  Ae = {},
  of = { exports: {} },
  df = {};
var E0;
function uy() {
  return (
    E0 ||
      ((E0 = 1),
      (function (_) {
        function Y(o, T) {
          var j = o.length;
          o.push(T);
          l: for (; 0 < j; ) {
            var Z = (j - 1) >>> 1,
              al = o[Z];
            if (0 < B(al, T)) ((o[Z] = T), (o[j] = al), (j = Z));
            else break l;
          }
        }
        function q(o) {
          return o.length === 0 ? null : o[0];
        }
        function h(o) {
          if (o.length === 0) return null;
          var T = o[0],
            j = o.pop();
          if (j !== T) {
            o[0] = j;
            l: for (var Z = 0, al = o.length, d = al >>> 1; Z < d; ) {
              var A = 2 * (Z + 1) - 1,
                O = o[A],
                N = A + 1,
                X = o[N];
              if (0 > B(O, j))
                N < al && 0 > B(X, O)
                  ? ((o[Z] = X), (o[N] = j), (Z = N))
                  : ((o[Z] = O), (o[A] = j), (Z = A));
              else if (N < al && 0 > B(X, j)) ((o[Z] = X), (o[N] = j), (Z = N));
              else break l;
            }
          }
          return T;
        }
        function B(o, T) {
          var j = o.sortIndex - T.sortIndex;
          return j !== 0 ? j : o.id - T.id;
        }
        if (
          ((_.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var G = performance;
          _.unstable_now = function () {
            return G.now();
          };
        } else {
          var cl = Date,
            Ol = cl.now();
          _.unstable_now = function () {
            return cl.now() - Ol;
          };
        }
        var D = [],
          p = [],
          J = 1,
          R = null,
          L = 3,
          Cl = !1,
          zl = !1,
          Hl = !1,
          pt = !1,
          Gl = typeof setTimeout == "function" ? setTimeout : null,
          mt = typeof clearTimeout == "function" ? clearTimeout : null,
          rl = typeof setImmediate < "u" ? setImmediate : null;
        function Kl(o) {
          for (var T = q(p); T !== null; ) {
            if (T.callback === null) h(p);
            else if (T.startTime <= o)
              (h(p), (T.sortIndex = T.expirationTime), Y(D, T));
            else break;
            T = q(p);
          }
        }
        function Pl(o) {
          if (((Hl = !1), Kl(o), !zl))
            if (q(D) !== null) ((zl = !0), Xl || ((Xl = !0), Ql()));
            else {
              var T = q(p);
              T !== null && tt(Pl, T.startTime - o);
            }
        }
        var Xl = !1,
          K = -1,
          Ml = 5,
          lt = -1;
        function Ht() {
          return pt ? !0 : !(_.unstable_now() - lt < Ml);
        }
        function Al() {
          if (((pt = !1), Xl)) {
            var o = _.unstable_now();
            lt = o;
            var T = !0;
            try {
              l: {
                ((zl = !1), Hl && ((Hl = !1), mt(K), (K = -1)), (Cl = !0));
                var j = L;
                try {
                  t: {
                    for (
                      Kl(o), R = q(D);
                      R !== null && !(R.expirationTime > o && Ht());
                    ) {
                      var Z = R.callback;
                      if (typeof Z == "function") {
                        ((R.callback = null), (L = R.priorityLevel));
                        var al = Z(R.expirationTime <= o);
                        if (((o = _.unstable_now()), typeof al == "function")) {
                          ((R.callback = al), Kl(o), (T = !0));
                          break t;
                        }
                        (R === q(D) && h(D), Kl(o));
                      } else h(D);
                      R = q(D);
                    }
                    if (R !== null) T = !0;
                    else {
                      var d = q(p);
                      (d !== null && tt(Pl, d.startTime - o), (T = !1));
                    }
                  }
                  break l;
                } finally {
                  ((R = null), (L = j), (Cl = !1));
                }
                T = void 0;
              }
            } finally {
              T ? Ql() : (Xl = !1);
            }
          }
        }
        var Ql;
        if (typeof rl == "function")
          Ql = function () {
            rl(Al);
          };
        else if (typeof MessageChannel < "u") {
          var Rt = new MessageChannel(),
            _t = Rt.port2;
          ((Rt.port1.onmessage = Al),
            (Ql = function () {
              _t.postMessage(null);
            }));
        } else
          Ql = function () {
            Gl(Al, 0);
          };
        function tt(o, T) {
          K = Gl(function () {
            o(_.unstable_now());
          }, T);
        }
        ((_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (o) {
            o.callback = null;
          }),
          (_.unstable_forceFrameRate = function (o) {
            0 > o || 125 < o
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ml = 0 < o ? Math.floor(1e3 / o) : 5);
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (_.unstable_next = function (o) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = L;
            }
            var j = L;
            L = T;
            try {
              return o();
            } finally {
              L = j;
            }
          }),
          (_.unstable_requestPaint = function () {
            pt = !0;
          }),
          (_.unstable_runWithPriority = function (o, T) {
            switch (o) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                o = 3;
            }
            var j = L;
            L = o;
            try {
              return T();
            } finally {
              L = j;
            }
          }),
          (_.unstable_scheduleCallback = function (o, T, j) {
            var Z = _.unstable_now();
            switch (
              (typeof j == "object" && j !== null
                ? ((j = j.delay),
                  (j = typeof j == "number" && 0 < j ? Z + j : Z))
                : (j = Z),
              o)
            ) {
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
            return (
              (al = j + al),
              (o = {
                id: J++,
                callback: T,
                priorityLevel: o,
                startTime: j,
                expirationTime: al,
                sortIndex: -1,
              }),
              j > Z
                ? ((o.sortIndex = j),
                  Y(p, o),
                  q(D) === null &&
                    o === q(p) &&
                    (Hl ? (mt(K), (K = -1)) : (Hl = !0), tt(Pl, j - Z)))
                : ((o.sortIndex = al),
                  Y(D, o),
                  zl || Cl || ((zl = !0), Xl || ((Xl = !0), Ql()))),
              o
            );
          }),
          (_.unstable_shouldYield = Ht),
          (_.unstable_wrapCallback = function (o) {
            var T = L;
            return function () {
              var j = L;
              L = T;
              try {
                return o.apply(this, arguments);
              } finally {
                L = j;
              }
            };
          }));
      })(df)),
    df
  );
}
var T0;
function ey() {
  return (T0 || ((T0 = 1), (of.exports = uy())), of.exports);
}
var mf = { exports: {} },
  Zl = {};
var p0;
function ny() {
  if (p0) return Zl;
  p0 = 1;
  var _ = hf();
  function Y(D) {
    var p = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        p += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q() {}
  var h = {
      d: {
        f: q,
        r: function () {
          throw Error(Y(522));
        },
        D: q,
        C: q,
        L: q,
        m: q,
        X: q,
        S: q,
        M: q,
      },
      p: 0,
      findDOMNode: null,
    },
    B = Symbol.for("react.portal");
  function G(D, p, J) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: R == null ? null : "" + R,
      children: D,
      containerInfo: p,
      implementation: J,
    };
  }
  var cl = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ol(D, p) {
    if (D === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Zl.createPortal = function (D, p) {
      var J =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(Y(299));
      return G(D, p, null, J);
    }),
    (Zl.flushSync = function (D) {
      var p = cl.T,
        J = h.p;
      try {
        if (((cl.T = null), (h.p = 2), D)) return D();
      } finally {
        ((cl.T = p), (h.p = J), h.d.f());
      }
    }),
    (Zl.preconnect = function (D, p) {
      typeof D == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        h.d.C(D, p));
    }),
    (Zl.prefetchDNS = function (D) {
      typeof D == "string" && h.d.D(D);
    }),
    (Zl.preinit = function (D, p) {
      if (typeof D == "string" && p && typeof p.as == "string") {
        var J = p.as,
          R = Ol(J, p.crossOrigin),
          L = typeof p.integrity == "string" ? p.integrity : void 0,
          Cl = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        J === "style"
          ? h.d.S(D, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: R,
              integrity: L,
              fetchPriority: Cl,
            })
          : J === "script" &&
            h.d.X(D, {
              crossOrigin: R,
              integrity: L,
              fetchPriority: Cl,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (Zl.preinitModule = function (D, p) {
      if (typeof D == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var J = Ol(p.as, p.crossOrigin);
            h.d.M(D, {
              crossOrigin: J,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && h.d.M(D);
    }),
    (Zl.preload = function (D, p) {
      if (
        typeof D == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var J = p.as,
          R = Ol(J, p.crossOrigin);
        h.d.L(D, J, {
          crossOrigin: R,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (Zl.preloadModule = function (D, p) {
      if (typeof D == "string")
        if (p) {
          var J = Ol(p.as, p.crossOrigin);
          h.d.m(D, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: J,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else h.d.m(D);
    }),
    (Zl.requestFormReset = function (D) {
      h.d.r(D);
    }),
    (Zl.unstable_batchedUpdates = function (D, p) {
      return D(p);
    }),
    (Zl.useFormState = function (D, p, J) {
      return cl.H.useFormState(D, p, J);
    }),
    (Zl.useFormStatus = function () {
      return cl.H.useHostTransitionStatus();
    }),
    (Zl.version = "19.2.4"),
    Zl
  );
}
var _0;
function cy() {
  if (_0) return mf.exports;
  _0 = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (Y) {
        console.error(Y);
      }
  }
  return (_(), (mf.exports = ny()), mf.exports);
}
var O0;
function iy() {
  if (O0) return Ae;
  O0 = 1;
  var _ = ey(),
    Y = hf(),
    q = cy();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function G(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function cl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ol(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (G(l) !== l) throw Error(h(188));
  }
  function p(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = G(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return (D(e), l);
          if (n === u) return (D(e), t);
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var c = !1, i = e.child; i; ) {
          if (i === a) {
            ((c = !0), (a = e), (u = n));
            break;
          }
          if (i === u) {
            ((c = !0), (u = e), (a = n));
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              ((c = !0), (a = n), (u = e));
              break;
            }
            if (i === u) {
              ((c = !0), (u = n), (a = e));
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = J(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    L = Symbol.for("react.element"),
    Cl = Symbol.for("react.transitional.element"),
    zl = Symbol.for("react.portal"),
    Hl = Symbol.for("react.fragment"),
    pt = Symbol.for("react.strict_mode"),
    Gl = Symbol.for("react.profiler"),
    mt = Symbol.for("react.consumer"),
    rl = Symbol.for("react.context"),
    Kl = Symbol.for("react.forward_ref"),
    Pl = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    Ml = Symbol.for("react.lazy"),
    lt = Symbol.for("react.activity"),
    Ht = Symbol.for("react.memo_cache_sentinel"),
    Al = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Al && l[Al]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Rt = Symbol.for("react.client.reference");
  function _t(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Rt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case Gl:
        return "Profiler";
      case pt:
        return "StrictMode";
      case Pl:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case lt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case zl:
          return "Portal";
        case rl:
          return l.displayName || "Context";
        case mt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Kl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case K:
          return (
            (t = l.displayName || null),
            t !== null ? t : _t(l.type) || "Memo"
          );
        case Ml:
          ((t = l._payload), (l = l._init));
          try {
            return _t(l(t));
          } catch {}
      }
    return null;
  }
  var tt = Array.isArray,
    o = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    T = q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = { pending: !1, data: null, method: null, action: null },
    Z = [],
    al = -1;
  function d(l) {
    return { current: l };
  }
  function A(l) {
    0 > al || ((l.current = Z[al]), (Z[al] = null), al--);
  }
  function O(l, t) {
    (al++, (Z[al] = l.current), (l.current = t));
  }
  var N = d(null),
    X = d(null),
    w = d(null),
    ul = d(null);
  function Vl(l, t) {
    switch ((O(w, t), O(X, l), O(N, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Qd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Qd(t)), (l = Zd(t, l)));
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
    (A(N), O(N, l));
  }
  function gl() {
    (A(N), A(X), A(w));
  }
  function Mu(l) {
    l.memoizedState !== null && O(ul, l);
    var t = N.current,
      a = Zd(t, l.type);
    t !== a && (O(X, l), O(N, a));
  }
  function Te(l) {
    (X.current === l && (A(N), A(X)),
      ul.current === l && (A(ul), (re._currentValue = j)));
  }
  var Zn, rf;
  function pa(l) {
    if (Zn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Zn = (t && t[1]) || ""),
          (rf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Zn +
      l +
      rf
    );
  }
  var Vn = !1;
  function Ln(l, t) {
    if (!l || Vn) return "";
    Vn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var r = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  r = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                r = g;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (g) {
            if (g && r && typeof g.stack == "string") return [g.stack, r.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          y = i.split(`
`);
        for (
          e = u = 0;
          u < f.length && !f[u].includes("DetermineComponentFrameRoot");
        )
          u++;
        for (; e < y.length && !y[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === f.length || e === y.length)
          for (
            u = f.length - 1, e = y.length - 1;
            1 <= u && 0 <= e && f[u] !== y[e];
          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (f[u] !== y[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || f[u] !== y[e])) {
                  var S =
                    `
` + f[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ((Vn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? pa(a) : "";
  }
  function j0(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return pa(l.type);
      case 16:
        return pa("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? pa("Suspense Fallback")
          : pa("Suspense");
      case 19:
        return pa("SuspenseList");
      case 0:
      case 15:
        return Ln(l.type, !1);
      case 11:
        return Ln(l.type.render, !1);
      case 1:
        return Ln(l.type, !0);
      case 31:
        return pa("Activity");
      default:
        return "";
    }
  }
  function gf(l) {
    try {
      var t = "",
        a = null;
      do ((t += j0(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var Kn = Object.prototype.hasOwnProperty,
    Jn = _.unstable_scheduleCallback,
    wn = _.unstable_cancelCallback,
    C0 = _.unstable_shouldYield,
    H0 = _.unstable_requestPaint,
    at = _.unstable_now,
    R0 = _.unstable_getCurrentPriorityLevel,
    Sf = _.unstable_ImmediatePriority,
    bf = _.unstable_UserBlockingPriority,
    pe = _.unstable_NormalPriority,
    q0 = _.unstable_LowPriority,
    zf = _.unstable_IdlePriority,
    x0 = _.log,
    B0 = _.unstable_setDisableYieldValue,
    Nu = null,
    ut = null;
  function Pt(l) {
    if (
      (typeof x0 == "function" && B0(l),
      ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(Nu, l);
      } catch {}
  }
  var et = Math.clz32 ? Math.clz32 : X0,
    Y0 = Math.log,
    G0 = Math.LN2;
  function X0(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Y0(l) / G0) | 0)) | 0);
  }
  var _e = 256,
    Oe = 262144,
    Me = 4194304;
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
  function Ne(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return (
      i !== 0
        ? ((u = i & ~n),
          u !== 0
            ? (e = _a(u))
            : ((c &= i),
              c !== 0
                ? (e = _a(c))
                : a || ((a = i & ~l), a !== 0 && (e = _a(a)))))
        : ((i = u & ~n),
          i !== 0
            ? (e = _a(i))
            : c !== 0
              ? (e = _a(c))
              : a || ((a = u & ~l), a !== 0 && (e = _a(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Q0(l, t) {
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
  function Af() {
    var l = Me;
    return ((Me <<= 1), (Me & 62914560) === 0 && (Me = 4194304), l);
  }
  function Wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Uu(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Z0(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var i = l.entanglements,
      f = l.expirationTimes,
      y = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var S = 31 - et(a),
        z = 1 << S;
      ((i[S] = 0), (f[S] = -1));
      var r = y[S];
      if (r !== null)
        for (y[S] = null, S = 0; S < r.length; S++) {
          var g = r[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~z;
    }
    (u !== 0 && Ef(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function Ef(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - et(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function Tf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - et(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function pf(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : $n(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function $n(l) {
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
  function kn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function _f() {
    var l = T.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : d0(l.type));
  }
  function Of(l, t) {
    var a = T.p;
    try {
      return ((T.p = l), t());
    } finally {
      T.p = a;
    }
  }
  var la = Math.random().toString(36).slice(2),
    Rl = "__reactFiber$" + la,
    Jl = "__reactProps$" + la,
    Va = "__reactContainer$" + la,
    Fn = "__reactEvents$" + la,
    V0 = "__reactListeners$" + la,
    L0 = "__reactHandles$" + la,
    Mf = "__reactResources$" + la,
    ju = "__reactMarker$" + la;
  function In(l) {
    (delete l[Rl], delete l[Jl], delete l[Fn], delete l[V0], delete l[L0]);
  }
  function La(l) {
    var t = l[Rl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Va] || a[Rl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = $d(l); l !== null; ) {
            if ((a = l[Rl])) return a;
            l = $d(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Ka(l) {
    if ((l = l[Rl] || l[Va])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Cu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Ja(l) {
    var t = l[Mf];
    return (
      t ||
        (t = l[Mf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ul(l) {
    l[ju] = !0;
  }
  var Nf = new Set(),
    Df = {};
  function Oa(l, t) {
    (wa(l, t), wa(l + "Capture", t));
  }
  function wa(l, t) {
    for (Df[l] = t, l = 0; l < t.length; l++) Nf.add(t[l]);
  }
  var K0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Uf = {},
    jf = {};
  function J0(l) {
    return Kn.call(jf, l)
      ? !0
      : Kn.call(Uf, l)
        ? !1
        : K0.test(l)
          ? (jf[l] = !0)
          : ((Uf[l] = !0), !1);
  }
  function De(l, t, a) {
    if (J0(t))
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
  function qt(l, t, a, u) {
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
  function vt(l) {
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
  function Cf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function w0(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function Pn(l) {
    if (!l._valueTracker) {
      var t = Cf(l) ? "checked" : "value";
      l._valueTracker = w0(l, t, "" + l[t]);
    }
  }
  function Hf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Cf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function je(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var W0 = /[\n"\\]/g;
  function yt(l) {
    return l.replace(W0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l, t, a, u, e, n, c, i) {
    ((l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + vt(t))
          : l.value !== "" + vt(t) && (l.value = "" + vt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? tc(l, c, vt(t))
        : a != null
          ? tc(l, c, vt(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + vt(i))
        : l.removeAttribute("name"));
  }
  function Rf(l, t, a, u, e, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Pn(l);
        return;
      }
      ((a = a != null ? "" + vt(a) : ""),
        (t = t != null ? "" + vt(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = i ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      Pn(l));
  }
  function tc(l, t, a) {
    (t === "number" && je(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Wa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + vt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qf(l, t, a) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + vt(a) : "";
  }
  function xf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (tt(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = vt(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      Pn(l));
  }
  function $a(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var $0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Bf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || $0.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Yf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Bf(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && Bf(l, n, t[n]);
  }
  function ac(l) {
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
  var k0 = new Map([
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
      ["xHeight", "x-height"],
    ]),
    F0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ce(l) {
    return F0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function xt() {}
  var uc = null;
  function ec(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ka = null,
    Fa = null;
  function Gf(l) {
    var t = Ka(l);
    if (t && (l = t.stateNode)) {
      var a = l[Jl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (lc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + yt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Jl] || null;
                if (!e) throw Error(h(90));
                lc(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((u = a[t]), u.form === l.form && Hf(u));
          }
          break l;
        case "textarea":
          qf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Wa(l, !!a.multiple, t, !1));
      }
    }
  }
  var nc = !1;
  function Xf(l, t, a) {
    if (nc) return l(t, a);
    nc = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((nc = !1),
        (ka !== null || Fa !== null) &&
          (zn(), ka && ((t = ka), (l = Fa), (Fa = ka = null), Gf(t), l)))
      )
        for (t = 0; t < l.length; t++) Gf(l[t]);
    }
  }
  function Hu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Jl] || null;
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
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(h(231, t, typeof a));
    return a;
  }
  var Bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cc = !1;
  if (Bt)
    try {
      var Ru = {};
      (Object.defineProperty(Ru, "passive", {
        get: function () {
          cc = !0;
        },
      }),
        window.addEventListener("test", Ru, Ru),
        window.removeEventListener("test", Ru, Ru));
    } catch {
      cc = !1;
    }
  var ta = null,
    ic = null,
    He = null;
  function Qf() {
    if (He) return He;
    var l,
      t = ic,
      a = t.length,
      u,
      e = "value" in ta ? ta.value : ta.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (He = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Re(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function qe() {
    return !0;
  }
  function Zf() {
    return !1;
  }
  function wl(l) {
    function t(a, u, e, n, c) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var i in l)
        l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? qe
          : Zf),
        (this.isPropagationStopped = Zf),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = qe));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = qe));
        },
        persist: function () {},
        isPersistent: qe,
      }),
      t
    );
  }
  var Ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xe = wl(Ma),
    qu = R({}, Ma, { view: 0, detail: 0 }),
    I0 = wl(qu),
    fc,
    sc,
    xu,
    Be = R({}, qu, {
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
      getModifierState: dc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== xu &&
              (xu && l.type === "mousemove"
                ? ((fc = l.screenX - xu.screenX), (sc = l.screenY - xu.screenY))
                : (sc = fc = 0),
              (xu = l)),
            fc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : sc;
      },
    }),
    Vf = wl(Be),
    P0 = R({}, Be, { dataTransfer: 0 }),
    lm = wl(P0),
    tm = R({}, qu, { relatedTarget: 0 }),
    oc = wl(tm),
    am = R({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    um = wl(am),
    em = R({}, Ma, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    nm = wl(em),
    cm = R({}, Ma, { data: 0 }),
    Lf = wl(cm),
    im = {
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
      MozPrintableKey: "Unidentified",
    },
    fm = {
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
      224: "Meta",
    },
    sm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function om(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = sm[l])
        ? !!t[l]
        : !1;
  }
  function dc() {
    return om;
  }
  var dm = R({}, qu, {
      key: function (l) {
        if (l.key) {
          var t = im[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Re(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? fm[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dc,
      charCode: function (l) {
        return l.type === "keypress" ? Re(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Re(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    mm = wl(dm),
    vm = R({}, Be, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kf = wl(vm),
    ym = R({}, qu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dc,
    }),
    hm = wl(ym),
    rm = R({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gm = wl(rm),
    Sm = R({}, Be, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    bm = wl(Sm),
    zm = R({}, Ma, { newState: 0, oldState: 0 }),
    Am = wl(zm),
    Em = [9, 13, 27, 32],
    mc = Bt && "CompositionEvent" in window,
    Bu = null;
  Bt && "documentMode" in document && (Bu = document.documentMode);
  var Tm = Bt && "TextEvent" in window && !Bu,
    Jf = Bt && (!mc || (Bu && 8 < Bu && 11 >= Bu)),
    wf = " ",
    Wf = !1;
  function $f(l, t) {
    switch (l) {
      case "keyup":
        return Em.indexOf(t.keyCode) !== -1;
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
  function kf(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Ia = !1;
  function pm(l, t) {
    switch (l) {
      case "compositionend":
        return kf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wf = !0), wf);
      case "textInput":
        return ((l = t.data), l === wf && Wf ? null : l);
      default:
        return null;
    }
  }
  function _m(l, t) {
    if (Ia)
      return l === "compositionend" || (!mc && $f(l, t))
        ? ((l = Qf()), (He = ic = ta = null), (Ia = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Om = {
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
    week: !0,
  };
  function Ff(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Om[l.type] : t === "textarea";
  }
  function If(l, t, a, u) {
    (ka ? (Fa ? Fa.push(u) : (Fa = [u])) : (ka = u),
      (t = Mn(t, "onChange")),
      0 < t.length &&
        ((a = new xe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t })));
  }
  var Yu = null,
    Gu = null;
  function Mm(l) {
    qd(l, 0);
  }
  function Ye(l) {
    var t = Cu(l);
    if (Hf(t)) return l;
  }
  function Pf(l, t) {
    if (l === "change") return t;
  }
  var ls = !1;
  if (Bt) {
    var vc;
    if (Bt) {
      var yc = "oninput" in document;
      if (!yc) {
        var ts = document.createElement("div");
        (ts.setAttribute("oninput", "return;"),
          (yc = typeof ts.oninput == "function"));
      }
      vc = yc;
    } else vc = !1;
    ls = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function as() {
    Yu && (Yu.detachEvent("onpropertychange", us), (Gu = Yu = null));
  }
  function us(l) {
    if (l.propertyName === "value" && Ye(Gu)) {
      var t = [];
      (If(t, Gu, l, ec(l)), Xf(Mm, t));
    }
  }
  function Nm(l, t, a) {
    l === "focusin"
      ? (as(), (Yu = t), (Gu = a), Yu.attachEvent("onpropertychange", us))
      : l === "focusout" && as();
  }
  function Dm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Gu);
  }
  function Um(l, t) {
    if (l === "click") return Ye(t);
  }
  function jm(l, t) {
    if (l === "input" || l === "change") return Ye(t);
  }
  function Cm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Cm;
  function Xu(l, t) {
    if (nt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Kn.call(t, e) || !nt(l[e], t[e])) return !1;
    }
    return !0;
  }
  function es(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ns(l, t) {
    var a = es(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
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
      a = es(a);
    }
  }
  function cs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? cs(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function is(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = je(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = je(l.document);
    }
    return t;
  }
  function hc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Hm = Bt && "documentMode" in document && 11 >= document.documentMode,
    Pa = null,
    rc = null,
    Qu = null,
    gc = !1;
  function fs(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gc ||
      Pa == null ||
      Pa !== je(u) ||
      ((u = Pa),
      "selectionStart" in u && hc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Qu && Xu(Qu, u)) ||
        ((Qu = u),
        (u = Mn(rc, "onSelect")),
        0 < u.length &&
          ((t = new xe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = Pa))));
  }
  function Na(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var lu = {
      animationend: Na("Animation", "AnimationEnd"),
      animationiteration: Na("Animation", "AnimationIteration"),
      animationstart: Na("Animation", "AnimationStart"),
      transitionrun: Na("Transition", "TransitionRun"),
      transitionstart: Na("Transition", "TransitionStart"),
      transitioncancel: Na("Transition", "TransitionCancel"),
      transitionend: Na("Transition", "TransitionEnd"),
    },
    Sc = {},
    ss = {};
  Bt &&
    ((ss = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete lu.animationend.animation,
      delete lu.animationiteration.animation,
      delete lu.animationstart.animation),
    "TransitionEvent" in window || delete lu.transitionend.transition);
  function Da(l) {
    if (Sc[l]) return Sc[l];
    if (!lu[l]) return l;
    var t = lu[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ss) return (Sc[l] = t[a]);
    return l;
  }
  var os = Da("animationend"),
    ds = Da("animationiteration"),
    ms = Da("animationstart"),
    Rm = Da("transitionrun"),
    qm = Da("transitionstart"),
    xm = Da("transitioncancel"),
    vs = Da("transitionend"),
    ys = new Map(),
    bc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  bc.push("scrollEnd");
  function Ot(l, t) {
    (ys.set(l, t), Oa(t, [l]));
  }
  var Ge =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ht = [],
    tu = 0,
    zc = 0;
  function Xe() {
    for (var l = tu, t = (zc = tu = 0); t < l; ) {
      var a = ht[t];
      ht[t++] = null;
      var u = ht[t];
      ht[t++] = null;
      var e = ht[t];
      ht[t++] = null;
      var n = ht[t];
      if (((ht[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        (c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e));
      }
      n !== 0 && hs(a, e, n);
    }
  }
  function Qe(l, t, a, u) {
    ((ht[tu++] = l),
      (ht[tu++] = t),
      (ht[tu++] = a),
      (ht[tu++] = u),
      (zc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function Ac(l, t, a, u) {
    return (Qe(l, t, a, u), Ze(l));
  }
  function Ua(l, t) {
    return (Qe(l, null, null, t), Ze(l));
  }
  function hs(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - et(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Ze(l) {
    if (50 < se) throw ((se = 0), (Ui = null), Error(h(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var au = {};
  function Bm(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ct(l, t, a, u) {
    return new Bm(l, t, a, u);
  }
  function Ec(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Yt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = ct(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function rs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ve(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Ec(l) && (c = 1);
    else if (typeof l == "string")
      c = Zv(l, a, N.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case lt:
          return (
            (l = ct(31, a, t, e)),
            (l.elementType = lt),
            (l.lanes = n),
            l
          );
        case Hl:
          return ja(a.children, e, n, t);
        case pt:
          ((c = 8), (e |= 24));
          break;
        case Gl:
          return (
            (l = ct(12, a, t, e | 2)),
            (l.elementType = Gl),
            (l.lanes = n),
            l
          );
        case Pl:
          return (
            (l = ct(13, a, t, e)),
            (l.elementType = Pl),
            (l.lanes = n),
            l
          );
        case Xl:
          return (
            (l = ct(19, a, t, e)),
            (l.elementType = Xl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case rl:
                c = 10;
                break l;
              case mt:
                c = 9;
                break l;
              case Kl:
                c = 11;
                break l;
              case K:
                c = 14;
                break l;
              case Ml:
                ((c = 16), (u = null));
                break l;
            }
          ((c = 29),
            (a = Error(h(130, l === null ? "null" : typeof l, ""))),
            (u = null));
      }
    return (
      (t = ct(c, a, t, e)),
      (t.elementType = l),
      (t.type = u),
      (t.lanes = n),
      t
    );
  }
  function ja(l, t, a, u) {
    return ((l = ct(7, l, u, t)), (l.lanes = a), l);
  }
  function Tc(l, t, a) {
    return ((l = ct(6, l, null, t)), (l.lanes = a), l);
  }
  function gs(l) {
    var t = ct(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function pc(l, t, a) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Ss = new WeakMap();
  function rt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = Ss.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: gf(t) }), Ss.set(l, t), t);
    }
    return { value: l, source: t, stack: gf(t) };
  }
  var uu = [],
    eu = 0,
    Le = null,
    Zu = 0,
    gt = [],
    St = 0,
    aa = null,
    Dt = 1,
    Ut = "";
  function Gt(l, t) {
    ((uu[eu++] = Zu), (uu[eu++] = Le), (Le = l), (Zu = t));
  }
  function bs(l, t, a) {
    ((gt[St++] = Dt), (gt[St++] = Ut), (gt[St++] = aa), (aa = l));
    var u = Dt;
    l = Ut;
    var e = 32 - et(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - et(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      ((n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (Dt = (1 << (32 - et(t) + e)) | (a << e) | u),
        (Ut = n + l));
    } else ((Dt = (1 << n) | (a << e) | u), (Ut = l));
  }
  function _c(l) {
    l.return !== null && (Gt(l, 1), bs(l, 1, 0));
  }
  function Oc(l) {
    for (; l === Le; )
      ((Le = uu[--eu]), (uu[eu] = null), (Zu = uu[--eu]), (uu[eu] = null));
    for (; l === aa; )
      ((aa = gt[--St]),
        (gt[St] = null),
        (Ut = gt[--St]),
        (gt[St] = null),
        (Dt = gt[--St]),
        (gt[St] = null));
  }
  function zs(l, t) {
    ((gt[St++] = Dt),
      (gt[St++] = Ut),
      (gt[St++] = aa),
      (Dt = t.id),
      (Ut = t.overflow),
      (aa = l));
  }
  var ql = null,
    dl = null,
    I = !1,
    ua = null,
    bt = !1,
    Mc = Error(h(519));
  function ea(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Vu(rt(t, l)), Mc);
  }
  function As(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Rl] = l), (t[Jl] = u), a)) {
      case "dialog":
        ($("cancel", t), $("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < de.length; a++) $(de[a], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ($("error", t), $("load", t));
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        ($("invalid", t),
          Rf(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ));
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        ($("invalid", t), xf(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      Gd(t.textContent, a)
        ? (u.popover != null && ($("beforetoggle", t), $("toggle", t)),
          u.onScroll != null && $("scroll", t),
          u.onScrollEnd != null && $("scrollend", t),
          u.onClick != null && (t.onclick = xt),
          (t = !0))
        : (t = !1),
      t || ea(l, !0));
  }
  function Es(l) {
    for (ql = l.return; ql; )
      switch (ql.tag) {
        case 5:
        case 31:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          ql = ql.return;
      }
  }
  function nu(l) {
    if (l !== ql) return !1;
    if (!I) return (Es(l), (I = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Ki(l.type, l.memoizedProps))),
        (a = !a)),
      a && dl && ea(l),
      Es(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      dl = Wd(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      dl = Wd(l);
    } else
      t === 27
        ? ((t = dl), Sa(l.type) ? ((l = ki), (ki = null), (dl = l)) : (dl = t))
        : (dl = ql ? At(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ca() {
    ((dl = ql = null), (I = !1));
  }
  function Nc() {
    var l = ua;
    return (
      l !== null &&
        (Fl === null ? (Fl = l) : Fl.push.apply(Fl, l), (ua = null)),
      l
    );
  }
  function Vu(l) {
    ua === null ? (ua = [l]) : ua.push(l);
  }
  var Dc = d(null),
    Ha = null,
    Xt = null;
  function na(l, t, a) {
    (O(Dc, t._currentValue), (t._currentValue = a));
  }
  function Qt(l) {
    ((l._currentValue = Dc.current), A(Dc));
  }
  function Uc(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function jc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              ((n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                Uc(n.return, a, l),
                u || (c = null));
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(h(341));
        ((c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Uc(c, a, l),
          (c = null));
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            ((e.return = c.return), (c = e));
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function cu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(h(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = e.type;
          nt(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (e === ul.current) {
        if (((c = e.alternate), c === null)) throw Error(h(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(re) : (l = [re]));
      }
      e = e.return;
    }
    (l !== null && jc(t, l, a, u), (t.flags |= 262144));
  }
  function Ke(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ra(l) {
    ((Ha = l),
      (Xt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function xl(l) {
    return Ts(Ha, l);
  }
  function Je(l, t) {
    return (Ha === null && Ra(l), Ts(l, t));
  }
  function Ts(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Xt === null)) {
      if (l === null) throw Error(h(308));
      ((Xt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Xt = Xt.next = t;
    return a;
  }
  var Ym =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Gm = _.unstable_scheduleCallback,
    Xm = _.unstable_NormalPriority,
    El = {
      $$typeof: rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Cc() {
    return { controller: new Ym(), data: new Map(), refCount: 0 };
  }
  function Lu(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Gm(Xm, function () {
          l.controller.abort();
        }));
  }
  var Ku = null,
    Hc = 0,
    iu = 0,
    fu = null;
  function Qm(l, t) {
    if (Ku === null) {
      var a = (Ku = []);
      ((Hc = 0),
        (iu = xi()),
        (fu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (Hc++, t.then(ps, ps), t);
  }
  function ps() {
    if (--Hc === 0 && Ku !== null) {
      fu !== null && (fu.status = "fulfilled");
      var l = Ku;
      ((Ku = null), (iu = 0), (fu = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Zm(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var _s = o.S;
  o.S = function (l, t) {
    ((sd = at()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Qm(l, t),
      _s !== null && _s(l, t));
  };
  var qa = d(null);
  function Rc() {
    var l = qa.current;
    return l !== null ? l : ol.pooledCache;
  }
  function we(l, t) {
    t === null ? O(qa, qa.current) : O(qa, t.pool);
  }
  function Os() {
    var l = Rc();
    return l === null ? null : { parent: El._currentValue, pool: l };
  }
  var su = Error(h(460)),
    qc = Error(h(474)),
    We = Error(h(542)),
    $e = { then: function () {} };
  function Ms(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ns(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(xt, xt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Us(l), l);
      default:
        if (typeof t.status == "string") t.then(xt, xt);
        else {
          if (((l = ol), l !== null && 100 < l.shellSuspendCounter))
            throw Error(h(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Us(l), l);
        }
        throw ((Ba = t), su);
    }
  }
  function xa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ba = a), su)
        : a;
    }
  }
  var Ba = null;
  function Ds() {
    if (Ba === null) throw Error(h(459));
    var l = Ba;
    return ((Ba = null), l);
  }
  function Us(l) {
    if (l === su || l === We) throw Error(h(483));
  }
  var ou = null,
    Ju = 0;
  function ke(l) {
    var t = Ju;
    return ((Ju += 1), ou === null && (ou = []), Ns(ou, l, t));
  }
  function wu(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Fe(l, t) {
    throw t.$$typeof === L
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function js(l) {
    function t(m, s) {
      if (l) {
        var v = m.deletions;
        v === null ? ((m.deletions = [s]), (m.flags |= 16)) : v.push(s);
      }
    }
    function a(m, s) {
      if (!l) return null;
      for (; s !== null; ) (t(m, s), (s = s.sibling));
      return null;
    }
    function u(m) {
      for (var s = new Map(); m !== null; )
        (m.key !== null ? s.set(m.key, m) : s.set(m.index, m), (m = m.sibling));
      return s;
    }
    function e(m, s) {
      return ((m = Yt(m, s)), (m.index = 0), (m.sibling = null), m);
    }
    function n(m, s, v) {
      return (
        (m.index = v),
        l
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < s ? ((m.flags |= 67108866), s) : v)
              : ((m.flags |= 67108866), s))
          : ((m.flags |= 1048576), s)
      );
    }
    function c(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function i(m, s, v, b) {
      return s === null || s.tag !== 6
        ? ((s = Tc(v, m.mode, b)), (s.return = m), s)
        : ((s = e(s, v)), (s.return = m), s);
    }
    function f(m, s, v, b) {
      var C = v.type;
      return C === Hl
        ? S(m, s, v.props.children, b, v.key)
        : s !== null &&
            (s.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === Ml &&
                xa(C) === s.type))
          ? ((s = e(s, v.props)), wu(s, v), (s.return = m), s)
          : ((s = Ve(v.type, v.key, v.props, null, m.mode, b)),
            wu(s, v),
            (s.return = m),
            s);
    }
    function y(m, s, v, b) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== v.containerInfo ||
        s.stateNode.implementation !== v.implementation
        ? ((s = pc(v, m.mode, b)), (s.return = m), s)
        : ((s = e(s, v.children || [])), (s.return = m), s);
    }
    function S(m, s, v, b, C) {
      return s === null || s.tag !== 7
        ? ((s = ja(v, m.mode, b, C)), (s.return = m), s)
        : ((s = e(s, v)), (s.return = m), s);
    }
    function z(m, s, v) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Tc("" + s, m.mode, v)), (s.return = m), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Cl:
            return (
              (v = Ve(s.type, s.key, s.props, null, m.mode, v)),
              wu(v, s),
              (v.return = m),
              v
            );
          case zl:
            return ((s = pc(s, m.mode, v)), (s.return = m), s);
          case Ml:
            return ((s = xa(s)), z(m, s, v));
        }
        if (tt(s) || Ql(s))
          return ((s = ja(s, m.mode, v, null)), (s.return = m), s);
        if (typeof s.then == "function") return z(m, ke(s), v);
        if (s.$$typeof === rl) return z(m, Je(m, s), v);
        Fe(m, s);
      }
      return null;
    }
    function r(m, s, v, b) {
      var C = s !== null ? s.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return C !== null ? null : i(m, s, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Cl:
            return v.key === C ? f(m, s, v, b) : null;
          case zl:
            return v.key === C ? y(m, s, v, b) : null;
          case Ml:
            return ((v = xa(v)), r(m, s, v, b));
        }
        if (tt(v) || Ql(v)) return C !== null ? null : S(m, s, v, b, null);
        if (typeof v.then == "function") return r(m, s, ke(v), b);
        if (v.$$typeof === rl) return r(m, s, Je(m, v), b);
        Fe(m, v);
      }
      return null;
    }
    function g(m, s, v, b, C) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return ((m = m.get(v) || null), i(s, m, "" + b, C));
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Cl:
            return (
              (m = m.get(b.key === null ? v : b.key) || null),
              f(s, m, b, C)
            );
          case zl:
            return (
              (m = m.get(b.key === null ? v : b.key) || null),
              y(s, m, b, C)
            );
          case Ml:
            return ((b = xa(b)), g(m, s, v, b, C));
        }
        if (tt(b) || Ql(b))
          return ((m = m.get(v) || null), S(s, m, b, C, null));
        if (typeof b.then == "function") return g(m, s, v, ke(b), C);
        if (b.$$typeof === rl) return g(m, s, v, Je(s, b), C);
        Fe(s, b);
      }
      return null;
    }
    function M(m, s, v, b) {
      for (
        var C = null, P = null, U = s, V = (s = 0), F = null;
        U !== null && V < v.length;
        V++
      ) {
        U.index > V ? ((F = U), (U = null)) : (F = U.sibling);
        var ll = r(m, U, v[V], b);
        if (ll === null) {
          U === null && (U = F);
          break;
        }
        (l && U && ll.alternate === null && t(m, U),
          (s = n(ll, s, V)),
          P === null ? (C = ll) : (P.sibling = ll),
          (P = ll),
          (U = F));
      }
      if (V === v.length) return (a(m, U), I && Gt(m, V), C);
      if (U === null) {
        for (; V < v.length; V++)
          ((U = z(m, v[V], b)),
            U !== null &&
              ((s = n(U, s, V)),
              P === null ? (C = U) : (P.sibling = U),
              (P = U)));
        return (I && Gt(m, V), C);
      }
      for (U = u(U); V < v.length; V++)
        ((F = g(U, m, V, v[V], b)),
          F !== null &&
            (l && F.alternate !== null && U.delete(F.key === null ? V : F.key),
            (s = n(F, s, V)),
            P === null ? (C = F) : (P.sibling = F),
            (P = F)));
      return (
        l &&
          U.forEach(function (Ta) {
            return t(m, Ta);
          }),
        I && Gt(m, V),
        C
      );
    }
    function H(m, s, v, b) {
      if (v == null) throw Error(h(151));
      for (
        var C = null, P = null, U = s, V = (s = 0), F = null, ll = v.next();
        U !== null && !ll.done;
        V++, ll = v.next()
      ) {
        U.index > V ? ((F = U), (U = null)) : (F = U.sibling);
        var Ta = r(m, U, ll.value, b);
        if (Ta === null) {
          U === null && (U = F);
          break;
        }
        (l && U && Ta.alternate === null && t(m, U),
          (s = n(Ta, s, V)),
          P === null ? (C = Ta) : (P.sibling = Ta),
          (P = Ta),
          (U = F));
      }
      if (ll.done) return (a(m, U), I && Gt(m, V), C);
      if (U === null) {
        for (; !ll.done; V++, ll = v.next())
          ((ll = z(m, ll.value, b)),
            ll !== null &&
              ((s = n(ll, s, V)),
              P === null ? (C = ll) : (P.sibling = ll),
              (P = ll)));
        return (I && Gt(m, V), C);
      }
      for (U = u(U); !ll.done; V++, ll = v.next())
        ((ll = g(U, m, V, ll.value, b)),
          ll !== null &&
            (l &&
              ll.alternate !== null &&
              U.delete(ll.key === null ? V : ll.key),
            (s = n(ll, s, V)),
            P === null ? (C = ll) : (P.sibling = ll),
            (P = ll)));
      return (
        l &&
          U.forEach(function (Pv) {
            return t(m, Pv);
          }),
        I && Gt(m, V),
        C
      );
    }
    function sl(m, s, v, b) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Hl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Cl:
            l: {
              for (var C = v.key; s !== null; ) {
                if (s.key === C) {
                  if (((C = v.type), C === Hl)) {
                    if (s.tag === 7) {
                      (a(m, s.sibling),
                        (b = e(s, v.props.children)),
                        (b.return = m),
                        (m = b));
                      break l;
                    }
                  } else if (
                    s.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Ml &&
                      xa(C) === s.type)
                  ) {
                    (a(m, s.sibling),
                      (b = e(s, v.props)),
                      wu(b, v),
                      (b.return = m),
                      (m = b));
                    break l;
                  }
                  a(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              v.type === Hl
                ? ((b = ja(v.props.children, m.mode, b, v.key)),
                  (b.return = m),
                  (m = b))
                : ((b = Ve(v.type, v.key, v.props, null, m.mode, b)),
                  wu(b, v),
                  (b.return = m),
                  (m = b));
            }
            return c(m);
          case zl:
            l: {
              for (C = v.key; s !== null; ) {
                if (s.key === C)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === v.containerInfo &&
                    s.stateNode.implementation === v.implementation
                  ) {
                    (a(m, s.sibling),
                      (b = e(s, v.children || [])),
                      (b.return = m),
                      (m = b));
                    break l;
                  } else {
                    a(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              ((b = pc(v, m.mode, b)), (b.return = m), (m = b));
            }
            return c(m);
          case Ml:
            return ((v = xa(v)), sl(m, s, v, b));
        }
        if (tt(v)) return M(m, s, v, b);
        if (Ql(v)) {
          if (((C = Ql(v)), typeof C != "function")) throw Error(h(150));
          return ((v = C.call(v)), H(m, s, v, b));
        }
        if (typeof v.then == "function") return sl(m, s, ke(v), b);
        if (v.$$typeof === rl) return sl(m, s, Je(m, v), b);
        Fe(m, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          s !== null && s.tag === 6
            ? (a(m, s.sibling), (b = e(s, v)), (b.return = m), (m = b))
            : (a(m, s), (b = Tc(v, m.mode, b)), (b.return = m), (m = b)),
          c(m))
        : a(m, s);
    }
    return function (m, s, v, b) {
      try {
        Ju = 0;
        var C = sl(m, s, v, b);
        return ((ou = null), C);
      } catch (U) {
        if (U === su || U === We) throw U;
        var P = ct(29, U, null, m.mode);
        return ((P.lanes = b), (P.return = m), P);
      }
    };
  }
  var Ya = js(!0),
    Cs = js(!1),
    ca = !1;
  function xc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ia(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (tl & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ze(l)),
        hs(l, null, a),
        t
      );
    }
    return (Qe(l, u, t, a), Ze(l));
  }
  function Wu(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Tf(l, a));
    }
  }
  function Yc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Gc = !1;
  function $u() {
    if (Gc) {
      var l = fu;
      if (l !== null) throw l;
    }
  }
  function ku(l, t, a, u) {
    Gc = !1;
    var e = l.updateQueue;
    ca = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var f = i,
        y = f.next;
      ((f.next = null), c === null ? (n = y) : (c.next = y), (c = f));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (i = S.lastBaseUpdate),
        i !== c &&
          (i === null ? (S.firstBaseUpdate = y) : (i.next = y),
          (S.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var z = e.baseState;
      ((c = 0), (S = y = f = null), (i = n));
      do {
        var r = i.lane & -536870913,
          g = r !== i.lane;
        if (g ? (k & r) === r : (u & r) === r) {
          (r !== 0 && r === iu && (Gc = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var M = l,
              H = i;
            r = t;
            var sl = a;
            switch (H.tag) {
              case 1:
                if (((M = H.payload), typeof M == "function")) {
                  z = M.call(sl, z, r);
                  break l;
                }
                z = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = H.payload),
                  (r = typeof M == "function" ? M.call(sl, z, r) : M),
                  r == null)
                )
                  break l;
                z = R({}, z, r);
                break l;
              case 2:
                ca = !0;
            }
          }
          ((r = i.callback),
            r !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = e.callbacks),
              g === null ? (e.callbacks = [r]) : g.push(r)));
        } else
          ((g = {
            lane: r,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            S === null ? ((y = S = g), (f = z)) : (S = S.next = g),
            (c |= r));
        if (((i = i.next), i === null)) {
          if (((i = e.shared.pending), i === null)) break;
          ((g = i),
            (i = g.next),
            (g.next = null),
            (e.lastBaseUpdate = g),
            (e.shared.pending = null));
        }
      } while (!0);
      (S === null && (f = z),
        (e.baseState = f),
        (e.firstBaseUpdate = y),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (va |= c),
        (l.lanes = c),
        (l.memoizedState = z));
    }
  }
  function Hs(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function Rs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Hs(a[l], t);
  }
  var du = d(null),
    Ie = d(0);
  function qs(l, t) {
    ((l = kt), O(Ie, l), O(du, t), (kt = l | t.baseLanes));
  }
  function Xc() {
    (O(Ie, kt), O(du, du.current));
  }
  function Qc() {
    ((kt = Ie.current), A(du), A(Ie));
  }
  var it = d(null),
    zt = null;
  function sa(l) {
    var t = l.alternate;
    (O(Sl, Sl.current & 1),
      O(it, l),
      zt === null &&
        (t === null || du.current !== null || t.memoizedState !== null) &&
        (zt = l));
  }
  function Zc(l) {
    (O(Sl, Sl.current), O(it, l), zt === null && (zt = l));
  }
  function xs(l) {
    l.tag === 22
      ? (O(Sl, Sl.current), O(it, l), zt === null && (zt = l))
      : oa();
  }
  function oa() {
    (O(Sl, Sl.current), O(it, it.current));
  }
  function ft(l) {
    (A(it), zt === l && (zt = null), A(Sl));
  }
  var Sl = d(0);
  function Pe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Wi(a) || $i(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Zt = 0,
    Q = null,
    il = null,
    Tl = null,
    ln = !1,
    mu = !1,
    Ga = !1,
    tn = 0,
    Fu = 0,
    vu = null,
    Vm = 0;
  function yl() {
    throw Error(h(321));
  }
  function Vc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!nt(l[a], t[a])) return !1;
    return !0;
  }
  function Lc(l, t, a, u, e, n) {
    return (
      (Zt = n),
      (Q = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (o.H = l === null || l.memoizedState === null ? zo : ni),
      (Ga = !1),
      (n = a(u, e)),
      (Ga = !1),
      mu && (n = Ys(t, a, u, e)),
      Bs(l),
      n
    );
  }
  function Bs(l) {
    o.H = le;
    var t = il !== null && il.next !== null;
    if (((Zt = 0), (Tl = il = Q = null), (ln = !1), (Fu = 0), (vu = null), t))
      throw Error(h(300));
    l === null ||
      pl ||
      ((l = l.dependencies), l !== null && Ke(l) && (pl = !0));
  }
  function Ys(l, t, a, u) {
    Q = l;
    var e = 0;
    do {
      if ((mu && (vu = null), (Fu = 0), (mu = !1), 25 <= e))
        throw Error(h(301));
      if (((e += 1), (Tl = il = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((o.H = Ao), (n = t(a, u)));
    } while (mu);
    return n;
  }
  function Lm() {
    var l = o.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Iu(t) : t),
      (l = l.useState()[0]),
      (il !== null ? il.memoizedState : null) !== l && (Q.flags |= 1024),
      t
    );
  }
  function Kc() {
    var l = tn !== 0;
    return ((tn = 0), l);
  }
  function Jc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function wc(l) {
    if (ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      ln = !1;
    }
    ((Zt = 0), (Tl = il = Q = null), (mu = !1), (Fu = tn = 0), (vu = null));
  }
  function Ll() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Tl === null ? (Q.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl);
  }
  function bl() {
    if (il === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = il.next;
    var t = Tl === null ? Q.memoizedState : Tl.next;
    if (t !== null) ((Tl = t), (il = l));
    else {
      if (l === null)
        throw Q.alternate === null ? Error(h(467)) : Error(h(310));
      ((il = l),
        (l = {
          memoizedState: il.memoizedState,
          baseState: il.baseState,
          baseQueue: il.baseQueue,
          queue: il.queue,
          next: null,
        }),
        Tl === null ? (Q.memoizedState = Tl = l) : (Tl = Tl.next = l));
    }
    return Tl;
  }
  function an() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Iu(l) {
    var t = Fu;
    return (
      (Fu += 1),
      vu === null && (vu = []),
      (l = Ns(vu, l, t)),
      (t = Q),
      (Tl === null ? t.memoizedState : Tl.next) === null &&
        ((t = t.alternate),
        (o.H = t === null || t.memoizedState === null ? zo : ni)),
      l
    );
  }
  function un(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Iu(l);
      if (l.$$typeof === rl) return xl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Wc(l) {
    var t = null,
      a = Q.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = Q.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = an()), (Q.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ht;
    return (t.index++, a);
  }
  function Vt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function en(l) {
    var t = bl();
    return $c(t, il, l);
  }
  function $c(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        ((e.next = n.next), (n.next = c));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var i = (c = null),
        f = null,
        y = t,
        S = !1;
      do {
        var z = y.lane & -536870913;
        if (z !== y.lane ? (k & z) === z : (Zt & z) === z) {
          var r = y.revertLane;
          if (r === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              z === iu && (S = !0));
          else if ((Zt & r) === r) {
            ((y = y.next), r === iu && (S = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((i = f = z), (c = n)) : (f = f.next = z),
              (Q.lanes |= r),
              (va |= r));
          ((z = y.action),
            Ga && a(n, z),
            (n = y.hasEagerState ? y.eagerState : a(n, z)));
        } else
          ((r = {
            lane: z,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((i = f = r), (c = n)) : (f = f.next = r),
            (Q.lanes |= z),
            (va |= z));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (f === null ? (c = n) : (f.next = i),
        !nt(n, l.memoizedState) && ((pl = !0), S && ((a = fu), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function kc(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== e);
      (nt(n, t.memoizedState) || (pl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function Gs(l, t, a) {
    var u = Q,
      e = bl(),
      n = I;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var c = !nt((il || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (pl = !0)),
      (e = e.queue),
      Pc(Zs.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (Tl !== null && Tl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        yu(9, { destroy: void 0 }, Qs.bind(null, u, e, a, t), null),
        ol === null)
      )
        throw Error(h(349));
      n || (Zt & 127) !== 0 || Xs(u, t, a);
    }
    return a;
  }
  function Xs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Q.updateQueue),
      t === null
        ? ((t = an()), (Q.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Qs(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), Vs(t) && Ls(l));
  }
  function Zs(l, t, a) {
    return a(function () {
      Vs(t) && Ls(l);
    });
  }
  function Vs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !nt(l, a);
    } catch {
      return !0;
    }
  }
  function Ls(l) {
    var t = Ua(l, 2);
    t !== null && Il(t, l, 2);
  }
  function Fc(l) {
    var t = Ll();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ga)) {
        Pt(!0);
        try {
          a();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ks(l, t, a, u) {
    return ((l.baseState = a), $c(l, il, typeof u == "function" ? u : Vt));
  }
  function Km(l, t, a, u, e) {
    if (fn(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (o.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Js(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Js(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = o.T,
        c = {};
      o.T = c;
      try {
        var i = a(e, u),
          f = o.S;
        (f !== null && f(c, i), ws(l, t, i));
      } catch (y) {
        Ic(l, t, y);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (o.T = n));
      }
    } else
      try {
        ((n = a(e, u)), ws(l, t, n));
      } catch (y) {
        Ic(l, t, y);
      }
  }
  function ws(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Ws(l, t, u);
          },
          function (u) {
            return Ic(l, t, u);
          },
        )
      : Ws(l, t, a);
  }
  function Ws(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      $s(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Js(l, a))));
  }
  function Ic(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), $s(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function $s(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ks(l, t) {
    return t;
  }
  function Fs(l, t) {
    if (I) {
      var a = ol.formState;
      if (a !== null) {
        l: {
          var u = Q;
          if (I) {
            if (dl) {
              t: {
                for (var e = dl, n = bt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = At(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((dl = At(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            ea(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Ll()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ks,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = go.bind(null, Q, u)),
      (u.dispatch = a),
      (u = Fc(!1)),
      (n = ei.bind(null, Q, !1, u.queue)),
      (u = Ll()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = Km.bind(null, Q, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Is(l) {
    var t = bl();
    return Ps(t, il, l);
  }
  function Ps(l, t, a) {
    if (
      ((t = $c(l, t, ks)[0]),
      (l = en(Vt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Iu(t);
      } catch (c) {
        throw c === su ? We : c;
      }
    else u = t;
    t = bl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((Q.flags |= 2048),
        yu(9, { destroy: void 0 }, Jm.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function Jm(l, t) {
    l.action = t;
  }
  function lo(l) {
    var t = bl(),
      a = il;
    if (a !== null) return Ps(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function yu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = Q.updateQueue),
      t === null && ((t = an()), (Q.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function to() {
    return bl().memoizedState;
  }
  function nn(l, t, a, u) {
    var e = Ll();
    ((Q.flags |= l),
      (e.memoizedState = yu(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u,
      )));
  }
  function cn(l, t, a, u) {
    var e = bl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    il !== null && u !== null && Vc(u, il.memoizedState.deps)
      ? (e.memoizedState = yu(t, n, a, u))
      : ((Q.flags |= l), (e.memoizedState = yu(1 | t, n, a, u)));
  }
  function ao(l, t) {
    nn(8390656, 8, l, t);
  }
  function Pc(l, t) {
    cn(2048, 8, l, t);
  }
  function wm(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) ((t = an()), (Q.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function uo(l) {
    var t = bl().memoizedState;
    return (
      wm({ ref: t, nextImpl: l }),
      function () {
        if ((tl & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function eo(l, t) {
    return cn(4, 2, l, t);
  }
  function no(l, t) {
    return cn(4, 4, l, t);
  }
  function co(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function io(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), cn(4, 4, co.bind(null, t, l), a));
  }
  function li() {}
  function fo(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Vc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function so(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Vc(t, u[1])) return u[0];
    if (((u = l()), Ga)) {
      Pt(!0);
      try {
        l();
      } finally {
        Pt(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function ti(l, t, a) {
    return a === void 0 || ((Zt & 1073741824) !== 0 && (k & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = dd()), (Q.lanes |= l), (va |= l), a);
  }
  function oo(l, t, a, u) {
    return nt(a, t)
      ? a
      : du.current !== null
        ? ((l = ti(l, a, u)), nt(l, t) || (pl = !0), l)
        : (Zt & 42) === 0 || ((Zt & 1073741824) !== 0 && (k & 261930) === 0)
          ? ((pl = !0), (l.memoizedState = a))
          : ((l = dd()), (Q.lanes |= l), (va |= l), t);
  }
  function mo(l, t, a, u, e) {
    var n = T.p;
    T.p = n !== 0 && 8 > n ? n : 8;
    var c = o.T,
      i = {};
    ((o.T = i), ei(l, !1, t, a));
    try {
      var f = e(),
        y = o.S;
      if (
        (y !== null && y(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var S = Zm(f, u);
        Pu(l, t, S, dt(l));
      } else Pu(l, t, u, dt(l));
    } catch (z) {
      Pu(l, t, { then: function () {}, status: "rejected", reason: z }, dt());
    } finally {
      ((T.p = n),
        c !== null && i.types !== null && (c.types = i.types),
        (o.T = c));
    }
  }
  function Wm() {}
  function ai(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = vo(l).queue;
    mo(
      l,
      e,
      t,
      j,
      a === null
        ? Wm
        : function () {
            return (yo(l), a(u));
          },
    );
  }
  function vo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: j,
      baseState: j,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: j,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function yo(l) {
    var t = vo(l);
    (t.next === null && (t = l.alternate.memoizedState),
      Pu(l, t.next.queue, {}, dt()));
  }
  function ui() {
    return xl(re);
  }
  function ho() {
    return bl().memoizedState;
  }
  function ro() {
    return bl().memoizedState;
  }
  function $m(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = dt();
          l = ia(a);
          var u = fa(t, l, a);
          (u !== null && (Il(u, t, a), Wu(u, t, a)),
            (t = { cache: Cc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function km(l, t, a) {
    var u = dt();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fn(l)
        ? So(t, a)
        : ((a = Ac(l, t, a, u)), a !== null && (Il(a, l, u), bo(a, t, u))));
  }
  function go(l, t, a) {
    var u = dt();
    Pu(l, t, a, u);
  }
  function Pu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fn(l)) So(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = i), nt(i, c)))
            return (Qe(l, t, e, 0), ol === null && Xe(), !1);
        } catch {}
      if (((a = Ac(l, t, e, u)), a !== null))
        return (Il(a, l, u), bo(a, t, u), !0);
    }
    return !1;
  }
  function ei(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: xi(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fn(l))
    ) {
      if (t) throw Error(h(479));
    } else ((t = Ac(l, a, u, 2)), t !== null && Il(t, l, 2));
  }
  function fn(l) {
    var t = l.alternate;
    return l === Q || (t !== null && t === Q);
  }
  function So(l, t) {
    mu = ln = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function bo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Tf(l, a));
    }
  }
  var le = {
    readContext: xl,
    use: un,
    useCallback: yl,
    useContext: yl,
    useEffect: yl,
    useImperativeHandle: yl,
    useLayoutEffect: yl,
    useInsertionEffect: yl,
    useMemo: yl,
    useReducer: yl,
    useRef: yl,
    useState: yl,
    useDebugValue: yl,
    useDeferredValue: yl,
    useTransition: yl,
    useSyncExternalStore: yl,
    useId: yl,
    useHostTransitionStatus: yl,
    useFormState: yl,
    useActionState: yl,
    useOptimistic: yl,
    useMemoCache: yl,
    useCacheRefresh: yl,
  };
  le.useEffectEvent = yl;
  var zo = {
      readContext: xl,
      use: un,
      useCallback: function (l, t) {
        return ((Ll().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: xl,
      useEffect: ao,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          nn(4194308, 4, co.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return nn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        nn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Ll();
        t = t === void 0 ? null : t;
        var u = l();
        if (Ga) {
          Pt(!0);
          try {
            l();
          } finally {
            Pt(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Ll();
        if (a !== void 0) {
          var e = a(t);
          if (Ga) {
            Pt(!0);
            try {
              a(t);
            } finally {
              Pt(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = km.bind(null, Q, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Ll();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Fc(l);
        var t = l.queue,
          a = go.bind(null, Q, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: li,
      useDeferredValue: function (l, t) {
        var a = Ll();
        return ti(a, l, t);
      },
      useTransition: function () {
        var l = Fc(!1);
        return (
          (l = mo.bind(null, Q, l.queue, !0, !1)),
          (Ll().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = Q,
          e = Ll();
        if (I) {
          if (a === void 0) throw Error(h(407));
          a = a();
        } else {
          if (((a = t()), ol === null)) throw Error(h(349));
          (k & 127) !== 0 || Xs(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          ao(Zs.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          yu(9, { destroy: void 0 }, Qs.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Ll(),
          t = ol.identifierPrefix;
        if (I) {
          var a = Ut,
            u = Dt;
          ((a = (u & ~(1 << (32 - et(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = tn++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Vm++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: ui,
      useFormState: Fs,
      useActionState: Fs,
      useOptimistic: function (l) {
        var t = Ll();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = ei.bind(null, Q, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Wc,
      useCacheRefresh: function () {
        return (Ll().memoizedState = $m.bind(null, Q));
      },
      useEffectEvent: function (l) {
        var t = Ll(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((tl & 2) !== 0) throw Error(h(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ni = {
      readContext: xl,
      use: un,
      useCallback: fo,
      useContext: xl,
      useEffect: Pc,
      useImperativeHandle: io,
      useInsertionEffect: eo,
      useLayoutEffect: no,
      useMemo: so,
      useReducer: en,
      useRef: to,
      useState: function () {
        return en(Vt);
      },
      useDebugValue: li,
      useDeferredValue: function (l, t) {
        var a = bl();
        return oo(a, il.memoizedState, l, t);
      },
      useTransition: function () {
        var l = en(Vt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Iu(l), t];
      },
      useSyncExternalStore: Gs,
      useId: ho,
      useHostTransitionStatus: ui,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (l, t) {
        var a = bl();
        return Ks(a, il, l, t);
      },
      useMemoCache: Wc,
      useCacheRefresh: ro,
    };
  ni.useEffectEvent = uo;
  var Ao = {
    readContext: xl,
    use: un,
    useCallback: fo,
    useContext: xl,
    useEffect: Pc,
    useImperativeHandle: io,
    useInsertionEffect: eo,
    useLayoutEffect: no,
    useMemo: so,
    useReducer: kc,
    useRef: to,
    useState: function () {
      return kc(Vt);
    },
    useDebugValue: li,
    useDeferredValue: function (l, t) {
      var a = bl();
      return il === null ? ti(a, l, t) : oo(a, il.memoizedState, l, t);
    },
    useTransition: function () {
      var l = kc(Vt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : Iu(l), t];
    },
    useSyncExternalStore: Gs,
    useId: ho,
    useHostTransitionStatus: ui,
    useFormState: lo,
    useActionState: lo,
    useOptimistic: function (l, t) {
      var a = bl();
      return il !== null
        ? Ks(a, il, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Wc,
    useCacheRefresh: ro,
  };
  Ao.useEffectEvent = uo;
  function ci(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : R({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var ii = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = dt(),
        e = ia(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = fa(l, e, u)),
        t !== null && (Il(t, l, u), Wu(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = dt(),
        e = ia(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = fa(l, e, u)),
        t !== null && (Il(t, l, u), Wu(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = dt(),
        u = ia(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = fa(l, u, a)),
        t !== null && (Il(t, l, a), Wu(t, l, a)));
    },
  };
  function Eo(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xu(a, u) || !Xu(e, n)
          : !0
    );
  }
  function To(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && ii.enqueueReplaceState(t, t.state, null));
  }
  function Xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = R({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function po(l) {
    Ge(l);
  }
  function _o(l) {
    console.error(l);
  }
  function Oo(l) {
    Ge(l);
  }
  function sn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Mo(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function fi(l, t, a) {
    return (
      (a = ia(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        sn(l, t);
      }),
      a
    );
  }
  function No(l) {
    return ((l = ia(l)), (l.tag = 3), l);
  }
  function Do(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          Mo(t, a, u);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (Mo(t, a, u),
          typeof e != "function" &&
            (ya === null ? (ya = new Set([this])) : ya.add(this)));
        var i = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function Fm(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && cu(t, a, e, !0),
        (a = it.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              zt === null ? An() : a.alternate === null && hl === 0 && (hl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Hi(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Hi(l, u, e)),
              !1
            );
        }
        throw Error(h(435, a.tag));
      }
      return (Hi(l, u, e), An(), !1);
    }
    if (I)
      return (
        (t = it.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Mc && ((l = Error(h(422), { cause: u })), Vu(rt(l, a))))
          : (u !== Mc && ((t = Error(h(423), { cause: u })), Vu(rt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = rt(u, a)),
            (e = fi(l.stateNode, u, e)),
            Yc(l, e),
            hl !== 4 && (hl = 2)),
        !1
      );
    var n = Error(h(520), { cause: u });
    if (
      ((n = rt(n, a)),
      fe === null ? (fe = [n]) : fe.push(n),
      hl !== 4 && (hl = 2),
      t === null)
    )
      return !0;
    ((u = rt(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = fi(a.stateNode, u, l)),
            Yc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ya === null || !ya.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = No(e)),
              Do(e, l, a, u),
              Yc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var si = Error(h(461)),
    pl = !1;
  function Bl(l, t, a, u) {
    t.child = l === null ? Cs(t, null, a, u) : Ya(t, l.child, a, u);
  }
  function Uo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var i in u) i !== "ref" && (c[i] = u[i]);
    } else c = u;
    return (
      Ra(t),
      (u = Lc(l, t, a, c, n, e)),
      (i = Kc()),
      l !== null && !pl
        ? (Jc(l, t, e), Lt(l, t, e))
        : (I && i && _c(t), (t.flags |= 1), Bl(l, t, u, e), t.child)
    );
  }
  function jo(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Ec(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Co(l, t, n, u, e))
        : ((l = Ve(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !gi(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Xu), a(c, u) && l.ref === t.ref)
      )
        return Lt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Yt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Co(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xu(n, u) && l.ref === t.ref)
        if (((pl = !1), (t.pendingProps = u = n), gi(l, e)))
          (l.flags & 131072) !== 0 && (pl = !0);
        else return ((t.lanes = l.lanes), Lt(l, t, e));
    }
    return oi(l, t, a, u, e);
  }
  function Ho(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null; )
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return Ro(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && we(t, n !== null ? n.cachePool : null),
          n !== null ? qs(t, n) : Xc(),
          xs(t));
      else
        return (
          (u = t.lanes = 536870912),
          Ro(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (we(t, n.cachePool), qs(t, n), oa(), (t.memoizedState = null))
        : (l !== null && we(t, null), Xc(), oa());
    return (Bl(l, t, e, a), t.child);
  }
  function te(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Ro(l, t, a, u, e) {
    var n = Rc();
    return (
      (n = n === null ? null : { parent: El._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && we(t, null),
      Xc(),
      xs(t),
      l !== null && cu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function on(l, t) {
    return (
      (t = mn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function qo(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = on(t, t.pendingProps)),
      (l.flags |= 2),
      ft(t),
      (t.memoizedState = null),
      l
    );
  }
  function Im(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (I) {
        if (u.mode === "hidden")
          return ((l = on(t, u)), (t.lanes = 536870912), te(null, l));
        if (
          (Zc(t),
          (l = dl)
            ? ((l = wd(l, bt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: aa !== null ? { id: Dt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = gs(l)),
                (a.return = t),
                (t.child = a),
                (ql = t),
                (dl = null)))
            : (l = null),
          l === null)
        )
          throw ea(t);
        return ((t.lanes = 536870912), null);
      }
      return on(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((Zc(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = qo(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(h(558));
      else if (
        (pl || cu(l, t, a, !1), (e = (a & l.childLanes) !== 0), pl || e)
      ) {
        if (
          ((u = ol),
          u !== null && ((c = pf(u, a)), c !== 0 && c !== n.retryLane))
        )
          throw ((n.retryLane = c), Ua(l, c), Il(u, l, c), si);
        (An(), (t = qo(l, t, a)));
      } else
        ((l = n.treeContext),
          (dl = At(c.nextSibling)),
          (ql = t),
          (I = !0),
          (ua = null),
          (bt = !1),
          l !== null && zs(t, l),
          (t = on(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Yt(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function dn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function oi(l, t, a, u, e) {
    return (
      Ra(t),
      (a = Lc(l, t, a, u, void 0, e)),
      (u = Kc()),
      l !== null && !pl
        ? (Jc(l, t, e), Lt(l, t, e))
        : (I && u && _c(t), (t.flags |= 1), Bl(l, t, a, e), t.child)
    );
  }
  function xo(l, t, a, u, e, n) {
    return (
      Ra(t),
      (t.updateQueue = null),
      (a = Ys(t, u, a, e)),
      Bs(l),
      (u = Kc()),
      l !== null && !pl
        ? (Jc(l, t, n), Lt(l, t, n))
        : (I && u && _c(t), (t.flags |= 1), Bl(l, t, a, n), t.child)
    );
  }
  function Bo(l, t, a, u, e) {
    if ((Ra(t), t.stateNode === null)) {
      var n = au,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = xl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ii),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        xc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? xl(c) : au),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (ci(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && ii.enqueueReplaceState(n, n.state, null),
          ku(t, u, n, e),
          $u(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        f = Xa(a, i);
      n.props = f;
      var y = n.context,
        S = a.contextType;
      ((c = au), typeof S == "object" && S !== null && (c = xl(S)));
      var z = a.getDerivedStateFromProps;
      ((S =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || y !== c) && To(t, n, u, c)),
        (ca = !1));
      var r = t.memoizedState;
      ((n.state = r),
        ku(t, u, n, e),
        $u(),
        (y = t.memoizedState),
        i || r !== y || ca
          ? (typeof z == "function" && (ci(t, a, z, u), (y = t.memoizedState)),
            (f = ca || Eo(t, a, f, u, r, y, c))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = y)),
            (n.props = u),
            (n.state = y),
            (n.context = c),
            (u = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((n = t.stateNode),
        Bc(l, t),
        (c = t.memoizedProps),
        (S = Xa(a, c)),
        (n.props = S),
        (z = t.pendingProps),
        (r = n.context),
        (y = a.contextType),
        (f = au),
        typeof y == "object" && y !== null && (f = xl(y)),
        (i = a.getDerivedStateFromProps),
        (y =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== z || r !== f) && To(t, n, u, f)),
        (ca = !1),
        (r = t.memoizedState),
        (n.state = r),
        ku(t, u, n, e),
        $u());
      var g = t.memoizedState;
      c !== z ||
      r !== g ||
      ca ||
      (l !== null && l.dependencies !== null && Ke(l.dependencies))
        ? (typeof i == "function" && (ci(t, a, i, u), (g = t.memoizedState)),
          (S =
            ca ||
            Eo(t, a, S, u, r, g, f) ||
            (l !== null && l.dependencies !== null && Ke(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = g)),
          (n.props = u),
          (n.state = g),
          (n.context = f),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      dn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ya(t, l.child, null, e)),
              (t.child = Ya(t, null, a, e)))
            : Bl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Lt(l, t, e)),
      l
    );
  }
  function Yo(l, t, a, u) {
    return (Ca(), (t.flags |= 256), Bl(l, t, a, u), t.child);
  }
  var di = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function mi(l) {
    return { baseLanes: l, cachePool: Os() };
  }
  function vi(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ot), l);
  }
  function Go(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (I) {
        if (
          (e ? sa(t) : oa(),
          (l = dl)
            ? ((l = wd(l, bt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: aa !== null ? { id: Dt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = gs(l)),
                (a.return = t),
                (t.child = a),
                (ql = t),
                (dl = null)))
            : (l = null),
          l === null)
        )
          throw ea(t);
        return ($i(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var i = u.children;
      return (
        (u = u.fallback),
        e
          ? (oa(),
            (e = t.mode),
            (i = mn({ mode: "hidden", children: i }, e)),
            (u = ja(u, e, a, null)),
            (i.return = t),
            (u.return = t),
            (i.sibling = u),
            (t.child = i),
            (u = t.child),
            (u.memoizedState = mi(a)),
            (u.childLanes = vi(l, c, a)),
            (t.memoizedState = di),
            te(null, u))
          : (sa(t), yi(t, i))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((i = f.dehydrated), i !== null)) {
      if (n)
        t.flags & 256
          ? (sa(t), (t.flags &= -257), (t = hi(l, t, a)))
          : t.memoizedState !== null
            ? (oa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (oa(),
              (i = u.fallback),
              (e = t.mode),
              (u = mn({ mode: "visible", children: u.children }, e)),
              (i = ja(i, e, a, null)),
              (i.flags |= 2),
              (u.return = t),
              (i.return = t),
              (u.sibling = i),
              (t.child = u),
              Ya(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = mi(a)),
              (u.childLanes = vi(l, c, a)),
              (t.memoizedState = di),
              (t = te(null, u)));
      else if ((sa(t), $i(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var y = c.dgst;
        ((c = y),
          (u = Error(h(419))),
          (u.stack = ""),
          (u.digest = c),
          Vu({ value: u, source: null, stack: null }),
          (t = hi(l, t, a)));
      } else if (
        (pl || cu(l, t, a, !1), (c = (a & l.childLanes) !== 0), pl || c)
      ) {
        if (
          ((c = ol),
          c !== null && ((u = pf(c, a)), u !== 0 && u !== f.retryLane))
        )
          throw ((f.retryLane = u), Ua(l, u), Il(c, l, u), si);
        (Wi(i) || An(), (t = hi(l, t, a)));
      } else
        Wi(i)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (dl = At(i.nextSibling)),
            (ql = t),
            (I = !0),
            (ua = null),
            (bt = !1),
            l !== null && zs(t, l),
            (t = yi(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (oa(),
        (i = u.fallback),
        (e = t.mode),
        (f = l.child),
        (y = f.sibling),
        (u = Yt(f, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (i = Yt(y, i)) : ((i = ja(i, e, a, null)), (i.flags |= 2)),
        (i.return = t),
        (u.return = t),
        (u.sibling = i),
        (t.child = u),
        te(null, u),
        (u = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = mi(a))
          : ((e = i.cachePool),
            e !== null
              ? ((f = El._currentValue),
                (e = e.parent !== f ? { parent: f, pool: f } : e))
              : (e = Os()),
            (i = { baseLanes: i.baseLanes | a, cachePool: e })),
        (u.memoizedState = i),
        (u.childLanes = vi(l, c, a)),
        (t.memoizedState = di),
        te(l.child, u))
      : (sa(t),
        (a = l.child),
        (l = a.sibling),
        (a = Yt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function yi(l, t) {
    return (
      (t = mn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function mn(l, t) {
    return ((l = ct(22, l, null, t)), (l.lanes = 0), l);
  }
  function hi(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = yi(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Xo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Uc(l.return, t, a));
  }
  function ri(l, t, a, u, e, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = u),
        (c.tail = a),
        (c.tailMode = e),
        (c.treeForkCount = n));
  }
  function Qo(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var c = Sl.current,
      i = (c & 2) !== 0;
    if (
      (i ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      O(Sl, c),
      Bl(l, t, u, a),
      (u = I ? Zu : 0),
      !i && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Xo(l, a, t);
        else if (l.tag === 19) Xo(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          ((l = a.alternate),
            l !== null && Pe(l) === null && (e = a),
            (a = a.sibling));
        ((a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          ri(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && Pe(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        ri(t, !0, a, null, n, u);
        break;
      case "together":
        ri(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (va |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((cu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Yt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Yt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function gi(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ke(l)));
  }
  function Pm(l, t, a) {
    switch (t.tag) {
      case 3:
        (Vl(t, t.stateNode.containerInfo),
          na(t, El, l.memoizedState.cache),
          Ca());
        break;
      case 27:
      case 5:
        Mu(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        na(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Zc(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (sa(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Go(l, t, a)
              : (sa(t), (l = Lt(l, t, a)), l !== null ? l.sibling : null);
        sa(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (cu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Qo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          O(Sl, Sl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ho(l, t, a, t.pendingProps));
      case 24:
        na(t, El, l.memoizedState.cache);
    }
    return Lt(l, t, a);
  }
  function Zo(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) pl = !0;
      else {
        if (!gi(l, a) && (t.flags & 128) === 0) return ((pl = !1), Pm(l, t, a));
        pl = (l.flags & 131072) !== 0;
      }
    else ((pl = !1), I && (t.flags & 1048576) !== 0 && bs(t, Zu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = xa(t.elementType)), (t.type = l), typeof l == "function"))
            Ec(l)
              ? ((u = Xa(l, u)), (t.tag = 1), (t = Bo(null, t, l, u, a)))
              : ((t.tag = 0), (t = oi(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Kl) {
                ((t.tag = 11), (t = Uo(null, t, l, u, a)));
                break l;
              } else if (e === K) {
                ((t.tag = 14), (t = jo(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = _t(l) || l), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return oi(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = Xa(u, t.pendingProps)), Bo(l, t, u, e, a));
      case 3:
        l: {
          if ((Vl(t, t.stateNode.containerInfo), l === null))
            throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), Bc(l, t), ku(t, u, null, a));
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            na(t, El, u),
            u !== n.cache && jc(t, [El], a, !0),
            $u(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Yo(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = rt(Error(h(424)), t)), Vu(e), (t = Yo(l, t, u, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  dl = At(l.firstChild),
                  ql = t,
                  I = !0,
                  ua = null,
                  bt = !0,
                  a = Cs(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Ca(), u === e)) {
              t = Lt(l, t, a);
              break l;
            }
            Bl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dn(l, t),
          l === null
            ? (a = Pd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : I ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Nn(w.current).createElement(a)),
                (u[Rl] = t),
                (u[Jl] = l),
                Yl(u, a, l),
                Ul(u),
                (t.stateNode = u))
            : (t.memoizedState = Pd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Mu(t),
          l === null &&
            I &&
            ((u = t.stateNode = kd(t.type, t.pendingProps, w.current)),
            (ql = t),
            (bt = !0),
            (e = dl),
            Sa(t.type) ? ((ki = e), (dl = At(u.firstChild))) : (dl = e)),
          Bl(l, t, t.pendingProps.children, a),
          dn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            I &&
            ((e = u = dl) &&
              ((u = Dv(u, t.type, t.pendingProps, bt)),
              u !== null
                ? ((t.stateNode = u),
                  (ql = t),
                  (dl = At(u.firstChild)),
                  (bt = !1),
                  (e = !0))
                : (e = !1)),
            e || ea(t)),
          Mu(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Ki(e, n) ? (u = null) : c !== null && Ki(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Lc(l, t, Lm, null, null, a)), (re._currentValue = e)),
          dn(l, t),
          Bl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            I &&
            ((l = a = dl) &&
              ((a = Uv(a, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a), (ql = t), (dl = null), (l = !0))
                : (l = !1)),
            l || ea(t)),
          null
        );
      case 13:
        return Go(l, t, a);
      case 4:
        return (
          Vl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ya(t, null, u, a)) : Bl(l, t, u, a),
          t.child
        );
      case 11:
        return Uo(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Bl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Bl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Bl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (u = t.pendingProps),
          na(t, t.type, u.value),
          Bl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ra(t),
          (e = xl(e)),
          (u = u(e)),
          (t.flags |= 1),
          Bl(l, t, u, a),
          t.child
        );
      case 14:
        return jo(l, t, t.type, t.pendingProps, a);
      case 15:
        return Co(l, t, t.type, t.pendingProps, a);
      case 19:
        return Qo(l, t, a);
      case 31:
        return Im(l, t, a);
      case 22:
        return Ho(l, t, a, t.pendingProps);
      case 24:
        return (
          Ra(t),
          (u = xl(El)),
          l === null
            ? ((e = Rc()),
              e === null &&
                ((e = ol),
                (n = Cc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              xc(t),
              na(t, El, e))
            : ((l.lanes & a) !== 0 && (Bc(l, t), ku(t, null, null, a), $u()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  na(t, El, u))
                : ((u = n.cache),
                  na(t, El, u),
                  u !== e.cache && jc(t, [El], a, !0))),
          Bl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Kt(l) {
    l.flags |= 4;
  }
  function Si(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (hd()) l.flags |= 8192;
        else throw ((Ba = $e), qc);
    } else l.flags &= -16777217;
  }
  function Vo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !e0(t)))
      if (hd()) l.flags |= 8192;
      else throw ((Ba = $e), qc);
  }
  function vn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Af() : 536870912), (l.lanes |= t), (Su |= t)));
  }
  function ae(l, t) {
    if (!I)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function lv(l, t, a) {
    var u = t.pendingProps;
    switch ((Oc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ml(t), null);
      case 1:
        return (ml(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Qt(El),
          gl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (nu(t)
              ? Kt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Nc())),
          ml(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Kt(t),
              n !== null ? (ml(t), Vo(t, n)) : (ml(t), Si(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Kt(t), ml(t), Vo(t, n))
                : (ml(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== u && Kt(t),
                ml(t),
                Si(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (Te(t),
          (a = w.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Kt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return (ml(t), null);
          }
          ((l = N.current),
            nu(t) ? As(t) : ((l = kd(e, u, a)), (t.stateNode = l), Kt(t)));
        }
        return (ml(t), null);
      case 5:
        if ((Te(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Kt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return (ml(t), null);
          }
          if (((n = N.current), nu(t))) As(t);
          else {
            var c = Nn(w.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? c.createElement("select", { is: u.is })
                        : c.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? c.createElement(e, { is: u.is })
                        : c.createElement(e);
                }
            }
            ((n[Rl] = t), (n[Jl] = u));
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((Yl(n, e, u), e)) {
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
            u && Kt(t);
          }
        }
        return (
          ml(t),
          Si(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Kt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(h(166));
          if (((l = w.current), nu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = ql),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[Rl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                Gd(l.nodeValue, a)
              )),
              l || ea(t, !0));
          } else
            ((l = Nn(l).createTextNode(u)), (l[Rl] = t), (t.stateNode = l));
        }
        return (ml(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = nu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(h(557));
              l[Rl] = t;
            } else
              (Ca(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ml(t), (l = !1));
          } else
            ((a = Nc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return (ml(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = nu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(h(317));
              e[Rl] = t;
            } else
              (Ca(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ml(t), (e = !1));
          } else
            ((e = Nc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return (
          ft(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              vn(t, t.updateQueue),
              ml(t),
              null)
        );
      case 4:
        return (gl(), l === null && Xi(t.stateNode.containerInfo), ml(t), null);
      case 10:
        return (Qt(t.type), ml(t), null);
      case 19:
        if ((A(Sl), (u = t.memoizedState), u === null)) return (ml(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) ae(u, !1);
          else {
            if (hl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Pe(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ae(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (rs(a, l), (a = a.sibling));
                  return (
                    O(Sl, (Sl.current & 1) | 2),
                    I && Gt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              at() > Sn &&
              ((t.flags |= 128), (e = !0), ae(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = Pe(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                ae(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !I)
              )
                return (ml(t), null);
            } else
              2 * at() - u.renderingStartTime > Sn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), ae(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = at()),
            (l.sibling = null),
            (a = Sl.current),
            O(Sl, e ? (a & 1) | 2 : a & 1),
            I && Gt(t, u.treeForkCount),
            l)
          : (ml(t), null);
      case 22:
      case 23:
        return (
          ft(t),
          Qc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ml(t),
          (a = t.updateQueue),
          a !== null && vn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && A(qa),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(El),
          ml(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function tv(l, t) {
    switch ((Oc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(El),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Te(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ft(t), t.alternate === null)) throw Error(h(340));
          Ca();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ft(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          Ca();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (A(Sl), null);
      case 4:
        return (gl(), null);
      case 10:
        return (Qt(t.type), null);
      case 22:
      case 23:
        return (
          ft(t),
          Qc(),
          l !== null && A(qa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Qt(El), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lo(l, t) {
    switch ((Oc(t), t.tag)) {
      case 3:
        (Qt(El), gl());
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        A(Sl);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        (ft(t), Qc(), l !== null && A(qa));
        break;
      case 24:
        Qt(El);
    }
  }
  function ue(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            ((u = n()), (c.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      nl(t, t.return, i);
    }
  }
  function da(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              i = c.destroy;
            if (i !== void 0) {
              ((c.destroy = void 0), (e = t));
              var f = a,
                y = i;
              try {
                y();
              } catch (S) {
                nl(e, f, S);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      nl(t, t.return, S);
    }
  }
  function Ko(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Rs(t, a);
      } catch (u) {
        nl(l, l.return, u);
      }
    }
  }
  function Jo(l, t, a) {
    ((a.props = Xa(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      nl(l, t, u);
    }
  }
  function ee(l, t) {
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
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      nl(l, t, e);
    }
  }
  function jt(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          nl(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          nl(l, t, e);
        }
      else a.current = null;
  }
  function wo(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  function bi(l, t, a) {
    try {
      var u = l.stateNode;
      (Tv(u, l.type, a, t), (u[Jl] = t));
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  function Wo(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Sa(l.type)) ||
      l.tag === 4
    );
  }
  function zi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Wo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Sa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ai(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = xt)));
    else if (
      u !== 4 &&
      (u === 27 && Sa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Ai(l, t, a), l = l.sibling; l !== null; )
        (Ai(l, t, a), (l = l.sibling));
  }
  function yn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      u !== 4 &&
      (u === 27 && Sa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (yn(l, t, a), l = l.sibling; l !== null; )
        (yn(l, t, a), (l = l.sibling));
  }
  function $o(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      (Yl(t, u, a), (t[Rl] = l), (t[Jl] = a));
    } catch (n) {
      nl(l, l.return, n);
    }
  }
  var Jt = !1,
    _l = !1,
    Ei = !1,
    ko = typeof WeakSet == "function" ? WeakSet : Set,
    jl = null;
  function av(l, t) {
    if (((l = l.containerInfo), (Vi = qn), (l = is(l)), hc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              y = 0,
              S = 0,
              z = l,
              r = null;
            t: for (;;) {
              for (
                var g;
                z !== a || (e !== 0 && z.nodeType !== 3) || (i = c + e),
                  z !== n || (u !== 0 && z.nodeType !== 3) || (f = c + u),
                  z.nodeType === 3 && (c += z.nodeValue.length),
                  (g = z.firstChild) !== null;
              )
                ((r = z), (z = g));
              for (;;) {
                if (z === l) break t;
                if (
                  (r === a && ++y === e && (i = c),
                  r === n && ++S === u && (f = c),
                  (g = z.nextSibling) !== null)
                )
                  break;
                ((z = r), (r = z.parentNode));
              }
              z = g;
            }
            a = i === -1 || f === -1 ? null : { start: i, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Li = { focusedElem: l, selectionRange: a }, qn = !1, jl = t;
      jl !== null;
    )
      if (
        ((t = jl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (jl = l));
      else
        for (; jl !== null; ) {
          switch (((t = jl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var M = Xa(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(M, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (H) {
                  nl(a, a.return, H);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  wi(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wi(l);
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
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (jl = l));
            break;
          }
          jl = t.return;
        }
  }
  function Fo(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Wt(l, a), u & 4 && ue(5, a));
        break;
      case 1:
        if ((Wt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              nl(a, a.return, c);
            }
          else {
            var e = Xa(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              nl(a, a.return, c);
            }
          }
        (u & 64 && Ko(a), u & 512 && ee(a, a.return));
        break;
      case 3:
        if ((Wt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Rs(l, t);
          } catch (c) {
            nl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && $o(a);
      case 26:
      case 5:
        (Wt(l, a), t === null && u & 4 && wo(a), u & 512 && ee(a, a.return));
        break;
      case 12:
        Wt(l, a);
        break;
      case 31:
        (Wt(l, a), u & 4 && ld(l, a));
        break;
      case 13:
        (Wt(l, a),
          u & 4 && td(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = dv.bind(null, a)), jv(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Jt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || _l), (e = Jt));
          var n = _l;
          ((Jt = u),
            (_l = t) && !n ? $t(l, a, (a.subtreeFlags & 8772) !== 0) : Wt(l, a),
            (Jt = e),
            (_l = n));
        }
        break;
      case 30:
        break;
      default:
        Wt(l, a);
    }
  }
  function Io(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Io(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && In(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var vl = null,
    Wl = !1;
  function wt(l, t, a) {
    for (a = a.child; a !== null; ) (Po(l, t, a), (a = a.sibling));
  }
  function Po(l, t, a) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(Nu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (_l || jt(a, t),
          wt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        _l || jt(a, t);
        var u = vl,
          e = Wl;
        (Sa(a.type) && ((vl = a.stateNode), (Wl = !1)),
          wt(l, t, a),
          ve(a.stateNode),
          (vl = u),
          (Wl = e));
        break;
      case 5:
        _l || jt(a, t);
      case 6:
        if (
          ((u = vl),
          (e = Wl),
          (vl = null),
          wt(l, t, a),
          (vl = u),
          (Wl = e),
          vl !== null)
        )
          if (Wl)
            try {
              (vl.nodeType === 9
                ? vl.body
                : vl.nodeName === "HTML"
                  ? vl.ownerDocument.body
                  : vl
              ).removeChild(a.stateNode);
            } catch (n) {
              nl(a, t, n);
            }
          else
            try {
              vl.removeChild(a.stateNode);
            } catch (n) {
              nl(a, t, n);
            }
        break;
      case 18:
        vl !== null &&
          (Wl
            ? ((l = vl),
              Kd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Ou(l))
            : Kd(vl, a.stateNode));
        break;
      case 4:
        ((u = vl),
          (e = Wl),
          (vl = a.stateNode.containerInfo),
          (Wl = !0),
          wt(l, t, a),
          (vl = u),
          (Wl = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, a, t), _l || da(4, a, t), wt(l, t, a));
        break;
      case 1:
        (_l ||
          (jt(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Jo(a, t, u)),
          wt(l, t, a));
        break;
      case 21:
        wt(l, t, a);
        break;
      case 22:
        ((_l = (u = _l) || a.memoizedState !== null), wt(l, t, a), (_l = u));
        break;
      default:
        wt(l, t, a);
    }
  }
  function ld(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ou(l);
      } catch (a) {
        nl(t, t.return, a);
      }
    }
  }
  function td(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ou(l);
      } catch (a) {
        nl(t, t.return, a);
      }
  }
  function uv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new ko()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new ko()),
          t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function hn(l, t) {
    var a = uv(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = mv.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function $l(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (Sa(i.type)) {
                ((vl = i.stateNode), (Wl = !1));
                break l;
              }
              break;
            case 5:
              ((vl = i.stateNode), (Wl = !1));
              break l;
            case 3:
            case 4:
              ((vl = i.stateNode.containerInfo), (Wl = !0));
              break l;
          }
          i = i.return;
        }
        if (vl === null) throw Error(h(160));
        (Po(n, c, e),
          (vl = null),
          (Wl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (ad(t, l), (t = t.sibling));
  }
  var Mt = null;
  function ad(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ($l(t, l),
          kl(l),
          u & 4 && (da(3, l, l.return), ue(3, l), da(5, l, l.return)));
        break;
      case 1:
        ($l(t, l),
          kl(l),
          u & 512 && (_l || a === null || jt(a, a.return)),
          u & 64 &&
            Jt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = Mt;
        if (
          ($l(t, l),
          kl(l),
          u & 512 && (_l || a === null || jt(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[ju] ||
                          n[Rl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        Yl(n, u, a),
                        (n[Rl] = l),
                        Ul(n),
                        (u = n));
                      break l;
                    case "link":
                      var c = a0("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Yl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (c = a0("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Yl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  ((n[Rl] = l), Ul(n), (u = n));
                }
                l.stateNode = u;
              } else u0(e, l.type, l.stateNode);
            else l.stateNode = t0(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? u0(e, l.type, l.stateNode)
                  : t0(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                bi(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        ($l(t, l),
          kl(l),
          u & 512 && (_l || a === null || jt(a, a.return)),
          a !== null && u & 4 && bi(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ($l(t, l),
          kl(l),
          u & 512 && (_l || a === null || jt(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            $a(e, "");
          } catch (M) {
            nl(l, l.return, M);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), bi(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (Ei = !0));
        break;
      case 6:
        if (($l(t, l), kl(l), u & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (M) {
            nl(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((jn = null),
          (e = Mt),
          (Mt = Dn(t.containerInfo)),
          $l(t, l),
          (Mt = e),
          kl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ou(t.containerInfo);
          } catch (M) {
            nl(l, l.return, M);
          }
        Ei && ((Ei = !1), ud(l));
        break;
      case 4:
        ((u = Mt),
          (Mt = Dn(l.stateNode.containerInfo)),
          $l(t, l),
          kl(l),
          (Mt = u));
        break;
      case 12:
        ($l(t, l), kl(l));
        break;
      case 31:
        ($l(t, l),
          kl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), hn(l, u))));
        break;
      case 13:
        ($l(t, l),
          kl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (gn = at()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), hn(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          y = Jt,
          S = _l;
        if (
          ((Jt = y || e),
          (_l = S || f),
          $l(t, l),
          (_l = S),
          (Jt = y),
          kl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || f || Jt || _l || Qa(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), e))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    i = f.stateNode;
                    var z = f.memoizedProps.style,
                      r =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    i.style.display =
                      r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                  }
                } catch (M) {
                  nl(f, f.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = e ? "" : f.memoizedProps;
                } catch (M) {
                  nl(f, f.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  e ? Jd(g, !0) : Jd(f.stateNode, !1);
                } catch (M) {
                  nl(f, f.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), hn(l, a))));
        break;
      case 19:
        ($l(t, l),
          kl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), hn(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ($l(t, l), kl(l));
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Wo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = zi(l);
            yn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && ($a(c, ""), (a.flags &= -33));
            var i = zi(l);
            yn(l, i, c);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              y = zi(l);
            Ai(l, y, f);
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        nl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function ud(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (ud(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Fo(l, t.alternate, t), (t = t.sibling));
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, t, t.return), Qa(t));
          break;
        case 1:
          jt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Jo(t, t.return, a),
            Qa(t));
          break;
        case 27:
          ve(t.stateNode);
        case 26:
        case 5:
          (jt(t, t.return), Qa(t));
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
  function $t(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ($t(e, n, a), ue(4, n));
          break;
        case 1:
          if (
            ($t(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (y) {
              nl(u, u.return, y);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var i = u.stateNode;
            try {
              var f = e.shared.hiddenCallbacks;
              if (f !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++)
                  Hs(f[e], i);
            } catch (y) {
              nl(u, u.return, y);
            }
          }
          (a && c & 64 && Ko(n), ee(n, n.return));
          break;
        case 27:
          $o(n);
        case 26:
        case 5:
          ($t(e, n, a), a && u === null && c & 4 && wo(n), ee(n, n.return));
          break;
        case 12:
          $t(e, n, a);
          break;
        case 31:
          ($t(e, n, a), a && c & 4 && ld(e, n));
          break;
        case 13:
          ($t(e, n, a), a && c & 4 && td(e, n));
          break;
        case 22:
          (n.memoizedState === null && $t(e, n, a), ee(n, n.return));
          break;
        case 30:
          break;
        default:
          $t(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Ti(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Lu(a)));
  }
  function pi(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Lu(l)));
  }
  function Nt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ed(l, t, a, u), (t = t.sibling));
  }
  function ed(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Nt(l, t, a, u), e & 2048 && ue(9, t));
        break;
      case 1:
        Nt(l, t, a, u);
        break;
      case 3:
        (Nt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Lu(l))));
        break;
      case 12:
        if (e & 2048) {
          (Nt(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            nl(t, t.return, f);
          }
        } else Nt(l, t, a, u);
        break;
      case 31:
        Nt(l, t, a, u);
        break;
      case 13:
        Nt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Nt(l, t, a, u)
              : ne(l, t)
            : n._visibility & 2
              ? Nt(l, t, a, u)
              : ((n._visibility |= 2),
                hu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && Ti(c, t));
        break;
      case 24:
        (Nt(l, t, a, u), e & 2048 && pi(t.alternate, t));
        break;
      default:
        Nt(l, t, a, u);
    }
  }
  function hu(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        c = t,
        i = a,
        f = u,
        y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (hu(n, c, i, f, e), ue(8, c));
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          (c.memoizedState !== null
            ? S._visibility & 2
              ? hu(n, c, i, f, e)
              : ne(n, c)
            : ((S._visibility |= 2), hu(n, c, i, f, e)),
            e && y & 2048 && Ti(c.alternate, c));
          break;
        case 24:
          (hu(n, c, i, f, e), e && y & 2048 && pi(c.alternate, c));
          break;
        default:
          hu(n, c, i, f, e);
      }
      t = t.sibling;
    }
  }
  function ne(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (ne(a, u), e & 2048 && Ti(u.alternate, u));
            break;
          case 24:
            (ne(a, u), e & 2048 && pi(u.alternate, u));
            break;
          default:
            ne(a, u);
        }
        t = t.sibling;
      }
  }
  var ce = 8192;
  function ru(l, t, a) {
    if (l.subtreeFlags & ce)
      for (l = l.child; l !== null; ) (nd(l, t, a), (l = l.sibling));
  }
  function nd(l, t, a) {
    switch (l.tag) {
      case 26:
        (ru(l, t, a),
          l.flags & ce &&
            l.memoizedState !== null &&
            Vv(a, Mt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        ru(l, t, a);
        break;
      case 3:
      case 4:
        var u = Mt;
        ((Mt = Dn(l.stateNode.containerInfo)), ru(l, t, a), (Mt = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = ce), (ce = 16777216), ru(l, t, a), (ce = u))
            : ru(l, t, a));
        break;
      default:
        ru(l, t, a);
    }
  }
  function cd(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function ie(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((jl = u), fd(u, l));
        }
      cd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (id(l), (l = l.sibling));
  }
  function id(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ie(l), l.flags & 2048 && da(9, l, l.return));
        break;
      case 3:
        ie(l);
        break;
      case 12:
        ie(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), rn(l))
          : ie(l);
        break;
      default:
        ie(l);
    }
  }
  function rn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((jl = u), fd(u, l));
        }
      cd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, t, t.return), rn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), rn(t)));
          break;
        default:
          rn(t);
      }
      l = l.sibling;
    }
  }
  function fd(l, t) {
    for (; jl !== null; ) {
      var a = jl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          da(8, a, t);
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
      if (((u = a.child), u !== null)) ((u.return = a), (jl = u));
      else
        l: for (a = l; jl !== null; ) {
          u = jl;
          var e = u.sibling,
            n = u.return;
          if ((Io(u), u === a)) {
            jl = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (jl = e));
            break l;
          }
          jl = n;
        }
    }
  }
  var ev = {
      getCacheForType: function (l) {
        var t = xl(El),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return xl(El).controller.signal;
      },
    },
    nv = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    ol = null,
    W = null,
    k = 0,
    el = 0,
    st = null,
    ma = !1,
    gu = !1,
    _i = !1,
    kt = 0,
    hl = 0,
    va = 0,
    Za = 0,
    Oi = 0,
    ot = 0,
    Su = 0,
    fe = null,
    Fl = null,
    Mi = !1,
    gn = 0,
    sd = 0,
    Sn = 1 / 0,
    bn = null,
    ya = null,
    Nl = 0,
    ha = null,
    bu = null,
    Ft = 0,
    Ni = 0,
    Di = null,
    od = null,
    se = 0,
    Ui = null;
  function dt() {
    return (tl & 2) !== 0 && k !== 0 ? k & -k : o.T !== null ? xi() : _f();
  }
  function dd() {
    if (ot === 0)
      if ((k & 536870912) === 0 || I) {
        var l = Oe;
        ((Oe <<= 1), (Oe & 3932160) === 0 && (Oe = 262144), (ot = l));
      } else ot = 536870912;
    return ((l = it.current), l !== null && (l.flags |= 32), ot);
  }
  function Il(l, t, a) {
    (((l === ol && (el === 2 || el === 9)) || l.cancelPendingCommit !== null) &&
      (zu(l, 0), ra(l, k, ot, !1)),
      Uu(l, a),
      ((tl & 2) === 0 || l !== ol) &&
        (l === ol &&
          ((tl & 2) === 0 && (Za |= a), hl === 4 && ra(l, k, ot, !1)),
        Ct(l)));
  }
  function md(l, t, a) {
    if ((tl & 6) !== 0) throw Error(h(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Du(l, t),
      e = u ? fv(l, t) : Ci(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        gu && !u && ra(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !cv(a))) {
          ((e = Ci(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              e = fe;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (zu(i, c).flags |= 256), (c = Ci(i, c, !1)), c !== 2)) {
                if (_i && !f) {
                  ((i.errorRecoveryDisabledLanes |= n), (Za |= n), (e = 4));
                  break l;
                }
                ((n = Fl),
                  (Fl = e),
                  n !== null &&
                    (Fl === null ? (Fl = n) : Fl.push.apply(Fl, n)));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (zu(l, 0), ra(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ra(u, t, ot, !ma);
              break l;
            case 2:
              Fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((e = gn + 300 - at()), 10 < e)) {
            if ((ra(u, t, ot, !ma), Ne(u, 0, !0) !== 0)) break l;
            ((Ft = t),
              (u.timeoutHandle = Vd(
                vd.bind(
                  null,
                  u,
                  a,
                  Fl,
                  bn,
                  Mi,
                  t,
                  ot,
                  Za,
                  Su,
                  ma,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          vd(u, a, Fl, bn, Mi, t, ot, Za, Su, ma, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ct(l);
  }
  function vd(l, t, a, u, e, n, c, i, f, y, S, z, r, g) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xt,
      }),
        nd(t, n, z));
      var M =
        (n & 62914560) === n ? gn - at() : (n & 4194048) === n ? sd - at() : 0;
      if (((M = Lv(z, M)), M !== null)) {
        ((Ft = n),
          (l.cancelPendingCommit = M(
            Ad.bind(null, l, t, n, a, u, e, c, i, f, S, z, null, r, g),
          )),
          ra(l, n, c, !y));
        return;
      }
    }
    Ad(l, t, n, a, u, e, c, i, f);
  }
  function cv(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!nt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ra(l, t, a, u) {
    ((t &= ~Oi),
      (t &= ~Za),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e; ) {
      var n = 31 - et(e),
        c = 1 << n;
      ((u[n] = -1), (e &= ~c));
    }
    a !== 0 && Ef(l, a, t);
  }
  function zn() {
    return (tl & 6) === 0 ? (oe(0), !1) : !0;
  }
  function ji() {
    if (W !== null) {
      if (el === 0) var l = W.return;
      else ((l = W), (Xt = Ha = null), wc(l), (ou = null), (Ju = 0), (l = W));
      for (; l !== null; ) (Lo(l.alternate, l), (l = l.return));
      W = null;
    }
  }
  function zu(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Ov(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Ft = 0),
      ji(),
      (ol = l),
      (W = a = Yt(l.current, null)),
      (k = t),
      (el = 0),
      (st = null),
      (ma = !1),
      (gu = Du(l, t)),
      (_i = !1),
      (Su = ot = Oi = Za = va = hl = 0),
      (Fl = fe = null),
      (Mi = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - et(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((kt = t), Xe(), a);
  }
  function yd(l, t) {
    ((Q = null),
      (o.H = le),
      t === su || t === We
        ? ((t = Ds()), (el = 3))
        : t === qc
          ? ((t = Ds()), (el = 4))
          : (el =
              t === si
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (st = t),
      W === null && ((hl = 1), sn(l, rt(t, l.current))));
  }
  function hd() {
    var l = it.current;
    return l === null
      ? !0
      : (k & 4194048) === k
        ? zt === null
        : (k & 62914560) === k || (k & 536870912) !== 0
          ? l === zt
          : !1;
  }
  function rd() {
    var l = o.H;
    return ((o.H = le), l === null ? le : l);
  }
  function gd() {
    var l = o.A;
    return ((o.A = ev), l);
  }
  function An() {
    ((hl = 4),
      ma || ((k & 4194048) !== k && it.current !== null) || (gu = !0),
      ((va & 134217727) === 0 && (Za & 134217727) === 0) ||
        ol === null ||
        ra(ol, k, ot, !1));
  }
  function Ci(l, t, a) {
    var u = tl;
    tl |= 2;
    var e = rd(),
      n = gd();
    ((ol !== l || k !== t) && ((bn = null), zu(l, t)), (t = !1));
    var c = hl;
    l: do
      try {
        if (el !== 0 && W !== null) {
          var i = W,
            f = st;
          switch (el) {
            case 8:
              (ji(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var y = el;
              if (((el = 0), (st = null), Au(l, i, f, y), a && gu)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((y = el), (el = 0), (st = null), Au(l, i, f, y));
          }
        }
        (iv(), (c = hl));
        break;
      } catch (S) {
        yd(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Xt = Ha = null),
      (tl = u),
      (o.H = e),
      (o.A = n),
      W === null && ((ol = null), (k = 0), Xe()),
      c
    );
  }
  function iv() {
    for (; W !== null; ) Sd(W);
  }
  function fv(l, t) {
    var a = tl;
    tl |= 2;
    var u = rd(),
      e = gd();
    ol !== l || k !== t
      ? ((bn = null), (Sn = at() + 500), zu(l, t))
      : (gu = Du(l, t));
    l: do
      try {
        if (el !== 0 && W !== null) {
          t = W;
          var n = st;
          t: switch (el) {
            case 1:
              ((el = 0), (st = null), Au(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Ms(n)) {
                ((el = 0), (st = null), bd(t));
                break;
              }
              ((t = function () {
                ((el !== 2 && el !== 9) || ol !== l || (el = 7), Ct(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              el = 7;
              break l;
            case 4:
              el = 5;
              break l;
            case 7:
              Ms(n)
                ? ((el = 0), (st = null), bd(t))
                : ((el = 0), (st = null), Au(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (W.tag) {
                case 26:
                  c = W.memoizedState;
                case 5:
                case 27:
                  var i = W;
                  if (c ? e0(c) : i.stateNode.complete) {
                    ((el = 0), (st = null));
                    var f = i.sibling;
                    if (f !== null) W = f;
                    else {
                      var y = i.return;
                      y !== null ? ((W = y), En(y)) : (W = null);
                    }
                    break t;
                  }
              }
              ((el = 0), (st = null), Au(l, t, n, 5));
              break;
            case 6:
              ((el = 0), (st = null), Au(l, t, n, 6));
              break;
            case 8:
              (ji(), (hl = 6));
              break l;
            default:
              throw Error(h(462));
          }
        }
        sv();
        break;
      } catch (S) {
        yd(l, S);
      }
    while (!0);
    return (
      (Xt = Ha = null),
      (o.H = u),
      (o.A = e),
      (tl = a),
      W !== null ? 0 : ((ol = null), (k = 0), Xe(), hl)
    );
  }
  function sv() {
    for (; W !== null && !C0(); ) Sd(W);
  }
  function Sd(l) {
    var t = Zo(l.alternate, l, kt);
    ((l.memoizedProps = l.pendingProps), t === null ? En(l) : (W = t));
  }
  function bd(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = xo(a, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = xo(a, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        wc(t);
      default:
        (Lo(a, t), (t = W = rs(t, kt)), (t = Zo(a, t, kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? En(l) : (W = t));
  }
  function Au(l, t, a, u) {
    ((Xt = Ha = null), wc(t), (ou = null), (Ju = 0));
    var e = t.return;
    try {
      if (Fm(l, e, t, a, k)) {
        ((hl = 1), sn(l, rt(a, l.current)), (W = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw ((W = e), n);
      ((hl = 1), sn(l, rt(a, l.current)), (W = null));
      return;
    }
    t.flags & 32768
      ? (I || u === 1
          ? (l = !0)
          : gu || (k & 536870912) !== 0
            ? (l = !1)
            : ((ma = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = it.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        zd(t, l))
      : En(t);
  }
  function En(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        zd(t, ma);
        return;
      }
      l = t.return;
      var a = lv(t.alternate, t, kt);
      if (a !== null) {
        W = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function zd(l, t) {
    do {
      var a = tv(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (W = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        W = l;
        return;
      }
      W = l = a;
    } while (l !== null);
    ((hl = 6), (W = null));
  }
  function Ad(l, t, a, u, e, n, c, i, f) {
    l.cancelPendingCommit = null;
    do Tn();
    while (Nl !== 0);
    if ((tl & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= zc),
        Z0(l, a, n, c, i, f),
        l === ol && ((W = ol = null), (k = 0)),
        (bu = t),
        (ha = l),
        (Ft = a),
        (Ni = n),
        (Di = e),
        (od = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            vv(pe, function () {
              return (Od(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = o.T), (o.T = null), (e = T.p), (T.p = 2), (c = tl), (tl |= 4));
        try {
          av(l, t, a);
        } finally {
          ((tl = c), (T.p = e), (o.T = u));
        }
      }
      ((Nl = 1), Ed(), Td(), pd());
    }
  }
  function Ed() {
    if (Nl === 1) {
      Nl = 0;
      var l = ha,
        t = bu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = o.T), (o.T = null));
        var u = T.p;
        T.p = 2;
        var e = tl;
        tl |= 4;
        try {
          ad(t, l);
          var n = Li,
            c = is(l.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            cs(i.ownerDocument.documentElement, i)
          ) {
            if (f !== null && hc(i)) {
              var y = f.start,
                S = f.end;
              if ((S === void 0 && (S = y), "selectionStart" in i))
                ((i.selectionStart = y),
                  (i.selectionEnd = Math.min(S, i.value.length)));
              else {
                var z = i.ownerDocument || document,
                  r = (z && z.defaultView) || window;
                if (r.getSelection) {
                  var g = r.getSelection(),
                    M = i.textContent.length,
                    H = Math.min(f.start, M),
                    sl = f.end === void 0 ? H : Math.min(f.end, M);
                  !g.extend && H > sl && ((c = sl), (sl = H), (H = c));
                  var m = ns(i, H),
                    s = ns(i, sl);
                  if (
                    m &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== m.node ||
                      g.anchorOffset !== m.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var v = z.createRange();
                    (v.setStart(m.node, m.offset),
                      g.removeAllRanges(),
                      H > sl
                        ? (g.addRange(v), g.extend(s.node, s.offset))
                        : (v.setEnd(s.node, s.offset), g.addRange(v)));
                  }
                }
              }
            }
            for (z = [], g = i; (g = g.parentNode); )
              g.nodeType === 1 &&
                z.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < z.length;
              i++
            ) {
              var b = z[i];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((qn = !!Vi), (Li = Vi = null));
        } finally {
          ((tl = e), (T.p = u), (o.T = a));
        }
      }
      ((l.current = t), (Nl = 2));
    }
  }
  function Td() {
    if (Nl === 2) {
      Nl = 0;
      var l = ha,
        t = bu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = o.T), (o.T = null));
        var u = T.p;
        T.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Fo(l, t.alternate, t);
        } finally {
          ((tl = e), (T.p = u), (o.T = a));
        }
      }
      Nl = 3;
    }
  }
  function pd() {
    if (Nl === 4 || Nl === 3) {
      ((Nl = 0), H0());
      var l = ha,
        t = bu,
        a = Ft,
        u = od;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Nl = 5)
        : ((Nl = 0), (bu = ha = null), _d(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ya = null),
        kn(a),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(Nu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = o.T), (e = T.p), (T.p = 2), (o.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var i = u[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          ((o.T = t), (T.p = e));
        }
      }
      ((Ft & 3) !== 0 && Tn(),
        Ct(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === Ui
            ? se++
            : ((se = 0), (Ui = l))
          : (se = 0),
        oe(0));
    }
  }
  function _d(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Lu(t)));
  }
  function Tn() {
    return (Ed(), Td(), pd(), Od());
  }
  function Od() {
    if (Nl !== 5) return !1;
    var l = ha,
      t = Ni;
    Ni = 0;
    var a = kn(Ft),
      u = o.T,
      e = T.p;
    try {
      ((T.p = 32 > a ? 32 : a), (o.T = null), (a = Di), (Di = null));
      var n = ha,
        c = Ft;
      if (((Nl = 0), (bu = ha = null), (Ft = 0), (tl & 6) !== 0))
        throw Error(h(331));
      var i = tl;
      if (
        ((tl |= 4),
        id(n.current),
        ed(n, n.current, c, a),
        (tl = i),
        oe(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(Nu, n);
        } catch {}
      return !0;
    } finally {
      ((T.p = e), (o.T = u), _d(l, t));
    }
  }
  function Md(l, t, a) {
    ((t = rt(a, t)),
      (t = fi(l.stateNode, t, 2)),
      (l = fa(l, t, 2)),
      l !== null && (Uu(l, 2), Ct(l)));
  }
  function nl(l, t, a) {
    if (l.tag === 3) Md(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Md(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ya === null || !ya.has(u)))
          ) {
            ((l = rt(a, l)),
              (a = No(2)),
              (u = fa(t, a, 2)),
              u !== null && (Do(a, u, t, l), Uu(u, 2), Ct(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hi(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new nv();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) ||
      ((_i = !0), e.add(a), (l = ov.bind(null, l, t, a)), t.then(l, l));
  }
  function ov(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      ol === l &&
        (k & a) === a &&
        (hl === 4 || (hl === 3 && (k & 62914560) === k && 300 > at() - gn)
          ? (tl & 2) === 0 && zu(l, 0)
          : (Oi |= a),
        Su === k && (Su = 0)),
      Ct(l));
  }
  function Nd(l, t) {
    (t === 0 && (t = Af()), (l = Ua(l, t)), l !== null && (Uu(l, t), Ct(l)));
  }
  function dv(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Nd(l, a));
  }
  function mv(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (u !== null && u.delete(t), Nd(l, a));
  }
  function vv(l, t) {
    return Jn(l, t);
  }
  var pn = null,
    Eu = null,
    Ri = !1,
    _n = !1,
    qi = !1,
    ga = 0;
  function Ct(l) {
    (l !== Eu &&
      l.next === null &&
      (Eu === null ? (pn = Eu = l) : (Eu = Eu.next = l)),
      (_n = !0),
      Ri || ((Ri = !0), hv()));
  }
  function oe(l, t) {
    if (!qi && _n) {
      qi = !0;
      do
        for (var a = !1, u = pn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                i = u.pingedLanes;
              ((n = (1 << (31 - et(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), Cd(u, n));
          } else
            ((n = k),
              (n = Ne(
                u,
                u === ol ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Du(u, n) || ((a = !0), Cd(u, n)));
          u = u.next;
        }
      while (a);
      qi = !1;
    }
  }
  function yv() {
    Dd();
  }
  function Dd() {
    _n = Ri = !1;
    var l = 0;
    ga !== 0 && _v() && (l = ga);
    for (var t = at(), a = null, u = pn; u !== null; ) {
      var e = u.next,
        n = Ud(u, t);
      (n === 0
        ? ((u.next = null),
          a === null ? (pn = e) : (a.next = e),
          e === null && (Eu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (_n = !0)),
        (u = e));
    }
    ((Nl !== 0 && Nl !== 5) || oe(l), ga !== 0 && (ga = 0));
  }
  function Ud(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - et(n),
        i = 1 << c,
        f = e[c];
      (f === -1
        ? ((i & a) === 0 || (i & u) !== 0) && (e[c] = Q0(i, t))
        : f <= t && (l.expiredLanes |= i),
        (n &= ~i));
    }
    if (
      ((t = ol),
      (a = k),
      (a = Ne(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (el === 2 || el === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && wn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Du(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && wn(u), kn(a))) {
        case 2:
        case 8:
          a = bf;
          break;
        case 32:
          a = pe;
          break;
        case 268435456:
          a = zf;
          break;
        default:
          a = pe;
      }
      return (
        (u = jd.bind(null, l)),
        (a = Jn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && wn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function jd(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var u = k;
    return (
      (u = Ne(
        l,
        l === ol ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : (md(l, u, t),
          Ud(l, at()),
          l.callbackNode != null && l.callbackNode === a
            ? jd.bind(null, l)
            : null)
    );
  }
  function Cd(l, t) {
    if (Tn()) return null;
    md(l, t, !0);
  }
  function hv() {
    Mv(function () {
      (tl & 6) !== 0 ? Jn(Sf, yv) : Dd();
    });
  }
  function xi() {
    if (ga === 0) {
      var l = iu;
      (l === 0 && ((l = _e), (_e <<= 1), (_e & 261888) === 0 && (_e = 256)),
        (ga = l));
    }
    return ga;
  }
  function Hd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Ce("" + l);
  }
  function Rd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function rv(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Hd((e[Jl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Jl] || null)
          ? Hd(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new xe("action", "action", null, u, e);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (ga !== 0) {
                  var f = c ? Rd(e, c) : new FormData(e);
                  ai(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? Rd(e, c) : new FormData(e)),
                  ai(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Bi = 0; Bi < bc.length; Bi++) {
    var Yi = bc[Bi],
      gv = Yi.toLowerCase(),
      Sv = Yi[0].toUpperCase() + Yi.slice(1);
    Ot(gv, "on" + Sv);
  }
  (Ot(os, "onAnimationEnd"),
    Ot(ds, "onAnimationIteration"),
    Ot(ms, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Rm, "onTransitionRun"),
    Ot(qm, "onTransitionStart"),
    Ot(xm, "onTransitionCancel"),
    Ot(vs, "onTransitionEnd"),
    wa("onMouseEnter", ["mouseout", "mouseover"]),
    wa("onMouseLeave", ["mouseout", "mouseover"]),
    wa("onPointerEnter", ["pointerout", "pointerover"]),
    wa("onPointerLeave", ["pointerout", "pointerover"]),
    Oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var de =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(de),
    );
  function qd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var i = u[c],
              f = i.instance,
              y = i.currentTarget;
            if (((i = i.listener), f !== n && e.isPropagationStopped()))
              break l;
            ((n = i), (e.currentTarget = y));
            try {
              n(e);
            } catch (S) {
              Ge(S);
            }
            ((e.currentTarget = null), (n = f));
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((i = u[c]),
              (f = i.instance),
              (y = i.currentTarget),
              (i = i.listener),
              f !== n && e.isPropagationStopped())
            )
              break l;
            ((n = i), (e.currentTarget = y));
            try {
              n(e);
            } catch (S) {
              Ge(S);
            }
            ((e.currentTarget = null), (n = f));
          }
      }
    }
  }
  function $(l, t) {
    var a = t[Fn];
    a === void 0 && (a = t[Fn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (xd(t, l, 2, !1), a.add(u));
  }
  function Gi(l, t, a) {
    var u = 0;
    (t && (u |= 4), xd(a, l, u, t));
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Xi(l) {
    if (!l[On]) {
      ((l[On] = !0),
        Nf.forEach(function (a) {
          a !== "selectionchange" && (bv.has(a) || Gi(a, !1, l), Gi(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || ((t[On] = !0), Gi("selectionchange", !1, t));
    }
  }
  function xd(l, t, a, u) {
    switch (d0(t)) {
      case 2:
        var e = wv;
        break;
      case 8:
        e = Wv;
        break;
      default:
        e = tf;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !cc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function Qi(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = La(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              u = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Xf(function () {
      var y = n,
        S = ec(a),
        z = [];
      l: {
        var r = ys.get(l);
        if (r !== void 0) {
          var g = xe,
            M = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = mm;
              break;
            case "focusin":
              ((M = "focus"), (g = oc));
              break;
            case "focusout":
              ((M = "blur"), (g = oc));
              break;
            case "beforeblur":
            case "afterblur":
              g = oc;
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
              g = Vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = hm;
              break;
            case os:
            case ds:
            case ms:
              g = um;
              break;
            case vs:
              g = gm;
              break;
            case "scroll":
            case "scrollend":
              g = I0;
              break;
            case "wheel":
              g = bm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = nm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Kf;
              break;
            case "toggle":
            case "beforetoggle":
              g = Am;
          }
          var H = (t & 4) !== 0,
            sl = !H && (l === "scroll" || l === "scrollend"),
            m = H ? (r !== null ? r + "Capture" : null) : r;
          H = [];
          for (var s = y, v; s !== null; ) {
            var b = s;
            if (
              ((v = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                v === null ||
                m === null ||
                ((b = Hu(s, m)), b != null && H.push(me(s, b, v))),
              sl)
            )
              break;
            s = s.return;
          }
          0 < H.length &&
            ((r = new g(r, M, null, a, S)), z.push({ event: r, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((r = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            r &&
              a !== uc &&
              (M = a.relatedTarget || a.fromElement) &&
              (La(M) || M[Va]))
          )
            break l;
          if (
            (g || r) &&
            ((r =
              S.window === S
                ? S
                : (r = S.ownerDocument)
                  ? r.defaultView || r.parentWindow
                  : window),
            g
              ? ((M = a.relatedTarget || a.toElement),
                (g = y),
                (M = M ? La(M) : null),
                M !== null &&
                  ((sl = G(M)),
                  (H = M.tag),
                  M !== sl || (H !== 5 && H !== 27 && H !== 6)) &&
                  (M = null))
              : ((g = null), (M = y)),
            g !== M)
          ) {
            if (
              ((H = Vf),
              (b = "onMouseLeave"),
              (m = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((H = Kf),
                (b = "onPointerLeave"),
                (m = "onPointerEnter"),
                (s = "pointer")),
              (sl = g == null ? r : Cu(g)),
              (v = M == null ? r : Cu(M)),
              (r = new H(b, s + "leave", g, a, S)),
              (r.target = sl),
              (r.relatedTarget = v),
              (b = null),
              La(S) === y &&
                ((H = new H(m, s + "enter", M, a, S)),
                (H.target = v),
                (H.relatedTarget = sl),
                (b = H)),
              (sl = b),
              g && M)
            )
              t: {
                for (H = zv, m = g, s = M, v = 0, b = m; b; b = H(b)) v++;
                b = 0;
                for (var C = s; C; C = H(C)) b++;
                for (; 0 < v - b; ) ((m = H(m)), v--);
                for (; 0 < b - v; ) ((s = H(s)), b--);
                for (; v--; ) {
                  if (m === s || (s !== null && m === s.alternate)) {
                    H = m;
                    break t;
                  }
                  ((m = H(m)), (s = H(s)));
                }
                H = null;
              }
            else H = null;
            (g !== null && Bd(z, r, g, H, !1),
              M !== null && sl !== null && Bd(z, sl, M, H, !0));
          }
        }
        l: {
          if (
            ((r = y ? Cu(y) : window),
            (g = r.nodeName && r.nodeName.toLowerCase()),
            g === "select" || (g === "input" && r.type === "file"))
          )
            var P = Pf;
          else if (Ff(r))
            if (ls) P = jm;
            else {
              P = Dm;
              var U = Nm;
            }
          else
            ((g = r.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (r.type !== "checkbox" && r.type !== "radio")
                ? y && ac(y.elementType) && (P = Pf)
                : (P = Um));
          if (P && (P = P(l, y))) {
            If(z, P, a, S);
            break l;
          }
          (U && U(l, r, y),
            l === "focusout" &&
              y &&
              r.type === "number" &&
              y.memoizedProps.value != null &&
              tc(r, "number", r.value));
        }
        switch (((U = y ? Cu(y) : window), l)) {
          case "focusin":
            (Ff(U) || U.contentEditable === "true") &&
              ((Pa = U), (rc = y), (Qu = null));
            break;
          case "focusout":
            Qu = rc = Pa = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((gc = !1), fs(z, a, S));
            break;
          case "selectionchange":
            if (Hm) break;
          case "keydown":
          case "keyup":
            fs(z, a, S);
        }
        var V;
        if (mc)
          l: {
            switch (l) {
              case "compositionstart":
                var F = "onCompositionStart";
                break l;
              case "compositionend":
                F = "onCompositionEnd";
                break l;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break l;
            }
            F = void 0;
          }
        else
          Ia
            ? $f(l, a) && (F = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (F = "onCompositionStart");
        (F &&
          (Jf &&
            a.locale !== "ko" &&
            (Ia || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && Ia && (V = Qf())
              : ((ta = S),
                (ic = "value" in ta ? ta.value : ta.textContent),
                (Ia = !0))),
          (U = Mn(y, F)),
          0 < U.length &&
            ((F = new Lf(F, l, null, a, S)),
            z.push({ event: F, listeners: U }),
            V ? (F.data = V) : ((V = kf(a)), V !== null && (F.data = V)))),
          (V = Tm ? pm(l, a) : _m(l, a)) &&
            ((F = Mn(y, "onBeforeInput")),
            0 < F.length &&
              ((U = new Lf("onBeforeInput", "beforeinput", null, a, S)),
              z.push({ event: U, listeners: F }),
              (U.data = V))),
          rv(z, l, y, a, S));
      }
      qd(z, t);
    });
  }
  function me(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Hu(l, a)),
          e != null && u.unshift(me(l, e, n)),
          (e = Hu(l, t)),
          e != null && u.push(me(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function zv(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Bd(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var i = a,
        f = i.alternate,
        y = i.stateNode;
      if (((i = i.tag), f !== null && f === u)) break;
      ((i !== 5 && i !== 26 && i !== 27) ||
        y === null ||
        ((f = y),
        e
          ? ((y = Hu(a, n)), y != null && c.unshift(me(a, y, f)))
          : e || ((y = Hu(a, n)), y != null && c.push(me(a, y, f)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Av = /\r\n?/g,
    Ev = /\u0000|\uFFFD/g;
  function Yd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Av,
        `
`,
      )
      .replace(Ev, "");
  }
  function Gd(l, t) {
    return ((t = Yd(t)), Yd(l) === t);
  }
  function fl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || $a(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            $a(l, "" + u);
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
        Yf(l, u, n);
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
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((u = Ce("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && fl(l, t, "name", e.name, e, null),
                fl(l, t, "formEncType", e.formEncType, e, null),
                fl(l, t, "formMethod", e.formMethod, e, null),
                fl(l, t, "formTarget", e.formTarget, e, null))
              : (fl(l, t, "encType", e.encType, e, null),
                fl(l, t, "method", e.method, e, null),
                fl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = Ce("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = xt);
        break;
      case "onScroll":
        u != null && $("scroll", l);
        break;
      case "onScrollEnd":
        u != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(h(60));
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
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Ce("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        ($("beforetoggle", l), $("toggle", l), De(l, "popover", u));
        break;
      case "xlinkActuate":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        De(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = k0.get(a) || a), De(l, a, u));
    }
  }
  function Zi(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Yf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? $a(l, u)
          : (typeof u == "number" || typeof u == "bigint") && $a(l, "" + u);
        break;
      case "onScroll":
        u != null && $("scroll", l);
        break;
      case "onScrollEnd":
        u != null && $("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = xt);
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
        if (!Df.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Jl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : De(l, a, u);
          }
    }
  }
  function Yl(l, t, a) {
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
        ($("error", l), $("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  fl(l, t, n, c, a, null);
              }
          }
        (e && fl(l, t, "srcSet", a.srcSet, a, null),
          u && fl(l, t, "src", a.src, a, null));
        return;
      case "input":
        $("invalid", l);
        var i = (n = c = e = null),
          f = null,
          y = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(h(137, t));
                  break;
                default:
                  fl(l, t, u, S, a, null);
              }
          }
        Rf(l, n, i, f, y, c, e, !1);
        return;
      case "select":
        ($("invalid", l), (u = c = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((i = a[e]), i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                u = i;
              default:
                fl(l, t, e, i, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? Wa(l, !!u, t, !1) : a != null && Wa(l, !!u, a, !0));
        return;
      case "textarea":
        ($("invalid", l), (n = e = u = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((i = a[c]), i != null))
            switch (c) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(h(91));
                break;
              default:
                fl(l, t, c, i, a, null);
            }
        xf(l, u, e, n);
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) &&
            ((u = a[f]), u != null) &&
            (f === "selected"
              ? (l.selected =
                  u && typeof u != "function" && typeof u != "symbol")
              : fl(l, t, f, u, a, null));
        return;
      case "dialog":
        ($("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l));
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < de.length; u++) $(de[u], l);
        break;
      case "image":
        ($("error", l), $("load", l));
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ($("error", l), $("load", l));
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
        for (y in a)
          if (a.hasOwnProperty(y) && ((u = a[y]), u != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                fl(l, t, y, u, a, null);
            }
        return;
      default:
        if (ac(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && Zi(l, t, S, u, a, void 0));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && ((u = a[i]), u != null && fl(l, t, i, u, a, null));
  }
  function Tv(l, t, a, u) {
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
        var e = null,
          n = null,
          c = null,
          i = null,
          f = null,
          y = null,
          S = null;
        for (g in a) {
          var z = a[g];
          if (a.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                u.hasOwnProperty(g) || fl(l, t, g, null, u, z);
            }
        }
        for (var r in u) {
          var g = u[r];
          if (((z = a[r]), u.hasOwnProperty(r) && (g != null || z != null)))
            switch (r) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(h(137, t));
                break;
              default:
                g !== z && fl(l, t, r, g, u, z);
            }
        }
        lc(l, c, i, f, y, S, n, e);
        return;
      case "select":
        g = c = i = r = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                u.hasOwnProperty(n) || fl(l, t, n, null, u, f);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (f = a[e]),
            u.hasOwnProperty(e) && (n != null || f != null))
          )
            switch (e) {
              case "value":
                r = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && fl(l, t, e, n, u, f);
            }
        ((t = i),
          (a = c),
          (u = g),
          r != null
            ? Wa(l, !!a, r, !1)
            : !!u != !!a &&
              (t != null ? Wa(l, !!a, t, !0) : Wa(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = r = null;
        for (i in a)
          if (
            ((e = a[i]),
            a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, t, i, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                r = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && fl(l, t, c, e, u, n);
            }
        qf(l, r, g);
        return;
      case "option":
        for (var M in a)
          ((r = a[M]),
            a.hasOwnProperty(M) &&
              r != null &&
              !u.hasOwnProperty(M) &&
              (M === "selected" ? (l.selected = !1) : fl(l, t, M, null, u, r)));
        for (f in u)
          ((r = u[f]),
            (g = a[f]),
            u.hasOwnProperty(f) &&
              r !== g &&
              (r != null || g != null) &&
              (f === "selected"
                ? (l.selected =
                    r && typeof r != "function" && typeof r != "symbol")
                : fl(l, t, f, r, u, g)));
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
        for (var H in a)
          ((r = a[H]),
            a.hasOwnProperty(H) &&
              r != null &&
              !u.hasOwnProperty(H) &&
              fl(l, t, H, null, u, r));
        for (y in u)
          if (
            ((r = u[y]),
            (g = a[y]),
            u.hasOwnProperty(y) && r !== g && (r != null || g != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(h(137, t));
                break;
              default:
                fl(l, t, y, r, u, g);
            }
        return;
      default:
        if (ac(t)) {
          for (var sl in a)
            ((r = a[sl]),
              a.hasOwnProperty(sl) &&
                r !== void 0 &&
                !u.hasOwnProperty(sl) &&
                Zi(l, t, sl, void 0, u, r));
          for (S in u)
            ((r = u[S]),
              (g = a[S]),
              !u.hasOwnProperty(S) ||
                r === g ||
                (r === void 0 && g === void 0) ||
                Zi(l, t, S, r, u, g));
          return;
        }
    }
    for (var m in a)
      ((r = a[m]),
        a.hasOwnProperty(m) &&
          r != null &&
          !u.hasOwnProperty(m) &&
          fl(l, t, m, null, u, r));
    for (z in u)
      ((r = u[z]),
        (g = a[z]),
        !u.hasOwnProperty(z) ||
          r === g ||
          (r == null && g == null) ||
          fl(l, t, z, r, u, g));
  }
  function Xd(l) {
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
  function pv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          c = e.initiatorType,
          i = e.duration;
        if (n && i && Xd(c)) {
          for (c = 0, i = e.responseEnd, u += 1; u < a.length; u++) {
            var f = a[u],
              y = f.startTime;
            if (y > i) break;
            var S = f.transferSize,
              z = f.initiatorType;
            S &&
              Xd(z) &&
              ((f = f.responseEnd), (c += S * (f < i ? 1 : (i - y) / (f - y))));
          }
          if ((--u, (t += (8 * (n + c)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Vi = null,
    Li = null;
  function Nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Qd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zd(l, t) {
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
  function Ki(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ji = null;
  function _v() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Ji
        ? !1
        : ((Ji = l), !0)
      : ((Ji = null), !1);
  }
  var Vd = typeof setTimeout == "function" ? setTimeout : void 0,
    Ov = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ld = typeof Promise == "function" ? Promise : void 0,
    Mv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ld < "u"
          ? function (l) {
              return Ld.resolve(null).then(l).catch(Nv);
            }
          : Vd;
  function Nv(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Sa(l) {
    return l === "head";
  }
  function Kd(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), Ou(t));
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") ve(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), ve(a));
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling,
              i = n.nodeName;
            (n[ju] ||
              i === "SCRIPT" ||
              i === "STYLE" ||
              (i === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && ve(l.ownerDocument.body);
      a = e;
    } while (a);
    Ou(t);
  }
  function Jd(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function wi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (wi(a), In(a));
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
  function Dv(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[ju])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = At(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Uv(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = At(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function wd(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = At(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Wi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $i(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function jv(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ki = null;
  function Wd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return At(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function $d(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function kd(l, t, a) {
    switch (((t = Nn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function ve(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    In(l);
  }
  var Et = new Map(),
    Fd = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var It = T.d;
  T.d = { f: Cv, r: Hv, D: Rv, C: qv, L: xv, m: Bv, X: Gv, S: Yv, M: Xv };
  function Cv() {
    var l = It.f(),
      t = zn();
    return l || t;
  }
  function Hv(l) {
    var t = Ka(l);
    t !== null && t.tag === 5 && t.type === "form" ? yo(t) : It.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function Id(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = yt(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        Fd.has(e) ||
          (Fd.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Yl(t, "link", l),
            Ul(t),
            u.head.appendChild(t))));
    }
  }
  function Rv(l) {
    (It.D(l), Id("dns-prefetch", l, null));
  }
  function qv(l, t) {
    (It.C(l, t), Id("preconnect", l, t));
  }
  function xv(l, t, a) {
    It.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + yt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + yt(a.imageSizes) + '"]'))
        : (e += '[href="' + yt(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = pu(l);
          break;
        case "script":
          n = _u(l);
      }
      Et.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        Et.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(ye(n))) ||
          (t === "script" && u.querySelector(he(n))) ||
          ((t = u.createElement("link")),
          Yl(t, "link", l),
          Ul(t),
          u.head.appendChild(t)));
    }
  }
  function Bv(l, t) {
    It.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + yt(u) + '"][href="' + yt(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _u(l);
      }
      if (
        !Et.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        Et.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(he(n))) return;
        }
        ((u = a.createElement("link")),
          Yl(u, "link", l),
          Ul(u),
          a.head.appendChild(u));
      }
    }
  }
  function Yv(l, t, a) {
    It.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = Ja(u).hoistableStyles,
        n = pu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = u.querySelector(ye(n)))) i.loading = 5;
        else {
          ((l = R({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = Et.get(n)) && Fi(l, a));
          var f = (c = u.createElement("link"));
          (Ul(f),
            Yl(f, "link", l),
            (f._p = new Promise(function (y, S) {
              ((f.onload = y), (f.onerror = S));
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Un(c, t, u));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: i }),
          e.set(n, c));
      }
    }
  }
  function Gv(l, t) {
    It.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = Ja(a).hoistableScripts,
        e = _u(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(he(e))),
        n ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = Et.get(e)) && Ii(l, t),
          (n = a.createElement("script")),
          Ul(n),
          Yl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Xv(l, t) {
    It.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = Ja(a).hoistableScripts,
        e = _u(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(he(e))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = Et.get(e)) && Ii(l, t),
          (n = a.createElement("script")),
          Ul(n),
          Yl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Pd(l, t, a, u) {
    var e = (e = w.current) ? Dn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = pu(a.href)),
            (a = Ja(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = pu(a.href);
          var n = Ja(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(ye(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Et.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Et.set(l, a),
                n || Qv(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(h(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = _u(a)),
              (a = Ja(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function pu(l) {
    return 'href="' + yt(l) + '"';
  }
  function ye(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function l0(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Qv(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Yl(t, "link", a),
        Ul(t),
        l.head.appendChild(t));
  }
  function _u(l) {
    return '[src="' + yt(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function t0(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + yt(a.href) + '"]');
          if (u) return ((t.instance = u), Ul(u), u);
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Ul(u),
            Yl(u, "style", e),
            Un(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = pu(a.href);
          var n = l.querySelector(ye(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Ul(n), n);
          ((u = l0(a)),
            (e = Et.get(e)) && Fi(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Ul(n));
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              ((c.onload = i), (c.onerror = f));
            })),
            Yl(n, "link", u),
            (t.state.loading |= 4),
            Un(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = _u(a.src)),
            (e = l.querySelector(he(n)))
              ? ((t.instance = e), Ul(e), e)
              : ((u = a),
                (e = Et.get(n)) && ((u = R({}, a)), Ii(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Ul(e),
                Yl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var i = u[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Fi(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Ii(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var jn = null;
  function a0(l, t, a) {
    if (jn === null) {
      var u = new Map(),
        e = (jn = new Map());
      e.set(a, u);
    } else ((e = jn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[ju] ||
          n[Rl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = u.get(c);
        i ? i.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function u0(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Zv(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function e0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Vv(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = pu(u.href),
          n = t.querySelector(ye(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Cn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Ul(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = l0(u)),
          (e = Et.get(e)) && Fi(u, e),
          (n = n.createElement("link")),
          Ul(n));
        var c = n;
        ((c._p = new Promise(function (i, f) {
          ((c.onload = i), (c.onerror = f));
        })),
          Yl(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Cn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Pi = 0;
  function Lv(l, t) {
    return (
      l.stylesheets && l.count === 0 && Rn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Pi === 0 && (Pi = 62500 * pv());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Pi ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function Cn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Hn = new Map()),
        t.forEach(Kv, l),
        (Hn = null),
        Cn.call(l)));
  }
  function Kv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Hn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Hn.set(l, a));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = Cn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var re = {
    $$typeof: rl,
    Provider: null,
    Consumer: null,
    _currentValue: j,
    _currentValue2: j,
    _threadCount: 0,
  };
  function Jv(l, t, a, u, e, n, c, i, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wn(0)),
      (this.hiddenUpdates = Wn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function n0(l, t, a, u, e, n, c, i, f, y, S, z) {
    return (
      (l = new Jv(l, t, a, c, f, y, S, z, i)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ct(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Cc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      xc(n),
      l
    );
  }
  function c0(l) {
    return l ? ((l = au), l) : au;
  }
  function i0(l, t, a, u, e, n) {
    ((e = c0(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ia(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = fa(l, u, t)),
      a !== null && (Il(a, l, t), Wu(a, l, t)));
  }
  function f0(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function lf(l, t) {
    (f0(l, t), (l = l.alternate) && f0(l, t));
  }
  function s0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ua(l, 67108864);
      (t !== null && Il(t, l, 67108864), lf(l, 67108864));
    }
  }
  function o0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = dt();
      t = $n(t);
      var a = Ua(l, t);
      (a !== null && Il(a, l, t), lf(l, t));
    }
  }
  var qn = !0;
  function wv(l, t, a, u) {
    var e = o.T;
    o.T = null;
    var n = T.p;
    try {
      ((T.p = 2), tf(l, t, a, u));
    } finally {
      ((T.p = n), (o.T = e));
    }
  }
  function Wv(l, t, a, u) {
    var e = o.T;
    o.T = null;
    var n = T.p;
    try {
      ((T.p = 8), tf(l, t, a, u));
    } finally {
      ((T.p = n), (o.T = e));
    }
  }
  function tf(l, t, a, u) {
    if (qn) {
      var e = af(u);
      if (e === null) (Qi(l, t, u, xn, a), m0(l, u));
      else if (kv(e, l, t, a, u)) u.stopPropagation();
      else if ((m0(l, u), t & 4 && -1 < $v.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ka(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = _a(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - et(c));
                      ((i.entanglements[1] |= f), (c &= ~f));
                    }
                    (Ct(n), (tl & 6) === 0 && ((Sn = at() + 500), oe(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((i = Ua(n, 2)), i !== null && Il(i, n, 2), zn(), lf(n, 2));
            }
          if (((n = af(u)), n === null && Qi(l, t, u, xn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Qi(l, t, u, null, a);
    }
  }
  function af(l) {
    return ((l = ec(l)), uf(l));
  }
  var xn = null;
  function uf(l) {
    if (((xn = null), (l = La(l)), l !== null)) {
      var t = G(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = cl(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = Ol(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((xn = l), null);
  }
  function d0(l) {
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
        switch (R0()) {
          case Sf:
            return 2;
          case bf:
            return 8;
          case pe:
          case q0:
            return 32;
          case zf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1,
    ba = null,
    za = null,
    Aa = null,
    ge = new Map(),
    Se = new Map(),
    Ea = [],
    $v =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function m0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        za = null;
        break;
      case "mouseover":
      case "mouseout":
        Aa = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function be(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ka(t)), t !== null && s0(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function kv(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((ba = be(ba, l, t, a, u, e)), !0);
      case "dragenter":
        return ((za = be(za, l, t, a, u, e)), !0);
      case "mouseover":
        return ((Aa = be(Aa, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (ge.set(n, be(ge.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          Se.set(n, be(Se.get(n) || null, l, t, a, u, e)),
          !0
        );
    }
    return !1;
  }
  function v0(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = G(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = cl(a)), t !== null)) {
            ((l.blockedOn = t),
              Of(l.priority, function () {
                o0(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Ol(a)), t !== null)) {
            ((l.blockedOn = t),
              Of(l.priority, function () {
                o0(a);
              }));
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
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = af(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((uc = u), a.target.dispatchEvent(u), (uc = null));
      } else return ((t = Ka(a)), t !== null && s0(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function y0(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Fv() {
    ((ef = !1),
      ba !== null && Bn(ba) && (ba = null),
      za !== null && Bn(za) && (za = null),
      Aa !== null && Bn(Aa) && (Aa = null),
      ge.forEach(y0),
      Se.forEach(y0));
  }
  function Yn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ef ||
        ((ef = !0),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, Fv)));
  }
  var Gn = null;
  function h0(l) {
    Gn !== l &&
      ((Gn = l),
      _.unstable_scheduleCallback(_.unstable_NormalPriority, function () {
        Gn === l && (Gn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (uf(u || a) === null) continue;
            break;
          }
          var n = Ka(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ai(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function Ou(l) {
    function t(f) {
      return Yn(f, l);
    }
    (ba !== null && Yn(ba, l),
      za !== null && Yn(za, l),
      Aa !== null && Yn(Aa, l),
      ge.forEach(t),
      Se.forEach(t));
    for (var a = 0; a < Ea.length; a++) {
      var u = Ea[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Ea.length && ((a = Ea[0]), a.blockedOn === null); )
      (v0(a), a.blockedOn === null && Ea.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Jl] || null;
        if (typeof n == "function") c || h0(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Jl] || null))) i = c.formAction;
            else if (uf(e) !== null) continue;
          } else i = c.action;
          (typeof i == "function" ? (a[u + 1] = i) : (a.splice(u, 3), (u -= 3)),
            h0(a));
        }
      }
  }
  function r0() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (e = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function nf(l) {
    this._internalRoot = l;
  }
  ((Xn.prototype.render = nf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var a = t.current,
        u = dt();
      i0(a, u, l, t, null, null);
    }),
    (Xn.prototype.unmount = nf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (i0(l.current, 2, null, l, null, null), zn(), (t[Va] = null));
        }
      }));
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = _f();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ea.length && t !== 0 && t < Ea[a].priority; a++);
      (Ea.splice(a, 0, l), a === 0 && v0(l));
    }
  };
  var g0 = Y.version;
  if (g0 !== "19.2.4") throw Error(h(527, g0, "19.2.4"));
  T.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return (
      (l = p(t)),
      (l = l !== null ? J(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Iv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: o,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber)
      try {
        ((Nu = Qn.inject(Iv)), (ut = Qn));
      } catch {}
  }
  return (
    (Ae.createRoot = function (l, t) {
      if (!B(l)) throw Error(h(299));
      var a = !1,
        u = "",
        e = po,
        n = _o,
        c = Oo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = n0(l, 1, !1, null, null, a, u, null, e, n, c, r0)),
        (l[Va] = t.current),
        Xi(l),
        new nf(t)
      );
    }),
    (Ae.hydrateRoot = function (l, t, a) {
      if (!B(l)) throw Error(h(299));
      var u = !1,
        e = "",
        n = po,
        c = _o,
        i = Oo,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = n0(l, 1, !0, t, a ?? null, u, e, f, n, c, i, r0)),
        (t.context = c0(null)),
        (a = t.current),
        (u = dt()),
        (u = $n(u)),
        (e = ia(u)),
        (e.callback = null),
        fa(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Uu(t, a),
        Ct(t),
        (l[Va] = t.current),
        Xi(l),
        new Xn(t)
      );
    }),
    (Ae.version = "19.2.4"),
    Ae
  );
}
var M0;
function fy() {
  if (M0) return sf.exports;
  M0 = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (Y) {
        console.error(Y);
      }
  }
  return (_(), (sf.exports = iy()), sf.exports);
}
var sy = fy();
const U0 = (..._) =>
  _.filter((Y, q, h) => !!Y && Y.trim() !== "" && h.indexOf(Y) === q)
    .join(" ")
    .trim();
const oy = (_) => _.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const dy = (_) =>
  _.replace(/^([A-Z])|[\s-_]+(\w)/g, (Y, q, h) =>
    h ? h.toUpperCase() : q.toLowerCase(),
  );
const N0 = (_) => {
  const Y = dy(_);
  return Y.charAt(0).toUpperCase() + Y.slice(1);
};
var my = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const vy = (_) => {
  for (const Y in _)
    if (Y.startsWith("aria-") || Y === "role" || Y === "title") return !0;
  return !1;
};
const yy = Dl.forwardRef(
  (
    {
      color: _ = "currentColor",
      size: Y = 24,
      strokeWidth: q = 2,
      absoluteStrokeWidth: h,
      className: B = "",
      children: G,
      iconNode: cl,
      ...Ol
    },
    D,
  ) =>
    Dl.createElement(
      "svg",
      {
        ref: D,
        ...my,
        width: Y,
        height: Y,
        stroke: _,
        strokeWidth: h ? (Number(q) * 24) / Number(Y) : q,
        className: U0("lucide", B),
        ...(!G && !vy(Ol) && { "aria-hidden": "true" }),
        ...Ol,
      },
      [
        ...cl.map(([p, J]) => Dl.createElement(p, J)),
        ...(Array.isArray(G) ? G : [G]),
      ],
    ),
);
const Tt = (_, Y) => {
  const q = Dl.forwardRef(({ className: h, ...B }, G) =>
    Dl.createElement(yy, {
      ref: G,
      iconNode: Y,
      className: U0(`lucide-${oy(N0(_))}`, `lucide-${_}`, h),
      ...B,
    }),
  );
  return ((q.displayName = N0(_)), q);
};
const hy = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  ry = Tt("chevron-left", hy);
const gy = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Sy = Tt("chevron-right", gy);
const by = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
  ],
  zy = Tt("circle-plus", by);
const Ay = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  Ey = Tt("info", Ay);
const Ty = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  py = Tt("map-pin", Ty);
const _y = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  Oy = Tt("minus", _y);
const My = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  vf = Tt("plus", My);
const Ny = [
    ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
    ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
    [
      "path",
      {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506",
      },
    ],
  ],
  yf = Tt("shopping-cart", Ny);
const Dy = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  Uy = Tt("trash-2", Dy);
const jy = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  Cy = Tt("user", jy);
const Hy = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ],
  D0 = Tt("utensils", Hy);
const Ry = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  qy = Tt("x", Ry),
  Ee = [
    {
      id: 1,
      image: "img/promo_marmita_1772738167021.png",
      title: "Sabor Raiz",
      description: "A verdadeira comida caseira na sua mesa.",
    },
    {
      id: 2,
      image: "img/promo_picanha_1772739118331.png",
      title: "Especial da Casa",
      description: "Picanha na chapa no estilo fogo de chão.",
    },
    {
      id: 3,
      image: "img/promo_farofa_1772739102966.png",
      title: "Acompanhamentos Perfeitos",
      description: "Nossa famosa farofa artesanal feita com amor.",
    },
    {
      id: 4,
      image: "img/promo_entrega_1772738262491.png",
      title: "Entrega Rápida",
      description: "Brasiléia (Grátis) | Epitaciolândia (R$ 4,00)",
    },
  ],
  xy = [
    {
      id: "m1",
      title: "Filezinho Crocante com Fritas",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 25,
      image: "img/food_frango_1772738152757.png",
    },
    {
      id: "m2",
      title: "Filezinho Crocante",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 20,
      image: "img/food_frango_1772738152757.png",
    },
    {
      id: "m3",
      title: "Assado de Panela",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 20,
      image: "img/food_assado_1772738136922.png",
    },
    {
      id: "m4",
      title: "Filé de Frango na Chapa",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 20,
      image: "img/food_frango_1772738152757.png",
    },
    {
      id: "m5",
      title: "Bisteca na Chapa",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 20,
      image: "img/food_assado_1772738136922.png",
    },
    {
      id: "m6",
      title: "Filé Mignon na Chapa",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 25,
      image: "img/food_assado_1772738136922.png",
    },
    {
      id: "m7",
      title: "Carne de Sol (Alcatra)",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 25,
      image: "img/food_assado_1772738136922.png",
    },
    {
      id: "m8",
      title: "Picanha na Chapa",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 30,
      image: "img/food_assado_1772738136922.png",
    },
    {
      id: "m9",
      title: "Filé com Fritas",
      description:
        "Acompanha: Arroz, feijão, macarrão, vatapá, farofa e salada.",
      price: 30,
      image: "img/food_assado_1772738136922.png",
    },
  ],
  By = [
    {
      id: "a1",
      title: "Feijão Separado",
      description: "Porção extra de feijão caseiro.",
      price: 4,
      image: "img/food_assado_1772738136922.png",
    },
    {
      id: "a2",
      title: "Ovo Frito",
      description: "Ovo frito na hora.",
      price: 3,
      image: "img/food_frango_1772738152757.png",
    },
  ],
  Yy = { marmitas: xy, adicionais: By };
function Gy() {
  const [_, Y] = Dl.useState("marmitas"),
    [q, h] = Dl.useState(() => {
      const o = localStorage.getItem("cart");
      if (o)
        try {
          return JSON.parse(o);
        } catch {
          console.error("Erro ao carregar o carrinho");
        }
      return [];
    }),
    [B, G] = Dl.useState(!1),
    [cl, Ol] = Dl.useState(() => {
      const o = localStorage.getItem("customerData");
      if (o)
        try {
          return JSON.parse(o);
        } catch {
          return null;
        }
      return null;
    }),
    [D, p] = Dl.useState(cl?.customerName || ""),
    [J, R] = Dl.useState(cl?.customerPhone || ""),
    [L, Cl] = Dl.useState(cl?.deliveryArea || "brasileia"),
    [zl, Hl] = Dl.useState(cl?.address || ""),
    [pt, Gl] = Dl.useState(!1);
  Dl.useEffect(() => {
    localStorage.setItem(
      "customerData",
      JSON.stringify({
        customerName: D,
        customerPhone: J,
        deliveryArea: L,
        address: zl,
      }),
    );
  }, [D, J, L, zl]);
  const [mt, rl] = Dl.useState(0);
  (Dl.useEffect(() => {
    const o = setInterval(() => {
      rl((T) => (T === Ee.length - 1 ? 0 : T + 1));
    }, 4e3);
    return () => clearInterval(o);
  }, []),
    Dl.useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(q));
    }, [q]));
  const Kl = (o) => {
      h((T) =>
        T.find((Z) => Z.id === o.id)
          ? T.map((Z) =>
              Z.id === o.id ? { ...Z, quantity: Z.quantity + 1 } : Z,
            )
          : [...T, { ...o, quantity: 1 }],
      );
    },
    Pl = (o, T) => {
      h((j) =>
        j.map((Z) => {
          if (Z.id === o) {
            const al = Z.quantity + T;
            return al > 0 ? { ...Z, quantity: al } : Z;
          }
          return Z;
        }),
      );
    },
    Xl = (o) => {
      h((T) => T.filter((j) => j.id !== o));
    },
    K = q.reduce((o, T) => o + T.price * T.quantity, 0),
    Ml = L === "epitaciolandia" ? 4 : 0,
    lt = K + Ml,
    Ht = q.reduce((o, T) => o + T.quantity, 0),
    Al = (o) => `R$ ${o.toFixed(2).replace(".", ",")}`,
    Ql = () => rl((o) => (o === Ee.length - 1 ? 0 : o + 1)),
    Rt = () => rl((o) => (o === 0 ? Ee.length - 1 : o - 1)),
    _t = () => {
      const o = Yy[_];
      return E.jsx("div", {
        className: "products-grid",
        children: o.map((T) =>
          E.jsxs(
            "div",
            {
              className: "product-card",
              children: [
                E.jsx("div", {
                  className: "product-image-container",
                  children: E.jsx("img", {
                    src: T.image,
                    alt: T.title,
                    className: "product-image",
                  }),
                }),
                E.jsxs("div", {
                  className: "product-info",
                  children: [
                    E.jsxs("div", {
                      className: "product-header",
                      children: [
                        E.jsx("h3", {
                          className: "product-title",
                          children: T.title,
                        }),
                        E.jsx("span", {
                          className: "product-price",
                          children: Al(T.price),
                        }),
                      ],
                    }),
                    E.jsx("p", {
                      className: "product-description",
                      children: T.description,
                    }),
                    E.jsxs("button", {
                      className: "add-to-cart-btn",
                      onClick: () => Kl(T),
                      children: [E.jsx(vf, { size: 18 }), " Adicionar"],
                    }),
                  ],
                }),
              ],
            },
            T.id,
          ),
        ),
      });
    },
    tt = () => {
      if (!D || !J) {
        alert("Por favor, preencha seu nome e telefone para continuar.");
        return;
      }
      if ((L === "brasileia" || L === "epitaciolandia") && !zl) {
        alert("Por favor, preencha o seu endereço de entrega.");
        return;
      }
      let o = `*NOVO PEDIDO - CARDÁPIO ELIVANIA*

`;
      ((o += `*Cliente:* ${D}
`),
        (o += `*Telefone:* ${J}

`),
        (o += `*ITENS DO PEDIDO:*
`),
        q.forEach((j) => {
          o += `➡️ ${j.quantity}x ${j.title} - ${Al(j.price * j.quantity)}
`;
        }),
        (o += `
*Subtotal:* ${Al(K)}
`),
        L === "retirada"
          ? (o += `*Tipo:* 🛍️ Retirada no Local
`)
          : ((o += `*Tipo:* 🛵 Entrega em ${L === "brasileia" ? "Brasiléia" : "Epitaciolândia"}
`),
            (o += `*Taxa de Entrega:* ${Al(Ml)}
`),
            (o += `*Endereço:* ${zl}
`)),
        (o += `
💰 *TOTAL A PAGAR: ${Al(lt)}*`));
      const T = encodeURIComponent(o);
      (window.open(`https://wa.me/5568999412173?text=${T}`, "_blank"),
        Gl(!0),
        setTimeout(() => {
          Gl(!1);
        }, 4e3));
    };
  return E.jsxs("div", {
    className: "app-container",
    children: [
      E.jsxs("header", {
        className: "header",
        children: [
          E.jsxs("div", {
            className: "brand",
            children: [
              E.jsx(D0, { size: 24, color: "var(--accent-primary)" }),
              E.jsxs("div", {
                className: "brand-text",
                children: [
                  E.jsx("span", { children: "Cardápio" }),
                  " Elivania",
                ],
              }),
            ],
          }),
          E.jsxs("button", {
            className: "cart-button",
            onClick: () => G(!0),
            children: [
              E.jsx(yf, { size: 24, color: "var(--text-primary)" }),
              Ht > 0 &&
                E.jsx("span", { className: "cart-badge", children: Ht }),
            ],
          }),
        ],
      }),
      E.jsx("section", {
        className: "promotions-container",
        children: E.jsxs("div", {
          className: "carousel-wrapper",
          children: [
            E.jsx("button", {
              className: "carousel-control prev",
              onClick: Rt,
              children: E.jsx(ry, { size: 24 }),
            }),
            E.jsx("div", {
              className: "carousel-track-container",
              children: E.jsx("div", {
                className: "carousel-track",
                style: { transform: `translateX(-${mt * 100}%)` },
                children: Ee.map((o, T) =>
                  E.jsxs(
                    "div",
                    {
                      className: `carousel-slide-full ${T === mt ? "active" : ""}`,
                      children: [
                        E.jsx("img", { src: o.image, alt: o.title }),
                        E.jsxs("div", {
                          className: "promo-overlay",
                          children: [
                            E.jsx("h3", { children: o.title }),
                            E.jsx("p", { children: o.description }),
                          ],
                        }),
                      ],
                    },
                    o.id,
                  ),
                ),
              }),
            }),
            E.jsx("button", {
              className: "carousel-control next",
              onClick: Ql,
              children: E.jsx(Sy, { size: 24 }),
            }),
            E.jsx("div", {
              className: "carousel-indicators",
              children: Ee.map((o, T) =>
                E.jsx(
                  "button",
                  {
                    className: `indicator ${T === mt ? "active" : ""}`,
                    onClick: () => rl(T),
                  },
                  T,
                ),
              ),
            }),
          ],
        }),
      }),
      E.jsxs("div", {
        className: "tabs-container",
        children: [
          E.jsxs("button", {
            className: `tab ${_ === "marmitas" ? "active" : ""}`,
            onClick: () => Y("marmitas"),
            children: [E.jsx(D0, { size: 18 }), " Marmitas"],
          }),
          E.jsxs("button", {
            className: `tab ${_ === "adicionais" ? "active" : ""}`,
            onClick: () => Y("adicionais"),
            children: [E.jsx(zy, { size: 18 }), " Adicionais"],
          }),
        ],
      }),
      E.jsxs("div", {
        className: "delivery-info",
        children: [
          E.jsx(Ey, {
            size: 18,
            color: "var(--accent-primary)",
            style: { flexShrink: 0 },
          }),
          E.jsx("p", {
            children:
              "Acompanhamentos das marmitas: Arroz, feijão, macarrão, vatapá, farofa e salada.",
          }),
        ],
      }),
      E.jsx("section", { className: "menu-section", children: _t() }),
      E.jsx("div", {
        className: `cart-overlay ${B ? "open" : ""}`,
        onClick: (o) => {
          o.target.classList.contains("cart-overlay") && G(!1);
        },
        children: E.jsxs("div", {
          className: "cart-sidebar",
          children: [
            E.jsxs("div", {
              className: "cart-header",
              children: [
                E.jsxs("h2", {
                  children: [E.jsx(yf, { size: 24 }), " Seu Pedido"],
                }),
                E.jsx("button", {
                  className: "close-cart",
                  onClick: () => G(!1),
                  children: E.jsx(qy, { size: 24 }),
                }),
              ],
            }),
            E.jsx("div", {
              className: "cart-items",
              children:
                q.length === 0
                  ? E.jsxs("div", {
                      className: "empty-cart",
                      children: [
                        E.jsx(yf, { size: 48, opacity: 0.5 }),
                        E.jsx("p", { children: "Seu carrinho está vazio." }),
                      ],
                    })
                  : E.jsxs(E.Fragment, {
                      children: [
                        E.jsx("div", {
                          className: "cart-items-list",
                          children: q.map((o) =>
                            E.jsxs(
                              "div",
                              {
                                className: "cart-item",
                                children: [
                                  E.jsx("img", {
                                    src: o.image,
                                    alt: o.title,
                                    className: "cart-item-img",
                                  }),
                                  E.jsxs("div", {
                                    className: "cart-item-info",
                                    children: [
                                      E.jsx("h4", {
                                        className: "cart-item-title",
                                        children: o.title,
                                      }),
                                      E.jsx("div", {
                                        className: "cart-item-price",
                                        children: Al(o.price),
                                      }),
                                    ],
                                  }),
                                  E.jsxs("div", {
                                    className: "cart-item-controls",
                                    children: [
                                      E.jsx("button", {
                                        className: "qty-btn",
                                        onClick: () => Pl(o.id, -1),
                                        children: E.jsx(Oy, { size: 14 }),
                                      }),
                                      E.jsx("span", {
                                        className: "qty-value",
                                        children: o.quantity,
                                      }),
                                      E.jsx("button", {
                                        className: "qty-btn",
                                        onClick: () => Pl(o.id, 1),
                                        children: E.jsx(vf, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                  E.jsx("button", {
                                    className: "remove-item",
                                    onClick: () => Xl(o.id),
                                    children: E.jsx(Uy, { size: 18 }),
                                  }),
                                ],
                              },
                              o.id,
                            ),
                          ),
                        }),
                        E.jsxs("div", {
                          className: "checkout-form",
                          children: [
                            E.jsx("h3", { children: "Dados do Cliente" }),
                            E.jsx("div", {
                              className: "form-group",
                              children: E.jsxs("div", {
                                className: "input-icon",
                                children: [
                                  E.jsx(Cy, { size: 18 }),
                                  E.jsx("input", {
                                    type: "text",
                                    placeholder: "Seu Nome",
                                    value: D,
                                    onChange: (o) => p(o.target.value),
                                  }),
                                ],
                              }),
                            }),
                            E.jsx("div", {
                              className: "form-group",
                              children: E.jsxs("div", {
                                className: "input-icon",
                                children: [
                                  E.jsx(vf, { size: 18 }),
                                  E.jsx("input", {
                                    type: "tel",
                                    placeholder:
                                      "Seu WhatsApp (apenas números)",
                                    value: J,
                                    onChange: (o) => R(o.target.value),
                                  }),
                                ],
                              }),
                            }),
                            E.jsx("h3", { children: "Detalhes da Entrega" }),
                            E.jsxs("div", {
                              className: "delivery-options",
                              children: [
                                E.jsxs("label", {
                                  className: `delivery-radio ${L === "brasileia" ? "active" : ""}`,
                                  children: [
                                    E.jsx("input", {
                                      type: "radio",
                                      name: "delivery",
                                      value: "brasileia",
                                      checked: L === "brasileia",
                                      onChange: (o) => Cl(o.target.value),
                                    }),
                                    E.jsx("span", {
                                      children: "Brasiléia (Grátis)",
                                    }),
                                  ],
                                }),
                                E.jsxs("label", {
                                  className: `delivery-radio ${L === "epitaciolandia" ? "active" : ""}`,
                                  children: [
                                    E.jsx("input", {
                                      type: "radio",
                                      name: "delivery",
                                      value: "epitaciolandia",
                                      checked: L === "epitaciolandia",
                                      onChange: (o) => Cl(o.target.value),
                                    }),
                                    E.jsx("span", {
                                      children: "Epitaciolândia (+ R$ 4,00)",
                                    }),
                                  ],
                                }),
                                E.jsxs("label", {
                                  className: `delivery-radio ${L === "retirada" ? "active" : ""}`,
                                  children: [
                                    E.jsx("input", {
                                      type: "radio",
                                      name: "delivery",
                                      value: "retirada",
                                      checked: L === "retirada",
                                      onChange: (o) => Cl(o.target.value),
                                    }),
                                    E.jsx("span", {
                                      children: "Retirar no Local",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            L !== "retirada" &&
                              E.jsx("div", {
                                className: "form-group",
                                children: E.jsxs("div", {
                                  className: "input-icon",
                                  children: [
                                    E.jsx(py, { size: 18 }),
                                    E.jsx("input", {
                                      type: "text",
                                      placeholder:
                                        "Endereço de Entrega Completo",
                                      value: zl,
                                      onChange: (o) => Hl(o.target.value),
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
            }),
            q.length > 0 &&
              E.jsxs("div", {
                className: "cart-footer",
                children: [
                  E.jsxs("div", {
                    className: "cart-summary-line",
                    children: [
                      E.jsx("span", { children: "Subtotal:" }),
                      E.jsx("span", { children: Al(K) }),
                    ],
                  }),
                  L !== "retirada" &&
                    E.jsxs("div", {
                      className: "cart-summary-line delivery-fee-line",
                      children: [
                        E.jsx("span", { children: "Taxa de Entrega:" }),
                        E.jsx("span", {
                          children: Ml === 0 ? "Grátis" : Al(Ml),
                        }),
                      ],
                    }),
                  E.jsxs("div", {
                    className: "cart-total",
                    children: [
                      E.jsx("span", { children: "TOTAL A PAGAR:" }),
                      E.jsx("span", { children: Al(lt) }),
                    ],
                  }),
                  E.jsx("button", {
                    className: "checkout-btn",
                    onClick: tt,
                    children: "Enviar Pedido p/ WhatsApp",
                  }),
                ],
              }),
          ],
        }),
      }),
      E.jsx("div", {
        className: `toast-notification ${pt ? "show" : ""}`,
        children: "✅ Seu pedido foi criado e encaminhado!",
      }),
    ],
  });
}
sy.createRoot(document.getElementById("root")).render(
  E.jsx(Dl.StrictMode, { children: E.jsx(Gy, {}) }),
);
