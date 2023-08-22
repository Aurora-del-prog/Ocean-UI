import type { PropType, ExtractPropTypes } from 'vue'
interface DataSourceObject {
  value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject

export const autoCmpleteProps = {
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
  },
  /**
   * 返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise
   * type DataSourceType<T = {}> = T & DataSourceObject
   */
  fetchSuggestions: Function as PropType<
    (s: string) => DataSourceType[] | Promise<DataSourceType[]>
  >,

  /** 点击选中建议项时触发的回调*/
  onSelect: Function as PropType<(s: DataSourceType) => void>,
  /** 文本框发生改变的时候触发的事件*/
  onChange: Function as PropType<(s: string) => void>
} as const

export type AutoompleteProps = ExtractPropTypes<typeof autoCmpleteProps>
