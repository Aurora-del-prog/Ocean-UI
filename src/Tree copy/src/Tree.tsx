import { defineComponent } from "vue";
import { TreeProps, treeProps } from "./type/Tree-type";

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    return () => {
      return (
        <div class={"s-tree"}></div>
      )
    }
  },
})