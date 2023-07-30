import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./type/Button-types";
import '../style/loading.css'

export default defineComponent({
  name: 'HButton',
  props:buttonProps,
  setup(props: ButtonProps, {slots}) {
    const { type, size, disabled, block, round,loading  } = toRefs(props)
    
    return ()=>{
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const blockCls = block.value ? 's-btn--block' : ''
      const roundCls = round.value ? 's-btn--round' : ''

      return (
        <button 
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls} ${roundCls}`}  
          disabled={disabled.value}
        >
        {loading.value &&  <svg viewBox="0 0 50 50"    class="loading-svg">    
          <circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
        </svg> }
          {!loading.value && defaultSlot }
        </button>)
    }
  },
})