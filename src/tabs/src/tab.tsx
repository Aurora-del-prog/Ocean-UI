import { Ref, defineComponent, inject, toRefs } from 'vue'
import { TabProps, tabProps } from '../types/tab-type'

export default defineComponent({
  name: 'STab',
  props: tabProps,
  emits: [],
  setup(props: TabProps, { slots }) {
    const { id, title } = toRefs(props)
    //获取当前的人激活项并进行展示
    const activeTab = inject('active-tab') as Ref<string>
    // 获取tabsData,并将自身数据加入其中,使得父组件可以获取到完整的标签数据
    const tabsData = inject('tabs-data') as Ref<
      Array<{ id: string; title: string }>
    >
    tabsData.value.push({
      id: props.id,
      title: props.title
    })
    return () => (
      <>
        {id.value === activeTab.value && (
          <div class={'s-tab'}>{slots.default?.()}</div>
        )}
      </>
    )
  }
})
