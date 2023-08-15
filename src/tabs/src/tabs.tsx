import { defineComponent, provide, ref, toRefs, watch } from 'vue'
import { TabsProps, tabsProps } from '../types/tabs-type'
import '../style/tabs.scss'

export default defineComponent({
  name: 'STabs',
  props: tabsProps,
  emits: ['update:modelValue'],
  setup(props: TabsProps, { slots }) {
    const { modelValue, closable, addable } = toRefs(props)
    // 模拟标签页数据，并传递给隔代
    const tabsData = ref<
      Array<{ id: string; title: string; type?: 'random'; content?: string }>
    >([])
    provide('tabs-data', tabsData)
    const len = ref(tabsData.value.length)

    // 使用watch函数监听tabsData的长度变化
    watch(len, (newLength, oldLength) => {
      if (newLength === 1) {
        activeTab.value === tabsData.value[0].id
      }
    })

    // 获取激活id
    const activeTab = ref(modelValue.value)
    provide('active-tab', activeTab)

    // 改变激活状态
    const changeTab = (tabId: string) => {
      activeTab.value = tabId
    }
    return () => (
      <div class={'s-tabs'}>
        {/* 导航页签 */}
        <ul class="s-tabs__nav">
          {tabsData.value.map(tab => (
            <li
              onClick={() => changeTab(tab.id)}
              class={tab.id === activeTab.value ? 'active' : ''}
              key={tab.id}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        {/* 内容区 */}
        {slots.default?.()}
      </div>
    )
  }
})
