import { ExtractPropTypes, PropType } from "vue"

export type IButtonType = 'primary' | 'secondary' | 'text'

// Button中的props定义
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  }
}

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>