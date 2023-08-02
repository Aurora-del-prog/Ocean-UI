import { SetupContext, defineComponent, provide, toRefs } from 'vue'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import '../style/tree.scss'
import useTree from './hooks/use-tree'
import STreeNode from './components/tree-node'
import STreeNodeToggle from './components/tree-node-toggle'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, context: SetupContext) {
    // 获取data
    const { data, height, itemHeight } = toRefs(props)
    const { slots } = context
    const treeData = useTree(data.value, props, context)
    provide('TREE_UTILS', treeData)
    return () => {
      const TreeNode = (treeNode: IInnerTreeNode) => (
        <STreeNode {...props} treeNode={treeNode}>
          {{
            content: () =>
              slots.content ? slots.content(treeNode) : treeNode.label,
            icon: () =>
              // 传递treenode和toggleNode方法给外面
              slots.icon ? (
                slots.icon({
                  nodeData: treeNode,
                  toggleNode: treeData.toggleNode
                })
              ) : (
                <STreeNodeToggle
                  expanded={!!treeNode.expanded}
                  onClick={() => treeData.toggleNode(treeNode)}
                ></STreeNodeToggle>
              )
          }}
        </STreeNode>
      )
      return (
        <div class="s-tree">
          {
            // 没有height，则正常输出节点
            treeData.expendedTree.value.map((treeNode: IInnerTreeNode) =>
              TreeNode(treeNode)
            )
          }
        </div>
      )
    }
  }
})
