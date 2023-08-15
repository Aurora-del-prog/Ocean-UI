import { defineComponent, ref, toRefs } from 'vue'
import { BasePopover } from '../../base-popover'
import { PopoverProps, popoverProps } from './popover-type'
import { onClickOutside } from '@vueuse/core'
import '../style/popover.scss'

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  emits: ['update:modelValue'],
  setup(props: PopoverProps, { slots }) {
    // 获取属性中关键值
    const { modelValue, title } = toRefs(props)
    console.log(modelValue.value)

    // 宿主元素
    const hostRef = ref()

    // const target = ref()

    const visible = ref(false)
    visible.value = modelValue.value ? modelValue.value : false

    //点击外部区域，关闭tip
    onClickOutside(hostRef, event => {
      visible.value = false
    })

    const clickTrigger = () => {
      if (
        props.trigger.toLocaleLowerCase() === 'click' ||
        props.trigger.toLocaleLowerCase() === 'manual'
      ) {
        visible.value = !visible.value
      }
    }
    const mousedownTrigger = () => {
      if (props.trigger.toLocaleLowerCase() === 'hover') {
        visible.value = true
      }
    }
    const mouseupTrigger = () => {
      if (props.trigger.toLocaleLowerCase() === 'hover') {
        visible.value = false
      }
    }
    //聚焦触发
    function focusTriggerHandler() {
      if (props.trigger.toLowerCase() == 'focus') {
        visible.value = true
      }
    }
    //失焦消失
    function blurTriggerHandler() {
      if (props.trigger.toLowerCase() == 'focus') {
        visible.value = false
      }
    }

    return () => (
      <div>
        <div
          ref={hostRef}
          onClick={clickTrigger}
          onMouseenter={mousedownTrigger}
          onMouseleave={mouseupTrigger}
          onMousedown={focusTriggerHandler}
          onMouseup={blurTriggerHandler}
          class="reference-content"
        >
          {slots?.reference?.()}
        </div>
        {visible.value && (
          <BasePopover
            class="s-popover"
            host={hostRef.value}
            {...props}
            v-model={visible.value}
          >
            <h4 class="s-popover__title">{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </div>
    )
  }
})
