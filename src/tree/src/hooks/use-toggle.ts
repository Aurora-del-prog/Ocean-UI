import { Ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseLazyLoad, IUseToggle } from '../types/use-tree-type'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core?: IUseCore,
  context?: SetupContext,
  lazyLoad?: IUseLazyLoad
): IUseToggle {
  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }
  return {
    toggleNode
  }
}
