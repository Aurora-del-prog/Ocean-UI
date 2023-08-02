import { defineComponent, inject, toRefs } from 'vue'
import { TreeNodeProps, treeNodeProps } from '../types/tree-node-type'
import { TreeUtils } from '../types/use-tree-type'

// 节点高度
const NODE_HEIGHT = 32

// 节点缩进大小
const NODE_INDENT = 24

export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { lineable, checkable, operable, treeNode } = toRefs(props)
    const { toggleCheckNode, getChildrenExpanded } = inject(
      'TREE_UTILS'
    ) as TreeUtils

    return () => (
      <div
        class="s-tree__node relative leading-8 hover:bg-slate-300"
        style={{
          paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`
        }}
      >
        {/* 连接线 */}
        {!treeNode.value.isLeaf && treeNode.value.expanded && lineable.value && (
          <span
            class="s-tree-node__vline absolute w-px bg-slate-300"
            style={{
              height: `${
                NODE_HEIGHT * getChildrenExpanded(treeNode.value).length
              }px`,
              left: `${NODE_INDENT * (treeNode.value.level - 1) + 12}px`,
              top: `${NODE_HEIGHT}px`
            }}
          ></span>
        )}
        <div class="s-tree__node--content">
          {/* 如果是叶子节点则放一个空白占位元素，否则放一个三角形反馈图标 */}
          {treeNode.value.isLeaf ? (
            <span
              style={{
                display: 'inline-block',
                width: '25px'
              }}
            />
          ) : (
            slots.icon!()
          )}
          {/* 节点文本 */}
          {slots.content!()}
        </div>
      </div>
    )
  }
})
