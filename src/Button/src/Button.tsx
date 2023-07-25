import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./type/Button-types";

export default defineComponent({
  name: 'Button',
  props:buttonProps,
  setup(props: ButtonProps, {slots}) {
    console.log(props)
    const { type, size, disabled, block } = toRefs(props)
    
    return ()=>{
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const blockCls = block.value ? 's-btn--block' : ''
      return (
        <button 
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}  
          disabled={disabled.value}
        >
          { defaultSlot }
        </button>)
    }
  },
})