import { Block } from 'payload'
import { headingField, overlayField } from '../global/fields'
import {
  FormCheckboxInputBlock,
  FormSelectInputBlock,
  FormTextInputBlock,
} from './FormInputsBlocks'

export const FormSectionBlock: Block = {
  slug: 'formsection',
  fields: [
    headingField,
    { name: 'text', type: 'text', required: true },
    { name: 'image', type: 'text' },
    {
      name: 'button',
      type: 'group',
      fields: [{ name: 'text', type: 'text', required: true }],
      required: true,
    },
    { name: 'webhook', type: 'text', required: true },
    {
      name: 'fields',
      type: 'blocks',
      blocks: [FormTextInputBlock, FormSelectInputBlock, FormCheckboxInputBlock],
      required: true,
    },
    overlayField,
  ],
}
