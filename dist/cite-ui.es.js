import { jsx as e, Fragment as I, jsxs as c } from "react/jsx-runtime";
import { useState as v, useEffect as L, useCallback as S, useRef as T, createContext as re, useContext as ae, createElement as le } from "react";
const se = {
  x: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  check: /* @__PURE__ */ e("path", { d: "M5 13l4 4L19 7" }),
  chevronDown: /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  chevronUp: /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  chevronLeft: /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  chevronRight: /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  menu: /* @__PURE__ */ e(I, { children: /* @__PURE__ */ e("path", { d: "M4 6h16M4 12h16M4 18h16" }) }),
  cart: /* @__PURE__ */ e("path", { d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" }),
  alertCircle: /* @__PURE__ */ e("path", { d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }),
  info: /* @__PURE__ */ e("path", { d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }),
  alertTriangle: /* @__PURE__ */ e("path", { d: "M12 9v2m0 4h.01M10.29 3.86l-8.57 14.29c-.57.95.14 2.14 1.14 2.14h17.14c1 0 1.71-1.19 1.14-2.14L13.71 3.86c-.56-.95-1.86-.95-2.42 0z" }),
  search: /* @__PURE__ */ e("path", { d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }),
  user: /* @__PURE__ */ e("path", { d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" }),
  mail: /* @__PURE__ */ e("path", { d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }),
  phone: /* @__PURE__ */ e("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" }),
  mapPin: /* @__PURE__ */ e("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM13 10a2 2 0 11-4 0 2 2 0 014 0z" }),
  star: /* @__PURE__ */ e("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }),
  heart: /* @__PURE__ */ e("path", { d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" }),
  arrowRight: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  arrowLeft: /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  arrowUp: /* @__PURE__ */ e("path", { d: "M12 19V5M5 12l7-7 7 7" }),
  arrowDown: /* @__PURE__ */ e("path", { d: "M12 5v14M19 12l-7 7-7-7" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  image: /* @__PURE__ */ e("path", { d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }),
  externalLink: /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }),
  globe: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }),
  clock: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" }),
  trash: /* @__PURE__ */ e("path", { d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V4a1 1 0 011-1h6a1 1 0 011 1v3" }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  settings: /* @__PURE__ */ e("path", { d: "M12 15a3 3 0 100-6 3 3 0 000 6zm9-3a9 9 0 11-18 0 9 9 0 0118 0z" }),
  edit: /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" }),
  share: /* @__PURE__ */ e("path", { d: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" }),
  sun: /* @__PURE__ */ e("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z" }),
  moon: /* @__PURE__ */ e("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" }),
  eye: /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z" }),
  eyeOff: /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24M1 1l22 22" }),
  copy: /* @__PURE__ */ e("path", { d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }),
  link: /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" }),
  refreshCw: /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" }),
  filter: /* @__PURE__ */ e("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }),
  slash: /* @__PURE__ */ e("path", { d: "M4.34 4.34L19.66 19.66" }),
  messageCircle: /* @__PURE__ */ e("path", { d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" }),
  package: /* @__PURE__ */ e("path", { d: "M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" })
}, u = ({ name: t, size: r = 20, strokeWidth: l = 1.5, className: s = "" }) => {
  const a = se[t];
  return a ? /* @__PURE__ */ e(
    "svg",
    {
      className: s,
      width: r,
      height: r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: l,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: a
    }
  ) : null;
}, Ee = ({
  logo: t,
  links: r = [],
  ctaLabel: l,
  ctaHref: s,
  ctaVariant: a = "primary",
  variant: i = "default",
  cartCount: d = 0,
  onCartClick: n,
  whatsapp: o,
  className: g = ""
}) => {
  const [m, x] = v(!1), [h, b] = v(!1), y = i === "glass", p = i === "transparent";
  L(() => {
    const $ = () => b(window.scrollY > 10);
    return window.addEventListener("scroll", $, { passive: !0 }), () => window.removeEventListener("scroll", $);
  }, []);
  const f = y ? {
    background: h ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: h ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent"
  } : {}, k = p ? {
    background: h ? "rgba(255,255,255,0.95)" : "transparent",
    borderBottom: h ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent"
  } : {}, A = p && !h ? "text-white" : "text-gray-900 dark:text-white", w = p && !h ? "text-white/80 hover:text-white" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white", z = y || p ? "" : h ? "bg-white/95 backdrop-blur-sm border-b border-gray-200" : "bg-white border-b border-gray-200", N = /* @__PURE__ */ e(I, { children: r.map(($, j) => /* @__PURE__ */ e("a", { href: $.href, className: `text-sm transition-colors whitespace-nowrap ${w}`, children: $.label }, j)) });
  return /* @__PURE__ */ c("nav", { className: `sticky top-0 z-50 transition-all duration-300 ${z} ${g}`, style: { ...f, ...k }, children: [
    /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ c("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ e("div", { className: `flex-shrink-0 text-xl font-bold tracking-tight transition-colors ${A}`, children: t }),
      /* @__PURE__ */ e("div", { className: "hidden md:flex items-center gap-8", children: N }),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
        n && /* @__PURE__ */ c("button", { onClick: n, className: `relative p-2 transition-colors ${w}`, "aria-label": "Cart", children: [
          /* @__PURE__ */ e(u, { name: "cart", size: 20 }),
          d > 0 && /* @__PURE__ */ e("span", { className: "absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-medium min-w-[18px] min-h-[18px] text-xs", children: d > 99 ? "99+" : d })
        ] }),
        o && /* @__PURE__ */ c(
          "a",
          {
            href: `https://wa.me/${o}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `hidden md:flex items-center gap-1.5 text-sm transition-colors ${w}`,
            children: [
              /* @__PURE__ */ e(u, { name: "messageCircle", size: 16 }),
              /* @__PURE__ */ e("span", { children: "WhatsApp" })
            ]
          }
        ),
        l && s && /* @__PURE__ */ e("a", { href: s, className: `hidden md:inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 ${a === "primary" ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200" : "border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"} text-sm px-4 py-2`, children: l }),
        /* @__PURE__ */ e("button", { onClick: () => x(!m), className: `md:hidden p-2 rounded-lg transition-colors ${w} hover:bg-white/10`, "aria-label": "Toggle menu", children: /* @__PURE__ */ e(u, { name: m ? "x" : "menu", size: 20 }) })
      ] })
    ] }) }),
    m && /* @__PURE__ */ c("div", { className: "md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2", children: [
      r.map(($, j) => /* @__PURE__ */ e("a", { href: $.href, className: "block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors", children: $.label }, j)),
      o && /* @__PURE__ */ c("a", { href: `https://wa.me/${o}`, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-3 py-2 text-sm text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors", children: [
        /* @__PURE__ */ e(u, { name: "messageCircle", size: 16 }),
        "WhatsApp"
      ] }),
      l && s && /* @__PURE__ */ e("a", { href: s, className: "block text-center bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mt-2", children: l })
    ] })
  ] });
}, B = {
  primary: "bg-black text-white shadow-sm hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 rounded-lg",
  secondary: "bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100 active:scale-[0.98] transition-all duration-150 rounded-lg",
  outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white active:scale-[0.98] transition-all duration-150 rounded-lg",
  ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-gray-100 active:scale-[0.98] transition-all duration-150 rounded-lg",
  danger: "bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-[0.98] transition-all duration-150 rounded-lg",
  whatsapp: "bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5d] active:scale-[0.98] transition-all duration-150 rounded-lg"
}, W = {
  xs: "text-xs px-3 py-1.5 gap-1.5",
  sm: "text-sm px-4 py-2 gap-2",
  md: "text-base px-5 py-2.5 gap-2",
  lg: "text-lg px-6 py-3 gap-2.5",
  xl: "text-xl px-8 py-4 gap-3"
}, ne = () => /* @__PURE__ */ c("svg", { className: "animate-spin", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", opacity: "0.25" }),
  /* @__PURE__ */ e("path", { d: "M12 2a10 10 0 019.95 9", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round" })
] }), C = ({
  variant: t = "primary",
  size: r = "md",
  label: l,
  onClick: s,
  type: a = "button",
  disabled: i = !1,
  loading: d = !1,
  icon: n,
  iconPosition: o = "left",
  href: g,
  className: m = "",
  children: x
}) => {
  const h = `inline-flex items-center justify-center font-medium ${B[t] || B.primary} ${W[r] || W.md} ${i || d ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"} ${m}`, b = /* @__PURE__ */ c(I, { children: [
    d ? /* @__PURE__ */ e(ne, {}) : n && o === "left" ? typeof n == "string" ? /* @__PURE__ */ e(u, { name: n, size: r === "xs" ? 14 : r === "sm" ? 16 : r === "lg" ? 20 : 18 }) : n : null,
    (l || x) && /* @__PURE__ */ e("span", { children: l || x }),
    !d && n && o === "right" ? typeof n == "string" ? /* @__PURE__ */ e(u, { name: n, size: r === "xs" ? 14 : r === "sm" ? 16 : r === "lg" ? 20 : 18 }) : n : null
  ] });
  return g ? /* @__PURE__ */ e("a", { href: g, className: h, children: b }) : /* @__PURE__ */ e("button", { type: a, onClick: s, disabled: i || d, className: h, children: b });
}, ie = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6"
}, Ae = ({ images: t = [], columns: r = 3, gap: l = 4, lightbox: s = !0 }) => {
  const [a, i] = v(null), d = S(() => i(null), []);
  return L(() => {
    if (!a) return;
    const n = (o) => {
      o.key === "Escape" && d();
    };
    return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", n), document.body.style.overflow = "";
    };
  }, [a, d]), /* @__PURE__ */ c(I, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `grid grid-cols-1 sm:grid-cols-2 ${ie[Math.min(r, 6)] || ""}`,
        style: { gap: `${Math.max(l, 0) * 0.25}rem` },
        children: t.map((n, o) => /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-lg", children: /* @__PURE__ */ e(
          "img",
          {
            src: n.src,
            alt: n.alt,
            loading: "lazy",
            className: "w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300",
            onClick: () => s && i(n)
          }
        ) }, o))
      }
    ),
    a && s && /* @__PURE__ */ c(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
        onClick: d,
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none p-2 z-10",
              onClick: d,
              "aria-label": "Close lightbox",
              children: "×"
            }
          ),
          /* @__PURE__ */ e(
            "img",
            {
              src: a.src,
              alt: a.alt,
              className: "max-w-[90vw] max-h-[90vh] object-contain rounded-lg",
              onClick: (n) => n.stopPropagation()
            }
          )
        ]
      }
    )
  ] });
}, Ie = ({
  phoneNumber: t,
  message: r = "Hello, I would like to inquire about your services.",
  bottom: l = "24px",
  right: s = "24px",
  showTooltip: a = !0,
  tooltipText: i = "Chat with us",
  bounce: d = !0
}) => {
  const n = `https://wa.me/${t}?text=${encodeURIComponent(r)}`;
  return /* @__PURE__ */ c(I, { children: [
    /* @__PURE__ */ e("style", { children: `
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
        }
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .wa-btn {
          animation: wa-pulse 2s infinite${d ? ", wa-bounce 2s ease-in-out infinite" : ""};
        }
      ` }),
    /* @__PURE__ */ c(
      "div",
      {
        style: {
          position: "fixed",
          bottom: l,
          right: s,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 8
        },
        children: [
          a && /* @__PURE__ */ c(
            "div",
            {
              style: {
                background: "white",
                color: "#1f2937",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 500,
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                whiteSpace: "nowrap",
                position: "relative",
                opacity: 0,
                animation: "wa-tooltip-in 0.3s ease 0.5s forwards"
              },
              children: [
                i,
                /* @__PURE__ */ e(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      bottom: -5,
                      right: 20,
                      width: 10,
                      height: 10,
                      background: "white",
                      transform: "rotate(45deg)",
                      borderRadius: 2
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: n,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "wa-btn",
              style: {
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(37, 211, 102, 0.35)",
                transition: "transform 0.2s, box-shadow 0.2s"
              },
              onMouseEnter: (o) => {
                o.currentTarget.style.transform = "scale(1.08)", o.currentTarget.style.boxShadow = "0 6px 24px rgba(37, 211, 102, 0.5)";
              },
              onMouseLeave: (o) => {
                o.currentTarget.style.transform = "scale(1)", o.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 211, 102, 0.35)";
              },
              children: /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", fill: "white", width: 28, height: 28, children: /* @__PURE__ */ e("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) })
            }
          )
        ]
      }
    )
  ] });
}, oe = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  full: "max-w-[90vw]"
}, Fe = ({
  isOpen: t,
  onClose: r,
  title: l,
  children: s,
  footer: a,
  size: i = "md",
  closeOnOverlay: d = !0,
  showClose: n = !0
}) => {
  const o = T(null);
  return L(() => {
    if (!t) return;
    const g = (m) => {
      m.key === "Escape" && r();
    };
    return document.addEventListener("keydown", g), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    };
  }, [t, r]), t ? /* @__PURE__ */ c(
    "div",
    {
      ref: o,
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      onClick: (g) => {
        d && g.target === o.current && r();
      },
      children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm" }),
        /* @__PURE__ */ c(
          "div",
          {
            className: `relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full ${oe[i]} max-h-[85vh] flex flex-col animate-[fadeScaleIn_0.2s_ease-out]`,
            onClick: (g) => g.stopPropagation(),
            children: [
              n && /* @__PURE__ */ e(
                "button",
                {
                  onClick: r,
                  className: "absolute top-4 right-4 z-10 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ e(u, { name: "x", size: 18 })
                }
              ),
              l && /* @__PURE__ */ e("div", { className: "flex-shrink-0 px-6 pt-6 pb-0", children: /* @__PURE__ */ e("h2", { className: "text-lg font-bold text-gray-900 dark:text-white", children: l }) }),
              s && /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-6 py-6", children: s }),
              a && /* @__PURE__ */ e("div", { className: "flex-shrink-0 px-6 pb-6 pt-0", children: a })
            ]
          }
        )
      ]
    }
  ) : null;
}, te = re(null), de = {
  success: /* @__PURE__ */ e(u, { name: "check", size: 18, className: "text-emerald-500" }),
  error: /* @__PURE__ */ e(u, { name: "x", size: 18, className: "text-red-500" }),
  warning: /* @__PURE__ */ e(u, { name: "alertTriangle", size: 18, className: "text-amber-500" }),
  info: /* @__PURE__ */ e(u, { name: "info", size: 18, className: "text-blue-500" })
}, ce = {
  success: "border-l-emerald-500",
  error: "border-l-red-500",
  warning: "border-l-amber-500",
  info: "border-l-blue-500"
}, ge = {
  "top-right": "top-5 right-5 items-end",
  "top-left": "top-5 left-5 items-start",
  "top-center": "top-5 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-5 right-5 items-end",
  "bottom-left": "bottom-5 left-5 items-start",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2 items-center"
}, me = {
  success: 4e3,
  error: 6e3,
  warning: 4e3,
  info: 4e3
};
let he = 0;
const De = () => {
  const t = ae(te);
  if (!t) throw new Error("useToast must be used within a ToastProvider");
  return t;
}, _e = ({ children: t, position: r = "top-right" }) => {
  const [l, s] = v([]), a = T({}), i = r.startsWith("top"), d = S((g) => {
    s((m) => m.filter((x) => x.id !== g)), a.current[g] && (clearTimeout(a.current[g]), delete a.current[g]);
  }, []), n = S((g, m, x = {}) => {
    const h = ++he, b = x.duration ?? me[g];
    return s(
      (y) => i ? [...y, { id: h, type: g, message: m }] : [{ id: h, type: g, message: m }, ...y]
    ), b !== 1 / 0 && (a.current[h] = setTimeout(() => d(h), b)), h;
  }, [d, i]), o = {
    success: (g, m) => n("success", g, m),
    error: (g, m) => n("error", g, m),
    warning: (g, m) => n("warning", g, m),
    info: (g, m) => n("info", g, m),
    promise: (g, { loading: m, success: x, error: h }) => {
      const b = n("info", m, { duration: 1 / 0 });
      g.then((y) => {
        d(b), o.success(typeof x == "function" ? x(y) : x);
      }).catch((y) => {
        d(b), o.error(typeof h == "function" ? h(y) : h);
      });
    }
  };
  return /* @__PURE__ */ c(te.Provider, { value: { toast: o, dismiss: d }, children: [
    t,
    /* @__PURE__ */ e("div", { className: `fixed z-[9999] flex flex-col gap-2 max-w-sm ${ge[r]}`, children: l.map((g) => /* @__PURE__ */ c(
      "div",
      {
        className: `flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 border-l-4 ${ce[g.type]} p-4 animate-[slideIn_0.25s_ease-out]`,
        children: [
          /* @__PURE__ */ e("span", { className: "flex-shrink-0 mt-0.5", children: de[g.type] }),
          /* @__PURE__ */ e("p", { className: "flex-1 text-sm text-gray-800 dark:text-gray-200", children: g.message }),
          /* @__PURE__ */ e("button", { onClick: () => d(g.id), className: "flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors", children: /* @__PURE__ */ e(u, { name: "x", size: 14 }) })
        ]
      },
      g.id
    )) })
  ] });
}, M = ({ children: t, as: r = "div", maxWidth: l = "7xl", className: s = "", padding: a = !0 }) => {
  const i = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
    "7xl": "max-w-7xl"
  };
  return /* @__PURE__ */ e(r, { className: `mx-auto ${i[l] || i["7xl"]} ${a ? "px-4 sm:px-6 lg:px-8" : ""} ${s}`, children: t });
}, Ve = ({ children: t, direction: r = "vertical", gap: l = 4, align: s, justify: a, className: i = "", as: d = "div", wrap: n = !1 }) => {
  const o = r === "horizontal" ? "flex-row" : "flex-col", m = { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 5: "gap-5", 6: "gap-6", 8: "gap-8", 10: "gap-10", 12: "gap-12", 16: "gap-16" }[l] || `gap-${l}`, x = s ? `items-${s}` : "", h = a ? `justify-${a}` : "";
  return /* @__PURE__ */ e(d, { className: `flex ${o} ${m} ${x} ${h} ${n ? "flex-wrap" : ""} ${i}`, children: t });
}, Pe = ({ children: t, columns: r = { default: 1, sm: 2, lg: 3 }, gap: l = 6, className: s = "" }) => {
  const a = typeof r == "number" ? { default: r } : r, i = [
    a.default && `grid-cols-${a.default}`,
    a.sm && `sm:grid-cols-${a.sm}`,
    a.md && `md:grid-cols-${a.md}`,
    a.lg && `lg:grid-cols-${a.lg}`,
    a.xl && `xl:grid-cols-${a.xl}`
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: `grid ${i} gap-${l} ${s}`, children: t });
}, Re = ({ children: t, as: r = "section", padding: l = "lg", bg: s, className: a = "", id: i }) => {
  const d = {
    none: "py-0",
    sm: "py-8",
    md: "py-12 lg:py-16",
    lg: "py-16 lg:py-24",
    xl: "py-20 lg:py-32"
  };
  return /* @__PURE__ */ e(r, { id: i, className: `${d[l] || d.lg} ${s || ""} ${a}`, children: t });
}, Be = ({ orientation: t = "horizontal", label: r, className: l = "" }) => t === "vertical" ? /* @__PURE__ */ e("div", { className: `w-px bg-gray-200 dark:bg-gray-700 self-stretch ${l}` }) : r ? /* @__PURE__ */ c("div", { className: `flex items-center gap-4 ${l}`, children: [
  /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-700" }),
  /* @__PURE__ */ e("span", { className: "text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap", children: r }),
  /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-700" })
] }) : /* @__PURE__ */ e("hr", { className: `border-t border-gray-200 dark:border-gray-700 ${l}` }), xe = {
  elevated: "bg-white dark:bg-gray-900 shadow-md hover:shadow-lg",
  outlined: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
  flat: "bg-gray-50 dark:bg-gray-800/50",
  bordered: "bg-white dark:bg-gray-900 border-l-4 border-black dark:border-white"
}, be = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
}, pe = ({
  variant: t = "elevated",
  padding: r = "md",
  className: l = "",
  children: s,
  onClick: a,
  href: i,
  hover: d = !1
}) => {
  const m = `${`rounded-xl transition-all duration-200 ${xe[t]} ${be[r]}`} ${a || i ? "cursor-pointer" : ""} ${d ? "hover:-translate-y-0.5" : ""} ${l}`;
  return i ? /* @__PURE__ */ e("a", { href: i, className: m, children: s }) : a ? /* @__PURE__ */ e("button", { type: "button", onClick: a, className: `${m} text-left w-full`, children: s }) : /* @__PURE__ */ e("div", { className: m, children: s });
}, H = {
  gray: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  black: "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
}, O = {
  sm: "text-[10px] px-1.5 py-0.5",
  md: "text-xs px-2 py-0.5",
  lg: "text-sm px-2.5 py-1"
}, We = ({ children: t, color: r = "gray", size: l = "md", className: s = "" }) => /* @__PURE__ */ e("span", { className: `inline-flex items-center font-medium rounded-full ${H[r] || H.gray} ${O[l] || O.md} ${s}`, children: t }), q = {
  gray: "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
  blue: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
  green: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
  red: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
  amber: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
}, He = ({ children: t, color: r = "gray", onRemove: l, onClick: s, className: a = "", size: i = "md" }) => {
  const d = i === "sm" ? "text-xs px-2 py-0.5 gap-1" : "text-sm px-3 py-1 gap-1.5", n = s ? "cursor-pointer" : "";
  return /* @__PURE__ */ c("span", { className: `inline-flex items-center border rounded-full transition-colors ${q[r] || q.gray} ${d} ${n} ${a}`, onClick: s, children: [
    t,
    l && /* @__PURE__ */ e("button", { onClick: (o) => {
      o.stopPropagation(), l();
    }, className: "ml-0.5 hover:opacity-70", "aria-label": "Remove", children: /* @__PURE__ */ e(u, { name: "x", size: 12, strokeWidth: 2 }) })
  ] });
}, U = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
  "2xl": "w-20 h-20 text-xl"
}, G = ({ src: t, alt: r, name: l, size: s = "md", color: a = "gray", className: i = "" }) => {
  const d = l ? l.split(" ").map((o) => o[0]).join("").toUpperCase().slice(0, 2) : "", n = {
    gray: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
    green: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300",
    red: "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
    amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300"
  };
  return t ? /* @__PURE__ */ e(
    "img",
    {
      src: t,
      alt: r || l || "Avatar",
      className: `rounded-full object-cover ${U[s]} ${i}`
    }
  ) : /* @__PURE__ */ e("div", { className: `rounded-full inline-flex items-center justify-center font-semibold ${U[s]} ${n[a] || n.gray} ${i}`, children: d || /* @__PURE__ */ e(u, { name: "user", size: s === "xs" ? 10 : s === "sm" ? 14 : s === "lg" ? 20 : 16 }) });
}, ue = {
  info: {
    container: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
    icon: "text-blue-500",
    title: "text-blue-800 dark:text-blue-200",
    message: "text-blue-700 dark:text-blue-300",
    close: "text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
  },
  success: {
    container: "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800",
    icon: "text-emerald-500",
    title: "text-emerald-800 dark:text-emerald-200",
    message: "text-emerald-700 dark:text-emerald-300",
    close: "text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-200"
  },
  warning: {
    container: "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800",
    icon: "text-amber-500",
    title: "text-amber-800 dark:text-amber-200",
    message: "text-amber-700 dark:text-amber-300",
    close: "text-amber-400 hover:text-amber-600 dark:hover:text-amber-200"
  },
  error: {
    container: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
    icon: "text-red-500",
    title: "text-red-800 dark:text-red-200",
    message: "text-red-700 dark:text-red-300",
    close: "text-red-400 hover:text-red-600 dark:hover:text-red-200"
  }
}, ye = {
  info: "info",
  success: "check",
  warning: "alertTriangle",
  error: "alertCircle"
}, Oe = ({ type: t = "info", title: r, message: l, children: s, dismissible: a = !1, onClose: i, className: d = "" }) => {
  const [n, o] = v(!1);
  if (n) return null;
  const g = ue[t], m = () => {
    o(!0), i == null || i();
  };
  return /* @__PURE__ */ c("div", { className: `flex items-start gap-3 border rounded-xl p-4 ${g.container} ${d}`, children: [
    /* @__PURE__ */ e("span", { className: `flex-shrink-0 mt-0.5 ${g.icon}`, children: /* @__PURE__ */ e(u, { name: ye[t], size: 18 }) }),
    /* @__PURE__ */ c("div", { className: "flex-1 min-w-0", children: [
      r && /* @__PURE__ */ e("p", { className: `text-sm font-semibold ${g.title}`, children: r }),
      l && /* @__PURE__ */ e("p", { className: `text-sm ${g.message} ${r ? "mt-1" : ""}`, children: l }),
      s
    ] }),
    a && /* @__PURE__ */ e("button", { onClick: m, className: `flex-shrink-0 ${g.close}`, "aria-label": "Dismiss", children: /* @__PURE__ */ e(u, { name: "x", size: 16 }) })
  ] });
}, K = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10"
}, qe = ({ size: t = "md", color: r = "currentColor", className: l = "" }) => /* @__PURE__ */ c(
  "svg",
  {
    className: `animate-spin ${K[t] || K.md} ${l}`,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10", stroke: r, strokeWidth: "4", opacity: "0.15" }),
      /* @__PURE__ */ e("path", { d: "M12 2a10 10 0 019.95 9", stroke: r, strokeWidth: "4", strokeLinecap: "round" })
    ]
  }
), E = ({ variant: t = "text", width: r, height: l, rounded: s = "md", className: a = "" }) => {
  const i = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full"
  }, d = `animate-pulse bg-gray-200 dark:bg-gray-700 ${i[s] || i.md}`, n = {
    text: "h-4 w-full",
    title: "h-6 w-3/4",
    avatar: "h-10 w-10 rounded-full",
    button: "h-10 w-24 rounded-lg",
    image: "h-48 w-full rounded-lg",
    card: "h-64 w-full rounded-xl",
    circle: "h-10 w-10 rounded-full"
  }, o = n[t] || n.text;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `${d} ${o} ${a}`,
      style: { width: r, height: l },
      "aria-hidden": "true"
    }
  );
}, Ue = ({ count: t = 3, variant: r = "text", direction: l = "vertical", gap: s = 3, className: a = "" }) => /* @__PURE__ */ e("div", { className: `flex ${l === "horizontal" ? "flex-row" : "flex-col"} gap-${s} ${a}`, "aria-label": "Loading", children: Array.from({ length: t }, (d, n) => /* @__PURE__ */ e(E, { variant: r }, n)) }), Y = {
  black: "bg-black dark:bg-white",
  blue: "bg-blue-500",
  green: "bg-emerald-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  purple: "bg-purple-500"
}, Ge = ({ value: t = 0, max: r = 100, color: l = "black", size: s = "md", showLabel: a = !1, className: i = "" }) => {
  const d = Math.min(Math.max(t / r * 100, 0), 100), n = { sm: "h-1", md: "h-2", lg: "h-3", xl: "h-4" };
  return /* @__PURE__ */ c("div", { className: `flex items-center gap-3 ${i}`, children: [
    /* @__PURE__ */ e("div", { className: `flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${n[s] || n.md}`, children: /* @__PURE__ */ e(
      "div",
      {
        className: `${Y[l] || Y.black} h-full rounded-full transition-all duration-500 ease-out`,
        style: { width: `${d}%` }
      }
    ) }),
    a && /* @__PURE__ */ c("span", { className: "text-xs font-medium text-gray-500 dark:text-gray-400 tabular-nums", children: [
      Math.round(d),
      "%"
    ] })
  ] });
}, Ke = ({ icon: t = "inbox", title: r, message: l, actionLabel: s, onAction: a, className: i = "" }) => /* @__PURE__ */ c("div", { className: `flex flex-col items-center justify-center text-center py-12 px-6 ${i}`, children: [
  /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4", children: /* @__PURE__ */ e(u, { name: t, size: 24, className: "text-gray-400" }) }),
  r && /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-gray-900 dark:text-white mb-1", children: r }),
  l && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 max-w-xs", children: l }),
  s && a && /* @__PURE__ */ e(C, { variant: "primary", size: "sm", label: s, onClick: a, className: "mt-4" })
] }), fe = ({
  label: t,
  name: r,
  type: l = "text",
  value: s,
  onChange: a,
  onBlur: i,
  placeholder: d,
  error: n,
  helperText: o,
  icon: g,
  clearable: m = !1,
  disabled: x = !1,
  required: h = !1,
  className: b = "",
  ...y
}) => {
  const [p, f] = v(!1), [k, A] = v(!1), w = l === "password";
  return /* @__PURE__ */ c("div", { className: b, children: [
    t && /* @__PURE__ */ c("label", { htmlFor: r, className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5", children: [
      t,
      h && /* @__PURE__ */ e("span", { className: "text-red-500 ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ c("div", { className: `relative flex items-center border rounded-lg transition-all duration-150 ${n ? "border-red-400" : p ? "border-black dark:border-white" : "border-gray-300 dark:border-gray-600"} ${x ? "bg-gray-50 dark:bg-gray-800 opacity-60" : "bg-white dark:bg-gray-900"}`, children: [
      g && /* @__PURE__ */ e("span", { className: "absolute left-3 text-gray-400 pointer-events-none", children: typeof g == "string" ? /* @__PURE__ */ e(u, { name: g, size: 16 }) : g }),
      /* @__PURE__ */ e(
        "input",
        {
          id: r,
          name: r,
          type: w && k ? "text" : l,
          value: s,
          onChange: a,
          onBlur: (N) => {
            f(!1), i == null || i(N);
          },
          onFocus: () => f(!0),
          placeholder: d,
          disabled: x,
          required: h,
          className: `w-full bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none py-2.5 ${g ? "pl-10" : "pl-3"} ${m || w ? "pr-10" : "pr-3"}`,
          ...y
        }
      ),
      m && s && !x && /* @__PURE__ */ e("button", { onClick: () => a == null ? void 0 : a({ target: { name: r, value: "" } }), className: "absolute right-3 text-gray-400 hover:text-gray-600", tabIndex: -1, type: "button", "aria-label": "Clear", children: /* @__PURE__ */ e(u, { name: "x", size: 14 }) }),
      w && /* @__PURE__ */ e("button", { type: "button", onClick: () => A(!k), className: "absolute right-3 text-gray-400 hover:text-gray-600", tabIndex: -1, "aria-label": k ? "Hide password" : "Show password", children: /* @__PURE__ */ e(u, { name: k ? "eyeOff" : "eye", size: 16 }) })
    ] }),
    n && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-red-500", children: n }),
    o && !n && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-gray-400", children: o })
  ] });
}, ve = ({
  label: t,
  name: r,
  value: l,
  onChange: s,
  onBlur: a,
  placeholder: i,
  error: d,
  helperText: n,
  rows: o = 4,
  disabled: g = !1,
  required: m = !1,
  maxLength: x,
  showCount: h = !1,
  className: b = "",
  ...y
}) => {
  const [p, f] = v(!1), k = typeof l == "string" ? l.length : 0;
  return /* @__PURE__ */ c("div", { className: b, children: [
    t && /* @__PURE__ */ c("label", { htmlFor: r, className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5", children: [
      t,
      m && /* @__PURE__ */ e("span", { className: "text-red-500 ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ e("div", { className: `relative border rounded-lg transition-all duration-150 ${d ? "border-red-400" : p ? "border-black dark:border-white" : "border-gray-300 dark:border-gray-600"} ${g ? "bg-gray-50 dark:bg-gray-800 opacity-60" : "bg-white dark:bg-gray-900"}`, children: /* @__PURE__ */ e(
      "textarea",
      {
        id: r,
        name: r,
        value: l,
        onChange: s,
        onBlur: (A) => {
          f(!1), a == null || a(A);
        },
        onFocus: () => f(!0),
        placeholder: i,
        rows: o,
        disabled: g,
        required: m,
        maxLength: x,
        className: "w-full bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none p-3 resize-y min-h-[80px]",
        ...y
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "flex items-center justify-between mt-1", children: [
      d ? /* @__PURE__ */ e("p", { className: "text-xs text-red-500", children: d }) : n ? /* @__PURE__ */ e("p", { className: "text-xs text-gray-400", children: n }) : /* @__PURE__ */ e("span", {}),
      h && /* @__PURE__ */ c("span", { className: "text-xs text-gray-400 tabular-nums", children: [
        k,
        x ? ` / ${x}` : ""
      ] })
    ] })
  ] });
}, Ye = ({
  label: t,
  name: r,
  value: l,
  onChange: s,
  onBlur: a,
  options: i = [],
  placeholder: d,
  error: n,
  helperText: o,
  disabled: g = !1,
  required: m = !1,
  className: x = "",
  ...h
}) => {
  const [b, y] = v(!1);
  return /* @__PURE__ */ c("div", { className: x, children: [
    t && /* @__PURE__ */ c("label", { htmlFor: r, className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5", children: [
      t,
      m && /* @__PURE__ */ e("span", { className: "text-red-500 ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ c("div", { className: `relative border rounded-lg transition-all duration-150 ${n ? "border-red-400" : b ? "border-black dark:border-white" : "border-gray-300 dark:border-gray-600"} ${g ? "bg-gray-50 dark:bg-gray-800 opacity-60" : "bg-white dark:bg-gray-900"}`, children: [
      /* @__PURE__ */ c(
        "select",
        {
          id: r,
          name: r,
          value: l,
          onChange: s,
          onBlur: (p) => {
            y(!1), a == null || a(p);
          },
          onFocus: () => y(!0),
          disabled: g,
          required: m,
          className: "w-full bg-transparent text-sm text-gray-900 dark:text-gray-100 outline-none py-2.5 pl-3 pr-10 appearance-none cursor-pointer",
          ...h,
          children: [
            d && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: d }),
            i.map((p) => {
              const f = typeof p == "string" ? p : p.value, k = typeof p == "string" ? p : p.label;
              return /* @__PURE__ */ e("option", { value: f, children: k }, f);
            })
          ]
        }
      ),
      /* @__PURE__ */ e("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none", children: /* @__PURE__ */ e(u, { name: "chevronDown", size: 16 }) })
    ] }),
    n && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-red-500", children: n }),
    o && !n && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-gray-400", children: o })
  ] });
}, Xe = ({
  label: t,
  name: r,
  checked: l = !1,
  onChange: s,
  error: a,
  disabled: i = !1,
  indeterminate: d = !1,
  className: n = "",
  ...o
}) => /* @__PURE__ */ c("label", { className: `inline-flex items-start gap-3 cursor-pointer ${i ? "opacity-60 cursor-not-allowed" : ""} ${n}`, children: [
  /* @__PURE__ */ c("div", { className: "relative flex-shrink-0 mt-0.5", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: r,
        checked: l,
        onChange: s,
        disabled: i,
        className: "sr-only",
        ...o
      }
    ),
    /* @__PURE__ */ e("div", { className: `w-4 h-4 border-2 rounded transition-all duration-150 flex items-center justify-center ${l || d ? "bg-black border-black dark:bg-white dark:border-white" : a ? "border-red-400" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`, children: d ? /* @__PURE__ */ e("div", { className: "w-2 h-0.5 bg-white dark:bg-gray-900 rounded-full" }) : l ? /* @__PURE__ */ e(u, { name: "check", size: 12, strokeWidth: 3, className: "text-white dark:text-gray-900" }) : null })
  ] }),
  t && /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300 select-none", children: t })
] }), Je = ({
  label: t,
  name: r,
  checked: l = !1,
  onChange: s,
  disabled: a = !1,
  size: i = "md",
  className: d = "",
  ...n
}) => {
  const o = {
    sm: { track: "w-8 h-4", thumb: "w-3 h-3", translate: "translate-x-4" },
    md: { track: "w-10 h-5", thumb: "w-4 h-4", translate: "translate-x-5" },
    lg: { track: "w-12 h-6", thumb: "w-5 h-5", translate: "translate-x-6" }
  }, g = o[i] || o.md;
  return /* @__PURE__ */ c("label", { className: `inline-flex items-center gap-3 cursor-pointer ${a ? "opacity-60 cursor-not-allowed" : ""} ${d}`, children: [
    /* @__PURE__ */ c("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: r,
          checked: l,
          onChange: s,
          disabled: a,
          className: "sr-only",
          role: "switch",
          "aria-checked": l,
          ...n
        }
      ),
      /* @__PURE__ */ e("div", { className: `${g.track} rounded-full transition-colors duration-200 ${l ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}`, children: /* @__PURE__ */ e("div", { className: `${g.thumb} bg-white rounded-full shadow-sm transform transition-transform duration-200 ${l ? g.translate : "translate-x-0"} mt-0.5 ml-0.5` }) })
    ] }),
    t && /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300 select-none", children: t })
  ] });
}, Qe = ({ tabs: t = [], activeTab: r, onChange: l, variant: s = "underline", size: a = "md", className: i = "" }) => {
  const [d, n] = v(0), o = r !== void 0 ? r : d, g = l || n, m = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5"
  }, x = {
    underline: (b) => b ? "border-b-2 border-black dark:border-white text-black dark:text-white font-medium" : "border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300",
    pill: (b) => b ? "bg-black text-white dark:bg-white dark:text-gray-900 font-medium shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
    buttons: (b) => b ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
  }, h = x[s] || x.underline;
  return /* @__PURE__ */ e("div", { className: `flex ${s === "underline" ? "border-b border-gray-200 dark:border-gray-700" : "gap-1"} ${i}`, role: "tablist", children: t.map((b, y) => {
    const p = y === o, f = b.disabled;
    return /* @__PURE__ */ c(
      "button",
      {
        role: "tab",
        "aria-selected": p,
        disabled: f,
        onClick: () => g(y),
        className: `inline-flex items-center gap-2 whitespace-nowrap transition-all duration-150 ${m[a] || m.md} ${h(p)} ${s !== "underline" ? "rounded-lg" : ""} ${f ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`,
        children: [
          b.icon && (typeof b.icon == "string" ? /* @__PURE__ */ e(u, { name: b.icon, size: 14 }) : b.icon),
          b.label
        ]
      },
      y
    );
  }) });
}, Ze = ({ children: t, active: r, index: l, className: s = "" }) => r !== l ? null : /* @__PURE__ */ e("div", { role: "tabpanel", className: s, children: t }), ke = ({ items: t = [], allowMultiple: r = !1, defaultOpen: l = [], className: s = "" }) => {
  const [a, i] = v(l), d = (n) => {
    i(r ? (o) => o.includes(n) ? o.filter((g) => g !== n) : [...o, n] : (o) => o.includes(n) ? [] : [n]);
  };
  return /* @__PURE__ */ e("div", { className: `divide-y divide-gray-200 dark:divide-gray-700 border-t border-b border-gray-200 dark:border-gray-700 ${s}`, children: t.map((n, o) => {
    const g = a.includes(o);
    return /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ c(
        "button",
        {
          onClick: () => d(o),
          className: "flex items-center justify-between w-full text-left py-4 px-0 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors gap-4",
          children: [
            /* @__PURE__ */ e("span", { children: n.title }),
            /* @__PURE__ */ e(
              u,
              {
                name: "chevronDown",
                size: 16,
                className: `text-gray-400 transition-transform duration-200 flex-shrink-0 ${g ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: `overflow-hidden transition-all duration-200 ${g ? "max-h-[1000px] pb-4" : "max-h-0 pb-0"}`, children: /* @__PURE__ */ e("div", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed", children: n.content }) })
    ] }, o);
  }) });
}, X = {
  left: "left-0",
  right: "right-0",
  top: "top-0 left-0 right-0",
  bottom: "bottom-0 left-0 right-0"
}, _ = {
  sm: "w-72",
  md: "w-80",
  lg: "w-96",
  xl: "w-[480px]",
  full: "w-full"
}, et = ({
  isOpen: t,
  onClose: r,
  title: l,
  children: s,
  side: a = "right",
  size: i = "md",
  closeOnOverlay: d = !0,
  showClose: n = !0,
  footer: o,
  className: g = ""
}) => {
  L(() => {
    if (!t) return;
    const h = (b) => {
      b.key === "Escape" && r();
    };
    return document.addEventListener("keydown", h), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    };
  }, [t, r]);
  const m = a === "left" || a === "right", x = t ? m ? "translate-x-0" : "translate-y-0" : a === "left" ? "-translate-x-full" : a === "right" ? "translate-x-full" : a === "top" ? "-translate-y-full" : "translate-y-full";
  return /* @__PURE__ */ c(I, { children: [
    t && /* @__PURE__ */ e("div", { className: "fixed inset-0 z-40 bg-black/40", onClick: () => {
      d && r();
    } }),
    /* @__PURE__ */ c(
      "div",
      {
        className: `fixed z-50 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out ${m ? `${X[a]} top-0 h-full ${_[i] || _.md} max-w-[90vw]` : `${X[a]} ${_.full} h-80 max-h-[70vh]`} ${x} ${g}`,
        children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-base font-bold text-gray-900 dark:text-white", children: l }),
            n && /* @__PURE__ */ e("button", { onClick: r, className: "p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", "aria-label": "Close drawer", children: /* @__PURE__ */ e(u, { name: "x", size: 18 }) })
          ] }),
          /* @__PURE__ */ e("div", { className: "overflow-y-auto p-5 flex-1", style: { height: o ? "calc(100% - 120px)" : "calc(100% - 60px)" }, children: s }),
          o && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: o })
        ]
      }
    )
  ] });
}, tt = ({ trigger: t, items: r = [], align: l = "left", className: s = "" }) => {
  const [a, i] = v(!1), d = T(null);
  L(() => {
    const o = (g) => {
      d.current && !d.current.contains(g.target) && i(!1);
    };
    return document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, []);
  const n = l === "right" ? "right-0" : "left-0";
  return /* @__PURE__ */ c("div", { ref: d, className: `relative inline-block ${s}`, children: [
    /* @__PURE__ */ e("div", { onClick: () => i(!a), className: "cursor-pointer", children: t }),
    a && /* @__PURE__ */ e("div", { className: `absolute z-50 mt-1 min-w-[180px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 ${n} animate-[fadeScaleIn_0.15s_ease-out]`, children: r.map((o, g) => o.separator ? /* @__PURE__ */ e("div", { className: "my-1 border-t border-gray-100 dark:border-gray-800" }, g) : /* @__PURE__ */ c(
      "button",
      {
        onClick: () => {
          var m;
          (m = o.onClick) == null || m.call(o), i(!1);
        },
        disabled: o.disabled,
        className: `flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors ${o.disabled ? "opacity-40 cursor-not-allowed" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        children: [
          o.icon && (typeof o.icon == "string" ? /* @__PURE__ */ e(u, { name: o.icon, size: 16, className: "text-gray-400" }) : o.icon),
          o.label,
          o.shortcut && /* @__PURE__ */ e("span", { className: "ml-auto text-xs text-gray-400", children: o.shortcut })
        ]
      },
      g
    )) })
  ] });
}, rt = ({ items: t = [], separator: r = "chevronRight", className: l = "" }) => /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: `flex items-center gap-1.5 text-sm ${l}`, children: t.map((s, a) => {
  const i = a === t.length - 1;
  return /* @__PURE__ */ c("span", { className: "flex items-center gap-1.5", children: [
    a > 0 && /* @__PURE__ */ e("span", { className: "text-gray-400", children: r === "slash" ? /* @__PURE__ */ e("span", { className: "text-gray-300 dark:text-gray-600", children: "/" }) : /* @__PURE__ */ e(u, { name: r === "chevronRight" ? "chevronRight" : r, size: 14 }) }),
    i ? /* @__PURE__ */ e("span", { className: "text-gray-900 dark:text-white font-medium", "aria-current": "page", children: s.label }) : s.href ? /* @__PURE__ */ e("a", { href: s.href, className: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors", children: s.label }) : /* @__PURE__ */ e("span", { className: "text-gray-500 dark:text-gray-400", children: s.label })
  ] }, a);
}) }), at = ({ current: t, total: r, onChange: l, siblingCount: s = 1, size: a = "md", className: i = "" }) => {
  const d = (m, x) => Array.from({ length: x - m + 1 }, (h, b) => m + b), n = () => {
    const m = Math.max(r, 1), x = Math.max(s, 0), h = Math.max(t - x, 1), b = Math.min(t + x, m), y = h > 2, p = b < m - 1;
    return !y && !p ? d(1, m) : !y && p ? [...d(1, 3 + x * 2), "...", m] : y && !p ? [1, "...", ...d(m - 3 - x * 2 + 1, m)] : [1, "...", ...d(h, b), "...", m];
  }, o = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base"
  }, g = o[a] || o.md;
  return /* @__PURE__ */ c("nav", { "aria-label": "Pagination", className: `flex items-center gap-1 ${i}`, children: [
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => l(t - 1),
        disabled: t <= 1,
        className: `inline-flex items-center justify-center rounded-lg transition-colors ${g} ${t <= 1 ? "text-gray-300 dark:text-gray-600 cursor-not-allowed" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        "aria-label": "Previous page",
        children: /* @__PURE__ */ e(u, { name: "chevronLeft", size: a === "sm" ? 14 : 16 })
      }
    ),
    n().map((m, x) => {
      if (m === "...")
        return /* @__PURE__ */ e("span", { className: `inline-flex items-center justify-center ${g} text-gray-400`, children: "..." }, `dots-${x}`);
      const h = m === t;
      return /* @__PURE__ */ e(
        "button",
        {
          onClick: () => l(m),
          className: `inline-flex items-center justify-center rounded-lg transition-colors font-medium ${g} ${h ? "bg-black text-white dark:bg-white dark:text-gray-900" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
          "aria-current": h ? "page" : void 0,
          children: m
        },
        m
      );
    }),
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => l(t + 1),
        disabled: t >= r,
        className: `inline-flex items-center justify-center rounded-lg transition-colors ${g} ${t >= r ? "text-gray-300 dark:text-gray-600 cursor-not-allowed" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        "aria-label": "Next page",
        children: /* @__PURE__ */ e(u, { name: "chevronRight", size: a === "sm" ? 14 : 16 })
      }
    )
  ] });
}, lt = ({ children: t, content: r, position: l = "top", delay: s = 200, className: a = "" }) => {
  const [i, d] = v(!1), n = T(null), o = () => {
    clearTimeout(n.current), n.current = setTimeout(() => d(!0), s);
  }, g = () => {
    clearTimeout(n.current), d(!1);
  }, m = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  }, x = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-gray-100 border-x-transparent border-b-transparent border-4",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-gray-100 border-x-transparent border-t-transparent border-4",
    left: "left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-gray-100 border-y-transparent border-r-transparent border-4",
    right: "right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-gray-100 border-y-transparent border-l-transparent border-4"
  };
  return /* @__PURE__ */ c("div", { className: `relative inline-flex ${a}`, onMouseEnter: o, onMouseLeave: g, onFocus: o, onBlur: g, children: [
    t,
    i && /* @__PURE__ */ c("div", { className: `absolute z-50 ${m[l]}`, role: "tooltip", children: [
      /* @__PURE__ */ e("div", { className: "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap", children: r }),
      /* @__PURE__ */ e("div", { className: `absolute ${x[l]}` })
    ] })
  ] });
}, st = ({
  columns: t = [],
  data: r = [],
  sortable: l = !1,
  onRowClick: s,
  striped: a = !1,
  compact: i = !1,
  className: d = ""
}) => {
  const [n, o] = v(null), [g, m] = v("asc"), x = (b) => {
    l && (n === b ? m((y) => y === "asc" ? "desc" : "asc") : (o(b), m("asc")));
  }, h = [...r].sort((b, y) => {
    if (!n) return 0;
    const p = b[n], f = y[n];
    if (p == null) return 1;
    if (f == null) return -1;
    const k = typeof p == "number" ? p - f : String(p).localeCompare(String(f));
    return g === "asc" ? k : -k;
  });
  return /* @__PURE__ */ e("div", { className: `overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 ${d}`, children: /* @__PURE__ */ c("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-800/50", children: t.map((b, y) => {
      const p = n === b.key;
      return /* @__PURE__ */ e(
        "th",
        {
          onClick: () => b.sortable !== !1 && x(b.key),
          className: `text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${i ? "px-3 py-2.5" : "px-4 py-3"} ${b.sortable !== !1 && l ? "cursor-pointer select-none hover:text-gray-700 dark:hover:text-gray-200" : ""}`,
          children: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5", children: [
            b.label,
            l && b.sortable !== !1 && p && /* @__PURE__ */ e(u, { name: g === "asc" ? "chevronUp" : "chevronDown", size: 12, className: "text-gray-400" })
          ] })
        },
        b.key || y
      );
    }) }) }),
    /* @__PURE__ */ e("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: h.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: "text-center py-12 text-sm text-gray-400", children: "No data" }) }) : h.map((b, y) => /* @__PURE__ */ e(
      "tr",
      {
        onClick: () => s == null ? void 0 : s(b),
        className: `transition-colors ${s ? "cursor-pointer" : ""} ${a && y % 2 === 1 ? "bg-gray-50 dark:bg-gray-800/30" : "bg-white dark:bg-gray-900"} hover:bg-gray-50 dark:hover:bg-gray-800/50`,
        children: t.map((p, f) => /* @__PURE__ */ e("td", { className: `${i ? "px-3 py-2.5" : "px-4 py-3"} text-gray-700 dark:text-gray-300`, children: p.render ? p.render(b[p.key], b) : b[p.key] }, p.key || f))
      },
      b.id || y
    )) })
  ] }) });
}, we = ({ threshold: t = 0.1, triggerOnce: r = !0 } = {}) => {
  const l = T(null), [s, a] = v(!1), i = T(!1);
  return L(() => {
    const d = l.current;
    if (!d || r && i.current) return;
    const n = new IntersectionObserver(
      ([o]) => {
        o.isIntersecting ? (a(!0), i.current = !0, r && n.unobserve(d)) : r || a(!1);
      },
      { threshold: t }
    );
    return n.observe(d), () => n.disconnect();
  }, [t, r]), { ref: l, isInView: s };
}, J = {
  fadeIn: { opacity: 0 },
  fadeScaleIn: { opacity: 0, transform: "scale(0.95)" },
  slideIn: { opacity: 0, transform: "translateX(1rem)" },
  slideUp: { opacity: 0, transform: "translateY(20px)" },
  slideDown: { opacity: 0, transform: "translateY(-20px)" },
  slideLeft: { opacity: 0, transform: "translateX(20px)" },
  slideRight: { opacity: 0, transform: "translateX(-20px)" },
  scaleIn: { opacity: 0, transform: "scale(0.9)" }
}, Ne = ({
  type: t = "fadeIn",
  duration: r = 400,
  delay: l = 0,
  trigger: s = "mount",
  threshold: a = 0.1,
  once: i = !0,
  animateIn: d = !0,
  onAnimateOut: n,
  as: o = "div",
  className: g = "",
  children: m
}) => {
  const [x, h] = v(() => s === "viewport" ? "idle" : d ? "entering" : "idle"), { ref: b, isInView: y } = we({ threshold: a, triggerOnce: i });
  L(() => {
    s === "viewport" && y && x === "idle" && h("entering");
  }, [s, y, x]), L(() => {
    d && x === "idle" && h("entering"), !d && (x === "entering" || x === "entered") && h("exiting");
  }, [d]);
  const p = () => {
    x === "entering" && h("entered"), x === "exiting" && (n == null || n(), h("idle"));
  };
  return /* @__PURE__ */ e(
    o,
    {
      ref: b,
      className: g,
      style: (() => {
        switch (x) {
          case "idle":
            return J[t] || J.fadeIn;
          case "entering":
            return {
              animation: `${t} ${r}ms ease ${l}ms forwards`
            };
          case "entered":
            return {
              animation: `${t} ${r}ms ease ${l}ms forwards`
            };
          case "exiting":
            return {
              animation: `${t} ${r}ms ease 0ms reverse forwards`
            };
        }
      })(),
      onAnimationEnd: p,
      children: m
    }
  );
}, nt = ({
  title: t,
  subtitle: r,
  primaryCta: l,
  secondaryCta: s,
  image: a,
  imagePosition: i = "right",
  variant: d = "default",
  slides: n,
  className: o = ""
}) => {
  const [g, m] = v(0), x = (n == null ? void 0 : n.length) || 0, h = S(() => {
    m((p) => (p + 1) % x);
  }, [x]);
  L(() => {
    if (d !== "slideshow" || x < 2) return;
    const p = setInterval(h, 5e3);
    return () => clearInterval(p);
  }, [d, x, h]);
  const b = /* @__PURE__ */ c("div", { className: `max-w-xl ${a ? i === "left" ? "lg:order-2" : "lg:order-1" : "mx-auto text-center"}`, children: [
    /* @__PURE__ */ e("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-none mb-4", children: t }),
    r && /* @__PURE__ */ e("p", { className: "text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[65ch] mb-8", children: r }),
    (l || s) && /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-3", children: [
      l && /* @__PURE__ */ e(C, { variant: l.variant || "primary", size: l.size || "lg", label: l.label, onClick: l.onClick, href: l.href }),
      s && /* @__PURE__ */ e(C, { variant: s.variant || "outline", size: s.size || "lg", label: s.label, onClick: s.onClick, href: s.href })
    ] })
  ] }), y = a && /* @__PURE__ */ e("div", { className: `${i === "left" ? "lg:order-1" : "lg:order-2"} flex items-center justify-center`, children: /* @__PURE__ */ e("img", { src: a.src, alt: a.alt || "", className: "w-full max-w-lg rounded-2xl object-cover", style: { maxHeight: 500 } }) });
  if (d === "slideshow" && (n == null ? void 0 : n.length) > 0) {
    const p = n[g];
    return /* @__PURE__ */ c("section", { className: `relative h-screen min-h-[600px] overflow-hidden ${o}`, children: [
      n.map((f, k) => /* @__PURE__ */ c(
        "div",
        {
          className: `absolute inset-0 transition-opacity duration-1000 ${k === g ? "opacity-100 z-10" : "opacity-0 z-0"}`,
          children: [
            /* @__PURE__ */ e("img", { src: f.image, alt: "", className: "w-full h-full object-cover" }),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/50" })
          ]
        },
        k
      )),
      /* @__PURE__ */ e("div", { className: "relative z-20 h-full flex items-center", children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(Ne, { type: "fadeSlideUp", duration: 600, children: /* @__PURE__ */ c("div", { className: "max-w-2xl", children: [
        p.tag && /* @__PURE__ */ e("span", { className: "inline-block text-xs font-semibold tracking-widest uppercase bg-white/20 text-white backdrop-blur-sm px-3 py-1 rounded-full mb-4", children: p.tag }),
        /* @__PURE__ */ c("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-4", children: [
          p.title,
          p.titleAccent && /* @__PURE__ */ c("span", { className: "text-white/60", children: [
            " ",
            p.titleAccent
          ] })
        ] }),
        p.description && /* @__PURE__ */ e("p", { className: "text-base sm:text-lg text-gray-200 leading-relaxed max-w-[65ch] mb-8", children: p.description }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-3", children: [
          p.buttonText && /* @__PURE__ */ e(C, { variant: "primary", size: "lg", label: p.buttonText, href: p.buttonLink, className: "bg-white text-gray-900 hover:bg-gray-200" }),
          p.secondaryText && /* @__PURE__ */ e(C, { variant: "outline", size: "lg", label: p.secondaryText, href: p.secondaryLink, className: "border-white/30 text-white hover:bg-white/10" })
        ] })
      ] }) }, g) }) }),
      x > 1 && /* @__PURE__ */ e("div", { className: "absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2", children: n.map((f, k) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => m(k),
          className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${k === g ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"}`,
          "aria-label": `Go to slide ${k + 1}`
        },
        k
      )) })
    ] });
  }
  return d === "split" && a ? /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${o}`, children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ c("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    b,
    y
  ] }) }) }) : d === "centered" ? /* @__PURE__ */ e("section", { className: `py-20 lg:py-32 ${o}`, children: /* @__PURE__ */ e(M, { maxWidth: "lg", padding: !0, children: /* @__PURE__ */ e("div", { className: "text-center", children: b }) }) }) : d === "bg-dark" ? /* @__PURE__ */ e("section", { className: `py-20 lg:py-32 bg-gray-950 text-white ${o}`, children: /* @__PURE__ */ e(M, { maxWidth: "lg", padding: !0, children: /* @__PURE__ */ c("div", { className: "text-center", children: [
    /* @__PURE__ */ e("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4", children: t }),
    r && /* @__PURE__ */ e("p", { className: "text-base sm:text-lg text-gray-400 leading-relaxed max-w-[65ch] mx-auto mb-8", children: r }),
    (l || s) && /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-3 justify-center", children: [
      l && /* @__PURE__ */ e(C, { variant: l.variant || "primary", size: l.size || "lg", label: l.label, onClick: l.onClick, href: l.href, className: l.variant === "primary" ? "bg-white text-gray-900 hover:bg-gray-200" : "" }),
      s && /* @__PURE__ */ e(C, { variant: s.variant || "outline", size: s.size || "lg", label: s.label, onClick: s.onClick, href: s.href, className: "border-white/30 text-white hover:bg-white/10" })
    ] })
  ] }) }) }) : /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${o}`, children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ c("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    b,
    y
  ] }) }) });
}, it = ({
  title: t,
  subtitle: r,
  features: l = [],
  columns: s = 3,
  variant: a = "card",
  className: i = ""
}) => {
  const d = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${i}`, children: /* @__PURE__ */ c(M, { children: [
    (t || r) && /* @__PURE__ */ c("div", { className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16", children: [
      t && /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4", children: t }),
      r && /* @__PURE__ */ e("p", { className: "text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed", children: r })
    ] }),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-1 ${d[s] || d[3]} gap-6 lg:gap-8`, children: l.map((n, o) => a === "card" ? /* @__PURE__ */ c(pe, { variant: "outlined", hover: !0, children: [
      n.icon && /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4", children: typeof n.icon == "string" ? /* @__PURE__ */ e(u, { name: n.icon, size: 20, className: "text-gray-700 dark:text-gray-300" }) : n.icon }),
      /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: n.title }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 leading-relaxed", children: n.description })
    ] }, o) : /* @__PURE__ */ c("div", { className: "flex gap-4", children: [
      n.icon && /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1", children: typeof n.icon == "string" ? /* @__PURE__ */ e(u, { name: n.icon, size: 20, className: "text-gray-700 dark:text-gray-300" }) : n.icon }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-1", children: n.title }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 leading-relaxed", children: n.description })
      ] })
    ] }, o)) })
  ] }) });
}, ot = ({ title: t, subtitle: r, items: l = [], className: s = "" }) => /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${s}`, children: /* @__PURE__ */ c(M, { maxWidth: "lg", children: [
  (t || r) && /* @__PURE__ */ c("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
    t && /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4", children: t }),
    r && /* @__PURE__ */ e("p", { className: "text-base text-gray-600 dark:text-gray-400", children: r })
  ] }),
  /* @__PURE__ */ e(ke, { items: l })
] }) }), dt = ({ title: t, subtitle: r, plans: l = [], className: s = "" }) => /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${s}`, children: /* @__PURE__ */ c(M, { children: [
  (t || r) && /* @__PURE__ */ c("div", { className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16", children: [
    t && /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4", children: t }),
    r && /* @__PURE__ */ e("p", { className: "text-base sm:text-lg text-gray-600 dark:text-gray-400", children: r })
  ] }),
  /* @__PURE__ */ e("div", { className: `grid grid-cols-1 ${l.length === 2 ? "md:grid-cols-2" : l.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 lg:gap-8 items-start`, children: l.map((a, i) => /* @__PURE__ */ c(
    "div",
    {
      className: `rounded-2xl p-6 lg:p-8 border-2 transition-all duration-200 ${a.highlighted ? "border-black dark:border-white bg-gray-50 dark:bg-gray-800/50 shadow-lg scale-105 lg:scale-110" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"}`,
      children: [
        a.badge && /* @__PURE__ */ e("span", { className: "inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 mb-4", children: a.badge }),
        /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-gray-900 dark:text-white mb-1", children: a.name }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-4", children: a.description }),
        /* @__PURE__ */ c("div", { className: "mb-6", children: [
          /* @__PURE__ */ e("span", { className: "text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white", children: a.price }),
          a.period && /* @__PURE__ */ e("span", { className: "text-sm text-gray-500 dark:text-gray-400 ml-1", children: a.period })
        ] }),
        /* @__PURE__ */ e(
          C,
          {
            variant: a.highlighted ? "primary" : "outline",
            label: a.cta || "Get Started",
            onClick: a.onClick,
            href: a.href,
            className: "w-full"
          }
        ),
        /* @__PURE__ */ e("ul", { className: "mt-6 space-y-3", children: a.features.map((d, n) => /* @__PURE__ */ c("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ e("span", { className: `flex-shrink-0 mt-0.5 ${d.included !== !1 ? "text-emerald-500" : "text-gray-300 dark:text-gray-600"}`, children: d.included !== !1 ? /* @__PURE__ */ e(u, { name: "check", size: 16, strokeWidth: 2.5 }) : /* @__PURE__ */ e(u, { name: "x", size: 16 }) }),
          /* @__PURE__ */ e("span", { className: d.included !== !1 ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500", children: d.label })
        ] }, n)) })
      ]
    },
    i
  )) })
] }) }), ct = ({
  brand: t,
  description: r,
  links: l = [],
  social: s = [],
  contact: a,
  businessHours: i,
  developerCredit: d,
  copyright: n,
  columns: o = 4,
  className: g = ""
}) => {
  const m = o === 3 ? "md:grid-cols-4" : o === 2 ? "md:grid-cols-3" : "md:grid-cols-5", x = (a || i) && /* @__PURE__ */ c("div", { children: [
    a && a.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3 mb-4", children: a.map((h, b) => /* @__PURE__ */ c("div", { className: "flex items-start gap-2.5", children: [
      h.icon && /* @__PURE__ */ e(u, { name: h.icon, size: 14, className: "text-gray-500 mt-0.5 flex-shrink-0" }),
      /* @__PURE__ */ c("div", { className: "text-sm", children: [
        /* @__PURE__ */ e("p", { className: "text-gray-400", children: h.label }),
        h.href ? /* @__PURE__ */ e("a", { href: h.href, className: "text-white hover:text-gray-300 transition-colors", children: h.value }) : /* @__PURE__ */ e("p", { className: "text-white", children: h.value })
      ] })
    ] }, b)) }),
    i && /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ e("h4", { className: "text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3", children: "Hours" }),
      /* @__PURE__ */ e("div", { className: "space-y-1.5", children: i.map((h, b) => /* @__PURE__ */ c("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-gray-400", children: h.day }),
        /* @__PURE__ */ e("span", { className: "text-white", children: h.hours })
      ] }, b)) })
    ] })
  ] });
  return /* @__PURE__ */ e("footer", { className: `bg-gray-950 text-gray-400 ${g}`, children: /* @__PURE__ */ c(M, { children: [
    /* @__PURE__ */ c("div", { className: `py-12 lg:py-16 grid grid-cols-1 ${m} gap-8 lg:gap-12`, children: [
      /* @__PURE__ */ c("div", { className: o === 3 || o === 2 ? "md:col-span-1" : "md:col-span-2", children: [
        t && /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-white mb-3", children: t }),
        r && /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed max-w-sm", children: r }),
        s.length > 0 && /* @__PURE__ */ e("div", { className: "flex gap-3 mt-5", children: s.map((h, b) => /* @__PURE__ */ e("a", { href: h.href, target: "_blank", rel: "noopener noreferrer", className: "w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors", "aria-label": h.label, children: typeof h.icon == "string" ? /* @__PURE__ */ e(u, { name: h.icon, size: 16, className: "text-gray-400" }) : h.icon }, b)) })
      ] }),
      l.map((h, b) => /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("h4", { className: "text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4", children: h.title }),
        /* @__PURE__ */ e("ul", { className: "space-y-2.5", children: h.items.map((y, p) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: y.href, className: "text-sm text-gray-400 hover:text-white transition-colors", children: y.label }) }, p)) })
      ] }, b)),
      x && /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("h4", { className: "text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4", children: "Contact" }),
        x
      ] })
    ] }),
    (n || d) && /* @__PURE__ */ c("div", { className: "border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-2", children: [
      n && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: n }),
      d && /* @__PURE__ */ c("p", { className: "text-xs text-gray-600", children: [
        "Built by",
        " ",
        /* @__PURE__ */ e(
          "a",
          {
            href: d.whatsapp ? `https://wa.me/${d.whatsapp}` : "#",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-gray-400 hover:text-white transition-colors",
            children: d.name
          }
        )
      ] })
    ] })
  ] }) });
}, gt = ({ title: t, stats: r = [], variant: l = "grid", className: s = "" }) => /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${s}`, children: /* @__PURE__ */ c(M, { children: [
  t && /* @__PURE__ */ e("div", { className: "text-center max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white", children: t }) }),
  l === "row" ? /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-8 lg:gap-16", children: r.map((a, i) => /* @__PURE__ */ c("div", { className: "text-center", children: [
    /* @__PURE__ */ e("p", { className: "text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white", children: a.value }),
    /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: a.label })
  ] }, i)) }) : /* @__PURE__ */ e("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: r.map((a, i) => /* @__PURE__ */ c("div", { className: "text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800", children: [
    a.icon && /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3", children: typeof a.icon == "string" ? /* @__PURE__ */ e(u, { name: a.icon, size: 20, className: "text-gray-700 dark:text-gray-300" }) : a.icon }),
    /* @__PURE__ */ e("p", { className: "text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white", children: a.value }),
    /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: a.label })
  ] }, i)) })
] }) }), mt = ({ title: t, subtitle: r, testimonials: l = [], variant: s = "grid", className: a = "" }) => /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${a}`, children: /* @__PURE__ */ c(M, { children: [
  (t || r) && /* @__PURE__ */ c("div", { className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16", children: [
    t && /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4", children: t }),
    r && /* @__PURE__ */ e("p", { className: "text-base sm:text-lg text-gray-600 dark:text-gray-400", children: r })
  ] }),
  s === "grid" ? /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: l.map((i, d) => /* @__PURE__ */ c("div", { className: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col", children: [
    /* @__PURE__ */ e("div", { className: "flex gap-0.5 mb-4", children: Array.from({ length: 5 }, (n, o) => /* @__PURE__ */ e(u, { name: "star", size: 14, className: o < (i.rating || 5) ? "text-amber-400" : "text-gray-200 dark:text-gray-700" }, o)) }),
    /* @__PURE__ */ c("p", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4", children: [
      "“",
      i.quote,
      "”"
    ] }),
    /* @__PURE__ */ c("div", { className: "flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800", children: [
      /* @__PURE__ */ e(G, { src: i.avatar, name: i.name, size: "sm" }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: i.name }),
        i.role && /* @__PURE__ */ c("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
          i.role,
          i.company ? `, ${i.company}` : ""
        ] })
      ] })
    ] })
  ] }, d)) }) : /* @__PURE__ */ e("div", { className: "space-y-6 max-w-3xl mx-auto", children: l.map((i, d) => /* @__PURE__ */ c("div", { className: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8", children: [
    /* @__PURE__ */ e("div", { className: "flex gap-0.5 mb-3", children: Array.from({ length: 5 }, (n, o) => /* @__PURE__ */ e(u, { name: "star", size: 14, className: o < (i.rating || 5) ? "text-amber-400" : "text-gray-200 dark:text-gray-700" }, o)) }),
    /* @__PURE__ */ c("p", { className: "text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6", children: [
      "“",
      i.quote,
      "”"
    ] }),
    /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e(G, { src: i.avatar, name: i.name, size: "sm" }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: i.name }),
        i.role && /* @__PURE__ */ c("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
          i.role,
          i.company ? `, ${i.company}` : ""
        ] })
      ] })
    ] })
  ] }, d)) })
] }) }), $e = {
  required: (t) => t ? "" : "This field is required",
  email: (t) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? "" : "Invalid email address",
  phone: (t) => /^(\+?254|0)?[17]\d{8}$/.test(t) ? "" : "Invalid phone number",
  min: (t) => (r) => r && r.length >= t ? "" : `Must be at least ${t} characters`,
  max: (t) => (r) => r && r.length <= t ? "" : `Must be at most ${t} characters`
}, Me = ({ initial: t = {}, validate: r = {}, onSubmit: l }) => {
  const [s, a] = v(t), [i, d] = v({}), [n, o] = v({}), [g, m] = v(!1), x = S(
    (w) => {
      const z = {};
      for (const [N, $] of Object.entries(r)) {
        const j = w[N], F = Array.isArray($) ? $ : [$];
        for (const D of F) {
          const P = typeof D == "function" ? D : $e[D];
          if (P) {
            const R = P(j);
            if (R) {
              z[N] = R;
              break;
            }
          }
        }
      }
      return z;
    },
    [r]
  ), h = S((w) => {
    const { name: z, value: N, type: $, checked: j } = w.target;
    a((F) => ({
      ...F,
      [z]: $ === "checkbox" ? j : N
    }));
  }, []), b = S(
    (w) => {
      const { name: z } = w.target;
      o((N) => ({ ...N, [z]: !0 })), d((N) => ({
        ...N,
        ...x(s)
      }));
    },
    [x, s]
  ), y = S((w, z) => {
    a((N) => ({ ...N, [w]: z }));
  }, []), p = S(() => {
    a(t), d({}), o({}), m(!1);
  }, [t]), f = S(
    (w) => {
      w && w.preventDefault();
      const z = x(s);
      if (d(z), o(
        Object.keys(s).reduce(($, j) => ({ ...$, [j]: !0 }), {})
      ), Object.keys(z).length > 0) return;
      m(!0);
      const N = l(s);
      N && typeof N.finally == "function" ? N.catch(() => {
      }).finally(() => m(!1)) : m(!1);
    },
    [s, x, l]
  ), k = Object.keys(i).length === 0, A = Object.keys(n).length > 0;
  return {
    values: s,
    errors: i,
    touched: n,
    submitting: g,
    isValid: k,
    isDirty: A,
    handleChange: h,
    handleBlur: b,
    handleSubmit: f,
    setValue: y,
    reset: p,
    setValues: a
  };
}, ht = ({
  title: t = "Get in Touch",
  subtitle: r,
  fields: l = [
    { name: "name", label: "Full Name", type: "text", validation: "required" },
    { name: "email", label: "Email Address", type: "email", validation: ["required", "email"] },
    { name: "message", label: "Message", type: "textarea", validation: "required" }
  ],
  onSubmit: s,
  submitLabel: a = "Send Message",
  contactInfo: i,
  className: d = ""
}) => {
  const n = {};
  l.forEach((m) => {
    m.validation && (n[m.name] = m.validation);
  });
  const o = {};
  l.forEach((m) => {
    o[m.name] = "";
  });
  const g = Me({ initial: o, validate: n, onSubmit: s || (() => {
  }) });
  return /* @__PURE__ */ e("section", { className: `py-16 lg:py-24 ${d}`, children: /* @__PURE__ */ c(M, { maxWidth: "lg", children: [
    (t || r) && /* @__PURE__ */ c("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      t && /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4", children: t }),
      r && /* @__PURE__ */ e("p", { className: "text-base text-gray-600 dark:text-gray-400", children: r })
    ] }),
    /* @__PURE__ */ c("div", { className: "grid md:grid-cols-5 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ c("form", { onSubmit: g.handleSubmit, className: "md:col-span-3 space-y-5", children: [
        l.map((m) => {
          var x, h;
          return m.type === "textarea" ? /* @__PURE__ */ e(
            ve,
            {
              label: m.label,
              name: m.name,
              value: g.values[m.name],
              onChange: g.handleChange,
              onBlur: g.handleBlur,
              error: g.touched[m.name] ? g.errors[m.name] : "",
              required: (x = m.validation) == null ? void 0 : x.includes("required")
            },
            m.name
          ) : /* @__PURE__ */ e(
            fe,
            {
              label: m.label,
              name: m.name,
              type: m.type,
              value: g.values[m.name],
              onChange: g.handleChange,
              onBlur: g.handleBlur,
              error: g.touched[m.name] ? g.errors[m.name] : "",
              required: (h = m.validation) == null ? void 0 : h.includes("required")
            },
            m.name
          );
        }),
        /* @__PURE__ */ e(C, { variant: "primary", label: g.submitting ? "Sending..." : a, type: "submit", disabled: g.submitting, loading: g.submitting })
      ] }),
      i && /* @__PURE__ */ e("div", { className: "md:col-span-2 space-y-5", children: i.map((m, x) => /* @__PURE__ */ c("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ e("div", { className: "w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0", children: typeof m.icon == "string" ? /* @__PURE__ */ e(u, { name: m.icon, size: 16, className: "text-gray-600 dark:text-gray-400" }) : m.icon }),
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: m.label }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: m.value })
        ] })
      ] }, x)) })
    ] })
  ] }) });
}, xt = (t, r) => {
  const [l, s] = v(() => {
    try {
      const d = window.localStorage.getItem(t);
      return d ? JSON.parse(d) : r;
    } catch {
      return r;
    }
  }), a = S(
    (d) => {
      try {
        const n = d instanceof Function ? d(l) : d;
        s(n), window.localStorage.setItem(t, JSON.stringify(n));
      } catch (n) {
        console.warn(`useLocalStorage: unable to set key "${t}"`, n);
      }
    },
    [t, l]
  ), i = S(() => {
    try {
      window.localStorage.removeItem(t), s(r);
    } catch (d) {
      console.warn(`useLocalStorage: unable to remove key "${t}"`, d);
    }
  }, [t, r]);
  return [l, a, i];
}, bt = (t) => {
  const [r, l] = v(() => typeof window < "u" ? window.matchMedia(t).matches : !1);
  return L(() => {
    const s = window.matchMedia(t), a = (i) => l(i.matches);
    return s.addEventListener("change", a), () => s.removeEventListener("change", a);
  }, [t]), r;
}, pt = (t, r = {}) => {
  const { immediate: l = !0, headers: s, ...a } = r, [i, d] = v(null), [n, o] = v(l), [g, m] = v(null), x = T(null), h = S(
    async (y) => {
      x.current && x.current.abort();
      const p = new AbortController();
      x.current = p, o(!0), m(null);
      try {
        const f = await fetch(y || t, {
          ...a,
          headers: { "Content-Type": "application/json", ...s },
          signal: p.signal
        });
        if (!f.ok)
          throw new Error(`HTTP ${f.status}: ${f.statusText}`);
        const k = await f.json();
        p.signal.aborted || (d(k), m(null));
      } catch (f) {
        if (f.name === "AbortError") return;
        m(f.message);
      } finally {
        p.signal.aborted || o(!1);
      }
    },
    [t, a, s]
  );
  L(() => (l && t && h(), () => {
    x.current && x.current.abort();
  }), [t, l, h]);
  const b = S(() => h(), [h]);
  return { data: i, loading: n, error: g, refetch: b };
}, ut = (...t) => t.filter(Boolean).join(" "), yt = (t, r = {}) => {
  const { compact: l = !1, withSymbol: s = !0 } = r, a = typeof t == "string" ? parseFloat(t) : t;
  if (isNaN(a)) return t;
  const i = l ? a >= 1e6 ? (a / 1e6).toFixed(1) + "M" : a >= 1e3 ? (a / 1e3).toFixed(0) + "K" : a.toLocaleString("en-KE") : a.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  return s ? `KES ${i}` : i;
}, ft = (t, r = {}) => {
  const { style: l = "medium", locale: s = "en-KE" } = r, a = typeof t == "string" ? new Date(t) : t;
  if (isNaN(a.getTime())) return t;
  const i = {
    short: { day: "numeric", month: "short", year: "numeric" },
    medium: { day: "numeric", month: "long", year: "numeric" },
    long: { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  };
  return a.toLocaleDateString(s, i[l] || i.medium);
}, vt = (t) => t.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_]+/g, "-").replace(/^-+|-+$/g, ""), kt = (t, r = 100) => t.length > r ? t.slice(0, r).trimEnd() + "..." : t, wt = () => Math.random().toString(36).substring(2, 11);
function V(t = {}) {
  const r = [];
  return t.x !== void 0 && r.push(`translateX(${t.x}px)`), t.y !== void 0 && r.push(`translateY(${t.y}px)`), t.rotate !== void 0 && r.push(`rotate(${t.rotate}deg)`), t.scale !== void 0 && r.push(`scale(${t.scale})`), {
    opacity: t.opacity !== void 0 ? t.opacity : 1,
    transform: r.length > 0 ? r.join(" ") : void 0
  };
}
const Q = ({
  as: t = "div",
  animate: r = {},
  transition: l = {},
  initial: s,
  children: a,
  className: i = ""
}) => {
  const [d, n] = v(
    () => V(s !== void 0 ? s : r)
  ), o = T(s === void 0);
  L(() => {
    if (o.current)
      n(V(r));
    else {
      o.current = !0;
      const h = requestAnimationFrame(() => {
        n(V(r));
      });
      return () => cancelAnimationFrame(h);
    }
  }, [r.x, r.y, r.rotate, r.scale, r.opacity]);
  const g = l.duration ?? 300, m = l.delay ?? 0, x = l.ease ?? "ease";
  return le(t, {
    className: i,
    style: {
      ...d,
      transition: o.current ? `all ${g}ms ${x} ${m}ms` : "none"
    }
  }, a);
}, ze = ["div", "span", "p", "h1", "h2", "h3", "section", "article", "header", "footer", "nav", "main", "aside", "ul", "ol", "li", "a", "button", "label", "figure", "figcaption", "blockquote"], Nt = new Proxy(Q, {
  get(t, r) {
    if (ze.includes(r))
      return (l) => /* @__PURE__ */ e(Q, { ...l, as: r });
  }
}), Se = (t) => {
  const r = Math.floor(t), l = t % 1 >= 0.5, s = 5 - r - (l ? 1 : 0);
  return /* @__PURE__ */ c("span", { className: "inline-flex gap-0.5", children: [
    Array.from({ length: r }, (a, i) => /* @__PURE__ */ e(u, { name: "star", size: 14, className: "text-amber-400 fill-amber-400" }, `f${i}`)),
    l && /* @__PURE__ */ e(u, { name: "star", size: 14, className: "text-amber-400 fill-amber-400", style: { opacity: 0.5 } }),
    Array.from({ length: s }, (a, i) => /* @__PURE__ */ e(u, { name: "star", size: 14, className: "text-gray-300 dark:text-gray-600" }, `e${i}`))
  ] });
}, Le = ({
  image: t,
  tag: r,
  title: l,
  description: s,
  price: a,
  rating: i,
  badge: d,
  icon: n,
  cta: o,
  variant: g = "product",
  className: m = ""
}) => {
  const x = g === "service";
  return /* @__PURE__ */ c("div", { className: `group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${m}`, children: [
    d && /* @__PURE__ */ e("span", { className: "absolute top-3 left-3 z-10 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-sm", children: d }),
    x ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-40 sm:h-48 bg-gray-50 dark:bg-gray-800/60", children: n ? typeof n == "string" ? /* @__PURE__ */ e(u, { name: n, size: 48, className: "text-gray-400" }) : n : /* @__PURE__ */ e(u, { name: "package", size: 40, className: "text-gray-300 dark:text-gray-600" }) }) : /* @__PURE__ */ e("div", { className: "aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800", children: t ? /* @__PURE__ */ e("img", { src: t.src, alt: t.alt || l, className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" }) : /* @__PURE__ */ e("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e(u, { name: "image", size: 32, className: "text-gray-300 dark:text-gray-600" }) }) }),
    /* @__PURE__ */ c("div", { className: "p-4 sm:p-5", children: [
      r && /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-500", children: r }),
      /* @__PURE__ */ e("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-0.5 leading-snug", children: l }),
      s && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed", children: s }),
      a && /* @__PURE__ */ e("p", { className: "text-lg font-bold text-gray-900 dark:text-white mt-2", children: a }),
      i && /* @__PURE__ */ e("div", { className: "mt-2", children: Se(i) }),
      o && /* @__PURE__ */ e("div", { className: "mt-4", children: o.href ? /* @__PURE__ */ c("a", { href: o.href, className: "inline-flex items-center justify-center text-sm font-medium bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors", children: [
        o.label,
        /* @__PURE__ */ e(u, { name: "arrowRight", size: 14, className: "ml-1.5" })
      ] }) : /* @__PURE__ */ c("button", { onClick: o.onClick, className: "inline-flex items-center justify-center text-sm font-medium bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors", children: [
        o.label,
        /* @__PURE__ */ e(u, { name: "arrowRight", size: 14, className: "ml-1.5" })
      ] }) })
    ] })
  ] });
}, Z = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, je = () => /* @__PURE__ */ c("div", { className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden", children: [
  /* @__PURE__ */ e(E, { className: "aspect-[4/3] rounded-none" }),
  /* @__PURE__ */ c("div", { className: "p-4 sm:p-5 space-y-3", children: [
    /* @__PURE__ */ e(E, { className: "h-3 w-16" }),
    /* @__PURE__ */ e(E, { className: "h-5 w-3/4" }),
    /* @__PURE__ */ e(E, { className: "h-4 w-full" }),
    /* @__PURE__ */ e(E, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ e(E, { className: "h-4 w-2/5" }),
    /* @__PURE__ */ e(E, { className: "h-9 w-28 rounded-lg" })
  ] })
] }), $t = ({
  items: t = [],
  columns: r = 3,
  variant: l = "product",
  title: s,
  description: a,
  loading: i = !1,
  empty: d,
  className: n = ""
}) => {
  const o = Z[r] || Z[3];
  return i ? /* @__PURE__ */ c("section", { className: n, children: [
    s && /* @__PURE__ */ e("h2", { className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2", children: s }),
    a && /* @__PURE__ */ e("p", { className: "text-gray-500 dark:text-gray-400 mb-8 max-w-2xl", children: a }),
    /* @__PURE__ */ e("div", { className: `grid ${o} gap-6`, children: Array.from({ length: r * 2 }, (g, m) => /* @__PURE__ */ e(je, {}, m)) })
  ] }) : !t || t.length === 0 ? /* @__PURE__ */ c("section", { className: n, children: [
    s && /* @__PURE__ */ e("h2", { className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2", children: s }),
    d || /* @__PURE__ */ e("div", { className: "text-center py-16 text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ e("p", { children: "No items available yet." }) })
  ] }) : /* @__PURE__ */ c("section", { className: n, children: [
    s && /* @__PURE__ */ e("h2", { className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2", children: s }),
    a && /* @__PURE__ */ e("p", { className: "text-gray-500 dark:text-gray-400 mb-8 max-w-2xl", children: a }),
    /* @__PURE__ */ e("div", { className: `grid ${o} gap-6`, children: t.map((g, m) => /* @__PURE__ */ e(Le, { ...g, variant: g.variant || l }, m)) })
  ] });
}, Mt = ({
  placeholder: t = "Search...",
  value: r = "",
  onChange: l,
  onSubmit: s,
  filters: a,
  loading: i = !1,
  className: d = ""
}) => {
  const [n, o] = v(!1), [g, m] = v(null), x = T(null);
  L(() => {
    const b = (y) => {
      x.current && !x.current.contains(y.target) && o(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []);
  const h = (b) => {
    b.preventDefault(), s && s(r);
  };
  return /* @__PURE__ */ e("div", { ref: x, className: `relative ${d}`, children: /* @__PURE__ */ c("form", { onSubmit: h, className: "relative flex items-center", children: [
    /* @__PURE__ */ c("div", { className: "relative flex-1", children: [
      /* @__PURE__ */ e(u, { name: "search", size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          value: r,
          onChange: (b) => l(b.target.value),
          placeholder: t,
          className: "w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 focus:border-gray-400 dark:focus:border-gray-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
        }
      ),
      i && /* @__PURE__ */ e("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("div", { className: "w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full animate-spin" }) })
    ] }),
    a && a.length > 0 && /* @__PURE__ */ c("div", { className: "relative ml-2", children: [
      /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => o(!n),
          className: "flex items-center gap-1.5 px-3 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap",
          children: [
            /* @__PURE__ */ e(u, { name: "filter", size: 14 }),
            /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: "Filters" }),
            /* @__PURE__ */ e(u, { name: "chevronDown", size: 12 })
          ]
        }
      ),
      n && /* @__PURE__ */ e("div", { className: "absolute right-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-40 p-3 space-y-3", children: a.map((b, y) => /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("p", { className: "text-[11px] font-semibold tracking-wide uppercase text-gray-500 mb-1.5", children: b.label }),
        /* @__PURE__ */ e("div", { className: "space-y-1", children: b.options.map((p, f) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => {
              m(p.value === g ? null : p.value), o(!1);
            },
            className: `block w-full text-left text-sm px-2.5 py-1.5 rounded-lg transition-colors ${p.value === g ? "bg-black text-white dark:bg-white dark:text-gray-900" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
            children: p.label
          },
          f
        )) })
      ] }, y)) })
    ] })
  ] }) });
}, zt = ({
  threshold: t = 300,
  size: r = "md",
  className: l = ""
}) => {
  const [s, a] = v(!1);
  L(() => {
    const o = () => a(window.scrollY > t);
    return window.addEventListener("scroll", o, { passive: !0 }), () => window.removeEventListener("scroll", o);
  }, [t]);
  const i = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-13 h-13"
  }, d = { sm: 16, md: 18, lg: 22 };
  return /* @__PURE__ */ e(
    "button",
    {
      onClick: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      "aria-label": "Back to top",
      className: `fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${i[r] || i.md} ${s ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
      children: /* @__PURE__ */ e(u, { name: "arrowUp", size: d[r] || d.md })
    }
  );
}, St = ({
  logos: t = [],
  title: r,
  variant: l = "grid",
  className: s = ""
}) => l === "carousel" ? /* @__PURE__ */ e("section", { className: `py-10 overflow-hidden ${s}`, children: /* @__PURE__ */ c(M, { children: [
  r && /* @__PURE__ */ e("p", { className: "text-center text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-500 mb-6", children: r }),
  /* @__PURE__ */ e("div", { className: "flex overflow-hidden", children: /* @__PURE__ */ e("div", { className: "flex gap-10 sm:gap-16 items-center animate-[slideIn_20s_linear_infinite]", children: [...t, ...t].map((a, i) => /* @__PURE__ */ e("div", { className: "flex-shrink-0 flex items-center justify-center h-8 sm:h-10", children: a.href ? /* @__PURE__ */ e("a", { href: a.href, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ e("img", { src: a.src, alt: a.alt, className: "h-full max-w-[120px] object-contain opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300" }) }) : /* @__PURE__ */ e("img", { src: a.src, alt: a.alt, className: "h-full max-w-[120px] object-contain opacity-50 grayscale" }) }, i)) }) })
] }) }) : /* @__PURE__ */ e("section", { className: `py-10 ${s}`, children: /* @__PURE__ */ c(M, { children: [
  r && /* @__PURE__ */ e("p", { className: "text-center text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6", children: r }),
  /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center items-center gap-8 sm:gap-12", children: t.map((a, i) => /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-8 sm:h-10", children: a.href ? /* @__PURE__ */ e("a", { href: a.href, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ e("img", { src: a.src, alt: a.alt, className: "h-full max-w-[120px] object-contain opacity-40 hover:opacity-60 transition-opacity" }) }) : /* @__PURE__ */ e("img", { src: a.src, alt: a.alt, className: "h-full max-w-[120px] object-contain opacity-40" }) }, i)) })
] }) }), ee = {
  default: "bg-gray-950 text-white",
  sale: "bg-red-500 text-white",
  info: "bg-blue-600 text-white",
  premium: "bg-amber-900 text-amber-100"
}, Lt = ({
  text: t,
  href: r,
  variant: l = "default",
  dismissible: s = !0,
  onDismiss: a,
  cta: i,
  className: d = ""
}) => {
  const [n, o] = v(!1);
  if (n) return null;
  const g = () => {
    o(!0), a && a();
  };
  return /* @__PURE__ */ c("div", { className: `flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 text-sm font-medium ${ee[l] || ee.default} ${d}`, children: [
    r ? /* @__PURE__ */ c("a", { href: r, className: "flex items-center gap-2 hover:opacity-80 transition-opacity", children: [
      /* @__PURE__ */ e("span", { children: t }),
      i && /* @__PURE__ */ e("span", { className: "font-semibold underline underline-offset-2", children: i.label })
    ] }) : /* @__PURE__ */ c("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { children: t }),
      i && /* @__PURE__ */ e("span", { className: "font-semibold underline underline-offset-2 cursor-pointer", children: i.label })
    ] }),
    s && /* @__PURE__ */ e("button", { onClick: g, className: "ml-2 p-0.5 hover:opacity-70 transition-opacity flex-shrink-0", "aria-label": "Dismiss announcement", children: /* @__PURE__ */ e(u, { name: "x", size: 14 }) })
  ] });
}, jt = ({
  address: t,
  coords: r,
  mapLink: l,
  embedUrl: s,
  label: a = "Find us",
  className: i = ""
}) => {
  const d = l || (r ? `https://www.google.com/maps?q=${r.lat},${r.lng}` : "#");
  return /* @__PURE__ */ e("section", { className: `py-12 lg:py-16 ${i}`, children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ c("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-start", children: [
    /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ e("p", { className: "text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1", children: a }),
      t && /* @__PURE__ */ c("div", { className: "flex items-start gap-3 mt-2", children: [
        /* @__PURE__ */ e(u, { name: "mapPin", size: 18, className: "text-gray-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ e("div", { children: t.split(`
`).map((n, o) => /* @__PURE__ */ e("p", { className: "text-gray-900 dark:text-white leading-relaxed", children: n }, o)) })
      ] }),
      r && /* @__PURE__ */ c(
        "a",
        {
          href: d,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors",
          children: [
            /* @__PURE__ */ e(u, { name: "externalLink", size: 14 }),
            "Open in Google Maps"
          ]
        }
      )
    ] }),
    s && /* @__PURE__ */ e("div", { className: "w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ e(
      "iframe",
      {
        src: s,
        title: "Map",
        width: "100%",
        height: "100%",
        style: { border: 0 },
        allowFullScreen: !0,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ) })
  ] }) }) });
};
export {
  ke as Accordion,
  Oe as Alert,
  Ne as Animate,
  Lt as AnnouncementBar,
  G as Avatar,
  zt as BackToTop,
  We as Badge,
  rt as Breadcrumbs,
  C as Button,
  pe as Card,
  Le as CatalogueCard,
  $t as CatalogueGrid,
  Xe as Checkbox,
  He as Chip,
  ht as ContactSection,
  M as Container,
  Be as Divider,
  et as Drawer,
  tt as DropdownMenu,
  Ke as EmptyState,
  ot as FAQ,
  it as Features,
  ct as Footer,
  Ae as Gallery,
  Pe as Grid,
  nt as Hero,
  u as Icon,
  jt as LocationMap,
  Fe as Modal,
  Nt as Motion,
  Ee as Navbar,
  at as Pagination,
  dt as Pricing,
  Ge as Progress,
  Mt as SearchBar,
  Re as Section,
  Ye as Select,
  E as Skeleton,
  Ue as SkeletonGroup,
  qe as Spinner,
  Ve as Stack,
  gt as Stats,
  Je as Switch,
  Ze as TabPanel,
  st as Table,
  Qe as Tabs,
  mt as Testimonials,
  fe as TextField,
  ve as Textarea,
  _e as ToastProvider,
  lt as Tooltip,
  St as TrustBar,
  Ie as WhatsAppFloat,
  ut as cn,
  ft as formatDate,
  yt as formatKES,
  wt as generateId,
  vt as slugify,
  kt as truncate,
  pt as useFetch,
  Me as useForm,
  xt as useLocalStorage,
  bt as useMediaQuery,
  De as useToast
};
