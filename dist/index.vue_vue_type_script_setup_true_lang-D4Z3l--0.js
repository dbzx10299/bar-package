import { defineComponent as c, openBlock as m, createBlock as u, resolveDynamicComponent as f, normalizeClass as d, unref as o, normalizeStyle as g, withCtx as y, renderSlot as h } from "vue";
import './assets/index.css';const w = "_wrapper_1c7sl_1", _ = "_truncate_1c7sl_12", b = "_clamp_1c7sl_22", z = "_monospace_1c7sl_31", r = {
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
      class: d([
        o(r).wrapper,
        {
          [o(r).monospace]: e.monospace,
          [o(r).truncate]: e.truncate === !0,
          [o(r).clamp]: typeof e.truncate == "number"
        }
      ]),
      style: g({
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
