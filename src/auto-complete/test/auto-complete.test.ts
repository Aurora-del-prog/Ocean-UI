import { render } from '@testing-library/vue'
import AutoComplete from '../src/auto-complete'

describe('auto-complete test', () => {
  test('auto-complete init render', async () => {
    const { getByRole } = render(AutoComplete)
    getByRole('auto-complete')
  })
})
