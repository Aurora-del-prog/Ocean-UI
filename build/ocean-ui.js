import { defineComponent as d, toRefs as f, createVNode as i } from "vue";
const r = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  }
}, n = /* @__PURE__ */ d({
  name: "Button",
  props: r,
  setup(t, {
    slots: e
  }) {
    console.log(t);
    const {
      type: o,
      size: l,
      disabled: s,
      block: a
    } = f(t);
    return () => {
      const u = e.default ? e.default() : "按钮", c = a.value ? "s-btn--block" : "";
      return i("button", {
        class: `s-btn s-btn--${o.value} s-btn--${l.value} ${c}`,
        disabled: s.value
      }, [u]);
    };
  }
}), b = {
  install(t) {
    t.component(n.name, n);
  }
}, p = [b], y = {
  install(t) {
    p.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  y as default
};
