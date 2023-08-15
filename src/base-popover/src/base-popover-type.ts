import type { PropType, ExtractPropTypes } from 'vue'
import { Placement } from '@floating-ui/dom'

export const basePopoverProps = {
  // 控制组件是否显示
  modelValue: {
    type: Boolean,
    default: false
  },
  // 指定组件的位置参考元素，使得组件相对于该元素进行定位
  host: {
    type: Object as PropType<HTMLElement>,
    default: () => null
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
  }
} as const

export type BasePopoverProps = ExtractPropTypes<typeof basePopoverProps>
