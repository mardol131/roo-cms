import { Block } from 'payload'

export const FormTextInputBlock: Block = {
  slug: 'formtextinput',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'placeholder', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
  ],
}

export const FormSelectOptionsBlock: Block = {
  slug: 'formselectoptions',
  fields: [
    { name: 'text', type: 'text', required: true },
    { name: 'value', type: 'text', required: true },
  ],
}

export const FormSelectInputBlock: Block = {
  slug: 'formselectinput',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'placeholder', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
    { name: 'options', type: 'blocks', blocks: [FormSelectOptionsBlock], required: true },
  ],
}

export const FormCheckboxInputBlock: Block = {
  slug: 'formcheckboxinput',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'value', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
  ],
}
