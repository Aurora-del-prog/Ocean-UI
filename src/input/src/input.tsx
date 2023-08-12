import { defineComponent, inject } from 'vue'
import { FormItemContext } from '../../form/src/types/form-item-type'
import { InputProps, inputProps } from './input-type'
import './input.scss'

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext

    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      // 实现v-model的双向绑定
      emit('update:modelValue', val)
      //执行form表单传入的validate方法
      formItem.validate()
    }

    return () => (
      <div class="s-input__wrapper">
        <input
          class="s-input__input"
          value={props.modelValue}
          onInput={onInput}
          type={props.type}
        ></input>
      </div>
    )
  }
})
