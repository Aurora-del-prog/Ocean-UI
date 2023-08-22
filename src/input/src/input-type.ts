import type { PropType, ExtractPropTypes } from 'vue'

export type InputSize = 'lg' | 'sm'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  //text / password / radio(选项)...
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'sm'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: ''
  },
  autoCompelte: {
    type: Boolean,
    default: false
  }
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>
