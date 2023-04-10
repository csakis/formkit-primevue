import { defineComponent as P, getCurrentInstance as zt, watch as me, watchEffect as le, reactive as yn, h as Ce, ref as Le, inject as Se, computed as M, provide as vn, toRef as hn, onBeforeUnmount as _n, isRef as He, isReactive as kt, toRaw as gn, markRaw as $n, createTextVNode as wn, resolveComponent as T, openBlock as A, createElementBlock as x, createVNode as D, unref as a, toDisplayString as be, createCommentVNode as re, normalizeStyle as fe, normalizeClass as q, createElementVNode as kn } from "vue";
const Cn = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function Ze() {
  return Math.random().toString(36).substring(2, 15);
}
function Sn(e, i) {
  const t = e instanceof Set ? e : new Set(e);
  return i && i.forEach((n) => t.add(n)), [...t];
}
function E(e, i) {
  return Object.prototype.hasOwnProperty.call(e, i);
}
function Oe(e, i, t = !0, n = ["__key"]) {
  if (e === i)
    return !0;
  if (typeof i == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set || e instanceof Date || e === null || i === null || Object.keys(e).length !== Object.keys(i).length)
      return !1;
    for (const l of n)
      if ((l in e || l in i) && e[l] !== i[l])
        return !1;
    for (const l in e)
      if (!(l in i) || e[l] !== i[l] && !t || t && !Oe(e[l], i[l], t, n))
        return !1;
    return !0;
  }
  return !1;
}
function it(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function lt(e) {
  return it(e) || Array.isArray(e);
}
function ye(e) {
  if (it(e) === !1 || e.__FKNode__ || e.__POJO__ === !1)
    return !1;
  const i = e.constructor;
  if (i === void 0)
    return !0;
  const t = i.prototype;
  return !(it(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1);
}
function Ye(e, i, t = !1, n = !1) {
  if (i === null)
    return null;
  const l = {};
  if (typeof i == "string")
    return i;
  for (const r in e)
    if (E(i, r) && (i[r] !== void 0 || !n)) {
      if (t && Array.isArray(e[r]) && Array.isArray(i[r])) {
        l[r] = e[r].concat(i[r]);
        continue;
      }
      if (i[r] === void 0)
        continue;
      ye(e[r]) && ye(i[r]) ? l[r] = Ye(e[r], i[r], t, n) : l[r] = i[r];
    } else
      l[r] = e[r];
  for (const r in i)
    !E(l, r) && i[r] !== void 0 && (l[r] = i[r]);
  return l;
}
function In(e) {
  if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1])
    return !1;
  const i = e[0];
  for (let t = 1; t < e.length; t++)
    if (e[t] === i && (t === 1 || e[t - 1] !== "\\") && t !== e.length - 1)
      return !1;
  return !0;
}
function Vn(e) {
  if (!e.length)
    return "";
  let i = "", t = "";
  for (let n = 0; n < e.length; n++) {
    const l = e.charAt(n);
    (l !== "\\" || t === "\\") && (i += l), t = l;
  }
  return i;
}
function ce(...e) {
  return e.reduce((i, t) => {
    const { value: n, name: l, modelValue: r, config: s, plugins: o, ...u } = t;
    return Object.assign(i, u);
  }, {});
}
function Ln(e) {
  const i = [];
  let t = "", n = 0, l = "", r = "";
  for (let s = 0; s < e.length; s++) {
    const o = e.charAt(s);
    o === l && r !== "\\" ? l = "" : (o === "'" || o === '"') && !l && r !== "\\" ? l = o : o === "(" && !l ? n++ : o === ")" && !l && n--, o === "," && !l && n === 0 ? (i.push(t), t = "") : (o !== " " || l) && (t += o), r = o;
  }
  return t && i.push(t), i;
}
function Ct(e, i) {
  const t = {}, n = i.filter((r) => r instanceof RegExp), l = new Set(i);
  for (const r in e)
    !l.has(r) && !n.some((s) => s.test(r)) && (t[r] = e[r]);
  return t;
}
function St(e, i) {
  const t = {}, n = i.filter((l) => l instanceof RegExp);
  return i.forEach((l) => {
    l instanceof RegExp || (t[l] = e[l]);
  }), Object.keys(e).forEach((l) => {
    n.some((r) => r.test(l)) && (t[l] = e[l]);
  }), t;
}
function Ee(e) {
  return e.replace(/-([a-z0-9])/gi, (i, t) => t.toUpperCase());
}
function Wt(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, (i, t, n) => t + "-" + n.toLowerCase()).replace(" ", "-").toLowerCase();
}
function Ie(e, i = Cn) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let t;
  Array.isArray(e) ? t = e.map((n) => typeof n == "object" ? Ie(n, i) : n) : t = Object.keys(e).reduce((n, l) => (n[l] = typeof e[l] == "object" ? Ie(e[l], i) : e[l], n), {});
  for (const n of i)
    n in e && Object.defineProperty(t, n, {
      enumerable: !1,
      value: e[n]
    });
  return t;
}
function ue(e) {
  return typeof e == "object" ? Ie(e) : e;
}
function On(e, i) {
  if (!e || typeof e != "object")
    return null;
  const t = i.split(".");
  let n = e;
  for (const l in t) {
    const r = t[l];
    if (E(n, r) && (n = n[r]), +l === t.length - 1)
      return n;
    if (!n || typeof n != "object")
      return null;
  }
  return null;
}
function Q(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function Ve(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function ct(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function pt() {
  const e = [];
  let i = 0;
  const t = (l) => e.push(l), n = (l) => {
    const r = e[i];
    return typeof r == "function" ? r(l, (s) => (i++, n(s === void 0 ? l : s))) : (i = 0, l);
  };
  return t.dispatch = n, t.unshift = (l) => e.unshift(l), t.remove = (l) => {
    const r = e.indexOf(l);
    r > -1 && e.splice(r, 1);
  }, t;
}
function Ut() {
  const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let t;
  const n = (l, r) => {
    if (t) {
      t.set(r.name, [l, r]);
      return;
    }
    e.has(r.name) && e.get(r.name).forEach((s) => {
      (r.origin === l || s.modifiers.includes("deep")) && s.listener(r);
    }), r.bubble && l.bubble(r);
  };
  return n.on = (l, r) => {
    const [s, ...o] = l.split("."), u = r.receipt || Ze(), b = {
      modifiers: o,
      event: s,
      listener: r,
      receipt: u
    };
    return e.has(s) ? e.get(s).push(b) : e.set(s, [b]), i.has(u) ? i.get(u).push(s) : i.set(u, [s]), u;
  }, n.off = (l) => {
    var r;
    i.has(l) && ((r = i.get(l)) === null || r === void 0 || r.forEach((s) => {
      const o = e.get(s);
      Array.isArray(o) && e.set(s, o.filter((u) => u.receipt !== l));
    }), i.delete(l));
  }, n.pause = (l) => {
    t || (t = /* @__PURE__ */ new Map()), l && l.walk((r) => r._e.pause());
  }, n.play = (l) => {
    if (!t)
      return;
    const r = t;
    t = void 0, r.forEach(([s, o]) => n(s, o)), l && l.walk((s) => s._e.play());
  }, n;
}
function An(e, i, t, n, l = !0) {
  return i._e(e, {
    payload: n,
    name: t,
    bubble: l,
    origin: e
  }), e;
}
function xn(e, i, t) {
  return Je(e.parent) && e.parent._e(e.parent, t), e;
}
function Pn(e, i, t, n) {
  return i._e.on(t, n);
}
function En(e, i, t) {
  return i._e.off(t), e;
}
const dt = pt();
dt((e, i) => (e.message || (e.message = `E${e.code}`), i(e)));
const mt = pt();
mt((e, i) => {
  e.message || (e.message = `W${e.code}`);
  const t = i(e);
  return console && typeof console.warn == "function" && console.warn(t.message), t;
});
function Ae(e, i = {}) {
  mt.dispatch({ code: e, data: i });
}
function N(e, i = {}) {
  throw Error(dt.dispatch({ code: e, data: i }).message);
}
function ae(e, i) {
  const t = {
    blocking: !1,
    key: Ze(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
  return i && t.value && t.meta.localize !== !1 && (t.value = i.t(t), t.meta.locale = i.config.locale), t;
}
const It = {
  apply: Dn,
  set: Rn,
  remove: qt,
  filter: Tn,
  reduce: Fn,
  release: Wn,
  touch: jn
};
function Mn(e = !1) {
  const i = {};
  let t, n = e, l = [];
  const r = /* @__PURE__ */ new Map();
  let s;
  const o = new Proxy(i, {
    get(...u) {
      const [b, h] = u;
      return h === "buffer" ? n : h === "_b" ? l : h === "_m" ? r : h === "_r" ? s : E(It, h) ? It[h].bind(null, i, o, t) : Reflect.get(...u);
    },
    set(u, b, h) {
      return b === "_n" ? (t = h, s === "__n" && Nt(t, o), !0) : b === "_b" ? (l = h, !0) : b === "buffer" ? (n = h, !0) : b === "_r" ? (s = h, !0) : (N(101, t), !1);
    }
  });
  return o;
}
function Rn(e, i, t, n) {
  if (i.buffer)
    return i._b.push([[n]]), i;
  if (e[n.key] !== n) {
    if (typeof n.value == "string" && n.meta.localize !== !1) {
      const r = n.value;
      n.value = t.t(n), n.value !== r && (n.meta.locale = t.props.locale);
    }
    const l = `message-${E(e, n.key) ? "updated" : "added"}`;
    e[n.key] = Object.freeze(t.hook.message.dispatch(n)), t.emit(l, n);
  }
  return i;
}
function jn(e, i) {
  for (const t in e) {
    const n = { ...e[t] };
    i.set(n);
  }
}
function qt(e, i, t, n) {
  if (E(e, n)) {
    const l = e[n];
    delete e[n], t.emit("message-removed", l);
  }
  return i.buffer === !0 && (i._b = i._b.filter((l) => (l[0] = l[0].filter((r) => r.key !== n), l[1] || l[0].length))), i;
}
function Tn(e, i, t, n, l) {
  for (const r in e) {
    const s = e[r];
    (!l || s.type === l) && !n(s) && qt(e, i, t, r);
  }
}
function Fn(e, i, t, n, l) {
  for (const r in e) {
    const s = e[r];
    l = n(l, s);
  }
  return l;
}
function Dn(e, i, t, n, l) {
  if (Array.isArray(n)) {
    if (i.buffer) {
      i._b.push([n, l]);
      return;
    }
    const r = new Set(n.map((s) => (i.set(s), s.key)));
    typeof l == "string" ? i.filter((s) => s.type !== l || r.has(s.key)) : typeof l == "function" && i.filter((s) => !l(s) || r.has(s.key));
  } else
    for (const r in n) {
      const s = t.at(r);
      s ? s.store.apply(n[r], l) : zn(t, i, r, n[r], l);
    }
}
function Bn(e, ...i) {
  const t = `${e.name}-set`, n = (l) => ae({
    key: ct(l),
    type: "error",
    value: l,
    meta: { source: t, autoClear: !0 }
  });
  return i.filter((l) => !!l).map((l) => {
    if (typeof l == "string" && (l = [l]), Array.isArray(l))
      return l.map((r) => n(r));
    {
      const r = {};
      for (const s in l)
        Array.isArray(l[s]) ? r[s] = l[s].map((o) => n(o)) : r[s] = [n(l[s])];
      return r;
    }
  });
}
function zn(e, i, t, n, l) {
  var r;
  const s = i._m;
  s.has(t) || s.set(t, []), i._r || (i._r = Nt(e, i)), (r = s.get(t)) === null || r === void 0 || r.push([n, l]);
}
function Nt(e, i) {
  return e.on("child.deep", ({ payload: t }) => {
    i._m.forEach((n, l) => {
      e.at(l) === t && (n.forEach(([r, s]) => {
        t.store.apply(r, s);
      }), i._m.delete(l));
    }), i._m.size === 0 && i._r && (e.off(i._r), i._r = void 0);
  });
}
function Wn(e, i) {
  i.buffer = !1, i._b.forEach(([t, n]) => i.apply(t, n)), i._b = [];
}
function Un() {
  const e = {};
  let i;
  return {
    count: (...t) => qn(i, e, ...t),
    init(t) {
      i = t, t.on("message-added.deep", Vt(e, 1)), t.on("message-removed.deep", Vt(e, -1));
    },
    merge: (t) => Lt(i, e, t),
    settled(t) {
      return E(e, t) ? e[t].promise : Promise.resolve();
    },
    unmerge: (t) => Lt(i, e, t, !0),
    value(t) {
      return E(e, t) ? e[t].count : 0;
    }
  };
}
function qn(e, i, t, n, l = 0) {
  if (n = Nn(n || t), !E(i, t)) {
    const r = {
      condition: n,
      count: 0,
      name: t,
      node: e,
      promise: Promise.resolve(),
      resolve: () => {
      }
      // eslint-disable-line @typescript-eslint/no-empty-function
    };
    i[t] = r, l = e.store.reduce((s, o) => s + r.condition(o) * 1, l), e.each((s) => {
      s.ledger.count(r.name, r.condition), l += s.ledger.value(r.name);
    });
  }
  return Kt(i[t], l).promise;
}
function Nn(e) {
  return typeof e == "function" ? e : (i) => i.type === e;
}
function Kt(e, i) {
  const t = e.count, n = e.count + i;
  return e.count = n, t === 0 && n !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise((l) => e.resolve = l)) : t !== 0 && n === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e;
}
function Vt(e, i) {
  return (t) => {
    for (const n in e) {
      const l = e[n];
      l.condition(t.payload) && Kt(l, i);
    }
  };
}
function Lt(e, i, t, n = !1) {
  for (const l in i) {
    const r = i[l].condition;
    n || t.ledger.count(l, r);
    const s = t.ledger.value(l) * (n ? -1 : 1);
    if (e)
      do
        e.ledger.count(l, r, s), e = e.parent;
      while (e);
  }
}
const bt = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), yt = Ut(), Kn = [];
function Hn(e) {
  e.props.id && (bt.set(e.props.id, e), Me.set(e, e.props.id), yt(e, {
    payload: e,
    name: e.props.id,
    bubble: !1,
    origin: e
  }));
}
function Zn(e) {
  if (Me.has(e)) {
    const i = Me.get(e);
    Me.delete(e), bt.delete(i), yt(e, {
      payload: null,
      name: i,
      bubble: !1,
      origin: e
    });
  }
}
function Ht(e) {
  return bt.get(e);
}
function Yn(e, i) {
  Kn.push(yt.on(e, i));
}
function Ot(e, i, t) {
  let n = !0;
  return i in e.config._t ? n = !1 : e.emit(`config:${i}`, t, !1), i in e.props || (e.emit("prop", { prop: i, value: t }), e.emit(`prop:${i}`, t)), n;
}
function Jn(e) {
  const i = document.getElementById(e);
  if (i instanceof HTMLFormElement) {
    const t = new Event("submit", { cancelable: !0, bubbles: !0 });
    i.dispatchEvent(t);
    return;
  }
  Ae(151, e);
}
function Qn(e) {
  const i = (t) => {
    for (const n in t.store) {
      const l = t.store[n];
      l.type === "error" || l.type === "ui" && n === "incomplete" ? t.store.remove(n) : l.type === "state" && t.store.set({ ...l, value: !1 });
    }
  };
  i(e), e.walk(i);
}
function Gn(e, i) {
  const t = typeof e == "string" ? Ht(e) : e;
  if (t) {
    const n = (r) => ue(r.props.initial) || (r.type === "group" ? {} : r.type === "list" ? [] : void 0);
    t._e.pause(t), t.input(ue(i) || n(t), !1), t.walk((r) => r.input(n(r), !1));
    const l = n(t);
    return t.input(typeof l == "object" ? ue(i) || Ve(l) : l, !1), t._e.play(t), Qn(t), t.emit("reset", t), t;
  }
  Ae(152, e);
}
const Xn = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${Wt(e)}`]: !0 })
}, Zt = Symbol("index"), at = Symbol("removed"), rt = Symbol("moved"), Yt = Symbol("inserted");
function ei(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function Je(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
const Re = (e, i, t) => {
  N(102, [e, t]);
}, ti = {
  _c: L(wi, Re, !1),
  add: L(mi),
  addProps: L(di),
  address: L(Ci, Re, !1),
  at: L(Si),
  bubble: L(xn),
  clearErrors: L(Ei),
  calm: L(fi),
  config: L(!1),
  define: L(pi),
  disturb: L(ui),
  destroy: L(ci),
  hydrate: L(oi),
  index: L($i, gi, !1),
  input: L(Qt),
  each: L(vi),
  emit: L(An),
  find: L(Vi),
  on: L(Pn),
  off: L(En),
  parent: L(!1, bi),
  plugins: L(!1),
  remove: L(yi),
  root: L(Oi, Re, !1),
  reset: L(Pi),
  resetConfig: L(_i),
  setErrors: L(en),
  submit: L(xi),
  t: L(Ai),
  use: L(vt),
  name: L(ki, !1, !1),
  walk: L(hi)
};
function ni() {
  return new Map(Object.entries(ti));
}
function L(e, i, t = !0) {
  return {
    get: e ? (n, l) => t ? (...r) => e(n, l, ...r) : e(n, l) : !1,
    set: i !== void 0 ? i : Re.bind(null)
  };
}
function ii() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    get(i, t) {
      return e.has(t) || e.set(t, pt()), e.get(t);
    }
  });
}
let li = 0, ai = 0;
function ri(e) {
  var i, t;
  return ((i = e.parent) === null || i === void 0 ? void 0 : i.type) === "list" ? Zt : e.name || `${((t = e.props) === null || t === void 0 ? void 0 : t.type) || "input"}_${++li}`;
}
function Jt(e) {
  return e.type === "group" ? Ve(e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}) : e.type === "list" ? Ve(Array.isArray(e.value) ? e.value : []) : e.value;
}
function Qt(e, i, t, n = !0) {
  return i._value = si(e, e.hook.input.dispatch(t)), e.emit("input", i._value), i.isSettled && e.disturb(), n ? (i._tmo && clearTimeout(i._tmo), i._tmo = setTimeout(Be, e.props.delay, e, i)) : Be(e, i), i.settled;
}
function si(e, i) {
  switch (e.type) {
    case "input":
      break;
    case "group":
      (!i || typeof i != "object") && N(107, [e, i]);
      break;
    case "list":
      Array.isArray(i) || N(108, [e, i]);
      break;
  }
  return i;
}
function Be(e, i, t = !0, n = !0) {
  i._value = i.value = e.hook.commit.dispatch(i._value), e.type !== "input" && n && e.hydrate(), e.emit("commit", i.value), t && e.calm();
}
function Gt(e, { name: i, value: t, from: n }) {
  if (!Object.isFrozen(e._value)) {
    if (ei(e)) {
      const l = t === at ? [] : t === rt && typeof n == "number" ? e._value.splice(n, 1) : [t];
      e._value.splice(i, t === rt || n === Yt ? 0 : 1, ...l);
      return;
    }
    t !== at ? e._value[i] = t : delete e._value[i];
  }
}
function oi(e, i) {
  const t = i._value;
  return i.children.forEach((n) => {
    if (typeof t == "object")
      if (n.name in t) {
        const l = n.type !== "input" || t[n.name] && typeof t[n.name] == "object" ? Ve(t[n.name]) : t[n.name];
        n.input(l, !1);
      } else
        (e.type !== "list" || typeof n.name == "number") && Gt(i, { name: n.name, value: n.value }), t.__init || (n.type === "group" ? n.input({}, !1) : n.type === "list" ? n.input([], !1) : n.input(void 0, !1));
  }), e;
}
function ui(e, i) {
  var t;
  return i._d <= 0 && (i.isSettled = !1, e.emit("settled", !1, !1), i.settled = new Promise((n) => {
    i._resolve = n;
  }), e.parent && ((t = e.parent) === null || t === void 0 || t.disturb())), i._d++, e;
}
function fi(e, i, t) {
  var n;
  if (t !== void 0 && e.type !== "input")
    return Gt(i, t), Be(e, i, !0, !1);
  i._d > 0 && i._d--, i._d === 0 && (i.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((n = e.parent) === null || n === void 0 || n.calm({ name: e.name, value: i.value })), i._resolve && i._resolve(i.value));
}
function ci(e, i) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && (e.parent.emit("childRemoved", e), e.parent.remove(e)), Zn(e), i._value = i.value = void 0, e.emit("destroyed", e);
}
function pi(e, i, t) {
  i.type = t.type, i.props.definition = Ie(t), i.value = i._value = Jt({
    type: e.type,
    value: i.value
  }), t.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), i.props.type = t.forceTypeProp), t.family && (i.props.family = t.family), t.features && t.features.forEach((n) => n(e)), t.props && e.addProps(t.props), e.emit("defined", t);
}
function di(e, i, t) {
  var n;
  if (e.props.attrs) {
    const l = { ...e.props.attrs };
    e.props._emit = !1;
    for (const s in l) {
      const o = Ee(s);
      t.includes(o) && (e.props[o] = l[s], delete l[s]);
    }
    const r = ue(i._value);
    e.props.initial = e.type !== "input" ? Ve(r) : r, e.props._emit = !0, e.props.attrs = l, e.props.definition && (e.props.definition.props = [
      ...((n = e.props.definition) === null || n === void 0 ? void 0 : n.props) || [],
      ...t
    ]);
  }
  return e.emit("added-props", t), e;
}
function mi(e, i, t, n) {
  if (e.type === "input" && N(100, e), t.parent && t.parent !== e && t.parent.remove(t), i.children.includes(t) || (n !== void 0 && e.type === "list" ? (i.children.splice(n, 0, t), Array.isArray(e.value) && e.value.length < i.children.length && e.disturb().calm({
    name: n,
    value: t.value,
    from: Yt
  })) : i.children.push(t), t.isSettled || e.disturb()), t.parent !== e) {
    if (t.parent = e, t.parent !== e)
      return e.remove(t), t.parent.add(t), e;
  } else
    t.use(e.plugins);
  return Be(e, i, !1), e.ledger.merge(t), e.emit("child", t), e;
}
function bi(e, i, t, n) {
  return Je(n) ? (e.parent && e.parent !== n && e.parent.remove(e), i.parent = n, e.resetConfig(), n.children.includes(e) ? e.use(n.plugins) : n.add(e), !0) : n === null ? (i.parent = null, !0) : !1;
}
function yi(e, i, t) {
  const n = i.children.indexOf(t);
  if (n !== -1) {
    t.isSettled && e.disturb(), i.children.splice(n, 1);
    let l = Q(t.props.preserve), r = t.parent;
    for (; l === void 0 && r; )
      l = Q(r.props.preserve), r = r.parent;
    l ? e.calm() : e.calm({
      name: e.type === "list" ? n : t.name,
      value: at
    }), t.parent = null, t.config._rmn = t;
  }
  return e.ledger.unmerge(t), e;
}
function vi(e, i, t) {
  i.children.forEach((n) => t(n));
}
function hi(e, i, t, n = !1) {
  i.children.forEach((l) => {
    (t(l) !== !1 || !n) && l.walk(t, n);
  });
}
function _i(e, i) {
  const t = e.parent || void 0;
  i.config = Xt(e.config._t, t), e.walk((n) => n.resetConfig());
}
function vt(e, i, t, n = !0, l = !0) {
  return Array.isArray(t) || t instanceof Set ? (t.forEach((r) => vt(e, i, r)), e) : (i.plugins.has(t) || (l && typeof t.library == "function" && t.library(e), n && t(e) !== !1 && (i.plugins.add(t), e.children.forEach((r) => r.use(t)))), e);
}
function gi(e, i, t, n) {
  if (Je(e.parent)) {
    const l = e.parent.children, r = n >= l.length ? l.length - 1 : n < 0 ? 0 : n, s = l.indexOf(e);
    return s === -1 ? !1 : (l.splice(s, 1), l.splice(r, 0, e), e.parent.children = l, e.parent.type === "list" && e.parent.disturb().calm({ name: r, value: rt, from: s }), !0);
  }
  return !1;
}
function $i(e) {
  if (e.parent) {
    const i = [...e.parent.children].indexOf(e);
    return i === -1 ? e.parent.children.length : i;
  }
  return -1;
}
function wi(e, i) {
  return i;
}
function ki(e, i) {
  var t;
  return ((t = e.parent) === null || t === void 0 ? void 0 : t.type) === "list" ? e.index : i.name !== Zt ? i.name : e.index;
}
function Ci(e, i) {
  return i.parent ? i.parent.address.concat([e.name]) : [e.name];
}
function Si(e, i, t) {
  const n = typeof t == "string" ? t.split(e.config.delimiter) : t;
  if (!n.length)
    return;
  const l = n[0];
  let r = e.parent;
  for (r || (String(n[0]) === String(e.name) && n.shift(), r = e), l === "$parent" && n.shift(); r && n.length; ) {
    const s = n.shift();
    switch (s) {
      case "$root":
        r = e.root;
        break;
      case "$parent":
        r = r.parent;
        break;
      case "$self":
        r = e;
        break;
      default:
        r = r.children.find((o) => String(o.name) === String(s)) || Ii(r, s);
    }
  }
  return r || void 0;
}
function Ii(e, i) {
  const t = String(i).match(/^(find)\((.*)\)$/);
  if (t) {
    const [, n, l] = t, r = l.split(",").map((s) => s.trim());
    switch (n) {
      case "find":
        return e.find(r[0], r[1]);
      default:
        return;
    }
  }
}
function Vi(e, i, t, n) {
  return Li(e, t, n);
}
function Li(e, i, t = "name") {
  const n = typeof t == "string" ? (r) => r[t] == i : t, l = [e];
  for (; l.length; ) {
    const r = l.shift();
    if (n(r, i))
      return r;
    l.push(...r.children);
  }
}
function Oi(e) {
  let i = e;
  for (; i.parent; )
    i = i.parent;
  return i;
}
function Xt(e = {}, i) {
  let t;
  return new Proxy(e, {
    get(...n) {
      const l = n[1];
      if (l === "_t")
        return e;
      const r = Reflect.get(...n);
      if (r !== void 0)
        return r;
      if (i) {
        const s = i.config[l];
        if (s !== void 0)
          return s;
      }
      if (e.rootConfig && typeof l == "string") {
        const s = e.rootConfig[l];
        if (s !== void 0)
          return s;
      }
      return l === "delay" && (t == null ? void 0 : t.type) === "input" ? 20 : Xn[l];
    },
    set(...n) {
      const l = n[1], r = n[2];
      if (l === "_n")
        return t = r, e.rootConfig && e.rootConfig._add(t), !0;
      if (l === "_rmn")
        return e.rootConfig && e.rootConfig._rm(t), t = void 0, !0;
      if (!Oe(e[l], r, !1)) {
        const s = Reflect.set(...n);
        return t && (t.emit(`config:${l}`, r, !1), Ot(t, l, r), t.walk((o) => Ot(o, l, r), !0)), s;
      }
      return !0;
    }
  });
}
function Ai(e, i, t, n = "ui") {
  const l = typeof t == "string" ? { key: t, value: t, type: n } : t, r = e.hook.text.dispatch(l);
  return e.emit("text", r, !1), r.value;
}
function xi(e) {
  const i = e.name;
  do {
    if (e.props.isForm === !0)
      break;
    e.parent || N(106, i), e = e.parent;
  } while (e);
  e.props.id && Jn(e.props.id);
}
function Pi(e, i, t) {
  return Gn(e, t);
}
function en(e, i, t, n) {
  const l = `${e.name}-set`, r = e.hook.setErrors.dispatch({ localErrors: t, childErrors: n });
  return Bn(e, r.localErrors, r.childErrors).forEach((s) => {
    e.store.apply(s, (o) => o.meta.source === l);
  }), e;
}
function Ei(e, i, t = !0, n) {
  return en(e, i, []), t && (n = n || `${e.name}-set`, e.walk((l) => {
    l.store.filter((r) => !(r.type === "error" && r.meta && r.meta.source === n));
  })), e;
}
function Mi(e) {
  return E(e.props, "id") || (e.props.id = `input_${ai++}`), e;
}
function Ri(e) {
  const i = {
    initial: typeof e == "object" ? ue(e) : e
  };
  let t, n = !0;
  return new Proxy(i, {
    get(...l) {
      const [r, s] = l;
      if (E(i, s))
        return Reflect.get(...l);
      if (t && typeof s == "string" && t.config[s] !== void 0)
        return t.config[s];
    },
    set(l, r, s, o) {
      if (r === "_n")
        return t = s, !0;
      if (r === "_emit")
        return n = s, !0;
      const { prop: u, value: b } = t.hook.prop.dispatch({
        prop: r,
        value: s
      });
      if (!Oe(i[u], b, !1) || typeof b == "object") {
        const h = Reflect.set(l, u, b, o);
        return n && (t.emit("prop", { prop: u, value: b }), typeof u == "string" && t.emit(`prop:${u}`, b)), h;
      }
      return !0;
    }
  });
}
function ji(e, i) {
  if (e.props.definition)
    return e.define(e.props.definition);
  for (const t of i) {
    if (e.props.definition)
      return;
    typeof t.library == "function" && t.library(e);
  }
}
function Ti(e) {
  const i = Jt(e), t = Xt(e.config || {}, e.parent);
  return {
    _d: 0,
    _e: Ut(),
    _resolve: !1,
    _tmo: !1,
    _value: i,
    children: Sn(e.children || []),
    config: t,
    hook: ii(),
    isCreated: !1,
    isSettled: !0,
    ledger: Un(),
    name: ri(e),
    parent: e.parent || null,
    plugins: /* @__PURE__ */ new Set(),
    props: Ri(i),
    settled: Promise.resolve(i),
    store: Mn(!0),
    traps: ni(),
    type: e.type || "input",
    value: i
  };
}
function Fi(e, i) {
  var t;
  if (e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, i.props && Object.assign(e.props, i.props), e.props._emit = !0, ji(e, /* @__PURE__ */ new Set([
    ...i.plugins || [],
    ...e.parent ? e.parent.plugins : []
  ])), i.plugins)
    for (const n of i.plugins)
      vt(e, e._c, n, !0, !1);
  return Mi(e), e.each((n) => e.add(n)), e.parent && e.parent.add(e, i.index), e.type === "input" && e.children.length && N(100, e), Qt(e, e._c, e._value, !1), e.store.release(), !((t = i.props) === null || t === void 0) && t.id && Hn(e), e.emit("created", e), e.isCreated = !0, e;
}
function Di(e) {
  const i = e || {}, t = Ti(i), n = new Proxy(t, {
    get(...l) {
      const [, r] = l;
      if (r === "__FKNode__")
        return !0;
      const s = t.traps.get(r);
      return s && s.get ? s.get(n, t) : Reflect.get(...l);
    },
    set(...l) {
      const [, r, s] = l, o = t.traps.get(r);
      return o && o.set ? o.set(n, t, r, s) : Reflect.set(...l);
    }
  });
  return Fi(n, i);
}
function st(e) {
  return typeof e != "string" && E(e, "$el");
}
function ot(e) {
  return typeof e != "string" && E(e, "$cmp");
}
function pe(e) {
  return !e || typeof e == "string" ? !1 : E(e, "if") && E(e, "then");
}
function Bi(e) {
  return typeof e != "string" && "$formkit" in e;
}
function zi(e) {
  if (typeof e == "string")
    return {
      $el: "text",
      children: e
    };
  if (Bi(e)) {
    const { $formkit: i, for: t, if: n, children: l, bind: r, ...s } = e;
    return Object.assign({
      $cmp: "FormKit",
      props: { ...s, type: i }
    }, n ? { if: n } : {}, t ? { for: t } : {}, l ? { children: l } : {}, r ? { bind: r } : {});
  }
  return e;
}
function Y(e) {
  let i;
  const t = /* @__PURE__ */ new Set(), n = function(f, c) {
    return typeof f == "function" ? f(c) : f;
  }, l = [
    {
      "&&": (p, f, c) => n(p, c) && n(f, c),
      "||": (p, f, c) => n(p, c) || n(f, c)
    },
    {
      "===": (p, f, c) => n(p, c) === n(f, c),
      "!==": (p, f, c) => n(p, c) !== n(f, c),
      "==": (p, f, c) => n(p, c) == n(f, c),
      "!=": (p, f, c) => n(p, c) != n(f, c),
      ">=": (p, f, c) => n(p, c) >= n(f, c),
      "<=": (p, f, c) => n(p, c) <= n(f, c),
      ">": (p, f, c) => n(p, c) > n(f, c),
      "<": (p, f, c) => n(p, c) < n(f, c)
    },
    {
      "+": (p, f, c) => n(p, c) + n(f, c),
      "-": (p, f, c) => n(p, c) - n(f, c)
    },
    {
      "*": (p, f, c) => n(p, c) * n(f, c),
      "/": (p, f, c) => n(p, c) / n(f, c),
      "%": (p, f, c) => n(p, c) % n(f, c)
    }
  ], r = l.reduce((p, f) => p.concat(Object.keys(f)), []), s = new Set(r.map((p) => p.charAt(0)));
  function o(p, f, c, $) {
    const C = p.filter((m) => m.startsWith(f));
    return C.length ? C.find((m) => $.length >= c + m.length && $.substring(c, c + m.length) === m ? m : !1) : !1;
  }
  function u(p, f, c = 1) {
    let $ = c ? f.substring(p + 1).trim() : f.substring(0, p).trim();
    if (!$.length)
      return -1;
    if (!c) {
      const m = $.split("").reverse(), d = m.findIndex((y) => s.has(y));
      $ = m.slice(d).join("");
    }
    const C = $[0];
    return l.findIndex((m) => {
      const d = Object.keys(m);
      return !!o(d, C, 0, $);
    });
  }
  function b(p, f) {
    let c = "";
    const $ = f.length;
    let C = 0;
    for (let m = p; m < $; m++) {
      const d = f.charAt(m);
      if (d === "(")
        C++;
      else if (d === ")")
        C--;
      else if (C === 0 && d === " ")
        continue;
      if (C === 0 && o(r, d, m, f))
        return [c, m - 1];
      c += d;
    }
    return [c, f.length - 1];
  }
  function h(p, f = 0) {
    const c = l[f], $ = p.length, C = Object.keys(c);
    let m = 0, d = !1, y = null, g = "", I = null, O, R = "", V = "", F = "", z = "", Z = 0;
    const K = (j, H) => {
      j ? F += H : g += H;
    };
    for (let j = 0; j < $; j++)
      if (R = V, V = p.charAt(j), (V === "'" || V === '"') && R !== "\\" && (m === 0 && !d || m && !z)) {
        m ? z = V : d = V, K(m, V);
        continue;
      } else if (d && (V !== d || R === "\\") || z && (V !== z || R === "\\")) {
        K(m, V);
        continue;
      } else if (d === V) {
        d = !1, K(m, V);
        continue;
      } else if (z === V) {
        z = !1, K(m, V);
        continue;
      } else {
        if (V === " ")
          continue;
        if (V === "(")
          m === 0 ? Z = j : F += V, m++;
        else if (V === ")")
          if (m--, m === 0) {
            const H = typeof g == "string" && g.startsWith("$") ? g : void 0, wt = H && p.charAt(j + 1) === ".";
            let ge = "";
            wt && ([ge, j] = b(j + 2, p));
            const Pe = y ? f : u(Z, p, 0), $e = u(j, p);
            Pe === -1 && $e === -1 ? g = _(F, -1, H, ge) : y && (Pe >= $e || $e === -1) && f === Pe ? (I = y.bind(null, _(F, -1, H, ge)), y = null, g = "") : $e > Pe && f === $e ? g = _(F, -1, H, ge) : g += `(${F})${wt ? `.${ge}` : ""}`, F = "";
          } else
            F += V;
        else if (m === 0 && (O = o(C, V, j, p))) {
          j === 0 && N(103, [O, p]), j += O.length - 1, j === p.length - 1 && N(104, [O, p]), y ? g && (I = y.bind(null, _(g, f)), y = c[O].bind(null, I), g = "") : I ? (y = c[O].bind(null, _(I, f)), I = null) : (y = c[O].bind(null, _(g, f)), g = "");
          continue;
        } else
          K(m, V);
      }
    return g && y && (y = y.bind(null, _(g, f))), y = !y && I ? I : y, !y && g && (y = (j, H) => typeof j == "function" ? j(H) : j, y = y.bind(null, _(g, f))), !y && !g && N(105, p), y;
  }
  function _(p, f, c, $) {
    if (c) {
      const C = _(c, l.length);
      let m, d = $ ? Y(`$${$}`) : !1;
      if (typeof C == "function") {
        const y = Ln(String(p)).map((g) => _(g, -1));
        return (g) => {
          const I = C(g);
          return typeof I != "function" ? (Ae(150, c), I) : (m = I(...y.map((O) => typeof O == "function" ? O(g) : O)), d && (d = d.provide((O) => {
            const R = i(O);
            return O.reduce((F, z) => {
              if (z === $ || ($ == null ? void 0 : $.startsWith(`${z}(`))) {
                const K = On(m, z);
                F[z] = () => K;
              } else
                F[z] = R[z];
              return F;
            }, {});
          })), d ? d() : m);
        };
      }
    } else if (typeof p == "string") {
      if (p === "true")
        return !0;
      if (p === "false")
        return !1;
      if (p === "undefined")
        return;
      if (In(p))
        return Vn(p.substring(1, p.length - 1));
      if (!isNaN(+p))
        return Number(p);
      if (f < l.length - 1)
        return h(p, f + 1);
      if (p.startsWith("$")) {
        const C = p.substring(1);
        return t.add(C), function(d) {
          return C in d ? d[C]() : void 0;
        };
      }
      return p;
    }
    return p;
  }
  const v = h(e.startsWith("$:") ? e.substring(2) : e), w = Array.from(t);
  function S(p) {
    return i = p, Object.assign(v.bind(null, p(w)), {
      provide: S
    });
  }
  return Object.assign(v, {
    provide: S
  });
}
const At = "0.16.4";
function Wi(e) {
  let i = 1;
  return Array.isArray(e) ? e.map((t) => typeof t == "string" || typeof t == "number" ? {
    label: String(t),
    value: String(t)
  } : (typeof t == "object" && "value" in t && typeof t.value != "string" && Object.assign(t, {
    value: `__mask_${i++}`,
    __original: t.value
  }), t)) : Object.keys(e).map((t) => ({
    label: e[t],
    value: t
  }));
}
function ve(e, i) {
  if (Array.isArray(e)) {
    for (const t of e)
      if (i == t.value)
        return "__original" in t ? t.__original : t.value;
  }
  return i;
}
function he(e, i) {
  return e === null && i === void 0 || e === void 0 && i === null ? !1 : e == i ? !0 : ye(e) && ye(i) ? Oe(e, i) : !1;
}
function ht(e) {
  e.hook.prop((i, t) => (i.prop === "options" && (typeof i.value == "function" ? (e.props.optionsLoader = i.value, i.value = []) : i.value = Wi(i.value)), t(i)));
}
const se = k("outer", () => ({
  $el: "div",
  attrs: {
    key: "$id",
    "data-family": "$family || undefined",
    "data-type": "$type",
    "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
    "data-disabled": "$disabled || undefined",
    "data-complete": "$state.complete || undefined",
    "data-invalid": "$state.valid === false && $state.validationVisible || undefined",
    "data-errors": "$state.errors || undefined",
    "data-submitted": "$state.submitted || undefined",
    "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
    "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
    "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
    "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
  }
}), !0), te = k("inner", "div"), _e = k("wrapper", "div"), xe = k("label", () => ({
  $el: "label",
  if: "$label",
  attrs: {
    for: "$id"
  }
})), ne = k("messages", () => ({
  $el: "ul",
  if: "$defaultMessagePlacement && $fns.length($messages)"
})), ie = k("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
})), G = k("prefix", null), X = k("suffix", null), ee = k("help", () => ({
  $el: "div",
  if: "$help",
  attrs: {
    id: '$: "help-" + $id'
  }
})), tn = k("fieldset", () => ({
  $el: "fieldset",
  attrs: {
    id: "$id",
    "aria-describedby": {
      if: "$help",
      then: '$: "help-" + $id',
      else: void 0
    }
  }
})), ze = k("decorator", () => ({
  $el: "span",
  attrs: {
    "aria-hidden": "true"
  }
})), We = k("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    name: "$node.props.altName || $node.name",
    disabled: "$option.attrs.disabled || $disabled",
    onInput: "$handlers.toggleChecked",
    checked: "$fns.eq($_value, $onValue)",
    onBlur: "$handlers.blur",
    value: "$: true",
    id: "$id",
    "aria-describedby": {
      if: "$options.length",
      then: {
        if: "$option.help",
        then: '$: "help-" + $option.attrs.id',
        else: void 0
      },
      else: {
        if: "$help",
        then: '$: "help-" + $id',
        else: void 0
      }
    }
  }
})), nn = k("legend", () => ({
  $el: "legend",
  if: "$label"
})), ln = k("option", () => ({
  $el: "li",
  for: ["option", "$options"],
  attrs: {
    "data-disabled": "$option.attrs.disabled || $disabled"
  }
})), an = k("options", "ul"), Ue = k("wrapper", () => ({
  $el: "label",
  attrs: {
    "data-disabled": {
      if: "$options.length",
      then: void 0,
      else: "$disabled || undefined"
    },
    "data-checked": {
      if: "$options == undefined",
      then: "$fns.eq($_value, $onValue) || undefined",
      else: "$fns.isChecked($option.value) || undefined"
    }
  }
})), rn = k("optionHelp", () => ({
  $el: "div",
  if: "$option.help",
  attrs: {
    id: '$: "help-" + $option.attrs.id'
  }
})), qe = k("label", "span"), Ui = k("input", () => ({
  $el: "button",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    id: "$id"
  }
})), qi = k("default", null), Ni = k("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "file",
    disabled: "$disabled",
    name: "$node.name",
    onChange: "$handlers.files",
    onBlur: "$handlers.blur",
    id: "$id",
    "aria-describedby": "$describedBy"
  }
})), Ki = k("fileItem", () => ({
  $el: "li",
  for: ["file", "$value"]
})), Hi = k("fileList", () => ({
  $el: "ul",
  if: "$value.length",
  attrs: {
    "data-has-multiple": {
      if: "$value.length > 1",
      then: "true"
    }
  }
})), Zi = k("fileName", () => ({
  $el: "span",
  attrs: {
    class: "$classes.fileName"
  }
})), xt = k("fileRemove", () => ({
  $el: "button",
  attrs: {
    onClick: "$handlers.resetFiles"
  }
})), Yi = k("noFiles", () => ({
  $el: "span",
  if: "$value.length == 0"
})), Ji = k("form", () => ({
  $el: "form",
  bind: "$attrs",
  attrs: {
    id: "$id",
    name: "$node.name",
    onSubmit: "$handlers.submit",
    "data-loading": "$state.loading || undefined"
  }
}), !0), Qi = k("actions", () => ({
  $el: "div",
  if: "$actions"
})), Gi = k("submit", () => ({
  $cmp: "FormKit",
  bind: "$submitAttrs",
  props: {
    type: "submit",
    disabled: "$disabled",
    label: "$submitLabel"
  }
})), sn = k("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy"
  }
})), on = k("wrapper", null, !0), Xi = k("input", () => ({
  $el: "select",
  bind: "$attrs",
  attrs: {
    id: "$id",
    "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
    disabled: "$disabled",
    class: "$classes.input",
    name: "$node.name",
    onChange: "$handlers.onChange",
    onInput: "$handlers.selectInput",
    onBlur: "$handlers.blur",
    "aria-describedby": "$describedBy"
  }
})), el = k("option", () => ({
  $el: "option",
  for: ["option", "$options"],
  bind: "$option.attrs",
  attrs: {
    class: "$classes.option",
    value: "$option.value",
    selected: "$fns.isSelected($option)"
  }
})), tl = () => ({
  $el: null,
  if: "$options.length",
  for: ["option", "$options"],
  children: "$slots.option"
}), nl = k("input", () => ({
  $el: "textarea",
  bind: "$attrs",
  attrs: {
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy"
  },
  children: "$initialValue"
})), W = (e, i) => k(`${e}Icon`, () => {
  const t = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
  return {
    if: `$${e}Icon && $${t}`,
    $el: `${i || "span"}`,
    attrs: {
      class: `$classes.${e}Icon + " formkit-icon"`,
      innerHTML: `$${t}`,
      onClick: `$handlers.iconClick(${e})`,
      for: {
        if: `${i === "label"}`,
        then: "$id"
      }
    }
  };
})();
function un(e) {
  return function(i, t) {
    return i.prop === "options" && Array.isArray(i.value) && (i.value = i.value.map((n) => {
      var l;
      return !((l = n.attrs) === null || l === void 0) && l.id ? n : Ye(n, {
        attrs: {
          id: `${e.name}-option-${ct(String(n.value))}`
        }
      });
    }), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
      Array.isArray(e.value) || e.input([], !1);
    }))), t(i);
  };
}
function il(e, i) {
  const t = i.target;
  if (t instanceof HTMLInputElement) {
    const n = Array.isArray(e.props.options) ? ve(e.props.options, t.value) : t.value;
    Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some((l) => he(n, l)) ? e.input(e._value.filter((l) => !he(n, l))) : e.input([...e._value, n]) : e.input([n]) : t.checked ? e.input(e.props.onValue) : e.input(e.props.offValue);
  }
}
function ll(e, i) {
  var t, n;
  return (t = e.context) === null || t === void 0 || t.value, (n = e.context) === null || n === void 0 || n._value, Array.isArray(e._value) ? e._value.some((l) => he(ve(e.props.options, i), l)) : !1;
}
function al(e) {
  e.on("created", () => {
    var i, t;
    !((i = e.context) === null || i === void 0) && i.handlers && (e.context.handlers.toggleChecked = il.bind(null, e)), !((t = e.context) === null || t === void 0) && t.fns && (e.context.fns.isChecked = ll.bind(null, e)), E(e.props, "onValue") || (e.props.onValue = !0), E(e.props, "offValue") || (e.props.offValue = !1);
  }), e.hook.prop(un(e));
}
function Qe(e) {
  e.on("created", () => {
    e.props.disabled = Q(e.props.disabled);
  }), e.hook.prop(({ prop: i, value: t }, n) => (t = i === "disabled" ? Q(t) : t, n({ prop: i, value: t }))), e.on("prop:disabled", ({ payload: i }) => {
    e.config.disabled = Q(i);
  }), e.on("created", () => {
    e.config.disabled = Q(e.props.disabled);
  });
}
function je(e, i) {
  return (t) => {
    t.store.set(ae({
      key: e,
      type: "ui",
      value: i || e,
      meta: {
        localize: !0,
        i18nArgs: [t]
      }
    }));
  };
}
const Pt = typeof window < "u";
function fn(e) {
  e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover");
}
function Et(e, i) {
  i.target instanceof HTMLInputElement ? e === "dragover" && i.target.setAttribute("data-file-hover", "true") : i.preventDefault(), e === "drop" && fn(i);
}
function rl(e) {
  je("noFiles", "Select file")(e), je("removeAll", "Remove all")(e), je("remove")(e), Pt && (window._FormKit_File_Drop || (window.addEventListener("dragover", Et.bind(null, "dragover")), window.addEventListener("drop", Et.bind(null, "drop")), window.addEventListener("dragleave", fn), window._FormKit_File_Drop = !0)), e.hook.input((i, t) => t(Array.isArray(i) ? i : [])), e.on("created", () => {
    Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = (i) => {
      if (i.preventDefault(), e.input([]), e.props.id && Pt) {
        const t = document.getElementById(e.props.id);
        t && (t.value = "");
      }
    }, e.context.handlers.files = (i) => {
      var t, n;
      const l = [];
      if (i.target instanceof HTMLInputElement && i.target.files) {
        for (let r = 0; r < i.target.files.length; r++) {
          let s;
          (s = i.target.files.item(r)) && l.push({ name: s.name, file: s });
        }
        e.input(l);
      }
      e.context && (e.context.files = l), typeof ((t = e.props.attrs) === null || t === void 0 ? void 0 : t.onChange) == "function" && ((n = e.props.attrs) === null || n === void 0 || n.onChange(i));
    });
  });
}
async function sl(e, i) {
  i.preventDefault(), await e.settled;
  const t = (n) => n.store.set(ae({
    key: "submitted",
    value: !0,
    visible: !1
  }));
  if (e.walk(t), t(e), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(i, e), e.ledger.value("blocking"))
    typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && e.store.set(ae({
      blocking: !1,
      key: "incomplete",
      meta: {
        localize: e.props.incompleteMessage === void 0,
        i18nArgs: [{ node: e }],
        showAsMessage: !0
      },
      type: "ui",
      value: e.props.incompleteMessage || "Form incomplete."
    }));
  else if (typeof e.props.onSubmit == "function") {
    const n = e.props.onSubmit(e.hook.submit.dispatch(Ie(e.value)), e);
    if (n instanceof Promise) {
      const l = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
      l && (e.props.disabled = !0), e.store.set(ae({
        key: "loading",
        value: !0,
        visible: !1
      })), await n, l && (e.props.disabled = !1), e.store.remove("loading");
    }
  } else
    i.target instanceof HTMLFormElement && i.target.submit();
}
function ol(e) {
  e.props.isForm = !0, e.on("created", () => {
    var i;
    !((i = e.context) === null || i === void 0) && i.handlers && (e.context.handlers.submit = sl.bind(null, e)), E(e.props, "actions") || (e.props.actions = !0);
  }), e.on("settled:blocking", () => e.store.remove("incomplete"));
}
function ul(e) {
  e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null);
}
function fl(e) {
  e.on("created", () => {
    e.context && (e.context.initialValue = e.value || "");
  });
}
function cl(e, i) {
  i.target instanceof HTMLInputElement && e.input(ve(e.props.options, i.target.value));
}
function pl(e, i) {
  var t, n;
  return (t = e.context) === null || t === void 0 || t.value, (n = e.context) === null || n === void 0 || n._value, he(ve(e.props.options, i), e._value);
}
function dl(e) {
  e.on("created", () => {
    var i, t;
    Array.isArray(e.props.options) || Ae(350, e), !((i = e.context) === null || i === void 0) && i.handlers && (e.context.handlers.toggleChecked = cl.bind(null, e)), !((t = e.context) === null || t === void 0) && t.fns && (e.context.fns.isChecked = pl.bind(null, e));
  }), e.hook.prop(un(e));
}
function ml(e, i) {
  e.context && e.context.value;
  const t = "__original" in i ? i.__original : i.value;
  function n() {
    return !e.props.options.some((l) => ("__original" in l ? l.__original : l.value) === null);
  }
  return Array.isArray(e._value) ? e._value.some((l) => he(l, t)) : (e._value === void 0 || e._value === null && n()) && i.attrs && i.attrs["data-is-placeholder"] ? !0 : he(t, e._value);
}
async function bl(e, i) {
  var t;
  typeof ((t = e.props.attrs) === null || t === void 0 ? void 0 : t.onChange) == "function" && (await new Promise((n) => setTimeout(n, 0)), await e.settled, e.props.attrs.onChange(i));
}
function yl(e, i) {
  const t = i.target, n = t.hasAttribute("multiple") ? Array.from(t.selectedOptions).map((l) => ve(e.props.options, l.value)) : ve(e.props.options, t.value);
  e.input(n);
}
function Mt(e, i) {
  return e.some((t) => t.attrs && t.attrs["data-is-placeholder"]) ? e : [
    {
      label: i,
      value: "",
      attrs: {
        hidden: !0,
        disabled: !0,
        "data-is-placeholder": "true"
      }
    },
    ...e
  ];
}
function vl(e) {
  e.on("created", () => {
    var i, t, n;
    const l = Q((i = e.props.attrs) === null || i === void 0 ? void 0 : i.multiple);
    !l && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({ prop: r, value: s }, o) => (r === "options" && (s = Mt(s, e.props.placeholder)), o({ prop: r, value: s }))), e.props.options = Mt(e.props.options, e.props.placeholder)), l ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
      value: e._value
    }), e.on("input", ({ payload: r }) => {
      e.props.attrs = Object.assign({}, e.props.attrs, {
        value: r
      });
    })), !((t = e.context) === null || t === void 0) && t.handlers && (e.context.handlers.selectInput = yl.bind(null, e), e.context.handlers.onChange = bl.bind(null, e)), !((n = e.context) === null || n === void 0) && n.fns && (e.context.fns.isSelected = ml.bind(null, e), e.context.fns.showPlaceholder = (r, s) => {
      if (!Array.isArray(e.props.options))
        return !1;
      const o = e.props.options.some((u) => {
        if (u.attrs && "data-is-placeholder" in u.attrs)
          return !1;
        const b = "__original" in u ? u.__original : u.value;
        return Oe(r, b);
      });
      return s && !o ? !0 : void 0;
    });
  }), e.hook.input((i, t) => {
    var n, l, r;
    return !e.props.placeholder && i === void 0 && Array.isArray((n = e.props) === null || n === void 0 ? void 0 : n.options) && e.props.options.length && !Q((r = (l = e.props) === null || l === void 0 ? void 0 : l.attrs) === null || r === void 0 ? void 0 : r.multiple) && (i = "__original" in e.props.options[0] ? e.props.options[0].__original : e.props.options[0].value), t(i);
  });
}
function de(e, i) {
  return (t) => {
    t.props[`${e}Icon`] === void 0 && (t.props[`${e}Icon`] = `default:${i}`);
  };
}
function Ne(e) {
  return typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e);
}
function ut(e) {
  return !!(pe(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e);
}
function we(e, i = {}) {
  return typeof e == "string" ? Ne(i) || typeof i == "string" ? i : e : Array.isArray(e) ? Ne(i) ? i : e : Ye(e, i);
}
function hl(e) {
  return se(_e(xe("$label"), te(G(), e(), X())), ee("$help"), ne(ie("$message.value")));
}
function k(e, i, t = !1) {
  return (...n) => {
    const l = (r) => {
      const s = !i || typeof i == "string" ? { $el: i } : i();
      return (st(s) || ot(s)) && (s.meta || (s.meta = { section: e }), n.length && !s.children && (s.children = [
        ...n.map((o) => typeof o == "string" ? o : o(r))
      ]), st(s) && (s.attrs = {
        class: `$classes.${e}`,
        ...s.attrs || {}
      })), {
        if: `$slots.${e}`,
        then: `$slots.${e}`,
        else: e in r ? we(s, r[e]) : s
      };
    };
    return l._s = e, t ? cn(l) : l;
  };
}
function cn(e) {
  return (i) => [e(i)];
}
function J(e, i, t) {
  const n = (l) => {
    const r = i(l);
    if (t || Ne(r) && "if" in r || ut(r)) {
      const s = {
        if: e,
        then: r
      };
      return t && (s.else = t(l)), s;
    } else
      ut(r) ? Object.assign(r.else, { if: e }) : Ne(r) && Object.assign(r, { if: e });
    return r;
  };
  return n._s = Ze(), n;
}
function Te(e, i) {
  const t = (n) => {
    const l = e({});
    return ut(l) ? (Array.isArray(l.else) || (l.else = we(we(l.else, i), e._s ? n[e._s] : {})), l) : we(we(l, i), e._s ? n[e._s] : {});
  };
  return t._s = e._s, t;
}
function _l(e) {
  return cn(e);
}
se(ne(ie("$message.value")), _e(Ui(W("prefix"), G(), qi("$label || $ui.submit.value"), X(), W("suffix"))), ee("$help")), je("submit");
se(
  J(
    "$options == undefined",
    /**
     * Single checkbox structure.
     */
    Ue(te(G(), We(), ze(W("decorator")), X()), Te(qe("$label"), {
      if: "$label"
    })),
    /**
     * Multi checkbox structure.
     */
    tn(nn("$label"), ee("$help"), an(ln(Ue(te(G(), Te(We(), {
      bind: "$option.attrs",
      attrs: {
        id: "$option.attrs.id",
        value: "$option.value",
        checked: "$fns.isChecked($option.value)"
      }
    }), ze(W("decorator")), X()), Te(qe("$option.label"), {
      if: "$option.label"
    })), rn("$option.help"))))
  ),
  // Help text only goes under the input when it is a single.
  J("$options == undefined && $help", ee("$help")),
  ne(ie("$message.value"))
), de("decorator", "checkboxDecorator");
se(_e(xe("$label"), te(W("prefix", "label"), G(), Ni(), Hi(Ki(W("fileItem"), Zi("$file.name"), J("$value.length === 1", xt(W("fileRemove"), "$ui.remove.value")))), J("$value.length > 1", xt("$ui.removeAll.value")), Yi(W("noFiles"), "$ui.noFiles.value"), X(), W("suffix"))), ee("$help"), ne(ie("$message.value"))), de("fileItem", "fileItem"), de("fileRemove", "fileRemove"), de("noFiles", "noFiles");
Ji("$slots.default", ne(ie("$message.value")), Qi(Gi()));
on("$slots.default");
_l(sn());
on("$slots.default");
se(
  J(
    "$options == undefined",
    /**
     * Single radio structure.
     */
    Ue(te(G(), We(), ze(W("decorator")), X()), J("$label", qe("$label"))),
    /**
     * Multi radio structure.
     */
    tn(nn("$label"), ee("$help"), an(ln(Ue(te(G(), Te(We(), {
      bind: "$option.attrs",
      attrs: {
        id: "$option.attrs.id",
        value: "$option.value",
        checked: "$fns.isChecked($option.value)"
      }
    }), ze(W("decorator")), X()), J("$option.label", qe("$option.label"))), rn("$option.help"))))
  ),
  // Help text only goes under the input when it is a single.
  J("$options === undefined && $help", ee("$help")),
  ne(ie("$message.value"))
), de("decorator", "radioDecorator");
se(_e(xe("$label"), te(W("prefix"), G(), Xi(J("$slots.default", () => "$slots.default", J("$slots.option", tl, el("$option.label")))), J("$attrs.multiple !== undefined", () => "", W("select")), X(), W("suffix"))), ee("$help"), ne(ie("$message.value"))), de("select", "select");
se(_e(xe("$label"), te(W("prefix", "label"), G(), nl(), X(), W("suffix"))), ee("$help"), ne(ie("$message.value")));
se(_e(xe("$label"), te(W("prefix", "label"), G(), sn(), X(), W("suffix"))), ee("$help"), ne(ie("$message.value")));
ae({
  type: "state",
  blocking: !0,
  visible: !1,
  value: !0,
  key: "validating"
});
let Fe;
const gl = new Promise((e) => {
}), Ge = typeof window < "u" && typeof fetch < "u";
Fe = Ge ? getComputedStyle(document.documentElement) : void 0;
const ke = {}, Xe = {};
function et(e, i) {
  return (t) => {
    if (typeof t == "boolean")
      return;
    if (t.startsWith("<svg"))
      return t;
    if (typeof t != "string")
      return;
    const n = t.startsWith("default:");
    t = n ? t.split(":")[1] : t;
    const l = t in ke;
    let r;
    if (l)
      return ke[t];
    if (!Xe[t]) {
      if (r = $l(t), r = Ge && typeof r > "u" ? Promise.resolve(r) : r, r instanceof Promise)
        Xe[t] = r.then((s) => !s && typeof t == "string" && !n ? r = typeof e == "function" ? e(t) : kl(t, i) : s).then((s) => (typeof t == "string" && (ke[n ? `default:${t}` : t] = s), s));
      else if (typeof r == "string")
        return ke[n ? `default:${t}` : t] = r, r;
    }
    return Xe[t];
  };
}
function $l(e) {
  if (Ge)
    return gl.then(() => wl(e));
}
function wl(e) {
  const i = Fe == null ? void 0 : Fe.getPropertyValue(`--fk-icon-${e}`);
  if (i) {
    const t = atob(i);
    if (t.startsWith("<svg"))
      return ke[e] = t, t;
  }
}
function kl(e, i) {
  const t = At.startsWith("__") ? "latest" : At, n = typeof i == "function" ? i(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${t}/dist/icons/${e}.svg`;
  if (Ge)
    return fetch(`${n}`).then(async (l) => {
      const r = await l.text();
      if (r.startsWith("<svg"))
        return r;
    }).catch((l) => {
      console.error(l);
    });
}
let _t = !1;
const Rt = {
  /**
   * FormKit errors:
   */
  100: ({ data: e }) => `Only groups, lists, and forms can have children (${e.name}).`,
  101: ({ data: e }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
  102: ({ data: [e, i] }) => `You cannot directly assign node.${i} (${e.name})`,
  103: ({ data: [e] }) => `Schema expressions cannot start with an operator (${e})`,
  104: ({ data: [e, i] }) => `Schema expressions cannot end with an operator (${e} in "${i}")`,
  105: ({ data: e }) => `Invalid schema expression: ${e}`,
  106: ({ data: e }) => `Cannot submit because (${e}) is not in a form.`,
  107: ({ data: [e, i] }) => `Cannot set ${e.name} to non object value: ${i}`,
  108: ({ data: [e, i] }) => `Cannot set ${e.name} to non array value: ${i}`,
  /**
   * Input specific errors:
   */
  300: ({ data: [e] }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
  /**
   * FormKit vue errors:
   */
  600: ({ data: e }) => `Unknown input type${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} ("${e.name}")`,
  601: ({ data: e }) => `Input definition${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} is missing a schema or component property (${e.name}).`
}, jt = {
  /**
   * Core warnings:
   */
  150: ({ data: e }) => `Schema function "${e}()" is not a valid function.`,
  151: ({ data: e }) => `No form element with id: ${e}`,
  152: ({ data: e }) => `No input element with id: ${e}`,
  /**
   * Input specific warnings:
   */
  350: ({ data: e }) => `Invalid options prop for radio input (${e.name}). See https://formkit.com/inputs/radio`,
  /**
   * Vue warnings:
   */
  650: 'Schema "$get()" must use the id of an input to access.',
  651: ({ data: e }) => `Cannot setErrors() on "${e}" because no such id exists.`,
  652: ({ data: e }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
  /**
   * Deprecation warnings:
   */
  800: ({ data: e }) => `${e} is deprecated.`
}, Cl = (e, i) => {
  if (e.code in Rt) {
    const t = Rt[e.code];
    e.message = typeof t == "function" ? t(e) : t;
  }
  return i(e);
};
_t || dt(Cl);
const Sl = (e, i) => {
  if (e.code in jt) {
    const t = jt[e.code];
    e.message = typeof t == "function" ? t(e) : t;
  }
  return i(e);
};
_t || mt(Sl);
_t = !0;
const tt = {};
let U;
const oe = /* @__PURE__ */ new Map(), Il = "__raw__", Vl = /[a-zA-Z0-9\-][cC]lass$/;
function Ll(e, i) {
  const t = Le(null);
  if (e === "get") {
    const l = {};
    return t.value = Ol.bind(null, l), t;
  }
  const n = e.split(".");
  return le(() => {
    t.value = gt(He(i) ? i.value : i, n);
  }), t;
}
function gt(e, i) {
  if (Array.isArray(e)) {
    for (const l of e) {
      const r = l !== !1 && gt(l, i);
      if (r !== void 0)
        return r;
    }
    return;
  }
  let t, n = e;
  for (const l in i) {
    const r = i[l];
    if (typeof n != "object" || n === null) {
      t = void 0;
      break;
    }
    const s = n[r];
    if (Number(l) === i.length - 1 && s !== void 0) {
      t = typeof s == "function" ? s.bind(n) : s;
      break;
    }
    n = s;
  }
  return t;
}
function Ol(e, i) {
  if (typeof i != "string")
    return Ae(650);
  if (i in e || (e[i] = Le(void 0)), e[i].value === void 0) {
    e[i].value = null;
    const t = Ht(i);
    t && (e[i].value = t.context), Yn(i, ({ payload: n }) => {
      e[i].value = Je(n) ? n.context : n;
    });
  }
  return e[i].value;
}
function Tt(e, i) {
  function t(_, v) {
    const w = h(Y(v.if), { if: !0 }), S = u(_, v.then), p = v.else ? u(_, v.else) : null;
    return [w, S, p];
  }
  function n(_, v) {
    var w, S;
    const p = h(Y(_.if));
    let f = () => v, c = () => v;
    return typeof _.then == "object" ? c = l(_.then, void 0) : typeof _.then == "string" && (!((w = _.then) === null || w === void 0) && w.startsWith("$")) ? c = h(Y(_.then)) : c = () => _.then, E(_, "else") && (typeof _.else == "object" ? f = l(_.else) : typeof _.else == "string" && (!((S = _.else) === null || S === void 0) && S.startsWith("$")) ? f = h(Y(_.else)) : f = () => _.else), () => p() ? c() : f();
  }
  function l(_, v, w = {}) {
    const S = new Set(Object.keys(_ || {})), p = v ? h(Y(v)) : () => ({}), f = [
      (c) => {
        const $ = p();
        for (const C in $)
          S.has(C) || (c[C] = $[C]);
      }
    ];
    if (_) {
      if (pe(_))
        return n(_, w);
      for (let c in _) {
        const $ = _[c];
        let C;
        const m = typeof $ == "string";
        c.startsWith(Il) ? (c = c.substring(7), C = () => $) : m && $.startsWith("$") && $.length > 1 && !($.startsWith("$reset") && Vl.test(c)) ? C = h(Y($)) : typeof $ == "object" && pe($) ? C = n($, void 0) : typeof $ == "object" && ye($) ? C = l($) : C = () => $, f.push((d) => {
          d[c] = C();
        });
      }
    }
    return () => {
      const c = Array.isArray(_) ? [] : {};
      return f.forEach(($) => $(c)), c;
    };
  }
  function r(_, v) {
    let w = null, S = () => null, p = !1, f = null, c = null, $ = null, C = !1;
    const m = zi(v);
    if (st(m) ? (w = m.$el, S = m.$el !== "text" ? l(m.attrs, m.bind) : () => null) : ot(m) ? (typeof m.$cmp == "string" ? E(_, m.$cmp) ? w = _[m.$cmp] : (w = m.$cmp, C = !0) : w = m.$cmp, S = l(m.props, m.bind)) : pe(m) && ([p, f, c] = t(_, m)), !pe(m) && "if" in m ? p = h(Y(m.if)) : !pe(m) && w === null && (p = () => !0), "children" in m && m.children)
      if (typeof m.children == "string")
        if (m.children.startsWith("$slots."))
          w = w === "text" ? "slot" : w, f = h(Y(m.children));
        else if (m.children.startsWith("$") && m.children.length > 1) {
          const d = h(Y(m.children));
          f = () => String(d());
        } else
          f = () => String(m.children);
      else if (Array.isArray(m.children))
        f = u(_, m.children);
      else {
        const [d, y, g] = t(_, m.children);
        f = (I) => d && d() ? y && y(I) : g && g(I);
      }
    if (ot(m))
      if (f) {
        const d = f;
        f = (y) => ({
          default(g, I) {
            var O, R, V, F;
            const z = U;
            I && (U = I), g && ((O = oe.get(U)) === null || O === void 0 || O.unshift(g)), y && ((R = oe.get(U)) === null || R === void 0 || R.unshift(y));
            const Z = d(y);
            return g && ((V = oe.get(U)) === null || V === void 0 || V.shift()), y && ((F = oe.get(U)) === null || F === void 0 || F.shift()), U = z, Z;
          }
        }), f.slot = !0;
      } else
        f = () => ({});
    if ("for" in m && m.for) {
      const d = m.for.length === 3 ? m.for[2] : m.for[1];
      $ = [
        typeof d == "string" && d.startsWith("$") ? h(Y(d)) : () => d,
        m.for[0],
        m.for.length === 3 ? String(m.for[1]) : null
      ];
    }
    return [p, w, S, f, c, $, C];
  }
  function s(_, v) {
    const w = _(v), S = U;
    return Object.keys(w).reduce((p, f) => {
      const c = w && w[f];
      return p[f] = ($) => c && c($, S) || null, p;
    }, {});
  }
  function o(_, v) {
    const [w, S, p, f, c, $, C] = r(_, v);
    let m = (d) => {
      if (w && S === null && f)
        return w() ? f(d) : c && c(d);
      if (S && (!w || w())) {
        if (S === "text" && f)
          return wn(String(f()));
        if (S === "slot" && f)
          return f(d);
        const y = C ? T(S) : S, g = f != null && f.slot ? s(f, d) : null;
        return Ce(y, p(), g || (f ? f(d) : []));
      }
      return typeof c == "function" ? c(d) : c;
    };
    if ($) {
      const d = m, [y, g, I] = $;
      m = () => {
        const O = y(), R = isNaN(O) ? O : Array(Number(O)).fill(0).map((Z, K) => K), V = [];
        if (typeof R != "object")
          return null;
        const F = oe.get(U) || [], z = Array.isArray(R);
        for (const Z in R) {
          if (z && Z in Array.prototype)
            continue;
          const K = Object.defineProperty({
            ...F.reduce((j, H) => j.__idata ? { ...j, ...H } : H, {}),
            [g]: R[Z],
            ...I !== null ? { [I]: z ? Number(Z) : Z } : {}
          }, "__idata", { enumerable: !1, value: !0 });
          F.unshift(K), V.push(d.bind(null, K)()), F.shift();
        }
        return V;
      };
    }
    return m;
  }
  function u(_, v) {
    if (Array.isArray(v)) {
      const S = v.map(o.bind(null, _));
      return (p) => S.map((f) => f(p));
    }
    const w = o(_, v);
    return (S) => w(S);
  }
  const b = [];
  function h(_, v = {}) {
    const w = {};
    return b.push((S, p) => {
      w[p] = _.provide((f) => S(f, v));
    }), () => w[U]();
  }
  return function(v, w) {
    const S = JSON.stringify(i), [p, f] = E(tt, S) ? tt[S] : [u(e, i), b];
    return tt[S] = [p, f], f.forEach((c) => {
      c(v, w);
    }), () => (U = w, p());
  };
}
function pn(e, i) {
  const t = oe.get(U) || [];
  let n;
  return t.length && (n = gt(t, e.split("."))), n === void 0 ? i : n;
}
function Al(e, i) {
  return new Proxy(e, {
    get(...t) {
      let n;
      const l = t[1];
      if (typeof l == "string") {
        const r = U;
        U = i, n = pn(l, void 0), U = r;
      }
      return n !== void 0 ? n : Reflect.get(...t);
    }
  });
}
function Ft(e, i, t) {
  return e((n, l = {}) => n.reduce((r, s) => {
    if (s.startsWith("slots.")) {
      const o = s.substring(6), u = () => i.slots && E(i.slots, o) && typeof i.slots[o] == "function";
      if (l.if)
        r[s] = u;
      else if (i.slots) {
        const b = Al(i, t);
        r[s] = () => u() ? i.slots[o](b) : null;
      }
    } else {
      const o = Ll(s, i);
      r[s] = () => pn(s, o.value);
    }
    return r;
  }, {}), t);
}
let Dt = 0;
const dn = P({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: !0
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, i) {
    const t = zt();
    let n = Symbol(String(Dt++));
    oe.set(n, []);
    let l = Tt(e.library, e.schema), r, s;
    return me(() => e.schema, (o, u) => {
      var b;
      n = Symbol(String(Dt++)), l = Tt(e.library, e.schema), r = Ft(l, s, n), o === u && ((b = t == null ? void 0 : t.proxy) === null || b === void 0 ? void 0 : b.$forceUpdate)();
    }, { deep: !0 }), le(() => {
      s = Object.assign(yn(e.data), {
        slots: i.slots
      }), r = Ft(l, s, n);
    }), () => r();
  }
}), xl = {
  config: {
    type: Object,
    default: {}
  },
  classes: {
    type: Object,
    required: !1
  },
  delay: {
    type: Number,
    required: !1
  },
  errors: {
    type: Array,
    default: []
  },
  inputErrors: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    required: !1
  },
  id: {
    type: String,
    required: !1
  },
  modelValue: {
    required: !1
  },
  name: {
    type: String,
    required: !1
  },
  parent: {
    type: Object,
    required: !1
  },
  plugins: {
    type: Array,
    default: []
  },
  sectionsSchema: {
    type: Object,
    default: {}
  },
  type: {
    type: [String, Object],
    default: "text"
  },
  validation: {
    type: [String, Array],
    required: !1
  },
  validationMessages: {
    type: Object,
    required: !1
  },
  validationRules: {
    type: Object,
    required: !1
  },
  validationLabel: {
    type: [String, Function],
    required: !1
  }
}, Pl = xl, Ke = Symbol("FormKitParent");
P({
  props: Pl,
  emits: {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    input: (e, i) => !0,
    inputRaw: (e, i) => !0,
    "update:modelValue": (e) => !0,
    node: (e) => !!e,
    submit: (e, i) => !0,
    submitRaw: (e, i) => !0,
    submitInvalid: (e) => !0
    /* eslint-enable @typescript-eslint/no-unused-vars */
  },
  inheritAttrs: !1,
  setup(e, i) {
    const t = Tl(e, i);
    if (t.props.definition || N(600, t), t.props.definition.component)
      return () => {
        var s;
        return Ce((s = t.props.definition) === null || s === void 0 ? void 0 : s.component, {
          context: t.context
        }, { ...i.slots });
      };
    const n = Le([]), l = () => {
      var s, o;
      const u = (o = (s = t.props) === null || s === void 0 ? void 0 : s.definition) === null || o === void 0 ? void 0 : o.schema;
      u || N(601, t), n.value = typeof u == "function" ? u({ ...e.sectionsSchema }) : u;
    };
    l(), t.on("schema", l), i.emit("node", t);
    const r = t.props.definition.library;
    return i.expose({ node: t }), () => Ce(dn, { schema: n.value, data: t.context, library: r }, { ...i.slots });
  }
});
const mn = Symbol.for("FormKitOptions"), ft = Symbol();
function El(e, i) {
  const t = {}, n = (s) => {
    for (const o of s)
      o.__str in t && t[o.__str](), t[o.__str] = me(Rl.bind(null, e, o), r.bind(null, o), { deep: !1 });
  }, r = Ml(e, i, n, (s) => {
    if (s.length)
      for (const o in t)
        `${o}`.startsWith(`${s.__str}.`) && (t[o](), delete t[o]);
  });
  n($t(e));
}
function Ml(e, i, t, n) {
  return (l) => {
    const r = bn(e, l);
    r !== ft && (l.__deep && n(l), typeof r == "object" && t($t(r, [l], ...l)), i(l, r, e));
  };
}
function Rl(e, i) {
  const t = bn(e, i);
  return t && typeof t == "object" ? Object.keys(t) : t;
}
function bn(e, i) {
  if (He(e)) {
    if (i.length === 0)
      return e.value;
    e = e.value;
  }
  return i.reduce((t, n) => t === ft ? t : t === null || typeof t != "object" ? ft : t[n], e);
}
function $t(e, i = [], ...t) {
  if (e === null)
    return i;
  if (!t.length) {
    const n = Object.defineProperty([], "__str", {
      value: ""
    });
    if (e = He(e) ? e.value : e, e && typeof e == "object")
      Object.defineProperty(n, "__deep", { value: !0 }), i.push(n);
    else
      return [n];
  }
  if (e === null || typeof e != "object")
    return i;
  for (const n in e) {
    const l = t.concat(n);
    Object.defineProperty(l, "__str", { value: l.join(".") });
    const r = e[n];
    ye(r) || Array.isArray(r) ? (i.push(Object.defineProperty(l, "__deep", { value: !0 })), i = i.concat($t(r, [], ...l))) : i.push(l);
  }
  return i;
}
function De(e) {
  return e === null || typeof e != "object" || (kt(e) ? e = gn(e) : He(e) && (e = kt(e.value) ? De(e.value) : e.value)), e;
}
const nt = [
  "help",
  "label",
  "ignore",
  "disabled",
  "preserve",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
];
function Bt(e, i) {
  i.classes && Object.keys(i.classes).forEach((t) => {
    typeof t == "string" && (e.props[`_${t}Class`] = i.classes[t], lt(i.classes[t]) && t === "inner" && Object.values(i.classes[t]));
  });
}
function jl(e) {
  return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce((t, n) => {
    const l = `on${n}`;
    return l in e && typeof e[l] == "function" && (t[l] = e[l]), t;
  }, {}) : {};
}
function Tl(e, i, t = {}) {
  var n;
  const l = Object.assign({}, Se(mn) || {}, t), r = zt(), s = jl(r == null ? void 0 : r.vnode.props), o = "modelValue" in ((n = r == null ? void 0 : r.vnode.props) !== null && n !== void 0 ? n : {}), u = e.modelValue !== void 0 ? e.modelValue : ue(i.attrs.value);
  function b() {
    const d = {
      ...ce(e),
      ...s
    }, y = Ct(ce(i.attrs), nt);
    y.key || (y.key = Ze()), d.attrs = y;
    const g = St(ce(i.attrs), nt);
    for (const O in g)
      d[Ee(O)] = g[O];
    const I = { props: {} };
    return Bt(I, e), Object.assign(d, I.props), typeof d.type != "string" && (d.definition = d.type, delete d.type), d;
  }
  const h = b(), _ = h.ignore ? null : e.parent || Se(Ke, null), v = Di(Ye(l || {}, {
    name: e.name || void 0,
    value: u,
    parent: _,
    plugins: (l.plugins || []).concat(e.plugins),
    config: e.config,
    props: h,
    index: e.index
  }, !1, !0));
  v.props.definition || N(600, v);
  const w = Le(new Set(v.props.definition.props || []));
  v.on("added-props", ({ payload: d }) => {
    Array.isArray(d) && d.forEach((y) => w.value.add(y));
  });
  const S = M(() => nt.concat([...w.value]).reduce((d, y) => (typeof y == "string" ? (d.push(Ee(y)), d.push(Wt(y))) : d.push(y), d), []));
  le(() => Bt(v, e));
  const p = ce(e);
  for (const d in p)
    me(() => e[d], () => {
      e[d] !== void 0 && (v.props[d] = e[d]);
    });
  const f = /* @__PURE__ */ new Set(), c = ce(i.attrs);
  le(() => {
    $(St(c, S.value));
  });
  function $(d) {
    f.forEach((y) => {
      y(), f.delete(y);
    });
    for (const y in d) {
      const g = Ee(y);
      f.add(me(() => i.attrs[y], () => {
        v.props[g] = i.attrs[y];
      }));
    }
  }
  if (le(() => {
    const d = Ct(ce(i.attrs), S.value);
    "multiple" in d && (d.multiple = Q(d.multiple)), v.props.attrs = Object.assign({}, v.props.attrs || {}, d);
  }), le(() => {
    const d = e.errors.map((y) => ae({
      key: ct(y),
      type: "error",
      value: y,
      meta: { source: "prop" }
    }));
    v.store.apply(d, (y) => y.type === "error" && y.meta.source === "prop");
  }), v.type !== "input") {
    const d = `${v.name}-prop`;
    le(() => {
      const y = Object.keys(e.inputErrors);
      y.length || v.clearErrors(!0, d);
      const g = y.reduce((I, O) => {
        let R = e.inputErrors[O];
        return typeof R == "string" && (R = [R]), Array.isArray(R) && (I[O] = R.map((V) => ae({
          key: V,
          type: "error",
          value: V,
          meta: { source: d }
        }))), I;
      }, {});
      v.store.apply(g, (I) => I.type === "error" && I.meta.source === d);
    });
  }
  le(() => Object.assign(v.config, e.config)), v.type !== "input" && vn(Ke, v);
  let C;
  const m = /* @__PURE__ */ new WeakSet();
  return v.on("modelUpdated", () => {
    var d, y;
    if (i.emit("inputRaw", (d = v.context) === null || d === void 0 ? void 0 : d.value, v), clearTimeout(C), C = setTimeout(i.emit, 20, "input", (y = v.context) === null || y === void 0 ? void 0 : y.value, v), o && v.context) {
      const g = De(v.context.value);
      lt(g) && De(e.modelValue) !== g && m.add(g), i.emit("update:modelValue", g);
    }
  }), o && (El(hn(e, "modelValue"), (d, y) => {
    var g;
    const I = De(y);
    if (lt(I) && m.has(I))
      return m.delete(I);
    d.length ? (g = v.at(d)) === null || g === void 0 || g.input(y, !1) : v.input(y, !1);
  }), v.value !== u && v.emit("modelUpdated")), _n(() => v.destroy()), v;
}
let Fl = 1;
function Dl(e) {
  return typeof e == "function" && e.length === 2 || typeof e == "object" && !Array.isArray(e) && !("$el" in e) && !("$cmp" in e) && !("if" in e);
}
function B(e, i = {}) {
  const t = {
    type: "input",
    ...i
  };
  let n;
  if (Dl(e)) {
    const l = `SchemaComponent${Fl++}`;
    n = k("input", () => ({
      $cmp: l,
      props: {
        context: "$node.context"
      }
    })), t.library = { [l]: $n(e) };
  } else
    typeof e == "function" ? n = e : n = k("input", () => ue(e));
  return t.schema = hl(n || "Schema undefined"), t;
}
const Bl = k("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
}), !0), zl = k("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
})), Wl = Bl(zl("$message.value"));
P({
  props: {
    node: {
      type: Object,
      required: !1
    },
    sectionsSchema: {
      type: Object,
      default: {}
    },
    defaultPosition: {
      type: [String, Boolean],
      default: !1
    }
  },
  setup(e, i) {
    const t = M(() => e.node || Se(Ke, void 0));
    me(t, () => {
      var r;
      !((r = t.value) === null || r === void 0) && r.context && !Q(e.defaultPosition) && (t.value.context.defaultMessagePlacement = !1);
    }, { immediate: !0 });
    const n = Wl(e.sectionsSchema || {}), l = M(() => {
      var r, s, o, u, b, h;
      return {
        messages: ((s = (r = t.value) === null || r === void 0 ? void 0 : r.context) === null || s === void 0 ? void 0 : s.messages) || {},
        fns: ((u = (o = t.value) === null || o === void 0 ? void 0 : o.context) === null || u === void 0 ? void 0 : u.fns) || {},
        classes: ((h = (b = t.value) === null || b === void 0 ? void 0 : b.context) === null || h === void 0 ? void 0 : h.classes) || {}
      };
    });
    return () => {
      var r;
      return !((r = t.value) === null || r === void 0) && r.context ? Ce(dn, { schema: n, data: l.value }, { ...i.slots }) : null;
    };
  }
});
P({
  name: "FormKitIcon",
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconLoader: {
      type: Function,
      default: null
    },
    iconLoaderUrl: {
      type: Function,
      default: null
    }
  },
  setup(e) {
    var i, t;
    const n = Le(void 0), l = Se(mn, {}), r = Se(Ke, null);
    let s;
    function o() {
      if (!s || typeof s != "function")
        return;
      const u = s(e.icon);
      u instanceof Promise ? u.then((b) => {
        n.value = b;
      }) : n.value = u;
    }
    if (e.iconLoader && typeof e.iconLoader == "function")
      s = et(e.iconLoader);
    else if (r && (!((i = r.props) === null || i === void 0) && i.iconLoader))
      s = et(r.props.iconLoader);
    else if (e.iconLoaderUrl && typeof e.iconLoaderUrl == "function")
      s = et(s, e.iconLoaderUrl);
    else {
      const u = (t = l == null ? void 0 : l.plugins) === null || t === void 0 ? void 0 : t.find((b) => typeof b.iconHandler == "function");
      u && (s = u.iconHandler);
    }
    return me(() => e.icon, () => {
      o();
    }, { immediate: !0 }), () => e.icon && n.value ? Ce("span", {
      class: "formkit-icon",
      innerHTML: n.value
    }) : null;
  }
});
const Ul = /* @__PURE__ */ P({
  __name: "PrimeCalendar",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(o) {
      t == null || t.node.input(t == null ? void 0 : t._value);
    }
    function r(o) {
      t == null || t.node.input(o);
    }
    const s = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (o, u) => {
      const b = T("Calendar");
      return A(), x("div", null, [
        D(b, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => a(t)._value = h),
          "input-id": i.context.id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(s),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          "date-format": a(n).dateFormat,
          "selection-mode": a(n).selectionMode ?? "single",
          inline: a(n).inline ?? !1,
          "show-other-months": a(n).showOtherMonths ?? !0,
          "select-other-months": a(n).selectOtherMonths ?? !1,
          icon: a(n).icon,
          "show-icon": a(t).showIcon,
          "previous-icon": a(n).previousIcon ?? "pi pi-chevron-left",
          "next-icon": a(n).nextIcon ?? "pi pi-chevron-right",
          "increment-icon": a(n).incrementIcon ?? "pi pi-chevron-up",
          "decrement-icon": a(n).decrementIcon ?? "pi pi-chevron-down",
          "number-of-months": a(n).numberOfMonths ?? 1,
          "responsive-options": a(n).responsiveOptions,
          view: a(n).view ?? "date",
          "touch-u-i": a(n).touchUI ?? !1,
          "min-date": a(n).minDate,
          "max-date": a(n).maxDate,
          "disabled-dates": a(n).disabledDates,
          "disabled-days": a(n).disabledDays,
          "max-date-count": a(n).maxDateCount,
          "show-on-focus": a(n).showOnFocus ?? !0,
          "auto-z-index": a(n).autoZIndex ?? !0,
          "base-z-index": a(n).baseZIndex ?? 0,
          "show-button-bar": a(n).showButtonBar ?? !1,
          "show-time": a(n).showTime ?? !1,
          "time-only": a(n).timeOnly ?? !1,
          "short-year-cutoff": a(n).shortYearCutoff ?? "+10",
          "hour-format": a(n).hourFormat ?? "24",
          "step-hour": a(n).stepHour ?? 1,
          "step-minute": a(n).stepMinute ?? 1,
          "step-second": a(n).stepSecond ?? 1,
          "show-seconds": a(n).showSeconds ?? !1,
          "hide-on-date-time-select": a(n).hideOnDateTimeSelect ?? !1,
          "hide-on-range-selection": a(n).hideOnRangeSelection ?? !1,
          "time-separator": a(n).timeSeparator ?? ":",
          "show-week": a(n).showWeek ?? !1,
          "manual-input": a(n).manualInput ?? !0,
          "append-to": a(n).appendTo ?? "body",
          "panel-style": a(n).panelStyle,
          "panel-class": a(n).panelClass,
          onDateSelect: r,
          onInput: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "date-format", "selection-mode", "inline", "show-other-months", "select-other-months", "icon", "show-icon", "previous-icon", "next-icon", "increment-icon", "decrement-icon", "number-of-months", "responsive-options", "view", "touch-u-i", "min-date", "max-date", "disabled-dates", "disabled-days", "max-date-count", "show-on-focus", "auto-z-index", "base-z-index", "show-button-bar", "show-time", "time-only", "short-year-cutoff", "hour-format", "step-hour", "step-minute", "step-second", "show-seconds", "hide-on-date-time-select", "hide-on-range-selection", "time-separator", "show-week", "manual-input", "append-to", "panel-style", "panel-class"])
      ]);
    };
  }
}), ql = {
  key: 0,
  class: "formkit-prime-left"
}, Nl = {
  key: 1,
  class: "formkit-prime-right"
}, Kl = /* @__PURE__ */ P({
  __name: "PrimeCheckbox",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("Checkbox");
      return A(), x("div", null, [
        a(t).attrs.labelLeft ? (A(), x("span", ql, be(a(t).attrs.labelLeft), 1)) : re("", !0),
        D(u, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(r),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          binary: a(n).binary ?? !0,
          "true-value": a(n).trueValue ?? void 0,
          "false-value": a(n).falseValue ?? void 0,
          onInput: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "binary", "true-value", "false-value"]),
        a(t).attrs.labelRight ? (A(), x("span", Nl, be(a(t).attrs.labelRight), 1)) : re("", !0)
      ]);
    };
  }
}), Hl = /* @__PURE__ */ P({
  __name: "PrimeChips",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("Chips");
      return A(), x("div", null, [
        D(u, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(r),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          "allow-duplicate": a(n).allowDuplicate ?? !0,
          "add-on-blur": a(n).addOnBlur ?? !1,
          max: a(n).max ?? void 0,
          placeholder: a(n).placeholder,
          separator: a(n).separator,
          onAdd: l,
          onRemove: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "allow-duplicate", "add-on-blur", "max", "placeholder", "separator"])
      ]);
    };
  }
}), Zl = /* @__PURE__ */ P({
  __name: "PrimeColorPicker",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(r) {
      var s;
      t == null || t.node.input((s = i.context) == null ? void 0 : s._value);
    }
    return (r, s) => {
      const o = T("ColorPicker");
      return A(), x("div", null, [
        D(o, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": s[0] || (s[0] = (u) => a(t)._value = u),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          style: fe(a(n).style),
          "panel-class": a(n).class,
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          "default-color": a(n).defaultColor ?? "ff0000",
          inline: a(n).inline ?? !1,
          format: a(n).format,
          onChange: l
        }, null, 8, ["modelValue", "disabled", "readonly", "style", "panel-class", "tabindex", "aria-label", "aria-labelledby", "default-color", "inline", "format"])
      ]);
    };
  }
}), Yl = /* @__PURE__ */ P({
  __name: "PrimeDropdown",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(o) {
      t == null || t.handlers.blur(o.value);
    }
    function r(o) {
      t == null || t.node.input(o.value);
    }
    const s = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (o, u) => {
      const b = T("Dropdown");
      return A(), x("div", null, [
        D(b, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => a(t)._value = h),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(s),
          "input-class": a(n).class,
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          options: a(n).options,
          "option-label": a(n).optionLabel ?? "label",
          "option-value": a(n).optionValue ?? "value",
          placeholder: a(n).placeholder,
          filter: a(n).filter ?? !1,
          "show-clear": a(n).showClear ?? !1,
          onChange: r,
          onBlur: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "options", "option-label", "option-value", "placeholder", "filter", "show-clear"])
      ]);
    };
  }
}), Jl = /* @__PURE__ */ P({
  __name: "PrimeEditor",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(o) {
      t == null || t.node.input(o.htmlValue);
    }
    function r(o) {
      o.range === null && (t == null || t.handlers.blur(o.htmlValue));
    }
    const s = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (o, u) => {
      const b = T("Editor");
      return A(), x("div", null, [
        D(b, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => a(t)._value = h),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "editor-style": a(n).style,
          class: q(a(s)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          placeholder: a(n).placeholder,
          formats: a(n).formats,
          modules: a(n).modules,
          onTextChange: l,
          onSelectionChange: r
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "editor-style", "class", "tabindex", "aria-label", "aria-labelledby", "placeholder", "formats", "modules"])
      ]);
    };
  }
}), Ql = /* @__PURE__ */ P({
  __name: "PrimeInputMask",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o, u;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value), t == null || t.handlers.blur((u = i.context) == null ? void 0 : u._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("InputMask");
      return A(), x("div", null, [
        D(u, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "editor-style": a(n).style,
          class: q(a(r)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          placeholder: a(n).placeholder,
          mask: a(n).mask ?? void 0,
          "slot-char": a(n).slotChar ?? "_",
          "auto-clear": a(n).autoClear ?? !0,
          unmask: a(n).unmask ?? !1,
          onBlur: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "editor-style", "class", "tabindex", "aria-label", "aria-labelledby", "placeholder", "mask", "slot-char", "auto-clear", "unmask"])
      ]);
    };
  }
}), Gl = /* @__PURE__ */ P({
  __name: "PrimeInputNumber",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(o) {
      t == null || t.handlers.blur(o.value);
    }
    function r(o) {
      t == null || t.node.input(o.value);
    }
    const s = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (o, u) => {
      const b = T("InputNumber");
      return A(), x("div", null, [
        D(b, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => a(t)._value = h),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(s),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          placeholder: a(n).placeholder,
          "use-grouping": a(n).useGrouping ?? !0,
          "min-fraction-digits": a(n).minFractionDigits ?? void 0,
          "max-fraction-digits": a(n).maxFractionDigits ?? void 0,
          locale: a(n).locale ?? void 0,
          mode: a(n).mode ?? void 0,
          currency: a(n).currency ?? void 0,
          prefix: a(n).prefix ?? void 0,
          suffix: a(n).suffix ?? void 0,
          "show-buttons": a(n).showButtons ?? void 0,
          "button-layout": a(n).buttonLayout ?? "stacked",
          step: a(n).step ?? void 0,
          onInput: r,
          onBlur: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "placeholder", "use-grouping", "min-fraction-digits", "max-fraction-digits", "locale", "mode", "currency", "prefix", "suffix", "show-buttons", "button-layout", "step"])
      ]);
    };
  }
}), Xl = {
  key: 0,
  class: "formkit-prime-left"
}, ea = {
  key: 1,
  class: "formkit-prime-right"
}, ta = /* @__PURE__ */ P({
  __name: "PrimeInputSwitch",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("InputSwitch");
      return A(), x("div", null, [
        a(t).attrs.labelLeft ? (A(), x("span", Xl, be(a(t).attrs.labelLeft), 1)) : re("", !0),
        D(u, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(r),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          "true-value": a(n).trueValue ?? void 0,
          "false-value": a(n).falseValue ?? void 0,
          onInput: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "true-value", "false-value"]),
        a(t).attrs.labelRight ? (A(), x("span", ea, be(a(t).attrs.labelRight), 1)) : re("", !0)
      ]);
    };
  }
}), na = /* @__PURE__ */ P({
  __name: "PrimeInputText",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l() {
      return (t == null ? void 0 : t.iconLeft) && (t == null ? void 0 : t.iconLeft.length) > 0;
    }
    function r() {
      return (t == null ? void 0 : t.iconRight) && (t == null ? void 0 : t.iconRight.length) > 0;
    }
    function s() {
      let h = "";
      return l() && (h = `${h}p-input-icon-left `), r() && (h = `${h}p-input-icon-right `), h;
    }
    function o(h) {
      t == null || t.handlers.blur(h.target.value);
    }
    function u(h) {
      t == null || t.node.input(h.target.value);
    }
    const b = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (h, _) => {
      const v = T("InputText");
      return A(), x("div", null, [
        kn("span", {
          class: q(s())
        }, [
          l() ? (A(), x("i", {
            key: 0,
            class: q(a(t).iconLeft)
          }, null, 2)) : re("", !0),
          D(v, {
            id: a(t).id,
            modelValue: a(t)._value,
            "onUpdate:modelValue": _[0] || (_[0] = (w) => a(t)._value = w),
            disabled: a(n)._disabled ?? !1,
            readonly: a(n)._readonly ?? !1,
            style: fe(a(n).style),
            class: q(a(b)),
            tabindex: a(n).tabindex,
            "aria-label": a(n).ariaLabel,
            "aria-labelledby": a(n).ariaLabelledby,
            placeholder: a(n).placeholder,
            onInput: u,
            onBlur: o
          }, null, 8, ["id", "modelValue", "disabled", "readonly", "style", "class", "tabindex", "aria-label", "aria-labelledby", "placeholder"]),
          r ? (A(), x("i", {
            key: 1,
            class: q(a(t).iconRight)
          }, null, 2)) : re("", !0)
        ], 2)
      ]);
    };
  }
}), ia = /* @__PURE__ */ P({
  __name: "PrimeTextarea",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(o) {
      t == null || t.handlers.blur(o.target.value);
    }
    function r(o) {
      t == null || t.node.input(o.target.value);
    }
    const s = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (o, u) => {
      const b = T("Textarea");
      return A(), x("div", null, [
        D(b, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => a(t)._value = h),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          style: fe(a(n).style),
          class: q(a(s)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          placeholder: a(n).placeholder,
          rows: a(t).rows ?? 3,
          onInput: r,
          onBlur: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "style", "class", "tabindex", "aria-label", "aria-labelledby", "placeholder", "rows"])
      ]);
    };
  }
}), la = /* @__PURE__ */ P({
  __name: "PrimeKnob",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(r) {
      t == null || t.node.input(r), t == null || t.handlers.blur(r);
    }
    return M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`), (r, s) => {
      const o = T("Knob");
      return A(), x("div", null, [
        D(o, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": s[0] || (s[0] = (u) => a(t)._value = u),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          style: fe(a(n).style),
          class: q(r.styleClasss),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          min: a(n).min ?? 0,
          max: a(n).max ?? 100,
          step: a(n).step ?? void 0,
          size: a(n).size ?? 100,
          "stroke-width": a(n).strokeWidth ?? 14,
          "show-value": a(n).showValue ?? !0,
          "value-color": a(n).valueColor ?? void 0,
          "range-color": a(n).rangeColor ?? void 0,
          "text-color": a(n).textColor ?? void 0,
          "value-template": a(n).valueTemplate ?? void 0,
          onChange: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "style", "class", "tabindex", "aria-label", "aria-labelledby", "min", "max", "step", "size", "stroke-width", "show-value", "value-color", "range-color", "text-color", "value-template"])
      ]);
    };
  }
}), aa = /* @__PURE__ */ P({
  __name: "PrimeMultiSelect",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("MultiSelect");
      return A(), x("div", null, [
        D(u, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "list-style": a(n).style,
          class: q(a(r)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          options: a(n).options,
          "option-label": a(n).optionLabel ?? "label",
          "option-value": a(n).optionValue ?? "value",
          filter: a(n).filter ?? !1,
          onChange: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "list-style", "class", "tabindex", "aria-label", "aria-labelledby", "options", "option-label", "option-value", "filter"])
      ]);
    };
  }
}), ra = /* @__PURE__ */ P({
  __name: "PrimeListbox",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      var b;
      const u = T("Listbox");
      return A(), x("div", null, [
        D(u, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (h) => a(t)._value = h),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "list-style": a(n).style,
          class: q(a(r)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          options: (b = a(n)) == null ? void 0 : b.options,
          "option-label": a(n).optionLabel ?? "label",
          "option-value": a(n).optionValue ?? "value",
          multiple: a(n).multiple ?? !1,
          filter: a(n).filter ?? !1,
          "filter-icon": a(n).filterIcon,
          "filter-placeholder": a(n).filterPlaceholder,
          "filter-locale": a(n).filterLocale,
          "filter-match-mode": a(n).filterMatchMode,
          "auto-option-focus": a(n).autoOptionFocus ?? !0,
          "select-on-focus": a(n).selectOnFocus ?? !1,
          onChange: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "list-style", "class", "tabindex", "aria-label", "aria-labelledby", "options", "option-label", "option-value", "multiple", "filter", "filter-icon", "filter-placeholder", "filter-locale", "filter-match-mode", "auto-option-focus", "select-on-focus"])
      ]);
    };
  }
}), sa = /* @__PURE__ */ P({
  __name: "PrimePassword",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(o) {
      t == null || t.handlers.blur(o.target.value);
    }
    function r(o) {
      t == null || t.node.input(o.target.value);
    }
    const s = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (o, u) => {
      const b = T("Password");
      return A(), x("div", null, [
        D(b, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": u[0] || (u[0] = (h) => a(t)._value = h),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(s),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          placeholder: a(n).placeholder,
          "medium-regex": a(n).mediumRegex ?? "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
          "strong-regex": a(n).strongRegex ?? "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
          "prompt-label": a(n).promptLabel,
          "weak-label": a(n).weakLabel,
          "medium-label": a(n).mediumLabel,
          "strong-label": a(n).strongLabel,
          "hide-icon": a(n).hideIcon ?? "pi pi-eye-slash",
          "show-icon": a(n).showIcon ?? "pi pi-eye",
          feedback: a(t).feedback ?? !1,
          "toggle-mask": a(t).toggleMask ?? !1,
          onInput: r,
          onBlur: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "placeholder", "medium-regex", "strong-regex", "prompt-label", "weak-label", "medium-label", "strong-label", "hide-icon", "show-icon", "feedback", "toggle-mask"])
      ]);
    };
  }
}), oa = /* @__PURE__ */ P({
  __name: "PrimeRating",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("Rating");
      return A(), x("div", null, [
        D(u, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          style: fe(a(n).style),
          class: q(a(r)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          stars: a(n).stars ?? 5,
          cancel: a(n).cancel ?? !1,
          "on-icon": a(n).onIcon ?? "pi pi-star-fill",
          "off-icon": a(n).offIcon ?? "pi pi-star",
          "cancel-icon": a(n).cancelIcon ?? "pi pi-ban",
          onChange: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "style", "class", "tabindex", "aria-label", "aria-labelledby", "stars", "cancel", "on-icon", "off-icon", "cancel-icon"])
      ]);
    };
  }
}), ua = /* @__PURE__ */ P({
  __name: "PrimeSlider",
  props: {
    context: Object
  },
  setup(e) {
    const t = e.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      t == null || t.node.input(s), t == null || t.handlers.blur(s);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("Slider");
      return A(), x("div", null, [
        D(u, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          style: fe(a(n).style),
          class: q(a(r)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          min: a(n).min ?? 0,
          max: a(n).max ?? 100,
          step: a(n).step ?? void 0,
          range: a(n).range ?? !1,
          orientation: a(n).orientation ?? "horizontal",
          onChange: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "style", "class", "tabindex", "aria-label", "aria-labelledby", "min", "max", "step", "range", "orientation"])
      ]);
    };
  }
}), fa = /* @__PURE__ */ P({
  __name: "PrimeToggleButton",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("ToggleButton");
      return A(), x("div", null, [
        D(u, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(r),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          "on-label": a(n).onLabel ?? "Yes",
          "off-label": a(n).offLabel ?? "No",
          "on-icon": a(n).onIcon ?? "pi pi-check",
          "off-icon": a(n).offIcon ?? "pi pi-times",
          "icon-pos": a(n).iconPos ?? "left",
          onChange: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby", "on-label", "off-label", "on-icon", "off-icon", "icon-pos"])
      ]);
    };
  }
}), ca = /* @__PURE__ */ P({
  __name: "PrimeSelectButton",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("SelectButton");
      return A(), x("div", null, [
        D(u, {
          id: a(t).id,
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          style: fe(a(n).style),
          class: q(a(r)),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          options: a(n).options,
          "option-label": a(n).optionLabel ?? "label",
          "option-value": a(n).optionValue ?? "value",
          "option-disabled": a(n).optionDisabled,
          multiple: a(n).multiple ?? !1,
          unselectable: a(n).unselectable ?? !0,
          "data-key": a(n).dataKey,
          onChange: l
        }, null, 8, ["id", "modelValue", "disabled", "readonly", "style", "class", "tabindex", "aria-label", "aria-labelledby", "options", "option-label", "option-value", "option-disabled", "multiple", "unselectable", "data-key"])
      ]);
    };
  }
}), pa = {
  key: 0,
  class: "formkit-prime-left"
}, da = {
  key: 1,
  class: "formkit-prime-right"
}, ma = /* @__PURE__ */ P({
  __name: "PrimeTriStateCheckbox",
  props: {
    context: Object
  },
  setup(e) {
    const i = e, t = i.context, n = t == null ? void 0 : t.attrs;
    function l(s) {
      var o;
      t == null || t.node.input((o = i.context) == null ? void 0 : o._value);
    }
    const r = M(() => t != null && t.state.valid && !(t != null && t.state.dirty) ? n == null ? void 0 : n.class : `${n == null ? void 0 : n.class} p-invalid`);
    return (s, o) => {
      const u = T("TriStateCheckbox");
      return A(), x("div", null, [
        a(t).attrs.labelLeft ? (A(), x("span", pa, be(a(t).attrs.labelLeft), 1)) : re("", !0),
        D(u, {
          modelValue: a(t)._value,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => a(t)._value = b),
          "input-id": a(t).id,
          disabled: a(n)._disabled ?? !1,
          readonly: a(n)._readonly ?? !1,
          "input-style": a(n).style,
          "input-class": a(r),
          tabindex: a(n).tabindex,
          "aria-label": a(n).ariaLabel,
          "aria-labelledby": a(n).ariaLabelledby,
          onClick: l
        }, null, 8, ["modelValue", "input-id", "disabled", "readonly", "input-style", "input-class", "tabindex", "aria-label", "aria-labelledby"]),
        a(t).attrs.labelRight ? (A(), x("span", da, be(a(t).attrs.labelRight), 1)) : re("", !0)
      ]);
    };
  }
}), ba = B(na, {
  props: ["iconRight", "iconLeft"]
}), ya = B(Gl, {
  props: ["iconRight", "iconLeft"]
}), va = B(Ql, {
  props: []
}), ha = B(sa, {
  props: ["feedback", "toggleMask"]
}), _a = B(ia, {
  props: ["rows"]
}), ga = B(Kl, {
  props: []
}), $a = B(ta, {
  props: []
}), wa = B(Jl, {
  props: []
}), ka = B(Yl, {
  props: []
}), Ca = B(aa, {
  props: []
}), Sa = B(ra, {
  props: []
}), Ia = B(Ul, {
  props: []
}), Va = B(ua, {
  props: []
}), La = B(oa, {
  props: []
}), Oa = B(Hl, {
  props: []
}), Aa = B(la, {
  props: []
}), xa = B(Zl, {
  props: []
}), Pa = B(fa, {
  props: []
}), Ea = B(ca, {
  props: []
}), Ma = B(ma, {
  props: []
}), ja = {
  primeInputText: ba,
  primeInputNumber: ya,
  primeInputMask: va,
  primePassword: ha,
  primeCheckbox: ga,
  primeInputSwitch: $a,
  primeTextarea: _a,
  primeEditor: wa,
  primeDropdown: ka,
  primeMultiSelect: Ca,
  primeCalendar: Ia,
  primeSlider: Va,
  primeChips: Oa,
  primeKnob: Aa,
  primeRating: La,
  primeColorPicker: xa,
  primeToggleButton: Pa,
  primeListbox: Sa,
  primeSelectButton: Ea,
  primeTriStateCheckbox: Ma
};
export {
  Ia as primeCalendarDefinition,
  ga as primeCheckboxDefinition,
  Oa as primeChipsDefinition,
  xa as primeColorPickerDefinition,
  ka as primeDropdownDefinition,
  wa as primeEditorDefinition,
  va as primeInputMaskDefinition,
  ya as primeInputNumberDefinition,
  $a as primeInputSwitchDefinition,
  ba as primeInputTextDefinition,
  ja as primeInputs,
  Aa as primeKnobDefinition,
  Sa as primeListboxDefinition,
  Ca as primeMultiSelectDefinition,
  ha as primePasswordDefinition,
  La as primeRatingDefinition,
  Ea as primeSelectButtonDefinition,
  Va as primeSliderDefinition,
  _a as primeTextareaDefinition,
  Pa as primeToggleButtonDefinition,
  Ma as primeTriStateCheckboxDefinition
};
