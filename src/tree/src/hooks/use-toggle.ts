import { Ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseLazyLoad, IUseToggle } from '../types/use-tree-type'
import { useLazyLoad } from './use-lazy-load'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore,
  context: SetupContext,
  lazyLoad?: IUseLazyLoad
): IUseToggle {
  const { lazyLoadNodes } = useLazyLoad(innerData, core, context)
  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
      if (cur.expanded) {
        // 节点懒加载
        lazyLoadNodes(cur)
      }
    }
  }
  return {
    toggleNode
  }
}
