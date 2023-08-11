import type { PropType, ExtractPropTypes } from 'vue'

export const paginationProps = {
  // 总数，类型为 Number，默认值为 0。表示总的数据项个数。
  total: {
    type: Number,
    default: 0
  },
  // 每页显示的数据项数量，类型为 Number，默认值为 10。
  pageSize: {
    type: Number,
    default: 10
  },
  // 分页器中显示的页码数量，类型为 Number，默认值为 7。表示分页器中同时显示的页码按钮的个数。
  pagerCount: {
    type: Number,
    default: 7
  },
  // 当前选中的页码，类型为 Number，默认值为 1。表示当前页码的索引值。
  modelValue: {
    type: Number,
    default: 1
  }
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
