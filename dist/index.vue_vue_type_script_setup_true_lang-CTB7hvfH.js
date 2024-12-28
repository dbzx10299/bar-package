import { defineComponent as c, openBlock as m, createBlock as u, resolveDynamicComponent as f, normalizeClass as g, unref as o, normalizeStyle as d, withCtx as y, renderSlot as h } from "vue";
import './assets/index.css';const w = "text_wrapper__piKxD", _ = "text_truncate__WjpO5", b = "text_clamp__1f3gV", z = "text_monospace__fWfcE", r = {
  wrapper: w,
  truncate: _,
  clamp: b,
  monospace: z
}, k = /* @__PURE__ */ c({
  __name: "index",
  props: {
    as: { default: "p" },
    color: { default: "#a1a1a1" },
    monospace: { type: Boolean },
    size: { default: "1rem" },
    weight: { default: 400 },
    lineHeight: { default: 1.5 },
    letterSpacing: { default: "initial" },
    align: {},
    truncate: { type: [Boolean, Number] },
    transform: {}
  },
  setup(B) {
    const i = ["sm", "md", "lg"];
    function t(e, n) {
      const s = {};
      if (typeof n != "object")
        n !== null && (s[`--${e}`] = n);
      else {
        let l;
        i.forEach((p) => {
          const a = n[p];
          a != null && a !== l && (s[`--${p}-${e}`] = a, l = a);
        });
      }
      return s;
    }
    return (e, n) => (m(), u(f(e.as), {
      class: g([
        o(r).wrapper,
        {
          [o(r).monospace]: e.monospace,
          [o(r).truncate]: e.truncate === !0,
          [o(r).clamp]: typeof e.truncate == "number"
        }
      ]),
      style: d({
        ...t("text-size", e.size),
        ...t("text-weight", e.weight),
        ...t("text-line-height", e.lineHeight),
        ...t("text-letter-spacing", e.letterSpacing),
        ...t("text-align", e.align),
        "--text-color": e.color,
        ...typeof e.truncate == "number" && { "--text-clamp": e.truncate },
        ...typeof e.transform == "string" && { "--text-transform": e.transform }
      })
    }, {
      default: y(() => [
        h(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
export {
  k as _
};
