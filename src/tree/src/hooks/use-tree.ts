// composables/use-tree.ts
import { ref, Ref, SetupContext, unref } from 'vue'
import { ITreeNode, TreeProps } from '../tree-type'
import { TreeUtils } from '../types/use-tree-type'
import { generateInnerTree } from '../utils'
import { useCheck } from './use-check'
import { useCore } from './use-core'
import { useToggle } from './use-toggle'
import { useOperate } from './use-operate'

export default function useTree(
  tree: ITreeNode[] | Ref<ITreeNode[]>,
  treeProps: TreeProps,
  context: SetupContext
): TreeUtils {
  const data = unref(tree)
  const innerData = ref(generateInnerTree(data))

  const core = useCore(innerData)
  const toggle = useToggle(innerData)
  const check = useCheck(innerData, core)
  const plugins = [useToggle, useCheck, useOperate]

  // 聚合插件
  const pluginMetheds = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core) }
  }, {})

  return {
    ...core,
    ...pluginMetheds,
    treeData: innerData
  } as TreeUtils
}
