import { computed, Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore } from '../types/use-tree-type'

export function useCore(innerData: Ref<IInnerTreeNode[]>): IUseCore {
  // 获取那些展开的节点列表
  const expendedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = []
    const result = []

    for (const item of innerData.value) {
      // 如果遍历的节点在排除列表中，跳过本次循环
      if (excludeNodes.map(node => node.id).includes(item.id)) {
        continue
      }
      // 当前节点收起，它的子节点应该被排除掉
      if (item.expanded !== true) {
        excludeNodes = getChildren(item)
      }
      result.push(item)
    }

    return result
  })

  // 获取指定节点的子节点
  const getChildren = (node: IInnerTreeNode, recursive = true) => {
    const result = []
    // 找到node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有子节点（level 比当前节点大）
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }

  // 计算参考线高度
  const getChildrenExpanded = (
    node: IInnerTreeNode, // 定义一个名为 getChildrenExpanded 的函数，接收两个参数：节点对象 node，类型为 IInnerTreeNode；存储结果的数组 result，类型为 IInnerTreeNode[]，初始值为空数组
    result: IInnerTreeNode[] = []
  ) => {
    // 获取当前节点的直接子节点
    const childrenNodes = getChildren(node, false) // 调用 getChildren 函数，获取当前节点的所有直接子节点，不包含已隐藏的节点，并将结果存储在 childrenNodes 变量中
    result.push(...childrenNodes) // 将 childrenNodes 数组中的所有元素添加到 result 数组中，使用扩展运算符 ...
    childrenNodes.forEach(item => {
      // 遍历 childrenNodes 数组中的每个节点
      if (item.expanded) {
        // 如果节点已展开，则执行下面的递归操作
        getChildrenExpanded(item, result) // 递归调用 getChildrenExpanded 函数，传入子节点 item 和存储结果的数组 result
      }
    })
    return result // 返回存储结果的数组 result
  }

  const getIndex = (node: IInnerTreeNode) => {
    if (!node) return -1
    return innerData.value.findIndex(item => item.id === node.id)
  }

  const getNode = (node: IInnerTreeNode) => {
    return innerData.value.find(item => item.id === node.id)
  }

  const getParent = (node: IInnerTreeNode) => {
    return innerData.value.find(item => item.id === node.parentId)
  }

  return {
    expendedTree,
    getChildren,
    getChildrenExpanded,
    getIndex,
    getNode,
    getParent
  }
}
