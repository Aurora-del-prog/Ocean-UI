import { ExtractPropTypes, PropType } from "vue"


export interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开
  inChecked?: boolean // 待选中

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export const treeProps = {} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>