import { ExtractPropTypes, PropType } from "vue"

export type IButtonType = 'primary' | 'secondary' | 'text'
export type IButtonSize = 'small' | 'medium' | 'large'

// Button中的props定义
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
}

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>