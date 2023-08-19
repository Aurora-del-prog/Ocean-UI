import { defineComponent, inject, toRefs } from 'vue'
import { FormItemContext } from '../../form/src/types/form-item-type'
import SIcon from '../../icon'
import { InputProps, inputProps } from './input-type'
import '../style/input.scss'

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    const {
      placeholder,
      size,
      modelValue,
      disabled,
      type,
      name,
      iconSize,
      ...restProps
    } = toRefs(props)

    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext

    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value // 获取输入框的值
      // 实现v-model的双向绑定，将输入框的值通过 emit 发送给父组件，触发更新父组件中的 modelValue 属性
      emit('update:modelValue', val)

      // 执行 formItem 中传入的 validate 方法，进行表单验证
      formItem?.validate()
    }
    return () => (
      <div class={`s-input__wrapper s-input  s-input_${size.value} `}>
        <input
          class={[
            's-input__input',
            {
              'custom-input-lg': size.value === 'lg',
              'custom-input-sm': size.value === 'sm',
              's-input__icon': name.value ? true : false
            }
          ]}
          value={modelValue.value}
          onInput={onInput}
          type={type.value}
          placeholder={placeholder.value}
          disabled={disabled.value}
          {...restProps}
        ></input>
        {name.value && (
          <s-icon
            name={name.value}
            class={'s-icon'}
            size={iconSize.value}
          ></s-icon>
        )}
      </div>
    )
  }
})
