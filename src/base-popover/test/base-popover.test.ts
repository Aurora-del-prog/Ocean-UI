import { render } from '@testing-library/vue'
import Base-popover from '../src/base-popover'

describe('base-popover test', () => {
  test('base-popover init render', async () => {
    const { getByRole } = render(Base-popover)
    getByRole('base-popover')
  })
})
