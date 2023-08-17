import type { PropType, ExtractPropTypes } from 'vue'

export const iconProps = {
  //名称
  name: {
    type: String,
    default: ''
  },
  //前缀
  prefix: {
    type: String,
    default: 'iconfont'
  },
  //尺寸
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 'inherit'
  },
  //颜色
  color: {
    type: String,
    default: 'inherit'
  },
  //组件
  component: {
    type: String,
    default: null
  },
  //组件
  loading: {
    type: Boolean,
    default: false
  }
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
