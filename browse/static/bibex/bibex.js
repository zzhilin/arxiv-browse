!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e), (n.c = t), (n.d = function(e, t, r) {
    n.o(e, t) ||
      Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }), (n.n = function(e) {
    var t =
      e && e.__esModule
        ? function() {
            return e.default;
          }
        : function() {
            return e;
          };
    return n.d(t, "a", t), t;
  }), (n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }), (n.p = "./"), n((n.s = 23));
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    }), (t.g = function() {
      return Math.random().toString().substring(2, 12);
    }), (t.e = function(e) {
      var t,
        n,
        r,
        o,
        a = [];
      try {
        for (
          var u = i(Object.getOwnPropertyNames(e)), s = u.next();
          !s.done;
          s = u.next()
        ) {
          var l = s.value,
            c = e[l],
            f = Array.isArray(c) ? c : [c];
          try {
            for (
              var p = ((r = void 0), i(f)), d = p.next();
              !d.done;
              d = p.next()
            ) {
              var h = d.value;
              a.push(encodeURIComponent(l) + "=" + encodeURIComponent("" + h));
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              d && !d.done && (o = p.return) && o.call(p);
            } finally {
              if (r) throw r.error;
            }
          }
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          s && !s.done && (n = u.return) && n.call(u);
        } finally {
          if (t) throw t.error;
        }
      }
      return a.join("&");
    }), (t.i = function(e) {
      if (r.v) return r.v + "?url=" + encodeURIComponent(e);
      return e;
    }), (t.f = function(e) {
      return e.replace(/\s+/g, " ");
    }), (t.h = function(e) {
      return e.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/gim, "");
    }), n.d(t, "c", function() {
      return u;
    }), n.d(t, "b", function() {
      return s;
    }), n.d(t, "d", function() {
      return l;
    });
    var r = n(2),
      o =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      i =
        (this && this.__values) ||
        function(e) {
          var t = "function" === typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" === typeof e.length)
            return {
              next: function() {
                return e && r >= e.length && (e = void 0), {
                  value: e && e[r++],
                  done: !e
                };
              }
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      a = new Set([
        "astro-ph",
        "cond-mat",
        "cs",
        "gr-qc",
        "hep-ex",
        "hep-lat",
        "hep-ph",
        "hep-th",
        "math-ph",
        "nlin",
        "nucl-ex",
        "nucl-th",
        "physics",
        "quant-ph",
        "math",
        "q-bio",
        "q-fin",
        "stat",
        "eess",
        "econ"
      ]);
    var u = (function(e) {
        function t(n) {
          var r = e.call(this, n) || this;
          return Object.setPrototypeOf(r, t.prototype), (r.name =
            "QueryError"), r;
        }
        return o(t, e), t;
      })(Error),
      s = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return Object.setPrototypeOf(n, u.prototype), (n.name =
            "DataError"), n;
        }
        return o(t, e), t;
      })(Error),
      l = (function(e) {
        function t(n) {
          var r = e.call(this, n) || this;
          return Object.setPrototypeOf(r, t.prototype), (r.name =
            "RateLimitError"), r;
        }
        return o(t, e), t;
      })(Error);
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(30);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "v", function() {
      return r;
    }), n.d(t, "a", function() {
      return o;
    }), n.d(t, "b", function() {
      return i;
    }), n.d(t, "c", function() {
      return a;
    }), n.d(t, "d", function() {
      return u;
    }), n.d(t, "e", function() {
      return s;
    }), n.d(t, "f", function() {
      return l;
    }), n.d(t, "t", function() {
      return c;
    }), n.d(t, "q", function() {
      return f;
    }), n.d(t, "m", function() {
      return p;
    }), n.d(t, "r", function() {
      return d;
    }), n.d(t, "s", function() {
      return h;
    }), n.d(t, "l", function() {
      return m;
    }), n.d(t, "h", function() {
      return v;
    }), n.d(t, "u", function() {
      return y;
    }), n.d(t, "k", function() {
      return g;
    }), n.d(t, "j", function() {
      return b;
    }), n.d(t, "i", function() {
      return w;
    }), n.d(t, "o", function() {
      return A;
    }), n.d(t, "p", function() {
      return E;
    }), n.d(t, "n", function() {
      return S;
    }), n.d(t, "g", function() {
      return x;
    });
    var r = "",
      o = "https://export.arxiv.org/api/query?id_list=",
      i = "https://dx.doi.org/",
      a = "https://scholar.google.com/scholar",
      u = "https://arxiv.org/bibex/apistats.png",
      s = 10,
      l = 10,
      c = "Bibliographic data",
      f = "Bibex",
      p = "https://labs.arxiv.org",
      d = !1,
      h = !0,
      m = !1,
      v = !1,
      y = !0,
      g = ["s2", "prophy", "ads", "inspire"],
      b = "arxiv_bibex",
      w = 10950,
      A = "arxiv_bibex_limiter",
      E = 3,
      S = 3,
      x = !0;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return o;
    }), n.d(t, "b", function() {
      return i;
    }), n.d(t, "a", function() {
      return a;
    }), n.d(t, "c", function() {
      return u;
    });
    var r =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      o = "up",
      i = "down",
      a = (function() {
        function e() {}
        return (e.prototype.tolastname = function() {
          var e = (this.name || "").split(" ");
          return e[e.length - 1];
        }), e;
      })(),
      u = (function() {
        return function(e) {
          this.arxivId = e;
        };
      })();
    (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      r(t, e);
    })(u);
  },
  function(e, t, n) {
    "use strict";
    (function(e, r) {
      n.d(t, "a", function() {
        return T;
      }), n.d(t, "b", function() {
        return Ue;
      }), n.d(t, "c", function() {
        return ye;
      }), n.d(t, "d", function() {
        return Ye;
      }), n.d(t, "e", function() {
        return ee;
      }), n.d(t, "f", function() {
        return nt;
      }), n.d(t, "g", function() {
        return O;
      }), n.d(t, "h", function() {
        return at;
      }), n.d(t, "i", function() {
        return Nt;
      }), n.d(t, "j", function() {
        return Ot;
      }), n.d(t, "k", function() {
        return Mt;
      }), n.d(t, "l", function() {
        return Y;
      }), n.d(t, "m", function() {
        return Je;
      }), n.d(t, "n", function() {
        return We;
      }), n.d(t, "o", function() {
        return ct;
      }), n.d(t, "p", function() {
        return ue;
      });
      var o = function(e, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      var i = function() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function a(e) {
        var t = "function" === typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t
          ? t.call(e)
          : {
              next: function() {
                return e && n >= e.length && (e = void 0), {
                  value: e && e[n++],
                  done: !e
                };
              }
            };
      }
      function u(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(u(arguments[t]));
        return e;
      }
      var l =
          "An invariant failed, however the error is obfuscated because this is an production build.",
        c = [];
      Object.freeze(c);
      var f = {};
      function p() {
        return ++Te.mobxGuid;
      }
      function d(e) {
        throw (h(!1, e), "X");
      }
      function h(e, t) {
        if (!e) throw new Error("[mobx] " + (t || l));
      }
      Object.freeze(f);
      function m(e) {
        var t = !1;
        return function() {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var v = function() {};
      function y(e) {
        return null !== e && "object" === typeof e;
      }
      function g(e) {
        if (null === e || "object" !== typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t;
      }
      function b(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: n
        });
      }
      function w(e, t) {
        var n = "isMobX" + e;
        return (t.prototype[n] = !0), function(e) {
          return y(e) && !0 === e[n];
        };
      }
      function A(e) {
        return e instanceof Map;
      }
      function E(e) {
        return e instanceof Set;
      }
      function S(e) {
        var t = new Set();
        for (var n in e) t.add(n);
        return Object.getOwnPropertySymbols(e).forEach(function(n) {
          Object.getOwnPropertyDescriptor(e, n).enumerable && t.add(n);
        }), Array.from(t);
      }
      function x(e) {
        return e && e.toString ? e.toString() : new String(e).toString();
      }
      function N(e) {
        return null === e ? null : "object" === typeof e ? "" + e : e;
      }
      var T = Symbol("mobx administration"),
        C = (function() {
          function e(e) {
            void 0 === e &&
              (e =
                "Atom@" +
                p()), (this.name = e), (this.isPendingUnobservation = !1), (this.isBeingObserved = !1), (this.observers = new Set()), (this.diffValue = 0), (this.lastAccessedBy = 0), (this.lowestObserverState =
              X.NOT_TRACKING);
          }
          return (e.prototype.onBecomeObserved = function() {
            this.onBecomeObservedListeners &&
              this.onBecomeObservedListeners.forEach(function(e) {
                return e();
              });
          }), (e.prototype.onBecomeUnobserved = function() {
            this.onBecomeUnobservedListeners &&
              this.onBecomeUnobservedListeners.forEach(function(e) {
                return e();
              });
          }), (e.prototype.reportObserved = function() {
            return De(this);
          }), (e.prototype.reportChanged = function() {
            Pe(), (function(e) {
              if (e.lowestObserverState === X.STALE) return;
              (e.lowestObserverState = X.STALE), e.observers.forEach(function(
                t
              ) {
                t.dependenciesState === X.UP_TO_DATE &&
                  (
                    t.isTracing !== K.NONE && Le(t, e),
                    t.onBecomeStale()
                  ), (t.dependenciesState = X.STALE);
              });
            })(this), Ie();
          }), (e.prototype.toString = function() {
            return this.name;
          }), e;
        })(),
        k = w("Atom", C);
      function O(e, t, n) {
        void 0 === t && (t = v), void 0 === n && (n = v);
        var r = new C(e);
        return t !== v &&
          (function(e, t, n) {
            tt("onBecomeObserved", e, t, n);
          })(r, t), n !== v && et(r, n), r;
      }
      var _ = {
          identity: function(e, t) {
            return e === t;
          },
          structural: function(e, t) {
            return Ht(e, t);
          },
          default: function(e, t) {
            return Object.is(e, t);
          },
          shallow: function(e, t) {
            return Ht(e, t, 1);
          }
        },
        R = Symbol("mobx did run lazy initializers"),
        P = Symbol("mobx pending decorators"),
        I = {},
        D = {};
      function L(e) {
        if (!0 !== e[R]) {
          var t = e[P];
          if (t)
            for (var n in (b(e, R, !0), t)) {
              var r = t[n];
              r.propertyCreator(
                e,
                r.prop,
                r.descriptor,
                r.decoratorTarget,
                r.decoratorArguments
              );
            }
        }
      }
      function U(e, t) {
        return function() {
          var n,
            r = function(r, o, a, u) {
              if (!0 === u) return t(r, o, a, r, n), null;
              if (!Object.prototype.hasOwnProperty.call(r, P)) {
                var s = r[P];
                b(r, P, i({}, s));
              }
              return (r[P][o] = {
                prop: o,
                propertyCreator: t,
                descriptor: a,
                decoratorTarget: r,
                decoratorArguments: n
              }), (function(e, t) {
                var n = t ? I : D;
                return (
                  n[e] ||
                  (n[e] = {
                    configurable: !0,
                    enumerable: t,
                    get: function() {
                      return L(this), this[e];
                    },
                    set: function(t) {
                      L(this), (this[e] = t);
                    }
                  })
                );
              })(o, e);
            };
          return (function(e) {
            return (
              ((2 === e.length || 3 === e.length) &&
                "string" === typeof e[1]) ||
              (4 === e.length && !0 === e[3])
            );
          })(arguments)
            ? ((n = c), r.apply(null, arguments))
            : ((n = Array.prototype.slice.call(arguments)), r);
        };
      }
      function B(e, t, n) {
        return lt(e)
          ? e
          : Array.isArray(e)
            ? Y.array(e, { name: n })
            : g(e)
              ? Y.object(e, void 0, { name: n })
              : A(e) ? Y.map(e, { name: n }) : E(e) ? Y.set(e, { name: n }) : e;
      }
      function F(e) {
        return e;
      }
      function M(t) {
        h(t);
        var n = U(!0, function(e, n, r, o, i) {
            var a = r
              ? r.initializer ? r.initializer.call(e) : r.value
              : void 0;
            Dt(e).addObservableProp(n, a, t);
          }),
          r = (
            "undefined" !== typeof e &&
              Object({ NODE_ENV: "production", PUBLIC_URL: "." }),
            n
          );
        return (r.enhancer = t), r;
      }
      var j = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function V(e) {
        return null === e || void 0 === e
          ? j
          : "string" === typeof e ? { name: e, deep: !0, proxy: !0 } : e;
      }
      Object.freeze(j);
      var z = M(B),
        Q = M(function(e, t, n) {
          return void 0 === e || null === e
            ? e
            : Mt(e) || Nt(e) || Ot(e) || Pt(e)
              ? e
              : Array.isArray(e)
                ? Y.array(e, { name: n, deep: !1 })
                : g(e)
                  ? Y.object(e, void 0, { name: n, deep: !1 })
                  : A(e)
                    ? Y.map(e, { name: n, deep: !1 })
                    : E(e) ? Y.set(e, { name: n, deep: !1 }) : d(!1);
        }),
        H = M(F),
        W = M(function(e, t, n) {
          return Ht(e, t) ? t : e;
        });
      function q(e) {
        return e.defaultDecorator
          ? e.defaultDecorator.enhancer
          : !1 === e.deep ? F : B;
      }
      var G = {
          box: function(e, t) {
            arguments.length > 2 && J("box");
            var n = V(t);
            return new we(e, q(n), n.name, !0, n.equals);
          },
          array: function(e, t) {
            arguments.length > 2 && J("array");
            var n = V(t);
            return (function(e, t, n, r) {
              void 0 === n && (n = "ObservableArray@" + p());
              void 0 === r && (r = !1);
              var o = new At(n, t, r);
              !(function(e, t, n) {
                Object.defineProperty(e, t, {
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                  value: n
                });
              })(o.values, T, o);
              var i = new Proxy(o.values, wt);
              if (((o.proxy = i), e && e.length)) {
                var a = ge(!0);
                o.spliceWithArray(0, 0, e), be(a);
              }
              return i;
            })(e, q(n), n.name);
          },
          map: function(e, t) {
            arguments.length > 2 && J("map");
            var n = V(t);
            return new kt(e, q(n), n.name);
          },
          set: function(e, t) {
            arguments.length > 2 && J("set");
            var n = V(t);
            return new Rt(e, q(n), n.name);
          },
          object: function(e, t, n) {
            "string" === typeof arguments[1] && J("object");
            var r = V(n);
            if (!1 === r.proxy) return rt({}, e, t, r);
            var o = ot(r),
              i = (function(e) {
                var t = new Proxy(e, dt);
                return (e[T].proxy = t), t;
              })(rt({}, void 0, void 0, r));
            return it(i, e, t, o), i;
          },
          ref: H,
          shallow: Q,
          deep: z,
          struct: W
        },
        Y = function(e, t, n) {
          if ("string" === typeof arguments[1]) return z.apply(null, arguments);
          if (lt(e)) return e;
          var r = g(e)
            ? Y.object(e, t, n)
            : Array.isArray(e)
              ? Y.array(e, t)
              : A(e) ? Y.map(e, t) : E(e) ? Y.set(e, t) : e;
          if (r !== e) return r;
          d(!1);
        };
      function J(e) {
        d(
          "Expected one or two arguments to observable." +
            e +
            ". Did you accidentally try to use observable." +
            e +
            " as decorator?"
        );
      }
      Object.keys(G).forEach(function(e) {
        return (Y[e] = G[e]);
      });
      var X,
        K,
        Z = U(!1, function(e, t, n, r, o) {
          var a = n.get,
            u = n.set,
            s = o[0] || {};
          Dt(e).addComputedProp(e, t, i({ get: a, set: u, context: e }, s));
        }),
        $ = Z({ equals: _.structural }),
        ee = function(e, t, n) {
          if ("string" === typeof t) return Z.apply(null, arguments);
          if (null !== e && "object" === typeof e && 1 === arguments.length)
            return Z.apply(null, arguments);
          var r = "object" === typeof t ? t : {};
          return (r.get = e), (r.set =
            "function" === typeof t ? t : r.set), (r.name =
            r.name || e.name || ""), new Ae(r);
        };
      (ee.struct = $), (function(e) {
        (e[(e.NOT_TRACKING = -1)] = "NOT_TRACKING"), (e[(e.UP_TO_DATE = 0)] =
          "UP_TO_DATE"), (e[(e.POSSIBLY_STALE = 1)] = "POSSIBLY_STALE"), (e[
          (e.STALE = 2)
        ] =
          "STALE");
      })(X || (X = {})), (function(e) {
        (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[
          (e.BREAK = 2)
        ] =
          "BREAK");
      })(K || (K = {}));
      var te = (function() {
        return function(e) {
          this.cause = e;
        };
      })();
      function ne(e) {
        return e instanceof te;
      }
      function re(e) {
        switch (e.dependenciesState) {
          case X.UP_TO_DATE:
            return !1;
          case X.NOT_TRACKING:
          case X.STALE:
            return !0;
          case X.POSSIBLY_STALE:
            for (
              var t = se(), n = e.observing, r = n.length, o = 0;
              o < r;
              o++
            ) {
              var i = n[o];
              if (Ee(i)) {
                if (Te.disableErrorBoundaries) i.get();
                else
                  try {
                    i.get();
                  } catch (e) {
                    return le(t), !0;
                  }
                if (e.dependenciesState === X.STALE) return le(t), !0;
              }
            }
            return pe(e), le(t), !1;
        }
      }
      function oe(e) {
        var t = e.observers.size > 0;
        Te.computationDepth > 0 && t && d(!1), Te.allowStateChanges ||
          (!t && "strict" !== Te.enforceActions) ||
          d(!1);
      }
      function ie(e, t, n) {
        var r = ce(!0);
        pe(e), (e.newObserving = new Array(
          e.observing.length + 100
        )), (e.unboundDepsCount = 0), (e.runId = ++Te.runId);
        var o,
          i = Te.trackingDerivation;
        if (((Te.trackingDerivation = e), !0 === Te.disableErrorBoundaries))
          o = t.call(n);
        else
          try {
            o = t.call(n);
          } catch (e) {
            o = new te(e);
          }
        return (Te.trackingDerivation = i), (function(e) {
          for (
            var t = e.observing,
              n = (e.observing = e.newObserving),
              r = X.UP_TO_DATE,
              o = 0,
              i = e.unboundDepsCount,
              a = 0;
            a < i;
            a++
          ) {
            var u = n[a];
            0 === u.diffValue &&
              (
                (u.diffValue = 1),
                o !== a && (n[o] = u),
                o++
              ), u.dependenciesState > r && (r = u.dependenciesState);
          }
          (n.length = o), (e.newObserving = null), (i = t.length);
          for (; i--; ) {
            var u = t[i];
            0 === u.diffValue && _e(u, e), (u.diffValue = 0);
          }
          for (; o--; ) {
            var u = n[o];
            1 === u.diffValue && ((u.diffValue = 0), Oe(u, e));
          }
          r !== X.UP_TO_DATE && ((e.dependenciesState = r), e.onBecomeStale());
        })(e), fe(r), o;
      }
      function ae(e) {
        var t = e.observing;
        e.observing = [];
        for (var n = t.length; n--; ) _e(t[n], e);
        e.dependenciesState = X.NOT_TRACKING;
      }
      function ue(e) {
        var t = se();
        try {
          return e();
        } finally {
          le(t);
        }
      }
      function se() {
        var e = Te.trackingDerivation;
        return (Te.trackingDerivation = null), e;
      }
      function le(e) {
        Te.trackingDerivation = e;
      }
      function ce(e) {
        var t = Te.allowStateReads;
        return (Te.allowStateReads = e), t;
      }
      function fe(e) {
        Te.allowStateReads = e;
      }
      function pe(e) {
        if (e.dependenciesState !== X.UP_TO_DATE) {
          e.dependenciesState = X.UP_TO_DATE;
          for (var t = e.observing, n = t.length; n--; )
            t[n].lowestObserverState = X.UP_TO_DATE;
        }
      }
      var de = 0,
        he = 1;
      function me(e, t, n) {
        var r = function() {
          return ve(e, t, n || this, arguments);
        };
        return (r.isMobxAction = !0), r;
      }
      function ve(e, t, n, r) {
        var o = (function(e, t, n) {
          var r = Qe() && !!e,
            o = 0;
          var i = se();
          Pe();
          var a = ge(!0),
            u = ce(!0),
            s = {
              prevDerivation: i,
              prevAllowStateChanges: a,
              prevAllowStateReads: u,
              notifySpy: r,
              startTime: o,
              actionId: he++,
              parentActionId: de
            };
          return (de = s.actionId), s;
        })(e);
        try {
          return t.apply(n, r);
        } catch (e) {
          throw ((o.error = e), e);
        } finally {
          !(function(e) {
            de !== e.actionId &&
              d("invalid action stack. did you forget to finish an action?");
            (de = e.parentActionId), void 0 !== e.error &&
              (Te.suppressReactionErrors = !0);
            be(e.prevAllowStateChanges), fe(e.prevAllowStateReads), Ie(), le(
              e.prevDerivation
            ), e.notifySpy, 0;
            Te.suppressReactionErrors = !1;
          })(o);
        }
      }
      function ye(e, t) {
        var n,
          r = ge(e);
        try {
          n = t();
        } finally {
          be(r);
        }
        return n;
      }
      function ge(e) {
        var t = Te.allowStateChanges;
        return (Te.allowStateChanges = e), t;
      }
      function be(e) {
        Te.allowStateChanges = e;
      }
      var we = (function(e) {
          function t(t, n, r, o, i) {
            void 0 === r && (r = "ObservableValue@" + p()), void 0 === o &&
              (o = !0), void 0 === i && (i = _.default);
            var a = e.call(this, r) || this;
            return (a.enhancer = n), (a.name = r), (a.equals = i), (a.hasUnreportedChange = !1), (a.value = n(
              t,
              void 0,
              r
            )), o && Qe(), a;
          }
          return (function(e, t) {
            function n() {
              this.constructor = e;
            }
            o(e, t), (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
          })(t, e), (t.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }), (t.prototype.set = function(e) {
            this.value;
            if ((e = this.prepareNewValue(e)) !== Te.UNCHANGED) {
              Qe();
              0, this.setNewValue(e);
            }
          }), (t.prototype.prepareNewValue = function(e) {
            if ((oe(this), ht(this))) {
              var t = vt(this, { object: this, type: "update", newValue: e });
              if (!t) return Te.UNCHANGED;
              e = t.newValue;
            }
            return (e = this.enhancer(e, this.value, this.name)), this.equals(
              this.value,
              e
            )
              ? Te.UNCHANGED
              : e;
          }), (t.prototype.setNewValue = function(e) {
            var t = this.value;
            (this.value = e), this.reportChanged(), yt(this) &&
              bt(this, {
                type: "update",
                object: this,
                newValue: e,
                oldValue: t
              });
          }), (t.prototype.get = function() {
            return this.reportObserved(), this.dehanceValue(this.value);
          }), (t.prototype.intercept = function(e) {
            return mt(this, e);
          }), (t.prototype.observe = function(e, t) {
            return t &&
              e({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: void 0
              }), gt(this, e);
          }), (t.prototype.toJSON = function() {
            return this.get();
          }), (t.prototype.toString = function() {
            return this.name + "[" + this.value + "]";
          }), (t.prototype.valueOf = function() {
            return N(this.get());
          }), (t.prototype[Symbol.toPrimitive] = function() {
            return this.valueOf();
          }), t;
        })(C),
        Ae = (
          w("ObservableValue", we),
          (function() {
            function e(e) {
              (this.dependenciesState =
                X.NOT_TRACKING), (this.observing = []), (this.newObserving = null), (this.isBeingObserved = !1), (this.isPendingUnobservation = !1), (this.observers = new Set()), (this.diffValue = 0), (this.runId = 0), (this.lastAccessedBy = 0), (this.lowestObserverState =
                X.UP_TO_DATE), (this.unboundDepsCount = 0), (this.__mapid =
                "#" + p()), (this.value = new te(
                null
              )), (this.isComputing = !1), (this.isRunningSetter = !1), (this.isTracing =
                K.NONE), (this.derivation = e.get), (this.name =
                e.name || "ComputedValue@" + p()), e.set &&
                (this.setter = me(this.name + "-setter", e.set)), (this.equals =
                e.equals ||
                (e.compareStructural || e.struct
                  ? _.structural
                  : _.default)), (this.scope =
                e.context), (this.requiresReaction = !!e.requiresReaction), (this.keepAlive = !!e.keepAlive);
            }
            return (e.prototype.onBecomeStale = function() {
              !(function(e) {
                if (e.lowestObserverState !== X.UP_TO_DATE) return;
                (e.lowestObserverState =
                  X.POSSIBLY_STALE), e.observers.forEach(function(t) {
                  t.dependenciesState === X.UP_TO_DATE &&
                    (
                      (t.dependenciesState = X.POSSIBLY_STALE),
                      t.isTracing !== K.NONE && Le(t, e),
                      t.onBecomeStale()
                    );
                });
              })(this);
            }), (e.prototype.onBecomeObserved = function() {
              this.onBecomeObservedListeners &&
                this.onBecomeObservedListeners.forEach(function(e) {
                  return e();
                });
            }), (e.prototype.onBecomeUnobserved = function() {
              this.onBecomeUnobservedListeners &&
                this.onBecomeUnobservedListeners.forEach(function(e) {
                  return e();
                });
            }), (e.prototype.get = function() {
              this.isComputing &&
                d(
                  "Cycle detected in computation " +
                    this.name +
                    ": " +
                    this.derivation
                ), 0 !== Te.inBatch ||
              0 !== this.observers.size ||
              this.keepAlive
                ? (
                    De(this),
                    re(this) &&
                      this.trackAndCompute() &&
                      (function(e) {
                        if (e.lowestObserverState === X.STALE) return;
                        (e.lowestObserverState =
                          X.STALE), e.observers.forEach(function(t) {
                          t.dependenciesState === X.POSSIBLY_STALE
                            ? (t.dependenciesState = X.STALE)
                            : t.dependenciesState === X.UP_TO_DATE &&
                              (e.lowestObserverState = X.UP_TO_DATE);
                        });
                      })(this)
                  )
                : re(this) &&
                  (
                    this.warnAboutUntrackedRead(),
                    Pe(),
                    (this.value = this.computeValue(!1)),
                    Ie()
                  );
              var e = this.value;
              if (ne(e)) throw e.cause;
              return e;
            }), (e.prototype.peek = function() {
              var e = this.computeValue(!1);
              if (ne(e)) throw e.cause;
              return e;
            }), (e.prototype.set = function(e) {
              if (this.setter) {
                h(
                  !this.isRunningSetter,
                  "The setter of computed value '" +
                    this.name +
                    "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
                ), (this.isRunningSetter = !0);
                try {
                  this.setter.call(this.scope, e);
                } finally {
                  this.isRunningSetter = !1;
                }
              } else h(!1, !1);
            }), (e.prototype.trackAndCompute = function() {
              Qe();
              var e = this.value,
                t = this.dependenciesState === X.NOT_TRACKING,
                n = this.computeValue(!0),
                r = t || ne(e) || ne(n) || !this.equals(e, n);
              return r && (this.value = n), r;
            }), (e.prototype.computeValue = function(e) {
              var t;
              if (((this.isComputing = !0), Te.computationDepth++, e))
                t = ie(this, this.derivation, this.scope);
              else if (!0 === Te.disableErrorBoundaries)
                t = this.derivation.call(this.scope);
              else
                try {
                  t = this.derivation.call(this.scope);
                } catch (e) {
                  t = new te(e);
                }
              return Te.computationDepth--, (this.isComputing = !1), t;
            }), (e.prototype.suspend = function() {
              this.keepAlive || (ae(this), (this.value = void 0));
            }), (e.prototype.observe = function(e, t) {
              var n = this,
                r = !0,
                o = void 0;
              return Ke(function() {
                var i = n.get();
                if (!r || t) {
                  var a = se();
                  e({
                    type: "update",
                    object: n,
                    newValue: i,
                    oldValue: o
                  }), le(a);
                }
                (r = !1), (o = i);
              });
            }), (e.prototype.warnAboutUntrackedRead = function() {}), (e.prototype.toJSON = function() {
              return this.get();
            }), (e.prototype.toString = function() {
              return this.name + "[" + this.derivation.toString() + "]";
            }), (e.prototype.valueOf = function() {
              return N(this.get());
            }), (e.prototype[Symbol.toPrimitive] = function() {
              return this.valueOf();
            }), e;
          })()
        ),
        Ee = w("ComputedValue", Ae),
        Se = (function() {
          return function() {
            (this.version = 5), (this.UNCHANGED = {}), (this.trackingDerivation = null), (this.computationDepth = 0), (this.runId = 0), (this.mobxGuid = 0), (this.inBatch = 0), (this.pendingUnobservations = []), (this.pendingReactions = []), (this.isRunningReactions = !1), (this.allowStateChanges = !0), (this.allowStateReads = !0), (this.enforceActions = !1), (this.spyListeners = []), (this.globalReactionErrorHandlers = []), (this.computedRequiresReaction = !1), (this.reactionRequiresObservable = !1), (this.observableRequiresReaction = !1), (this.computedConfigurable = !1), (this.disableErrorBoundaries = !1), (this.suppressReactionErrors = !1);
          };
        })(),
        xe = !0,
        Ne = !1,
        Te = (function() {
          var e = ke();
          return e.__mobxInstanceCount > 0 &&
            !e.__mobxGlobals &&
            (xe = !1), e.__mobxGlobals &&
            e.__mobxGlobals.version !== new Se().version &&
            (xe = !1), xe
            ? e.__mobxGlobals
              ? (
                  (e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals
                )
              : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Se()))
            : (
                setTimeout(function() {
                  Ne ||
                    d(
                      "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`"
                    );
                }, 1),
                new Se()
              );
        })();
      var Ce = {};
      function ke() {
        return "undefined" !== typeof window
          ? window
          : "undefined" !== typeof r ? r : Ce;
      }
      function Oe(e, t) {
        e.observers.add(t), e.lowestObserverState > t.dependenciesState &&
          (e.lowestObserverState = t.dependenciesState);
      }
      function _e(e, t) {
        e.observers.delete(t), 0 === e.observers.size && Re(e);
      }
      function Re(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), Te.pendingUnobservations.push(e));
      }
      function Pe() {
        Te.inBatch++;
      }
      function Ie() {
        if (0 === --Te.inBatch) {
          Me();
          for (var e = Te.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation = !1), 0 === n.observers.size &&
              (
                n.isBeingObserved &&
                  ((n.isBeingObserved = !1), n.onBecomeUnobserved()),
                n instanceof Ae && n.suspend()
              );
          }
          Te.pendingUnobservations = [];
        }
      }
      function De(e) {
        var t = Te.trackingDerivation;
        return null !== t
          ? (
              t.runId !== e.lastAccessedBy &&
                (
                  (e.lastAccessedBy = t.runId),
                  (t.newObserving[t.unboundDepsCount++] = e),
                  e.isBeingObserved ||
                    ((e.isBeingObserved = !0), e.onBecomeObserved())
                ),
              !0
            )
          : (0 === e.observers.size && Te.inBatch > 0 && Re(e), !1);
      }
      function Le(e, t) {
        if (
          (
            console.log(
              "[mobx.trace] '" +
                e.name +
                "' is invalidated due to a change in: '" +
                t.name +
                "'"
            ),
            e.isTracing === K.BREAK
          )
        ) {
          var n = [];
          !(function e(t, n, r) {
            if (n.length >= 1e3) return void n.push("(and many more)");
            n.push("" + new Array(r).join("\t") + t.name);
            t.dependencies &&
              t.dependencies.forEach(function(t) {
                return e(t, n, r + 1);
              });
          })(at(e), n, 1), new Function(
            "debugger;\n/*\nTracing '" +
              e.name +
              "'\n\nYou are entering this break point because derivation '" +
              e.name +
              "' is being traced and '" +
              t.name +
              "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
              (e instanceof Ae
                ? e.derivation.toString().replace(/[*]\//g, "/")
                : "") +
              "\n\nThe dependencies for this derivation are:\n\n" +
              n.join("\n") +
              "\n*/\n    "
          )();
        }
      }
      var Ue = (function() {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction@" + p()), void 0 === r &&
            (r = !1), (this.name = e), (this.onInvalidate = t), (this.errorHandler = n), (this.requiresObservable = r), (this.observing = []), (this.newObserving = []), (this.dependenciesState =
            X.NOT_TRACKING), (this.diffValue = 0), (this.runId = 0), (this.unboundDepsCount = 0), (this.__mapid =
            "#" +
            p()), (this.isDisposed = !1), (this._isScheduled = !1), (this._isTrackPending = !1), (this._isRunning = !1), (this.isTracing =
            K.NONE);
        }
        return (e.prototype.onBecomeStale = function() {
          this.schedule();
        }), (e.prototype.schedule = function() {
          this._isScheduled ||
            ((this._isScheduled = !0), Te.pendingReactions.push(this), Me());
        }), (e.prototype.isScheduled = function() {
          return this._isScheduled;
        }), (e.prototype.runReaction = function() {
          if (!this.isDisposed) {
            if ((Pe(), (this._isScheduled = !1), re(this))) {
              this._isTrackPending = !0;
              try {
                this.onInvalidate(), this._isTrackPending && Qe();
              } catch (e) {
                this.reportExceptionInDerivation(e);
              }
            }
            Ie();
          }
        }), (e.prototype.track = function(e) {
          if (!this.isDisposed) {
            Pe();
            Qe();
            0, (this._isRunning = !0);
            var t = ie(this, e, void 0);
            (this._isRunning = !1), (this._isTrackPending = !1), this
              .isDisposed && ae(this), ne(t) &&
              this.reportExceptionInDerivation(t.cause), Ie();
          }
        }), (e.prototype.reportExceptionInDerivation = function(e) {
          var t = this;
          if (this.errorHandler) this.errorHandler(e, this);
          else {
            if (Te.disableErrorBoundaries) throw e;
            var n =
              "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" +
              this +
              "'";
            Te.suppressReactionErrors
              ? console.warn(
                  "[mobx] (error in reaction '" +
                    this.name +
                    "' suppressed, fix error of causing action below)"
                )
              : console.error(n, e), Qe() &&
              He({
                type: "error",
                name: this.name,
                message: n,
                error: "" + e
              }), Te.globalReactionErrorHandlers.forEach(function(n) {
              return n(e, t);
            });
          }
        }), (e.prototype.dispose = function() {
          this.isDisposed ||
            ((this.isDisposed = !0), this._isRunning || (Pe(), ae(this), Ie()));
        }), (e.prototype.getDisposer = function() {
          var e = this.dispose.bind(this);
          return (e[T] = this), e;
        }), (e.prototype.toString = function() {
          return "Reaction[" + this.name + "]";
        }), (e.prototype.trace = function(e) {
          void 0 === e && (e = !1), (function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = !1;
            "boolean" === typeof e[e.length - 1] && (n = e.pop());
            var r = (function(e) {
              switch (e.length) {
                case 0:
                  return Te.trackingDerivation;
                case 1:
                  return jt(e[0]);
                case 2:
                  return jt(e[0], e[1]);
              }
            })(e);
            if (!r) return d(!1);
            r.isTracing === K.NONE &&
              console.log("[mobx.trace] '" + r.name + "' tracing enabled");
            r.isTracing = n ? K.BREAK : K.LOG;
          })(this, e);
        }), e;
      })();
      var Be = 100,
        Fe = function(e) {
          return e();
        };
      function Me() {
        Te.inBatch > 0 || Te.isRunningReactions || Fe(je);
      }
      function je() {
        Te.isRunningReactions = !0;
        for (var e = Te.pendingReactions, t = 0; e.length > 0; ) {
          ++t === Be &&
            (
              console.error(
                "Reaction doesn't converge to a stable state after " +
                  Be +
                  " iterations. Probably there is a cycle in the reactive function: " +
                  e[0]
              ),
              e.splice(0)
            );
          for (var n = e.splice(0), r = 0, o = n.length; r < o; r++)
            n[r].runReaction();
        }
        Te.isRunningReactions = !1;
      }
      var Ve = w("Reaction", Ue);
      function ze(e) {
        var t = Fe;
        Fe = function(n) {
          return e(function() {
            return t(n);
          });
        };
      }
      function Qe() {
        return !1;
      }
      function He(e) {}
      function We(e) {
        return console.warn(
          "[mobx.spy] Is a no-op in production builds"
        ), function() {};
      }
      function qe() {
        d(!1);
      }
      function Ge(e) {
        return function(t, n, r) {
          if (r) {
            if (r.value)
              return {
                value: me(e, r.value),
                enumerable: !1,
                configurable: !0,
                writable: !0
              };
            var o = r.initializer;
            return {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              initializer: function() {
                return me(e, o.call(this));
              }
            };
          }
          return (function(e) {
            return function(t, n, r) {
              Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !1,
                get: function() {},
                set: function(t) {
                  b(this, n, Ye(e, t));
                }
              });
            };
          })(e).apply(this, arguments);
        };
      }
      var Ye = function(e, t, n, r) {
        return 1 === arguments.length && "function" === typeof e
          ? me(e.name || "<unnamed action>", e)
          : 2 === arguments.length && "function" === typeof t
            ? me(e, t)
            : 1 === arguments.length && "string" === typeof e
              ? Ge(e)
              : !0 !== r
                ? Ge(t).apply(null, arguments)
                : void b(e, t, me(e.name || t, n.value, this));
      };
      function Je(e, t) {
        var n = "string" === typeof e ? e : e.name || "<unnamed action>",
          r = "function" === typeof e ? e : t;
        return ve(n, r, this, void 0);
      }
      function Xe(e, t, n) {
        b(e, t, me(t, n.bind(e)));
      }
      function Ke(e, t) {
        void 0 === t && (t = f);
        var n,
          r = (t && t.name) || e.name || "Autorun@" + p();
        if (!t.scheduler && !t.delay)
          n = new Ue(
            r,
            function() {
              this.track(a);
            },
            t.onError,
            t.requiresObservable
          );
        else {
          var o = $e(t),
            i = !1;
          n = new Ue(
            r,
            function() {
              i ||
                (
                  (i = !0),
                  o(function() {
                    (i = !1), n.isDisposed || n.track(a);
                  })
                );
            },
            t.onError,
            t.requiresObservable
          );
        }
        function a() {
          e(n);
        }
        return n.schedule(), n.getDisposer();
      }
      Ye.bound = function(e, t, n, r) {
        return !0 === r
          ? (Xe(e, t, n.value), null)
          : n
            ? {
                configurable: !0,
                enumerable: !1,
                get: function() {
                  return Xe(this, t, n.value || n.initializer.call(this)), this[
                    t
                  ];
                },
                set: qe
              }
            : {
                enumerable: !1,
                configurable: !0,
                set: function(e) {
                  Xe(this, t, e);
                },
                get: function() {}
              };
      };
      var Ze = function(e) {
        return e();
      };
      function $e(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
            ? function(t) {
                return setTimeout(t, e.delay);
              }
            : Ze;
      }
      function et(e, t, n) {
        return tt("onBecomeUnobserved", e, t, n);
      }
      function tt(e, t, n, r) {
        var o = "function" === typeof r ? jt(t, n) : jt(t),
          i = "function" === typeof r ? r : n,
          a = e + "Listeners";
        return o[a] ? o[a].add(i) : (o[a] = new Set([i])), "function" !==
        typeof o[e]
          ? d(!1)
          : function() {
              var e = o[a];
              e && (e.delete(i), 0 === e.size && delete o[a]);
            };
      }
      function nt(e) {
        var t = e.enforceActions,
          n = e.computedRequiresReaction,
          r = e.computedConfigurable,
          o = e.disableErrorBoundaries,
          i = e.reactionScheduler,
          a = e.reactionRequiresObservable,
          u = e.observableRequiresReaction;
        if (
          (
            !0 === e.isolateGlobalState &&
              (
                (Te.pendingReactions.length ||
                  Te.inBatch ||
                  Te.isRunningReactions) &&
                  d(
                    "isolateGlobalState should be called before MobX is running any reactions"
                  ),
                (Ne = !0),
                xe &&
                  (
                    0 === --ke().__mobxInstanceCount &&
                      (ke().__mobxGlobals = void 0),
                    (Te = new Se())
                  )
              ),
            void 0 !== t
          )
        ) {
          var s = void 0;
          switch (t) {
            case !0:
            case "observed":
              s = !0;
              break;
            case !1:
            case "never":
              s = !1;
              break;
            case "strict":
            case "always":
              s = "strict";
              break;
            default:
              d(
                "Invalid value for 'enforceActions': '" +
                  t +
                  "', expected 'never', 'always' or 'observed'"
              );
          }
          (Te.enforceActions = s), (Te.allowStateChanges =
            !0 !== s && "strict" !== s);
        }
        void 0 !== n && (Te.computedRequiresReaction = !!n), void 0 !== a &&
          (Te.reactionRequiresObservable = !!a), void 0 !== u &&
          (
            (Te.observableRequiresReaction = !!u),
            (Te.allowStateReads = !Te.observableRequiresReaction)
          ), void 0 !== r && (Te.computedConfigurable = !!r), void 0 !== o &&
          (
            !0 === o &&
              console.warn(
                "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
              ),
            (Te.disableErrorBoundaries = !!o)
          ), i && ze(i);
      }
      function rt(e, t, n, r) {
        var o = ot((r = V(r)));
        return L(e), Dt(e, r.name, o.enhancer), t && it(e, t, n, o), e;
      }
      function ot(e) {
        return e.defaultDecorator || (!1 === e.deep ? H : z);
      }
      function it(e, t, n, r) {
        var o, i;
        Pe();
        try {
          var u = S(t);
          try {
            for (var s = a(u), l = s.next(); !l.done; l = s.next()) {
              var c = l.value,
                f = Object.getOwnPropertyDescriptor(t, c);
              0;
              var p = n && c in n ? n[c] : f.get ? Z : r;
              0;
              var d = p(e, c, f, !0);
              d && Object.defineProperty(e, c, d);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              l && !l.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        } finally {
          Ie();
        }
      }
      function at(e, t) {
        return ut(jt(e, t));
      }
      function ut(e) {
        var t = { name: e.name };
        return e.observing &&
          e.observing.length > 0 &&
          (t.dependencies = (function(e) {
            var t = [];
            return e.forEach(function(e) {
              -1 === t.indexOf(e) && t.push(e);
            }), t;
          })(e.observing).map(ut)), t;
      }
      function st(e, t) {
        return (
          null !== e &&
          void 0 !== e &&
          (void 0 !== t
            ? !!Mt(e) && e[T].values.has(t)
            : Mt(e) || !!e[T] || k(e) || Ve(e) || Ee(e))
        );
      }
      function lt(e) {
        return 1 !== arguments.length && d(!1), st(e);
      }
      function ct(e, t) {
        void 0 === t && (t = void 0), Pe();
        try {
          return e.apply(t);
        } finally {
          Ie();
        }
      }
      function ft(e) {
        return e[T];
      }
      function pt(e) {
        return (
          "string" === typeof e ||
          "number" === typeof e ||
          "symbol" === typeof e
        );
      }
      var dt = {
        has: function(e, t) {
          if (t === T || "constructor" === t || t === R) return !0;
          var n = ft(e);
          return pt(t) ? n.has(t) : t in e;
        },
        get: function(e, t) {
          if (t === T || "constructor" === t || t === R) return e[t];
          var n = ft(e),
            r = n.values.get(t);
          if (r instanceof C) {
            var o = r.get();
            return void 0 === o && n.has(t), o;
          }
          return pt(t) && n.has(t), e[t];
        },
        set: function(e, t, n) {
          return (
            !!pt(t) &&
            (
              (function e(t, n, r) {
                if (2 !== arguments.length || Pt(t))
                  if (Mt(t)) {
                    var o = t[T];
                    o.values.get(n)
                      ? o.write(n, r)
                      : o.addObservableProp(n, r, o.defaultEnhancer);
                  } else if (Ot(t)) t.set(n, r);
                  else if (Pt(t)) t.add(n);
                  else {
                    if (!Nt(t)) return d(!1);
                    "number" !== typeof n && (n = parseInt(n, 10)), h(
                      n >= 0,
                      "Not a valid index: '" + n + "'"
                    ), Pe(), n >= t.length && (t.length = n + 1), (t[
                      n
                    ] = r), Ie();
                  }
                else {
                  Pe();
                  var i = n;
                  try {
                    for (var a in i) e(t, a, i[a]);
                  } finally {
                    Ie();
                  }
                }
              })(e, t, n),
              !0
            )
          );
        },
        deleteProperty: function(e, t) {
          return !!pt(t) && (ft(e).remove(t), !0);
        },
        ownKeys: function(e) {
          return ft(e).keysAtom.reportObserved(), Reflect.ownKeys(e);
        },
        preventExtensions: function(e) {
          return d("Dynamic observable objects cannot be frozen"), !1;
        }
      };
      function ht(e) {
        return void 0 !== e.interceptors && e.interceptors.length > 0;
      }
      function mt(e, t) {
        var n = e.interceptors || (e.interceptors = []);
        return n.push(t), m(function() {
          var e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        });
      }
      function vt(e, t) {
        var n = se();
        try {
          for (
            var r = s(e.interceptors || []), o = 0, i = r.length;
            o < i &&
            (
              h(
                !(t = r[o](t)) || t.type,
                "Intercept handlers should return nothing or a change object"
              ),
              t
            );
            o++
          );
          return t;
        } finally {
          le(n);
        }
      }
      function yt(e) {
        return void 0 !== e.changeListeners && e.changeListeners.length > 0;
      }
      function gt(e, t) {
        var n = e.changeListeners || (e.changeListeners = []);
        return n.push(t), m(function() {
          var e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        });
      }
      function bt(e, t) {
        var n = se(),
          r = e.changeListeners;
        if (r) {
          for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](t);
          le(n);
        }
      }
      var wt = {
        get: function(e, t) {
          return t === T
            ? e[T]
            : "length" === t
              ? e[T].getArrayLength()
              : "number" === typeof t
                ? Et.get.call(e, t)
                : "string" !== typeof t || isNaN(t)
                  ? Et.hasOwnProperty(t) ? Et[t] : e[t]
                  : Et.get.call(e, parseInt(t));
        },
        set: function(e, t, n) {
          return "length" === t && e[T].setArrayLength(n), "number" ===
            typeof t && Et.set.call(e, t, n), "symbol" === typeof t || isNaN(t)
            ? (e[t] = n)
            : Et.set.call(e, parseInt(t), n), !0;
        },
        preventExtensions: function(e) {
          return d("Observable arrays cannot be frozen"), !1;
        }
      };
      var At = (function() {
          function e(e, t, n) {
            (this.owned = n), (this.values = []), (this.proxy = void 0), (this.lastKnownLength = 0), (this.atom = new C(
              e || "ObservableArray@" + p()
            )), (this.enhancer = function(n, r) {
              return t(n, r, e + "[..]");
            });
          }
          return (e.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }), (e.prototype.dehanceValues = function(e) {
            return void 0 !== this.dehancer && e.length > 0
              ? e.map(this.dehancer)
              : e;
          }), (e.prototype.intercept = function(e) {
            return mt(this, e);
          }), (e.prototype.observe = function(e, t) {
            return void 0 === t && (t = !1), t &&
              e({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
              }), gt(this, e);
          }), (e.prototype.getArrayLength = function() {
            return this.atom.reportObserved(), this.values.length;
          }), (e.prototype.setArrayLength = function(e) {
            if ("number" !== typeof e || e < 0)
              throw new Error("[mobx.array] Out of range: " + e);
            var t = this.values.length;
            if (e !== t)
              if (e > t) {
                for (var n = new Array(e - t), r = 0; r < e - t; r++)
                  n[r] = void 0;
                this.spliceWithArray(t, 0, n);
              } else this.spliceWithArray(e, t - e);
          }), (e.prototype.updateArrayLength = function(e, t) {
            if (e !== this.lastKnownLength)
              throw new Error(
                "[mobx] Modification exception: the internal structure of an observable array was changed."
              );
            this.lastKnownLength += t;
          }), (e.prototype.spliceWithArray = function(e, t, n) {
            var r = this;
            oe(this.atom);
            var o = this.values.length;
            if (
              (
                void 0 === e
                  ? (e = 0)
                  : e > o ? (e = o) : e < 0 && (e = Math.max(0, o + e)),
                (t =
                  1 === arguments.length
                    ? o - e
                    : void 0 === t || null === t
                      ? 0
                      : Math.max(0, Math.min(t, o - e))),
                void 0 === n && (n = c),
                ht(this)
              )
            ) {
              var i = vt(this, {
                object: this.proxy,
                type: "splice",
                index: e,
                removedCount: t,
                added: n
              });
              if (!i) return c;
              (t = i.removedCount), (n = i.added);
            }
            n =
              0 === n.length
                ? n
                : n.map(function(e) {
                    return r.enhancer(e, void 0);
                  });
            var a = this.spliceItemsIntoValues(e, t, n);
            return (0 === t && 0 === n.length) ||
              this.notifyArraySplice(e, n, a), this.dehanceValues(a);
          }), (e.prototype.spliceItemsIntoValues = function(e, t, n) {
            var r;
            if (n.length < 1e4)
              return (r = this.values).splice.apply(r, s([e, t], n));
            var o = this.values.slice(e, e + t);
            return (this.values = this.values
              .slice(0, e)
              .concat(n, this.values.slice(e + t))), o;
          }), (e.prototype.notifyArrayChildUpdate = function(e, t, n) {
            var r = !this.owned && !1,
              o = yt(this),
              i =
                o || r
                  ? {
                      object: this.proxy,
                      type: "update",
                      index: e,
                      newValue: t,
                      oldValue: n
                    }
                  : null;
            this.atom.reportChanged(), o && bt(this, i);
          }), (e.prototype.notifyArraySplice = function(e, t, n) {
            var r = !this.owned && !1,
              o = yt(this),
              i =
                o || r
                  ? {
                      object: this.proxy,
                      type: "splice",
                      index: e,
                      removed: n,
                      added: t,
                      removedCount: n.length,
                      addedCount: t.length
                    }
                  : null;
            this.atom.reportChanged(), o && bt(this, i);
          }), e;
        })(),
        Et = {
          intercept: function(e) {
            return this[T].intercept(e);
          },
          observe: function(e, t) {
            return void 0 === t && (t = !1), this[T].observe(e, t);
          },
          clear: function() {
            return this.splice(0);
          },
          replace: function(e) {
            var t = this[T];
            return t.spliceWithArray(0, t.values.length, e);
          },
          toJS: function() {
            return this.slice();
          },
          toJSON: function() {
            return this.toJS();
          },
          splice: function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var o = this[T];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return o.spliceWithArray(e);
              case 2:
                return o.spliceWithArray(e, t);
            }
            return o.spliceWithArray(e, t, n);
          },
          spliceWithArray: function(e, t, n) {
            return this[T].spliceWithArray(e, t, n);
          },
          push: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this[T];
            return n.spliceWithArray(n.values.length, 0, e), n.values.length;
          },
          pop: function() {
            return this.splice(Math.max(this[T].values.length - 1, 0), 1)[0];
          },
          shift: function() {
            return this.splice(0, 1)[0];
          },
          unshift: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this[T];
            return n.spliceWithArray(0, 0, e), n.values.length;
          },
          reverse: function() {
            var e = this.slice();
            return e.reverse.apply(e, arguments);
          },
          sort: function(e) {
            var t = this.slice();
            return t.sort.apply(t, arguments);
          },
          remove: function(e) {
            var t = this[T],
              n = t.dehanceValues(t.values).indexOf(e);
            return n > -1 && (this.splice(n, 1), !0);
          },
          get: function(e) {
            var t = this[T];
            if (t) {
              if (e < t.values.length)
                return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
              console.warn(
                "[mobx.array] Attempt to read an array index (" +
                  e +
                  ") that is out of bounds (" +
                  t.values.length +
                  "). Please check length first. Out of bound indices will not be tracked by MobX"
              );
            }
          },
          set: function(e, t) {
            var n = this[T],
              r = n.values;
            if (e < r.length) {
              oe(n.atom);
              var o = r[e];
              if (ht(n)) {
                var i = vt(n, {
                  type: "update",
                  object: n.proxy,
                  index: e,
                  newValue: t
                });
                if (!i) return;
                t = i.newValue;
              }
              (t = n.enhancer(t, o)) !== o &&
                ((r[e] = t), n.notifyArrayChildUpdate(e, t, o));
            } else {
              if (e !== r.length)
                throw new Error(
                  "[mobx.array] Index out of bounds, " +
                    e +
                    " is larger than " +
                    r.length
                );
              n.spliceWithArray(e, 0, [t]);
            }
          }
        };
      [
        "concat",
        "every",
        "filter",
        "forEach",
        "indexOf",
        "join",
        "lastIndexOf",
        "map",
        "reduce",
        "reduceRight",
        "slice",
        "some",
        "toString",
        "toLocaleString"
      ].forEach(function(e) {
        Et[e] = function() {
          var t = this[T];
          t.atom.reportObserved();
          var n = t.dehanceValues(t.values);
          return n[e].apply(n, arguments);
        };
      });
      var St,
        xt = w("ObservableArrayAdministration", At);
      function Nt(e) {
        return y(e) && xt(e[T]);
      }
      var Tt,
        Ct = {},
        kt = (function() {
          function e(e, t, n) {
            if (
              (
                void 0 === t && (t = B),
                void 0 === n && (n = "ObservableMap@" + p()),
                (this.enhancer = t),
                (this.name = n),
                (this[St] = Ct),
                (this._keysAtom = O(this.name + ".keys()")),
                (this[Symbol.toStringTag] = "Map"),
                "function" !== typeof Map
              )
            )
              throw new Error(
                "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js"
              );
            (this._data = new Map()), (this._hasMap = new Map()), this.merge(e);
          }
          return (e.prototype._has = function(e) {
            return this._data.has(e);
          }), (e.prototype.has = function(e) {
            var t = this;
            if (!Te.trackingDerivation) return this._has(e);
            var n = this._hasMap.get(e);
            if (!n) {
              var r = (n = new we(
                this._has(e),
                F,
                this.name + "." + x(e) + "?",
                !1
              ));
              this._hasMap.set(e, r), et(r, function() {
                return t._hasMap.delete(e);
              });
            }
            return n.get();
          }), (e.prototype.set = function(e, t) {
            var n = this._has(e);
            if (ht(this)) {
              var r = vt(this, {
                type: n ? "update" : "add",
                object: this,
                newValue: t,
                name: e
              });
              if (!r) return this;
              t = r.newValue;
            }
            return n ? this._updateValue(e, t) : this._addValue(e, t), this;
          }), (e.prototype.delete = function(e) {
            var t = this;
            if (
              ht(this) &&
              !(r = vt(this, { type: "delete", object: this, name: e }))
            )
              return !1;
            if (this._has(e)) {
              var n = yt(this),
                r = n
                  ? {
                      type: "delete",
                      object: this,
                      oldValue: this._data.get(e).value,
                      name: e
                    }
                  : null;
              return ct(function() {
                t._keysAtom.reportChanged(), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e);
              }), n && bt(this, r), !0;
            }
            return !1;
          }), (e.prototype._updateHasMapEntry = function(e, t) {
            var n = this._hasMap.get(e);
            n && n.setNewValue(t);
          }), (e.prototype._updateValue = function(e, t) {
            var n = this._data.get(e);
            if ((t = n.prepareNewValue(t)) !== Te.UNCHANGED) {
              var r = yt(this),
                o = r
                  ? {
                      type: "update",
                      object: this,
                      oldValue: n.value,
                      name: e,
                      newValue: t
                    }
                  : null;
              0, n.setNewValue(t), r && bt(this, o);
            }
          }), (e.prototype._addValue = function(e, t) {
            var n = this;
            oe(this._keysAtom), ct(function() {
              var r = new we(t, n.enhancer, n.name + "." + x(e), !1);
              n._data.set(
                e,
                r
              ), (t = r.value), n._updateHasMapEntry(e, !0), n._keysAtom.reportChanged();
            });
            var r = yt(this),
              o = r
                ? { type: "add", object: this, name: e, newValue: t }
                : null;
            r && bt(this, o);
          }), (e.prototype.get = function(e) {
            return this.has(e)
              ? this.dehanceValue(this._data.get(e).get())
              : this.dehanceValue(void 0);
          }), (e.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }), (e.prototype.keys = function() {
            return this._keysAtom.reportObserved(), this._data.keys();
          }), (e.prototype.values = function() {
            var e = this,
              t = 0,
              n = Array.from(this.keys());
            return Gt({
              next: function() {
                return t < n.length
                  ? { value: e.get(n[t++]), done: !1 }
                  : { done: !0 };
              }
            });
          }), (e.prototype.entries = function() {
            var e = this,
              t = 0,
              n = Array.from(this.keys());
            return Gt({
              next: function() {
                if (t < n.length) {
                  var r = n[t++];
                  return { value: [r, e.get(r)], done: !1 };
                }
                return { done: !0 };
              }
            });
          }), (e.prototype[((St = T), Symbol.iterator)] = function() {
            return this.entries();
          }), (e.prototype.forEach = function(e, t) {
            var n, r;
            try {
              for (var o = a(this), i = o.next(); !i.done; i = o.next()) {
                var s = u(i.value, 2),
                  l = s[0],
                  c = s[1];
                e.call(t, c, l, this);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                i && !i.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
          }), (e.prototype.merge = function(e) {
            var t = this;
            return Ot(e) && (e = e.toJS()), ct(function() {
              g(e)
                ? S(e).forEach(function(n) {
                    return t.set(n, e[n]);
                  })
                : Array.isArray(e)
                  ? e.forEach(function(e) {
                      var n = u(e, 2),
                        r = n[0],
                        o = n[1];
                      return t.set(r, o);
                    })
                  : A(e)
                    ? (
                        e.constructor !== Map &&
                          d(
                            "Cannot initialize from classes that inherit from Map: " +
                              e.constructor.name
                          ),
                        e.forEach(function(e, n) {
                          return t.set(n, e);
                        })
                      )
                    : null !== e &&
                      void 0 !== e &&
                      d("Cannot initialize map from " + e);
            }), this;
          }), (e.prototype.clear = function() {
            var e = this;
            ct(function() {
              ue(function() {
                var t, n;
                try {
                  for (
                    var r = a(e.keys()), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var i = o.value;
                    e.delete(i);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              });
            });
          }), (e.prototype.replace = function(e) {
            var t = this;
            return ct(function() {
              var n = (function(e) {
                return g(e)
                  ? Object.keys(e)
                  : Array.isArray(e)
                    ? e.map(function(e) {
                        return u(e, 1)[0];
                      })
                    : A(e) || Ot(e)
                      ? Array.from(e.keys())
                      : d("Cannot get keys from '" + e + "'");
              })(e);
              Array.from(t.keys())
                .filter(function(e) {
                  return -1 === n.indexOf(e);
                })
                .forEach(function(e) {
                  return t.delete(e);
                }), t.merge(e);
            }), this;
          }), Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._keysAtom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0
          }), (e.prototype.toPOJO = function() {
            var e,
              t,
              n = {};
            try {
              for (var r = a(this), o = r.next(); !o.done; o = r.next()) {
                var i = u(o.value, 2),
                  s = i[0],
                  l = i[1];
                n["symbol" === typeof s ? s : x(s)] = l;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = r.return) && t.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            return n;
          }), (e.prototype.toJS = function() {
            return new Map(this);
          }), (e.prototype.toJSON = function() {
            return this.toPOJO();
          }), (e.prototype.toString = function() {
            var e = this;
            return (
              this.name +
              "[{ " +
              Array.from(this.keys())
                .map(function(t) {
                  return x(t) + ": " + e.get(t);
                })
                .join(", ") +
              " }]"
            );
          }), (e.prototype.observe = function(e, t) {
            return gt(this, e);
          }), (e.prototype.intercept = function(e) {
            return mt(this, e);
          }), e;
        })(),
        Ot = w("ObservableMap", kt),
        _t = {},
        Rt = (function() {
          function e(e, t, n) {
            if (
              (
                void 0 === t && (t = B),
                void 0 === n && (n = "ObservableSet@" + p()),
                (this.name = n),
                (this[Tt] = _t),
                (this._data = new Set()),
                (this._atom = O(this.name)),
                (this[Symbol.toStringTag] = "Set"),
                "function" !== typeof Set
              )
            )
              throw new Error(
                "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js"
              );
            (this.enhancer = function(e, r) {
              return t(e, r, n);
            }), e && this.replace(e);
          }
          return (e.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }), (e.prototype.clear = function() {
            var e = this;
            ct(function() {
              ue(function() {
                var t, n;
                try {
                  for (
                    var r = a(e._data.values()), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var i = o.value;
                    e.delete(i);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              });
            });
          }), (e.prototype.forEach = function(e, t) {
            var n, r;
            try {
              for (var o = a(this), i = o.next(); !i.done; i = o.next()) {
                var u = i.value;
                e.call(t, u, u, this);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                i && !i.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
          }), Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._atom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0
          }), (e.prototype.add = function(e) {
            var t = this;
            if (
              (oe(this._atom), ht(this)) &&
              !(r = vt(this, { type: "add", object: this, newValue: e }))
            )
              return this;
            if (!this.has(e)) {
              ct(function() {
                t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged();
              });
              var n = yt(this),
                r = n ? { type: "add", object: this, newValue: e } : null;
              0, n && bt(this, r);
            }
            return this;
          }), (e.prototype.delete = function(e) {
            var t = this;
            if (
              ht(this) &&
              !(r = vt(this, { type: "delete", object: this, oldValue: e }))
            )
              return !1;
            if (this.has(e)) {
              var n = yt(this),
                r = n ? { type: "delete", object: this, oldValue: e } : null;
              return ct(function() {
                t._atom.reportChanged(), t._data.delete(e);
              }), n && bt(this, r), !0;
            }
            return !1;
          }), (e.prototype.has = function(e) {
            return this._atom.reportObserved(), this._data.has(
              this.dehanceValue(e)
            );
          }), (e.prototype.entries = function() {
            var e = 0,
              t = Array.from(this.keys()),
              n = Array.from(this.values());
            return Gt({
              next: function() {
                var r = e;
                return (e += 1), r < n.length
                  ? { value: [t[r], n[r]], done: !1 }
                  : { done: !0 };
              }
            });
          }), (e.prototype.keys = function() {
            return this.values();
          }), (e.prototype.values = function() {
            this._atom.reportObserved();
            var e = this,
              t = 0,
              n = Array.from(this._data.values());
            return Gt({
              next: function() {
                return t < n.length
                  ? { value: e.dehanceValue(n[t++]), done: !1 }
                  : { done: !0 };
              }
            });
          }), (e.prototype.replace = function(e) {
            var t = this;
            return Pt(e) && (e = e.toJS()), ct(function() {
              Array.isArray(e)
                ? (
                    t.clear(),
                    e.forEach(function(e) {
                      return t.add(e);
                    })
                  )
                : E(e)
                  ? (
                      t.clear(),
                      e.forEach(function(e) {
                        return t.add(e);
                      })
                    )
                  : null !== e &&
                    void 0 !== e &&
                    d("Cannot initialize set from " + e);
            }), this;
          }), (e.prototype.observe = function(e, t) {
            return gt(this, e);
          }), (e.prototype.intercept = function(e) {
            return mt(this, e);
          }), (e.prototype.toJS = function() {
            return new Set(this);
          }), (e.prototype.toString = function() {
            return this.name + "[ " + Array.from(this).join(", ") + " ]";
          }), (e.prototype[((Tt = T), Symbol.iterator)] = function() {
            return this.values();
          }), e;
        })(),
        Pt = w("ObservableSet", Rt),
        It = (function() {
          function e(e, t, n, r) {
            void 0 === t &&
              (t = new Map()), (this.target = e), (this.values = t), (this.name = n), (this.defaultEnhancer = r), (this.keysAtom = new C(
              n + ".keys"
            ));
          }
          return (e.prototype.read = function(e) {
            return this.values.get(e).get();
          }), (e.prototype.write = function(e, t) {
            var n = this.target,
              r = this.values.get(e);
            if (r instanceof Ae) r.set(t);
            else {
              if (ht(this)) {
                if (
                  !(i = vt(this, {
                    type: "update",
                    object: this.proxy || n,
                    name: e,
                    newValue: t
                  }))
                )
                  return;
                t = i.newValue;
              }
              if ((t = r.prepareNewValue(t)) !== Te.UNCHANGED) {
                var o = yt(this),
                  i = o
                    ? {
                        type: "update",
                        object: this.proxy || n,
                        oldValue: r.value,
                        name: e,
                        newValue: t
                      }
                    : null;
                0, r.setNewValue(t), o && bt(this, i);
              }
            }
          }), (e.prototype.has = function(e) {
            var t = this.pendingKeys || (this.pendingKeys = new Map()),
              n = t.get(e);
            if (n) return n.get();
            var r = !!this.values.get(e);
            return (n = new we(r, F, this.name + "." + x(e) + "?", !1)), t.set(
              e,
              n
            ), n.get();
          }), (e.prototype.addObservableProp = function(e, t, n) {
            void 0 === n && (n = this.defaultEnhancer);
            var r = this.target;
            if (ht(this)) {
              var o = vt(this, {
                object: this.proxy || r,
                name: e,
                type: "add",
                newValue: t
              });
              if (!o) return;
              t = o.newValue;
            }
            var i = new we(t, n, this.name + "." + x(e), !1);
            this.values.set(e, i), (t = i.value), Object.defineProperty(
              r,
              e,
              (function(e) {
                return (
                  Lt[e] ||
                  (Lt[e] = {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                      return this[T].read(e);
                    },
                    set: function(t) {
                      this[T].write(e, t);
                    }
                  })
                );
              })(e)
            ), this.notifyPropertyAddition(e, t);
          }), (e.prototype.addComputedProp = function(e, t, n) {
            var r = this.target;
            (n.name = n.name || this.name + "." + x(t)), this.values.set(
              t,
              new Ae(n)
            ), (e === r ||
              (function(e, t) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                return !n || (!1 !== n.configurable && !1 !== n.writable);
              })(e, t)) &&
              Object.defineProperty(
                e,
                t,
                (function(e) {
                  return (
                    Ut[e] ||
                    (Ut[e] = {
                      configurable: Te.computedConfigurable,
                      enumerable: !1,
                      get: function() {
                        return Bt(this).read(e);
                      },
                      set: function(t) {
                        Bt(this).write(e, t);
                      }
                    })
                  );
                })(t)
              );
          }), (e.prototype.remove = function(e) {
            if (this.values.has(e)) {
              var t = this.target;
              if (ht(this))
                if (
                  !(a = vt(this, {
                    object: this.proxy || t,
                    name: e,
                    type: "remove"
                  }))
                )
                  return;
              try {
                Pe();
                var n = yt(this),
                  r = this.values.get(e),
                  o = r && r.get();
                if (
                  (
                    r && r.set(void 0),
                    this.keysAtom.reportChanged(),
                    this.values.delete(e),
                    this.pendingKeys
                  )
                ) {
                  var i = this.pendingKeys.get(e);
                  i && i.set(!1);
                }
                delete this.target[e];
                var a = n
                  ? {
                      type: "remove",
                      object: this.proxy || t,
                      oldValue: o,
                      name: e
                    }
                  : null;
                0, n && bt(this, a);
              } finally {
                Ie();
              }
            }
          }), (e.prototype.illegalAccess = function(e, t) {
            console.warn(
              "Property '" +
                t +
                "' of '" +
                e +
                "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
            );
          }), (e.prototype.observe = function(e, t) {
            return gt(this, e);
          }), (e.prototype.intercept = function(e) {
            return mt(this, e);
          }), (e.prototype.notifyPropertyAddition = function(e, t) {
            var n = yt(this),
              r = n
                ? {
                    type: "add",
                    object: this.proxy || this.target,
                    name: e,
                    newValue: t
                  }
                : null;
            if ((n && bt(this, r), this.pendingKeys)) {
              var o = this.pendingKeys.get(e);
              o && o.set(!0);
            }
            this.keysAtom.reportChanged();
          }), (e.prototype.getKeys = function() {
            var e, t;
            this.keysAtom.reportObserved();
            var n = [];
            try {
              for (
                var r = a(this.values), o = r.next();
                !o.done;
                o = r.next()
              ) {
                var i = u(o.value, 2),
                  s = i[0];
                i[1] instanceof we && n.push(s);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = r.return) && t.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            return n;
          }), e;
        })();
      function Dt(e, t, n) {
        if (
          (
            void 0 === t && (t = ""),
            void 0 === n && (n = B),
            Object.prototype.hasOwnProperty.call(e, T)
          )
        )
          return e[T];
        g(e) ||
          (t = (e.constructor.name || "ObservableObject") + "@" + p()), t ||
          (t = "ObservableObject@" + p());
        var r = new It(e, new Map(), x(t), n);
        return b(e, T, r), r;
      }
      var Lt = Object.create(null),
        Ut = Object.create(null);
      function Bt(e) {
        var t = e[T];
        return t || (L(e), e[T]);
      }
      var Ft = w("ObservableObjectAdministration", It);
      function Mt(e) {
        return !!y(e) && (L(e), Ft(e[T]));
      }
      function jt(e, t) {
        if ("object" === typeof e && null !== e) {
          if (Nt(e)) return void 0 !== t && d(!1), e[T].atom;
          if (Pt(e)) return e[T];
          if (Ot(e)) {
            var n = e;
            return void 0 === t
              ? n._keysAtom
              : ((r = n._data.get(t) || n._hasMap.get(t)) || d(!1), r);
          }
          var r;
          if ((L(e), t && !e[T] && e[t], Mt(e)))
            return t ? ((r = e[T].values.get(t)) || d(!1), r) : d(!1);
          if (k(e) || Ee(e) || Ve(e)) return e;
        } else if ("function" === typeof e && Ve(e[T])) return e[T];
        return d(!1);
      }
      function Vt(e, t) {
        return e || d("Expecting some object"), void 0 !== t
          ? Vt(jt(e, t))
          : k(e) || Ee(e) || Ve(e)
            ? e
            : Ot(e) || Pt(e) ? e : (L(e), e[T] ? e[T] : void d(!1));
      }
      function zt(e, t) {
        return (void 0 !== t
          ? jt(e, t)
          : Mt(e) || Ot(e) || Pt(e) ? Vt(e) : jt(e)).name;
      }
      var Qt = Object.prototype.toString;
      function Ht(e, t, n) {
        return void 0 === n && (n = -1), (function e(t, n, r, o, i) {
          if (t === n) return 0 !== t || 1 / t === 1 / n;
          if (null == t || null == n) return !1;
          if (t !== t) return n !== n;
          var a = typeof t;
          if ("function" !== a && "object" !== a && "object" != typeof n)
            return !1;
          t = Wt(t);
          n = Wt(n);
          var u = Qt.call(t);
          if (u !== Qt.call(n)) return !1;
          switch (u) {
            case "[object RegExp]":
            case "[object String]":
              return "" + t === "" + n;
            case "[object Number]":
              return +t !== +t
                ? +n !== +n
                : 0 === +t ? 1 / +t === 1 / n : +t === +n;
            case "[object Date]":
            case "[object Boolean]":
              return +t === +n;
            case "[object Symbol]":
              return (
                "undefined" !== typeof Symbol &&
                Symbol.valueOf.call(t) === Symbol.valueOf.call(n)
              );
          }
          var s = "[object Array]" === u;
          if (!s) {
            if ("object" != typeof t || "object" != typeof n) return !1;
            var l = t.constructor,
              c = n.constructor;
            if (
              l !== c &&
              !(
                "function" === typeof l &&
                l instanceof l &&
                "function" === typeof c &&
                c instanceof c
              ) &&
              "constructor" in t &&
              "constructor" in n
            )
              return !1;
          }
          if (0 === r) return !1;
          r < 0 && (r = -1);
          o = o || [];
          i = i || [];
          var f = o.length;
          for (; f--; ) if (o[f] === t) return i[f] === n;
          o.push(t);
          i.push(n);
          if (s) {
            if ((f = t.length) !== n.length) return !1;
            for (; f--; ) if (!e(t[f], n[f], r - 1, o, i)) return !1;
          } else {
            var p = Object.keys(t),
              d = void 0;
            if (((f = p.length), Object.keys(n).length !== f)) return !1;
            for (; f--; )
              if (((d = p[f]), !qt(n, d) || !e(t[d], n[d], r - 1, o, i)))
                return !1;
          }
          o.pop();
          i.pop();
          return !0;
        })(e, t, n);
      }
      function Wt(e) {
        return Nt(e)
          ? e.slice()
          : A(e) || Ot(e)
            ? Array.from(e.entries())
            : E(e) || Pt(e) ? Array.from(e.entries()) : e;
      }
      function qt(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function Gt(e) {
        return (e[Symbol.iterator] = Yt), e;
      }
      function Yt() {
        return this;
      }
      if ("undefined" === typeof Proxy || "undefined" === typeof Symbol)
        throw new Error(
          "[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore."
        );
      "object" === typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: We,
          extras: { getDebugName: zt },
          $mobx: T
        });
    }.call(t, n(14), n(12)));
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }), (t.b = d), (t.d = function() {
      var e = d();
      if (e && e.length > 0 && e[0].length > 0) return e[0][0];
      throw new Error("No primary category found");
    }), (t.c = h), (t.e = function() {
      return m("bib-main", "labs-display-bib", "labs-content-placeholder");
    }), (t.g = function() {
      return m("bib-sidebar", "extra-services", "bookmarks");
    }), (t.f = function() {
      return m("bib-modal", "extra-services", "bookmarks");
    }), (t.h = function() {
      var e,
        t,
        n = new r.c();
      (n.title = f("citation_title")), (n.year = f("citation_date").substr(
        0,
        4
      )), (n.venue = "arXiv"), (n.doi = f(
        "citation_doi"
      )), (n.arxivId = h()), (n.url = document.location.href), (n.authors = []);
      var i = (function(e) {
        var t,
          n,
          r = Array.from(document.head.querySelectorAll('[name="' + e + '"]')),
          i = [];
        try {
          for (var a = o(r), u = a.next(); !u.done; u = a.next()) {
            var s = u.value,
              l = s;
            i.push(l.content);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            u && !u.done && (n = a.return) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return i;
      })("citation_author");
      try {
        for (var a = o(i), u = a.next(); !u.done; u = a.next()) {
          var s = u.value,
            l = new r.a();
          (l.name = s), n.authors.push(l);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          u && !u.done && (t = a.return) && t.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      return n;
    });
    var r = n(3),
      o =
        (this && this.__values) ||
        function(e) {
          var t = "function" === typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" === typeof e.length)
            return {
              next: function() {
                return e && r >= e.length && (e = void 0), {
                  value: e && e[r++],
                  done: !e
                };
              }
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      i = new RegExp(
        "(?:(?:arXiv:)(?:(\\d{4}\\.\\d{4,5})(?:v\\d{1,3})?)|(?:([a-z\\-]{1,12}\\/\\d{7})(?:v\\d{1,3})?)|(?:^(?:(\\d{4}\\.\\d{4,5})(?:v\\d{1,3})?)$))"
      ),
      a = new RegExp(
        "^http(?:s)?://(?:.*.)?arxiv.org/abs/(?:(?:(\\d{4}\\.\\d{4,5})(?:v\\d{1,3})?)|(?:([a-z\\-]{1,12}\\/\\d{7})(?:v\\d{1,3})?))(?:#.*)?(?:\\?.*)?$"
      ),
      u = new RegExp(/\(([a-z\-]+(:?\.[a-zA-Z\-]+)?)\)/g),
      s = new RegExp(/([a-z\-]+)(:?\.[a-zA-Z\-]+)?/g);
    function l(e, t, n) {
      for (var r = [], o = t.exec(e); null !== o; )
        r.push(o[n]), (o = t.exec(e));
      return r || [""];
    }
    function c(e) {
      var t = document.body.querySelector(e);
      return t && t.textContent ? t.textContent : "";
    }
    function f(e) {
      var t = document.head.querySelector('[name="' + e + '"]');
      return t ? t.content : "";
    }
    function p() {
      return (
        l(c(".primary-subject"), u, 1) || l(c(".metatable .subjects"), u, 1)
      );
    }
    function d() {
      return p().map(function(e) {
        return [
          (function(e) {
            var t = l(e, s, 1);
            return t ? t[0] : "";
          })(e),
          e
        ];
      });
    }
    function h() {
      return (
        f("citation_arxiv_id") ||
        (function() {
          var e = document.location.href,
            t = a.exec(e);
          if (!t)
            return console.log(
              "No valid match could be found for article ID"
            ), "";
          var n = t[0];
          return !n || n.length <= 5
            ? (
                console.log(
                  "No valid article ID extracted from the browser location."
                ),
                ""
              )
            : n;
        })()
      );
    }
    function m(e, t, n) {
      var r = document.getElementById(e);
      if (r) return r;
      var o = document.createElement("div");
      (o.id = e), (o.className = e);
      var i = document.getElementsByClassName(t)[0],
        a = document.getElementsByClassName(n)[0];
      return i.insertBefore(o, a), o;
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r = n(38),
      o = (n.n(r), n(2)),
      i = n(0);
    var a = new ((function() {
      function e(e, t, n) {
        void 0 === t && (t = 60), void 0 === n &&
          (n = 300), (this.slotSize = 60), (this.capacity = 60), (this.refillRate = 1), (this.maxWaitingTime = 300), (this.last = 0), (this.waitTime = 0), (this.left = 0), (this.queue = []), (this.timer = null), (this.storename =
          ""), (this.capacity = e), (this.slotSize = t), (this.maxWaitingTime = n), (this.refillRate =
          this.slotSize /
          this
            .capacity), (this.left = this.capacity), (this.queue = []), (this.storename =
          o.o), ("undefined" !== typeof localStorage &&
          null !== localStorage) ||
        ("undefined" !== typeof window &&
          null !== window &&
          null !== window.localStorage)
          ? (this.storage = localStorage || window.localStorage)
          : (this.storage = null);
      }
      return (e.prototype.storage_load = function() {
        try {
          var e = this.storage.getItem(this.storename) || "";
          if (!e) return;
          var t = JSON.parse(e);
          if (!t) return;
          (this.last = t.last), (this.waitTime = t.waitTime), (this.left =
            t.left);
        } catch (e) {
          console.log(e);
        }
      }), (e.prototype.storage_save = function() {
        if (this.storage) {
          var e = { last: this.last, waitTime: this.waitTime, left: this.left };
          this.storage.setItem(this.storename, JSON.stringify(e));
        }
      }), (e.prototype.throttle = function(e) {
        var t = this;
        if (!this.storage) return e();
        var n = new r();
        return new Promise(function(e, r) {
          n
            .lock(t.storename)
            .then(function() {
              return t.storage_load();
            })
            .then(function() {
              return t._throttle();
            })
            .then(function() {
              return t.storage_save();
            })
            .then(function() {
              return n.release(t.storename);
            })
            .then(function() {
              return e();
            })
            .catch(function(e) {
              return r(e);
            });
        }).then(function() {
          return e();
        });
      }), (e.prototype._throttle = function(e) {
        var t = this;
        void 0 === e && (e = !1);
        var n = 0,
          r = Date.now();
        if (
          (
            (this.left = Math.min(
              (r - this.last) / (1e3 * this.refillRate) + this.left,
              this.capacity
            )),
            (this.last = r),
            this.left >= 1 && (!this.queue.length || e)
          )
        )
          return (this.left -= 1), void (e && (this.waitTime -= 1));
        if (
          (n = Math.max(
            (this.waitTime * (1e3 * this.refillRate) - (r - this.last)) / 1e3,
            0
          )) >= this.maxWaitingTime
        )
          throw (
            console.log(
              "Timeout exceeded, too many waiting requests! Would take " +
                n +
                " seconds to complete, the max waiting time is " +
                this.maxWaitingTime +
                "."
            ),
            new i.d("Too many requests, please try again in a few seconds.")
          );
        (this.waitTime += 1), e
          ? this.queue.unshift(1)
          : this.queue.push(1), this.queue.length &&
          null === this.timer &&
          (this.timer = setTimeout(function() {
            (t.timer = null), t.queue.length && t._throttle(!0);
          }, Math.max(Math.ceil((1 - this.left) * this.refillRate * 1e3), 0)));
      }), e;
    })())(o.p, 1, o.n);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return k;
    });
    var r = n(9),
      o = (n.n(r), n(20)),
      i = n(1),
      a = n.n(i),
      u = n(4),
      s = 0,
      l = {};
    function c(e) {
      return l[e] ||
        (l[e] = (function(e) {
          if ("function" == typeof Symbol) return Symbol(e);
          var t = "__$mobx-react " + e + " (" + s + ")";
          return s++, t;
        })(e)), l[e];
    }
    function f(e, t) {
      if (p(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (!hasOwnProperty.call(t, n[o]) || !p(e[n[o]], t[n[o]])) return !1;
      return !0;
    }
    function p(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    function d(e, t, n) {
      Object.hasOwnProperty.call(e, t)
        ? (e[t] = n)
        : Object.defineProperty(e, t, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: n
          });
    }
    var h = c("patchMixins"),
      m = c("patchedDefinition");
    function v(e, t) {
      for (var n = this, r = [], o = arguments.length - 2; o-- > 0; )
        r[o] = arguments[o + 2];
      t.locks++;
      try {
        var i;
        return null != e && (i = e.apply(this, r)), i;
      } finally {
        t.locks--, 0 === t.locks &&
          t.methods.forEach(function(e) {
            e.apply(n, r);
          });
      }
    }
    function y(e, t) {
      return function() {
        for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
        v.call.apply(v, [this, e, t].concat(n));
      };
    }
    function g(e, t, n) {
      var r = (function(e, t) {
        var n = (e[h] = e[h] || {}),
          r = (n[t] = n[t] || {});
        return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
      })(e, t);
      r.methods.indexOf(n) < 0 && r.methods.push(n);
      var o = Object.getOwnPropertyDescriptor(e, t);
      if (!o || !o[m]) {
        var i = (function e(t, n, r, o, i) {
          var a,
            u = y(i, o);
          return ((a = {})[m] = !0), (a.get = function() {
            return u;
          }), (a.set = function(i) {
            if (this === t) u = y(i, o);
            else {
              var a = e(this, n, r, o, i);
              Object.defineProperty(this, n, a);
            }
          }), (a.configurable = !0), (a.enumerable = r), a;
        })(e, t, o ? o.enumerable : void 0, r, e[t]);
        Object.defineProperty(e, t, i);
      }
    }
    var b = u.a || "$mobx",
      w = c("isUnmounted"),
      A = c("skipRender"),
      E = c("isForcingUpdate");
    function S(e, t) {
      return Object(o.b)() &&
        console.warn(
          "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
        ), this.state !== t || !f(this.props, e);
    }
    function x(e, t) {
      var n = c("reactProp_" + t + "_valueHolder"),
        r = c("reactProp_" + t + "_atomHolder");
      function o() {
        return this[r] || d(this, r, Object(u.g)("reactive " + t)), this[r];
      }
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return o.call(this).reportObserved(), this[n];
        },
        set: function(e) {
          this[E] || f(this[n], e)
            ? d(this, n, e)
            : (
                d(this, n, e),
                d(this, A, !0),
                o.call(this).reportChanged(),
                d(this, A, !1)
              );
        }
      });
    }
    var N = "function" == typeof Symbol && Symbol.for,
      T = N
        ? Symbol.for("react.forward_ref")
        : "function" == typeof i.forwardRef &&
          Object(i.forwardRef)(function() {}).$$typeof,
      C = N
        ? Symbol.for("react.memo")
        : "function" == typeof i.memo && Object(i.memo)(function() {}).$$typeof;
    function k(e) {
      if (
        (
          !0 === e.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"
            ),
          C && e.$$typeof === C
        )
      )
        throw new Error(
          "Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you."
        );
      if (T && e.$$typeof === T) {
        var t = e.render;
        if ("function" != typeof t)
          throw new Error("render property of ForwardRef was not a function");
        return Object(i.forwardRef)(function() {
          var e = arguments;
          return a.a.createElement(o.a, null, function() {
            return t.apply(void 0, e);
          });
        });
      }
      return "function" != typeof e ||
      (e.prototype && e.prototype.render) ||
      e.isReactClass ||
      Object.prototype.isPrototypeOf.call(i.Component, e)
        ? (function(e) {
            var t = e.prototype;
            if (t.componentWillReact)
              throw new Error(
                "The componentWillReact life-cycle event is no longer supported"
              );
            if (e.__proto__ !== i.PureComponent)
              if (t.shouldComponentUpdate) {
                if (t.shouldComponentUpdate !== S)
                  throw new Error(
                    "It is not allowed to use shouldComponentUpdate in observer based components."
                  );
              } else t.shouldComponentUpdate = S;
            x(t, "props"), x(t, "state");
            var n = t.render;
            return (t.render = function() {
              return function(e) {
                var t = this;
                if (!0 === Object(o.b)()) return e.call(this);
                d(this, A, !1), d(this, E, !1);
                var n =
                    this.displayName ||
                    this.name ||
                    (this.constructor &&
                      (this.constructor.displayName ||
                        this.constructor.name)) ||
                    "<component>",
                  r = e.bind(this),
                  a = !1,
                  s = new u.b(n + ".render()", function() {
                    if (!a && ((a = !0), !0 !== t[w])) {
                      var e = !0;
                      try {
                        d(t, E, !0), t[A] ||
                          i.Component.prototype.forceUpdate.call(t), (e = !1);
                      } finally {
                        d(t, E, !1), e && s.dispose();
                      }
                    }
                  });
                function l() {
                  a = !1;
                  var e = void 0,
                    t = void 0;
                  if (
                    (
                      s.track(function() {
                        try {
                          t = Object(u.c)(!1, r);
                        } catch (t) {
                          e = t;
                        }
                      }),
                      e
                    )
                  )
                    throw e;
                  return t;
                }
                return (s.reactComponent = this), (l[
                  b
                ] = s), (this.render = l), l.call(this);
              }.call(this, n);
            }), g(t, "componentWillUnmount", function() {
              !0 !== Object(o.b)() &&
                (this.render[b] && this.render[b].dispose(), (this[w] = !0));
            }), e;
          })(e)
        : Object(o.c)(e);
    }
    a.a.createContext({});
    c("disposeOnUnmountProto"), c("disposeOnUnmountInst");
    function O(e) {
      function t(t, n, r, o, i, a) {
        for (var s = [], l = arguments.length - 6; l-- > 0; )
          s[l] = arguments[l + 6];
        return Object(u.p)(function() {
          return (o =
            o ||
            "<<anonymous>>"), (a = a || r), null == n[r] ? (t ? new Error("The " + i + " `" + a + "` is marked as required in `" + o + "`, but its value is `" + (null === n[r] ? "null" : "undefined") + "`.") : null) : e.apply(void 0, [n, r, o, i, a].concat(s));
        });
      }
      var n = t.bind(null, !1);
      return (n.isRequired = t.bind(null, !0)), n;
    }
    function _(e) {
      var t = typeof e;
      return Array.isArray(e)
        ? "array"
        : e instanceof RegExp
          ? "object"
          : (function(e, t) {
              return (
                "symbol" === e ||
                "Symbol" === t["@@toStringTag"] ||
                ("function" == typeof Symbol && t instanceof Symbol)
              );
            })(t, e)
            ? "symbol"
            : t;
    }
    function R(e, t) {
      return O(function(n, r, o, i, a) {
        return Object(u.p)(function() {
          if (e && _(n[r]) === t.toLowerCase()) return null;
          var i;
          switch (t) {
            case "Array":
              i = u.i;
              break;
            case "Object":
              i = u.k;
              break;
            case "Map":
              i = u.j;
              break;
            default:
              throw new Error("Unexpected mobxType: " + t);
          }
          var s = n[r];
          if (!i(s)) {
            var l = (function(e) {
                var t = _(e);
                if ("object" === t) {
                  if (e instanceof Date) return "date";
                  if (e instanceof RegExp) return "regexp";
                }
                return t;
              })(s),
              c = e ? " or javascript `" + t.toLowerCase() + "`" : "";
            return new Error(
              "Invalid prop `" +
                a +
                "` of type `" +
                l +
                "` supplied to `" +
                o +
                "`, expected `mobx.Observable" +
                t +
                "`" +
                c +
                "."
            );
          }
          return null;
        });
      });
    }
    function P(e, t) {
      return O(function(n, r, o, i, a) {
        for (var s = [], l = arguments.length - 5; l-- > 0; )
          s[l] = arguments[l + 5];
        return Object(u.p)(function() {
          if ("function" != typeof t)
            return new Error(
              "Property `" +
                a +
                "` of component `" +
                o +
                "` has invalid PropType notation."
            );
          var u = R(e, "Array")(n, r, o);
          if (u instanceof Error) return u;
          for (var l = n[r], c = 0; c < l.length; c++)
            if (
              (u = t.apply(
                void 0,
                [l, c, o, i, a + "[" + c + "]"].concat(s)
              )) instanceof Error
            )
              return u;
          return null;
        });
      });
    }
    R(!1, "Array"), P.bind(null, !1), R(!1, "Map"), R(!1, "Object"), R(
      !0,
      "Array"
    ), P.bind(null, !0), R(!0, "Object");
    if (!i.Component)
      throw new Error("mobx-react requires React to be available");
    if (!u.l) throw new Error("mobx-react requires mobx to be available");
    "function" == typeof r.unstable_batchedUpdates &&
      Object(u.f)({ reactionScheduler: r.unstable_batchedUpdates });
  },
  function(e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          r[e] = e;
        }), "abcdefghijklmnopqrst" ===
          Object.keys(Object.assign({}, r)).join("");
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (
            var n,
              a,
              u = (function(e) {
                if (null === e || void 0 === e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(e);
              })(e),
              s = 1;
            s < arguments.length;
            s++
          ) {
            for (var l in (n = Object(arguments[s])))
              o.call(n, l) && (u[l] = n[l]);
            if (r) {
              a = r(n);
              for (var c = 0; c < a.length; c++)
                i.call(n, a[c]) && (u[a[c]] = n[a[c]]);
            }
          }
          return u;
        };
  },
  function(e, t, n) {
    "use strict";
    !(function e() {
      if (
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(), (e.exports = n(31));
  },
  function(e, t) {},
  function(e, t, n) {
    "use strict";
    var r = n(26);
    function o() {}
    var i = null,
      a = {};
    function u(e) {
      if ("object" !== typeof this)
        throw new TypeError("Promises must be constructed via new");
      if ("function" !== typeof e)
        throw new TypeError("Promise constructor's argument is not a function");
      (this._75 = 0), (this._83 = 0), (this._18 = null), (this._38 = null), e !==
        o && d(e, this);
    }
    function s(e, t) {
      for (; 3 === e._83; ) e = e._18;
      if ((u._47 && u._47(e), 0 === e._83))
        return 0 === e._75
          ? ((e._75 = 1), void (e._38 = t))
          : 1 === e._75
            ? ((e._75 = 2), void (e._38 = [e._38, t]))
            : void e._38.push(t);
      !(function(e, t) {
        r(function() {
          var n = 1 === e._83 ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r = (function(e, t) {
              try {
                return e(t);
              } catch (e) {
                return (i = e), a;
              }
            })(n, e._18);
            r === a ? c(t.promise, i) : l(t.promise, r);
          } else 1 === e._83 ? l(t.promise, e._18) : c(t.promise, e._18);
        });
      })(e, t);
    }
    function l(e, t) {
      if (t === e)
        return c(e, new TypeError("A promise cannot be resolved with itself."));
      if (t && ("object" === typeof t || "function" === typeof t)) {
        var n = (function(e) {
          try {
            return e.then;
          } catch (e) {
            return (i = e), a;
          }
        })(t);
        if (n === a) return c(e, i);
        if (n === e.then && t instanceof u)
          return (e._83 = 3), (e._18 = t), void f(e);
        if ("function" === typeof n) return void d(n.bind(t), e);
      }
      (e._83 = 1), (e._18 = t), f(e);
    }
    function c(e, t) {
      (e._83 = 2), (e._18 = t), u._71 && u._71(e, t), f(e);
    }
    function f(e) {
      if ((1 === e._75 && (s(e, e._38), (e._38 = null)), 2 === e._75)) {
        for (var t = 0; t < e._38.length; t++) s(e, e._38[t]);
        e._38 = null;
      }
    }
    function p(e, t, n) {
      (this.onFulfilled =
        "function" === typeof e ? e : null), (this.onRejected =
        "function" === typeof t ? t : null), (this.promise = n);
    }
    function d(e, t) {
      var n = !1,
        r = (function(e, t, n) {
          try {
            e(t, n);
          } catch (e) {
            return (i = e), a;
          }
        })(
          e,
          function(e) {
            n || ((n = !0), l(t, e));
          },
          function(e) {
            n || ((n = !0), c(t, e));
          }
        );
      n || r !== a || ((n = !0), c(t, i));
    }
    (e.exports = u), (u._47 = null), (u._71 = null), (u._44 = o), (u.prototype.then = function(
      e,
      t
    ) {
      if (this.constructor !== u)
        return (function(e, t, n) {
          return new e.constructor(function(r, i) {
            var a = new u(o);
            a.then(r, i), s(e, new p(t, n, a));
          });
        })(this, e, t);
      var n = new u(o);
      return s(this, new p(e, t, n)), n;
    });
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" === typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }), n.d(t, "b", function() {
      return s;
    });
    var r,
      o = n(4),
      i = n(15),
      a = n(35),
      u =
        (this && this.__decorate) ||
        function(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        };
    !(function(e) {
      (e.LOADED = "loaded"), (e.LOADING = "loading"), (e.FAILED =
        "failed"), (e.INIT = "init"), (e.DISABLED = "disabled");
    })(r || (r = {}));
    var s = new ((function() {
      function e() {
        (this.bibmodel = new a.a()), (this.messages = []), (this.errors = []), (this.state =
          r.INIT);
      }
      return Object.defineProperty(e.prototype, "isfailed", {
        get: function() {
          return this.state === r.FAILED;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isloaded", {
        get: function() {
          return this.state === r.LOADED;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isloading", {
        get: function() {
          return this.state === r.LOADING;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isdisabled", {
        get: function() {
          return this.state === r.DISABLED;
        },
        enumerable: !0,
        configurable: !0
      }), (e.prototype.init_from_cookies = function() {
        this.state = i.a.active ? r.INIT : r.DISABLED;
      }), (e.prototype.toggle = function() {
        this.isdisabled
          ? (
              (this.state = r.INIT),
              this.bibmodel.reloadSource(),
              (i.a.active = !0)
            )
          : ((this.state = r.DISABLED), (i.a.active = !1));
      }), (e.prototype.message = function(e, t) {
        void 0 === t && (t = null), this.messages.push(e);
      }), (e.prototype.error = function(e, t) {
        void 0 === t && (t = null), this.errors.push(e), (this.state =
          r.FAILED);
      }), u([o.l], e.prototype, "bibmodel", void 0), u(
        [o.l],
        e.prototype,
        "messages",
        void 0
      ), u([o.l], e.prototype, "errors", void 0), u(
        [o.l],
        e.prototype,
        "state",
        void 0
      ), u([o.e], e.prototype, "isfailed", null), u(
        [o.e],
        e.prototype,
        "isloaded",
        null
      ), u([o.e], e.prototype, "isloading", null), u(
        [o.e],
        e.prototype,
        "isdisabled",
        null
      ), u([o.d], e.prototype, "init_from_cookies", null), u(
        [o.d],
        e.prototype,
        "toggle",
        null
      ), u([o.d], e.prototype, "message", null), u(
        [o.d],
        e.prototype,
        "error",
        null
      ), e;
    })())();
  },
  function(e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function() {
      try {
        n = "function" === typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" === typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var s,
      l = [],
      c = !1,
      f = -1;
    function p() {
      c &&
        s &&
        ((c = !1), s.length ? (l = s.concat(l)) : (f = -1), l.length && d());
    }
    function d() {
      if (!c) {
        var e = u(p);
        c = !0;
        for (var t = l.length; t; ) {
          for (s = l, l = []; ++f < t; ) s && s[f].run();
          (f = -1), (t = l.length);
        }
        (s = null), (c = !1), (function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === a || !r) && clearTimeout)
            return (r = clearTimeout), clearTimeout(e);
          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new h(e, t)), 1 !== l.length || c || u(d);
    }), (h.prototype.run = function() {
      this.fun.apply(null, this.array);
    }), (o.title =
      "browser"), (o.browser = !0), (o.env = {}), (o.argv = []), (o.version =
      ""), (o.versions = {}), (o.on = m), (o.addListener = m), (o.once = m), (o.off = m), (o.removeListener = m), (o.removeAllListeners = m), (o.emit = m), (o.prependListener = m), (o.prependOnceListener = m), (o.listeners = function(
      e
    ) {
      return [];
    }), (o.binding = function(e) {
      throw new Error("process.binding is not supported");
    }), (o.cwd = function() {
      return "/";
    }), (o.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    }), (o.umask = function() {
      return 0;
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r,
      o = n(34),
      i = (n.n(o), n(2));
    !(function(e) {
      e.ACTIVE = "active";
    })(r || (r = {}));
    var a = new ((function() {
      function e() {
        this.localCookies = o;
      }
      return (e.prototype.dsname = function(e) {
        return "ds_" + e.toLowerCase();
      }), (e.prototype.get_json = function() {
        var e = this.localCookies.get(i.j);
        if (!e) return {};
        try {
          return JSON.parse(e);
        } catch (e) {
          return {};
        }
      }), (e.prototype.get_value = function(e) {
        return this.get_json()[e];
      }), (e.prototype.set_value = function(e, t) {
        var n = this.get_json();
        n[e] = t;
        var r = { expires: i.i };
        this.localCookies.set(i.j, JSON.stringify(n), r);
      }), (e.prototype.get_boolean = function(e, t) {
        var n = this.get_value(e);
        return (void 0 !== n && null !== n) || (n = t), "true" === n &&
          (n = !0), "false" === n && (n = !1), this.set_value(e, n), n;
      }), (e.prototype.set_boolean = function(e, t) {
        this.set_value(e, t);
      }), Object.defineProperty(e.prototype, "active", {
        get: function() {
          return this.get_boolean(r.ACTIVE, i.l);
        },
        set: function(e) {
          this.set_boolean(r.ACTIVE, e);
        },
        enumerable: !0,
        configurable: !0
      }), (e.prototype.get_datasource = function(e) {
        return (i.s && this.get_value(this.dsname(e))) || "";
      }), (e.prototype.set_datasource = function(e, t) {
        i.s && this.set_value(this.dsname(e), t);
      }), e;
    })())();
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQBECYpjHK6EQAABQRJREFUeNrtm1tMHFUYx39ndljYXYQKRVJBKKktSncplto0solovKQx1ESrxhitMfHZ+FzffPHBaNLEF1NNmhptrMS0NKmXmNQIaVoKFnapNr0IWFsoi8Au7LK7szM+zKhc2mSGvbDs8E822UnOXM5vzvku58wnWKCe7dA2BN1e6oF9QCtQB2wEygE34AAkQLBYS4+zLe0OxylABaLADBACRoELwEl/kNEeH7QF7vLQ3V58wFFgB4WpAeB1f5DAMgDdXl4CvsYeetkf5DiA6PGBpuEDBrGXfEIQlIz5cBT76Yu2AAjD4A1jT22WDGtvV3VIwE4bA2iVgHobA6iTjCDHrtooGxGeaaViRqyVTQn9J4QedwoHCCkrdyqXAZfZ1uo8tHb1497SlL34VlPRlCSp6BxKeIrExE3if/1B9OoQ4YtnCfedR8g6lAzILQOypZdT5EQ4i7P68il24fCU4azadEfYE6e/YvTQe8SGryPktG4nS0Zis6ZUtfdVWk9fY+v7n6Im0uMtrUIWlzFV73+b1lMBtFR6AMxLgsjAWSKD51Ai03kBwb3VS9MnJ1DjKwMgur3MAGWmjVQSNBU0BVwNNTR+eIyyR/yrDiL4VjszvT9bPS1sGcAyzxAD/2UF4TBnlkM/HOfKwQMIx2LrJRW7cFZtwtPYQuXTL1LR3mHpOWaDvfz6wm4ka/Y5LKdtAwTErl/CvdVnbgQpSVKzsWXWOzUXIfn3beYuDzDeeYSS2lpaOi8il1eaum6p91GK7i0lFZ3Nog3IkUQRxMdv0L/PWryx4bFnLN8rr11gYuI2452HTbf3NO4oLADCAaHvjpluX1zTYNkl5n0QFL12yXxY57ln+VrxWgegxucthekFB0ByeSy45Khln5b3AEo21Zlum5yasNyjvAdQ2rzHdNv5P69bdux5DSAVg/ueP2C6fSRwrrDcYEX7k3i2NZtuP9P7S2EASEVhw56n8B7+yfQ5U2e6LHsAsLgalAk53KWUPFC/OBkSIBWX4KyuobRpF1XPvWZ52W340MEVrQ7JuR/W+6hoz+xezOSPncwOBZCcFJYNMOX6Jsf5/d39K+r8mgcQvzXKhWcb0kro1yyAm0c+ore9HjUeS+s68lob7uPffs6Nzz5ACYcRzvSvmXMASmSa+Ngo4i7jVlNV1EScVGSGxOQY86NXiV4ZJNzfzfyNEA637jUytZSTcwBTZ7r47Z037r6zY3ARxo7FwnYOT+afJ/dTwOFAKibdHZ3MZZvYXOsA1gGsA1gHsA4gfZkPxoUQeQdAS7fv7gfN5+5lux5f6VZ2NqRZHgFqUv9WKDULroaH2Hmiz1Jc6qy6n13fByjf/QRqXF/9UeOk+6XHyt+fle1xNQEPf/wl7sZmXJsbl21xrzTBSYTGSIZuEXhzL1JJTvsfli1NARXc25pxb9mesScoqqymqLIapboWTV0DU6AQvYBq4/6rMqBYsfhKZBplejLz6wQzk6vxvZoiur2MoBdGmUM2T3bmqgCHS6TtlS1qREavrjI/Z7JqpbVcj4CwhF5aZleFJGDExgBGJKDfxgD6JeCkjQF0Sf4gI+gVlXbToD/IsJ0LJ5uFILCwdHY/6OWkNtAr/qBeJvxfLuAP8g3gK/DpMAg0/9t5WLIxIgTBtgAtRjVpB/+Xz1cZKfPS8nmxOJbLbSa35L9m5DUp9PL5sBHjjAB9wCl/kOGeJd90/wNlxoHw8GuO+wAAAABJRU5ErkJggg==";
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return v;
    }), n.d(t, "b", function() {
      return a;
    }), n.d(t, "c", function() {
      return h;
    });
    var r = n(4),
      o = n(1);
    n.n(o);
    if (!o.useState)
      throw new Error("mobx-react-lite requires React with Hooks support");
    if (!r.n)
      throw new Error(
        "mobx-react-lite requires mobx at least version 4 to be available"
      );
    var i = !1;
    function a() {
      return i;
    }
    var u = function() {
      return (u =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function s(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
          a.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function l(e) {
      return e.current ? Object(r.h)(e.current) : "<unknown>";
    }
    var c = [];
    function f() {
      var e = s(Object(o.useState)(0), 2)[1];
      return Object(o.useCallback)(function() {
        e(function(e) {
          return e + 1;
        });
      }, []);
    }
    var p = {};
    function d(e, t, n) {
      if ((void 0 === t && (t = "observed"), void 0 === n && (n = p), a()))
        return e();
      var i = (n.useForceUpdate || f)(),
        u = Object(o.useRef)(null);
      u.current ||
        (u.current = new r.b("observer(" + t + ")", function() {
          i();
        }));
      var s,
        d,
        h = function() {
          u.current &&
            !u.current.isDisposed &&
            (u.current.dispose(), (u.current = null));
        };
      if (
        (
          Object(o.useDebugValue)(u, l),
          (function(e) {
            Object(o.useEffect)(function() {
              return e;
            }, c);
          })(function() {
            h();
          }),
          u.current.track(function() {
            try {
              s = e();
            } catch (e) {
              d = e;
            }
          }),
          d
        )
      )
        throw (h(), d);
      return s;
    }
    function h(e, t) {
      if (a()) return e;
      var n,
        r = u({ forwardRef: !1 }, t),
        i = e.displayName || e.name,
        s = function(t, n) {
          return d(function() {
            return e(t, n);
          }, i);
        };
      return (s.displayName = i), (n = r.forwardRef
        ? Object(o.memo)(Object(o.forwardRef)(s))
        : Object(o.memo)(s)), (function(e, t) {
        Object.keys(e).forEach(function(n) {
          e.hasOwnProperty(n) &&
            !m[n] &&
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
      })(e, n), (n.displayName = i), n;
    }
    var m = { $$typeof: !0, render: !0, compare: !0, type: !0 };
    function v(e) {
      var t = e.children,
        n = e.render,
        r = t || n;
      return "function" !== typeof r ? null : d(r);
    }
    function y(e, t, n, r, o) {
      var i = "children" === t ? "render" : "children",
        a = "function" === typeof e[t],
        u = "function" === typeof e[i];
      return a && u
        ? new Error(
            "MobX Observer: Do not use children and render in the same time in`" +
              n
          )
        : a || u
          ? null
          : new Error(
              "Invalid prop `" +
                o +
                "` of type `" +
                typeof e[t] +
                "` supplied to `" +
                n +
                "`, expected `function`."
            );
    }
    (v.propTypes = { children: y, render: y }), (v.displayName = "Observer");
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return C;
    }), n.d(t, "b", function() {
      return k;
    }), (t.c = function(e) {
      if (!e) return r.createElement("div", null);
      var t = (function(e) {
        if (!e.arxivId && !e.doi) return r.createElement("span", null);
        return r.createElement(
          "a",
          {
            href: "javascript:void(0)",
            title: e.arxivId,
            onClick: function() {
              return Object(E.a)(e);
            }
          },
          "Export citation"
        );
      })(e);
      return r.createElement(
        "div",
        { className: "bib-outbound", style: { margin: "0.3em" } },
        t
      );
    });
    var r = n(1),
      o = (n.n(r), n(16)),
      i = n.n(o),
      a = n(55),
      u = n.n(a),
      s = n(56),
      l = n.n(s),
      c = n(57),
      f = n.n(c),
      p = n(17),
      d = n.n(p),
      h = n(18),
      m = n.n(h),
      v = n(19),
      y = n.n(v),
      g = n(58),
      b = n.n(g),
      w = n(2),
      A = n(0),
      E = n(59),
      S =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })();
    var x = { height: "18px", width: "auto" },
      N = function(e, t, n, o, i) {
        return void 0 === i && (i = !0), n
          ? r.createElement(
              "span",
              { key: e + n },
              r.createElement(
                "a",
                {
                  className: e,
                  title: t,
                  href: n,
                  target: i ? "_blank" : "_self"
                },
                r.createElement("img", { alt: t, src: o, style: x })
              )
            )
          : null;
      },
      T = {
        ads: function(e) {
          return N("ads", "NASA ADS", e.url, i.a);
        },
        s2: function(e) {
          return N("s2", "Semantic Scholar", e.url, y.a);
        },
        prophy: function(e) {
          return N("prophy", "Prophy", e.url, m.a);
        },
        inspire: function(e) {
          return N("inspire", "Inspire HEP", e.url, d.a);
        },
        arxiv: function(e) {
          return N("arxiv", "ArXiv article", e.url_arxiv, u.a, !1);
        },
        doi: function(e) {
          return N("doi", "Journal article", e.url_doi, f.a);
        },
        cite: function(e) {
          return (function(e, t, n, o) {
            return n.arxivId || n.doi
              ? r.createElement(
                  "span",
                  { key: e + n.arxivId },
                  r.createElement(
                    "a",
                    {
                      className: e,
                      title: t,
                      onClick: function() {
                        return Object(E.a)(n);
                      }
                    },
                    r.createElement("img", { alt: t, src: o, style: x })
                  )
                )
              : r.createElement("div", null);
          })("cite", "Citation entry", e, l.a);
        },
        scholar: function(e) {
          return N(
            "scholar",
            "Google Scholar",
            (function(e) {
              var t = "";
              e.authors.length > 0 && (t = e.authors[0].tolastname());
              var n = e.venue ? e.venue : "",
                r = e.title + " " + t + " " + n + " " + e.year,
                o = Object(A.e)({ q: r });
              return w.c + "?" + o;
            })(e),
            b.a
          );
        }
      },
      C = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return S(t, e), (t.prototype.render = function() {
          var e = this.props.paper,
            t = e.outbound.map(function(t) {
              return T[t](e);
            });
          return r.createElement("div", { className: "bib-outbound" }, t);
        }), t;
      })(r.Component),
      k = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return S(t, e), (t.prototype.render = function() {
          var e = this.props.paper,
            t = T.cite(e);
          return e.doi || e.arxivId
            ? r.createElement("div", { className: "bib-outbound" }, t)
            : r.createElement("div", { className: "bib-outbound" });
        }), t;
      })(r.Component);
  },
  function(e, t) {
    function n(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function r(e, t) {
      var r = e.prototype;
      if (Object.create) {
        var o = Object.create(t.prototype);
        r.__proto__ = o;
      }
      if (!(r instanceof t)) {
        function i() {}
        (i.prototype = t.prototype), n(r, (i = new i())), (e.prototype = r = i);
      }
      r.constructor != e &&
        (
          "function" != typeof e && console.error("unknow Class:" + e),
          (r.constructor = e)
        );
    }
    var o = "http://www.w3.org/1999/xhtml",
      i = {},
      a = (i.ELEMENT_NODE = 1),
      u = (i.ATTRIBUTE_NODE = 2),
      s = (i.TEXT_NODE = 3),
      l = (i.CDATA_SECTION_NODE = 4),
      c = (i.ENTITY_REFERENCE_NODE = 5),
      f = (i.ENTITY_NODE = 6),
      p = (i.PROCESSING_INSTRUCTION_NODE = 7),
      d = (i.COMMENT_NODE = 8),
      h = (i.DOCUMENT_NODE = 9),
      m = (i.DOCUMENT_TYPE_NODE = 10),
      v = (i.DOCUMENT_FRAGMENT_NODE = 11),
      y = (i.NOTATION_NODE = 12),
      g = {},
      b = {},
      w = (
        (g.INDEX_SIZE_ERR = ((b[1] = "Index size error"), 1)),
        (g.DOMSTRING_SIZE_ERR = ((b[2] = "DOMString size error"), 2)),
        (g.HIERARCHY_REQUEST_ERR = ((b[3] = "Hierarchy request error"), 3))
      ),
      A = (
        (g.WRONG_DOCUMENT_ERR = ((b[4] = "Wrong document"), 4)),
        (g.INVALID_CHARACTER_ERR = ((b[5] = "Invalid character"), 5)),
        (g.NO_DATA_ALLOWED_ERR = ((b[6] = "No data allowed"), 6)),
        (g.NO_MODIFICATION_ALLOWED_ERR = (
          (b[7] = "No modification allowed"),
          7
        )),
        (g.NOT_FOUND_ERR = ((b[8] = "Not found"), 8))
      ),
      E = (
        (g.NOT_SUPPORTED_ERR = ((b[9] = "Not supported"), 9)),
        (g.INUSE_ATTRIBUTE_ERR = ((b[10] = "Attribute in use"), 10))
      );
    (g.INVALID_STATE_ERR = ((b[11] = "Invalid state"), 11)), (g.SYNTAX_ERR = (
      (b[12] = "Syntax error"),
      12
    )), (g.INVALID_MODIFICATION_ERR = (
      (b[13] = "Invalid modification"),
      13
    )), (g.NAMESPACE_ERR = (
      (b[14] = "Invalid namespace"),
      14
    )), (g.INVALID_ACCESS_ERR = ((b[15] = "Invalid access"), 15));
    function S(e, t) {
      if (t instanceof Error) var n = t;
      else
        (n = this), Error.call(this, b[e]), (this.message =
          b[e]), Error.captureStackTrace && Error.captureStackTrace(this, S);
      return (n.code = e), t && (this.message = this.message + ": " + t), n;
    }
    function x() {}
    function N(e, t) {
      (this._node = e), (this._refresh = t), T(this);
    }
    function T(e) {
      var t = e._node._inc || e._node.ownerDocument._inc;
      if (e._inc != t) {
        var r = e._refresh(e._node);
        ne(e, "length", r.length), n(r, e), (e._inc = t);
      }
    }
    function C() {}
    function k(e, t) {
      for (var n = e.length; n--; ) if (e[n] === t) return n;
    }
    function O(e, t, n, r) {
      if ((r ? (t[k(t, r)] = n) : (t[t.length++] = n), e)) {
        n.ownerElement = e;
        var o = e.ownerDocument;
        o &&
          (
            r && U(o, e, r),
            (function(e, t, n) {
              e && e._inc++, "http://www.w3.org/2000/xmlns/" ==
                n.namespaceURI &&
                (t._nsMap[n.prefix ? n.localName : ""] = n.value);
            })(o, e, n)
          );
      }
    }
    function _(e, t, n) {
      var r = k(t, n);
      if (!(r >= 0)) throw S(A, new Error(e.tagName + "@" + n));
      for (var o = t.length - 1; r < o; ) t[r] = t[++r];
      if (((t.length = o), e)) {
        var i = e.ownerDocument;
        i && (U(i, e, n), (n.ownerElement = null));
      }
    }
    function R(e) {
      if (((this._features = {}), e)) for (var t in e) this._features = e[t];
    }
    function P() {}
    function I(e) {
      return (
        ("<" == e ? "&lt;" : ">" == e && "&gt;") ||
        ("&" == e && "&amp;") ||
        ('"' == e && "&quot;") ||
        "&#" + e.charCodeAt() + ";"
      );
    }
    function D(e, t) {
      if (t(e)) return !0;
      if ((e = e.firstChild))
        do {
          if (D(e, t)) return !0;
        } while ((e = e.nextSibling));
    }
    function L() {}
    function U(e, t, n, r) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI &&
        delete t._nsMap[n.prefix ? n.localName : ""];
    }
    function B(e, t, n) {
      if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n;
        else {
          for (var o = t.firstChild, i = 0; o; )
            (r[i++] = o), (o = o.nextSibling);
          r.length = i;
        }
      }
    }
    function F(e, t) {
      var n = t.previousSibling,
        r = t.nextSibling;
      return n ? (n.nextSibling = r) : (e.firstChild = r), r
        ? (r.previousSibling = n)
        : (e.lastChild = n), B(e.ownerDocument, e), t;
    }
    function M(e, t, n) {
      var r = t.parentNode;
      if ((r && r.removeChild(t), t.nodeType === v)) {
        var o = t.firstChild;
        if (null == o) return t;
        var i = t.lastChild;
      } else o = i = t;
      var a = n ? n.previousSibling : e.lastChild;
      (o.previousSibling = a), (i.nextSibling = n), a
        ? (a.nextSibling = o)
        : (e.firstChild = o), null == n
        ? (e.lastChild = i)
        : (n.previousSibling = i);
      do {
        o.parentNode = e;
      } while (o !== i && (o = o.nextSibling));
      return B(e.ownerDocument || e, e), t.nodeType == v &&
        (t.firstChild = t.lastChild = null), t;
    }
    function j() {
      this._nsMap = {};
    }
    function V() {}
    function z() {}
    function Q() {}
    function H() {}
    function W() {}
    function q() {}
    function G() {}
    function Y() {}
    function J() {}
    function X() {}
    function K() {}
    function Z() {}
    function $(e, t) {
      var n = [],
        r = 9 == this.nodeType ? this.documentElement : this,
        o = r.prefix,
        i = r.namespaceURI;
      if (i && null == o && null == (o = r.lookupPrefix(i)))
        var a = [{ namespace: i, prefix: null }];
      return te(this, n, e, t, a), n.join("");
    }
    function ee(e, t, n) {
      var r = e.prefix || "",
        o = e.namespaceURI;
      if (!r && !o) return !1;
      if (
        ("xml" === r && "http://www.w3.org/XML/1998/namespace" === o) ||
        "http://www.w3.org/2000/xmlns/" == o
      )
        return !1;
      for (var i = n.length; i--; ) {
        var a = n[i];
        if (a.prefix == r) return a.namespace != o;
      }
      return !0;
    }
    function te(e, t, n, r, i) {
      if (r) {
        if (!(e = r(e))) return;
        if ("string" == typeof e) return void t.push(e);
      }
      switch (e.nodeType) {
        case a:
          i || (i = []);
          i.length;
          var f = e.attributes,
            y = f.length,
            g = e.firstChild,
            b = e.tagName;
          (n = o === e.namespaceURI || n), t.push("<", b);
          for (var w = 0; w < y; w++) {
            "xmlns" == (A = f.item(w)).prefix
              ? i.push({ prefix: A.localName, namespace: A.value })
              : "xmlns" == A.nodeName &&
                i.push({ prefix: "", namespace: A.value });
          }
          for (w = 0; w < y; w++) {
            var A;
            if (ee((A = f.item(w)), 0, i)) {
              var E = A.prefix || "",
                S = A.namespaceURI,
                x = E ? " xmlns:" + E : " xmlns";
              t.push(x, '="', S, '"'), i.push({ prefix: E, namespace: S });
            }
            te(A, t, n, r, i);
          }
          if (ee(e, 0, i)) {
            (E = e.prefix || ""), (S = e.namespaceURI), (x = E
              ? " xmlns:" + E
              : " xmlns");
            t.push(x, '="', S, '"'), i.push({ prefix: E, namespace: S });
          }
          if (g || (n && !/^(?:meta|link|img|br|hr|input)$/i.test(b))) {
            if ((t.push(">"), n && /^script$/i.test(b)))
              for (; g; )
                g.data ? t.push(g.data) : te(g, t, n, r, i), (g =
                  g.nextSibling);
            else for (; g; ) te(g, t, n, r, i), (g = g.nextSibling);
            t.push("</", b, ">");
          } else t.push("/>");
          return;
        case h:
        case v:
          for (g = e.firstChild; g; ) te(g, t, n, r, i), (g = g.nextSibling);
          return;
        case u:
          return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, I), '"');
        case s:
          return t.push(e.data.replace(/[<&]/g, I));
        case l:
          return t.push("<![CDATA[", e.data, "]]>");
        case d:
          return t.push("\x3c!--", e.data, "--\x3e");
        case m:
          var N = e.publicId,
            T = e.systemId;
          if ((t.push("<!DOCTYPE ", e.name), N))
            t.push(' PUBLIC "', N), T && "." != T && t.push('" "', T), t.push(
              '">'
            );
          else if (T && "." != T) t.push(' SYSTEM "', T, '">');
          else {
            var C = e.internalSubset;
            C && t.push(" [", C, "]"), t.push(">");
          }
          return;
        case p:
          return t.push("<?", e.target, " ", e.data, "?>");
        case c:
          return t.push("&", e.nodeName, ";");
        default:
          t.push("??", e.nodeName);
      }
    }
    function ne(e, t, n) {
      e[t] = n;
    }
    (S.prototype = Error.prototype), n(g, S), (x.prototype = {
      length: 0,
      item: function(e) {
        return this[e] || null;
      },
      toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++) te(this[r], n, e, t);
        return n.join("");
      }
    }), (N.prototype.item = function(e) {
      return T(this), this[e];
    }), r(N, x), (C.prototype = {
      length: 0,
      item: x.prototype.item,
      getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
          var n = this[t];
          if (n.nodeName == e) return n;
        }
      },
      setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new S(E);
        var n = this.getNamedItem(e.nodeName);
        return O(this._ownerElement, this, e, n), n;
      },
      setNamedItemNS: function(e) {
        var t,
          n = e.ownerElement;
        if (n && n != this._ownerElement) throw new S(E);
        return (t = this.getNamedItemNS(e.namespaceURI, e.localName)), O(
          this._ownerElement,
          this,
          e,
          t
        ), t;
      },
      removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return _(this._ownerElement, this, t), t;
      },
      removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return _(this._ownerElement, this, n), n;
      },
      getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
          var r = this[n];
          if (r.localName == t && r.namespaceURI == e) return r;
        }
        return null;
      }
    }), (R.prototype = {
      hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || (t && !(t in n)));
      },
      createDocument: function(e, t, n) {
        var r = new L();
        if (
          (
            (r.implementation = this),
            (r.childNodes = new x()),
            (r.doctype = n),
            n && r.appendChild(n),
            t
          )
        ) {
          var o = r.createElementNS(e, t);
          r.appendChild(o);
        }
        return r;
      },
      createDocumentType: function(e, t, n) {
        var r = new q();
        return (r.name = e), (r.nodeName = e), (r.publicId = t), (r.systemId = n), r;
      }
    }), (P.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function(e, t) {
        return M(this, e, t);
      },
      replaceChild: function(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
      },
      removeChild: function(e) {
        return F(this, e);
      },
      appendChild: function(e) {
        return this.insertBefore(e, null);
      },
      hasChildNodes: function() {
        return null != this.firstChild;
      },
      cloneNode: function(e) {
        return (function e(t, n, r) {
          var o = new n.constructor();
          for (var i in n) {
            var s = n[i];
            "object" != typeof s && s != o[i] && (o[i] = s);
          }
          n.childNodes && (o.childNodes = new x());
          o.ownerDocument = t;
          switch (o.nodeType) {
            case a:
              var l = n.attributes,
                c = (o.attributes = new C()),
                f = l.length;
              c._ownerElement = o;
              for (var p = 0; p < f; p++)
                o.setAttributeNode(e(t, l.item(p), !0));
              break;
            case u:
              r = !0;
          }
          if (r)
            for (var d = n.firstChild; d; )
              o.appendChild(e(t, d, r)), (d = d.nextSibling);
          return o;
        })(this.ownerDocument || this, this, e);
      },
      normalize: function() {
        for (var e = this.firstChild; e; ) {
          var t = e.nextSibling;
          t && t.nodeType == s && e.nodeType == s
            ? (this.removeChild(t), e.appendData(t.data))
            : (e.normalize(), (e = t));
        }
      },
      isSupported: function(e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
      },
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      lookupPrefix: function(e) {
        for (var t = this; t; ) {
          var n = t._nsMap;
          if (n) for (var r in n) if (n[r] == e) return r;
          t = t.nodeType == u ? t.ownerDocument : t.parentNode;
        }
        return null;
      },
      lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
          var n = t._nsMap;
          if (n && e in n) return n[e];
          t = t.nodeType == u ? t.ownerDocument : t.parentNode;
        }
        return null;
      },
      isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
      }
    }), n(i, P), n(i, P.prototype), (L.prototype = {
      nodeName: "#document",
      nodeType: h,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(e, t) {
        if (e.nodeType == v) {
          for (var n = e.firstChild; n; ) {
            var r = n.nextSibling;
            this.insertBefore(n, t), (n = r);
          }
          return e;
        }
        return null == this.documentElement &&
          e.nodeType == a &&
          (this.documentElement = e), M(
          this,
          e,
          t
        ), (e.ownerDocument = this), e;
      },
      removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null), F(
          this,
          e
        );
      },
      importNode: function(e, t) {
        return (function e(t, n, r) {
          var o;
          switch (n.nodeType) {
            case a:
              (o = n.cloneNode(!1)).ownerDocument = t;
            case v:
              break;
            case u:
              r = !0;
          }
          o || (o = n.cloneNode(!1));
          o.ownerDocument = t;
          o.parentNode = null;
          if (r)
            for (var i = n.firstChild; i; )
              o.appendChild(e(t, i, r)), (i = i.nextSibling);
          return o;
        })(this, e, t);
      },
      getElementById: function(e) {
        var t = null;
        return D(this.documentElement, function(n) {
          if (n.nodeType == a && n.getAttribute("id") == e) return (t = n), !0;
        }), t;
      },
      createElement: function(e) {
        var t = new j();
        return (t.ownerDocument = this), (t.nodeName = e), (t.tagName = e), (t.childNodes = new x()), ((t.attributes = new C())._ownerElement = t), t;
      },
      createDocumentFragment: function() {
        var e = new X();
        return (e.ownerDocument = this), (e.childNodes = new x()), e;
      },
      createTextNode: function(e) {
        var t = new Q();
        return (t.ownerDocument = this), t.appendData(e), t;
      },
      createComment: function(e) {
        var t = new H();
        return (t.ownerDocument = this), t.appendData(e), t;
      },
      createCDATASection: function(e) {
        var t = new W();
        return (t.ownerDocument = this), t.appendData(e), t;
      },
      createProcessingInstruction: function(e, t) {
        var n = new K();
        return (n.ownerDocument = this), (n.tagName = n.target = e), (n.nodeValue = n.data = t), n;
      },
      createAttribute: function(e) {
        var t = new V();
        return (t.ownerDocument = this), (t.name = e), (t.nodeName = e), (t.localName = e), (t.specified = !0), t;
      },
      createEntityReference: function(e) {
        var t = new J();
        return (t.ownerDocument = this), (t.nodeName = e), t;
      },
      createElementNS: function(e, t) {
        var n = new j(),
          r = t.split(":"),
          o = (n.attributes = new C());
        return (n.childNodes = new x()), (n.ownerDocument = this), (n.nodeName = t), (n.tagName = t), (n.namespaceURI = e), 2 ==
        r.length
          ? ((n.prefix = r[0]), (n.localName = r[1]))
          : (n.localName = t), (o._ownerElement = n), n;
      },
      createAttributeNS: function(e, t) {
        var n = new V(),
          r = t.split(":");
        return (n.ownerDocument = this), (n.nodeName = t), (n.name = t), (n.namespaceURI = e), (n.specified = !0), 2 ==
        r.length
          ? ((n.prefix = r[0]), (n.localName = r[1]))
          : (n.localName = t), n;
      }
    }), r(L, P), (j.prototype = {
      nodeType: a,
      hasAttribute: function(e) {
        return null != this.getAttributeNode(e);
      },
      getAttribute: function(e) {
        var t = this.getAttributeNode(e);
        return (t && t.value) || "";
      },
      getAttributeNode: function(e) {
        return this.attributes.getNamedItem(e);
      },
      setAttribute: function(e, t) {
        var n = this.ownerDocument.createAttribute(e);
        (n.value = n.nodeValue = "" + t), this.setAttributeNode(n);
      },
      removeAttribute: function(e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t);
      },
      appendChild: function(e) {
        return e.nodeType === v
          ? this.insertBefore(e, null)
          : (function(e, t) {
              var n = t.parentNode;
              if (n) {
                var r = e.lastChild;
                n.removeChild(t), (r = e.lastChild);
              }
              return (r =
                e.lastChild), (t.parentNode = e), (t.previousSibling = r), (t.nextSibling = null), r
                ? (r.nextSibling = t)
                : (e.firstChild = t), (e.lastChild = t), B(
                e.ownerDocument,
                e,
                t
              ), t;
            })(this, e);
      },
      setAttributeNode: function(e) {
        return this.attributes.setNamedItem(e);
      },
      setAttributeNodeNS: function(e) {
        return this.attributes.setNamedItemNS(e);
      },
      removeAttributeNode: function(e) {
        return this.attributes.removeNamedItem(e.nodeName);
      },
      removeAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n);
      },
      hasAttributeNS: function(e, t) {
        return null != this.getAttributeNodeNS(e, t);
      },
      getAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return (n && n.value) || "";
      },
      setAttributeNS: function(e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);
        (r.value = r.nodeValue = "" + n), this.setAttributeNode(r);
      },
      getAttributeNodeNS: function(e, t) {
        return this.attributes.getNamedItemNS(e, t);
      },
      getElementsByTagName: function(e) {
        return new N(this, function(t) {
          var n = [];
          return D(t, function(r) {
            r === t ||
              r.nodeType != a ||
              ("*" !== e && r.tagName != e) ||
              n.push(r);
          }), n;
        });
      },
      getElementsByTagNameNS: function(e, t) {
        return new N(this, function(n) {
          var r = [];
          return D(n, function(o) {
            o === n ||
              o.nodeType !== a ||
              ("*" !== e && o.namespaceURI !== e) ||
              ("*" !== t && o.localName != t) ||
              r.push(o);
          }), r;
        });
      }
    }), (L.prototype.getElementsByTagName =
      j.prototype.getElementsByTagName), (L.prototype.getElementsByTagNameNS =
      j.prototype.getElementsByTagNameNS), r(
      j,
      P
    ), (V.prototype.nodeType = u), r(V, P), (z.prototype = {
      data: "",
      substringData: function(e, t) {
        return this.data.substring(e, e + t);
      },
      appendData: function(e) {
        (e = this.data + e), (this.nodeValue = this.data = e), (this.length =
          e.length);
      },
      insertData: function(e, t) {
        this.replaceData(e, 0, t);
      },
      appendChild: function(e) {
        throw new Error(b[w]);
      },
      deleteData: function(e, t) {
        this.replaceData(e, t, "");
      },
      replaceData: function(e, t, n) {
        (n =
          this.data.substring(0, e) +
          n +
          this.data.substring(
            e + t
          )), (this.nodeValue = this.data = n), (this.length = n.length);
      }
    }), r(z, P), (Q.prototype = {
      nodeName: "#text",
      nodeType: s,
      splitText: function(e) {
        var t = this.data,
          n = t.substring(e);
        (t = t.substring(
          0,
          e
        )), (this.data = this.nodeValue = t), (this.length = t.length);
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode &&
          this.parentNode.insertBefore(r, this.nextSibling), r;
      }
    }), r(Q, z), (H.prototype = { nodeName: "#comment", nodeType: d }), r(
      H,
      z
    ), (W.prototype = { nodeName: "#cdata-section", nodeType: l }), r(
      W,
      z
    ), (q.prototype.nodeType = m), r(q, P), (G.prototype.nodeType = y), r(
      G,
      P
    ), (Y.prototype.nodeType = f), r(Y, P), (J.prototype.nodeType = c), r(
      J,
      P
    ), (X.prototype.nodeName =
      "#document-fragment"), (X.prototype.nodeType = v), r(
      X,
      P
    ), (K.prototype.nodeType = p), r(
      K,
      P
    ), (Z.prototype.serializeToString = function(e, t, n) {
      return $.call(e, t, n);
    }), (P.prototype.toString = $);
    try {
      if (Object.defineProperty) {
        Object.defineProperty(N.prototype, "length", {
          get: function() {
            return T(this), this.$$length;
          }
        }), Object.defineProperty(P.prototype, "textContent", {
          get: function() {
            return (function e(t) {
              switch (t.nodeType) {
                case a:
                case v:
                  var n = [];
                  for (t = t.firstChild; t; )
                    7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), (t =
                      t.nextSibling);
                  return n.join("");
                default:
                  return t.nodeValue;
              }
            })(this);
          },
          set: function(e) {
            switch (this.nodeType) {
              case a:
              case v:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (e || String(e)) &&
                  this.appendChild(this.ownerDocument.createTextNode(e));
                break;
              default:
                (this.data = e), (this.value = e), (this.nodeValue = e);
            }
          }
        }), (ne = function(e, t, n) {
          e["$$" + t] = n;
        });
      }
    } catch (e) {}
    (t.DOMImplementation = R), (t.XMLSerializer = Z);
  },
  function(e, t, n) {
    n(24), (e.exports = n(29));
  },
  function(e, t, n) {
    "use strict";
    "undefined" === typeof Promise &&
      (n(25).enable(), (window.Promise = n(27))), n(28), (Object.assign = n(8));
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      o = [ReferenceError, TypeError, RangeError],
      i = !1;
    function a() {
      (i = !1), (r._47 = null), (r._71 = null);
    }
    function u(e, t) {
      return t.some(function(t) {
        return e instanceof t;
      });
    }
    (t.disable = a), (t.enable = function(e) {
      (e = e || {}), i && a();
      i = !0;
      var t = 0,
        n = 0,
        s = {};
      function l(t) {
        (e.allRejections || u(s[t].error, e.whitelist || o)) &&
          (
            (s[t].displayId = n++),
            e.onUnhandled
              ? ((s[t].logged = !0), e.onUnhandled(s[t].displayId, s[t].error))
              : (
                  (s[t].logged = !0),
                  (function(e, t) {
                    console.warn(
                      "Possible Unhandled Promise Rejection (id: " + e + "):"
                    ), ((t && (t.stack || t)) + "")
                      .split("\n")
                      .forEach(function(e) {
                        console.warn("  " + e);
                      });
                  })(s[t].displayId, s[t].error)
                )
          );
      }
      (r._47 = function(t) {
        2 === t._83 &&
          s[t._56] &&
          (
            s[t._56].logged
              ? (function(t) {
                  s[t].logged &&
                    (e.onHandled
                      ? e.onHandled(s[t].displayId, s[t].error)
                      : s[t].onUnhandled ||
                        (
                          console.warn(
                            "Promise Rejection Handled (id: " +
                              s[t].displayId +
                              "):"
                          ),
                          console.warn(
                            '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                              s[t].displayId +
                              "."
                          )
                        ));
                })(t._56)
              : clearTimeout(s[t._56].timeout),
            delete s[t._56]
          );
      }), (r._71 = function(e, n) {
        0 === e._75 &&
          (
            (e._56 = t++),
            (s[e._56] = {
              displayId: null,
              error: n,
              timeout: setTimeout(l.bind(null, e._56), u(n, o) ? 100 : 2e3),
              logged: !1
            })
          );
      });
    });
  },
  function(e, t, n) {
    "use strict";
    (function(t) {
      function n(e) {
        o.length || (r(), !0), (o[o.length] = e);
      }
      e.exports = n;
      var r,
        o = [],
        i = 0,
        a = 1024;
      function u() {
        for (; i < o.length; ) {
          var e = i;
          if (((i += 1), o[e].call(), i > a)) {
            for (var t = 0, n = o.length - i; t < n; t++) o[t] = o[t + i];
            (o.length -= i), (i = 0);
          }
        }
        (o.length = 0), (i = 0), !1;
      }
      var s = "undefined" !== typeof t ? t : self,
        l = s.MutationObserver || s.WebKitMutationObserver;
      function c(e) {
        return function() {
          var t = setTimeout(r, 0),
            n = setInterval(r, 50);
          function r() {
            clearTimeout(t), clearInterval(n), e();
          }
        };
      }
      (r =
        "function" === typeof l
          ? (function(e) {
              var t = 1,
                n = new l(e),
                r = document.createTextNode("");
              return n.observe(r, { characterData: !0 }), function() {
                (t = -t), (r.data = t);
              };
            })(u)
          : c(u)), (n.requestFlush = r), (n.makeRequestCallFromTimer = c);
    }.call(t, n(12)));
  },
  function(e, t, n) {
    "use strict";
    var r = n(11);
    e.exports = r;
    var o = c(!0),
      i = c(!1),
      a = c(null),
      u = c(void 0),
      s = c(0),
      l = c("");
    function c(e) {
      var t = new r(r._44);
      return (t._83 = 1), (t._18 = e), t;
    }
    (r.resolve = function(e) {
      if (e instanceof r) return e;
      if (null === e) return a;
      if (void 0 === e) return u;
      if (!0 === e) return o;
      if (!1 === e) return i;
      if (0 === e) return s;
      if ("" === e) return l;
      if ("object" === typeof e || "function" === typeof e)
        try {
          var t = e.then;
          if ("function" === typeof t) return new r(t.bind(e));
        } catch (e) {
          return new r(function(t, n) {
            n(e);
          });
        }
      return c(e);
    }), (r.all = function(e) {
      var t = Array.prototype.slice.call(e);
      return new r(function(e, n) {
        if (0 === t.length) return e([]);
        var o = t.length;
        function i(a, u) {
          if (u && ("object" === typeof u || "function" === typeof u)) {
            if (u instanceof r && u.then === r.prototype.then) {
              for (; 3 === u._83; ) u = u._18;
              return 1 === u._83
                ? i(a, u._18)
                : (
                    2 === u._83 && n(u._18),
                    void u.then(function(e) {
                      i(a, e);
                    }, n)
                  );
            }
            var s = u.then;
            if ("function" === typeof s)
              return void new r(s.bind(u)).then(function(e) {
                i(a, e);
              }, n);
          }
          (t[a] = u), 0 === --o && e(t);
        }
        for (var a = 0; a < t.length; a++) i(a, t[a]);
      });
    }), (r.reject = function(e) {
      return new r(function(t, n) {
        n(e);
      });
    }), (r.race = function(e) {
      return new r(function(t, n) {
        e.forEach(function(e) {
          r.resolve(e).then(t, n);
        });
      });
    }), (r.prototype.catch = function(e) {
      return this.then(null, e);
    });
  },
  function(e, t) {
    !(function(e) {
      "use strict";
      if (!e.fetch) {
        var t = {
          searchParams: "URLSearchParams" in e,
          iterable: "Symbol" in e && "iterator" in Symbol,
          blob:
            "FileReader" in e &&
            "Blob" in e &&
            (function() {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: "FormData" in e,
          arrayBuffer: "ArrayBuffer" in e
        };
        if (t.arrayBuffer)
          var n = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ],
            r = function(e) {
              return e && DataView.prototype.isPrototypeOf(e);
            },
            o =
              ArrayBuffer.isView ||
              function(e) {
                return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        (c.prototype.append = function(e, t) {
          (e = u(e)), (t = s(t));
          var n = this.map[e];
          this.map[e] = n ? n + "," + t : t;
        }), (c.prototype.delete = function(e) {
          delete this.map[u(e)];
        }), (c.prototype.get = function(e) {
          return (e = u(e)), this.has(e) ? this.map[e] : null;
        }), (c.prototype.has = function(e) {
          return this.map.hasOwnProperty(u(e));
        }), (c.prototype.set = function(e, t) {
          this.map[u(e)] = s(t);
        }), (c.prototype.forEach = function(e, t) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }), (c.prototype.keys = function() {
          var e = [];
          return this.forEach(function(t, n) {
            e.push(n);
          }), l(e);
        }), (c.prototype.values = function() {
          var e = [];
          return this.forEach(function(t) {
            e.push(t);
          }), l(e);
        }), (c.prototype.entries = function() {
          var e = [];
          return this.forEach(function(t, n) {
            e.push([n, t]);
          }), l(e);
        }), t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        (v.prototype.clone = function() {
          return new v(this, { body: this._bodyInit });
        }), m.call(v.prototype), m.call(
          g.prototype
        ), (g.prototype.clone = function() {
          return new g(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new c(this.headers),
            url: this.url
          });
        }), (g.error = function() {
          var e = new g(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
        });
        var a = [301, 302, 303, 307, 308];
        (g.redirect = function(e, t) {
          if (-1 === a.indexOf(t)) throw new RangeError("Invalid status code");
          return new g(null, { status: t, headers: { location: e } });
        }), (e.Headers = c), (e.Request = v), (e.Response = g), (e.fetch = function(
          e,
          n
        ) {
          return new Promise(function(r, o) {
            var i = new v(e, n),
              a = new XMLHttpRequest();
            (a.onload = function() {
              var e = {
                status: a.status,
                statusText: a.statusText,
                headers: (function(e) {
                  var t = new c();
                  return e.split(/\r?\n/).forEach(function(e) {
                    var n = e.split(":"),
                      r = n.shift().trim();
                    if (r) {
                      var o = n.join(":").trim();
                      t.append(r, o);
                    }
                  }), t;
                })(a.getAllResponseHeaders() || "")
              };
              e.url =
                "responseURL" in a
                  ? a.responseURL
                  : e.headers.get("X-Request-URL");
              var t = "response" in a ? a.response : a.responseText;
              r(new g(t, e));
            }), (a.onerror = function() {
              o(new TypeError("Network request failed"));
            }), (a.ontimeout = function() {
              o(new TypeError("Network request failed"));
            }), a.open(i.method, i.url, !0), "include" === i.credentials && (a.withCredentials = !0), "responseType" in a && t.blob && (a.responseType = "blob"), i.headers.forEach(
              function(e, t) {
                a.setRequestHeader(t, e);
              }
            ), a.send("undefined" === typeof i._bodyInit ? null : i._bodyInit);
          });
        }), (e.fetch.polyfill = !0);
      }
      function u(e) {
        if (
          (
            "string" !== typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)
          )
        )
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function s(e) {
        return "string" !== typeof e && (e = String(e)), e;
      }
      function l(e) {
        var n = {
          next: function() {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          }
        };
        return t.iterable &&
          (n[Symbol.iterator] = function() {
            return n;
          }), n;
      }
      function c(e) {
        (this.map = {}), e instanceof c
          ? e.forEach(function(e, t) {
              this.append(t, e);
            }, this)
          : Array.isArray(e)
            ? e.forEach(function(e) {
                this.append(e[0], e[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t]);
              }, this);
      }
      function f(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function p(e) {
        return new Promise(function(t, n) {
          (e.onload = function() {
            t(e.result);
          }), (e.onerror = function() {
            n(e.error);
          });
        });
      }
      function d(e) {
        var t = new FileReader(),
          n = p(t);
        return t.readAsArrayBuffer(e), n;
      }
      function h(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function m() {
        return (this.bodyUsed = !1), (this._initBody = function(e) {
          if (((this._bodyInit = e), e))
            if ("string" === typeof e) this._bodyText = e;
            else if (t.blob && Blob.prototype.isPrototypeOf(e))
              this._bodyBlob = e;
            else if (t.formData && FormData.prototype.isPrototypeOf(e))
              this._bodyFormData = e;
            else if (
              t.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(e)
            )
              this._bodyText = e.toString();
            else if (t.arrayBuffer && t.blob && r(e))
              (this._bodyArrayBuffer = h(
                e.buffer
              )), (this._bodyInit = new Blob([this._bodyArrayBuffer]));
            else {
              if (
                !t.arrayBuffer ||
                (!ArrayBuffer.prototype.isPrototypeOf(e) && !o(e))
              )
                throw new Error("unsupported BodyInit type");
              this._bodyArrayBuffer = h(e);
            }
          else this._bodyText = "";
          this.headers.get("content-type") ||
            ("string" === typeof e
              ? this.headers.set("content-type", "text/plain;charset=UTF-8")
              : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : t.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ));
        }), t.blob &&
          (
            (this.blob = function() {
              var e = f(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function() {
              return this._bodyArrayBuffer
                ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(d);
            })
          ), (this.text = function() {
          var e = f(this);
          if (e) return e;
          if (this._bodyBlob)
            return (function(e) {
              var t = new FileReader(),
                n = p(t);
              return t.readAsText(e), n;
            })(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function(e) {
                for (
                  var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                  r < t.length;
                  r++
                )
                  n[r] = String.fromCharCode(t[r]);
                return n.join("");
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }), t.formData &&
          (this.formData = function() {
            return this.text().then(y);
          }), (this.json = function() {
          return this.text().then(JSON.parse);
        }), this;
      }
      function v(e, t) {
        var n = (t = t || {}).body;
        if (e instanceof v) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url), (this.credentials = e.credentials), t.headers ||
            (this.headers = new c(e.headers)), (this.method =
            e.method), (this.mode = e.mode), n ||
            null == e._bodyInit ||
            ((n = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          (
            (this.credentials = t.credentials || this.credentials || "omit"),
            (!t.headers && this.headers) || (this.headers = new c(t.headers)),
            (this.method = (function(e) {
              var t = e.toUpperCase();
              return i.indexOf(t) > -1 ? t : e;
            })(t.method || this.method || "GET")),
            (this.mode = t.mode || this.mode || null),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && n
          )
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n);
      }
      function y(e) {
        var t = new FormData();
        return e.trim().split("&").forEach(function(e) {
          if (e) {
            var n = e.split("="),
              r = n.shift().replace(/\+/g, " "),
              o = n.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(r), decodeURIComponent(o));
          }
        }), t;
      }
      function g(e, t) {
        t || (t = {}), (this.type = "default"), (this.status =
          "status" in t ? t.status : 200), (this.ok =
          this.status >= 200 && this.status < 300), (this.statusText =
          "statusText" in t ? t.statusText : "OK"), (this.headers = new c(
          t.headers
        )), (this.url = t.url || ""), this._initBody(e);
      }
    })("undefined" !== typeof self ? self : this);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1),
      o = (n.n(r), n(9)),
      i = (n.n(o), n(5)),
      a = n(13),
      u = n(52),
      s = n(64);
    document.bibex_present
      ? console.log("Bibex already present on page")
      : (
          a.b.init_from_cookies(),
          o.render(r.createElement(u.a, { state: a.b }), Object(i.e)()),
          o.render(r.createElement(s.a, { state: a.b }), Object(i.g)()),
          a.b.bibmodel.configureAvailableFromAbstract(),
          a.b.isdisabled || a.b.bibmodel.loadFromAbtract(),
          (document.bibex_present = !0),
          (document.bibex_state = a.b)
        );
  },
  function(e, t, n) {
    "use strict";
    var r = n(8),
      o = "function" === typeof Symbol && Symbol.for,
      i = o ? Symbol.for("react.element") : 60103,
      a = o ? Symbol.for("react.portal") : 60106,
      u = o ? Symbol.for("react.fragment") : 60107,
      s = o ? Symbol.for("react.strict_mode") : 60108,
      l = o ? Symbol.for("react.profiler") : 60114,
      c = o ? Symbol.for("react.provider") : 60109,
      f = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.forward_ref") : 60112,
      d = o ? Symbol.for("react.suspense") : 60113;
    o && Symbol.for("react.suspense_list");
    var h = o ? Symbol.for("react.memo") : 60115,
      m = o ? Symbol.for("react.lazy") : 60116;
    o && Symbol.for("react.fundamental"), o &&
      Symbol.for("react.responder"), o && Symbol.for("react.scope");
    var v = "function" === typeof Symbol && Symbol.iterator;
    function y(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      b = {};
    function w(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = b), (this.updater =
        n || g);
    }
    function A() {}
    function E(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = b), (this.updater =
        n || g);
    }
    (w.prototype.isReactComponent = {}), (w.prototype.setState = function(
      e,
      t
    ) {
      if ("object" !== typeof e && "function" !== typeof e && null != e)
        throw Error(y(85));
      this.updater.enqueueSetState(this, e, t, "setState");
    }), (w.prototype.forceUpdate = function(e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }), (A.prototype = w.prototype);
    var S = (E.prototype = new A());
    (S.constructor = E), r(S, w.prototype), (S.isPureReactComponent = !0);
    var x = { current: null },
      N = { current: null },
      T = Object.prototype.hasOwnProperty,
      C = { key: !0, ref: !0, __self: !0, __source: !0 };
    function k(e, t, n) {
      var r,
        o = {},
        a = null,
        u = null;
      if (null != t)
        for (r in (
          void 0 !== t.ref && (u = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t
        ))
          T.call(t, r) && !C.hasOwnProperty(r) && (o[r] = t[r]);
      var s = arguments.length - 2;
      if (1 === s) o.children = n;
      else if (1 < s) {
        for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
        o.children = l;
      }
      if (e && e.defaultProps)
        for (r in (s = e.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
      return {
        $$typeof: i,
        type: e,
        key: a,
        ref: u,
        props: o,
        _owner: N.current
      };
    }
    function O(e) {
      return "object" === typeof e && null !== e && e.$$typeof === i;
    }
    var _ = /\/+/g,
      R = [];
    function P(e, t, n, r) {
      if (R.length) {
        var o = R.pop();
        return (o.result = e), (o.keyPrefix = t), (o.func = n), (o.context = r), (o.count = 0), o;
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function I(e) {
      (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 >
        R.length && R.push(e);
    }
    function D(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, o) {
            var u = typeof t;
            ("undefined" !== u && "boolean" !== u) || (t = null);
            var s = !1;
            if (null === t) s = !0;
            else
              switch (u) {
                case "string":
                case "number":
                  s = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case i:
                    case a:
                      s = !0;
                  }
              }
            if (s) return r(o, t, "" === n ? "." + L(t, 0) : n), 1;
            if (((s = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
              for (var l = 0; l < t.length; l++) {
                var c = n + L((u = t[l]), l);
                s += e(u, c, r, o);
              }
            else if (
              (
                (c =
                  null === t || "object" !== typeof t
                    ? null
                    : "function" === typeof (c = (v && t[v]) || t["@@iterator"])
                      ? c
                      : null),
                "function" === typeof c
              )
            )
              for (t = c.call(t), l = 0; !(u = t.next()).done; )
                s += e((u = u.value), (c = n + L(u, l++)), r, o);
            else if ("object" === u)
              throw (
                (r = "" + t),
                Error(
                  y(
                    31,
                    "[object Object]" === r
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  )
                )
              );
            return s;
          })(e, "", t, n);
    }
    function L(e, t) {
      return "object" === typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function U(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function B(e, t, n) {
      var r = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)), Array.isArray(e)
        ? F(e, r, n, function(e) {
            return e;
          })
        : null != e &&
          (
            O(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: i,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
                };
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(_, "$&/") + "/") +
                  n
              )),
            r.push(e)
          );
    }
    function F(e, t, n, r, o) {
      var i = "";
      null != n && (i = ("" + n).replace(_, "$&/") + "/"), D(
        e,
        B,
        (t = P(t, i, r, o))
      ), I(t);
    }
    function M() {
      var e = x.current;
      if (null === e) throw Error(y(321));
      return e;
    }
    var j = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e;
            var r = [];
            return F(e, r, null, t, n), r;
          },
          forEach: function(e, t, n) {
            if (null == e) return e;
            D(e, U, (t = P(null, null, t, n))), I(t);
          },
          count: function(e) {
            return D(
              e,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(e) {
            var t = [];
            return F(e, t, null, function(e) {
              return e;
            }), t;
          },
          only: function(e) {
            if (!O(e)) throw Error(y(143));
            return e;
          }
        },
        createRef: function() {
          return { current: null };
        },
        Component: w,
        PureComponent: E,
        createContext: function(e, t) {
          return void 0 === t && (t = null), ((e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = { $$typeof: c, _context: e }), (e.Consumer = e);
        },
        forwardRef: function(e) {
          return { $$typeof: p, render: e };
        },
        lazy: function(e) {
          return { $$typeof: m, _ctor: e, _status: -1, _result: null };
        },
        memo: function(e, t) {
          return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
        },
        useCallback: function(e, t) {
          return M().useCallback(e, t);
        },
        useContext: function(e, t) {
          return M().useContext(e, t);
        },
        useEffect: function(e, t) {
          return M().useEffect(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return M().useImperativeHandle(e, t, n);
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return M().useLayoutEffect(e, t);
        },
        useMemo: function(e, t) {
          return M().useMemo(e, t);
        },
        useReducer: function(e, t, n) {
          return M().useReducer(e, t, n);
        },
        useRef: function(e) {
          return M().useRef(e);
        },
        useState: function(e) {
          return M().useState(e);
        },
        Fragment: u,
        Profiler: l,
        StrictMode: s,
        Suspense: d,
        createElement: k,
        cloneElement: function(e, t, n) {
          if (null === e || void 0 === e) throw Error(y(267, e));
          var o = r({}, e.props),
            a = e.key,
            u = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (
                void 0 !== t.ref && ((u = t.ref), (s = N.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps
              )
            )
              var l = e.type.defaultProps;
            for (c in t)
              T.call(t, c) &&
                !C.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = n;
          else if (1 < c) {
            l = Array(c);
            for (var f = 0; f < c; f++) l[f] = arguments[f + 2];
            o.children = l;
          }
          return {
            $$typeof: i,
            type: e.type,
            key: a,
            ref: u,
            props: o,
            _owner: s
          };
        },
        createFactory: function(e) {
          var t = k.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: O,
        version: "16.11.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: x,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: N,
          IsSomeRendererActing: { current: !1 },
          assign: r
        }
      },
      V = { default: j },
      z = (V && j) || V;
    e.exports = z.default || z;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n(8),
      i = n(32);
    function a(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(a(227));
    var u = null,
      s = {};
    function l() {
      if (u)
        for (var e in s) {
          var t = s[e],
            n = u.indexOf(e);
          if (!(-1 < n)) throw Error(a(96, e));
          if (!f[n]) {
            if (!t.extractEvents) throw Error(a(97, e));
            for (var r in ((f[n] = t), (n = t.eventTypes))) {
              var o = void 0,
                i = n[r],
                l = t,
                d = r;
              if (p.hasOwnProperty(d)) throw Error(a(99, d));
              p[d] = i;
              var h = i.phasedRegistrationNames;
              if (h) {
                for (o in h) h.hasOwnProperty(o) && c(h[o], l, d);
                o = !0;
              } else
                i.registrationName
                  ? (c(i.registrationName, l, d), (o = !0))
                  : (o = !1);
              if (!o) throw Error(a(98, r, e));
            }
          }
        }
    }
    function c(e, t, n) {
      if (d[e]) throw Error(a(100, e));
      (d[e] = t), (h[e] = t.eventTypes[n].dependencies);
    }
    var f = [],
      p = {},
      d = {},
      h = {};
    var m = !1,
      v = null,
      y = !1,
      g = null,
      b = {
        onError: function(e) {
          (m = !0), (v = e);
        }
      };
    function w(e, t, n, r, o, i, a, u, s) {
      (m = !1), (v = null), function(e, t, n, r, o, i, a, u, s) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, l);
        } catch (e) {
          this.onError(e);
        }
      }.apply(b, arguments);
    }
    var A = null,
      E = null,
      S = null;
    function x(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = S(n)), (function(e, t, n, r, o, i, u, s, l) {
        if ((w.apply(this, arguments), m)) {
          if (!m) throw Error(a(198));
          var c = v;
          (m = !1), (v = null), y || ((y = !0), (g = c));
        }
      })(r, t, void 0, e), (e.currentTarget = null);
    }
    function N(e, t) {
      if (null == t) throw Error(a(30));
      return null == e
        ? t
        : Array.isArray(e)
          ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)
          : Array.isArray(t) ? [e].concat(t) : [e, t];
    }
    function T(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var C = null;
    function k(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            x(e, t[r], n[r]);
        else t && x(e, t, n);
        (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() ||
          e.constructor.release(e);
      }
    }
    function O(e) {
      if ((null !== e && (C = N(C, e)), (e = C), (C = null), e)) {
        if ((T(e, k), C)) throw Error(a(95));
        if (y) throw ((e = g), (y = !1), (g = null), e);
      }
    }
    var _ = {
      injectEventPluginOrder: function(e) {
        if (u) throw Error(a(101));
        (u = Array.prototype.slice.call(e)), l();
      },
      injectEventPluginsByName: function(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!s.hasOwnProperty(t) || s[t] !== r) {
              if (s[t]) throw Error(a(102, t));
              (s[t] = r), (n = !0);
            }
          }
        n && l();
      }
    };
    function R(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = A(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
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
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )), (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
      return n;
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    P.hasOwnProperty("ReactCurrentDispatcher") ||
      (P.ReactCurrentDispatcher = { current: null }), P.hasOwnProperty(
      "ReactCurrentBatchConfig"
    ) || (P.ReactCurrentBatchConfig = { suspense: null });
    var I = /^(.*)[\\\/]/,
      D = "function" === typeof Symbol && Symbol.for,
      L = D ? Symbol.for("react.element") : 60103,
      U = D ? Symbol.for("react.portal") : 60106,
      B = D ? Symbol.for("react.fragment") : 60107,
      F = D ? Symbol.for("react.strict_mode") : 60108,
      M = D ? Symbol.for("react.profiler") : 60114,
      j = D ? Symbol.for("react.provider") : 60109,
      V = D ? Symbol.for("react.context") : 60110,
      z = D ? Symbol.for("react.concurrent_mode") : 60111,
      Q = D ? Symbol.for("react.forward_ref") : 60112,
      H = D ? Symbol.for("react.suspense") : 60113,
      W = D ? Symbol.for("react.suspense_list") : 60120,
      q = D ? Symbol.for("react.memo") : 60115,
      G = D ? Symbol.for("react.lazy") : 60116;
    D && Symbol.for("react.fundamental"), D &&
      Symbol.for("react.responder"), D && Symbol.for("react.scope");
    var Y = "function" === typeof Symbol && Symbol.iterator;
    function J(e) {
      return null === e || "object" !== typeof e
        ? null
        : "function" === typeof (e = (Y && e[Y]) || e["@@iterator"]) ? e : null;
    }
    function X(e) {
      if (null == e) return null;
      if ("function" === typeof e) return e.displayName || e.name || null;
      if ("string" === typeof e) return e;
      switch (e) {
        case B:
          return "Fragment";
        case U:
          return "Portal";
        case M:
          return "Profiler";
        case F:
          return "StrictMode";
        case H:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if ("object" === typeof e)
        switch (e.$$typeof) {
          case V:
            return "Context.Consumer";
          case j:
            return "Context.Provider";
          case Q:
            var t = e.render;
            return (t = t.displayName || t.name || ""), e.displayName ||
              ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
          case q:
            return X(e.type);
          case G:
            if ((e = 1 === e._status ? e._result : null)) return X(e);
        }
      return null;
    }
    function K(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;
          default:
            var r = e._debugOwner,
              o = e._debugSource,
              i = X(e.type);
            (n = null), r && (n = X(r.type)), (r = i), (i = ""), o
              ? (i =
                  " (at " +
                  o.fileName.replace(I, "") +
                  ":" +
                  o.lineNumber +
                  ")")
              : n && (i = " (created by " + n + ")"), (n =
              "\n    in " + (r || "Unknown") + i);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    var Z = !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      ),
      $ = null,
      ee = null,
      te = null;
    function ne(e) {
      if ((e = E(e))) {
        if ("function" !== typeof $) throw Error(a(280));
        var t = A(e.stateNode);
        $(e.stateNode, e.type, t);
      }
    }
    function re(e) {
      ee ? (te ? te.push(e) : (te = [e])) : (ee = e);
    }
    function oe() {
      if (ee) {
        var e = ee,
          t = te;
        if (((te = ee = null), ne(e), t))
          for (e = 0; e < t.length; e++) ne(t[e]);
      }
    }
    function ie(e, t) {
      return e(t);
    }
    function ae(e, t, n, r) {
      return e(t, n, r);
    }
    function ue() {}
    var se = ie,
      le = !1,
      ce = !1;
    function fe() {
      (null === ee && null === te) || (ue(), oe());
    }
    new Map();
    var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      de = Object.prototype.hasOwnProperty,
      he = {},
      me = {};
    function ve(e, t, n, r, o, i) {
      (this.acceptsBooleans =
        2 === t ||
        3 === t ||
        4 ===
          t), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i);
    }
    var ye = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function(e) {
        ye[e] = new ve(e, 0, !1, e, null, !1);
      }), [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
      var t = e[0];
      ye[t] = new ve(t, 1, !1, e[1], null, !1);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(e) {
      ye[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(e) {
      ye[e] = new ve(e, 2, !1, e, null, !1);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function(e) {
        ye[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1);
      }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      ye[e] = new ve(e, 3, !0, e, null, !1);
    }), ["capture", "download"].forEach(function(e) {
      ye[e] = new ve(e, 4, !1, e, null, !1);
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
      ye[e] = new ve(e, 6, !1, e, null, !1);
    }), ["rowSpan", "start"].forEach(function(e) {
      ye[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1);
    });
    var ge = /[\-:]([a-z])/g;
    function be(e) {
      return e[1].toUpperCase();
    }
    function we(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function Ae(e, t, n, r) {
      var o = ye.hasOwnProperty(t) ? ye[t] : null;
      (null !== o
        ? 0 === o.type
        : !r &&
          (2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1]))) ||
        (
          (function(e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function(e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, o, r) && (n = null),
          r || null === o
            ? (function(e) {
                return (
                  !!de.call(me, e) ||
                  (!de.call(he, e) &&
                    (pe.test(e) ? (me[e] = !0) : ((he[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : (
                  (t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : (
                        (n =
                          3 === (o = o.type) || (4 === o && !0 === n)
                            ? ""
                            : "" + n),
                        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)
                      )
                )
        );
    }
    function Ee(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function Se(e) {
      e._valueTracker ||
        (e._valueTracker = (function(e) {
          var t = Ee(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            "undefined" !== typeof n &&
            "function" === typeof n.get &&
            "function" === typeof n.set
          ) {
            var o = n.get,
              i = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0,
              get: function() {
                return o.call(this);
              },
              set: function(e) {
                (r = "" + e), i.call(this, e);
              }
            }), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
              getValue: function() {
                return r;
              },
              setValue: function(e) {
                r = "" + e;
              },
              stopTracking: function() {
                (e._valueTracker = null), delete e[t];
              }
            };
          }
        })(e));
    }
    function xe(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return e &&
        (r = Ee(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n &&
        (t.setValue(e), !0);
    }
    function Ne(e, t) {
      var n = t.checked;
      return o({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
      });
    }
    function Te(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = we(null != t.value ? t.value : n)), (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value
      });
    }
    function Ce(e, t) {
      null != (t = t.checked) && Ae(e, "checked", t, !1);
    }
    function ke(e, t) {
      Ce(e, t);
      var n = we(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? _e(e, t.type, n)
        : t.hasOwnProperty("defaultValue") &&
          _e(e, t.type, we(t.defaultValue)), null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
    }
    function Oe(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue), n ||
          t === e.value ||
          (e.value = t), (e.defaultValue = t);
      }
      "" !== (n = e.name) &&
        (e.name =
          ""), (e.defaultChecked = !e.defaultChecked), (e.defaultChecked = !!e
        ._wrapperState.initialChecked), "" !== n && (e.name = n);
    }
    function _e(e, t, n) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function Re(e, t) {
      return (e = o({ children: void 0 }, t)), (t = (function(e) {
        var t = "";
        return r.Children.forEach(e, function(e) {
          null != e && (t += e);
        }), t;
      })(t.children)) && (e.children = t), e;
    }
    function Pe(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o &&
            (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + we(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n)
            return (e[o].selected = !0), void (
              r && (e[o].defaultSelected = !0)
            );
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Ie(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
      return o({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }
    function De(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.defaultValue), null != (t = t.children))) {
          if (null != n) throw Error(a(92));
          if (Array.isArray(t)) {
            if (!(1 >= t.length)) throw Error(a(93));
            t = t[0];
          }
          n = t;
        }
        null == n && (n = "");
      }
      e._wrapperState = { initialValue: we(n) };
    }
    function Le(e, t) {
      var n = we(t.value),
        r = we(t.defaultValue);
      null != n &&
        (
          (n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)
        ), null != r && (e.defaultValue = "" + r);
    }
    function Ue(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(ge, be);
        ye[t] = new ve(t, 1, !1, e, null, !1);
      }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(ge, be);
        ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
      }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var t = e.replace(ge, be);
      ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1);
    }), (ye.xlinkHref = new ve(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0
    )), ["src", "href", "action", "formAction"].forEach(function(e) {
      ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0);
    });
    var Be = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };
    function Fe(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Me(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? Fe(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var je,
      Ve = (function(e) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function(t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function() {
                return e(t, n);
              });
            }
          : e;
      })(function(e, t) {
        if (e.namespaceURI !== Be.svg || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (je = je || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>", t = je.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function ze(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function Qe(e, t) {
      var n = {};
      return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] =
        "webkit" + t), (n["Moz" + e] = "moz" + t), n;
    }
    var He = {
        animationend: Qe("Animation", "AnimationEnd"),
        animationiteration: Qe("Animation", "AnimationIteration"),
        animationstart: Qe("Animation", "AnimationStart"),
        transitionend: Qe("Transition", "TransitionEnd")
      },
      We = {},
      qe = {};
    function Ge(e) {
      if (We[e]) return We[e];
      if (!He[e]) return e;
      var t,
        n = He[e];
      for (t in n) if (n.hasOwnProperty(t) && t in qe) return (We[e] = n[t]);
      return e;
    }
    Z &&
      (
        (qe = document.createElement("div").style),
        "AnimationEvent" in window ||
          (
            delete He.animationend.animation,
            delete He.animationiteration.animation,
            delete He.animationstart.animation
          ),
        "TransitionEvent" in window || delete He.transitionend.transition
      );
    var Ye = Ge("animationend"),
      Je = Ge("animationiteration"),
      Xe = Ge("animationstart"),
      Ke = Ge("transitionend"),
      Ze = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      );
    function $e(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 !== (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function et(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (
            null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
            null !== t
          )
        )
          return t.dehydrated;
      }
      return null;
    }
    function tt(e) {
      if ($e(e) !== e) throw Error(a(188));
    }
    function nt(e) {
      if (
        !(e = (function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = $e(e))) throw Error(a(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var o = n.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (o.child === i.child) {
              for (i = o.child; i; ) {
                if (i === n) return tt(o), e;
                if (i === r) return tt(o), t;
                i = i.sibling;
              }
              throw Error(a(188));
            }
            if (n.return !== r.return) (n = o), (r = i);
            else {
              for (var u = !1, s = o.child; s; ) {
                if (s === n) {
                  (u = !0), (n = o), (r = i);
                  break;
                }
                if (s === r) {
                  (u = !0), (r = o), (n = i);
                  break;
                }
                s = s.sibling;
              }
              if (!u) {
                for (s = i.child; s; ) {
                  if (s === n) {
                    (u = !0), (n = i), (r = o);
                    break;
                  }
                  if (s === r) {
                    (u = !0), (r = i), (n = o);
                    break;
                  }
                  s = s.sibling;
                }
                if (!u) throw Error(a(189));
              }
            }
            if (n.alternate !== r) throw Error(a(190));
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    var rt,
      ot,
      it,
      at = !1,
      ut = [],
      st = null,
      lt = null,
      ct = null,
      ft = new Map(),
      pt = new Map(),
      dt = [],
      ht = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
        " "
      ),
      mt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
        " "
      );
    function vt(e, t, n, r) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: r
      };
    }
    function yt(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          st = null;
          break;
        case "dragenter":
        case "dragleave":
          lt = null;
          break;
        case "mouseover":
        case "mouseout":
          ct = null;
          break;
        case "pointerover":
        case "pointerout":
          ft.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          pt.delete(t.pointerId);
      }
    }
    function gt(e, t, n, r, o) {
      return null === e || e.nativeEvent !== o
        ? (
            (e = vt(t, n, r, o)),
            null !== t && (null !== (t = cr(t)) && ot(t)),
            e
          )
        : ((e.eventSystemFlags |= r), e);
    }
    function bt(e) {
      var t = lr(e.target);
      if (null !== t) {
        var n = $e(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = et(n)))
              return (e.blockedOn = t), void i.unstable_runWithPriority(
                e.priority,
                function() {
                  it(n);
                }
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function wt(e) {
      if (null !== e.blockedOn) return !1;
      var t = kn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
      if (null !== t) {
        var n = cr(t);
        return null !== n && ot(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function At(e, t, n) {
      wt(e) && n.delete(t);
    }
    function Et() {
      for (at = !1; 0 < ut.length; ) {
        var e = ut[0];
        if (null !== e.blockedOn) {
          null !== (e = cr(e.blockedOn)) && rt(e);
          break;
        }
        var t = kn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        null !== t ? (e.blockedOn = t) : ut.shift();
      }
      null !== st && wt(st) && (st = null), null !== lt &&
        wt(lt) &&
        (lt = null), null !== ct && wt(ct) && (ct = null), ft.forEach(
        At
      ), pt.forEach(At);
    }
    function St(e, t) {
      e.blockedOn === t &&
        (
          (e.blockedOn = null),
          at ||
            (
              (at = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Et)
            )
        );
    }
    function xt(e) {
      function t(t) {
        return St(t, e);
      }
      if (0 < ut.length) {
        St(ut[0], e);
        for (var n = 1; n < ut.length; n++) {
          var r = ut[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== st && St(st, e), null !== lt && St(lt, e), null !== ct &&
          St(ct, e), ft.forEach(t), pt.forEach(t), n = 0;
        n < dt.length;
        n++
      )
        (r = dt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
        bt(n), null === n.blockedOn && dt.shift();
    }
    function Nt(e) {
      return (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
    }
    function Tt(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Ct(e, t, n) {
      (t = R(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        (
          (n._dispatchListeners = N(n._dispatchListeners, t)),
          (n._dispatchInstances = N(n._dispatchInstances, e))
        );
    }
    function kt(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Tt(t));
        for (t = n.length; 0 < t--; ) Ct(n[t], "captured", e);
        for (t = 0; t < n.length; t++) Ct(n[t], "bubbled", e);
      }
    }
    function Ot(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = R(e, n.dispatchConfig.registrationName)) &&
        (
          (n._dispatchListeners = N(n._dispatchListeners, t)),
          (n._dispatchInstances = N(n._dispatchInstances, e))
        );
    }
    function _t(e) {
      e && e.dispatchConfig.registrationName && Ot(e._targetInst, null, e);
    }
    function Rt(e) {
      T(e, kt);
    }
    function Pt() {
      return !0;
    }
    function It() {
      return !1;
    }
    function Dt(e, t, n, r) {
      for (var o in (
        (this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)
      ))
        e.hasOwnProperty(o) &&
          ((t = e[o])
            ? (this[o] = t(n))
            : "target" === o ? (this.target = r) : (this[o] = n[o]));
      return (this.isDefaultPrevented = (null != n.defaultPrevented
      ? n.defaultPrevented
      : !1 === n.returnValue)
        ? Pt
        : It), (this.isPropagationStopped = It), this;
    }
    function Lt(e, t, n, r) {
      if (this.eventPool.length) {
        var o = this.eventPool.pop();
        return this.call(o, e, t, n, r), o;
      }
      return new this(e, t, n, r);
    }
    function Ut(e) {
      if (!(e instanceof this)) throw Error(a(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }
    function Bt(e) {
      (e.eventPool = []), (e.getPooled = Lt), (e.release = Ut);
    }
    o(Dt.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (
            e.preventDefault
              ? e.preventDefault()
              : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Pt)
          );
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e &&
          (
            e.stopPropagation
              ? e.stopPropagation()
              : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Pt)
          );
      },
      persist: function() {
        this.isPersistent = Pt;
      },
      isPersistent: It,
      destructor: function() {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null), (this.isPropagationStopped = this.isDefaultPrevented = It), (this._dispatchInstances = this._dispatchListeners = null);
      }
    }), (Dt.Interface = {
      type: null,
      target: null,
      currentTarget: function() {
        return null;
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    }), (Dt.extend = function(e) {
      function t() {}
      function n() {
        return r.apply(this, arguments);
      }
      var r = this;
      t.prototype = r.prototype;
      var i = new t();
      return o(
        i,
        n.prototype
      ), (n.prototype = i), (n.prototype.constructor = n), (n.Interface = o(
        {},
        r.Interface,
        e
      )), (n.extend = r.extend), Bt(n), n;
    }), Bt(Dt);
    var Ft = Dt.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      Mt = Dt.extend({
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }),
      jt = Dt.extend({ view: null, detail: null }),
      Vt = jt.extend({ relatedTarget: null });
    function zt(e) {
      var t = e.keyCode;
      return "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
    }
    var Qt = {
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
      },
      Ht = {
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
      },
      Wt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
    function qt(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Wt[e]) && !!t[e];
    }
    function Gt() {
      return qt;
    }
    for (
      var Yt = jt.extend({
          key: function(e) {
            if (e.key) {
              var t = Qt[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = zt(e)) ? "Enter" : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
                ? Ht[e.keyCode] || "Unidentified"
                : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Gt,
          charCode: function(e) {
            return "keypress" === e.type ? zt(e) : 0;
          },
          keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function(e) {
            return "keypress" === e.type
              ? zt(e)
              : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          }
        }),
        Jt = 0,
        Xt = 0,
        Kt = !1,
        Zt = !1,
        $t = jt.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Gt,
          button: null,
          buttons: null,
          relatedTarget: function(e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function(e) {
            if (("movementX" in e)) return e.movementX;
            var t = Jt;
            return (Jt = e.screenX), Kt
              ? "mousemove" === e.type ? e.screenX - t : 0
              : ((Kt = !0), 0);
          },
          movementY: function(e) {
            if (("movementY" in e)) return e.movementY;
            var t = Xt;
            return (Xt = e.screenY), Zt
              ? "mousemove" === e.type ? e.screenY - t : 0
              : ((Zt = !0), 0);
          }
        }),
        en = $t.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null
        }),
        tn = $t.extend({ dataTransfer: null }),
        nn = jt.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Gt
        }),
        rn = Dt.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null
        }),
        on = $t.extend({
          deltaX: function(e) {
            return ("deltaX" in e)
              ? e.deltaX
              : ("wheelDeltaX" in e) ? -e.wheelDeltaX : 0;
          },
          deltaY: function(e) {
            return ("deltaY" in e)
              ? e.deltaY
              : ("wheelDeltaY" in e)
                ? -e.wheelDeltaY
                : ("wheelDelta" in e) ? -e.wheelDelta : 0;
          },
          deltaZ: null,
          deltaMode: null
        }),
        an = [
          ["blur", "blur", 0],
          ["cancel", "cancel", 0],
          ["click", "click", 0],
          ["close", "close", 0],
          ["contextmenu", "contextMenu", 0],
          ["copy", "copy", 0],
          ["cut", "cut", 0],
          ["auxclick", "auxClick", 0],
          ["dblclick", "doubleClick", 0],
          ["dragend", "dragEnd", 0],
          ["dragstart", "dragStart", 0],
          ["drop", "drop", 0],
          ["focus", "focus", 0],
          ["input", "input", 0],
          ["invalid", "invalid", 0],
          ["keydown", "keyDown", 0],
          ["keypress", "keyPress", 0],
          ["keyup", "keyUp", 0],
          ["mousedown", "mouseDown", 0],
          ["mouseup", "mouseUp", 0],
          ["paste", "paste", 0],
          ["pause", "pause", 0],
          ["play", "play", 0],
          ["pointercancel", "pointerCancel", 0],
          ["pointerdown", "pointerDown", 0],
          ["pointerup", "pointerUp", 0],
          ["ratechange", "rateChange", 0],
          ["reset", "reset", 0],
          ["seeked", "seeked", 0],
          ["submit", "submit", 0],
          ["touchcancel", "touchCancel", 0],
          ["touchend", "touchEnd", 0],
          ["touchstart", "touchStart", 0],
          ["volumechange", "volumeChange", 0],
          ["drag", "drag", 1],
          ["dragenter", "dragEnter", 1],
          ["dragexit", "dragExit", 1],
          ["dragleave", "dragLeave", 1],
          ["dragover", "dragOver", 1],
          ["mousemove", "mouseMove", 1],
          ["mouseout", "mouseOut", 1],
          ["mouseover", "mouseOver", 1],
          ["pointermove", "pointerMove", 1],
          ["pointerout", "pointerOut", 1],
          ["pointerover", "pointerOver", 1],
          ["scroll", "scroll", 1],
          ["toggle", "toggle", 1],
          ["touchmove", "touchMove", 1],
          ["wheel", "wheel", 1],
          ["abort", "abort", 2],
          [Ye, "animationEnd", 2],
          [Je, "animationIteration", 2],
          [Xe, "animationStart", 2],
          ["canplay", "canPlay", 2],
          ["canplaythrough", "canPlayThrough", 2],
          ["durationchange", "durationChange", 2],
          ["emptied", "emptied", 2],
          ["encrypted", "encrypted", 2],
          ["ended", "ended", 2],
          ["error", "error", 2],
          ["gotpointercapture", "gotPointerCapture", 2],
          ["load", "load", 2],
          ["loadeddata", "loadedData", 2],
          ["loadedmetadata", "loadedMetadata", 2],
          ["loadstart", "loadStart", 2],
          ["lostpointercapture", "lostPointerCapture", 2],
          ["playing", "playing", 2],
          ["progress", "progress", 2],
          ["seeking", "seeking", 2],
          ["stalled", "stalled", 2],
          ["suspend", "suspend", 2],
          ["timeupdate", "timeUpdate", 2],
          [Ke, "transitionEnd", 2],
          ["waiting", "waiting", 2]
        ],
        un = {},
        sn = {},
        ln = 0;
      ln < an.length;
      ln++
    ) {
      var cn = an[ln],
        fn = cn[0],
        pn = cn[1],
        dn = cn[2],
        hn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
        mn = {
          phasedRegistrationNames: { bubbled: hn, captured: hn + "Capture" },
          dependencies: [fn],
          eventPriority: dn
        };
      (un[pn] = mn), (sn[fn] = mn);
    }
    var vn = {
        eventTypes: un,
        getEventPriority: function(e) {
          return void 0 !== (e = sn[e]) ? e.eventPriority : 2;
        },
        extractEvents: function(e, t, n, r) {
          var o = sn[e];
          if (!o) return null;
          switch (e) {
            case "keypress":
              if (0 === zt(n)) return null;
            case "keydown":
            case "keyup":
              e = Yt;
              break;
            case "blur":
            case "focus":
              e = Vt;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = $t;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = tn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = nn;
              break;
            case Ye:
            case Je:
            case Xe:
              e = Ft;
              break;
            case Ke:
              e = rn;
              break;
            case "scroll":
              e = jt;
              break;
            case "wheel":
              e = on;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = Mt;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = en;
              break;
            default:
              e = Dt;
          }
          return Rt((t = e.getPooled(o, t, n, r))), t;
        }
      },
      yn = i.unstable_UserBlockingPriority,
      gn = i.unstable_runWithPriority,
      bn = vn.getEventPriority,
      wn = 10,
      An = [];
    function En(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = lr(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var o = Nt(e.nativeEvent);
        r = e.topLevelType;
        for (
          var i = e.nativeEvent, a = e.eventSystemFlags, u = null, s = 0;
          s < f.length;
          s++
        ) {
          var l = f[s];
          l && (l = l.extractEvents(r, t, i, o, a)) && (u = N(u, l));
        }
        O(u);
      }
    }
    var Sn = !0;
    function xn(e, t) {
      Nn(t, e, !1);
    }
    function Nn(e, t, n) {
      switch (bn(t)) {
        case 0:
          var r = function(e, t, n) {
            le || ue();
            var r = Cn,
              o = le;
            le = !0;
            try {
              ae(r, e, t, n);
            } finally {
              (le = o) || fe();
            }
          }.bind(null, t, 1);
          break;
        case 1:
          r = function(e, t, n) {
            gn(yn, Cn.bind(null, e, t, n));
          }.bind(null, t, 1);
          break;
        default:
          r = Cn.bind(null, t, 1);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function Tn(e, t, n, r) {
      if (An.length) {
        var o = An.pop();
        (o.topLevelType = e), (o.eventSystemFlags = t), (o.nativeEvent = n), (o.targetInst = r), (e = o);
      } else
        e = {
          topLevelType: e,
          eventSystemFlags: t,
          nativeEvent: n,
          targetInst: r,
          ancestors: []
        };
      try {
        if (((t = En), (n = e), ce)) t(n, void 0);
        else {
          ce = !0;
          try {
            se(t, n, void 0);
          } finally {
            (ce = !1), fe();
          }
        }
      } finally {
        (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), An.length <
          wn && An.push(e);
      }
    }
    function Cn(e, t, n) {
      if (Sn)
        if (0 < ut.length && -1 < ht.indexOf(e))
          (e = vt(null, e, t, n)), ut.push(e);
        else {
          var r = kn(e, t, n);
          null === r
            ? yt(e, n)
            : -1 < ht.indexOf(e)
              ? ((e = vt(r, e, t, n)), ut.push(e))
              : (function(e, t, n, r) {
                  switch (t) {
                    case "focus":
                      return (st = gt(st, e, t, n, r)), !0;
                    case "dragenter":
                      return (lt = gt(lt, e, t, n, r)), !0;
                    case "mouseover":
                      return (ct = gt(ct, e, t, n, r)), !0;
                    case "pointerover":
                      var o = r.pointerId;
                      return ft.set(o, gt(ft.get(o) || null, e, t, n, r)), !0;
                    case "gotpointercapture":
                      return (o = r.pointerId), pt.set(
                        o,
                        gt(pt.get(o) || null, e, t, n, r)
                      ), !0;
                  }
                  return !1;
                })(r, e, t, n) || (yt(e, n), Tn(e, t, n, null));
        }
    }
    function kn(e, t, n) {
      var r = Nt(n);
      if (null !== (r = lr(r))) {
        var o = $e(r);
        if (null === o) r = null;
        else {
          var i = o.tag;
          if (13 === i) {
            if (null !== (r = et(o))) return r;
            r = null;
          } else if (3 === i) {
            if (o.stateNode.hydrate)
              return 3 === o.tag ? o.stateNode.containerInfo : null;
            r = null;
          } else o !== r && (r = null);
        }
      }
      return Tn(e, t, n, r), null;
    }
    function On(e) {
      if (!Z) return !1;
      var t = (e = "on" + e) in document;
      return t ||
        (
          (t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" === typeof t[e])
        ), t;
    }
    var _n = new ("function" === typeof WeakMap ? WeakMap : Map)();
    function Rn(e) {
      var t = _n.get(e);
      return void 0 === t && ((t = new Set()), _n.set(e, t)), t;
    }
    function Pn(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case "scroll":
            Nn(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            Nn(t, "focus", !0), Nn(t, "blur", !0), n.add("blur"), n.add(
              "focus"
            );
            break;
          case "cancel":
          case "close":
            On(e) && Nn(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === Ze.indexOf(e) && xn(e, t);
        }
        n.add(e);
      }
    }
    var In = {
        animationIterationCount: !0,
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
      },
      Dn = ["Webkit", "ms", "Moz", "O"];
    function Ln(e, t, n) {
      return null == t || "boolean" === typeof t || "" === t
        ? ""
        : n ||
          "number" !== typeof t ||
          0 === t ||
          (In.hasOwnProperty(e) && In[e])
          ? ("" + t).trim()
          : t + "px";
    }
    function Un(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            o = Ln(n, t[n], r);
          "float" === n && (n = "cssFloat"), r
            ? e.setProperty(n, o)
            : (e[n] = o);
        }
    }
    Object.keys(In).forEach(function(e) {
      Dn.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]);
      });
    });
    var Bn = o(
      { menuitem: !0 },
      {
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
      }
    );
    function Fn(e, t) {
      if (t) {
        if (Bn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(a(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(a(60));
          if (
            !(
              "object" === typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML
            )
          )
            throw Error(a(61));
        }
        if (null != t.style && "object" !== typeof t.style)
          throw Error(a(62, ""));
      }
    }
    function Mn(e, t) {
      if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
    function jn(e, t) {
      var n = Rn(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = h[t];
      for (var r = 0; r < t.length; r++) Pn(t[r], e, n);
    }
    function Vn() {}
    function zn(e) {
      if (
        "undefined" ===
        typeof (e = e || ("undefined" !== typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function Qn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Hn(e, t) {
      var n,
        r = Qn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Qn(r);
      }
    }
    function Wn() {
      for (var e = window, t = zn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" === typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = zn((e = t.contentWindow).document);
      }
      return t;
    }
    function qn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var Gn = "$",
      Yn = "/$",
      Jn = "$?",
      Xn = "$!",
      Kn = null,
      Zn = null;
    function $n(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function er(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" === typeof t.children ||
        "number" === typeof t.children ||
        ("object" === typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var tr = "function" === typeof setTimeout ? setTimeout : void 0,
      nr = "function" === typeof clearTimeout ? clearTimeout : void 0;
    function rr(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function or(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if (n === Gn || n === Xn || n === Jn) {
            if (0 === t) return e;
            t--;
          } else n === Yn && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var ir = Math.random().toString(36).slice(2),
      ar = "__reactInternalInstance$" + ir,
      ur = "__reactEventHandlers$" + ir,
      sr = "__reactContainere$" + ir;
    function lr(e) {
      var t = e[ar];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[sr] || n[ar])) {
          if (
            (
              (n = t.alternate),
              null !== t.child || (null !== n && null !== n.child)
            )
          )
            for (e = or(e); null !== e; ) {
              if ((n = e[ar])) return n;
              e = or(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function cr(e) {
      return !(e = e[ar] || e[sr]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function fr(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(a(33));
    }
    function pr(e) {
      return e[ur] || null;
    }
    var dr = null,
      hr = null,
      mr = null;
    function vr() {
      if (mr) return mr;
      var e,
        t,
        n = hr,
        r = n.length,
        o = "value" in dr ? dr.value : dr.textContent,
        i = o.length;
      for (e = 0; e < r && n[e] === o[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
      return (mr = o.slice(e, 1 < t ? 1 - t : void 0));
    }
    var yr = Dt.extend({ data: null }),
      gr = Dt.extend({ data: null }),
      br = [9, 13, 27, 32],
      wr = Z && "CompositionEvent" in window,
      Ar = null;
    Z && "documentMode" in document && (Ar = document.documentMode);
    var Er = Z && "TextEvent" in window && !Ar,
      Sr = Z && (!wr || (Ar && 8 < Ar && 11 >= Ar)),
      xr = String.fromCharCode(32),
      Nr = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
          },
          dependencies: "blur compositionend keydown keypress keyup mousedown".split(
            " "
          )
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          },
          dependencies: "blur compositionstart keydown keypress keyup mousedown".split(
            " "
          )
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
          },
          dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(
            " "
          )
        }
      },
      Tr = !1;
    function Cr(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== br.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return !0;
        default:
          return !1;
      }
    }
    function kr(e) {
      return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Or = !1;
    var _r = {
        eventTypes: Nr,
        extractEvents: function(e, t, n, r) {
          var o;
          if (wr)
            e: {
              switch (e) {
                case "compositionstart":
                  var i = Nr.compositionStart;
                  break e;
                case "compositionend":
                  i = Nr.compositionEnd;
                  break e;
                case "compositionupdate":
                  i = Nr.compositionUpdate;
                  break e;
              }
              i = void 0;
            }
          else
            Or
              ? Cr(e, n) && (i = Nr.compositionEnd)
              : "keydown" === e &&
                229 === n.keyCode &&
                (i = Nr.compositionStart);
          return i
            ? (
                Sr &&
                  "ko" !== n.locale &&
                  (Or || i !== Nr.compositionStart
                    ? i === Nr.compositionEnd && Or && (o = vr())
                    : (
                        (hr = "value" in (dr = r) ? dr.value : dr.textContent),
                        (Or = !0)
                      )),
                (i = yr.getPooled(i, t, n, r)),
                o ? (i.data = o) : null !== (o = kr(n)) && (i.data = o),
                Rt(i),
                (o = i)
              )
            : (o = null), (e = Er
            ? (function(e, t) {
                switch (e) {
                  case "compositionend":
                    return kr(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Tr = !0), xr);
                  case "textInput":
                    return (e = t.data) === xr && Tr ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function(e, t) {
                if (Or)
                  return "compositionend" === e || (!wr && Cr(e, t))
                    ? ((e = vr()), (mr = hr = dr = null), (Or = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return Sr && "ko" !== t.locale ? null : t.data;
                  default:
                    return null;
                }
              })(e, n))
            ? (((t = gr.getPooled(Nr.beforeInput, t, n, r)).data = e), Rt(t))
            : (t = null), null === o ? t : null === t ? o : [o, t];
        }
      },
      Rr = {
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
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!Rr[e.type] : "textarea" === t;
    }
    var Ir = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(
          " "
        )
      }
    };
    function Dr(e, t, n) {
      return ((e = Dt.getPooled(Ir.change, e, t, n)).type = "change"), re(
        n
      ), Rt(e), e;
    }
    var Lr = null,
      Ur = null;
    function Br(e) {
      O(e);
    }
    function Fr(e) {
      if (xe(fr(e))) return e;
    }
    function Mr(e, t) {
      if ("change" === e) return t;
    }
    var jr = !1;
    function Vr() {
      Lr && (Lr.detachEvent("onpropertychange", zr), (Ur = Lr = null));
    }
    function zr(e) {
      if ("value" === e.propertyName && Fr(Ur))
        if (((e = Dr(Ur, e, Nt(e))), le)) O(e);
        else {
          le = !0;
          try {
            ie(Br, e);
          } finally {
            (le = !1), fe();
          }
        }
    }
    function Qr(e, t, n) {
      "focus" === e
        ? (Vr(), (Ur = n), (Lr = t).attachEvent("onpropertychange", zr))
        : "blur" === e && Vr();
    }
    function Hr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return Fr(Ur);
    }
    function Wr(e, t) {
      if ("click" === e) return Fr(t);
    }
    function qr(e, t) {
      if ("input" === e || "change" === e) return Fr(t);
    }
    Z &&
      (jr =
        On("input") && (!document.documentMode || 9 < document.documentMode));
    var Gr,
      Yr = {
        eventTypes: Ir,
        _isInputEventSupported: jr,
        extractEvents: function(e, t, n, r) {
          var o = t ? fr(t) : window,
            i = o.nodeName && o.nodeName.toLowerCase();
          if ("select" === i || ("input" === i && "file" === o.type))
            var a = Mr;
          else if (Pr(o))
            if (jr) a = qr;
            else {
              a = Hr;
              var u = Qr;
            }
          else
            (i = o.nodeName) &&
              "input" === i.toLowerCase() &&
              ("checkbox" === o.type || "radio" === o.type) &&
              (a = Wr);
          if (a && (a = a(e, t))) return Dr(a, n, r);
          u && u(e, o, t), "blur" === e &&
            (e = o._wrapperState) &&
            e.controlled &&
            "number" === o.type &&
            _e(o, "number", o.value);
        }
      },
      Jr = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"]
        }
      },
      Xr = {
        eventTypes: Jr,
        extractEvents: function(e, t, n, r, o) {
          var i = "mouseover" === e || "pointerover" === e,
            a = "mouseout" === e || "pointerout" === e;
          if (
            (i && 0 === (32 & o) && (n.relatedTarget || n.fromElement)) ||
            (!a && !i)
          )
            return null;
          if (
            (
              (o =
                r.window === r
                  ? r
                  : (o = r.ownerDocument)
                    ? o.defaultView || o.parentWindow
                    : window),
              a
                ? (
                    (a = t),
                    null !==
                      (t = (t = n.relatedTarget || n.toElement)
                        ? lr(t)
                        : null) &&
                      (t !== (i = $e(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                      (t = null)
                  )
                : (a = null),
              a === t
            )
          )
            return null;
          if ("mouseout" === e || "mouseover" === e)
            var u = $t,
              s = Jr.mouseLeave,
              l = Jr.mouseEnter,
              c = "mouse";
          else
            ("pointerout" !== e && "pointerover" !== e) ||
              (
                (u = en),
                (s = Jr.pointerLeave),
                (l = Jr.pointerEnter),
                (c = "pointer")
              );
          if (
            (
              (e = null == a ? o : fr(a)),
              (o = null == t ? o : fr(t)),
              ((s = u.getPooled(s, a, n, r)).type = c + "leave"),
              (s.target = e),
              (s.relatedTarget = o),
              ((r = u.getPooled(l, t, n, r)).type = c + "enter"),
              (r.target = o),
              (r.relatedTarget = e),
              (c = t),
              (u = a) && c
            )
          )
            e: {
              for (e = c, a = 0, t = l = u; t; t = Tt(t)) a++;
              for (t = 0, o = e; o; o = Tt(o)) t++;
              for (; 0 < a - t; ) (l = Tt(l)), a--;
              for (; 0 < t - a; ) (e = Tt(e)), t--;
              for (; a--; ) {
                if (l === e || l === e.alternate) break e;
                (l = Tt(l)), (e = Tt(e));
              }
              l = null;
            }
          else l = null;
          for (
            e = l, l = [];
            u && u !== e && (null === (a = u.alternate) || a !== e);

          )
            l.push(u), (u = Tt(u));
          for (
            u = [];
            c && c !== e && (null === (a = c.alternate) || a !== e);

          )
            u.push(c), (c = Tt(c));
          for (c = 0; c < l.length; c++) Ot(l[c], "bubbled", s);
          for (c = u.length; 0 < c--; ) Ot(u[c], "captured", r);
          return n === Gr ? ((Gr = null), [s]) : ((Gr = n), [s, r]);
        }
      };
    var Kr =
        "function" === typeof Object.is
          ? Object.is
          : function(e, t) {
              return (
                (e === t && (0 !== e || 1 / e === 1 / t)) ||
                (e !== e && t !== t)
              );
            },
      Zr = Object.prototype.hasOwnProperty;
    function $r(e, t) {
      if (Kr(e, t)) return !0;
      if (
        "object" !== typeof e ||
        null === e ||
        "object" !== typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Zr.call(t, n[r]) || !Kr(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var eo = Z && "documentMode" in document && 11 >= document.documentMode,
      to = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
          },
          dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        }
      },
      no = null,
      ro = null,
      oo = null,
      io = !1;
    function ao(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return io || null == no || no !== zn(n)
        ? null
        : (
            "selectionStart" in (n = no) && qn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = ((n.ownerDocument &&
                    n.ownerDocument.defaultView) ||
                    window)
                    .getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset
                }),
            oo && $r(oo, n)
              ? null
              : (
                  (oo = n),
                  ((e = Dt.getPooled(to.select, ro, e, t)).type = "select"),
                  (e.target = no),
                  Rt(e),
                  e
                )
          );
    }
    var uo = {
      eventTypes: to,
      extractEvents: function(e, t, n, r) {
        var o,
          i =
            r.window === r
              ? r.document
              : 9 === r.nodeType ? r : r.ownerDocument;
        if (!(o = !i)) {
          e: {
            (i = Rn(i)), (o = h.onSelect);
            for (var a = 0; a < o.length; a++)
              if (!i.has(o[a])) {
                i = !1;
                break e;
              }
            i = !0;
          }
          o = !i;
        }
        if (o) return null;
        switch (((i = t ? fr(t) : window), e)) {
          case "focus":
            (Pr(i) || "true" === i.contentEditable) &&
              ((no = i), (ro = t), (oo = null));
            break;
          case "blur":
            oo = ro = no = null;
            break;
          case "mousedown":
            io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return (io = !1), ao(n, r);
          case "selectionchange":
            if (eo) break;
          case "keydown":
          case "keyup":
            return ao(n, r);
        }
        return null;
      }
    };
    _.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    ), (A = pr), (E = cr), (S = fr), _.injectEventPluginsByName({
      SimpleEventPlugin: vn,
      EnterLeaveEventPlugin: Xr,
      ChangeEventPlugin: Yr,
      SelectEventPlugin: uo,
      BeforeInputEventPlugin: _r
    }), new Set();
    var so = [],
      lo = -1;
    function co(e) {
      0 > lo || ((e.current = so[lo]), (so[lo] = null), lo--);
    }
    function fo(e, t) {
      (so[++lo] = e.current), (e.current = t);
    }
    var po = {},
      ho = { current: po },
      mo = { current: !1 },
      vo = po;
    function yo(e, t) {
      var n = e.type.contextTypes;
      if (!n) return po;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var o,
        i = {};
      for (o in n) i[o] = t[o];
      return r &&
        (
          ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)
        ), i;
    }
    function go(e) {
      return null !== (e = e.childContextTypes) && void 0 !== e;
    }
    function bo(e) {
      co(mo), co(ho);
    }
    function wo(e) {
      co(mo), co(ho);
    }
    function Ao(e, t, n) {
      if (ho.current !== po) throw Error(a(168));
      fo(ho, t), fo(mo, n);
    }
    function Eo(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" !== typeof r.getChildContext))
        return n;
      for (var i in (r = r.getChildContext()))
        if (!(i in e)) throw Error(a(108, X(t) || "Unknown", i));
      return o({}, n, {}, r);
    }
    function So(e) {
      var t = e.stateNode;
      return (t =
        (t && t.__reactInternalMemoizedMergedChildContext) || po), (vo =
        ho.current), fo(ho, t), fo(mo, mo.current), !0;
    }
    function xo(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(a(169));
      n
        ? (
            (t = Eo(e, t, vo)),
            (r.__reactInternalMemoizedMergedChildContext = t),
            co(mo),
            co(ho),
            fo(ho, t)
          )
        : co(mo), fo(mo, n);
    }
    var No = i.unstable_runWithPriority,
      To = i.unstable_scheduleCallback,
      Co = i.unstable_cancelCallback,
      ko = i.unstable_shouldYield,
      Oo = i.unstable_requestPaint,
      _o = i.unstable_now,
      Ro = i.unstable_getCurrentPriorityLevel,
      Po = i.unstable_ImmediatePriority,
      Io = i.unstable_UserBlockingPriority,
      Do = i.unstable_NormalPriority,
      Lo = i.unstable_LowPriority,
      Uo = i.unstable_IdlePriority,
      Bo = {},
      Fo = void 0 !== Oo ? Oo : function() {},
      Mo = null,
      jo = null,
      Vo = !1,
      zo = _o(),
      Qo =
        1e4 > zo
          ? _o
          : function() {
              return _o() - zo;
            };
    function Ho() {
      switch (Ro()) {
        case Po:
          return 99;
        case Io:
          return 98;
        case Do:
          return 97;
        case Lo:
          return 96;
        case Uo:
          return 95;
        default:
          throw Error(a(332));
      }
    }
    function Wo(e) {
      switch (e) {
        case 99:
          return Po;
        case 98:
          return Io;
        case 97:
          return Do;
        case 96:
          return Lo;
        case 95:
          return Uo;
        default:
          throw Error(a(332));
      }
    }
    function qo(e, t) {
      return (e = Wo(e)), No(e, t);
    }
    function Go(e, t, n) {
      return (e = Wo(e)), To(e, t, n);
    }
    function Yo(e) {
      return null === Mo ? ((Mo = [e]), (jo = To(Po, Xo))) : Mo.push(e), Bo;
    }
    function Jo() {
      if (null !== jo) {
        var e = jo;
        (jo = null), Co(e);
      }
      Xo();
    }
    function Xo() {
      if (!Vo && null !== Mo) {
        Vo = !0;
        var e = 0;
        try {
          var t = Mo;
          qo(99, function() {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }), (Mo = null);
        } catch (t) {
          throw (null !== Mo && (Mo = Mo.slice(e + 1)), To(Po, Jo), t);
        } finally {
          Vo = !1;
        }
      }
    }
    var Ko = 3;
    function Zo(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function $o(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = o({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var ei = { current: null },
      ti = null,
      ni = null,
      ri = null;
    function oi() {
      ri = ni = ti = null;
    }
    function ii(e, t) {
      var n = e.type._context;
      fo(ei, n._currentValue), (n._currentValue = t);
    }
    function ai(e) {
      var t = ei.current;
      co(ei), (e.type._context._currentValue = t);
    }
    function ui(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t), null !== n &&
            n.childExpirationTime < t &&
            (n.childExpirationTime = t);
        else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function si(e, t) {
      (ti = e), (ri = ni = null), null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (e.expirationTime >= t && (za = !0), (e.firstContext = null));
    }
    function li(e, t) {
      if (ri !== e && !1 !== t && 0 !== t)
        if (
          (
            ("number" === typeof t && 1073741823 !== t) ||
              ((ri = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === ni
          )
        ) {
          if (null === ti) throw Error(a(308));
          (ni = t), (ti.dependencies = {
            expirationTime: 0,
            firstContext: t,
            responders: null
          });
        } else ni = ni.next = t;
      return e._currentValue;
    }
    var ci = !1;
    function fi(e) {
      return {
        baseState: e,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
    }
    function pi(e) {
      return {
        baseState: e.baseState,
        firstUpdate: e.firstUpdate,
        lastUpdate: e.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
    }
    function di(e, t) {
      return {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null
      };
    }
    function hi(e, t) {
      null === e.lastUpdate
        ? (e.firstUpdate = e.lastUpdate = t)
        : ((e.lastUpdate.next = t), (e.lastUpdate = t));
    }
    function mi(e, t) {
      var n = e.alternate;
      if (null === n) {
        var r = e.updateQueue,
          o = null;
        null === r && (r = e.updateQueue = fi(e.memoizedState));
      } else
        (r = e.updateQueue), (o = n.updateQueue), null === r
          ? null === o
            ? (
                (r = e.updateQueue = fi(e.memoizedState)),
                (o = n.updateQueue = fi(n.memoizedState))
              )
            : (r = e.updateQueue = pi(o))
          : null === o && (o = n.updateQueue = pi(r));
      null === o || r === o
        ? hi(r, t)
        : null === r.lastUpdate || null === o.lastUpdate
          ? (hi(r, t), hi(o, t))
          : (hi(r, t), (o.lastUpdate = t));
    }
    function vi(e, t) {
      var n = e.updateQueue;
      null ===
      (n = null === n ? (e.updateQueue = fi(e.memoizedState)) : yi(e, n))
        .lastCapturedUpdate
        ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
        : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
    }
    function yi(e, t) {
      var n = e.alternate;
      return null !== n &&
        t === n.updateQueue &&
        (t = e.updateQueue = pi(t)), t;
    }
    function gi(e, t, n, r, i, a) {
      switch (n.tag) {
        case 1:
          return "function" === typeof (e = n.payload) ? e.call(a, r, i) : e;
        case 3:
          e.effectTag = (-4097 & e.effectTag) | 64;
        case 0:
          if (
            null ===
              (i =
                "function" === typeof (e = n.payload) ? e.call(a, r, i) : e) ||
            void 0 === i
          )
            break;
          return o({}, r, i);
        case 2:
          ci = !0;
      }
      return r;
    }
    function bi(e, t, n, r, o) {
      ci = !1;
      for (
        var i = (t = yi(e, t)).baseState,
          a = null,
          u = 0,
          s = t.firstUpdate,
          l = i;
        null !== s;

      ) {
        var c = s.expirationTime;
        c < o
          ? (null === a && ((a = s), (i = l)), u < c && (u = c))
          : (
              Ss(c, s.suspenseConfig),
              (l = gi(e, 0, s, l, n, r)),
              null !== s.callback &&
                (
                  (e.effectTag |= 32),
                  (s.nextEffect = null),
                  null === t.lastEffect
                    ? (t.firstEffect = t.lastEffect = s)
                    : ((t.lastEffect.nextEffect = s), (t.lastEffect = s))
                )
            ), (s = s.next);
      }
      for (c = null, s = t.firstCapturedUpdate; null !== s; ) {
        var f = s.expirationTime;
        f < o
          ? (null === c && ((c = s), null === a && (i = l)), u < f && (u = f))
          : (
              (l = gi(e, 0, s, l, n, r)),
              null !== s.callback &&
                (
                  (e.effectTag |= 32),
                  (s.nextEffect = null),
                  null === t.lastCapturedEffect
                    ? (t.firstCapturedEffect = t.lastCapturedEffect = s)
                    : (
                        (t.lastCapturedEffect.nextEffect = s),
                        (t.lastCapturedEffect = s)
                      )
                )
            ), (s = s.next);
      }
      null === a && (t.lastUpdate = null), null === c
        ? (t.lastCapturedUpdate = null)
        : (e.effectTag |= 32), null === a &&
        null === c &&
        (i = l), (t.baseState = i), (t.firstUpdate = a), (t.firstCapturedUpdate = c), xs(
        u
      ), (e.expirationTime = u), (e.memoizedState = l);
    }
    function wi(e, t, n) {
      null !== t.firstCapturedUpdate &&
        (
          null !== t.lastUpdate &&
            (
              (t.lastUpdate.next = t.firstCapturedUpdate),
              (t.lastUpdate = t.lastCapturedUpdate)
            ),
          (t.firstCapturedUpdate = t.lastCapturedUpdate = null)
        ), Ai(t.firstEffect, n), (t.firstEffect = t.lastEffect = null), Ai(
        t.firstCapturedEffect,
        n
      ), (t.firstCapturedEffect = t.lastCapturedEffect = null);
    }
    function Ai(e, t) {
      for (; null !== e; ) {
        var n = e.callback;
        if (null !== n) {
          e.callback = null;
          var r = t;
          if ("function" !== typeof n) throw Error(a(191, n));
          n.call(r);
        }
        e = e.nextEffect;
      }
    }
    var Ei = P.ReactCurrentBatchConfig,
      Si = new r.Component().refs;
    function xi(e, t, n, r) {
      (n =
        null === (n = n(r, (t = e.memoizedState))) || void 0 === n
          ? t
          : o({}, t, n)), (e.memoizedState = n), null !== (r = e.updateQueue) &&
        0 === e.expirationTime &&
        (r.baseState = n);
    }
    var Ni = {
      isMounted: function(e) {
        return !!(e = e._reactInternalFiber) && $e(e) === e;
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = fs(),
          o = Ei.suspense;
        ((o = di((r = ps(r, e, o)), o)).payload = t), void 0 !== n &&
          null !== n &&
          (o.callback = n), mi(e, o), ds(e, r);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = fs(),
          o = Ei.suspense;
        ((o = di((r = ps(r, e, o)), o)).tag = 1), (o.payload = t), void 0 !==
          n &&
          null !== n &&
          (o.callback = n), mi(e, o), ds(e, r);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternalFiber;
        var n = fs(),
          r = Ei.suspense;
        ((r = di((n = ps(n, e, r)), r)).tag = 2), void 0 !== t &&
          null !== t &&
          (r.callback = t), mi(e, r), ds(e, n);
      }
    };
    function Ti(e, t, n, r, o, i, a) {
      return "function" === typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, a)
        : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          (!$r(n, r) || !$r(o, i));
    }
    function Ci(e, t, n) {
      var r = !1,
        o = po,
        i = t.contextType;
      return "object" === typeof i && null !== i
        ? (i = li(i))
        : (
            (o = go(t) ? vo : ho.current),
            (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
              ? yo(e, o)
              : po)
          ), (t = new t(n, i)), (e.memoizedState =
        null !== t.state && void 0 !== t.state
          ? t.state
          : null), (t.updater = Ni), (e.stateNode = t), (t._reactInternalFiber = e), r &&
        (
          ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = i)
        ), t;
    }
    function ki(e, t, n, r) {
      (e = t.state), "function" === typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r), "function" ===
        typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e &&
        Ni.enqueueReplaceState(t, t.state, null);
    }
    function Oi(e, t, n, r) {
      var o = e.stateNode;
      (o.props = n), (o.state = e.memoizedState), (o.refs = Si);
      var i = t.contextType;
      "object" === typeof i && null !== i
        ? (o.context = li(i))
        : ((i = go(t) ? vo : ho.current), (o.context = yo(e, i))), null !==
        (i = e.updateQueue) &&
        (bi(e, i, n, o, r), (o.state = e.memoizedState)), "function" ===
        typeof (i = t.getDerivedStateFromProps) &&
        (xi(e, t, i, n), (o.state = e.memoizedState)), "function" ===
        typeof t.getDerivedStateFromProps ||
        "function" === typeof o.getSnapshotBeforeUpdate ||
        ("function" !== typeof o.UNSAFE_componentWillMount &&
          "function" !== typeof o.componentWillMount) ||
        (
          (t = o.state),
          "function" === typeof o.componentWillMount && o.componentWillMount(),
          "function" === typeof o.UNSAFE_componentWillMount &&
            o.UNSAFE_componentWillMount(),
          t !== o.state && Ni.enqueueReplaceState(o, o.state, null),
          null !== (i = e.updateQueue) &&
            (bi(e, i, n, o, r), (o.state = e.memoizedState))
        ), "function" === typeof o.componentDidMount && (e.effectTag |= 4);
    }
    var _i = Array.isArray;
    function Ri(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" !== typeof e &&
        "object" !== typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(a(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(a(147, e));
          var o = "" + e;
          return null !== t &&
          null !== t.ref &&
          "function" === typeof t.ref &&
          t.ref._stringRef === o
            ? t.ref
            : (
                ((t = function(e) {
                  var t = r.refs;
                  t === Si && (t = r.refs = {}), null === e
                    ? delete t[o]
                    : (t[o] = e);
                })._stringRef = o),
                t
              );
        }
        if ("string" !== typeof e) throw Error(a(284));
        if (!n._owner) throw Error(a(290, e));
      }
      return e;
    }
    function Pi(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          a(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function Ii(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function o(e, t, n) {
        return ((e = Vs(e, t)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (t.index = r), e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n ? ((t.effectTag = 2), n) : r
            : ((t.effectTag = 2), n)
          : n;
      }
      function u(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function s(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Hs(n, e.mode, r)).return = e), t)
          : (((t = o(t, n)).return = e), t);
      }
      function l(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = o(t, n.props)).ref = Ri(e, t, n)), (r.return = e), r)
          : (
              ((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = Ri(
                e,
                t,
                n
              )),
              (r.return = e),
              r
            );
      }
      function c(e, t, n, r) {
        return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
          ? (((t = Ws(n, e.mode, r)).return = e), t)
          : (((t = o(t, n.children || [])).return = e), t);
      }
      function f(e, t, n, r, i) {
        return null === t || 7 !== t.tag
          ? (((t = Qs(n, e.mode, r, i)).return = e), t)
          : (((t = o(t, n)).return = e), t);
      }
      function p(e, t, n) {
        if ("string" === typeof t || "number" === typeof t)
          return ((t = Hs("" + t, e.mode, n)).return = e), t;
        if ("object" === typeof t && null !== t) {
          switch (t.$$typeof) {
            case L:
              return ((n = zs(
                t.type,
                t.key,
                t.props,
                null,
                e.mode,
                n
              )).ref = Ri(e, null, t)), (n.return = e), n;
            case U:
              return ((t = Ws(t, e.mode, n)).return = e), t;
          }
          if (_i(t) || J(t))
            return ((t = Qs(t, e.mode, n, null)).return = e), t;
          Pi(e, t);
        }
        return null;
      }
      function d(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" === typeof n || "number" === typeof n)
          return null !== o ? null : s(e, t, "" + n, r);
        if ("object" === typeof n && null !== n) {
          switch (n.$$typeof) {
            case L:
              return n.key === o
                ? n.type === B ? f(e, t, n.props.children, r, o) : l(e, t, n, r)
                : null;
            case U:
              return n.key === o ? c(e, t, n, r) : null;
          }
          if (_i(n) || J(n)) return null !== o ? null : f(e, t, n, r, null);
          Pi(e, n);
        }
        return null;
      }
      function h(e, t, n, r, o) {
        if ("string" === typeof r || "number" === typeof r)
          return s(t, (e = e.get(n) || null), "" + r, o);
        if ("object" === typeof r && null !== r) {
          switch (r.$$typeof) {
            case L:
              return (e = e.get(null === r.key ? n : r.key) || null), r.type ===
              B
                ? f(t, e, r.props.children, o, r.key)
                : l(t, e, r, o);
            case U:
              return c(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                o
              );
          }
          if (_i(r) || J(r)) return f(t, (e = e.get(n) || null), r, o, null);
          Pi(t, r);
        }
        return null;
      }
      function m(o, a, u, s) {
        for (
          var l = null, c = null, f = a, m = (a = 0), v = null;
          null !== f && m < u.length;
          m++
        ) {
          f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
          var y = d(o, f, u[m], s);
          if (null === y) {
            null === f && (f = v);
            break;
          }
          e && f && null === y.alternate && t(o, f), (a = i(y, a, m)), null ===
          c
            ? (l = y)
            : (c.sibling = y), (c = y), (f = v);
        }
        if (m === u.length) return n(o, f), l;
        if (null === f) {
          for (; m < u.length; m++)
            null !== (f = p(o, u[m], s)) &&
              (
                (a = i(f, a, m)),
                null === c ? (l = f) : (c.sibling = f),
                (c = f)
              );
          return l;
        }
        for (f = r(o, f); m < u.length; m++)
          null !== (v = h(f, o, m, u[m], s)) &&
            (
              e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
              (a = i(v, a, m)),
              null === c ? (l = v) : (c.sibling = v),
              (c = v)
            );
        return e &&
          f.forEach(function(e) {
            return t(o, e);
          }), l;
      }
      function v(o, u, s, l) {
        var c = J(s);
        if ("function" !== typeof c) throw Error(a(150));
        if (null == (s = c.call(s))) throw Error(a(151));
        for (
          var f = (c = null), m = u, v = (u = 0), y = null, g = s.next();
          null !== m && !g.done;
          v++, g = s.next()
        ) {
          m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
          var b = d(o, m, g.value, l);
          if (null === b) {
            null === m && (m = y);
            break;
          }
          e && m && null === b.alternate && t(o, m), (u = i(b, u, v)), null ===
          f
            ? (c = b)
            : (f.sibling = b), (f = b), (m = y);
        }
        if (g.done) return n(o, m), c;
        if (null === m) {
          for (; !g.done; v++, g = s.next())
            null !== (g = p(o, g.value, l)) &&
              (
                (u = i(g, u, v)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g)
              );
          return c;
        }
        for (m = r(o, m); !g.done; v++, g = s.next())
          null !== (g = h(m, o, v, g.value, l)) &&
            (
              e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
              (u = i(g, u, v)),
              null === f ? (c = g) : (f.sibling = g),
              (f = g)
            );
        return e &&
          m.forEach(function(e) {
            return t(o, e);
          }), c;
      }
      return function(e, r, i, s) {
        var l =
          "object" === typeof i && null !== i && i.type === B && null === i.key;
        l && (i = i.props.children);
        var c = "object" === typeof i && null !== i;
        if (c)
          switch (i.$$typeof) {
            case L:
              e: {
                for (c = i.key, l = r; null !== l; ) {
                  if (l.key === c) {
                    if (7 === l.tag ? i.type === B : l.elementType === i.type) {
                      n(e, l.sibling), ((r = o(
                        l,
                        i.type === B ? i.props.children : i.props
                      )).ref = Ri(e, l, i)), (r.return = e), (e = r);
                      break e;
                    }
                    n(e, l);
                    break;
                  }
                  t(e, l), (l = l.sibling);
                }
                i.type === B
                  ? (
                      ((r = Qs(i.props.children, e.mode, s, i.key)).return = e),
                      (e = r)
                    )
                  : (
                      ((s = zs(
                        i.type,
                        i.key,
                        i.props,
                        null,
                        e.mode,
                        s
                      )).ref = Ri(e, r, i)),
                      (s.return = e),
                      (e = s)
                    );
              }
              return u(e);
            case U:
              e: {
                for (l = i.key; null !== r; ) {
                  if (r.key === l) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      n(e, r.sibling), ((r = o(
                        r,
                        i.children || []
                      )).return = e), (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Ws(i, e.mode, s)).return = e), (e = r);
              }
              return u(e);
          }
        if ("string" === typeof i || "number" === typeof i)
          return (i = "" + i), null !== r && 6 === r.tag
            ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
            : (n(e, r), ((r = Hs(i, e.mode, s)).return = e), (e = r)), u(e);
        if (_i(i)) return m(e, r, i, s);
        if (J(i)) return v(e, r, i, s);
        if ((c && Pi(e, i), "undefined" === typeof i && !l))
          switch (e.tag) {
            case 1:
            case 0:
              throw (
                (e = e.type),
                Error(a(152, e.displayName || e.name || "Component"))
              );
          }
        return n(e, r);
      };
    }
    var Di = Ii(!0),
      Li = Ii(!1),
      Ui = {},
      Bi = { current: Ui },
      Fi = { current: Ui },
      Mi = { current: Ui };
    function ji(e) {
      if (e === Ui) throw Error(a(174));
      return e;
    }
    function Vi(e, t) {
      fo(Mi, t), fo(Fi, e), fo(Bi, Ui);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Me(null, "");
          break;
        default:
          t = Me(
            (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
            (n = n.tagName)
          );
      }
      co(Bi), fo(Bi, t);
    }
    function zi(e) {
      co(Bi), co(Fi), co(Mi);
    }
    function Qi(e) {
      ji(Mi.current);
      var t = ji(Bi.current),
        n = Me(t, e.type);
      t !== n && (fo(Fi, e), fo(Bi, n));
    }
    function Hi(e) {
      Fi.current === e && (co(Bi), co(Fi));
    }
    var Wi = { current: 0 };
    function qi(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || n.data === Jn || n.data === Xn)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 !== (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Gi(e, t) {
      return { responder: e, props: t };
    }
    var Yi = P.ReactCurrentDispatcher,
      Ji = P.ReactCurrentBatchConfig,
      Xi = 0,
      Ki = null,
      Zi = null,
      $i = null,
      ea = null,
      ta = null,
      na = null,
      ra = 0,
      oa = null,
      ia = 0,
      aa = !1,
      ua = null,
      sa = 0;
    function la() {
      throw Error(a(321));
    }
    function ca(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Kr(e[n], t[n])) return !1;
      return !0;
    }
    function fa(e, t, n, r, o, i) {
      if (
        (
          (Xi = i),
          (Ki = t),
          ($i = null !== e ? e.memoizedState : null),
          (Yi.current = null === $i ? _a : Ra),
          (t = n(r, o)),
          aa
        )
      ) {
        do {
          (aa = !1), (sa += 1), ($i =
            null !== e
              ? e.memoizedState
              : null), (na = ea), (oa = ta = Zi = null), (Yi.current = Ra), (t = n(
            r,
            o
          ));
        } while (aa);
        (ua = null), (sa = 0);
      }
      if (
        (
          (Yi.current = Oa),
          ((e = Ki).memoizedState = ea),
          (e.expirationTime = ra),
          (e.updateQueue = oa),
          (e.effectTag |= ia),
          (e = null !== Zi && null !== Zi.next),
          (Xi = 0),
          (na = ta = ea = $i = Zi = Ki = null),
          (ra = 0),
          (oa = null),
          (ia = 0),
          e
        )
      )
        throw Error(a(300));
      return t;
    }
    function pa() {
      (Yi.current = Oa), (Xi = 0), (na = ta = ea = $i = Zi = Ki = null), (ra = 0), (oa = null), (ia = 0), (aa = !1), (ua = null), (sa = 0);
    }
    function da() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null
      };
      return null === ta ? (ea = ta = e) : (ta = ta.next = e), ta;
    }
    function ha() {
      if (null !== na)
        (na = (ta = na).next), ($i = null !== (Zi = $i) ? Zi.next : null);
      else {
        if (null === $i) throw Error(a(310));
        var e = {
          memoizedState: (Zi = $i).memoizedState,
          baseState: Zi.baseState,
          queue: Zi.queue,
          baseUpdate: Zi.baseUpdate,
          next: null
        };
        (ta = null === ta ? (ea = e) : (ta.next = e)), ($i = Zi.next);
      }
      return ta;
    }
    function ma(e, t) {
      return "function" === typeof t ? t(e) : t;
    }
    function va(e) {
      var t = ha(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      if (((n.lastRenderedReducer = e), 0 < sa)) {
        var r = n.dispatch;
        if (null !== ua) {
          var o = ua.get(n);
          if (void 0 !== o) {
            ua.delete(n);
            var i = t.memoizedState;
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (null !== o);
            return Kr(i, t.memoizedState) ||
              (za = !0), (t.memoizedState = i), t.baseUpdate === n.last &&
              (t.baseState = i), (n.lastRenderedState = i), [i, r];
          }
        }
        return [t.memoizedState, r];
      }
      r = n.last;
      var u = t.baseUpdate;
      if (
        (
          (i = t.baseState),
          null !== u
            ? (null !== r && (r.next = null), (r = u.next))
            : (r = null !== r ? r.next : null),
          null !== r
        )
      ) {
        var s = (o = null),
          l = r,
          c = !1;
        do {
          var f = l.expirationTime;
          f < Xi
            ? (c || ((c = !0), (s = u), (o = i)), f > ra && xs((ra = f)))
            : (
                Ss(f, l.suspenseConfig),
                (i = l.eagerReducer === e ? l.eagerState : e(i, l.action))
              ), (u = l), (l = l.next);
        } while (null !== l && l !== r);
        c || ((s = u), (o = i)), Kr(i, t.memoizedState) ||
          (za = !0), (t.memoizedState = i), (t.baseUpdate = s), (t.baseState = o), (n.lastRenderedState = i);
      }
      return [t.memoizedState, n.dispatch];
    }
    function ya(e) {
      var t = da();
      return "function" === typeof e &&
        (e = e()), (t.memoizedState = t.baseState = e), (e = (e = t.queue = {
        last: null,
        dispatch: null,
        lastRenderedReducer: ma,
        lastRenderedState: e
      }).dispatch = ka.bind(null, Ki, e)), [t.memoizedState, e];
    }
    function ga(e) {
      return va(ma);
    }
    function ba(e, t, n, r) {
      return (e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
      }), null === oa
        ? ((oa = { lastEffect: null }).lastEffect = e.next = e)
        : null === (t = oa.lastEffect)
          ? (oa.lastEffect = e.next = e)
          : ((n = t.next), (t.next = e), (e.next = n), (oa.lastEffect = e)), e;
    }
    function wa(e, t, n, r) {
      var o = da();
      (ia |= e), (o.memoizedState = ba(t, n, void 0, void 0 === r ? null : r));
    }
    function Aa(e, t, n, r) {
      var o = ha();
      r = void 0 === r ? null : r;
      var i = void 0;
      if (null !== Zi) {
        var a = Zi.memoizedState;
        if (((i = a.destroy), null !== r && ca(r, a.deps)))
          return void ba(0, n, i, r);
      }
      (ia |= e), (o.memoizedState = ba(t, n, i, r));
    }
    function Ea(e, t) {
      return wa(516, 192, e, t);
    }
    function Sa(e, t) {
      return Aa(516, 192, e, t);
    }
    function xa(e, t) {
      return "function" === typeof t
        ? (
            (e = e()),
            t(e),
            function() {
              t(null);
            }
          )
        : null !== t && void 0 !== t
          ? (
              (e = e()),
              (t.current = e),
              function() {
                t.current = null;
              }
            )
          : void 0;
    }
    function Na() {}
    function Ta(e, t) {
      return (da().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function Ca(e, t) {
      var n = ha();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && ca(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function ka(e, t, n) {
      if (!(25 > sa)) throw Error(a(301));
      var r = e.alternate;
      if (e === Ki || (null !== r && r === Ki))
        if (
          (
            (aa = !0),
            (e = {
              expirationTime: Xi,
              suspenseConfig: null,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null
            }),
            null === ua && (ua = new Map()),
            void 0 === (n = ua.get(t))
          )
        )
          ua.set(t, e);
        else {
          for (t = n; null !== t.next; ) t = t.next;
          t.next = e;
        }
      else {
        var o = fs(),
          i = Ei.suspense;
        i = {
          expirationTime: (o = ps(o, e, i)),
          suspenseConfig: i,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null
        };
        var u = t.last;
        if (null === u) i.next = i;
        else {
          var s = u.next;
          null !== s && (i.next = s), (u.next = i);
        }
        if (
          (
            (t.last = i),
            0 === e.expirationTime &&
              (null === r || 0 === r.expirationTime) &&
              null !== (r = t.lastRenderedReducer)
          )
        )
          try {
            var l = t.lastRenderedState,
              c = r(l, n);
            if (((i.eagerReducer = r), (i.eagerState = c), Kr(c, l))) return;
          } catch (e) {}
        ds(e, o);
      }
    }
    var Oa = {
        readContext: li,
        useCallback: la,
        useContext: la,
        useEffect: la,
        useImperativeHandle: la,
        useLayoutEffect: la,
        useMemo: la,
        useReducer: la,
        useRef: la,
        useState: la,
        useDebugValue: la,
        useResponder: la,
        useDeferredValue: la,
        useTransition: la
      },
      _a = {
        readContext: li,
        useCallback: Ta,
        useContext: li,
        useEffect: Ea,
        useImperativeHandle: function(e, t, n) {
          return (n = null !== n && void 0 !== n ? n.concat([e]) : null), wa(
            4,
            36,
            xa.bind(null, t, e),
            n
          );
        },
        useLayoutEffect: function(e, t) {
          return wa(4, 36, e, t);
        },
        useMemo: function(e, t) {
          var n = da();
          return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [
            e,
            t
          ]), e;
        },
        useReducer: function(e, t, n) {
          var r = da();
          return (t =
            void 0 !== n
              ? n(t)
              : t), (r.memoizedState = r.baseState = t), (e = (e = r.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }).dispatch = ka.bind(null, Ki, e)), [r.memoizedState, e];
        },
        useRef: function(e) {
          return (e = { current: e }), (da().memoizedState = e);
        },
        useState: ya,
        useDebugValue: Na,
        useResponder: Gi,
        useDeferredValue: function(e, t) {
          var n = ya(e),
            r = n[0],
            o = n[1];
          return Ea(
            function() {
              i.unstable_next(function() {
                var n = Ji.suspense;
                Ji.suspense = void 0 === t ? null : t;
                try {
                  o(e);
                } finally {
                  Ji.suspense = n;
                }
              });
            },
            [e, t]
          ), r;
        },
        useTransition: function(e) {
          var t = ya(!1),
            n = t[0],
            r = t[1];
          return [
            Ta(
              function(t) {
                r(!0), i.unstable_next(function() {
                  var n = Ji.suspense;
                  Ji.suspense = void 0 === e ? null : e;
                  try {
                    r(!1), t();
                  } finally {
                    Ji.suspense = n;
                  }
                });
              },
              [e, n]
            ),
            n
          ];
        }
      },
      Ra = {
        readContext: li,
        useCallback: Ca,
        useContext: li,
        useEffect: Sa,
        useImperativeHandle: function(e, t, n) {
          return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Aa(
            4,
            36,
            xa.bind(null, t, e),
            n
          );
        },
        useLayoutEffect: function(e, t) {
          return Aa(4, 36, e, t);
        },
        useMemo: function(e, t) {
          var n = ha();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ca(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: va,
        useRef: function() {
          return ha().memoizedState;
        },
        useState: ga,
        useDebugValue: Na,
        useResponder: Gi,
        useDeferredValue: function(e, t) {
          var n = ga(),
            r = n[0],
            o = n[1];
          return Sa(
            function() {
              i.unstable_next(function() {
                var n = Ji.suspense;
                Ji.suspense = void 0 === t ? null : t;
                try {
                  o(e);
                } finally {
                  Ji.suspense = n;
                }
              });
            },
            [e, t]
          ), r;
        },
        useTransition: function(e) {
          var t = ga(),
            n = t[0],
            r = t[1];
          return [
            Ca(
              function(t) {
                r(!0), i.unstable_next(function() {
                  var n = Ji.suspense;
                  Ji.suspense = void 0 === e ? null : e;
                  try {
                    r(!1), t();
                  } finally {
                    Ji.suspense = n;
                  }
                });
              },
              [e, n]
            ),
            n
          ];
        }
      },
      Pa = null,
      Ia = null,
      Da = !1;
    function La(e, t) {
      var n = Ms(5, null, null, 0);
      (n.elementType = "DELETED"), (n.type =
        "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !==
      e.lastEffect
        ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
        : (e.firstEffect = e.lastEffect = n);
    }
    function Ua(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function Ba(e) {
      if (Da) {
        var t = Ia;
        if (t) {
          var n = t;
          if (!Ua(e, t)) {
            if (!(t = rr(n.nextSibling)) || !Ua(e, t))
              return (e.effectTag =
                (-1025 & e.effectTag) | 2), (Da = !1), void (Pa = e);
            La(Pa, n);
          }
          (Pa = e), (Ia = rr(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Da = !1), (Pa = e);
      }
    }
    function Fa(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      Pa = e;
    }
    function Ma(e) {
      if (e !== Pa) return !1;
      if (!Da) return Fa(e), (Da = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ("head" !== t && "body" !== t && !er(t, e.memoizedProps))
      )
        for (t = Ia; t; ) La(e, t), (t = rr(t.nextSibling));
      if ((Fa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(a(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (n === Yn) {
                if (0 === t) {
                  Ia = rr(e.nextSibling);
                  break e;
                }
                t--;
              } else (n !== Gn && n !== Xn && n !== Jn) || t++;
            }
            e = e.nextSibling;
          }
          Ia = null;
        }
      } else Ia = Pa ? rr(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ja() {
      (Ia = Pa = null), (Da = !1);
    }
    var Va = P.ReactCurrentOwner,
      za = !1;
    function Qa(e, t, n, r) {
      t.child = null === e ? Li(t, null, n, r) : Di(t, e.child, n, r);
    }
    function Ha(e, t, n, r, o) {
      n = n.render;
      var i = t.ref;
      return si(t, o), (r = fa(e, t, n, r, i, o)), null === e || za
        ? ((t.effectTag |= 1), Qa(e, t, r, o), t.child)
        : (
            (t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            uu(e, t, o)
          );
    }
    function Wa(e, t, n, r, o, i) {
      if (null === e) {
        var a = n.type;
        return "function" !== typeof a ||
        js(a) ||
        void 0 !== a.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
          ? (
              ((e = zs(n.type, null, r, null, t.mode, i)).ref = t.ref),
              (e.return = t),
              (t.child = e)
            )
          : ((t.tag = 15), (t.type = a), qa(e, t, a, r, o, i));
      }
      return (a = e.child), o < i &&
      (
        (o = a.memoizedProps),
        (n = null !== (n = n.compare) ? n : $r)(o, r) && e.ref === t.ref
      )
        ? uu(e, t, i)
        : (
            (t.effectTag |= 1),
            ((e = Vs(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
    }
    function qa(e, t, n, r, o, i) {
      return null !== e &&
      $r(e.memoizedProps, r) &&
      e.ref === t.ref &&
      ((za = !1), o < i)
        ? uu(e, t, i)
        : Ya(e, t, n, r, i);
    }
    function Ga(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Ya(e, t, n, r, o) {
      var i = go(n) ? vo : ho.current;
      return (i = yo(t, i)), si(t, o), (n = fa(e, t, n, r, i, o)), null === e ||
      za
        ? ((t.effectTag |= 1), Qa(e, t, n, o), t.child)
        : (
            (t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            uu(e, t, o)
          );
    }
    function Ja(e, t, n, r, o) {
      if (go(n)) {
        var i = !0;
        So(t);
      } else i = !1;
      if ((si(t, o), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), Ci(
          t,
          n,
          r
        ), Oi(t, n, r, o), (r = !0);
      else if (null === e) {
        var a = t.stateNode,
          u = t.memoizedProps;
        a.props = u;
        var s = a.context,
          l = n.contextType;
        "object" === typeof l && null !== l
          ? (l = li(l))
          : (l = yo(t, (l = go(n) ? vo : ho.current)));
        var c = n.getDerivedStateFromProps,
          f =
            "function" === typeof c ||
            "function" === typeof a.getSnapshotBeforeUpdate;
        f ||
          ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
            "function" !== typeof a.componentWillReceiveProps) ||
          ((u !== r || s !== l) && ki(t, a, r, l)), (ci = !1);
        var p = t.memoizedState;
        s = a.state = p;
        var d = t.updateQueue;
        null !== d && (bi(t, d, r, a, o), (s = t.memoizedState)), u !== r ||
        p !== s ||
        mo.current ||
        ci
          ? (
              "function" === typeof c &&
                (xi(t, n, c, r), (s = t.memoizedState)),
              (u = ci || Ti(t, n, u, r, p, s, l))
                ? (
                    f ||
                      ("function" !== typeof a.UNSAFE_componentWillMount &&
                        "function" !== typeof a.componentWillMount) ||
                      (
                        "function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()
                      ),
                    "function" === typeof a.componentDidMount &&
                      (t.effectTag |= 4)
                  )
                : (
                    "function" === typeof a.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)
                  ),
              (a.props = r),
              (a.state = s),
              (a.context = l),
              (r = u)
            )
          : (
              "function" === typeof a.componentDidMount && (t.effectTag |= 4),
              (r = !1)
            );
      } else
        (a = t.stateNode), (u = t.memoizedProps), (a.props =
          t.type === t.elementType ? u : $o(t.type, u)), (s =
          a.context), "object" === typeof (l = n.contextType) && null !== l
          ? (l = li(l))
          : (l = yo(t, (l = go(n) ? vo : ho.current))), (f =
          "function" === typeof (c = n.getDerivedStateFromProps) ||
          "function" === typeof a.getSnapshotBeforeUpdate) ||
          ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
            "function" !== typeof a.componentWillReceiveProps) ||
          ((u !== r || s !== l) && ki(t, a, r, l)), (ci = !1), (s =
          t.memoizedState), (p = a.state = s), null !== (d = t.updateQueue) &&
          (bi(t, d, r, a, o), (p = t.memoizedState)), u !== r ||
        s !== p ||
        mo.current ||
        ci
          ? (
              "function" === typeof c &&
                (xi(t, n, c, r), (p = t.memoizedState)),
              (c = ci || Ti(t, n, u, r, s, p, l))
                ? (
                    f ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      (
                        "function" === typeof a.componentWillUpdate &&
                          a.componentWillUpdate(r, p, l),
                        "function" === typeof a.UNSAFE_componentWillUpdate &&
                          a.UNSAFE_componentWillUpdate(r, p, l)
                      ),
                    "function" === typeof a.componentDidUpdate &&
                      (t.effectTag |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256)
                  )
                : (
                    "function" !== typeof a.componentDidUpdate ||
                      (u === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)
                  ),
              (a.props = r),
              (a.state = p),
              (a.context = l),
              (r = c)
            )
          : (
              "function" !== typeof a.componentDidUpdate ||
                (u === e.memoizedProps && s === e.memoizedState) ||
                (t.effectTag |= 4),
              "function" !== typeof a.getSnapshotBeforeUpdate ||
                (u === e.memoizedProps && s === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1)
            );
      return Xa(e, t, n, r, i, o);
    }
    function Xa(e, t, n, r, o, i) {
      Ga(e, t);
      var a = 0 !== (64 & t.effectTag);
      if (!r && !a) return o && xo(t, n, !1), uu(e, t, i);
      (r = t.stateNode), (Va.current = t);
      var u =
        a && "function" !== typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (t.effectTag |= 1), null !== e && a
        ? ((t.child = Di(t, e.child, null, i)), (t.child = Di(t, null, u, i)))
        : Qa(e, t, u, i), (t.memoizedState = r.state), o &&
        xo(t, n, !0), t.child;
    }
    function Ka(e) {
      var t = e.stateNode;
      t.pendingContext
        ? Ao(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ao(0, t.context, !1), Vi(e, t.containerInfo);
    }
    var Za,
      $a,
      eu,
      tu,
      nu = { dehydrated: null, retryTime: 0 };
    function ru(e, t, n) {
      var r,
        o = t.mode,
        i = t.pendingProps,
        a = Wi.current,
        u = !1;
      if (
        (
          (r = 0 !== (64 & t.effectTag)) ||
            (r = 0 !== (2 & a) && (null === e || null !== e.memoizedState)),
          r
            ? ((u = !0), (t.effectTag &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === i.fallback ||
              !0 === i.unstable_avoidThisFallback ||
              (a |= 1),
          fo(Wi, 1 & a),
          null === e
        )
      ) {
        if ((void 0 !== i.fallback && Ba(t), u)) {
          if (
            (
              (u = i.fallback),
              ((i = Qs(null, o, 0, null)).return = t),
              0 === (2 & t.mode)
            )
          )
            for (
              e =
                null !== t.memoizedState ? t.child.child : t.child, i.child = e;
              null !== e;

            )
              (e.return = i), (e = e.sibling);
          return ((n = Qs(
            u,
            o,
            n,
            null
          )).return = t), (i.sibling = n), (t.memoizedState = nu), (t.child = i), n;
        }
        return (o = i.children), (t.memoizedState = null), (t.child = Li(
          t,
          null,
          o,
          n
        ));
      }
      if (null !== e.memoizedState) {
        if (((o = (e = e.child).sibling), u)) {
          if (
            (
              (i = i.fallback),
              ((n = Vs(e, e.pendingProps)).return = t),
              0 === (2 & t.mode) &&
                (u = null !== t.memoizedState ? t.child.child : t.child) !==
                  e.child
            )
          )
            for (n.child = u; null !== u; ) (u.return = n), (u = u.sibling);
          return ((o = Vs(
            o,
            i,
            o.expirationTime
          )).return = t), (n.sibling = o), (n.childExpirationTime = 0), (t.memoizedState = nu), (t.child = n), o;
        }
        return (n = Di(
          t,
          e.child,
          i.children,
          n
        )), (t.memoizedState = null), (t.child = n);
      }
      if (((e = e.child), u)) {
        if (
          (
            (u = i.fallback),
            ((i = Qs(null, o, 0, null)).return = t),
            (i.child = e),
            null !== e && (e.return = i),
            0 === (2 & t.mode)
          )
        )
          for (
            e = null !== t.memoizedState ? t.child.child : t.child, i.child = e;
            null !== e;

          )
            (e.return = i), (e = e.sibling);
        return ((n = Qs(
          u,
          o,
          n,
          null
        )).return = t), (i.sibling = n), (n.effectTag |= 2), (i.childExpirationTime = 0), (t.memoizedState = nu), (t.child = i), n;
      }
      return (t.memoizedState = null), (t.child = Di(t, e, i.children, n));
    }
    function ou(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t), ui(
        e.return,
        t
      );
    }
    function iu(e, t, n, r, o, i) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: o,
            lastEffect: i
          })
        : (
            (a.isBackwards = t),
            (a.rendering = null),
            (a.last = r),
            (a.tail = n),
            (a.tailExpiration = 0),
            (a.tailMode = o),
            (a.lastEffect = i)
          );
    }
    function au(e, t, n) {
      var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
      if ((Qa(e, t, r.children, n), 0 !== (2 & (r = Wi.current))))
        (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 !== (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && ou(e, n);
            else if (19 === e.tag) ou(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((fo(Wi, r), 0 === (2 & t.mode))) t.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (n = t.child, o = null; null !== n; )
              null !== (e = n.alternate) && null === qi(e) && (o = n), (n =
                n.sibling);
            null === (n = o)
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)), iu(
              t,
              !1,
              o,
              n,
              i,
              t.lastEffect
            );
            break;
          case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === qi(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = n), (n = o), (o = e);
            }
            iu(t, !0, n, null, i, t.lastEffect);
            break;
          case "together":
            iu(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function uu(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var r = t.expirationTime;
      if ((0 !== r && xs(r), t.childExpirationTime < n)) return null;
      if (null !== e && t.child !== e.child) throw Error(a(153));
      if (null !== t.child) {
        for (
          n = Vs(
            (e = t.child),
            e.pendingProps,
            e.expirationTime
          ), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = Vs(
            e,
            e.pendingProps,
            e.expirationTime
          )).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function su(e) {
      e.effectTag |= 4;
    }
    function lu(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function cu(e) {
      switch (e.tag) {
        case 1:
          go(e.type) && bo();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((zi(), wo(), 0 !== (64 & (t = e.effectTag)))) throw Error(a(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return Hi(e), null;
        case 13:
          return co(Wi), 4096 & (t = e.effectTag)
            ? ((e.effectTag = (-4097 & t) | 64), e)
            : null;
        case 19:
          return co(Wi), null;
        case 4:
          return zi(), null;
        case 10:
          return ai(e), null;
        default:
          return null;
      }
    }
    function fu(e, t) {
      return { value: e, source: t, stack: K(t) };
    }
    (Za = function(e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }), ($a = function() {}), (eu = function(e, t, n, r, i) {
      var a = e.memoizedProps;
      if (a !== r) {
        var u,
          s,
          l = t.stateNode;
        switch ((ji(Bi.current), (e = null), n)) {
          case "input":
            (a = Ne(l, a)), (r = Ne(l, r)), (e = []);
            break;
          case "option":
            (a = Re(l, a)), (r = Re(l, r)), (e = []);
            break;
          case "select":
            (a = o({}, a, { value: void 0 })), (r = o({}, r, {
              value: void 0
            })), (e = []);
            break;
          case "textarea":
            (a = Ie(l, a)), (r = Ie(l, r)), (e = []);
            break;
          default:
            "function" !== typeof a.onClick &&
              "function" === typeof r.onClick &&
              (l.onclick = Vn);
        }
        for (u in (Fn(n, r), (n = null), a))
          if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
            if ("style" === u)
              for (s in (l = a[u]))
                l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            else
              "dangerouslySetInnerHTML" !== u &&
                "children" !== u &&
                "suppressContentEditableWarning" !== u &&
                "suppressHydrationWarning" !== u &&
                "autoFocus" !== u &&
                (d.hasOwnProperty(u)
                  ? e || (e = [])
                  : (e = e || []).push(u, null));
        for (u in r) {
          var c = r[u];
          if (
            (
              (l = null != a ? a[u] : void 0),
              r.hasOwnProperty(u) && c !== l && (null != c || null != l)
            )
          )
            if ("style" === u)
              if (l) {
                for (s in l)
                  !l.hasOwnProperty(s) ||
                    (c && c.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in c)
                  c.hasOwnProperty(s) &&
                    l[s] !== c[s] &&
                    (n || (n = {}), (n[s] = c[s]));
              } else n || (e || (e = []), e.push(u, n)), (n = c);
            else
              "dangerouslySetInnerHTML" === u
                ? (
                    (c = c ? c.__html : void 0),
                    (l = l ? l.__html : void 0),
                    null != c && l !== c && (e = e || []).push(u, "" + c)
                  )
                : "children" === u
                  ? l === c ||
                    ("string" !== typeof c && "number" !== typeof c) ||
                    (e = e || []).push(u, "" + c)
                  : "suppressContentEditableWarning" !== u &&
                    "suppressHydrationWarning" !== u &&
                    (d.hasOwnProperty(u)
                      ? (null != c && jn(i, u), e || l === c || (e = []))
                      : (e = e || []).push(u, c));
        }
        n && (e = e || []).push("style", n), (i = e), (t.updateQueue = i) &&
          su(t);
      }
    }), (tu = function(e, t, n, r) {
      n !== r && su(t);
    });
    var pu = "function" === typeof WeakSet ? WeakSet : Set;
    function du(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = K(n)), null !== n && X(n.type), (t =
        t.value), null !== e && 1 === e.tag && X(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function hu(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" === typeof t)
          try {
            t(null);
          } catch (t) {
            Ls(e, t);
          }
        else t.current = null;
    }
    function mu(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vu(2, 0, t);
          break;
        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : $o(t.type, n),
              r
            )), (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          break;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(a(163));
      }
    }
    function vu(e, t, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var r = (n = n.next);
        do {
          if (0 !== (r.tag & e)) {
            var o = r.destroy;
            (r.destroy = void 0), void 0 !== o && o();
          }
          0 !== (r.tag & t) && ((o = r.create), (r.destroy = o())), (r =
            r.next);
        } while (r !== n);
      }
    }
    function yu(e, t, n) {
      switch (("function" === typeof Fs && Fs(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            qo(97 < n ? 97 : n, function() {
              var e = r;
              do {
                var n = e.destroy;
                if (void 0 !== n) {
                  var o = t;
                  try {
                    n();
                  } catch (e) {
                    Ls(o, e);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          hu(t), "function" === typeof (n = t.stateNode).componentWillUnmount &&
            (function(e, t) {
              try {
                (t.props = e.memoizedProps), (t.state =
                  e.memoizedState), t.componentWillUnmount();
              } catch (t) {
                Ls(e, t);
              }
            })(t, n);
          break;
        case 5:
          hu(t);
          break;
        case 4:
          Au(e, t, n);
      }
    }
    function gu(e) {
      var t = e.alternate;
      (e.return = null), (e.child = null), (e.memoizedState = null), (e.updateQueue = null), (e.dependencies = null), (e.alternate = null), (e.firstEffect = null), (e.lastEffect = null), (e.pendingProps = null), (e.memoizedProps = null), null !==
        t && gu(t);
    }
    function bu(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function wu(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (bu(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(a(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(a(161));
      }
      16 & n.effectTag && (ze(t, ""), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || bu(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      for (var o = e; ; ) {
        var i = 5 === o.tag || 6 === o.tag;
        if (i) {
          var u = i ? o.stateNode : o.stateNode.instance;
          if (n)
            if (r) {
              var s = u;
              (u = n), 8 === (i = t).nodeType
                ? i.parentNode.insertBefore(s, u)
                : i.insertBefore(s, u);
            } else t.insertBefore(u, n);
          else
            r
              ? (
                  8 === (s = t).nodeType
                    ? (i = s.parentNode).insertBefore(u, s)
                    : (i = s).appendChild(u),
                  (null !== (s = s._reactRootContainer) && void 0 !== s) ||
                    null !== i.onclick ||
                    (i.onclick = Vn)
                )
              : t.appendChild(u);
        } else if (4 !== o.tag && null !== o.child) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === e) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === e) return;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    function Au(e, t, n) {
      for (var r, o, i = t, u = !1; ; ) {
        if (!u) {
          u = i.return;
          e: for (;;) {
            if (null === u) throw Error(a(160));
            switch (((r = u.stateNode), u.tag)) {
              case 5:
                o = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (o = !0);
                break e;
            }
            u = u.return;
          }
          u = !0;
        }
        if (5 === i.tag || 6 === i.tag) {
          e: for (var s = e, l = i, c = n, f = l; ; )
            if ((yu(s, f, c), null !== f.child && 4 !== f.tag))
              (f.child.return = f), (f = f.child);
            else {
              if (f === l) break;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === l) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
          o
            ? (
                (s = r),
                (l = i.stateNode),
                8 === s.nodeType
                  ? s.parentNode.removeChild(l)
                  : s.removeChild(l)
              )
            : r.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (r =
              i.stateNode.containerInfo), (o = !0), (i.child.return = i), (i =
              i.child);
            continue;
          }
        } else if ((yu(e, i, n), null !== i.child)) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === t) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === t) return;
          4 === (i = i.return).tag && (u = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function Eu(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vu(4, 8, t);
          break;
        case 1:
          break;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps,
              o = null !== e ? e.memoizedProps : r;
            e = t.type;
            var i = t.updateQueue;
            if (((t.updateQueue = null), null !== i)) {
              for (
                n[ur] = r, "input" === e &&
                  "radio" === r.type &&
                  null != r.name &&
                  Ce(n, r), Mn(e, o), t = Mn(e, r), o = 0;
                o < i.length;
                o += 2
              ) {
                var u = i[o],
                  s = i[o + 1];
                "style" === u
                  ? Un(n, s)
                  : "dangerouslySetInnerHTML" === u
                    ? Ve(n, s)
                    : "children" === u ? ze(n, s) : Ae(n, u, s, t);
              }
              switch (e) {
                case "input":
                  ke(n, r);
                  break;
                case "textarea":
                  Le(n, r);
                  break;
                case "select":
                  (t =
                    n._wrapperState
                      .wasMultiple), (n._wrapperState.wasMultiple = !!r.multiple), null !=
                  (e = r.value)
                    ? Pe(n, !!r.multiple, e, !1)
                    : t !== !!r.multiple &&
                      (null != r.defaultValue
                        ? Pe(n, !!r.multiple, r.defaultValue, !0)
                        : Pe(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          break;
        case 6:
          if (null === t.stateNode) throw Error(a(162));
          t.stateNode.nodeValue = t.memoizedProps;
          break;
        case 3:
          (t = t.stateNode).hydrate && ((t.hydrate = !1), xt(t.containerInfo));
          break;
        case 12:
          break;
        case 13:
          if (
            (
              (n = t),
              null === t.memoizedState
                ? (r = !1)
                : ((r = !0), (n = t.child), (Zu = Qo())),
              null !== n
            )
          )
            e: for (e = n; ; ) {
              if (5 === e.tag)
                (i = e.stateNode), r
                  ? "function" === typeof (i = i.style).setProperty
                    ? i.setProperty("display", "none", "important")
                    : (i.display = "none")
                  : (
                      (i = e.stateNode),
                      (o =
                        void 0 !== (o = e.memoizedProps.style) &&
                        null !== o &&
                        o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (i.style.display = Ln("display", o))
                    );
              else if (6 === e.tag)
                e.stateNode.nodeValue = r ? "" : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((i = e.child.sibling).return = e), (e = i);
                  continue;
                }
                if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          Su(t);
          break;
        case 19:
          Su(t);
          break;
        case 17:
        case 20:
        case 21:
          break;
        default:
          throw Error(a(163));
      }
    }
    function Su(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new pu()), t.forEach(function(t) {
          var r = function(e, t) {
            var n = e.stateNode;
            null !== n && n.delete(t), 0 === (t = 0) &&
              (t = ps((t = fs()), e, null)), null !== (e = hs(e, t)) && vs(e);
          }.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
      }
    }
    var xu = "function" === typeof WeakMap ? WeakMap : Map;
    function Nu(e, t, n) {
      ((n = di(n, null)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (n.callback = function() {
        ts || ((ts = !0), (ns = r)), du(e, t);
      }), n;
    }
    function Tu(e, t, n) {
      (n = di(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" === typeof r) {
        var o = t.value;
        n.payload = function() {
          return du(e, t), r(o);
        };
      }
      var i = e.stateNode;
      return null !== i &&
        "function" === typeof i.componentDidCatch &&
        (n.callback = function() {
          "function" !== typeof r &&
            (null === rs ? (rs = new Set([this])) : rs.add(this), du(e, t));
          var n = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== n ? n : ""
          });
        }), n;
    }
    var Cu,
      ku = Math.ceil,
      Ou = P.ReactCurrentDispatcher,
      _u = P.ReactCurrentOwner,
      Ru = 0,
      Pu = 8,
      Iu = 16,
      Du = 32,
      Lu = 0,
      Uu = 1,
      Bu = 2,
      Fu = 3,
      Mu = 4,
      ju = 5,
      Vu = Ru,
      zu = null,
      Qu = null,
      Hu = 0,
      Wu = Lu,
      qu = null,
      Gu = 1073741823,
      Yu = 1073741823,
      Ju = null,
      Xu = 0,
      Ku = !1,
      Zu = 0,
      $u = 500,
      es = null,
      ts = !1,
      ns = null,
      rs = null,
      os = !1,
      is = null,
      as = 90,
      us = null,
      ss = 0,
      ls = null,
      cs = 0;
    function fs() {
      return (Vu & (Iu | Du)) !== Ru
        ? 1073741821 - ((Qo() / 10) | 0)
        : 0 !== cs ? cs : (cs = 1073741821 - ((Qo() / 10) | 0));
    }
    function ps(e, t, n) {
      if (0 === (2 & (t = t.mode))) return 1073741823;
      var r = Ho();
      if (0 === (4 & t)) return 99 === r ? 1073741823 : 1073741822;
      if ((Vu & Iu) !== Ru) return Hu;
      if (null !== n) e = Zo(e, 0 | n.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = Zo(e, 150, 100);
            break;
          case 97:
          case 96:
            e = Zo(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(a(326));
        }
      return null !== zu && e === Hu && --e, e;
    }
    function ds(e, t) {
      if (50 < ss) throw ((ss = 0), (ls = null), Error(a(185)));
      if (null !== (e = hs(e, t))) {
        var n = Ho();
        1073741823 === t
          ? (Vu & Pu) !== Ru && (Vu & (Iu | Du)) === Ru
            ? ys(e)
            : (vs(e), Vu === Ru && Jo())
          : vs(e), (4 & Vu) === Ru ||
          (98 !== n && 99 !== n) ||
          (null === us
            ? (us = new Map([[e, t]]))
            : (void 0 === (n = us.get(e)) || n > t) && us.set(e, t));
      }
    }
    function hs(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        o = null;
      if (null === r && 3 === e.tag) o = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            (
              (n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag
            )
          ) {
            o = r.stateNode;
            break;
          }
          r = r.return;
        }
      return null !== o &&
        (zu === o && (xs(t), Wu === Mu && Gs(o, Hu)), Ys(o, t)), o;
    }
    function ms(e) {
      var t = e.lastExpiredTime;
      return 0 !== t
        ? t
        : qs(e, (t = e.firstPendingTime))
          ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e
          : t;
    }
    function vs(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823), (e.callbackPriority = 99), (e.callbackNode = Yo(
          ys.bind(null, e)
        ));
      else {
        var t = ms(e),
          n = e.callbackNode;
        if (0 === t)
          null !== n &&
            (
              (e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90)
            );
        else {
          var r = fs();
          if (
            (
              1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                  ? (r = 95)
                  : (r =
                      0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                        ? 99
                        : 250 >= r ? 98 : 5250 >= r ? 97 : 95),
              null !== n
            )
          ) {
            var o = e.callbackPriority;
            if (e.callbackExpirationTime === t && o >= r) return;
            n !== Bo && Co(n);
          }
          (e.callbackExpirationTime = t), (e.callbackPriority = r), (t =
            1073741823 === t
              ? Yo(ys.bind(null, e))
              : Go(
                  r,
                  function e(t, n) {
                    cs = 0;
                    if (n) return (n = fs()), Js(t, n), vs(t), null;
                    var r = ms(t);
                    if (0 !== r) {
                      if (((n = t.callbackNode), (Vu & (Iu | Du)) !== Ru))
                        throw Error(a(327));
                      if (
                        (Ps(), (t === zu && r === Hu) || ws(t, r), null !== Qu)
                      ) {
                        var o = Vu;
                        Vu |= Iu;
                        for (var i = Es(); ; )
                          try {
                            Ts();
                            break;
                          } catch (e) {
                            As(t, e);
                          }
                        if ((oi(), (Vu = o), (Ou.current = i), Wu === Uu))
                          throw ((n = qu), ws(t, r), Gs(t, r), vs(t), n);
                        if (null === Qu)
                          switch ((
                            (i = t.finishedWork = t.current.alternate),
                            (t.finishedExpirationTime = r),
                            (o = Wu),
                            (zu = null),
                            o
                          )) {
                            case Lu:
                            case Uu:
                              throw Error(a(345));
                            case Bu:
                              Js(t, 2 < r ? 2 : r);
                              break;
                            case Fu:
                              if (
                                (
                                  Gs(t, r),
                                  (o = t.lastSuspendedTime),
                                  r === o && (t.nextKnownPendingLevel = Os(i)),
                                  1073741823 === Gu && 10 < (i = Zu + $u - Qo())
                                )
                              ) {
                                if (Ku) {
                                  var u = t.lastPingedTime;
                                  if (0 === u || u >= r) {
                                    (t.lastPingedTime = r), ws(t, r);
                                    break;
                                  }
                                }
                                if (0 !== (u = ms(t)) && u !== r) break;
                                if (0 !== o && o !== r) {
                                  t.lastPingedTime = o;
                                  break;
                                }
                                t.timeoutHandle = tr(_s.bind(null, t), i);
                                break;
                              }
                              _s(t);
                              break;
                            case Mu:
                              if (
                                (
                                  Gs(t, r),
                                  (o = t.lastSuspendedTime),
                                  r === o && (t.nextKnownPendingLevel = Os(i)),
                                  Ku && (0 === (i = t.lastPingedTime) || i >= r)
                                )
                              ) {
                                (t.lastPingedTime = r), ws(t, r);
                                break;
                              }
                              if (0 !== (i = ms(t)) && i !== r) break;
                              if (0 !== o && o !== r) {
                                t.lastPingedTime = o;
                                break;
                              }
                              if (
                                (
                                  1073741823 !== Yu
                                    ? (o = 10 * (1073741821 - Yu) - Qo())
                                    : 1073741823 === Gu
                                      ? (o = 0)
                                      : (
                                          (o = 10 * (1073741821 - Gu) - 5e3),
                                          (i = Qo()),
                                          (r = 10 * (1073741821 - r) - i),
                                          0 > (o = i - o) && (o = 0),
                                          (o =
                                            (120 > o
                                              ? 120
                                              : 480 > o
                                                ? 480
                                                : 1080 > o
                                                  ? 1080
                                                  : 1920 > o
                                                    ? 1920
                                                    : 3e3 > o
                                                      ? 3e3
                                                      : 4320 > o
                                                        ? 4320
                                                        : 1960 * ku(o / 1960)) -
                                            o),
                                          r < o && (o = r)
                                        ),
                                  10 < o
                                )
                              ) {
                                t.timeoutHandle = tr(_s.bind(null, t), o);
                                break;
                              }
                              _s(t);
                              break;
                            case ju:
                              if (1073741823 !== Gu && null !== Ju) {
                                u = Gu;
                                var s = Ju;
                                if (
                                  (
                                    0 >= (o = 0 | s.busyMinDurationMs)
                                      ? (o = 0)
                                      : (
                                          (i = 0 | s.busyDelayMs),
                                          (u =
                                            Qo() -
                                            (10 * (1073741821 - u) -
                                              (0 | s.timeoutMs || 5e3))),
                                          (o = u <= i ? 0 : i + o - u)
                                        ),
                                    10 < o
                                  )
                                ) {
                                  Gs(t, r), (t.timeoutHandle = tr(
                                    _s.bind(null, t),
                                    o
                                  ));
                                  break;
                                }
                              }
                              _s(t);
                              break;
                            default:
                              throw Error(a(329));
                          }
                        if ((vs(t), t.callbackNode === n))
                          return e.bind(null, t);
                      }
                    }
                    return null;
                  }.bind(null, e),
                  { timeout: 10 * (1073741821 - t) - Qo() }
                )), (e.callbackNode = t);
        }
      }
    }
    function ys(e) {
      var t = e.lastExpiredTime;
      if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t))
        _s(e);
      else {
        if ((Vu & (Iu | Du)) !== Ru) throw Error(a(327));
        if ((Ps(), (e === zu && t === Hu) || ws(e, t), null !== Qu)) {
          var n = Vu;
          Vu |= Iu;
          for (var r = Es(); ; )
            try {
              Ns();
              break;
            } catch (t) {
              As(e, t);
            }
          if ((oi(), (Vu = n), (Ou.current = r), Wu === Uu))
            throw ((n = qu), ws(e, t), Gs(e, t), vs(e), n);
          if (null !== Qu) throw Error(a(261));
          (e.finishedWork =
            e.current.alternate), (e.finishedExpirationTime = t), (zu = null), _s(
            e
          ), vs(e);
        }
      }
      return null;
    }
    function gs(e, t) {
      var n = Vu;
      Vu |= 1;
      try {
        return e(t);
      } finally {
        (Vu = n) === Ru && Jo();
      }
    }
    function bs(e, t) {
      var n = Vu;
      (Vu &= -2), (Vu |= Pu);
      try {
        return e(t);
      } finally {
        (Vu = n) === Ru && Jo();
      }
    }
    function ws(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), nr(n)), null !== Qu))
        for (n = Qu.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              var o = r.type.childContextTypes;
              null !== o && void 0 !== o && bo();
              break;
            case 3:
              zi(), wo();
              break;
            case 5:
              Hi(r);
              break;
            case 4:
              zi();
              break;
            case 13:
            case 19:
              co(Wi);
              break;
            case 10:
              ai(r);
          }
          n = n.return;
        }
      (zu = e), (Qu = Vs(
        e.current,
        null
      )), (Hu = t), (Wu = Lu), (qu = null), (Yu = Gu = 1073741823), (Ju = null), (Xu = 0), (Ku = !1);
    }
    function As(e, t) {
      for (;;) {
        try {
          if ((oi(), pa(), null === Qu || null === Qu.return))
            return (Wu = Uu), (qu = t), null;
          e: {
            var n = e,
              r = Qu.return,
              o = Qu,
              i = t;
            if (
              (
                (t = Hu),
                (o.effectTag |= 2048),
                (o.firstEffect = o.lastEffect = null),
                null !== i &&
                  "object" === typeof i &&
                  "function" === typeof i.then
              )
            ) {
              var a = i,
                u = 0 !== (1 & Wi.current),
                s = r;
              do {
                var l;
                if ((l = 13 === s.tag)) {
                  var c = s.memoizedState;
                  if (null !== c) l = null !== c.dehydrated;
                  else {
                    var f = s.memoizedProps;
                    l =
                      void 0 !== f.fallback &&
                      (!0 !== f.unstable_avoidThisFallback || !u);
                  }
                }
                if (l) {
                  var p = s.updateQueue;
                  if (null === p) {
                    var d = new Set();
                    d.add(a), (s.updateQueue = d);
                  } else p.add(a);
                  if (0 === (2 & s.mode)) {
                    if (
                      ((s.effectTag |= 64), (o.effectTag &= -2981), 1 === o.tag)
                    )
                      if (null === o.alternate) o.tag = 17;
                      else {
                        var h = di(1073741823, null);
                        (h.tag = 2), mi(o, h);
                      }
                    o.expirationTime = 1073741823;
                    break e;
                  }
                  (i = void 0), (o = t);
                  var m = n.pingCache;
                  if (
                    (
                      null === m
                        ? (
                            (m = n.pingCache = new xu()),
                            (i = new Set()),
                            m.set(a, i)
                          )
                        : void 0 === (i = m.get(a)) &&
                          ((i = new Set()), m.set(a, i)),
                      !i.has(o)
                    )
                  ) {
                    i.add(o);
                    var v = Us.bind(null, n, a, o);
                    a.then(v, v);
                  }
                  (s.effectTag |= 4096), (s.expirationTime = t);
                  break e;
                }
                s = s.return;
              } while (null !== s);
              i = Error(
                (X(o.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  K(o)
              );
            }
            Wu !== ju && (Wu = Bu), (i = fu(i, o)), (s = r);
            do {
              switch (s.tag) {
                case 3:
                  (a = i), (s.effectTag |= 4096), (s.expirationTime = t), vi(
                    s,
                    Nu(s, a, t)
                  );
                  break e;
                case 1:
                  a = i;
                  var y = s.type,
                    g = s.stateNode;
                  if (
                    0 === (64 & s.effectTag) &&
                    ("function" === typeof y.getDerivedStateFromError ||
                      (null !== g &&
                        "function" === typeof g.componentDidCatch &&
                        (null === rs || !rs.has(g))))
                  ) {
                    (s.effectTag |= 4096), (s.expirationTime = t), vi(
                      s,
                      Tu(s, a, t)
                    );
                    break e;
                  }
              }
              s = s.return;
            } while (null !== s);
          }
          Qu = ks(Qu);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      }
    }
    function Es() {
      var e = Ou.current;
      return (Ou.current = Oa), null === e ? Oa : e;
    }
    function Ss(e, t) {
      e < Gu && 2 < e && (Gu = e), null !== t &&
        e < Yu &&
        2 < e &&
        ((Yu = e), (Ju = t));
    }
    function xs(e) {
      e > Xu && (Xu = e);
    }
    function Ns() {
      for (; null !== Qu; ) Qu = Cs(Qu);
    }
    function Ts() {
      for (; null !== Qu && !ko(); ) Qu = Cs(Qu);
    }
    function Cs(e) {
      var t = Cu(e.alternate, e, Hu);
      return (e.memoizedProps = e.pendingProps), null === t &&
        (t = ks(e)), (_u.current = null), t;
    }
    function ks(e) {
      Qu = e;
      do {
        var t = Qu.alternate;
        if (((e = Qu.return), 0 === (2048 & Qu.effectTag))) {
          e: {
            var n = t,
              r = Hu,
              i = (t = Qu).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                go(t.type) && bo();
                break;
              case 3:
                zi(), wo(), (i = t.stateNode).pendingContext &&
                  (
                    (i.context = i.pendingContext),
                    (i.pendingContext = null)
                  ), (null === n || null === n.child) && Ma(t) && su(t), $a(t);
                break;
              case 5:
                Hi(t), (r = ji(Mi.current));
                var u = t.type;
                if (null !== n && null != t.stateNode)
                  eu(n, t, u, i, r), n.ref !== t.ref && (t.effectTag |= 128);
                else if (i) {
                  var s = ji(Bi.current);
                  if (Ma(t)) {
                    var l = (i = t).stateNode;
                    n = i.type;
                    var c = i.memoizedProps,
                      f = r;
                    switch ((
                      (l[ar] = i),
                      (l[ur] = c),
                      (u = void 0),
                      (r = l),
                      n
                    )) {
                      case "iframe":
                      case "object":
                      case "embed":
                        xn("load", r);
                        break;
                      case "video":
                      case "audio":
                        for (l = 0; l < Ze.length; l++) xn(Ze[l], r);
                        break;
                      case "source":
                        xn("error", r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        xn("error", r), xn("load", r);
                        break;
                      case "form":
                        xn("reset", r), xn("submit", r);
                        break;
                      case "details":
                        xn("toggle", r);
                        break;
                      case "input":
                        Te(r, c), xn("invalid", r), jn(f, "onChange");
                        break;
                      case "select":
                        (r._wrapperState = { wasMultiple: !!c.multiple }), xn(
                          "invalid",
                          r
                        ), jn(f, "onChange");
                        break;
                      case "textarea":
                        De(r, c), xn("invalid", r), jn(f, "onChange");
                    }
                    for (u in (Fn(n, c), (l = null), c))
                      c.hasOwnProperty(u) &&
                        (
                          (s = c[u]),
                          "children" === u
                            ? "string" === typeof s
                              ? r.textContent !== s && (l = ["children", s])
                              : "number" === typeof s &&
                                r.textContent !== "" + s &&
                                (l = ["children", "" + s])
                            : d.hasOwnProperty(u) && null != s && jn(f, u)
                        );
                    switch (n) {
                      case "input":
                        Se(r), Oe(r, c, !0);
                        break;
                      case "textarea":
                        Se(r), Ue(r);
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" === typeof c.onClick && (r.onclick = Vn);
                    }
                    (u = l), (i.updateQueue = u), (i = null !== u) && su(t);
                  } else {
                    (n = t), (f = u), (c = i), (l =
                      9 === r.nodeType ? r : r.ownerDocument), s === Be.html &&
                      (s = Fe(f)), s === Be.html
                      ? "script" === f
                        ? (
                            ((c = l.createElement("div")).innerHTML =
                              "<script></script>"),
                            (l = c.removeChild(c.firstChild))
                          )
                        : "string" === typeof c.is
                          ? (l = l.createElement(f, { is: c.is }))
                          : (
                              (l = l.createElement(f)),
                              "select" === f &&
                                (
                                  (f = l),
                                  c.multiple
                                    ? (f.multiple = !0)
                                    : c.size && (f.size = c.size)
                                )
                            )
                      : (l = l.createElementNS(s, f)), ((c = l)[ar] = n), (c[
                      ur
                    ] = i), Za(c, t, !1, !1), (t.stateNode = c);
                    var p = r,
                      h = Mn((f = u), (n = i));
                    switch (f) {
                      case "iframe":
                      case "object":
                      case "embed":
                        xn("load", c), (r = n);
                        break;
                      case "video":
                      case "audio":
                        for (r = 0; r < Ze.length; r++) xn(Ze[r], c);
                        r = n;
                        break;
                      case "source":
                        xn("error", c), (r = n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        xn("error", c), xn("load", c), (r = n);
                        break;
                      case "form":
                        xn("reset", c), xn("submit", c), (r = n);
                        break;
                      case "details":
                        xn("toggle", c), (r = n);
                        break;
                      case "input":
                        Te(c, n), (r = Ne(c, n)), xn("invalid", c), jn(
                          p,
                          "onChange"
                        );
                        break;
                      case "option":
                        r = Re(c, n);
                        break;
                      case "select":
                        (c._wrapperState = {
                          wasMultiple: !!n.multiple
                        }), (r = o({}, n, { value: void 0 })), xn(
                          "invalid",
                          c
                        ), jn(p, "onChange");
                        break;
                      case "textarea":
                        De(c, n), (r = Ie(c, n)), xn("invalid", c), jn(
                          p,
                          "onChange"
                        );
                        break;
                      default:
                        r = n;
                    }
                    Fn(f, r), (l = void 0), (s = f);
                    var m = c,
                      v = r;
                    for (l in v)
                      if (v.hasOwnProperty(l)) {
                        var y = v[l];
                        "style" === l
                          ? Un(m, y)
                          : "dangerouslySetInnerHTML" === l
                            ? null != (y = y ? y.__html : void 0) && Ve(m, y)
                            : "children" === l
                              ? "string" === typeof y
                                ? ("textarea" !== s || "" !== y) && ze(m, y)
                                : "number" === typeof y && ze(m, "" + y)
                              : "suppressContentEditableWarning" !== l &&
                                "suppressHydrationWarning" !== l &&
                                "autoFocus" !== l &&
                                (d.hasOwnProperty(l)
                                  ? null != y && jn(p, l)
                                  : null != y && Ae(m, l, y, h));
                      }
                    switch (f) {
                      case "input":
                        Se(c), Oe(c, n, !1);
                        break;
                      case "textarea":
                        Se(c), Ue(c);
                        break;
                      case "option":
                        null != n.value &&
                          c.setAttribute("value", "" + we(n.value));
                        break;
                      case "select":
                        ((r = c).multiple = !!n.multiple), null != (c = n.value)
                          ? Pe(r, !!n.multiple, c, !1)
                          : null != n.defaultValue &&
                            Pe(r, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof r.onClick && (c.onclick = Vn);
                    }
                    (i = $n(u, i)) && su(t);
                  }
                  null !== t.ref && (t.effectTag |= 128);
                } else if (null === t.stateNode) throw Error(a(166));
                break;
              case 6:
                if (n && null != t.stateNode) tu(n, t, n.memoizedProps, i);
                else {
                  if ("string" !== typeof i && null === t.stateNode)
                    throw Error(a(166));
                  (r = ji(Mi.current)), ji(Bi.current), Ma(t)
                    ? (
                        (u = (i = t).stateNode),
                        (r = i.memoizedProps),
                        (u[ar] = i),
                        (i = u.nodeValue !== r) && su(t)
                      )
                    : (
                        (u = t),
                        ((i = (9 === r.nodeType
                          ? r
                          : r.ownerDocument).createTextNode(i))[ar] = u),
                        (t.stateNode = i)
                      );
                }
                break;
              case 11:
                break;
              case 13:
                if ((co(Wi), (i = t.memoizedState), 0 !== (64 & t.effectTag))) {
                  t.expirationTime = r;
                  break e;
                }
                (i = null !== i), (u = !1), null === n
                  ? void 0 !== t.memoizedProps.fallback && Ma(t)
                  : (
                      (u = null !== (r = n.memoizedState)),
                      i ||
                        null === r ||
                        (null !== (r = n.child.sibling) &&
                          (
                            null !== (c = t.firstEffect)
                              ? ((t.firstEffect = r), (r.nextEffect = c))
                              : (
                                  (t.firstEffect = t.lastEffect = r),
                                  (r.nextEffect = null)
                                ),
                            (r.effectTag = 8)
                          ))
                    ), i &&
                  !u &&
                  0 !== (2 & t.mode) &&
                  ((null === n &&
                    !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                  0 !== (1 & Wi.current)
                    ? Wu === Lu && (Wu = Fu)
                    : (
                        (Wu !== Lu && Wu !== Fu) || (Wu = Mu),
                        0 !== Xu && null !== zu && (Gs(zu, Hu), Ys(zu, Xu))
                      )), (i || u) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                zi(), $a(t);
                break;
              case 10:
                ai(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                go(t.type) && bo();
                break;
              case 19:
                if ((co(Wi), null === (i = t.memoizedState))) break;
                if (
                  ((u = 0 !== (64 & t.effectTag)), null === (c = i.rendering))
                ) {
                  if (u) lu(i, !1);
                  else if (
                    Wu !== Lu ||
                    (null !== n && 0 !== (64 & n.effectTag))
                  )
                    for (n = t.child; null !== n; ) {
                      if (null !== (c = qi(n))) {
                        for (
                          t.effectTag |= 64, lu(i, !1), null !==
                            (u = c.updateQueue) &&
                            ((t.updateQueue = u), (t.effectTag |= 4)), null ===
                            i.lastEffect &&
                            (t.firstEffect = null), t.lastEffect =
                            i.lastEffect, i = r, u = t.child;
                          null !== u;

                        )
                          (n = i), ((r = u).effectTag &= 2), (r.nextEffect = null), (r.firstEffect = null), (r.lastEffect = null), null ===
                          (c = r.alternate)
                            ? (
                                (r.childExpirationTime = 0),
                                (r.expirationTime = n),
                                (r.child = null),
                                (r.memoizedProps = null),
                                (r.memoizedState = null),
                                (r.updateQueue = null),
                                (r.dependencies = null)
                              )
                            : (
                                (r.childExpirationTime = c.childExpirationTime),
                                (r.expirationTime = c.expirationTime),
                                (r.child = c.child),
                                (r.memoizedProps = c.memoizedProps),
                                (r.memoizedState = c.memoizedState),
                                (r.updateQueue = c.updateQueue),
                                (n = c.dependencies),
                                (r.dependencies =
                                  null === n
                                    ? null
                                    : {
                                        expirationTime: n.expirationTime,
                                        firstContext: n.firstContext,
                                        responders: n.responders
                                      })
                              ), (u = u.sibling);
                        fo(Wi, (1 & Wi.current) | 2), (t = t.child);
                        break e;
                      }
                      n = n.sibling;
                    }
                } else {
                  if (!u)
                    if (null !== (n = qi(c))) {
                      if (
                        (
                          (t.effectTag |= 64),
                          (u = !0),
                          null !== (r = n.updateQueue) &&
                            ((t.updateQueue = r), (t.effectTag |= 4)),
                          lu(i, !0),
                          null === i.tail && "hidden" === i.tailMode
                        )
                      ) {
                        null !== (t = t.lastEffect = i.lastEffect) &&
                          (t.nextEffect = null);
                        break;
                      }
                    } else
                      Qo() > i.tailExpiration &&
                        1 < r &&
                        (
                          (t.effectTag |= 64),
                          (u = !0),
                          lu(i, !1),
                          (t.expirationTime = t.childExpirationTime = r - 1)
                        );
                  i.isBackwards
                    ? ((c.sibling = t.child), (t.child = c))
                    : (
                        null !== (r = i.last) ? (r.sibling = c) : (t.child = c),
                        (i.last = c)
                      );
                }
                if (null !== i.tail) {
                  0 === i.tailExpiration &&
                    (i.tailExpiration = Qo() + 500), (r =
                    i.tail), (i.rendering = r), (i.tail =
                    r.sibling), (i.lastEffect =
                    t.lastEffect), (r.sibling = null), (i = Wi.current), fo(
                    Wi,
                    (i = u ? (1 & i) | 2 : 1 & i)
                  ), (t = r);
                  break e;
                }
                break;
              case 20:
              case 21:
                break;
              default:
                throw Error(a(156, t.tag));
            }
            t = null;
          }
          if (((i = Qu), 1 === Hu || 1 !== i.childExpirationTime)) {
            for (u = 0, r = i.child; null !== r; )
              (n = r.expirationTime), (c = r.childExpirationTime), n > u &&
                (u = n), c > u && (u = c), (r = r.sibling);
            i.childExpirationTime = u;
          }
          if (null !== t) return t;
          null !== e &&
            0 === (2048 & e.effectTag) &&
            (
              null === e.firstEffect && (e.firstEffect = Qu.firstEffect),
              null !== Qu.lastEffect &&
                (
                  null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = Qu.firstEffect),
                  (e.lastEffect = Qu.lastEffect)
                ),
              1 < Qu.effectTag &&
                (
                  null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = Qu)
                    : (e.firstEffect = Qu),
                  (e.lastEffect = Qu)
                )
            );
        } else {
          if (null !== (t = cu(Qu))) return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = Qu.sibling)) return t;
        Qu = e;
      } while (null !== Qu);
      return Wu === Lu && (Wu = ju), null;
    }
    function Os(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function _s(e) {
      var t = Ho();
      return qo(
        99,
        function(e, t) {
          if ((Ps(), (Vu & (Iu | Du)) !== Ru)) throw Error(a(327));
          var n = e.finishedWork,
            r = e.finishedExpirationTime;
          if (null === n) return null;
          if (
            (
              (e.finishedWork = null),
              (e.finishedExpirationTime = 0),
              n === e.current
            )
          )
            throw Error(a(177));
          (e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90), (e.nextKnownPendingLevel = 0);
          var o = Os(n);
          if (
            (
              (e.firstPendingTime = o),
              r <= e.lastSuspendedTime
                ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
                : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
              r <= e.lastPingedTime && (e.lastPingedTime = 0),
              r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
              e === zu && ((Qu = zu = null), (Hu = 0)),
              1 < n.effectTag
                ? null !== n.lastEffect
                  ? ((n.lastEffect.nextEffect = n), (o = n.firstEffect))
                  : (o = n)
                : (o = n.firstEffect),
              null !== o
            )
          ) {
            var i = Vu;
            (Vu |= Du), (_u.current = null), (Kn = Sn);
            var u = Wn();
            if (qn(u)) {
              if ("selectionStart" in u)
                var s = { start: u.selectionStart, end: u.selectionEnd };
              else
                e: {
                  var l =
                    (s = ((s = u.ownerDocument) && s.defaultView) || window)
                      .getSelection && s.getSelection();
                  if (l && 0 !== l.rangeCount) {
                    s = l.anchorNode;
                    var c = l.anchorOffset,
                      f = l.focusNode;
                    l = l.focusOffset;
                    try {
                      s.nodeType, f.nodeType;
                    } catch (e) {
                      s = null;
                      break e;
                    }
                    var p = 0,
                      d = -1,
                      h = -1,
                      m = 0,
                      v = 0,
                      y = u,
                      g = null;
                    t: for (;;) {
                      for (
                        var b;
                        y !== s ||
                          (0 !== c && 3 !== y.nodeType) ||
                          (d = p + c), y !== f ||
                          (0 !== l && 3 !== y.nodeType) ||
                          (h = p + l), 3 === y.nodeType &&
                          (p += y.nodeValue.length), null !==
                          (b = y.firstChild);

                      )
                        (g = y), (y = b);
                      for (;;) {
                        if (y === u) break t;
                        if (
                          (
                            g === s && ++m === c && (d = p),
                            g === f && ++v === l && (h = p),
                            null !== (b = y.nextSibling)
                          )
                        )
                          break;
                        g = (y = g).parentNode;
                      }
                      y = b;
                    }
                    s = -1 === d || -1 === h ? null : { start: d, end: h };
                  } else s = null;
                }
              s = s || { start: 0, end: 0 };
            } else s = null;
            (Zn = { focusedElem: u, selectionRange: s }), (Sn = !1), (es = o);
            do {
              try {
                Rs();
              } catch (e) {
                if (null === es) throw Error(a(330));
                Ls(es, e), (es = es.nextEffect);
              }
            } while (null !== es);
            es = o;
            do {
              try {
                for (u = e, s = t; null !== es; ) {
                  var w = es.effectTag;
                  if ((16 & w && ze(es.stateNode, ""), 128 & w)) {
                    var A = es.alternate;
                    if (null !== A) {
                      var E = A.ref;
                      null !== E &&
                        ("function" === typeof E
                          ? E(null)
                          : (E.current = null));
                    }
                  }
                  switch (1038 & w) {
                    case 2:
                      wu(es), (es.effectTag &= -3);
                      break;
                    case 6:
                      wu(es), (es.effectTag &= -3), Eu(es.alternate, es);
                      break;
                    case 1024:
                      es.effectTag &= -1025;
                      break;
                    case 1028:
                      (es.effectTag &= -1025), Eu(es.alternate, es);
                      break;
                    case 4:
                      Eu(es.alternate, es);
                      break;
                    case 8:
                      Au(u, (c = es), s), gu(c);
                  }
                  es = es.nextEffect;
                }
              } catch (e) {
                if (null === es) throw Error(a(330));
                Ls(es, e), (es = es.nextEffect);
              }
            } while (null !== es);
            if (
              (
                (E = Zn),
                (A = Wn()),
                (w = E.focusedElem),
                (s = E.selectionRange),
                A !== w &&
                  w &&
                  w.ownerDocument &&
                  (function e(t, n) {
                    return (
                      !(!t || !n) &&
                      (t === n ||
                        ((!t || 3 !== t.nodeType) &&
                          (n && 3 === n.nodeType
                            ? e(t, n.parentNode)
                            : "contains" in t
                              ? t.contains(n)
                              : !!t.compareDocumentPosition &&
                                !!(16 & t.compareDocumentPosition(n)))))
                    );
                  })(w.ownerDocument.documentElement, w)
              )
            ) {
              null !== s &&
                qn(w) &&
                (
                  (A = s.start),
                  void 0 === (E = s.end) && (E = A),
                  "selectionStart" in w
                    ? (
                        (w.selectionStart = A),
                        (w.selectionEnd = Math.min(E, w.value.length))
                      )
                    : (E =
                        ((A = w.ownerDocument || document) && A.defaultView) ||
                        window).getSelection &&
                      (
                        (E = E.getSelection()),
                        (c = w.textContent.length),
                        (u = Math.min(s.start, c)),
                        (s = void 0 === s.end ? u : Math.min(s.end, c)),
                        !E.extend && u > s && ((c = s), (s = u), (u = c)),
                        (c = Hn(w, u)),
                        (f = Hn(w, s)),
                        c &&
                          f &&
                          (1 !== E.rangeCount ||
                            E.anchorNode !== c.node ||
                            E.anchorOffset !== c.offset ||
                            E.focusNode !== f.node ||
                            E.focusOffset !== f.offset) &&
                          (
                            (A = A.createRange()).setStart(c.node, c.offset),
                            E.removeAllRanges(),
                            u > s
                              ? (E.addRange(A), E.extend(f.node, f.offset))
                              : (A.setEnd(f.node, f.offset), E.addRange(A))
                          )
                      )
                ), (A = []);
              for (E = w; (E = E.parentNode); )
                1 === E.nodeType &&
                  A.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
              for (
                "function" === typeof w.focus && w.focus(), w = 0;
                w < A.length;
                w++
              )
                ((E = A[w]).element.scrollLeft = E.left), (E.element.scrollTop =
                  E.top);
            }
            (Zn = null), (Sn = !!Kn), (Kn = null), (e.current = n), (es = o);
            do {
              try {
                for (w = r; null !== es; ) {
                  var S = es.effectTag;
                  if (36 & S) {
                    var x = es.alternate;
                    switch (((E = w), (A = es).tag)) {
                      case 0:
                      case 11:
                      case 15:
                        vu(16, 32, A);
                        break;
                      case 1:
                        var N = A.stateNode;
                        if (4 & A.effectTag)
                          if (null === x) N.componentDidMount();
                          else {
                            var T =
                              A.elementType === A.type
                                ? x.memoizedProps
                                : $o(A.type, x.memoizedProps);
                            N.componentDidUpdate(
                              T,
                              x.memoizedState,
                              N.__reactInternalSnapshotBeforeUpdate
                            );
                          }
                        var C = A.updateQueue;
                        null !== C && wi(0, C, N);
                        break;
                      case 3:
                        var k = A.updateQueue;
                        if (null !== k) {
                          if (((u = null), null !== A.child))
                            switch (A.child.tag) {
                              case 5:
                                u = A.child.stateNode;
                                break;
                              case 1:
                                u = A.child.stateNode;
                            }
                          wi(0, k, u);
                        }
                        break;
                      case 5:
                        var O = A.stateNode;
                        null === x &&
                          4 & A.effectTag &&
                          $n(A.type, A.memoizedProps) &&
                          O.focus();
                        break;
                      case 6:
                      case 4:
                      case 12:
                        break;
                      case 13:
                        if (null === A.memoizedState) {
                          var _ = A.alternate;
                          if (null !== _) {
                            var R = _.memoizedState;
                            if (null !== R) {
                              var P = R.dehydrated;
                              null !== P && xt(P);
                            }
                          }
                        }
                        break;
                      case 19:
                      case 17:
                      case 20:
                      case 21:
                        break;
                      default:
                        throw Error(a(163));
                    }
                  }
                  if (128 & S) {
                    A = void 0;
                    var I = es.ref;
                    if (null !== I) {
                      var D = es.stateNode;
                      switch (es.tag) {
                        case 5:
                          A = D;
                          break;
                        default:
                          A = D;
                      }
                      "function" === typeof I ? I(A) : (I.current = A);
                    }
                  }
                  es = es.nextEffect;
                }
              } catch (e) {
                if (null === es) throw Error(a(330));
                Ls(es, e), (es = es.nextEffect);
              }
            } while (null !== es);
            (es = null), Fo(), (Vu = i);
          } else e.current = n;
          if (os) (os = !1), (is = e), (as = t);
          else
            for (es = o; null !== es; )
              (t = es.nextEffect), (es.nextEffect = null), (es = t);
          if (
            (
              0 === (t = e.firstPendingTime) && (rs = null),
              1073741823 === t
                ? e === ls ? ss++ : ((ss = 0), (ls = e))
                : (ss = 0),
              "function" === typeof Bs && Bs(n.stateNode, r),
              vs(e),
              ts
            )
          )
            throw ((ts = !1), (e = ns), (ns = null), e);
          return (Vu & Pu) !== Ru ? null : (Jo(), null);
        }.bind(null, e, t)
      ), null;
    }
    function Rs() {
      for (; null !== es; ) {
        var e = es.effectTag;
        0 !== (256 & e) && mu(es.alternate, es), 0 === (512 & e) ||
          os ||
          (
            (os = !0),
            Go(97, function() {
              return Ps(), null;
            })
          ), (es = es.nextEffect);
      }
    }
    function Ps() {
      if (90 !== as) {
        var e = 97 < as ? 97 : as;
        return (as = 90), qo(e, Is);
      }
    }
    function Is() {
      if (null === is) return !1;
      var e = is;
      if (((is = null), (Vu & (Iu | Du)) !== Ru)) throw Error(a(331));
      var t = Vu;
      for (Vu |= Du, e = e.current.firstEffect; null !== e; ) {
        try {
          var n = e;
          if (0 !== (512 & n.effectTag))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                vu(128, 0, n), vu(0, 64, n);
            }
        } catch (t) {
          if (null === e) throw Error(a(330));
          Ls(e, t);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (Vu = t), Jo(), !0;
    }
    function Ds(e, t, n) {
      mi(e, (t = Nu(e, (t = fu(n, t)), 1073741823))), null !==
        (e = hs(e, 1073741823)) && vs(e);
    }
    function Ls(e, t) {
      if (3 === e.tag) Ds(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            Ds(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" === typeof n.type.getDerivedStateFromError ||
              ("function" === typeof r.componentDidCatch &&
                (null === rs || !rs.has(r)))
            ) {
              mi(n, (e = Tu(n, (e = fu(t, e)), 1073741823))), null !==
                (n = hs(n, 1073741823)) && vs(n);
              break;
            }
          }
          n = n.return;
        }
    }
    function Us(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t), zu === e && Hu === n
        ? Wu === Mu || (Wu === Fu && 1073741823 === Gu && Qo() - Zu < $u)
          ? ws(e, Hu)
          : (Ku = !0)
        : qs(e, n) &&
          ((0 !== (t = e.lastPingedTime) && t < n) ||
            (
              (e.lastPingedTime = n),
              e.finishedExpirationTime === n &&
                ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
              vs(e)
            ));
    }
    Cu = function(e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        var o = t.pendingProps;
        if (e.memoizedProps !== o || mo.current) za = !0;
        else {
          if (r < n) {
            switch (((za = !1), t.tag)) {
              case 3:
                Ka(t), ja();
                break;
              case 5:
                if ((Qi(t), 4 & t.mode && 1 !== n && o.hidden))
                  return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                go(t.type) && So(t);
                break;
              case 4:
                Vi(t, t.stateNode.containerInfo);
                break;
              case 10:
                ii(t, t.memoizedProps.value);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? ru(e, t, n)
                    : (
                        fo(Wi, 1 & Wi.current),
                        null !== (t = uu(e, t, n)) ? t.sibling : null
                      );
                fo(Wi, 1 & Wi.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), 0 !== (64 & e.effectTag))
                ) {
                  if (r) return au(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  (
                    null !== (o = t.memoizedState) &&
                      ((o.rendering = null), (o.tail = null)),
                    fo(Wi, Wi.current),
                    !r
                  )
                )
                  return null;
            }
            return uu(e, t, n);
          }
          za = !1;
        }
      } else za = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            (
              (r = t.type),
              null !== e &&
                (
                  (e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)
                ),
              (e = t.pendingProps),
              (o = yo(t, ho.current)),
              si(t, n),
              (o = fa(null, t, r, e, o, n)),
              (t.effectTag |= 1),
              "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
            )
          ) {
            if (((t.tag = 1), pa(), go(r))) {
              var i = !0;
              So(t);
            } else i = !1;
            t.memoizedState =
              null !== o.state && void 0 !== o.state ? o.state : null;
            var u = r.getDerivedStateFromProps;
            "function" === typeof u &&
              xi(
                t,
                r,
                u,
                e
              ), (o.updater = Ni), (t.stateNode = o), (o._reactInternalFiber = t), Oi(
              t,
              r,
              e,
              n
            ), (t = Xa(null, t, r, !0, i, n));
          } else (t.tag = 0), Qa(null, t, o, n), (t = t.child);
          return t;
        case 16:
          if (
            (
              (o = t.elementType),
              null !== e &&
                (
                  (e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)
                ),
              (e = t.pendingProps),
              (function(e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()), (e._result = t), t.then(
                    function(t) {
                      0 === e._status &&
                        ((t = t.default), (e._status = 1), (e._result = t));
                    },
                    function(t) {
                      0 === e._status && ((e._status = 2), (e._result = t));
                    }
                  );
                }
              })(o),
              1 !== o._status
            )
          )
            throw o._result;
          switch ((
            (o = o._result),
            (t.type = o),
            (i = t.tag = (function(e) {
              if ("function" === typeof e) return js(e) ? 1 : 0;
              if (void 0 !== e && null !== e) {
                if ((e = e.$$typeof) === Q) return 11;
                if (e === q) return 14;
              }
              return 2;
            })(o)),
            (e = $o(o, e)),
            i
          )) {
            case 0:
              t = Ya(null, t, o, e, n);
              break;
            case 1:
              t = Ja(null, t, o, e, n);
              break;
            case 11:
              t = Ha(null, t, o, e, n);
              break;
            case 14:
              t = Wa(null, t, o, $o(o.type, e), r, n);
              break;
            default:
              throw Error(a(306, o, ""));
          }
          return t;
        case 0:
          return (r = t.type), (o = t.pendingProps), Ya(
            e,
            t,
            r,
            (o = t.elementType === r ? o : $o(r, o)),
            n
          );
        case 1:
          return (r = t.type), (o = t.pendingProps), Ja(
            e,
            t,
            r,
            (o = t.elementType === r ? o : $o(r, o)),
            n
          );
        case 3:
          if ((Ka(t), null === (r = t.updateQueue))) throw Error(a(282));
          if (
            (
              (o = null !== (o = t.memoizedState) ? o.element : null),
              bi(t, r, t.pendingProps, null, n),
              (r = t.memoizedState.element) === o
            )
          )
            ja(), (t = uu(e, t, n));
          else {
            if (
              (
                (o = t.stateNode.hydrate) &&
                  (
                    (Ia = rr(t.stateNode.containerInfo.firstChild)),
                    (Pa = t),
                    (o = Da = !0)
                  ),
                o
              )
            )
              for (n = Li(t, null, r, n), t.child = n; n; )
                (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else Qa(e, t, r, n), ja();
            t = t.child;
          }
          return t;
        case 5:
          return Qi(t), null === e && Ba(t), (r = t.type), (o =
            t.pendingProps), (i = null !== e ? e.memoizedProps : null), (u =
            o.children), er(r, o)
            ? (u = null)
            : null !== i && er(r, i) && (t.effectTag |= 16), Ga(e, t), 4 &
            t.mode &&
          1 !== n &&
          o.hidden
            ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
            : (Qa(e, t, u, n), (t = t.child)), t;
        case 6:
          return null === e && Ba(t), null;
        case 13:
          return ru(e, t, n);
        case 4:
          return Vi(t, t.stateNode.containerInfo), (r =
            t.pendingProps), null === e
            ? (t.child = Di(t, null, r, n))
            : Qa(e, t, r, n), t.child;
        case 11:
          return (r = t.type), (o = t.pendingProps), Ha(
            e,
            t,
            r,
            (o = t.elementType === r ? o : $o(r, o)),
            n
          );
        case 7:
          return Qa(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Qa(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              (
                (r = t.type._context),
                (o = t.pendingProps),
                (u = t.memoizedProps),
                ii(t, (i = o.value)),
                null !== u
              )
            ) {
              var s = u.value;
              if (
                0 ===
                (i = Kr(s, i)
                  ? 0
                  : 0 |
                    ("function" === typeof r._calculateChangedBits
                      ? r._calculateChangedBits(s, i)
                      : 1073741823))
              ) {
                if (u.children === o.children && !mo.current) {
                  t = uu(e, t, n);
                  break e;
                }
              } else
                for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                  var l = s.dependencies;
                  if (null !== l) {
                    u = s.child;
                    for (var c = l.firstContext; null !== c; ) {
                      if (c.context === r && 0 !== (c.observedBits & i)) {
                        1 === s.tag &&
                          (
                            ((c = di(n, null)).tag = 2),
                            mi(s, c)
                          ), s.expirationTime < n &&
                          (s.expirationTime = n), null !== (c = s.alternate) &&
                          c.expirationTime < n &&
                          (c.expirationTime = n), ui(
                          s.return,
                          n
                        ), l.expirationTime < n && (l.expirationTime = n);
                        break;
                      }
                      c = c.next;
                    }
                  } else u = 10 === s.tag && s.type === t.type ? null : s.child;
                  if (null !== u) u.return = s;
                  else
                    for (u = s; null !== u; ) {
                      if (u === t) {
                        u = null;
                        break;
                      }
                      if (null !== (s = u.sibling)) {
                        (s.return = u.return), (u = s);
                        break;
                      }
                      u = u.return;
                    }
                  s = u;
                }
            }
            Qa(e, t, o.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (o = t.type), (r = (i = t.pendingProps).children), si(
            t,
            n
          ), (r = r(
            (o = li(o, i.unstable_observedBits))
          )), (t.effectTag |= 1), Qa(e, t, r, n), t.child;
        case 14:
          return (i = $o((o = t.type), t.pendingProps)), Wa(
            e,
            t,
            o,
            (i = $o(o.type, i)),
            r,
            n
          );
        case 15:
          return qa(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (r = t.type), (o = t.pendingProps), (o =
            t.elementType === r ? o : $o(r, o)), null !== e &&
            (
              (e.alternate = null),
              (t.alternate = null),
              (t.effectTag |= 2)
            ), (t.tag = 1), go(r) ? ((e = !0), So(t)) : (e = !1), si(t, n), Ci(
            t,
            r,
            o
          ), Oi(t, r, o, n), Xa(null, t, r, !0, e, n);
        case 19:
          return au(e, t, n);
      }
      throw Error(a(156, t.tag));
    };
    var Bs = null,
      Fs = null;
    function Ms(e, t, n, r) {
      return new function(e, t, n, r) {
        (this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.effectTag = 0), (this.lastEffect = this.firstEffect = this.nextEffect = null), (this.childExpirationTime = this.expirationTime = 0), (this.alternate = null);
      }(e, t, n, r);
    }
    function js(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Vs(e, t) {
      var n = e.alternate;
      return null === n
        ? (
            ((n = Ms(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n)
          )
        : (
            (n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)
          ), (n.childExpirationTime =
        e.childExpirationTime), (n.expirationTime =
        e.expirationTime), (n.child = e.child), (n.memoizedProps =
        e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue =
        e.updateQueue), (t = e.dependencies), (n.dependencies =
        null === t
          ? null
          : {
              expirationTime: t.expirationTime,
              firstContext: t.firstContext,
              responders: t.responders
            }), (n.sibling = e.sibling), (n.index = e.index), (n.ref =
        e.ref), n;
    }
    function zs(e, t, n, r, o, i) {
      var u = 2;
      if (((r = e), "function" === typeof e)) js(e) && (u = 1);
      else if ("string" === typeof e) u = 5;
      else
        e: switch (e) {
          case B:
            return Qs(n.children, o, i, t);
          case z:
            (u = 8), (o |= 7);
            break;
          case F:
            (u = 8), (o |= 1);
            break;
          case M:
            return ((e = Ms(
              12,
              n,
              t,
              8 | o
            )).elementType = M), (e.type = M), (e.expirationTime = i), e;
          case H:
            return ((e = Ms(
              13,
              n,
              t,
              o
            )).type = H), (e.elementType = H), (e.expirationTime = i), e;
          case W:
            return ((e = Ms(
              19,
              n,
              t,
              o
            )).elementType = W), (e.expirationTime = i), e;
          default:
            if ("object" === typeof e && null !== e)
              switch (e.$$typeof) {
                case j:
                  u = 10;
                  break e;
                case V:
                  u = 9;
                  break e;
                case Q:
                  u = 11;
                  break e;
                case q:
                  u = 14;
                  break e;
                case G:
                  (u = 16), (r = null);
                  break e;
              }
            throw Error(a(130, null == e ? e : typeof e, ""));
        }
      return ((t = Ms(
        u,
        n,
        t,
        o
      )).elementType = e), (t.type = r), (t.expirationTime = i), t;
    }
    function Qs(e, t, n, r) {
      return ((e = Ms(7, e, r, t)).expirationTime = n), e;
    }
    function Hs(e, t, n) {
      return ((e = Ms(6, e, null, t)).expirationTime = n), e;
    }
    function Ws(e, t, n) {
      return ((t = Ms(
        4,
        null !== e.children ? e.children : [],
        e.key,
        t
      )).expirationTime = n), (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }), t;
    }
    function qs(e, t) {
      var n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
    }
    function Gs(e, t) {
      var n = e.firstSuspendedTime,
        r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) &&
        (e.lastSuspendedTime = t), t <= e.lastPingedTime &&
        (e.lastPingedTime = 0), t <= e.lastExpiredTime &&
        (e.lastExpiredTime = 0);
    }
    function Ys(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n &&
        (
          t >= n
            ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
            : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t)
        );
    }
    function Js(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }
    function Xs(e, t, n, r) {
      var o = t.current,
        i = fs(),
        u = Ei.suspense;
      i = ps(i, o, u);
      e: if (n) {
        n = n._reactInternalFiber;
        t: {
          if ($e(n) !== n || 1 !== n.tag) throw Error(a(170));
          var s = n;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break t;
              case 1:
                if (go(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            s = s.return;
          } while (null !== s);
          throw Error(a(171));
        }
        if (1 === n.tag) {
          var l = n.type;
          if (go(l)) {
            n = Eo(n, l, s);
            break e;
          }
        }
        n = s;
      } else n = po;
      return null === t.context
        ? (t.context = n)
        : (t.pendingContext = n), ((t = di(i, u)).payload = {
        element: e
      }), null !== (r = void 0 === r ? null : r) && (t.callback = r), mi(
        o,
        t
      ), ds(o, i), i;
    }
    function Ks(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Zs(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function $s(e, t) {
      Zs(e, t), (e = e.alternate) && Zs(e, t);
    }
    function el(e, t, n) {
      var r = new function(e, t, n) {
          (this.tag = t), (this.current = null), (this.containerInfo = e), (this.pingCache = this.pendingChildren = null), (this.finishedExpirationTime = 0), (this.finishedWork = null), (this.timeoutHandle = -1), (this.pendingContext = this.context = null), (this.hydrate = n), (this.callbackNode = null), (this.callbackPriority = 90), (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
        }(e, t, (n = null != n && !0 === n.hydrate)),
        o = Ms(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      (r.current = o), (o.stateNode = r), (e[sr] = r.current), n &&
        0 !== t &&
        (function(e) {
          var t = Rn(e);
          ht.forEach(function(n) {
            Pn(n, e, t);
          }), mt.forEach(function(n) {
            Pn(n, e, t);
          });
        })(9 === e.nodeType ? e : e.ownerDocument), (this._internalRoot = r);
    }
    function tl(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function nl(e, t, n, r, o) {
      var i = n._reactRootContainer;
      if (i) {
        var a = i._internalRoot;
        if ("function" === typeof o) {
          var u = o;
          o = function() {
            var e = Ks(a);
            u.call(e);
          };
        }
        Xs(t, a, e, o);
      } else {
        if (
          (
            (i = n._reactRootContainer = (function(e, t) {
              if (
                (
                  t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType ? e.documentElement : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t
                )
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new el(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (a = i._internalRoot),
            "function" === typeof o
          )
        ) {
          var s = o;
          o = function() {
            var e = Ks(a);
            s.call(e);
          };
        }
        bs(function() {
          Xs(t, a, e, o);
        });
      }
      return Ks(a);
    }
    function rl(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!tl(t)) throw Error(a(200));
      return (function(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: U,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      })(e, t, null, n);
    }
    (rt = function(e) {
      if (13 === e.tag) {
        var t = Zo(fs(), 150, 100);
        ds(e, t), $s(e, t);
      }
    }), (ot = function(e) {
      if (13 === e.tag) {
        fs();
        var t = Ko++;
        ds(e, t), $s(e, t);
      }
    }), (it = function(e) {
      if (13 === e.tag) {
        var t = fs();
        ds(e, (t = ps(t, e, null))), $s(e, t);
      }
    }), ($ = function(e, t, n) {
      switch (t) {
        case "input":
          if ((ke(e, n), (t = n.name), "radio" === n.type && null != t)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ), t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = pr(r);
                if (!o) throw Error(a(90));
                xe(r), ke(r, o);
              }
            }
          }
          break;
        case "textarea":
          Le(e, n);
          break;
        case "select":
          null != (t = n.value) && Pe(e, !!n.multiple, t, !1);
      }
    }), (el.prototype.render = function(e, t) {
      Xs(e, this._internalRoot, null, void 0 === t ? null : t);
    }), (el.prototype.unmount = function(e) {
      Xs(null, this._internalRoot, null, void 0 === e ? null : e);
    }), (ie = gs), (ae = function(e, t, n, r) {
      var o = Vu;
      Vu |= 4;
      try {
        return qo(98, e.bind(null, t, n, r));
      } finally {
        (Vu = o) === Ru && Jo();
      }
    }), (ue = function() {
      (Vu & (1 | Iu | Du)) === Ru &&
        (
          (function() {
            if (null !== us) {
              var e = us;
              (us = null), e.forEach(function(e, t) {
                Js(t, e), vs(t);
              }), Jo();
            }
          })(),
          Ps()
        );
    }), (se = function(e, t) {
      var n = Vu;
      Vu |= 2;
      try {
        return e(t);
      } finally {
        (Vu = n) === Ru && Jo();
      }
    });
    var ol = {
      createPortal: rl,
      findDOMNode: function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
          if ("function" === typeof e.render) throw Error(a(188));
          throw Error(a(268, Object.keys(e)));
        }
        return (e = null === (e = nt(t)) ? null : e.stateNode);
      },
      hydrate: function(e, t, n) {
        if (!tl(t)) throw Error(a(200));
        return nl(null, e, t, !0, n);
      },
      render: function(e, t, n) {
        if (!tl(t)) throw Error(a(200));
        return nl(null, e, t, !1, n);
      },
      unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
        if (!tl(n)) throw Error(a(200));
        if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
        return nl(e, t, n, !1, r);
      },
      unmountComponentAtNode: function(e) {
        if (!tl(e)) throw Error(a(40));
        return (
          !!e._reactRootContainer &&
          (
            bs(function() {
              nl(null, null, e, !1, function() {
                e._reactRootContainer = null;
              });
            }),
            !0
          )
        );
      },
      unstable_createPortal: function() {
        return rl.apply(void 0, arguments);
      },
      unstable_batchedUpdates: gs,
      flushSync: function(e, t) {
        if ((Vu & (Iu | Du)) !== Ru) throw Error(a(187));
        var n = Vu;
        Vu |= 1;
        try {
          return qo(99, e.bind(null, t));
        } finally {
          (Vu = n), Jo();
        }
      },
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        Events: [
          cr,
          fr,
          pr,
          _.injectEventPluginsByName,
          p,
          Rt,
          function(e) {
            T(e, _t);
          },
          re,
          oe,
          Cn,
          O,
          Ps,
          { current: !1 }
        ]
      }
    };
    !(function(e) {
      var t = e.findFiberByHostInstance;
      (function(e) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (Bs = function(e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                64 === (64 & e.current.effectTag)
              );
            } catch (e) {}
          }), (Fs = function(e) {
            try {
              t.onCommitFiberUnmount(n, e);
            } catch (e) {}
          });
        } catch (e) {}
      })(
        o({}, e, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: P.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = nt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function(e) {
            return t ? t(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        })
      );
    })({
      findFiberByHostInstance: lr,
      bundleType: 0,
      version: "16.11.0",
      rendererPackageName: "react-dom"
    });
    var il = { default: ol },
      al = (il && ol) || il;
    e.exports = al.default || al;
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(33);
  },
  function(e, t, n) {
    "use strict";
    var r, o, i, a, u;
    if (
      (
        Object.defineProperty(t, "__esModule", { value: !0 }),
        "undefined" === typeof window || "function" !== typeof MessageChannel
      )
    ) {
      var s = null,
        l = null,
        c = function() {
          if (null !== s)
            try {
              var e = t.unstable_now();
              s(!0, e), (s = null);
            } catch (e) {
              throw (setTimeout(c, 0), e);
            }
        },
        f = Date.now();
      (t.unstable_now = function() {
        return Date.now() - f;
      }), (r = function(e) {
        null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(c, 0));
      }), (o = function(e, t) {
        l = setTimeout(e, t);
      }), (i = function() {
        clearTimeout(l);
      }), (a = function() {
        return !1;
      }), (u = t.unstable_forceFrameRate = function() {});
    } else {
      var p = window.performance,
        d = window.Date,
        h = window.setTimeout,
        m = window.clearTimeout,
        v = window.requestAnimationFrame,
        y = window.cancelAnimationFrame;
      if (
        (
          "undefined" !== typeof console &&
            (
              "function" !== typeof v &&
                console.error(
                  "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                ),
              "function" !== typeof y &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                )
            ),
          "object" === typeof p && "function" === typeof p.now
        )
      )
        t.unstable_now = function() {
          return p.now();
        };
      else {
        var g = d.now();
        t.unstable_now = function() {
          return d.now() - g;
        };
      }
      var b = !1,
        w = null,
        A = -1,
        E = 5,
        S = 0;
      (a = function() {
        return t.unstable_now() >= S;
      }), (u = function() {}), (t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
            )
          : (E = 0 < e ? Math.floor(1e3 / e) : 33.33);
      });
      var x = new MessageChannel(),
        N = x.port2;
      (x.port1.onmessage = function() {
        if (null !== w) {
          var e = t.unstable_now();
          S = e + E;
          try {
            w(!0, e) ? N.postMessage(null) : ((b = !1), (w = null));
          } catch (e) {
            throw (N.postMessage(null), e);
          }
        } else b = !1;
      }), (r = function(e) {
        (w = e), b || ((b = !0), N.postMessage(null));
      }), (o = function(e, n) {
        A = h(function() {
          e(t.unstable_now());
        }, n);
      }), (i = function() {
        m(A), (A = -1);
      });
    }
    function T(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = Math.floor((n - 1) / 2),
          o = e[r];
        if (!(void 0 !== o && 0 < O(o, t))) break e;
        (e[r] = t), (e[n] = o), (n = r);
      }
    }
    function C(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function k(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length; r < o; ) {
            var i = 2 * (r + 1) - 1,
              a = e[i],
              u = i + 1,
              s = e[u];
            if (void 0 !== a && 0 > O(a, n))
              void 0 !== s && 0 > O(s, a)
                ? ((e[r] = s), (e[u] = n), (r = u))
                : ((e[r] = a), (e[i] = n), (r = i));
            else {
              if (!(void 0 !== s && 0 > O(s, n))) break e;
              (e[r] = s), (e[u] = n), (r = u);
            }
          }
        }
        return t;
      }
      return null;
    }
    function O(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var _ = [],
      R = [],
      P = 1,
      I = null,
      D = 3,
      L = !1,
      U = !1,
      B = !1;
    function F(e) {
      for (var t = C(R); null !== t; ) {
        if (null === t.callback) k(R);
        else {
          if (!(t.startTime <= e)) break;
          k(R), (t.sortIndex = t.expirationTime), T(_, t);
        }
        t = C(R);
      }
    }
    function M(e) {
      if (((B = !1), F(e), !U))
        if (null !== C(_)) (U = !0), r(j);
        else {
          var t = C(R);
          null !== t && o(M, t.startTime - e);
        }
    }
    function j(e, n) {
      (U = !1), B && ((B = !1), i()), (L = !0);
      var r = D;
      try {
        for (
          F(n), I = C(_);
          null !== I && (!(I.expirationTime > n) || (e && !a()));

        ) {
          var u = I.callback;
          if (null !== u) {
            (I.callback = null), (D = I.priorityLevel);
            var s = u(I.expirationTime <= n);
            (n = t.unstable_now()), "function" === typeof s
              ? (I.callback = s)
              : I === C(_) && k(_), F(n);
          } else k(_);
          I = C(_);
        }
        if (null !== I) var l = !0;
        else {
          var c = C(R);
          null !== c && o(M, c.startTime - n), (l = !1);
        }
        return l;
      } finally {
        (I = null), (D = r), (L = !1);
      }
    }
    function V(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var z = u;
    (t.unstable_ImmediatePriority = 1), (t.unstable_UserBlockingPriority = 2), (t.unstable_NormalPriority = 3), (t.unstable_IdlePriority = 5), (t.unstable_LowPriority = 4), (t.unstable_runWithPriority = function(
      e,
      t
    ) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = D;
      D = e;
      try {
        return t();
      } finally {
        D = n;
      }
    }), (t.unstable_next = function(e) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = D;
      }
      var n = D;
      D = t;
      try {
        return e();
      } finally {
        D = n;
      }
    }), (t.unstable_scheduleCallback = function(e, n, a) {
      var u = t.unstable_now();
      if ("object" === typeof a && null !== a) {
        var s = a.delay;
        (s = "number" === typeof s && 0 < s ? u + s : u), (a =
          "number" === typeof a.timeout ? a.timeout : V(e));
      } else (a = V(e)), (s = u);
      return (e = {
        id: P++,
        callback: n,
        priorityLevel: e,
        startTime: s,
        expirationTime: (a = s + a),
        sortIndex: -1
      }), s > u
        ? (
            (e.sortIndex = s),
            T(R, e),
            null === C(_) && e === C(R) && (B ? i() : (B = !0), o(M, s - u))
          )
        : ((e.sortIndex = a), T(_, e), U || L || ((U = !0), r(j))), e;
    }), (t.unstable_cancelCallback = function(e) {
      e.callback = null;
    }), (t.unstable_wrapCallback = function(e) {
      var t = D;
      return function() {
        var n = D;
        D = t;
        try {
          return e.apply(this, arguments);
        } finally {
          D = n;
        }
      };
    }), (t.unstable_getCurrentPriorityLevel = function() {
      return D;
    }), (t.unstable_shouldYield = function() {
      var e = t.unstable_now();
      F(e);
      var n = C(_);
      return (
        (n !== I &&
          null !== I &&
          null !== n &&
          null !== n.callback &&
          n.startTime <= e &&
          n.expirationTime < I.expirationTime) ||
        a()
      );
    }), (t.unstable_requestPaint = z), (t.unstable_continueExecution = function() {
      U || L || ((U = !0), r(j));
    }), (t.unstable_pauseExecution = function() {}), (t.unstable_getFirstCallbackNode = function() {
      return C(_);
    }), (t.unstable_Profiling = null);
  },
  function(e, t, n) {
    var r, o;
    !(function(i) {
      if (
        (
          void 0 ===
            (o = "function" === typeof (r = i) ? r.call(t, n, t, e) : r) ||
            (e.exports = o),
          !0,
          (e.exports = i()),
          !!0
        )
      ) {
        var a = window.Cookies,
          u = (window.Cookies = i());
        u.noConflict = function() {
          return (window.Cookies = a), u;
        };
      }
    })(function() {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(r) {
        function o() {}
        function i(t, n, i) {
          if ("undefined" !== typeof document) {
            "number" === typeof (i = e({ path: "/" }, o.defaults, i)).expires &&
              (i.expires = new Date(
                1 * new Date() + 864e5 * i.expires
              )), (i.expires = i.expires ? i.expires.toUTCString() : "");
            try {
              var a = JSON.stringify(n);
              /^[\{\[]/.test(a) && (n = a);
            } catch (e) {}
            (n = r.write
              ? r.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )), (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
            var u = "";
            for (var s in i)
              i[s] &&
                (
                  (u += "; " + s),
                  !0 !== i[s] && (u += "=" + i[s].split(";")[0])
                );
            return (document.cookie = t + "=" + n + u);
          }
        }
        function a(e, n) {
          if ("undefined" !== typeof document) {
            for (
              var o = {},
                i = document.cookie ? document.cookie.split("; ") : [],
                a = 0;
              a < i.length;
              a++
            ) {
              var u = i[a].split("="),
                s = u.slice(1).join("=");
              n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
              try {
                var l = t(u[0]);
                if (((s = (r.read || r)(s, l) || t(s)), n))
                  try {
                    s = JSON.parse(s);
                  } catch (e) {}
                if (((o[l] = s), e === l)) break;
              } catch (e) {}
            }
            return e ? o[e] : o;
          }
        }
        return (o.set = i), (o.get = function(e) {
          return a(e, !1);
        }), (o.getJSON = function(e) {
          return a(e, !0);
        }), (o.remove = function(t, n) {
          i(t, "", e(n, { expires: -1 }));
        }), (o.defaults = {}), (o.withConverter = n), o;
      })(function() {});
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return h;
    });
    var r = n(4),
      o = n(36),
      i = n(43),
      a = n(46),
      u = n(49),
      s = n(5),
      l = n(2),
      c = n(0),
      f = n(15),
      p = n(13),
      d =
        (this && this.__decorate) ||
        function(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        },
      h = (function() {
        function e() {
          (this.arxivId = ""), (this.primary = ""), (this.visitid = Object(
            c.g
          )()), (this.allDS = [
            new u.a(),
            new i.a(),
            new o.a(),
            new a.a()
          ].filter(function(e) {
            return l.k.indexOf(e.shortname.toLowerCase()) >= 0;
          }));
        }
        return (e.prototype.configureAvailableFromAbstract = function() {
          (this.arxiv_paper = Object(s.h)()), this.configureAvailable(
            Object(s.d)()
          );
        }), (e.prototype.configureAvailable = function(e) {
          this.availableDS = this.allDS.filter(function(t) {
            return t.categories.has(e);
          });
        }), (e.prototype.setDS = function(e) {
          var t = this;
          (p.b.state =
            p.a.LOADING), (p.b.messages = []), (p.b.errors = []), f.a.set_datasource(
            this.primary,
            e.shortname
          ), (this.currentDS = e), this.currentDS
            .fetch_all(this.arxivId)
            .then(function(e) {
              return t.populateFromDSResult(e);
            })
            .catch(function(e) {
              return t.populateFromDSError(e);
            });
        }), (e.prototype.loadFromAbtract = function() {
          var e = Object(s.c)(),
            t = Object(s.d)();
          this.loadSource(e, t);
        }), (e.prototype.loadSource = function(e, t) {
          if (
            (
              (this.arxivId = e),
              (this.primary = t),
              this.configureAvailable(this.primary),
              0 !== this.availableDS.length
            )
          ) {
            var n = f.a.get_datasource(t),
              r = n
                ? this.availableDS.filter(function(e) {
                    return e.shortname === n;
                  })
                : this.availableDS;
            r && 0 !== r.length && this.setDS(r[0]);
          }
          this.record_api();
        }), (e.prototype.reloadSource = function() {
          this.currentDS
            ? (this.setDS(this.currentDS), this.record_api())
            : this.loadFromAbtract();
        }), (e.prototype.populateFromDSResult = function(e) {
          (p.b.state = p.a.LOADED), (this.paper = e.data), e.data.citations &&
            (this.citations = e.data.citations), e.data.references &&
            (this.references = e.data.references);
        }), (e.prototype.populateFromDSError = function(e) {
          p.b.error(e);
        }), (e.prototype.record_api = function() {
          if (l.r) {
            var e = Object(s.b)()
                .map(function(e) {
                  return e[1];
                })
                .join(":"),
              t = p.b.isdisabled ? "disabled" : "enabled",
              n = p.b.bibmodel.currentDS
                ? p.b.bibmodel.currentDS.shortname
                : "none";
            fetch(l.d + "?" + n + "&" + e + "&" + t + "&" + this.visitid);
          }
        }), d([r.l], e.prototype, "allDS", void 0), d(
          [r.l],
          e.prototype,
          "availableDS",
          void 0
        ), d([r.l], e.prototype, "currentDS", void 0), d(
          [r.l],
          e.prototype,
          "paper",
          void 0
        ), d([r.l], e.prototype, "citations", void 0), d(
          [r.l],
          e.prototype,
          "references",
          void 0
        ), d([r.l], e.prototype, "arxiv_paper", void 0), d(
          [r.d],
          e.prototype,
          "setDS",
          null
        ), d([r.d], e.prototype, "loadFromAbtract", null), d(
          [r.d],
          e.prototype,
          "loadSource",
          null
        ), d([r.d], e.prototype, "reloadSource", null), d(
          [r.d],
          e.prototype,
          "populateFromDSResult",
          null
        ), d([r.d], e.prototype, "populateFromDSError", null), e;
      })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return m;
    });
    var r = n(16),
      o = n.n(r),
      i = n(37),
      a = n.n(i),
      u = n(2),
      s = n(0),
      l = n(6),
      c = n(42),
      f = n(3),
      p =
        (this && this.__assign) ||
        function() {
          return (p =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      d =
        (this && this.__read) ||
        function(e, t) {
          var n = "function" === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      h = 100,
      m = (function() {
        function e() {
          (this.credentials = ""), (this.loaded = !1), (this.icon =
            o.a), (this.logo = a.a), (this.email =
            "adshelp@cfa.harvard.edu"), (this.help =
            "mailto:" + this.email), (this.shortname = "ADS"), (this.longname =
            "NASA ADS"), (this.categories = new Set([
            "astro-ph",
            "cond-mat",
            "gr-qc"
          ])), (this.max_count = h), (this.base_url =
            "https://api.adsabs.harvard.edu"), (this.homepage =
            "https://ui.adsabs.harvard.edu"), (this.outbound_url =
            "https://ui.adsabs.harvard.edu"), (this.token_url =
            "https://bibex-ads-token.development.arxiv.org/token"), (this.api_url =
            this.base_url + "/v1/search/query"), (this.api_key =
            "3vgYvCGHUS12SsrgoIfbPhTHcULZCByH8pLODY1x"), (this.api_params = {
            q: "a query",
            fl: [
              "id",
              "pub",
              "bibcode",
              "title",
              "author",
              "bibstem",
              "year",
              "doi",
              "citation_count",
              "read_count",
              "identifier"
            ],
            rows: h,
            sort: "citation_count desc"
          }), (this.sorting = {
            sorters: {
              paper: {
                name: "Paper order",
                func: function(e) {
                  return e.index;
                }
              },
              citations: {
                name: "Citations",
                func: function(e) {
                  return e.citation_count;
                }
              },
              influence: {
                name: "ADS read count",
                func: function(e) {
                  return e.read_count;
                }
              },
              title: {
                name: "Title",
                func: function(e) {
                  return e.simpletitle;
                }
              },
              author: {
                name: "First author",
                func: function(e) {
                  return e.authors[0] && e.authors[0].tolastname();
                }
              },
              year: {
                name: "Year",
                func: function(e) {
                  return e.year;
                }
              }
            },
            sorters_order: [
              "citations",
              "influence",
              "title",
              "author",
              "year"
            ],
            sorters_updown: {
              citations: f.b,
              influence: f.b,
              title: f.d,
              author: f.d,
              year: f.b
            },
            sorters_default: "citations"
          }), (this.ads_url_ui =
            this.outbound_url + "/#search/"), (this.json_to_doc = new c.a(
            this
          ));
        }
        return (e.prototype.populate = function(e, t, n) {
          var r = e;
          (r.citations = {
            documents: t,
            header: "Citations",
            header_url: r.url + "/citations",
            description: "",
            count: r.citation_count,
            sorting: this.sorting
          }), (r.references = {
            documents: n,
            header: "References",
            header_url: r.url + "/references",
            description: "",
            count: n.length,
            sorting: this.sorting
          });
          var o = r.citations.count,
            i = r.references.count;
          if (0 === i || (0 === o && 0 === i))
            throw new s.b(
              "No references or citations provided by data provider."
            );
          this.data = r;
        }), (e.prototype.get_credentials = function() {
          var e = this,
            t = { credentials: "include" };
          return fetch(this.token_url, t)
            .catch(function(e) {
              throw new s.c(
                "Token query prevented by browser - CORS, firewall, or unknown error"
              );
            })
            .then(function(e) {
              return (function(e) {
                if (200 === e.status) return e;
                switch (e.status) {
                  case 0:
                    throw new s.c(
                      "ADS token blocked by browser -- CORS, firewall, or unknown error"
                    );
                  case 404:
                    throw new s.c("Token server (managed by arXiv) not found");
                  default:
                    throw new s.c("Error retrieving ADS API Token " + e.status);
                }
              })(e);
            })
            .then(function(e) {
              return e.json();
            })
            .then(function(t) {
              e.credentials = t.token;
            });
        }), (e.prototype.fetch_params = function(e, t) {
          var n = p({}, this.api_params);
          return (n.q = e), Object(s.e)(n);
        }), (e.prototype.fetch_docs = function(e, t) {
          var n = this,
            r = this.api_url + "?" + this.fetch_params(e, t);
          return l.a
            .throttle(function() {
              return fetch(r)
                .catch(function(e) {
                  throw new s.c(
                    "Query prevented by browser -- CORS, firewall, or unknown error"
                  );
                })
                .then(function(e) {
                  return (function(e) {
                    if (200 === e.status) return e;
                    switch (e.status) {
                      case 0:
                        throw new s.c(
                          "Query prevented by browser -- CORS, firewall, or unknown error"
                        );
                      case 401:
                        throw new s.c("Query authentication to ADS failed");
                      case 404:
                        throw new s.b("No data available yet");
                      case 429:
                        throw new s.c(
                          "Too many requests to ADS, rate limit reached for today."
                        );
                      case 500:
                        throw new s.c("Query error 500: internal server error");
                      default:
                        throw new s.c("Query error " + e.status);
                    }
                  })(e);
                })
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  return n.json_to_doc.reformat_documents(e.response.docs);
                });
            })
            .catch(function(e) {
              throw e;
            });
        }), (e.prototype.fetch_all = function(e) {
          var t = this;
          return u.g && !this.credentials
            ? this.get_credentials().then(function() {
                return t.fetch_all(e);
              })
            : this.loaded
              ? new Promise(function(e, n) {
                  return e(t);
                })
              : (
                  (this.aid = e),
                  Promise.all([
                    this.fetch_docs("arXiv:" + e, 0),
                    this.fetch_docs("citations(arXiv:" + e + ")", 0),
                    this.fetch_docs("references(arXiv:" + e + ")", 0)
                  ]).then(function(e) {
                    var n = d(e, 3),
                      r = n[0],
                      o = n[1],
                      i = n[2];
                    return t.populate(r[0], o, i), (t.loaded = !0), t;
                  })
                );
        }), e;
      })();
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t, n) {
    const r = n(39)("FastMutex"),
      o = () => Math.random() + "",
      i = (e, t) => {
        const n = new Date().getTime();
        (t.acquireEnd = n), (t.acquireDuration =
          t.acquireEnd - t.acquireStart), (t.lockStart = n), e(t);
      };
    e.exports = class {
      constructor(
        {
          clientId: e = o(),
          xPrefix: t = "_MUTEX_LOCK_X_",
          yPrefix: n = "_MUTEX_LOCK_Y_",
          timeout: r = 5e3,
          localStorage: i
        } = {}
      ) {
        (this.clientId = e), (this.xPrefix = t), (this.yPrefix = n), (this.timeout = r), (this.localStorage =
          i || window.localStorage), this.resetStats();
      }
      lock(e) {
        r(
          'Attempting to acquire Lock on "%s" using FastMutex instance "%s"',
          e,
          this.clientId
        );
        const t = this.xPrefix + e,
          n = this.yPrefix + e;
        return this.resetStats(), this.lockStats.acquireStart ||
          (this.lockStats.acquireStart = new Date().getTime()), new Promise(
          (o, a) => {
            const u = e => {
              if (
                new Date().getTime() - this.lockStats.acquireStart >=
                this.timeout
              )
                return r(
                  'Lock on "%s" could not be acquired within %sms by FastMutex client "%s"',
                  e,
                  this.timeout,
                  this.clientId
                ), a(
                  new Error(
                    `Lock could not be acquired within ${this.timeout}ms`
                  )
                );
              this.setItem(t, this.clientId);
              let s = this.getItem(n);
              if (s)
                return r("Lock exists on Y (%s), restarting...", s), this
                  .lockStats.restartCount++, void setTimeout(() => u(e));
              this.setItem(n, this.clientId);
              let l = this.getItem(t);
              if (l !== this.clientId)
                return this.lockStats.contentionCount++, r(
                  'Lock contention detected. X="%s"',
                  l
                ), void setTimeout(() => {
                  (s = this.getItem(n)) === this.clientId
                    ? (
                        r(
                          'FastMutex client "%s" won the lock contention on "%s"',
                          this.clientId,
                          e
                        ),
                        i(o, this.lockStats)
                      )
                    : (
                        this.lockStats.restartCount++,
                        this.lockStats.locksLost++,
                        r(
                          'FastMutex client "%s" lost the lock contention on "%s" to another process (%s). Restarting...',
                          this.clientId,
                          e,
                          s
                        ),
                        setTimeout(() => u(e))
                      );
                }, 50);
              r(
                'FastMutex client "%s" acquired a lock on "%s" with no contention',
                this.clientId,
                e
              ), i(o, this.lockStats);
            };
            u(e);
          }
        );
      }
      release(e) {
        r('FastMutex client "%s" is releasing lock on "%s"', this.clientId, e);
        const t = this.yPrefix + e;
        return new Promise(e => {
          this.localStorage.removeItem(
            t
          ), (this.lockStats.lockEnd = new Date().getTime()), (this.lockStats.lockDuration =
            this.lockStats.lockEnd - this.lockStats.lockStart), e(
            this.lockStats
          ), this.resetStats();
        });
      }
      setItem(e, t) {
        return this.localStorage.setItem(
          e,
          JSON.stringify({
            expiresAt: new Date().getTime() + this.timeout,
            value: t
          })
        );
      }
      getItem(e) {
        const t = this.localStorage.getItem(e);
        if (!t) return null;
        const n = JSON.parse(t);
        return new Date().getTime() - n.expiresAt >= this.timeout
          ? (
              r(
                'FastMutex client "%s" removed an expired record on "%s"',
                this.clientId,
                e
              ),
              this.localStorage.removeItem(e),
              null
            )
          : JSON.parse(t).value;
      }
      resetStats() {
        this.lockStats = {
          restartCount: 0,
          locksLost: 0,
          contentionCount: 0,
          acquireDuration: 0,
          acquireStart: null
        };
      }
    };
  },
  function(e, t, n) {
    (function(r) {
      function o() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        return !e &&
          "undefined" !== typeof r &&
          "env" in r &&
          (e = Object({ NODE_ENV: "production", PUBLIC_URL: "." }).DEBUG), e;
      }
      ((t = e.exports = n(40)).log = function() {
        return (
          "object" === typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }), (t.formatArgs = function(e) {
        var n = this.useColors;
        if (
          (
            (e[0] =
              (n ? "%c" : "") +
              this.namespace +
              (n ? " %c" : " ") +
              e[0] +
              (n ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !n
          )
        )
          return;
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var o = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(e) {
          "%%" !== e && "%c" === e && (i = ++o);
        }), e.splice(i, 0, r);
      }), (t.save = function(e) {
        try {
          null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
        } catch (e) {}
      }), (t.load = o), (t.useColors = function() {
        if (
          "undefined" !== typeof window &&
          window.process &&
          "renderer" === window.process.type
        )
          return !0;
        return (
          ("undefined" !== typeof document &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          ("undefined" !== typeof window &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          ("undefined" !== typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          ("undefined" !== typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }), (t.storage =
        "undefined" != typeof chrome && "undefined" != typeof chrome.storage
          ? chrome.storage.local
          : (function() {
              try {
                return window.localStorage;
              } catch (e) {}
            })()), (t.colors = [
        "lightseagreen",
        "forestgreen",
        "goldenrod",
        "dodgerblue",
        "darkorchid",
        "crimson"
      ]), (t.formatters.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      }), t.enable(o());
    }.call(t, n(14)));
  },
  function(e, t, n) {
    var r;
    function o(e) {
      function n() {
        if (n.enabled) {
          var e = n,
            o = +new Date(),
            i = o - (r || o);
          (e.diff = i), (e.prev = r), (e.curr = o), (r = o);
          for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
            a[u] = arguments[u];
          (a[0] = t.coerce(a[0])), "string" !== typeof a[0] && a.unshift("%O");
          var s = 0;
          (a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, r) {
            if ("%%" === n) return n;
            s++;
            var o = t.formatters[r];
            if ("function" === typeof o) {
              var i = a[s];
              (n = o.call(e, i)), a.splice(s, 1), s--;
            }
            return n;
          })), t.formatArgs.call(e, a), (n.log ||
            t.log ||
            console.log.bind(console))
            .apply(e, a);
        }
      }
      return (n.namespace = e), (n.enabled = t.enabled(
        e
      )), (n.useColors = t.useColors()), (n.color = (function(e) {
        var n,
          r = 0;
        for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
        return t.colors[Math.abs(r) % t.colors.length];
      })(e)), "function" === typeof t.init && t.init(n), n;
    }
    ((t = e.exports = o.debug = o.default = o).coerce = function(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }), (t.disable = function() {
      t.enable("");
    }), (t.enable = function(e) {
      t.save(e), (t.names = []), (t.skips = []);
      for (
        var n = ("string" === typeof e ? e : "").split(/[\s,]+/),
          r = n.length,
          o = 0;
        o < r;
        o++
      )
        n[o] &&
          ("-" === (e = n[o].replace(/\*/g, ".*?"))[0]
            ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
            : t.names.push(new RegExp("^" + e + "$")));
    }), (t.enabled = function(e) {
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1;
    }), (t.humanize = n(
      41
    )), (t.names = []), (t.skips = []), (t.formatters = {});
  },
  function(e, t) {
    var n = 1e3,
      r = 60 * n,
      o = 60 * r,
      i = 24 * o,
      a = 365.25 * i;
    function u(e, t, n) {
      if (!(e < t))
        return e < 1.5 * t
          ? Math.floor(e / t) + " " + n
          : Math.ceil(e / t) + " " + n + "s";
    }
    e.exports = function(e, t) {
      t = t || {};
      var s = typeof e;
      if ("string" === s && e.length > 0)
        return (function(e) {
          if ((e = String(e)).length > 100) return;
          var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
            e
          );
          if (!t) return;
          var u = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return u * a;
            case "days":
            case "day":
            case "d":
              return u * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return u * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return u * r;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return u * n;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return u;
            default:
              return;
          }
        })(e);
      if ("number" === s && !1 === isNaN(e))
        return t.long
          ? (function(e) {
              return (
                u(e, i, "day") ||
                u(e, o, "hour") ||
                u(e, r, "minute") ||
                u(e, n, "second") ||
                e + " ms"
              );
            })(e)
          : (function(e) {
              if (e >= i) return Math.round(e / i) + "d";
              if (e >= o) return Math.round(e / o) + "h";
              if (e >= r) return Math.round(e / r) + "m";
              if (e >= n) return Math.round(e / n) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r = n(5),
      o = n(0),
      i = n(3),
      a = (function() {
        function e(e) {
          this.fetchConfig = e;
        }
        return (e.prototype.ads_url_part = function(e, t) {
          return (
            this.fetchConfig.ads_url_ui + Object(o.e)({ q: e + ':"' + t + '"' })
          );
        }), (e.prototype.ads_url_author = function(e) {
          return this.ads_url_part("author", e);
        }), (e.prototype.ads_url_title = function(e) {
          return this.ads_url_part("title", e);
        }), (e.prototype.ads_url_bibcode_search = function(e) {
          return this.ads_url_part("bibcode", e);
        }), (e.prototype.ads_url_api = function(e) {
          return this.fetchConfig.base_url + "/#abs/" + e;
        }), (e.prototype.ads_url_outbound = function(e) {
          return this.fetchConfig.outbound_url + "/#abs/" + e;
        }), (e.prototype.ads_url_arxiv = function(e) {
          var t = this.get_eprint(e);
          if (t) return "https://arxiv.org/abs/" + t;
        }), (e.prototype.reverse_author = function(e) {
          return e ? e.split(", ").reverse().join(" ") : "Unknown";
        }), (e.prototype.reformat_authors = function(e) {
          var t = this;
          return e
            ? e.map(function(e) {
                var n = new i.a();
                return (n.name = t.reverse_author(
                  e
                )), (n.url = t.ads_url_author(e)), n;
              })
            : [];
        }), (e.prototype.reformat_title = function(e) {
          return e && 0 !== e.length ? e[0] : "Unknown";
        }), (e.prototype.ads_url_doi = function(e) {
          return e.doi
            ? this.fetchConfig.homepage +
              "/link_gateway/" +
              e.bibcode +
              "/doi:" +
              e.doi
            : "";
        }), (e.prototype.get_eprint = function(e) {
          if (e) {
            return e.reduce(function(e, t) {
              if (e) return e;
              var n = r.a.exec(t);
              return n ? n[1] || n[2] || n[3] : void 0;
            }, void 0);
          }
        }), (e.prototype.searchline = function(e) {
          var t = e.authors.reduce(function(e, t) {
            return e + t.name + " ";
          }, "");
          return [e.title, t, e.venue, e.year].join(" ").toLocaleLowerCase();
        }), (e.prototype.outbound_names = function(e) {
          var t = [];
          return t.push(
            this.fetchConfig.shortname.toLowerCase()
          ), e.url_arxiv && t.push("arxiv"), e.url_doi && t.push("doi"), t.push(
            "scholar"
          ), t;
        }), (e.prototype.reformat_document = function(e, t) {
          var n = this.get_eprint(e.identifier),
            r = new i.c(n);
          return (r.title = this.reformat_title(
            e.title
          )), (r.authors = this.reformat_authors(
            e.author
          )), (r.api = this.ads_url_api(
            e.bibcode
          )), (r.url = this.ads_url_outbound(
            e.bibcode
          )), (r.url_arxiv = this.ads_url_arxiv(
            e.identifier
          )), (r.doi = (e.doi || [""])[0]), (r.url_doi = this.ads_url_doi(
            e
          )), (r.paperId = e.bincode || ""), (r.year = e.year || ""), (r.venue =
            e.pub || ""), (r.citation_count = e.citation_count), (r.read_count =
            e.read_count), (r.simpletitle = Object(o.h)(
            r.title.toLocaleLowerCase()
          )), (r.searchline = this.searchline(
            r
          )), (r.outbound = this.outbound_names(r)), (r.index = t), r;
        }), (e.prototype.reformat_documents = function(e) {
          if (!e || !Array.isArray(e)) return [];
          for (var t = [], n = 0; n < e.length; n++)
            t.push(this.reformat_document(e[n], n));
          return t;
        }), e;
      })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return h;
    });
    var r = n(17),
      o = n.n(r),
      i = n(44),
      a = n.n(i),
      u = n(0),
      s = n(6),
      l = n(3),
      c = n(45),
      f =
        (this && this.__assign) ||
        function() {
          return (f =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      p =
        (this && this.__read) ||
        function(e, t) {
          var n = "function" === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      d = 100,
      h = (function() {
        function e() {
          (this.loaded = !1), (this.recid =
            ""), (this.max_count = d), (this.email = ""), (this.help =
            ""), (this.shortname = "INSPIRE"), (this.longname =
            "INSPIRE HEP"), (this.categories = new Set([
            "hep-th",
            "hep-ex",
            "hep-ph",
            "hep-lat",
            "gr-qc"
          ])), (this.homepage = "http://inspirehep.net"), (this.icon =
            o.a), (this.logo = a.a), (this.pagelength = d), (this.url_paper =
            "http://inspirehep.net/record"), (this.url_author =
            "https://labs.inspirehep.net/authors"), (this.api_url =
            "https://labs.inspirehep.net/api/literature"), (this.api_params = {
            sort: "mostcited",
            page: 1,
            size: d,
            q: "a query"
          }), (this.sorting = {
            sorters: {
              paper: {
                name: "Paper order",
                func: function(e) {
                  return e.index;
                }
              },
              title: {
                name: "Title",
                func: function(e) {
                  return e.simpletitle;
                }
              },
              author: {
                name: "First author",
                func: function(e) {
                  return e.authors[0] && e.authors[0].tolastname();
                }
              },
              year: {
                name: "Year",
                func: function(e) {
                  return e.year;
                }
              }
            },
            sorters_order: ["title", "author", "year"],
            sorters_updown: { title: l.d, author: l.d, year: l.b },
            sorters_default: "year"
          }), (this.json_to_doc = new c.a(this));
        }
        return (e.prototype.populate = function(e, t, n) {
          var r = e;
          (r.citations = {
            documents: t,
            header: "Citations",
            header_url: r.url + "/citations",
            description: "",
            count: r.citation_count,
            sorting: this.sorting
          }), (r.references = {
            documents: n,
            header: "References",
            header_url: r.url + "/references",
            description: "",
            count: n.length,
            sorting: this.sorting
          }), (this.data = r);
        }), (e.prototype.fetch_params = function(e) {
          var t = f({}, this.api_params);
          return e ? (t.q = e) : delete t.q, Object(u.e)(t);
        }), (e.prototype.format_url_search = function(e) {
          return this.api_url + "?" + this.fetch_params(e);
        }), (e.prototype.format_url_rest = function(e) {
          return this.api_url + "/" + e + "?" + this.fetch_params("");
        }), (e.prototype.fetch_query = function(e) {
          return s.a
            .throttle(function() {
              return fetch(Object(u.i)(e))
                .then(function(e) {
                  return (function(e) {
                    if (200 === e.status) return e;
                    switch (e.status) {
                      case 0:
                        throw new u.c(
                          "Query prevented by browser -- CORS, firewall, or unknown error"
                        );
                      case 404:
                        throw new u.c(
                          "No data available from data provider, article may be too recent, 404."
                        );
                      case 500:
                        throw new u.c("Query error 500: internal server error");
                      default:
                        throw new u.c("Query error " + e.status);
                    }
                  })(e);
                })
                .then(function(e) {
                  return e.json();
                });
            })
            .catch(function(e) {
              throw e instanceof u.c
                ? e
                : e instanceof u.d
                  ? new Error(
                      "Too many requests, please try again in a few seconds."
                    )
                  : e;
            });
        }), (e.prototype.fetch_basepaper = function(e) {
          var t = this,
            n = this.format_url_search("eprint " + e);
          return this.fetch_query(n)
            .then(function(e) {
              return t.json_to_doc.json_search_to_meta(e);
            })
            .then(function(e) {
              return t.json_to_doc.metadata_to_paper(e, 0);
            })
            .then(function(e) {
              return e;
            });
        }), (e.prototype.fetch_related = function(e) {
          var t = this,
            n = e.recid;
          return Promise.all([
            this.fetch_query(this.format_url_rest(n + "/references")),
            this.fetch_query(this.format_url_search("refersto:recid:" + n))
          ]).then(function(n) {
            var r = p(n, 2),
              o = r[0],
              i = r[1],
              a = t.json_to_doc.json_references_to_papers(o),
              u = t.json_to_doc.json_refersto_to_papers(i);
            return [e, u, a];
          });
        }), (e.prototype.fetch_all = function(e) {
          var t = this;
          return (this.aid = e), this.loaded
            ? new Promise(function(e, n) {
                return e(t);
              })
            : this.fetch_basepaper(e)
                .then(function(e) {
                  return t.fetch_related(e);
                })
                .then(function(e) {
                  var n = p(e, 3),
                    r = n[0],
                    o = n[1],
                    i = n[2];
                  return t.populate(r, o, i), (t.loaded = !0), t;
                });
        }), e;
      })();
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r = n(0),
      o = n(3),
      i =
        (this && this.__values) ||
        function(e) {
          var t = "function" === typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" === typeof e.length)
            return {
              next: function() {
                return e && r >= e.length && (e = void 0), {
                  value: e && e[r++],
                  done: !e
                };
              }
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      a = (function() {
        function e(e) {
          this.fetchConfig = e;
        }
        return (e.prototype.reverse_name = function(e) {
          return e.indexOf(",") < 0
            ? e
            : e
                .split(", ")
                .map(function(e) {
                  return e.trim();
                })
                .reverse()
                .join(" ");
        }), (e.prototype.url_arxiv = function(e) {
          return e ? "https://arxiv.org/abs/" + e : void 0;
        }), (e.prototype.url_author = function(e) {
          return this.fetchConfig.url_author + "/" + e;
        }), (e.prototype.url_paper = function(e) {
          return this.fetchConfig.url_paper + "/" + e;
        }), (e.prototype.url_paper_api = function(e) {
          return (
            this.fetchConfig.api_url + "?" + Object(r.e)({ q: "recid:" + e })
          );
        }), (e.prototype.string_to_array = function(e) {
          return "string" === typeof e ? [e] : e;
        }), (e.prototype.searchline = function(e) {
          var t = e.authors.reduce(function(e, t) {
            return e + t.name + " ";
          }, "");
          return [e.title, t, e.venue, e.year].join(" ").toLowerCase();
        }), (e.prototype.outbound_names = function(e) {
          var t = [this.fetchConfig.shortname.toLocaleLowerCase()];
          return e.url_arxiv && t.push("arxiv"), e.url_doi &&
            t.push("doi"), t.push("scholar"), t;
        }), (e.prototype.meta_arxiv_id = function(e) {
          var t = e.arxiv_eprint || e.arxiv_eprints;
          if ((t && t.length > 1 && console.log(t), t && t.length > 0))
            return t[0].value;
        }), (e.prototype.meta_title = function(e) {
          var t,
            n,
            r = e.titles;
          if (!r) return "";
          var o = "";
          try {
            for (var a = i(r), u = a.next(); !u.done; u = a.next()) {
              var s = u.value;
              if ("arXiv" === s.source) return s.title;
              o = o || s.title;
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              u && !u.done && (n = a.return) && n.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          return o;
        }), (e.prototype.meta_authors = function(e) {
          var t = this,
            n = e.authors;
          if (void 0 === n) return [];
          return n.map(function(e) {
            var n = new o.a(),
              r = e.record ? e.record.$ref.replace("api/", "") : "";
            return (n.name = t.reverse_name(
              e.full_name
            )), (n.url = r || t.url_author(e.recid)), n;
          });
        }), (e.prototype.meta_year = function(e) {
          if (e.preprint_date) return e.preprint_date.substring(0, 4);
          var t = e.publication_info;
          if (t && t.length > 0) {
            var n = t[0];
            if (n.pubinfo_freetext) {
              var r = /\d\d\d\d/;
              if (r.test(n.pubinfo_freetext)) {
                var o = r.exec(n.pubinfo_freetext);
                if (o && o.length > 0) return o[0];
              }
            }
            if (n.year) return n.year.toString();
          }
          return e.legacy_creation_date
            ? e.legacy_creation_date.substring(0, 4)
            : "";
        }), (e.prototype.meta_venue = function(e) {
          var t = e.publication_info;
          if (t && t.length > 0) {
            var n = t[0].journal_title;
            if (n) return n.replace(/\.([^ ])/g, ". $1");
          }
        }), (e.prototype.meta_doi = function(e) {
          var t = e.dois;
          return t && t.length > 0 ? t[0].value : "";
        }), (e.prototype.meta_recid = function(e) {
          return e.control_number.toString();
        }), (e.prototype.json_search_to_meta = function(e) {
          if (0 !== e.hits.total) return e.hits.hits[0].metadata;
        }), (e.prototype.json_search_to_metas = function(e) {
          if (0 !== e.hits.total)
            return e.hits.hits.map(function(e) {
              return e.metadata;
            });
        }), (e.prototype.json_references_to_papers = function(e) {
          var t = e.metadata.references;
          return this.reformat_documents(t);
        }), (e.prototype.json_citations_to_papers = function(e) {
          var t = e.metadata.citations;
          return this.reformat_documents(t);
        }), (e.prototype.json_refersto_to_papers = function(e) {
          console.log(e);
          var t = this.json_search_to_metas(e);
          return this.reformat_documents(t);
        }), (e.prototype.metadata_to_paper = function(e, t) {
          if (e.control_number) {
            var n = this.meta_arxiv_id(e),
              i = this.meta_recid(e),
              a = new o.c(n);
            return (a.title = this.meta_title(
              e
            )), (a.authors = this.meta_authors(e)), (a.year = this.meta_year(
              e
            )), (a.venue = this.meta_venue(e)), (a.citation_count =
              e.citation_count), (a.recid = i), (a.paperId = i), (a.index = t), (a.api = this.url_paper_api(
              i
            )), (a.url = this.url_paper(
              i
            )), (a.arxivId = n), (a.doi = this.meta_doi(e)), (a.url_doi = a.doi
              ? "https://doi.org/" + a.doi
              : ""), (a.url_arxiv = this.url_arxiv(n)), (a.simpletitle = Object(
              r.h
            )(a.title.toLocaleLowerCase())), (a.searchline = this.searchline(
              a
            )), (a.outbound = this.outbound_names(a)), a;
          }
        }), (e.prototype.reformat_documents = function(e) {
          if (!e) return [];
          for (var t = [], n = 0; n < e.length; n++) {
            var r = this.metadata_to_paper(e[n], n);
            void 0 !== r && t.push(r);
          }
          return t;
        }), (e.prototype.reformat_search_results = function(e) {
          if (!e) return [];
          for (var t = [], n = 0; n < e.length; n++) {
            var r = this.metadata_to_paper(e[n], n);
            void 0 !== r && t.push(r);
          }
          return t;
        }), e;
      })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return f;
    });
    var r = n(18),
      o = n.n(r),
      i = n(47),
      a = n.n(i),
      u = n(0),
      s = n(6),
      l = n(3),
      c = n(48),
      f = (function() {
        function e() {
          (this.loaded = !1), (this.logo = a.a), (this.icon =
            o.a), (this.max_count = 200), (this.email =
            "arxiv@prophy.science"), (this.help =
            "mailto:" + this.email), (this.shortname =
            "Prophy"), (this.longname = "Prophy"), (this.categories =
            u.a), (this.homepage =
            "https://www.prophy.science"), (this.api_url =
            "https://www.prophy.science/api"), (this.api_params = {
            include_unknown_references: 1
          }), (this.sorting = {
            sorters: {
              author: {
                name: "First author",
                func: function(e) {
                  return (
                    e.authors[0] && e.authors[0].tolastname().toLowerCase()
                  );
                }
              },
              title: {
                name: "Title",
                func: function(e) {
                  return e.simpletitle;
                }
              },
              year: {
                name: "Year",
                func: function(e) {
                  return e.year;
                }
              }
            },
            sorters_order: ["title", "author", "year"],
            sorters_updown: { title: l.d, author: l.d, year: l.b },
            sorters_default: "year"
          }), (this.json_to_doc = new c.a(this));
        }
        return (e.prototype.url_paper = function(e) {
          var t = Object(u.e)(this.api_params);
          return this.api_url + "/arxiv/" + e + "?" + t;
        }), (e.prototype.populate = function(e) {
          var t = this,
            n = this.json_to_doc.reformat_document(e, 0);
          e.citations &&
            (n.citations = {
              documents: e.citations.map(function(e, n) {
                return t.json_to_doc.reformat_document(e, n);
              }),
              header: "Citations",
              header_url: e.url + "#citingPapers",
              description: "highly influenced citations",
              count: e.citations.length,
              sorting: this.sorting
            }), e.references &&
            (n.references = {
              documents: e.references.map(function(e, n) {
                return t.json_to_doc.reformat_document(e, n);
              }),
              header: "References",
              header_url: e.url + "#citedPapers",
              description: "highly influenced references",
              count: e.references.length,
              sorting: this.sorting
            });
          var r = n.citations ? n.citations.count : 0,
            o = n.references ? n.references.count : 0;
          if (0 === o || (0 === r && 0 === o))
            throw new u.b(
              "No references or citations provided by data provider."
            );
          this.data = n;
        }), (e.prototype.fetch_all = function(e) {
          var t = this;
          return this.loaded
            ? new Promise(function(e, n) {
                return e(t);
              })
            : (
                (this.aid = e),
                s.a
                  .throttle(function() {
                    return fetch(t.url_paper(t.aid))
                      .catch(function(e) {
                        throw new u.c(
                          "Query prevented by browser -- CORS, firewall, or unknown error"
                        );
                      })
                      .then(function(e) {
                        return (function(e) {
                          if (200 === e.status) return e;
                          switch (e.status) {
                            case 0:
                              throw new u.c(
                                "Query prevented by browser -- CORS, firewall, or unknown error"
                              );
                            case 404:
                              throw new u.b("No data available yet");
                            case 500:
                              throw new u.c(
                                "Query error 500: internal server error"
                              );
                            default:
                              throw new u.c("Query error " + e.status);
                          }
                        })(e);
                      })
                      .then(function(e) {
                        return e.json();
                      })
                      .then(function(e) {
                        return t.populate(e), (t.loaded = !0), t;
                      });
                  })
                  .catch(function(e) {
                    throw e;
                  })
              );
        }), e;
      })();
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAABACAMAAADRcU5RAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURW5ubvHx8XJycrCwsPX19W9vb/n5+f///3V1dfz8/JGRkdTU1Lq6uqenp+jo6P7+/rW1tYyMjJ+fn+3t7Xl5eczMzOPj4319fcfHx8HBwYWFhd3d3YiIiICAgJiYmNjY2G0lQxsAAAM+SURBVGje7ZgJc7MgEIY9Ac94m3gk//9flgW5tCZN4zd15oOZzpRdgw/L7gvo4JM2x4JZMAtmwSyYBbNgFuz/A3O0FpI+9pPomHfQdhgYb317UjDH8c8K5rQnARP/R6hO7mBognOBsXYDy/WEYLiilvsZwUZqmVU3yAgpb4h38qJswqYs8vWQdTERb66S1bi5PxAyZN0hYAG1eMKH85mVQwl9lIVC8XxkDJCQxRHXmjnyxfM+F8fJyJKc9kj0HhgRvnZ5YwaOSSvcONAGeIRKBWtlrtYKlMIP5YugV725lIOSEu/m1pUz0pqNoZfmqC48LQ1ZFVPyDtUp2KdIk6EpcYNkgBCzxXdhAiKmuNwI0+vkz9TgkDYXfylXwrNlhDjedCHkC9SBPVXmikEGvQwZiFEh0hLmiX4MFhWChvtK6ei1CV6hQLTQiL2ihfBFMpAIr1YQ/PNF6dL9Z8mP3PHG8mi6SF8qnAnYRecyGPSNnLi0O1psOsg9/gYI6YNb461evtqSvE75pAD4OiUuZJgcufIiOL4wj5s6x5lMeMi3MHgLzGs1n0zVWM2VtodcZXNvfYhVA7Mr4quWBfxeILIhfmsTjzvdJ+c065Qsc3v5UL61Mx3b5stlFgt4V/XzEsxrhirNTZ8cnOiUptit7N6mqLROsYQaecZEfyIXO75Qp8QRaNOWXtn3wPIlwq1e8R+BPYsY2tr3wJis+lwt00PA+ic55hr24SnYjclLRIzU/ATMrMpE1pSuC9x+fwoWQE5cc7nvfQzma4rJczjbqjCzp0/BWDlOiTHaR2CJPkem/O03+9YsVmgfLGGaRP+6Y8CMvRJqiiBzpxcJFOPnYFHDxWnGx4DppwvtFMHBGp7HoycTcR+MbUvfXxJ/B7acx+rl3FVGukITas/ZgTXDr8BG/pPxKDDs6ifYydUeipW9il6CsSPIcjo6BIzeS+RXjsw48yNxiCbpBb8GS80TyedgcOuhtyRSFvX6oUc1U3vqfv/b1UC1cZ76V5+hfnGBfKiaPhdYtffh5o/BXFrUYX1CsGwn9f8SbAxQDlxefTKwu6NfQ08EduVcBT4bWBA3YV+N9ju/BbNgFsyCWTDevgBGI/m5JSmakAAAAABJRU5ErkJggg==";
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(0),
      o = n(3);
    var i = (function() {
      function e(e) {
        this.fetchConfig = e;
      }
      return (e.prototype.url_author = function(e) {
        return this.fetchConfig.api_url + "author/" + e;
      }), (e.prototype.url_api = function(e) {
        var t = Object(r.e)(this.fetchConfig.api_params);
        return e.paperId
          ? this.fetchConfig.api_url + "paper/" + e.paperId + "?" + t
          : "";
      }), (e.prototype.url_arxiv = function(e) {
        return e.arxivId ? "https://arxiv.org/abs/" + e.arxivId : "";
      }), (e.prototype.url_doi = function(e) {
        return e.doi ? "https://doi.org/" + e.doi : "";
      }), (e.prototype.searchline = function(e) {
        var t = e.authors.reduce(function(e, t) {
          return e + t.name + " ";
        }, "");
        return [e.title, t, e.venue, e.year].join(" ").toLowerCase();
      }), (e.prototype.outbound_names = function(e) {
        var t = [this.fetchConfig.shortname.toLocaleLowerCase()];
        return e.url_arxiv && t.push("arxiv"), e.url_doi &&
          t.push("doi"), t.push("scholar"), t;
      }), (e.prototype.doc_authors = function(e) {
        return e.authors.map(function(e) {
          var t = new o.a();
          return (t.name = e.name), (t.url = e.url), t;
        });
      }), (e.prototype.reformat_document = function(e, t) {
        var n = new o.c(e.arxivId);
        return e.title
          ? (n.title = (function(e) {
              return e.replace(
                /^(?:\d\s*){1,2}(?:[A-Za-z]\s*){2,4}\s*(?:\d\s*){4,}/,
                ""
              );
            })(e.title.trim()))
          : (n.title = "Unknown title"), (n.year = e.year), (n.venue =
          e.venue), (n.citation_count = e.citation_count), (n.url =
          e.url || null), (n.doi = e.doi), (n.arxivId =
          e.arxivId), (n.authors = this.doc_authors(e)), (n.api = this.url_api(
          e
        )), (n.url_arxiv = this.url_arxiv(e)), (n.url_doi = this.url_doi(
          e
        )), (n.paperId = e.paperId), (n.isInfluential =
          e.isInfluential || !1), (n.simpletitle = Object(r.h)(
          n.title
        ).toLocaleLowerCase()), (n.searchline = this.searchline(
          n
        )), (n.outbound = this.outbound_names(n)), (n.index = t), n;
      }), e;
    })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return p;
    });
    var r = n(19),
      o = n.n(r),
      i = n(50),
      a = n.n(i),
      u = n(0),
      s = n(6),
      l = n(3),
      c = n(51),
      f =
        (this && this.__values) ||
        function(e) {
          var t = "function" === typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" === typeof e.length)
            return {
              next: function() {
                return e && r >= e.length && (e = void 0), {
                  value: e && e[r++],
                  done: !e
                };
              }
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      p = (function() {
        function e() {
          (this.loaded = !1), (this.logo = a.a), (this.icon =
            o.a), (this.max_count = 999), (this.email =
            "feedback@semanticscholar.org"), (this.help =
            "mailto:" + this.email), (this.shortname = "S2"), (this.longname =
            "Semantic Scholar"), (this.categories = u.a), (this.homepage =
            "https://semanticscholar.org"), (this.api_url =
            "https://api.semanticscholar.org/v1/"), (this.api_params = {
            include_unknown_references: "true"
          }), (this.sorting = {
            sorters: {
              paper: {
                name: "Paper order",
                func: function(e) {
                  return e.index;
                }
              },
              influence: {
                name: "Influence",
                func: function(e) {
                  return e.isInfluential;
                }
              },
              author: {
                name: "First author",
                func: function(e) {
                  return (
                    e.authors[0] && e.authors[0].tolastname().toLowerCase()
                  );
                }
              },
              title: {
                name: "Title",
                func: function(e) {
                  return e.simpletitle;
                }
              },
              year: {
                name: "Year",
                func: function(e) {
                  return e.year;
                }
              }
            },
            sorters_order: ["influence", "title", "author", "year"],
            sorters_updown: {
              influence: l.b,
              title: l.d,
              author: l.d,
              year: l.b
            },
            sorters_default: "influence"
          }), (this.json_to_doc = new c.a(this));
        }
        return (e.prototype.url_paper = function(e) {
          var t = Object(u.e)(this.api_params);
          return this.api_url + "paper/arXiv:" + e + "?" + t;
        }), (e.prototype.portion_unknown = function(e) {
          var t,
            n,
            r = 0,
            o = 0;
          if (!e || !e.documents || 0 === e.documents.length) return 0;
          try {
            for (var i = f(e.documents), a = i.next(); !a.done; a = i.next()) {
              a.value.paperId || (o += 1), (r += 1);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return o / r;
        }), (e.prototype.title_check = function(e) {
          var t,
            n,
            r = 0,
            o = 0;
          try {
            for (var i = f(e.documents), a = i.next(); !a.done; a = i.next()) {
              var u = a.value;
              u.title && u.title.length < 6 && (r += 1), (o += 1);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return r / o;
        }), (e.prototype.populate = function(e) {
          var t,
            n = this,
            r = this.json_to_doc.reformat_document(e, 0);
          if (
            e.citations &&
            (
              (r.citations = {
                documents: e.citations.map(function(e, t) {
                  return n.json_to_doc.reformat_document(e, t);
                }),
                header: "Citations",
                header_url: e.url + "#citingPapers",
                description: "highly influenced citations",
                count: e.citations.length,
                sorting: this.sorting
              }),
              (t = Number(this.title_check(r.citations).toFixed(2))) > 0.6
            )
          )
            throw new u.b(
              "Few known citation titles from provider (" + t + ")."
            );
          if (
            e.references &&
            (
              (r.references = {
                documents: e.references.map(function(e, t) {
                  return n.json_to_doc.reformat_document(e, t);
                }),
                header: "References",
                header_url: e.url + "#citedPapers",
                description: "highly influenced references",
                count: e.references.length,
                sorting: this.sorting
              }),
              (t = Number(this.title_check(r.references).toFixed(2))) > 0.6
            )
          )
            throw new u.b(
              "Few known reference titles from provider (" + t + ")."
            );
          if (
            void 0 === r.references ||
            (r.references && 0 === r.references.count)
          )
            throw new u.b("No references available from data provider.");
          var o = Number(this.portion_unknown(r.references).toFixed(2)),
            i = Number(this.portion_unknown(r.citations).toFixed(2));
          if (o > 0.95 || i > 0.95)
            throw new u.b(
              "Few known references from provider (unk=" + Math.max(o, i) + ")."
            );
          this.data = r;
        }), (e.prototype.fetch_all = function(e) {
          var t = this;
          return this.loaded
            ? new Promise(function(e, n) {
                return e(t);
              })
            : (
                (this.aid = e),
                s.a
                  .throttle(function() {
                    return fetch(t.url_paper(t.aid))
                      .catch(function(e) {
                        throw new u.c(
                          "Query prevented by browser -- CORS, firewall, or unknown error"
                        );
                      })
                      .then(function(e) {
                        return (function(e) {
                          if (200 === e.status) return e;
                          switch (e.status) {
                            case 0:
                              throw new u.c(
                                "Query prevented by browser -- CORS, firewall, or unknown error"
                              );
                            case 404:
                              throw new u.b(
                                "No data available from data provider, 404."
                              );
                            case 429:
                              throw new u.d(
                                "Too many requests, please try again in a few seconds."
                              );
                            case 500:
                              throw new u.c(
                                "Query error 500: internal server error"
                              );
                            default:
                              throw new u.c("Query error " + e.status);
                          }
                        })(e);
                      })
                      .then(function(e) {
                        return e.json();
                      })
                      .then(function(e) {
                        return t.populate(e), (t.loaded = !0), t;
                      });
                  })
                  .catch(function(e) {
                    throw e;
                  })
              );
        }), e;
      })();
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(0),
      o = n(3);
    var i = (function() {
      function e(e) {
        this.fetchConfig = e;
      }
      return (e.prototype.url_author = function(e) {
        return this.fetchConfig.api_url + "author/" + e;
      }), (e.prototype.url_api = function(e) {
        var t = Object(r.e)(this.fetchConfig.api_params);
        return e.paperId
          ? this.fetchConfig.api_url + "paper/" + e.paperId + "?" + t
          : "";
      }), (e.prototype.url_arxiv = function(e) {
        return e.arxivId ? "https://arxiv.org/abs/" + e.arxivId : "";
      }), (e.prototype.url_doi = function(e) {
        return e.doi ? "https://doi.org/" + e.doi : "";
      }), (e.prototype.searchline = function(e) {
        var t = e.authors.reduce(function(e, t) {
          return e + t.name + " ";
        }, "");
        return [e.title, t, e.venue, e.year].join(" ").toLowerCase();
      }), (e.prototype.outbound_names = function(e) {
        var t = [this.fetchConfig.shortname.toLocaleLowerCase()];
        return e.url_arxiv && t.push("arxiv"), e.url_doi &&
          t.push("doi"), t.push("scholar"), t;
      }), (e.prototype.doc_authors = function(e) {
        return e.authors.map(function(e) {
          var t = new o.a();
          return (t.name = e.name), (t.url = e.url), t;
        });
      }), (e.prototype.reformat_document = function(e, t) {
        var n = new o.c(e.arxivId);
        return e.title
          ? (n.title = (function(e) {
              return e.replace(
                /^(?:\d\s*){1,2}(?:[A-Za-z]\s*){2,4}\s*(?:\d\s*){4,}/,
                ""
              );
            })(e.title.trim()))
          : (n.title = "Unknown title"), (n.year = e.year), (n.venue =
          e.venue), (n.citation_count = e.citation_count), (n.url =
          e.url || null), (n.doi = e.doi), (n.arxivId =
          e.arxivId), (n.authors = this.doc_authors(e)), (n.api = this.url_api(
          e
        )), (n.url_arxiv = this.url_arxiv(e)), (n.url_doi = this.url_doi(
          e
        )), (n.paperId = e.paperId), (n.isInfluential =
          e.isInfluential || !1), (n.simpletitle = Object(r.h)(
          n.title
        ).toLocaleLowerCase()), (n.searchline = this.searchline(
          n
        )), (n.outbound = this.outbound_names(n)), (n.index = t), n;
      }), e;
    })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return f;
    });
    var r = n(7),
      o = n(1),
      i = (n.n(o), n(10)),
      a = (n.n(i), n(2)),
      u = n(53),
      s = n(63),
      l =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      c =
        (this && this.__decorate) ||
        function(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        },
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return l(t, e), (t.prototype.generate_sources = function() {
          var e = this.props.state,
            t = this.props.state.bibmodel;
          if (e.isdisabled) return null;
          if (!t.availableDS || 0 === t.availableDS.length)
            return o.createElement(
              "div",
              null,
              o.createElement("span", null, "No data provider available")
            );
          var n = t.availableDS
            .map(function(e) {
              return t.currentDS === e
                ? o.createElement(
                    "span",
                    { className: "bib-selected" },
                    e.longname
                  )
                : o.createElement(
                    "span",
                    null,
                    o.createElement(
                      "a",
                      {
                        href: "javascript:;",
                        onClick: function() {
                          return t.setDS(e);
                        }
                      },
                      e.longname
                    )
                  );
            })
            .reduce(function(e, t) {
              return null === e
                ? t
                : o.createElement(o.Fragment, null, e, "|", t);
            });
          return o.createElement(
            "span",
            { className: "bib-ds-select" },
            o.createElement("span", null, "Select data provider: "),
            n
          );
        }), (t.prototype.generate_messages = function() {
          var e = this.props.state,
            t = this.props.state.bibmodel.currentDS;
          if (e.isdisabled) return null;
          var n = !1,
            r = [];
          e.errors
            ? (
                (r = e.errors.map(function(e) {
                  return e.message;
                })),
                (n = e.errors.some(function(e) {
                  return "DataError" === e.name;
                }))
              )
            : ((r = e.messages), (n = !1));
          var i = r.map(function(e) {
            return o.createElement(
              "li",
              { className: "msg" },
              e.length < 80 ? e : e.slice(0, 80) + "..."
            );
          });
          if (i.length > 0) {
            if (t && n) {
              var a = o.createElement(
                "div",
                null,
                o.createElement(
                  "p",
                  null,
                  "Articles recently added or updated may not have propagated to data providers yet. If you believe there is an error, contact ",
                  o.createElement(
                    "b",
                    null,
                    o.createElement("a", { href: t.help }, t.longname)
                  ),
                  "."
                )
              );
              return o.createElement(
                "div",
                null,
                o.createElement("span", { className: "msgs" }, i),
                a
              );
            }
            return o.createElement("span", { className: "msgs" }, i);
          }
        }), (t.prototype.render = function() {
          var e = this.props.state,
            t = this.props.state.bibmodel,
            n = t.currentDS,
            r = null;
          (e.isfailed || e.isdisabled) && (r = null), e.isloading &&
            (r = Object(s.a)()), e.isloaded &&
            (r = o.createElement(
              "div",
              { className: "bib-col2" },
              o.createElement(u.a, {
                name: "References",
                paperGroup: t.references,
                dataSource: n
              }),
              o.createElement(u.a, {
                name: "Citations",
                paperGroup: t.citations,
                dataSource: n
              })
            ));
          var i = a.q,
            l = a.u
              ? o.createElement(
                  o.Fragment,
                  null,
                  "[",
                  o.createElement(
                    "a",
                    {
                      id: "biboverlay_toggle",
                      href: "javascript:;",
                      onClick: function() {
                        return e.toggle();
                      }
                    },
                    e.isdisabled ? "Enable " + i : "Disable " + i
                  ),
                  "\xa0(",
                  o.createElement("a", { href: a.m }, "What is ", i, "?"),
                  ")]"
                )
              : null;
          return t && t.availableDS && 0 === t.availableDS.length && !a.h
            ? null
            : o.createElement(
                "div",
                { className: "bib-main" },
                o.createElement(
                  "div",
                  { className: "references-citations" },
                  o.createElement("h2", null, a.t),
                  o.createElement(
                    "div",
                    { className: "references-citations-boxes" },
                    o.createElement(
                      "div",
                      { className: "bib-sidebar-source" },
                      this.generate_sources(),
                      o.createElement("span", null, l)
                    ),
                    o.createElement(
                      "div",
                      { className: "bib-sidebar-msgs" },
                      this.generate_messages()
                    )
                  )
                ),
                r
              );
        }), (t = c([r.a], t));
      })(o.Component);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return m;
    });
    var r = n(4),
      o = n(7),
      i = n(1),
      a = (n.n(i), n(5)),
      u = n(2),
      s = n(0),
      l = n(54),
      c =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      f =
        (this && this.__decorate) ||
        function(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        },
      p =
        (this && this.__values) ||
        function(e) {
          var t = "function" === typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" === typeof e.length)
            return {
              next: function() {
                return e && r >= e.length && (e = void 0), {
                  value: e && e[r++],
                  done: !e
                };
              }
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      d =
        (this && this.__read) ||
        function(e, t) {
          var n = "function" === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      h =
        (this && this.__spread) ||
        function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(d(arguments[t]));
          return e;
        },
      m = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.sort_field = ""), (t.sort_order = "down"), (t.filter_text =
            ""), (t.page = 1), t;
        }
        return c(t, e), Object.defineProperty(t.prototype, "fdata", {
          get: function() {
            if (!this.props.paperGroup) return [];
            var e = this.props.paperGroup.documents.slice();
            return this.filterPapers(this.sortPapers(this.props.paperGroup, e));
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "pdata", {
          get: function() {
            var e = this.fdata,
              t = u.f * (this.page - 1),
              n = Math.min(t + u.f, e.length);
            return e.slice(t, n);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "cname", {
          get: function() {
            return this.props.paperGroup.header;
          },
          enumerable: !0,
          configurable: !0
        }), (t.prototype.redrawMathJax = function() {
          try {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
          } catch (e) {
            console.log("MathJax not found");
          }
        }), (t.prototype.componentDidMount = function() {
          this.redrawMathJax();
        }), (t.prototype.componentDidUpdate = function() {
          this.redrawMathJax();
        }), (t.prototype.render = function() {
          var e = this.fdata,
            t = this.props.paperGroup,
            n = this.props.dataSource,
            r = t ? this.pdata : [];
          if (!this.props.paperGroup) return null;
          var o = t.documents.length,
            u = o === n.max_count ? o.toString() + "+" : o.toString(),
            s = "";
          s = e.length !== o ? "(" + e.length + "/" + u + ")" : "(" + u + ")";
          var c = n.email
              ? "mailto:" +
                n.email +
                "?subject=Reference and citation data for arXiv article " +
                Object(a.c)()
              : t.header_url,
            f = this.props.name.toLowerCase(),
            p =
              "Of this article's " +
              f +
              ", only displaying the " +
              n.max_count +
              " most cited works. For all " +
              f +
              ", follow this link to " +
              n.longname +
              ".",
            d =
              o === n.max_count
                ? i.createElement(
                    "a",
                    {
                      title: p,
                      href: t.header_url,
                      target: "_blank",
                      rel: "noopener",
                      className: "bib-col-title bib-star",
                      style: { color: "red" }
                    },
                    "*"
                  )
                : null,
            h = i.createElement(
              "div",
              { className: "bib-utils" },
              i.createElement(
                "div",
                { className: "center" },
                this.create_filter_div()
              ),
              i.createElement(
                "div",
                { className: "center" },
                this.create_sorter_div()
              ),
              i.createElement(
                "div",
                { className: "center" },
                this.create_paging_div()
              )
            ),
            m = 0 === t.count ? null : h;
          return i.createElement(
            "div",
            {
              className: "bib-col",
              id: "col-" + this.props.name.toLocaleLowerCase()
            },
            i.createElement(
              "div",
              { className: "bib-col-header" },
              i.createElement(
                "span",
                { className: "bib-col-center" },
                i.createElement(
                  "a",
                  { className: "bib-col-title", href: t.header_url },
                  this.props.name,
                  " ",
                  s
                ),
                " ",
                d
              ),
              i.createElement(
                "div",
                { className: "bib-branding bib-col-center" },
                i.createElement(
                  "div",
                  { className: "bib-col-aside bib-branding-info" },
                  i.createElement("span", null, "Data provided by:"),
                  i.createElement("br", null),
                  i.createElement(
                    "span",
                    null,
                    "(",
                    i.createElement("a", { href: c }, "report data issues"),
                    ")"
                  )
                ),
                i.createElement(
                  "div",
                  { className: "bib-branding-logo" },
                  i.createElement(
                    "a",
                    { href: n.homepage, target: "_blank", rel: "noopener" },
                    i.createElement("img", {
                      alt: n.longname,
                      src: n.logo,
                      height: "32px",
                      width: "auto"
                    })
                  )
                )
              )
            ),
            m,
            i.createElement(
              "div",
              null,
              r.map(function(e) {
                return i.createElement(l.a, { key: e.index, paper: e });
              })
            )
          );
        }), (t.prototype.create_filter_div = function() {
          var e = this,
            t = "bib-filter-input--" + this.cname;
          return i.createElement(
            "div",
            { className: "bib-filter" },
            i.createElement(
              "label",
              { htmlFor: t, className: "bib-filter-label" },
              "Filter: "
            ),
            i.createElement("input", {
              type: "search",
              id: t,
              className: "bib-filter-input",
              value: this.filter_text,
              onChange: function(t) {
                (e.page = 1), (e.filter_text = t.target.value);
              }
            })
          );
        }), (t.prototype.sortPapers = function(e, t) {
          if (!e || !t) return [];
          "" === this.sort_field &&
            (this.sort_field = e.sorting.sorters_default);
          var n = this.sort_field,
            r = this.props.paperGroup.sorting.sorters;
          return r[n] && r[n].func
            ? (function(e, t, n) {
                var r = "up" === n ? -1 : 1;
                return e.sort(function(e, n) {
                  return t(e) > t(n)
                    ? -1 * r
                    : t(e) < t(n)
                      ? 1 * r
                      : e.simpletitle > n.simpletitle
                        ? 1
                        : e.simpletitle < n.simpletitle ? -1 : 0;
                });
              })(t, r[n].func, this.sort_order)
            : (
                console.log(
                  "Could not sort: no sort entry in sorter for '" +
                    n +
                    "'\n                Check datasource sorting configuration."
                ),
                t
              );
        }), (t.prototype.filterPapers = function(e) {
          var t, n, r, o;
          if (0 === this.filter_text.length || "" === this.filter_text)
            return e;
          var i = this.filter_text.toLocaleLowerCase().split(" "),
            a = e;
          try {
            for (var u = p(i), s = u.next(); !s.done; s = u.next()) {
              var l = s.value,
                c = [];
              try {
                for (
                  var f = ((r = void 0), p(a)), d = f.next();
                  !d.done;
                  d = f.next()
                ) {
                  var h = d.value;
                  h.searchline.includes(l) && c.push(h);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  d && !d.done && (o = f.return) && o.call(f);
                } finally {
                  if (r) throw r.error;
                }
              }
              a = c;
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              s && !s.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
          return a;
        }), (t.prototype.totalPages = function() {
          return Math.floor((this.fdata.length - 1) / u.f) + 1;
        }), (t.prototype.toggle_sort = function() {
          (this.sort_order =
            "up" === this.sort_order ? "down" : "up"), (this.page = 1);
        }), (t.prototype.change_sort_field = function(e) {
          (this.sort_order = this.props.paperGroup.sorting.sorters_updown[
            e
          ]), (this.sort_field = e), (this.page = 1);
        }), (t.prototype.create_sorter_div = function() {
          var e = this;
          if (!this.props.paperGroup.sorting) return null;
          var t = "sort_field--" + this.cname;
          return i.createElement(
            "div",
            { className: "bib-sorter" },
            i.createElement(
              "label",
              { htmlFor: t, className: "sort-label" },
              "Sort: "
            ),
            i.createElement(
              "select",
              {
                className: "sort_field",
                id: t,
                onChange: function(t) {
                  e.change_sort_field(t.target.value);
                },
                value: this.sort_field
              },
              this.sort_options(this.props.paperGroup.sorting)
            ),
            i.createElement(
              "span",
              { className: "bib-sort-arrow sort-label" },
              i.createElement(
                "a",
                {
                  href: "javascript:;",
                  onClick: function(t) {
                    t.preventDefault(), e.toggle_sort();
                  }
                },
                i.createElement(
                  "span",
                  {
                    className: "up" !== this.sort_order ? "disabled" : "",
                    title: "Sort ascending"
                  },
                  "\u25b2"
                ),
                i.createElement(
                  "span",
                  {
                    className: "down" !== this.sort_order ? "disabled" : "",
                    title: "Sort descending"
                  },
                  "\u25bc"
                )
              )
            )
          );
        }), (t.prototype.sort_options = function(e) {
          return e
            ? e.sorters_order.map(function(t) {
                return e.sorters[t]
                  ? i.createElement(
                      "option",
                      { value: t, key: t },
                      e.sorters[t].name
                    )
                  : (
                      t &&
                        console.log(
                          "No sorter with key '" +
                            t +
                            "' Check datasource sorting configuration."
                        ),
                      null
                    );
              })
            : [];
        }), (t.prototype.create_paging_div = function() {
          var e = this;
          if (!this.fdata) return null;
          var t = this.page,
            n = this.totalPages(),
            r = d(["\u25c0", "\u25b6", "..."], 3),
            o = r[0],
            a = r[1],
            u = r[2],
            l = function(e, t) {
              return (t = void 0 === t ? "disabled" : t), i.createElement(
                "li",
                { key: e + Object(s.g)(), className: t },
                i.createElement("span", null, e)
              );
            },
            c = function(t, n) {
              return i.createElement(
                "li",
                { key: t + (n || "none") },
                i.createElement(
                  "a",
                  {
                    title: "Page " + t,
                    href: "javascript:" + t + ";",
                    onClick: function(n) {
                      n.preventDefault(), (e.page = t);
                    }
                  },
                  void 0 === n ? t : n
                )
              );
            },
            f = function(e) {
              var r = e < 0 ? o : a;
              return t + e < 1 || t + e > n ? l(r) : c(t + e, r);
            },
            p = function(e, n) {
              return void 0 === n || n ? (e === t ? l(e, "bold") : c(e)) : l(u);
            },
            m = [];
          if ((m.push(f(-1)), n <= 7))
            for (var v = 1; v <= n; v++) m.push(p(v));
          else {
            m.push(p(1)), m.push(p(2, t <= 4));
            var y = Math.min(n - 2 - 2, Math.max(3, t - 1)),
              g = Math.max(5, Math.min(n - 2, t + 1));
            for (v = y; v <= g; v++) m.push(p(v));
            m.push(p(n - 1, t >= n - 2 - 1)), m.push(p(n - 0));
          }
          m.push(f(1));
          var b = "bib-jump-label--" + this.cname;
          return i.createElement(
            "div",
            { className: "center bib-pager" },
            i.createElement(
              "span",
              null,
              i.createElement("span", null, "Pages:"),
              i.createElement("ul", { className: "bib-page-list" }, m),
              i.createElement("label", { htmlFor: b }, "Skip: "),
              i.createElement(
                "select",
                {
                  id: b,
                  value: this.page,
                  onChange: function(t) {
                    return (e.page = parseInt(t.target.value, 10));
                  }
                },
                h(Array(n).keys()).map(function(e) {
                  return i.createElement(
                    "option",
                    { key: e, value: e + 1 },
                    e + 1
                  );
                })
              )
            )
          );
        }), f([r.e], t.prototype, "fdata", null), f(
          [r.e],
          t.prototype,
          "pdata",
          null
        ), f([r.e], t.prototype, "cname", null), f(
          [r.l],
          t.prototype,
          "sort_field",
          void 0
        ), f([r.l], t.prototype, "sort_order", void 0), f(
          [r.l],
          t.prototype,
          "filter_text",
          void 0
        ), f([r.l], t.prototype, "page", void 0), f(
          [r.d],
          t.prototype,
          "toggle_sort",
          null
        ), f([r.d], t.prototype, "change_sort_field", null), (t = f([o.a], t));
      })(i.Component);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return u;
    });
    var r = n(1),
      o = (n.n(r), n(2)),
      i = n(21),
      a =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      u = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return a(t, e), (t.prototype.render = function() {
          var e = this.props.paper,
            t = e.authors.map(function(e) {
              return r.createElement(
                "a",
                {
                  key: e.url || e.name,
                  href: e.url,
                  target: "_blank",
                  rel: "noopener"
                },
                e.name
              );
            });
          t.length > o.e &&
            (t = t.slice(0, o.e)).push(
              r.createElement(
                "a",
                { key: e.url, href: e.url, target: "_blank", rel: "noopener" },
                "..."
              )
            );
          var n = e.citation_count
            ? "(citations: " + e.citation_count + ")"
            : "";
          return r.createElement(
            "div",
            { className: "bib-paper-container" },
            r.createElement(
              "div",
              { className: "bib-cite" },
              r.createElement(i.b, { paper: this.props.paper })
            ),
            r.createElement(
              "div",
              { className: "bib-paper-overhang" },
              r.createElement(
                "div",
                { className: "bib-paper" },
                r.createElement(
                  "a",
                  {
                    className: "notinfluential mathjax",
                    href: e.url,
                    target: "_blank",
                    rel: "noopener"
                  },
                  e.title
                ),
                r.createElement(
                  "span",
                  { className: "jinfo" },
                  r.createElement("span", { className: "venue" }, e.venue),
                  r.createElement("span", { className: "year" }, e.year),
                  r.createElement("span", { className: "citations" }, n)
                ),
                r.createElement("div", { className: "bib-authors" }, t)
              ),
              r.createElement(
                "div",
                { className: "bib-paper-links" },
                r.createElement("div", { className: "arrow" }),
                r.createElement("span", null, "View article:"),
                r.createElement(i.a, { paper: this.props.paper })
              )
            )
          );
        }), t;
      })(r.Component);
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcUDwMNpMNksgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAJmSURBVGje7ZgxiBpBFIb/tx64G6+zsQiBHDYhaey8JpV1qoBgGzCtzXFNck1Ai5RyVUBstrAW0tsJKYXTgFyRJiTX5W41p+6+NDvHuO7p7Lqa45gPBnR4b+f9772dGQU0Go1Go9FoNLuCFO1eAHBjrnHl++Zi+qcADJMQewbAA8AxR2ULX/bXPtsUpKEgZB6hcttUfZ3/fJPRQYQH8nQ6JcdxlIyLxSLG4/HSXD6fR7/fV/LPZDKwLEs5uChCyDRNmKap1tipVOhcNpuNWhHRYlu31v/m0QghlfdMC3loaCFayGMQQhTrkE9++yWie8fK4WekVhYfjUYgIvaH8PVylPsdtC0UCvJXLwkhT1QeJFMqlXAxvCApo2vzc43rlZv1YDCQK5JO4oryEcB3ALeB+RsAX4PGi8UCvV5PDuIpgGcAiiHnwwcAr1y4S/eZSrniuu7dnAHg0y5b/r3o32q1yp7nMTNzrVYLXsM39n8a6V/sM3EmbMBwpSv8mwRu0GtP228AmIi4XC4zM7PjOAyACeT5QbxeE8RbYXv88viPEHL++dyRhPA+NqG7rAtarVaUavwAwAYZ3unJqcvMfDm8/HtIhzd+IhjA0S6rsSTEsixmZp7P50ERuQ1B/BTtIxIBQFTD84XunIkIuF6vMzNzt9uNUo2VinY6HTbIkH9SZ/ch5Eos2Gg0RDblkVEV0m63w/w97ImlbNq2LQcxU/CfCXvbtrnZbEatZvJCQsZzBf/boJ/0gs/ibqNxhYTNeYqHLN/zmeLGdBBTSAWAFfJH2pcICXwniWDp3aN9t5dGo9FoNJqHxj9RhUx0kSu/IQAAAABJRU5ErkJggg==";
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURf////y1Kvy1Jv21JCMfIP20Jfy0JP21Jfy1Jfy0JSUiIsuaO/2zH/yzH/yxGf20JP2zHvy0If+8I//w1f///vy+RPy1JP7hqPy0I/20ISEdHyQgIPyzIv20I/2yHPyyHP/+/v+5I/+3JP22Kf62JPyzIf21JqiBOCQfIP/9+yIeH/yxG/2vFP/w1P3ASP23LP3CTf27NxkZIf2yHhoZHv2wFv2/Rf/79fu2JxwaHxQUHP/04P2xGv7gp/3GVv/pviAdHv/9+f7Sff/14v25M//x2P/36P7v0RcXHf747f25Mf29Pf7ovf7HXP/+/P/78//BI/26Nfu3J/24Lv7fovi2LP/89hARHP28OZV2OiIeIP7IXv/68f7irP22J//46v3LZ/29QP7ak/3FVv7en/7lsv28O//tzP3JYSAeIf/57//z3BQWI/3KZP/z3v+8If/25v+7Hf3Qd/7nuv/8+B0cIiAeI3xiN//25P2zIf2+Qv/x1/3CS/7ltf3DUf7cmx4bHjQxMf7hq//qw/e2J/3XjP7syBkaJf3Mav3GWfy0Jv3Zkf3Ref7Yj/7jr/7ty/7gpfy7JP3Vhf3OcigmK/61JPSzLRITHYhqNP25MP7OcDEuL/yuEf/y2v39/RoZIZp4Of7TgG1aOf+7JP3FVP7pwP3LZf7Pc/3Xif3ViP7blv7Vg/7uzxwcJ/+/Jv3MbBQVH9ihNvS1J4FlM8STNP7ksaF8N7iMOEI6M/y5KeyuLf25I/yzJKV/OLWJNduhLoNnOCIgJ1RHNS0qLe+wKP/sxt+mMs6aNcaVOOWpMf3alf+5Jv+8KP+7If7mueqpKv23KyomJ2BROi8pJPy7OOSpNbCGOtOeNv++LGZUODYwLM2ZM0tAMJZ0NHReODo1Ma6ENv3Nbv3RfPzTf/3fpPzTgf3Yj9CbNc+YK9SdL05ENvGzKRYWH3tgNOCkKlpMN19KKCIgI2BPM/q9RP+9It+oOt+nOo9yPOKoK8mZO3NZLPu0JAYLHMuaOfzPc/y4L3TLoIoAABbRSURBVHja7FkLcJTVFTb7577afeQXWHZhs4ub7JoaTIIhkTxUghGEkNAApchDHrGQCojlMSOIorwEtWCDD1pAi+JMsYBOJFgeVqHWqVYpKnVqpe2IOJ1W2jrTzrTTzkjvOef+u//+iwKKznSml0zY3X+559zvnPOd71wuuuj/639xtU2YMu3Whjm3m7X1lmuHjxzT9CUZ/9rIObN7Xv1gesfSUf6ioqLqoqJ4ybHa1o93jB/d67YxX7T1MVuveer+qmZVXp4IRG1uWWEe5rzYDgTijf6jLZO7Vsy+re0Ls76o19T3t7c3xv12iEklhFBSCP0K/hJK8Ei0urF46bz7rrn1CzF/W8+wO0vi/phUUtsU+Jfk2riU2roAP/RH3B/3z+qcuXLRhTZ/3czWdn+gGE7MlFJMCQUYMP1KOyABDcXgt5ShJYkhS9/ruflCmr9827Kjfhv2Z4A2B8QFQA9Q6AWBEPCDeAjJU0sGtZ68YC5c29VSkgoByvrEgL3gCIA+viRPAAx8BVAQEJFo8/aTFyQQE2bOOmpbCrdnTBlLQnALcwF8UCqsvUFAlOLgFDzhfNy60Z/f/uiqgpCkNBeQdkLgG3SEMzo9ZASWBRqWjGtnACuuRp34nBUxfNhphfvCD5mFoDvuODaVME/hY0afCPQxXPutz8MLa5aFAWJ9UMHw5Ob4hgQsMApnN47hA0wMnQSM0pOHTkz5rOavXD5qCewvnX0xyeAllB6DgiAIsBh0fpiDm4BRpioR7xjx2UBo2BiNSAMrbklYKyxDQTWo8NBAQsiN0oEDySkESGj4/JV9J3wG+zs7GsO4P/qgkxr2liKMIZBIhNoSJygUYwQORUNQKmgQ0KXi6Orz5oS2lbVBYUjewRVjjEcMQxMAPkQsQk5lEjBweIWZA7mLb3n50+dZDW09LXGn5h22N1WYSXh9aGZRZUgsE6hGDm5RSOBrDD3QLwOT55yXA1Obq82ZwCTGFzGnUoMcxNgjxJjs+ksQC21SAl9xhpxsKBL8jq3rdR72H2j3Y2YL7DcUbqz8cMYLRqAIkxKMEVJQLRoAQIcp0xkkMJVV3DHinO2fbE5hyGErwzrC4RwTZ0XsCOYwQgoTHnsTk6Y/UlkIswXnrbefo/317cV4NsmwjuA1GnAKkvgfDgi1zqkFYRCQghhlKlUFdkjqWSGr85ZzY/8WbnKPUTZjWmtUxUEdW0U5qENARASVAPbALJMc1QIIBuJNRVukIzLt06T43rRzkR61FsCmsvyu317y9exKapSJhpjTlST+4SRMGEGBkcFwBGq21GzZUh7zWZGus6vWaetgP24YAKMthO+P/7zBWT/8dRJ5RpCXJgupYhg1ATg6p4LVnwUrf7Bi9B1PVfkT6ciNUz2sPOBRrwMnfBbG2xAP1dvY5+fWfdus/l+9mLoCp06EIHGmS48KllGhKFRPUsUaJ/dqatNrzNRB5SzWvuEsDqxoj0D0jcRhpsMNufSxywrN+go4oEgamkrFJDctQHAgIsQfdrGCG0dmyL1Poy+wzpMGA3LfjljmB4HBCABDRPKhIZde0c/lgOn1Tm/CcAiHMjH9sRgBnsT2huzuPQV+Ud414VMQuPnjgDRFxLGjY54x4XEA2A6qDavUEDYpAh0HpChpYT2qlFrh2n7k2rhQ/pU5h89FoG9lsTLtxPRUjiEYmxsC04apGkmSO9SjDHUoIsFExeXu/ccPsUWsYsonOrB1e8KhVqN2JfVjTw4cNIA7uktiRUpDPcDDkiamdE1nTshHNwekiHeZd496HZjw3WppkgpFFQgqqq6xuSFQzneMKDTdSlDjw/6Hilmla6bn6LE1s+L6yyUjPsGBDRNTxP1GZFHzharyOkDKwLC0ZMQ3BIPhZQqKLzh5uNuBhe3Veuvi1t5ndGDM/UGT3ahrgQaQXxU48FhOEhIDkCgzQplJ04Ow/6Fv+rNEn5wWuDxtSy1z7z1COZCbgL03VBY7HU4XAR4QO6oWdx4HoC9gsQujDzOkr6gKKTE0NdjRm9wiv7OcFFXHojNwQNOJOByBOQokZCSQrkbLW4b0DadhmIlQGJlC+UdqTCRqs2UwYLkvQG389Pp8CHrvrLSko+uY4Ch1Da14ecCoPurzzhCCfVghdrRNCOAIJ1ozWmz9oASpZuVblz81tp2oZlh23AgMk1aGir1VkM0AI4yQ90CmakdQTZvhJRyovQoroeHH4wLMDLHWxCP5I3AlR+1LUs4RQkCFehevA0q5RgUYSA3gwslCI5pBsYdTkYoFO3bMa0/Z1Mbh3xUsyHPgpoA5krlooN0teYYynM9RjJCrmPwYKWlGJ9xEB4ATUWv3Iony6oBtuVpFqMIrEJsqIiw7VuDWXDrC1tuM6GIA9mJ0M2L4kDuDqjLDJM++peZB7Ck5P/2qdwxdoozkdgIgGYHALFWanwOkzDDviDV07iicAxj1CGemZFleR4lAIlEsafXMSsNiRLr0RfgXpUm9Skvhg3wHUK4C4VjSKo6lAoGUbcf0rxSnKwJhDuE0CGkSW5Bu12NCy8LcCEwMEW6Igra9qvul/fv3v/ThqmQyvwwNAcJhYilbtVdc/d6w99//YF7H309H7FTMqU5K5yVR27ZTqWg0ahfLjGQIp7tylfBBkvpShVTpE6v+tWfvXz46fPjwR/++Yc9fu3+ZzHeALoyifn5s7fgNGb5vePKp1lEpf0TQXtqSVVBbtaxqGayqqhYZVsyQVXVrTpfYpgxownqi+91Nfz60a+4j9fX1jzxyz6Hjm95d9VpuFTDUn1JV28tW7/TeZq5ccCzgN1JRivLaEW1NZrU9oPwAQBhiE5vxpJuF7kQ1qzdOvvbCprvn1tf1K+wPq7BfXf3czZtefjvHAaRfXyQ4aMcZJ401GwviFnC6/lKw4jrXxOkLoGIFtK2S5e67iFGKSOqSfT89fs/1l/UvzK7+hYN3/e3FxV4mTEeDV3/SHdiV42cl4EJB4xDs45pJ+0IvwKsGnWtFC1wzwvoC6p+X7Nu7+VS/ssLcVdav7o2sS6gHhC9Ws/ZTBu6fVwSJnvMcyIjdQKsLvm1DIGQ8uW/vzwZPKsxfk+4qLMyRZDJWM73hU+9XaoNpXfY+jwN+ohlIUnvpmuyTyWlIWuu15zYPLjzbQlUsazrPcuFweXPCp4TXgYBRkfonUrA+K5crQPmI5AvHT+Wcv6ywf9kZHUgHW9acbcZbWGRrUZjvQEa1xWdmxrTbB4F8SnY/e2qo29RdgwfXX183tCzPAZn6z/IBZ3Og6cSWdJ4DfmqfKGLj2QvE0VAEKvmnu693GZt0xaE/vPn4m7/dVV+Wh0Bw3bWevG94coN39G5oT6TPFAJGVzwyPj1zcTV+HIiE7mefcR9/8Tu/ePjAgYsf3vPOPXVluQ6kSh7I1RI/WhoJJCpbr+qdA8HqgereRo8D1ERg3FGBO7c6D+6r1KFJvny3KwOHvrX3G/+AOfmh+d+/9MG6HAfmJ6rcGdh2ZEaNLi9pJ4LzcoDZOi6QVwWQAIzUkt0nw6ILbtSWDry9q18W/zee311qutdDu597MKcMX49tc4vJI0drJF0f8WCtmxqnPL0lLwTYoVE2SHvibOfBWp82tOrFb2bZZvHjvymFOyeGLfV7v3tmksuB75zu675RmTHQRxdIWoIGO12zb9P4gcyLgJlkwI/oqAyTbg8pkfzwcH3GgUlvvfI6XjfSnJp85SfZZ9qBGS49NWHHQOnM8kqkSk66+bAkEfeGQKKeBk0QqbzDeXA1OPCrzdlI1/1+tyXp/hNcKO1+8ZQbgaqRrv9MWxrEe3McFEQo0ekaBhtmBMs9DjBz2aq/HivpyTgQVv/t3tyDo6ruOJ7s5dxzDrM367bMdpdkd8mSROSRwGwCDYIECQoB0oKoVAIGSANCAoKShvejRSBEnRQIrzpleFgVkUGkUB21HUSottjpQLF2VEQmtR3bjs60M52p0nt+v9+59252eQp2puevsLvce56/1/dzROL1h5yFfmDhay9A/VtQnDj1NY8z+mJ+o6vSVg9LhjlWZmFebxnjqcE070nrgMRqu4qQQtZEbYnusIPfxIkmxwpVHDs7D4Jj2C2m4IlPjq30dGC7a4WGP9eXAjAsCvsvHvakYo05QzLsAXJHhr/O6YCd4CX+7HZg5ap/5eMGUKtg2kb6L+4R7frFvFbvYS/DV1NiGsme6KmIfJShA1KLrabfnQE7IPR2oHzHP/MhQMBSpd27TzZ5Z2BjqrVxlDR7HJGSoZ6SX22mDqjihequabkzYPCUJVi56ew8poVANb2d9kCtW+wbXtfX/kUA8jKViFiVnmi3eX1aB4SuYkgW8DnucI9hD/L1Js8p+MN3odzH4Lmi4MWtDZ4Szfw9g1wz9JgVpJRK/dxMLn3KcwoW58TT4gGsI9j/x3MMa31Cbn5nlacDu14IQNKB4Xz+r4+6bsrugNfePbi+bxFKAnaXWTTZ6i36bYt3OgWWkE5OG73oZKgb7Q7w9n94DdHB3zKmg3/W9v6nXlM8/7QnoK1elrSKdNVMWKc9p7B6SjKcZgnh5aZyyItcU/zs75QpPuQxxQ/tejcflTd7WLvPHivt5fUFLd7EbnbrT8KkXIg8q8NLO5xP8wV+XT2xe1volm/q7pEGbzu33w1HHvhs67sJKvPPO3jU837whrXeovdd64YEMekMFt7pjVMentanJZMzIg/j7+8IGKeq7E4l3vxwlDsF3Zt2nflFoiBR0HbvkVWDc1Pjgfik4163W7NhfDIZTFrWgOdSSh5TysJF6WG50Br/LY3NzmYZb3+0+cW/bfEMtOLTo987efDNs7f+cX9pbqeIyLT2pYQeWXM6Gpcvr93QnFr3XV4m0pZA6WxMQPUr1uokyHdNU3rL2y953X6XLqUNvzq241jDloq0kEzExxxPw1sGdfqg28QyLtJDMqikg0OMPe6Ykx4z7H3MEm/sSgmKe3UpLy8tT8mSdEwYzfnyilLonMo+LekdoAqkqmGZnqhiwVT14dsvvTeqU07Ui0bfO6UDkvt9E68gSI+eXNYiedoeYHC0lIWN1HsO84We6nQkJrz/WXmvTMlIeVPX1A4UxQcsu+z7azbmhGy7kD4DUEW1NwL33+GxmSNL0OK1H1pYnuH9pTs+79qpXM9z6k9dTnlakBNW5Zn0mJBBLd3uhH+jZxXvK8YC9e6XDzWN6pI6CbndB3945NxabwfgGTmnL1xaeVtnRaAuU5RhE6KwHfCllKlasdJo7G7f+d6W8l5uF3J7D274/MRvzv20dy41TM/ttYxlf9ycWfmeUqyII/WmojR3HCI1KFifUiRabYD6LHn+hD99sOn+URUVve3WvaJ8cMPRnS/vnvDz/9yvW+m/v0FVUiu4tC4DnrF33UUrTM7cN6TY47i+TxGRWm7/jJTsenYlVlylLEi0n9j616aFaxsa1u5vWvX7V89MSBi+kx/8QLdfnskHeEeEWNTyLX1rZCr1MrTxohWkiixX3qlj9VBqq38WikoqmRn8ztRjdCCKgr+dChQU/OiNvx95defOnbeefKd9QkLN5bfvdRs5E4gX84JW1bg1h5+fO8duM5c9PmtA2IqaILObqGkIn9tIelaRQ/T0E6nztswPLgIKjfavEgWvtLW1vZIo2AziBBZwhAHOSXUghJmIUkjDwbhVMn6A3bKTOVYgbKKapAaJv+FmQABOYZoa9ZGisH+n+sJ36g2U61CGQGOFUjlnAYj8kWDDaMLkwJOZDPIMM1hoWVYwGJCooAkU2BmoxxLEVDUO+/AQ/sKlr7Xz1tlnmSTRa1KQY3VXpVJYO4e6F4lKJlb7NDBDn2MeIx3mDIcDBTPE3kCKslu4flia6Y4aykAThWJqHEfhe1oUd/R0rlQJRAg0XcFI4ZNa3ifojpHESvoBlwFYCjYuTUYffiAJdXrHUuBDYGjMQfWougLFYq2WUn0dITr6B1ZKYQ6pqs8xf8PHGPdMTDu9PcZGgRtAFExwkmYJVJOEyBHHI/WSQCgO3zGsyEvSEwl3xKmDLxmV6iF4Kx6dAdtrjOtyLY7BBINHHBsuskQrhlgFKMj657TjSdRGQRv2CaFvEgUAlJpFzw2ZDOhe06TSOlIYjgrC6c1IKzKTI6eiIS5n28FpZUzLHKR74qRqJQuNzeKMKMfs2j6OHs4CwsFmHHJHYrWf0nZUqSUhLZzmiYhKRugFB8RLAwlcL+uKjD6k29iSCAriUuqEk9hRjKO0Vk3vIlNEZBPRZUogQfQwJGg2qaeEPClBuvgSbFvN+ZhEIlFo3Y04EcE0KIEDxk2PR5HEMoHEjWO/ECRRVFXIEFoDwwEFLhnLPDnQQgkWh8UIzaAzqKEiRhQX1ptU9g6WgVwJMr/aUuHegK3MtOLu337bJbHx6XkBgpbRZzKV8IXw1LmiHJQjYHYZIGyCiLWAXiaJFB8RVlxqDkoqc5+3bcRl6OlZcTT/aH7QtEvqD8IxzFkS57gjVsyF0KyX9iYEVTgVFJD546nlzDSKKsJd2ZUL7ngGvbyCjjZufb0DbLtrSE00OpqW2k5MuxTqX/Lpy7NMb5UY6OkNgRqqw/CSWIuSCwM7iDgTR4xNOw88E2A2GVoM9Bb4sMiYK5T5a542AU2WThbrEl2oKtHTUDClmqOJ5z4AJkMLtNAnoEkCxNpIO6I4dSXAdeRSQ6DlMJ0zR3K0YxcI1QOmTBDuqcVKrXprBFAS0QQDMP0broy3PlJvIkckCRGh7YS2X6uv2jRLsoIm5JucZFxG9D86cqH9o5F34GpwuroqA14oEGKQPEB2jCBKYXLab4gQkYkCER+dAvfYJo1eq05G1j91VUBhR09DoOjM9AwjPyoIVJWurWDo4nGeYAsywpjUXxSZQCeZEVw68+qIym4/9oUVKS30nsO4RnGi3INySgrFmNSHnnYeRlToxuiYQCBcfNWs/fBnpobhyRDFEbqs306xkMBoIUDsGrDeEPQgXMIorFUHhkE4mzftkWu4U7AhmKeZbuwCBfk6XAU/awqhb1hoNyhdtACwJtyi6jeRa3m/HaVPz7akvrKgtz1sNDpjOhal4ITGSrvRuXDBNZbFIgN/eI1k/dBtll5fYmbopYL2OwFfPITBkSDYFyu2OkQRdBsm2f/urGtsw09Ni9OQYHAAa0HUbipOh4A3MIPkDxgsFaM8QJsh2Aqx2hHXg9cvjxk4NKxuY8iL60xaDtS7OOFUjAx3QHNOOj+I9nn2+q6AjfjSF7XjF1MnCw7lLp1rHIz8jsBwHg89I+AXUxUROX34eu/BPVqnEFdCBZEPk8TcSz0d2BOGJh+OLFpMQd+I5IwlPbKuu/Ubl012V981ceMOPKJgF5QDhUNKqBTmS3YAxENVHV/tBt5908f7MAdmOj0SFJCQMcLcRa1FiOlUUZJp5r4Zx7/yRaMlH1UW5UlPVCIcapW8rI7HwB4zIlwVwdVz4IqarBvQ9jZW5kU4hT3a9ZFVwKSLOTEY0tyKhohkD/x4btaNaY9+a9YY07Jdvkn32whoFUhv4x+UqeGFj3Ayu3hfvxt503LsguKWZB7lp9LJtZArJgIPV8COZRbFKvd0PH+DLxzeNnP65EnJeARuj2CmxjwXLwCWUxYjauVMHbh9ytysm9BGjF3TOKAlZkUECdtMaGOA+yBQGI/1LN5Y91hN1k1q1c3HLyyYURUbEvNHIgYcSXCPRjQSseJD/NManzl89+ism9qqR9/+5BNr1u1ZPD6SU9YXW9mikknFk8+vGNbv4UFZX0frMejB5tvnLPlmP93g6nPN13Xz+f+uZf+P238BO/cnmZyN/tAAAAAASUVORK5CYII=";
  },
  function(e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gYODxYNkbIc7QAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAOUSURBVFjDxZdNbFRVFMd/9743H8yI004K/aAiBpvYiQq4AI2mlS5UYhMXGEiITVi4cGWNhFATVwZCY4wxJm6MbMDYuDDBEBamsVqpwsLUFBAtLd+QDkOgTCmd6cx777poYeby3ryZIXQ8mzt37sf5n///3HPfFQBde6efRJj9SolOIWhmCU0ppoRQwyirb+jj+kti0fkYiBg1NZVGWeskwuyvvXMAEUOY/eYi7WWtKSb4/J1lNMbEQ7u8nlZ8+G2GZFotyiE6ZSWaPyrn+3/M3ncOIATNspaRf/RW2DUma0m71z6ylpp7mfw/nXsCWCrnbU1Saz0BVOr82LjF7oEsB37Nkc27x0cv2q7I928Pa+09M6t1Pm/Bp0dyzOUUoxdsbs0qdneHtDmJVW5l66NCazUGqqF99ILNXK4Q3eBpi5mMHu3qBslj4coklNVqviyo920HfvvX1oss0LC8sv3MZFqx46u5khN+6I1QV0Rbc52b3j/OWnRvMHWp8qoyBspNmEw5Wn/F44JIUI/u8k3Hte7uPI8GwNG/LH2BgM0JQ/svNaMojvfMNceVFw8N4Ni4xdglXeMt6wNavy4iKObk8J/5imtGWQBKwd7D8yRvFyJqb5F0PFPQ/LXnCr8PjeT5+W/Ltc/0XaW19xO2a99sRVw1LBfs6Q7x/GoD01gAdjbpEA1Ba3whjm9+yTFw3Dv6tibJi08bnJi0mUg61QO4Z6EAbNsUYGdH0LMC7hnI4lSxo6RKm8/DzRKYX1hjsG9bmEhILB0AWCg8U7e9QWxca/BlT5h4tMJCVNHno4ANawzaGiXxqKA+Ksjm1WLNc9tTKyVf9ITZ9V2WGzP+evjmgClhx8sB3lwf0ErrnaxiZNzm6i2H1rhkyzrvOM6lHN47kPHNiZIMxCKCT7aGePYJveh8fyLPoZE8maIL6dQVmw/eCBF8YLe1KyWvJkyGPI5l2RzofT3ocj542uLroZzmHOCnkxbvH8xg2e592ltk9UnYGpd0trvJGTxVOpKJpMPwP5Zn/vgCUIopVxKtkCVl8bOhM5bHTWn7vhOlEGr4wYFr047ngq6E/6FpqdeBJ9OKscu2z+lSwxJl9YFKFw+cTzn87oH8pTaDnR1BT1obY4KeVwqX1MUbDr0HM9iO7+O0T5R6ngcMeHdzkK0bA67TPnnd4chonvMph2hIkFhl8PYmk0hQYDlwfMLis6M5ZrOq7PP8P9/eiRi9CCi2AAAAAElFTkSuQmCC";
  },
  function(e, t, n) {
    "use strict";
    t.a = function(e) {
      a.render(
        i.createElement(b, { paper: e, key: Object(p.g)() }),
        Object(c.f)()
      );
    };
    var r = n(4),
      o = n(7),
      i = n(1),
      a = (n.n(i), n(9)),
      u = (n.n(a), n(60)),
      s = (n.n(u), n(62)),
      l = (n.n(s), n(10)),
      c = (n.n(l), n(5)),
      f = n(2),
      p = n(0),
      d =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      h =
        (this && this.__decorate) ||
        function(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        },
      m =
        (this && this.__values) ||
        function(e) {
          var t = "function" === typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" === typeof e.length)
            return {
              next: function() {
                return e && r >= e.length && (e = void 0), {
                  value: e && e[r++],
                  done: !e
                };
              }
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      v = { arxiv: "arXiv API", doi: "Crossref Citation Format" },
      y = {
        arxiv: "https://arxiv.org/help/api/index",
        doi: "https://www.crossref.org/labs/citation-formatting-service/"
      },
      g = new Set([
        "a",
        "about",
        "above",
        "above",
        "across",
        "after",
        "afterwards",
        "again",
        "against",
        "all",
        "almost",
        "alone",
        "along",
        "already",
        "also",
        "although",
        "always",
        "am",
        "among",
        "amongst",
        "amoungst",
        "amount",
        "an",
        "and",
        "another",
        "any",
        "anyhow",
        "anyone",
        "anything",
        "anyway",
        "anywhere",
        "are",
        "around",
        "as",
        "at",
        "back",
        "be",
        "became",
        "because",
        "become",
        "becomes",
        "becoming",
        "been",
        "before",
        "beforehand",
        "behind",
        "being",
        "below",
        "beside",
        "besides",
        "between",
        "beyond",
        "bill",
        "both",
        "bottom",
        "but",
        "by",
        "call",
        "can",
        "cannot",
        "cant",
        "co",
        "con",
        "could",
        "couldnt",
        "cry",
        "de",
        "describe",
        "detail",
        "do",
        "done",
        "down",
        "due",
        "during",
        "each",
        "eg",
        "eight",
        "either",
        "eleven",
        "else",
        "elsewhere",
        "empty",
        "enough",
        "etc",
        "even",
        "ever",
        "every",
        "everyone",
        "everything",
        "everywhere",
        "except",
        "few",
        "fifteen",
        "fify",
        "fill",
        "find",
        "fire",
        "first",
        "five",
        "for",
        "former",
        "formerly",
        "forty",
        "found",
        "four",
        "from",
        "front",
        "full",
        "further",
        "get",
        "give",
        "go",
        "had",
        "has",
        "hasnt",
        "have",
        "he",
        "hence",
        "her",
        "here",
        "hereafter",
        "hereby",
        "herein",
        "hereupon",
        "hers",
        "herself",
        "him",
        "himself",
        "his",
        "how",
        "however",
        "hundred",
        "ie",
        "if",
        "in",
        "inc",
        "indeed",
        "interest",
        "into",
        "is",
        "it",
        "its",
        "itself",
        "keep",
        "last",
        "latter",
        "latterly",
        "least",
        "less",
        "ltd",
        "made",
        "many",
        "may",
        "me",
        "meanwhile",
        "might",
        "mill",
        "mine",
        "more",
        "moreover",
        "most",
        "mostly",
        "move",
        "much",
        "must",
        "my",
        "myself",
        "name",
        "namely",
        "neither",
        "never",
        "nevertheless",
        "next",
        "nine",
        "no",
        "nobody",
        "none",
        "noone",
        "nor",
        "not",
        "nothing",
        "now",
        "nowhere",
        "of",
        "off",
        "often",
        "on",
        "once",
        "one",
        "only",
        "onto",
        "or",
        "other",
        "others",
        "otherwise",
        "our",
        "ours",
        "ourselves",
        "out",
        "over",
        "own",
        "part",
        "per",
        "perhaps",
        "please",
        "put",
        "rather",
        "re",
        "same",
        "see",
        "seem",
        "seemed",
        "seeming",
        "seems",
        "serious",
        "several",
        "she",
        "should",
        "show",
        "side",
        "since",
        "sincere",
        "six",
        "sixty",
        "so",
        "some",
        "somehow",
        "someone",
        "something",
        "sometime",
        "sometimes",
        "somewhere",
        "still",
        "such",
        "system",
        "take",
        "ten",
        "than",
        "that",
        "the",
        "their",
        "them",
        "themselves",
        "then",
        "thence",
        "there",
        "thereafter",
        "thereby",
        "therefore",
        "therein",
        "thereupon",
        "these",
        "they",
        "thickv",
        "thin",
        "third",
        "this",
        "those",
        "though",
        "three",
        "through",
        "throughout",
        "thru",
        "thus",
        "to",
        "together",
        "too",
        "top",
        "toward",
        "towards",
        "twelve",
        "twenty",
        "two",
        "un",
        "under",
        "until",
        "up",
        "upon",
        "us",
        "very",
        "via",
        "was",
        "we",
        "well",
        "were",
        "what",
        "whatever",
        "when",
        "whence",
        "whenever",
        "where",
        "whereafter",
        "whereas",
        "whereby",
        "wherein",
        "whereupon",
        "wherever",
        "whether",
        "which",
        "while",
        "whither",
        "who",
        "whoever",
        "whole",
        "whom",
        "whose",
        "why",
        "will",
        "with",
        "within",
        "without",
        "would",
        "yet",
        "you",
        "your",
        "yours",
        "yourself",
        "yourselves",
        "the"
      ]),
      b = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.cache = {}), (n.active = !0), (n.source =
            "doi"), (n.format = "bibtex"), (n.content = ""), n.props.paper
            .doi || (n.source = "arxiv"), (n.active = !0), n.query(), n;
        }
        return d(t, e), (t.prototype.key = function() {
          return this.source + "_" + this.format;
        }), Object.defineProperty(t.prototype, "cached_value", {
          get: function() {
            return this.cache[this.key()];
          },
          set: function(e) {
            this.cache[this.key()] = e;
          },
          enumerable: !0,
          configurable: !0
        }), (t.prototype.chars_only = function(e) {
          return e.replace(/[^a-z0-9 ]/gim, "");
        }), (t.prototype.fmt_first_last_name = function(e) {
          var t = this.chars_only(e).split("and");
          if (t.length <= 0) return "unknown";
          var n = t[0].trim().split(" ");
          return n.length <= 0 ? "unknown" : n[n.length - 1];
        }), (t.prototype.fmt_first_nonstop = function(e) {
          var t,
            n,
            r = this.chars_only(e).split(" ");
          if (r.length <= 0) return "unknown";
          try {
            for (var o = m(r), i = o.next(); !i.done; i = o.next()) {
              var a = i.value;
              if (!g.has(a.toLocaleLowerCase())) return a;
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              i && !i.done && (n = o.return) && n.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          return "unknown";
        }), (t.prototype.fmt_author_list = function(e) {
          return e
            .map(function(e) {
              return e.toString().trim();
            })
            .join(" and ");
        }), (t.prototype.format_bibtex_arxiv = function(e) {
          var t = new u.DOMParser().parseFromString(e, "text/xml"),
            n = s.useNamespaces({
              atom: "http://www.w3.org/2005/Atom",
              arxiv: "http://arxiv.org/schemas/atom"
            }),
            r = n("string(//atom:entry/atom:title/text())", t),
            o = n("//atom:entry/atom:author/atom:name/text()", t),
            i = n("//atom:entry/atom:published/text()", t),
            a = n("string(//atom:entry/arxiv:primary_category/@term)", t),
            l = Object(p.f)(r.toString()),
            c = this.fmt_author_list(o),
            f = i.toString().split("-")[0],
            d = this.fmt_first_last_name(c).toLocaleLowerCase(),
            h = this.fmt_first_nonstop(l).toLocaleLowerCase();
          return (
            "@misc{" +
            this.chars_only("" + d + f + h) +
            ",\n    title={" +
            l +
            "},\n    author={" +
            c +
            "},\n    year={" +
            f +
            "},\n    eprint={" +
            this.props.paper.arxivId +
            "},\n    archivePrefix={arXiv},\n    primaryClass={" +
            a +
            "}\n}"
          );
        }), (t.prototype.format_mla_doi = function(e) {
          return (e = e.replace("Crossref. Web.", ""));
        }), (t.prototype.format_bibtex_doi = function(e) {
          return (e = (e = (e = (e = e.replace(/^\s+/, "")).replace(
            /},/g,
            "},\n  "
          )).replace(", title=", ",\n   title=")).replace("}}", "}\n}"));
        }), (t.prototype.query_arxiv = function() {
          var e = this;
          if (((this.content = ""), this.cached_value))
            this.content = this.cached_value;
          else {
            var t = f.a + this.props.paper.arxivId;
            fetch(t)
              .then(function(e) {
                return w(e);
              })
              .then(function(e) {
                return e.text();
              })
              .then(function(t) {
                (e.content = e.format_bibtex_arxiv(
                  t
                )), (e.cached_value = e.content);
              })
              .catch(function(t) {
                return (e.content = t.message);
              });
          }
        }), (t.prototype.query_doi = function() {
          var e = this;
          if (((this.content = ""), this.cached_value))
            this.content = this.cached_value;
          else {
            var t = f.b + this.props.paper.doi,
              n = {
                headers: { Accept: "text/bibliography; style=" + this.format }
              };
            fetch(t, n)
              .then(function(e) {
                return w(e);
              })
              .then(function(e) {
                return e.text();
              })
              .then(function(t) {
                (e.content = e.format_bibtex_doi(
                  t
                )), (e.cached_value = e.content);
              })
              .catch(function(t) {
                return (e.content = t.message);
              });
          }
        }), (t.prototype.query = function() {
          "arxiv" === this.source ? this.query_arxiv() : this.query_doi();
        }), (t.prototype.change_source = function(e) {
          (this.source = e.target.value), "arxiv" === this.source &&
            (this.format = "bibtex"), this.query();
        }), (t.prototype.change_format = function(e) {
          (this.format = e.target.value), this.query();
        }), (t.prototype.render = function() {
          var e = this,
            t = this.props.paper;
          if (!this.active || (!t.doi && !t.arxivId)) return null;
          var n = !(null == t.arxivId),
            r = !(null == t.doi || "" === t.doi),
            o = !("arxiv" === this.source);
          return i.createElement(
            "div",
            { className: "modal" },
            i.createElement(
              "div",
              { className: "modal-content" },
              i.createElement(
                "div",
                { className: "modal-title" },
                i.createElement("h2", null, "Export formatted citation"),
                i.createElement(
                  "span",
                  {
                    className: "modal-close",
                    onClick: function() {
                      e.active = !1;
                    }
                  },
                  "\xd7"
                )
              ),
              i.createElement(
                "div",
                { className: "modal-buttons" },
                i.createElement(
                  "div",
                  { className: "modal-button-group" },
                  i.createElement("h4", null, "Article to reference:"),
                  i.createElement("input", {
                    id: "doi",
                    type: "radio",
                    name: "article",
                    value: "doi",
                    checked: "doi" === this.source,
                    onChange: this.change_source.bind(this),
                    disabled: !r
                  }),
                  i.createElement(
                    "label",
                    { htmlFor: "doi", className: r ? "" : "disabled" },
                    "Journal article"
                  ),
                  " ",
                  i.createElement("br", null),
                  i.createElement("input", {
                    id: "arxiv",
                    type: "radio",
                    name: "article",
                    value: "arxiv",
                    checked: "arxiv" === this.source,
                    onChange: this.change_source.bind(this),
                    disabled: !n
                  }),
                  i.createElement(
                    "label",
                    { htmlFor: "arxiv", className: n ? "" : "disabled" },
                    "arXiv e-print"
                  ),
                  " ",
                  i.createElement("br", null)
                ),
                i.createElement(
                  "div",
                  { className: "modal-button-group" },
                  i.createElement("h4", null, "Reference format:"),
                  i.createElement("input", {
                    id: "bibtex",
                    type: "radio",
                    name: "format",
                    value: "bibtex",
                    checked: "bibtex" === this.format,
                    onChange: this.change_format.bind(this)
                  }),
                  i.createElement("label", { htmlFor: "bibtex" }, "BibTeX"),
                  " ",
                  i.createElement("br", null),
                  i.createElement("input", {
                    id: "mla",
                    type: "radio",
                    name: "format",
                    value: "mla",
                    checked: "mla" === this.format,
                    onChange: this.change_format.bind(this),
                    disabled: !o
                  }),
                  i.createElement(
                    "label",
                    { htmlFor: "mla", className: o ? "" : "disabled" },
                    "MLA"
                  ),
                  " ",
                  i.createElement("br", null)
                )
              ),
              i.createElement(
                "div",
                null,
                i.createElement("h4", null, "Formatted citation:"),
                i.createElement("textarea", {
                  rows: 15,
                  cols: 75,
                  value: this.content || "loading..."
                })
              ),
              i.createElement(
                "div",
                null,
                i.createElement("span", null, "Data provided by: "),
                i.createElement("a", { href: y[this.source] }, v[this.source])
              )
            )
          );
        }), h([r.l], t.prototype, "active", void 0), h(
          [r.l],
          t.prototype,
          "source",
          void 0
        ), h([r.l], t.prototype, "format", void 0), h(
          [r.l],
          t.prototype,
          "content",
          void 0
        ), (t = h([o.a], t));
      })(i.Component);
    function w(e) {
      if (200 === e.status) return e;
      switch (e.status) {
        case 0:
          throw new Error(
            "Query prevented by browser -- CORS, firewall, or unknown error"
          );
        case 404:
          throw new Error("Citation entry not found.");
        case 500:
          throw new Error("Citation entry returned 500: internal server error");
        default:
          throw new Error("Citation error " + e.status);
      }
    }
  },
  function(e, t, n) {
    function r(e) {
      this.options = e || { locator: {} };
    }
    function o() {
      this.cdata = !1;
    }
    function i(e, t) {
      (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber);
    }
    function a(e) {
      if (e)
        return (
          "\n@" +
          (e.systemId || "") +
          "#[line:" +
          e.lineNumber +
          ",col:" +
          e.columnNumber +
          "]"
        );
    }
    function u(e, t, n) {
      return "string" == typeof e
        ? e.substr(t, n)
        : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
    }
    function s(e, t) {
      e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
    }
    (r.prototype.parseFromString = function(e, t) {
      var n = this.options,
        r = new l(),
        i = n.domBuilder || new o(),
        u = n.errorHandler,
        s = n.locator,
        c = n.xmlns || {},
        f = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };
      return s && i.setDocumentLocator(s), (r.errorHandler = (function(
        e,
        t,
        n
      ) {
        if (!e) {
          if (t instanceof o) return t;
          e = t;
        }
        var r = {},
          i = e instanceof Function;
        function u(t) {
          var o = e[t];
          !o &&
            i &&
            (o =
              2 == e.length
                ? function(n) {
                    e(t, n);
                  }
                : e), (r[t] =
            (o &&
              function(e) {
                o("[xmldom " + t + "]\t" + e + a(n));
              }) ||
            function() {});
        }
        return (n = n || {}), u("warning"), u("error"), u("fatalError"), r;
      })(u, i, s)), (r.domBuilder = n.domBuilder || i), /\/x?html?$/.test(t) &&
        (
          (f.nbsp = "\xa0"),
          (f.copy = "\xa9"),
          (c[""] = "http://www.w3.org/1999/xhtml")
        ), (c.xml = c.xml || "http://www.w3.org/XML/1998/namespace"), e
        ? r.parse(e, c, f)
        : r.errorHandler.error("invalid doc source"), i.doc;
    }), (o.prototype = {
      startDocument: function() {
        (this.doc = new c().createDocument(null, null, null)), this.locator &&
          (this.doc.documentURI = this.locator.systemId);
      },
      startElement: function(e, t, n, r) {
        var o = this.doc,
          a = o.createElementNS(e, n || t),
          u = r.length;
        s(this, a), (this.currentElement = a), this.locator &&
          i(this.locator, a);
        for (var l = 0; l < u; l++) {
          e = r.getURI(l);
          var c = r.getValue(l),
            f = ((n = r.getQName(l)), o.createAttributeNS(e, n));
          this.locator &&
            i(
              r.getLocator(l),
              f
            ), (f.value = f.nodeValue = c), a.setAttributeNode(f);
        }
      },
      endElement: function(e, t, n) {
        var r = this.currentElement;
        r.tagName;
        this.currentElement = r.parentNode;
      },
      startPrefixMapping: function(e, t) {},
      endPrefixMapping: function(e) {},
      processingInstruction: function(e, t) {
        var n = this.doc.createProcessingInstruction(e, t);
        this.locator && i(this.locator, n), s(this, n);
      },
      ignorableWhitespace: function(e, t, n) {},
      characters: function(e, t, n) {
        if ((e = u.apply(this, arguments))) {
          if (this.cdata) var r = this.doc.createCDATASection(e);
          else r = this.doc.createTextNode(e);
          this.currentElement
            ? this.currentElement.appendChild(r)
            : /^\s*$/.test(e) && this.doc.appendChild(r), this.locator &&
            i(this.locator, r);
        }
      },
      skippedEntity: function(e) {},
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(e) {
        (this.locator = e) && (e.lineNumber = 0);
      },
      comment: function(e, t, n) {
        e = u.apply(this, arguments);
        var r = this.doc.createComment(e);
        this.locator && i(this.locator, r), s(this, r);
      },
      startCDATA: function() {
        this.cdata = !0;
      },
      endCDATA: function() {
        this.cdata = !1;
      },
      startDTD: function(e, t, n) {
        var r = this.doc.implementation;
        if (r && r.createDocumentType) {
          var o = r.createDocumentType(e, t, n);
          this.locator && i(this.locator, o), s(this, o);
        }
      },
      warning: function(e) {
        console.warn("[xmldom warning]\t" + e, a(this.locator));
      },
      error: function(e) {
        console.error("[xmldom error]\t" + e, a(this.locator));
      },
      fatalError: function(e) {
        throw (console.error("[xmldom fatalError]\t" + e, a(this.locator)), e);
      }
    }), "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
      /\w+/g,
      function(e) {
        o.prototype[e] = function() {
          return null;
        };
      }
    );
    var l = n(61).XMLReader,
      c = (t.DOMImplementation = n(22).DOMImplementation);
    (t.XMLSerializer = n(22).XMLSerializer), (t.DOMParser = r);
  },
  function(e, t) {
    var n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
      r = new RegExp(
        "[\\-\\.0-9" +
          n.source.slice(1, -1) +
          "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
      ),
      o = new RegExp(
        "^" + n.source + r.source + "*(?::" + n.source + r.source + "*)?$"
      ),
      i = 0,
      a = 1,
      u = 2,
      s = 3,
      l = 4,
      c = 5,
      f = 6,
      p = 7;
    function d() {}
    function h(e, t) {
      return (t.lineNumber = e.lineNumber), (t.columnNumber =
        e.columnNumber), t;
    }
    function m(e, t, n, r, o, d) {
      for (var h, m = ++t, v = i; ; ) {
        var y = e.charAt(m);
        switch (y) {
          case "=":
            if (v === a) (h = e.slice(t, m)), (v = s);
            else {
              if (v !== u)
                throw new Error("attribute equal must after attrName");
              v = s;
            }
            break;
          case "'":
          case '"':
            if (v === s || v === a) {
              if (
                (
                  v === a &&
                    (
                      d.warning('attribute value must after "="'),
                      (h = e.slice(t, m))
                    ),
                  (t = m + 1),
                  !((m = e.indexOf(y, t)) > 0)
                )
              )
                throw new Error("attribute value no end '" + y + "' match");
              (g = e.slice(t, m).replace(/&#?\w+;/g, o)), n.add(
                h,
                g,
                t - 1
              ), (v = c);
            } else {
              if (v != l) throw new Error('attribute value must after "="');
              (g = e.slice(t, m).replace(/&#?\w+;/g, o)), n.add(
                h,
                g,
                t
              ), d.warning(
                'attribute "' + h + '" missed start quot(' + y + ")!!"
              ), (t = m + 1), (v = c);
            }
            break;
          case "/":
            switch (v) {
              case i:
                n.setTagName(e.slice(t, m));
              case c:
              case f:
              case p:
                (v = p), (n.closed = !0);
              case l:
              case a:
              case u:
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            return d.error("unexpected end of input"), v == i &&
              n.setTagName(e.slice(t, m)), m;
          case ">":
            switch (v) {
              case i:
                n.setTagName(e.slice(t, m));
              case c:
              case f:
              case p:
                break;
              case l:
              case a:
                "/" === (g = e.slice(t, m)).slice(-1) &&
                  ((n.closed = !0), (g = g.slice(0, -1)));
              case u:
                v === u && (g = h), v == l
                  ? (
                      d.warning('attribute "' + g + '" missed quot(")!!'),
                      n.add(h, g.replace(/&#?\w+;/g, o), t)
                    )
                  : (
                      ("http://www.w3.org/1999/xhtml" === r[""] &&
                        g.match(/^(?:disabled|checked|selected)$/i)) ||
                        d.warning(
                          'attribute "' +
                            g +
                            '" missed value!! "' +
                            g +
                            '" instead!!'
                        ),
                      n.add(g, g, t)
                    );
                break;
              case s:
                throw new Error("attribute value missed!!");
            }
            return m;
          case "\x80":
            y = " ";
          default:
            if (y <= " ")
              switch (v) {
                case i:
                  n.setTagName(e.slice(t, m)), (v = f);
                  break;
                case a:
                  (h = e.slice(t, m)), (v = u);
                  break;
                case l:
                  var g = e.slice(t, m).replace(/&#?\w+;/g, o);
                  d.warning('attribute "' + g + '" missed quot(")!!'), n.add(
                    h,
                    g,
                    t
                  );
                case c:
                  v = f;
              }
            else
              switch (v) {
                case u:
                  n.tagName;
                  ("http://www.w3.org/1999/xhtml" === r[""] &&
                    h.match(/^(?:disabled|checked|selected)$/i)) ||
                    d.warning(
                      'attribute "' +
                        h +
                        '" missed value!! "' +
                        h +
                        '" instead2!!'
                    ), n.add(h, h, t), (t = m), (v = a);
                  break;
                case c:
                  d.warning('attribute space is required"' + h + '"!!');
                case f:
                  (v = a), (t = m);
                  break;
                case s:
                  (v = l), (t = m);
                  break;
                case p:
                  throw new Error(
                    "elements closed character '/' and '>' must be connected to"
                  );
              }
        }
        m++;
      }
    }
    function v(e, t, n) {
      for (var r = e.tagName, o = null, i = e.length; i--; ) {
        var a = e[i],
          u = a.qName,
          s = a.value;
        if ((p = u.indexOf(":")) > 0)
          var l = (a.prefix = u.slice(0, p)),
            c = u.slice(p + 1),
            f = "xmlns" === l && c;
        else (c = u), (l = null), (f = "xmlns" === u && "");
        (a.localName = c), !1 !== f &&
          (
            null == o && ((o = {}), b(n, (n = {}))),
            (n[f] = o[f] = s),
            (a.uri = "http://www.w3.org/2000/xmlns/"),
            t.startPrefixMapping(f, s)
          );
      }
      for (i = e.length; i--; ) {
        (l = (a = e[i]).prefix) &&
          (
            "xml" === l && (a.uri = "http://www.w3.org/XML/1998/namespace"),
            "xmlns" !== l && (a.uri = n[l || ""])
          );
      }
      var p;
      (p = r.indexOf(":")) > 0
        ? ((l = e.prefix = r.slice(0, p)), (c = e.localName = r.slice(p + 1)))
        : ((l = null), (c = e.localName = r));
      var d = (e.uri = n[l || ""]);
      if ((t.startElement(d, c, r, e), !e.closed))
        return (e.currentNSMap = n), (e.localNSMap = o), !0;
      if ((t.endElement(d, c, r), o)) for (l in o) t.endPrefixMapping(l);
    }
    function y(e, t, n, r, o) {
      if (/^(?:script|textarea)$/i.test(n)) {
        var i = e.indexOf("</" + n + ">", t),
          a = e.substring(t + 1, i);
        if (/[&<]/.test(a))
          return /^script$/i.test(n)
            ? (o.characters(a, 0, a.length), i)
            : ((a = a.replace(/&#?\w+;/g, r)), o.characters(a, 0, a.length), i);
      }
      return t + 1;
    }
    function g(e, t, n, r) {
      var o = r[n];
      return null == o &&
        (
          (o = e.lastIndexOf("</" + n + ">")) < t &&
            (o = e.lastIndexOf("</" + n)),
          (r[n] = o)
        ), o < t;
    }
    function b(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function w(e, t, n, r) {
      switch (e.charAt(t + 2)) {
        case "-":
          return "-" === e.charAt(t + 3)
            ? (o = e.indexOf("--\x3e", t + 4)) > t
              ? (n.comment(e, t + 4, o - t - 4), o + 3)
              : (r.error("Unclosed comment"), -1)
            : -1;
        default:
          if ("CDATA[" == e.substr(t + 3, 6)) {
            var o = e.indexOf("]]>", t + 9);
            return n.startCDATA(), n.characters(
              e,
              t + 9,
              o - t - 9
            ), n.endCDATA(), o + 3;
          }
          var i = (function(e, t) {
              var n,
                r = [],
                o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
              (o.lastIndex = t), o.exec(e);
              for (; (n = o.exec(e)); ) if ((r.push(n), n[1])) return r;
            })(e, t),
            a = i.length;
          if (a > 1 && /!doctype/i.test(i[0][0])) {
            var u = i[1][0],
              s = a > 3 && /^public$/i.test(i[2][0]) && i[3][0],
              l = a > 4 && i[4][0],
              c = i[a - 1];
            return n.startDTD(
              u,
              s && s.replace(/^(['"])(.*?)\1$/, "$2"),
              l && l.replace(/^(['"])(.*?)\1$/, "$2")
            ), n.endDTD(), c.index + c[0].length;
          }
      }
      return -1;
    }
    function A(e, t, n) {
      var r = e.indexOf("?>", t);
      if (r) {
        var o = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (o) {
          o[0].length;
          return n.processingInstruction(o[1], o[2]), r + 2;
        }
        return -1;
      }
      return -1;
    }
    function E(e) {}
    function S(e, t) {
      return (e.__proto__ = t), e;
    }
    (d.prototype = {
      parse: function(e, t, n) {
        var r = this.domBuilder;
        r.startDocument(), b(t, (t = {})), (function(e, t, n, r, o) {
          function i(e) {
            var t = e.slice(1, -1);
            return t in n
              ? n[t]
              : "#" === t.charAt(0)
                ? (function(e) {
                    if (e > 65535) {
                      var t = 55296 + ((e -= 65536) >> 10),
                        n = 56320 + (1023 & e);
                      return String.fromCharCode(t, n);
                    }
                    return String.fromCharCode(e);
                  })(parseInt(t.substr(1).replace("x", "0x")))
                : (o.error("entity not found:" + e), e);
          }
          function a(t) {
            if (t > b) {
              var n = e.substring(b, t).replace(/&#?\w+;/g, i);
              f && u(b), r.characters(n, 0, t - b), (b = t);
            }
          }
          function u(t, n) {
            for (; t >= l && (n = c.exec(e)); )
              (s = n.index), (l = s + n[0].length), f.lineNumber++;
            f.columnNumber = t - s + 1;
          }
          var s = 0,
            l = 0,
            c = /.*(?:\r\n?|\n)|.*$/g,
            f = r.locator,
            p = [{ currentNSMap: t }],
            d = {},
            b = 0;
          for (;;) {
            try {
              var S = e.indexOf("<", b);
              if (S < 0) {
                if (!e.substr(b).match(/^\s*$/)) {
                  var x = r.doc,
                    N = x.createTextNode(e.substr(b));
                  x.appendChild(N), (r.currentElement = N);
                }
                return;
              }
              switch ((S > b && a(S), e.charAt(S + 1))) {
                case "/":
                  var T = e.indexOf(">", S + 3),
                    C = e.substring(S + 2, T),
                    k = p.pop();
                  T < 0
                    ? (
                        (C = e.substring(S + 2).replace(/[\s<].*/, "")),
                        o.error(
                          "end tag name: " + C + " is not complete:" + k.tagName
                        ),
                        (T = S + 1 + C.length)
                      )
                    : C.match(/\s</) &&
                      (
                        (C = C.replace(/[\s<].*/, "")),
                        o.error("end tag name: " + C + " maybe not complete"),
                        (T = S + 1 + C.length)
                      );
                  var O = k.localNSMap,
                    _ = k.tagName == C,
                    R =
                      _ ||
                      (k.tagName && k.tagName.toLowerCase() == C.toLowerCase());
                  if (R) {
                    if ((r.endElement(k.uri, k.localName, C), O))
                      for (var P in O) r.endPrefixMapping(P);
                    _ ||
                      o.fatalError(
                        "end tag name: " +
                          C +
                          " is not match the current start tagName:" +
                          k.tagName
                      );
                  } else p.push(k);
                  T++;
                  break;
                case "?":
                  f && u(S), (T = A(e, S, r));
                  break;
                case "!":
                  f && u(S), (T = w(e, S, r, o));
                  break;
                default:
                  f && u(S);
                  var I = new E(),
                    D = p[p.length - 1].currentNSMap,
                    T = m(e, S, I, D, i, o),
                    L = I.length;
                  if (
                    (
                      !I.closed &&
                        g(e, T, I.tagName, d) &&
                        (
                          (I.closed = !0),
                          n.nbsp || o.warning("unclosed xml attribute")
                        ),
                      f && L
                    )
                  ) {
                    for (var U = h(f, {}), B = 0; B < L; B++) {
                      var F = I[B];
                      u(F.offset), (F.locator = h(f, {}));
                    }
                    (r.locator = U), v(I, r, D) && p.push(I), (r.locator = f);
                  } else v(I, r, D) && p.push(I);
                  "http://www.w3.org/1999/xhtml" !== I.uri || I.closed
                    ? T++
                    : (T = y(e, T, I.tagName, i, r));
              }
            } catch (e) {
              o.error("element parse error: " + e), (T = -1);
            }
            T > b ? (b = T) : a(Math.max(S, b) + 1);
          }
        })(e, t, n, r, this.errorHandler), r.endDocument();
      }
    }), (E.prototype = {
      setTagName: function(e) {
        if (!o.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
      },
      add: function(e, t, n) {
        if (!o.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = { qName: e, value: t, offset: n };
      },
      length: 0,
      getLocalName: function(e) {
        return this[e].localName;
      },
      getLocator: function(e) {
        return this[e].locator;
      },
      getQName: function(e) {
        return this[e].qName;
      },
      getURI: function(e) {
        return this[e].uri;
      },
      getValue: function(e) {
        return this[e].value;
      }
    }), S({}, S.prototype) instanceof S ||
      (S = function(e, t) {
        function n() {}
        for (t in ((n.prototype = t), (n = new n()), e)) n[t] = e[t];
        return n;
      }), (t.XMLReader = d);
  },
  function(e, t, n) {
    !(function(e) {
      "use strict";
      function t(e) {
        var t = Array.prototype.slice,
          n = e.length,
          r = function() {
            var o = t.call(arguments);
            return o.length < n
              ? (function(e, n) {
                  return function() {
                    return n.apply(this, e.concat(t.call(arguments)));
                  };
                })(o, r)
              : e.apply(this, t.apply(arguments, [0, n]));
          };
        return r;
      }
      var n = t(function(e, t) {
          for (var n = 0; n < t.length; n += 1) e(t[n], n, t);
        }),
        r = t(function(e, t, r) {
          var o = t;
          return n(function(t, n) {
            o = e(o, t, n);
          }, r), o;
        }),
        o = t(function(e, t) {
          var r = new Array(t.length);
          return n(function(t, n) {
            r[n] = e(t);
          }, t), r;
        }),
        i = t(function(e, t) {
          var r = [];
          return n(function(t, n) {
            e(t, n) && r.push(t);
          }, t), r;
        });
      function a() {
        if (0 === arguments.length)
          throw new Error("compose requires at least one argument");
        var e = Array.prototype.slice.call(arguments).reverse(),
          t = e[0],
          n = e.slice(1);
        return function() {
          return r(
            function(e, t) {
              return t(e);
            },
            t.apply(null, arguments),
            n
          );
        };
      }
      var u = t(function(e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n] === t) return !0;
        return !1;
      });
      var s = t(function(e, t) {
        return t[e];
      });
      function l(e) {
        return e.toString();
      }
      var c = t(function(e, t) {
          return t.join(e);
        }),
        f = t(function(e, t, n) {
          return e + n + t;
        });
      function p(e) {
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
          var r = arguments[n];
          if (null != r)
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }
      function d() {
        this.init();
      }
      function h(e) {
        this.expression = e;
      }
      function m(e, t, n) {
        t in e || (e[t] = n);
      }
      function v() {}
      function y(e) {
        arguments.length > 0 && this.init(e);
      }
      function g(e) {
        arguments.length > 0 && this.init(e);
      }
      function b(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function w(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function A(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function E(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function S(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function x(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function N(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function T(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function C(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function k(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function O(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function _(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function R(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function P(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function I(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function D(e, t, n) {
        arguments.length > 0 && this.init(e, t, n);
      }
      function L(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function U(e, t, n) {
        arguments.length > 0 && this.init(e, t, n);
      }
      function B(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      function F(e) {
        arguments.length > 0 && this.init(e);
      }
      function M(e, t) {
        arguments.length > 0 && this.init(e, t);
      }
      (d.prototype = new Object()), (d.prototype.constructor = d), (d.superclass =
        Object.prototype), (d.prototype.init = function() {
        (this.reduceActions = []), (this.reduceActions[3] = function(e) {
          return new w(e[0], e[2]);
        }), (this.reduceActions[5] = function(e) {
          return new A(e[0], e[2]);
        }), (this.reduceActions[7] = function(e) {
          return new E(e[0], e[2]);
        }), (this.reduceActions[8] = function(e) {
          return new S(e[0], e[2]);
        }), (this.reduceActions[10] = function(e) {
          return new x(e[0], e[2]);
        }), (this.reduceActions[11] = function(e) {
          return new N(e[0], e[2]);
        }), (this.reduceActions[12] = function(e) {
          return new T(e[0], e[2]);
        }), (this.reduceActions[13] = function(e) {
          return new C(e[0], e[2]);
        }), (this.reduceActions[15] = function(e) {
          return new k(e[0], e[2]);
        }), (this.reduceActions[16] = function(e) {
          return new O(e[0], e[2]);
        }), (this.reduceActions[18] = function(e) {
          return new _(e[0], e[2]);
        }), (this.reduceActions[19] = function(e) {
          return new R(e[0], e[2]);
        }), (this.reduceActions[20] = function(e) {
          return new P(e[0], e[2]);
        }), (this.reduceActions[22] = function(e) {
          return new g(e[1]);
        }), (this.reduceActions[24] = function(e) {
          return new I(e[0], e[2]);
        }), (this.reduceActions[25] = function(e) {
          return new D(void 0, void 0, e[0]);
        }), (this.reduceActions[27] = function(e) {
          return (e[0].locationPath = e[2]), e[0];
        }), (this.reduceActions[28] = function(e) {
          return (e[0].locationPath = e[2]), e[0].locationPath.steps.unshift(
            new U(U.DESCENDANTORSELF, B.nodeTest, [])
          ), e[0];
        }), (this.reduceActions[29] = function(e) {
          return new D(e[0], [], void 0);
        }), (this.reduceActions[30] = function(e) {
          return Z.instance_of(e[0], D)
            ? (
                void 0 == e[0].filterPredicates && (e[0].filterPredicates = []),
                e[0].filterPredicates.push(e[1]),
                e[0]
              )
            : new D(e[0], [e[1]], void 0);
        }), (this.reduceActions[32] = function(e) {
          return e[1];
        }), (this.reduceActions[33] = function(e) {
          return new V(e[0]);
        }), (this.reduceActions[34] = function(e) {
          return new z(e[0]);
        }), (this.reduceActions[36] = function(e) {
          return new M(e[0], []);
        }), (this.reduceActions[37] = function(e) {
          return new M(e[0], e[2]);
        }), (this.reduceActions[38] = function(e) {
          return [e[0]];
        }), (this.reduceActions[39] = function(e) {
          return e[2].unshift(e[0]), e[2];
        }), (this.reduceActions[43] = function(e) {
          return new L(!0, []);
        }), (this.reduceActions[44] = function(e) {
          return (e[1].absolute = !0), e[1];
        }), (this.reduceActions[46] = function(e) {
          return new L(!1, [e[0]]);
        }), (this.reduceActions[47] = function(e) {
          return e[0].steps.push(e[2]), e[0];
        }), (this.reduceActions[49] = function(e) {
          return new U(e[0], e[1], []);
        }), (this.reduceActions[50] = function(e) {
          return new U(U.CHILD, e[0], []);
        }), (this.reduceActions[51] = function(e) {
          return new U(e[0], e[1], e[2]);
        }), (this.reduceActions[52] = function(e) {
          return new U(U.CHILD, e[0], e[1]);
        }), (this.reduceActions[54] = function(e) {
          return [e[0]];
        }), (this.reduceActions[55] = function(e) {
          return e[1].unshift(e[0]), e[1];
        }), (this.reduceActions[56] = function(e) {
          return "ancestor" == e[0]
            ? U.ANCESTOR
            : "ancestor-or-self" == e[0]
              ? U.ANCESTORORSELF
              : "attribute" == e[0]
                ? U.ATTRIBUTE
                : "child" == e[0]
                  ? U.CHILD
                  : "descendant" == e[0]
                    ? U.DESCENDANT
                    : "descendant-or-self" == e[0]
                      ? U.DESCENDANTORSELF
                      : "following" == e[0]
                        ? U.FOLLOWING
                        : "following-sibling" == e[0]
                          ? U.FOLLOWINGSIBLING
                          : "namespace" == e[0]
                            ? U.NAMESPACE
                            : "parent" == e[0]
                              ? U.PARENT
                              : "preceding" == e[0]
                                ? U.PRECEDING
                                : "preceding-sibling" == e[0]
                                  ? U.PRECEDINGSIBLING
                                  : "self" == e[0] ? U.SELF : -1;
        }), (this.reduceActions[57] = function(e) {
          return U.ATTRIBUTE;
        }), (this.reduceActions[59] = function(e) {
          return "comment" == e[0]
            ? B.commentTest
            : "text" == e[0]
              ? B.textTest
              : "processing-instruction" == e[0]
                ? B.anyPiTest
                : "node" == e[0] ? B.nodeTest : new B(-1, void 0);
        }), (this.reduceActions[60] = function(e) {
          return new B.PITest(e[2]);
        }), (this.reduceActions[61] = function(e) {
          return e[1];
        }), (this.reduceActions[63] = function(e) {
          return (e[1].absolute = !0), e[1].steps.unshift(
            new U(U.DESCENDANTORSELF, B.nodeTest, [])
          ), e[1];
        }), (this.reduceActions[64] = function(e) {
          return e[0].steps.push(
            new U(U.DESCENDANTORSELF, B.nodeTest, [])
          ), e[0].steps.push(e[2]), e[0];
        }), (this.reduceActions[65] = function(e) {
          return new U(U.SELF, B.nodeTest, []);
        }), (this.reduceActions[66] = function(e) {
          return new U(U.PARENT, B.nodeTest, []);
        }), (this.reduceActions[67] = function(e) {
          return new F(e[1]);
        }), (this.reduceActions[68] = function(e) {
          return B.nameTestAny;
        }), (this.reduceActions[69] = function(e) {
          return new B.NameTestPrefixAny(e[0].split(":")[0]);
        }), (this.reduceActions[70] = function(e) {
          return new B.NameTestQName(e[0]);
        });
      }), (d.actionTable = [
        " s s        sssssssss    s ss  s  ss",
        "                 s                  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "                rrrrr               ",
        " s s        sssssssss    s ss  s  ss",
        "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ",
        " s s        sssssssss    s ss  s  ss",
        "                            s       ",
        "                            s       ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "  s                                 ",
        "                            s       ",
        " s           s  sssss          s  s ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "a                                   ",
        "r       s                    rr  r  ",
        "r      sr                    rr  r  ",
        "r   s  rr            s       rr  r  ",
        "r   rssrr            rss     rr  r  ",
        "r   rrrrr            rrrss   rr  r  ",
        "r   rrrrrsss         rrrrr   rr  r  ",
        "r   rrrrrrrr         rrrrr   rr  r  ",
        "r   rrrrrrrr         rrrrrs  rr  r  ",
        "r   rrrrrrrr         rrrrrr  rr  r  ",
        "r   rrrrrrrr         rrrrrr  rr  r  ",
        "r  srrrrrrrr         rrrrrrs rr sr  ",
        "r  srrrrrrrr         rrrrrrs rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r   rrrrrrrr         rrrrrr  rr  r  ",
        "r   rrrrrrrr         rrrrrr  rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "                sssss               ",
        "r  rrrrrrrrr         rrrrrrr rr sr  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "                             s      ",
        "r  srrrrrrrr         rrrrrrs rr  r  ",
        "r   rrrrrrrr         rrrrr   rr  r  ",
        "              s                     ",
        "                             s      ",
        "                rrrrr               ",
        " s s        sssssssss    s sss s  ss",
        "r  srrrrrrrr         rrrrrrs rr  r  ",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s s        sssssssss      ss  s  ss",
        " s s        sssssssss    s ss  s  ss",
        " s           s  sssss          s  s ",
        " s           s  sssss          s  s ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        " s           s  sssss          s  s ",
        " s           s  sssss          s  s ",
        "r  rrrrrrrrr         rrrrrrr rr sr  ",
        "r  rrrrrrrrr         rrrrrrr rr sr  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "                             s      ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "                             rr     ",
        "                             s      ",
        "                             rs     ",
        "r      sr                    rr  r  ",
        "r   s  rr            s       rr  r  ",
        "r   rssrr            rss     rr  r  ",
        "r   rssrr            rss     rr  r  ",
        "r   rrrrr            rrrss   rr  r  ",
        "r   rrrrr            rrrss   rr  r  ",
        "r   rrrrr            rrrss   rr  r  ",
        "r   rrrrr            rrrss   rr  r  ",
        "r   rrrrrsss         rrrrr   rr  r  ",
        "r   rrrrrsss         rrrrr   rr  r  ",
        "r   rrrrrrrr         rrrrr   rr  r  ",
        "r   rrrrrrrr         rrrrr   rr  r  ",
        "r   rrrrrrrr         rrrrr   rr  r  ",
        "r   rrrrrrrr         rrrrrr  rr  r  ",
        "                                 r  ",
        "                                 s  ",
        "r  srrrrrrrr         rrrrrrs rr  r  ",
        "r  srrrrrrrr         rrrrrrs rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr  r  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        " s s        sssssssss    s ss  s  ss",
        "r  rrrrrrrrr         rrrrrrr rr rr  ",
        "                             r      "
      ]), (d.actionTableNumber = [
        " 1 0        /.-,+*)('    & %$  #  \"!",
        "                 J                  ",
        "a  aaaaaaaaa         aaaaaaa aa  a  ",
        "                YYYYY               ",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        "K1  KKKKKKKK .  +*)('KKKKKK  KK# K\" ",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        "                            N       ",
        "                            O       ",
        "e  eeeeeeeee         eeeeeee ee ee  ",
        "f  fffffffff         fffffff ff ff  ",
        "d  ddddddddd         ddddddd dd dd  ",
        "B  BBBBBBBBB         BBBBBBB BB BB  ",
        "A  AAAAAAAAA         AAAAAAA AA AA  ",
        "  P                                 ",
        "                            Q       ",
        " 1           .  +*)('          #  \" ",
        "b  bbbbbbbbb         bbbbbbb bb  b  ",
        "                                    ",
        "!       S                    !!  !  ",
        '"      T"                    ""  "  ',
        "$   V  $$            U       $$  $  ",
        "&   &ZY&&            &XW     &&  &  ",
        ")   )))))            )))\\[   ))  )  ",
        ".   ....._^]         .....   ..  .  ",
        "1   11111111         11111   11  1  ",
        "5   55555555         55555`  55  5  ",
        "7   77777777         777777  77  7  ",
        "9   99999999         999999  99  9  ",
        ":  c::::::::         ::::::b :: a:  ",
        "I  fIIIIIIII         IIIIIIe II  I  ",
        "=  =========         ======= == ==  ",
        "?  ?????????         ??????? ?? ??  ",
        "C  CCCCCCCCC         CCCCCCC CC CC  ",
        "J   JJJJJJJJ         JJJJJJ  JJ  J  ",
        "M   MMMMMMMM         MMMMMM  MM  M  ",
        "N  NNNNNNNNN         NNNNNNN NN  N  ",
        "P  PPPPPPPPP         PPPPPPP PP  P  ",
        "                +*)('               ",
        "R  RRRRRRRRR         RRRRRRR RR aR  ",
        "U  UUUUUUUUU         UUUUUUU UU  U  ",
        "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ",
        "c  ccccccccc         ccccccc cc cc  ",
        "                             j      ",
        "L  fLLLLLLLL         LLLLLLe LL  L  ",
        "6   66666666         66666   66  6  ",
        "              k                     ",
        "                             l      ",
        "                XXXXX               ",
        " 1 0        /.-,+*)('    & %$m #  \"!",
        "_  f________         ______e __  _  ",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1 0        /.-,+*)('      %$  #  \"!",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        " 1           .  +*)('          #  \" ",
        " 1           .  +*)('          #  \" ",
        ">  >>>>>>>>>         >>>>>>> >> >>  ",
        " 1           .  +*)('          #  \" ",
        " 1           .  +*)('          #  \" ",
        "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ",
        "V  VVVVVVVVV         VVVVVVV VV aV  ",
        "T  TTTTTTTTT         TTTTTTT TT  T  ",
        "@  @@@@@@@@@         @@@@@@@ @@ @@  ",
        "                             \x87      ",
        "[  [[[[[[[[[         [[[[[[[ [[ [[  ",
        "D  DDDDDDDDD         DDDDDDD DD DD  ",
        "                             HH     ",
        "                             \x88      ",
        "                             F\x89     ",
        "#      T#                    ##  #  ",
        "%   V  %%            U       %%  %  ",
        "'   'ZY''            'XW     ''  '  ",
        "(   (ZY((            (XW     ((  (  ",
        "+   +++++            +++\\[   ++  +  ",
        "*   *****            ***\\[   **  *  ",
        "-   -----            ---\\[   --  -  ",
        ",   ,,,,,            ,,,\\[   ,,  ,  ",
        "0   00000_^]         00000   00  0  ",
        "/   /////_^]         /////   //  /  ",
        "2   22222222         22222   22  2  ",
        "3   33333333         33333   33  3  ",
        "4   44444444         44444   44  4  ",
        "8   88888888         888888  88  8  ",
        "                                 ^  ",
        "                                 \x8a  ",
        ";  f;;;;;;;;         ;;;;;;e ;;  ;  ",
        "<  f<<<<<<<<         <<<<<<e <<  <  ",
        "O  OOOOOOOOO         OOOOOOO OO  O  ",
        "`  `````````         ``````` ``  `  ",
        "S  SSSSSSSSS         SSSSSSS SS  S  ",
        "W  WWWWWWWWW         WWWWWWW WW  W  ",
        "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ",
        "E  EEEEEEEEE         EEEEEEE EE EE  ",
        " 1 0        /.-,+*)('    & %$  #  \"!",
        "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ",
        "                             G      "
      ]), (d.gotoTable = [
        "3456789:;<=>?@ AB  CDEFGH IJ ",
        "                             ",
        "                             ",
        "                             ",
        "L456789:;<=>?@ AB  CDEFGH IJ ",
        "            M        EFGH IJ ",
        "       N;<=>?@ AB  CDEFGH IJ ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "            S        EFGH IJ ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "              e              ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                        h  J ",
        "              i          j   ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "o456789:;<=>?@ ABpqCDEFGH IJ ",
        "                             ",
        "  r6789:;<=>?@ AB  CDEFGH IJ ",
        "   s789:;<=>?@ AB  CDEFGH IJ ",
        "    t89:;<=>?@ AB  CDEFGH IJ ",
        "    u89:;<=>?@ AB  CDEFGH IJ ",
        "     v9:;<=>?@ AB  CDEFGH IJ ",
        "     w9:;<=>?@ AB  CDEFGH IJ ",
        "     x9:;<=>?@ AB  CDEFGH IJ ",
        "     y9:;<=>?@ AB  CDEFGH IJ ",
        "      z:;<=>?@ AB  CDEFGH IJ ",
        "      {:;<=>?@ AB  CDEFGH IJ ",
        "       |;<=>?@ AB  CDEFGH IJ ",
        "       };<=>?@ AB  CDEFGH IJ ",
        "       ~;<=>?@ AB  CDEFGH IJ ",
        "         \x7f=>?@ AB  CDEFGH IJ ",
        "\x80456789:;<=>?@ AB  CDEFGH IJ\x81",
        "            \x82        EFGH IJ ",
        "            \x83        EFGH IJ ",
        "                             ",
        "                     \x84 GH IJ ",
        "                     \x85 GH IJ ",
        "              i          \x86   ",
        "              i          \x87   ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "                             ",
        "o456789:;<=>?@ AB\x8cqCDEFGH IJ ",
        "                             ",
        "                             "
      ]), (d.productions = [
        [1, 1, 2],
        [2, 1, 3],
        [3, 1, 4],
        [3, 3, 3, -9, 4],
        [4, 1, 5],
        [4, 3, 4, -8, 5],
        [5, 1, 6],
        [5, 3, 5, -22, 6],
        [5, 3, 5, -5, 6],
        [6, 1, 7],
        [6, 3, 6, -23, 7],
        [6, 3, 6, -24, 7],
        [6, 3, 6, -6, 7],
        [6, 3, 6, -7, 7],
        [7, 1, 8],
        [7, 3, 7, -25, 8],
        [7, 3, 7, -26, 8],
        [8, 1, 9],
        [8, 3, 8, -12, 9],
        [8, 3, 8, -11, 9],
        [8, 3, 8, -10, 9],
        [9, 1, 10],
        [9, 2, -26, 9],
        [10, 1, 11],
        [10, 3, 10, -27, 11],
        [11, 1, 12],
        [11, 1, 13],
        [11, 3, 13, -28, 14],
        [11, 3, 13, -4, 14],
        [13, 1, 15],
        [13, 2, 13, 16],
        [15, 1, 17],
        [15, 3, -29, 2, -30],
        [15, 1, -15],
        [15, 1, -16],
        [15, 1, 18],
        [18, 3, -13, -29, -30],
        [18, 4, -13, -29, 19, -30],
        [19, 1, 20],
        [19, 3, 20, -31, 19],
        [20, 1, 2],
        [12, 1, 14],
        [12, 1, 21],
        [21, 1, -28],
        [21, 2, -28, 14],
        [21, 1, 22],
        [14, 1, 23],
        [14, 3, 14, -28, 23],
        [14, 1, 24],
        [23, 2, 25, 26],
        [23, 1, 26],
        [23, 3, 25, 26, 27],
        [23, 2, 26, 27],
        [23, 1, 28],
        [27, 1, 16],
        [27, 2, 16, 27],
        [25, 2, -14, -3],
        [25, 1, -32],
        [26, 1, 29],
        [26, 3, -20, -29, -30],
        [26, 4, -21, -29, -15, -30],
        [16, 3, -33, 30, -34],
        [30, 1, 2],
        [22, 2, -4, 14],
        [24, 3, 14, -4, 23],
        [28, 1, -35],
        [28, 1, -2],
        [17, 2, -36, -18],
        [29, 1, -17],
        [29, 1, -19],
        [29, 1, -18]
      ]), (d.DOUBLEDOT = 2), (d.DOUBLECOLON = 3), (d.DOUBLESLASH = 4), (d.NOTEQUAL = 5), (d.LESSTHANOREQUAL = 6), (d.GREATERTHANOREQUAL = 7), (d.AND = 8), (d.OR = 9), (d.MOD = 10), (d.DIV = 11), (d.MULTIPLYOPERATOR = 12), (d.FUNCTIONNAME = 13), (d.AXISNAME = 14), (d.LITERAL = 15), (d.NUMBER = 16), (d.ASTERISKNAMETEST = 17), (d.QNAME = 18), (d.NCNAMECOLONASTERISK = 19), (d.NODETYPE = 20), (d.PROCESSINGINSTRUCTIONWITHLITERAL = 21), (d.EQUALS = 22), (d.LESSTHAN = 23), (d.GREATERTHAN = 24), (d.PLUS = 25), (d.MINUS = 26), (d.BAR = 27), (d.SLASH = 28), (d.LEFTPARENTHESIS = 29), (d.RIGHTPARENTHESIS = 30), (d.COMMA = 31), (d.AT = 32), (d.LEFTBRACKET = 33), (d.RIGHTBRACKET = 34), (d.DOT = 35), (d.DOLLAR = 36), (d.prototype.tokenize = function(
        e
      ) {
        for (var t = [], n = [], r = e + "\0", o = 0, i = r.charAt(o++); ; ) {
          for (; " " == i || "\t" == i || "\r" == i || "\n" == i; )
            i = r.charAt(o++);
          if ("\0" == i || o >= r.length) break;
          if ("(" != i)
            if (")" != i)
              if ("[" != i)
                if ("]" != i)
                  if ("@" != i)
                    if ("," != i)
                      if ("|" != i)
                        if ("+" != i)
                          if ("-" != i)
                            if ("=" != i)
                              if ("$" != i)
                                if ("." != i)
                                  if ("'" != i && '"' != i)
                                    if (i >= "0" && i <= "9") {
                                      c = i;
                                      for (
                                        i = r.charAt(o++);
                                        i >= "0" && i <= "9";

                                      )
                                        (c += i), (i = r.charAt(o++));
                                      if (
                                        "." == i &&
                                        r.charAt(o) >= "0" &&
                                        r.charAt(o) <= "9"
                                      )
                                        for (
                                          c += i, c += r.charAt(
                                            o++
                                          ), i = r.charAt(o++);
                                          i >= "0" && i <= "9";

                                        )
                                          (c += i), (i = r.charAt(o++));
                                      t.push(d.NUMBER), n.push(c);
                                    } else if ("*" != i)
                                      if (":" != i || ":" != r.charAt(o))
                                        if ("/" != i)
                                          if ("!" != i || "=" != r.charAt(o))
                                            if ("<" != i)
                                              if (">" != i) {
                                                if (
                                                  "_" != i &&
                                                  !Z.isLetter(i.charCodeAt(0))
                                                )
                                                  throw new Error(
                                                    "Unexpected character " + i
                                                  );
                                                var a = i;
                                                for (
                                                  i = r.charAt(o++);
                                                  Z.isNCNameChar(
                                                    i.charCodeAt(0)
                                                  );

                                                )
                                                  (a += i), (i = r.charAt(o++));
                                                if (
                                                  t.length > 0 &&
                                                  (u = t[t.length - 1]) !=
                                                    d.AT &&
                                                  u != d.DOUBLECOLON &&
                                                  u != d.LEFTPARENTHESIS &&
                                                  u != d.LEFTBRACKET &&
                                                  u != d.AND &&
                                                  u != d.OR &&
                                                  u != d.MOD &&
                                                  u != d.DIV &&
                                                  u != d.MULTIPLYOPERATOR &&
                                                  u != d.SLASH &&
                                                  u != d.DOUBLESLASH &&
                                                  u != d.BAR &&
                                                  u != d.PLUS &&
                                                  u != d.MINUS &&
                                                  u != d.EQUALS &&
                                                  u != d.NOTEQUAL &&
                                                  u != d.LESSTHAN &&
                                                  u != d.LESSTHANOREQUAL &&
                                                  u != d.GREATERTHAN &&
                                                  u != d.GREATERTHANOREQUAL
                                                ) {
                                                  if ("and" == a) {
                                                    t.push(d.AND), n.push(a);
                                                    continue;
                                                  }
                                                  if ("or" == a) {
                                                    t.push(d.OR), n.push(a);
                                                    continue;
                                                  }
                                                  if ("mod" == a) {
                                                    t.push(d.MOD), n.push(a);
                                                    continue;
                                                  }
                                                  if ("div" == a) {
                                                    t.push(d.DIV), n.push(a);
                                                    continue;
                                                  }
                                                }
                                                if (":" == i) {
                                                  if ("*" == r.charAt(o)) {
                                                    t.push(
                                                      d.NCNAMECOLONASTERISK
                                                    ), n.push(
                                                      a + ":*"
                                                    ), o++, (i = r.charAt(o++));
                                                    continue;
                                                  }
                                                  if (
                                                    "_" == r.charAt(o) ||
                                                    Z.isLetter(r.charCodeAt(o))
                                                  ) {
                                                    for (
                                                      a += ":", i = r.charAt(
                                                        o++
                                                      );
                                                      Z.isNCNameChar(
                                                        i.charCodeAt(0)
                                                      );

                                                    )
                                                      (a += i), (i = r.charAt(
                                                        o++
                                                      ));
                                                    if ("(" == i) {
                                                      t.push(
                                                        d.FUNCTIONNAME
                                                      ), n.push(a);
                                                      continue;
                                                    }
                                                    t.push(d.QNAME), n.push(a);
                                                    continue;
                                                  }
                                                  if (":" == r.charAt(o)) {
                                                    t.push(d.AXISNAME), n.push(
                                                      a
                                                    );
                                                    continue;
                                                  }
                                                }
                                                if ("(" == i) {
                                                  if (
                                                    "comment" == a ||
                                                    "text" == a ||
                                                    "node" == a
                                                  ) {
                                                    t.push(d.NODETYPE), n.push(
                                                      a
                                                    );
                                                    continue;
                                                  }
                                                  if (
                                                    "processing-instruction" ==
                                                    a
                                                  ) {
                                                    ")" == r.charAt(o)
                                                      ? t.push(d.NODETYPE)
                                                      : t.push(
                                                          d.PROCESSINGINSTRUCTIONWITHLITERAL
                                                        ), n.push(a);
                                                    continue;
                                                  }
                                                  t.push(
                                                    d.FUNCTIONNAME
                                                  ), n.push(a);
                                                  continue;
                                                }
                                                t.push(d.QNAME), n.push(a);
                                              } else {
                                                if ("=" == r.charAt(o)) {
                                                  t.push(
                                                    d.GREATERTHANOREQUAL
                                                  ), n.push(
                                                    ">="
                                                  ), o++, (i = r.charAt(o++));
                                                  continue;
                                                }
                                                t.push(d.GREATERTHAN), n.push(
                                                  ">"
                                                ), (i = r.charAt(o++));
                                              }
                                            else {
                                              if ("=" == r.charAt(o)) {
                                                t.push(
                                                  d.LESSTHANOREQUAL
                                                ), n.push(
                                                  "<="
                                                ), o++, (i = r.charAt(o++));
                                                continue;
                                              }
                                              t.push(d.LESSTHAN), n.push(
                                                "<"
                                              ), (i = r.charAt(o++));
                                            }
                                          else
                                            t.push(d.NOTEQUAL), n.push(
                                              "!="
                                            ), o++, (i = r.charAt(o++));
                                        else {
                                          if ("/" == (i = r.charAt(o++))) {
                                            t.push(d.DOUBLESLASH), n.push(
                                              "//"
                                            ), (i = r.charAt(o++));
                                            continue;
                                          }
                                          t.push(d.SLASH), n.push("/");
                                        }
                                      else
                                        t.push(d.DOUBLECOLON), n.push(
                                          "::"
                                        ), o++, (i = r.charAt(o++));
                                    else {
                                      var u;
                                      if (
                                        t.length > 0 &&
                                        (u = t[t.length - 1]) != d.AT &&
                                        u != d.DOUBLECOLON &&
                                        u != d.LEFTPARENTHESIS &&
                                        u != d.LEFTBRACKET &&
                                        u != d.AND &&
                                        u != d.OR &&
                                        u != d.MOD &&
                                        u != d.DIV &&
                                        u != d.MULTIPLYOPERATOR &&
                                        u != d.SLASH &&
                                        u != d.DOUBLESLASH &&
                                        u != d.BAR &&
                                        u != d.PLUS &&
                                        u != d.MINUS &&
                                        u != d.EQUALS &&
                                        u != d.NOTEQUAL &&
                                        u != d.LESSTHAN &&
                                        u != d.LESSTHANOREQUAL &&
                                        u != d.GREATERTHAN &&
                                        u != d.GREATERTHANOREQUAL
                                      ) {
                                        t.push(d.MULTIPLYOPERATOR), n.push(
                                          i
                                        ), (i = r.charAt(o++));
                                        continue;
                                      }
                                      t.push(d.ASTERISKNAMETEST), n.push(
                                        i
                                      ), (i = r.charAt(o++));
                                    }
                                  else {
                                    for (
                                      var s = i, l = "";
                                      o < r.length && (i = r.charAt(o)) !== s;

                                    )
                                      (l += i), (o += 1);
                                    if (i !== s)
                                      throw $.fromMessage(
                                        "Unterminated string literal: " + s + l
                                      );
                                    (o += 1), t.push(d.LITERAL), n.push(
                                      l
                                    ), (i = r.charAt(o++));
                                  }
                                else {
                                  if ("." == (i = r.charAt(o++))) {
                                    t.push(d.DOUBLEDOT), n.push(
                                      ".."
                                    ), (i = r.charAt(o++));
                                    continue;
                                  }
                                  if (i >= "0" && i <= "9") {
                                    var c = "." + i;
                                    for (
                                      i = r.charAt(o++);
                                      i >= "0" && i <= "9";

                                    )
                                      (c += i), (i = r.charAt(o++));
                                    t.push(d.NUMBER), n.push(c);
                                    continue;
                                  }
                                  t.push(d.DOT), n.push(".");
                                }
                              else
                                t.push(d.DOLLAR), n.push(i), (i = r.charAt(
                                  o++
                                ));
                            else
                              t.push(d.EQUALS), n.push(i), (i = r.charAt(o++));
                          else t.push(d.MINUS), n.push(i), (i = r.charAt(o++));
                        else t.push(d.PLUS), n.push(i), (i = r.charAt(o++));
                      else t.push(d.BAR), n.push(i), (i = r.charAt(o++));
                    else t.push(d.COMMA), n.push(i), (i = r.charAt(o++));
                  else t.push(d.AT), n.push(i), (i = r.charAt(o++));
                else t.push(d.RIGHTBRACKET), n.push(i), (i = r.charAt(o++));
              else t.push(d.LEFTBRACKET), n.push(i), (i = r.charAt(o++));
            else t.push(d.RIGHTPARENTHESIS), n.push(i), (i = r.charAt(o++));
          else t.push(d.LEFTPARENTHESIS), n.push(i), (i = r.charAt(o++));
        }
        return t.push(1), n.push("[EOF]"), [t, n];
      }), (d.SHIFT = "s"), (d.REDUCE = "r"), (d.ACCEPT =
        "a"), (d.prototype.parse = function(e) {
        var t,
          n,
          r = this.tokenize(e);
        if (void 0 != r) {
          (t = r[0]), (n = r[1]);
          var o,
            i,
            a = 0,
            u = [],
            s = [],
            l = [];
          for (u.push(0), s.push(1), l.push("_S"), o = t[a], i = n[a++]; ; )
            switch (((e = u[u.length - 1]), d.actionTable[e].charAt(o - 1))) {
              case d.SHIFT:
                s.push(-o), l.push(i), u.push(
                  d.actionTableNumber[e].charCodeAt(o - 1) - 32
                ), (o = t[a]), (i = n[a++]);
                break;
              case d.REDUCE:
                for (
                  var c =
                      d.productions[
                        d.actionTableNumber[e].charCodeAt(o - 1) - 32
                      ][1],
                    f = [],
                    p = 0;
                  p < c;
                  p++
                )
                  s.pop(), f.unshift(l.pop()), u.pop();
                var m = u[u.length - 1];
                s.push(
                  d.productions[
                    d.actionTableNumber[e].charCodeAt(o - 1) - 32
                  ][0]
                ), void 0 ==
                this.reduceActions[
                  d.actionTableNumber[e].charCodeAt(o - 1) - 32
                ]
                  ? l.push(f[0])
                  : l.push(
                      this.reduceActions[
                        d.actionTableNumber[e].charCodeAt(o - 1) - 32
                      ](f)
                    ), u.push(
                  d.gotoTable[m].charCodeAt(
                    d.productions[
                      d.actionTableNumber[e].charCodeAt(o - 1) - 32
                    ][0] - 2
                  ) - 33
                );
                break;
              case d.ACCEPT:
                return new h(l.pop());
              default:
                throw new Error("XPath parse error");
            }
        }
      }), (h.prototype = new Object()), (h.prototype.constructor = h), (h.superclass =
        Object.prototype), (h.prototype.toString = function() {
        return this.expression.toString();
      }), (h.prototype.evaluate = function(e) {
        return (e.contextNode =
          e.expressionContextNode), (e.contextSize = 1), (e.contextPosition = 1), e.isHtml &&
          (
            m(e, "caseInsensitive", !0),
            m(e, "allowAnyNamespaceForNoPrefix", !0)
          ), m(e, "caseInsensitive", !1), this.expression.evaluate(e);
      }), (h.XML_NAMESPACE_URI =
        "http://www.w3.org/XML/1998/namespace"), (h.XMLNS_NAMESPACE_URI =
        "http://www.w3.org/2000/xmlns/"), (v.prototype = new Object()), (v.prototype.constructor = v), (v.superclass =
        Object.prototype), (v.prototype.init = function() {}), (v.prototype.toString = function() {
        return "<Expression>";
      }), (v.prototype.evaluate = function(e) {
        throw new Error("Could not evaluate expression.");
      }), (y.prototype = new v()), (y.prototype.constructor = y), (y.superclass =
        v.prototype), (y.prototype.init = function(e) {
        this.rhs = e;
      }), (g.prototype = new y()), (g.prototype.constructor = g), (g.superclass =
        y.prototype), (g.prototype.init = function(e) {
        g.superclass.init.call(this, e);
      }), (g.prototype.evaluate = function(e) {
        return this.rhs.evaluate(e).number().negate();
      }), (g.prototype.toString = function() {
        return "-" + this.rhs.toString();
      }), (b.prototype = new v()), (b.prototype.constructor = b), (b.superclass =
        v.prototype), (b.prototype.init = function(e, t) {
        (this.lhs = e), (this.rhs = t);
      }), (w.prototype = new b()), (w.prototype.constructor = w), (w.superclass =
        b.prototype), (w.prototype.init = function(e, t) {
        w.superclass.init.call(this, e, t);
      }), (w.prototype.toString = function() {
        return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")";
      }), (w.prototype.evaluate = function(e) {
        var t = this.lhs.evaluate(e).bool();
        return t.booleanValue() ? t : this.rhs.evaluate(e).bool();
      }), (A.prototype = new b()), (A.prototype.constructor = A), (A.superclass =
        b.prototype), (A.prototype.init = function(e, t) {
        A.superclass.init.call(this, e, t);
      }), (A.prototype.toString = function() {
        return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")";
      }), (A.prototype.evaluate = function(e) {
        var t = this.lhs.evaluate(e).bool();
        return t.booleanValue() ? this.rhs.evaluate(e).bool() : t;
      }), (E.prototype = new b()), (E.prototype.constructor = E), (E.superclass =
        b.prototype), (E.prototype.init = function(e, t) {
        E.superclass.init.call(this, e, t);
      }), (E.prototype.toString = function() {
        return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")";
      }), (E.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).equals(this.rhs.evaluate(e));
      }), (S.prototype = new b()), (S.prototype.constructor = S), (S.superclass =
        b.prototype), (S.prototype.init = function(e, t) {
        S.superclass.init.call(this, e, t);
      }), (S.prototype.toString = function() {
        return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")";
      }), (S.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).notequal(this.rhs.evaluate(e));
      }), (x.prototype = new b()), (x.prototype.constructor = x), (x.superclass =
        b.prototype), (x.prototype.init = function(e, t) {
        x.superclass.init.call(this, e, t);
      }), (x.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).lessthan(this.rhs.evaluate(e));
      }), (x.prototype.toString = function() {
        return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")";
      }), (N.prototype = new b()), (N.prototype.constructor = N), (N.superclass =
        b.prototype), (N.prototype.init = function(e, t) {
        N.superclass.init.call(this, e, t);
      }), (N.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).greaterthan(this.rhs.evaluate(e));
      }), (N.prototype.toString = function() {
        return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")";
      }), (T.prototype = new b()), (T.prototype.constructor = T), (T.superclass =
        b.prototype), (T.prototype.init = function(e, t) {
        T.superclass.init.call(this, e, t);
      }), (T.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).lessthanorequal(this.rhs.evaluate(e));
      }), (T.prototype.toString = function() {
        return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")";
      }), (C.prototype = new b()), (C.prototype.constructor = C), (C.superclass =
        b.prototype), (C.prototype.init = function(e, t) {
        C.superclass.init.call(this, e, t);
      }), (C.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).greaterthanorequal(this.rhs.evaluate(e));
      }), (C.prototype.toString = function() {
        return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")";
      }), (k.prototype = new b()), (k.prototype.constructor = k), (k.superclass =
        b.prototype), (k.prototype.init = function(e, t) {
        k.superclass.init.call(this, e, t);
      }), (k.prototype.evaluate = function(e) {
        return this.lhs
          .evaluate(e)
          .number()
          .plus(this.rhs.evaluate(e).number());
      }), (k.prototype.toString = function() {
        return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")";
      }), (O.prototype = new b()), (O.prototype.constructor = O), (O.superclass =
        b.prototype), (O.prototype.init = function(e, t) {
        O.superclass.init.call(this, e, t);
      }), (O.prototype.evaluate = function(e) {
        return this.lhs
          .evaluate(e)
          .number()
          .minus(this.rhs.evaluate(e).number());
      }), (O.prototype.toString = function() {
        return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")";
      }), (_.prototype = new b()), (_.prototype.constructor = _), (_.superclass =
        b.prototype), (_.prototype.init = function(e, t) {
        _.superclass.init.call(this, e, t);
      }), (_.prototype.evaluate = function(e) {
        return this.lhs
          .evaluate(e)
          .number()
          .multiply(this.rhs.evaluate(e).number());
      }), (_.prototype.toString = function() {
        return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")";
      }), (R.prototype = new b()), (R.prototype.constructor = R), (R.superclass =
        b.prototype), (R.prototype.init = function(e, t) {
        R.superclass.init.call(this, e, t);
      }), (R.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).number().div(this.rhs.evaluate(e).number());
      }), (R.prototype.toString = function() {
        return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")";
      }), (P.prototype = new b()), (P.prototype.constructor = P), (P.superclass =
        b.prototype), (P.prototype.init = function(e, t) {
        P.superclass.init.call(this, e, t);
      }), (P.prototype.evaluate = function(e) {
        return this.lhs.evaluate(e).number().mod(this.rhs.evaluate(e).number());
      }), (P.prototype.toString = function() {
        return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")";
      }), (I.prototype = new b()), (I.prototype.constructor = I), (I.superclass =
        b.prototype), (I.prototype.init = function(e, t) {
        I.superclass.init.call(this, e, t);
      }), (I.prototype.evaluate = function(e) {
        return this.lhs
          .evaluate(e)
          .nodeset()
          .union(this.rhs.evaluate(e).nodeset());
      }), (I.prototype.toString = function() {
        return o(l, [this.lhs, this.rhs]).join(" | ");
      }), (D.prototype = new v()), (D.prototype.constructor = D), (D.superclass =
        v.prototype), (D.prototype.init = function(e, t, n) {
        D.superclass.init.call(
          this
        ), (this.filter = e), (this.filterPredicates = t), (this.locationPath = n);
      }), (D.applyPredicates = function(e, t, n) {
        return r(
          function(e, n) {
            var r = t.extend({ contextSize: e.length });
            return i(function(e, t) {
              return D.predicateMatches(
                n,
                r.extend({ contextNode: e, contextPosition: t + 1 })
              );
            }, e);
          },
          n,
          e
        );
      }), (D.getRoot = function(e, t) {
        var n = t[0];
        if (9 === n.nodeType) return n;
        if (e.virtualRoot) return e.virtualRoot;
        var r = n.ownerDocument;
        if (r) return r;
        for (var o = n; null != o.parentNode; ) o = o.parentNode;
        return o;
      }), (D.applyStep = function(e, t, n) {
        var r = [];
        switch (((t.contextNode = n), e.axis)) {
          case U.ANCESTOR:
            if (t.contextNode === t.virtualRoot) break;
            for (
              o =
                2 == t.contextNode.nodeType
                  ? D.getOwnerElement(t.contextNode)
                  : t.contextNode.parentNode;
              null != o &&
              (e.nodeTest.matches(o, t) && r.push(o), o !== t.virtualRoot);

            )
              o = o.parentNode;
            break;
          case U.ANCESTORORSELF:
            for (
              var o = t.contextNode;
              null != o &&
              (e.nodeTest.matches(o, t) && r.push(o), o !== t.virtualRoot);
              o = 2 == o.nodeType ? D.getOwnerElement(o) : o.parentNode
            );
            break;
          case U.ATTRIBUTE:
            var i = t.contextNode.attributes;
            if (null != i)
              for (var a = 0; a < i.length; a++) {
                o = i.item(a);
                e.nodeTest.matches(o, t) && r.push(o);
              }
            break;
          case U.CHILD:
            for (o = t.contextNode.firstChild; null != o; o = o.nextSibling)
              e.nodeTest.matches(o, t) && r.push(o);
            break;
          case U.DESCENDANT:
            for (var u = [t.contextNode.firstChild]; u.length > 0; )
              for (o = u.pop(); null != o; )
                e.nodeTest.matches(o, t) && r.push(o), null != o.firstChild
                  ? (u.push(o.nextSibling), (o = o.firstChild))
                  : (o = o.nextSibling);
            break;
          case U.DESCENDANTORSELF:
            e.nodeTest.matches(t.contextNode, t) && r.push(t.contextNode);
            for (u = [t.contextNode.firstChild]; u.length > 0; )
              for (o = u.pop(); null != o; )
                e.nodeTest.matches(o, t) && r.push(o), null != o.firstChild
                  ? (u.push(o.nextSibling), (o = o.firstChild))
                  : (o = o.nextSibling);
            break;
          case U.FOLLOWING:
            if (t.contextNode === t.virtualRoot) break;
            u = [];
            null != t.contextNode.firstChild
              ? u.unshift(t.contextNode.firstChild)
              : u.unshift(t.contextNode.nextSibling);
            for (
              o = t.contextNode.parentNode;
              null != o && 9 != o.nodeType && o !== t.virtualRoot;
              o = o.parentNode
            )
              u.unshift(o.nextSibling);
            do {
              for (o = u.pop(); null != o; )
                e.nodeTest.matches(o, t) && r.push(o), null != o.firstChild
                  ? (u.push(o.nextSibling), (o = o.firstChild))
                  : (o = o.nextSibling);
            } while (u.length > 0);
            break;
          case U.FOLLOWINGSIBLING:
            if (t.contextNode === t.virtualRoot) break;
            for (o = t.contextNode.nextSibling; null != o; o = o.nextSibling)
              e.nodeTest.matches(o, t) && r.push(o);
            break;
          case U.NAMESPACE:
            var s = {};
            if (1 == t.contextNode.nodeType) {
              (s.xml = h.XML_NAMESPACE_URI), (s.xmlns = h.XMLNS_NAMESPACE_URI);
              for (
                o = t.contextNode;
                null != o && 1 == o.nodeType;
                o = o.parentNode
              )
                for (a = 0; a < o.attributes.length; a++) {
                  var l = o.attributes.item(a),
                    c = String(l.name);
                  if ("xmlns" == c) void 0 == s[""] && (s[""] = l.value);
                  else if (c.length > 6 && "xmlns:" == c.substring(0, 6)) {
                    void 0 == s[(f = c.substring(6, c.length))] &&
                      (s[f] = l.value);
                  }
                }
              for (var f in s) {
                var p = new q(f, s[f], t.contextNode);
                e.nodeTest.matches(p, t) && r.push(p);
              }
            }
            break;
          case U.PARENT:
            (o = null), t.contextNode !== t.virtualRoot &&
              (o =
                2 == t.contextNode.nodeType
                  ? D.getOwnerElement(t.contextNode)
                  : t.contextNode.parentNode), null != o &&
              e.nodeTest.matches(o, t) &&
              r.push(o);
            break;
          case U.PRECEDING:
            u =
              null != t.virtualRoot
                ? [t.virtualRoot]
                : [
                    (function(e) {
                      for (; e && e.parentNode; ) e = e.parentNode;
                      return e;
                    })(t.contextNode)
                  ];
            e: for (; u.length > 0; )
              for (o = u.pop(); null != o; ) {
                if (o == t.contextNode) break e;
                e.nodeTest.matches(o, t) && r.unshift(o), null != o.firstChild
                  ? (u.push(o.nextSibling), (o = o.firstChild))
                  : (o = o.nextSibling);
              }
            break;
          case U.PRECEDINGSIBLING:
            if (t.contextNode === t.virtualRoot) break;
            for (
              o = t.contextNode.previousSibling;
              null != o;
              o = o.previousSibling
            )
              e.nodeTest.matches(o, t) && r.push(o);
            break;
          case U.SELF:
            e.nodeTest.matches(t.contextNode, t) && r.push(t.contextNode);
        }
        return r;
      }), (D.applySteps = function(e, t, n) {
        return r(
          function(e, n) {
            return [].concat.apply(
              [],
              o(function(e) {
                return D.applyPredicates(n.predicates, t, D.applyStep(n, t, e));
              }, e)
            );
          },
          n,
          e
        );
      }), (D.prototype.applyFilter = function(e, t) {
        if (!this.filter) return { nodes: [e.contextNode] };
        var n = this.filter.evaluate(e);
        if (!Z.instance_of(n, W)) {
          if (
            (null != this.filterPredicates &&
              this.filterPredicates.length > 0) ||
            null != this.locationPath
          )
            throw new Error(
              "Path expression filter must evaluate to a nodeset if predicates or location path are used"
            );
          return { nonNodes: n };
        }
        return {
          nodes: D.applyPredicates(
            this.filterPredicates || [],
            t,
            n.toUnsortedArray()
          )
        };
      }), (D.applyLocationPath = function(e, t, n) {
        if (!e) return n;
        var r = e.absolute ? [D.getRoot(t, n)] : n;
        return D.applySteps(e.steps, t, r);
      }), (D.prototype.evaluate = function(e) {
        var t = p(new G(), e),
          n = this.applyFilter(e, t);
        if ("nonNodes" in n) return n.nonNodes;
        var r = new W();
        return r.addArray(
          D.applyLocationPath(this.locationPath, t, n.nodes)
        ), r;
      }), (D.predicateMatches = function(e, t) {
        var n = e.evaluate(t);
        return Z.instance_of(n, z)
          ? t.contextPosition == n.numberValue()
          : n.booleanValue();
      }), (D.predicateString = a(f("[", "]"), l)), (D.predicatesString = a(
        c(""),
        o(D.predicateString)
      )), (D.prototype.toString = function() {
        if (void 0 != this.filter) {
          var e = l(this.filter);
          return Z.instance_of(this.filter, V)
            ? f("'", "'", e)
            : void 0 != this.filterPredicates && this.filterPredicates.length
              ? f("(", ")", e) + D.predicatesString(this.filterPredicates)
              : void 0 != this.locationPath
                ? e +
                  (this.locationPath.absolute ? "" : "/") +
                  l(this.locationPath)
                : e;
        }
        return l(this.locationPath);
      }), (D.getOwnerElement = function(e) {
        if (e.ownerElement) return e.ownerElement;
        try {
          if (e.selectSingleNode) return e.selectSingleNode("..");
        } catch (e) {}
        for (
          var t = (9 == e.nodeType ? e : e.ownerDocument).getElementsByTagName(
              "*"
            ),
            n = 0;
          n < t.length;
          n++
        )
          for (var r = t.item(n), o = r.attributes, i = 0; i < o.length; i++) {
            if (o.item(i) === e) return r;
          }
        return null;
      }), (L.prototype = new Object()), (L.prototype.constructor = L), (L.superclass =
        Object.prototype), (L.prototype.init = function(e, t) {
        (this.absolute = e), (this.steps = t);
      }), (L.prototype.toString = function() {
        return (this.absolute ? "/" : "") + o(l, this.steps).join("/");
      }), (U.prototype = new Object()), (U.prototype.constructor = U), (U.superclass =
        Object.prototype), (U.prototype.init = function(e, t, n) {
        (this.axis = e), (this.nodeTest = t), (this.predicates = n);
      }), (U.prototype.toString = function() {
        return (
          U.STEPNAMES[this.axis] +
          "::" +
          this.nodeTest.toString() +
          D.predicatesString(this.predicates)
        );
      }), (U.ANCESTOR = 0), (U.ANCESTORORSELF = 1), (U.ATTRIBUTE = 2), (U.CHILD = 3), (U.DESCENDANT = 4), (U.DESCENDANTORSELF = 5), (U.FOLLOWING = 6), (U.FOLLOWINGSIBLING = 7), (U.NAMESPACE = 8), (U.PARENT = 9), (U.PRECEDING = 10), (U.PRECEDINGSIBLING = 11), (U.SELF = 12), (U.STEPNAMES = r(
        function(e, t) {
          return (e[t[0]] = t[1]), e;
        },
        {},
        [
          [U.ANCESTOR, "ancestor"],
          [U.ANCESTORORSELF, "ancestor-or-self"],
          [U.ATTRIBUTE, "attribute"],
          [U.CHILD, "child"],
          [U.DESCENDANT, "descendant"],
          [U.DESCENDANTORSELF, "descendant-or-self"],
          [U.FOLLOWING, "following"],
          [U.FOLLOWINGSIBLING, "following-sibling"],
          [U.NAMESPACE, "namespace"],
          [U.PARENT, "parent"],
          [U.PRECEDING, "preceding"],
          [U.PRECEDINGSIBLING, "preceding-sibling"],
          [U.SELF, "self"]
        ]
      )), (B.prototype = new Object()), (B.prototype.constructor = B), (B.superclass =
        Object.prototype), (B.prototype.init = function(e, t) {
        (this.type = e), (this.value = t);
      }), (B.prototype.toString = function() {
        return "<unknown nodetest type>";
      }), (B.prototype.matches = function(e, t) {
        console.warn("unknown node test type");
      }), (B.NAMETESTANY = 0), (B.NAMETESTPREFIXANY = 1), (B.NAMETESTQNAME = 2), (B.COMMENT = 3), (B.TEXT = 4), (B.PI = 5), (B.NODE = 6), (B.isNodeType = function(
        e
      ) {
        return a(u(e), s("nodeType"));
      }), (B.makeNodeTestType = function(e, t, n) {
        var r = n || function() {};
        for (var o in (
          (r.prototype = new B(t.type)),
          (r.prototype.constructor = e),
          t
        ))
          r.prototype[o] = t[o];
        return r;
      }), (B.makeNodeTypeTest = function(e, t, n) {
        return new (B.makeNodeTestType(e, {
          matches: B.isNodeType(t),
          toString: (function(e) {
            return function() {
              return e;
            };
          })(n)
        }))();
      }), (B.hasPrefix = function(e) {
        return e.prefix || -1 !== (e.nodeName || e.tagName).indexOf(":");
      }), (B.isElementOrAttribute = B.isNodeType([
        1,
        2
      ])), (B.nameSpaceMatches = function(e, t, n) {
        var r = n.namespaceURI || "";
        if (!e)
          return !r || (t.allowAnyNamespaceForNoPrefix && !B.hasPrefix(n));
        var o = t.namespaceResolver.getNamespace(e, t.expressionContextNode);
        if (null == o) throw new Error("Cannot resolve QName " + e);
        return o === r;
      }), (B.localNameMatches = function(e, t, n) {
        var r = n.localName || n.nodeName;
        return t.caseInsensitive
          ? e.toLowerCase() === r.toLowerCase()
          : e === r;
      }), (B.NameTestPrefixAny = B.makeNodeTestType(
        B.NAMETESTPREFIXANY,
        {
          matches: function(e, t) {
            return (
              B.isElementOrAttribute(e) && B.nameSpaceMatches(this.prefix, t, e)
            );
          },
          toString: function() {
            return this.prefix + ":*";
          }
        },
        function(e) {
          this.prefix = e;
        }
      )), (B.NameTestQName = B.makeNodeTestType(
        B.NAMETESTQNAME,
        {
          matches: function(e, t) {
            return (
              B.isNodeType([1, 2, q.XPATH_NAMESPACE_NODE])(e) &&
              B.nameSpaceMatches(this.prefix, t, e) &&
              B.localNameMatches(this.localName, t, e)
            );
          },
          toString: function() {
            return this.name;
          }
        },
        function(e) {
          var t = e.split(":");
          (this.name = e), (this.prefix =
            t.length > 1 ? t[0] : null), (this.localName =
            t[t.length > 1 ? 1 : 0]);
        }
      )), (B.PITest = B.makeNodeTestType(
        B.PI,
        {
          matches: function(e, t) {
            return (
              B.isNodeType([7])(e) && (e.target || e.nodeName) === this.name
            );
          },
          toString: function() {
            return f('processing-instruction("', '")', this.name);
          }
        },
        function(e) {
          this.name = e;
        }
      )), (B.nameTestAny = B.makeNodeTypeTest(
        B.NAMETESTANY,
        [1, 2, q.XPATH_NAMESPACE_NODE],
        "*"
      )), (B.textTest = B.makeNodeTypeTest(
        B.TEXT,
        [3, 4],
        "text()"
      )), (B.commentTest = B.makeNodeTypeTest(
        B.COMMENT,
        [8],
        "comment()"
      )), (B.nodeTest = B.makeNodeTypeTest(
        B.NODE,
        [1, 2, 3, 4, 7, 8, 9],
        "node()"
      )), (B.anyPiTest = B.makeNodeTypeTest(
        B.PI,
        [7],
        "processing-instruction()"
      )), (F.prototype = new v()), (F.prototype.constructor = F), (F.superclass =
        v.prototype), (F.prototype.init = function(e) {
        this.variable = e;
      }), (F.prototype.toString = function() {
        return "$" + this.variable;
      }), (F.prototype.evaluate = function(e) {
        var t = Z.resolveQName(
          this.variable,
          e.namespaceResolver,
          e.contextNode,
          !1
        );
        if (null == t[0]) throw new Error("Cannot resolve QName " + fn);
        var n = e.variableResolver.getVariable(t[1], t[0]);
        if (!n) throw $.fromMessage("Undeclared variable: " + this.toString());
        return n;
      }), (M.prototype = new v()), (M.prototype.constructor = M), (M.superclass =
        v.prototype), (M.prototype.init = function(e, t) {
        (this.functionName = e), (this.arguments = t);
      }), (M.prototype.toString = function() {
        for (
          var e = this.functionName + "(", t = 0;
          t < this.arguments.length;
          t++
        )
          t > 0 && (e += ", "), (e += this.arguments[t].toString());
        return e + ")";
      }), (M.prototype.evaluate = function(e) {
        var t = J.getFunctionFromContext(this.functionName, e);
        if (!t) throw new Error("Unknown function " + this.functionName);
        var n = [e].concat(this.arguments);
        return t.apply(e.functionResolver.thisArg, n);
      });
      var j = new Object();
      function V(e) {
        arguments.length > 0 && this.init(e);
      }
      function z(e) {
        arguments.length > 0 && this.init(e);
      }
      function Q(e) {
        arguments.length > 0 && this.init(e);
      }
      function H(e) {
        this.init(e);
      }
      function W() {
        this.init();
      }
      function q(e, t, n) {
        (this.isXPathNamespace = !0), (this.ownerDocument =
          n.ownerDocument), (this.nodeName =
          "#namespace"), (this.prefix = e), (this.localName = e), (this.namespaceURI = t), (this.nodeValue = t), (this.ownerElement = n), (this.nodeType =
          q.XPATH_NAMESPACE_NODE);
      }
      function G(e, t, n) {
        (this.variableResolver =
          null != e ? e : new Y()), (this.namespaceResolver =
          null != t ? t : new X()), (this.functionResolver =
          null != n ? n : new J());
      }
      function Y() {}
      function J(e) {
        (this.thisArg =
          null != e
            ? e
            : K), (this.functions = new Object()), this.addStandardFunctions();
      }
      function X() {}
      (j.equals = function(e, t) {
        return e.equals(t);
      }), (j.notequal = function(e, t) {
        return e.notequal(t);
      }), (j.lessthan = function(e, t) {
        return e.lessthan(t);
      }), (j.greaterthan = function(e, t) {
        return e.greaterthan(t);
      }), (j.lessthanorequal = function(e, t) {
        return e.lessthanorequal(t);
      }), (j.greaterthanorequal = function(e, t) {
        return e.greaterthanorequal(t);
      }), (V.prototype = new v()), (V.prototype.constructor = V), (V.superclass =
        v.prototype), (V.prototype.init = function(e) {
        this.str = String(e);
      }), (V.prototype.toString = function() {
        return this.str;
      }), (V.prototype.evaluate = function(e) {
        return this;
      }), (V.prototype.string = function() {
        return this;
      }), (V.prototype.number = function() {
        return new z(this.str);
      }), (V.prototype.bool = function() {
        return new Q(this.str);
      }), (V.prototype.nodeset = function() {
        throw new Error("Cannot convert string to nodeset");
      }), (V.prototype.stringValue = function() {
        return this.str;
      }), (V.prototype.numberValue = function() {
        return this.number().numberValue();
      }), (V.prototype.booleanValue = function() {
        return this.bool().booleanValue();
      }), (V.prototype.equals = function(e) {
        return Z.instance_of(e, Q)
          ? this.bool().equals(e)
          : Z.instance_of(e, z)
            ? this.number().equals(e)
            : Z.instance_of(e, W)
              ? e.compareWithString(this, j.equals)
              : new Q(this.str == e.str);
      }), (V.prototype.notequal = function(e) {
        return Z.instance_of(e, Q)
          ? this.bool().notequal(e)
          : Z.instance_of(e, z)
            ? this.number().notequal(e)
            : Z.instance_of(e, W)
              ? e.compareWithString(this, j.notequal)
              : new Q(this.str != e.str);
      }), (V.prototype.lessthan = function(e) {
        return this.number().lessthan(e);
      }), (V.prototype.greaterthan = function(e) {
        return this.number().greaterthan(e);
      }), (V.prototype.lessthanorequal = function(e) {
        return this.number().lessthanorequal(e);
      }), (V.prototype.greaterthanorequal = function(e) {
        return this.number().greaterthanorequal(e);
      }), (z.prototype = new v()), (z.prototype.constructor = z), (z.superclass =
        v.prototype), (z.prototype.init = function(e) {
        this.num = "string" === typeof e ? this.parse(e) : Number(e);
      }), (z.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/), (z.prototype.parse = function(
        e
      ) {
        return this.numberFormat.test(e) ? parseFloat(e) : Number.NaN;
      }), (z.prototype.toString = function() {
        var e = this.num.toString();
        return -1 !== e.indexOf("e-")
          ? (function(e) {
              for (
                var t = e.split("e-"),
                  n = t[0].replace(".", ""),
                  r = Number(t[1]),
                  o = 0;
                o < r - 1;
                o += 1
              )
                n = "0" + n;
              return "0." + n;
            })(e)
          : -1 !== e.indexOf("e")
            ? (function(e) {
                for (
                  var t = e.split("e"),
                    n = t[0].replace(".", ""),
                    r = Number(t[1]) + 1 - n.length,
                    o = 0;
                  o < r;
                  o += 1
                )
                  n += "0";
                return n;
              })(e)
            : e;
      }), (z.prototype.evaluate = function(e) {
        return this;
      }), (z.prototype.string = function() {
        return new V(this.toString());
      }), (z.prototype.number = function() {
        return this;
      }), (z.prototype.bool = function() {
        return new Q(this.num);
      }), (z.prototype.nodeset = function() {
        throw new Error("Cannot convert number to nodeset");
      }), (z.prototype.stringValue = function() {
        return this.string().stringValue();
      }), (z.prototype.numberValue = function() {
        return this.num;
      }), (z.prototype.booleanValue = function() {
        return this.bool().booleanValue();
      }), (z.prototype.negate = function() {
        return new z(-this.num);
      }), (z.prototype.equals = function(e) {
        return Z.instance_of(e, Q)
          ? this.bool().equals(e)
          : Z.instance_of(e, V)
            ? this.equals(e.number())
            : Z.instance_of(e, W)
              ? e.compareWithNumber(this, j.equals)
              : new Q(this.num == e.num);
      }), (z.prototype.notequal = function(e) {
        return Z.instance_of(e, Q)
          ? this.bool().notequal(e)
          : Z.instance_of(e, V)
            ? this.notequal(e.number())
            : Z.instance_of(e, W)
              ? e.compareWithNumber(this, j.notequal)
              : new Q(this.num != e.num);
      }), (z.prototype.lessthan = function(e) {
        return Z.instance_of(e, W)
          ? e.compareWithNumber(this, j.greaterthan)
          : Z.instance_of(e, Q) || Z.instance_of(e, V)
            ? this.lessthan(e.number())
            : new Q(this.num < e.num);
      }), (z.prototype.greaterthan = function(e) {
        return Z.instance_of(e, W)
          ? e.compareWithNumber(this, j.lessthan)
          : Z.instance_of(e, Q) || Z.instance_of(e, V)
            ? this.greaterthan(e.number())
            : new Q(this.num > e.num);
      }), (z.prototype.lessthanorequal = function(e) {
        return Z.instance_of(e, W)
          ? e.compareWithNumber(this, j.greaterthanorequal)
          : Z.instance_of(e, Q) || Z.instance_of(e, V)
            ? this.lessthanorequal(e.number())
            : new Q(this.num <= e.num);
      }), (z.prototype.greaterthanorequal = function(e) {
        return Z.instance_of(e, W)
          ? e.compareWithNumber(this, j.lessthanorequal)
          : Z.instance_of(e, Q) || Z.instance_of(e, V)
            ? this.greaterthanorequal(e.number())
            : new Q(this.num >= e.num);
      }), (z.prototype.plus = function(e) {
        return new z(this.num + e.num);
      }), (z.prototype.minus = function(e) {
        return new z(this.num - e.num);
      }), (z.prototype.multiply = function(e) {
        return new z(this.num * e.num);
      }), (z.prototype.div = function(e) {
        return new z(this.num / e.num);
      }), (z.prototype.mod = function(e) {
        return new z(this.num % e.num);
      }), (Q.prototype = new v()), (Q.prototype.constructor = Q), (Q.superclass =
        v.prototype), (Q.prototype.init = function(e) {
        this.b = Boolean(e);
      }), (Q.prototype.toString = function() {
        return this.b.toString();
      }), (Q.prototype.evaluate = function(e) {
        return this;
      }), (Q.prototype.string = function() {
        return new V(this.b);
      }), (Q.prototype.number = function() {
        return new z(this.b);
      }), (Q.prototype.bool = function() {
        return this;
      }), (Q.prototype.nodeset = function() {
        throw new Error("Cannot convert boolean to nodeset");
      }), (Q.prototype.stringValue = function() {
        return this.string().stringValue();
      }), (Q.prototype.numberValue = function() {
        return this.number().numberValue();
      }), (Q.prototype.booleanValue = function() {
        return this.b;
      }), (Q.prototype.not = function() {
        return new Q(!this.b);
      }), (Q.prototype.equals = function(e) {
        return Z.instance_of(e, V) || Z.instance_of(e, z)
          ? this.equals(e.bool())
          : Z.instance_of(e, W)
            ? e.compareWithBoolean(this, j.equals)
            : new Q(this.b == e.b);
      }), (Q.prototype.notequal = function(e) {
        return Z.instance_of(e, V) || Z.instance_of(e, z)
          ? this.notequal(e.bool())
          : Z.instance_of(e, W)
            ? e.compareWithBoolean(this, j.notequal)
            : new Q(this.b != e.b);
      }), (Q.prototype.lessthan = function(e) {
        return this.number().lessthan(e);
      }), (Q.prototype.greaterthan = function(e) {
        return this.number().greaterthan(e);
      }), (Q.prototype.lessthanorequal = function(e) {
        return this.number().lessthanorequal(e);
      }), (Q.prototype.greaterthanorequal = function(e) {
        return this.number().greaterthanorequal(e);
      }), (Q.true_ = new Q(!0)), (Q.false_ = new Q(
        !1
      )), (H.prototype = new Object()), (H.prototype.constructor = H), (H.superclass =
        Object.prototype), (H.prototype.init = function(e) {
        (this.left = null), (this.right = null), (this.node = e), (this.depth = 1);
      }), (H.prototype.balance = function() {
        var e = null == this.left ? 0 : this.left.depth,
          t = null == this.right ? 0 : this.right.depth;
        if (e > t + 1)
          (null == this.left.left ? 0 : this.left.left.depth) <
            (null == this.left.right ? 0 : this.left.right.depth) &&
            this.left.rotateRR(), this.rotateLL();
        else if (e + 1 < t) {
          var n = null == this.right.right ? 0 : this.right.right.depth;
          (null == this.right.left ? 0 : this.right.left.depth) > n &&
            this.right.rotateLL(), this.rotateRR();
        }
      }), (H.prototype.rotateLL = function() {
        var e = this.node,
          t = this.right;
        (this.node = this.left.node), (this.right = this.left), (this.left = this.left.left), (this.right.left = this.right.right), (this.right.right = t), (this.right.node = e), this.right.updateInNewLocation(), this.updateInNewLocation();
      }), (H.prototype.rotateRR = function() {
        var e = this.node,
          t = this.left;
        (this.node = this.right.node), (this.left = this.right), (this.right = this.right.right), (this.left.right = this.left.left), (this.left.left = t), (this.left.node = e), this.left.updateInNewLocation(), this.updateInNewLocation();
      }), (H.prototype.updateInNewLocation = function() {
        this.getDepthFromChildren();
      }), (H.prototype.getDepthFromChildren = function() {
        (this.depth = null == this.node ? 0 : 1), null != this.left &&
          (this.depth = this.left.depth + 1), null != this.right &&
          this.depth <= this.right.depth &&
          (this.depth = this.right.depth + 1);
      }), (H.prototype.add = function(e) {
        if (e === this.node) return !1;
        var t = (function(e, t) {
            if (e === t) return 0;
            if (e.compareDocumentPosition) {
              var n = e.compareDocumentPosition(t);
              return 1 & n ? 1 : 10 & n ? 1 : 20 & n ? -1 : 0;
            }
            for (
              var r = 0, o = 0, i = e;
              null != i;
              i = i.parentNode || i.ownerElement
            )
              r++;
            for (var a = t; null != a; a = a.parentNode || a.ownerElement) o++;
            if (r > o) {
              for (; r > o; ) (e = e.parentNode || e.ownerElement), r--;
              if (e === t) return 1;
            } else if (o > r) {
              for (; o > r; ) (t = t.parentNode || t.ownerElement), o--;
              if (e === t) return -1;
            }
            for (
              var u = e.parentNode || e.ownerElement,
                s = t.parentNode || t.ownerElement;
              u !== s;

            )
              (t = s), (u = (e = u).parentNode || e.ownerElement), (s =
                t.parentNode || t.ownerElement);
            var l = Z.isAttribute(e),
              c = Z.isAttribute(t);
            if (l && !c) return -1;
            if (!l && c) return 1;
            if (u)
              for (
                var f = l ? u.attributes : u.childNodes, p = f.length, d = 0;
                d < p;
                d += 1
              ) {
                var h = f[d];
                if (h === e) return -1;
                if (h === t) return 1;
              }
            throw new Error("Unexpected: could not determine node order");
          })(e, this.node),
          n = !1;
        return -1 == t
          ? null == this.left
            ? ((this.left = new H(e)), (n = !0))
            : (n = this.left.add(e)) && this.balance()
          : 1 == t &&
            (null == this.right
              ? ((this.right = new H(e)), (n = !0))
              : (n = this.right.add(e)) && this.balance()), n &&
          this.getDepthFromChildren(), n;
      }), (W.prototype = new v()), (W.prototype.constructor = W), (W.superclass =
        v.prototype), (W.prototype.init = function() {
        (this.tree = null), (this.nodes = []), (this.size = 0);
      }), (W.prototype.toString = function() {
        var e = this.first();
        return null == e ? "" : this.stringForNode(e);
      }), (W.prototype.evaluate = function(e) {
        return this;
      }), (W.prototype.string = function() {
        return new V(this.toString());
      }), (W.prototype.stringValue = function() {
        return this.toString();
      }), (W.prototype.number = function() {
        return new z(this.string());
      }), (W.prototype.numberValue = function() {
        return Number(this.string());
      }), (W.prototype.bool = function() {
        return new Q(this.booleanValue());
      }), (W.prototype.booleanValue = function() {
        return !!this.size;
      }), (W.prototype.nodeset = function() {
        return this;
      }), (W.prototype.stringForNode = function(e) {
        return 9 == e.nodeType || 1 == e.nodeType || 11 === e.nodeType
          ? this.stringForContainerNode(e)
          : 2 === e.nodeType
            ? e.value || e.nodeValue
            : e.isNamespaceNode ? e.namespace : e.nodeValue;
      }), (W.prototype.stringForContainerNode = function(e) {
        for (var t = "", n = e.firstChild; null != n; n = n.nextSibling) {
          var r = n.nodeType;
          (1 !== r && 3 !== r && 4 !== r && 9 !== r && 11 !== r) ||
            (t += this.stringForNode(n));
        }
        return t;
      }), (W.prototype.buildTree = function() {
        if (!this.tree && this.nodes.length) {
          this.tree = new H(this.nodes[0]);
          for (var e = 1; e < this.nodes.length; e += 1)
            this.tree.add(this.nodes[e]);
        }
        return this.tree;
      }), (W.prototype.first = function() {
        var e = this.buildTree();
        if (null == e) return null;
        for (; null != e.left; ) e = e.left;
        return e.node;
      }), (W.prototype.add = function(e) {
        for (var t = 0; t < this.nodes.length; t += 1)
          if (e === this.nodes[t]) return;
        (this.tree = null), this.nodes.push(e), (this.size += 1);
      }), (W.prototype.addArray = function(e) {
        var t = this;
        n(function(e) {
          t.add(e);
        }, e);
      }), (W.prototype.toArray = function() {
        var e = [];
        return this.toArrayRec(this.buildTree(), e), e;
      }), (W.prototype.toArrayRec = function(e, t) {
        null != e &&
          (
            this.toArrayRec(e.left, t),
            t.push(e.node),
            this.toArrayRec(e.right, t)
          );
      }), (W.prototype.toUnsortedArray = function() {
        return this.nodes.slice();
      }), (W.prototype.compareWithString = function(e, t) {
        for (var n = this.toUnsortedArray(), r = 0; r < n.length; r++) {
          var o = n[r],
            i = t(new V(this.stringForNode(o)), e);
          if (i.booleanValue()) return i;
        }
        return new Q(!1);
      }), (W.prototype.compareWithNumber = function(e, t) {
        for (var n = this.toUnsortedArray(), r = 0; r < n.length; r++) {
          var o = n[r],
            i = t(new z(this.stringForNode(o)), e);
          if (i.booleanValue()) return i;
        }
        return new Q(!1);
      }), (W.prototype.compareWithBoolean = function(e, t) {
        return t(this.bool(), e);
      }), (W.prototype.compareWithNodeSet = function(e, t) {
        for (
          var n = this.toUnsortedArray(),
            r = function(e, n) {
              return t(n, e);
            },
            o = 0;
          o < n.length;
          o++
        ) {
          var i = new V(this.stringForNode(n[o])),
            a = e.compareWithString(i, r);
          if (a.booleanValue()) return a;
        }
        return new Q(!1);
      }), (W.compareWith = t(function(e, t) {
        return Z.instance_of(t, V)
          ? this.compareWithString(t, e)
          : Z.instance_of(t, z)
            ? this.compareWithNumber(t, e)
            : Z.instance_of(t, Q)
              ? this.compareWithBoolean(t, e)
              : this.compareWithNodeSet(t, e);
      })), (W.prototype.equals = W.compareWith(
        j.equals
      )), (W.prototype.notequal = W.compareWith(
        j.notequal
      )), (W.prototype.lessthan = W.compareWith(
        j.lessthan
      )), (W.prototype.greaterthan = W.compareWith(
        j.greaterthan
      )), (W.prototype.lessthanorequal = W.compareWith(
        j.lessthanorequal
      )), (W.prototype.greaterthanorequal = W.compareWith(
        j.greaterthanorequal
      )), (W.prototype.union = function(e) {
        var t = new W();
        return t.addArray(this.toUnsortedArray()), t.addArray(
          e.toUnsortedArray()
        ), t;
      }), (q.prototype = new Object()), (q.prototype.constructor = q), (q.superclass =
        Object.prototype), (q.prototype.toString = function() {
        return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }';
      }), (G.prototype = new Object()), (G.prototype.constructor = G), (G.superclass =
        Object.prototype), (G.prototype.extend = function(e) {
        return p(new G(), this, e);
      }), (Y.prototype = new Object()), (Y.prototype.constructor = Y), (Y.superclass =
        Object.prototype), (Y.prototype.getVariable = function(e, t) {
        return null;
      }), (J.prototype = new Object()), (J.prototype.constructor = J), (J.superclass =
        Object.prototype), (J.prototype.addStandardFunctions = function() {
        (this.functions["{}last"] = K.last), (this.functions["{}position"] =
          K.position), (this.functions["{}count"] = K.count), (this.functions[
          "{}id"
        ] =
          K.id), (this.functions["{}local-name"] =
          K.localName), (this.functions["{}namespace-uri"] =
          K.namespaceURI), (this.functions["{}name"] = K.name), (this.functions[
          "{}string"
        ] =
          K.string), (this.functions["{}concat"] = K.concat), (this.functions[
          "{}starts-with"
        ] =
          K.startsWith), (this.functions["{}contains"] =
          K.contains), (this.functions["{}substring-before"] =
          K.substringBefore), (this.functions["{}substring-after"] =
          K.substringAfter), (this.functions["{}substring"] =
          K.substring), (this.functions["{}string-length"] =
          K.stringLength), (this.functions["{}normalize-space"] =
          K.normalizeSpace), (this.functions["{}translate"] =
          K.translate), (this.functions["{}boolean"] =
          K.boolean_), (this.functions["{}not"] = K.not), (this.functions[
          "{}true"
        ] =
          K.true_), (this.functions["{}false"] = K.false_), (this.functions[
          "{}lang"
        ] =
          K.lang), (this.functions["{}number"] = K.number), (this.functions[
          "{}sum"
        ] =
          K.sum), (this.functions["{}floor"] = K.floor), (this.functions[
          "{}ceiling"
        ] =
          K.ceiling), (this.functions["{}round"] = K.round);
      }), (J.prototype.addFunction = function(e, t, n) {
        this.functions["{" + e + "}" + t] = n;
      }), (J.getFunctionFromContext = function(e, t) {
        var n = Z.resolveQName(e, t.namespaceResolver, t.contextNode, !1);
        if (null === n[0]) throw new Error("Cannot resolve QName " + name);
        return t.functionResolver.getFunction(n[1], n[0]);
      }), (J.prototype.getFunction = function(e, t) {
        return this.functions["{" + t + "}" + e];
      }), (X.prototype = new Object()), (X.prototype.constructor = X), (X.superclass =
        Object.prototype), (X.prototype.getNamespace = function(e, t) {
        if ("xml" == e) return h.XML_NAMESPACE_URI;
        if ("xmlns" == e) return h.XMLNS_NAMESPACE_URI;
        for (
          9 == t.nodeType
            ? (t = t.documentElement)
            : 2 == t.nodeType
              ? (t = D.getOwnerElement(t))
              : 1 != t.nodeType && (t = t.parentNode);
          null != t && 1 == t.nodeType;

        ) {
          for (var n = t.attributes, r = 0; r < n.length; r++) {
            var o = n.item(r),
              i = o.name || o.nodeName;
            if (("xmlns" === i && "" === e) || i === "xmlns:" + e)
              return String(o.value || o.nodeValue);
          }
          t = t.parentNode;
        }
        return null;
      });
      var K = new Object();
      (K.last = function(e) {
        if (1 != arguments.length) throw new Error("Function last expects ()");
        return new z(e.contextSize);
      }), (K.position = function(e) {
        if (1 != arguments.length)
          throw new Error("Function position expects ()");
        return new z(e.contextPosition);
      }), (K.count = function() {
        var e,
          t = arguments[0];
        if (
          2 != arguments.length ||
          !Z.instance_of((e = arguments[1].evaluate(t)), W)
        )
          throw new Error("Function count expects (node-set)");
        return new z(e.size);
      }), (K.id = function() {
        var e,
          t = arguments[0];
        if (2 != arguments.length)
          throw new Error("Function id expects (object)");
        e = arguments[1].evaluate(t);
        for (
          var n = (e = Z.instance_of(e, W)
              ? e.toArray().join(" ")
              : e.stringValue()).split(/[\x0d\x0a\x09\x20]+/),
            r = new W(),
            o =
              9 == t.contextNode.nodeType
                ? t.contextNode
                : t.contextNode.ownerDocument,
            i = 0;
          i < n.length;
          i++
        ) {
          var a;
          null !=
            (a = o.getElementById
              ? o.getElementById(n[i])
              : Z.getElementById(o, n[i])) && (r.add(a), 0);
        }
        return r;
      }), (K.localName = function(e, t) {
        var n;
        if (1 == arguments.length) n = e.contextNode;
        else {
          if (2 != arguments.length)
            throw new Error("Function local-name expects (node-set?)");
          n = t.evaluate(e).first();
        }
        return new V(
          null == n
            ? ""
            : n.localName || n.baseName || n.target || n.nodeName || ""
        );
      }), (K.namespaceURI = function() {
        var e,
          t = arguments[0];
        if (1 == arguments.length) e = t.contextNode;
        else {
          if (2 != arguments.length)
            throw new Error("Function namespace-uri expects (node-set?)");
          e = arguments[1].evaluate(t).first();
        }
        return new V(null == e ? "" : e.namespaceURI);
      }), (K.name = function() {
        var e,
          t = arguments[0];
        if (1 == arguments.length) e = t.contextNode;
        else {
          if (2 != arguments.length)
            throw new Error("Function name expects (node-set?)");
          e = arguments[1].evaluate(t).first();
        }
        return null == e
          ? new V("")
          : 1 == e.nodeType
            ? new V(e.nodeName)
            : 2 == e.nodeType
              ? new V(e.name || e.nodeName)
              : 7 === e.nodeType
                ? new V(e.target || e.nodeName)
                : null == e.localName ? new V("") : new V(e.localName);
      }), (K.string = function() {
        var e = arguments[0];
        if (1 == arguments.length)
          return new V(W.prototype.stringForNode(e.contextNode));
        if (2 == arguments.length) return arguments[1].evaluate(e).string();
        throw new Error("Function string expects (object?)");
      }), (K.concat = function(e) {
        if (arguments.length < 3)
          throw new Error(
            "Function concat expects (string, string[, string]*)"
          );
        for (var t = "", n = 1; n < arguments.length; n++)
          t += arguments[n].evaluate(e).stringValue();
        return new V(t);
      }), (K.startsWith = function() {
        var e = arguments[0];
        if (3 != arguments.length)
          throw new Error("Function startsWith expects (string, string)");
        var t = arguments[1].evaluate(e).stringValue(),
          n = arguments[2].evaluate(e).stringValue();
        return new Q(t.substring(0, n.length) == n);
      }), (K.contains = function() {
        var e = arguments[0];
        if (3 != arguments.length)
          throw new Error("Function contains expects (string, string)");
        var t = arguments[1].evaluate(e).stringValue(),
          n = arguments[2].evaluate(e).stringValue();
        return new Q(-1 !== t.indexOf(n));
      }), (K.substringBefore = function() {
        var e = arguments[0];
        if (3 != arguments.length)
          throw new Error("Function substring-before expects (string, string)");
        var t = arguments[1].evaluate(e).stringValue(),
          n = arguments[2].evaluate(e).stringValue();
        return new V(t.substring(0, t.indexOf(n)));
      }), (K.substringAfter = function() {
        var e = arguments[0];
        if (3 != arguments.length)
          throw new Error("Function substring-after expects (string, string)");
        var t = arguments[1].evaluate(e).stringValue(),
          n = arguments[2].evaluate(e).stringValue();
        if (0 == n.length) return new V(t);
        var r = t.indexOf(n);
        return new V(-1 == r ? "" : t.substring(r + n.length));
      }), (K.substring = function() {
        var e = arguments[0];
        if (3 != arguments.length && 4 != arguments.length)
          throw new Error(
            "Function substring expects (string, number, number?)"
          );
        var t = arguments[1].evaluate(e).stringValue(),
          n = Math.round(arguments[2].evaluate(e).numberValue()) - 1,
          r =
            4 == arguments.length
              ? n + Math.round(arguments[3].evaluate(e).numberValue())
              : void 0;
        return new V(t.substring(n, r));
      }), (K.stringLength = function() {
        var e,
          t = arguments[0];
        if (1 == arguments.length) e = W.prototype.stringForNode(t.contextNode);
        else {
          if (2 != arguments.length)
            throw new Error("Function string-length expects (string?)");
          e = arguments[1].evaluate(t).stringValue();
        }
        return new z(e.length);
      }), (K.normalizeSpace = function() {
        var e,
          t = arguments[0];
        if (1 == arguments.length) e = W.prototype.stringForNode(t.contextNode);
        else {
          if (2 != arguments.length)
            throw new Error("Function normalize-space expects (string?)");
          e = arguments[1].evaluate(t).stringValue();
        }
        for (var n = 0, r = e.length - 1; Z.isSpace(e.charCodeAt(r)); ) r--;
        for (var o = ""; n <= r && Z.isSpace(e.charCodeAt(n)); ) n++;
        for (; n <= r; )
          if (Z.isSpace(e.charCodeAt(n)))
            for (o += " "; n <= r && Z.isSpace(e.charCodeAt(n)); ) n++;
          else (o += e.charAt(n)), n++;
        return new V(o);
      }), (K.translate = function(e, t, n, i) {
        if (4 != arguments.length)
          throw new Error(
            "Function translate expects (string, string, string)"
          );
        var a = t.evaluate(e).stringValue(),
          u = n.evaluate(e).stringValue(),
          s = i.evaluate(e).stringValue(),
          l = r(
            function(e, t, n) {
              return t in e || (e[t] = n > s.length ? "" : s[n]), e;
            },
            {},
            u
          );
        return new V(
          c(
            "",
            o(function(e) {
              return e in l ? l[e] : e;
            }, a)
          )
        );
      }), (K.boolean_ = function() {
        var e = arguments[0];
        if (2 != arguments.length)
          throw new Error("Function boolean expects (object)");
        return arguments[1].evaluate(e).bool();
      }), (K.not = function(e, t) {
        if (2 != arguments.length)
          throw new Error("Function not expects (object)");
        return t.evaluate(e).bool().not();
      }), (K.true_ = function() {
        if (1 != arguments.length) throw new Error("Function true expects ()");
        return Q.true_;
      }), (K.false_ = function() {
        if (1 != arguments.length) throw new Error("Function false expects ()");
        return Q.false_;
      }), (K.lang = function() {
        var e,
          t = arguments[0];
        if (2 != arguments.length)
          throw new Error("Function lang expects (string)");
        for (
          var n = t.contextNode;
          null != n && 9 != n.nodeType;
          n = n.parentNode
        ) {
          var r = n.getAttributeNS(h.XML_NAMESPACE_URI, "lang");
          if (null != r) {
            e = String(r);
            break;
          }
        }
        if (null == e) return Q.false_;
        var o = arguments[1].evaluate(t).stringValue();
        return new Q(
          e.substring(0, o.length) == o &&
            (e.length == o.length || "-" == e.charAt(o.length))
        );
      }), (K.number = function() {
        var e = arguments[0];
        if (1 != arguments.length && 2 != arguments.length)
          throw new Error("Function number expects (object?)");
        return 1 == arguments.length
          ? new z(W.prototype.stringForNode(e.contextNode))
          : arguments[1].evaluate(e).number();
      }), (K.sum = function() {
        var e,
          t = arguments[0];
        if (
          2 != arguments.length ||
          !Z.instance_of((e = arguments[1].evaluate(t)), W)
        )
          throw new Error("Function sum expects (node-set)");
        e = e.toUnsortedArray();
        for (var n = 0, r = 0; r < e.length; r++)
          n += new z(W.prototype.stringForNode(e[r])).numberValue();
        return new z(n);
      }), (K.floor = function() {
        var e = arguments[0];
        if (2 != arguments.length)
          throw new Error("Function floor expects (number)");
        return new z(Math.floor(arguments[1].evaluate(e).numberValue()));
      }), (K.ceiling = function() {
        var e = arguments[0];
        if (2 != arguments.length)
          throw new Error("Function ceiling expects (number)");
        return new z(Math.ceil(arguments[1].evaluate(e).numberValue()));
      }), (K.round = function() {
        var e = arguments[0];
        if (2 != arguments.length)
          throw new Error("Function round expects (number)");
        return new z(Math.round(arguments[1].evaluate(e).numberValue()));
      });
      var Z = new Object();
      (Z.isAttribute = function(e) {
        return e && (2 === e.nodeType || e.ownerElement);
      }), (Z.splitQName = function(e) {
        var t = e.indexOf(":");
        return -1 == t ? [null, e] : [e.substring(0, t), e.substring(t + 1)];
      }), (Z.resolveQName = function(e, t, n, r) {
        var o = Z.splitQName(e);
        return null != o[0]
          ? (o[0] = t.getNamespace(o[0], n))
          : r
            ? ((o[0] = t.getNamespace("", n)), null == o[0] && (o[0] = ""))
            : (o[0] = ""), o;
      }), (Z.isSpace = function(e) {
        return 9 == e || 13 == e || 10 == e || 32 == e;
      }), (Z.isLetter = function(e) {
        return (
          (e >= 65 && e <= 90) ||
          (e >= 97 && e <= 122) ||
          (e >= 192 && e <= 214) ||
          (e >= 216 && e <= 246) ||
          (e >= 248 && e <= 255) ||
          (e >= 256 && e <= 305) ||
          (e >= 308 && e <= 318) ||
          (e >= 321 && e <= 328) ||
          (e >= 330 && e <= 382) ||
          (e >= 384 && e <= 451) ||
          (e >= 461 && e <= 496) ||
          (e >= 500 && e <= 501) ||
          (e >= 506 && e <= 535) ||
          (e >= 592 && e <= 680) ||
          (e >= 699 && e <= 705) ||
          902 == e ||
          (e >= 904 && e <= 906) ||
          908 == e ||
          (e >= 910 && e <= 929) ||
          (e >= 931 && e <= 974) ||
          (e >= 976 && e <= 982) ||
          986 == e ||
          988 == e ||
          990 == e ||
          992 == e ||
          (e >= 994 && e <= 1011) ||
          (e >= 1025 && e <= 1036) ||
          (e >= 1038 && e <= 1103) ||
          (e >= 1105 && e <= 1116) ||
          (e >= 1118 && e <= 1153) ||
          (e >= 1168 && e <= 1220) ||
          (e >= 1223 && e <= 1224) ||
          (e >= 1227 && e <= 1228) ||
          (e >= 1232 && e <= 1259) ||
          (e >= 1262 && e <= 1269) ||
          (e >= 1272 && e <= 1273) ||
          (e >= 1329 && e <= 1366) ||
          1369 == e ||
          (e >= 1377 && e <= 1414) ||
          (e >= 1488 && e <= 1514) ||
          (e >= 1520 && e <= 1522) ||
          (e >= 1569 && e <= 1594) ||
          (e >= 1601 && e <= 1610) ||
          (e >= 1649 && e <= 1719) ||
          (e >= 1722 && e <= 1726) ||
          (e >= 1728 && e <= 1742) ||
          (e >= 1744 && e <= 1747) ||
          1749 == e ||
          (e >= 1765 && e <= 1766) ||
          (e >= 2309 && e <= 2361) ||
          2365 == e ||
          (e >= 2392 && e <= 2401) ||
          (e >= 2437 && e <= 2444) ||
          (e >= 2447 && e <= 2448) ||
          (e >= 2451 && e <= 2472) ||
          (e >= 2474 && e <= 2480) ||
          2482 == e ||
          (e >= 2486 && e <= 2489) ||
          (e >= 2524 && e <= 2525) ||
          (e >= 2527 && e <= 2529) ||
          (e >= 2544 && e <= 2545) ||
          (e >= 2565 && e <= 2570) ||
          (e >= 2575 && e <= 2576) ||
          (e >= 2579 && e <= 2600) ||
          (e >= 2602 && e <= 2608) ||
          (e >= 2610 && e <= 2611) ||
          (e >= 2613 && e <= 2614) ||
          (e >= 2616 && e <= 2617) ||
          (e >= 2649 && e <= 2652) ||
          2654 == e ||
          (e >= 2674 && e <= 2676) ||
          (e >= 2693 && e <= 2699) ||
          2701 == e ||
          (e >= 2703 && e <= 2705) ||
          (e >= 2707 && e <= 2728) ||
          (e >= 2730 && e <= 2736) ||
          (e >= 2738 && e <= 2739) ||
          (e >= 2741 && e <= 2745) ||
          2749 == e ||
          2784 == e ||
          (e >= 2821 && e <= 2828) ||
          (e >= 2831 && e <= 2832) ||
          (e >= 2835 && e <= 2856) ||
          (e >= 2858 && e <= 2864) ||
          (e >= 2866 && e <= 2867) ||
          (e >= 2870 && e <= 2873) ||
          2877 == e ||
          (e >= 2908 && e <= 2909) ||
          (e >= 2911 && e <= 2913) ||
          (e >= 2949 && e <= 2954) ||
          (e >= 2958 && e <= 2960) ||
          (e >= 2962 && e <= 2965) ||
          (e >= 2969 && e <= 2970) ||
          2972 == e ||
          (e >= 2974 && e <= 2975) ||
          (e >= 2979 && e <= 2980) ||
          (e >= 2984 && e <= 2986) ||
          (e >= 2990 && e <= 2997) ||
          (e >= 2999 && e <= 3001) ||
          (e >= 3077 && e <= 3084) ||
          (e >= 3086 && e <= 3088) ||
          (e >= 3090 && e <= 3112) ||
          (e >= 3114 && e <= 3123) ||
          (e >= 3125 && e <= 3129) ||
          (e >= 3168 && e <= 3169) ||
          (e >= 3205 && e <= 3212) ||
          (e >= 3214 && e <= 3216) ||
          (e >= 3218 && e <= 3240) ||
          (e >= 3242 && e <= 3251) ||
          (e >= 3253 && e <= 3257) ||
          3294 == e ||
          (e >= 3296 && e <= 3297) ||
          (e >= 3333 && e <= 3340) ||
          (e >= 3342 && e <= 3344) ||
          (e >= 3346 && e <= 3368) ||
          (e >= 3370 && e <= 3385) ||
          (e >= 3424 && e <= 3425) ||
          (e >= 3585 && e <= 3630) ||
          3632 == e ||
          (e >= 3634 && e <= 3635) ||
          (e >= 3648 && e <= 3653) ||
          (e >= 3713 && e <= 3714) ||
          3716 == e ||
          (e >= 3719 && e <= 3720) ||
          3722 == e ||
          3725 == e ||
          (e >= 3732 && e <= 3735) ||
          (e >= 3737 && e <= 3743) ||
          (e >= 3745 && e <= 3747) ||
          3749 == e ||
          3751 == e ||
          (e >= 3754 && e <= 3755) ||
          (e >= 3757 && e <= 3758) ||
          3760 == e ||
          (e >= 3762 && e <= 3763) ||
          3773 == e ||
          (e >= 3776 && e <= 3780) ||
          (e >= 3904 && e <= 3911) ||
          (e >= 3913 && e <= 3945) ||
          (e >= 4256 && e <= 4293) ||
          (e >= 4304 && e <= 4342) ||
          4352 == e ||
          (e >= 4354 && e <= 4355) ||
          (e >= 4357 && e <= 4359) ||
          4361 == e ||
          (e >= 4363 && e <= 4364) ||
          (e >= 4366 && e <= 4370) ||
          4412 == e ||
          4414 == e ||
          4416 == e ||
          4428 == e ||
          4430 == e ||
          4432 == e ||
          (e >= 4436 && e <= 4437) ||
          4441 == e ||
          (e >= 4447 && e <= 4449) ||
          4451 == e ||
          4453 == e ||
          4455 == e ||
          4457 == e ||
          (e >= 4461 && e <= 4462) ||
          (e >= 4466 && e <= 4467) ||
          4469 == e ||
          4510 == e ||
          4520 == e ||
          4523 == e ||
          (e >= 4526 && e <= 4527) ||
          (e >= 4535 && e <= 4536) ||
          4538 == e ||
          (e >= 4540 && e <= 4546) ||
          4587 == e ||
          4592 == e ||
          4601 == e ||
          (e >= 7680 && e <= 7835) ||
          (e >= 7840 && e <= 7929) ||
          (e >= 7936 && e <= 7957) ||
          (e >= 7960 && e <= 7965) ||
          (e >= 7968 && e <= 8005) ||
          (e >= 8008 && e <= 8013) ||
          (e >= 8016 && e <= 8023) ||
          8025 == e ||
          8027 == e ||
          8029 == e ||
          (e >= 8031 && e <= 8061) ||
          (e >= 8064 && e <= 8116) ||
          (e >= 8118 && e <= 8124) ||
          8126 == e ||
          (e >= 8130 && e <= 8132) ||
          (e >= 8134 && e <= 8140) ||
          (e >= 8144 && e <= 8147) ||
          (e >= 8150 && e <= 8155) ||
          (e >= 8160 && e <= 8172) ||
          (e >= 8178 && e <= 8180) ||
          (e >= 8182 && e <= 8188) ||
          8486 == e ||
          (e >= 8490 && e <= 8491) ||
          8494 == e ||
          (e >= 8576 && e <= 8578) ||
          (e >= 12353 && e <= 12436) ||
          (e >= 12449 && e <= 12538) ||
          (e >= 12549 && e <= 12588) ||
          (e >= 44032 && e <= 55203) ||
          (e >= 19968 && e <= 40869) ||
          12295 == e ||
          (e >= 12321 && e <= 12329)
        );
      }), (Z.isNCNameChar = function(e) {
        return (
          (e >= 48 && e <= 57) ||
          (e >= 1632 && e <= 1641) ||
          (e >= 1776 && e <= 1785) ||
          (e >= 2406 && e <= 2415) ||
          (e >= 2534 && e <= 2543) ||
          (e >= 2662 && e <= 2671) ||
          (e >= 2790 && e <= 2799) ||
          (e >= 2918 && e <= 2927) ||
          (e >= 3047 && e <= 3055) ||
          (e >= 3174 && e <= 3183) ||
          (e >= 3302 && e <= 3311) ||
          (e >= 3430 && e <= 3439) ||
          (e >= 3664 && e <= 3673) ||
          (e >= 3792 && e <= 3801) ||
          (e >= 3872 && e <= 3881) ||
          46 == e ||
          45 == e ||
          95 == e ||
          Z.isLetter(e) ||
          (e >= 768 && e <= 837) ||
          (e >= 864 && e <= 865) ||
          (e >= 1155 && e <= 1158) ||
          (e >= 1425 && e <= 1441) ||
          (e >= 1443 && e <= 1465) ||
          (e >= 1467 && e <= 1469) ||
          1471 == e ||
          (e >= 1473 && e <= 1474) ||
          1476 == e ||
          (e >= 1611 && e <= 1618) ||
          1648 == e ||
          (e >= 1750 && e <= 1756) ||
          (e >= 1757 && e <= 1759) ||
          (e >= 1760 && e <= 1764) ||
          (e >= 1767 && e <= 1768) ||
          (e >= 1770 && e <= 1773) ||
          (e >= 2305 && e <= 2307) ||
          2364 == e ||
          (e >= 2366 && e <= 2380) ||
          2381 == e ||
          (e >= 2385 && e <= 2388) ||
          (e >= 2402 && e <= 2403) ||
          (e >= 2433 && e <= 2435) ||
          2492 == e ||
          2494 == e ||
          2495 == e ||
          (e >= 2496 && e <= 2500) ||
          (e >= 2503 && e <= 2504) ||
          (e >= 2507 && e <= 2509) ||
          2519 == e ||
          (e >= 2530 && e <= 2531) ||
          2562 == e ||
          2620 == e ||
          2622 == e ||
          2623 == e ||
          (e >= 2624 && e <= 2626) ||
          (e >= 2631 && e <= 2632) ||
          (e >= 2635 && e <= 2637) ||
          (e >= 2672 && e <= 2673) ||
          (e >= 2689 && e <= 2691) ||
          2748 == e ||
          (e >= 2750 && e <= 2757) ||
          (e >= 2759 && e <= 2761) ||
          (e >= 2763 && e <= 2765) ||
          (e >= 2817 && e <= 2819) ||
          2876 == e ||
          (e >= 2878 && e <= 2883) ||
          (e >= 2887 && e <= 2888) ||
          (e >= 2891 && e <= 2893) ||
          (e >= 2902 && e <= 2903) ||
          (e >= 2946 && e <= 2947) ||
          (e >= 3006 && e <= 3010) ||
          (e >= 3014 && e <= 3016) ||
          (e >= 3018 && e <= 3021) ||
          3031 == e ||
          (e >= 3073 && e <= 3075) ||
          (e >= 3134 && e <= 3140) ||
          (e >= 3142 && e <= 3144) ||
          (e >= 3146 && e <= 3149) ||
          (e >= 3157 && e <= 3158) ||
          (e >= 3202 && e <= 3203) ||
          (e >= 3262 && e <= 3268) ||
          (e >= 3270 && e <= 3272) ||
          (e >= 3274 && e <= 3277) ||
          (e >= 3285 && e <= 3286) ||
          (e >= 3330 && e <= 3331) ||
          (e >= 3390 && e <= 3395) ||
          (e >= 3398 && e <= 3400) ||
          (e >= 3402 && e <= 3405) ||
          3415 == e ||
          3633 == e ||
          (e >= 3636 && e <= 3642) ||
          (e >= 3655 && e <= 3662) ||
          3761 == e ||
          (e >= 3764 && e <= 3769) ||
          (e >= 3771 && e <= 3772) ||
          (e >= 3784 && e <= 3789) ||
          (e >= 3864 && e <= 3865) ||
          3893 == e ||
          3895 == e ||
          3897 == e ||
          3902 == e ||
          3903 == e ||
          (e >= 3953 && e <= 3972) ||
          (e >= 3974 && e <= 3979) ||
          (e >= 3984 && e <= 3989) ||
          3991 == e ||
          (e >= 3993 && e <= 4013) ||
          (e >= 4017 && e <= 4023) ||
          4025 == e ||
          (e >= 8400 && e <= 8412) ||
          8417 == e ||
          (e >= 12330 && e <= 12335) ||
          12441 == e ||
          12442 == e ||
          183 == e ||
          720 == e ||
          721 == e ||
          903 == e ||
          1600 == e ||
          3654 == e ||
          3782 == e ||
          12293 == e ||
          (e >= 12337 && e <= 12341) ||
          (e >= 12445 && e <= 12446) ||
          (e >= 12540 && e <= 12542)
        );
      }), (Z.coalesceText = function(e) {
        for (var t = e.firstChild; null != t; t = t.nextSibling)
          if (3 == t.nodeType || 4 == t.nodeType) {
            var n = t.nodeValue,
              r = t;
            for (
              t = t.nextSibling;
              null != t && (3 == t.nodeType || 4 == t.nodeType);

            ) {
              n += t.nodeValue;
              var o = t;
              (t = t.nextSibling), o.parentNode.removeChild(o);
            }
            if (4 == r.nodeType) {
              var i = r.parentNode;
              if (null == r.nextSibling)
                i.removeChild(r), i.appendChild(
                  i.ownerDocument.createTextNode(n)
                );
              else {
                var a = r.nextSibling;
                i.removeChild(r), i.insertBefore(
                  i.ownerDocument.createTextNode(n),
                  a
                );
              }
            } else r.nodeValue = n;
            if (null == t) break;
          } else 1 == t.nodeType && Z.coalesceText(t);
      }), (Z.instance_of = function(e, t) {
        for (; null != e; ) {
          if (e.constructor === t) return !0;
          if (e === Object) return !1;
          e = e.constructor.superclass;
        }
        return !1;
      }), (Z.getElementById = function(e, t) {
        if (
          1 == e.nodeType &&
          (e.getAttribute("id") == t || e.getAttributeNS(null, "id") == t)
        )
          return e;
        for (var n = e.firstChild; null != n; n = n.nextSibling) {
          var r = Z.getElementById(n, t);
          if (null != r) return r;
        }
        return null;
      });
      var $ = (function() {
        function e(t, n, r) {
          var o = Error.call(
            this,
            (function(t, n) {
              var r = n ? ": " + n.toString() : "";
              switch (t) {
                case e.INVALID_EXPRESSION_ERR:
                  return "Invalid expression" + r;
                case e.TYPE_ERR:
                  return "Type error" + r;
              }
              return null;
            })(t, n) || r
          );
          return (o.code = t), (o.exception = n), o;
        }
        return (e.prototype = Object.create(
          Error.prototype
        )), (e.prototype.constructor = e), (e.superclass = Error), (e.prototype.toString = function() {
          return this.message;
        }), (e.fromMessage = function(t, n) {
          return new e(null, n, t);
        }), (e.INVALID_EXPRESSION_ERR = 51), (e.TYPE_ERR = 52), e;
      })();
      function ee(e, t, n) {
        (this.xpath = n.parse(
          e
        )), (this.context = new G()), (this.context.namespaceResolver = new te(
          t
        ));
      }
      function te(e) {
        this.xpathNSResolver = e;
      }
      function ne(e) {
        (this.node = e), (this.namespaceResolver = new X());
      }
      function re(e, t) {
        switch ((
          t == re.ANY_TYPE &&
            (e.constructor === V
              ? (t = re.STRING_TYPE)
              : e.constructor === z
                ? (t = re.NUMBER_TYPE)
                : e.constructor === Q
                  ? (t = re.BOOLEAN_TYPE)
                  : e.constructor === W &&
                    (t = re.UNORDERED_NODE_ITERATOR_TYPE)),
          (this.resultType = t),
          t
        )) {
          case re.NUMBER_TYPE:
            return void (this.numberValue = e.numberValue());
          case re.STRING_TYPE:
            return void (this.stringValue = e.stringValue());
          case re.BOOLEAN_TYPE:
            return void (this.booleanValue = e.booleanValue());
          case re.ANY_UNORDERED_NODE_TYPE:
          case re.FIRST_ORDERED_NODE_TYPE:
            if (e.constructor === W)
              return void (this.singleNodeValue = e.first());
            break;
          case re.UNORDERED_NODE_ITERATOR_TYPE:
          case re.ORDERED_NODE_ITERATOR_TYPE:
            if (e.constructor === W)
              return (this.invalidIteratorState = !1), (this.nodes = e.toArray()), void (this.iteratorIndex = 0);
            break;
          case re.UNORDERED_NODE_SNAPSHOT_TYPE:
          case re.ORDERED_NODE_SNAPSHOT_TYPE:
            if (e.constructor === W)
              return (this.nodes = e.toArray()), void (this.snapshotLength = this.nodes.length);
        }
        throw new $($.TYPE_ERR);
      }
      function oe(e, t) {
        (e.createExpression = function(e, n) {
          try {
            return new ee(e, n, t);
          } catch (e) {
            throw new $($.INVALID_EXPRESSION_ERR, e);
          }
        }), (e.createNSResolver = function(e) {
          return new ne(e);
        }), (e.evaluate = function(n, r, o, i, a) {
          if (i < 0 || i > 9)
            throw {
              code: 0,
              toString: function() {
                return "Request type not supported";
              }
            };
          return e.createExpression(n, o, t).evaluate(r, i, a);
        });
      }
      (ee.prototype = {}), (ee.prototype.constructor = ee), (ee.superclass =
        Object.prototype), (ee.getOwnerDocument = function(e) {
        return 9 === e.nodeType ? e : e.ownerDocument;
      }), (ee.detectHtmlDom = function(e) {
        if (!e) return !1;
        var t = ee.getOwnerDocument(e);
        try {
          return t.implementation.hasFeature("HTML", "2.0");
        } catch (e) {
          return !0;
        }
      }), (ee.prototype.evaluate = function(e, t, n) {
        return (this.context.expressionContextNode = e), (this.context.caseInsensitive = ee.detectHtmlDom(
          e
        )), new re(this.xpath.evaluate(this.context), t);
      }), (te.prototype = {}), (te.prototype.constructor = te), (te.superclass =
        Object.prototype), (te.prototype.getNamespace = function(e, t) {
        return null == this.xpathNSResolver
          ? null
          : this.xpathNSResolver.lookupNamespaceURI(e);
      }), (ne.prototype = {}), (ne.prototype.constructor = ne), (ne.superclass =
        Object.prototype), (ne.prototype.lookupNamespaceURI = function(e) {
        return this.namespaceResolver.getNamespace(e, this.node);
      }), (re.prototype = {}), (re.prototype.constructor = re), (re.superclass =
        Object.prototype), (re.prototype.iterateNext = function() {
        if (
          this.resultType != re.UNORDERED_NODE_ITERATOR_TYPE &&
          this.resultType != re.ORDERED_NODE_ITERATOR_TYPE
        )
          throw new $($.TYPE_ERR);
        return this.nodes[this.iteratorIndex++];
      }), (re.prototype.snapshotItem = function(e) {
        if (
          this.resultType != re.UNORDERED_NODE_SNAPSHOT_TYPE &&
          this.resultType != re.ORDERED_NODE_SNAPSHOT_TYPE
        )
          throw new $($.TYPE_ERR);
        return this.nodes[e];
      }), (re.ANY_TYPE = 0), (re.NUMBER_TYPE = 1), (re.STRING_TYPE = 2), (re.BOOLEAN_TYPE = 3), (re.UNORDERED_NODE_ITERATOR_TYPE = 4), (re.ORDERED_NODE_ITERATOR_TYPE = 5), (re.UNORDERED_NODE_SNAPSHOT_TYPE = 6), (re.ORDERED_NODE_SNAPSHOT_TYPE = 7), (re.ANY_UNORDERED_NODE_TYPE = 8), (re.FIRST_ORDERED_NODE_TYPE = 9);
      try {
        var ie = !0;
        try {
          document.implementation &&
            document.implementation.hasFeature &&
            document.implementation.hasFeature("XPath", null) &&
            (ie = !1);
        } catch (e) {}
        ie && oe(document, new d());
      } catch (e) {}
      oe(e, new d()), (function() {
        var t = new d(),
          n = new X(),
          r = new J(),
          o = new Y();
        function i(e) {
          return {
            getNamespace: function(t, r) {
              return e(t, r) || n.getNamespace(t, r);
            }
          };
        }
        function a(e) {
          return e && "function" === typeof e.getNamespace
            ? (function(e) {
                return i(e.getNamespace.bind(e));
              })(e)
            : "function" === typeof e
              ? i(e)
              : "object" === typeof e
                ? (function(e) {
                    return i(function(t) {
                      return e[t];
                    });
                  })(e)
                : n;
        }
        function u(e) {
          if (
            null === e ||
            "undefined" === typeof e ||
            e instanceof V ||
            e instanceof Q ||
            e instanceof z ||
            e instanceof W
          )
            return e;
          switch (typeof e) {
            case "string":
              return new V(e);
            case "boolean":
              return new Q(e);
            case "number":
              return new z(e);
          }
          var t = new W();
          return t.addArray([].concat(e)), t;
        }
        function s(e) {
          return {
            getFunction: function(t, n) {
              var o = e(t, n);
              return o
                ? (function(e) {
                    return function(t) {
                      var n = Array.prototype.slice
                        .call(arguments, 1)
                        .map(function(e) {
                          return e.evaluate(t);
                        });
                      return u(e.apply(this, [].concat(t, n)));
                    };
                  })(o)
                : r.getFunction(t, n);
            }
          };
        }
        function l(e) {
          return e && "function" === typeof e.getFunction
            ? (function(e) {
                return s(e.getFunction.bind(e));
              })(e)
            : "function" === typeof e
              ? s(e)
              : "object" === typeof e
                ? (function(e) {
                    return s(function(t) {
                      return e[t];
                    });
                  })(e)
                : r;
        }
        function c(e) {
          return {
            getVariable: function(t, n) {
              return u(e(t, n));
            }
          };
        }
        function f(e, t, n) {
          e in n && (t[e] = n[e]);
        }
        function p(e) {
          var t = new G();
          return e
            ? (
                (t.namespaceResolver = a(e.namespaces)),
                (t.functionResolver = l(e.functions)),
                (t.variableResolver = (function(e) {
                  if (e) {
                    if ("function" === typeof e.getVariable)
                      return c(e.getVariable.bind(e));
                    if ("function" === typeof e) return c(e);
                    if ("object" === typeof e)
                      return c(function(t) {
                        return e[t];
                      });
                  }
                  return o;
                })(e.variables)),
                (t.expressionContextNode = e.node),
                f("allowAnyNamespaceForNoPrefix", t, e),
                f("isHtml", t, e)
              )
            : (t.namespaceResolver = n), t;
        }
        var h = {
          evaluate: function(e) {
            return (function(e, t) {
              var n = p(t);
              return e.evaluate(n);
            })(this.expression, e);
          },
          evaluateNumber: function(e) {
            return this.evaluate(e).numberValue();
          },
          evaluateString: function(e) {
            return this.evaluate(e).stringValue();
          },
          evaluateBoolean: function(e) {
            return this.evaluate(e).booleanValue();
          },
          evaluateNodeSet: function(e) {
            return this.evaluate(e).nodeset();
          },
          select: function(e) {
            return this.evaluateNodeSet(e).toArray();
          },
          select1: function(e) {
            return this.select(e)[0];
          }
        };
        e.parse = function(e) {
          var n = t.parse(e);
          return Object.create(h, { expression: { value: n } });
        };
      })(), (e.XPath = h), (e.XPathParser = d), (e.XPathResult = re), (e.Step = U), (e.NodeTest = B), (e.BarOperation = I), (e.NamespaceResolver = X), (e.FunctionResolver = J), (e.VariableResolver = Y), (e.Utilities = Z), (e.XPathContext = G), (e.XNodeSet = W), (e.XBoolean = Q), (e.XString = V), (e.XNumber = z), (e.select = function(
        t,
        n,
        r
      ) {
        return e.selectWithResolver(t, n, null, r);
      }), (e.useNamespaces = function(t) {
        var n = {
          mappings: t || {},
          lookupNamespaceURI: function(e) {
            return this.mappings[e];
          }
        };
        return function(t, r, o) {
          return e.selectWithResolver(t, r, n, o);
        };
      }), (e.selectWithResolver = function(e, t, n, r) {
        var o = new ee(e, n, new d()),
          i = re.ANY_TYPE,
          a = o.evaluate(t, i, null);
        return a.resultType == re.STRING_TYPE
          ? (a = a.stringValue)
          : a.resultType == re.NUMBER_TYPE
            ? (a = a.numberValue)
            : a.resultType == re.BOOLEAN_TYPE
              ? (a = a.booleanValue)
              : ((a = a.nodes), r && (a = a[0])), a;
      }), (e.select1 = function(t, n) {
        return e.select(t, n, !0);
      });
    })(t);
  },
  function(e, t, n) {
    "use strict";
    t.a = function() {
      return r.createElement(
        "div",
        { className: "bib-pulse-container" },
        r.createElement(
          "div",
          { className: "bib-pulse" },
          r.createElement("div", null),
          r.createElement("div", null),
          r.createElement("div", null)
        )
      );
    };
    var r = n(1);
    n.n(r);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    var r = n(7),
      o = n(1),
      i = (n.n(o), n(10)),
      a = (n.n(i), n(2)),
      u = n(21),
      s =
        (this && this.__extends) ||
        (function() {
          var e = function(t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function(t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n), (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
          };
        })(),
      l =
        (this && this.__decorate) ||
        function(e, t, n, r) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (o = e[u]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        },
      c = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return s(t, e), (t.prototype.render = function() {
          var e = this.props.state,
            t = this.props.state.bibmodel;
          if (e.isdisabled) return Object(u.c)(t.arxiv_paper);
          if (!t || !t.paper || !t.paper.authors)
            return Object(u.c)(t.arxiv_paper);
          if (t.currentDS && !t.currentDS.loaded)
            return Object(u.c)(t.arxiv_paper);
          var n = t.paper.authors.map(function(e) {
              return o.createElement(
                "li",
                { key: e.url },
                o.createElement(
                  "a",
                  { href: e.url, target: "_blank", rel: "noopener" },
                  e.name
                )
              );
            }),
            r = t.paper.title;
          r.length > 23 && (r = r.substring(0, 40) + "...");
          var i = n;
          return i.length > a.e &&
            (i = i.slice(0, a.e)).push(
              o.createElement(
                "li",
                { key: t.paper.url },
                o.createElement(
                  "a",
                  { href: t.paper.url, target: "_blank", rel: "noopener" },
                  "..."
                )
              )
            ), o.createElement(
            "div",
            { className: "bib-sidebar-paper" },
            o.createElement(
              "div",
              { className: "bib-sidebar-title" },
              o.createElement(
                "span",
                null,
                o.createElement(
                  "a",
                  { href: t.paper.url, target: "_blank", rel: "noopener" },
                  r
                )
              )
            ),
            o.createElement("ul", { className: "bib-sidebar-authors" }, i),
            o.createElement(u.a, { paper: t.paper }),
            o.createElement(u.b, { paper: t.paper }),
            o.createElement(
              "div",
              null,
              o.createElement("span", null, a.q, ": "),
              o.createElement(
                "span",
                { className: "bib-selected" },
                t.currentDS.longname
              )
            )
          );
        }), (t = l([r.a], t));
      })(o.Component);
  }
]);
//# sourceMappingURL=main.449534d5.js.map
