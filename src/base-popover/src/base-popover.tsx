import { defineComponent, watch, ref, toRefs, nextTick, onUnmounted } from 'vue'
import { computePosition, arrow, offset, autoPlacement } from '@floating-ui/dom'
import { BasePopoverProps, basePopoverProps } from './base-popover-type'
import '../style/base-popover.scss'

export default defineComponent({
  name: 'SBasePopover',
  props: basePopoverProps,
  emits: ['update:modelValue'],
  setup(props: BasePopoverProps, { slots, attrs }) {
    // 获取属性中关键值
    const { host: hostRef, modelValue, showArrow, placement } = toRefs(props)
    // 箭头元素
    const arrowRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位
    const updatePosition = () => {
      const middleware = [] // 创建一个中间件数组，用于存储调整样式的函数

      if (showArrow.value) {
        middleware.push(offset(8)) // 如果显示箭头，则添加偏移样式中间件，将箭头与悬浮元素稍微偏离一定距离
        middleware.push(arrow({ element: arrowRef.value })) // 添加箭头样式中间件，根据箭头元素设置箭头样式
      }

      if (!placement.value) {
        middleware.push(autoPlacement()) // 如果用户没有指定 placement，则添加自动调整定位的中间件，根据元素大小和可见区域自动选择最佳位置
      }

      //计算悬浮元素的位置
      computePosition(hostRef.value, overlayRef.value, {
        middleware,
        placement: placement.value || 'bottom'
      }).then(({ x, y, middlewareData, placement }) => {
        const hostWidth = hostRef.value.offsetWidth
        const overlayWidth = overlayRef.value.offsetWidth
        const hostHeight = hostRef.value.offsetHeight
        const overlayHeight = overlayRef.value.offsetHeight

        // 计算使 overlayRef 居中的偏移量
        const offsetX = (hostWidth - overlayWidth) / 2
        const offsetY = (hostHeight - overlayHeight) / 2
        const side = placement.split('-')[0]
        Object.assign(overlayRef.value.style, {
          top:
            side == 'left'
              ? `${y - offsetY}px`
              : side == 'right'
              ? `${y + offsetY}px`
              : `${y}px`,
          left:
            side == 'top'
              ? `${x + offsetX}px`
              : side == 'bottom'
              ? `${x - offsetX}px`
              : `${x}px`
        })

        if (showArrow.value) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow!
          const overlayWidth = overlayRef.value.offsetWidth
          const overlayHeight = overlayRef.value.offsetHeight
          const arrowWidth = arrowRef.value.offsetWidth
          const arrowHeight = arrowRef.value.offsetHeight

          // 计算箭头的水平偏移量，使其居中
          const arrowOffsetX = (overlayWidth - arrowWidth) / 2
          const arrowOffsetY = (overlayHeight - arrowHeight) / 2

          const currentSide = placement.split('-')[0] // 获取当前所在边的方向, 例如top-end  截取top 则箭头应该是bottom
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }[currentSide] // 根据当前所在边计算对应的静态边

          const SIDE = ['top', 'right', 'bottom', 'left']

          const prevIndex = SIDE.indexOf(currentSide) - 1
          const nextSide = SIDE[prevIndex < 0 ? prevIndex + 4 : prevIndex] // 计算顺时针方向上的前一边

          // 每次计算结束，重新计算箭头定位样式
          Object.assign(arrowRef.value.style, {
            top:
              side == 'left'
                ? `${arrowY! - arrowOffsetY / 2}px`
                : side == 'right'
                ? `${arrowY! + arrowOffsetY / 2}px`
                : `${arrowY!}px`,
            left:
              side == 'top'
                ? `${arrowX! + arrowOffsetX / 2}px`
                : side == 'bottom'
                ? `${arrowX! - arrowOffsetX / 2}px`
                : `${arrowX!}px`,
            [staticSide!]: '-4px',
            [`border-${currentSide}-color`]: 'transparent',
            [`border-${nextSide}-color`]: 'transparent'
          })
        }
      })
    }

    // 创建mutationobserver监听宿主元素的状态变化
    const mutationObserver = new MutationObserver(() => updatePosition())

    watch(
      modelValue,
      newVal => {
        // 当前newVal为true，即overlay需要显示时，需要重新更新位置
        if (newVal) {
          nextTick(updatePosition)

          // 监听两个事件和宿主元素尺寸、定位变化
          hostRef.value &&
            //宿主元素，大小或者位置等等发生变化，attributes为true，表示将观察元素的所有属性变化。
            mutationObserver.observe(hostRef.value, { attributes: true })
          //窗口大小改变
          window.addEventListener('resize', updatePosition)
          //窗口滚动时
          window.addEventListener('scroll', updatePosition)
        } else {
          mutationObserver.disconnect()
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', updatePosition)
        }
      },
      {
        immediate: true
      }
    )

    onUnmounted(() => {
      mutationObserver.disconnect()
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    })

    return () => (
      <>
        {modelValue.value && (
          <div ref={overlayRef} class="s-base-popover" {...attrs}>
            {/* 弹窗内容 */}
            {slots.default?.()}

            {/* 箭头元素 */}
            {showArrow.value && (
              <div class="s-base-popover__arrow" ref={arrowRef}></div>
            )}
          </div>
        )}
      </>
    )
  }
})
