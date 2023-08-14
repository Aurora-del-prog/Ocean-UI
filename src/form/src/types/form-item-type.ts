import { Value } from 'async-validator'
import type { PropType, ExtractPropTypes } from 'vue'
import { LabelAlign, LabelSize, Layout } from './form-type'

export const formItemProps = {
  label: {
    type: String
  },
  field: {
    type: String
  }
} as const
export type FormItemProps = ExtractPropTypes<typeof formItemProps>

export type LabelData = {
  layout: Layout
  labelSize: LabelSize
  labelAlign: LabelAlign
}

// 可能是异步结果-从服务器校验之后返回
export type FormItemContext = {
  validate: () => Promise<Value>
}
