import {
  defineComponent,
  getCurrentInstance,
  ref,
  nextTick,
  toRefs,
  onMounted,
  onUnmounted,
  onBeforeUnmount
} from 'vue'
import { AutoompleteProps, autoCmpleteProps } from './auto-complete-type'
import { onClickOutside } from '@vueuse/core'
import '../style/auto-complete.scss'

export default defineComponent({
  name: 'SAutoComplete',
  props: autoCmpleteProps,
  emits: ['update:modelValue'],
  setup(props: AutoompleteProps, { slots, emit }) {
    const { modelValue, ...restProps } = toRefs(props)

    let list = ref<any>([])
    let itemIndex = ref(-1)
    let visible = ref(true)
    const inputValue = ref('')
    // 宿主元素
    const hostRef = ref()
    inputValue.value = modelValue.value
    const onInput = (e: Event) => {
      visible.value = true
      const val = (e.target as HTMLInputElement).value // 获取输入框的值
      if (val) {
        if (props.fetchSuggestions) {
          const result = props.fetchSuggestions(val)
          if (result instanceof Promise) {
            result.then(data => {
              list.value = data
            })
          } else {
            list.value = result
          }
        }
        // 实现v-model的双向绑定，将输入框的值通过 emit 发送给父组件，触发更新父组件中的 modelValue 属性
        emit('update:modelValue', val)
      } else {
        list.value = []
      }
    }
    const handleSelect = (item: any) => {
      inputValue.value = item.value
      list.value = []
      emit('update:modelValue', inputValue.value)
    }
    const instance = getCurrentInstance()
    const throttle = (func: any, delay = 300) => {
      let timerId: any = null
      return function (...args: any[]) {
        if (timerId) {
          clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
          func.apply(instance, args)
          timerId = null
        }, delay)
      }
    }
    const highlight = (index: number) => {
      if (index < 0) index = 0
      if (index >= list.value.length) {
        index = list?.value.length - 1
      }
      itemIndex.value = index
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Enter':
          if (list.value[itemIndex.value]) {
            handleSelect(list.value[itemIndex.value])
          }
          break
        case 'ArrowUp':
          itemIndex.value--
          highlight(itemIndex.value)
          break
        case 'ArrowDown':
          itemIndex.value++
          highlight(itemIndex.value)
          break
        case 'Escape':
          console.log(2222)
          break
        default:
          break
      }
    }

    const popList = function () {
      list.value = []
    }
    // 替换为你的输入框选择器
    let inputElement: HTMLElement | null = null
    //失去焦点事件
    onMounted(() => {
      inputElement = document.querySelector('input')
      inputElement?.addEventListener('blur', popList)
    })
    onBeforeUnmount(() => {
      // 在需要取消监听的地方
      inputElement?.removeEventListener('blur', popList)
    })
    //点击外部区域，关闭tip
    onClickOutside(hostRef, event => {
      visible.value = false
    })
    const handleenter = (e: Event) => {
      itemIndex.value = -1
    }
    return () => (
      <div class="s-auto-complete" ref={hostRef}>
        <s-input
          value={modelValue.value}
          v-model={inputValue.value}
          size="normal"
          onInput={throttle(onInput)}
          onKeydown={handleKeyDown}
          {...restProps}
        ></s-input>
        {visible.value && list.value.length > 0 && (
          <ul class={['s-ul']}>
            {list.value.map((item: any, index: number) => (
              <li
                key={item}
                onMouseenter={handleenter}
                onClick={() => handleSelect(item)}
                class={['s-li', { 's-itemSelect': index === itemIndex.value }]}
              >
                {/* //外部自定义样式 */}
                {slots.renderOption ? slots.renderOption?.(item) : item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
})
