import { render } from '@testing-library/vue'
import Auto-complete from '../src/auto-complete'

describe('auto-complete test', () => {
  test('auto-complete init render', async () => {
    const { getByRole } = render(Auto-complete)
    getByRole('auto-complete')
  })
})
