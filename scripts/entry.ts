// /scripts/entry.ts
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import TreePlugin, { Tree } from '../src/tree'
import PaginationPlugin, { Pagination } from '../src/pagination'
// import FormPlugin, { Form } from '../src/form'
// import InputPlugin, { Input } from '../src/input'
// import ModalPlugin, { Modal } from '../src/modal'
// import IconPlugin, { Icon } from '../src/icon'
// import TabPlugin, { Tabs, Tab } from '../src/tab'

const installs = [
  ButtonPlugin,
  TreePlugin,
  PaginationPlugin
  // FormPlugin,
  // InputPlugin,
  // ModalPlugin,
  // IconPlugin,
  // TabPlugin
]

//Tree, Pagination, Form, Input, Modal, Icon, Tabs, Tab
export { Button, Tree, Pagination }

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}
