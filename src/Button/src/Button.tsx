import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./type/Button-types";

export default defineComponent({
  name: 'HButton',
  props:buttonProps,
  setup(props: ButtonProps, {slots}) {
    const { type, size, disabled, block, round  } = toRefs(props)
    
    return ()=>{
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const blockCls = block.value ? 's-btn--block' : ''
      const roundCls = round.value ? 's-btn--round' : ''

      return (
        <button 
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls} ${roundCls}`}  
          disabled={disabled.value}
        >
          { defaultSlot }
        </button>)
    }
  },
})