import { defineComponent as c, toRefs as b, createVNode as f } from "vue";
const i = {
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
}, o = /* @__PURE__ */ c({
  name: "Button",
  props: i,
  setup(e, {
    slots: t
  }) {
    console.log(e);
    const {
      type: n,
      size: l,
      disabled: a,
      block: s
    } = b(e);
    return () => {
      const u = t.default ? t.default() : "按钮", d = s.value ? "s-btn--block" : "";
      return f("button", {
        class: `s-btn s-btn--${n.value} s-btn--${l.value} ${d}`,
        disabled: a.value
      }, [u]);
    };
  }
}), r = {
  install(e) {
    e.component(o.name, o);
  }
};
export {
  o as Button,
  r as default
};
