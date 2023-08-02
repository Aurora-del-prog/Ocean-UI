import { defineComponent, toRefs } from 'vue'
import { TreeNodeProps, treeNodeProps } from '../types/tree-node-type'

// 节点高度
const NODE_HEIGHT = 32

// 节点缩进大小
const NODE_INDENT = 24

export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { lineable, checkable, operable, treeNode } = toRefs(props)

    return () => (
      <div
        class="s-tree__node relative leading-8 hover:bg-slate-300"
        style={{
          paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`
        }}
      >
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
