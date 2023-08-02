import { Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCheck, IUseCore, IUseToggle } from '../types/use-tree-type'

export function useCheck(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren }: IUseCore
): IUseCheck {
  const toggleCheckNode = (treeNode: IInnerTreeNode) => {
    // 父节点可能一开始没有设置checked
    // 这里手动设置一下
    treeNode.checked = !treeNode.checked
    treeNode.inChecked = false // 重置待选中状态

    // 父->子
    // 获取所有子节点，设置它们checked跟父节点一致
    getChildren(treeNode).forEach(child => {
      child.checked = treeNode.checked
    })

    const getParent = (node: IInnerTreeNode): IInnerTreeNode => {
      const parentNode = innerData.value.find(item => item.id === node.parentId)
      return parentNode as IInnerTreeNode
    }

    // 子-父联动 并且设置父节点选中内容
    //获取当前节点的父节点，查看父节点的所有直接子节点是否全部选中，如果是，父节点也应该为选中，半选取消，如果不是（部分子节点选中）,父节点半选，然后再递归父节点的父节点查找
    const setChecked = (node: IInnerTreeNode) => {
      // 获取父节点
      const parentNode = getParent(node)
      if (!parentNode) return
      // 获取兄弟节点：相当于获取 parentNode 的直接子节点
      const siblingNodes = getChildren(parentNode, true)
      // 兄弟节点是否全部选中状态
      const siblingCheckStatus = siblingNodes.every(sibling => sibling.checked)
      // 将父节点的 checked 属性设置为 true 或 false
      parentNode.checked = siblingCheckStatus
      // 兄弟节点中是否存在选中的节点
      const siblingIncheckedStatus = siblingNodes.some(child => child.checked)
      // 将父节点的 inChecked 属性设置为 true 或 false
      if (siblingCheckStatus) {
        // 全部选中
        parentNode.inChecked = false
      } else if (siblingIncheckedStatus) {
        // 兄弟节点中存在选中的节点
        parentNode.inChecked = true
      } else {
        parentNode.inChecked = false
      }
      // 递归向上遍历父节点
      if (parentNode.parentId) setChecked(parentNode)
    }
    // 从根节点开始向下遍历整个树形结构
    setChecked(treeNode)
  }
  return {
    toggleCheckNode
  }
}
