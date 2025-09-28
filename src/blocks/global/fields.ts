import { colorsAndGradients, textColor } from '@/design/colors'
import { textAlign } from '@/design/orientation'
import { headingLevels, landingHeading } from '@/design/text'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Field } from 'payload'

export const overlayField: Field = {
  name: 'overlay',
  type: 'group',
  fields: [
    { name: 'overlayColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
    { name: 'image', type: 'text' },
  ],
}

export const headingField: Field = {
  name: 'heading',
  type: 'group',
  fields: [
    { name: 'headingOne', type: 'text', required: true },
    { name: 'headingTwo', type: 'text' },
    { name: 'size', type: 'select', options: getOptionsFromObject(landingHeading) },
    {
      name: 'color',
      type: 'select',
      options: getOptionsFromObject(textColor),
    },
    {
      name: 'align',
      type: 'select',
      options: getOptionsFromObject(textAlign),
    },
    { name: 'level', type: 'select', options: getOptionsFromObject(headingLevels) },
  ],
  required: true,
}

export const columnField: Field = {
  name: 'column',
  type: 'group',
  fields: [
    { name: 'start', type: 'number', required: true },
    { name: 'end', type: 'number', required: true },
  ],
}

export const rowField: Field = {
  name: 'row',
  type: 'group',
  fields: [
    { name: 'start', type: 'number', required: true },
    { name: 'end', type: 'number', required: true },
  ],
}
