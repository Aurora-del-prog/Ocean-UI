import type { PropType, ExtractPropTypes } from 'vue'
import { Placement } from '@floating-ui/dom'

export const popoverProps = {
  // 控制组件是否显示
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  // 是否显示箭头
  showArrow: {
    type: Boolean,
    default: false
  },
  // 表示组件的弹出位置
  //popover展示出的位置,可选值——top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  //触发方式
  trigger: {
    type: String,
    default: ''
  }
} as const

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
