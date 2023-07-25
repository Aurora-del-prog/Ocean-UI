import { render } from '@testing-library/vue'
import Button from '../src/Button'

// 测试按钮组件是否能正常工作，不传任何参数
test('should work', () => {
  const { getByRole } = render(Button)

  getByRole('button')
})

// 测试默认插槽是否为 "按钮"
test('default slot should be 按钮', () => {
  const { getByText } = render(Button)
  getByText('按钮')
})

// 测试插槽是否正常工作
test('slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})

// 测试默认类型是否为 "secondary"
test('default type should be secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--secondary')).toBe(true)
})
