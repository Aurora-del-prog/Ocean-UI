import type { PropType, ExtractPropTypes } from 'vue'

export const modalProps = {} as const

export type ModalProps = ExtractPropTypes<typeof modalProps>
