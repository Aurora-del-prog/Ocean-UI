import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./type/Button-types";

export default defineComponent({
  name: 'Button',
  props:buttonProps,
  setup(props: ButtonProps, {slots}) {
    const { type } = toRefs(props)
    return ()=>{
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button class={`s-btn s-btn--${type.value}`}>
          { defaultSlot }
        </button>)
    }
  },
})