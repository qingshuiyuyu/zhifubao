(function(t, e) {
    "object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define([], e) : "object" === typeof exports ? exports["kwaiCaptcha"] = e() : t["kwaiCaptcha"] = e()
})("undefined" !== typeof self ? self: this,
function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        },
        n.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o,
            function(e) {
                return t[e]
            }.bind(null, o));
            return r
        },
        n.n = function(t) {
            var e = t && t.__esModule ?
            function() {
                return t["default"]
            }: function() {
                return t
            };
            return n.d(e, "a", e),
            e
        },
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        n.p = "",
        n(n.s = "fb15")
    } ({
        "06cf": function(t, e, n) {
            var r = n("83ab"),
            o = n("d1e7"),
            i = n("5c6c"),
            c = n("fc6a"),
            a = n("c04e"),
            u = n("5135"),
            f = n("0cfb"),
            s = Object.getOwnPropertyDescriptor;
            e.f = r ? s: function(t, e) {
                if (t = c(t), e = a(e, !0), f) try {
                    return s(t, e)
                } catch(n) {}
                if (u(t, e)) return i(!o.f.call(t, e), t[e])
            }
        },
        "0cfb": function(t, e, n) {
            var r = n("83ab"),
            o = n("d039"),
            i = n("cc12");
            t.exports = !r && !o(function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        "1d80": function(t, e) {
            t.exports = function(t) {
                if (void 0 == t) throw TypeError("Can't call method on " + t);
                return t
            }
        },
        "1dde": function(t, e, n) {
            var r = n("d039"),
            o = n("b622"),
            i = o("species");
            t.exports = function(t) {
                return ! r(function() {
                    var e = [],
                    n = e.constructor = {};
                    return n[i] = function() {
                        return {
                            foo: 1
                        }
                    },
                    1 !== e[t](Boolean).foo
                })
            }
        },
        "23cb": function(t, e, n) {
            var r = n("a691"),
            o = Math.max,
            i = Math.min;
            t.exports = function(t, e) {
                var n = r(t);
                return n < 0 ? o(n + e, 0) : i(n, e)
            }
        },
        "23e7": function(t, e, n) {
            var r = n("da84"),
            o = n("06cf").f,
            i = n("9112"),
            c = n("6eeb"),
            a = n("ce4e"),
            u = n("e893"),
            f = n("94ca");
            t.exports = function(t, e) {
                var n, s, l, p, d, v, h = t.target,
                b = t.global,
                y = t.stat;
                if (s = b ? r: y ? r[h] || a(h, {}) : (r[h] || {}).prototype, s) for (l in e) {
                    if (d = e[l], t.noTargetGet ? (v = o(s, l), p = v && v.value) : p = s[l], n = f(b ? l: h + (y ? ".": "#") + l, t.forced), !n && void 0 !== p) {
                        if (typeof d === typeof p) continue;
                        u(d, p)
                    } (t.sham || p && p.sham) && i(d, "sham", !0),
                    c(s, l, d, t)
                }
            }
        },
        "241c": function(t, e, n) {
            var r = n("ca84"),
            o = n("7839"),
            i = o.concat("length", "prototype");
            e.f = Object.getOwnPropertyNames ||
            function(t) {
                return r(t, i)
            }
        },
        "24aa": function(t, e) {
            var n;
            n = function() {
                return this
            } ();
            try {
                n = n || new Function("return this")()
            } catch(r) {
                "object" === typeof window && (n = window)
            }
            t.exports = n
        },
        "428f": function(t, e, n) {
            t.exports = n("da84")
        },
        "44ad": function(t, e, n) {
            var r = n("d039"),
            o = n("c6b6"),
            i = "".split;
            t.exports = r(function() {
                return ! Object("z").propertyIsEnumerable(0)
            }) ?
            function(t) {
                return "String" == o(t) ? i.call(t, "") : Object(t)
            }: Object
        },
        4930 : function(t, e, n) {
            var r = n("d039");
            t.exports = !!Object.getOwnPropertySymbols && !r(function() {
                return ! String(Symbol())
            })
        },
        "4d64": function(t, e, n) {
            var r = n("fc6a"),
            o = n("50c4"),
            i = n("23cb"),
            c = function(t) {
                return function(e, n, c) {
                    var a, u = r(e),
                    f = o(u.length),
                    s = i(c, f);
                    if (t && n != n) {
                        while (f > s) if (a = u[s++], a != a) return ! 0
                    } else for (; f > s; s++) if ((t || s in u) && u[s] === n) return t || s || 0;
                    return ! t && -1
                }
            };
            t.exports = {
                includes: c(!0),
                indexOf: c(!1)
            }
        },
        "50c4": function(t, e, n) {
            var r = n("a691"),
            o = Math.min;
            t.exports = function(t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        },
        5135 : function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e)
            }
        },
        5692 : function(t, e, n) {
            var r = n("c430"),
            o = n("c6cd"); (t.exports = function(t, e) {
                return o[t] || (o[t] = void 0 !== e ? e: {})
            })("versions", []).push({
                version: "3.3.2",
                mode: r ? "pure": "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        "56ef": function(t, e, n) {
            var r = n("d066"),
            o = n("241c"),
            i = n("7418"),
            c = n("825a");
            t.exports = r("Reflect", "ownKeys") ||
            function(t) {
                var e = o.f(c(t)),
                n = i.f;
                return n ? e.concat(n(t)) : e
            }
        },
        "5c6c": function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        "65f0": function(t, e, n) {
            var r = n("861d"),
            o = n("e8b5"),
            i = n("b622"),
            c = i("species");
            t.exports = function(t, e) {
                var n;
                return o(t) && (n = t.constructor, "function" != typeof n || n !== Array && !o(n.prototype) ? r(n) && (n = n[c], null === n && (n = void 0)) : n = void 0),
                new(void 0 === n ? Array: n)(0 === e ? 0 : e)
            }
        },
        "69f3": function(t, e, n) {
            var r, o, i, c = n("7f9a"),
            a = n("da84"),
            u = n("861d"),
            f = n("9112"),
            s = n("5135"),
            l = n("f772"),
            p = n("d012"),
            d = a.WeakMap,
            v = function(t) {
                return i(t) ? o(t) : r(t, {})
            },
            h = function(t) {
                return function(e) {
                    var n;
                    if (!u(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            };
            if (c) {
                var b = new d,
                y = b.get,
                g = b.has,
                m = b.set;
                r = function(t, e) {
                    return m.call(b, t, e),
                    e
                },
                o = function(t) {
                    return y.call(b, t) || {}
                },
                i = function(t) {
                    return g.call(b, t)
                }
            } else {
                var w = l("state");
                p[w] = !0,
                r = function(t, e) {
                    return f(t, w, e),
                    e
                },
                o = function(t) {
                    return s(t, w) ? t[w] : {}
                },
                i = function(t) {
                    return s(t, w)
                }
            }
            t.exports = {
                set: r,
                get: o,
                has: i,
                enforce: v,
                getterFor: h
            }
        },
        "6eeb": function(t, e, n) {
            var r = n("da84"),
            o = n("5692"),
            i = n("9112"),
            c = n("5135"),
            a = n("ce4e"),
            u = n("9e81"),
            f = n("69f3"),
            s = f.get,
            l = f.enforce,
            p = String(u).split("toString");
            o("inspectSource",
            function(t) {
                return u.call(t)
            }),
            (t.exports = function(t, e, n, o) {
                var u = !!o && !!o.unsafe,
                f = !!o && !!o.enumerable,
                s = !!o && !!o.noTargetGet;
                "function" == typeof n && ("string" != typeof e || c(n, "name") || i(n, "name", e), l(n).source = p.join("string" == typeof e ? e: "")),
                t !== r ? (u ? !s && t[e] && (f = !0) : delete t[e], f ? t[e] = n: i(t, e, n)) : f ? t[e] = n: a(e, n)
            })(Function.prototype, "toString",
            function() {
                return "function" == typeof this && s(this).source || u.call(this)
            })
        },
        7418 : function(t, e) {
            e.f = Object.getOwnPropertySymbols
        },
        7839 : function(t, e) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        "7a82": function(t, e, n) {
            var r = n("23e7"),
            o = n("83ab"),
            i = n("9bf2");
            r({
                target: "Object",
                stat: !0,
                forced: !o,
                sham: !o
            },
            {
                defineProperty: i.f
            })
        },
        "7b0b": function(t, e, n) {
            var r = n("1d80");
            t.exports = function(t) {
                return Object(r(t))
            }
        },
        "7f9a": function(t, e, n) {
            var r = n("da84"),
            o = n("9e81"),
            i = r.WeakMap;
            t.exports = "function" === typeof i && /native code/.test(o.call(i))
        },
        "825a": function(t, e, n) {
            var r = n("861d");
            t.exports = function(t) {
                if (!r(t)) throw TypeError(String(t) + " is not an object");
                return t
            }
        },
        "83ab": function(t, e, n) {
            var r = n("d039");
            t.exports = !r(function() {
                return 7 != Object.defineProperty({},
                "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        8418 : function(t, e, n) {
            "use strict";
            var r = n("c04e"),
            o = n("9bf2"),
            i = n("5c6c");
            t.exports = function(t, e, n) {
                var c = r(e);
                c in t ? o.f(t, c, i(0, n)) : t[c] = n
            }
        },
        "861d": function(t, e) {
            t.exports = function(t) {
                return "object" === typeof t ? null !== t: "function" === typeof t
            }
        },
        "90e3": function(t, e) {
            var n = 0,
            r = Math.random();
            t.exports = function(t) {
                return "Symbol(" + String(void 0 === t ? "": t) + ")_" + (++n + r).toString(36)
            }
        },
        9112 : function(t, e, n) {
            var r = n("83ab"),
            o = n("9bf2"),
            i = n("5c6c");
            t.exports = r ?
            function(t, e, n) {
                return o.f(t, e, i(1, n))
            }: function(t, e, n) {
                return t[e] = n,
                t
            }
        },
        "94ca": function(t, e, n) {
            var r = n("d039"),
            o = /#|\.prototype\./,
            i = function(t, e) {
                var n = a[c(t)];
                return n == f || n != u && ("function" == typeof e ? r(e) : !!e)
            },
            c = i.normalize = function(t) {
                return String(t).replace(o, ".").toLowerCase()
            },
            a = i.data = {},
            u = i.NATIVE = "N",
            f = i.POLYFILL = "P";
            t.exports = i
        },
        "99af": function(t, e, n) {
            "use strict";
            var r = n("23e7"),
            o = n("d039"),
            i = n("e8b5"),
            c = n("861d"),
            a = n("7b0b"),
            u = n("50c4"),
            f = n("8418"),
            s = n("65f0"),
            l = n("1dde"),
            p = n("b622"),
            d = p("isConcatSpreadable"),
            v = 9007199254740991,
            h = "Maximum allowed index exceeded",
            b = !o(function() {
                var t = [];
                return t[d] = !1,
                t.concat()[0] !== t
            }),
            y = l("concat"),
            g = function(t) {
                if (!c(t)) return ! 1;
                var e = t[d];
                return void 0 !== e ? !!e: i(t)
            },
            m = !b || !y;
            r({
                target: "Array",
                proto: !0,
                forced: m
            },
            {
                concat: function(t) {
                    var e, n, r, o, i, c = a(this),
                    l = s(c, 0),
                    p = 0;
                    for (e = -1, r = arguments.length; e < r; e++) if (i = -1 === e ? c: arguments[e], g(i)) {
                        if (o = u(i.length), p + o > v) throw TypeError(h);
                        for (n = 0; n < o; n++, p++) n in i && f(l, p, i[n])
                    } else {
                        if (p >= v) throw TypeError(h);
                        f(l, p++, i)
                    }
                    return l.length = p,
                    l
                }
            })
        },
        "9bf2": function(t, e, n) {
            var r = n("83ab"),
            o = n("0cfb"),
            i = n("825a"),
            c = n("c04e"),
            a = Object.defineProperty;
            e.f = r ? a: function(t, e, n) {
                if (i(t), e = c(e, !0), i(n), o) try {
                    return a(t, e, n)
                } catch(r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value),
                t
            }
        },
        "9e81": function(t, e, n) {
            var r = n("5692");
            t.exports = r("native-function-to-string", Function.toString)
        },
        a691: function(t, e) {
            var n = Math.ceil,
            r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r: n)(t)
            }
        },
        b0c0: function(t, e, n) {
            var r = n("83ab"),
            o = n("9bf2").f,
            i = Function.prototype,
            c = i.toString,
            a = /^\s*function ([^ (]*)/,
            u = "name"; ! r || u in i || o(i, u, {
                configurable: !0,
                get: function() {
                    try {
                        return c.call(this).match(a)[1]
                    } catch(t) {
                        return ""
                    }
                }
            })
        },
        b622: function(t, e, n) {
            var r = n("da84"),
            o = n("5692"),
            i = n("90e3"),
            c = n("4930"),
            a = r.Symbol,
            u = o("wks");
            t.exports = function(t) {
                return u[t] || (u[t] = c && a[t] || (c ? a: i)("Symbol." + t))
            }
        },
        c04e: function(t, e, n) {
            var r = n("861d");
            t.exports = function(t, e) {
                if (!r(t)) return t;
                var n, o;
                if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
                if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        c430: function(t, e) {
            t.exports = !1
        },
        c6b6: function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        },
        c6cd: function(t, e, n) {
            var r = n("da84"),
            o = n("ce4e"),
            i = "__core-js_shared__",
            c = r[i] || o(i, {});
            t.exports = c
        },
        ca84: function(t, e, n) {
            var r = n("5135"),
            o = n("fc6a"),
            i = n("4d64").indexOf,
            c = n("d012");
            t.exports = function(t, e) {
                var n, a = o(t),
                u = 0,
                f = [];
                for (n in a) ! r(c, n) && r(a, n) && f.push(n);
                while (e.length > u) r(a, n = e[u++]) && (~i(f, n) || f.push(n));
                return f
            }
        },
        cc12: function(t, e, n) {
            var r = n("da84"),
            o = n("861d"),
            i = r.document,
            c = o(i) && o(i.createElement);
            t.exports = function(t) {
                return c ? i.createElement(t) : {}
            }
        },
        ce4e: function(t, e, n) {
            var r = n("da84"),
            o = n("9112");
            t.exports = function(t, e) {
                try {
                    o(r, t, e)
                } catch(n) {
                    r[t] = e
                }
                return e
            }
        },
        d012: function(t, e) {
            t.exports = {}
        },
        d039: function(t, e) {
            t.exports = function(t) {
                try {
                    return !! t()
                } catch(e) {
                    return ! 0
                }
            }
        },
        d066: function(t, e, n) {
            var r = n("428f"),
            o = n("da84"),
            i = function(t) {
                return "function" == typeof t ? t: void 0
            };
            t.exports = function(t, e) {
                return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
            }
        },
        d1e7: function(t, e, n) {
            "use strict";
            var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({
                1 : 2
            },
            1);
            e.f = i ?
            function(t) {
                var e = o(this, t);
                return !! e && e.enumerable
            }: r
        },
        da84: function(t, e, n) { (function(e) {
                var n = function(t) {
                    return t && t.Math == Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
            }).call(this, n("24aa"))
        },
        e893: function(t, e, n) {
            var r = n("5135"),
            o = n("56ef"),
            i = n("06cf"),
            c = n("9bf2");
            t.exports = function(t, e) {
                for (var n = o(e), a = c.f, u = i.f, f = 0; f < n.length; f++) {
                    var s = n[f];
                    r(t, s) || a(t, s, u(e, s))
                }
            }
        },
        e8b5: function(t, e, n) {
            var r = n("c6b6");
            t.exports = Array.isArray ||
            function(t) {
                return "Array" == r(t)
            }
        },
        f6fd: function(t, e) { (function(t) {
                var e = "currentScript",
                n = t.getElementsByTagName("script");
                e in t || Object.defineProperty(t, e, {
                    get: function() {
                        try {
                            throw new Error
                        } catch(r) {
                            var t, e = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack) || [!1])[1];
                            for (t in n) if (n[t].src == e || "interactive" == n[t].readyState) return n[t];
                            return null
                        }
                    }
                })
            })(document)
        },
        f772: function(t, e, n) {
            var r = n("5692"),
            o = n("90e3"),
            i = r("keys");
            t.exports = function(t) {
                return i[t] || (i[t] = o(t))
            }
        },
        fb15: function(t, e, n) {
            "use strict";
            var r; (n.r(e), "undefined" !== typeof window) && (n("f6fd"), (r = window.document.currentScript) && (r = r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/)) && (n.p = r[1]));
            n("99af"),
            n("b0c0"),
            n("7a82");
            function o(t, e) {
                if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function c(t, e, n) {
                return e && i(t.prototype, e),
                n && i(t, n),
                t
            }
            var a = window.CrossWinMsg = function() {
                var t = "[KwaiCaptcha]",
                e = "postMessage" in window,
                n = function() {
                    function n(t, e) {
                        o(this, n),
                        this.target = t,
                        this.name = e
                    }
                    return c(n, [{
                        key: "send",
                        value: function(n) {
                            if (e) this.target.postMessage(n, "*");
                            else {
                                var r = window.navigator[t + this.name];
                                "function" === typeof r && r(n, window)
                            }
                        }
                    }]),
                    n
                } (),
                r = function() {
                    function r(e, n) {
                        o(this, r),
                        this.name = e,
                        this.targets = {},
                        this.listeners = [],
                        n && (t = n),
                        this.initListener()
                    }
                    return c(r, [{
                        key: "initListener",
                        value: function() {
                            var n = this,
                            r = this.execListener = function(t) {
                                var e;
                                e = t && t.data ? t.data: t;
                                for (var r = 0; r < n.listeners.length; r++) n.listeners[r](e)
                            };
                            e ? "addEventListener" in document ? window.addEventListener("message", r, !1) : "attachEvent" in document && window.attachEvent("onmessage", r) : window.navigator[t + this.name] = r
                        }
                    },
                    {
                        key: "addTarget",
                        value: function(t, e) {
                            var r = new n(t, e);
                            this.targets[e] = r
                        }
                    },
                    {
                        key: "addListener",
                        value: function(t) {
                            this.listeners.push(t)
                        }
                    },
                    {
                        key: "clearListeners",
                        value: function() {
                            this.listeners = []
                        }
                    },
                    {
                        key: "send",
                        value: function(t, e) {
                            for (var n in this.targets) this.targets.hasOwnProperty(n) && (e ? this.targets[n].name === e && this.targets[n].send(t) : this.targets[n].send(t))
                        }
                    },
                    {
                        key: "clearAll",
                        value: function() {
                            this.name = "",
                            this.listeners = [],
                            this.targets = {},
                            t = "[KwaiCpatcha]",
                            e && ("addEventListener" in document ? window.removeEventListener("message", this.execListener) : "attachEvent" in document && window.detachEvent("onmessage", this.execListener))
                        }
                    }]),
                    r
                } ();
                return r
            } (),
            u = a;
            function f(t, e) {
                var n = document.createElement("iframe"),
                r = "";
                if (e.pageUrl) r = e.pageUrl;
                else {
                    var o = "https://captcha.zt.kuaishou.com";
                    0,
                    r = "".concat(o, "/iframe/index.html?captchaSession=").concat(e.captchaSession, "&type=").concat(e.type, "&configUrl=").concat(encodeURIComponent(e.configUrl))
                }
                return n.setAttribute("frameboarder", "0"),
                n.setAttribute("border", "0"),
                n.setAttribute("marginwidth", "0"),
                n.setAttribute("marginheight", "0"),
                n.setAttribute("scrolling", "no"),
                n.style.display = "block",
                n.style.border = "0",
                n.style.width = "100%",
                n.style.height = "100%",
                n.src = r,
                t.appendChild(n),
                n
            }
            function s(t, e) {
                var n = new u("parent");
                return n.addListener(function(t) {
                    try {
                        t = JSON.parse(t)
                    } catch(r) {
                        return r
                    }
                    if (t.message) {
                        var n = t.message;
                        switch (n.type) {
                        case 1:
                            e.callback({
                                result:
                                1,
                                ticket: n.ticket
                            });
                            break;
                        case 2:
                            e.callback({
                                result:
                                0
                            });
                            break;
                        case 3:
                            e.callback({
                                result:
                                2
                            });
                            break
                        }
                    }
                    return null
                }),
                n.addTarget(t, "captchaIframe"),
                n
            }
            var l = {
                capInit: function(t, e) {
                    this.capDestroy();
                    var n = this.currentIframe = f(t, e);
                    "function" !== typeof e.callback && (e.callback = function() {}),
                    this.currentMsg = s(n, e)
                },
                capDestroy: function() {
                    this.currentIframe && (this.currentIframe.parentNode.removeChild(this.currentIframe), this.currentIframe = null),
                    this.currentMsg && (this.currentMsg.clearAll(), this.currentMsg = null)
                }
            },
            p = l;
            e["default"] = p
        },
        fc6a: function(t, e, n) {
            var r = n("44ad"),
            o = n("1d80");
            t.exports = function(t) {
                return r(o(t))
            }
        }
    })["default"]
});