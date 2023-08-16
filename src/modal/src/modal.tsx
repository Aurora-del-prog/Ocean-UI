import { defineComponent } from 'vue'
import { ModalProps, modalProps } from './modal-type'

export default defineComponent({
  name: 'SModal',
  props: modalProps,
  emits: [],
  setup(props: ModalProps, ctx) {
    return () => {
      return (<div class="s-modal"></div>)
    }
  }
})
